import { useState } from "react";

function CounterButton() {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)} style={{ margin: "10px" }}>
            React Button: {count}
        </button>
    );
}

export default function ReactButtons() {
    return (
        <div className="container">
            <CounterButton />
            <CounterButton />
            <CounterButton />
        </div>
    );
}
