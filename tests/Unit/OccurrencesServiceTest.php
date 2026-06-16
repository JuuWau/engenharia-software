<?php

namespace Tests\Unit;

use App\Models\Occurrence;
use App\Models\User;
use App\Services\OccurrencesService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class OccurrencesServiceTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected OccurrencesService $service;

    protected function setUp(): void
    {
        parent::setUp();

        Storage::fake('s3');

        $this->user = User::factory()
            ->create();

        $this->actingAs($this->user);

        $this->service = new OccurrencesService();
    }

    public function test_create_occurrence(): void
    {
        $image = UploadedFile::fake()
            ->image('test.jpg');

        $occurrence = $this->service->create([
            'title' => 'Teste',
            'description' => 'Descrição válida',
            'occurred_at' => now()
                ->format('Y-m-d'),
            'severity' => 'high',
            'images' => [$image],
        ]);

        $this->assertInstanceOf(
            Occurrence::class,
            $occurrence
        );

        $this->assertDatabaseHas(
            'occurrences',
            [
                'id' => $occurrence->id,
                'title' => 'Teste',
                'severity' => 'high',
                'user_id' => $this->user->id,
            ]
        );

        $this->assertDatabaseCount(
            'occurrence_images',
            1
        );

        $this->assertCount(
            1,
            $occurrence->images
        );

        Storage::disk('s3')
            ->assertExists(
                $occurrence->images
                    ->first()
                    ->path
            );
    }

    public function test_update_occurrence(): void
    {
        $oldImage = UploadedFile::fake()
            ->image('old.jpg');

        $occurrence = $this->service->create([
            'title' => 'Original',
            'description' => 'Descrição original',
            'occurred_at' => now()
                ->format('Y-m-d'),
            'severity' => 'low',
            'images' => [$oldImage],
        ]);

        $existingImage =
            $occurrence->images->first();

        $newImage = UploadedFile::fake()
            ->image('new.jpg');

        $updatedOccurrence =
            $this->service->update(
                $occurrence,
                [
                    'title' => 'Atualizado',
                    'description' =>
                        'Descrição atualizada',
                    'occurred_at' => now()
                        ->format('Y-m-d'),
                    'severity' => 'high',

                    'existing_images' => [
                        $existingImage->id,
                    ],

                    'images' => [$newImage],
                ]
            );

        $this->assertDatabaseHas(
            'occurrences',
            [
                'id' => $occurrence->id,
                'title' => 'Atualizado',
                'severity' => 'high',
            ]
        );

        $this->assertCount(
            2,
            $updatedOccurrence->images
        );
    }

    public function test_update_removes_old_images(): void
    {
        $image = UploadedFile::fake()
            ->image('old.jpg');

        $occurrence = $this->service->create([
            'title' => 'Teste',
            'description' => 'Descrição válida',
            'occurred_at' => now()
                ->format('Y-m-d'),
            'severity' => 'medium',
            'images' => [$image],
        ]);

        $oldImage =
            $occurrence->images->first();

        $oldPath = $oldImage->path;

        $this->service->update(
            $occurrence,
            [
                'title' => 'Atualizado',
                'description' =>
                    'Descrição atualizada',
                'occurred_at' => now()
                    ->format('Y-m-d'),
                'severity' => 'high',

                'existing_images' => [],

                'images' => [],
            ]
        );

        $this->assertDatabaseMissing(
            'occurrence_images',
            [
                'id' => $oldImage->id,
            ]
        );

        Storage::disk('s3')
            ->assertMissing($oldPath);
    }

    public function test_delete_occurrence(): void
    {
        $image = UploadedFile::fake()
            ->image('delete.jpg');

        $occurrence = $this->service->create([
            'title' => 'Teste',
            'description' => 'Descrição válida',
            'occurred_at' => now()
                ->format('Y-m-d'),
            'severity' => 'medium',
            'images' => [$image],
        ]);

        $imagePath =
            $occurrence->images
                ->first()
                ->path;

        $this->service->delete(
            $occurrence
        );

        $this->assertDatabaseMissing(
            'occurrences',
            [
                'id' => $occurrence->id,
            ]
        );

        $this->assertDatabaseCount(
            'occurrence_images',
            0
        );

        Storage::disk('s3')
            ->assertMissing($imagePath);
    }
}