import {katnip, useApiFetch} from "katnip";
import { MediaSelect } from "../node_modules/katnip/packages/katnip-media/components/MediaSelect";

// This file will be run in the browser.
// Here we do things like:

// Add custom elements, see: https://katnip.tech/page/custom-elements
// katnip.addElement(/*...*/);

// Add routes, see: https://katnip.tech/page/creating-routes
// katnip.addRoute(/*...*/);

// Add page templates.
// katnip.addTemplate(/*...*/);

// We can communicate with the server using
// katnip.apiFetch(/*...*/); or katnip.useApiFetch(/*...*/);

// Or consume data from a realtime channel, see: https://katnip.tech/page/realtime-channels
// katnip.useChannel(/*...*/);

// Hook into the system in various ways, listen for events
// to customize the client side behaivour.
// katnip.addAction(/*...*/);

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

function MyControl(props) {
  function onClick(e) {
//  	e.stopPropagation();
//  	e.preventDefault();
  	console.log(e);
  }

	return <button type="button" onclick={onClick}>hello</button>;
//	return MediaSelect(props);
}

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