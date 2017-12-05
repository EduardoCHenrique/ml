import { connect } from 'react-redux'
import SearchState from './Search.state'

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(SearchState)