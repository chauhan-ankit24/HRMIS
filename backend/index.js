import express from "express";
import cors from "cors"
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5000

mongoose.set('strictQuery', false);
const URL = "mongodb://localhost:27017/cdacsample";
mongoose.connect(URL);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    request: Boolean
})

const User = new mongoose.model("User", userSchema);

app.post("/Login", async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    } catch (err) {
        console.log(err);
    }
});

app.post('/updateRequest', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            user.request = !user.request;
            await user.save();
            res.json(user);
        } else {
            res.status(404).send('Employee not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});
app.get('/getRequests', async (req, res) => {
    try {
      const user = await User.find({ request: true });
      res.json(user);
    } catch (error) {
      console.error('Error retrieving user:', error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(PORT, () => console.log(`server running at Port : ${PORT}`));