<?php

namespace App\Http\Requests;

use App\Models\DiaryEntry;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateDiaryEntryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => [
                'nullable',
                'string',
                'max:255',
            ],

            'content' => [
                'nullable',
                'string',
            ],

            'entry_date' => [
                'required',
                'date',
            ],

            'mood' => [
                'nullable',
                Rule::in(DiaryEntry::MOODS),
            ],
        ];
    }
}
