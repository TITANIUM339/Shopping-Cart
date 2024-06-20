import { Outlet } from "react-router-dom";
import Categories from "../components/Categories";
import classes from "../styles/Shop.module.css";

function Shop() {
    return (
        <div className={classes.container}>
            <div className={classes.categories}>
                <Categories />
            </div>
            <div className={classes.products}>
                <Outlet />
            </div>
        </div>
    );
}

export default Shop;
