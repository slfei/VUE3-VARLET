<template>
  <var-swipe class="swipe" :autoplay="2000">
    <var-swipe-item v-for="item in imgs" :key="item">
      <img class="swipe-item" :src="item" />
    </var-swipe-item>
  </var-swipe>
  <var-rate
    v-model="score"
    :count="8"
    icon="heart"
    half-icon="heart-half-full"
    empty-icon="heart-outline"
    color="red"
    half
  ></var-rate>
  <var-row :gutter="10" class="row">
    <var-col :span="8" v-for="img in imgs" :key="img">
      <div class="var-elevation--12">
        <img class="swipe-item" :src="img" @click="imagePreview(img)" /></div
    ></var-col>
  </var-row>
  <var-tabs
    style="position: fixed; bottom: 0; width: 100%"
    elevation
    item-direction="vertical"
    color="#2979ff"
    active-color="#fff"
    inactive-color="hsla(0, 0%, 100%, .6)"
    v-model:active="active"
  >
    <var-tab @click="goList">
      <var-icon class="icon" name="content-copy" />
      <div>列表</div>
    </var-tab>
    <var-tab @click="goList">
      <var-icon class="icon" name="account-circle-outline" />
      <div>我的</div>
    </var-tab>
  </var-tabs>
</template>
<script>
import { useRouter } from "vue-router";
import { ref, reactive, toRefs } from "vue";

import { ImagePreview } from "@varlet/ui";

export default {
  setup() {
    let imgs = [
      "https://varlet.gitee.io/varlet-ui/cat.jpg",
      "https://varlet.gitee.io/varlet-ui/cat2.jpg",
      "https://varlet.gitee.io/varlet-ui/cat3.jpg",
    ];
    let reaciveImg = reactive({ imgs });
    let refImgs = toRefs(reaciveImg);
    let router = useRouter();
    let active = ref("content-copy");
    let score = ref(3.5);

    let goList = (active) => {
      router.push(active ? "/my" : "/list");
    };

    let imagePreview = (imgUrl) => {
      ImagePreview({ images: [imgUrl], closeable: true });
    };
    return {
      ...refImgs,
      active,
      score,
      goList,
      imagePreview,
    };
  },
};
</script>
<style scoped>
.swipe {
  height: 240px;
}

.swipe-item {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.row div {
  height: 120px;
  text-align: center;
  line-height: 120px;
}
</style>
