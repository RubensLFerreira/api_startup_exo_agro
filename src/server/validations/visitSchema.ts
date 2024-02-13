import * as yup from 'yup';

const visitSchema = yup.object().shape({
  goal: yup.string().required('Goal field is mandatory'),
  diagnosis: yup.string().notRequired(),
  pest: yup.string().notRequired(),
  product: yup.string().notRequired(),
  observations: yup.string().notRequired(),
  planting: yup.string().notRequired(),
  photo: yup.string().notRequired(),
  status: yup.string().required('Status field is mandatory'),
  sale: yup.string().notRequired(),
  date: yup.date().required('Date field is mandatory'),
  arrival: yup.date().required('Arrival field is mandatory'),
  exit: yup.date().required('Exit field is mandatory'),
  client_id: yup.string().required('Client field is mandatory'),
  agronomist_id: yup.string().required('Agronomist field is mandatory'),
});

export default visitSchema;
