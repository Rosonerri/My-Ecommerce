import { Schema, Types, model } from "mongoose"

interface iPurchased {
  email: string;
  name: string;
  price: number;
  image: string;
  imageId: string;
  marchant: {};
}

interface iPurchasedData extends iPurchased, Document{}

const purchasedModel = new Schema<iPurchasedData>(
  {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    imageId: {
      type: String,
    },
    marchant: {
      type: Types.ObjectId,
      ref: "vendors",
    },
  },
  { timestamps: true }
);

export default model<iPurchasedData>("purchases", purchasedModel);