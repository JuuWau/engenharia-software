<?php

use App\Http\Controllers\OccurrencesController;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Features;

Route::inertia('/', 'Welcome', [
    'canRegister' => Features::enabled(Features::registration()),
])->name('home');

Route::middleware(['auth', 'verified'])->prefix('occurrences')->name('occurrences.')->group(function() {
    Route::get('/', [OccurrencesController::class, 'index'])->name('index');
    Route::post('/', [OccurrencesController::class, 'store'])->name('store');
});

require __DIR__.'/settings.php';