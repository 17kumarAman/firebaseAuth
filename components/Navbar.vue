<template>
    <div class="bg-black text-white h-10 flex">
        <ul class="flex pt-1 ">
            
            <NuxtLink to="/"><li class="pl-5 text-2xl font-sans">{{ $t('Home') }}</li></NuxtLink>
            <NuxtLink to="/about"><li class="pl-5 text-2xl font-sans">{{ $t('About') }}</li></NuxtLink>
            <NuxtLink to="/post"><li class="pl-5 text-2xl font-sans">{{ $t('Posts') }}</li></NuxtLink>
            <NuxtLink to="/login"><li class="pl-5 text-2xl font-sans">{{ $t('Login') }}</li></NuxtLink>
            <NuxtLink to="/signup"><li class="pl-5 text-2xl font-sans">{{ $t('Signup') }}</li></NuxtLink>
            <NuxtLink to="/signout"><li class="pl-5 text-2xl font-sans">{{ $t('Signout') }}</li></NuxtLink>
            <button class="pl-5 text-2xl font-sans"></button>
            
        </ul>
        <select v-model="locale" class="pl-5 text-2xl font-sans bg-black outline-none ">
        <option value="en">eng</option>
        <option value="हिंदी">हिंदी</option>
      </select>
    </div>
</template>

<style>
span{
    margin-left: 20px;
    
}
</style>

<script setup>
import { useI18n, useLocalePath } from '#imports'
const lang = ref(true)

const { locale } = useI18n()
</script>