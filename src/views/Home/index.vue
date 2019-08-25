<template>
  <!-- 
        home 这个一级路由页面组件
  -->
  <div class="page-home">
    <router-view />
    <!-- <ul>
      <li>首页</li>
      <li>详情</li>
      <li>分类</li>
      <li>我的</li>
    </ul>-->
    <Tabbar :tabs="tabs"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '../../components/Tabbar'
export default {
  name: 'Home',
  components: {
    Tabbar
  },
  data () {
    return {
      tabs: [
        { id: 1, name: '影片', icon: 'iconicon-films', href: '/films' },
        { id: 2, name: '影院', icon: 'iconicon-cinemas', href: '/cinemas' },
        { id: 3, name: '分类', icon: 'iconicon-sales', href: '/brand/' },
        { id: 4, name: '我的', icon: 'icon-center', href: '/center' }
      ]
    }
  }
}
</script>

<style lang="scss">
.page-home {
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:first-child {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
