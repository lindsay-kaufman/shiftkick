import './App.css';
import { Wrapper } from "./components/wrapper/wrapper";

function App() {
    const user = "User"
    return (
        <div className="App">
            {`Hi, ${user}`}
            <Wrapper />
        </div>
    );
}

export default App;
