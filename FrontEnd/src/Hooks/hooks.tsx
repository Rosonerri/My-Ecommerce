import useSWR from "swr";
import { storeData } from "../api/Api";

const useStore = () => {
  const { data } = useSWR(`api/store`, storeData);
  return { data };
};

export default useStore;
