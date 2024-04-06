/* eslint-disable react/prop-types */
/*Install the sass package and use SCSS to style your Clock component.*/

import { useState, useEffect } from "react";

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <h4 className="clock">Current time: {date.toLocaleTimeString()}</h4>
    </>
  );
}
