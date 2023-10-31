import {useCounterStore} from '~/store/index'
export default defineNuxtRouteMiddleware((to,from)=>{
    console.log('fir')
    const users = useCounterStore();
    const isLoggedIn = users.count;
    if( isLoggedIn ===true  && ( from.path==='/login' || from.path==='/singup')){
        
        return navigateTo('/post')
    }
})