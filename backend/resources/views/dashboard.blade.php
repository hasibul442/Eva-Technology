@extends('layouts.master')
@section('title','ET || Dashboard')
@section('content')
<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    {{-- <li class="breadcrumb-item"><a href="javascript: void(0);">Greeva</a></li> --}}
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
            </div>
            <h4 class="page-title">Dashboard</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div class="row">

    <div class="col-sm-3">
        <div class="card ">
            <div class="card-body card1">
                <h4 class="text-light text-center">Total Project</h4>
                <h2 class="text-light text-center">{{ App\Models\Project::get()->count() }}</h2>
            </div>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="card">
            <div class="card-body card2">
                <h4 class="text-light text-center">Running Project</h4>
                <h2 class="text-light text-center">{{ App\Models\Project::where('status','Under Process')->get()->count() }}</h2>
            </div>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="card">
            <div class="card-body card3">
                <h4 class="text-light text-center">Complete Project</h4>
                <h2 class="text-light text-center">{{ App\Models\Project::where('status','Complete')->get()->count() }}</h2>
            </div>
        </div>
    </div>

    <div class="col-sm-3">
        <div class="card">
            <div class="card-body card4">
                <h4 class="text-light text-center">Total Client</h4>
                <h2 class="text-light text-center">{{ App\Models\Project::select('client_company_name')->groupBy('client_company_name')->get()->count() }}</h2>
            </div>
        </div>
    </div>

    <div class="col-sm-4">
        <div class="card">
            <div class="card-body card5">
                <h4 class="text-center">Employee</h4>
                <h2 class="text-center">{{ App\Models\Employee::get()->count() }}</h2>
            </div>
        </div>
    </div>

    <div class="col-sm-4"></div>
    <div class="col-sm-4"></div>

    <div class="col-sm-4">
        <div class="card">
            <div class="card-body card6">
                <h4 class="text-center">Account Recivable</h4>
                <h2 class="text-center">5000000</h2>
            </div>
        </div>
    </div>

    <div class="col-sm-4">
        <div class="card">
            <div class="card-body card6">
                <h4 class="text-center">Account Payable</h4>
                <h2 class="text-center">5000000</h2>
            </div>
        </div>
    </div>

</div>
<!-- end row -->


@endsection
