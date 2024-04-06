/* eslint-disable react/prop-types */

export function MyListItem({ todo }) {
  function handleRemoveTask() {
    
  }

  return (
    <>
      <li>{todo}</li>
      <button onClick={handleRemoveTask}>Remove task</button>
    </>
  );
}
