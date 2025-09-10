import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup"

function NewClient() {
  return (
		<>
			<Popup
				trigger={
					<button className="bg-white text-center w-31 rounded-2xl h-9 relative text-(--secondary-ex-dark) text-sm font-semibold group" type="button">
						<div className="bg-(--primary-dark) rounded-2xl h-9 w-1/4 flex items-center justify-center absolute left-0 top-0 group-hover:w-31 z-10 duration-500">
							<FontAwesomeIcon icon={faPlus} color="white" />
						</div>
						<p className="translate-x-3.5"> Novo Cliente</p>
					</button>
				}
				modal
				contentStyle={{ borderRadius: "1rem", alignContent: "center" }}>
				<div className="container flex flex-col items-center bg-(--primary-dark) px-10 py-2 rounded-2xl">
					<h1 className="text-4xl text-center my-8 text-white font-bold">Cadastrar Novo Cliente</h1>

					<form className="flex flex-col w-4/5 gap-3">
						<div className="flex flex-col gap-1 text-white font-bold">
							<label htmlFor="titulo">Nome do Usuário</label>
							<input
								type="text"
								placeholder="Nome completo"
								name="nome"
								required
								className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-white invalid:border-(--secondary) invalid:text-white focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in"
							/>
						</div>
						<div className="flex flex-col gap-1 text-white font-bold">
							<label htmlFor="titulo">Email</label>
							<input
								type="email"
								placeholder="Email"
								name="email"
								required
								className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-white invalid:border-(--secondary) invalid:text-white focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in"
							/>
						</div>
						<div className="flex flex-col gap-1 text-white font-bold">
							<label htmlFor="endereco">Endereço</label>
							<textarea
								placeholder="CEP - Rua, n° - Estado/Cidade"
								name="endereco"
								required
								className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-white invalid:border-(--secondary) invalid:text-white focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in"
							/>
						</div>
						<div className="flex flex-col gap-1 text-white font-bold">
							<label htmlFor="data">Data do Último Pedido</label>
							<input
								type="date"
								placeholder="dd/mm/aaaa"
								name="data"
								required
								className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-white invalid:border-(--secondary) invalid:text-white focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in"
							/>
						</div>
						<div className="flex flex-col gap-1 text-white font-bold">
							<label htmlFor="pedidos">Quantidade de Pedidos</label>
							<input
								type="text"
								placeholder="0"
								name="pedidos"
								required
								className="border-2 border-(--tertiary-dark) rounded-xl p-2 text-white invalid:border-(--secondary) invalid:text-white focus:border-(--primary-ex-light) focus:outline focus:outline-(--primary-ex-light) transition-all ease-in"
							/>
						</div>

						<button
							type="submit"
							className="rounded-xl text-white bg-(--tertiary) hover:bg-(--tertiary-dark) hover: w-1/2 py-2 flex justify-center transition-all ease-in font-bold mx-auto disabled:bg-(--auxiliary2-ex-dark) disabled:text-(--auxiliary2)">
							<span> Cadastrar </span>
						</button>
					</form>
				</div>
			</Popup>
		</>
	);
}

export default NewClient