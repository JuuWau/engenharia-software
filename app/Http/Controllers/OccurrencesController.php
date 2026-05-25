<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOccurrenceRequest;
use App\Http\Requests\UpdateOccurrenceRequest;
use App\Http\Resources\OccurrenceResource;
use App\Models\Occurrence;
use App\Services\OccurrencesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class OccurrencesController extends Controller
{
    public function __construct(
        protected OccurrencesService $occurrenceService,
    ) {}

    public function index(): Response
    {
        return Inertia::render('occurrences/OccurrencesIndex', ['occurrences' => $this->occurrenceService->index()]);
    }

    public function store(StoreOccurrenceRequest $request): JsonResponse 
    {
        try {
            $occurrence = $this->occurrenceService->create($request->validated());

            return response()->json([
                'message' =>
                'Ocorrência criada com sucesso.',

                'data' => new OccurrenceResource($occurrence),
            ], 201);

        } catch (Throwable $exception) {
            Log::error(
                'Erro ao criar ocorrência',
                [
                    'error' =>
                    $exception->getMessage(),
                ]
            );

            return response()->json([
                'message' =>
                'Erro ao criar ocorrência.',
            ], 500);
        }
    }

    public function update(UpdateOccurrenceRequest $request, Occurrence $occurrence): JsonResponse 
    {
        try {
            $occurrence = $this->occurrenceService->update($occurrence, $request->validated());

            return response()->json([
                'message' =>
                'Ocorrência atualizada com sucesso.',

                'data' => new OccurrenceResource($occurrence),
            ]);

        } catch (Throwable $exception) {
            Log::error(
                'Erro ao atualizar ocorrência',
                [
                    'occurrence_id' =>
                    $occurrence->id,

                    'error' =>
                    $exception->getMessage(),
                ]
            );

            return response()->json([
                'message' =>
                'Erro ao atualizar ocorrência.',
            ], 500);
        }
    }

    public function destroy(Occurrence $occurrence): JsonResponse 
    {
        try {
            $this->occurrenceService->delete($occurrence);

            return response()->json([
                'message' =>
                'Ocorrência excluída com sucesso.',
            ]);

        } catch (Throwable $exception) {
            Log::error(
                'Erro ao excluir ocorrência',
                [
                    'occurrence_id' =>
                    $occurrence->id,

                    'error' =>
                    $exception->getMessage(),
                ]
            );

            return response()->json([
                'message' =>
                'Erro ao excluir ocorrência.',
            ], 500);
        }
    }
}
