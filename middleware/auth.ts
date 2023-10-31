import {useCounterStore} from '~/store/index'
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCounterStore()
     
    

    
    
    const isLogedIn = user.count

    console.log(!isLogedIn);
   if(isLogedIn !== true){
        alert ('please login first')
        return navigateTo('/login') 
        
    }
  })


  