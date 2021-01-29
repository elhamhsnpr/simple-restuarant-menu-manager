const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const path = require('path');

// const signUpRoutes = require('./routes/sign-up');
const singInRoutes = require('./Router/SignIn');
const AddFoodRoutes = require('./Router/FoodCategory_FoodItem');
const MenuRoutes = require('./Router/Menu');
const Uploadimage= require('./Router/Uploadimage');



const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
};

const app = express();
app.use(cors(corsOption))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

//Sign UP Route
// app.use(signUpRoutes);

//Sign In Route
app.use(singInRoutes);

//FoodCategory_FoodItem Route
app.use(AddFoodRoutes);

//Menu Route
app.use(MenuRoutes);

//Upload Route
app.use(Uploadimage, express.static(path.join(__dirname, './upload')));


app.listen(8080);
console.log('server is running on 8080')