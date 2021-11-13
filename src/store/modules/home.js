import axios from 'axios';

export const moduleHome = {
  state: () => ({
    vendor_data: {},
    merch: [],
    favList: [],
  }),
  mutations: {
    fetchMerch(state, merch) {
      state.merch = merch;
    },

    fetchVendorDetails(state, vendor_data) {
      state.vendor_data = vendor_data;
    },

    fetchFavLists(state, data) {
      state.favList = [...state.favList, ...data];
    },

    removeFromFavList(state, data) {
      console.log('data', data);
      let index = state.favList.findIndex(function (item) {
        return item.id === data;
      });
      if (index !== -1) state.favList.splice(index, 1);
    },
  },
  actions: {
    fetchMerch({ commit }) {
      axios('api/vendor_items').then(res => {
        commit('fetchMerch', res.data);
      });
    },

    fetchVendorDetails({ commit }) {
      axios('api/vendor_details').then(res => {
        commit('fetchVendorDetails', res.data);
      });
    },

    fetchFavLists({ commit }) {
      axios('api/favList')
        .then(res => {
          commit('fetchFavLists', res.data);
          // if(res.data )
        })
        .catch(e => {});
    },

    removeFromFavList(context, item) {
      const { commit } = context;
      // commit('removeFromFavList', item.id);
      axios.delete(`api/favList/${item.id}`).then(res => {
        if (res.status === 200) {
          commit('removeFromFavList', item.id);
        }
      });
    },

    addToFavList(context, item) {
      const { dispatch } = context;
      axios
        .post('api/favList', {
          ...item,
        })
        .then(res => {
          if (res.status === 201) {
            dispatch('fetchFavLists');
          }
        })
        .catch(e => {
          dispatch('removeFromFavList', item);
        });
    },
  },
};
