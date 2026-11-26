import { useState } from "react";

function Counter() {
    const [value, setValue] = useState(0);

    function increment() {
        setValue(value + 1);
    }

    // function decrement() {
    //     setValue(value - 1);
    // }

    return (
        <>
            <h1>counter : {value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={()=>setValue(value-1)}>Decrement</button>
        </>
    );
}

export default Counter;