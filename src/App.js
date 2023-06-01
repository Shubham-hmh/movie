import Card from "./components/Card";
import SingleCard from "./components/SingleCard";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Card />} />
                    <Route path='Card/:id' element={<SingleCard />} />
                </Routes>
            </BrowserRouter>
        </>
    )

}

export default App;