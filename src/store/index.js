import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer:true,
    products:{
      products:[],
      target:[],
      forms:{
        add_product:false,
        edit_product:false,
        delete_product:false,
        view_product:false
      }
    }
  },
  mutations: {
    async GET_PRODUCTS(state)
    {
      await axios.get('admin/get-products').then(res=>{
        state.products.products = res.data;
      })
    },

  },
  actions: {
  },
  modules: {
  }
})
