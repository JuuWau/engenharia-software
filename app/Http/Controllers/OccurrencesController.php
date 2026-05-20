<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreOccurrenceRequest;
use App\Services\OccurrencesService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OccurrencesController extends Controller
{
    public function __construct(
        protected OccurrencesService $occurrenceService,
    ) {}

    public function index()
    {
        return Inertia::render('occurrences/OccurrencesIndex');
    }

    public function store(StoreOccurrenceRequest $request): JsonResponse {
        $occurrence = $this->occurrenceService->create($request->validated());

        return response()->json([
            'message' => 'Ocorrência criada com sucesso.',
            'data' => $occurrence,
        ]);
    }
}
