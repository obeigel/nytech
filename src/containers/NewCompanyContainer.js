import { connect } from 'react-redux';
import { addCompany } from '../actions';
import NewCompany from '../components/NewCompany';

function mapStateToProps(state) {
    return {
        companies: state.companies
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: title => dispatch(addCompany(title))
    };
}

const NewCompanyContainer = connect(mapStateToProps, mapDispatchToProps)(NewCompany);

export default NewCompanyContainer;