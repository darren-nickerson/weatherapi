import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekdays
    .slice(dayInAWeek, weekdays.length)
    .concat(weekdays.slice(0, dayInAWeek));

  return (
    <>
      {data && (
        <div className="mt-20">
          <label className="text-xl font-bold text-gray-900"></label>

          <Accordion allowZeroExpanded className="mt-10">
            <AccordionItem>
              {data.list.splice(0, 7).map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionItemHeading className="cursor-pointer">
                    <AccordionItemButton>
                      <div className="daily-item flex bg-white mb-2 content-center text-smp py-2 px-8 rounded-xl border-2 border-gray-600 cursor-pointer">
                        <img
                          src={`icons/${item.weather[0].icon}.png`}
                          alt="weather"
                          className="h-10 w-10"
                        />
                        <label className="self-center flex-1">
                          {forecastDays[index]}
                        </label>
                        <label className="self-center flex-1">
                          {item.weather.description}
                        </label>
                        <label className="self-center text-sm text-gray-500">
                          {Math.round(item.main.temp_min)} °C /{" "}
                          {Math.round(item.main.temp_max)}°C
                        </label>
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <div className="grid grid-cols-2 gap-8 p-4 text-sm  bg-slate-200 mb-4 rounded-xl shadow-xl">
                      <div>
                        <div className="flex  justify-between py-2">
                          <label className="text-gray-600">Pressure</label>
                          <label> {item.main.pressure} hPa</label>
                        </div>

                        <div className="flex  justify-between py-2">
                          <label className="text-gray-600">Humidity</label>
                          <label>{item.main.humidity}%</label>
                        </div>

                        <div className="flex  justify-between py-2">
                          <label className="text-gray-600">Clouds</label>
                          <label> {item.clouds.all}</label>
                        </div>
                      </div>
                      <div>
                        <div className="flex  justify-between py-2">
                          <label className="text-gray-600">Wind speed:</label>
                          <label> {item.wind.speed} m/s</label>
                        </div>
                        <div className="flex  justify-between py-2">
                          <label className="text-gray-600">Sea Level:</label>
                          <label>{item.main.sea_level}m</label>
                        </div>

                        <div className="flex  justify-between py-2">
                          <label className="text-gray-600">Feels Like:</label>
                          <label>{Math.round(item.main.feels_like)}°C</label>
                        </div>
                      </div>
                    </div>
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </>
  );
}

export default Forecast;
