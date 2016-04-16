angular.module('shoppingPad.service',[])
.factory('Groups',function(){
    alert('hggdnjhdfg');
    var groups=[{
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
      }
    };
  });
