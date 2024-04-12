import { Link } from "react-router-dom";

export function NotFound() {
    return(
        <>
        Please go back and insert a name!
        <br/>
        <Link to="/">Homepage</Link>
        </>
    )
}