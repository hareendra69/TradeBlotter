var tradeBlotterTree = require('./routes/tradeBlotterTree');

module.exports = {
    apply: function(app){
        app.use('/tree', tradeBlotterTree.createRouter(app));
        return app;
    }
};