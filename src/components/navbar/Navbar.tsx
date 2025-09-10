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
						<li className="px-12 py-1 rounded-2xl bg-(--secondary) text-white hover:bg-(--primary-light) hover:text-(--tertiary-ex-dark) hover:shadow-[0_0_10px_rgb(46_82_49_/_0.9)] transition-all ease-in hover:font-bold">
							Clientes
						</li>
					</Link>
					<Link to="/insights">
						<li className="px-12 py-1 rounded-2xl bg-(--secondary) text-white hover:bg-(--primary-light) transition-all hover:shadow-[0_0_10px_rgb(46_82_49_/_0.9)] ease-in hover:text-(--tertiary-ex-dark) hover:font-bold">
							Insights
						</li>
					</Link>
					<Link to="/suporte">
						<li className="px-12 py-1 rounded-2xl bg-(--secondary) text-white hover:bg-(--primary-light) transition-all ease-in hover:shadow-[0_0_10px_rgb(46_82_49_/_0.9)] hover:text-(--tertiary-ex-dark) hover:font-bold">
							Suporte
						</li>
					</Link>
				</ul>
			</div>

			<div className="flex mr-10 gap-4 items-center">
				<FontAwesomeIcon
					icon={faEnvelope}
					size="xl"
					color={"var(--secondary-dark)"}
					className="hover:text-(--tertiary-dark) transition-all ease-in"
				/>
				<FontAwesomeIcon icon={faBell} size="xl" color={"var(--secondary-dark)"} className="hover:text-(--tertiary-dark) transition-all ease-in" />
				<img
					src="https://i.imgur.com/Y37VMb9.png"
					className="transition-all ease-in hover:border-(--tertiary) w-[65px] h-[65px] rounded-full border-3 border-(--secondary)"></img>
			</div>
		</header>
	);
}

export default Navbar;
