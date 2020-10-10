import { createSelector } from 'reselect';

const selectWeather = (state) => state.weather;

export const selectForecast = createSelector(
  [selectWeather],
  (weather) => weather.forecast
);

export const selectCoords = createSelector(
  [selectWeather],
  (weather) => weather.coords
);

export const selectIsForecastFetching = createSelector(
  [selectWeather],
  (weather) => weather.isForecastFetching
);

export const selectIsCoordsFetching = createSelector(
  [selectWeather],
  (weather) => weather.isCoordsFetching
);

export const selectForecastFacts = createSelector(
  [selectForecast],
  (forecast) => forecast.fact
);

export const selectForecastsArray = createSelector(
  [selectForecast],
  (forecast) => forecast.forecasts
);

export const selectForecastInfo = createSelector(
  [selectForecast],
  (forecast) => forecast.info
);