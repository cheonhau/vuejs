<template>
    <div class="customer-edit">
        <form @submit.prevent="edit">
            <template v-if="customer && Object.keys(customer).length > 0">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Enter Your Name">
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.email" placeholder="Enter Your Email">
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Enter Your Phone">
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Enter Your Website">
                    </td>
                </tr>
                <tr>
                    <th>
                        <router-link to="/customers">Cancel</router-link>
                    </th>
                    <td class="text-right">
                        <input type="submit" value="Edit" class="btn btn-success">
                    </td>
                </tr>
                <div class="errors" v-if="errors">
                    <ul>
                        <li v-for="(fieldsError, fieldName) in errors" :key="fieldName">
                            <strong>{{ fieldName }}</strong> {{ fieldsError.join('\n') }}
                        </li>
                        <li v-if="error_backend">
                            <strong>{{ error_backend }}</strong>
                        </li>
                    </ul>
                </div>
                <div class="errors" v-if="error_backend">
                    <ul>
                        <li>
                            <strong>{{ error_backend }}</strong>
                        </li>
                    </ul>
                </div>
            </table>
            </template>
            <template v-else>
                <div>
                    Customer not found !
                </div>
            </template>
        </form>
    </div>
</template>
<script>
import validate from 'validate.js';

export default {
    name : 'customer-edit',
    data() {
        return {
            errors: null,
            error_backend : null,
        }
    },
    mounted() {
        let customers = this.$store.getters.customers;
        if ( Object.keys(customers).length == 0 ) {
            this.$store.dispatch('actionCustomerFetch');
        }
    },
    methods: {
        async edit () {
            this.errors = null;
            this.error_backend = null;

            const constraints = this.getConstraints();

            const errors = validate(this.customer, constraints);

            if(errors) {
                this.errors = errors;
                return;
            }

            this.$store.dispatch('togger_loadding');
            let result = await this.$store.dispatch('actionCustomerEdit', {'id' : this.$route.params.id, 'customer' : this.customer} );
            this.$store.dispatch('togger_loadding');
            if ( result.errors && Object.keys(result.errors).length > 0 ) {
                this.error_backend = result.errors.message;
            } else {
                this.$router.push('/customers');
            }
        },
        getConstraints() {
            return {
                name: {
                    presence: true,
                    length: {
                        minimum: 3,
                        message: 'Must be at least 3 characters long'
                    }
                },
                email: {
                    presence: true,
                    email: true
                },
                phone: {
                    presence: true,
                    numericality: true,
                    length: {
                        minimum: 10,
                        message: 'Must be at least 10 digits long'
                    }
                },
                website: {
                    presence: true,
                    url: true
                }
            };
        }
    },
    computed: {
        customer () {
            let customers = this.$store.getters.customers;
            if ( typeof customers.data !== 'undefined' ) {
                return customers.data.find( (customer) => customer.id == this.$route.params.id )
            }
        }
    },
}
</script>
