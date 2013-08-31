var domify = require('domify');
var reactive = require('reactive');

module.exports = function (obj) {
    obj || (obj = {});

    obj.react = function (template, model) {
        this.el = domify(template);
        this.reactive = reactive(this.el, model, this);
    };

    return obj;
};