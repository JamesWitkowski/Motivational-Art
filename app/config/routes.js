app.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
    .state('home', {
          url: '/home',
          
          templateUrl: 'app/components/pictures/pictures.html'
    })
    
    .state('view2', {
          url: '/view2',
          controller: 'PictureController',
          templateUrl: 'app/components/pictures/picture.html'
    })
    
    
})