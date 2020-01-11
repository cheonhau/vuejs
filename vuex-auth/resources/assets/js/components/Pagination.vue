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
            default : 5
        }
    },
    computed: {
        pagesNumber() {
            let min = 1, length = this.offset, current_page = this.pagination.current_page, total_page = this.pagination.last_page;
            if (length > total_page) length = total_page;

            let start = current_page - Math.floor(length / 2);
            start = Math.max(start, min);
            start = Math.min(start, min + total_page - length);

            return Array.from({length: length}, (el, i) => start + i);
        },
        // có một function ranger nếu page dài quá ta dùng dots ... https://gist.github.com/kottenator/9d936eb3e4e3c3e02598, https://mossiso.com/js-pagination/
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
