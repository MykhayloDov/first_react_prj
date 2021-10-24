import React, {useState} from "react";
import "./History.css"

export default function Example() {

    const [count, setCount] = useState(0);
    let [myStyle, setStyle] = useState("numberColor");


    if (count > 0) {
        myStyle = "greenButton"
        console.log(myStyle)
    } else {
        myStyle = "redButton"
        console.log("red")
    }

    return (
        <div>
            <p>Counter: <span className={myStyle}>{count}</span></p>
            <button  onClick={() => setCount(count + 1)}>
                Click me!
            </button>
            <br/>
            <button  onClick={() => setCount(count + 10)}>
                Click to increment  10
            </button>
            <br/>
            <button onClick={() => setCount(count - 1)}>
                Click here to remove
            </button>
        </div>

    )

}
