<script setup>
import {  useCounterStore } from '~/store'
const user = useCounterStore()
// const email = ref(user.name)
// console.log(email, 'th');
const count = user.count
// const decrement = user.decrement()



const signOut = async () => {
    await signOutUser();
    console.log('signout');
    user.decrement()
    // email = ''
};

</script>

<template>
    <button @click="signOut">{{ $t('Signout') }}</button>
    <h1>{{ count }}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, totam est aut tempora facilis consectetur rerum recusandae cum consequuntur neque?
    </p>


</template>