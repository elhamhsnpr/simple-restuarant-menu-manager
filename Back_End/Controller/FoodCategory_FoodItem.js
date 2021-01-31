const pgclient = require('../DB/ConnectDB');

// exports.addFood = (req, res, next) => {
//     console.log(req.file)
//     try {
//         return res.status(201).json({
//             message: 'File uploded successfully'
//         });
//     } catch (error) {   
//         console.error(error);
//     }


//     // pgclient.query('INSERT INTO Food(category, item, price, description,itemImage) VALUES ($1,$2,$3,$4,$5)',
//     //         [req.body.category, req.body.item, req.body.price, req.body.description,req.file.path]).then(

//     //             console.log("Insert Done"),
                 
//     //             res.status(200).end()

//     //         ).catch(err => next(err));
// }