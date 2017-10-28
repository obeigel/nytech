import { connect } from 'react-redux';
import ChipE from '../components/ChipE';
import { setFilter } from '../actions';

function mapDispatchToProps(dispatch) {
    return {
        onSetFilter: filter => dispatch(setFilter(filter))
    };
}

const ChipEContainer = connect(mapStateToProps, mapDispatchToProps)(ChipE);
export default ChipEContainer;