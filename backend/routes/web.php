<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');
Route::get('/dashboard', [App\Http\Controllers\HomeController::class, 'index'])->name('dashboard');

Route::get('/company','App\Http\Controllers\CompanyController@index')->name('company.info');
Route::post('/company-add','App\Http\Controllers\CompanyController@store')->name('company-add');
