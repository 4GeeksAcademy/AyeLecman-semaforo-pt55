
import React, { useState } from "react";


//create your first component
const Home = () => {

	const [redShadow, setRedShadow] = useState("none");
	const [yellowShadow, setYellowShadow] = useState("none");
	const [greenShadow, setGreenShadow] = useState("none");
	const [purpleShadow, setPurpleShadow] = useState("none");
	const [purpleDisplay, setPurpleDisplay] = useState("none")

	const red = () => {
		if (redShadow == "none") {
			setRedShadow("0 0 20px 10px rgba(255, 0, 0, 0.6)")
			setYellowShadow("none")
			setGreenShadow("none")
			setPurpleShadow("none")
		} else {
			setRedShadow("none")
		}
	}

	const yellow = () => {
		if (yellowShadow == "none") {
			setYellowShadow("0 0 20px 10px rgba(255, 255, 0, 0.6)")
			setRedShadow("none")
			setGreenShadow("none")
			setPurpleShadow("none")
		} else {
			setYellowShadow("none")
		}
	}

	const green = () => {
		if (greenShadow == "none") {
			setGreenShadow("0 0 20px 10px rgba(0, 255, 0, 0.6)")
			setRedShadow("none")
			setYellowShadow("none")
			setPurpleShadow("none")
		} else {
			setGreenShadow("none")
		}
	}

	const purple = () => {
		if (purpleShadow == "none") {
			setPurpleShadow("0 0 20px 10px rgba(128, 0, 128, 0.6)");
			setYellowShadow("none")
			setRedShadow("none")
			setGreenShadow("none")
		} else {
			setPurpleShadow("none")
		}
	}


	const alternate = () => {
		if (redShadow !== "none") {
			setRedShadow("none");
			setYellowShadow("0 0 20px 10px rgba(255, 255, 0, 0.6)");
			setGreenShadow("none");
		} else if (yellowShadow !== "none") {
			setRedShadow("none");
			setYellowShadow("none");
			setGreenShadow("0 0 20px 10px rgba(0, 255, 0, 0.6)");
		} else {
			setRedShadow("0 0 20px 10px rgba(255, 0, 0, 0.6)");
			setYellowShadow("none");
			setGreenShadow("none");
		}
	};

	const turnOut = () => {
		setRedShadow("none");
		setYellowShadow("none");
		setGreenShadow("none");
		setPurpleShadow("none");
	};

	const purpleOn = () => {
		if (purpleDisplay == "none"){
			setPurpleDisplay("inline-block")
		} else {
			setPurpleDisplay("none")
		}		
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<div className="bg-dark" style={{ width: "1rem", height: "15vh" }}></div>
			<div className="p-4 bg-dark rounded-4">
				<div className="btn-group-vertical btn-group-lg gap-4" role="group" aria-label="Basic mixed styles example">
					<button onClick={red} type="button" className="btn btn-danger rounded-circle" style={{ width: "4rem", height: "4rem", boxShadow: redShadow }}></button>
					<button onClick={yellow} type="button" className="btn btn-warning rounded-circle" style={{ width: "4rem", height: "4rem", boxShadow: yellowShadow }}></button>
					<button onClick={green} type="button" className="btn btn-success rounded-circle" style={{ width: "4rem", height: "4rem", boxShadow: greenShadow }}></button>
					<button onClick={purple} type="button" className="btn rounded-circle" style={{ width: "4rem", height: "4rem", backgroundColor: "purple", boxShadow: purpleShadow, display: purpleDisplay}}></button>
				</div>
			</div>
			<button onClick={alternate} type="button" className="btn btn-dark btn-lg mt-5 fw-bold text-light">Alternar luces</button>
			<p className="mt-2 fw-bold fst-italic">Presiona el botón cada vez que quieras cambiar la luz</p>
			<button onClick={turnOut} type="button" className="btn btn-dark btn-lg mt-5 fw-bold text-light">Apagar luces</button>
			<button onClick={purpleOn} type="button" className="btn btn-dark btn-lg mt-5 fw-bold text-light">Sorpresa!</button>
		</div>
	);
};

export default Home;