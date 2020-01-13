<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

use App\Http\Requests\CreateCustomerRequest;

class CustomerController extends Controller
{
    public function all ( Request $request ) {
        // $page = $request->get('page', 1); https://stackoverflow.com/questions/45206337/why-pagination-laravel-ignores-requests-skip-take
        $customers = Customer::paginate(2);
        return response()->json([
            "data" => [
                "customers" => $customers
            ],
            "errors" => []
        ], 200);
    }

    public function get ( $id ) {
        $customer = Customer::whereId($id)->first();

        return response()->json([
            "data" => [
                "customer" => $customer
            ],
            "errors" => []
        ], 200);
    }

    public function new ( CreateCustomerRequest $request ) {
        try {
            // return $request->get('customer')['name'];
            $customer = Customer::create( $request->only(["name", "email", "phone", "website"]) );

            $customers = Customer::paginate(10); // >paged($whatEver);
            return response()->json([
                "data" => [
                    "customer" => $customers
                ],
                "errors" => []
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                "errors" => [
                    "message" => $e->getMessage()
                ],
                "data" => []
            ], 200);
        }
    }

    public function edit ($id, Request $request) {
        try {
            $customer = Customer::where('id', $id)
                        ->update( $request->only(["name", "email", "phone", "website"]) );
            if ( $customer ) {
                $customer = Customer::find($id);
                return response()->json([
                    "data" => [
                        "customer" => $customer
                    ],
                    "errors" => []
                ], 200);
            }
        } catch (\Exception $e) {
            return response()->json([
                "errors" => [
                    "message" => $e->getMessage()
                ],
                "data" => []
            ], 200);
        }
    }
    
    public function delete ( $id ) {
        try {
            $customer = Customer::find($id)->delete();
            $customers = Customer::paginate(10);
            return response()->json([
                "data" => [
                    "customer" => $customers
                ],
                "errors" => []
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                "errors" => [
                    "message" => $e->getMessage()
                ],
                "data" => []
            ], 200);
        }
    }
}
