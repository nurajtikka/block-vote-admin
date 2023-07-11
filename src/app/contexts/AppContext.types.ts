import { TGetEligibilityResponse, TPostVotesResponse } from '../api/votes/votes.types';

export type TAppContext = {
    //  values
    selectedParty: string;
    isLoading: boolean;
    votes: TPostVotesResponse | null;
    eligible: TGetEligibilityResponse | null;
    nic: string;
    party: string;
    //  functions
    setNic: (value: string) => void;
    setParty: (value: string) => void;
    setSelectedParty: (value: string) => void;
    setVotes: (value: TPostVotesResponse) => void;
    setEligible: (value: TGetEligibilityResponse) => void;
};
