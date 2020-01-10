<template>
    <ul class="pagination">
        <li class="disabled page-item" v-if="onFirstPage()">
            <a href="javascript:void(0)" class="page-link">&laquo;</a>
        </li>
        <li class="page-item" v-else>
            <a href="javascript:void(0)" @click="changePage(1)" class="page-link">&laquo;</a>
        </li>

        <li class="disabled page-item" v-if="onFirstPage()">
            <a href="javascript:void(0)" class="page-link">&lsaquo;</a>
        </li>
        <li class="page-item" v-else>
            <a href="javascript:void(0)" @click="changePage(pagination.current_page - 1)" class="page-link">&lsaquo;</a>
        </li>

        <li class="page-item" v-for="(page, index) in pagesNumber" :class="{'active': page == pagination.current_page}" :key="'pagination'+index">
            <a href="javascript:void(0)" v-on:click.prevent="changePage(page)" class="page-link">{{ page }}</a>
        </li>

        <li class="disabled page-item" v-if="onLastPage()">
            <a href="javascript:void(0)" class="page-link">&rsaquo;</a>
        </li>
        <li class="page-item" v-else>
            <a href="javascript:void(0)" @click="changePage(pagination.current_page + 1)" class="page-link">&rsaquo;</a>
        </li>

        <li class="disabled page-item" v-if="onLastPage()">
            <a href="javascript:void(0)" class="page-link">&raquo;</a>
        </li>
        <li class="page-item" v-else>
            <a href="javascript:void(0)" @click="changePage(pagination.last_page)" class="page-link">&raquo;</a>
        </li>

    </ul>
</template>
<script>
export default {
    props : {
        pagination : {},
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
