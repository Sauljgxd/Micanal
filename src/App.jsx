
import banner from './img/channels4_banner.jpg';
import Boton from './Bottons';
import ImageSlider from './ImageSlander.jsx';

console.log(banner)

function App(){
  
  return ( <div ClassName ="App">

 <img className="banner" src={banner} />
<header className="lista">
    <ul>
        <li><Boton color='rgb(0,0,0,0)' children={"Home"} /></li>
        <li><Boton color='rgb(0,0,0,0)' children={"Videos"} /></li>
        <li><Boton color='rgb(0,0,0,0)' children={"Redes"} /></li>
        <li><Boton color='rgb(0,0,0,0)' children={"Directo"} /></li>
    </ul>
    </header>
    <div> <ImageSlider /></div>
  </div>
   
  )
}

export default App;