import React, { Component } from 'react';
import './App.css';
import Post from './components/post/post';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
