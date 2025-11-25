import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection

const handlOpen = () => console.log("✅ Connected to DB ")
const handleError = () => console.log("🚨 DB error", error)
db.on("error", handleError)
db.once("open", handlOpen)