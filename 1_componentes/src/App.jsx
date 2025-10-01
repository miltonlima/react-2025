// Componente pai
import './App.css'

// Importar o componente o componente filho
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';

function App() {

  return (
    <>
      <h1>React + Vite</h1>
      {/* utilizando o componente importado no JSX */}
      <FunctionalComponent />
      <ClassComponent />
    </>
  )
}

export default App
