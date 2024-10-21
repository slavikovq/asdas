import { Link, useParams } from "react-router-dom";

export default function CreatedCar(){
    const { id } = useParams();

    return(
        <>
            <p>New car created with id: {id}</p>
            <Link to={`/cars/${id}`}>
                <p>View car</p>
            </Link>
            <Link to={"/"}>
                <p>Go home</p>
            </Link>
        </>
    );
}