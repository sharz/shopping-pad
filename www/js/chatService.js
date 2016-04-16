angular.module('shoppingPad.service',[]).
  factory('userServices',['$http',function($http){
    var users = [];

    return {
      get: function(){
        return $http.get("http://54.86.64.100:3000/api/v1/content/content-info").then(function(response){
          users = response.data;
          return users;
        });
      },
      remove:function(content){
        users.splice(users.indexOf(content),1);
      },
      getUser:function(chatId)
      {
        for(var i=0; i<users.length;i++){
          if(users[i].content_id === parseInt(chatId)){
            return users[i];

          }
        }
        return null;
      }
    }
  }]);
