@include('include.link')
        <!-- Begin page -->
        <div id="wrapper">

            <!-- Topbar Start -->
            @include('include.navbar')
            <!-- end Topbar -->

            <!-- ========== Left Sidebar Start ========== -->
            @include('include.sidebar')
            <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">

                    <!-- Start Content-->
                    <div class="container-fluid">

                        @yield('content')

                    </div> <!-- container -->

                </div> <!-- content -->

                <!-- Footer Start -->
                @include('include.footer')
                <!-- end Footer -->

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>



@include('include.script')
