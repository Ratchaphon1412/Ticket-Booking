const authStore  = useAuthStore()
const checkAuth = authStore.getIsAuth
const checkRole =  authStore.getRole

export default defineNuxtRouteMiddleware((to,from)=>{
    
        if(!checkAuth && to.path !==  "/login"){
           
            return navigateTo('/')
        }else{
            if (checkRole ===  "ROLE_USER"){
                return navigateTo('/');
            }else if(checkRole ===  "ROLE_ADMIN"){
                return navigateTo('/admin');
            }
        }
    

})