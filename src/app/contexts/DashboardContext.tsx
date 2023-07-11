/* eslint-disable no-underscore-dangle */
import { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';

import { message } from 'antd';
import { dashboardSVC } from '../api';
import { TDashboardContext } from './DashboardContext.types';
import {
    TGetPartyVotesResponse,
    TGetVotesUtilizedResponse,
    TGetVotesListResponse,
    TPostResultsByDistrictResponse,
} from '../api/dashboard/dashboard.types';

const INITIAL_DATA = {
    //  values
    isLoading: true,
    selectedDistrict: 'colombo',
    partyVotesList: null,
    utilizedVotes: null,
    votesList: null,
    districtWiseVotes: null,
    // functions
    setSelectedDistrict: () => undefined,
};

const DashboardContext = createContext<TDashboardContext>(INITIAL_DATA);
type TProvideDashboardContext = { children: JSX.Element };

export const ProvideDashboardContext = ({ children }: TProvideDashboardContext): JSX.Element => {
    //  api states
    const [isLoading, setIsLoading] = useState<boolean>(INITIAL_DATA.isLoading);
    const [selectedDistrict, setSelectedDistrict] = useState<string>(INITIAL_DATA.selectedDistrict);
    const [partyVotesList, setPartyVotesList] = useState<TGetPartyVotesResponse | null>(INITIAL_DATA.partyVotesList);
    const [utilizedVotes, setUtilizedVotes] = useState<TGetVotesUtilizedResponse | null>(INITIAL_DATA.utilizedVotes);
    const [votesList, setVotesList] = useState<TGetVotesListResponse | null>(INITIAL_DATA.votesList);
    const [districtWiseVotes, setDistrictWiseVotes] = useState<TPostResultsByDistrictResponse | null>(
        INITIAL_DATA.votesList,
    );

    // get party wise votes count
    const getPartyVotesList = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            const { data } = await dashboardSVC().getPartyVotesList();
            if (data.counts.length > 0) {
                setPartyVotesList(data);
            } else {
                setPartyVotesList(null);
                message.error('no votes related to party is available at this moment, please try again in a while');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setPartyVotesList(null);
            message.error('no votes related to party is available at this moment, please try again in a while');
        }
    }, []);

    // get utilized votes list
    const getVotesUtilizedList = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            const { data } = await dashboardSVC().getVotesUtilizedList();
            if (data.votes.length > 0) {
                setUtilizedVotes(data);
            } else {
                setUtilizedVotes(null);
                message.error('no votes data is available at this moment, please try again in a while');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setUtilizedVotes(null);
            message.error('no votes data is available at this moment, please try again in a while');
        }
    }, []);

    // get votes list
    const getVotesList = useCallback(async (): Promise<void> => {
        setIsLoading(true);
        try {
            const { data } = await dashboardSVC().getVotesList();
            if (data.votes.length > 0) {
                setVotesList(data);
            } else {
                setVotesList(null);
                message.error('no votes list is available at this moment, please try again in a while');
            }
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setVotesList(null);
            message.error('no votes list is available at this moment, please try again in a while');
        }
    }, []);

    // post district wise vote counts
    const postResultsByDistrict = useCallback(async (payload: { district: string }): Promise<void> => {
        setIsLoading(true);
        if (payload.district) {
            try {
                const { data } = await dashboardSVC().postResultsByDistrict(payload);
                if (data.counts.length > 0) {
                    setDistrictWiseVotes(data);
                } else {
                    setDistrictWiseVotes(null);
                    message.error('no votes list is available at this moment, please try again in a while');
                }
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setDistrictWiseVotes(null);
                message.error(`no votes are available in ${payload.district} district at this moment, please try again in a while`);
            }
        } else {
            setDistrictWiseVotes(null);
            message.error('district parameter is missing, please try again later');
            setIsLoading(false);
        }
    }, []);

    // api triggers
    useEffect(() => {
        if (!partyVotesList) {
            getPartyVotesList();
        }
    }, [partyVotesList, getPartyVotesList]);

    useEffect(() => {
        if (!utilizedVotes) {
            getVotesUtilizedList();
        }
    }, [utilizedVotes]);

    useEffect(() => {
        if (!votesList) {
            getVotesList();
        }
    }, [votesList, getVotesList]);

    useEffect(() => {
        if (selectedDistrict) {
            postResultsByDistrict({ district: selectedDistrict });
        }
    }, [selectedDistrict, postResultsByDistrict]);

    //  context provider parameters
    const ctx = useMemo<TDashboardContext>(
        () => ({
            //  values
            isLoading,
            selectedDistrict,
            partyVotesList,
            utilizedVotes,
            votesList,
            districtWiseVotes,
            // functions
            setSelectedDistrict,
        }),
        [isLoading, selectedDistrict, partyVotesList, utilizedVotes, votesList, districtWiseVotes, selectedDistrict],
    );
    return <DashboardContext.Provider value={ctx}>{children}</DashboardContext.Provider>;
};

const useDashboardContext = (): TDashboardContext => useContext(DashboardContext);

export default useDashboardContext;
