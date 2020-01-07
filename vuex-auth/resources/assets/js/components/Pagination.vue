<template>
    <ul class="pagination">
        <li class="disabled" v-if="onFirstPage()">
            <span>&laquo;</span>
        </li>
        <li v-else>
            <a href="javascript:void(0)" @click="changePage(1)">&laquo;</a>
        </li>

        <li class="disabled" v-if="onFirstPage()">
            <span>&lsaquo;</span>
        </li>
        <li v-else>
            <a href="javascript:void(0)" @click="changePage(pagination.current_page - 1)">&lsaquo;</a>
        </li>

        <li v-for="(page, index) in pagesNumber" :class="{'active': page == pagination.current_page}" :key="'pagination'+index">
            <a href="javascript:void(0)" v-on:click.prevent="changePage(page)">{{ page }}</a>
        </li>

        <li class="disabled" v-if="onLastPage()">
            <span>&rsaquo;</span>
        </li>
        <li v-else>
            <a href="javascript:void(0)" @click="changePage(pagination.current_page + 1)">&rsaquo;</a>
        </li>

        <li class="disabled" v-if="onLastPage()">
            <span>&raquo;</span>
        </li>
        <li v-else>
            <a href="javascript:void(0)" @click="changePage(pagination.last_page)">&raquo;</a>
        </li>

    </ul>
</template>
<script>
export default {
    props : {
        pagination : {
            type : Object,
            required : true
        },
        offset : {
            type : Number,
            default : 4
        }
    },
    computed: {
        pagesNumber() {
            if (!this.pagination.to) {
                return [];
            }
            let from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            let to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            let pagesArray = [];
            for (let page = from; page <= to; page++) {
                pagesArray.push(page);
            }
            return pagesArray;
        }
    },
    methods: {
        onFirstPage () {
            if ( this.pagination.current_page == 1 || this.pagination.length == 0 ) {
                return true;
            }
            return false;
        },
        onLastPage () {
            if ( this.pagination.length == 0 || this.pagination.current_page == this.pagination.last_page ) {
                return true;
            }
            return false;
        },
        changePage( page ) {
            this.pagination.current_page = page;
            this.$emit('paginate', page);
        }
    },
}
</script>
