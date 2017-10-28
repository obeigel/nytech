import { connect } from 'react-redux';
import Home from '../components/Home';
import { getTags } from '../actions';

function mapStateToProps(state) {
    return {
        tags: state.tags
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTags: () => dispatch(getTags())
    };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;