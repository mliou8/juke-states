app.config(function($stateProvider){
	$stateProvider
	.state('singleAlbum', {
		url: '/albums/:id',
		controller: 'AlbumCtrl',
		templateUrl: "../htmlTemplates/album.html"
	})
})