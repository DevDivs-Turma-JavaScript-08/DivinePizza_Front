import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer() {
  return (
		<div className="flex flex-col bg-(--tertiary) h-[10rem] text-white">
			<img src="https://i.imgur.com/hZ0mApa.png" className=""></img>
			<div className="flex items-center justify-between bg-(--tertiary) h-[10rem] text-white">
				<p className="ml-10">DivinePizza - 2025 - By DevDivs TM</p>
				<a href="https://github.com/DevDivs-Turma-JavaScript-08/DivinePizza_Front" target="_blank">
					<FontAwesomeIcon icon={faGithub} size="3x" color="white" />
				</a>
				<div className="flex flex-col items-center gap-1 mr-10">
					<p>Apoio</p>
					<div className="flex gap-1.5">
						<img src="https://i.imgur.com/rOvVUyo.png"></img>
						<img src="https://i.imgur.com/j087Ndq.png"></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer