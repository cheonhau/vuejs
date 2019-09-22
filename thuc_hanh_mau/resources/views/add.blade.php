@extends('main')

@section('content')
<div class="content-form">
    <div class="title-content">Add Example User</div>
    <form class="row custom-form">
        <div class="col-sm-6 col-12">
            <label for="name">Your Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name">
        </div>
        <div class="col-sm-6 col-12">
            <label for="address">Your Address</label>
            <input type="text" class="form-control" id="address" placeholder="Enter address">
        </div>
        <div class="col-sm-6 col-12">
            <label for="phone">Your Phone</label>
            <input type="number" class="form-control" id="phone" placeholder="Enter phone">
        </div>
        <div class="col-sm-6 col-12">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="col-sm-6 col-12">
                <label for="gender-man">Your Gender</label>
            <div class="row">
                <div class="col-sm-6 col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender-man" value="1" checked>
                        <label class="form-check-label" for="gender-man">
                            Man
                        </label>
                    </div>
                </div>
                <div class="col-sm-6 col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gender" id="gender-woman" value="0">
                        <label class="form-check-label" for="gender-woman">
                            woman
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-6 col-12">
            <label for="">Your Profile</label>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="image">
                <label class="custom-file-label" for="image">Choose file</label>
            </div>
        </div>
        <div class="col-sm-6 col-12">
            <label for="date">Your BirthDay</label>
            <input type="text" class="form-control" id="date" placeholder="Enter date">
        </div>
        <div class="col-sm-12 col-12 custom-button"><button type="submit" class="btn btn-primary">Submit</button></div>
    </form>
</div>
@endsection