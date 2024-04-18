import express from "express";
import mongoose from "mongoose";

import { users } from "./router/user.js";

const PORT = 8080;

const app = express();
app.use(express.json());

app.use("/users", users);

//connections -g function bologh ????? path-g env deer hadgalah eseh ???????????

const MONG0_CONNECTION_STRING =
  "mongodb+srv://nominregister:pAL02wKYZUPOdXl3@leap1f.urejbwt.mongodb.net/"; //env deer link-ee hadgalah

mongoose
  .connect(MONG0_CONNECTION_STRING)
  .then(() => console.log("database connected succesfully"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// app.get("/userbyid", async (request, response) => {
//   const data = await UserModel.findById("660bca6b881291082ba58778");

//   console.log(data);

//   response.send("workin");
// });

// findByField UserModel.find ({age: "11"})

//deleteByField  UserModel.deleteOne ({age: "11"})

// update : app.put("/user", async (request, response) => ??? nemj sudlah harah4

//findOneandUpdate

// app.get("/user", async (request, response) => {
//   const data = await UserModel.find();

//   console.log(data);

//   response.send("workin");
// });

// app.post("/user", async (request, response) => {
//   const data = await UserModel.create({ age: "135" });
//   console.log(data);
//   response.send("workin");
// });

// // insertMany ashiglan olon data nemeh  [] ashiglah
// app.post("/userMany", async (request, response) => {
//   const data = await UserModel.insertMany([{ age: "135" }, { age: "35" }]);
//   console.log(data);
//   response.send("workin");
// });

// app.get("/userfindbyfield", async (request, response) => {
//   const data = await UserModel.find({ age: "35" });

//   console.log(data);

//   response.send("workin");
// });

// app.get("/userdeletebyfield", async (request, response) => {
//   const data = await UserModel.deleteOne({ age: "135" });

//   console.log(data);

//   response.send("workin");
// });

// app.put("/userupdateone", async (request, response) => {
//   const data = await UserModel.updateOne({ age: "135" }, { age: "23" });

//   console.log(data);

//   response.send("workin");
// });

// app.put("/userfindandupdate", async (request, response) => {
//   const data = await UserModel.findOneAndUpdate(
//     { _id: "660bca6b881291082ba58778" },
//     {
//       age: "22",
//     }
//   );

//   console.log(data);

//   response.send("workin");
// });
