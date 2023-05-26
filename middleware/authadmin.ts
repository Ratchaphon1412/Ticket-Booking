const authStore  = useAuthStore()
const checkAuth = authStore.getIsAuth
const checkRole =  authStore.getRole

export default defineNuxtRouteMiddleware(async(to,from)=>{
    
    if(!checkAuth ){
        console.log("test")
        return navigateTo('/')
    }else{
        
        if (checkRole !==  "ROLE_ADMIN"){
          
            return abortNavigation();
        }
    }

})