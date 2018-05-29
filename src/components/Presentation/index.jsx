import React from 'react';
import { connect } from 'react-redux';

import './Presentation.css';
import Pineapple from '../../assets/pineapple.png';
import { displayName } from '../../actions';

class Presentation extends React.Component {
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
      <div className="presentation">
        <img src={Pineapple} alt="Pineapple icon" className="pineapple" />
        <h1>React-Redux Boilerplate</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p className="error-msg">{this.state.showErr ? 'Field cannot be empty' : ''}</p>
        <button onClick={e => this.submitName()} >Trigger action</button>
        <p>
          Issues:{' '}
          <a href="https://github.com/guidovizoso/react-boilerplate/issues">
            https://github.com/guidovizoso/react-boilerplate/issues
          </a>
        </p>
        <p>
          Guido Vizoso {'<'}
          <a href="https://www.linkedin.com/in/guidovizoso/">
            https://www.linkedin.com/in/guidovizoso/
          </a>
          {'>'}
        </p>
        <div className="credits">
          <p>
            Image: Cocktail by <a href="https://thenounproject.com/olgamur_2015/" rel="noopener noreferrer" target="_blank">Olga</a> from the Noun Project
          </p>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    displayNameHandler: (name) => { dispatch(displayName(name)); },
  });
}

export default connect(null, mapDispatchToProps)(Presentation);
