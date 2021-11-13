import Vuex from 'vuex';

import { moduleHome } from './modules/home';
import { moduleCart } from './modules/cart';

export const store = new Vuex.Store({
  modules: {
    home: moduleHome,
    cart: moduleCart,
  },
});