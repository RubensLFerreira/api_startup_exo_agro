import multer from 'multer';
import path from 'path';

const imageStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const { type } = req.params;
    let folder =
      type === 'visita' ? 'visita' : type === 'admin' ? 'admin' : 'agronomo';

    const uploadPath = `src/server/public/images/${folder}`;
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

export default imageUpload;
