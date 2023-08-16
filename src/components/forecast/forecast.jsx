import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <>
      <label className="forecast-header">Daily Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]} </label>
                  <label className="description">
                    {item.weather[0].description}{" "}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°F /{" "}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="detail-name">Pressure</label>
                  <label className="detail-result">{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="detail-name">Humidity</label>
                  <label className="detail-result">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="detail-name">Clouds</label>
                  <label className="detail-result">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="detail-name">Wind Speed</label>
                  <label className="detail-result">{item.wind.speed} mph</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="detail-name">Sea Level</label>
                  <label className="detail-result">{item.main.sea_level}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="detail-name">Feels Like</label>
                  <label className="detail-result">{Math.round(item.main.feels_like)}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
