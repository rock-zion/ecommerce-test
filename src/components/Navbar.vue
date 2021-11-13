<template>
  <nav>
    <div class="left-nav">
      <router-link to="/" class="brand">tix.merch</router-link>
    </div>
    <div class="right-nav">
      <router-link class="link" to="/my-cart"
        >My Cart({{ $store.state.cart.cart.length || 0 }})</router-link
      >
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar',
  };
</script>

<style scoped>
  nav {
    width: 100vw;
    height: 48px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    align-items: center;
    background: #f9f9f9;
    z-index: 999;
  }
  .link,
  .brand {
    color: #fc6435;
    text-decoration: none;
  }
  .brand {
    font-weight: 600;
    font-size: 1.5rem;
  }

  .link {
    font-size: 0.8rem;
    font-weight: 600;
  }

  .link:hover {
    border-bottom: 1px solid #fc6435;
  }

  @media screen and (max-width: 600px) {
    nav {
      padding: 0 16px;
    }
  }
</style>
