import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header'
import CarouselComponent from '../Carousel/Carousel'
import Feedback from '../../features/Feedback/Feedback'


const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Feedback />
      <CarouselComponent />
      { children }
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;