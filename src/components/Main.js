require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {
  Gateway,
  GatewayDest,
  GatewayProvider
} from 'react-gateway';
import ReactModal2 from 'react-modal2';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModal: false};
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
      <GatewayProvider>
        <div class="app" onKeyDown={this.handleKeyDown}>
          <div class="app-content">
            <h1>My Application</h1>
            <p>Click on the input element, then press Escape.</p>
            <input type="text" autoFocus/>
            <button onClick={() => this.setState({showModal: true})}>Show modal</button>
            <Gateway into="modal">
              {this.state.showModal &&
                <ReactModal2 backdropClassName="modal-backdrop" modalClassName="modal" onClose={() => this.setState({showModal: false})}>
                  <p>Modal demo</p>

                  <button onClick={() => this.setState({showModal: false})}>Close</button>
                </ReactModal2>
              }
            </Gateway>
          </div>
          <GatewayDest name="modal" className="modal-container"/>
        </div>
      </GatewayProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
