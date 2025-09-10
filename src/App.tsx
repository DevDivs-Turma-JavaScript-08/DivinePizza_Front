import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Clientes from "./pages/clientes/Clientes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/contato/Contato";

function App() {
	return (
		<BrowserRouter>
			<div className="flex flex-col items-stretch">
				<Navbar />
				<Routes>
					<Route path="/" element={<Clientes />} />
					<Route path="/insights" element={<Clientes />} />
					<Route path="/suporte" element={<Contato />} />
					<Route path="/clientes" element={<Clientes />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
