/* eslint-disable react/prop-types */

/* Create a Container component that renders its children within a div tag.
Have the div tag use a white background and a red border.
Add a title prop that will contain the title value to be displayed before the children.
Make the container collapsible, so that when the title is clicked the children are either hidden of shown again.
Use the useState hook to keep track of the collapsed state. */

import { useState } from "react";

export function Container({ title, children }) {
    const [collapsed, setCollapsed] = useState(false);

    function handleToggleButton() {
        setCollapsed((t) => !t)
    }

    return (
        <div className='container'>
        <div className='container-title'>{title}
        <button onClick={handleToggleButton}>Toggle</button>
        </div>
        {collapsed && <div className='container-content'>{children}</div>}
        </div>
    )
}