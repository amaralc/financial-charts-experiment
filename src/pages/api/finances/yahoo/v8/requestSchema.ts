import * as yup from 'yup';

export const requestSchema = yup.object().shape({
  machineId: yup.string().required(),
  from: yup.date().required(),
  to: yup.date().required(),
});