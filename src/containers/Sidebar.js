import { connect } from 'react-redux';

import Sidebar from '../components/Sidebar';

function mapStateToProps(state) {
  return {
    departments: state.departments.list
  };
}

const SidebarContainer = connect(
  mapStateToProps
)(Sidebar);

export default SidebarContainer;
