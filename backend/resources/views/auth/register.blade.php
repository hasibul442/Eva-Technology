
@extends('auth.auth-layout.auth-master')
@section('auth-content')

<div class="home-btn d-none d-sm-block">
    <a href="#"><i class="fas fa-home h2 text-white"></i></a>
</div>

<div class="account-pages w-100 mt-5 mb-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
                <div class="card">

                    <div class="card-body p-4">

                        <div class="text-center mb-4">
                            <a href="#">
                                <span><img src="{{ asset('assets/images/Eva-Tech-Full-Logo1.png') }}" alt="" style="width: 300px; height:150px"></span>
                            </a>
                        </div>

                        <form method="POST" action="{{ route('register') }}" class="pt-2" enctype="multipart/form-data">
                            @csrf

                            <div class="form-group mb-3">
                                <label for="name">Full Name</label>
                                <input class="form-control @error('name') is-invalid @enderror" type="text" name="name" id="name" value="{{ old('name') }}" placeholder="Enter your name" required autocomplete="name" autofocus>
                                @error('name')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group mb-3">
                                <label for="email">Email address</label>
                                <input class="form-control @error('email') is-invalid @enderror" type="email" id="email" required placeholder="Enter your email" name="email" value="{{ old('email') }}" autocomplete="email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group mb-3">
                                <label for="password">Password</label>
                                <input class="form-control @error('password') is-invalid @enderror" type="password" required id="password" name="password" autocomplete="new-password" placeholder="Enter your password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group mb-3">
                                <label for="password-confirme">Confirm Password</label>
                                <input class="form-control @error('password-confirme') is-invalid @enderror" type="password" required id="password-confirme" name="password_confirmation" required autocomplete="new-password" placeholder="Enter Confirm Password">
                                @error('password-confirme')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group mb-3">
                                <label for="name">Image</label>
                                <input class="form-control @error('profile_image') is-invalid @enderror" type="file" name="profile_image" id="image" required>
                                @error('profile_image')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>
{{--
                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox-signup">
                                <label class="custom-control-label" for="checkbox-signup">I accept <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a></label>
                            </div> --}}

                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-success btn-block" type="submit"> Register </button>
                            </div>

                        </form>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted mb-0">Already have account?  <a href="{{ route('login') }}" class="text-dark ml-1"><b>Sign In</b></a></p>
                            </div> <!-- end col -->
                        </div>
                        <!-- end row -->

                    </div> <!-- end card-body -->
                </div>
                <!-- end card -->

            </div> <!-- end col -->
        </div>
        <!-- end row -->
    </div>
    <!-- end container -->
</div>

@endsection
