import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import type { CardData } from './interfaces/CardData';
import getCards from './services/appService';

function App() {
  // contém todos os cards salvos no JSON
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => { // carrega os cards do JSON
    const recebeCards = async () => await getCards();
    recebeCards()
      .then(response => setCards(response))
      .catch(() => {
        setCards([])
      });
  }, []);

  return (
    <>
      <Header />

      <main className="
                  flex 
                  gap-5
                  flex-wrap
                  items-center
                  justify-center
                  mt-10">
        {
          cards.length > 0 ?
            cards.map((card, index) => (
              <Card 
                title={card.title}  
                text={card.text}
                btnUrl={card.btnUrl}
                btnTxt={card.btnTxt}
                key={index}
                />
            ))
            : <h1 className='
                    font-bold
                    text-3xl text-center
                    opacity-50'>
                Erro ao carregar informações <br/> por favor, volte mais tarde
              </h1>
        }
      </main>
    </>
  )
}

export default App
