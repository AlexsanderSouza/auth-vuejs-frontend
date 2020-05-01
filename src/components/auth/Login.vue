<template>
  <div>
    <b-form-input
      type="email"
      v-model="email"
      placeholder="{{ $t('user.email') }}"
    ></b-form-input>
    <b-form-input
      type="password"
      v-model="password"
      placeholder="{{ $t('user.password') }}"
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
