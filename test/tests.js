var assert = require('assert');
var reactable = require('reactable');

describe('Reactable', function () {
    beforeEach(function () {
        this.view = reactable();
        this.view.react('<p>{foo}</p>', { foo: 'bar' });
    });

    it('should create el with data from model', function () {
        assert(this.view.el.tagName.toLowerCase() === 'p');
        assert(this.view.el.innerHTML === 'bar');
    });
});