/* eslint-disable no-underscore-dangle */
import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

import { message } from 'antd';
import { campaignDataSVC } from '../api';
import { TCampaignDataContext } from './CampaignDataContext.types';
import {
    TGetCandidatesListResponse,
    TGetPartiesListResponse,
    TGetVotersListResponse,
} from '../api/campaignData/campaignData.types';

const INITIAL_DATA = {
    //  values
    isLoading: true,
    partiesList: null,
    candidatesList: null,
    votersList: null,
};

const CampaignDataContext = createContext<TCampaignDataContext>(INITIAL_DATA);
type TProvideCampaignDataContext = { children: JSX.Element };

export const ProvideCampaignDataContext = ({ children }: TProvideCampaignDataContext): JSX.Element => {
    //  api states
    const [isLoading, setIsLoading] = useState<boolean>(INITIAL_DATA.isLoading);
    const [partiesList, setPartiesList] = useState<TGetPartiesListResponse | null>(INITIAL_DATA.partiesList);
    const [candidatesList, setCandidatesList] = useState<TGetCandidatesListResponse | null>(INITIAL_DATA.candidatesList);
    const [votersList, setVotersList] = useState<TGetVotersListResponse | null>(INITIAL_DATA.votersList);

    // get party details
    const getPartiesList = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            const { data } = await campaignDataSVC().getPartiesList();
            if (data.parties.length > 0) {
                setPartiesList(data);
            } else {
                setPartiesList(null);
                message.error('no party details are available at this moment, please try again in a while');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            message.error('no party details are available at this moment, please try again in a while');
        }
    }, []);

    // get candidates details
    const getCandidatesList = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            const { data } = await campaignDataSVC().getCandidatesList();
            if (data.candidates.length > 0) {
                setCandidatesList(data);
            } else {
                setCandidatesList(null);
                message.error('no candidate details are available at this moment, please try again in a while');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            message.error('no candidate candidate are available at this moment, please try again in a while');
        }
    }, []);

    // get voters details
    const getVotersList = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            const { data } = await campaignDataSVC().getVotersList();
            if (data.voters.length > 0) {
                setVotersList(data);
            } else {
                setVotersList(null);
                message.error('no voter details are available at this moment, please try again in a while');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            message.error('no voter candidate are available at this moment, please try again in a while');
        }
    }, []);

    // api triggers
    useEffect(() => {
        getPartiesList();
    }, [partiesList]);

    useEffect(() => {
        getCandidatesList();
    }, [candidatesList]);

    useEffect(() => {
        getVotersList();
    }, [votersList]);

    //  context provider parameters
    const ctx = useMemo<TCampaignDataContext>(
        () => ({
            //  values
            isLoading,
            partiesList,
            candidatesList,
            votersList,
        }),
        [isLoading, partiesList, candidatesList, votersList],
    );
    return <CampaignDataContext.Provider value={ctx}>{children}</CampaignDataContext.Provider>;
};

const useCampaignDataContext = (): TCampaignDataContext => useContext(CampaignDataContext);

export default useCampaignDataContext;
