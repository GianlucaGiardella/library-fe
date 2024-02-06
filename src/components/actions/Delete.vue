<script>
import { store } from '@/store';

export default {
    props: ['bookId'],
    data() {
        return {
            store,
        }
    },
};
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog rounded">
            <div class="modal-content border-0">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Are you sure
                        ?
                    </h1>
                    <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button class="btn btn-danger" data-bs-dismiss="modal" @click="store.deleteBook(bookId)">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>