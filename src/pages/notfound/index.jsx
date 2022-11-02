import { useRouteError } from "react-router"
export default function NotFound() {
    const error = useRouteError();
    return (
    <div>
        <h1>404 Not Found.</h1>
        <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>)
}