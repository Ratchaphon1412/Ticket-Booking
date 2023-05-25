
import { defineStore } from 'pinia';

interface Ticket{
  concert:Object,
  details:Object,
  otherSelectSeat:Array<Object>,
  userSelectSeat:Object

}


export const useTicketConcertStore = defineStore({
  id: 'TicketConcertStore',
  state: ():Ticket => ({
    concert:{},
    details:{},
    otherSelectSeat:[],
    userSelectSeat:{}
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
     
      const {data} = await axios.get('/api/concert/'+id)
    
      this.details = data.data.concert;

    },async getSeatZone(id:string,zone:string){
      const axios= useNuxtApp().$axios;
      
      const {data} = await axios.get("api/concert/allOccupied",{params:{concertId:id,zone:zone}})
      this.otherSelectSeat = data.occupiedSeats;
      if(data.userOccupiedSeat ==null){
        this.userSelectSeat=[];
      }else{
        this.userSelectSeat=data.userOccupiedSeat;
      }
      

    },async saveSeat(concertId:string,zone:string,seatNumber:number) {
      const axios= useNuxtApp().$axios;
      const {data} = await axios.post("api/concert/saveOccupied",{
        concertId:concertId,
        zone:zone,
        seatNumber:seatNumber
      })
      

    }


  },
  getters:{
    getConcertData():Object{
      return this.concert;
    },
    getDetailsData():Object{
      return this.details;
    },
    getOtherSelectSeat():Array<Object>{
      return this.otherSelectSeat;
    },
    getUserSelectSeat():Object{
      return this.userSelectSeat;
    }
  }
});
