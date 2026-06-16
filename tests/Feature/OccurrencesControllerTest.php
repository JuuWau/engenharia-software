<?php

namespace Tests\Feature;

use App\Models\Occurrence;
use App\Models\User;
use App\Services\OccurrencesService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use Tests\TestCase;

class OccurrencesControllerTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;
    /**
     * A basic feature test example.
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()
            ->create();

        $this->actingAs($this->user);
    }

    public function test_store_returns_success(): void
    {
        $occurrence = Occurrence::factory()
            ->make();

        $service = Mockery::mock(OccurrencesService::class);

        $service->shouldReceive('create')
            ->once()
            ->andReturn($occurrence);

        $this->app->instance(OccurrencesService::class, $service);

        $response = $this->postJson(
            '/occurrences',
            [
                'title' => 'Teste',
                'description' => 'Descrição válida com mais de 10 caracteres',
                'occurred_at' => now()
                    ->format('Y-m-d'),
                'severity' => 'high',
            ]
        );

        $response
            ->assertCreated()
            ->assertJson([
                'message' =>
                    'Ocorrência criada com sucesso.',
            ]);
    }

    public function test_store_returns_error(): void
    {
        $service = Mockery::mock(OccurrencesService::class);

        $service->shouldReceive('create')
            ->once()
            ->andThrow(
                new \Exception('Erro')
            );

        $this->app->instance(OccurrencesService::class, $service);

        $response = $this->postJson(
            '/occurrences',
            [
                'title' => 'Teste',
                'description' => 'Descrição válida com mais de 10 caracteres',
                'occurred_at' => now()
                    ->format('Y-m-d'),
                'severity' => 'high',
            ]
        );

        $response
            ->assertStatus(500)
            ->assertJson([
                'message' =>
                    'Erro ao criar ocorrência.',
            ]);
    }

    public function test_update_returns_success(): void
    {
        $occurrence = Occurrence::factory()
            ->create();

        $service = Mockery::mock(OccurrencesService::class);

        $service->shouldReceive('update')
            ->once()
            ->andReturn($occurrence);

        $this->app->instance(OccurrencesService::class, $service);

        $response = $this->putJson(
            "/occurrences/{$occurrence->id}",
            [
                'title' => 'Atualizado',
                'description' => 'Descrição válida com mais de 10 caracteres',
                'occurred_at' => now()
                    ->format('Y-m-d'),
                'severity' => 'medium',
            ]
        );

        $response
            ->assertOk()
            ->assertJson([
                'message' =>
                    'Ocorrência atualizada com sucesso.',
            ]);
    }

    public function test_update_returns_error(): void
    {
        $occurrence = Occurrence::factory()
            ->create();

        $service = Mockery::mock(OccurrencesService::class);

        $service->shouldReceive('update')
            ->once()
            ->andThrow(
                new \Exception('Erro')
            );

        $this->app->instance(OccurrencesService::class,$service);

        $response = $this->putJson(
            "/occurrences/{$occurrence->id}",
            [
                'title' => 'Atualizado',
                'description' => 'Descrição válida com mais de 10 caracteres',
                'occurred_at' => now()
                    ->format('Y-m-d'),
                'severity' => 'medium',
            ]
        );

        $response
            ->assertStatus(500)
            ->assertJson([
                'message' =>
                    'Erro ao atualizar ocorrência.',
            ]);
    }

    public function test_destroy_returns_success(): void
    {
        $occurrence = Occurrence::factory()
            ->create();

        $service = Mockery::mock(OccurrencesService::class);

        $service->shouldReceive('delete')
            ->once();

        $this->app->instance(OccurrencesService::class, $service);

        $response = $this->deleteJson("/occurrences/{$occurrence->id}");

        $response
            ->assertOk()
            ->assertJson([
                'message' =>
                    'Ocorrência excluída com sucesso.',
            ]);
    }

    public function test_destroy_returns_error(): void
    {
        $occurrence = Occurrence::factory()
            ->create();

        $service = Mockery::mock(OccurrencesService::class);

        $service->shouldReceive('delete')
            ->once()
            ->andThrow(
                new \Exception('Erro')
            );

        $this->app->instance(OccurrencesService::class, $service);

        $response = $this->deleteJson(
            "/occurrences/{$occurrence->id}"
        );

        $response
            ->assertStatus(500)
            ->assertJson([
                'message' =>
                    'Erro ao excluir ocorrência.',
            ]);
    }
}
