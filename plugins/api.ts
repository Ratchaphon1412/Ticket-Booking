import axios from 'axios';


const baseURL = 'http://localhost:8000/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => {
    // const authStore = useAuthStore();
    
    // if (authStore.initializeAuthState()) {
    //   config.headers.Authorization = `Bearer ${localStorage.getItem('authentication')}`;
    // }
    return config;
  });


export  default defineNuxtPlugin (async()=>{
    return{
        provide:{
            axios:axiosInstance
        }
    }
    

})