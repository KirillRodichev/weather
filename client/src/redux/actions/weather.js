import actionTypes from './actionTypes';
import { fetchForecastData } from "../../api/metaweather.api";
import { getCoordinates } from "../../api/geolocation.api";

/*
ASYNC FETCHING COORDS
 */

export const fetchCoords = () => (dispatch) => {
  dispatch(fetchCoordsStart());
  const position = getCoordinates();

  position
    .then((data) => {
      console.log('success');
      dispatch(fetchCoordsSuccess(data.coords));
    }).catch(err => {
      dispatch(fetchCoordsFailure(err.message));
  });
};

export const fetchCoordsStart = () => ({
  type: actionTypes.FETCH_COORDS_START
});

export const fetchCoordsSuccess = (payload) => ({
  type: actionTypes.FETCH_COORDS_SUCCESS,
  payload: payload
});

export const fetchCoordsFailure = (errorMessage) => ({
  type: actionTypes.FETCH_COORDS_FAILURE,
  payload: errorMessage
});

/*
ASYNC FETCH FORECAST
 */

export const fetchForecastStart = () => ({
  type: actionTypes.FETCH_FORECAST_START
});

export const fetchForecastSuccess = (payload) => ({
  type: actionTypes.FETCH_FORECAST_SUCCESS,
  payload
});

export const fetchForecastFailure = (errorMessage) => ({
  type: actionTypes.FETCH_FORECAST_FAILURE,
  payload: errorMessage
});

export const fetchForecast = (lat, lon) => (dispatch) => {
  dispatch(fetchForecastStart());
  const jsonResp = fetchForecastData(lat, lon);

  jsonResp
    .then(resp => {
      dispatch(fetchForecastSuccess(resp.data));
    })
    .catch(err => {
      dispatch(fetchForecastFailure(err.message));
    });
};