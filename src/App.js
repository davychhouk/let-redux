import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import Post from './components/post/post';
class App extends Component {
  render() {
    library.add(faStroopwafel);
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
