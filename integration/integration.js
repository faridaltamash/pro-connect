angular.module('integration',[])

.factory('getUserDetails', ['$http', function ($http) {
    return function (requestObj, callBackFunc) {
        
        $http.get('assets/json/getInitdata.json')
		.success(function (data) {
		    callBackFunc(data);
		})
		.error(function(){
			console.log('error in get get-product properties');
		});
	}
}])

.factory('getPrimarySkill', ['$http', function ($http) {
    return function (requestObj, callBackFunc) {
        
        $http.get('assets/json/primarySkills.json')
		.success(function (data) {
		    callBackFunc(data);
		})
		.error(function(){
			console.log('error in get apple-details properties');
		});
	}
}])

.factory('getCart', ['$http', function ($http) {
    return {
    	cart:[]
    }
}])