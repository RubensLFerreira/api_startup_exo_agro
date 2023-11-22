import { StatusCodes } from 'http-status-codes';

import Visita from '../../models/Visita.js';
import Cliente from '../../models/Cliente.js';
import Agronomo from '../../models/Agronomo.js';
import Status from '../../models/Status.js';

import visitaSchema from './../../validations/visitaValidator.js';

const visitaController = {
  create: async (req, res) => {
    try {
      const foto = req.files.map((file) => file.filename);

      const {
        objetivo,
        diagnostico,
        praga,
        produto,
        observacoes,
        plantio,
        cliente,
        agronomo,
        status,
        venda,
        data,
        chegada,
        saida,
      } = req.body;

      await visitaSchema.validate(req.body);

      const isCliente = await Cliente.findOne({ where: { id: cliente } });

      const isAgronomo = await Agronomo.findOne({ where: { id: agronomo } });

      const isStatus = await Status.findOne({ where: { id: status } });

      if (!isCliente || !isAgronomo || !isStatus) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: 'ForeignKey not found!',
        });
      }

      const visita = await Visita.create({
        objetivo,
        diagnostico,
        praga,
        produto,
        observacoes,
        plantio,
        foto: foto,
        cliente_id: isCliente.id,
        agronomo_id: isAgronomo.id,
        status_id: isStatus.id,
        venda,
        data,
        chegada,
        saida,
      });

      foto.map((foto) => {
        visita.foto.push(foto.filename);
      });

      res.status(StatusCodes.CREATED).json({ visita });
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({
          message: 'Error when created visit!',
          validator: error.errors,
        });
    }
  },
};

export default visitaController;

// (1, 'andamento'),
// (2, 'finalizado'),
// (3, 'cancelado');
