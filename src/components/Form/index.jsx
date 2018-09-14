import React from 'react';
import { connect } from 'react-redux';

import './Form.css';
import { displayName } from '../../actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showErr: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  submitName() {
    if (this.state.name.length >= 1) {
      this.setState({ showErr: false });
      this.props.displayNameHandler(this.state.name);
    } else this.setState({ showErr: true });
  }

  render() {
    return (
      <div className="form">
        <h1>Intelecy challenge!</h1>
        <input
          type="text"
          placeholder="Enter a city"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p className="error-msg">{this.state.showErr ? 'Field cannot be empty' : ''}</p>
        <button onClick={e => this.submitName()} >Trigger action</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    displayNameHandler: (name) => { dispatch(displayName(name)); },
  });
}

export default connect(null, mapDispatchToProps)(Form);
