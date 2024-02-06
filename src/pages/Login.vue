<script>
import { store } from '@/store';
import FormInput from '../components/FormInput.vue';
import FormLabel from '../components/FormLabel.vue';

export default {
    components: {
        FormInput,
        FormLabel,
    },
    data() {
        return {
            store,
            email: "",
            password: "",
        };
    },
    methods: {
        checkLogin() {
            if (this.password.toLowerCase() === 'password') {
                if (this.email.toLowerCase() === 'ironman@gmail.com') {
                    this.store.userId = 1;
                    this.$router.push('/books');
                } else if (this.email.toLowerCase() === 'gianlugiarde@gmail.com') {
                    this.store.userId = 2;
                    this.$router.push('/books');
                }
            }
        }
    },
    mounted() {
        this.store.userId = NaN
        this.store.books = null
        this.store.bookDetail = null
        this.store.bookIndex = NaN
        this.store.bookId = NaN
    }
};
</script>

<template>
    <div class="h-100 container">
        <div class="h-100 row justify-content-center align-items-center">
            <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
                <div class="card border border-light-subtle rounded-3">
                    <div class="card-body p-3 p-md-4 p-xl-5">
                        <form @submit.prevent="checkLogin()">
                            <h1 class="text-center mb-4">My Library</h1>
                            <div class="row gy-3 overflow-hidden">
                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <FormInput type="email" name="email" title="Email" placeholder="name@example.com"
                                            v-model="email" />
                                        <FormLabel name="email" title="Email" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating mb-3">
                                        <FormInput type="password" name="password" title="Password" placeholder="Password"
                                            v-model="password" />
                                        <FormLabel name="password" title="Password" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" name="remember_me"
                                            id="remember_me">
                                        <label class="form-check-label text-secondary" for="remember_me">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button class="btn btn-primary btn-lg" type="submit">Log In</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>