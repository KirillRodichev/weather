import React from "react";
import {
  ForecastCondition,
  ForecastDate,
  ForecastHumidity,
  ForecastImg,
  ForecastName,
  ForecastPicture,
  ForecastPressure,
  ForecastTemp,
  MinorSpan,
  Wrapper,
} from "./day.styles";
import {
  conditions,
  days,
  months,
  weekendDays,
} from "../../utils/forecast-consts";

const DayPreview = ({ dayForecast }) => {
  const { date: dateString, parts } = dayForecast;
  const date = new Date(dateString);
  const today = new Date().getDate();
  const dateNumber = date.getDate();
  const day = days[date.getDay()];
  const dateName = months[date.getMonth()];
  const { condition, humidity, icon, temp_avg, pressure_mm } = parts.day;

  return (
    <Wrapper>
      <ForecastName weekend={weekendDays.includes(date.getDay())}>
        {dateNumber === today ? "Сегодня" : day}
      </ForecastName>
      <ForecastDate>{`${dateNumber} ${dateName}`}</ForecastDate>
      <ForecastPicture>
        <ForecastImg
          src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${icon}.svg`}
          alt={icon}
        />
      </ForecastPicture>
      <ForecastTemp>
        {temp_avg}
        <span>&deg;C</span>
      </ForecastTemp>
      <ForecastPressure>
        <MinorSpan>Давление: </MinorSpan>
        {pressure_mm}
      </ForecastPressure>
      <ForecastHumidity>
        <MinorSpan>Влажность: </MinorSpan>
        {humidity}
        <span>%</span>
      </ForecastHumidity>
      <ForecastCondition>
        {conditions[condition]}
      </ForecastCondition>
    </Wrapper>
  );
};

export default DayPreview;
