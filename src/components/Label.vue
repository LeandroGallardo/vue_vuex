<template>
    <div>
        <h1>counter {{counter}} </h1>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Label',
    computed:{
    ...mapState(['counter'])
  }
}
</script>