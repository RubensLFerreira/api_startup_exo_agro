import * as yup from 'yup';

const visitaSchema = yup.object().shape({
  objetivo: yup.string().required('Campo objetivo é obrigatório!'),
  diagnostico: yup.string().required('Campo diagnostico é obrigatório!'),
  praga: yup.string().notRequired('Campo praga é opcional!'),
  produto: yup.string().required('Campo produto é obrigatório!'),
  observacoes: yup.string().notRequired('Campo observacoes é opcional!'),
  plantio: yup.string().notRequired('Campo plantio é opcional!'),
  cliente: yup.number().required('Campo cliente é obrigatório!'),
  agronomo: yup.number().required('Campo agronomo é obrigatório!'),
  status: yup.number().required('Campo status é obrigatório!'),
  venda: yup.boolean().required('Campo venda é obrigatório!'),
  data: yup.date().required('Campo data é obrigatório!'),
  chegada: yup.string().required('Campo chegada é obrigatório!'),
  saida: yup.string().required('Campo saída é obrigatório!'),
});

export default visitaSchema;
