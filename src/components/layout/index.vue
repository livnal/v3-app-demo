<template>
  <div class="layout-container">
    <div class="content-container">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active">
      <router-link to="/home"
        ><van-tabbar-item icon="home-o">首页</van-tabbar-item></router-link
      >
      <router-link to="/map"
        ><van-tabbar-item icon="search">地图</van-tabbar-item></router-link
      >
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);
</script>

<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content-container {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 50px;
}
</style>
