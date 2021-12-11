import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import SingleCharacter from "./SingleCharacter";

const CharDetails = () => {
    const {id} = useParams();
    const {data: character, isPending, error } = useFetch(`http://gateway.marvel.com/v1/public/characters/${id}`);
    if(character){
        console.log(character[0]);
    }
    
    return ( 
        <div className='char-container'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {character && <SingleCharacter character = {character[0]}/>}

        </div>
     );
}
 
export default CharDetails;