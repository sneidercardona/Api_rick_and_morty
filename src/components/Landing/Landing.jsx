import { Link } from "react-router-dom";

const Landing = () => {
    return(
        <div>
            <h1>Bienvenidos a mi primer api echa con react</h1>
            <button>
                <Link to='/home' >CLICK</Link>
            </button>
        </div>
    )
}


export default Landing;