import CharacterList from "./CharacterList";
import useFetch from "../hooks/useFetch";

const Home = () => {

    const {data: characters, isPending, error} = useFetch('http://gateway.marvel.com/v1/public/characters')
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {characters && <CharacterList characters={characters} title='All Characters'/>}
        </div>
    );
}
 
export default Home;

// http://gateway.marvel.com/v1/public/characters?ts=1637411209132&apikey=5d8026184c62934f7fdf293ad71aabb6&hash=54676c92f5ef348ccc425a51f1d5562f