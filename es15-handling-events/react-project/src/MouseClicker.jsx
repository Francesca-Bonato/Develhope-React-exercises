export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
  }

  return (
    <>
      <button name="one" onClick={handleButtonClick}>
        Click Me!
      </button>
    </>
  );
}
