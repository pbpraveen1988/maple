import * as React from 'react';
import { useState, useEffect } from 'react';
import { actionTypes, selectors } from '../../features'
import { useSelector, useDispatch } from 'react-redux'
import { WebApi, Url } from '../../utils';
import { useHistory } from 'react-router-dom';


export type ServiceList = {
    id?: string;
    type?: string;
    attributes?: { name: string };
    links?: Object;
}


export const Service: React.FC = () => {


    let history = useHistory();



    let list: ServiceList[] = [];
    const _list = useSelector(selectors.getServiceList);
    list = list.concat(_list);
    return (
        <div >
            <h3>List of Controls</h3>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                    </tr>
                </thead>
                <tbody>
                    {list && list.map((x: ServiceList, index: number) => {
                        return (
                            <tr onClick={() => {
                                history.push(`/providers/${x.id}`);
                            }} key={index}>
                                <td>{x.id}</td>
                                <td>{x.attributes ? x.attributes.name : x.type}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    );
}



