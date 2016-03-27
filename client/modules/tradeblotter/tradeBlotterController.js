var tradeBlotter = angular.module('TradeBlotter');
// tradeBlotter.config(function($adConfigProvider) {
//     'use strict';

//     $adConfigProvider.iconClasses.expand = 'glyphicon glyphicon-triangle-right';
//     $adConfigProvider.iconClasses.collapse = 'glyphicon glyphicon-triangle-bottom';
// });
tradeBlotter.controller('TradeBlotterController', tradeBlotterController);

tradeBlotterController.$inject = ['$scope', '$http']; // What does inject do?

function tradeBlotterController($scope, $http){
    'use strict'
    
    $scope.calcultePL = function(){
        alert("Calculateing....");
    }
    
    function getTrades(){
        var uri = '/tree/getTrades/false';
        $http.get(uri).then(onSuccess, onError).finally(function(){
            $scope.states.loadingTreeData= false;
        });        
    };
    function onSuccess(data){
        
        $scope.root = {
            children: data.data
        }
        
    }
    function onError(error){
        console.log("Error :: ", error);
    }
    getTrades();
}