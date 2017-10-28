import { connect } from 'react-redux';

import { getCompanies, getTags, setFilter } from '../actions';
import Companies from '../components/Companies';
import { getFilteredCompanies } from '../createRoutes';

function mapStateToProps(state) {
    return {
        companies: getFilteredCompanies(state),
        tags: state.tags,
        filter: state.filter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCompanies: () => dispatch(getCompanies()),
        getTags: () => dispatch(getTags()),
        setFilter: filter => dispatch(setFilter(filter))
    };
}

const CompaniesContainer = connect(mapStateToProps, mapDispatchToProps)(Companies);

export default CompaniesContainer;