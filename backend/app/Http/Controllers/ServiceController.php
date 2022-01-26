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
    public function edit(Service $service)
    {
        //
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
