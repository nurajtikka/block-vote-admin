// eslint-disable-next-line import/no-extraneous-dependencies
import { AxiosInstance } from 'axios';

import {
    TDashboardSVCEndpoints,
    TGetPartyVotesResponse,
    TGetVotesUtilizedResponse,
    TGetVotesListResponse,
    TPostResultsByDistrictRequest,
    TPostResultsByDistrictResponse,
} from './dashboard.types';
import { BASE_URL } from '../index';

//  api endpoints
const Dashboard = (api: AxiosInstance): TDashboardSVCEndpoints => {
    // list votes of the parties
    const getPartyVotesList = () => api.get<TGetPartyVotesResponse>(`${BASE_URL}/votes/party/count`);

    //list utilized votes
    const getVotesUtilizedList = () => api.get<TGetVotesUtilizedResponse>(`${BASE_URL}/voters/list/utilized/count`);

    // list voted details
    const getVotesList = () => api.get<TGetVotesListResponse>(`${BASE_URL}/votes/list/all`);

    // filter district related votes
    const postResultsByDistrict = (payload: TPostResultsByDistrictRequest) => api.post<TPostResultsByDistrictResponse>(`${BASE_URL}/votes/district/count`, payload);

    return {
        getPartyVotesList,
        getVotesUtilizedList,
        getVotesList,
        postResultsByDistrict,
    };
};

export default Dashboard;
