// Componente pai
import './App.css'

// Importar o componente o componente filho
import FunctionalComponent from './components/FunctionalComponent'

function App() {

  return (
    <>
      <h1>Hello World React</h1>
      {/* utilizando o componente importado no JSX */}
      <FunctionalComponent />
    </>
  )
}

export default App
