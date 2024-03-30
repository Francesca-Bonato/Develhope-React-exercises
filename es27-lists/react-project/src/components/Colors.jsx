/* eslint-disable react/prop-types */
/*
Create a second component called Colors, which takes an array of objects as a prop, 
where the properties are always 'name' and 'id,' and displays an unordered list of Color components.
*/

import { Color } from "./Color";

export function Colors({ colors }) {
  return (
    <ul>
      {colors.map((color) => (
        <Color color={color} key={color.id} />
      ))}
    </ul>
  );
}
