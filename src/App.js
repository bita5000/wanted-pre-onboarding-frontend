import { Route, Routes, redirect } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";

function App() {
    const token = localStorage.getItem("access_token");
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={token ? <Todo /> : <Signin />} />
            <Route path="/signup" element={token ? <Todo /> : <Signup />} />
            <Route path="/todo" element={token ? <Todo /> : <Signin />} />
        </Routes>
    );
}

export default App;
