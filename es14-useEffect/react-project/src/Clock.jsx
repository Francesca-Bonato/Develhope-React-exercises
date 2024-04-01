/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./clock.scss"

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
      <h2 className="clock">Current time: {date.toLocaleTimeString()}</h2>
    </>
  );
}
