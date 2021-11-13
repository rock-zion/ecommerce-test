<template>
  <div class="product-detail-wrapper">
    <div class="product-detail">
      <div class="img-wrapper">
        <img v-bind:src="cart_item.item.main_image" alt="" />
      </div>
      <div>
        <div class="item-name">
          {{ `${cart_item.item.item_name} - ${cart_item.orderDefaults.size}` }}
        </div>
        <button
          class="remove-from-cart"
          @click="$store.dispatch('removeFromCart', cart_item.id)"
        >
          Remove from Cart<i
            class="trash-icon fa fa-trash"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
    <div>
      <span class="quantity-title">Quantity</span>
      <input
        @change="
          $store.dispatch('updateItemQuantity', {
            subtotal,
            quantity,
            cart_item,
          });
          $store.commit('getCartTotal');
        "
        v-model="quantity"
        class="quantity-input"
        min="1"
        max="10"
        type="number"
        name=""
      />
    </div>
    <div>Price: NGN {{ cart_item.item.price }}</div>
    <div>
      Sub-Total: NGN
      {{ cart_item.item.price * cart_item.orderDefaults.quantity }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartItem',
    props: {
      cart_item: {
        type: Object,
      },
    },
    data() {
      return {
        quantity: 1,
        subtotal: 0,
      };
    },
    methods: {},
    computed: {
      itemQuantity: {
        get() {},
        set(newValue) {},
      },
    },
    mounted() {
      const found = this.$store.state.cart.cart.find(
        item => item.id === this.cart_item.id
      );
      if (found) {
        this.quantity = found.orderDefaults.quantity;
      }

      this.subtotal =
        this.cart_item.item.price * this.cart_item.orderDefaults.quantity;
    },
  };
</script>

<style scoped>
  .product-detail-wrapper {
    display: grid;
    grid-template-columns: auto 1fr 1fr 1fr;
    align-items: center;
    column-gap: 24px;
  }
  .product-detail {
    margin-bottom: 24px;
    display: flex;
    align-items: center;
  }

  .img-wrapper {
    width: 80px;
    height: 102px;
    margin-right: 16px;
  }

  .img-wrapper img {
    width: 100%;
    height: 100%;
  }

  .item-name {
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .remove-from-cart {
    padding: 8px 16px;
  }

  .quantity-title {
    margin-right: 10px;
  }

  .quantity-input {
    height: 32px;
  }

  .trash-icon {
    margin-left: 10px;
  }
</style>
