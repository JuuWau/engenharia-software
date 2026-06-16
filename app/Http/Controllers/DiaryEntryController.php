<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDiaryEntryRequest;
use App\Http\Requests\UpdateDiaryEntryRequest;
use App\Http\Resources\DiaryEntryResource;
use App\Models\DiaryEntry;
use App\Services\DiaryService;
use AWS\CRT\Log;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Throwable;

class DiaryEntryController extends Controller
{
    public function __construct(
        protected DiaryService $diaryService,
    ) {}

    public function index(): Response
    {
        return Inertia::render(
            'diary/DiaryIndex',
            [
                'entries' => $this->diaryService->index(),
            ]
        );
    }

    public function store(StoreDiaryEntryRequest $request): JsonResponse
    {
        try {
            $entry = $this->diaryService->updateOrCreate(
                $request->validated()
            );

            return response()->json([
                'message' =>
                'Seu registro foi salvo com sucesso.',

                'data' =>
                new DiaryEntryResource($entry),
            ], 201);
        } catch (Throwable $exception) {
            Log::error(
                'Erro ao salvar registro do diário',
                [
                    'error' =>
                    $exception->getMessage(),
                ]
            );

            return response()->json([
                'message' =>
                'Erro ao salvar registro do diário.',
            ], 500);
        }
    }
}
