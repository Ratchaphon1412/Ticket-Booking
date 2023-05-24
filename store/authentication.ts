import {defineStore} from 'pinia'



interface User{
    id: number;
    token:string;
    username:string;
    role: string;
    isAuth: boolean;
    
}

export const useAuthenticationStore = defineStore('authenticationStore',{

    state: ():User=>({
        id: 0,
        token: '',
        username:'',
        role:'',
        isAuth: false,
    }),
    actions: {
        async login(email:string,passoword:string){
            const axios= useNuxtApp().$axios;
            
            const {data} = await axios.post('/api/auth/signin',{
                username:email,
                password:passoword
            })
       
            this.isAuth = data.auth
            this.token = data.accessToken
            this.username = data.username
            this.role = data.authorities[0]
        },
        async signup(name:string,username:string,email:string,password:string){

            const axios= useNuxtApp().$axios;
            const role =['USER'];
            
            const {data} = await axios.post('/api/auth/signup',{
                name:name,
                username:username,
                email:email,
                password:password,
                roles:role
            })
            console.log(data);


        },async logout(){
            sessionStorage.removeItem('authenticationStore');
            this.isAuth = false;
            this.token = '';
            this.username = '';
            this.role = '';
        }


    },
    getters: {
        getIsAuth():boolean{
            return this.isAuth;
        },
        getRole():string{
            return this.role;
        },
        getUserName():string{
            return this.username;
        },
        getToken():string{
            return this.token;
        }
        
    },
    persist: {
        storage: persistedState.sessionStorage,
      },



})


