app.controller("weatherController", function($scope, $state, $stateParams, weatherService){
  $scope.temp = "";
  $scope.forecast = "";
  $scope.location = "";
  $scope.resultsPresent = false;
  
  $scope.getWeather = function(){
    weatherService.weatherCall($scope.location)
    .then(function(response){
      console.log(response)
      $scope.temp = response.data.currently.temperature;
      $scope.forecast = response.data.hourly.summary;
      $scope.weekly = response.data.daily.summary;
      $scope.humidity = response.data.currently.humidity;
      $scope.rain = response.data.currently.precipProbability;
      $scope.resultsPresent = true;
      
    })
    .catch(function(error){
      console.log(error)
    })
    $scope.resultsPresent = true;
  }
})