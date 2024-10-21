import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCar } from "../../models/Car";

export default function CarCreateForm() {
    const [formData, useFormData] = useState();
    const [info, setInfo] = useState();
    const navigate = useNavigate();

    const postForm = async () => {
        const car = await createCar(formData);
        if(car.status === 201){
            return navigate(`/created-car/${car.payload._id}`);
        }
        setInfo(car.message);
    }

    const handleChange = (e) => {
        useFormData({...formData, [e.target.name]: e.target.value})
    }

    const handlePost = (e) => {
        e.preventDefault();
        postForm();
    }
  return (
    <>
        <h1>Create car</h1>
        <form>
            <input type="text" name="name" required placeholder="Enter car name" onChange={handleChange}/>
            <input type="text" name="brand" required placeholder="Enter car brand" onChange={handleChange}/>
            <input type="text" name="color" required placeholder="Enter car color" onChange={handleChange}/>
            <input type="number" name="price" required placeholder="Enter car price" onChange={handleChange}/>

            <button onClick={handlePost}>
                Add car
            </button>
        </form>
        <Link to={"/"}>
            <p>Go home</p>
        </Link>
    </>
  )
}
