import React from 'react';
import Page from './page';

import RecentTorrents from './recent-torrents'
import Search from './search'

export default class IndexPage extends Page {
  constructor(props) {
    super(props)
    this.setTitle('Rats On The Boat - Content Search Engine');
  }
  render() {
    return (
      <div id='index-window'>
        <Search />
      	<div className='column center w100p pad0-75'>
        	<RecentTorrents />
        </div>
      </div>
    );
  }
}
