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
                    <li class="breadcrumb-item active">Services List</li>
                </ol>
            </div>
            <h4 class="page-title">Services</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div class="card">
    <div class="card-body">
        <button class="float-right btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".service">New Service</button>
        <h1 class="text-center pb-2"><u>Services</u></h1>

        <div>
            <table class="table display service_table table-responsive-xl">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Name</th>
                        <th>Image</th>
                        <th>Description</th>
                        <th>Tag</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $i=0;
                    @endphp
                    @foreach ( $service as $item )
                        <tr>
                            <td>{{ ++$i }}</td>
                            <td>{{ $item->name }}</td>
                            <td><img src="{{ asset('/assets/images/services/'.$item->image) }}" alt="" style="height: 50px; width:50px"></td>
                            <td>{!! $item->description !!}</td>
                            <td>
                                @foreach (App\Models\Servicetech::where('service_id',$item->id)->where('status',1)->get() as $item_1)
                                    <span class="badge" style="color: {{ $item_1->tag_text_color }}; background:{{ $item_1->tag_bg_color }}">{{ $item_1->tag_name }}</span>
                                @endforeach
                            </td>
                            <td>
                                <input name="status" class="status" id="status1" type="checkbox" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="small" data-onstyle="success" data-offstyle="danger" data-id="{{ $item->id }}" {{ $item->status == 1 ? 'checked' : '' }}>
                            </td>
                            <td style="white-space: nowrap">
                                <a class="btn btn-xs btn-outline-warning" href="javascript:void(0);" onclick="editBank({{ $item->id }})"><i class="mdi mdi-circle-edit-outline"></i></a>
                                <a class="btn btn-xs btn-outline-info" href="{{ route('service.details', $item->id) }}"><i class="mdi mdi-eye"></i></a>
                                <a class="btn btn-xs btn-outline-danger deletebtn" href="javascript:void(0);" data-id="{{ $item->id }}"><i class="mdi mdi-delete"></i></a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

<div class="modal fade bs-example-modal-xl service" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myExtraLargeModalLabel">Extra large modal</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form id="serviceForm" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name" class="col-form-label">Service Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="name" id="name" required placeholder="Web Application Development">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="name" class="col-form-label">Image <span class="text-danger">*</span></label>
                            <input type="file" class="form-control border-0" name="image" id="image" required>
                        </div>

                        <div class="form-group col-md-12">
                            <label for="description" class="col-form-label">Description</label>
                            <textarea type="text" class="form-control summernote-editor" id="description" name="description"></textarea>
                        </div>

                        <div class="form-group col-md-12">
                            <table class="table  nowrap table-borderless " id="table_field">
                                <thead>
                                    <tr>
                                        <th> Tag Name </th>
                                        <th> Text Color </th>
                                        <th> Background Color </th>
                                        <th> Action </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input type="text" class="form-control" id="tag_name" name="tag_name[]" required placeholder="Please Enter Technology Name">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="tag_text_color" name="tag_text_color[]"required placeholder="Please Enter Color Hex Code With #">
                                        </td>
                                        <td>
                                            <input type="text" class="form-control" id="tag_bg_color" name="tag_bg_color[]"required placeholder="Please Enter Color Hex Code With #">
                                        </td>

                                        <td>
                                            <button class="btn btn-sm" style="background-color: #3a86ff;color:#FFF"
                                                    id="add">
                                                <i class="fas fa-plus"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>



                   <div class="text-right">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-info">Submit</button>
                   </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
    $(document).ready(function() {
        var html = '<tr>\n' +
        '       <td><input type="text" class="form-control" id="tag_name" name="tag_name[]"required placeholder="Please Enter Technology Name"></td>'+
        '       <td><input type="text" class="form-control" id="tag_text_color" name="tag_text_color[]" required placeholder="Please Enter Color Hex Code With #"></td>'+
        '       <td><input type="text" class="form-control" id="tag_bg_color" name="tag_bg_color[]"required placeholder="Please Enter Color Hex Code With #"></td>'+
        '       <td><button name="remove" class="btn btn-danger btn-sm" id="remove"><i class="fas fa-eraser"></i> </button></td>'+
        '    </tr>';
        var x = 1;
        $("#add").click(function() {
            $("#table_field").append(html);
        });
        $("#table_field").on('click', '#remove', function() {
            $(this).closest('tr').remove();
        });
    });
</script>

<script>
    $(document).ready( function () {
        $('.service_table').DataTable();
    });

    $('#serviceForm').on('submit', function(e) {
            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var myformData = new FormData($('#serviceForm')[0]);
            $.ajax({
                type: "post",
                url: "{{ route('services.add') }}",
                data: myformData,
                cache: false,
                //enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    $("#serviceForm").find('input').val('');
                    location.reload();
                    Swal.fire({
                        position: "top-end",
                        type: "success",
                        title: "Your work has been saved",
                        showConfirmButton: !1,
                        timer: 1500,
                    });
                },
                error: function(error) {
                    console.log(error);
                    Swal.fire({
                        position: "top-end",
                        type: "warning",
                        title: "Your work has been saved",
                        showConfirmButton: !1,
                        timer: 1500,
                    });
                }
            });
    });

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
                    url: "/services/delete/" + id,
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
            var emp_status = 1;
        } else {
            var emp_status = 0;
        }
        $.ajax({
            dataType: "json",
            url: '/services/' + id + '/' + emp_status,
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
