import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from '../../Models/User';
import Client from '../../Models/Client';

import clientSchema from '../../validations/clientSchema';

export const updateClientById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const requestData = req.body;
  const file = req.file;

  if (!id) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Id client is required' });
  }

  if (!requestData) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Data is required' });
  }

  if (!file) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Photo is required' });
  }

  const clientExists = await Client.findByPk(id);

  if (!clientExists) {
    return res.status(StatusCodes.NOT_FOUND)
      .json({ message: 'Client not found' });
  }

  try {
    requestData.photo = file.filename;
    const role = 'client';
    requestData.password = await bcrypt.hash(requestData.password, 10);

    const validatedDatas = await clientSchema.validate(requestData);

    const updateClient = await Client.update({
      area: validatedDatas.area,
      cultivation: validatedDatas.cultivation,
      problem: validatedDatas.problem,
      notification: validatedDatas.notification,
      user_id: requestData.user_id,
    }, {
      where: { id: id }
    });

    const updateUser = await User.update({
      name: validatedDatas.name,
      phone: validatedDatas.phone,
      email: validatedDatas.email,
      password: validatedDatas.password,
      gender: validatedDatas.gender,
      cpf: validatedDatas.cpf,
      birth: validatedDatas.birth,
      role: role,
      road: validatedDatas.road,
      neighborhood: validatedDatas.neighborhood,
      city: validatedDatas.city,
      photo: validatedDatas.photo
    }, {
      where: { id: requestData.user_id, }
    });


    res.status(StatusCodes.OK).json({ updateUser, updateClient });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Error when updating record',
      error: error.message
    });
  }
};
