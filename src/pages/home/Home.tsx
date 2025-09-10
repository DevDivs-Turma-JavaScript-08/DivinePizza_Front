import { Link } from "react-router-dom";

function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-8 py-12">
			<div className="w-full max-w-4xl p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-white to-(--primary) border border-(--tertiary-ex-light)">
				<div className="text-center">
					<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">Bem-vindo ao CRM da sua Pizzaria!</h1>
					<p className="text-lg md:text-xl font-medium text-white mb-8 tracking-wide">Transforme clientes em fãs e impulsione suas vendas.</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
					<div className="text-gray-700 space-y-6">
						<p className="text-base leading-relaxed">
							Um CRM para pizzarias é essencial para organizar informações, acompanhar pedidos e fortalecer o relacionamento com seus clientes. Com
							ele, você pode facilmente identificar preferências, saber os horários de maior movimento e criar promoções personalizadas que realmente
							funcionam.
						</p>
						<p className="text-base leading-relaxed">
							Em um mercado tão competitivo, ter um CRM não é só uma ferramenta de gestão — é o **diferencial** para fidelizar sua clientela e fazer
							da sua pizzaria uma verdadeira referência de qualidade.
						</p>
						<div className="flex justify-center lg:justify-start pt-4">
							<Link to="/clientes">
								<button className="px-8 py-3 bg-white text-[#E77F73] font-bold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#E77F73]">
									Começar Agora
								</button>
							</Link>
						</div>
					</div>

					<div className="flex justify-center items-center">
						<img
							src="https://i.imgur.com/1q7aDER.png"
							alt="Interface do CRM para Pizzarias"
							className="rounded-xl shadow-2xl w-full h-auto transition-all duration-500 hover:scale-105"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
