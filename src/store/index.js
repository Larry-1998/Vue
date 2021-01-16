import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('employee' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('employee' || '[]')).employeeNo
    }
  },
  mutations: {
    login (state, employee) {
      state.employee = employee
      window.localStorage.setItem('employee', JSON.stringify(employee))
    }
  }
})
