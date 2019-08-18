import request from "../../utils/request";
export default {
  namespaced: true,
  state: {
    cities: [] // 全部城市数据
  },
  mutations: {
    setCities(state, payload) {
      state.cities = payload.cities;
    }
  },
  getters: {
    cityList(state) {
      let result = [];
      state.cities.forEach(item => {
        let py = item.pinyin.charAt(0).toUpperCase();
        let index = result.findIndex(a => {
          return a.py === py;
        });
        if (index > -1) {
          result[index].list.push(item);
        } else {
          let obj = {
            py,
            list: [item]
          };
          result.push(obj);
        }
      });
      return result.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt();
      });
    },
    pys(state, getters) {
      return getters.cityList.map(item => item.py);
    }
  },
  actions: {
    getCities({ commit }) {
      request
        .get("/gateway?k=9634874", {
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156584910960129542198"}',
            "X-Host": "mall.film-ticket.city.list"
          }
        })
        .then(res => {
          if (res.status === 0) {
            commit({
              type: "setCities",
              cities: res.data.cities
            });
          }
        });
    }
  }
};
