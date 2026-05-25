<?php

use App\Http\Controllers\OccurrencesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('occurrences')->name('occurrences.')->group(function() {
    Route::get('/', [OccurrencesController::class, 'index'])->name('occurrences.index');
    Route::post('/', [OccurrencesController::class, 'store'])->name('occurrences.store');
    Route::put('/{occurrence}', [OccurrencesController::class, 'update'])->name('occurrences.update');
    Route::delete('/{occurrence}', [OccurrencesController::class, 'destroy'])->name('occurrences.destroy');
});

require __DIR__.'/settings.php';