import React, { useState, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const [throttledValue, setThrottledValue] = useState("");

  // saving base time as reference
  const lastThrottleCallAt = useRef(0);

  const handleChange = (e) => {
    // current time in ms
    const now = Date.now();

    // if current time - last throttle call time > 1000ms

    if (now - lastThrottleCallAt.current > 1000) {
      setThrottledValue(e.target.value);

      // saving last throttle call time
      lastThrottleCallAt.current = now;
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center my-10">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border-2 border-black w-fit"
      />
      <div className="bg-gray-300 my-10 p-5">
        <p className="mb-4">
          <strong>Original Value:</strong> {value}
        </p>
        <p>
          <strong>Throtteled Value: </strong>
          {throttledValue}
        </p>
      </div>
    </div>
  );
};

export default App;
