
var app=angular.module("registrationApp", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when("/",
        {
            templateUrl: "app/components/registrationForm.html",
            controller: "registrationFormCtrl"
        });
}]);

app.controller("registrationFormCtrl", ['$scope', '$http', function($scope, $http){
    $scope.submit = function() {
        $http.post('/api/people', this.primaryContact)
            .success(function (director) {
                //$http.post('/api/people', this.secondaryContact)
                //    .success(function (staff) {
                //        $http.post('/api/units', this.unit)
                //            .success(function (unitInfo) {
                //                console.log(JSON.stringify(director) + "<br>" + JSON.stringify(staff) + "<br>" + JSON.stringify(unitInfo));
                //            }
                //                .error(function (err) {
                //                    console.log('Error: ' + err);
                //                }));
                //    }).error(function (err) {
                //        console.log('Error: ' + err);
                //
                //    });
            }).error(function (err) {
                console.log('Error: ' + err);
            });
    };

    $scope.registration = {
        "unit": null,
        "postmark": "",
        "waitListed": "false"
    };

    $scope.unit  = {
        "discipline": "default"
    };

    $scope.primaryContact = {
        roles:["unitDirector"]
    }

    $scope.secondaryContact = {
        roles:["unitStaff"]
    }

    $scope.classificationLists = {
        "classifications": ["Scholastic", "Independent"],
        "disciplines": ["Color Guard", "Moving Percussion","Percussion Ensemble", "Marching Winds", "Majorette", "Dance Team"],
        "competitiveClasses":{
            "colorGuard" : ["Middle School Cadet", "Middle School Competitive", "Bronze", "Gold", "White", "Blue", "Platinum", "World", "Senior"],
            "movingPercussion": ["Middle School", "Gold", "White", "Blue", "Platinum", "World", "Senior"],
            "percussionEnsemble" : ["Middle School", "Gold", "White", "Blue", "Platinum", "World", "Senior"],
            "majorette" : ["Junior", "Gold", "White", "Blue", "Senior"],
            "danceTeam" : ["Open"],
            "marchingWinds" : ["Open"],
            "default" : ["Open"]
        }
    };
    $scope.states = ["MD", "PA", "VA", "WV", "DE", "NJ", "NY"];

    $scope.competitions = [
        {
            "competitionName": "KIDA Season Kickoff",
            "competitionHost": "East Pennsboro HS",
            "competitionDate": "2015-01-24"
        },
        {
            "competitionName": "Buckskins Review",
            "competitionHost": "Conestoga Valley HS",
            "competitionDate": "2015-01-31"
        },
        {
            "competitionName": "Canner Classic",
            "competitionHost": "Biglerville HS",
            "competitionDate": "2015-02-07",
            "competitionFull": true
        },
        {
            "competitionName": "",
            "competitionHost": "Waynesboro HS",
            "competitionDate": "2015-02-14"
        },
        {
            "competitionName": "",
            "competitionHost": "Greencastle-Antrim HS",
            "competitionDate": "2015-02-14",
            "competitionFull": true
        },
        {
            "competitionName": "",
            "competitionHost": "Boonsboro HS",
            "competitionDate": "2015-02-21"
        },
        {
            "competitionName": "Echoes in the Dome",
            "competitionHost": "Cumberland Valley HS",
            "competitionDate": "2015-02-21"
        },
        {
            "competitionName": "Rebel Classic",
            "competitionHost": "South Hagerstown HS",
            "competitionDate": "2015-02-28"
        },
        {
            "competitionName": "",
            "competitionHost": "Tuscarora HS",
            "competitionDate": "2015-02-28"
        },
        {
            "competitionName": "",
            "competitionHost": "Urbana HS",
            "competitionDate": "2015-03-07"
        },
        {
            "competitionName": "",
            "competitionHost": "Gov. Thomas Johnson HS",
            "competitionDate": "2015-03-14"
        },
        {
            "competitionName": "Art in Motion",
            "competitionHost": "Mechanicsburg HS",
            "competitionDate": "2015-03-14",
            "competitionFull": true
        },
        {
            "competitionName": "",
            "competitionHost": "North Hagerstown HS",
            "competitionDate": "2015-03-21",
            "competitionFull": true
        },
        {
            "competitionName": "",
            "competitionHost": "Red Land HS",
            "competitionDate": "2015-03-21"
        },
        {
            "competitionName": "KIDA Guard, Majorette, and Dance Championships",
            "competitionHost": "Chambersburg HS",
            "competitionDate": "2015-03-28"
        },
        {
            "competitionName": "KIDA Percussion and Winds Championships",
            "competitionHost": "Chambersburg HS",
            "competitionDate": "2015-03-29"
        }

    ];

    $scope.toCamelCase = function(input) {
        {
            if (input) {
                return input.toLowerCase().replace(/\s(.)/g, function (match, group1) {
                    return group1.toUpperCase();
                });
            }
        }
    }
}]);
