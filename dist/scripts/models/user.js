var UserModel = Backbone.Model.extend({
	//in-class way:

	//urlRoot: 'https://tiny-pizza-server.herokuapp.com/collections/marina/55760522a73f360300000149',
	//idAttribute: '_id',	===> setting the name of attr id (specifying that the name of id we are going to use is going to be '_id')

	defaults: {
		//_id: 'jhkhgllgl',
		name: 'Marcus Doe',
		email: 'mdoe@gmail.com',
		role: 'Developer'
	}
});