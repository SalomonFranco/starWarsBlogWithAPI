import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesCard = () => {
	const { store, actions } = useContext(Context);
    const [vehiclesDetails, setVehiclesDetails] = useState()
	const param = useParams()

   const getVehiclesData = async () => {
        const resp = await fetch("https://www.swapi.tech/api/starships/"+param.id)
        const data = await resp.json()
        setVehiclesDetails(data.result.properties)
    }

	useEffect(() => {
		getVehiclesData()
	},[])
		
	return (
		<div className="container d-flex">
			<div className="container">
				<h2>{vehiclesDetails && vehiclesDetails.name} {vehiclesDetails && vehiclesDetails.description} </h2>	
				<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" className="img-fluid"/>
			</div>
		<div className="container">
			<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className="container-flex">
			<div className="row d-flex category-fact-container">

					<div className="col-sm-4 col-md-2">
						<p><strong>Model:</strong></p> 
						<p className="fact-text">{vehiclesDetails && vehiclesDetails.model}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Class:</strong></p> 
						<p className="fact-text">{vehiclesDetails && vehiclesDetails.starship_class}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Manufacturer:</strong></p> 
						<p className="fact-text">{vehiclesDetails && vehiclesDetails.manufacturer}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Crew:</strong></p> 
						<p className="fact-text">{vehiclesDetails && vehiclesDetails.crew}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Passengers:</strong></p> 
						<p className="fact-text">{vehiclesDetails && vehiclesDetails.passengers}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Cargo Capacity:</strong></p> 
						<p className="fact-text">{vehiclesDetails && vehiclesDetails.cargo_capacity}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};

// "model":"CR90 corvette","starship_class":"corvette",
// "manufacturer":"Corellian Engineering Corporation","cost_in_credits":"3500000","length":"150",
// "crew":"30-165","passengers":"600","max_atmosphering_speed":"950","hyperdrive_rating":"2.0","MGLT":"60",
// "cargo_capacity":"3000000","consumables":"1 year","pilots"
