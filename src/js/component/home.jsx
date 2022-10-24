import React,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ color, setColor] = useState("red");
	const cambiarColor = (color)=>{
		setColor(color) // == color = "green"
	}
	return (
		<>
		<div className="container">
			<div className="row rectangulo mt-5 justify-content-center">
					<button className={color == "verde" ? "verde mt-4" : "circuloVerde mt-4"} onClick={()=> cambiarColor("verde")}></button>
				
					<button className={color == "amarillo" ? "amarillo mt-4" : "circuloAmarillo mt-4"} onClick={()=> cambiarColor("amarillo")}></button>

					<button className={color == "rojo" ? "rojo mt-4" : "circuloRojo mt-4"} onClick={()=> cambiarColor("rojo")}></button>
			</div>
		</div>
		</>
	);
};

export default Home;
