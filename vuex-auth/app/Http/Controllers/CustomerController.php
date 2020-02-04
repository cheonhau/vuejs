<?php

namespace App\Http\Controllers;

use App\Customer;
use Illuminate\Http\Request;

use App\Http\Requests\CreateCustomerRequest;
// use Illuminate\Pagination\Paginator;

class CustomerController extends Controller
{
    public function all ( Request $request ) {
        // $page = $request->get('page', 1); https://stackoverflow.com/questions/45206337/why-pagination-laravel-ignores-requests-skip-take
        $customers = Customer::paginate( config('variable.number_record_paginate', 10) );
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
            $customer = Customer::create( $request->only(["name", "email", "phone", "website", "birth_day"]) );
            $currentPage = $request->get('page', 1);
            return response()->json([
                "data" => [
                    "customer" => $currentPage
                ],
                "errors" => []
            ], 200);
            // Paginator::currentPageResolver(function () use ($currentPage) {
            //     return $currentPage;
            // });
            $customers = Customer::paginate( config('variable.number_record_paginate', 10), ['*'], 'page', $currentPage );
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

            $customer = Customer::find($id);
            return response()->json([
                "data" => [
                    "customer" => $customer
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

    public function delete ( $id, Request $request ) {
        try {
            $customer = Customer::find($id)->delete();
            $currentPage = $request->get('page', 1);

            $customers = Customer::paginate( config('variable.number_record_paginate', 10), ['*'], 'page', $currentPage );
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
