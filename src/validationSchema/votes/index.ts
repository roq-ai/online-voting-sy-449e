import * as yup from 'yup';

export const voteValidationSchema = yup.object().shape({
  user_id: yup.string().nullable().required(),
  candidate_id: yup.string().nullable().required(),
  election_id: yup.string().nullable().required(),
});
