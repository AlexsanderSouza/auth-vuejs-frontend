<template>
  <div class="about">
    <h1>This is an about page</h1>
    <LoginComponent />
  </div>
</template>

<script>
import LoginComponent from '@/components/auth/LoginComponent.vue'

export default {
  Name: 'Login',
  components: { LoginComponent }

}
</script>

<style scoped>

</style>
