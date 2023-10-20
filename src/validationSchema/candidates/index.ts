import * as yup from 'yup';

export const candidateValidationSchema = yup.object().shape({
  name: yup.string().required(),
  votes: yup.number().integer().required(),
  election_id: yup.string().nullable().required(),
});
