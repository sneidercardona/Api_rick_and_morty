// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getCharacters } from "../../redux/actions";
// import CardCharacter from "../CardCharacter/CardCharacter";

// const Characters = () => {
//     const dispatch = useDispatch();
//     const characters = useSelector((state) => state.characters);

//     useEffect(() => {
//         dispatch(getCharacters())
//     }, [])

//     return(
//         <div>
//             <h1>CHARACTERS:</h1>
//             {
//                 characters.map((character) => {
//                     return (
//                         <CardCharacter
//                             key={character?.id}
//                             id={character?.id}
//                             name={character?.name}
//                             gender={character?.gender}
//                             image={character?.image}
//                         />
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Characters;



import React from "react";
import { connect } from "react-redux";
import { getCharacters, cleanCharacters } from "../../redux/actions";
import CardCharacter from "../CardCharacter/CardCharacter";

class Characters extends React.Component{
    constructor(props){ // {characters: [{...}, {...}, ...], getCharaters}
        super(props)
    }

    componentDidMount(){ // este método se ejecuta cuando se monta el componente
        this.props.getCharacters()
    }

    // componentDidUpdate(){} // este método se ejecuta cuando se actualiza "re-renderiza"

    componentWillUnmount(){  // este método se ejecuta cuando se desmonta el componente
        this.props.cleanCharacters()
    }

    render(){
        return(
            <div>
                <h1>CHARACTERS CON CLASS COMPONENT</h1>
                {
                    this.props.characters?.map((character) => {
                        return (
                            <CardCharacter
                                key={character?.id}
                                name={character?.name}
                                id={character?.id}
                                gender={character?.gender}
                                image={character?.image}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        characters: state.characters
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getCharacters: () => dispatch(getCharacters()),
        cleanCharacters: () => dispatch(cleanCharacters())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters);