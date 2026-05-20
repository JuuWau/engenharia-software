<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Occurrence extends Model
{
    protected $fillable = [
        'title',
        'description',
        'occurred_at',
        'severity',
    ];

    public function images()
    {
        return $this->hasMany(OccurrenceImage::class);
    }
}
