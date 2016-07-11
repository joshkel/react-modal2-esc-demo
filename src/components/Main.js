require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === 'Escape') {
      alert('You pressed Escape.');
      e.stopPropagation();
    }
  }

  render() {
    return (
      <div className="index" onKeyDown={this.handleKeyDown}>
        <p>Click on the input element, then press Escape.</p>
        <input type="text" autoFocus/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
