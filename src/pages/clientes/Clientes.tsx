import ClientCard from "../../components/clientcard/ClientCard";

function Clientes() {
  return (
		<div className="flex flex-col h-[80vh] mx-8 my-4">
			<div className="flex justify-center gap-8 items-center bg-amber-200 w-full h-[5rem]">
				<div> Pesquisar </div>
				<div> Novo Cliente </div>
			</div>
			<div className="flex justify-between w-full h-full p-4">
				<div className="rounded-2xl bg-[#E77F7350] w-[25%] h-full"> </div>
				<div className="flex flex-wrap gap-6 gap-y-0 rounded-2xl bg-[#E77F7350] w-[73%] h-full">
					<ClientCard />
					<ClientCard />
					<ClientCard />
					<ClientCard />
				</div>
			</div>
		</div>
	);
}

export default Clientes