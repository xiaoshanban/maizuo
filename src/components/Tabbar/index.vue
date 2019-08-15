
<template>
  <!-- 
        底部选项组件
  -->
  <ul class="mz-tabbar">
    <li v-for="item in tabs" :key="item.id">
      <router-link :to="item.href">
        <i class="iconfont" :class="[item.icon]"></i>
        <span>{{item.name}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tabbar',
  props: { // 
    tabs: Array
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
.mz-tabbar {
  @include border-top;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  li {
    flex: 1;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #797d82;
    font-size: 14px;
    &.router-link-active {
      color: #ff5f16;
    }
  }
  .iconfont {
    font-size: 24px;
  }
}
</style>
