define(['util/messagingClient', 'logging'],
  function (client, logging) {

    var log = new logging(true, 'popupctrl', client);
    return ['$scope', '$location', '$http', function ($scope, $location, $http) {
      log.debug('popupctrl started');
      $scope.apis = {
        Extension : {
          sendRequest: ['extensionId', 'request', 'callback'],
          sendMessage: ['extensionId', 'message', 'callback'],
          getUrl: ['path']
        },
        Tabs : {
          sendRequest: ['extensionId', 'request', 'callback'],
          sendMessage: ['extensionId', 'message', 'callback'],
          getCurrent: ['callback']
        },
        Windows : {
          getCurrent: ['getInfo', 'callback'],
          create: ['createData', 'callback'],
          update: ['windowId', 'updateInfo', 'callback']
        }
      };
      $scope.keys = function (obj) {
        return _.keys(obj);
      };

      // some variable for check if angular works ok
      $scope.popup_page = 'Popup page';
      $scope.selectedApi = 0;
      $scope.selectApi = function (api) {
        $scope.selectedApi = api;
      };

      $scope.selectFun = function (fun) {
        $scope.selectedFun = fun;
        $scope.selectedParameters = $scope.apis[$scope.selectedApi][fun];
      };

      // because this has happened asynchronously we've missed
      // Angular's initial call to $apply after the controller has been loaded
      // hence we need to explicitly call it at the end of our Controller constructor
      $scope.$apply();
    }];
  });