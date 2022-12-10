import {katnip} from "katnip";

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

import Menu from './components/menu/menu';

katnip.addTemplate("**",({children})=>{
  return (
  	<div className="PF-main">
  		<link href="output.css" rel="stylesheet" />
  		<Menu />
  		hello... {children}
  	</div>
  );
});

katnip.addAction("getMenuLocations",(items)=>{
	items.push({
		title: "Header Menu",
		setting: "menuHeader"
	});
})