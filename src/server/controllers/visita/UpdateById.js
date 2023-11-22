import { StatusCodes } from 'http-status-codes';

import Visita from '../../models/Visita.js';

import visitaSchema from '../../validations/visitaValidator.js';

const visitaController = {
  update: async (req, res) => {
    const { id } = req.params;
    const {
      objetivo,
      diagnostico,
      praga,
      produto,
      observacoes,
      plantio,
      foto,
      cliente,
      agronomo,
      status,
      venda,
      data,
      chegada,
      saida,
    } = req.body;

      
    try {
      await visitaSchema.validate(req.body);

      const visita = await Visita.findByPk(id);

      if (!visita) {
        return res.status(404).send({ message: 'Objeto não encontrado' });
      }

      const updateVisita = await visita.update({
        objetivo,
        diagnostico,
        praga,
        produto,
        observacoes,
        plantio,
        foto,
        cliente_id: cliente,
        agronomo_id: agronomo,
        status_id: status,
        venda,
        data,
        chegada,
        saida,
      }, {
        where: { id: id },
      });
    

      res.status(StatusCodes.OK).json({ updateVisita });
    } catch (error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: 'Error when updating visit!',
        validator: error.errors,
      });
    }
  },
};

export default visitaController;

