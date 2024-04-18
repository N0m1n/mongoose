import { UserModel } from "../model/userModel.js";

export const createTable = async (request, response) => {
  try {
    const data = await UserModel.create({
      name: "Bold",
      email: "bold@gmail.com",
      password: "1234",
      role: "USER",
    });
    console.log(data);
    response.send(`users table is created`);
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsers = async (request, response) => {
  try {
    const data = await UserModel.find();
    response.send(data);
  } catch (err) {
    console.log(err);
  }
};

export const postUser = async (request, response) => {
  const { name, password, email, role } = request.body;
  //   const salt = bcrypt.genSaltSync(1);
  //   const hashedPassword = await bcrypt.hash(password, salt);
  const users = await UserModel.find();
  // users.push({ name: name, password: hashedPassword });
  try {
    const result = await UserModel.insertMany(name, email, password, role); //shalgah
    response.send(result);
  } catch (err) {
    console.error(err);
    response.status(400).json({ message: "Failed to add user" });
  }

  console.log(users);
  // response.send("User created succesfully");
};
