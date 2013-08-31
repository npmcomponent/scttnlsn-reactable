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