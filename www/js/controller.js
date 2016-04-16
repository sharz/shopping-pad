angular.module('shoppingPad.controller', [])


  .controller('ChatCtrl', function($scope, userServices,$ionicModal) {
    //$scope.contents = Contents.query();
    //Contents.get().success(function(response){
    //  $scope.contents=response;
    // console.log($scope.contents);
    console.log('inside controller');
    userServices.get().then(function(users){
      //users is an array of user objects
      $scope.contents=users;
      console.log($scope.contents);
    });
      $scope.remove = function(content) {
        userServices.remove(content);

    };
    $ionicModal.fromTemplateUrl('user_photo.html',{
      scope:$scope,
      animation:'slide-in-up'
    }).then(function(modal){
      $scope.modal=modal;
    });
    $scope.openModel=function(){
      $scope.modal.show();
    };
    $scope.closeModel=function(){
      $scope.modal.hide();
    };
    $scope.$on('$destroy',function(){
      $scope.modal.remove()
    });
    $scope.showUser=function(user){
      $scope.current_user=user;
      $scope.openModel();
    }
  })
  .controller('ChatDetailCtrl', function($scope, $stateParams, userServices) {
    console.log('details');

 //   $scope.contents = Contents.get({content_id: $stateParams.content_id});
 //alert($stateParams.content_id);

    $scope.content = userServices.getUser($stateParams.chatId);
    console.log($stateParams.chatId);
    console.log($scope.content)



  })
  .controller('groupCtrl',function($scope,Groups){
    $scope.groups=Groups.group();
  })
.controller('messageCtrl',function($scope,Message){
  $scope.messages=Message.message();
})
  .controller('imageCtrl',function($scope,userServices,$ionicSlideBoxDelegate){
    userServices.get().then(function(users){
      $scope.contents=users;
      console.log($scope.contents);
      alert('inside slider controller');
      $ionicSlideBoxDelegate.update();
    });
  });
