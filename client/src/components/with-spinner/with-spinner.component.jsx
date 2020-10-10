import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => ({
  isForecastFetching,
  isCoordsFetching,
  ...otherProps
}) =>
  isForecastFetching || isCoordsFetching ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );

export default WithSpinner;
