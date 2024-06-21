import { PropTypes } from "prop-types";

function Products({ category = "all" }) {
    return <h1>{category}</h1>;
}

Products.propTypes = {
    category: PropTypes.string,
};

export default Products;
