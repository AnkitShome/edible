import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   image: {
      type: String
   },
   price: {
      type: Number,
      required: true
   },
   ratings: {
      type: Number,
      default: 0
   },
   restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant"
   }
}, { timestamps: true })

export const MenuItem = mongoose.model("MenuItem", menuItemSchema);