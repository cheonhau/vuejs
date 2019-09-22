@extends('main')
@section('content')
<div class="content-form">
    <div class="title-content">List Example User</div>
    <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Photo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>0935 667 666</td>
            <td>ng.huy.uit@gmail.com</td>
            <td><img src="/uploads/bai_bien.jpg" alt="" width="30px"></td>
            <td class="action_td"><i class="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-trash"></i></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>0935 667 666</td>
            <td>ng.huy.uit@gmail.com</td>
            <td><img src="/uploads/bai_bien.jpg" alt="" width="30px"></td>
            <td class="action_td"><i class="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-trash"></i></td>
        </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>335 chu van an</td>
            <td>0935 667 666</td>
            <td>ng.huy.uit@gmail.com</td>
            <td><img src="/uploads/bai_bien.jpg" alt="" width="30px"></td>
            <td class="action_td"><i class="far fa-edit"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-trash"></i></td>
        </tr>
        </tbody>
    </table>
    </div>
</div>
@endsection