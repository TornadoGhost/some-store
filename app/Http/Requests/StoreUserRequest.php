<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:5|max:15|regex:/^[a-zA-Z]+$/u',
            'surname' => 'required|string|min:5|max:15|regex:/^[a-zA-Z]+$/u',
            'phone_number' => 'required|regex:/(+38)[0-9]{10}/',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:5|max:50',
        ];
    }
}
