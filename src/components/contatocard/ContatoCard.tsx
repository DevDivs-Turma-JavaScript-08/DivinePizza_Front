import { Envelope, GithubLogo, LinkedinLogoIcon } from "@phosphor-icons/react";

function ContatoCard() {
  return (
		<div className="flex items-center p-4 gap-4 bg-(--tertiary-figma) rounded-2xl w-[100%]">
			<img src="https://i.imgur.com/mpMO5hp.png" className="w-[5rem] h-[5rem]"></img>
			<div className="text-sm text-white w-auto">
				<p className=" text-xl mb-2 text-black"> NomeIntegrante</p>
				<p className="flex items-center gap-1">
                    <LinkedinLogoIcon size={20} weight="fill" /> 
                    linkedin@agata </p>

				<p className="flex items-center gap-1">
                    <Envelope size={24} weight="fill" />
                     agata@gmail.com </p>

                <p
                className="flex items-center gap-1">
                    <GithubLogo size={24} weight="fill" />
                    github/agata
                </p>
			</div>
		</div>
	);
}

export default ContatoCard