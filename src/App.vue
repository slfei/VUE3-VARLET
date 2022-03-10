<template>
  <var-app-bar :title="$route.name" title-position="center"></var-app-bar>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
