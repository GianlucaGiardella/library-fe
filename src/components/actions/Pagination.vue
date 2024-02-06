<script>
import { store } from '@/store';

export default {
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <vue-awesome-paginate class="pagination" :items-per-page="store.booksPerPage" :total-items="store.totalBooks"
        v-model="store.page" :max-pages-shown="3" prev-button-content="&laquo;" next-button-content="&raquo;"
        @click="store.getBooks()" />
</template>

<style lang="scss">
.paginate-buttons {
    height: 36px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    background-color: white;
    border: 0.5px solid rgb(217, 217, 217);
    color: #0d6efd;
}

.active-page {
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    color: white;
}

.back-button {
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
}

.next-button {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
}
</style>