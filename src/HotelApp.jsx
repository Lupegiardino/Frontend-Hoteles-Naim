import {useState} from "react";
import "./HotelApp.css";
import logo from "./assets/logo/logo.jpeg";
import {NavLink} from "react-router";

export const HotelApp = () => {
	const [search, setSearch] = useState("");
	const [movieList, setMovieList] = useState(null);

	const handleInputChange = ({target}) => {
		setSearch(target.value);
		console.log(target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		fetchMovies();
	};

	return (
		<div>
			<header className="header">
				<div className="header-left">
					<a href="">
						{" "}
						<img src={logo} className="logo" />{" "}
					</a>
					<h1>Hoteles Naim</h1>
				</div>
				<div className="header-right">
					<NavLink to="/iniciar-sesion" className="search-button">
						Iniciar sesion
					</NavLink>
					<button className="search-button">Crear cuenta</button>
				</div>
			</header>

			<div>
				<p> Buscador </p>
			</div>
			<div>
				<p> Categorias</p>
			</div>
			<div>
				<p>Recomendaciones</p>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Escriba el hotel que desea reservar"
						value={search}
						onChange={handleInputChange}
					/>

					<button className="search-button">Buscar</button>
				</form>
				{/* {movieList &&
                    <div className='hotel-list'>
                        {hotelList.map(movie => (
                            <div key={hotel.id} className='hotel-card'>

                                <h2>{hotel.title}</h2>
                                <p>{hotel.overview}</p>
                            </div>
                        ))}
                    </div>
                } */}
			</div>
		</div>
	);
};
