@extends('layouts.master')
@section('title','ET || Employees')
@section('content')

<!-- start page title -->
<div class="row">
    <div class="col-12">
        <div class="page-title-box">
            <div class="page-title-right">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item"><a href="javascript: void(0);">Employees</a></li>
                    <li class="breadcrumb-item active">Employees List</li>
                </ol>
            </div>
            <h4 class="page-title">Employees</h4>
        </div>
    </div>
</div>
<!-- end page title -->

<div class="card">
    <div class="card-body">
        <button class="float-right btn btn-success waves-effect waves-light" data-toggle="modal" data-target=".bs-example-modal-xl">New Employee</button>
        <h1 class="text-center pb-2"><u>Employees</u></h1>

        <div>
            <table class="table display employee_table table-responsive-xl">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Position</th>
                        <th>Join Date</th>
                        <th>Total Salary</th>
                        <th>Status</th>
                        <th>Show As A Team Member</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @php
                        $i=0;
                    @endphp
                    @foreach ( $employee as $item )
                        <tr>
                            <td>{{ ++$i }}</td>
                            <td>{{ $item->id }}</td>
                            <td><img src="{{ asset('/assets/images/employees/'.$item->image) }}" alt="" style="height: 50px; width:50px"></td>
                            <td>{{ $item->name }}</td>
                            <td>{{ $item->email }}</td>
                            <td>{{ $item->phone_no }}</td>
                            <td>{{ $item->position }}</td>
                            <td>{{ $item->join_date }}</td>
                            <td>{{ number_format(($item->basic_salary) + ($item->house_rent) + ($item->medical) + ($item->ta_ma) + ($item->yearly_gross),2) }}</td>
                            <td>
                                <input name="status" class="status" id="status1" type="checkbox" data-toggle="toggle" data-on="Active" data-off="Deactive" data-size="small" data-onstyle="success" data-offstyle="danger" data-id="{{ $item->id }}" {{ $item->status == 1 ? 'checked' : '' }}>
                            </td>
                            <td>
                                <input type="checkbox" data-size="small" data-toggle="toggle" data-on="Show" data-off="Not Show" data-onstyle="purple" data-offstyle="pink" name="is_team_member_1" class="is_team_member_1" id="is_team_member_1" data-id="{{ $item->id }}" {{ $item->is_team_member == 1 ? 'checked' : '' }}>
                            </td>
                            <td style="white-space: nowrap">
                                <a class="btn btn-xs btn-outline-warning" href="javascript:void(0);" onclick="editBank({{ $item->id }})"><i class="mdi mdi-circle-edit-outline"></i></a>
                                <a class="btn btn-xs btn-outline-info" href="{{ route('employee.show', $item->id) }}"><i class="mdi mdi-eye"></i></a>
                                <a class="btn btn-xs btn-outline-danger" href="javascript:void(0);" data-id="{{ $item->id }}"><i class="mdi mdi-delete-outline"></i></a>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>


<div class="modal fade bs-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="myExtraLargeModalLabel">Extra large modal</h4>
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
            </div>
            <div class="modal-body">
                <form id="employeetForm" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="name" class="col-form-label">Full Name <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" name="name" id="name" required placeholder="Mr. Alex">
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
                            <label for="address" class="col-form-label">Address <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="address" name="address" placeholder="1234 Main St">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="gender" class="col-form-label">Gender <span class="text-danger">*</span></label>
                            <select id="gender" class="form-control" name="gender">
                                <option disabled selected>Choose</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="nid" class="col-form-label">NID <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="nid" name="nid" placeholder="17896542356" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="position" class="col-form-label">Position <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="position" name="position" placeholder="Asst. Manager" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="image" class="col-form-label">Image <span class="text-danger">*</span></label>
                            <input type="file" class="form-control" id="image" name="image" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="dob" class="col-form-label">Date Of Birth <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" id="dob" name="dob" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="join_date" class="col-form-label">Join Date <span class="text-danger">*</span></label>
                            <input type="date" class="form-control" id="join_date" name="join_date" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="basic_salary" class="col-form-label">Basic Salary <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" id="basic_salary" name="basic_salary" placeholder="30000.00" required>
                        </div>

                        <div class="form-group col-md-6">
                            <label for="house_rent" class="col-form-label">House Rent</label>
                            <input type="text" class="form-control" id="house_rent" name="house_rent" placeholder="15000.00">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="medical" class="col-form-label">Medical</label>
                            <input type="text" class="form-control" id="medical" name="medical" placeholder="4000.00">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="ta_ma" class="col-form-label">TA/MA</label>
                            <input type="text" class="form-control" id="ta_ma" name="ta_ma" placeholder="2000.00">
                        </div>

                        <div class="form-group col-md-6">
                            <label for="yearly_gross" class="col-form-label">Yearly Gross</label>
                            <input type="text" class="form-control" id="yearly_gross" name="yearly_gross" placeholder="2000.00">
                        </div>
                    </div>



                   <div class="text-right">
                        <button type="submit" class="btn btn-primary">Back</button>
                        <button type="submit" class="btn btn-info">Submit</button>
                   </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).on('change', '#status1', function() {
        var id = $(this).attr('data-id');
        if (this.checked) {
            var emp_status = 1;
        } else {
            var emp_status = 0;
        }
        $.ajax({
            dataType: "json",
            url: '/employees/' + id + '/' + emp_status,
            method: 'get',
            success: function(result1) {
                console.log(result1);
            }
        });
    });

    $(document).on('change', '#is_team_member_1', function() {
        var id = $(this).attr('data-id');
        if (this.checked) {
            var is_team_member_1 = 1;
        } else {
            var is_team_member_1 = 0;
        }
        $.ajax({
            dataType: "json",
            url: '/employees/team/' + id + '/' + is_team_member_1,
            method: 'get',
            success: function(result1) {
                console.log(result1);
            }
        });
    })
</script>


<script>
    $(document).ready( function () {
        $('.employee_table').DataTable();
} );
</script>

<script>
    $('#employeetForm').on('submit', function(e) {
            e.preventDefault();
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            var myformData = new FormData($('#employeetForm')[0]);
            $.ajax({
                type: "post",
                url: "{{ route('employees.add') }}",
                data: myformData,
                cache: false,
                //enctype: 'multipart/form-data',
                processData: false,
                contentType: false,
                dataType: "json",
                success: function(response) {
                    console.log(response);
                    $("#employeetForm").find('input').val('');
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
