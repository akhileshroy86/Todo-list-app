import mongoose, { Schema, model, models } from "mongoose";

export interface IItem {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  createdAt?: number;
  updatedAt?: number;
}

const ItemSchema = new Schema<IItem>({
  title: { type: String, required: true },
  color: { type: String, required: true },
  completed: { type: Boolean,required:false, default: false },
  createdAt: { type: Number,required:false,  default: () => Date.now()  },
  updatedAt: { type: Number,required:false, default: () => Date.now() },
}, { timestamps: false });  // Disable Mongoose's auto timestamps

const Item = models.Item || model<IItem>("Item", ItemSchema);
export default Item;
