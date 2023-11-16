import * as yup from 'yup';

const adminSchema = yup.object().shape({
  nome: yup.string().min(3).required('Campo nome é obrigatório'),
  nascimento: yup.date().required('A data de nascimento é obrigatória'),
  telefone: yup.string().max(11).required('Campo telefone obrigatório'),
  email: yup
    .string()
    .nullable()
    .email('Formato de e-mail digitado não válido')
    .trim('Não deve conter espaços no início ou no fim.'),
  senha: yup
    .string()
    .min(3, 'Senha precisa ter no minímo 3 caracteres')
    .max(20, 'Senha precisa ter no máximo 20 caracteres')
    .required('Campo senha obrigatório'),
  rua: yup.string().min(3).required('Campo rua é obrigatório'),
  bairro: yup.string().min(3).required('Campo bairro é obrigatório'),
  cidade: yup.string().min(3).required('Campo cidade é obrigatório'),
});

export default adminSchema;
