<template>
  <div class="film-list">
    <ul class="film-list__ul">
      <li class="film-list__item" v-for="item in filmList" :key="item.filmId">
        <a href="#">
          <div class="film-img">
            <img :src="item.poster" />
          </div>
          <div class="film-info">
            <p class="film-info-title">
              <span>{{item.name}}</span>
              <span>{{item.item.name}}</span>
            </p>
            <p class="film-info-grade" :style="{visibility: item.grade ? '' : 'hidden'} ">
              观众评分
              <span>{{item.grade}}</span>
            </p>
            <p class="film-info-actors" v-if="item.actors">主演：{{ item.actors | formatActors}}</p>
            <p class="film-info-actors" v-else>主演：暂无主演</p>
            <p class="film-info-detail" v-if="item.nation">{{item.nation}} | {{item.runtime}}分钟</p>
            <p class="film-info-detail" v-else>{{item.runtime}}分钟</p>
          </div>
          <div class="film-btn">
            <button v-if="filmType === 'nowPlaying'">购票</button>
            <button v-else style="color:#ffb232;border-color:#ffb232">预购</button>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FilmList',
  props: {
    filmList: Array,
    filmType: {
      type: String,
      validator (value) {
        return ['nowPlaying', 'comingSoon'].indexOf(value) > -1
      }
    }
  },
  filters: {
    formatActors (value = []) {
      let arr = value.map(item => {
        return item.name
      })
      let str = arr.join(' ')
      return str
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/common/mixin.scss";
.film-list {
  .film-list__ul {
    margin-left: 15px;
  }

  .film-list__item {
    @include border-bottom;
    height: 94px;
    padding: 15px 15px 15px 0;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    font-size: 12px;
    color: #797d82;
  }
  .film-img {
    width: 66px;
    img {
      width: 100%;
    }
  }

  .film-info {
    flex: 1;
    padding: 0 10px;
    line-height: 1.65;
    overflow: hidden;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .film-info-grade {
    span {
      color: #ffb232;
    }
  }
  .film-info-title {
    font-size: 16px;
    color: #191a1b;
    span:nth-child(1) {
      display: inline-block;
      vertical-align: middle;
      margin-right: 5px;
    }
    span:nth-child(2) {
      display: inline-block;
      font-size: 10px;
      background: #d2d6dc;
      padding: 0 2px;
      border-radius: 2px;
      color: #fff;
      line-height: 14px;
      vertical-align: middle;
    }
  }
  .film-btn {
    width: 50px;
    height: 25px;
    button {
      color: #ff5f16;
      width: 50px;
      height: 25px;
      font-size: 14px;
      text-align: center;
      border-radius: 2px;
      border: 1px solid #ff5f16;
      background: none;
    }
  }
}
</style>
