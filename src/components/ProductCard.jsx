import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import classes from "../styles/ProductCard.module.css";
import { ShoppingCartSimple } from "phosphor-react";

function ProductCard({ title, image, price, rating, handleAddToCart, id }) {
    return (
        <section className={classes.container}>
            <div>
                <img src={image} alt="" className={classes.img} />
            </div>
            <div className={classes.infoContainer}>
                <Link to={`/product/${id}`} className={classes.link}>
                    {title}
                </Link>
                <div className={classes.rating}>
                    <Rating
                        style={{ maxWidth: 120 }}
                        value={rating.rate}
                        readOnly
                    />
                    <div aria-label={`Rating count ${rating.count}`}>
                        {rating.count}
                    </div>
                </div>
                <div className={classes.price}>${price.toFixed(2)}</div>
                <button className={classes.cart} onClick={handleAddToCart}>
                    <ShoppingCartSimple size={24} />
                    Add to cart
                </button>
            </div>
        </section>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default ProductCard;
