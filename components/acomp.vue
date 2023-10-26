<template>
    <h1>A comp</h1>
    <h1>{{ store.count }}</h1>
    <hr>
</template>



<script setup>
import {useCounterStore} from '~~/store/index'
const store = useCounterStore();
console.log(store);


</script>
