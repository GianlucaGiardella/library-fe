<script>
import { store } from '@/store';
import Update from '@/components/actions/Update.vue';
import Delete from '@/components/actions/Delete.vue';
import Back from '@/components/actions/Back.vue';
import Title from '@/components/Title.vue';
import Logout from '@/components/actions/Logout.vue';
import Pagination from '@/components/actions/Pagination.vue';

export default {
    components: {
        Update,
        Delete,
        Back,
        Title,
        Logout,
        Pagination,
    },
    data() {
        return {
            store,
            arrBooks: [],
        };
    },
    watch: {
        'store.books'() {
            this.arrBooks = this.store.books;
        }
    },
    mounted() {
        isNaN(this.store.userId) ? this.$router.push('/') : this.store.getBooks();
    },
};
</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-xxl-10">
                <div class="card border border-light-subtle rounded" style="height: calc(100vh - 12rem);">
                    <Back path="" />
                    <Title />
                    <Logout />
                    <div class="card-body p-4 d-flex flex-column justify-content-between">
                        <!-- Books Table -->
                        <table class="table text-center">
                            <thead class="w-100">
                                <tr>
                                    <th scope="col">#</th>
                                    <th class="" scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Readings</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(book, index) in arrBooks" :key="book.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ book.title }}</td>
                                    <td>{{ book.author }}</td>
                                    <td>{{ book.readings }}</td>
                                    <td class="d-flex justify-content-center gap-2">

                                        <!-- Show Book Page Btn -->
                                        <router-link :to="{ name: 'book-details', params: { id: book.id } }">
                                            <a class="btn btn-outline-primary" href=""><font-awesome-icon
                                                    :icon="['fas', 'circle-info']" /></a>
                                        </router-link>

                                        <!-- Update Book OffCanvas Btn -->
                                        <button class="btn btn-outline-secondary" type="button" data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                                            @click="store.bookIndex = index, store.bookId = book.id"><font-awesome-icon
                                                :icon="['fas', 'pen']" />
                                        </button>

                                        <!-- Delete Book Modal Btn -->
                                        <button class="btn btn-outline-danger" data-bs-toggle="modal"
                                            data-bs-target="#exampleModal" @click="store.bookId = book.id">
                                            <font-awesome-icon :icon="['fas', 'trash']" />
                                        </button>
                                    </td>
                                </tr>

                                <!-- Off Canvas Update -->
                                <Update :bookId="store.bookId" :bookIndex="store.bookIndex" />

                                <!-- Modal Delete -->
                                <Delete :bookId="store.bookId" />
                            </tbody>
                        </table>

                        <!-- Pagination -->
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.alert-fixed {
    width: 30%;
    position: fixed;
    transform: translateX(-50%);
    top: 0px;
    left: 50%;
    z-index: 9999;
    border-radius: 0px
}
</style>