import { Outlet, useOutletContext } from "react-router-dom";
import Categories from "../components/Categories";
import classes from "../styles/Shop.module.css";

function Shop() {
    return (
        <div className={classes.container}>
            <div className={classes.categories}>
                <Categories />
            </div>
            <div className={classes.products}>
                <Outlet context={useOutletContext()} />
            </div>
        </div>
    );
}

export default Shop;
