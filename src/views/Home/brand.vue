<template>
  <div class="page-home-brang">
    <div class="left" ref="left">
      <ul>
        <li :class="{'active': !$route.params.brandId}" @click="fn1('')">推荐</li>
        <li
          v-for="item in brands"
          :key="item.id"
          :class="{'active': item.id === parseInt($route.params.brandId)}"
          @click="fn1(item.id)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div class="right" ref="myRight">
      <ul>
        <li v-for="item in phones" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request'
import { Toast } from 'vant'
import BScroll from 'better-scroll'
export default {
  name: 'brang',
  data () {
    return {
      brands: [],
      phones: [],
      // curBrandId: ''
    }
  },
  methods: {
    getBrand () {
      request.get('http://localhost:8080/api/portal-api/product/category-brands/1').then(res => {
        if (res.code === 0) {
          this.brands = res.data
        }
        new BScroll(this.$refs['left'], {
          click: true
        })
      })
    },
    getPhone () {
      Toast.loading({ duration: 0 })
      request.post('http://localhost:8080/api/portal-api/product/search', {
        pageIndex: 0,
        pageSize: 20,
        refresh: true,
        brandId: this.$route.params.brandId,
        categoryId: 1
        // isRecommend: this.$route.params.brandId === '' ? true : false
      }).then(res => {
        if (res.code === 0) {
          this.phones = res.data
        }
        Toast.clear()
        new BScroll(this.$refs['myRight'])
      })
    },
    fn1 (id) {
      this.$router.replace(`/brand/${id}`)
      // this.$router.replace({
      //   name: 'brand',
      //   params: {
      //     brandId: id
      //   }
      // })
      // if (this.curBrandId === id) {
      //   return
      // }
      // this.curBrandId = id
      this.phones = []
      // this.getPhone()

    }
  },
  created () {
    this.getBrand()
    // this.getPhone()
  },
  watch: {
    $route: {
      handler () {
        this.getPhone()
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss">
.page-home-brang {
  display: flex;
  .left {
    width: 80px;
    overflow-y: auto;
    li {
      position: relative;
      height: 56px;
      line-height: 56px;
      text-align: center;
      border-right: 1px solid #e1e1e1;
      border-bottom: 1px solid #e1e1e1;
      box-sizing: border-box;
      &.active {
        background: #f9faff;
        border: none;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          display: block;
          width: 6px;
          height: 100%;
          background: #f9e72c;
        }
      }
    }
  }
  .right {
    flex: 1;
    overflow-y: auto;
    li {
      height: 56px;
      line-height: 56px;
      padding-left: 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #e1e1e1;
    }
  }
}
</style>
