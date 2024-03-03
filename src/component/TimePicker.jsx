import React, { useState } from "react";

const TimePicker = (prop) => {
  const { setHour, setMinute, setPeriod, timePicker, setTimePicker } = prop;

  let hourpick = [];
  let minutepick = [];
  const [togleFormat, setTogleFormat] = useState(false);
  let timePeriod = "hour 24";

  for (let i = 1; i <= 60; i++) {
    minutepick.push(i);
  }

  let hour = 12;

  if (togleFormat) {
    hour = 24;
    timePeriod = "hour 12";
  }

  for (let i = 1; i <= hour; i++) {
    hourpick.push(i);
  }

  return (
    <div className="h-[310px] absolute z-2 bottom-[120px] flex gap-[20px] list-none bg-white text-black p-[10px] rounded-[4px] ">
      <div className="overflow-scroll">
        {" "}
        {hourpick.map((e, index) => {
          return (
            <li key={index}>
              <button onClick={() => setHour(e)}>{e}</button>
            </li>
          );
        })}
      </div>

      <div className=" overflow-scroll">
        {" "}
        {minutepick.map((e, index) => {
          return (
            <li key={index}>
              <button onClick={() => setMinute(e)}>{e}</button>
            </li>
          );
        })}
      </div>

      <div className="flex flex-col justify-between">
        <ul>
          <li>
            <button onClick={() => setPeriod("AM")}>AM</button>
          </li>
          <li>
            <button onClick={() => setPeriod("PM")}>PM</button>
          </li>
        </ul>
        <div className="flex flex-col gap-[5px] ml-[10px]">
          <button
          className="border border-brown p-[2px] rounded-[4px]"
            onClick={() => {
              return setTogleFormat(!togleFormat);
            }}
          >
            {timePeriod}
          </button>

          <button className="border border-brown p-[2px] rounded-[4px]" onClick={() => setTimePicker(!timePicker)}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default TimePicker;
