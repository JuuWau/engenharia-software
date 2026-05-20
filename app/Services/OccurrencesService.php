<?php

namespace App\Services;

use App\Models\Occurrence;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OccurrencesService
{
    public function create(array $data): Occurrence
    {
        return DB::transaction(function () use ($data) {

            $occurrence = Occurrence::create([
                'title' => $data['title'],
                'description' => $data['description'],
                'occurred_at' => $data['occurred_at'],
                'severity' => $data['severity'],
            ]);

            if (!empty($data['images'])) {

                foreach ($data['images'] as $image) {

                    $path = $image->store(
                        'occurrences',
                        'public',
                    );

                    $occurrence->images()->create([
                        'path' => $path,
                    ]);
                }
            }

            return $occurrence;
        });
    }
}