<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

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
            'name' => 'required|string|min:2|max:15|regex:/^[a-zA-Z]+$/u',
            'surname' => 'required|string|min:2|max:15|regex:/^[a-zA-Z]+$/u',
            'phone' => 'required|regex:/^\+38\d{10}$/',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:5|max:50',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $response = response()->json([
            'message' => 'Invalid data send',
            'details' => $validator->errors()->messages(),
        ], 422);

        throw new HttpResponseException($response);
    }

    public function messages(): array
    {
        return [
            'phone.required' => 'The phone number has wrong format',
        ];
    }
}
