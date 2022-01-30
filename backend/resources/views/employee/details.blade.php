@extends('layouts.master')
@section('title','ET || Employees')
@section('content')

<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Employees</a></li>
                    <li class="breadcrumb-item active">Employees Details</li>
                </ol>
            </div>
            <h4 class="page-title">Employees</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div>
    <div class="card">
        <div class="card-body emp_img_bg">
           <div class="text-center">
                <img src="{{ asset('assets/images/employees/'.$employee->image) }}" class="img-fluid rounded-circle" style="height: 250px;width:250px" alt="">
           </div>
        </div>
    </div>
</div>

<div class="row">




</div>
@endsection
