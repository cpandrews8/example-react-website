import React from 'react';
import { Component } from 'react';
import SideBar from '../containers/sidebar'
import YouTube from 'youtube-api-search';

export default class App extends Component {
  render() {
    return (
      <div>
      	<SideBar/>
        {this.props.children}
      </div>
    );
  }
}
