<script setup lang="ts">
import { useCounterStore } from '~/store';
const state = useCounterStore()
const name = computed(() => state.count)
// const email = ref(user0.name);
// console.log(email.value, 'this page is signup');
const { registerUser } = useFirebaseAuth() // auto-imported

const creds = reactive({
  email: "",
  password: "",
  name :''
})

const user = reactive({
    email:'',
    notacc : true,
    msg:''

})

async function handleRegistration() {
  const response = await registerUser(creds.email, creds.password)
  if(!response){
    console.log('please try again');
    user.notacc = false
    user.msg= 'You have already an account'

  }
  state.increment();
  user.email = creds.email
  console.log(creds.email);
  creds.email = ''
  creds.password = ''
  console.log(name.value);
  return navigateTo('/post')
  
}
</script>

<template>
  <h1>{{ name }}</h1>
  <!-- <h1>{{  }}</h1> -->
    <div>
        <h1>{{creds.name}} hello</h1>

        <form v-if="user.notacc" @submit.prevent="handleRegistration" class="grid pt-10 ">
        <h2 class="ml-auto mb-8 mr-auto">  {{$t('Account')}}</h2>
        <!-- <input class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" type="text" v-model="name"
            placeholder="Enter Name"> -->
        <input type="email" class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" v-model="creds.email"
            placeholder="Enter Email">
        <input class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" type="password"
            v-model="creds.password" placeholder="Enter Password">
        <button type="submit" class="w-80 h-10 cursor-pointer pl-5 display:block text-white bg-sky-300 ml-auto mr-auto">{{ $t('Signup') }}</button>
       
        <NuxtLink to="/login" class="w-80 h-10 cursor-pointer text-center mt-1 display:block underline  ml-auto mr-auto"> {{$t('Already')}}</NuxtLink>
    </form>
    <form v-else="user.notacc==false" @submit.prevent="handleRegistration" class="grid pt-10 ">
        <h2 class="ml-auto mr-auto">  {{$t('Account')}}</h2>
        <!-- <input class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" type="text" v-model="name"
            placeholder="Enter Name"> -->
            <h1 class="w-80 h-10 cursor-pointer pl-5  display:block text-red-900  ml-auto text-center mr-auto">{{user.msg}}</h1>
        <input type="email" class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" v-model="creds.email"
            placeholder="Enter Email">
        <input class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" type="password"
            v-model="creds.password" placeholder="Enter Password">
        <button type="submit" class="w-80 h-10 cursor-pointer pl-5 display:block text-white bg-sky-300 ml-auto mr-auto">{{ $t('Signup') }}</button>
       
        <NuxtLink to="/login" class="w-80 h-10 cursor-pointer text-center mt-1 display:block underline  ml-auto mr-auto"> {{$t('Already')}}</NuxtLink>
    </form>
    <!-- <h1>{{ email }}</h1> -->

    </div>
</template>

<style lang="scss" scoped>

</style>