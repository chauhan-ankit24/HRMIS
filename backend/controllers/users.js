import User from '../models/user.js';

export const Login = async (req, res) => {
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
};

export const updateRequest = async (req, res) => {
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
};

export const getRequests = async (req, res) => {
    try {
        const user = await User.find({ request: true });
        res.json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Internal Server Error');
    }
};

