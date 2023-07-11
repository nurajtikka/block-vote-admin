// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosInstance } from 'axios';

import {
    TGetAuthorizeResponse,
    TGetEligibilityRequest,
    TGetEligibilityResponse,
    TPostVotesRequest,
    TPostVotesResponse,
    TVotesSVCEndpoints,
} from './votes.types';

//  API base URL - Change this correctly
// const BASE_URL = 'http://192.168.8.187:3001/_svc/block-vote/api/v1';
const BASE_URL = 'http://localhost:3001/_svc/block-vote/api/v1';

//  API endpoints
const Votes = (api: AxiosInstance): TVotesSVCEndpoints => {
    const getEligibility = (payload: TGetEligibilityRequest) =>
        api.post<TGetEligibilityResponse>(`${BASE_URL}/voters/checkEligibility`, payload);

    const postVotes = (payload: TPostVotesRequest) => api.post<TPostVotesResponse>(`${BASE_URL}/votes/vote`, payload);

    const getAuthorize = () => api.get<TGetAuthorizeResponse>(`${BASE_URL}/fingerprint/scan`);

    return {
        getEligibility,
        postVotes,
        getAuthorize,
    };
};

export default Votes;
