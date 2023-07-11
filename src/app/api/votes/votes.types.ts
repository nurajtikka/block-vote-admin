// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosResponse } from 'axios';

//  types for checking eligibility
export type TGetEligibilityRequest = { nic: string };
export type TGetEligibilityResponse = { message: string };

//  API request type
type TGetEligibility = (payload: TGetEligibilityRequest) => Promise<AxiosResponse<TGetEligibilityResponse>>;

//  types for votes
export type TPostVotesRequest = { nic: string; party: string };
export type TPostVotesResponse = { message: string };
export type TGetAuthorizeResponse = { message: string };

//  api request type
type TPostVotes = (payload: TPostVotesRequest) => Promise<AxiosResponse<TPostVotesResponse>>;

//  api request type
type TGetAuthorize = () => Promise<AxiosResponse<TGetAuthorizeResponse>>;

export type TVotesSVCEndpoints = {
    getEligibility: TGetEligibility;
    postVotes: TPostVotes;
    getAuthorize: TGetAuthorize;
};
