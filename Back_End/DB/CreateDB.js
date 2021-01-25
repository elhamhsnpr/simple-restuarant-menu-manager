// Create Postgres Table 
const { Pool } = require('pg');
const async = require('async');
const pgtools = require('pgtools');
const bcrypt = require("bcrypt");

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS);


async function Create() {

    await createDatabse();
    await CreateTable();
    await AddAdmin();
    await AddFood();


};

async function createDatabse() {
    const config = {
        user: "postgres",
        host: "pg",
        password: "972500",
        port: 5432
    };

    await pgtools.createdb(config, "restuarant").then(
        function (res) {
            console.log("db/:make Creating 'restuarant' ");

        }, function (err) {
            console.log("err DB", err.name)
        }
    )

}

const connectionString = 'postgresql://postgres:972500@pg:5432/restuarant';


const pool = new Pool({
    connectionString: connectionString
});
pool.on('connect', () => {
    console.log('connected to the db');
});
console.log("db/make: Connecting to database...");


async function CreateTable() {
    //Add Admin Table
    let query = `CREATE TABLE IF NOT EXISTS Admin (
            _id SERIAL PRIMARY KEY ,         
            firstName VARCHAR(45) ,
            lastName VARCHAR(45) ,
            username VARCHAR(45),
            password VARCHAR(200),
            userType VARCHAR(45)
           );`;
    await pool.query(query).then(

        function (res) {
            console.log("db/:Make Creating 'Admin' Table ");
        }, function (err) {
            console.log('err Admin:', err.name);
        });

    //Add Food Table
    query = `CREATE TABLE IF NOT EXISTS Food(
            _id SERIAL PRIMARY KEY ,
            Category VARCHAR(45),
            item VARCHAR(45),
            price VARCHAR(45),
            description VARCHAR(200)
        );`;
    await pool.query(query).then(

        function (res) {
            console.log("db/:Make Creating 'Food' Table ");
        }, function (err) {
            console.log('err Food:', err.name);
        });

  

}


async function AddAdmin() {

    pool.query(`Select * FROM admin `)
        .then(result => {
            // check DataBase is empty then add admin.admin manually
            if (result.rows[0] === undefined) {
                // Hashin Password
                bcrypt.hash('admin', BCRYPT_SALT_ROUNDS)
                    .then(hashedPassword => {


                        pool.query(
                            `INSERT INTO admin (firstName,lastName,username,password,userType) 
                         VALUES($1,$2,$3,$4,$5)`, ['elham', 'hasanpour', 'admin', hashedPassword, 'admin.admin']
                        ).then(
                            function (res) {
                                console.log("db/: Add Admin.Admin  ");
                            },
                            function (err) {

                                console.log('err Add Admin.Admin:', err.name);


                            }
                        )
                    })
            } else (
                console.log('Admin.Admin Exist')
            )
        }

        )

        .catch(err => {
            console.log(err);
        });


}

async function AddFood() {

    pool.query(`Select * FROM Food `).then(result => {

        if (result.rows[0] === undefined) {
            pool.query(
                `INSERT INTO Food (category,item,price,description)  VALUES 
                      ('Starter','Bread Basket','5','Selction of freshly baked rolls'),
                      ('Starter','Garlice AND Cheese Bread','8','Garlic bread sprinkled with mozzarella cheese'),
                      ('Main','Pork Chops with Fig and Grape Agrodolce','22','Fresh figs and grapes cooked in balsamic vinegar and honey make an addictively sweet and sour sauce for pork chops'),
                      ('Main','Cauliflower Bolognese','25','No, you don’t have to be a vegetarian to love what’s going on here. Cauliflower and mushrooms provide richness and toothiness that do justice to the meaty original'),
                      ('Main','Chicken Stew with Potatoes and Radishes','23','This one-pot comfort-food stew takes its flavor cues from chicken paprikash.'),
                      ('Main','Grand Aioli','17','This classic French dish is summer dining at its finest: no utensils required, and it pairs very well with chilled rosé'),
                      ('Dessert','TIRAMISU LAYER CAKE','9','This was sinfully good, and easier to make than I expected. If I had it to do over again, I would ask for this to be my wedding cake'),
                      ('Dessert','LEMON SOUFFLES','8','Served in a lemon, these personal desserts are both sweet and sophisticated.'),
                      ('Dessert','WHITE CHOCOLATE RASPBERRY CHEESECAKE','11','This was delicious! It was nice to go out to dinner and not have to order dessert because we knew this was waiting for us at home'),
                      ('Drink','Rhubarb & custard cocktail','5','An elegant vodka-based drink thatll wow your guests - its made with creamy advocaat liqueur and homemade fruit syrup'),
                      ('Drink','Cranberry vodka','5','This bittersweet fruity vodka is best served well chilled in shot glasses. It can also be made with other berries like blackcurrants or strawberries'),
                      ('Drink','Mimosa','5','Mix a classic mimosa cocktail with orange juice and champagne – or use prosecco if you prefer a different sort of bubbly. Its an easy fix when entertaining')   
                
               ;` 
               ).then(
                function (res) {
                    console.log("db/: Add Food  ");
                },
                function (err) {

                    console.log('err Food', err.name);


                }
            )
        } else (
            console.log('Food Exist')
        )

    })


}

module.exports=Create;

// function f() {
//     try {
//         Create();
//     } catch (e) {
//         console.log(e);
//     }
// }

// f();
