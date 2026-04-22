import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const [colorEncendido, setColorEncendido] = useState("");
const [purpuraEncendido,setPurpuraEncendido] = useState(false);
	return (
<div id="web">
	
    <div id="enganche"></div>
    <div id="semaforo" className={purpuraEncendido ? "purpura" : "semaforo.extendido"}>
                <div 
                    className={`roja ${colorEncendido === "roja" ? "brillo" : ""}`}
                    onClick={() => setColorEncendido("roja")}
                ></div>
                
                <div 
                    className={`amarilla ${colorEncendido === "amarilla" ? "brillo" : ""}`}
                    onClick={() => setColorEncendido("amarilla")}
                ></div>
                
                <div 
                    className={`verde ${colorEncendido === "verde" ? "brillo" : ""}`}
                    onClick={() => setColorEncendido("verde")}
                ></div>
              { purpuraEncendido === true && (
                    <div 
                        className={`luz purpura ${colorEncendido === "purpura" ? "brillo" : ""}`}
                        onClick={() => setColorEncendido("purpura")}
                    ></div>
                )}  
            </div>
     <input type="button" value="Añadir Purpura"  onClick={() => {
        setPurpuraEncendido(true);
        }}/>
     <input type="button" value="Aleatorio" id="boton"  onClick={() => {
       if (setPurpuraEncendido === false) 
        { const aleatorio = Math.floor(Math.random() * 3)+1;
        if (aleatorio === 1) {
            setColorEncendido("roja");
        } else if (aleatorio === 2) {
            setColorEncendido("amarilla");
        } else  {
            setColorEncendido("verde");
        }} else { const aleatorio2 = Math.floor(Math.random() * 4)+1;
            if (aleatorio2 === 1) {
            setColorEncendido("roja");
        } else if (aleatorio2 === 2) {
            setColorEncendido("amarilla");
        } else if (aleatorio2 === 3) {
            setColorEncendido("verde");
        } else {
            setColorEncendido("purpura");
        }
    }}}/>
    
    </div>  

	);
};

export default Home;