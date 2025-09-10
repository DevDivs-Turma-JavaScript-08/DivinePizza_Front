function InfoClientes() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-red-300 to-red-600 p-26 ">
			<div className="grid grid-cols-4 gap-6">
				<div className="col-span-1 bg-red-900 text-white rounded-2xl p-4 shadow-md">
					<div className="flex flex-col mt-4 gap-4 items-center text-left">
						<div className="bg-white rounded-full w-35 h-35 mt-5"></div>
						<h3 className="font-bold mb-2 text-center">Nome do cliente:</h3>

						<div className="text-left w-full max-w-xs">
							<p>Email</p>
							<p>Telefone</p>
							<p>Endereco</p>
						</div>

						<div className="mt-4">
							<h3 className="font-bold mb-2">Acompanhamento do pedido:</h3>
							<button className="bmt-6 bg-red-700 hover:bg-green-600 px-4 py-2 rounded-lg w-full">Sem pedido no momento</button>
						</div>

						<button className="mt-6 bg-red-700 hover:bg-green-600 px-4 py-2 rounded-lg w-full">Editar Informações</button>
					</div>
				</div>

				<div className="col-span-3 flex flex-col gap-6">
					<div className="grid grid-cols-4 gap-4">
						<div className="bg-red-900 text-white rounded-xl p-4 text-center">
							<p className="text-2xl font-bold">100</p>
							<p className="text-sm">Quantidade de pedidos</p>
						</div>
						<div className="bg-red-900 text-white rounded-xl p-4 text-center">
							<p className="text-xl">dd/mm/aaa</p>
							<p className="text-sm">Último Pedido</p>
						</div>
						<div className="bg-red-900 text-white rounded-xl p-4 text-center">
							<p className="text-xl">Sabor</p>
							<p className="text-sm">Sabor favorito</p>
						</div>
						<div className="bg-red-900 text-white rounded-xl p-4 text-center">
							<p className="text-xl">Canal</p>
							<p className="text-sm">Canal mais utilizado</p>
						</div>
					</div>

					<div className="grid grid-cols-3 gap-4">
						<div className="col-span-2 bg-red-900 rounded-xl h-56 p-4 text-white">Quantidade de pedidos (gráfico aqui)</div>
						<div className=" flex flex-col bg-red-900 rounded-xl items-center justify-center h-56 text-white gap-2">
							<div className="bg-white rounded-full w-35 h-35 "></div>
							Cashback / Prêmio
						</div>
					</div>

					<div className="bg-red-900 rounded-xl p-4 text-white">
						<h3 className="font-bold mb-4">Últimos pedidos</h3>
						<div className="flex justify-between border-b border-red-700 py-2">
							<p className="flex items-center gap-3">
								{" "}
								<div className="bg-white rounded-full w-10 h-10 "></div> Sabor da Pizza
							</p>
							<p>Observações no pedido</p>
							<p>★★★★★</p>
						</div>

						<div className="flex justify-between border-b border-red-700 py-2">
							<p className="flex items-center gap-3">
								{" "}
								<div className="bg-white rounded-full w-10 h-10 "></div> Sabor da Pizza
							</p>
							<p>Observações no pedido</p>
							<p>★★★★★</p>
						</div>

						<div className="flex justify-between border-b border-red-700 py-2">
							<p className="flex items-center gap-3">
								{" "}
								<div className="bg-white rounded-full w-10 h-10 "></div> Sabor da Pizza
							</p>
							<p>Observações no pedido</p>
							<p>★★★★★</p>
						</div>

						<button className="mt-3 underline">Ver mais</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default InfoClientes;
