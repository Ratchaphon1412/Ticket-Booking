export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
  
    if (!authStore.getIsAuth ) {
       
        return navigateTo('/');

    }else{

        return  navigateTo(to.path);

    }

})