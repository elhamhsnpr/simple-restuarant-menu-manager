// Create Postgres Table 
const { Pool } = require('pg');
const async = require('async');
const pgtools = require('pgtools');
const bcrypt = require("bcrypt");

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS);


async function Create() {

    await createDatabse();
    await CreateTable();
    await AddForeignkey();
    await AddAdmin();


};

async function createDatabse() {
    const config = {
        user: "postgres",
        host: "localhost",
        password: "972500",
        port: 5432
    };

    await pgtools.createdb(config, "restuarant").then(
        function (res) {
            console.log("db/:make Creating 'restuarant' ");

        }, function (err) {
            console.log("err DB", err)
        }
    )

}

const connectionString = 'postgresql://postgres:972500@localhost:5432/restuarant';

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
            console.log('err Admin:', err);
        });

    //Add Category Table
    query = `CREATE TABLE IF NOT EXISTS Category(
            _id SERIAL PRIMARY KEY ,         
            CategoryName VARCHAR(45) 
                    
        );`;
    await pool.query(query).then(

        function (res) {
            console.log("db/:Make Creating 'Category' Table ");
        }, function (err) {
            console.log('err Category:', err);
        });

    //Add Item Table
    query = `CREATE TABLE IF NOT EXISTS Item(
                    _id SERIAL PRIMARY KEY ,         
                    itemName VARCHAR(45),
                    categoryName  VARCHAR(45)
                
    );`;
    await pool.query(query).then(

        function (res) {
            console.log("db/:Make Creating 'Item' Table ");
        }, function (err) {
            console.log('err Item:', err);

        });




}

async function AddForeignkey() {
    //Add CategoryId Foreign Key Of Category to Item
    query = `ALTER TABLE  Item
                 ADD  CONSTRAINT CategoryForeignKey 
                 FOREIGN KEY (categoryName) REFERENCES category(categoeryName)`;
    await pool.query(query).then(
        function (res) {
            console.log("db/: Add Category Foreign Key");
        },
        function (err) {
            console.log('err Category Foreign Key:', err);
        });
}

async function AddAdmin() {

    pool.query(`Select * FROM admin `)
        .then(result => {
            // check DataBase is empty then add admin.admin manually
            if (result.rows[0] === undefined) {
                // Hashin Password
                bcrypt.hash('97250', BCRYPT_SALT_ROUNDS)
                    .then(hashedPassword => {

                        pool.query(
                            `INSERT INTO admin (firstName,lastName,username,password,userType) 
                         VALUES ($1,$2,$3,$4,$5)`, ['elham', 'hasanpour', 'eli123', hashedPassword, 'admin.admin']
                        ).then(
                            function (res) {
                                console.log("db/: Add Admin.Admin  ");
                            },
                            function (err) {

                                console.log('err Add Admin.Admin:', err);


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

// module.exports=CreateDB;

function f() {
    try {
        Create();
    } catch (e) {
        console.log(e);
    }
}

f();
