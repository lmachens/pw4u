import "./App.css";
import Password from "./page/Password";
import Passwords from "./page/Passwords";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Passwords />
        <Password passwordName="set" />
      </header>
    </div>
  );
}

export default App;
