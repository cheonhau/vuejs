import Home from './components/Home.vue';
import EditCustomer from './customer/components/Edit.vue';
import CustomersList from './customer/components/List.vue';
import CustomersMain from './customer/components/Main.vue';
import NewCustomer from './customer/components/New.vue';
import Customer from './customer/components/View.vue';
import Login from './user/components/login.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: '/',
                component: CustomersList
            },
            {
                path: 'new',
                component: NewCustomer
            },
            {
                path: ':id',
                component: Customer
            },
            {
                path: 'edit/:id',
                component: EditCustomer
            },
        ]
    }
];
