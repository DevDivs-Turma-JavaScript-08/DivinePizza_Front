import whatsLogo from "../../assets/whasappicon.svg";

type Client = {
	id: number;
	nome: string;
	ultimoPedido: string;
	qntPedidos: number;
	telefone: string;
};

function ClientCard({ client }: { client: Client }) {
	return (
		<div className="flex items-center p-3 gap-4 bg-(--primary-dark) rounded-2xl text-white w-[270px] h-[150px]">
			<img src="https://i.imgur.com/mpMO5hp.png" alt={client.nome} className="w-[5rem] h-[5rem] rounded-full object-cover" />
			<div className="text-sm">
				<p className="font-bold text-xl mb-2 text-nowrap">{client.nome}</p>
				<p>Último Pedido: {client.ultimoPedido}</p>
				<p>Quant. de Pedidos: {client.qntPedidos}</p>
				<div className="flex gap-1 items-center mt-2">
					<img src={whatsLogo} alt="WhatsApp" />
					<p>{client.telefone}</p>
				</div>
			</div>
		</div>
	);
}

export default ClientCard;
