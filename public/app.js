var app = angular.module("weatherApp", ["ui.router"])

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  
  $stateProvider
  .state("home",{
    url: "/",
    templateUrl:"./frontEndViews/home.html",
    controller: "weatherController"
  })
})