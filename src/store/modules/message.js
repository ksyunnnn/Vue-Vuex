// hoge

// initial state
const state = {
  history: ["first"],
  write: {
    message: ""
  }
};

// getters
const getters = {};

// mutations
export const MutationTypes = {
  SET_HISTORY: "SET_HISTORY",
  SET_WRITE_MESSAGE: "SET_WRITE_MESSAGE"
};

const mutations = {
  [MutationTypes.SET_HISTORY]: (state, history) => (state.history = history),
  [MutationTypes.SET_WRITE_MESSAGE]: (state, message) =>
    (state.write.message = message)
};

// actions
export const ActionTypes = {
  WRITE_MESSAGE: "WRITE_MESSAGE",
  PUSH_HISTORY: "PUSH_HISTORY"
};
const actions = {
  [ActionTypes.WRITE_MESSAGE]: ({ commit }, payload) => {
    commit(MutationTypes.SET_WRITE_MESSAGE, payload.value);
  },
  [ActionTypes.PUSH_HISTORY]: ({ commit, state }) => {
    commit(MutationTypes.SET_HISTORY, [...state.history, state.write.message]);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
