import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsCard = () => {
	const { store, actions } = useContext(Context);
    const [ planetsDetails, setPlanetsDetails] = useState()
	const param = useParams()

   const getPlanetsData = async () => {
        const resp = await fetch("https://www.swapi.tech/api/planets/"+param.id)
        const data = await resp.json()
        setPlanetsDetails(data.result.properties)
    }

	useEffect(() => {
		getPlanetsData()
	},[])

	return (
		<div className="container d-flex">
			<div className="container">
				<h2>{planetsDetails && planetsDetails.name} {planetsDetails && planetsDetails.description} </h2>	
				<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" className="img-fluid"/>
			</div>
		<div className="container">
			<p>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			<div className="container-flex">
			<div className="row d-flex category-fact-container">

					<div className="col-sm-4 col-md-2">
						<p><strong>Name:</strong></p> 
						<p className="fact-text">{planetsDetails && planetsDetails.name}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Climate:</strong></p> 
						<p className="fact-text">{planetsDetails && planetsDetails.climate}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Terrain:</strong></p> 
						<p className="fact-text">{planetsDetails && planetsDetails.terrain}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Climate:</strong></p> 
						<p className="fact-text">{planetsDetails && planetsDetails.climate}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Gravity:</strong></p> 
						<p className="fact-text">{planetsDetails && planetsDetails.gravity}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Rotation Period:</strong></p> 
						<p className="fact-text">{planetsDetails && planetsDetails.rotation_period}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
		);
	};
