import button from './assets/button.jpg'

export function MouseClicker() {
  function handleButtonClick(event) {
    console.log(event.currentTarget.name);
    //to prevent the name attribute of the button from being printed to the console when the image is clicked:
    console.log(event.target.name);
    console.log(event.target.src);
  }

  return (
    <>
      <button name="one" onClick={handleButtonClick}>
    
        <img src={button} width="100px"/>
      </button>
    </>
  );
}
