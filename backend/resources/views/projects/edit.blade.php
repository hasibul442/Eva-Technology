@extends('layouts.master')
@section('title','ET || Projects')
@section('content')

<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Project</a></li>
                    <li class="breadcrumb-item active">Project Details Update</li>
                </ol>
            </div>
            <h4 class="page-title">Projects</h4>
        </div>
    </div>
</div>


<div class="card">
    <div class="card-body">
                                <!-- Form row -->
        <div class="row">
            <div class="col-md-12">
                <div class="card-box">
                    <h1 class="text-center pb-2"><u>Project Details Update</u></h1>
                    <form id="projecteditForm" action="{{ url('/project/update/'.$project->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="client_name" class="col-form-label">Client Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="client_name" id="client_name" value="{{ $project->client_name }}">
                            </div>

                            <div class="col-md-6"></div>

                            <div class="form-group col-md-6">
                                <label for="client_company_name" class="col-form-label">Client Company Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" name="client_company_name" id="client_company_name" value="{{ $project->client_company_name }}">
                            </div>

                            <div class="col-md-6"></div>

                            <div class="form-group col-md-6">
                                <label for="phone_no" class="col-form-label">Phone No <span class="text-danger">*</span></label>
                                <input type="phone" class="form-control" name="phone_no" id="phone_no" value="{{ $project->phone_no }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="email" class="col-form-label">Email <span class="text-danger">*</span></label>
                                <input type="email" class="form-control" name="email" id="email" value="{{ $project->email }}">
                            </div>

                            <div class="form-group col-md-12">
                                <label for="location" class="col-form-label">Address <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="location" name="location" value="{{ $project->location }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="logo" class="col-form-label">Logo</label>
                                <input type="file" class="form-control" id="logo" name="logo">
                            </div>

                            <div class="col-md-6"></div>

                            <div class="form-group col-md-6">
                                <label for="project_name" class="col-form-label">Project Name <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="project_name" name="project_name" value="{{ $project->project_name }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="work_order_price" class="col-form-label">Work Order Price <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="work_order_price" name="work_order_price" value="{{ $project->work_order_price }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="start_date" class="col-form-label">Project Start Date <span class="text-danger">*</span></label>
                                <input type="date" class="form-control" id="start_date" name="start_date" value="{{ $project->start_date }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="duration" class="col-form-label">Duration <span class="text-danger">*</span></label>
                                <input type="text" class="form-control" id="duration" name="duration" value="{{ $project->duration }}">
                            </div>

                            <div class="form-group col-md-6">
                                <label for="duration" class="col-form-label">Duration <span class="text-danger">*</span></label>
                                <select class="form-control" name="status" id="status">
                                    <option value="{{ $project->status }}">{{ $project->status }}</option>
                                    <option value="Under Process">Under Process</option>
                                    <option value="Complete">Complete</option>
                                </select>
                                {{-- <input type="text" class="form-control" id="duration" name="duration" value="{{ $project->duration }}"> --}}
                            </div>

                            <div class="form-group col-md-12">
                                <label for="description" class="col-form-label">Description</label>
                                <textarea type="text" class="form-control summernote-editor" id="description" name="description">{{ $project->description }}</textarea>
                            </div>
                        </div>



                       <div class="text-right">
                            <button type="button" onclick="window.history.back()" class="btn btn-primary">Back</button>
                            <button type="submit" class="btn btn-info">Submit</button>
                       </div>
                    </form>
                </div> <!-- end card-box -->
            </div> <!-- end col -->
        </div>
                                <!-- end row -->
    </div>
</div>
@endsection
