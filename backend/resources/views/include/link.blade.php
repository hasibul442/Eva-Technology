<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>@yield('title')</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Eva Technology CMS" name="description" />
        <meta content="Mohammad Hasibul Hasan" name="author" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- App favicon -->
        <link rel="shortcut icon" href="{{ asset('assets/images/Eva-Tech.png') }}">

        <!-- Summernote css -->
        <link href="{{ asset('assets/libs/summernote/summernote-bs4.css') }}" rel="stylesheet" />

        <!-- DataTables -->
        <link href="{{ asset('assets/libs/datatables/dataTables.bootstrap4.min.css') }}" rel="stylesheet" type="text/css"/>
        <link href="{{ asset('assets/libs/datatables/responsive.bootstrap4.min.css') }}" rel="stylesheet" type="text/css"/>

        <!-- App css -->
        <link href="{{ asset('assets/css/bootstrap.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('assets/css/icons.min.css') }}" rel="stylesheet" type="text/css" />
        <link href="{{ asset('assets/css/app.min.css') }}" rel="stylesheet" type="text/css" />
        <script src="https://code.jquery.com/jquery-3.6.0.slim.js" integrity="sha256-HwWONEZrpuoh951cQD1ov2HUK5zA5DwJ1DNUXaM6FsY=" crossorigin="anonymous"></script>
    </head>

    <body>
