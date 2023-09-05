<?php

namespace App\Http\Controllers;
use Illuminate\Http\RedirectResponse;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function view(){
        $data = User::all();
        return response()->json($data);
    }

    public function login(Request $request): RedirectResponse{
        $credentials = $request->validate([
            'username' => ['required'],
            'password' => ['required']
        ]);

        if(auth()->attempt($credentials)){
            $request->session()->regenerate();
            return redirect()->intended('/dashboard');
        }else{
            return back()->with('message', 'Username / Password is incorrect');
        }

    }
}
