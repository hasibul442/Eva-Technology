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
                    <li class="breadcrumb-item active">New Project</li>
                </ol>
            </div>
            <h4 class="page-title">Projects</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div class="card">
    <div class="card-body">
                                <!-- Form row -->
        <div class="row">
            <div class="col-md-12">
                <div class="card-box">
                    <h1 class="text-center pb-2"><u>New Project</u></h1>
                    <form id="projectForm" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="client_name" class="col-form-label">Client Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="client_name" id="client_name" required placeholder="Mr. Alex">
                            </div>

                            <div class="col-md-6"></div>

                            <div class="form-group col-md-6">
                                <label for="client_company_name" class="col-form-label">Client Company Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="client_company_name" id="client_company_name" required placeholder="XYZ Ltd.">
                            </div>

                            <div class="col-md-6"></div>

                            <div class="form-group col-md-6">
                                <label for="phone_no" class="col-form-label">Phone No <span class="text-danger">*</span></label>
                                <input type="phone" class="form-control" name="phone_no" id="phone_no" required placeholder="+8801XXXXXXXXX">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="email" class="col-form-label">Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" name="email" id="email" required placeholder="info@xyz.com">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="location" class="col-form-label">Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="location" name="location" placeholder="1234 Main St">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="logo" class="col-form-label">Logo <small class="text-danger">(Optional)</small></label>
                                <input type="file" class="form-control" id="logo" name="logo">
                            </div>

                            <div class="col-md-6"></div>

                            <div class="form-group col-md-6">
                                <label for="project_name" class="col-form-label">Project Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="project_name" name="project_name" required placeholder="HR Management System">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="work_order_price" class="col-form-label">Work Order Price <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="work_order_price" name="work_order_price" required placeholder="75,000.00">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="start_date" class="col-form-label">Project Start Date <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" id="start_date" name="start_date" required>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="duration" class="col-form-label">Duration <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="duration" name="duration" placeholder="90 days" required>
                            </div>

                            <div class="form-group col-md-12">
                                <label for="description" class="col-form-label">Description</label>
                                <textarea type="text" class="form-control summernote-editor" id="description" name="description"></textarea>
                            </div>
                        </div>



                       <div class="text-right">
                            <button type="submit" class="btn btn-primary">Back</button>
                            <button type="submit" class="btn btn-info">Submit</button>
                       </div>
                    </form>
                </div> <!-- end card-box -->
            </div> <!-- end col -->
        </div>
                                <!-- end row -->
    </div>
</div>

<script>
    $('#projectForm').on('submit', function(e) {
            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var myformData = new FormData($('#projectForm')[0]);
            $.ajax({
                type: "post",
                url: "{{ route('projects.add') }}",
                data: myformData,
                cache: false,
                //enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    $("#projectForm").find('input').val('');
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
</script>
@endsection
