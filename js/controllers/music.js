module.exports = {
	name: 'MusicController',
	func($scope, EventsService) {
		
		$scope.events = EventsService.getEvents();
	},
};