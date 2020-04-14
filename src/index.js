import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function handleClick(){
      this.state.mood === 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={console.log('bepis')} />
  </div>,
  document.getElementById('root')
);
