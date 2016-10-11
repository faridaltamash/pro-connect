angular.module('angularDemo',[
	'integration',
	'ngRoute',
	])
/*.config(['$routeProvider',function($routeProvider){
		$routeProvider.when('/prod1',{
			templateUrl: 'templates/app121.tpl.html',
			controller:  'productApp'
		}).when('/prod2',{
			templateUrl: 'templates/techLogin1.tpl.html',
			controller:  'productGrape'
		}).otherwise({redirectTo:'/'});
}]);*/
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when("/home", {
            templateUrl: 'templates/home.tpl.html',   
                 
        }).when("/login", {
            templateUrl: 'templates/login.tpl.html',   
                 
        }).when('/profile',{
			templateUrl: 'templates/app121.tpl.html',
		}).otherwise({redirectTo : '/home'})
		
    }
])
.controller('myAppCtrl',['$scope','$rootScope','$location','getUserDetails','getCart',function($scope,$rootScope,$location,getUserDetails,getCart){
	$scope.subTotal = 0;
	getUserDetails({},function(response){
        $scope.userDetails = response.data;
        if(response.isExistUser == false)
            $location.path('/profile')
    });
    $scope.viewDescription = function(url){
    	$rootScope.detailProductname = url;
    	$location.path('/')
    }
}])
.controller('candidateProfileCtrl',['$scope','getPrimarySkill',function($scope,getPrimarySkill){
$scope.skillName = {};$scope.primarySkills = [];
$scope.currentLocation = [{
        name: "John",
        isEnable:false,
        isprefLocation:false

    }, {
        name: "Paul",
        isEnable:false,
        isprefLocation:false
    }, {
        name: "George",
        isEnable:false,
        isprefLocation:false
    }, {
        name: "Ringo",
        isEnable:false,
        isprefLocation:false
    }];
$scope.showStep = function(step) {
    $scope.onboarding_steps= [];

            $scope.onboarding_steps[1] = $scope.onboarding_steps[2] = $scope.onboarding_steps[3] = $scope.onboarding_steps[4] = false;
            $scope.onboarding_steps[step] = true;;
        }
        $scope.getSkills = function(){
            var reqObj = $scope.candidateRole;
            getPrimarySkill({},function(response){
             $scope.primarySkilldata = response.data;
               angular.forEach($scope.primarySkilldata,function(i,k){
                    if($scope.primarySkilldata[k].skillType.indexOf($scope.candidateRole)>-1){
                        $scope.primarySkills.push($scope.primarySkilldata[k]);
                    }
                })

               // $scope.primarySkills = response.data;
            })
        }
        $scope.onBoardingSkillSave = function(test) {
            var reqObj = {};
            reqObj.skilName = $scope.skillName;
            reqObj.candidateRole = $scope.candidateRole;
            reqObj.primSkill = $scope.primSkill;
            reqObj.currentLocation = $scope.myLocate; 
            console.log($scope.candidateRole);
            if(!$scope.candidateRole)
                return;
            $scope.showStep('2');
        };
        $scope.SkillSave = function() {
            var reqObj = {}; 
            angular.forEach($scope.currentLocation,function(val,i){
                    if($scope.currentLocation[i].isEnable)
                        reqObj.currentLocation = $scope.currentLocation[i].name;
                    if($scope.currentLocation[i].isprefLocation)
                        reqObj.prefferedLocation = $scope.currentLocation[i].name;
            })
            reqObj.currentSalary = $scope.currentSalary;
            reqObj.NoticePeriod = $scope.noticePeriod;
            $scope.showStep('3');
        };
    
}])
/*.controller('productApp',['$scope','$rootScope','$routeParams','getAppDetails','getCart',function($scope,$rootScope,$routeParams,getAppDetails, getCart){
	getAppDetails({},function(response){
        $scope.productList = response.data;
        angular.forEach($scope.productList,function(val,key){
        	if(val.name.toLowerCase() == $routeParams.prodName.toLowerCase()){
        		$scope.product = val.details;
        	}
        })
        reqObj = {
        	productName:$scope.prodName,
        	price:$scope.prodPrice
        }
        angular.forEach(getCart.cart,function(val1,key1){
        		if($scope.prodName.toLowerCase()  == val1.productName.toLowerCase() ){
        			$scope.addedToCart = true;
        		}
        	})
        $scope.addToCart = function(){
        	getCart.cart.push(reqObj);
        }
        $scope.proceeedToCart = function(){
        	$scope.cartDetails = getCart.cart;
        }
        // updateCart(reqObj);
        //$scope.productQuant = $scope.product.length; 
    });
}])*/
/*.controller('productGrape',['$scope','$rootScope','getAppDetails',function($scope,$rootScope,getAppDetails){
	getAppDetails({},function(response){
        $scope.fruit1 = response.data.appleDetails;
        $scope.productQuant = $scope.fruit1.length; 
    });
}])*/