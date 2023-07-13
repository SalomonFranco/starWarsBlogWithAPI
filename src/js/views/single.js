import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.getCharacterDetails(params.id)
	},[])

	return (
		<div className="container d-flex">

		<div className="container">
			<h2>{store.characterDetails?.name} {store.characterDetails?.description} </h2>
			<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" alt={store.char?.name} className="img-fluid"/>
		</div>

		<div className="container">
			<p>Name {store.characterDetails?.name}</p>
			<p>Birth Year {store.characterDetails?.birth_year}</p>
			<p>Gender {store.characterDetails?.gender}</p>
			<p>Height {store.characterDetails?.height}</p>
			<p>Skin Color {store.characterDetails?.skin_color}</p>
			<p>Eye Color {store.characterDetails?.eye_color}</p>
		</div>
		</div>
	);
};
