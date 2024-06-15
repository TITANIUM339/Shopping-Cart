import { HandWaving } from "phosphor-react";
import { hello } from "../styles/Hello.module.css";

function Hello() {
    return (
        <div className={hello}>
            <h1>
                Hello <HandWaving />
            </h1>
        </div>
    );
}

export default Hello;
