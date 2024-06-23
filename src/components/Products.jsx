import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "../styles/Products.module.css";
import { Spinner } from "phosphor-react";

function Products({ category = "all" }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(null);

        let url;

        switch (category) {
            case "all":
                url = "https://fakestoreapi.com/products";

                break;

            case "jewelry":
                url = "https://fakestoreapi.com/products/category/jewelery";

                break;

            case "electronics":
                url = "https://fakestoreapi.com/products/category/electronics";

                break;

            case "mens-clothing":
                url =
                    "https://fakestoreapi.com/products/category/men's%20clothing";

                break;

            case "womens-clothing":
                url =
                    "https://fakestoreapi.com/products/category/women's%20clothing";

                break;
        }

        const abortController = new AbortController();

        fetch(url, { mode: "cors", signal: abortController.signal })
            .then(
                (result) => result.json(),
                () => {
                    /* Ignore promise rejection */
                },
            )
            .then((data) => setData(data));

        return () => abortController.abort();
    }, [category]);

    return (
        <div className={classes.container}>
            {data ? (
                data.map((item) => (
                    <ProductCard
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        id={item.id}
                        key={item.id}
                    />
                ))
            ) : (
                <div className={classes.loading}>
                    <Spinner size={64} />
                </div>
            )}
        </div>
    );
}

Products.propTypes = {
    category: PropTypes.string,
};

export default Products;
