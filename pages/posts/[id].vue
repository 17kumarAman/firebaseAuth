<script setup >
definePageMeta({
  middleware: 'auth'
    
});
// import { useRoute } from 'vue-router';
const {id} = useRoute().params
// const num = 1
console.log(id);
const data = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
console.log(data);
</script>

<template>
   <div > 
      <p class="text-center text-6xl capitalize mt-4 font-bold shadow-sm ">product details for element {{ id }}</p>
      <h1 class="text-3xl pl-7">{{ data.title }}</h1>
      <p>{{ data.body }}</p>
   </div>
   

</template>