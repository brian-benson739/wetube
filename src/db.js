import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube");

const db = mongoose.connection

const handlOpen = () => console.log("✅ Connected to DB ")
const handleError = () => console.log("🚨 DB error", error)
db.on("error", handleError)
db.once("open", handlOpen)