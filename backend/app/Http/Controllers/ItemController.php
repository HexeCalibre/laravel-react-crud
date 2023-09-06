<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    public function view(){
        $data = Item::all();
        return response()->json($data);
    }

    public function create(Request $request){
        $description = $this->input('description');

        $create = Item::insert($description);

        if($create){
            return response(200)->with('message', 'Record Saved');
        }else{
            return response(500)->with('message', 'Failed to save record');
        }

    }

    public function edit(Request $request){
        $data = [
            "id" => $request->input('id'),
            "description" => $request->input('description')
        ]

        $edit = Item::where('id' => $data.id)
        ->update(['description' => $data.description]);

        if($edit){
            return response(200)->with('message', 'Record updated');
        }else{
            return response(500)->with('message', 'Failed to save record');
        }
    }

    public function delete(Request $request){
        $data = $request->input('id');
        
        $delete = Item::where('id', $data)->delete();

        if($delete){
            return response(200)->with('message', 'Record deleted');
        }else{
            return response(500)->with('message', 'Failed to delete record');
        }
    }
}
