import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehiclesCard = () => {
	const { store, actions } = useContext(Context);
    const [vehiclesDetails, setVehiclesDetails] = useState()
	const param = useParams()

   const getVehiclesData = async () => {
        const resp = await fetch("https://www.swapi.tech/api/people/"+param.id)
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
			<img src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png" alt={store.char?.name} className="img-fluid"/>
		</div>

		<div className="container">
			<p>Name {vehiclesDetails && vehiclesDetails.name}</p>
			<p>Birth Year {vehiclesDetails && vehiclesDetails.birth_year}</p>
			<p>Gender {vehiclesDetails && vehiclesDetails.gender}</p>
			<p>Height {vehiclesDetails && vehiclesDetails.height}</p>
			<p>Skin Color {vehiclesDetails && vehiclesDetails.skin_color}</p>
			<p>Eye Color {vehiclesDetails && vehiclesDetails.eye_color}</p>
		</div>
		</div>
	);
};
