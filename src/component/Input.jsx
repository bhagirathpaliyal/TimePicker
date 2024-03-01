import React, { useState } from "react";
import TimePicker from "./TimePicker";



const Input = (prop) => {
  const [timePicker, setTimePicker] = useState(false);

  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [period, setPeriod] = useState("AM");

  let temp = [hour + " : " + minute + " " + period];

 

  return (
    <div>
      {timePicker ? (
        <TimePicker
          setHour={setHour}
          setMinute={setMinute}
          setPeriod={setPeriod}
          setTimePicker={setTimePicker}
          timePicker={timePicker}
        />
      ) : (
        ""
      )}
      <input
        className="text-black"
        type="text"
        placeholder="Pick Time"
        value={temp}
        readOnly
        onClick={() => setTimePicker(!timePicker)}
      />
    </div>
  );
};

export default Input;
