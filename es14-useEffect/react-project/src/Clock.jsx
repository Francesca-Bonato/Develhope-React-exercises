/* eslint-disable react/prop-types */
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
      <h2>Current time: {date.toLocaleTimeString()}</h2>
    </>
  );
}
