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
                            <a href="index.html">
                                <span><img src="{{ asset('assets/images/Eva-Tech-Full-Logo1.png') }}" alt="" style="width: 300px; height:150px"></span>
                            </a>
                            <p class="text-muted mt-3">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                        </div>

                        <form method="POST" action="{{ route('password.email') }}" class="pt-2">
                            @csrf

                            <div class="form-group mb-3">
                                <label for="email">Email address</label>
                                <input class="form-control @error('email') is-invalid @enderror" type="email" id="email" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus placeholder="Enter your email">
                                @error('email')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                @enderror
                            </div>

                            <div class="form-group mb-0 text-center">
                                <button class="btn btn-success btn-block" type="submit"> Reset Password </button>
                            </div>

                        </form>

                        <div class="row mt-3">
                            <div class="col-12 text-center">
                                <p class="text-muted mb-0">Back to <a href="{{ route('login') }}" class="text-dark ml-1"><b>Log in</b></a></p>
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
