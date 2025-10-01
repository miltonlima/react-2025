// Componente pai
import './App.css'

// Importar o componente o componente filho
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExample from './components/PropsExample';

function App() {

  return (
    <>
      <h1>React + Vite</h1>
      {/* utilizando o componente importado no JSX */}
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample nome="Milton" idade="39" />
    </>
  )
}

export default App
