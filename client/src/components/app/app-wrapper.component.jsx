import React, { useEffect } from 'react';
import { createStructuredSelector } from "reselect";
import { selectCoords } from "../../redux/selector";
import { fetchCoords, fetchForecast } from "../../redux/actions/weather";
import { connect } from "react-redux";
import AppWithSpinner from "./app-with-spinner.component";

const AppWrapper = ({ fetchForecast, fetchCoords, coords }) => {
  useEffect(() => {
    fetchCoords();
  }, [fetchCoords]);

  useEffect(() => {
    if (coords !== null) {
      fetchForecast(coords.latitude, coords.longitude);
    }
  }, [fetchForecast, coords]);

  return <AppWithSpinner />
};

const mapStateToProps = createStructuredSelector({
  coords: selectCoords,
});

const mapDispatchToProps = (dispatch) => ({
  fetchForecast: (lat, lon) => dispatch(fetchForecast(lat, lon)),
  fetchCoords: () => dispatch(fetchCoords()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);