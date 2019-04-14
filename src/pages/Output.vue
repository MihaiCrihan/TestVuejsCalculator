<template>
    <div>
      Suma = <input type="text" v-model="messageFromStore">

    </div>
</template>

<script>

export default {
 name: 'Output',
 computed: {
   messageFromStore(){
    return (parseInt(this.$store.getters.getX) + parseInt(this.$store.getters.getY))
   }
 },
}
</script>

<style scoped>
</style>