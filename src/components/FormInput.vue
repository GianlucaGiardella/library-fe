<script>
export default {
    props: ['type', 'name', 'modelValue'],
    emits: ['update:modelValue']
}
</script>

<template>
    <input :type="type" class="form-control" :name="name" :id="name" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" required>
</template>