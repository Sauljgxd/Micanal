import React from 'react'; 
import banner from './img/channels4_banner.jpg'
import styles from './index.css';
import Boton from './Bottons';

console.log(banner)

function App(){
  
  return( <div ClassName ="App">

 <img className="banner" src={banner}/>


<header className="lista">
    <ul>
        <li><Boton color='rgb(0,0,0,0)' children={"Home"} /></li>
        <li><Boton color='rgb(0,0,0,0)' children={"Videos"} /></li>
        <li><Boton color='rgb(0,0,0,0)' children={"Redes"} /></li>
        <li><Boton color='rgb(0,0,0,0)' children={"Directo"} /></li>
    </ul>
    </header>
  </div>
   
  )
}

export default App;