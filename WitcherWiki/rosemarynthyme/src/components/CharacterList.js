import { Link } from "react-router-dom"

const CharacterList = ({characters, title}) => {
    return (
        <div className='container'>
            <h2>All Characters</h2>
            <hr />
            <div className='cards'>
                {characters.map((char) => {
                    if(char.description){
                        var text = char.description
                    }else{
                        text = 'Character Description Not Available'
                    }

                    return (
                        <div className='card' key={char.id}>
                            <h2 className='card-title'>{char.name}</h2>
                            <img src={char.thumbnail.path + '.' + char.thumbnail.extension} alt={char.title} />

                            <p className="card-desc">
                                {text}
                            </p>
                            <div className='button'>
                                <Link to={"/characters/"+char.id}>Read More</Link>
                            </div>
                            
                        </div>
                    )
                }
            )}
            </div>
        </div>
)}
export default CharacterList;