import Vuex from 'vuex';

import { moduleHome } from './modules/home';
import { moduleCart } from './modules/cart';

export const store = new Vuex.Store({
  modules: {
    home: moduleHome,
    cart: moduleCart,
  },
});

// import checkout from './modules/checkout';
// export default createStore({
//   state: {
//     vendor_data: {},
//     loading: false,
//     cart_preview: false,
//     // merch: [],
//     single_merch: {},
//     favList: [],
//     cart: [],
//   },

//   mutations: {
//     fetchVendorDetails(state, vendor_data) {
//       state.vendor_data = vendor_data;
//     },

//     fetchMerch(state, merch) {
//       state.merch = merch;
//     },

//     fetchOneMerch(state, data) {
//       state.single_merch = data;
//     },

//     fetchCart(state, data) {
//       state.cart = data;
//     },

//     // addToFavList(state, data) {},

//     fetchFavLists(state, data) {
//       state.favList = [...state.favList, ...data];
//     },

//     removeFromFavList(state, data) {
//       console.log('data', data);
//       let index = state.favList.findIndex(function (item) {
//         return item.id === data;
//       });
//       if (index !== -1) state.favList.splice(index, 1);
//     },
//     addItemToCart() {},
//   },

//   actions: {
//     fetchVendorDetails({ commit }) {
//       axios('api/vendor_details').then(res => {
//         commit('fetchVendorDetails', res.data);
//       });
//     },

//     fetchMerch({ commit }) {
//       axios('api/vendor_items').then(res => {
//         commit('fetchMerch', res.data);
//       });
//     },

//     fetchCart({ commit }) {
//       axios('api/cart').then(res => {
//         commit('fetchCart', res.data);
//       });
//     },

//     fetchFavLists({ commit }) {
//       axios('api/favList')
//         .then(res => {
//           commit('fetchFavLists', res.data);
//           // if(res.data )
//         })
//         .catch(e => {});
//     },

//     removeFromFavList(context, item) {
//       const { commit } = context;
//       // commit('removeFromFavList', item.id);
//       axios.delete(`api/favList/${item.id}`).then(res => {
//         if (res.status === 200) {
//           commit('removeFromFavList', item.id);
//         }
//       });
//     },

//     addToFavList(context, item) {
//       const { dispatch } = context;
//       axios
//         .post('api/favList', {
//           ...item,
//         })
//         .then(res => {
//           if (res.status === 201) {
//             dispatch('fetchFavLists');
//           }
//         })
//         .catch(e => {
//           dispatch('removeFromFavList', item);
//         });
//     },

//     addItemToCart({ commit }, newItem) {
//       const id = newItem.id;
//       axios
//         .post('api/cart', {
//           ...newItem,
//         })
//         .then(res => {
//           console.log(res);
//         })
//         .catch(e => {
//           console.log(e);
//         });
//     },
//   },

//   modules: {},
// });
