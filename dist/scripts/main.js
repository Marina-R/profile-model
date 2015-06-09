$(document).ready(function() {

	var user = new UserModel();
	//in-calss way to make a GET request:

	//user.fetch();

	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'home': 'profile',
			'editProfile': 'edit',
			'edit': 'edit'
		},
		profile: function() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function() {
			$('.page').hide();
			$('#edit').show();
			// in-class notes: 

			// $('#name').val(user.get('name'));
			// $('#inputEmail3').val(user.get('email'));
			// $('#role').val(user.get('role'));
		}
	});

	var app = new App();
	Backbone.history.start();
	
	var url = 'https://tiny-pizza-server.herokuapp.com/collections/marina/55760522a73f360300000149';	

	var name = user.get('name'); 
	var email = user.get('email');
	var role = user.get('role');

	$.get(url, function(data) {
		user.set(data);
		name = data.name;
		email = data.email;
		role = data.role;
	}, 'json');

	$('.editProfile').click(function(e) {
		app.navigate('edit');
		$('#name').attr('placeholder', name);
		$('#inputEmail3').attr('placeholder', email);
		$('#role').attr('placeholder', role);

	});

	changeProfile(user);
	user.on('change', changeProfile);

	function changeProfile(thisUser) {
		$('.userName').html(thisUser.get('name'));
		$('#job').html(thisUser.get('role'));	
	}

	$('#editProfileBtn').click(function(e) {
		e.preventDefault();
		// in-class notes

/* 
		var user = new UserModel({
			name: $('#name').val(),
			email: $('#inputEmail3').val(),
			role: $('#role').val(),
			password: $('#inputPassword3').val()
		});
		user.on('change', changeProfile);
		user.save();
	});
*/
		user.set({
			name: $('#name').val(),
			email: $('#inputEmail3').val(),
			role: $('#role').val(),
			password: $('#inputPassword3').val()
		});

		// in-class way to save data on server:
		//user.save(); ===> making POST or PUT requests depending on if we have a record or not

		$.ajax({
			url: url,
			method: 'put',
			data: {
				'name': $('#name').val(),
				'email': $('#inputEmail3').val(),
				'role': $('#role').val(),
				'password': $('#inputPassword3').val()
			}
		});
	});
	
})
