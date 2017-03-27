module.exports = {
	name: 'EventsService',
	func() {
		
		let events = [
			{
				name: 'event1',
				thing: 'event1 thing',
			},
			{
				name: 'event2',
				thing: 'event2 thing',
			},
		];
		
		
		return {
			getEvents() {
				return events;
			},
		};
	},
};