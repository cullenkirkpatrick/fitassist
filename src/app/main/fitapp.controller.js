(function() {
  'use strict';

  var baseURL = "http://localhost:3001";

  angular
    .module('fitApp')
    .controller('FitAppController', FitAppController);

  /** @ngInject */
  function FitAppController($http, $scope) {
    var fitApp = this;
    getUsers();
    getMovements();
    getWorkouts();

    /*===========USER FUNCTIONS===========*/
    function getUsers() {
      $http({
        method : "GET",
        url : baseURL + "/api/getUsers"
      }).then(function mySucces(response) {
          fitApp.userList = response.data;
      }, function myError(response) {
          fitApp.error = response.statusText;
          console.log("ERROR");
      });
    };

    /*=========MOVEMENT FUNCTIONS=========*/
    function getMovements() {
      $http({
        method : "GET",
        url : baseURL + "/api/getMovements"
      }).then(function mySucces(response) {
          fitApp.movementList = response.data;
      }, function myError(response) {
          fitApp.error = response.statusText;
          console.log("ERROR");
      });
    };

    fitApp.addMovement = function() {
      $http({
        method : "POST",
        url : baseURL + "/api/addMovement",
        data : {
          name: "Test Movement",
			    category: "Test category",
			    subcategory: "Test subcategory"
        }
      }).then(function mySucces(response) {
          fitApp.movementList = response.data;
      }, function myError(response) {
          fitApp.error = response.statusText;
          console.log("ERROR");
      });
      console.log("ADDED MOVEMENT");
    };

    /*==========WORKOUT FUNCTIONS=========*/
    function getWorkouts() {
      $http({
        method : "GET",
        url : baseURL + "/api/getWorkouts"
      }).then(function mySucces(response) {
          fitApp.workoutList = response.data;
      }, function myError(response) {
          fitApp.error = response.statusText;
          console.log("ERROR");
      });
    };
  };
})();
