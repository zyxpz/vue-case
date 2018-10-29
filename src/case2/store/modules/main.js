const initState = {
  num: 1,
};

const getters = {};

const actions = {
  add({ commit, state }) {
    commit('add', state.num + 1);
  },

  reduce({ commit, state }) {
    commit('add', state.num - 1);
  },
};

const mutations = {
  add(state, status) {
    const newState = state;
    newState.num = status;
  },

  reduce(state, status) {
    const newState = state;
    newState.num = status;
  },
};


export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
