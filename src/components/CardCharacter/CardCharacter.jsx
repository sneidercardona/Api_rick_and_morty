import { Link } from "react-router-dom";

const CardCharacter = ({ id, name, gender, image}) => {
    return(
        <div>
            <Link to={`/detail/${id}`}>
                <img src={image} alt={name} style={{ borderRadius: '999999rem' }} />
            </Link>
            <h1>{name}</h1>
            <h2>{gender}</h2>
        </div>
    )
}

export default CardCharacter;