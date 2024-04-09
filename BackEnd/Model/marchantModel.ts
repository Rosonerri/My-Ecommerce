import { Document, Schema, Types, model } from "mongoose";

interface iMarchant {
  name: string;
  email: string;
  account: string;
  store: Array<{}>;
  purchased: Array<{}>;
}

interface iMarchantData extends iMarchant, Document{}

const marchantModel = new Schema<iMarchantData>({
  name: {
    type: String,
  },

  email: {
    type: String,
  },

  account: {
    type: String,
  },

  store: [
    {
      type: Types.ObjectId,
      ref: "stores",
    },
  ],

  purchased: [
    {
      type: Types.ObjectId,
      ref: "purchases",
    },
  ],
}, {timestamps: true});

export default model<iMarchantData>("marchants", marchantModel);