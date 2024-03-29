'use strict';

angular.module('myApp')
.controller('mainViewCtrl', ['$scope', 'jsComplexity',
 function($scope, jsComplexity) {

  $scope.reset = function() {
    $scope.jsCode = [ "// Expected Complexity: 3\n",
                      "function a(x) {\n",
                      "    if (true) {\n",
                      "        return 'if'; // 1st path\n",
                      "    } else if (false) {\n",
                      "        return x+1; // 2nd path\n",
                      "    } else {\n",
                      "        return 4; // 3rd path\n",
                      "    }\n",
                      "}"].join('');
    $scope.checkJSCode($scope.jsCode);
  };

  $scope.checkJSCode = function (code)
  {
    try{
		$scope.checkResult = "Result : "+jsComplexity.evaluate(code);
	}catch(err){
		$scope.checkResult = "Error: " + err.message;
		document.getElementById("checkResult").style.color="red";
	}
	  
	  
  };

  $scope.reset();
}]);