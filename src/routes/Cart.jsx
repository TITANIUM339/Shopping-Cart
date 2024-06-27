import { Spinner } from "phosphor-react";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import classes from "../styles/Cart.module.css";
import ProductList from "../components/ProductList";
import {
    MAX_ITEM_COUNT,
    MAX_CART_SIZE,
    getTotalItemsInCart,
} from "../helpers.js";
import { toast } from "react-toastify";

function Cart() {
    const [cart, setCart] = useOutletContext();
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);

        const promises = [];
        const abortController = new AbortController();

        for (let i = 0; i < cart.length; i++) {
            promises.push(
                fetch(`https://fakestoreapi.com/products/${cart[i].id}`, {
                    mode: "cors",
                    signal: abortController.signal,
                }),
            );
        }

        Promise.all(promises)
            .then((result) => Promise.all(result.map((item) => item.json())))
            .then(
                (data) =>
                    setData(
                        data.map((item) => ({
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            id: item.id,
                        })),
                    ),
                () => {},
            );

        return () => abortController.abort();
        // To prevent generating unnecessary network requests only fetch data when a new item is added and not when the count of an already present item changes.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart.length]);

    function handleAdd(id) {
        const newCount = cart.find((item) => item.id === id).count + 1;

        if (getTotalItemsInCart(cart) > MAX_CART_SIZE) return;

        if (newCount > MAX_ITEM_COUNT) return;

        setCart((draft) => {
            draft.find((item) => item.id === id).count = newCount;
        });
    }

    function handleSubtract(id) {
        const newCount = cart.find((item) => item.id === id).count - 1;

        if (newCount === 0) {
            setCart((draft) => {
                const index = draft.findIndex((item) => item.id === id);

                draft.splice(index, 1);
            });

            return;
        }

        setCart((draft) => {
            draft.find((item) => item.id === id).count = newCount;
        });
    }

    function handlePlaceOrder() {
        if (cart.length) {
            toast.success("You're order has been placed");

            setCart([]);

            return;
        }

        toast.error("You must add something to you're cart");
    }

    return (
        <div className={classes.container}>
            {data ? (
                <>
                    <div className={classes.products}>
                        {data.length ? (
                            data.map((item, index) => (
                                <ProductList
                                    key={item.id}
                                    title={item.title}
                                    image={item.image}
                                    count={cart[index]?.count || 0}
                                    price={item.price}
                                    handleAdd={() => handleAdd(item.id)}
                                    handleSubtract={() =>
                                        handleSubtract(item.id)
                                    }
                                />
                            ))
                        ) : (
                            <h1 style={{ textAlign: "center" }}>
                                You&apos;re cart is empty
                            </h1>
                        )}
                    </div>
                    <section className={classes.checkout}>
                        <h1>Checkout</h1>
                        <div style={{ fontWeight: "bold" }}>
                            Total: $
                            {data
                                .reduce(
                                    (total, item, index) =>
                                        total +
                                        item.price * (cart[index]?.count || 0),
                                    0,
                                )
                                .toFixed(2)}
                        </div>
                        <button onClick={handlePlaceOrder} className={classes.order}>Place order</button>
                    </section>
                </>
            ) : (
                <div className={classes.loading}>
                    <Spinner size={64} />
                </div>
            )}
        </div>
    );
}

export default Cart;
