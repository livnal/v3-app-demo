<!--
 * @Descripttion:
 * @version:
 * @FilePath: /v3-app-demo/src/views/home/index.vue
-->
<template>
  <h2>首页</h2>
  <div>
    <h3>store2：</h3>
    <i>{{ userStore2 }}</i>

    <div style="padding: 5px" @click="clickChangeAge">改变age:{{ userStore2.age }}</div>
    <div>isBigAge:{{ userStore2.isBigAge }}</div>
  </div>

  <div>
    <h3>store：</h3>
    <i>{{ userStore }}</i>

    <div style="padding: 5px" @click="clickChangeAge1">改变age:{{ userStore.age }}</div>
    <div>gettersName：{{ userStore.gettersName }}</div>
    <div>gettersAge:{{ userStore.gettersAge(1996) }}</div>
    <div>gettersOtherStore：{{ userStore.gettersOtherStore }}</div>
  </div>
</template>
<script setup>
import { useUserStore2, useUserStore } from "@/store/user";
import { storeToRefs } from "pinia";

const userStore2 = useUserStore2();
const userStore = useUserStore();

// 从store中解构出响应式数据，需要使用storeToRefs
const { name, age, isBigAge } = storeToRefs(userStore2);

const clickChangeAge = () => {
  console.log("userStore2", userStore2.age);
  // 方式一：直接修改age，同样会触发响应式
  // userStore2.age++;
  // 方式二：需要使用store的action方法
  // userStore2.setAge(userStore2.age + 1);
  // 方式三：批量修改
  // userStore2.$patch({
  //   age: userStore2.age + 1,
  //   name: userStore2.name + "1",
  // });
  // 方式四：批量修改 $patch(函数) 强烈推荐
  userStore2.$patch((state) => {
    state.age++;
    state.name += "1";
  });
  console.log("age", age.value);
};

const clickChangeAge1 = () => {
  console.log("userStore", userStore.age);
  // 方式一：直接修改age，同样会触发响应式
  // userStore.age++;
  // 方式二：需要使用store的action方法
  // userStore.setAge(userStore.age + 1);
  // 方式三：批量修改
  // userStore.$patch({
  //   age: userStore.age + 1,
  //   name: userStore.name + "1",
  // });
  // 方式四：批量修改 $patch(函数) 强烈推荐
  userStore.$patch((state) => {
    state.age++;
    state.name += "1";
  });
  console.log("age", age.value);
};

console.log("userStore2", userStore2);
console.log("userStore", userStore);
</script>
