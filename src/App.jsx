import {BrowserRouter, Route, Routes} from "react-router";
import {HotelApp} from "./HotelApp";
import {AuthProvider} from "./modules/auth/context/authContext";
import {NotificationProvider} from "./modules/core/context/notificationContext";
// import {Profile} from "./modules/Core/Pages/Profile/Profile";

function App() {
	return (
		<AuthProvider>
			<NotificationProvider>
				<BrowserRouter>
          <Routes>
						<Route path="/" element={<HotelApp />} />
						<Route path="/iniciar-sesion" element={<div>Login desde rutas</div>} />
						{/* <Route path="/registro" element={<Register />} /> */}
					</Routes>
				</BrowserRouter>
				{/* <Navigation /> */}
			</NotificationProvider>
		</AuthProvider>
	);
}

export default App;
