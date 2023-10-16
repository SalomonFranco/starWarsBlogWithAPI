import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const Vehicles = (props) => {
    const { store, actions } = useContext(Context);
    const [vehicle, setVehicle] = useState();
    const [clicked, setClicked] = useState(false);
  
    const handleAddRemoveFav = () => {
        actions.addRemoveFav({ ...props.el, componentType: 'vehicles' });
        setClicked(false);
    };

  const getVehicleDetails = async (id) => {
    const resp = await fetch(`https://www.swapi.tech/api/starships/${id}`);
    const data = await resp.json();
    setVehicle(data.result.properties);
  };

  useEffect(() => {
    getVehicleDetails(props.el.uid);
  }, [props.el.uid]);

  const navigate = useNavigate();

  return (
    <div className="card mx-3 col-4" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src="https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2016/11/news-article-images-ships-blog-image-16x9.jpg"
        alt="Vehicle"
      />
      <p className="fs-3">{props.el?.name}</p>
      <p>Model: {vehicle && vehicle.model}</p>
      <p>Cargo Capacity: {vehicle && vehicle.cargo_capacity}</p>
      <p>Passenger Capacity: {vehicle && vehicle.passengers}</p>
      <div className="d-flex justify-content-between p-2">
        <button
          className="btn btn-primary ms-3"
          onClick={() => navigate("/vehicleCard/" + props.el.uid)}
        >
          Learn More!
        </button>
        <button
          className={`btn btn-outline-warning me-3 ${
            store.favs?.some((fav) => fav.uid === props.el.uid) ? "active" : ""
          }`}
          onClick={() => {
            handleAddRemoveFav();
            setClicked(!clicked);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
