import {useCounterStore} from '~/store/index'
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCounterStore()
    // console.log(user.getadmin);//   
    

    
    
    const isLogedIn = user.count
    // login.change
    console.log(!isLogedIn);
   if(isLogedIn !== true){
        alert ('please login first')
        return navigateTo('/login') 
        
    }
  })


  