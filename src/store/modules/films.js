import request from "../../utils/request";

export default {
  namespaced: true,
  state: {
    bannerList: [], // 热门影片轮播图 数据
    filmList: [], // 影片列表数据
    total: 1 // 一共有多条数据
  },
  getters: {
    bannerListImgs(state) {
      return state.bannerList.map(item => item.img);
    }
  },
  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload;
    },
    setFilmList(state, payload) {
      state.filmList = payload.films;
      state.total = payload.total;
    }
  },
  actions: {
    /***
     * 获取轮播图数据
     */
    getBannerList({ commit }) {
      request.get("http://localhost:3000/banner").then(data => {
        commit("setBannerList", data);
      });
    },

    /***
     * 获取影片列表数据
     */
    getFilmList({ commit, state }, payload) {
      request
        .get("/gateway", {
          params: {
            cityId: 440300,
            pageNum: payload.pageNum,
            pageSize: payload.pageSize,
            type: payload.filmType === 0 ? 1 : 2,
            k: 2809619
          },
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156584910960129542198"}',
            "X-Host": "mall.film-ticket.film.list"
          }
        })
        .then(res => {
          console.log(res);
          if (res.status === 0) {
            commit({
              type: "setFilmList",
              films: state.filmList.concat(res.data.films),
              total: res.data.total
            });
            payload.callback();
          }
        });
    }
  }
};
