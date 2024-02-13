import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from '../../Models/User';
import Client from '../../Models/Client';

import clientSchema from '../../validations/clientSchema';

export const createClient = async (req: Request, res: Response) => {
  const requestData = req.body;
  // const file = req.file;

  console.log(requestData);

  if (!requestData) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Request file and body are required!' });
  }

  // console.log(requestData);
  // const file = {
  //   filename: 'photo.jpg'
  // };

  try {
    // requestData.photo = file.filename;
    const role = 'client';
    requestData.password = await bcrypt.hash(requestData.password, 10);

    const validatedDatas = await clientSchema.validate(requestData);

    console.log(validatedDatas);

    const newUser = await User.create({
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
    });

    const newClient = await Client.create({
      area: validatedDatas.area,
      cultivation: validatedDatas.cultivation,
      problem: validatedDatas.problem,
      notification: validatedDatas.notification,
      user_id: newUser.id,
    });

    res.status(StatusCodes.CREATED).json(newClient);
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when creating a new record',
        validator: error.errors
      });
  }
};

// name string
// phone string
// email string
// password string
// gender string
// cpf string
// birth string
// road string
// neighborhood string
// city string
// photo string
// area number
// cultivation string
// problem string
// notification boolean