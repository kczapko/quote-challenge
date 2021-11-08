import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      quote: {},
      quotes: [],
      loading: false,
      error: '',
    };
  },
  mutations: {
    setQuote(state, payload) {
      state.quote = payload;
    },
    setQuotes(state, payload) {
      state.quotes = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async getRandomQuote({ commit }) {
      commit('setLoading', true);
      commit('setError', '');

      try {
        const res = await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random');
        const data = await res.json();

        commit('setQuote', data.data[0]);
      } catch (err) {
        commit('setError', 'Network problems');
      }

      commit('setLoading', false);
    },
    async getAuthorQuotes({ commit }, payload) {
      commit('setLoading', true);
      commit('setError', '');

      try {
        const res = await fetch(
          `https://quote-garden.herokuapp.com/api/v3/quotes?author=${payload}`
        );
        const data = await res.json();

        commit('setQuotes', data.data);
      } catch (err) {
        commit('setError', 'Network problems');
      }

      commit('setLoading', false);
    },
  },
});
