<template>
  <form @submit="sendOutStuff">
    <h3 class="container-title">Provide your details below</h3>
    <input type="text" placeholder="Your name" />
    <input type="email" placeholder="Your email" />
    <input type="tel" name="" id="" placeholder="Your phonenumber" />
    <textarea
      placeholder="please enter your address"
      style="resize: none"
      name=""
      id=""
    ></textarea>
    <input type="submit" value="Place Order" />
  </form>
</template>

<script>
  export default {
    name: 'CheckoutForm',
  };
</script>

<style scoped>
  input {
    height: 48px;
    margin-bottom: 24px;
  }
  input,
  textarea {
    width: 100%;
    border-radius: 5px;
    border: 1px solid;
    outline: none;
    padding: 16px;
  }
</style>
