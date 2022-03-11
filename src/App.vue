<template>
  <var-app-bar :title="$route.name" title-position="center">
    <template #left>
      <var-button
        round
        text
        color="transparent"
        text-color="#ffffff"
        @click="goBack"
      >
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>
  </var-app-bar>
  <router-view></router-view>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "App",
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back();
    };
    return {
      goBack,
    };
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
