import './index.css'
import { useState } from "react";
const InputWithButton = (props) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleClick = () => {

        console.log(inputValue);
    }

    return (
        <div className="positionSearch">
            <input className="inputsearch" type="text" value={inputValue} onChange={handleChange} placeholder={props.placeholder} />
            <button className="btnSearch" onClick={handleClick}>{props.buttonText}Rechercher</button>
        </div>
    );
}
export default InputWithButton;