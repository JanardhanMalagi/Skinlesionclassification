import About from "./pages/About";
import Home from "./pages/Home";
import HowToUse from "./pages/HowToUse";
import Predict from "./pages/Predict";
import Navbar from "./componenets/navbar/Navbar";
import Footer from "./componenets/footer/Footer";
import { Routes, Route } from "react-router-dom";
function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/howToUse" element={<HowToUse />} />
				<Route path="/predict" element={<Predict />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
