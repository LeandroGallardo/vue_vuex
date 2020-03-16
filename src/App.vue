<template>
  <div id="app">
    <Label />
    <Increment />
    <Decrement />
  </div>
</template>

<script>
import Label from './components/Label'
import Increment from './components/increment'
import Decrement from './components/decrement'
export default {
 
  name: 'App',
  components:{
    Label,
    Increment,
    Decrement,
  }
 
}
</script>

<style>

</style>
