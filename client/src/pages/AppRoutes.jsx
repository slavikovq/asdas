import { BrowserRouter, Routes, Route } from "react-router-dom"
import CarCreateForm from "./CarCreateForm";
import CreatedCar from "./CarCreateForm/CreatedCar";
import Home from "./Home";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/add-car" element={<CarCreateForm />}/>
                <Route path="/created-car" element={<CreatedCar />}/>
            </Routes>
        </BrowserRouter>
    );
}