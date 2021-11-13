<template>
  <Header />
  <section class="merch-wrapper">
    <h2 class="header">Check out our merch</h2>
  </section>
  <ShowcaseProducts />
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header';
  import ShowcaseProducts from '@/components/ShowcaseProducts';

  export default {
    name: 'Home',
    components: {
      Header,
      ShowcaseProducts,
    },

    data() {
      return {
        store: this.$store,
      };
    },
    watch: {
      '$store.state.favList': function () {},
    },
    created() {
      this.$store.dispatch('fetchVendorDetails');
      this.$store.dispatch('fetchMerch');
      this.$store.dispatch('fetchFavLists');
    },
  };
</script>

<style scoped>
  .merch-wrapper {
    width: 100vw;
  }

  .header {
    width: 80%;
    margin: 80px auto 100px auto;
    padding-bottom: 32px;
    text-align: center;
    border-bottom: 1px solid #fc6435;
  }

  @media screen and (max-width: 600px) {
    .header {
      font-size: 24px;
      margin-bottom: 40px;
    }
  }
</style>
