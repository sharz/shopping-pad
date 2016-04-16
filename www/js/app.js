
angular.module('shoppingPad', ['ionic','shoppingPad.controller', 'shoppingPad.service'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
       // abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:

      .state('tab.view', {
        url: '/view',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-view.html',
            controller: 'messageCtrl'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat.html',
            controller: 'ChatCtrl'
          }
        }
      })
      .state('tab.chat-details', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-details.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
      .state('tab.groups',{
        url:'/groups',
        views: {
          'tab-chats':{
            templateUrl:'templates/groups.html',
            controller:'groupCtrl'
          }
        }
      })
      .state('tab.newGroups',{
        url:'/new',
        views: {
          'tab-chats':{
            templateUrl:'templates/newGroup.html'
          }
        }
      })
      .state('tab.slide',{
        url:'/slide',
        views: {
          'tab-account':{
            templateUrl:'templates/slider.html',
            controller:'imageCtrl'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/chats');

  });
