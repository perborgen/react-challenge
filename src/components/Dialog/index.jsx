import React from 'react';
import { connect } from 'react-redux';

import './Dialog.css';

const Dialog = ({ name }) => (
  <div className="dialog">
    <div className="dialog-inner">
      {name ? <span>Hello {name}!</span> : ''}
    </div>
  </div>
);

function mapStateToProps(state) {
  return ({
    name: state.presentation.name,
  });
}

export default connect(mapStateToProps)(Dialog);
