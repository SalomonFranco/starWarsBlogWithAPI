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
			<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" alt={store.char?.name} className="img-fluid"/>
		</div>

		<div className="container">
			<p>Name {characterDetails && characterDetails.name}</p>
			<p>Birth Year {characterDetails && characterDetails.birth_year}</p>
			<p>Gender {characterDetails && characterDetails.gender}</p>
			<p>Height {characterDetails && characterDetails.height}</p>
			<p>Skin Color {characterDetails && characterDetails.skin_color}</p>
			<p>Eye Color {characterDetails && characterDetails.eye_color}</p>
		</div>
		</div>
	);
};
