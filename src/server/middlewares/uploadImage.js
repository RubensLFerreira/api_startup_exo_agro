const multer = require('multer');
const path = require('path');

const imageStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const { tipo } = req.params;
    let folder =
      tipo === 'visita'
        ? 'visita'
        : tipo === 'admin'
        ? 'admin'
        : tipo === 'cliente'
        ? 'cliente'
        : 'agronomo';

    const uploadPath = `src/server/uploads/images/${folder}`;
    callback(null, uploadPath);
  },

  filename: (req, file, callback) => {
    const extension = path.extname(file.originalname);
    const fileName =
      Date.now() + String(Math.floor(Math.random() * 999)) + extension;
    callback(null, fileName);
  },
});

const imageUpload = multer({
  storage: imageStorage,

  fileFilter(req, file, callback) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return callback(
        new Error('Please only send images in png, jpeg or jpg format!'),
      );
    }
    callback(null, true);
  },
});

module.exports = imageUpload;
