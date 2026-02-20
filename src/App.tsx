import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import type { CardData } from './interfaces/CardData';

function App() {
  // contém todos os cards salvos no JSON
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => { // carrega os cards do JSON
    fetch('./cards.json', {
      headers: {
        Accept: "Application/json"
      }
    }).then( res => res.json() )
      .then( res => setCards(res.data));
  }, []);

  return (
    <>
      <Header />

      <main className="
                  flex 
                  gap-5
                  items-center
                  flex-col
                  mt-10">
        {
          cards.map((card, index) => (
            <Card 
              title={card.title}  
              text={card.text}
              btnUrl={card.btnUrl}
              btnTxt={card.btnTxt}
              key={index}
              />
          ))
        }
      </main>
    </>
  )
}

export default App
