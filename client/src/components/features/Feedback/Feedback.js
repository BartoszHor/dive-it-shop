import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadFeedback } from '../../../redux/feedbackRedux'
//import PropTypes from 'prop-types';
//import styles from './Feedback.module.scss';

const Feedback = () => {
    const dispatch = useDispatch();
    const feedback = useSelector(state => state.feedback.data)
    
    useEffect(() => {
        dispatch(loadFeedback())
    }, [dispatch])

  return (    
    <div>
        {feedback?.map((item, i) => {
            return (
                <div key={i}>{item.content}</div>
            )
        })}
    </div>
  );
};

// Feedback.propTypes = {
// };

export default Feedback;