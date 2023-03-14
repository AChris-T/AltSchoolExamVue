<template>
   <div class="counter">
    <input class='form' type="number" 
     v-model.number ="count"
    />
    </div>
     <button v-on:click="Decreament"> - </button>
     <button v-on:click="Increament"> + </button>
     <button v-on:click="ResetValue">Reset</button>
    </template>

<script >
export default {
    name:'CounterPage',
    data(){
        return{
            count:0,
        }
    },
    methods:{
      Increament:function(){
        this.count++
      },
      Decreament:function(){
        this.count--
      },
      ResetValue:function(){
        this.count = 0
      }
    }
}
</script>

<style>
</style>