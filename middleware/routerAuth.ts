export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    if (!authStore.isAuth) {
        navigateTo('/login');

    }else{

        navigateTo(to.path);

    }

})