<script>
import { store } from '@/store';
import FormLabel from '@/components/FormLabel.vue';
import FormInput from '@/components/FormInput.vue';
import FormTextarea from '@/components/FormTextarea.vue';

export default {
    components: {
        FormLabel,
        FormInput,
        FormTextarea,
    },
    props: ['bookId', 'bookIndex'],
    data() {
        return {
            store,
            updateBook: {},
        }
    },
    methods: {
        validate() {
            this.$refs.closeCanvas.click();
            this.store.updateBook(this.updateBook, this.bookId);
        },
    },
    watch: {
        'store.bookIndex'() {
            this.updateBook = { ...this.store.books[this.bookIndex] };
        },
    },
};
</script>

<template>
    <div ref="canvas" class="offcanvas offcanvas-end text-start" tabindex="-1" id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel">
        <div class="container">
            <div class="offcanvas-header">
                <h2 class="offcanvas-title" id="offcanvasRightLabel">Update Book</h2>
                <button class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"
                    @click="store.bookIndex = NaN"></button>
            </div>
            <div class="offcanvas-body">
                <form class="row row-cols-1 g-3" @submit.prevent="validate()">
                    <div class="col-12">
                        <FormLabel name="title" title="Title" />
                        <FormInput type="text" name="title" v-model="updateBook.title" min="1" max="80" />
                    </div>
                    <div class="col-12">
                        <FormLabel name="author" title="Author" />
                        <FormInput type="text" name="author" v-model="updateBook.author" min="2" max="50" />
                    </div>
                    <div class="col-6">
                        <FormLabel name="isbn_code" title="ISBN" />
                        <FormInput type="number" name="isbn_code" v-model="updateBook.isbn_code" maxlength="13" />
                    </div>
                    <div class="col-6">
                        <FormLabel name="readings" title="Readings" />
                        <FormInput type="number" name="readings" v-model="updateBook.readings" min="0" />
                    </div>
                    <div class="col-12">
                        <FormLabel name="plot" title="Plot" />
                        <FormTextarea name="plot" v-model="updateBook.plot" />
                    </div>
                    <div class="col-6">
                        <p class="w-100 btn btn-secondary" ref="closeCanvas" data-bs-dismiss="offcanvas">Close</p>
                    </div>
                    <div class="col-6">
                        <button type="submit" class="w-100 btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>