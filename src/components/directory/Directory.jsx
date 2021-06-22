import React from 'react';

import MenuItem from '../menu-item/MenuItem';

import SECTIONS_DATA from './sections.data';
import './Directory.styles.scss';

export default class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA,
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className="directory-menu">
        {
          sections.map(({
            id,
            imageUrl,
            linkUrl,
            size,
            title,
          }) => (
            <MenuItem
              key={id}
              imageUrl={imageUrl}
              linkUrl={linkUrl}
              size={size}
              title={title}
            />
          ))
        }
      </div>
    );
  }
}
