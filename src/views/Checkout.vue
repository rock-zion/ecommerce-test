<template>
  <section class="container">
    <div class="container-title-wrapper">
      <h3 class="container-title">
        Checkout ({{ $store.state.cart.cart.length || 0 }})
      </h3>
      <div class="container-title-inner">
        <h3 class="container-title-2">NGN {{ $store.getters.getCartTotal }}</h3>
      </div>
    </div>
    <div class="checkout-summary-wrapper">
      <div>
        <CartItem
          v-for="cartItem in $store.state.cart.cart"
          :key="cartItem"
          :cart_item="cartItem"
        />
      </div>
      <CheckoutForm />
    </div>
  </section>
</template>

<script>
  import CheckoutForm from '../components/CheckoutForm.vue';
  import CartItem from '../components/CartItem';

  export default {
    components: {
      CartItem,
      CheckoutForm,
    },
  };
</script>

<style>
  .checkout-summary-wrapper {
    display: grid;
    grid-template-columns: 1fr 400px;
    column-gap: 30px;
  }

  @media screen and (max-width: 600px) {
    .checkout-summary-wrapper {
      grid-template-columns: 1fr;
      row-gap: 30px;
    }
  }

  @media screen and (max-width: 1200px) {
    .checkout-summary-wrapper {
      grid-template-columns: 1fr;
      row-gap: 30px;
    }
  }
</style>
