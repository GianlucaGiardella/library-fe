<script>
export default {
    props: ['name', 'title'],
}
</script>

<template>
    <label :for="name" class="form-label">{{ title }}</label>
</template>