<template>
    <div class="user-dashboard container">
        <div class="list-user-comp">
            <h4>List User</h4>
            <!-- lắng nghe sự kiện emitted từ con truyền lên và sử dụng nó -->
            <ListUser @user="listUser"></ListUser>
        </div>
        <div class="user-detail-comp">
            <!-- truyền dữ liệu cho thằng tiếp theo thông qua data -->
            <UserDetail :user="user"></UserDetail>
        </div>
    </div>
</template>
<script>
import ListUser from './ListUser.vue';
import UserDetail from './UserDetail.vue';

export default {
    data() {
        return {
            user : {},
        }
    },
    components : {
        ListUser,
        UserDetail
    },
    methods: {
        // sử dụng @đối-tượng-truyền-lên-từ-thằng-con=function-của-thằng-cha, sau đó sử dụng ở function dưới đây
        listUser(user, number, hello) {
            this.user = user; // truyền thông tin user từ thằng con lên thằng tiếp theo, hiện tại là UserDetail ß
            console.log(number, hello);
        }
    },
    mounted() {
            // có thể lấy thông tin từ con trực tiếp mà không cần con truyền lên, nhưng không được khuyến khích vì mất đi sự nhất quán
        console.log(this.$parent.user);
    },
}
</script>
<style lang="scss" scoped>
</style>