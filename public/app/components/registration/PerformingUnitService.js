/**
 * Created by ksmiller on 4/21/2015.
 */

angular.module('PerformingUnitService', []).factory('PerformingUnit', ['$http', function($http) {

    return {
        // call to get all units
        get : function() {
            return $http.get('/api/units');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new unit
        create : function(unitData) {
            return $http.post('/api/units', unitData);
        },

        // call to DELETE a unit
        delete : function(id) {
            return $http.delete('/api/units/' + id);
        }
    }

}]);