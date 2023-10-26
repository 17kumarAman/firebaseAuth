<template>
    <h1>B comp</h1>

    <h1>{{ store.count }}</h1>
    <button @click="store.increment">increment</button>
</template>

<script setup>
import {useCounterStore} from '~~/store/index'
const store = useCounterStore();
console.log(store);


</script>