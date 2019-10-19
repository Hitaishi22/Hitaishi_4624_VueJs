import { api } from "../api";
export default {
  namespaced: true,
  state: {
    tags: []
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getTags() {
      const response= await api.get("/tags");
      debugger;
      state.tags= response.data;
    }
  }
};
