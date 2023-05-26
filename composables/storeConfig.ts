import { useAuthenticationStore } from "~/store/authentication";
import {useTicketConcertStore } from "~/store/ticket";
export const useAuthStore = () => {
  return useAuthenticationStore();
};

export const useTicketStore = ()=>{
  return useTicketConcertStore();
}