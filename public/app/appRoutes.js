angular.module('appRoutes',[]).config(['$routeProvider',function($routeProvider){
    $routeProvider.when("/",
        {
            templateUrl: "app/components/landingPage/landingPage.html",
            controller: "landingPageController"
        })

        .when("/register",
        {
        templateUrl: "app/components/registration/registrationForm.html",
            controller: "registrationFormController"
        })

        .otherwise({
            redirectTo: '/'
        });

}]);