var domify = require('component-domify');
var reactive = require('component-reactive');

module.exports = function (obj) {
    obj || (obj = {});

    obj.react = function (template, model) {
        this.el = domify(template);
        this.reactive = reactive(this.el, model, this);
    };

    return obj;
};