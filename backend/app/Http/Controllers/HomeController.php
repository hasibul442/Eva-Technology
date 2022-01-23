<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        if(Company::get()->count()==1){
            return view('dashboard');
        }
        else{
            return view('company_info.info-add');
        }

    }
}
