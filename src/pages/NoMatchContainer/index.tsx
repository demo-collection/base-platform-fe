import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoMatchContainer extends Component {
  render() {
    return (
      <div>
        <h1>no page find</h1>
        <button>goBack</button>
      </div>
    );
  }
}

export default connect()(NoMatchContainer);
