import * as yup from 'yup';

const adminSchema = yup.object().shape({
  name: yup.string().required('Name field is mandatory'),
  phone: yup.string().required('Phone field is mandatory'),
  cpf: yup.string().required('CPF field is mandatory'),
  email: yup.string().email('Invalid email').required('Email field is mandatory'),
  password: yup.string().min(3, 'At least 3 characters').required('Password field is mandatory'),
  gender: yup.string().oneOf(['mm', 'mf', 'ff', 'fm', 'o']).required('Gender field is mandatory'),
  birth: yup.date().required('Birth field is mandatory'),
  // role: yup.string().oneOf(['admin', 'agronomist', 'client']).required('Role field is mandatory'),
  road: yup.string().required('Road field is mandatory'),
  neighborhood: yup.string().required('Neighborhood field is mandatory'),
  city: yup.string().required('City field is mandatory'),
  photo: yup.string().notRequired(),
});

export default adminSchema;