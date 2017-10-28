import { connect } from 'react-redux';
import Company from '../components/Company';
import { deleteCompany, editCompany, getCompanies } from '../actions';

function mapStateToProps(state) {
    return {
        companies: state.companies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getCompanies: () => dispatch(getCompanies()),
        onDelete: slug => dispatch(deleteCompany(slug)),
        onEdit: (company) => dispatch(editCompany(company))
    };
}

const CompanyContainer = connect(mapStateToProps, mapDispatchToProps)(Company);
export default CompanyContainer;