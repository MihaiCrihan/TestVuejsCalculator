<template>
    <div>
        <span> x </span>
        <input @keyup="sumXY()" type="text" v-model="x">
        <span> y </span>
        <input @keyup="sumXY()" type="text" v-model="y">
        <span :sum="summ"> = {{summ}}</span>

    </div>
</template>

<script>

import h3 from './Output.vue'

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
    'h3' : h3
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