<template>
    <div class="bg-black text-white h-10">
        <ul class="flex pt-1 ">
            
            <NuxtLink to="/"><li class="pl-5 text-2xl font-sans">Home</li></NuxtLink>
            <NuxtLink to="/about"><li class="pl-5 text-2xl font-sans">About</li></NuxtLink>
            <NuxtLink to="/post"><li class="pl-5 text-2xl font-sans">Posts</li></NuxtLink>
            <NuxtLink to="/login"><li class="pl-5 text-2xl font-sans">login</li></NuxtLink>
            <NuxtLink to="/signup"><li class="pl-5 text-2xl font-sans">Signup</li></NuxtLink>
            <NuxtLink to="/signout"><li class="pl-5 text-2xl font-sans">SignOut</li></NuxtLink>

        </ul>
    </div>
</template>

<style>
span{
    margin-left: 20px;
    
}
</style>