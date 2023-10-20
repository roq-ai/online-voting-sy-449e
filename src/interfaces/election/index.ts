import { CandidateInterface } from 'interfaces/candidate';
import { VoteInterface } from 'interfaces/vote';
import { ClientInterface } from 'interfaces/client';
import { GetQueryInterface } from 'interfaces';

export interface ElectionInterface {
  id?: string;
  title: string;
  start_date: any;
  end_date: any;
  client_id: string;
  created_at?: any;
  updated_at?: any;
  candidate?: CandidateInterface[];
  vote?: VoteInterface[];
  client?: ClientInterface;
  _count?: {
    candidate?: number;
    vote?: number;
  };
}

export interface ElectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  client_id?: string;
}
