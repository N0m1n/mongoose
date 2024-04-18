import { Router } from "express";
import { createTable, getAllUsers, postUser } from "../controller/user.js";

const users = Router();

users.route("/").post(createTable);
users.route("/signup").get(getAllUsers).post(postUser);

export { users };
