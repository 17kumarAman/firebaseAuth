
import {useCounterStore} from '~/store/index'
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useCounterStore()
    // console.log(user.getadmin);//   
   
//   console.log(to.fullPath + ' se ' + from.fullPath)

// const j = true
    
    
    const isLogedIn = user.count
    // login.change
    // console.log(isLogedIn);
    if(isLogedIn == true){
      
        if (to.path == '/login' || to.path == '/signup') {
           
            return navigateTo(from.path, { redirectCode: 301 })
        }

    }  else {
      
        if (to.path == '/signout' ) {
            console.clear();
            return navigateTo(to.path, { redirectCode: 301 })
            
        }

    }
    
  })