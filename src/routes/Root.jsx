import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useImmer } from "use-immer";
import { getTotalItemsInCart } from "../helpers.js";
import { ToastContainer } from "react-toastify";

function Root() {
    const [cart, setCart] = useImmer([]);

    return (
        <>
            <Header cartItemsCount={getTotalItemsInCart(cart)} />
            <main>
                <Outlet context={[cart, setCart]} />
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Root;
