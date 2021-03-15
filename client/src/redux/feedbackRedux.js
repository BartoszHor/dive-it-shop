import axios from 'axios';
const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';

/* SELECTORS */
export const getfeedback = ({ feedback }) => feedback.data

/* ACTIONS */

// action name creator
const reducerName = 'feedbacks';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });

/* THUNKS */
export const loadFeedback = () => {
  return async dispatch => {
    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/feedbacks`);
      dispatch(endRequest(res.data));
    } catch(e) {
      dispatch(errorRequest({ error: e.message }));
    }
  };
};

/* INITIAL STATE */

/* REDUCER */

export const reducer = (statePart = {}, action = {}) => {
  switch (action.type) {
    case START_REQUEST: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case END_REQUEST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case ERROR_REQUEST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
