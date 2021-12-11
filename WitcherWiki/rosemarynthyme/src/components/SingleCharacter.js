
const SingleCharacter = ({character}) => {
    return (
      <div className="container">
            <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt="" />
            <div className='details'>
        
                <p>{character.description}</p>
            </div>
      </div>
    );
}
 
export default SingleCharacter;