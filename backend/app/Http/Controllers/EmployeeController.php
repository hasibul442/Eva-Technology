<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee = Employee::get();
        return view('employee.employee', compact('employee'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $employee = new Employee;
        $employee->id = date('ymd').rand(0,100);
        $employee->name = $request->name;
        $employee->email = $request->email;
        $employee->phone_no = $request->phone_no;
        $employee->address = $request->address;
        $employee->gender = $request->gender;
        $employee->nid = $request->nid;
        $employee->position = $request->position;
        $employee->dob = $request->dob;
        $employee->join_date = $request->join_date;
        $employee->basic_salary = $request->basic_salary;
        $employee->house_rent = $request->house_rent;
        $employee->medical = $request->medical;
        $employee->ta_ma = $request->ta_ma;
        $employee->yearly_gross = $request->yearly_gross;
        $employee->status = 1;
        $employee->is_team_member = 0;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path().'/assets/images/employees/',$image_name);
            $employee->image = $image_name;
        }
        $employee->save();
        return response()->json(['success'=>'Data Add successfully.']);

    }


    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = Employee::find($id);
        return view('employee.details',compact('employee'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        //
    }
    public function employeestatus($id, $status){
        $employees = Employee::find($id);
        $employees->status = $status;
        $employees->update();
        return response()->json(['success'=>'Status changed successfully.']);
    }

    public function is_team_member($id, $is_team_member){
        $employees = Employee::find($id);
        $employees->is_team_member = $is_team_member;
        $employees->update();
        return response()->json(['success'=>'Status changed successfully.']);
    }

}
