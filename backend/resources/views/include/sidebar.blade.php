<div class="left-side-menu">

    <div class="slimscroll-menu">

        <!--- Sidemenu -->
        <div id="sidebar-menu">

            <ul class="metismenu" id="side-menu">

                {{-- <li class="menu-title">Navigation</li> --}}
                @if (App\Models\Company::get()->count() == 1)
                    <li>
                        <a href=" {{ route('dashboard') }}">
                            <i class="dripicons-meter"></i>
                            <span> Dashboard </span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('company.info') }}">
                            <i class="dripicons-information"></i>
                            <span> Company Info </span>
                        </a>
                    </li>

                    <li>
                        <a href="javascript: void(0);">
                            <i class="dripicons-archive"></i>
                            <span> Project </span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul class="nav-second-level" aria-expanded="false">
                            <li>
                                <a href="#">Project List</a>
                            </li>
                            <li>
                                <a href="#">Running Project</a>
                            </li>
                            <li>
                                <a href="#">New Project</a>
                            </li>
                            {{-- <li>
                                <a href="#">New Project</a>
                            </li> --}}
                        </ul>
                    </li>

                    <li>
                        <a href="#">
                            <i class=" dripicons-user-group"></i>
                            <span> Employees </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="dripicons-wallet"></i>
                            <span> Accounts </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="dripicons-folder-open"></i>
                            <span> Leger Book </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="dripicons-document"></i>
                            <span> Salary Sheet </span>
                        </a>
                    </li>
                @else
                    <li>
                        <a href="{{ route('company.info') }}">
                            <i class="dripicons-information"></i>
                            <span> Company Info Add </span>
                        </a>
                    </li>
                @endif


                <li>
                    <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <i class=" dripicons-power"></i>
                        <span> Log Out </span>
                    </a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                        @csrf
                    </form>
                </li>

            </ul>

        </div>
        <!-- End Sidebar -->

        <div class="clearfix"></div>

    </div>
    <!-- Sidebar -left -->

</div>
