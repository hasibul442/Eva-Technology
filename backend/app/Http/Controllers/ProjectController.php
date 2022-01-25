<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $project = Project::get();
        return view('projects.project_list', compact('project'));
    }
    public function running_project()
    {
        $project = Project::where('status','Under Process')->get();
        return view('projects.running_project',compact('project'));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('projects.new_project');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $project = new Project;
        $project->client_name = $request->client_name;
        $project->client_company_name = $request->client_company_name;
        $project->phone_no = $request->phone_no;
        $project->email = $request->email;
        $project->location = $request->location;
        $project->project_name = $request->project_name;
        $project->work_order_price = $request->work_order_price;
        $project->start_date = $request->start_date;
        $project->duration = $request->duration;
        $project->description = $request->description;
        $project->status = "Under Process";
        if($request->hasFile('logo')){
            $image = $request->file('logo');
            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path().'/assets/images/project/',$image_name);
            $project->company_logo = $image_name;
        }
        $project->save();
        return response()->json(['success'=>'Data Add successfully.']);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }
}
