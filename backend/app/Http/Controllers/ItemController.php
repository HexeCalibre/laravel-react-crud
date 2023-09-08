<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function description($id){
        $data = Item::where('id', '=', $id)->get();
        // $data = json_encode($data);
        return response()->json($data);
    }


    public function edit(Request $request, $id){
        $description = $request->input('description');

        $edit = DB::table('items')
            ->where('id', $id)
            ->update(['description' => $description]);

        if($edit){
            return response(200)->with('message', 'Record updated');
        }else{
            return response(500)->with('message', 'Failed to save record');
        }
    }

    public function delete(Request $request, $id){
        $data = $request->input('id');
        // $delete = DB::delete("delete from items where id='$id'");
        $delete = DB::table('items')->delete('delete from items')->where('id', $id);

        if($delete){
            return 'deleted';
        }else{
            return 'failed';
        }
    }
}
