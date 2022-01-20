
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

                        <form method="POST" action="{{ route('login') }}" class="pt-2">
                            @csrf
                            <div class="form-group mb-3">
                                <label for="emailaddress">Email address</label>
                                <input class="form-control @error('email') is-invalid @enderror" type="email" id="emailaddress" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Enter Your Email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group mb-3">
                                <a href="{{ route('password.request') }}" class="text-muted float-right"><small>Forgot your password?</small></a>
                                <label for="password">Password</label>
                                <input class="form-control @error('password') is-invalid @enderror" type="password"  id="password" name="password" required autocomplete="current-password" placeholder="Enter your password">
                                @error('password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="custom-control custom-checkbox mb-3">
                                <input type="checkbox" class="custom-control-input" id="checkbox-signin" {{ old('remember') ? 'checked' : '' }}>
                                <label class="custom-control-label" for="checkbox-signin" >Remember me</label>
                            </div>

                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-success btn-block" type="submit"> Log In </button>
                            </div>

                        </form>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted mb-0">Don't have an account? <a href="{{ route('register') }}" class="text-dark ml-1"><b>Sign Up</b></a></p>
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
<!-- end page -->


@endsection
