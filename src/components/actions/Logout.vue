<script>
import { store } from '@/store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        logout() {
            this.store.userId = NaN;
            this.store.books = null;
            this.store.page = 1;
            this.store.booksPerPage = NaN;
            this.store.totalBooks = NaN;
            this.store.book = null;
            this.store.bookIndex = NaN;
            this.store.bookId = NaN;
            this.$router.push('/');
        }
    }
};
</script>

<template>
    <div @click="logout()" class="btn btn-secondary rounded-0">
        <h3 class="text fs-3 mb-0">Log Out</h3>
        <h3 class="logo fs-3 mb-0"><font-awesome-icon :icon="['fas', 'right-from-bracket']" /></h3>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 0.5rem 1rem;
    position: absolute;
    transform: translateY(-60%);
    right: -15px;

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