import { SystemState } from './types'

export const getServiceList = (state: SystemState) => {
    console.log(state);
    return state.data.services;
};
export const getProviderList = (state: SystemState) => state.data.providers;
