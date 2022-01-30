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
                <button class="float-right btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".new_tag">New Tag</button>
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
                                <tr id="servicetag{{ $item->id }}">
                                    <td>{{ ++$i }}</td>
                                    <td>{{ $item->tag_name }}</td>
                                    <td><input class="form-control border-0" type="color" id="example-color" value="{{ $item->tag_text_color }}" readonly></td>
                                    <td><input class="form-control border-0" type="color" id="example-color" value="{{ $item->tag_bg_color }}" readonly></td>
                                    <td><p class="p-1 text-center" style="color: {{ $item->tag_text_color }}; background: {{ $item->tag_bg_color }}">{{ $item->tag_name }}</p></td>
                                    <td><input name="status" class="status" id="status1" type="checkbox" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="small" data-onstyle="success" data-offstyle="danger" data-id="{{ $item->id }}" {{ $item->status == 1 ? 'checked' : '' }}></td>
                                    <td>
                                        <a href=".modal-demo2" class="btn btn-xs btn-outline-warning service-tag-edit" data-animation="fadein" data-plugin="custommodal"
                                            data-overlaySpeed="100"  onclick="editservicetag({{ $item->id }})"><i class="mdi mdi-circle-edit-outline"></i></a>
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

{{-- Data Add --}}
<div class="modal fade bs-example-modal-xl new_tag" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myExtraLargeModalLabel">Extra large modal</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form id="servicetagForm" enctype="multipart/form-data">
                {{-- <form id="servicetagForm" method="POST" enctype="multipart/form-data"> --}}
                    <div style="display: none">
                        <input type="text" value="{{ $service->id }}" class="service_id" name="service_id" id="service_id">
                    </div>
                    @csrf
                    <div class="form-row">
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
                                            <input type="text" class="form-control tag_name" id="tag_name" name="tag_name[]" required placeholder="Please Enter Technology Name">
                                        </td>
                                        <td>
                                            <input type="color" class="form-control tag_text_color" id="tag_text_color" name="tag_text_color[]"required placeholder="Please Enter Color Hex Code With #">
                                        </td>
                                        <td>
                                            <input type="color" class="form-control tag_bg_color" id="tag_bg_color" name="tag_bg_color[]"required placeholder="Please Enter Color Hex Code With #">
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

{{-- Data Update --}}
<div id="custom-modal" class="modal-demo modal-demo2">
    <button type="button" class="close" onclick="Custombox.modal.close();">
        <span>&times;</span><span class="sr-only">Close</span>
    </button>
    <h4 class="custom-modal-title">Update Service Tag</h4>
    <div class="custom-modal-text">
        <form class="forms-sample" id="servicetageditForm" enctype="multipart/form-data">
            @csrf

            {{-- <ul class="alert alert-warning d-none" id="save_errorList"></ul> --}}
            <input type="hidden" name="id" id="id1">

            <div class="form-group row">
                <label for="tag_name_update" class="col-sm-3 col-form-label text-light">Tag Name</label>
                <div class="col-sm-9">
                    <input type="text" class="form-control tag_name_update" id="tag_name_update" name="tag_name_update">
                </div>
            </div>
            <div class="form-group row">
                <label for="tag_text_color_update" class="col-sm-3 col-form-label text-light">Text Color</label>
                <div class="col-sm-9">
                    <input type="color" class="form-control tag_text_color_update" id="tag_text_color_update" name="tag_text_color_update">
                </div>
            </div>
            <div class="form-group row">
                <label for="tag_bg_color_update" class="col-sm-3 col-form-label text-light">Backgroun Color</label>
                <div class="col-sm-9">
                    <input type="color" class="form-control tag_bg_color_update" id="tag_bg_color_update" name="tag_bg_color_update">
                </div>
            </div>

            <div class="text-center pb-2">
                <button type="button" class="btn btn-secondary" onclick="Custombox.modal.close()";>Close</button>
                <input type="submit" class="btn btn-success" name="submit" id="submit" value="Submit" />
            </div>
        </form>
    </div>
</div>


<script type="text/javascript">
    $(document).ready(function() {
        var html = '<tr>\n' +
        '       <td><input type="text" class="form-control tag_name" id="tag_name" name="tag_name[]"required placeholder="Please Enter Technology Name"></td>'+
        '       <td><input type="color" class="form-control tag_text_color" id="tag_text_color" name="tag_text_color[]" required placeholder="Please Enter Color Hex Code With #"></td>'+
        '       <td><input type="color" class="form-control tag_bg_color" id="tag_bg_color" name="tag_bg_color[]"required placeholder="Please Enter Color Hex Code With #"></td>'+
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
    $('#servicetagForm').on('submit', function(e) {
            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var myformData = new FormData($('#servicetagForm')[0]);
            $.ajax({
                type: "post",
                url: "{{ route('services.tag.add') }}",
                data: myformData,
                cache: false,
                //enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    $("#servicetagForm").find('input').val('');
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


    function editservicetag(id){
        $.get("/service/tag/edit/"+id, function(servicetag){
            $('#id1').val(servicetag.id);
            $('#tag_name_update').val(servicetag.tag_name);
            $('#tag_text_color_update').val(servicetag.tag_text_color);
            $('#tag_bg_color_update').val(servicetag.tag_bg_color);
        });
    }
    $('#servicetageditForm').submit(function (e) {
        e.preventDefault();
        $('.modal-demo2').modal("toggle");
        $('.modal-demo2').modal("hide");
        // $('.modal-demo2').modal("dispose");
        Swal.fire({
                title: 'Do You Want Update?',
                text: "You won't be able to get previous data!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
                }).then((result) => {
                if (result.value === true) {
                    // var token = $("meta[name='csrf-token']").attr("content");
                    let id = $('#id1').val();
                    let tag_name_update = $('#tag_name_update').val();
                    let tag_text_color_update = $('#tag_text_color_update').val();
                    let tag_bg_color_update = $('#tag_bg_color_update').val();
                    let _token = $('input[name=_token]').val();

                    $.ajax({
                        type: "PUT",
                        url: "/service/tag/update",
                        data: {
                            id:id,
                            tag_name_update:tag_name_update,
                            tag_text_color_update:tag_text_color_update,
                            tag_bg_color_update:tag_bg_color_update,
                            _token:_token,
                        },
                        dataType: "json",
                        success: function (response) {
                            $('#servicetag'+response.id + 'td:nth-child(1)').text(response.tag_name_update);
                            $('#servicetag'+response.id + 'td:nth-child(2)').text(response.tag_text_color_update);
                            $('#servicetag'+response.id + 'td:nth-child(3)').text(response.tag_bg_color_update);
                            // $('.modal-demo2').modal("toggle");
                            // $('.modal-demo2').modal("hide");
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timerProgressBar: true,
                                timer: 1800
                            });
                            location.reload();
                            $('#servicetageditForm')[0].reset();
                        },
                        error: function(data) {
                            console.log('Error:', data);
                        }
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
