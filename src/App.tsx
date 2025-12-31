import './App.css'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {
  return (
    <>
      <Header />

      <main className="
                  flex 
                  gap-5
                  flex-col
                  px-3
                  mt-10">
        <Card 
          title="Teste1"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis vero odit nisi accusantium tempora molestiae atque consequuntur sapiente amet dolorum! Quos corrupti quae dicta maiores hic, quo modi ut placeat?"
          btnUrl="/teste1"
          btnTxt='Teste 01'/>
      </main>
    </>
  )
}

export default App
