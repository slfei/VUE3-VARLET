<template>
  <var-list :finished="finished" v-model:loading="loading" @load="load">
    <var-cell :key="item" v-for="item in list" @click="goDetail">
      列表项: {{ item }}
    </var-cell>
  </var-list>
</template>
<script>
import { router } from "@/router";
import { ref, reactive } from "vue";

export default {
  setup() {
    const loading = ref(false);
    const finished = ref(false);
    const list = reactive([]);
    const goDetail = () => {
      router.push("/");
    };
    const load = () => {
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          list.push(list.length + 1);
        }

        loading.value = false;

        if (list.length >= 60) {
          finished.value = true;
        }
      }, 1000);
    };

    return {
      list,
      loading,
      finished,
      load,
      goDetail,
    };
  },
};
</script>
