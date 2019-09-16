<?php

namespace App\Http\Controllers\Api\V0;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    public function index()
    {
        return Category::all();
    }

    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->update($request->all());

        return $category;
    }

    public function store(Request $request)
    {
        $category = Category::create($request->all());
        return $category;
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
        return;
    }
}
