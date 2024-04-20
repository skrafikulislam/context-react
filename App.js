import "./App.css";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        {" "}
        <h1>React With Context Api</h1>
      </div>

      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
