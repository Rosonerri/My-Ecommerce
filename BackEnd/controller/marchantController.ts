import { Request, Response } from "express";
import marchantModel from "../Model/marchantModel";

export const createMerchant = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const merchant = await marchantModel.create({
      name,
      email,
    });
    return res.status(201).json({
      message: "Merchant Created",
      status: 201,
      data: merchant,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Creating Merchant",
      status: 404,
    });
  }
};

export const viewAllMarchant = async (req: Request, res: Response) => {
  try {
    const merchant = await marchantModel.find();
    return res.status(201).json({
      message: "Merchant Viewed",
      status: 201,
      data: merchant,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Creating Merchant",
      status: 404,
    });
  }
};

export const viewOneMarchant = async (req: Request, res: Response) => {
  try {
    const { marchantId } = req.params;
    const merchant = await marchantModel.findById(marchantId);
    return res.status(201).json({
      message: "One Merchant Viewed",
      status: 201,
      data: merchant,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Creating Merchant",
      status: 404,
    });
  }
};

export const marchantLogin = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const marchant = await marchantModel.findOne({ email });

    return res.status(201).json({
      message: "Marchant Login Successfully",
      status: 201,
      data: marchant,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error Login In Marchant",
      status: 404,
      data: error,
    });
  }
};
