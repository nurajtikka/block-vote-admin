import {
    TGetPartyVotesResponse,
    TGetVotesUtilizedResponse,
    TGetVotesListResponse,
    TPostResultsByDistrictResponse,
} from '../api/dashboard/dashboard.types';

export type TDashboardContext = {
    //  values
    isLoading: boolean;
    selectedDistrict: string;
    partyVotesList: TGetPartyVotesResponse | null;
    utilizedVotes: TGetVotesUtilizedResponse | null;
    votesList: TGetVotesListResponse | null;
    districtWiseVotes: TPostResultsByDistrictResponse | null;
    // functions
    setSelectedDistrict: (value: string) => void;
};
