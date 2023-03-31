import styles from "./footer.module.css"

const Footer = () => {
    return <footer className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
}

export default Footer;