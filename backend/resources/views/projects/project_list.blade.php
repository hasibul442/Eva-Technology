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
                    <li class="breadcrumb-item active">Project List</li>
                </ol>
            </div>
            <h4 class="page-title">Projects</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div class="card">
    <div class="card-body">
        <h2 class="text-center"><u>Project List</u></h2>

        <table class="myTable table table-responsive-xl display nowrap">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Project Name</th>
                    <th>Company Name</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Work Order Amount</th>
                    <th>Received</th>
                    <th>Pending</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $i = 0;
                @endphp
                @foreach ($project as $item )
                    <tr>
                        <td>{{ ++$i }}</td>
                        <td>{{ $item->project_name}}</td>
                        <td>{{ $item->client_company_name}}</td>
                        <td>{{ $item->phone_no}}</td>
                        <td>{{ $item->email}}</td>
                        <td>{{ $item->work_order_price}}</td>
                        <td>{{ $item->received_amount}}</td>
                        <td>{{ ($item->work_order_price) - ($item->received_amount)}}</td>
                        <td>{{ $item->status}}</td>
                        <td>
                            <a class="btn btn-sm btn-outline-warning" href="javascript:void(0);" onclick="editBank({{ $item->id }})"><i class="mdi mdi-circle-edit-outline"></i></a>
                            <a class="btn btn-sm btn-outline-info" href="javascript:void(0);" data-id="{{ $item->id }}"><i class="mdi mdi-eye"></i></a>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
</div>

<script>
    $(document).ready( function () {
    $('.myTable').DataTable();
} );
</script>
@endsection
