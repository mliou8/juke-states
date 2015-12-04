app.config(function ($stateProvider) {
    // define a something state
    $stateProvider
    .state('albumList', {
        // that renders the following
         url: '/albums',
        controller: 'AlbumsCtrl',
        templateUrl: "../htmlTemplates/albums.html"
    });
});

