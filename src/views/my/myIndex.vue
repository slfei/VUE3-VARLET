<template>
  <var-skeleton title avatar card :rows="3" :loading="loading">
    <canvas id="myCanvas"></canvas>
  </var-skeleton>
</template>
<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const loading = ref(false);

    const fullscreen = () => {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };
    const tree_plot = (ctx, p, a, w, h, l) => {
      if (l > 8) {
        return;
      }
      const [x, y] = p;
      ctx.translate(x, y);
      ctx.rotate((a * Math.PI) / 180);
      ctx.moveTo(-w / 2, 0);
      ctx.lineTo((-w * 0.65) / 2, -h);
      ctx.lineTo((w * 0.65) / 2, -h);
      ctx.lineTo(w / 2, 0);
      ctx.fillStyle = "#36BD13";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fill();
      const nextX = x + h * Math.sin((a * Math.PI) / 180);
      const nextY = y - h * Math.cos((a * Math.PI) / 180);
      tree_plot(ctx, [nextX, nextY], a + 15, w * 0.65, h * 0.9, l + 1);
      tree_plot(ctx, [nextX, nextY], a - 15, w * 0.65, h * 0.9, l + 1);
    };
    const draw = () => {
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      tree_plot(ctx, [140, 160], 0, 20, 30, 2);
    };
    onMounted(() => {
      draw();
    });
    return {
      loading,
      fullscreen,
      draw,
      tree_plot,
    };
  },
};
</script>
<style>
#myCanvas {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
}
</style>
