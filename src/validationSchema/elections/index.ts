import * as yup from 'yup';

export const electionValidationSchema = yup.object().shape({
  title: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  client_id: yup.string().nullable().required(),
});
