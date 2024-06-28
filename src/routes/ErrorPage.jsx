import { Warning } from "phosphor-react";
import classes from "../styles/ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <div className={classes.container}>
            <section className={classes.errorContainer}>
                <h1 className={classes.error}>
                    <Warning weight="bold" /> Error
                </h1>
                <p>
                    It seems that the page you were looking for does not exist.
                </p>
                <Link to="/" className={classes.back}>
                    Go back
                </Link>
            </section>
        </div>
    );
}

export default ErrorPage;
