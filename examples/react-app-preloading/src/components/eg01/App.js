import React, { Component, Fragment } from 'react';
import Loadable from 'react-loadable';

function Loading({ pastDelay }) {
  return pastDelay ? <h3>Loading...</h3> : null;
}

const SomeComponent = Loadable({
  loader: () => import('./SomeComponent'),
  loading: Loading,
  delay: 60
});

class App extends Component {
  state = {
    showComponent: false
  };

  handleClick = () => {
    this.setState({
      showComponent: true
    });
  };

  render() {
    if (this.state.showComponent) {
      return <SomeComponent />;
    } else {
      return (
        <Fragment>
          <h1>Hello!</h1>
          <button onClick={this.handleClick}>Click me!</button>
        </Fragment>
      );
    }
  }
}

export default App;
