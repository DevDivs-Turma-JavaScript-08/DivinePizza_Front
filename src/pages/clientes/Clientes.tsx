import { useState } from "react";
import ClientCard from "../../components/clientcard/ClientCard";
import NewClient from "../../components/newclientform/NewClient";

function Clientes() {
	const [searchTerm, setSearchTerm] = useState("");

  const client = [
    {
      id: 1,
      nome: "Fulano 1",
      ultimoPedido: "há 8 dias",
      qntPedidos: 10,
      telefone: "(11) 9 8915-7255",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      ultimoPedido: "há 2 dias",
      qntPedidos: 5,
      telefone: "(11) 9 8456-1234",
    },
    {
      id: 3,
      nome: "João Pereira",
      ultimoPedido: "há 15 dias",
      qntPedidos: 12,
      telefone: "(11) 9 9987-6543",
    },
    {
      id: 4,
      nome: "Carla Santos",
      ultimoPedido: "há 30 dias",
      qntPedidos: 3,
      telefone: "(11) 9 9123-4567",
    },
    {
      id: 5,
      nome: "Ricardo Lima",
      ultimoPedido: "há 7 dias",
      qntPedidos: 8,
      telefone: "(11) 9 9345-6789",
    },
    {
      id: 6,
      nome: "Fernanda Souza",
      ultimoPedido: "há 1 dia",
      qntPedidos: 20,
      telefone: "(11) 9 8765-4321",
    },
    {
      id: 7,
      nome: "Gabriel Almeida",
      ultimoPedido: "há 3 dias",
      qntPedidos: 6,
      telefone: "(11) 9 9234-5678",
    },
    {
      id: 8,
      nome: "Juliana Costa",
      ultimoPedido: "há 12 dias",
      qntPedidos: 9,
      telefone: "(11) 9 9345-1234",
    },
    {
      id: 9,
      nome: "Paulo Henrique",
      ultimoPedido: "há 60 dias",
      qntPedidos: 2,
      telefone: "(11) 9 9876-5432",
    },
    {
      id: 10,
      nome: "Beatriz Martins",
      ultimoPedido: "há 5 dias",
      qntPedidos: 14,
      telefone: "(11) 9 9123-9876",
    },
  ];
  

	return (
		<div className="flex flex-col h-fit mx-8 my-4">
			<div className="flex justify-center gap-2 items-center w-full h-fit">
				<div className="relative" id="input">
					<input
						placeholder="Buscar Cliente..."
						className="block w-full text-sm h-10 px-4 text-(--tertiary-ex-dark) bg-white rounded-2xl border border-(--primary-ex-light) appearance-none focus:outline  focus:outline-(--primary-ex-dark) focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px] transition-all ease-in-out hover:border-(--primary)"
						id="floating_outlined"
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<label
						className="rounded-xl peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-(--primary-dark) data-[disabled]:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 text-white"
						htmlFor="floating_outlined">
						Nome do Cliente
					</label>
					<div className="absolute top-2 right-3">
						<svg xmlns="http://www.w3.org/2000/svg" fill="var(--primary-ex-dark)" viewBox="0 0 24 24" height="24" width="24">
							<path d="M10.979 16.8991C11.0591 17.4633 10.6657 17.9926 10.0959 17.9994C8.52021 18.0183 6.96549 17.5712 5.63246 16.7026C4.00976 15.6452 2.82575 14.035 2.30018 12.1709C1.77461 10.3068 1.94315 8.31525 2.77453 6.56596C3.60592 4.81667 5.04368 3.42838 6.82101 2.65875C8.59833 1.88911 10.5945 1.79039 12.4391 2.3809C14.2837 2.97141 15.8514 4.21105 16.8514 5.86977C17.8513 7.52849 18.2155 9.49365 17.8764 11.4005C17.5979 12.967 16.8603 14.4068 15.7684 15.543C15.3736 15.9539 14.7184 15.8787 14.3617 15.4343C14.0051 14.9899 14.0846 14.3455 14.4606 13.9173C15.1719 13.1073 15.6538 12.1134 15.8448 11.0393C16.0964 9.62426 15.8261 8.166 15.0841 6.93513C14.3421 5.70426 13.1788 4.78438 11.81 4.34618C10.4412 3.90799 8.95988 3.98125 7.641 4.55236C6.32213 5.12348 5.25522 6.15367 4.63828 7.45174C4.02135 8.74982 3.89628 10.2276 4.28629 11.6109C4.67629 12.9942 5.55489 14.1891 6.75903 14.9737C7.67308 15.5693 8.72759 15.8979 9.80504 15.9333C10.3746 15.952 10.8989 16.3349 10.979 16.8991Z"></path>
							<rect transform="rotate(-49.6812 12.2469 14.8859)" rx="1" height="10.1881" width="2" y="14.8859" x="12.2469"></rect>
						</svg>
					</div>
				</div>

        <NewClient />
				
			</div>

			<div className="flex justify-between w-full h-full p-4">
				<div className="rounded-2xl bg-[#E77F7350] w-[25%] h-[500px] content-start p-4 overflow-auto scrollbar">
					<h3 className="text-white font-semibold text-lg mb-3 cursor-default">Filtro de Clientes</h3>
					<ul className="space-y-2 text-sm text-gray-600">
						<li>
							<details open className="group">
								<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Geral</summary>
								<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-40 group-open:opacity-100">
									<ul className="ml-4 mt-1 space-y-1 text-(--tertiary-ex-dark)">
										<li className="cursor-pointer hover:text-(--tertiary)">Todos</li>
										<li className="cursor-pointer hover:text-(--tertiary)">Ativos (último pedido &lt; 30 dias)</li>
										<li className="cursor-pointer hover:text-(--tertiary)">Inativos (último pedido &gt; 90 dias)</li>
									</ul>
								</div>
							</details>
						</li>

						<li>
							<details className="group">
								<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Pedidos</summary>
								<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-96 group-open:opacity-100">
									<ul className="ml-4 mt-1 space-y-2">
										<li>
											<details className="group">
												<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">
													Quantidade de Pedidos
												</summary>
												<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-32 group-open:opacity-100">
													<ul className="ml-4 mt-1 space-y-1">
														<li className="cursor-pointer hover:text-(--tertiary)">1º pedido</li>
														<li className="cursor-pointer hover:text-(--tertiary)">2-5 pedidos</li>
														<li className="cursor-pointer hover:text-(--tertiary)">6-10 pedidos</li>
														<li className="cursor-pointer hover:text-(--tertiary)">+10 pedidos</li>
													</ul>
												</div>
											</details>
										</li>

										<li>
											<details className="group">
												<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Último Pedido</summary>
												<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-32 group-open:opacity-100">
													<ul className="ml-4 mt-1 space-y-1">
														<li className="cursor-pointer hover:text-(--tertiary)">Últimos 7 dias</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Últimos 30 dias</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Mais de 90 dias</li>
													</ul>
												</div>
											</details>
										</li>

										<li>
											<details className="group">
												<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">
													Pedidos até Cashback/Prêmio
												</summary>
												<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-32 group-open:opacity-100">
													<ul className="ml-4 mt-1 space-y-1">
														<li className="cursor-pointer hover:text-(--tertiary)">Faltam 1–2</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Faltam 3–5</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Faltam +5</li>
													</ul>
												</div>
											</details>
										</li>
									</ul>
								</div>
							</details>
						</li>

						<li>
							<details className="group">
								<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Preferências</summary>
								<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-72 group-open:opacity-100">
									<ul className="ml-4 mt-1 space-y-2">
										<li>
											<details className="group">
												<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Sabor Favorito</summary>
												<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-40 group-open:opacity-100">
													<ul className="ml-4 mt-1 space-y-1">
														<li className="cursor-pointer hover:text-(--tertiary)">Calabresa</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Marguerita</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Portuguesa</li>
														<li className="cursor-pointer hover:text-(--tertiary)">4 Queijos</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Outros</li>
													</ul>
												</div>
											</details>
										</li>

										<li>
											<details className="group">
												<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Canal mais utilizado</summary>
												<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-32 group-open:opacity-100">
													<ul className="ml-4 mt-1 space-y-1">
														<li className="cursor-pointer hover:text-(--tertiary)">WhatsApp</li>
														<li className="cursor-pointer hover:text-(--tertiary)">App próprio</li>
														<li className="cursor-pointer hover:text-(--tertiary)">iFood</li>
														<li className="cursor-pointer hover:text-(--tertiary)">Telefone</li>
													</ul>
												</div>
											</details>
										</li>
									</ul>
								</div>
							</details>
						</li>

						<li>
							<details className="group">
								<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Feedback (Estrelas)</summary>
								<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-32 group-open:opacity-100">
									<ul className="ml-4 mt-1 space-y-1">
										<li className="cursor-pointer hover:text-(--tertiary)">5 estrelas</li>
										<li className="cursor-pointer hover:text-(--tertiary)">4 estrelas</li>
										<li className="cursor-pointer hover:text-(--tertiary)">3 estrelas</li>
										<li className="cursor-pointer hover:text-(--tertiary)">1–2 estrelas</li>
									</ul>
								</div>
							</details>
						</li>

						<li>
							<details className="group">
								<summary className="cursor-pointer font-medium text-(--primary-ex-dark) hover:text-(--primary)">Contato</summary>
								<div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-open:max-h-32 group-open:opacity-100">
									<ul className="ml-4 mt-1 space-y-1">
										<li className="cursor-pointer hover:text-(--tertiary)">WhatsApp cadastrado</li>
										<li className="cursor-pointer hover:text-(--tertiary)">E-mail cadastrado</li>
										<li className="cursor-pointer hover:text-(--tertiary)">Endereço completo cadastrado</li>
									</ul>
								</div>
							</details>
						</li>
					</ul>
				</div>

				<div className="p-4 flex content-start flex-wrap gap-4 gap-y-4 rounded-2xl bg-[#E77F7350] w-[73%] h-fit justify-center">
					{client.map((c) => (
            <ClientCard key={c.id} client={c} />
          ))}
				</div>
			</div>
		</div>
	);
}

export default Clientes;
