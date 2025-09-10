import whatsLogo from '../../assets/whasappicon.svg';

function ClientCard() {
  return (
		<div className="flex items-center bg-(--primary-dark) rounded-2xl text-white w-fit h-fit">
			<img src="https://i.imgur.com/mpMO5hp.png" className="w-[5rem] h-[5rem]"></img>
			<div className="text-sm">
				<p className="font-bold text-xl mb-2"> Fulano 1</p>
				<p> Último Pedido: há 8 dias </p>
				<p> Quantidade de Pedidos: 8 </p>
				<div className="flex gap-1 items-center mt-2">
					<img src={whatsLogo} />
					<p>(11) 9 8974 -4561</p>
				</div>
			</div>
		</div>
	);
}

export default ClientCard