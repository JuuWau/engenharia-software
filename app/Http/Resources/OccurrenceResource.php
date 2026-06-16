<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OccurrenceResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'occurred_at' => $this->occurred_at,
            'severity' => $this->severity,

            'user' => [
                'id' => $this->user?->id,
                'name' => $this->user?->name,
            ],

            'images' =>
                OccurrenceImageResource::collection(
                    $this->whenLoaded('images')
                ),
        ];
    }
}
