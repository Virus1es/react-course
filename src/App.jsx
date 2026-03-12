import React, {useState} from "react";

function App() {
    const [likes, setLikes] = useState(0);

    function increment() {
        setLikes(likes + 1);
    }

    function decrement() {
        setLikes(likes - 1);
    }

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h3>{likes}</h3>
        </div>
    )
}

export default App;
