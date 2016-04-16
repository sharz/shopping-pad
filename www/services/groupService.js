angular.module('shoppingPad').factory('Groups',function(){
  var groups= [{
    name:"All contents"
  },
    {
      name:"Coworkers"
    },
    {
      name:"Family"
    },
    {
      name:"Friends"
    },
    {
      name:"ICE"
    },
    {
      name:"United groups"
    }
  ];
  return{
    group:function(){
      return groups;
    },
    remove:function(data){
      groups.splice(groups.indexOf(data),1);
    }

  };
});
