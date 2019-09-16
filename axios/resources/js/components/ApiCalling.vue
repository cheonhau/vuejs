<template>
    <div class="api-calling">
        <div class="alert alert-danger" role="alert" v-if="errors.length">
            <span v-for="err in errors">
                {{ err }}
            </span>
        </div>
        <div class="create-form">
            <div class="form-group">
                <label for="name">Name Product</label>
                <input type="text" class="form-control" id="name" v-model="product.name" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label for="price">Price Product</label>
                <input type="text" class="form-control" id="price" v-model.number="product.price" placeholder="Enter price">
            </div>
            <div class="button-create">
                <button @click="createProduct" class="btn btn-primary">Create</button>
            </div>
        </div>
        <h2>List Product</h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date created</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(prod, index) in list_products" :key="prod.id">
                    <th scope="row">{{ index + 1 }}</th>

                    <td v-if="!prod.isEdit">{{ prod.name }}</td>
                    <td v-else><input type="text" class="form-control" v-model="prod.name"></td>
                    
                    <td v-if="!prod.isEdit">{{ prod.price }}</td>
                    <td v-else><input type="text" class="form-control" v-model="prod.price"></td>

                    <td>{{ prod.created_at }}</td>

                    <td v-if="!prod.isEdit">
                        <button class="btn btn-success" @click="prod.isEdit = true">Edit</button>
                        <button class="btn btn-danger" @click="deleteProduct(prod, index)">Delete</button>
                    </td>
                    <td v-else>
                        <button class="btn btn-primary" @click="updateProduct(prod)">Save</button>
                        <button class="btn btn-danger" @click="prod.isEdit = false">Cancel</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            product : {
                name : '',
                price : 0
            },
            errors : [],
            list_products : []
        }
    },
    created() {
        this.getListProducts();
    },
    methods: {
        formatDate(d) {
            var dformat = [ d.getFullYear(), (d.getMonth()+1),
                d.getDate()
                ].join('/')+
                ' ' +
                [ d.getHours(),
                d.getMinutes(),
                d.getSeconds()].join(':');
                return dformat
        },
        createProduct() {
            axios.post('/products', {name : this.product.name, price : this.product.price})
            .then(response => {
                let result_post = response.data.result;
                result_post.isEdit = false;
                console.log(result_post);
                this.list_products.push(result_post);
            }).catch (error => {
                console.log(error)
                this.errors = [];
                if (error.response.data.errors.name) {
                    this.errors.push(error.response.data.errors.name);
                }
                if (error.response.data.errors.price) {
                    this.errors.push(error.response.data.errors.price);
                }
            })
        },
        getListProducts() {
            axios.get('/products').then(r=> {
                this.list_products = r.data;
                this.list_products.forEach(element => {
                    Vue.set(element, 'isEdit', false);
                });
            }).catch(err=> {
                this.errors = [];
                if (error.response.data.errors.name) {
                    this.errors.push(error.response.data.errors.name);
                }
                if (error.response.data.errors.price) {
                    this.errors.push(error.response.data.errors.price);
                }
            });
        },
        updateProduct (product) {
            axios.put('/products/' + product.id, {name : product.name, price : product.price}).then(response => {
                console.log(response);
                product.isEdit = false;
            }).catch(error => {
                console.log(error.message)
                this.errors = [];
                if (error.response.data.errors.name) {
                    this.errors.push(error.response.data.errors.name);
                }
                if (error.response.data.errors.price) {
                    this.errors.push(error.response.data.errors.price);
                }
            });
        },
        deleteProduct (product, index) {
            axios.delete('/products/' + product.id).then(response => {
                this.list_products.splice(index, 1);
            }).catch(error => {
                this.errors = [];
                if (error.response.data.errors.name) {
                    this.errors.push(error.response.data.errors.name);
                }
                if (error.response.data.errors.price) {
                    this.errors.push(error.response.data.errors.price);
                }
            });
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>