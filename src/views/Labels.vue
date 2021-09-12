<template>
  <div class="nav-wrapper">
    <div class="content">
       Labels.vue
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Labels"
}
</script>

<style scoped>
.nav-wrapper {
  display: flex;
  border: 1px solid green;
  flex-direction: column;
  height: 100vh;
}
.content{
  overflow: auto;
  flex-grow: 1;
}
</style>