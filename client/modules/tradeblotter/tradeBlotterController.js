var tradeBlotter = angular.module('TradeBlotter');

tradeBlotter.controller('TradeBlotterController', tradeBlotterController);

tradeBlotterController.$inject = ['$scope', '$http']; 

function tradeBlotterController($scope, $http){
    'use strict'
    $scope.states = {
        loadingSpinner : true
    }; 
    $scope.calculatePL = function(showPL){
         getTrades(showPL);
    };
          
    function getTrades(showPL) {
        refreshTree();
        $scope.states.loadingSpinner = true;
        var uri = '/tree/getTrades/'+showPL;
        $http.get(uri).then(onSuccess, onError).finally(function(){
         $scope.states.loadingSpinner= false;
        });        
    };
    function onSuccess(data) {        
        $scope.root = {
            children: data.data
        }        
    }
    function onError(error){
        console.log("Error :: ", error);
    }
    
    function refreshTree() {
        $scope.root = {
            children: []
        };
    }
    getTrades(false);
}