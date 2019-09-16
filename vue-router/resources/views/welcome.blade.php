<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">

        <!-- Main styles for this application -->
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <meta id="csrf-token" name="csrf-token" value="{{ csrf_token() }}">
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
    </body>
    <script src="{{ mix('js/app.js') }}"></script>
</html>