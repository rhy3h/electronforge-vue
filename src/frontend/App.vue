<template>
  <div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>

    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
h1 {
  color: red;
}
</style>
