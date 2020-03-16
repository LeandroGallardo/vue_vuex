import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const INCREMENT_COUNTER = 'INCREMENT_COUNTERN'
const DECREMENT_COUNTER = 'DECREMENT_COUNTERN'

export default new Vuex.Store({
  state: {
    counter :1,
  },
  mutations: {
    [INCREMENT_COUNTER]: (state,payload)=>{
      state.counter += payload
    },
    [DECREMENT_COUNTER]: (state,payload) =>{
      state.counter-= payload
    }
  },
  actions: {
    incrementCounter: (store,payload) =>{
      console.log(store,payload)
      store.commit(INCREMENT_COUNTER,payload)
    },
    decrementCounter: (store,payload) =>{
      console.log(store,payload)
      store.commit(DECREMENT_COUNTER,payload)
    }
  },
})
