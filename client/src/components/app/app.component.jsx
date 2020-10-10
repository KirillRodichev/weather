import React from "react";
import { createStructuredSelector } from "reselect";
import { selectForecast } from "../../redux/selector";
import { connect } from "react-redux";
import DayPreview from "../day/day-preview.component";
import DaysPreviewSlider from "../slider/slider.compomemt";
import { ForecastPreviews, PreviewsContainer, Section } from "./app.styles";
import Day from "../day/day.component";
import Header from "../header/header.component";

const AppComponent = ({ forecast }) => {
  return (
    <>
      {forecast !== null &&
      <Section>
        <Header />
        <Day dayForecast={forecast.fact} />
        <PreviewsContainer>
          <ForecastPreviews>
            <DaysPreviewSlider>
              {forecast.forecasts
                .map((dayForecast, ind) => (
                  <DayPreview key={ind} dayForecast={dayForecast} />
                ))}
            </DaysPreviewSlider>
          </ForecastPreviews>
        </PreviewsContainer>
      </Section>}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  forecast: selectForecast,
});

export default connect(mapStateToProps, null)(AppComponent);
