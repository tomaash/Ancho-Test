define(['util/messagingClient', 'logging'],
  function (client, logging) {

    var log = new logging(true, 'popupctrl', client);
    return ['$scope', '$location', '$http', function ($scope, $location, $http) {
      log.debug('popupctrl started');
      $scope.apis = [
        ['Extension', ['sendRequest', 'sendMessage', 'getUrl']],
        ['Extension1', ['sendRequest1', 'sendMessage', 'getUrl']],
        ['Extension2', ['sendRequest2', 'sendMessage', 'getUrl']],
        ['Extension3', ['sendRequest3', 'sendMessage', 'getUrl']]
      ]

      // some variable for check if angular works ok
      $scope.popup_page = 'Popup page';
      $scope.selectedApi = 0;
      $scope.selectApi = function (idx) {
        $scope.selectedApi = idx;
      };

      $scope.selectFun = function (idx) {
        $scope.selectedFun = idx;
        var api = $scope.apis[$scope.selectedApi]
        $scope.selectedTemplate = 'templates/partials/'+api[0]+"_"+api[1][idx]+".html"
      };

      // because this has happened asynchronously we've missed
      // Angular's initial call to $apply after the controller has been loaded
      // hence we need to explicitly call it at the end of our Controller constructor
      $scope.$apply();
    }];
  });