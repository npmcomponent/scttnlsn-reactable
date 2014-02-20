*This repository is a mirror of the [component](http://component.io) module [scttnlsn/reactable](http://github.com/scttnlsn/reactable). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/scttnlsn-reactable`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
reactable
=========

Add reactive element to an object.

## Install

    component install scttnlsn/reactable

## Usage

```js
function View(model) {
    this.react(template, model);
}

reactable(View.prototype);

var view = new View(model);
document.body.appendChild(view.el);
```

# License

MIT