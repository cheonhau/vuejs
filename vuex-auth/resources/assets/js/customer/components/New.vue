<template>
    <div class="customer-new">
        <form @submit.prevent="add">
            <table class="table">
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.name" placeholder="Customer Name"/>
                    </td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <input type="email" class="form-control" v-model="customer.email" placeholder="Customer Email"/>
                    </td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.phone" placeholder="Customer Phone"/>
                    </td>
                </tr>
                <tr>
                    <th>Website</th>
                    <td>
                        <input type="text" class="form-control" v-model="customer.website" placeholder="Customer Website"/>
                    </td>
                </tr>
                <tr>
                    <th>BirthDay</th>
                    <td>
                        <datepicker :disabled-dates="disabledBirthDates" v-model="customer.birth_day" placeholder="Customer Birthday" input-class="form-control" format="yyyy-MM-dd" @selected="change_birthday"></datepicker>
                    </td>
                </tr>
                <tr>
                    <th>Die day</th>
                    <td>
                        <datepicker :disabled-dates="disabledDieDates" v-model="customer.die_day" placeholder="Customer die day" input-class="form-control" format="yyyy-MM-dd" @selected="change_dieday"></datepicker>
                    </td>
                </tr>
                <tr>
                    <td>
                        <router-link to="/customers" class="btn">Cancel</router-link>
                    </td>
                    <td class="text-right">
                        <input type="submit" value="Create" class="btn btn-primary">
                    </td>
                </tr>
            </table>
        </form>
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
    </div>
</template>

<script>
    import validate from 'validate.js';
    import Datepicker from 'vuejs-datepicker';
    var moment = require('moment');
    export default {
        name: 'new',
        components: {
            Datepicker
        },
        data() {
            return {
                customer: {
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    birth_day : '',
                    die_day : '',
                },
                disabledBirthDates: {
                    to: this.sub_date(1),
                },
                disabledDieDates: {
                    to: this.sub_date(1),
                },
                dateCustomer : {
                    birth_day : new Date(),
                    die_day : new Date(),
                },
                moment : moment,
                errors: null,
                error_backend : null
            };
        },

        methods: {
            async add() {
                this.errors = null;
                this.error_backend = null;

                const constraints = this.getConstraints();

                const errors = validate(this.$data.customer, constraints);

                if(errors) {
                    this.errors = errors;
                    return;
                }
                this.$store.dispatch('togger_loadding');
                this.$data.customer.birth_day = moment(this.$data.customer.birth_day).format('YYYY-MM-DD');
                let result = await this.$store.dispatch('actionCustomerAdd', this.$data.customer);
                this.$store.dispatch('togger_loadding');
                if ( result.errors && Object.keys(result.errors).length > 0 ) {
                    this.error_backend = result.errors.message;
                    return;
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
            },
            change_birthday (date) {
                if ( date >= new Date() ) {
                    this.disabledDieDates.to = date;
                } else {
                    this.disabledDieDates.to = this.sub_date(1);
                }
            },
            change_dieday (date) {

            },
            sub_date (date) {
                return new Date((moment(new Date()).subtract(date , 'day')).toISOString());
            }
        }
    }
</script>

<style>
.errors {
    background: lightcoral;
    border-radius:5px;
    padding: 21px 0 2px 0;
}
</style>

