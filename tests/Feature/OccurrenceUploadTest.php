<?php

namespace Tests\Feature;

use App\Models\Occurrence;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class OccurrenceUploadTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_store_uploads_images(): void
    {
        Storage::fake('s3');

        $user = User::factory()->create();

        $this->actingAs($user);

        $file = UploadedFile::fake()
            ->image('occurrence.jpg');

        $response = $this->postJson(
            '/occurrences',
            [
                'title' => 'Teste upload',
                'description' => 'Descrição válida com mais de 10 caracteres',
                'occurred_at' => now()->format('Y-m-d'),
                'severity' => 'high',
                'images' => [$file],
            ]
        );

        $response->assertCreated();

        $occurrence = Occurrence::first();

        $this->assertNotNull($occurrence);

        $this->assertCount(
            1,
            $occurrence->images
        );

        $image = $occurrence
            ->images
            ->first();

        Storage::disk('s3')
            ->assertExists($image->path);
    }

    public function test_update_uploads_new_images(): void
    {
        Storage::fake('s3');

        $user = User::factory()->create();

        $this->actingAs($user);

        $occurrence = Occurrence::factory()
            ->create([
                'user_id' => $user->id,
            ]);

        $file = UploadedFile::fake()
            ->image('new-image.jpg');

        $response = $this->putJson(
            "/occurrences/{$occurrence->id}",
            [
                'title' => 'Atualizado',
                'description' =>'Descrição válida atualizada',
                'occurred_at' => now()->format('Y-m-d'),
                'severity' => 'medium',
                'existing_images' => [],
                'images' => [$file],
            ]
        );

        $response->assertOk();

        $occurrence->refresh();

        $this->assertCount(
            1,
            $occurrence->images
        );

        $image = $occurrence
            ->images
            ->first();

        Storage::disk('s3')
            ->assertExists($image->path);
    }

    public function test_destroy_removes_uploaded_images(): void
    {
        Storage::fake('s3');

        $user = User::factory()->create();

        $this->actingAs($user);

        $occurrence = Occurrence::factory()
            ->create([
                'user_id' => $user->id,
            ]);

        $file = UploadedFile::fake()
            ->image('delete-test.jpg');

        $path = Storage::disk('s3')
            ->put(
                'occurrences',
                $file
            );

        $image = $occurrence
            ->images()
            ->create([
                'path' => $path,
                'original_name' => 'delete-test.jpg',
            ]);

        Storage::disk('s3')
            ->assertExists($path);

        $response = $this->deleteJson(
            "/occurrences/{$occurrence->id}"
        );

        $response->assertOk();

        Storage::disk('s3')
            ->assertMissing($path);

        $this->assertDatabaseMissing(
            'occurrence_images',
            [
                'id' => $image->id,
            ]
        );
    }
}
