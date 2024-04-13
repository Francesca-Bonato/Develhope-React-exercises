/* Use SWRConfig to set a default value for the fetcher prop of the useSWR hook. */

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig value={{fetcher}}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SWRConfig>
);
