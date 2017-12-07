// Core
import React from 'react';
import PropTypes from 'prop-types';

// Instruments
import './CoreLayout.scss';

// App
const CoreLayout = (props) => {
  return (
    <div className='app'>
      <main className='container'>
        {props.children}
      </main>
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.array.isRequired
};

export default CoreLayout;
