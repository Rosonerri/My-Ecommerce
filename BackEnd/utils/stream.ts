import { NextFunction, Request, Response } from "express";
import cloudinary from "./cloudinary";
import streamifier from "streamifier";

export const stream = async (req: Request) => {
  let streamUpload = (req: any) => {
    return new Promise((resolve, reject) => {
      let stream = cloudinary.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
  };

  async function upload(req: any) {
    let result = await streamUpload(req);
    return result;
  }

  return upload(req);
};
