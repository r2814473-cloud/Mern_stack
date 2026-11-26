import { useState } from "react";

// Child component that receives obj prop
function Wicket(prop) {
    return <h2 style={{ color: "red" }}>{prop.obj}</h2>;
}

function Score() {
    const [value, setValue] = useState(0);
    const [val, setVal] = useState(0);

    function One() {
        setValue(value + 1);
    }

    function addWicket() {
        if (val < 10) {
            setVal(val + 1);
        }
    }

    function reset() {
        setValue(0);
        setVal(0);
    }

    return (
        <>
            <h2>Display Score</h2>
            <h2>Runs : {value}</h2>
            <h2>Wickets : {val >= 10 ? "all out" : val}</h2>

            {/* Prints "all out" using the Wicket component when wickets reach 10 */}
            {val >= 10 && <Wicket obj="all out" />}

            <button disabled={val >= 10} onClick={One}>One</button>
            <button disabled={val >= 10} onClick={() => setValue(value + 2)}>Two</button>
            <button disabled={val >= 10} onClick={() => setValue(value + 3)}>Three</button>
            <button disabled={val >= 10} onClick={() => setValue(value + 4)}>Four</button>
            <button disabled={val >= 10} onClick={() => setValue(value + 5)}>Five</button>
            <button disabled={val >= 10} onClick={() => setValue(value + 6)}>Six</button>
            <button disabled={val >= 10} onClick={addWicket}>wicket</button>

            {val >= 10 && <button onClick={reset}>Reset</button>}
        </>
    );
}

export default Score;
