
import { defineStore } from 'pinia';

interface Ticket{
  concert:Object,
  details:Object


}


export const useTicketConcertStore = defineStore({
  id: 'TicketConcertStore',
  state: ():Ticket => ({
    concert:{},
    details:{}

   }),
  actions: {
    async getConCert(){
      const axios= useNuxtApp().$axios;
      const {data} = await axios.get('/api/concert')
      console.log(data)
      this.concert = data.data;
    },
    async getDetails(id:string){
      const axios= useNuxtApp().$axios;
      console.log(id)
      const {data} = await axios.get('/api/concert/'+id)
      console.log(data)
      this.details = data.data.concert;

    }


  },
  getters:{
    getConcertData():Object{
      return this.concert;
    },
    getDetailsData():Object{
      return this.details;
    }
  }
});
