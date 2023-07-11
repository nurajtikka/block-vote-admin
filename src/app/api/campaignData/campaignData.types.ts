// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosResponse } from 'axios';

//  api responses
export type TGetPartiesListResponse = { parties: { _id: string; acronym: string; name: string }[] };

export type TGetCandidatesListResponse = {
    candidates: { _id: string; name: string; party: string; district: string }[];
};

export type TGetVotersListResponse = {
    voters: { _id: string; name: string; age: string; gender: number; district: string; voted: boolean }[];
};

// api definitions
type TGetPartiesList = () => Promise<AxiosResponse<TGetPartiesListResponse>>;

type TGetCandidatesList = () => Promise<AxiosResponse<TGetCandidatesListResponse>>;

type TGetVotersList = () => Promise<AxiosResponse<TGetVotersListResponse>>;

export type TCampaignDataSVCEndpoints = {
    getPartiesList: TGetPartiesList;
    getCandidatesList: TGetCandidatesList;
    getVotersList: TGetVotersList;
};
