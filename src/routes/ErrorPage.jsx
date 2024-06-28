import { Warning } from "phosphor-react";
import classes from "../styles/ErrorPage.module.css";

function ErrorPage() {
    return (
        <div className={classes.container}>
            <h1 className={classes.error}><Warning weight="bold"/> Error</h1>
            <p>It seems that the page you were looking for does not exist.</p>
        </div>
    );
}

export default ErrorPage;
