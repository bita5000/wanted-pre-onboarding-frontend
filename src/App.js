import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Todo from "./pages/Todo";
import Header from "./components/Header";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/todo" element={<Todo />} />
        </Routes>
    );
}

export default App;
