import {Document, Schema, Types, model} from "mongoose"

interface ivendorStore {
  marchantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  imageId: string;
  marchant: {};
}

interface ivendorStoreData extends ivendorStore, Document{}

const StoreModel = new Schema<ivendorStoreData>(
  {
    marchantId: {
      type: String,
    },
    name: {
      type: String,
    },

    description: {
      type: String,
    },

    image: {
      type: String,
    },

    imageId: {
      type: String,
    },

    price: {
      type: Number,
    },

    marchant: {
      type: Types.ObjectId,
      ref: "purchasedHistory",
    },
  },
  { timestamps: true }
);

export default model<ivendorStoreData>("stores", StoreModel);