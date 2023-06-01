import Card from "./pages/Card";
import SingleCard from "./pages/SingleCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="Card" element={<Card />} />
                    <Route path='Card/:id' element={<SingleCard />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;