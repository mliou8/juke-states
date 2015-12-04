app.config(function ($stateProvider) {
    // define a something state
    $stateProvider
    .state('artistList', {
        // that renders the following
         url: '/artists',
        controller: 'ArtistsCtrl',
        templateUrl: "../htmlTemplates/artists.html"
    });
});