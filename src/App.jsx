import React, {useState} from "react";
import Counter from "./components/Counter.jsx";
import '../styles/app.css';
import PostItem from "./components/PostItem.jsx";

function App() {
    const [value, setValue] = useState('Some string');

    return (
        <div className="App">
            <h3>{value}</h3>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
            <Counter/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    )
}

export default App;
