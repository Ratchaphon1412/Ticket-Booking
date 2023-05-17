import {defineStore} from 'pinia'


interface User{
    id: number;
    token: string;
    user:object|null;
    role: string;
    isAuth: boolean;
}

export const useAuthenticationStore = defineStore('authenticationStore',{
    state: ():User=>({
        id: 0,
        token: '',
        user:null,
        role: '',
        isAuth: false,
    }),
    actions: {
        async login(email:string,passoword:string):Promise<void>{
            const axios= useNuxtApp().$axios;
            
            const {data} = await axios.post('/api/login',{
                email,
                passoword
            })
           
            this.id = data.id;
            this.token = data.token;
            this.user = data.user;
            this.role = data.role;
        }


    },
    getters: {
        getIsAuth():boolean{
            return this.isAuth;
        },
        getRole():string{
            return this.role;
        }
    }


})