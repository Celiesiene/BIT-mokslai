import './app.css';
import Auto from './Components/Auto.jsx';
import Namas from './Components/Namas.jsx';
import Parkas from './Components/Parkas.jsx';
import RandomColor from './Components/RandomColor.jsx';
import Volvo from './Components/Volvo.jsx';

import rand from './Funkcijos/rand.js'
 import randomColor from './Funkcijos/randomColor.js'

import kazka from './Funkcijos/demoEx.js'

import C, {A, B} from './Funkcijos/demoEx.js'

import * as demo from './Funkcijos/demoEx.js'

function App() {


  
   

  return (
    <div className="app">
      <header className="app-header">
        {kazka()} {A()} {B()}  {C()}
        {demo.A()} {demo.B()} {demo.default()}
        {/* <Namas numeris='1' spalva='yellow' kiekis = '5' rand={rand}/>
        <Namas numeris= '2' spalva='green' kiekis = '8' rand={rand}/>
        <Namas numeris ='3' spalva='red' kiekis = '1' rand={rand}/> */}
        {/* <Parkas koks = {rand(1, 4)}/> */}
        <Auto text ={<RandomColor ct='bla'/>}><h1>Opel</h1></Auto>
        <Auto text ={<RandomColor ct='ku ku'/>}><h3>BMW</h3></Auto>
        <Auto text ={<RandomColor/>}><Volvo/></Auto>

 <h2 style={{
    position: 'relative', left: rand(-300, 300) + 'px', color: randomColor(), letterSpacing: rand(5, 30) + 'px', fontSize: rand(10, 60) + 'px'}}>REACT</h2>
      </header>
    </div>
  );
}
 
export default App;