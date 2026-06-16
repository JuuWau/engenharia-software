<?php

namespace Database\Factories;

use App\Models\DiaryEntry;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<DiaryEntry>
 */
class DiaryEntryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = DiaryEntry::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => fake()->sentence(),
            'content' => fake()->paragraph(),
            'entry_date' => fake()->date(),
            'mood' => 'neutral',
        ];
    }
}
