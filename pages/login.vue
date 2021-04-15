<template>
  <form @submit="login">
    <input type="email" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
    <button type="submit">Login</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()
      const payload = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$auth.loginWith('local', {
          data: payload,
        })
        this.$router.push('/')
      } catch (e) {
        this.$router.push('/login')
      }
    },
  },
}
</script>
