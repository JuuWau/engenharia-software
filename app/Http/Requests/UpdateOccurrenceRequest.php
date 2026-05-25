<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateOccurrenceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
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
                'required',
                'string',
                'max:255',
            ],
            'description' => [
                'required',
                'string',
            ],
            'occurred_at' => [
                'required',
                'date',
            ],
            'severity' => [
                'required',
                'in:low,medium,high',
            ],
            'images' => [
                'nullable',
                'array',
                'max:10',
            ],
            'images.*' => [
                'image',
                'max:5120',
            ],
            'existing_images' => [
                'nullable',
                'array',
            ],
            'existing_images.*' => [
                'integer',
                'exists:occurrence_images,id',
            ],
        ];
    }
}
