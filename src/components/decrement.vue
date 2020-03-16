<template>
    <div>
        <button @click="decrementCounter(5)">-</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'Decrement',
    methods:{
        ...mapActions(['decrementCounter'])
    }
}
</script>
