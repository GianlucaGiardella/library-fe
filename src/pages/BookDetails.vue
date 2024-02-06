<script>
import { store } from '@/store';
import Back from '@/components/actions/Back.vue';
import Title from '@/components/Title.vue';
import Logout from '@/components/actions/Logout.vue';

export default {
    components: {
        Back,
        Title,
        Logout,
    },
    data() {
        return {
            store,
            book: {},
        };
    },
    watch: {
        'store.book'(book) {
            if (book !== null) {
                this.book = book;
            }
        },
    },
    mounted() {
        isNaN(this.store.userId) ? this.$router.push('/') : this.store.getBook(this.$route.params.id);
    },
};
</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-xxl-10 p-relative">
                <div class="card border-0 p-relative z-3">
                    <Back path="books" />
                    <Title />
                    <Logout />
                    <div class="h-100 d-flex flex-column flex-md-row-reverse rounded overflow-y-scroll overflow-hidden">
                        <img class="col-12 col-md-6" src="/detail-bg.jpg" alt="book illustration">
                        <div class="h-100 col-12 col-md-6 card-body">
                            <div class="h-100 p-2 d-flex flex-column">
                                <strong class="fs-6 mb-0">Title: </strong>
                                <h1 class="mb-0">{{ book.title }}</h1>
                                <h2 class="align-self-end ms-3 mb-3 fs-4"><span class="fs-6">by:</span>
                                    {{ book.author }}</h2>
                                <div class="fs-6 d-flex justify-content-between">
                                    <p><strong class="">ISBN:</strong> {{ book.isbn_code }}</p>
                                    <p><strong class="">Readings:</strong> {{ book.readings }}
                                    </p>
                                </div>
                                <strong class="fs-6 mb-2">Plot: </strong>
                                <p class="overflow-y-scroll">{{ book.plot }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    height: calc(100vh - 12rem);

    strong {
        font-style: italic;
        color: #333;
    }

    img {
        background-position: center;
        background-size: cover;
    }
}
</style>