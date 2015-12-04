app.config(function($stateProvider){
	$stateProvider
	.state('singleArtist', {
		url: '/artist/:id',
		controller: 'ArtistCtrl',
		templateUrl: "../htmlTemplates/artist.html"
	})
})