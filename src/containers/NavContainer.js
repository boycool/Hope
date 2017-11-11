import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Nav from '../components/Nav';

import {navigateToLoginScreen,navigationPush} from '../actions/NavigationAction'

const mapStateToProps = (state) => ({
  nav: state.nav
});

const mapDispatchToProps = dispatch => bindActionCreators({
  push : navigationPush,
  login : navigateToLoginScreen
  },dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(Nav);

