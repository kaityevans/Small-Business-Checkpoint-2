import { connect } from 'react-redux'
import AdminListing from '../components/AdminListing'
// import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        // user: state.user,
        // cars: state.cars
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        // removeListing: (index) => dispatch(removeListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminListing)