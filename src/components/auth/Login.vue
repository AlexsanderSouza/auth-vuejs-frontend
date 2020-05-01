<template>
  <div>
    <b-form-input v-model="email" placeholder="Enter your name"></b-form-input>
    <b-form-input
      type="password"
      v-model="password"
      placeholder="Enter your name"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style></style>
