// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosInstance } from 'axios';

import {
    TCampaignDataSVCEndpoints,
    TGetPartiesListResponse,
    TGetCandidatesListResponse,
    TGetVotersListResponse,
} from './campaignData.types';
import { BASE_URL } from '../index';

//  api endpoints
const Votes = (api: AxiosInstance): TCampaignDataSVCEndpoints => {
    // list parties details
    const getPartiesList = () => api.get<TGetPartiesListResponse>(`${BASE_URL}/parties/list/all`);

    //list candidates details
    const getCandidatesList = () => api.get<TGetCandidatesListResponse>(`${BASE_URL}/candidates/list/all`);

    // list voters details
    const getVotersList = () => api.get<TGetVotersListResponse>(`${BASE_URL}/voters/list/all`);

    return {
        getPartiesList,
        getCandidatesList,
        getVotersList,
    };
};

export default Votes;
