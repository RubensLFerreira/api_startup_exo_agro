import { getAllRepository } from '@/server/repositories/cliente/GetAllRepository';
import { GetAllService } from '@/server/services/cliente/getAllService';
import { Request, Response } from 'express';

export const getAllController = async (request: Request, response: Response) => {  
  try {
    const { propriedade, cultivo, problema, notificacao, usuario_id, usuario, visita } = request.body;
    const getAll = new GetAllService(new getAllRepository);

    const clientes = await getAll.execute(propriedade, cultivo, problema, notificacao, usuario_id, usuario, visita);

    return response.json({
      error: false,
      message: 'Todos os registros => Cliente',
      clientes 
    });

  } catch (error) {
    return response.json({
      error: true,
      message: 'Erro ao buscar registros => Cliente',
    });
  }
};