<template>
  <div class="showcase-products">
    <Product
      v-for="merch in $store.state.home.merch"
      :key="merch.id"
      :merch_detail="merch"
    />
  </div>
</template>

<script>
  import Product from '@/components/Product.vue';
  export default {
    name: 'ShowcaseProducts',

    components: {
      Product,
    },
  };
</script>

<style>
  .showcase-products {
    width: 100%;
    padding: 0 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
    row-gap: 30px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 600px) {
    .showcase-products {
      grid-template-columns: 1fr;
      padding: 0 16px;
    }
  }

    @media screen and (max-width: 1200px) {
      .showcase-products {
        padding: 0;
        grid-template-columns: 1fr 1fr;
        column-gap: 24px;
      }
    }
</style>
