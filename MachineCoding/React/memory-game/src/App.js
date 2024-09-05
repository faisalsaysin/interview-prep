import Game from "./components/Game";
import { TOTAL_BOX } from "./constants";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Game total={TOTAL_BOX} />
        </div>
    );
}

export default App;
