const app = angular.module('EventsApp', ['ui.router']);

// /* Routes */
// const routes = require('./routes');

// app.config($stateProvider => {
// 	for (let i = 0; i < routes.length; i++) {
// 		$stateProvider.state(routes[i]);
// 	}
// });

/* Controllers */
const controllers = [
	require('./controllers/music'),	
];

for (let i = 0; i < controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

// /* Components */
// const components = [
// 	require('./components/#'),
// ];

// for (let i = 0; i < components.length; i++) {
// 	app.component(components[i].name, components[i].func);
// }

/* Services */
const services = [
	require('./services/events'),
];

for (let i = 0; i < services.length; i++) {
	app.factory(services[i].name, services[i].func);
}