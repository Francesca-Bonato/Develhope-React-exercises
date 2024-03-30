//Using StrictMode, create a component with an effect that prints a message only when the component is mounted the first time. 
//Use a ref to keep track of whether the component is mounted or not.

import { useRef } from "react";
import { useEffect } from "react";
import { FocusableInput } from "./FocusableInput";

export function EffectOnMounting() {
  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    } else {
      console.log("Mounting again");
    }
  }, []);

  return (
    <>
      <FocusableInput/>
    </>
  );
}
