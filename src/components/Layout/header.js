import styles from "./header.module.css"
import img from "./header-img.jpeg"
import logo from "./header-logo.png"
import { Link } from "react-router-dom"

const header = () => {
    return <header className={styles.header}>
        <div className={styles.info}>
            <Link to="/"><img src={logo} alt="logo"></img></Link>
            <h2>Food reference book</h2>
        </div>
        <div className={styles['back-img']}>
            <img className={styles.img} src={img} alt="header-img"></img>
        </div>
    </header>
} 

export default header;