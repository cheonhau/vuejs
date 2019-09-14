<template>
    <div class="user-detail">
        <div class="card" style="width: 18rem;" v-if="(Object.keys(user).length !== 0)">
            <div class="card-header">
                Infomation User
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name : {{ user.name.last }} {{ user.name.first }}</li>
                <li class="list-group-item">Dob : {{ user.dob }}</li>
                <li class="list-group-item">Position : {{ user.location.city }}</li>
                <li class="list-group-item">Gender : {{ user.gender }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props : {
        user : {
            type : Object
        }
        // You can also write props: ['userDetailInfo']
    }
    // Càng tốt hơn! 
    // props: {
    // status: {
    //     type: String,
    //     required: true,
    //     validator: function (value) {
    //     return [
    //         'syncing',
    //         'synced',
    //         'version-conflict',
    //         'error'
    //     ].indexOf(value) !== -1
    //     }
    // }
    // }
}
</script>
<style lang="scss" scoped>
    .card {
        margin: 0 auto;
    }
</style>