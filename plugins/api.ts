import axios from 'axios';





export  default defineNuxtPlugin (async()=>{

  const config = useRuntimeConfig();

  const baseURL = config.public.baseURL;

  const axiosInstance = axios.create({
    baseURL,
  });
  
  axiosInstance.interceptors.request.use((config) => {
      const authStore = useAuthStore();
      
      if (authStore.getIsAuth){
        config.headers['x-access-token'] = authStore.getToken;
      }
      return config;
    });
  
  // axiosInstance.interceptors.response.use((response) => {
  //   return response;
  // },async (error) => {
  
  //   // if (error.request.status === 403  && error.request){
  //   //    navigateTo('/');
  //   // }
  //   return Promise.reject(error);
  // });
    return{
        provide:{
            axios:axiosInstance
        }
    }
    

})