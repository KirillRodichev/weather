//import * as metaweather from 'metaweather';
import axios from 'axios';

export const fetchForecastData = async (lat, lon) => {

  const response = await axios({
    url: "forecast",
    method: "post",
    data: { lat, lon },
  });

  console.log(response);

  /*metaweather.search().latLon({ lat, lon }).then(data =>
    console.log(data.body)
  );*/
  /*const locationResponse = await fetch(
    `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lon}`, {
      mode: 'no-cors'
    });
  console.log(locationResponse);
  console.log(locationResponse.woeid);
  const locationJSON = await locationResponse.json();
  console.log(locationJSON);

  const weatherResponse = await fetch(`https://www.metaweather.com/api/location/${locationJSON.woeid}/`);
  const weatherJSON = await weatherResponse.json();
  console.log(weatherJSON);

  return weatherJSON;*/

  return response;
};