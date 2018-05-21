import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import Navbar from './navbar';
import PriceChart from '../containers/price_chart';

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <SearchBar/>
          <PriceChart />
      </div>
    );
  }
}
