// Create a FocusableInput component that renders an input tag.
// As soon as the component renders, the input tag should be focused automatically.

import { useEffect } from "react";
import { useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name="username"
        placeholder="username"
      />
    </>
  );
}
