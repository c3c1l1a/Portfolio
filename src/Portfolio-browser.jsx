import {katnip, useApiFetch} from "katnip";
import { MediaSelect } from "../node_modules/katnip/packages/katnip-media/components/MediaSelect";

import Menu from './components/menu';
import Banner from './components/banner';
import ProjectList from './components/projectsList';

katnip.addTemplate("**",({children})=>{
	let menuInfo = katnip.useChannel("menuHeader");
  return (
  	<div className="PF-main">
  		<link href="output.css" rel="stylesheet" />
  		<Menu menuInfo={menuInfo}/>
  		<Banner />
  		<ProjectList />
  		{children}
  	</div>
  );
});

katnip.addAction("getMenuLocations",(items)=>{
	items.push({
		title: "Header Menu",
		setting: "menuHeader"
	});
})





katnip.createCrudUi("project",{
	columns:{
		title: {label: "Project Title"}
	},
  fields: {
    title: {label: "Project Title"},
    description: {label: "Description", type: "textarea"},
    tags: {label: "Project Tags (comma separated)"},
    img: {label: "Upload Image", type: MediaSelect}, 
    links: {label: "Links to project"}
  }
});