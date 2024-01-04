<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function store(StoreUserRequest $request) {
        return response()->json(['dataXYI' => $request->all()], 201);
    }
}
