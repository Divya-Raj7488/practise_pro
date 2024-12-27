import React, { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  function incTimer() {
    setTimer((prev) => {
      prev + 1;
    });
  }
  // setInterval(() => {
  //   incTimer();
  // }, 1000);
  return (
    <div>
      <div>{timer}</div>
    </div>
  );
};

export default Timer;
