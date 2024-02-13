import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from '../../Models/User';
import Agronomist from '../../Models/Agronomist';

import agronomistSchema from '../../validations/agronomistSchema';

export const createAgronomist = async (req: Request, res: Response) => {
  const requestData = req.body;
  const file = req.file;

  if (!file || !requestData) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Request file and body are required!' });
  }

  try {
    const role = 'agronomist';
    requestData.photo = file.filename;
    requestData.password = await bcrypt.hash(requestData.password, 10);

    const agronomistValidade = await agronomistSchema.validate(requestData, { abortEarly: false });

    const newUser = await User.create({
      name: agronomistValidade.name,
      phone: agronomistValidade.phone,
      email: agronomistValidade.email,
      password: agronomistValidade.password,
      gender: agronomistValidade.gender,
      cpf: agronomistValidade.cpf,
      birth: agronomistValidade.birth,
      role: role,
      road: agronomistValidade.road,
      neighborhood: agronomistValidade.neighborhood,
      city: agronomistValidade.city,
      photo: agronomistValidade.photo
    });

    const newAgronomist = await Agronomist.create({
      education: agronomistValidade.education,
      user_id: newUser.id,
    });

    res.status(StatusCodes.CREATED).json(newAgronomist);

  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when creating a new record',
        validator: error.errors
      });
  }
};
