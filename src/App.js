import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UpdateForm from "./components/updateForm";
import UserForm from "./components/userForm";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book-slot" element={<UserForm />} />
                    <Route path="/update-slot" element={<UpdateForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
