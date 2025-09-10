import { Envelope, GithubLogo, LinkedinLogoIcon } from "@phosphor-icons/react";

function ContatoCard() {
  return (
		<div className="flex flex-wrap items-center p-4 gap-4 rounded-2xl w-full" style={{ backgroundColor: 'var(--tertiary-figma)' }}>
  <img src="https://i.imgur.com/mpMO5hp.png" className="w-[5rem] h-[5rem]" />
  <div className="text-sm text-white w-full sm:w-auto">
    <p className="text-xl mb-2 text-black">NomeIntegrante</p>
    <p className="flex items-center gap-1">
      <LinkedinLogoIcon size={20} weight="fill" />
      linkedin@agata
    </p>
    <p className="flex items-center gap-1">
      <Envelope size={24} weight="fill" />
      agata@gmail.com
    </p>
    <p className="flex items-center gap-1">
      <GithubLogo size={24} weight="fill" />
      github/agata
    </p>
  </div>
</div>

	);
}

export default ContatoCard