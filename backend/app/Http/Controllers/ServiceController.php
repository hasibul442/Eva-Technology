<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Servicetech;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $service = Service::get();
        return view('services.service', compact('service'));
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
        $service = new Service;
        $service->id = rand(0,999).date('ydm');
        $service->name = $request->name;
        $service->description = $request->description;
        $service->status = 1;
        if($request->hasFile('image')){
            $image = $request->file('image');
            $image_name = time().'.'.$image->getClientOriginalExtension();
            $image->move(public_path().'/assets/images/services/',$image_name);
            $service->image = $image_name;
        }
        for($i=0;$i<count($request->tag_name);$i++){
            $servicetech = new Servicetech;
            $servicetech->service_id = $service->id;
            $servicetech->tag_name = $request->tag_name[$i];
            $servicetech->tag_text_color = $request->tag_text_color[$i];
            $servicetech->tag_bg_color = $request->tag_bg_color[$i];
            $servicetech->status = 1;
            $servicetech->save();
            $service->save();

        }
        return response()->json(['success'=>'Data Add successfully.']);
    }

    public function tag_store(Request $request){

        for($i=0;$i<count($request->tag_name);$i++){
            $servicetech = new Servicetech;
            $servicetech->service_id = $request->service_id;
            $servicetech->tag_name = $request->tag_name[$i];
            $servicetech->tag_text_color = $request->tag_text_color[$i];
            $servicetech->tag_bg_color = $request->tag_bg_color[$i];
            $servicetech->status = 1;
            $servicetech->save();

        }
        return response()->json(['success'=>'Data Add successfully.']);
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $service = Service::find($id);
        $servicetag = Servicetech::where('service_id',$id)->get();
        return view('services.service_details',compact('service','servicetag'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $service = Service::find($id);
        return response()->json($service);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Service $service)
    {
        //
    }

    public function servicetag_edit($id)
    {
        $servicetag = Servicetech::find($id);
        return response()->json($servicetag);
    }

    public function servicetag_update(Request $request){
        $servicetag = Servicetech::find($request->id);
        $servicetag->tag_name = $request->input('tag_name_update');
        $servicetag->tag_text_color = $request->input('tag_text_color_update');
        $servicetag->tag_bg_color = $request->input('tag_bg_color_update');
        // $bank->balance = $request->balance;
        $servicetag->update();
        return response()->json($servicetag);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Service  $service
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $service = Service::find($id);
        if (!is_null($service)) {
            if(!is_null($service->image)){
                $image_path = public_path().'/assets/images/services/'.$service->image;
                unlink($image_path);
                $service->delete();
                return response()->json(['success'=>'Data Delete successfully.']);
            }
            else{
                $service->delete();
                return response()->json(['success'=>'Data Delete successfully.']);
            }
        }
    }

    public function service_tag_destroy($id)
    {
        $servicestec = Servicetech::find($id);
        $servicestec->delete();
        return response()->json(['success'=>'Data Delete successfully.']);
    }

    public function service_status($id,$status){
        $services = Service::find($id);
        $services->status = $status;
        $services->update();
        return response()->json(['success'=>'Status changed successfully.']);
    }

    public function service_tag_status($id,$status){
        $servicestech = Servicetech::find($id);
        $servicestech->status = $status;
        $servicestech->update();
        return response()->json(['success'=>'Status changed successfully.']);
    }
}
