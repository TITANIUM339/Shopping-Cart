import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/Root.jsx";
import ErrorPage from "./routes/ErrorPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/reset.css";
import Home from "./routes/Home.jsx";
import Shop from "./routes/Shop.jsx";
import Cart from "./routes/Cart.jsx";
import Products from "./routes/Products.jsx";
import Product from "./routes/Product.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "shop",
                element: <Shop />,
                children: [
                    { index: true, element: <Products /> },
                    {
                        path: "jewelry",
                        element: <Products category="jewelry" />,
                    },
                    {
                        path: "electronics",
                        element: <Products category="electronics" />,
                    },
                    {
                        path: "mens-clothing",
                        element: <Products category="mens-clothing" />,
                    },
                    {
                        path: "womens-clothing",
                        element: <Products category="womens-clothing" />,
                    },
                ],
            },
            { path: "cart", element: <Cart /> },
            { path: "product/:id", element: <Product /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
