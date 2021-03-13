import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header'
import CarouselComponent from '../Carousel/Carousel'


const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CarouselComponent />
      { children }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;