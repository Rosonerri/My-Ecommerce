import axios from "axios";

const url: string = "http://localhost:2288/api";

export const loginMerchant = async (email: any) => {
  try {
    const response = await axios.post(`${url}/login-marchant`, email);

    return response.data;
  } catch (error) {
    console.error;
  }
};

export const storeData = async () => {
  try {
    return await axios.get(`${url}/store`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.error();
  }
};
