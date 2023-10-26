<script setup >
// import { watch } from 'vue';
import { useUserStore } from '~~/store/index'
const userStore = useUserStore()
await userStore.fetchUsers()

const currentPage = ref(0)
const s = userStore.users


const arr = computed(() => ((s.length > 0 ? (s.slice(currentPage.value * 8, currentPage.value * 8 + 8)) : 'end')))


// Fettch user data



</script>

<template>
  <h1>green</h1>

  <table class="border ml-2 mr-2 border-black">
    <tr class="border border-black">
      <th class="border border-black pl-2" >Id</th>
      <th class="border border-black pl-2" >Title</th>
      <th class="border border-black pl-2" >Body</th>
    </tr>
    <tr v-for="e in s" class="border border-1 border-black ">
      <td class="border border-black pl-2" >{{ e.id }}</td>
      <td class="border border-black pl-2" >{{ e.title }}</td>
      <td class="border border-black pl-2" >{{ e.body }}</td>
      <td class="border border-black pl-2" >
        <NuxtLink :to="`posts/${e.id}`" class="relative float-right">
          <label class="">Read More</label>
        </NuxtLink>
      </td>
    </tr>
  </table>
</template>
  