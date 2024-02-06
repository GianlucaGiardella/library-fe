<script>
import { store } from '@/store';
export default {
    props: ['path'],
    data() {
        return {
            store,
        }
    },
    methods: {
        back() {
            this.store.books = null;
            this.store.book = null;
            this.store.page = 1;
            this.store.booksPerPage = NaN;
            this.store.totalBooks = NaN;
            this.store.bookIndex = NaN;
            this.store.bookId = NaN;

            if (this.path === '') {
                this.store.userId = NaN;
            }
            this.$router.push('/' + this.path);
        }
    }
};
</script>

<template>
    <div @click="back()" class="btn btn-secondary rounded-0">
        <h3 class="text fs-3 mb-0">Back</h3>
        <h3 class="logo fs-3 mb-0"><font-awesome-icon :icon="['fas', 'circle-left']" /></h3>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 0.5rem 1rem;
    position: absolute;
    transform: translateY(-60%);
    left: -15px;

    .logo {
        display: none;
    }

    &:hover {
        cursor: pointer;
    }
}

@media (max-width: 767px) {
    div {
        .text {
            display: none;
        }

        .logo {
            display: block;
        }
    }
}
</style>