<?php

namespace App\Http\Controllers;

use App\Events\TestWebsockets;
use Illuminate\Http\Request;

class TestWebsocketsController extends Controller
{
    //
    public function testEvent(){
        event(new TestWebsockets);
        return response()->json(['status'=> "event fired"]);
    }
}
