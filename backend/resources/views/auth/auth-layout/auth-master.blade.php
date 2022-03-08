<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Eva Techonology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Eva Technology CMS" name="description" />
        <meta content="Mohammad Hasibul Hasan" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ asset('assets/images/Eva-Tech.png') }}">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- App css -->
        <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css" />

    </head>

    <body class="authentication-bg authentication-bg-pattern d-flex align-items-center">

        @yield('auth-content')

        <script src="{{ asset('js/app.js') }}" defer></script>
       <!-- Vendor js -->
       <script src="{{ asset('assets/js/vendor.min.js') }}"></script>

       <!-- App js -->
       <script src="{{ asset('assets/js/app.min.js') }}"></script>

   </body>
</html>
