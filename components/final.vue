<script setup >
import { useUserStore } from '~~/store/index'

const userStore = useUserStore()
// console.log(userStore.getUsers.length);
if (!userStore.getUsers.length )
  await userStore.fetchUsers()
const api = userStore.getUsers
// console.log("🚀 ~ file: final.vue:7 ~ api:", api)



const currentPage = ref(0)
const setter = computed(() => console.log(api))
// console.log(setter.value);

// if (api.length == 0) console.log(api, ' Empty Called');
// else console.log(api, ' Fill Called');

const data = computed(() => ((api.length > 0 ? (api.slice(currentPage.value * 8, currentPage.value * 8 + 8)) : 'end')))
// console.log(data.value);
const totalpage = (Math.ceil(api.length / 8) - 1)
// console.log(totalpage);



// buttons for Paginations

function nextPage() {
  if (currentPage.value >= Math.ceil(api.length / 8) - 1) {
    currentPage.value = Math.ceil(api.length / 8) - 1
    console.log((api.length / 8) - 1);
  }
  else
    currentPage.value++
}

function previousPage() {
  if (currentPage.value <= 0) {
    currentPage.value = 0
    // console.log((s.value.length/10)-1);
    console.log(currentPage.value);
  }
  else
    currentPage.value--
}

</script>

<template>
  <div>
    <div class="border border-green-600 h-max">
      <h1>green</h1>

      <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center ">
        <div v-for="e in data" class="border   mr-1 mt-1 mb-1 bg-cyan-50 text-center h-48 ">

          <h1>{{ e.id }}</h1>
          <h1>{{ e.title }}</h1>
          <hr class="border">
          <p class="mb-4">{{ e.body }} </p>
          <NuxtLink :to="`posts/${e.id}`" class="relative float-right">
            <label class="">Read More..</label>

          </NuxtLink>
        </div>
      </div>
    </div>

    <hr>
    <footer class=" mx-auto text-center  ">
      <h1 class="textl-2xl ">Pageno{{ currentPage + 1 }} of {{ totalpage + 1 }}</h1>
      <button @click="previousPage" class="ml-3 font-bold text-xl w-40 rounded-xl bg-slate-500 h-8 float-left">Prev
        Page</button>
      <button @click="nextPage" class=" mr-3 font-bold text-xl w-40 rounded-xl bg-slate-500 h-8 float-right "> Next
        Page</button>
    </footer>
  </div>
</template>

<style lang="scss" scoped></style>