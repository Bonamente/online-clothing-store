/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/MenuItem';

import './Directory.styles.scss';

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

export default connect(mapStateToProps)(Directory);
