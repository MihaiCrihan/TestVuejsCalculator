<template>
    <div>
        <span> x </span>
        <input @keyup="sumXY()" type="text" v-model="x">
        <span> y </span>
        <input @keyup="sumXY()" type="text" v-model="y">
        <span> = {{summ}}</span>
        

    </div>
</template>

<script>

import Input from './Output.vue'

export default {
  name: 'Input',
   data() {
    return {
      x:'',
      y:'',
      summ:''
    }
  },
  comments:{
    'input' : Input
  },
  methods:{
		sumXY(){
			this.summ = Number(this.x) + Number(this.y);
		},
	}
}
</script>

<style scoped>
</style>