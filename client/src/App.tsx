import Navbar from "./components/Navbar";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import GuidePage from "./pages/GuidePage";
import QuizesPage from "./pages/QuizesPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizPage from "./pages/QuizPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <QuizesPage />,
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
	{
		path: "/quizes/:id",
		element: <QuizPage />,
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
