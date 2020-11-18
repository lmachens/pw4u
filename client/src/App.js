import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getPassword } from "./api/passwords";

function App() {
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doFetch = async () => {
      setLoading(true);
      const newPassword = await getPassword("wifi");
      setPassword(newPassword);
      setLoading(false);
    };
    doFetch();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {loading && <div>Loading...</div>}
        {password}
      </header>
    </div>
  );
}

export default App;
