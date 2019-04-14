import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    x : '',
    y : ''
  },
  mutations: {   
    setX (state, x) {
        state.x = x
        //console.log( state.x)
    },
    setY (state, y) {       
        state.y = y
       // console.log( state.y)
    }
  },
  getters: {
    getX (state) {
      return state.x
    },
    getY (state) {
        return state.y
    }
   
  },
  actions: {
    fetchData (context) {
      fetch('http://localhost:3004/data')
        .then(response => {
          return response.json()
        })
        .then(data => {
          context.commit('setX', data[0].value)
          context.commit('setY', data[1].value)
        })
    }
  }
})

export default store