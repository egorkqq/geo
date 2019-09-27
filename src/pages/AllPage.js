import React from 'react';
import { Fade } from 'react-reveal';
import All from '../All/All';
import { darkTheme } from '../misc/theme';

const AllPage = ({ currentTheme }) => {
  return (
    <Fade>
      <All dark={currentTheme === darkTheme} />
    </Fade>
  );
};

export default AllPage;
