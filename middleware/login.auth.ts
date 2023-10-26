
export default defineNuxtRouteMiddleware((to, from) => {
    

    
    
    const isLogedIn = true
    // login.change
    console.log(isLogedIn);
    if(isLogedIn){
        alert ('please login first')
        return navigateTo('/login')
        
    }
})