<template>
    <div>
        <span> x </span>
        <input type="text" v-model="xvar">
        <span> y </span>
        <input type="text" v-model="yvar">       

    </div>
</template>

<script>

export default {
  name: 'Input',
  computed: {
    xvar : {
      get : function(){
        return this.$store.getters.getX
      },
      set : function(val){
        this.$store.commit("setX", val)
      }
    },
    yvar : {
      get : function(){
        return this.$store.getters.getY
      },
      set : function(val){
        this.$store.commit("setY", val)
    }
  }
  }
}
</script>

<style scoped>
</style>
