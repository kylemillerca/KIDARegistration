angular.module('HeaderCtrl', ['ngRoute']).controller("headerController", function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

});