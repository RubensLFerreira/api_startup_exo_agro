import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import bcrypt from 'bcrypt';

import User from '../../Models/User';
import Admin from '../../Models/Admin';

import adminSchema from '../../validations/adminSchema';

export const createAdmin = async (req: Request, res: Response) => {
  const requestData = req.body;
  const file = req.file;

  if (!file || !requestData) {
    return res.status(StatusCodes.BAD_REQUEST)
      .json({ message: 'Request file and body are required!' });
  }

  try {
    const role = requestData.role = 'admin';
    requestData.photo = file.filename;
    requestData.password = await bcrypt.hash(requestData.password, 10);

    const validatedDatas = await adminSchema.validate(requestData);

    const newUser = await User.create({
      name: validatedDatas.name,
      phone: validatedDatas.phone,
      cpf: validatedDatas.cpf,
      email: validatedDatas.email,
      password: validatedDatas.password,
      gender: validatedDatas.gender,
      birth: validatedDatas.birth,
      role: role,
      road: validatedDatas.road,
      neighborhood: validatedDatas.neighborhood,
      city: validatedDatas.city,
      photo: validatedDatas.photo
    });

    const newAdmin = await Admin.create({
      user_id: newUser.id,
    });

    res.status(StatusCodes.CREATED).json({ newAdmin, newUser });
  } catch (error: any) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        message: 'Error when creating a new record',
        validator: error.errors
      });
  }
};