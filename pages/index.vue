<template>
    <h1 class="mt-10 text-3xl text-center font-bold"><h1>Welcome {{ email }}</h1></h1>
    <!-- <h1>Welcome {{ email }}</h1> -->
    

    

</template>
<script setup>
// console.clear();
definePageMeta({
  middleware: defineNuxtRouteMiddleware((to, from) => {
    console.log('to', to);
    console.log('from', from);
  }),
});
import { useCounterStore } from '~/store';
const user = useCounterStore()
const email = ref(user.name)
const seter = user.seter
console.log('email', email.value);
</script>

