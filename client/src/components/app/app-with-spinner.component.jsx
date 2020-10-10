import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCoordsFetching, selectIsForecastFetching } from "../../redux/selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import AppComponent from "./app.component";

const mapStateToProps = createStructuredSelector({
  isFetchingCoords: selectIsCoordsFetching,
  isForecastFetching: selectIsForecastFetching,
});

const AppWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(AppComponent);

export default AppWithSpinner;