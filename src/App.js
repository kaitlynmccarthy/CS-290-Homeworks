import React, { Component } from 'react';
import HeadBar from './components/headbar';
import './App.css';
import Item from './components/item';
import ItemList from './components/itemList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HeadBar/>
        <main className="container">
          {/* this is where collection of movies will go */}
          <Item/>
        </main>
      </React.Fragment>

    );
  }
}

export default App;
