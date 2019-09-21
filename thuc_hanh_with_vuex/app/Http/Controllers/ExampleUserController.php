<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\example_user;
use Carbon\Carbon;

class ExampleUserController extends Controller
{
    public function listUser () {
        return response()->json( example_user::all(), 200 );
    }

    public function addUser (Request $request) {
        $user = new example_user();

        $user->name = $request->name;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->date = $request->has('date') ? $request->date : Carbon::now();

        // dd($request->hasFile('image'));
        if ( $request->hasFile( 'image' ) ) {
            $image = $this->uploadFileImage( $request->image );
            $user->image = $image;
        } else {
            $user->image = 'bai_bien.jpg';
        }
        $user->save();

        return response()->json(['result' => 'success'], 200);
    }

    public function editUser ($id, Request $request) {
        $user = example_user::find($id);
        $user->name = $request->name;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->email = $request->email;
        $user->date = $request->has('date') ? $request->date : Carbon::now();
        if ( $request->hasFile( 'image' ) ) {
            $fileOld = $user->image;
            $image = $this->uploadFileImage( $request->image );
            $user->image = $image;

            $this->removeFileImage($fileOld);
        }

        $user->save();

        return response()->json(['result' => 'success'], 200);
    }

    public function deleteUser ($id) {
        $user = example_user::find($id);
        $fileOld = $user->image;

        $user->delete();
        $this->removeFileImage($fileOld);

        return response()->json(['result' => 'success'], 200);
    }

    public function uploadFileImage ( $file ) {
        $filename_video = rand(0, 99) . time() . uniqid() . '.' . $file->getClientOriginalExtension();
        $path = public_path() . "/uploads/";

        if (!file_exists($path) && !is_dir( $path )) { // Write folder if not exists
            mkdir( $path, 0777, true);
        }

        $file->move( $path, $filename_video );

        return $filename_video;
    }

    public function removeFileImage ( $file ) {
        $pathUpload = 'uploads/';
        unlink($pathUpload . $file);
    }
}
