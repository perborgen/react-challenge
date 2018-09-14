import React from 'react';
import { connect } from 'react-redux';

import './Graph.css';

const Graph = ({ name }) => (
  <div className="graph">
    <div>
      {name ? <span>Graph over {name} weather!</span> : ''}
    </div>
  </div>
);

function mapStateToProps(state) {
  return ({
    name: state.form.name,
  });
}

export default connect(mapStateToProps)(Graph);
