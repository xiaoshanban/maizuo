<template>
  <!-- 
        城市选择这个一级路由页面组件
  -->
  <div class="page-city">
    <van-nav-bar title="当前城市" left-arrow @click-left="onClickLeft" />
    <van-search placeholder="请输入城市名或拼音" v-model="value" />
    <div class="page-city__body">
      <div class="left" ref="myBox">
        <div class="city-box">
          <p class="city-box__title">GPS定位你所在城市</p>
          <ul>
            <li class="city-box__item">深圳</li>
          </ul>
        </div>
        <div class="city-box">
          <p class="city-box__title">热门城市</p>
          <ul>
            <li class="city-box__item">北京</li>
            <li class="city-box__item">上海</li>
            <li class="city-box__item">广州</li>
            <li class="city-box__item">深圳</li>
          </ul>
        </div>
        <ul class="city-list">
          <li
            class="city-list__item"
            v-for="item in cityList"
            :key="item.py"
            :ref="'item-' + item.py"
          >
            <p class="item-title">{{item.py}}</p>
            <ul>
              <li v-for="a in item.list" :key="a.cityId">{{a.name}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="i in pys" :key="i" @click="fn1(i)">{{i}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'City',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapGetters('city', ['cityList', 'pys'])
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    ...mapActions('city', ['getCities']),
    fn1 (i) {
      let itemBox = this.$refs[`item-${i}`][0]
      let offsetTop = itemBox.offsetTop - 100
      this.$refs['myBox'].scrollTop = offsetTop

    }
  },
  created () {
    this.getCities()
  }
}
</script>

<style lang="scss">
.van-nav-bar {
  .van-icon-arrow-left {
    color: #191a1b;
    font-size: 18px;
  }
}
</style>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
.page-city {
  display: flex;
  height: 100%;
  flex-direction: column;
  .page-city__body {
    flex: 1;
    display: flex;
    overflow: hidden;
  }
  .left {
    flex: 1;
    overflow-y: auto;
  }
  .right {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      width: 100%;
      li {
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
      }
    }
  }
  .city-box {
    padding: 0px 0 0 15px;
    &__title {
      font-size: 14px;
      color: #797d82;
      margin: 5px 0;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 98px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 2px;
        background: #f4f4f4;
        margin: 10px 5px;
        color: #191a1b;
        font-size: 14px;
      }
    }
  }
  .city-list__item {
    .item-title {
      background: #f4f4f4;
      color: #797d82;
      padding-left: 15px;
      height: 30px;
      line-height: 30px;
      box-sizing: border-box;
    }
    ul {
      padding-left: 20px;
    }
    li {
      @include border-bottom;
      height: 48px;
      line-height: 48px;
      width: 100%;
      color: #191a1b;
      &:last-child::after {
        height: 0;
      }
    }
  }
}
</style>
