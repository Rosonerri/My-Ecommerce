import { connect } from "mongoose"


const URL: string = "mongodb://127.0.0.1:27017/e-commerceDB"
export const dbConfig = async () =>{
  try {
    return await connect(URL).then(() => {
      console.log("DataBase Connected Successfully🌚🌚🌚")
    }).catch(() =>{
      console.error()
    })
  } catch (error) {
    return error
  }
}







