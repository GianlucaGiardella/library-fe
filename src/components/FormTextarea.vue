<script>
export default {
    props: ['name', 'modelValue'],
    methods: {
        onInput(e) {
            this.$emit("update:modelValue", e.target.value);
        }
    },
}
</script>

<template>
    <textarea class="form-control" :name="name" :id="name" cols="30" rows="12" min="5" :value="modelValue"
        @input="onInput"></textarea>
</template>