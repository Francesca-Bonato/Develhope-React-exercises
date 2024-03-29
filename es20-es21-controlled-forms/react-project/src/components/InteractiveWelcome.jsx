/*
Create an InteractiveWelcome component that renders an input tag and the Welcome component.
Pass the current content of the input tag to the name prop of the Welcome component. The input tag should be a controlled component.
*/

import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome() {

    const [name, setName] = useState('');

    function handleInputChange(e) {
        setName(e.target.value)
    }

    return (
        <>
        <input type="text" value={name} onChange={handleInputChange}/>
        {name ? <Welcome name={name}/> : <p>Inserisci il tuo nome</p>}
        </>
    )
}