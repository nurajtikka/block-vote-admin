// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosResponse } from 'axios';

// api requests
export type TPostResultsByDistrictRequest = { district: string };

//  api responses
export type TGetPartyVotesResponse = { counts: { _id: string; acronym: string; name: string, votes: number }[] };

export type TGetVotesUtilizedResponse = {
    votes: { _id: {voted: boolean}; count: number }[];
};

export type TGetVotesListResponse = {
    votes: { _id: string; voter_id: string; party_id: string; candidate_id: string; voted_time: string; district: string }[];
};

export type TPostResultsByDistrictResponse = {
    counts: { _id: string; name: string; party: string; district: string; votes: number }[];
};

// api definitions
type TGetPartyVotesList = () => Promise<AxiosResponse<TGetPartyVotesResponse>>;

type TGetVotesUtilizedList = () => Promise<AxiosResponse<TGetVotesUtilizedResponse>>;

type TGetVotesList = () => Promise<AxiosResponse<TGetVotesListResponse>>;

type TPostResultsByDistrict = (payload: TPostResultsByDistrictRequest) => Promise<AxiosResponse<TPostResultsByDistrictResponse>>;

export type TDashboardSVCEndpoints = {
    getPartyVotesList: TGetPartyVotesList;
    getVotesUtilizedList: TGetVotesUtilizedList;
    getVotesList: TGetVotesList;
    postResultsByDistrict: TPostResultsByDistrict;
};
