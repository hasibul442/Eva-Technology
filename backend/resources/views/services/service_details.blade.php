@extends('layouts.master')
@section('title','ET || Services')
@section('content')

<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Services</a></li>
                    <li class="breadcrumb-item active">Details View</li>
                </ol>
            </div>
            <h4 class="page-title">Services</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div class="row">
    <div class="col-md-6">
        <div class="card">
            <div class="card-body ">
                <span class="h4">Service Name: </span><span class="h5">{{ $service->name }}</span><br><br>
                <span class="h4">Description: </span><span class="p">{!! $service->description !!}</span><br>
                <span class="h4">Status: </span><span class="p">
                    @if ($service->status == 1)
                        <span class="p-1 text-light bg-success">Active</span>
                    @else
                        <span class="p-1 bg-danger">Deactive</span>
                    @endif
                </span><br>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div>
            <div>
               <div class="text-center">
                    <img src="{{ asset('assets/images/services/'.$service->image) }}" class="img-fluid" style="height: 250px;width:250px" alt="">
               </div>
            </div>
        </div>
    </div>

    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tag Name</th>
                                <th>Text Color</th>
                                <th>Background Color</th>
                                <th>Combination</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @php
                                $i = 0;
                            @endphp
                            @foreach ($servicetag as $item)
                                <tr>
                                    <td>{{ ++$i }}</td>
                                    <td>{{ $item->tag_name }}</td>
                                    <td><input class="form-control border-0" type="color" id="example-color" value="{{ $item->tag_text_color }}" readonly></td>
                                    <td><input class="form-control border-0" type="color" id="example-color" value="{{ $item->tag_bg_color }}" readonly></td>
                                    <td><p class="p-1 text-center" style="color: {{ $item->tag_text_color }}; background: {{ $item->tag_bg_color }}">{{ $item->tag_name }}</p></td>
                                    <td><input name="status" class="status" id="status1" type="checkbox" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="small" data-onstyle="success" data-offstyle="danger" data-id="{{ $item->id }}" {{ $item->status == 1 ? 'checked' : '' }}></td>
                                    <td>
                                        <a class="btn btn-xs btn-outline-warning" href="javascript:void(0);" onclick="editBank({{ $item->id }})"><i class="mdi mdi-circle-edit-outline"></i></a>
                                        <a class="btn btn-xs btn-outline-danger deletebtn" href="javascript:void(0);"  data-id="{{ $item->id }}"><i class="mdi mdi-delete"></i></a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
</div>

<script>
    $('body').on('click', '.deletebtn', function() {
            var id = $(this).data("id");
            var token = $("meta[name='csrf-token']").attr("content");
            // console.log(id);
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
                }).then((result) => {
                if (result.value === true) {
                    var token = $("meta[name='csrf-token']").attr("content");
                    $.ajax({
                    type: "DELETE",
                    url: "/services/tag/delete/" + id,
                    data:{
                            "id": id,
                            "_token": token,
                            },
                    success: function(data) {
                        Swal.fire({
                            title:'Deleted!',
                            text:'Your file has been deleted.',
                            icon: 'success',
                            showConfirmButton: false,
                        });
                        location.reload();
                        console.log(data);
                    },
                    error: function(data) {
                        console.log('Error:', data);
                    }
                })
                }
            });
    });

    $(document).on('change', '#status1', function() {
        var id = $(this).attr('data-id');
        if (this.checked) {
            var tag_status = 1;
        } else {
            var tag_status = 0;
        }
        $.ajax({
            dataType: "json",
            url: '/services/tag/' + id + '/' + tag_status,
            method: 'get',
            success: function(result1) {
                Swal.fire({
                        position: "top-end",
                        type: "success",
                        title: "Your work has been saved",
                        showConfirmButton: !1,
                        timer: 1500,
                    });
            }
        });
    });
</script>

@endsection
