<template>
  <div>
    <p>dfgfhfgfsdvf</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>