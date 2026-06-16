<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class OccurrenceImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /** @var Cloud $disk */
        $disk = Storage::disk('s3');

        return [
            'id' => $this->id,

            'path' => $this->path,

            'url' => $disk->temporaryUrl(
                $this->path,
                now()->addMinutes(30)
            ),

            'original_name' =>
                $this->original_name,
        ];
    }
}
