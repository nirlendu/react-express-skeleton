/**
 * Copyright - Panally Internet
 */

var Enum = require('enum');

var ConstUrlsDev = {
	'Font' : 'https://fonts.googleapis.com/css?family=Lusitana',
	'Api' : 'http://localhost:9000/v1/',
	'Static': {
		'Host': 'http://localhost:3000',
		'Font': '/assets/fonts/',
		'Media': '/assets/img/',
		'Css': '/assets/css/',
		'Js': '/assets/js/',
		'App': {
			'Endpoint': '/assets/img/app/',
			'PlaceholderImage450x300' : '/assets/img/app/placeholder/placeholder.jpg',
			'PlaceholderImage540x350' : '/assets/img/app/placeholder/placeholder-2.jpg',
			'PlaceholderImage600x300' : '/assets/img/app/placeholder/placeholder-3.jpg',
		}
	},
	'Index': 'http://localhost:3000/api/index/'
}

module.exports = new Enum(ConstUrlsDev).toJSON();