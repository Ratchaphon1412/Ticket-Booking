
import { defineStore } from 'pinia';

interface Ticket{
  concert:Object,


}


export const useTicketConcertStore = defineStore({
  id: 'TicketConcertStore',
  state: ():Ticket => ({
    concert:{},

   }),
  actions: {
    async getConCert(){
      const axios= useNuxtApp().$axios;
      const {data} = await axios.get('/api/concert')
      console.log(data)
      this.concert = data.data;
    }


  },
  getters:{
    getConcertData():Object{
      return this.concert;
    }
  }
});
