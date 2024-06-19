import { Link } from "react-router-dom";
import classes from "../styles/Home.module.css";

function Home() {
    return (
        <div className={classes.container}>
            <section className={classes.welcome}>
                <h1>
                    Welcome to{" "}
                    <span className={classes.logo}>Shopping Cart</span>
                </h1>
                <p>
                    We offer a wide selection of high-quality products which are
                    definitely not made in china 😉
                </p>
                <Link to="shop" className={classes.shop}>
                    Shop now
                </Link>
            </section>
        </div>
    );
}

export default Home;
