// eslint-disable-next-line import/no-extraneous-dependencies
import Axios, { AxiosInstance } from 'axios';

import { TCampaignDataSVCEndpoints } from './campaignData/campaignData.types';

import campaignData from './campaignData/campaignData';
import dashboard from './dashboard/dashboard';
import { TDashboardSVCEndpoints } from './dashboard/dashboard.types';

//  API base URL - Change this correctly
export const BASE_URL = 'http://192.168.8.187:3001/_svc/block-vote/api/v1';
// export const BASE_URL = 'http://localhost:3001/_svc/block-vote/api/v1';

//  API instance
let api: AxiosInstance = Axios.create({
    baseURL: 'uninitialized!',
});

export const initializeAxios = (): void => {
    api = Axios.create({
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, max-age=0, must-revalidate, no-store',
        },
    });
};

export const campaignDataSVC = (): TCampaignDataSVCEndpoints => campaignData(api);
export const dashboardSVC = (): TDashboardSVCEndpoints => dashboard(api);
