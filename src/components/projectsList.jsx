import { useApiFetch } from 'katnip';

const ProjectList = () => {
	let projects=useApiFetch("/api/getProjects");

	if (!projects)
		return 'Loading...';

	console.log(projects);

	return (
		<div>
			<header>Featured projects</header>
			{projects.map((project)=>{
				return (
					<div>
						<img src={`/${project.img}`} alt="Porject image"/>
						<div>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<ul>
								{project.tags}
							</ul>
							<ul>
								{project.links}
							</ul>
						</div>
					</div>
				);
			})}

		</div>
	)
}

export default ProjectList;