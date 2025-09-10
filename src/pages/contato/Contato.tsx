import ContatoCard from "../../components/contatocard/ContatoCard";

function Contato() {
	const devs = [
		{
			id: 1,
			nome: "Agata",
			linkedin: "linkedin.com/in/",
			linkedinLink: "linkedin.com/in/agata",
			email: "agata@gmail.com",
			github: "agata",
			githubLink: "link",
			foto: "https://i.imgur.com/VcGJyBM.png",
		},
		{
			id: 2,
			nome: "Alex",
			linkedin: "linkedin.com/in/",
			linkedinLink: "linkedin.com/in",
			email: "alex@gmail.com",
			github: "alex",
			githubLink: "link",
			foto: "https://i.imgur.com/r9JoYhT.png",
		},
		{
			id: 3,
			nome: "Grazielle",
			linkedin: "linkedin.com/in",
			linkedinLink: "linkedin.com/in",
			email: "grazielle@gmail.com",
			github: "grazielle",
			githubLink: "link",
			foto: "https://i.imgur.com/Q1Z67IP.png",
		},
		{
			id: 4,
			nome: "Letícia",
			linkedin: "linkedin.com/in/",
			linkedinLink: "linkedin.com",
			email: "letícia@gmail.com",
			github: "letícia",
			githubLink: "link",
			foto: "https://i.imgur.com/U6lUbHW.png",
		},
		{
			id: 5,
			nome: "Lucas",
			linkedin: "linkedin.com/in/",
			linkedinLink: "linkedin.com/in/lucas",
			email: "lucas@gmail.com",
			github: "lucas",
			githubLink: "link",
			foto: "https://i.imgur.com/EuTNqNp.png",
		},
		{
			id: 6,
			nome: "Pedro",
			linkedin: "linkedin.com/in/",
			linkedinLink: "linkedin.com/in/pedro",
			email: "pedro@gmail.com",
			github: "pedro",
			githubLink: "link",
			foto: "https://i.imgur.com/0kpfncl.png",
		},
	];

	return (
		<div className="flex flex-col h-[80vh] mx-8 my-5 justify-center items-center">
			<div className="flex flex-wrap rounded-2xl bg-[#E77F7350] w-[90%] h-fit p-4 items-center justify-center">
				<div className="flex flex-col w-full h-full items-center">
					<div className="text-center w-full p-4"> Contate um dos nossos desenvolvedores </div>

					<div className="grid grid-cols-2 justify-items-center gap-y-4 gap-x-12 w-fit">
						{devs.map((d) => (
							
								<ContatoCard key={d.id} devs={d} />
							
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contato;
