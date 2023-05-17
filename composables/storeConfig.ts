import { useAuthenticationStore } from "~/store/authentication";
export const useAuthStore = () => {
  return useAuthenticationStore();
};
