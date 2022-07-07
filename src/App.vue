<template>
  <div id="app">
    <keep-alive include="Home,Search">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
