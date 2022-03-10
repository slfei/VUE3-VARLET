<template>
  <var-form
    ref="form"
    :disabled="disabled"
    :readonly="readonly"
    style="margin-top: 40px; margin: auto 10px"
  >
    <var-space direction="column" justify="center" :size="[10, 10]">
      <var-input
        placeholder="请输入用户名"
        :rules="[(v) => !!v || '用户名不能为空']"
        v-model="formData.username"
      />
      <var-input
        type="password"
        placeholder="请输入密码"
        :rules="[(v) => !!v || '密码不能为空']"
        v-model="formData.password"
      />
      <var-select
        placeholder="请选择部门"
        :rules="[(v) => !!v || '必须选一个部门']"
        v-model="formData.department"
      >
        <var-option label="吃饭部" />
        <var-option label="睡觉部" />
        <var-option label="打游戏部" />
      </var-select>
      <var-radio-group
        :rules="[(v) => !!v || '必须选择一个性别']"
        v-model="formData.gender"
      >
        <var-radio :checked-value="1">男</var-radio>
        <var-radio :checked-value="2">女</var-radio>
      </var-radio-group>
      <var-divider description="请选择爱好" />
      <var-checkbox-group
        :rules="[(v) => v.length > 0 || '至少选择一个爱好']"
        v-model="formData.like"
      >
        <var-checkbox :checked-value="1">吃饭</var-checkbox>
        <var-checkbox :checked-value="2">睡觉</var-checkbox>
        <var-checkbox :checked-value="3">打游戏</var-checkbox>
      </var-checkbox-group>
      <var-button
        class="submit-btn"
        block
        type="primary"
        @click="validate(form)"
        >登录</var-button
      >
    </var-space>
  </var-form>
</template>
<script>
import { router } from "@/router";
import { reactive, ref } from "vue";
import { Snackbar } from "@varlet/ui";
export default {
  setup() {
    let validate = function (form) {
      form.validate().then((res) => {
        if (res) {
          router.push("/");
        }
      });
    };
    let goBack = function () {
      Snackbar({
        content: "返回",
        position: "top",
      });
    };
    const formData = reactive({
      username: "",
      password: "",
      department: "",
      gender: undefined,
      license: false,
      range: 10,
      count: 0,
      group: [],
      score: 0,
      like: [],
      files: [],
    });

    const form = ref(null).value;
    const disabled = ref(false);
    const readonly = ref(false);
    return {
      form,
      formData,
      disabled,
      readonly,
      validate,
      goBack,
    };
  },
};
</script>
<style scoped>
.submit-btn {
  margin-top: 60px;
}
</style>
