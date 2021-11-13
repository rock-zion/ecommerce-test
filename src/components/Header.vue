<template>
  <div class="header-wrapper">
    <div class="header-img-wrapper">
      <img
        src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1674&q=80"
      />
    </div>

    <h1 class="cta">{{ this.store.vendor_data.cta }}</h1>
    <div
      class="show-flier-wrapper"
      v-if="this.store.vendor_data.event_flier_image"
    >
      <img alt="" :src="this.store.vendor_data.event_flier_image" />
      <a
        href="https://tix.africa/buy/project-scorpio"
        class="visit-event"
        target="_blank"
      >
        See Event
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    created() {},
    data() {
      return {
        store: this.$store.state.home,
      };
    },
  };
</script>

<style scoped>
  .header-wrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
  }

  .header-img-wrapper {
    width: inherit;
    overflow: hidden;
    height: 100vh;
  }

  .header-img-wrapper {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cta {
    position: absolute;
    z-index: 9;
    top: 200px;
    left: 100px;
    font-size: 70px;
    font-weight: 900;
    color: white;
    width: 600px;
    line-height: 70px;
  }

  .show-flier-wrapper {
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 288px;
    height: 400px;
    overflow: hidden;
  }

  .show-flier-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .show-flier-wrapper .visit-event {
    position: absolute;
    left: 30px;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fc6435;
    color: #fff;
    opacity: 0;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.5s;
  }

  .show-flier-wrapper:hover .visit-event {
    opacity: 1;
  }

  @media screen and (max-width: 600px) {
    .cta {
      top: 100px;
      width: 100%;
      left: 0;
      right: 0;
      font-size: 42px;
      line-height: 50px;
      padding: 16px
    }

    .show-flier-wrapper .visit-event {
      opacity: 1;
    }
  }
</style>
