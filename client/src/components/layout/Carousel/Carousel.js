import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';
import Carousel from 'react-bootstrap/Carousel'
import ReactTypingEffect from 'react-typing-effect';


const CarouselComponent = () => {
  return (    
    <Carousel>
    <Carousel.Item interval={10000} className={styles.item}>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/920163/pexels-photo-920163.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="First slide"
      />
      <Carousel.Caption>
      <ReactTypingEffect
        text={["Dream."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: {}} : {color: '#8EFFFF'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={10000} className={styles.item}>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/1086584/pexels-photo-1086584.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Second slide"
      />
      <Carousel.Caption>
      <ReactTypingEffect
        text={["Admire."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: {}} : {color: '#8EFFFF'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={10000} className={styles.item}>
      <img
        className="d-block w-100"
        src="https://images.pexels.com/photos/396947/pexels-photo-396947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Third slide"
      />
      <Carousel.Caption>
      <ReactTypingEffect
        text={["DiveIT."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: {}} : {color: '#8EFFFF'}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

// CarouselComponent.propTypes = {
// };

export default CarouselComponent;