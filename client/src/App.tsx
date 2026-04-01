import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import GuidePage from "./pages/GuidePage";
import GamePage from "./pages/GamePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <GamePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: "/guide",
		element: <GuidePage />,
	},
	{
		path: "/about",
		element: <AboutPage />,
	},
]);

function App() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main>
				<RouterProvider router={router} />
			</main>
		</div>
	);
}

export default App;
