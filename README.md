This is a very simple example of how to get started with <a href="http://apidocjs.com/" target="_blank">apidocJs</a> for inline documentation for RESTful web APIs.

Installation
============
---

* `git clone https://github.com/Hanzig/apidocjs_sandbox.git`
* `cd apidoc_example`
* `npm install`
* `mkdir apidoc`
* `grunt dev`

Grunt is watching files in `server/`. So, modifying `routes.js`, for instance, will generate and update the documentation files in `apidoc/`. You can see the documentation generated by opening `apidoc/index.html`