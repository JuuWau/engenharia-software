<?php

namespace App\Services;

use App\Http\Resources\DiaryEntryResource;
use App\Models\DiaryEntry;
use Illuminate\Support\Facades\DB;

class DiaryService
{
        public function index()
        {
                $entries = DiaryEntry::query()
                        ->where('user_id', auth()->id())
                        ->latest('entry_date')
                        ->get();

                return DiaryEntryResource::collection(
                        $entries
                );
        }

        public function updateOrCreate(array $data): DiaryEntry
        {
                return DB::transaction(
                        function () use ($data) {
                                $entry = DiaryEntry::query()
                                        ->where('user_id', auth()->id())
                                        ->whereDate(
                                                'entry_date',
                                                $data['entry_date']
                                        )
                                        ->first();

                                if ($entry) {
                                        $entry->update([
                                                'title' => $data['title'] ?? null,
                                                'content' => $data['content'] ?? null,
                                                'mood' => $data['mood'] ?? null,
                                        ]);

                                        return $entry->fresh();
                                }

                                return DiaryEntry::create([
                                        'user_id' => auth()->id(),
                                        'title' => $data['title'] ?? null,
                                        'content' => $data['content'],
                                        'entry_date' => $data['entry_date'],
                                        'mood' => $data['mood'] ?? null,
                                ]);
                        }
                );
        }
}
