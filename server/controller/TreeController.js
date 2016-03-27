
var mockData= require('../data/trades.json');
var _ = require('lodash');

exports.getTrades = function(req, res) {
    //var showPL = req.params.showPL;
    var showPL = "true";
    var LEVEL1 = "Symbol";
    var LEVEL2 = "Action";
    var tree = generateTree(mockData.trades, LEVEL1);
    var finalTree = [];
    _(tree).forEach(function(element) {
       var object = {};
       object.Symbol = element.Symbol;
       object.children = generateTree(element.children, LEVEL2, showPL);
       finalTree.push(object);        
    });
    return res.status(200).json(finalTree);   
     
};

function generateTree(nodes, iteratee, showPL){
   var list = _.groupBy(nodes, iteratee);
    // if(iteratee == 'Action' && showPL === 'true'){
    //     console.log("Hello");
    //    var buy = list[0];
    //    var sell = list[1];
       
    //    var length = (buy.length >= sell.length ? sell.length : buy.length);
    //    for(var i=0; i<length; i++){
    //        var diffQuantity = buy[i].Quantity - sell[i].Quantity;
    //        if(diffQuantity > 0){
    //            sell[i].PL = (sell[i].Price - buy[i].Price) * sell[i].Quantity;
    //            sell[i].OQ = 0;
    //            buy[i].OQ = diffQuantity;
    //        }else if(diffQuantity < 0){
               
    //        }else {
               
    //        }
    //    }
    // }
   
    return formatTree(list, iteratee);
   
}

function formatTree(list, iteratee){
    var children = [];
    var keys = Object.keys(list);
    for(var i=0; i<keys.length;i++){
        children.push({
            Symbol: keys[i],
            children: _.orderBy(list[keys[i]],['TxnId'],['ASC'])        
        });
    }
    return children;
}