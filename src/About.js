import React, {useState} from "react";
import "./About.css"
import Tapok from "./tapok.jpg"


export default function About() {
    let hiddenBlock = "hiddenBlock"
    const [imgBlock, setState] = useState(false);


    return (
        <div>
            <h2>About is working</h2>,
            <button onClick={() => setState(true)}>
                <img src={Tapok} alt={"logo"}/>
            </button>
            <br/>
            <textarea placeholder="write here"></textarea>
            <div className={hiddenBlock}>
                    <img src={Tapok} alt="tapok"/>
            </div>
        </div>
)}

