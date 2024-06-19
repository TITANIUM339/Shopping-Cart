import { ShoppingCartSimple } from "phosphor-react";
import { Link } from "react-router-dom";
import classes from "../styles/Header.module.css";
import { PropTypes } from "prop-types";

function Header({ cartItemsCount }) {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link to="/">Shopping Cart</Link>
            </div>
            <nav className={classes.nav}>
                <div className={classes.navGroup1}>
                    <Link to="/" className={classes.home}>
                        Home
                    </Link>
                    <Link to="shop" className={classes.shop}>
                        Shop
                    </Link>
                </div>
                <div className={classes.navGroup2}>
                    <Link to="cart" aria-label="Cart" className={classes.cart}>
                        <ShoppingCartSimple size={32} />
                    </Link>
                    {cartItemsCount ? (
                        <div
                            className={classes.cartItemsCount}
                            aria-label="Number of items in cart"
                        >
                            {cartItemsCount}
                        </div>
                    ) : null}
                </div>
            </nav>
        </header>
    );
}

Header.propTypes = {
    cartItemsCount: PropTypes.number,
};

export default Header;
