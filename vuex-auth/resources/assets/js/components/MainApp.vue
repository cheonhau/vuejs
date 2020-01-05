<template>
    <div id="main">
        <Loading/>
        <Header/>
        <div class="content mt-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './Header';
    import Loading from './Loading';
    export default {
        name: 'main-app',
        components: {Header, Loading}
    }
</script>
