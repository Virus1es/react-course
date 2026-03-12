import React, {useState} from "react";
import Counter from "./components/Counter.jsx";

function App() {
    const [value, setValue] = useState('Some string');

    return (
        <div>
            <h3>{value}</h3>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
            <Counter/>
        </div>
    )
}

export default App;
