import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer); 
    }
  }, [time]);

  return (
    <div>
      <h1>Countdown: {time}</h1>
      {time === 0 && <h2>Time's up!</h2>}
    </div>
  );
}

export default Timer;
