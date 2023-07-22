import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = (props) => {
	const { store, actions } = useContext(Context);
    const [ planetsDetails, setPlanetsDetails] = useState()

   const getPlanetsData = async () => {
        const resp = await fetch("https://www.swapi.tech/api/planets")
        const data = await resp.json()
        setPlanetsDetails(data.result.properties)
    }

	useEffect(() => {
		getPlanetsData(props.el.uid)
	},[])

	return (
		<div className="container d-flex">
		<div className="container">
			<h2>{planetsDetails && planetsDetails.name} {planetsDetails && planetsDetails.description} </h2>
			<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" alt={store.char?.name} className="img-fluid"/>
		</div>

		<div className="container">
			<p>Name {planetsDetails && planetsDetails.name}</p>
			<p>Birth Year {planetsDetails && planetsDetails.birth_year}</p>
			<p>Gender {planetsDetails && planetsDetails.gender}</p>
			<p>Height {planetsDetails && planetsDetails.height}</p>
			<p>Skin Color {planetsDetails && planetsDetails.skin_color}</p>
			<p>Eye Color {planetsDetails && planetsDetails.eye_color}</p>
		</div>
		</div>
	);
};
