@extends('layouts.master')
@section('title','ET || Company')
@section('content')

@if (App\Models\Company::get()->count() == 0)
<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Company</a></li>
                    <li class="breadcrumb-item active">Register</li>
                </ol>
            </div>
            <h4 class="page-title">Company</h4>
        </div>
    </div>
</div>

<!-- Form row -->
<div class="row">
    <div class="col-md-12">
        <div class="card-box">
            <h4 class="header-title text-center pb-5">Company Details</h4>
            <form class="forms-sample" id="companyForm" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="company_name" class="col-form-label">Company Name</label>
                        <input type="text" class="form-control" id="company_name" name="company_name">
                    </div>

                    <div class="col-md-6"></div>

                    <div class="form-group col-md-6">
                        <label for="email" class="col-form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="phone_no" class="col-form-label">Phone</label>
                        <input type="phone" class="form-control" id="phone_no" name="phone_no">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="location" class="col-form-label">Location</label>
                        <input type="text" class="form-control" id="location" name="location">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="facebook" class="col-form-label">Facebook Link</label>
                        <input type="text" class="form-control" id="facebook" name="facebook">
                    </div>

                    <div class="form-group col-md-6">
                        <label for="logo" class="col-form-label">Logo</label>
                        <input type="file" class="form-control" id="logo" name="logo">
                    </div>
                    <div class="col-md-6"></div>
                    <div class="form-group col-md-6">
                        <label for="about" class="col-form-label">About</label>
                        <textarea type="text" class="form-control summernote-editor" id="about" name="about"></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="mission" class="col-form-label">Mission</label>
                        <textarea type="text" class="form-control summernote-editor" id="mission" name="mission"></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="vision" class="col-form-label">Vision</label>
                        <textarea type="text" class="form-control summernote-editor" id="vision" name="vision"></textarea>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="why_choose_us" class="col-form-label">Why Choose Us</label>
                        <textarea type="text" class="form-control summernote-editor" id="why_choose_us" name="why_choose_us"></textarea>
                    </div>

                </div>
               <div class="text-center">
                <button type="submit" class="btn btn-primary">Register Company</button>
               </div>
            </form>
        </div> <!-- end card-box -->
    </div> <!-- end col -->
</div>
<!-- end row -->

@else
    <div class="row">
        <div class="col-12">
            <div class="page-title-box">
                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Company</a></li>
                        <li class="breadcrumb-item active">Details</li>
                    </ol>
                </div>
                <h4 class="page-title">Company</h4>
            </div>
        </div>
    </div>

    <div class="row">
        @foreach (App\Models\Company::where('id',1)->get() as $item )

            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h2>{{ $item->company_name }} <small><a href="#"><i class="mdi mdi-square-edit-outline"></i></a></small></h2>
                        <span><i class="icon-location-pin"></i> {{ $item->location }}</span><br>
                        <span><i class="icon-phone"></i> {{ $item->phone_no }}</span><br>
                        <span><i class="dripicons-mail"></i>  {{ $item->email }}</span><br>
                        <span><i class="mdi mdi-cash-usd"></i>  {{ $item->current_balance }}</span><br>
                        <span><i class=" mdi mdi-facebook"></i>  {{ $item->facebook }}</span><br>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <div class="text-center shadow">
                            <img src="{{ asset('assets/images/company/'.$item->logo) }}" class="img-fluid" style="height: 165px; width:165px" alt="">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h2>About </h2>
                        <p>{!! $item->about !!}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2>Mission</h2>
                        <p>{!! $item->mission !!}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2>Vision </h2>
                        <p>{!! $item->vission !!}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card">
                    <div class="card-body">
                        <h2>Why Choose Us </h2>
                        <p>{!! $item->why_choose_us !!}</p>
                    </div>
                </div>
            </div>

        @endforeach
    </div>
@endif


<script>
    $('#companyForm').on('submit', function(e) {
            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var myformData = new FormData($('#companyForm')[0]);
            $.ajax({
                type: "post",
                url: "{{ route('company-add') }}",
                data: myformData,
                cache: false,
                //enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    $("#companyForm").find('input').val('');
                    location.reload();
                },
                error: function(error) {
                    console.log(error);
                    alert("Data Not Save");
                }
            });
        });
</script>
@endsection
