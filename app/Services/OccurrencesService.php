<?php

namespace App\Services;

use App\Http\Resources\OccurrenceResource;
use App\Models\Occurrence;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class OccurrencesService
{
    public function index()
    {
        $occurrences = Occurrence::query()
            ->where('user_id', auth()->id())
            ->with([
                'images',
                'user',
            ])
            ->latest()
            ->get();

        return OccurrenceResource::collection(
            $occurrences
        );
    }

    public function create(array $data): Occurrence
    {
        return DB::transaction(function () use ($data) {

            $occurrence = Occurrence::create([
                'user_id' => auth()->id(),
                'title' => $data['title'],
                'description' => $data['description'],
                'occurred_at' => $data['occurred_at'],
                'severity' => $data['severity'],
            ]);

            if (!empty($data['images'])) {

                foreach ($data['images'] as $image) {

                    $path = Storage::disk('s3')->put(
                        'occurrences',
                        $image,
                    );

                    $occurrence->images()->create([
                        'path' => $path,
                        'original_name' => $image->getClientOriginalName(),
                    ]);
                }
            }
            
            return $occurrence->load(['images', 'user']);
        });
    }

    public function update(Occurrence $occurrence, array $data): Occurrence
    {
        return DB::transaction(
            function () use ($occurrence, $data) {
                $occurrence->update([
                    'title' =>
                    $data['title'],
                    'description' =>
                    $data['description'],
                    'occurred_at' =>
                    $data['occurred_at'],
                    'severity' =>
                    $data['severity'],
                ]);

                $existingImages = $data['existing_images'] ?? [];

                $imagesToDelete = $occurrence
                    ->images()
                    ->whereNotIn(
                        'id',
                        $existingImages
                    )
                    ->get();

                foreach ($imagesToDelete as $image) {
                    Storage::disk('s3')->delete(
                        $image->path
                    );

                    $image->delete();
                }

                if (!empty($data['images'])) {
                    foreach ($data['images'] as $image) {
                        $path =
                            Storage::disk('s3')
                            ->put(
                                'occurrences',
                                $image,
                            );

                        $occurrence
                            ->images()
                            ->create([
                                'path' => $path,
                                'original_name' =>
                                $image
                                    ->getClientOriginalName(),
                            ]);
                    }
                }

                return $occurrence->load(['images', 'user',]);
            }
        );
    }

    public function delete(Occurrence $occurrence): void
    {
        DB::transaction(
            function () use ($occurrence) {
                foreach ($occurrence->images as $image) {
                    Storage::disk('s3')
                        ->delete(
                            $image->path
                        );

                    $image->delete();
                }

                $occurrence->delete();
            }
        );
    }
}
