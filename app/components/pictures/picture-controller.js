app.controller('PictureController', function($scope, $stateParams, PictureService){
   
   PictureService.setRandomImage();
   PictureService.getImage();
   
   console.log(PictureService)
   
   
   $scope.getPicture = function(){
       return PictureService.getImage();
   }
});