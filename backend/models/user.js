import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    request: Boolean
});

export default mongoose.model("User", userSchema);