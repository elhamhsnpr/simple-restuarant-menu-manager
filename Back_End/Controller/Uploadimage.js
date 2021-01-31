const pgclient = require('../DB/ConnectDB');
const path = require('path');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./uploads');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
 exports.upload = multer({ storage: storage, fileFilter: fileFilter }).single('image');



 exports.pathInsert = (req, res, next) => {

    console.log(req.file);
    console.log(req.body.category);
        pgclient.query('INSERT INTO Food(category, item, price, description,itemImage) VALUES ($1,$2,$3,$4,$5)',
            [req.body.category, req.body.item, req.body.price, req.body.description,req.file.path]).then(

                console.log("Insert Done"),
                 
                res.status(200).end()

            ).catch(err => next(err));

    // try {
    //     return res.status(201).json({
    //         message: 'File uploded successfully'
    //     });
    // } catch (error) {   
    //     console.error(error);
    // }
};