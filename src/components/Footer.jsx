import githubIcon from "../assets/github.svg";
import classes from "../styles/Footer.module.css";

function Footer() {
    return (
        <footer className={classes.container}>
            <section>
                Copyright &copy; TITANIUM339 {new Date().getFullYear()}
            </section>
            <section>
                <a href="https://github.com/TITANIUM339" target="_blank">
                    <img src={githubIcon} alt="" className={classes.github} />
                </a>
            </section>
        </footer>
    );
}

export default Footer;
