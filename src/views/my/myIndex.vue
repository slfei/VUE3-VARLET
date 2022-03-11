<template>
  <var-skeleton title avatar card :rows="3" :loading="loading">
    加载的数据
  </var-skeleton>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    const loading = ref(false);

    const fullscreen = () => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };

    return {
      loading,
      fullscreen,
    };
  },
};
</script>
