import ContatoCard from "../../components/contatocard/ContatoCard";


function Contato() {
  return (
            <div className="flex flex-col h-[80vh] mx-8 my-5">
			<div className="flex w-full h-full p-4 items-center justify-center">
				

				<div className="flex flex-wrap rounded-2xl bg-[#E77F7350] w-[90%] h-full">
                    <div className="flex flex-col w-full h-full items-center">
                    <div className="text-center w-full p-4">Contate um dos nossos desenvolvedores</div>
					
                    <div className="grid grid-cols-2 justify-items-center gap-6 w-[50%]">
                    <ContatoCard/>
                    <ContatoCard />
                    <ContatoCard />
                    <ContatoCard />
                    <ContatoCard />
                    </div>
                    </div>
                    
				</div>
			</div>
        </div>
		
	);
}

export default Contato