<script setup lang="ts">
import { useCounterStore } from "~/store";
const user = useCounterStore();
const name = computed(() => user.count)

const email = ref(user.name);
const set = user.double;

const { loginuser } = loginfirebase();
const creds = reactive({
  email: "",
  password: "",
});

const auth = reactive({
  email: "",
  notacc: true,
  msg: "",
});
async function handleRegistration() {
  const response = await loginuser(creds.email, creds.password);

  if (!response) {
    console.log("please try again");
    auth.notacc = false;
    auth.msg = `You don't have an account`;
    (creds.email = ""), (creds.password = "");
  }
  user.increment();
  user.name = creds.email;
  console.log(creds.email);
  return navigateTo('/post')
}


</script>

<template>
  <h1>{{ email }}</h1>
  <h1>{{ name }}</h1>
  <!-- <button @click="c">change</button> -->
  <div>
    <form
      v-if="auth.notacc"
      @submit.prevent="handleRegistration"
      class="grid pt-10"
    >
      <h2 class="ml-auto mb-8 mr-auto">{{ $t('Login') }}</h2>
      <!-- <input class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" type="text" v-model="name"
            placeholder="Enter Name"> -->
      <input
        type="email"
        class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300"
        v-model="creds.email"
        placeholder="Enter Email"
      />
      <input
        class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300"
        type="password"
        v-model="creds.password"
        placeholder="Enter Password"
      />
      <button
        type="submit"
        class="w-80 h-10 cursor-pointer pl-5 display:block text-white bg-sky-300 ml-auto mr-auto font-bold"
      >
      {{ $t('Login') }}
      </button>

      <NuxtLink
        to="/signup"
        class="w-80 h-10 cursor-pointer text-center mt-1 display:block underline ml-auto mr-auto"
      >
      {{$t('Account')}}</NuxtLink
      >
    </form>
    <form
      v-else="auth.notacc == false"
      @submit.prevent="handleRegistration"
      class="grid pt-10"
    >
      <h2 class="ml-auto mr-auto">{{$t('Login')}}</h2>
      <h1
        class="w-80 h-10 cursor-pointer pl-5 display:block text-red-900 ml-auto text-center mr-auto"
      >
        {{ auth.msg }}
      </h1>
      <!-- <input class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300" type="text" v-model="name"
            placeholder="Enter Name"> -->
      <input
        type="email"
        class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300"
        v-model="creds.email"
        placeholder="Enter Email"
      />
      <input
        class="w-80 display:block h-10 pl-5 mb-8 ml-auto mr-auto border border-sky-300"
        type="password"
        v-model="creds.password"
        placeholder="Enter Password"
      />
      <button
        type="submit"
        class="w-80 h-10 cursor-pointer pl-5 display:block text-white bg-sky-300 ml-auto mr-auto"
      >
        Login
      </button>

      <NuxtLink
        to="/signup"
        class="w-80 h-10 cursor-pointer text-center mt-1 display:block underline ml-auto mr-auto"
      >
        {{$t('Account')}}</NuxtLink
      >
    </form>
    <!-- <h1>{{ email }}</h1> -->
  </div>
</template>

<style lang="scss" scoped></style>
