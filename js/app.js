const app = angular.module('BibliocacheApp', ['ui.router', 'ngMessages']).run(function ($rootScope, $state, $stateParams) {
});

/* Routes */
const routes = require('./routes');

app.config($stateProvider => {
	for (let i = 0; i < routes.length; i++) {
		$stateProvider.state(routes[i]);
	}
});

/* Controllers */
const controllers = [
	require('./controllers/#'),	
];

for (let i = 0; i < controllers.length; i++) {
	app.controller(controllers[i].name, controllers[i].func);
}

/* Components */
const components = [
	require('./components/#'),
];

for (let i = 0; i < components.length; i++) {
	app.component(components[i].name, components[i].func);
}

/* Services */
const services = [
	require('./services/#'),
];

for (let i = 0; i < services.length; i++) {
	app.factory(services[i].name, services[i].func);
}