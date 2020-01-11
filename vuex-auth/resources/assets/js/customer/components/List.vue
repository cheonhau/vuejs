<template>
    <div>
        <div class="btn-wrapper">
            <router-link to="/customers/new" class="btn btn-primary btn-sm">New</router-link>
        </div>
        <table class="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <template v-if="customers && customers.data">
                    <tr v-for="customer in customers.data" :key="customer.id">
                        <td data-toggle="modal" data-target="#exampleModalCenter">{{ customer.name }}</td>
                        <td>{{ customer.email }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>
                            <router-link :to="`/customers/${customer.id}`" class="btn btn-primary">View</router-link>
                            <router-link :to="`/customers/edit/${customer.id}`" class="btn btn-success">Edit</router-link>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </template>
                <template v-else>
                    <tr>
                        <td colspan="4" class="text-center">No Customers Available</td>
                    </tr>
                </template>
            </tbody>
        </table>
        <pagination @paginate="getCustomer" :pagination="customers" :offset="5"></pagination>
    </div>
</template>

<script>
    export default {
        name: 'list',
        created() {
            // kiểm tra xem có rỗng hay không
            let customers = this.$store.getters.customers;
            if ( !customers.length ) {
                this.$store.dispatch('actionCustomerFetch', 1);
            }
        },
        computed: {
            customers() {
                console.log( this.$store.getters.customers );
                return this.$store.getters.customers;
            }
        },
        methods: {
            getCustomer (page) {
                this.$store.dispatch('actionCustomerFetch', page);
            }
        },
    }
</script>

<style scoped>
.btn-wrapper {
    text-align: right;
    margin-bottom: 20px;
}
</style>
