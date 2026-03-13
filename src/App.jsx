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
            <PostItem post={{
                id: 1,
                title: 'JavaScript',
                body: 'JavaScript - язык программирования'
            }} />
            <PostItem post={{
                id: 2,
                title: 'Java',
                body: 'Java - язык программирования'
            }} />
            <PostItem post={{
                id: 3,
                title: 'C#',
                body: 'C# - язык программирования'
            }} />
        </div>
    )
}

export default App;
