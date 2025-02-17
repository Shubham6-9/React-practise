import { useState } from "react";

export default function Three() {
    const arr = [
        {
            key: "1"
        },
        {
            key: "2"
        },
        {
            key: "3"
        },
        {
            key: "4"
        },
        {
            key: "5"
        }
    ]
    const [a, setA] = useState(arr);

    function update() {
        if (document.getElementById("input").value <= 10) {
            document.getElementById("err").style.display = "none";
            let b = [...a, { key: document.getElementById("input").value }];
            setA(b);
        }else{
            document.getElementById("err").style.display = "block"
        }
    }
    return (
        <div id="main">
            {
                a.map((e, i) => {
                    return <p key={i}>{e.key}</p>
                })
            }
            <p id="err">Enter Number Less Than 10</p>
            <input type="number" id="input" placeholder="enter" />
            <button onClick={update}>Add</button>
        </div>
    );
}