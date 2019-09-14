<template>
  <div class="list-user">
    <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Dob</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in userData" :key="user.id">
          <th scope="row">{{ index + 1 }}</th>
          <!-- tạo sự kiện click vào name và đẩy thông tin user lên cho thằng cha qua method sử dụng $emit -->
          <td @click="selectUser(user)">{{ user.name.title }} - {{ user.name.last }} {{ user.name.first }}</td>
          <td>{{ user.location.city }}</td>
          <td>{{ user.dob }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import data from "./data.json";
export default {
  data() {
    return {
      userData: data,
      number : 10,
      hello : 'world'
    };
  },
  methods: {
      selectUser (user) {
          // truyền lên thằng cha bằng cách sử dụng $emit , hiện tại là thằng UserDashboard
        //   this.$emit('user', user);
          // nếu muồn emit nhiều hơn môt biến ta sử dụng như sau 

        //   this.$emit('user', {'listUser' : user, 'number' : number, 'chao' : hello });
        this.$emit('user', user, this.number, this.hello);
      }
  },
};
</script>
<style lang="scss" scoped>
</style>