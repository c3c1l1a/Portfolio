import { useApiFetch } from 'katnip';

const ProjectList = () => {
	let projects=useApiFetch("/api/getProjects");

	if (!projects)
		return 'Loading...';

	return (
		<div className="projects-section">
			<h2 class="projects-section-header">Featured Projects</h2>
			{projects.map((project, index)=>{
				return (
					<div className="project-card">
						<img src={`/${project.img}`} alt="Porject image"/>
						<div className="project-info">
							<p className="project-num">{(index + 1).toString().padStart(2, "0")}.</p>
							<h3 className="project-name">{project.title}</h3>
							<p className="project-decription">{project.description}</p>
							<ul className="project-tags">
								{project.tags.split(',').map((tag)=>{
									return (<li>{tag}</li>);
								})}
							</ul>
							<ul>
								<li>Github</li>
								<li>Live link</li>
							</ul>
						</div>
					</div>
				);
			})}
		</div>
	)
}

export default ProjectList;