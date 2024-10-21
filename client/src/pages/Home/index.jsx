import { Link } from "react-router-dom"


export default function Home(){
    return(
        <>
            <Link to={"/add-car"}>
                <p>Add car</p>
            </Link>
        </>
    )
}