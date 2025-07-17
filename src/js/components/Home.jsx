
import React, { useState } from "react";


//create your first component
const Home = () => {

	const [redShadow, setRedShadow] = useState("none");
	const [yellowShadow, setYellowShadow] = useState("none"); 
	const [greenShadow, setGreenShadow] = useState("none");    

	const red = () => {
		if (redShadow == "none"){
			setRedShadow ("0 0 20px 10px rgba(255, 0, 0, 0.6)")
			setYellowShadow ("none")
			setGreenShadow("none")
		} else {
			setRedShadow("none")
		}
	}

	const yellow = () => {
		if (yellowShadow == "none"){
			setYellowShadow ("0 0 20px 10px rgba(255, 255, 0, 0.6)")
			setRedShadow ("none")
			setGreenShadow("none")
		} else {
			setYellowShadow("none")
		}
	}

	const green = () => {
		if (greenShadow == "none"){
			setGreenShadow ("0 0 20px 10px rgba(0, 255, 0, 0.6)")
			setRedShadow ("none")
			setYellowShadow("none")
		} else {
			setGreenShadow("none")
		}
	}

	return (
		
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="bg-dark" style={{ width: "1rem", height: "15vh"}}></div>
			<div className="p-4 bg-dark rounded-4">
				<div className="btn-group-vertical btn-group-lg gap-4" role="group" aria-label="Basic mixed styles example">
					<button onClick={red} type="button" className="btn btn-danger rounded-circle" style={{ width: "4rem", height: "4rem", boxShadow: redShadow}}></button>
					<button onClick={yellow} type="button" className="btn btn-warning rounded-circle" style={{ width: "4rem", height: "4rem", boxShadow: yellowShadow }}></button>
					<button onClick={green} type="button" className="btn btn-success rounded-circle" style={{ width: "4rem", height: "4rem", boxShadow: greenShadow }}></button>
				</div>
			</div>
		</div>
	);
};

export default Home;