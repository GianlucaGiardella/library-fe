<script></script>

<template>
  <main class="h-100" style="padding: 6rem 0rem">
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use "./assets/styles/general.scss" as *;

body {
  height: 100vh;
  background-image: url('/app-bg.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
