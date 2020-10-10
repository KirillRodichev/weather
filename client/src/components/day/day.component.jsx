import React from "react";
import {
  ConditionContainer,
  DayCondition,
  DayForecast, DayForecastContainer,
  DayIcon,
  DayIconContainer,
  DayPressure,
  DayTemp,
  DayWind,
  Degrees,
  LowOpacitySpan,
  MainForecast,
  MinorForecast,
  SoilTemp,
  TempFeelsLike,
} from "./day.styles";
import autumn from "../../assets/img/autumn.jpg";
import { conditions, windDirections } from "../../utils/forecast-consts";
import { FaWind } from "react-icons/fa";
import { RiCompass2Line } from "react-icons/ri";
import { BiLandscape } from "react-icons/bi";

const Day = ({ dayForecast }) => {
  const {
    condition,
    feels_like,
    icon,
    pressure_mm,
    temp,
    soil_temp,
    wind_dir,
    wind_speed,
  } = dayForecast;

  return (
    <DayForecastContainer>
      <DayForecast imgSrc={autumn}>
        <MainForecast>
          <DayTemp>
            {temp}
            <Degrees>&deg;C</Degrees>
          </DayTemp>
          <DayIconContainer>
            <DayIcon
              src={`https://yastatic.net/weather/i/icons/blueye/color/svg/${icon}.svg`}
              alt={icon}
            />
          </DayIconContainer>
          <ConditionContainer>
            <DayCondition>{conditions[condition]}</DayCondition>
            <TempFeelsLike>
              <LowOpacitySpan>Ощущается как</LowOpacitySpan>
              <span>&nbsp;{feels_like}&deg;C</span>
            </TempFeelsLike>
          </ConditionContainer>
        </MainForecast>
        <MinorForecast>
          <DayWind>
            <FaWind />
            <span>
              {wind_speed}м/с, {windDirections[wind_dir]}
            </span>
          </DayWind>
          <DayPressure>
            <RiCompass2Line />
            <span>{pressure_mm}мм.рт.ст</span>
          </DayPressure>
          <SoilTemp>
            <BiLandscape />
            <span>{soil_temp}&deg;C</span>
          </SoilTemp>
        </MinorForecast>
      </DayForecast>
    </DayForecastContainer>
  );
};

export default Day;
