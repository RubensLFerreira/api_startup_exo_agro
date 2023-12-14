const yup = require('yup');

const visitaSchema = yup.object().shape({
  chegada: yup.string().required('Campo chegada é obrigatório!'),
  saida: yup.string().required('Campo saída é obrigatório!'),
  data: yup.date().required('Campo data é obrigatório!'),
  objetivo: yup.string().required('Campo objetivo é obrigatório!'),
  diagnostico: yup.string().required('Campo diagnostico é obrigatório!'),
  praga: yup.string().required('Campo praga é opcional!'),
  produto: yup.string().required('Campo produto é obrigatório!'),
  observacoes: yup.string().required('Campo observacoes é opcional!'),
  plantio: yup.string().required('Campo plantio é opcional!'),
  venda: yup.boolean().required('Campo venda é obrigatório!'),
  cliente: yup.number().required('Campo cliente é obrigatório!'),
  agronomo: yup.number().required('Campo agronomo é obrigatório!'),
  status: yup.number().required('Campo status é obrigatório!'),
});

module.exports = visitaSchema;
