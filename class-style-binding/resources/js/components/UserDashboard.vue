<template>
    <div class="user-dashboard" :class="{active : is_hide, foody : is_show}">
        This is User DashBoard
        <div @click="is_hide = false">haha</div>
        <div :class="[bg_red, cl_blue]">kakakiki</div>
        <div :class="classObject">object class</div>
        <h4>List User</h4>
        <ListUser></ListUser>
    </div>
</template>
<script>
import ListUser from './ListUser.vue';
export default {
    components : {
        ListUser
    },
    data() {
        return {
            is_hide : true,
            is_show : false,
            bg_red : 'bg_red',
            cl_blue : 'cl_blue',
            classObject : {
                is_hide : true,
                bold : true
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    .active {
        color: red;
    }
    .bg_red {
        background-color: red;
    }
    .cl_blue {
        color: blue;
    }
</style>