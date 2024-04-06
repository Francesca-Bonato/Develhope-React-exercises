/* eslint-disable react/prop-types */
/*
Install the sass package and use SCSS to style your Clock component.
*/

export function AlertClock({onClick, label}) {
    return <button onClick={onClick}>{label}</button>
}