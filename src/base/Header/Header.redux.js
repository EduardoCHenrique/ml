import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import Header from './Header'

export default connect()(withRouter(Header))