import React from 'react';
import { Component } from 'react';
import SideBar from '../containers/sidebar';
import Header from './header';
import YouTube from 'youtube-api-search';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SideBar/>
      	<Header/>
        {this.props.children}
      </div>
    );
  }
}
