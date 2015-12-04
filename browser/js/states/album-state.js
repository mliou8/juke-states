app.config(function($stateProvider){
	$stateProvider
	.state('singleAlbum', {
		url: '/albums/:id',
		controllers: 'AlbumCtrl',
		templateUrl: "../htmlTemplates/album.html"
	})
})