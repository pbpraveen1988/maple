import { GET_PROVIDERS, GET_SERVICES, SET_PROVIDERS, SET_SERVICES } from './actionTypes'

interface GETSERVICEACTION {
  type: typeof GET_SERVICES
}
interface GETPROVIDERACTIONS {
  type: typeof GET_PROVIDERS
}
interface SETPROVIDERACTIONS {
  type: typeof SET_PROVIDERS,
  payload: any;
}
interface SETSERVICEACTIONS {
  type: typeof SET_SERVICES,
  payload: any;
}
export type ActionTypes = GETSERVICEACTION | GETPROVIDERACTIONS | SETSERVICEACTIONS | SETPROVIDERACTIONS

export interface SystemState {
  data: {
    services: Object[],
    providers: Object[]
  }
}
