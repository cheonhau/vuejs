<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back Home</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Create new category</div>
            <div class="panel-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">name</label>
                            <input type="text" v-model="category.name" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">description</label>
                            <input type="text" v-model="category.description" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            let self = this;
            let id = self.$route.params.id;
            self.categoryId = id;
            axios.get('/api/v0/categories/' + id)
                .then(function (resp) {
                    self.category = resp.data;
                })
                .catch(function () {
                    alert("not category")
                });
        },
        data: function () {
            return {
                categoryId: null,
                category: {
                    name: '',
                    description: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var self = this;
                var newcategory = self.category;
                axios.patch('/api/v0/categories/' + self.categoryId, newcategory)
                    .then(function (resp) {
                        self.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("not category");
                    });
            }
        }
    }
</script>