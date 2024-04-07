/* Write the useCurrentLocation custom hook, that uses the browser's navigator.geolocation API 
to get the current location of the user through the getCurrentPosition built-in method.
The hook should return the current location as well as a function to get the current location, 
and the error and loading states. */

import { useState, useEffect } from "react";

export function useCurrentLocation() {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  async function fetchCurrentLocation() {
    try {
      setLoading(true);
      setError(null);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
            setPosition(pos);
        },
        (err) => {
            setError(err);
        }
    );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { position, loading, error, fetchCurrentLocation };
}
