var orm = require('../db/config/orm');

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log(res)
            cb(res)
        });
    }
}
burger.all();
module.exports = burger;