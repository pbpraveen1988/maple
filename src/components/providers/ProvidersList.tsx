import * as React from 'react';
import { selectors } from '../../features'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { ServiceList } from '../services';

export type ProviderList = {
    id: string,
    type: string;
    links: { self: string };
    attributes: {
        hours: string;
        name: string;
        service: string;
        [key: string]: any
    }
    relationships: {
        location: string;
        provider: string;
        service: string;
        [key: string]: any;
    }
}

export const ProvidersList: React.SFC = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const serviceList = useSelector(selectors.getServiceList) as ServiceList[];
    const providerList = useSelector(selectors.getProviderList) as ProviderList[];
    let serviceProviders: ProviderList[] = [];
    if (serviceId) {
        const selectedService: ServiceList = serviceList && serviceList.find(x => x.id === serviceId) as ServiceList;
        console.log('selectedService', selectedService);
        if (selectedService !== undefined && selectedService.attributes !== undefined) {
            serviceProviders = providerList.filter(x => x.attributes.service === selectedService && selectedService.attributes && selectedService.attributes.name);
            console.log('providderlist', serviceProviders);
            return (
                <>
                    <h3> {selectedService.attributes.name} Providers </h3>

                    <table>
                        <thead>
                            <tr>
                                <td>
                                    Id
                                </td>
                                <td>
                                    Name
                                    </td>
                            </tr>
                            {serviceProviders && serviceProviders.map((x: ProviderList, index: number) => {
                                return (
                                    <tr onClick={() => {
                                        // Will navigate to Provider details component
                                    }} key={index}>
                                        <td>{x.id}</td>
                                        <td>{x.attributes ? x.attributes.name : x.type}</td>
                                    </tr>
                                )
                            })}
                        </thead>
                    </table>
                </>
            )
        }

    }

    return (
        <>
            List of All Providers
         {
                <table>
                    <thead>
                        <tr>
                            <td>
                                Id
                      </td>
                            <td>
                                Name
                          </td>
                        </tr>
                        {serviceProviders && serviceProviders.map((x: ProviderList, index: number) => {
                            return (
                                <tr onClick={() => {

                                }} key={index}>
                                    <td>{x.id}</td>
                                    <td>{x.attributes ? x.attributes.name : x.type}</td>
                                </tr>
                            )
                        })}
                    </thead>
                </table>
            }
        </>
    );
}