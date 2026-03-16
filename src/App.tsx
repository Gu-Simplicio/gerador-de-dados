import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import type { CardData } from './interfaces/CardData';
import getCards from './services/appService';

function App() {
  // contém todos os cards salvos no JSON
  const [cards, setCards] = useState<CardData[]>([]);
  // contém a informação de erro ou não do getCards()
  const [erro, setErro] = useState<boolean>(true);

  useEffect(() => { // carrega os cards do JSON
    const recebeCards = async () => {
      try {
        // recebe os valores do getCards();
        const response = await getCards();

        setCards(response);
        setErro(false);
      }catch(erro) { // em caso de erro, avisa o erro e esvazia os cards
        console.error("Erro ao receber cards: ", erro);
        setErro(true);
        setCards([]);
      }
    };
    
    recebeCards();
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
          erro ?
              <h1 className='
                    font-bold
                    text-3xl text-center
                    opacity-50'>
                Erro ao carregar informações <br/> por favor, volte mais tarde
              </h1>
            :
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
