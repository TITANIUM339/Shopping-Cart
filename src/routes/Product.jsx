import { useParams } from "react-router-dom";
import { Spinner, Plus, Minus, ShoppingCartSimple } from "phosphor-react";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import classes from "../styles/Product.module.css";

function Product() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [count, setCount] = useState(1);

    function handleAdd() {
        const result = count + 1;

        if (result <= 10) {
            setCount(result);
        }
    }

    function handleSubtract() {
        const result = count - 1;

        if (result >= 1) {
            setCount(result);
        }
    }

    useEffect(() => {
        setData(null);

        const abortController = new AbortController();

        fetch(`https://fakestoreapi.com/products/${id}`, {
            mode: "cors",
            signal: abortController.signal,
        })
            .then((result) => result.json(), () => {/* Ignore promise rejection */})
            .then((data) => setData(data));

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
                            <button className={classes.addToCart}>
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
