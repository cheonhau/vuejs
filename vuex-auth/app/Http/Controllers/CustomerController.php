<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

use App\Http\Requests\CreateCustomerRequest;

class CustomerController extends Controller
{
    public function all () {
        $customers = Customer::all();

        return response()->json([
            "customers" => $customers
        ], 200);
    }
    
    public function get ( $id ) {
        $customer = Customer::whereId($id)->first();

        return response()->json([
            "customer" => $customer
        ], 200);
    }

    public function new ( CreateCustomerRequest $request ) {
        // $customer = Customer::create( $request->only(["name", "email", "phone", "website"]) );

        // return response()->json([
        //     "data" => [
        //         "customer" => $customer
        //     ],
        //     "errors" => []
        // ], 200);
        return response()->json([
            "data" => [],
            "errors" => [
                "message" => "nothing to true"
            ]
        ], 400);
    }
}
