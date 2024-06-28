import { useOutletContext, useParams } from "react-router-dom";
import { Spinner, Plus, Minus, ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { getTotalItemsInCart, MAX_CART_SIZE, MAX_ITEM_COUNT } from "../helpers.js";
import classes from "../styles/Product.module.css";
import { toast } from "react-toastify";

function Product() {
    const id = +useParams().id;
    const [data, setData] = useState(null);
    const [count, setCount] = useState(1);
    const [cart, setCart] = useOutletContext();
    const [error, setError] = useState(null);

    if (error) {
        throw new Error(error)
    }

    function handleAdd() {
        const result = count + 1;

        if (result <= MAX_ITEM_COUNT) {
            setCount(result);
        }
    }

    function handleSubtract() {
        const result = count - 1;

        if (result >= 1) {
            setCount(result);
        }
    }

    function handleAddToCart() {
        if (getTotalItemsInCart(cart) + count > MAX_CART_SIZE) {
            toast.error("Cart is full");

            return;
        }

        const cartItemCount = cart.find((item) => item.id === id)?.count;

        if (cartItemCount && cartItemCount + count > MAX_ITEM_COUNT) {
            toast.error("You can't have more of this item");

            return;
        }

        setCart((draft) => {
            const cartItem = draft.find((item) => item.id === id);

            if (cartItem) {
                cartItem.count += count;

                return;
            }

            draft.push({ id, count });
        });

        toast.success(`Added ${count} ${count > 1 ? "item's" : "item"} to cart`);
    }

    useEffect(() => {
        setData(null);

        const abortController = new AbortController();

        fetch(`https://fakestoreapi.com/products/${id}`, {
            mode: "cors",
            signal: abortController.signal,
        })
            .then((result) => result.json(), () => {/* Ignore promise rejection */})
            .then((data) => setData(data)).catch(() => setError("bad url"));

        return () => abortController.abort();
    }, [id]);

    return (
        <div className={classes.container}>
            {data ? (
                <div className={classes.product}>
                    <div>
                        <img src={data.image} alt="" className={classes.img} />
                    </div>
                    <section className={classes.description}>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className={classes.rating}>
                            <Rating
                                style={{ maxWidth: 120 }}
                                value={data.rating.rate}
                                readOnly
                            />
                            <div
                                aria-label={`Rating count ${data.rating.count}`}
                            >
                                {data.rating.count}
                            </div>
                        </div>
                        <div className={classes.price}>
                            ${(data.price * count).toFixed(2)}
                        </div>
                        <div className={classes.addToCartContainer}>
                            <div className={classes.itemsCount}>
                                <button
                                    onClick={handleSubtract}
                                    className={classes.remove}
                                >
                                    <Minus alt="remove" />
                                </button>
                                <div aria-label="Number of items">{count}</div>
                                <button
                                    onClick={handleAdd}
                                    className={classes.add}
                                >
                                    <Plus alt="add" />
                                </button>
                            </div>
                            <button className={classes.addToCart} onClick={handleAddToCart}>
                                <ShoppingCartSimple size={24} /> Add to cart
                            </button>
                        </div>
                    </section>
                </div>
            ) : (
                <div className={classes.loading}>
                    <Spinner size={64} />
                </div>
            )}
        </div>
    );
}

export default Product;
