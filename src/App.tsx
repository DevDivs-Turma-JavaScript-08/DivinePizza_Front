import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Clientes from "./pages/clientes/Clientes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contato from "./pages/contato/Contato";
import InfoClientes from "./components/infoclients/InfoClients";
import Insights from "./pages/insights/Insights";
import Home from "./pages/home/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="flex flex-col items-stretch">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/insights" element={<Insights />} />
					<Route path="/suporte" element={<Contato />} />
					<Route path="/clientes" element={<Clientes />} />
					<Route path="/clientes/info" element={<InfoClientes />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
