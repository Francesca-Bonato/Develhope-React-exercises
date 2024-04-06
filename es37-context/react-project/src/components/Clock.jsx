import { useContext, useState } from "react"
import { useEffect } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock() {
    const [date, setDate] = useState(new Date())
    
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Updating date...')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    const language = useContext(LanguageContext);
    
    return (
        <>
        <p>{language === 'it' && `Ora esatta attuale: ${date.toLocaleTimeString()}`}</p>
        <p>{language === 'en' && `Current time: ${date.toLocaleTimeString()}`}</p>
        <p>{language === 'es' && `Hora exacta actual: ${date.toLocaleTimeString()}`}</p>
        </>
    )
}