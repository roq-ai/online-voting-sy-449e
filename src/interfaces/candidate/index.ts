import { VoteInterface } from 'interfaces/vote';
import { ElectionInterface } from 'interfaces/election';
import { GetQueryInterface } from 'interfaces';

export interface CandidateInterface {
  id?: string;
  name: string;
  election_id: string;
  votes?: number;
  created_at?: any;
  updated_at?: any;
  vote?: VoteInterface[];
  election?: ElectionInterface;
  _count?: {
    vote?: number;
  };
}

export interface CandidateGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  election_id?: string;
}
