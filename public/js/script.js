var app = angular.module('olympicApp', [])

app.controller("OlympicController", function($scope, $http){

  $scope.generator = function(){
    var olympicsList = [];
    $scope.kurt = "audio/KurtAngle.mp3";
    
    function handleSuccess(response) {
      olympicsList.push(response.data)
      console.log("Success", response);
    }

    function handleFailure(response) {
      console.log("failure", response)
    }

    $http.get('allFive/archery').then(handleSuccess, handleFailure);
    $http.get('allFive/boxing').then(handleSuccess, handleFailure);
    $http.get('allFive/triathlon').then(handleSuccess, handleFailure);
    $http.get('allFive/pingpong').then(handleSuccess, handleFailure);
    $http.get('allFive/weightlifting').then(handleSuccess, handleFailure);
    console.log(olympicsList);

    $scope.olympicsList = olympicsList;

  }

});
