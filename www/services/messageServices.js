angular.module('shoppingPad.service').
  factory('Message',function(){
    var messages=[{
      image:'img/007.gif',
      contact_Name:'sharvari shejwal',
      content_title:'Content title',
      Time_opened:'time opened'
    },
      {
        image:'img/ben.png',
        contact_Name:'pranali patil',
        content_title:'Content title',
        Time_opened:'time opened'
      }
    ];
    return {
      message:function(){
        return messages;
      }
    }
  });
