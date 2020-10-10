import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  width: 110px;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.12),
      0 0 1px 1px rgba(0, 0, 0, 0.08);
  }
`;

export const ForecastName = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.weekend ? "#f66049" : "#000")};
`;

export const ForecastDate = styled.div`
  color: #696969;
`;

export const ForecastPicture = styled.div``;

export const ForecastTemp = styled.div``;

export const ForecastPressure = styled.div`
  line-height: 22px;
  font-size: 14px;
`;

export const ForecastCondition = styled.div`
  padding-top: 10px;
  line-height: 18px;
  font-size: 14px;
`;

export const ForecastHumidity = styled.div`
  line-height: 22px;
  font-size: 14px;
`;

export const MinorSpan = styled.span`
  color: #696969;
`;

export const ForecastImg = styled.img`
  width: 50px;
  padding: 7px;
`;

export const DayForecastContainer = styled.div`
  margin: 0 20px;
`;

export const DayForecast = styled.div`
  margin: 40px auto;
  border-radius: 20px;
  max-width: 1020px;
  height: 300px;
  background-image: url("${(props) => (props.imgSrc)}");
  color: #fff;
`;

export const MainForecast = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 450px;
  padding: 40px 40px 0;
  
  @media (max-width: 505px) {
    padding-top: 20px;
    padding-left: 20px;
    justify-content: flex-start;
  }
`;

export const DayTemp = styled.div`
  font-size: 80px;
  font-weight: 500;
  position: relative;
  margin-right: 40px;

`;

export const Degrees = styled.span`
  position: absolute;
  top: 13px;
  font-weight: 400;
  font-size: 30px;
`;

export const ConditionContainer = styled.div`
  margin-left: 10px;
  font-size: 18px;
  line-height: 18px;
`;

export const TempFeelsLike = styled.div`
  display: flex;
`;

export const LowOpacitySpan = styled.div`
  opacity: 0.8;
`;

export const DayIconContainer = styled.div``;

export const DayIcon = styled.img`
  width: 80px;
`;

export const DayCondition = styled.div`
  margin-bottom: 10px;
`;

export const MinorForecast = styled.ul`
  list-style: none;
  font-size: 18px;
  padding-left: 40px;
  padding-top: 20px;
  margin: 0;
  
  @media (max-width: 505px) {
    font-size: 16px;
    padding-left: 20px;
    padding-top: 15px;
  }
  
  li {
    line-height: 35px;
    
    @media (max-width: 505px) {
      line-height: 30px;
    }
    
    svg {
      padding-right: 15px;
    }
  }
`;

export const DayWind = styled.li``;

export const DayPressure = styled.li``;

export const SoilTemp = styled.li``;