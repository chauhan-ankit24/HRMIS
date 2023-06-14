import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    request: Boolean,
    username: String,
    EmployeeID: String,
    SelfAppraisalPeriod_from: Date,
    SelfAppraisalPeriod_to: Date,
    ProjectName: String,
    // EmailID: "",
    CurrentResponsiblities: String,
    JobAsssigned: String,
    SpecificAchievementByTheEmployee: String,
    SingnatureOfEmployee: String,
    Date: Date
});

export default mongoose.model("User", userSchema);