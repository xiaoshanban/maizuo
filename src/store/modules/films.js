import request from "../../utils/request";

export default {
  namespaced: true,
  state: {
    bannerList: []
  },
  getters: {
    bannerListImgs(state) {
      return state.bannerList.map(item => item.img);
    }
  },
  mutations: {
    setBannerList(state, payload) {
      state.bannerList = payload;
    }
  },
  actions: {
    getBannerList({ commit }) {
      request.get("/banner").then(data => {
        commit("setBannerList", data);
      });
    }
  }
};
