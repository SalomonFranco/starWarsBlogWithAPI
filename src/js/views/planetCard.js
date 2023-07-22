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
			<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" alt={store.char?.name} className="img-fluid"/>
		</div>

		<div className="container">
			<p>Name {planetsDetails && planetsDetails.name}</p>
			<p>Population {planetsDetails && planetsDetails.population}</p>
			<p>Climate {planetsDetails && planetsDetails.climate}</p>
			<p>Terrain {planetsDetails && planetsDetails.terrain}</p>
			<p>Diameter {planetsDetails && planetsDetails.diameter}</p>
			<p>Gravity {planetsDetails && planetsDetails.gravity}</p>
		</div>
		</div>
	);
};
