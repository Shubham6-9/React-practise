import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)

    function plus(){
        setCount(count + 1);
    }
    function minus(){
        setCount(count - 1);
    }
    function reset(){
        setCount(0);
    }

    return(
        <div id="counter">
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={plus}> + </button>
            <button onClick={minus}> - </button>
            <button onClick={reset}> Reset </button>
        </div>
    );
}