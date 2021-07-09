const multer = require('multer');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/gif': 'gif',
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        console.log('TESTSSSTT')

        callback(null, `images/users/id-${req.body.userId}/publications`);
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
})

module.exports = multer({ storage: storage }).single('image');