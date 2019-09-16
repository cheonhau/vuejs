<template>
    <div>
        <div class="form-group">
            <router-link :to="{name: 'create'}" class="btn btn-success">Create new category</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">categories list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category, index in categories">
                        <td>{{ category.name }}</td>
                        <td>{{ category.description }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: {id: category.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteItem(category.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                categories: []
            }
        },
        mounted() {
            var self = this;
            axios.get('/api/v0/categories')
                .then(function (resp) {
                    self.categories = resp.data;
                })
                .catch(function (resp) {
                    alert("not category");
                    console.log(resp);
                });
        },
        methods: {
            deleteItem(id, index) {
                if (confirm("Do you really want to delete category?")) {
                    var self = this;
                    axios.delete('/api/v0/categories/' + id)
                        .then(function (resp) {
                            self.categories.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("delete category");
                        });
                }
            }
        }
    }
</script>