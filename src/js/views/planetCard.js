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
			<p>In the expansive realm of "Star Wars," a breathtaking diversity of planets sets the stage for epic tales. From the deserts of Tatooine to the lush forests of Endor, each planet boasts a unique ecosystem and cultural richness. Iconic locales like the icy Hoth and the bustling city-planet Coruscant offer stark contrasts, reflecting the galaxy's multifaceted nature. Whether it's the remote, swampy Dagobah or the gas giant Bespin with its floating Cloud City, these planets serve as more than mere backdrops—they are integral to the narrative, shaping the destinies of heroes and villains alike. As characters traverse the galaxy, encountering the arid sands of Jakku or the oceanic depths of Kamino, the planets of "Star Wars" become not just settings but immersive worlds, each contributing to the grandeur of this timeless saga.</p>
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
