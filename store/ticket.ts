
import { defineStore } from 'pinia';

interface Ticket{
  concert:Object,
  details:Object,
  otherSelectSeat:Array<Object>,
  userSelectSeat:Array<Object>,
  booking:Array<Object>,
  seatBooked:Array<Object>

}


export const useTicketConcertStore = defineStore({
  id: 'TicketConcertStore',
  state: ():Ticket => ({
    concert:{},
    details:{},
    otherSelectSeat:[],
    userSelectSeat:[],
    booking:[],
    seatBooked:[]
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
      console.log(data)
      this.otherSelectSeat = data.occupiedSeats;
      if(data.userOccupiedSeat ==null){
        this.userSelectSeat=[];
      }else{
        this.userSelectSeat=data.userOccupiedSeat;
      }
      

    },async saveSeat(concertId:string,zone:string,seatNumber:Array<Number>) {
      const axios= useNuxtApp().$axios;
      const {data} = await axios.post("api/concert/saveOccupied",{
        concertId:concertId,
        zone:zone,
        seatNumber:seatNumber
      })
      

    },async  deleteConcertAdmin (concertID:string){
      const axios= useNuxtApp().$axios;
      const {data} = await axios.delete("/api/admin/concert/delete/"+concertID)
      console.log(data)
      return data;


    },async editConcertAdmin(concertID:string,title:string,url:string,status:string){
      const axios= useNuxtApp().$axios;
      console.log(concertID,title,url,status)
      const {data} = await axios.post("/api/admin/concert/edit",{id:concertID,name:title,image:url,status:status})
      console.log(data)
      return data;


    },async findConcert(name:string){
      const axois = useNuxtApp().$axios;
      const {data} = await axois.get("/api/concert/findConcertByName",{params:{name:name}})
      this.concert = data.data;


    },
    async userBooking(){
      const axios= useNuxtApp().$axios;
      const {data} = await axios.get('/api/occupied')
      this.booking = data.concert;
      this.seatBooked = data.occupied;
    
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
    getUserSelectSeat():Array<Object>{
      return this.userSelectSeat;
    },
    getBooking():Array<Object>{
      return this.booking;
    },
    getSeatBooking():Array<Object>{
      return this.seatBooked
    }
  }
});
