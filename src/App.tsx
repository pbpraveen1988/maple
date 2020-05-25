import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { actionTypes, selectors } from './features'
import { useSelector, useDispatch } from 'react-redux'
import { WebApi, Url } from './utils';
import { Navbar } from './components/Navbar'
import { Service } from './components/services';
import { ProvidersList, ProviderDetails } from './components/providers';
const App: React.SFC = () => {


  const dispatch = useDispatch();
  useEffect(() => {
    WebApi.send(Url.generateServiceUrl(), 'GET').then((response: any) => {
      dispatch({ type: actionTypes.SET_SERVICES, payload: response.data })
    }).catch(err => {
    });
    WebApi.send(Url.generateProviderUrl(), 'GET').then((response: any) => {
      dispatch({ type: actionTypes.SET_PROVIDERS, payload: response.data })
    }).catch(err => {
    });
  }, [])


  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Service} exact />
          <Route path="/providers/:serviceId" component={ProvidersList} />
          <Route path="/provider-details/:providerId" component={ProviderDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
