// initial state
// shape: [{ id, quantity }]
const state = {
  new: false,
  owner: false,
  staff: false
};

// getters
const getters = {};

// actions
const actions = {};

export const MutationTypes = {
  SHOW_MODAL_NEW: "SHOW_MODAL_NEW",
  HIDE_MODAL_NEW: "HIDE_MODAL_NEW",
  SHOW_MODAL_OWNER: "SHOW_MODAL_OWNER",
  HIDE_MODAL_OWNER: "HIDE_MODAL_OWNER",
  SHOW_MODAL_STAFF: "SHOW_MODAL_STAFF",
  HIDE_MODAL_STAFF: "HIDE_MODAL_STAFF"
};

// mutations
const mutations = {
  [MutationTypes.SHOW_MODAL_NEW]: state => (state.new = true),
  [MutationTypes.HIDE_MODAL_NEW]: state => (state.new = false),
  [MutationTypes.SHOW_MODAL_OWNER]: state => (state.owner = true),
  [MutationTypes.HIDE_MODAL_OWNER]: state => (state.owner = false),
  [MutationTypes.SHOW_MODAL_STAFF]: state => (state.staff = true),
  [MutationTypes.HIDE_MODAL_STAFF]: state => (state.staff = false)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
