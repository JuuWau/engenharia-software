<?php

namespace Tests\Unit;

use App\Models\DiaryEntry;
use App\Models\User;
use App\Services\DiaryService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DiaryServiceTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected DiaryService $service;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()
            ->create();

        $this->actingAs($this->user);

        $this->service = new DiaryService();
    }

    public function test_create_diary_entry(): void
    {
        $entry = $this->service->updateOrCreate([
            'title' => 'Meu dia',
            'content' => 'Hoje foi um ótimo dia',
            'entry_date' => '2026-06-15',
            'mood' => 'happy',
        ]);

        $this->assertInstanceOf(
            DiaryEntry::class,
            $entry
        );

        $this->assertDatabaseHas(
            'diary_entries',
            [
                'id' => $entry->id,
                'user_id' => $this->user->id,
                'title' => 'Meu dia',
                'content' => 'Hoje foi um ótimo dia',
                'mood' => 'happy',
            ]
        );

        $this->assertEquals(
            '2026-06-15',
            $entry->entry_date->format('Y-m-d')
        );
    }

    public function test_update_existing_diary_entry(): void
    {
        $entry = DiaryEntry::factory()
            ->create([
                'user_id' => $this->user->id,
                'title' => 'Título antigo',
                'content' => 'Conteúdo antigo',
                'entry_date' => '2026-06-15',
                'mood' => 'sad',
            ]);

        $updatedEntry = $this->service->updateOrCreate([
            'title' => 'Novo título',
            'content' => 'Novo conteúdo',
            'entry_date' => '2026-06-15',
            'mood' => 'happy',
        ]);

        $this->assertEquals(
            $entry->id,
            $updatedEntry->id
        );

        $this->assertDatabaseHas(
            'diary_entries',
            [
                'id' => $entry->id,
                'title' => 'Novo título',
                'content' => 'Novo conteúdo',
                'mood' => 'happy',
            ]
        );

        $this->assertDatabaseCount(
            'diary_entries',
            1
        );
    }

    public function test_create_diary_entry_without_mood(): void
    {
        $entry = $this->service->updateOrCreate([
            'title' => 'Meu dia',
            'content' => 'Hoje foi um ótimo dia',
            'entry_date' => '2026-06-15',
        ]);

        $this->assertDatabaseHas(
            'diary_entries',
            [
                'id' => $entry->id,
                'mood' => null,
            ]
        );
    }
}
