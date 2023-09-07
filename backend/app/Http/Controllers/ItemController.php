<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class ItemController extends Controller
{
    public function view(){
        $data = Item::all();
        return response()->json($data);
    }

    public function create(Request $request){
        $description = $request->input('description');

        $description = htmlspecialchars($description);

        $create = Item::insert([
            'description' => $description,
        ]);

        if($create){
            return ('Record Saved');
        }else{
            return ('Failed to save record');
        }

    }


    public function edit(Request $request){
        $id = $request->input('id');
        $description = $request->input('description');

        $edit = Item::where('id', '=', $id)
        ->update(['description', '=', $description]);

        if($edit){
            return response(200)->with('message', 'Record updated');
        }else{
            return response(500)->with('message', 'Failed to save record');
        }
    }

    public function delete(Request $request){
        $data = $request->input('id');
        
        $delete = Item::where('id', '=', $data)->delete();

        if($delete){
            return response(200)->with('message', 'Record deleted');
        }else{
            return response(500)->with('message', 'Failed to delete record');
        }
    }
}
