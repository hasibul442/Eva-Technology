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

Route::get('/projects','App\Http\Controllers\ProjectController@index')->name('projects.list');
Route::get('/new/projects','App\Http\Controllers\ProjectController@create')->name('projects.new');
Route::get('/running/projects','App\Http\Controllers\ProjectController@running_project')->name('projects.running');
Route::post('/new/projects','App\Http\Controllers\ProjectController@store')->name('projects.add');

Route::get('/services','App\Http\Controllers\ServiceController@index')->name('service');
Route::post('/services/add','App\Http\Controllers\ServiceController@store')->name('services.add');
Route::get('/services/details/{id}','App\Http\Controllers\ServiceController@show')->name('service.details');
Route::delete('/services/delete/{id}','App\Http\Controllers\ServiceController@destroy');
Route::delete('/services/tag/delete/{id}','App\Http\Controllers\ServiceController@service_tag_destroy');
Route::get('/services/{id}/{status}','App\Http\Controllers\ServiceController@service_status');
Route::get('/services/tag/{id}/{status}','App\Http\Controllers\ServiceController@service_tag_status');

Route::get('/employees','App\Http\Controllers\EmployeeController@index')->name('employee');
Route::post('/new/employees','App\Http\Controllers\EmployeeController@store')->name('employees.add');
Route::get('/employees/{id}/{status}','App\Http\Controllers\EmployeeController@employeestatus');
Route::get('/employees/team/{id}/{is_team_member}','App\Http\Controllers\EmployeeController@is_team_member');

