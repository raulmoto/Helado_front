

import Carousel from './Components/Carousel'
import './App.css'

const cardsData = [
  { modelUrl: '../public/fresa.jpg', name: 'Producto 1', id:1 },
  { modelUrl: '../public/bolas.jpg', name: 'Producto 2' ,id:2},
  { modelUrl: '../public/conos.jpg', name: 'Producto 3' ,id:3},
  { modelUrl: '../public/taza.jpg', name: 'Producto 3' ,id:4}
];

function App() {


  return (
    <>
      <Carousel CardList={cardsData}/>
    </>
  )
}

export default App
