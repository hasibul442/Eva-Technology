@extends('layouts.master')
@section('title','ET || Projects')
@section('content')

<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Project</a></li>
                    <li class="breadcrumb-item active">Project Details</li>
                </ol>
            </div>
            <h4 class="page-title">Projects</h4>
        </div>
    </div>
</div>
<!-- end page title -->
<h2 class="text-center">Project Name: {{ $project->project_name }}</h2><br><br>
<div class="row">

    <div class="col-xl-4">
        <div class="card">
            <div class="card-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td><span class="h4">Client Name: </span></td>
                            <td><span class="h5 text-success">{{ $project->client_name }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Client Company Name: </span></td>
                            <td><span class="h5 text-success">{{ $project->client_company_name }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Phone No: </span></td>
                            <td><span class="h5 text-success">{{ $project->phone_no }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Email: </span></td>
                            <td><span class="h5 text-success">{{ $project->email }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Address: </span></td>
                            <td><span class="h5 text-success">{{ $project->location }}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="col-xl-4">
        <div class="card">
            <div class="card-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td><span class="h4">Start Time: </span></td>
                            <td><span class="h5 text-success">{{ $project->start_date }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Duration: </span></td>
                            <td><span class="h5 text-success">{{ $project->duration }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Email: </span></td>
                            <td><span class="h5 text-success">{{ $project->email }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Status: </span></td>
                            <td><span class="h5 text-success">{{ $project->status }}</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="col-xl-4">
        <div class="card">
            <div class="card-body">
               <div class="text-center">
                    <img src="{{ asset('assets/images/project/'.$project->company_logo) }}" class="img-fluid" style="height: 250px;width:250px" alt="">
               </div>
            </div>
        </div>
    </div>

    <div class="col-xl-6">
        <div class="card">
            <div class="card-body">
               <h2 class="text-center"><u>Description</u></h2>
               <br>
               <p>{!! $project->description !!}</p>
            </div>
        </div>
    </div>

    <div class="col-xl-6">
        <div class="card">
            <div class="card-body">
                <table class="table">
                    <tbody>
                        <tr>
                            <td><span class="h4">Work Order Price: </span></td>
                            <td><span class="h5 text-success">{{ $project->work_order_price }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Recived Amount: </span></td>
                            <td><span class="h5 text-success">{{ $project->received_amount }}</span></td>
                        </tr>
                        <tr>
                            <td><span class="h4">Pending: </span></td>
                            <td><span class="h5 text-success">{{ $project->work_order_price -  $project->received_amount}}</span></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>





@endsection
