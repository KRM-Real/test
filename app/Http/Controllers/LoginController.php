<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Show the login form.
     */
    public function show()
    {
        return view('auth.login');
    }

    /**
     * Handle login authentication.
     */
    public function authenticate(Request $request)
    {
        // Validate login credentials
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Attempt authentication using the 'web' guard
        if (Auth::guard('web')->attempt($request->only('email', 'password'))) {
            $request->session()->regenerate(); // Prevent session fixation

            return redirect()->route('dashboard')->with('success', 'Login successful!');
        }

        // Authentication failed
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
}
