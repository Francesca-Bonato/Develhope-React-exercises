/* 
- Create a LanguageContext and wrap the Clock component within its provider.
- Add a select tag to the component in which the Clock component is rendered that allows the user to select the language, and pass it as a value to the Provider.
- Consume the LanguageContext within the Clock component by using the useContext hook, and show the "current time" message in the correct language.
*/

import { useState } from 'react'
import { Clock } from './components/Clock'
import { LanguageContext } from './components/LanguageContext'

function App() {
  const [language, setLanguage] = useState('en')

  function handleSetLanguage(lang) {
    setLanguage(lang)
  }
    return (
    <>
    <label htmlFor='language-select'>Select a language:</label>
    <select id="language-select" name="languageSelect" onChange={(e) => handleSetLanguage(e.target.value)}>
      <option value='it'>italian</option>
      <option value='en' selected>english</option>
      <option value='es'>español</option>
    </select>
    <LanguageContext.Provider value={language}>
      <Clock/>
    </LanguageContext.Provider>
    </>
  )
}

export default App
