import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
    beURL: 'http://localhost:8000/api/books/',
    beURLPages: 'http://localhost:8000/api/books?page=',
    userId: NaN,
    books: null,
    page: 1,
    booksPerPage: NaN,
    totalBooks: NaN,
    book: null,
    bookIndex: NaN,
    bookId: NaN,
    getBooks() {
        axios
            .get(this.beURLPages + this.page, {
                params: { user_id: this.userId }
            })
            .then(response => {
                this.books = response.data.data;
                this.totalBooks = response.data.total;
                this.booksPerPage = response.data.per_page;
            })
            .catch(error => console.error(error));
    },
    getBook(id) {
        axios
            .get(this.beURL + id, {
                params: { user_id: this.userId }
            })
            .then(response => {
                this.book = response.data;
            })
            .catch(error => console.error(error));
    },
    updateBook(book, id) {
        axios
            .put(this.beURL + id, book, {
                params: { user_id: this.userId }
            })
            .then(response => {
                this.bookId = NaN;
                this.bookIndex = NaN;
                this.getBooks();
            })
            .catch(error => console.error(error));
    },
    deleteBook(id) {
        axios
            .delete(this.beURL + id, {
                params: { user_id: this.userId }
            })
            .then(response => {
                let i = this.books.map(b => b.id).indexOf(id);
                this.books.splice(i, 1);
                this.bookId = NaN;
            })
            .catch(error => console.error(error));
    },
});