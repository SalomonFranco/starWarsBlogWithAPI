import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  const handleDelete = (el) => {
    actions.addRemoveFav(el);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light mb-3">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">
            <img
              src="https://logospng.org/download/star-wars/star-wars-256.png"
              className="img-thumbnail"
              alt="Star Wars Logo"
              style={{ width: "30%", height: "50%" }}
            />
          </span>
        </Link>
        <div className="dropdown ml-auto">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites {store.favs?.length > 0 ? store.favs?.length : 0}
          </button>
          <ul className="dropdown-menu">
            {store.favs?.map((el) => (
              <li key={el.uid}>
                {el.name}{" "}
                <span onClick={() => handleDelete(el)}>
                  {" "}
                  <button type="button" className="btn btn-outline-secondary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"></path>
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"></path>
                    </svg>
                    <span className="visually-hidden"></span>
                  </button>{" "}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
