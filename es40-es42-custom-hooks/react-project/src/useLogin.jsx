/* Create a custom hook that keeps track of the state of a controlled form with the username and password inputs, 
and returns the current value of the inputs as well as an event handler to update either input. */

import { useState } from "react";

export function useLogin() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(data);
  }

  function handleReset() {
    setData({
      username: "",
      password: "",
    });
  }

  return {
    data,
    onInputChange: handleInputChange,
    onSubmit: handleSubmit,
    onReset: handleReset,
  };
}
