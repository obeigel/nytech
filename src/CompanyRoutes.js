import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CompaniesContainer from './containers/CompaniesContainer';
import CompanyContainer from './containers/CompanyContainer';

const CompanyRoutes = () => (
  <Switch>
    <Route exact path='/companies' component={CompaniesContainer}/>
    <Route path='/companies/:slug' component={CompanyContainer}/>
  </Switch>
)

export default CompanyRoutes;