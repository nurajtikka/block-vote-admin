import {
    TGetPartiesListResponse,
    TGetCandidatesListResponse,
    TGetVotersListResponse,
} from '../api/campaignData/campaignData.types';

export type TCampaignDataContext = {
    //  values
    isLoading: boolean;
    partiesList: TGetPartiesListResponse | null;
    candidatesList: TGetCandidatesListResponse | null;
    votersList: TGetVotersListResponse | null;
};
