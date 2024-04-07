import { useCurrentLocation } from "./useCurrentLocation";

export function CurrentLocation() {
    const {position, loading, error, fetchCurrentLocation} = useCurrentLocation();

    function handleLocatorClick() {
        fetchCurrentLocation();
    }
  return (
  <>
  {loading && <h2>Loading...</h2>}
  {error && <h2>Oh-oh, something went wrong!</h2>}
  {position &&  <p>Your current position: Latitude - {position.coords.latitude}, Longitude - {position.coords.longitude}</p>}
  <button onClick={handleLocatorClick}>Fetch Current Location</button>
  </>
  )

}
