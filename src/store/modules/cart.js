import axios from 'axios';

export const moduleCart = {
  state: () => ({
    cart: [],
    total: 0,
  }),
  mutations: {
    fetchCart(state, data) {
      state.cart = data;
    },

    getCartTotal(state) {
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue.orderDefaults.subtotal;
      state.total = state.cart.reduce(reducer, 0);
    },

    removeFromCart(state, data) {
      let index = state.cart.findIndex(item => {
        return item.id === data;
      });

      if (index !== -1) state.cart.splice(index, 1);
    },
    incrementCartQuantity() {},
  },

  actions: {
    fetchCart({ commit }) {
      axios('https://ecommerce-test-server.herokuapp.com/cart').then(res => {
        commit('fetchCart', res.data);
      });
    },

    removeFromCart(context, id) {
      const { commit } = context;
      axios.delete(`https://ecommerce-test-server.herokuapp.com/cart/${id}`).then(res => {
        if (res.status === 200) {
          commit('removeFromCart', id);
        }
      });
    },

    updateItemQuantity(context, value) {
      const { commit, dispatch } = context;
      commit('getCartTotal');
      const { subtotal, quantity, cart_item } = value;
      console.log('subtotal', subtotal);
      axios
        .patch(`https://ecommerce-test-server.herokuapp.com/cart/${cart_item.id}`, {
          ...cart_item,
          orderDefaults: {
            ...cart_item.orderDefaults,
            quantity,
            subtotal: quantity * cart_item.orderDefaults.price,
          },
        })
        .then(res => {
          dispatch('fetchCart');
        });
    },

    addItemToCart({ commit, dispatch }, item) {
      console.log('item', item);
      const orderDefaults = {
        quantity: 1,
        size: item.size,
        price: item.item.price,
        subtotal: item.item.price * 1,
      };
      axios
        .post('https://ecommerce-test-server.herokuapp.com/cart', { item: item.item, orderDefaults })
        .then(res => {
          dispatch('fetchCart');
          alert('Item added to cart');
        })
        .catch(e => {
          console.log(e);
        });
    },
    incrementCartQuantity() {},
  },
  getters: {
    getCartTotal(state) {
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue.orderDefaults.subtotal;
      return (state.total = state.cart.reduce(reducer, 0));
    },
  },
};
