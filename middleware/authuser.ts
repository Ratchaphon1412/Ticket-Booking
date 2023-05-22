const authStore  = useAuthStore()

export default defineNuxtRouteMiddleware((to,from)=>{
    if(!authStore.getIsAuth ){
       
        return navigateTo('/')
    }else{
        if (authStore.getRole !==  "ROLE_USER"){
            return abortNavigation();
        }
    }

})