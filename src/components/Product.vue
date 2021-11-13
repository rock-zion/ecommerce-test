<template>
  <div class="product-wrapper">
    <button
      @click="$store.dispatch('addToFavList', merch_detail)"
      class="favourite-wrapper"
    >
      <i
        class="fas fa-heart favourite"
        :class="{
          'is-liked': findFavourites(),
        }"
      ></i>
    </button>
    <div class="merch-img-wrapper">
      <img v-bind:src="merch_detail.main_image" class="" alt="" />
    </div>
    <span class="merch-name">{{ merch_detail.item_name }}</span>
    <span> NGN {{ merch_detail.price }} </span>
    <span>
      <span v-if="typeof merch_detail.item_sizes !== 'string'"
        >Select Size:
        <select @change="updateSize">
          <option value="">Pick Size</option>
          <option :key="value" v-for="value in merch_detail.item_sizes">
            {{ value }}
          </option>
        </select></span
      ><span v-else>Size: One Size</span>
    </span>
    <button @click="addItemToCart" class="add-to-cart">Add Item To Cart</button>
  </div>
</template>

<script>
  export default {
    name: 'Product',
    data() {
      return {
        size: '',
      };
    },
    props: {
      merch_detail: {
        type: Object,
      },
    },
    methods: {
      findFavourites() {
        for (let i = 0; i < this.$store.state.home.favList.length; i++) {
          if (this.$store.state.home.favList[i].id === this.merch_detail.id) {
            return true;
          }
        }
      },

      updateSize(e) {
        this.size = e.target.value;
      },

      addItemToCart() {
        if (this.size !== '') {
          this.$store.dispatch('addItemToCart', {
            item: this.merch_detail,
            size: this.size,
          });
        } else {
          alert('Please select size');
        }
      },
      findItemInCart() {},
    },
    mounted() {
      if (typeof this.merch_detail.item_sizes == 'string') {
        console.log('zion');
        this.size = 'One Size';
      }
    },
    watch: {
      '$store.state.single_merch': function () {},
      '$store.state.favList': function () {},
    },
  };
</script>

<style scoped>
  button {
    border: none;
  }

  .product-wrapper {
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .favourite-wrapper {
    position: absolute;
    top: 10px;
    right: 50px;
    z-index: 99;
  }

  .favourite {
    color: rgba(0, 0, 0, 0.2);
  }

  .is-liked {
    color: red;
  }

  .merch-img-wrapper {
    width: 80%;
    height: 400px;
    overflow: hidden;
    margin-bottom: 20px;
  }

  .merch-img-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .add-to-cart {
    width: 80%;
    height: 48px;
    font-size: 1rem;
    color: #fc6435;
    border: 1px solid #fc6435;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    .merch-img-wrapper {
      width: 100%;
    }
  }
</style>
