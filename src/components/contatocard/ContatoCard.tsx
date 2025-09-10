import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { Envelope, GithubLogo, LinkedinLogoIcon } from "@phosphor-icons/react";
type Devs = {
	id: number;
	nome: string;
	linkedin: string;
	linkedinLink: string;
	email: string;
	github: string;
	githubLink: string;
	foto: string;
};

function ContatoCard({ devs }: { devs: Devs }) {
	return (
		<div className="flex flex-wrap items-center p-4 gap-4 rounded-2xl w-[290px] bg-[#589D5F]">
			<img src={devs.foto} className="w-[5rem] h-[5rem] rounded-full object-cover" />
			<div className="text-sm text-white w-full sm:w-auto">
				<p className="text-xl mb-2 text-black font-bold">{devs.nome}</p>
				<p className="flex items-center gap-1">
					<FontAwesomeIcon icon={faLinkedin} />
					{devs.linkedin}
				</p>
				<p className="flex items-center gap-1">
					<FontAwesomeIcon icon={faEnvelope} />
					{devs.email}
				</p>
				<p className="flex items-center gap-1">
					<FontAwesomeIcon icon={faGithub} />
					github/{devs.github}
				</p>
			</div>
		</div>
	);
}

export default ContatoCard;
