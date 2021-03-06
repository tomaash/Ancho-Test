define(['util/messagingClient', 'util/ancho', 'logging'],
  function (client, ancho, logging) {

    var log = new logging(true, 'mainctrl', client);
    return ['$scope', '$location', '$http', function ($scope, $location, $http) {
      log.debug('mainctrl started');
      $scope.apis = ancho.api;

      // some variable for check if angular works ok
      $scope.popup_page = 'Main page';
      $scope.selectedApi = 0;
      $scope.selectApi = function (idx) {
        $scope.selectedApi = idx;
      };

      $scope.selectFun = function (idx) {
        $scope.selectedFun = idx;
        $scope.selectedParameters = $scope.apis[$scope.selectedApi].methods[idx];
      };

      // because this has happened asynchronously we've missed
      // Angular's initial call to $apply after the controller has been loaded
      // hence we need to explicitly call it at the end of our Controller constructor
      $scope.$apply();
    }];
  });