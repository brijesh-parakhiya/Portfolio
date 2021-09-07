import React, { useState } from "react";

function Ctime() {
  var time_1 = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(time_1);
  const NewTime = () => {
    time_1 = new Date().toLocaleTimeString();
    setTime(time_1);
  };

  setInterval(NewTime, 1000);

  return (
    <div>
      <h3> {Time} </h3>
    </div>
  );
}

export default Ctime;
