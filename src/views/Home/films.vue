<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="loadFilmList">
    <div class="page-home-films">
      <Banner :imgs="bannerListImgs" v-if="bannerListImgs.length > 0"></Banner>
      <van-tabs v-model="filmType" sticky>
        <van-tab title="正在热映">
          <FilmsList filmType="nowPlaying" :filmList="filmList"></FilmsList>
        </van-tab>
        <van-tab title="即将上映">
          <FilmsList filmType="comingSoon" :filmList="filmList"></FilmsList>
        </van-tab>
      </van-tabs>
    </div>
    <router-link to="/city" tag="div" class="city-fixed">
      <span>深圳</span>
    </router-link>
  </van-list>
</template>

<script>
import Banner from '../../components/Banner/index'
import FilmsList from '../../components/FilmList/index'
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex'
import { log } from 'util';
export default {
  name: 'films',
  data () {
    return {
      loading: false,
      finished: false,
      filmType: 0,// 当前影片类型， 0-正在热映 1-即将上映
      pageNum: 0,
      pageSize: 10
    }
  },
  components: {
    Banner,
    FilmsList
  },
  watch: {
    filmType () {
      this.pageNum = 0
      this.$el.scrollTop = 1
      this.finished = false
      this.setFilmList({
        films: [],
        total: this.total
      })
    }
  },
  computed: {
    ...mapGetters('films', ['bannerListImgs']),
    ...mapState('films', ['filmList', 'total']),
    totalPage () {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  methods: {
    ...mapActions('films', ['getBannerList', 'getFilmList']),
    ...mapMutations('films', ['setFilmList']),
    loadFilmList () {
      console.log(1);
      this.pageNum++
      this.getFilmList({
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        filmType: this.filmType,
        callback: () => {
          this.loading = false
          if (this.pageNum >= this.totalPage) {
            this.finished = true
          }
        }
      })
    },
    fn1 () {
      console.log(1);

    }
  },
  created () {
    this.getBannerList()

  }
}
</script>

<style lang="scss">
.van-list {
  position: relative;
  .city-fixed {
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0, 0, 0, 0.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
}
</style>
