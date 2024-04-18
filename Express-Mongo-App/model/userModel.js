import { Schema, model } from "mongoose";
// import { COLLECTIONS } from "../constant";

// nomin nertei collection uusgej bga

export const UserSchema = new Schema({
  name: String,
  email: String,
  password: {
    type: String,
    required: true,
  },
  phoneNumber: Number,

  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    required: true,
  },
});
export const UserModel = model("User", UserSchema);

// export const OrderSchema = new Schema({
//   userId: {
//     type: String,
//     required: true,
//     ref: COLLECTIONS.USER,
//   },
//   orderNumber: Number,
//   foods: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: COLLECTIONS.FOOD,
//     },
//   ],
//   totalPrice: Number,
//   process: {
//     type: String,
//     enum: ["PROGESS", "DELIVERED", "WAITING", "ACTIVE"], // [ "PAID" , "NOT PAID"]
//   },
//   createdDate: {
//     type: Date,
//     required: true,
//   },
//   district: String,
//   khoroo: String,
//   appartment: String,
// });

// export const FoodSchema = new Schema({
//   foodName: String,
//   image: String,
//   ingeredient: String,
//   price: Number,
// });

// export const CategorySchema = new Schema({
//   categoryName: String,
//   foodId: {
//     type: String,
//     ref: COLLECTIONS.USER,
//   },
// });
