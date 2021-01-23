const express = require("express");
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// const signUpRoutes = require('./routes/sign-up');
const singInRoutes = require('./Router/SignIn');
const foodCategory_foodItem = require('./Router/FoodCategory_FoodItem');
const MenuRoutes = require('./Router/Menu')


// const allowCrossDomain = function(req, res, next) {
// res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
// // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// res.header('Access-Control-Allow-Headers', 'Content-Type');
// next();
// }

const corsOption = {
    origin: 'http://localhost:3000',
    credentials: true
};

const app = express();
app.use(cors(corsOption))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())


// app.use(allowCrossDomain);

//Sign UP Route
// app.use(signUpRoutes);
//Sign In Route
app.use(singInRoutes);
//FoodCategory_FoodItem Route
app.use(foodCategory_foodItem);
//Menu Route
app.use(MenuRoutes);


app.listen(8080);
console.log('server is running on 8080')