import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Character } from "../component/Character.jsx";
import { Vehicles } from "../component/Vehicles.jsx";
import { Planets } from "../component/Planets.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context)

	useEffect(() => {
		actions.getCharacterData(),
		actions.getVehiclesData(),
		actions.getPlanetsData();
	}, [])

	return (
		<div className="container">
		<div className="inline-scroll">
			<div className="row">
			<h1 className="text-danger">Characters</h1>
				<div className="text-center mt-5 d-flex overflow-x-auto">
					{store.characters.map(el =>	
					<Character key={el.uid} el={el} />)}
				</div>
				</div>
			</div>	
			<div className="inline-scroll">
			<div className="row">
			<h1 className="text-danger">Vehicles</h1>
				<div className="text-center mt-5 d-flex overflow-x-auto">
					{store.vehicles.map(el =>
					<Vehicles key={el.uid} el={el} />)}
						</div>
				</div>
			</div>
			<div className="inline-scroll">
			<div className="row">
			<h1 className="text-danger">Planets</h1>
				<div className="text-center mt-5 d-flex overflow-x-auto">
					{store.planets.map(el => 
					<Planets key={el.uid} el={el} />)}
						</div>
				</div>
			</div>
		</div>
	);
}