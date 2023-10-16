const getState = ({ getStore, setStore }) => {
	return {
	  store: {
		favs: [],
		characters: [],
		vehicles: [],
		planets: [],
		characterDetails: null,
		characterClicked: false,
		vehicleClicked: false,
		planetClicked: false,
	  },
	  actions: {
		addRemoveFav: (newFav) => {
		  const { favs } = getStore();
		  const existingFavIndex = favs.findIndex((fav) => fav.uid === newFav.uid);
  
		  if (existingFavIndex === -1) {
			setStore({ favs: [...favs, newFav] });
		  } else {
			const newList = favs.filter((el) => el.uid !== newFav.uid);
			setStore({ favs: newList });
		  }
		},
		getCharacterData: async () => {
		  const resp = await fetch("https://www.swapi.tech/api/people");
		  const data = await resp.json();
		  const charactersWithComponentType = data.results.map((character) => ({
			...character,
			componentType: 'character',
		  }));
		  setStore({ characters: charactersWithComponentType });
		  console.log(charactersWithComponentType);
		},
		getCharacterDetails: async (uid) => {
		  const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);
		  const data = await resp.json();
		  setStore({ characterDetails: data.result.properties });
		  console.log(data.result);
		},
		getVehiclesData: async () => {
		  const resp = await fetch("https://www.swapi.tech/api/starships");
		  const data = await resp.json();
		  const vehiclesWithComponentType = data.results.map((vehicle) => ({
			...vehicle,
			componentType: 'vehicle',
		  }));
		  setStore({ vehicles: vehiclesWithComponentType });
		  console.log(vehiclesWithComponentType);
		},
		getVehicleDetails: async (uid) => {
		  const resp = await fetch(`https://www.swapi.tech/api/starships/${uid}`);
		  const data = await resp.json();
		  setStore({ vehicleDetails: data });
		  console.log(data);
		},
		getPlanetsData: async () => {
		  const resp = await fetch("https://www.swapi.tech/api/planets");
		  const data = await resp.json();
		  const planetsWithComponentType = data.results.map((planet) => ({
			...planet,
			componentType: 'planet',
		  }));
		  setStore({ planets: planetsWithComponentType });
		  console.log(planetsWithComponentType);
		},
		// ... (other actions)
	  },
	};
  };
  
  export default getState;
  