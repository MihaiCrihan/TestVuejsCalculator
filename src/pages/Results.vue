<template>
    <div>
    </div>
</template>

<script>
export default {
 name: 'Results',
 computed: {
    messageFromStore () {
      return this.$store.getters.getMessage
    },
    items () {
      return this.$store.getters.getStudents
    }
  },
  mounted () {
    this.$store.dispatch('fetchData').then(() => {})
  }
}
</script>

<style scoped>
</style>