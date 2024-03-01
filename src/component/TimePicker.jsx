import React, { useState } from "react";

const TimePicker = (prop) => {
  const { setHour, setMinute, setPeriod, timePicker, setTimePicker } = prop;

  let hourpick = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let minutepick = [];

  for (let i = 1; i <= 60; i++) {
    minutepick.push(i);
  }
  return (
    <div className="h-[310px] absolute z-2 bottom-[150px] flex gap-[20px] list-none bg-white text-black p-[10px] rounded-[4px] ">
      <div>
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

        <button className="pl-[5px]" onClick={() => setTimePicker(!timePicker)}>
          Done
        </button>
      </div>

     
      
    
    </div>
  );
};

export default TimePicker;
