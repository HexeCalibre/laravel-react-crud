<?php

use App\Http\Controllers\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/crud/view', [UserController::class, 'view']);
Route::post('/crud/login', [UserController::class, 'login']);


// ITEM ROUTES
Route::get('/view', [ItemController::class, 'view']);
Route::get('/description/{id}', [ItemController::class, 'description']);
Route::post('/create', [ItemController::class, 'create']);
Route::patch('/edit/{id}', [ItemController::class, 'edit']);
Route::delete('/delete', [ItemController::class, 'delete']);
