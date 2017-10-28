import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CoreLayout from './coreLayout';
import HomeContainer from './containers/HomeContainer';
import NewCompanyContainer from './containers/NewCompanyContainer';
import CompanyRoutes from './CompanyRoutes';

const createRoutes = store => {
    return (
        <CoreLayout>
            <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path='/companies' component={CompanyRoutes}/>
            <Route exact path='/newcompany' component={NewCompanyContainer}/>
            </Switch>
        </CoreLayout>
    );
};

export function getFilteredCompanies(state) {
    if ( state.filter === 'ALL') {
        return state.companies;
    }
    else {
        return state.companies.filter(company => company.tags.includes(state.filter));
    }
}

export default createRoutes;