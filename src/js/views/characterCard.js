import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterCard = () => {
	const { store, actions } = useContext(Context);
    const [characterDetails, setCharacterDetails] = useState()
	const param = useParams()

    const getCharacterData = async () => {
         const resp = await fetch("https://www.swapi.tech/api/people/"+param.id)
         const data = await resp.json()
	        setCharacterDetails(data.result.properties)
     }

 	useEffect(() => {
 		getCharacterData()
 	},[])

	return (
<div className="container d-flex">
			<div className="container">
				<h2>{characterDetails && characterDetails.name} {characterDetails && characterDetails.description} </h2>	
				<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" className="img-fluid"/>
			</div>
		<div className="container">
			<p>In the expansive universe of "Star Wars," characters are dynamic entities shaped by unique backgrounds, affiliations, and the ever-present Force. Aligned with the noble Jedi Order, malevolent Sith, or various factions, they exhibit strengths, flaws, and virtues that contribute to the saga's depth. Droids provide indispensable support, and relationships, whether familial or forged in conflict, add layers of emotion. As the galaxy grapples with the eternal conflict between light and dark, characters become entangled in interconnected destinies, marked by choices, sacrifices, and the ongoing pursuit of balance. "Star Wars" characters, whether in Jedi robes or Sith armor, form the heart of a timeless saga, leaving an indelible mark on the collective imagination.</p>
			<div className="container-flex">
			<div className="row d-flex category-fact-container">

					<div className="col-sm-4 col-md-2">
						<p><strong>Name:</strong></p> 
						<p className="fact-text">{characterDetails && characterDetails.name}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Birth Year:</strong></p> 
						<p className="fact-text">{characterDetails && characterDetails.birth_year}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Gender:</strong></p> 
						<p className="fact-text">{characterDetails && characterDetails.gender}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Height:</strong></p> 
						<p className="fact-text">{characterDetails && characterDetails.height}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Skin Color:</strong></p> 
						<p className="fact-text">{characterDetails && characterDetails.skin_color}</p>
					</div>

					<div className="col-sm-4 col-md-2">
						<p><strong>Eye Color:</strong></p> 
						<p className="fact-text">{characterDetails && characterDetails.eye_color}</p>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};
