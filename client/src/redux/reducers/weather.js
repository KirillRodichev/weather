import actionTypes from '../actions/actionTypes';

const INIT_STATE = {
  coords: null,
  forecast: null,
  isForecastFetching: false,
  isCoordsFetching: false,
  errorMessage: undefined,
};

const weatherReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COORDS_START:
      return {
        ...state,
        isCoordsFetching: true
      };
    case actionTypes.FETCH_COORDS_SUCCESS:
      return {
        ...state,
        isCoordsFetching: false,
        coords: action.payload
      };
    case actionTypes.FETCH_COORDS_FAILURE:
      return {
        ...state,
        isCoordsFetching: false,
        errorMessage: action.payload
      };
    case actionTypes.FETCH_FORECAST_START:
      return {
        ...state,
        isForecastFetching: true
      };
    case actionTypes.FETCH_FORECAST_SUCCESS:
      return {
        ...state,
        isForecastFetching: false,
        forecast: action.payload
      };
    case actionTypes.FETCH_FORECAST_FAILURE:
      return {
        ...state,
        isForecastFetching: false,
        errorMessage: action.payload
      };
    default: return state;
  }
};

export default weatherReducer;