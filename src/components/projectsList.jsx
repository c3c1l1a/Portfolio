import { useApiFetch } from 'katnip';

const ProjectList = () => {
	let projects=useApiFetch("/api/getProjects");

	if (!projects)
		return 'Loading...';


	return (
		<div>
			<header>Featured projects</header>
			{projects.map((project)=>{
				return (
					<div>
						<img src={`${project.img}`} alt="Porject image"/>
						<div>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<ul>
								{project.tags.map((tag)=>{
									return (<li>{tag}</li>);
								})}
							</ul>
							<ul>
								{project.links.map((link)=>{
									return (<li><a href={`${link.src}`}>{link.name}</a></li>);
								})}
							</ul>
						</div>
					</div>
				);
			})}

		</div>
	)
}

export default ProjectList;