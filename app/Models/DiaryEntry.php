<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class DiaryEntry extends Model
{
    use HasFactory;

    use SoftDeletes;

    public const MOOD_HAPPY = 'happy';
    public const MOOD_SAD = 'sad';
    public const MOOD_ANGRY = 'angry';
    public const MOOD_FEAR = 'fear';
    public const MOOD_ANXIOUS = 'anxious';
    public const MOOD_NEUTRAL = 'neutral';

    public const MOODS = [
        self::MOOD_HAPPY,
        self::MOOD_SAD,
        self::MOOD_ANGRY,
        self::MOOD_FEAR,
        self::MOOD_ANXIOUS,
        self::MOOD_NEUTRAL,
    ];

    protected $fillable = [
        'user_id',
        'title',
        'content',
        'entry_date',
        'mood',
    ];

    protected $casts = [
        'entry_date' => 'date',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}