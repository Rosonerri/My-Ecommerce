import { Request, Response } from "express";
import StoreModel from "../Model/StoreModel";
import { stream } from "../utils/stream";
import marchantModel from "../Model/marchantModel";
import { Types } from "mongoose";


export const createStore = async (req: Request, res: Response) =>{
    try {
       const {name, price, description} = req.body   
       const {marchantId}  = req.params

       const marchant = await marchantModel.findById(marchantId)

       const {secure_url, public_id}: any = await stream(req)


       const store = await StoreModel.create({
         name,
         price,
         description,
         image: secure_url,
         imageId: public_id,
         marchantId,
       }); 

       marchant?.store.push(new Types.ObjectId(store._id))
       marchant?.save()

       return res.status(200).json({
        message: "Store Created Successfully",
        status: 200,
        data: store
       })
    } catch (error) {
       return res.status(404).json({
         message: "Error Creating Store",
         status: 404,
       }); 
    }
}


export const viewMerchantStore = async (req: Request, res: Response) => {
  try {
    const { marchantId } = req.params;

    const marchant = await marchantModel.findById(marchantId).populate({
        path: "store"
    })
    return res.status(200).json({
      message: "One Marchant store viewed",
      status: 200,
      data: marchant
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Viewing Store",
      status: 404,
    });
  }
};

export const viewStore = async (req:Request, res:Response) =>{
try {
 const store = await StoreModel.find() 

 return res.status(200).json({
  message: "store view Successfully",
  status: 200,
  data: store
 })
} catch (error) {
  return res.status(404).json({
    message: "Error Viewing Store",
    status: 404,
  });
}
}