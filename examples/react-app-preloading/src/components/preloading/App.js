import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const LoadableBar = Loadable({
  loader: () => import('./Bar'),
  loading: Loading,
});

class App extends React.Component {
  state = { showBar: false };

  onClick = () => {
    this.setState({ showBar: true });
  };

  onMouseOver = () => {
    LoadableBar.preload();
  };

  render() {
    return (
      <div style={{margin: 50}}>
        <p>Hover to Button, we'll load source before you Click to show Bar</p>
        <button style={{fontSize: 20}}
          onClick={this.onClick}
          onMouseOver={this.onMouseOver}>
          Show Bar
        </button>
        {this.state.showBar && <LoadableBar/>}
      </div>
    )
  }
}

export default App;
