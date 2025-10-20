import React from 'react'


import image1 from "./img/gtafacet2.jpg";
import image2 from "./img/gtasalseo3.jpg"; 
import image3 from "./img/gtasub3.jpg";
import image4 from "./img/GTAVMAMITAS.jpg"; 
import image5 from "./img/MINIATURAGARRY2.jpg";
import image6 from "./img/MINIATURAREPO3.jpg";

const imageArray = [image1, image2,image3,image4,image5,image6];

function Imageslider() {
return (
<div className="Imageslider">
<div className="ImageSliderContainter">
<div className="Images">
<img src={imageArray[0]} className="rightImage" />
<img src={imageArray[1]} className="middleImage" /> 
<img src={imageArray[2]} className="leftImage" /> </div>
</div>
<div className="buttons">
<button className="rightButton">r</button> 
<button className="leftButton">1</button>
</div>
</div>
)
}

export default Imageslider