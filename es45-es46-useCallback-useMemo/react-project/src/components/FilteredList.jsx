/* eslint-disable react/prop-types */
/* Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop.
The FilteredList component should render only the items of the list whose age is greater than 18, and the filtering should only happen when the list changes.
Use useMemo to memoize the filtered list. */

import { useMemo } from "react";

export function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((element) => element.age >= 18);
  }, [list]);

  return (
    <ul>
      {filteredList.map((el) => {
       return <li key={el.id}>{el.name}</li>;
      })}
    </ul>
  );
}
