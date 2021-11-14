import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  {"src": "/img/helmet-1.png", matched : false},
  {"src": "/img/potion-1.png", matched : false},
  {"src": "/img/ring-1.png", matched : false},
  {"src": "/img/scroll-1.png", matched : false},
  {"src": "/img/shield-1.png", matched : false},
  {"src": "/img/sword-1.png", matched : false}
]
function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() })) //add a random id to each card

    setCards(shuffledCards)
    setTurns(0)
  }

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card): setChoiceOne(card)
    
    // after filling the choices we need to compare them,
    // we invoke useEffect hook because we want it done only after state changes

  } //if card 1 is already selected, it wont be null\
  // if its null, so our choice is the first one
  // on second choice, card 1 is not null so current card is choice 2

  useEffect(()=>{
      if(choiceOne && choiceTwo) {
        if(choiceOne.src === choiceTwo.src){
          setCards(prevCards => {
            return prevCards.map(card => {
              if(card.src === choiceOne.src){
                return {...card, matched: true}
              }else {
                return card
              }
            })
          })
        } else{
          
        }

        resetTurn()
    }
  }, [choiceOne, choiceTwo]);


  //reset choices and increment turns
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key = {card.id}
            card={card}
            handleChoice = {handleChoice}
            flipped = {card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
