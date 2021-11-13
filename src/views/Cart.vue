<template>
  <section class="container">
    <div class="container-title-wrapper">
      <h3 class="container-title">
        My Cart ({{ $store.state.cart.cart.length || 0 }})
      </h3>

      <div
        v-if="$store.state.cart.cart.length > 0"
        class="container-title-inner"
      >
        <h3 class="container-title-2">NGN {{ $store.getters.getCartTotal }}</h3>
        <router-link to="/checkout" class="checkout-btn">Checkout</router-link>
      </div>
      <div v-else>
        <h3>Cart is currently empty</h3>
      </div>
    </div>

    <div class="view-cart-items">
      <CartItem
        v-for="cartItem in $store.state.cart.cart"
        :key="cartItem"
        :cart_item="cartItem"
      />
    </div>
  </section>
</template>

<script>
  import CartItem from '../components/CartItem';
  export default {
    components: {
      CartItem,
    },
    created() {},
  };
</script>

<style></style>
