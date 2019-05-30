export default {
  state() {
    return {
      salad: []
    }
  },

  mutations: {
    addIngredient(state, ingredient) {
      state.salad.push(ingredient)
    }
  },

  actions: {
    addIngredient({ commit }, ingredient) {
      commit('addIngredient', ingredient)
    }
  }
}
