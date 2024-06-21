import { Link } from "react-router-dom";
import classes from "../styles/Categories.module.css";

function Categories() {
    return (
        <section className={classes.container}>
            <h1>Categories</h1>
            <nav className={classes.linksContainer}>
                <Link to="/shop" className={classes.link}>
                    All products
                </Link>
                <Link to="jewelry" className={classes.link}>
                    Jewelry
                </Link>
                <Link to="electronics" className={classes.link}>
                    Electronics
                </Link>
                <Link to="mens-clothing" className={classes.link}>
                    Men&apos;s clothing
                </Link>
                <Link to="womens-clothing" className={classes.link}>
                    Women&apos;s clothing
                </Link>
            </nav>
        </section>
    );
}

export default Categories;
