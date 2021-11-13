<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
  import Navbar from './components/Navbar';
  export default {
    components: {
      Navbar,
    },
    mounted() {
      this.$store.dispatch('fetchCart');
    },
  };
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;900&display=swap');
  #app {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #fefefe;
  }

  a,
  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    padding: 100px;
  }

  .container-title {
    margin-bottom: 24px;
  }

  .container-title-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .container-title-inner {
    display: flex;
    align-items: center;
  }

  .container-title-inner h3 {
    margin-right: 10px;
  }

  .checkout-btn {
    font-weight: 600;
    color: #fc6435;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #fc6435;
    border-radius: 10px;
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }
</style>
