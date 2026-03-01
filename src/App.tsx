import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import type { CardData } from './interfaces/CardData';

function App() {
  // contém todos os cards salvos no JSON
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => { // carrega os cards do JSON
    const carregarCards = async () => { // função para receber os cards
      try {
        const response = await fetch('/cards.json', {
          headers: { // define que aceitará um json como resposta
            Accept: "application/json"
          }
        });

        // caso a requisição falhe
        if(!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
        
        //responsta transformada em JSON
        const resJson = await response.json();

        // validação..
        if(resJson && Array.isArray(resJson.data)){
          setCards(resJson.data);
        } else {
          throw new Error("Formato de JSON inválido: 'data' não é um array")
        }
      } catch(erro){
        console.error("Falha ao carregar cards: ", erro);
      }
    }

    carregarCards(); // executa a função
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
