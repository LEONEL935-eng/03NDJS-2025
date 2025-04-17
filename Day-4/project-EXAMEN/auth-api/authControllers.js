const bcrypt = require('bcryptjs');
const users = require('../models/userModel');

const registerUser = async (req, res) => {
    const {email, password} = registerUser.body;
if (!email || !password){
    return res.status(400).json({message: 'email et mot de passe sont requis'});
}
const existingUser = users.find(user => user.email === email);
if (existingUser){
    return res.status(409).json({message: 'Email est déjà utilise'})
}
const hashedPassword = await bcrypt.hash(password, 10);
const newUser ={
    id: Date.now().toString(),
    password: hashedPassword
};
users.push(newUser);
const {password:_, ...userWithoutPassword} =newUser;
res.status(201).json(userWithoutPassword);
};
module.exports = {registerUser}