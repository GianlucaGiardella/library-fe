<script>
export default {
    computed: {
        title() {
            return this.$route.meta.title;
        },
    },
};
</script>

<template>
    <div class="bg-primary">
        <h1 class="text-light fs-3 m-0">{{ title }}</h1>
    </div>
</template>

<style lang="scss" scoped>
div {
    padding: 0.5rem 1rem;
    position: absolute;
    transform: translate(-50%, -60%);
    left: 50%;
}

@media (max-width: 767px) {
    div {
        transform: translate(-50%, -60%);
        left: 50%;
    }
}
</style>