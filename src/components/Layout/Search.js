import { useState } from "react";
import styles from "./Search.module.css";

const Search = (props) => {
    const [value, setValue] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        props.inputValue(value);
    }

    return <div className={styles.search}>
        <input type='text' id='search-field' placeholder="Search..." onKeyDown={handleKey} onChange={event => setValue(event.target.value)} value={value}></input>
        <button onClick={handleSubmit}></button>
    </div>
}

export default Search;