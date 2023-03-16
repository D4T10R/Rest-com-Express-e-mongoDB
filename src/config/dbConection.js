import mongoose from "mongoose";

mongoose.connect("mongodb+srv://datior:123@cluster0.lwfqivk.mongodb.net/bancodaapi")

let db = mongoose.connection;

export default db