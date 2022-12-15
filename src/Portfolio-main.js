import {katnip, Model} from "katnip";

// This file will be run on the server.
// Here we do things like:

// Add database models, see: https://katnip.tech/page/database
// katnip.addModel(/*...*/);

// Define api endpoints for the client to call, see: https://katnip.tech/page/api-endpoints
// katnip.addApi(/*...*/);

// Add realtime channels to push data to the client, https://katnip.tech/page/realtime-channels
// katnip.addChannel(/*...*/);

// Or hook into the system in various ways, and listen for events
// to customize the server side behaivour.
// katnip.addAction(/*...*/);

katnip.addSetting("menuHeader",{session: true});

class Project extends Model {
	static fields={
    id: "integer not null auto_increment primary key",
    title: "text",
    description: "text"
	};
}

katnip.addModel(Project);
katnip.createCrudApi(Project);

katnip.addApi("/api/getProjects",async ({},req)=>{
	let projects=await Project.findMany();

	return projects;
});