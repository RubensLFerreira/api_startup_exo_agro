const { StatusCodes } = require('http-status-codes');

const createUserToken = require('../../utils/createUserToken.js');
const adminSchema = require('./../../validations/adminValidator.js');

const createAdminService = require('../../services/admin/Create.js');

const adminController = {
  create: async (req, res) => {
    try {
      const adminData = req.body;
      const foto = req.file;

      await adminSchema.validate(adminData);

      const usuario = await createAdminService(adminData, foto);

      createUserToken(usuario, req, res);
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when creating a new record',
        validator: error.errors,
        service: error.message,
      });
    }
  },
};

module.exports = adminController;
