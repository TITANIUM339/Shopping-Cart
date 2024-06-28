import PropTypes from "prop-types";
import { Plus, Minus } from "phosphor-react";
import classes from "../styles/ProductList.module.css";

function ProductList({
    title,
    image,
    count,
    price,
    handleAdd,
    handleSubtract,
}) {
    return (
        <section className={classes.container}>
            <div>
                <img src={image} alt="" className={classes.image} />
            </div>
            <div className={classes.description}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div className={classes.itemsCount}>
                    <button onClick={handleSubtract} className={classes.add}>
                        <Minus alt="remove" />
                    </button>
                    <div aria-label="Number of items">{count}</div>
                    <button onClick={handleAdd} className={classes.remove}>
                        <Plus alt="add" />
                    </button>
                </div>
                <div className={classes.price}>
                    ${(price * count).toFixed(2)}
                </div>
            </div>
        </section>
    );
}

ProductList.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    handleAdd: PropTypes.func.isRequired,
    handleSubtract: PropTypes.func.isRequired,
};

export default ProductList;
