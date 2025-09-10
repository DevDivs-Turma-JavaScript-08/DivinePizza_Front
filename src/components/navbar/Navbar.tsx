import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<header className="w-full h-[5rem] flex justify-between items-center">
			<div className="flex items-center ml-10 mt-1 gap-16 h-fit">
				<Link to="/">
					<img src="https://i.imgur.com/1q7aDER.png" className="w-45"></img>
				</Link>

				<ul className="flex gap-4">
					<Link to="/clientes">
						<li className="px-12 py-1 rounded-2xl bg-(--secondary) text-white">Clientes</li>
					</Link>
					<Link to="/insights">
						<li className="px-12 py-1 rounded-2xl bg-(--secondary) text-white">Insights</li>
					</Link>
					<Link to="/suporte">
						<li className="px-12 py-1 rounded-2xl bg-(--secondary) text-white">Suporte</li>
					</Link>
				</ul>
			</div>

			<div className="flex mr-10 gap-4 items-center">
				<FontAwesomeIcon icon={faEnvelope} size="xl" color={"var(--secondary-dark)"} />
				<FontAwesomeIcon icon={faBell} size="xl" color={"var(--secondary-dark)"} />
				<img src="https://i.imgur.com/Y37VMb9.png" className="w-[65px] h-[65px] rounded-full border-3 border-(--secondary)"></img>
			</div>
		</header>
	);
}

export default Navbar;
