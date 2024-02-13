import multer from 'multer';

const storage = multer.diskStorage({
  destination(req, _, callback) {
    const { type } = req.params;
    const folder =
      type === 'register-admin' ? 'admin'
        : type === 'register-agronomist' ? 'agronomist'
          : type === 'register-client' ? 'client' : 'visit';

    const uploadPath = `src/server/uploads/images/${folder}`;
    callback(null, uploadPath);
  },

  filename(_, file, callback) {
    const { originalname } = file;

    const auxArray = originalname.split('.');
    const extension = auxArray[1];

    callback(null, `${Date.now()}-${Math.floor(Math.random() * 999)}.${extension}`);
  },
});

const upload = multer({
  storage,
  fileFilter(_, file, callback) {
    if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
      return callback(
        new Error('Please only send images in png, jpeg or jpg format!'),
      );
    }
    callback(null, true);
  },
});

export default upload;