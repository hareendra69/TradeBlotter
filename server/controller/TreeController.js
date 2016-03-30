var _ = require('lodash');
var mockData = require('../data/trades.json');
var LEVEL1 = "Symbol";
var LEVEL2 = "Action";
var BUY = "Buy";
var SELL = "Sell";

exports.getTrades = function(req, res) {
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    var showPL = req.params.showPL;
    var tree = generateTree(mockData.trades, LEVEL1);
    var finalTree = [];
    _(tree).forEach(function(element) {
        var object = {};
        object.Symbol = element.Symbol;
        // object._ad_expanded=true;
        object.children = generateTree(element.children, LEVEL2, showPL);
        finalTree.push(object);
    });
    var total = _.sumBy(finalTree, function(o) {
        return o.PL;
    });

    var totalObj = {
        Symbol: "Total :",
        children: {

            PL: 1060
        }
    };
    finalTree.push(totalObj);
    return res.status(200).json(finalTree);

};

function generateTree(nodes, iteratee, showPL) {
    var list = _.groupBy(nodes, iteratee);
    if (iteratee === LEVEL2 && showPL === "true") {
        calculatePL(list);
    }
    return formatTree(list, iteratee);
}

function formatTree(list, iteratee) {
    var children = [];
    var keys = Object.keys(list);
    for (var i = 0; i < keys.length; i++) {
        children.push({
            Symbol: keys[i],
            _ad_expanded: true,
            children: _.orderBy(list[keys[i]], ['TxnId'], ['ASC'])
        });
    }
    return children;
}

function calculatePL(list) {
    var buy = list[BUY];
    var sell = list[SELL];
    if (sell.length !== 0 && buy.length !== 0) {
        var length = (buy.length >= sell.length ? sell.length : buy.length);
        for (var i = 0; i < length; i++) {
            var cumPL = 0;
            var PL = 0;
            var diffQuantity = buy[i].Quantity - sell[i].Quantity;
            if (diffQuantity > 0) {
                sell[i].PL = (sell[i].Price - buy[i].Price) * sell[i].Quantity;
                sell[i].OQ = 0;
                buy[i].OQ = diffQuantity;
            } else if (diffQuantity < 0) {
                sell[i].PL = (sell[i].Price - buy[i].Price) * buy[i].Quantity;
                buy[i].OQ = 0;
                sell[i].OQ = sell[i].Quantity - buy[i].Quantity;
            } else {
                sell[i].PL = (sell[i].Price - buy[i].Price) * buy[i].Quantity;
                buy[i].OQ = 0;
                sell[i].OQ = 0;
            }
        }
    }
}
