module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"00a82"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+5Dc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"envelope":"envelope__3Cazu","header":"header__2qnZ2","unseen":"unseen__2vOm0","button":"button__1B1mI","attachments":"attachments__2OvsV"};

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "695h":
/***/ (function(module, exports, __webpack_require__) {

!function (n, e) {
   true ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.mitt = e();
}(this, function () {
  function n(n) {
    return n = n || Object.create(null), { on: function on(e, t) {
        (n[e] || (n[e] = [])).push(t);
      }, off: function off(e, t) {
        n[e] && n[e].splice(n[e].indexOf(t) >>> 0, 1);
      }, emit: function emit(e, t) {
        (n[e] || []).slice().map(function (n) {
          n(t);
        }), (n["*"] || []).slice().map(function (n) {
          n(e, t);
        });
      } };
  }return n;
});
//# sourceMappingURL=mitt.umd.js.map

/***/ }),

/***/ "89El":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "G78K":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var is_namespaceObject = {};
__webpack_require__.d(is_namespaceObject, "array", function() { return array; });
__webpack_require__.d(is_namespaceObject, "func", function() { return is_func; });
__webpack_require__.d(is_namespaceObject, "string", function() { return string; });
__webpack_require__.d(is_namespaceObject, "number", function() { return is_number; });
__webpack_require__.d(is_namespaceObject, "boolean", function() { return is_boolean; });
__webpack_require__.d(is_namespaceObject, "object", function() { return object; });

// EXTERNAL MODULE: ./style/index.css
var style_0 = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style_0);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/warning/warning.js
var warning = __webpack_require__("XOCG");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js




var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production" !== 'production';
} catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(preact_min["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = preact_min["options"].event;
preact_min["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = preact_min["options"].vnode;
preact_min["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(preact_min["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(preact_min["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(preact_min["h"])(Portal, { vnode: vnode, container: container });
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(preact_min["render"])(Object(preact_min["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var preact_compat_es_i = ELEMENTS.length; preact_compat_es_i--;) {
	DOM[ELEMENTS[preact_compat_es_i]] = createFactory(ELEMENTS[preact_compat_es_i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(preact_min["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(preact_min["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(preact_min["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			prop_types_default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	preact_min["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new preact_min["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var preact_compat_es_index = {
	version: version,
	DOM: DOM,
	PropTypes: prop_types_default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ var preact_compat_es = (preact_compat_es_index);

//# sourceMappingURL=preact-compat.es.js.map
// EXTERNAL MODULE: ../node_modules/history/node_modules/warning/warning.js
var warning_warning = __webpack_require__("Pwfr");
var warning_warning_default = /*#__PURE__*/__webpack_require__.n(warning_warning);

// EXTERNAL MODULE: ../node_modules/invariant/invariant.js
var invariant = __webpack_require__("UyDz");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ../node_modules/resolve-pathname/index.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ var resolve_pathname = (resolvePathname);
// CONCATENATED MODULE: ../node_modules/value-equal/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ var value_equal = (valueEqual);
// CONCATENATED MODULE: ../node_modules/history/es/PathUtils.js
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};
// CONCATENATED MODULE: ../node_modules/history/es/LocationUtils.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};





var LocationUtils_createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var LocationUtils_locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
};
// CONCATENATED MODULE: ../node_modules/history/es/createTransitionManager.js


var createTransitionManager_createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    warning_warning_default()(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          warning_warning_default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ var es_createTransitionManager = (createTransitionManager_createTransitionManager);
// CONCATENATED MODULE: ../node_modules/history/es/DOMUtils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};
// CONCATENATED MODULE: ../node_modules/history/es/createBrowserHistory.js
var createBrowserHistory__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var createBrowserHistory__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};








var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory_createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_default()(canUseDOM, 'Browser history needs a DOM');

  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();

  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;

    var path = pathname + search + hash;

    warning_warning_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createBrowserHistory__extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;

    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allKeys.indexOf(fromLocation.key);

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key];

  // Public interface

  var createHref = function createHref(location) {
    return basename + createPath(location);
  };

  var push = function push(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory__typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextKeys.push(location.key);
          allKeys = nextKeys;

          setState({ action: action, location: location });
        }
      } else {
        warning_warning_default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createBrowserHistory__typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({ key: key, state: state }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);

          if (prevIndex !== -1) allKeys[prevIndex] = location.key;

          setState({ action: action, location: location });
        }
      } else {
        warning_warning_default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) addEventListener(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, PopStateEvent, handlePopState);

      if (needsHashChangeListener) removeEventListener(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createBrowserHistory = (createBrowserHistory_createBrowserHistory);
// CONCATENATED MODULE: ../node_modules/history/es/createHashHistory.js
var createHashHistory__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};








var createHashHistory_HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory_createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  invariant_default()(canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    warning_warning_default()(!basename || hasBasename(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = stripBasename(path, basename);

    return LocationUtils_createLocation(path);
  };

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createHashHistory__extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && LocationUtils_locationsAreEqual(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + createPath(location));
  };

  var push = function push(path, state) {
    warning_warning_default()(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        warning_warning_default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    warning_warning_default()(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    warning_warning_default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      addEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      removeEventListener(window, createHashHistory_HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createHashHistory = (createHashHistory_createHashHistory);
// CONCATENATED MODULE: ../node_modules/history/es/createMemoryHistory.js
var createMemoryHistory__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var createMemoryHistory__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};

/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory_createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

  var transitionManager = es_createTransitionManager();

  var setState = function setState(nextState) {
    createMemoryHistory__extends(history, nextState);

    history.length = history.entries.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? LocationUtils_createLocation(entry, undefined, createKey()) : LocationUtils_createLocation(entry, undefined, entry.key || createKey());
  });

  // Public interface

  var createHref = createPath;

  var push = function push(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory__typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'PUSH';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;

      var nextEntries = history.entries.slice(0);
      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    warning_warning_default()(!((typeof path === 'undefined' ? 'undefined' : createMemoryHistory__typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

    var action = 'REPLACE';
    var location = LocationUtils_createLocation(path, state, createKey(), history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      history.entries[history.index] = location;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

    var action = 'POP';
    var location = history.entries[nextIndex];

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };

  return history;
};

/* harmony default export */ var es_createMemoryHistory = (createMemoryHistory_createMemoryHistory);
// CONCATENATED MODULE: ../node_modules/history/es/index.js









// CONCATENATED MODULE: ../node_modules/react-router/es/Router.js
var Router__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}






/**
 * The public API for putting history on context.
 */

var Router_Router = function (_React$Component) {
  _inherits(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: Router__extends({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    invariant_default()(children == null || preact_compat_es.Children.count(children) === 1, "A <Router> may have only one child element");

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(this.props.history === nextProps.history, "You cannot change <Router history>");
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? preact_compat_es.Children.only(children) : null;
  };

  return Router;
}(preact_compat_es.Component);

Router_Router.propTypes = {
  history: prop_types_default.a.object.isRequired,
  children: prop_types_default.a.node
};
Router_Router.contextTypes = {
  router: prop_types_default.a.object
};
Router_Router.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};

/* harmony default export */ var es_Router = (Router_Router);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/Router.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Router = (es_Router);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/BrowserRouter.js
function BrowserRouter__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function BrowserRouter__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function BrowserRouter__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter_BrowserRouter = function (_React$Component) {
  BrowserRouter__inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    BrowserRouter__classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = BrowserRouter__possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createBrowserHistory(_this.props), _temp), BrowserRouter__possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<BrowserRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { BrowserRouter as Router }`.");
  };

  BrowserRouter.prototype.render = function render() {
    return preact_compat_es.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(preact_compat_es.Component);

/* harmony default export */ var es_BrowserRouter = (BrowserRouter_BrowserRouter);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/HashRouter.js
function HashRouter__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function HashRouter__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function HashRouter__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter_HashRouter = function (_React$Component) {
  HashRouter__inherits(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    HashRouter__classCallCheck(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = HashRouter__possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createHashHistory(_this.props), _temp), HashRouter__possibleConstructorReturn(_this, _ret);
  }

  HashRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<HashRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { HashRouter as Router }`.");
  };

  HashRouter.prototype.render = function render() {
    return preact_compat_es.createElement(react_router_dom_es_Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(preact_compat_es.Component);

/* harmony default export */ var es_HashRouter = (HashRouter_HashRouter);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/Link.js
var Link__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function Link__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Link__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Link__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}






var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link_Link = function (_React$Component) {
  Link__inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    Link__classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Link__possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;

          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), Link__possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        innerRef = _props.innerRef,
        props = _objectWithoutProperties(_props, ["replace", "to", "innerRef"]); // eslint-disable-line no-unused-vars

    invariant_default()(this.context.router, "You should not use <Link> outside a <Router>");

    invariant_default()(to !== undefined, 'You must specify the "to" property');

    var history = this.context.router.history;

    var location = typeof to === "string" ? LocationUtils_createLocation(to, null, null, history.location) : to;

    var href = history.createHref(location);
    return preact_compat_es.createElement("a", Link__extends({}, props, { onClick: this.handleClick, href: href, ref: innerRef }));
  };

  return Link;
}(preact_compat_es.Component);

Link_Link.defaultProps = {
  replace: false
};
Link_Link.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired,
      createHref: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};

/* harmony default export */ var es_Link = (Link_Link);
// CONCATENATED MODULE: ../node_modules/react-router/es/MemoryRouter.js
function MemoryRouter__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function MemoryRouter__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function MemoryRouter__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter_MemoryRouter = function (_React$Component) {
  MemoryRouter__inherits(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    MemoryRouter__classCallCheck(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = MemoryRouter__possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = es_createMemoryHistory(_this.props), _temp), MemoryRouter__possibleConstructorReturn(_this, _ret);
  }

  MemoryRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.");
  };

  MemoryRouter.prototype.render = function render() {
    return preact_compat_es.createElement(es_Router, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(preact_compat_es.Component);

/* harmony default export */ var es_MemoryRouter = (MemoryRouter_MemoryRouter);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/MemoryRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_MemoryRouter = (es_MemoryRouter);
// EXTERNAL MODULE: ../node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__("Tvs4");
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);

// CONCATENATED MODULE: ../node_modules/react-router/es/matchPath.js


var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var matchPath_compilePath = function compilePath(pattern, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys = [];
  var re = path_to_regexp_default()(pattern, keys, options);
  var compiledPattern = { re: re, keys: keys };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments[2];

  if (typeof options === "string") options = { path: options };

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === undefined ? false : _options$sensitive;

  if (path == null) return parent;

  var _compilePath = matchPath_compilePath(path, { end: exact, strict: strict, sensitive: sensitive }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

/* harmony default export */ var es_matchPath = (matchPath);
// CONCATENATED MODULE: ../node_modules/react-router/es/Route.js
var Route__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function Route__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Route__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Route__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







var Route_isEmptyChildren = function isEmptyChildren(children) {
  return preact_compat_es.Children.count(children) === 0;
};

/**
 * The public API for matching a single path and rendering.
 */

var Route_Route = function (_React$Component) {
  Route__inherits(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    Route__classCallCheck(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Route__possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), Route__possibleConstructorReturn(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: Route__extends({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, router) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact,
        sensitive = _ref.sensitive;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    invariant_default()(router, "You should not use <Route> or withRouter() outside a <Router>");

    var route = router.route;

    var pathname = (location || route.location).pathname;

    return es_matchPath(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, route.match);
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored");

    warning_default()(!(this.props.component && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored");

    warning_default()(!(this.props.render && this.props.children && !Route_isEmptyChildren(this.props.children)), "You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored");
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_default()(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props = this.props,
        children = _props.children,
        component = _props.component,
        render = _props.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    if (component) return match ? preact_compat_es.createElement(component, props) : null;

    if (render) return match ? render(props) : null;

    if (typeof children === "function") return children(props);

    if (children && !Route_isEmptyChildren(children)) return preact_compat_es.Children.only(children);

    return null;
  };

  return Route;
}(preact_compat_es.Component);

Route_Route.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.object.isRequired,
    route: prop_types_default.a.object.isRequired,
    staticContext: prop_types_default.a.object
  })
};
Route_Route.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};

/* harmony default export */ var es_Route = (Route_Route);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/Route.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Route = (es_Route);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/NavLink.js
var NavLink__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var NavLink__typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function NavLink__objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}






/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink_NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      ariaCurrent = _ref["aria-current"],
      rest = NavLink__objectWithoutProperties(_ref, ["to", "exact", "strict", "location", "activeClassName", "className", "activeStyle", "style", "isActive", "aria-current"]);

  var path = (typeof to === "undefined" ? "undefined" : NavLink__typeof(to)) === "object" ? to.pathname : to;

  // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202
  var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");

  return preact_compat_es.createElement(react_router_dom_es_Route, {
    path: escapedPath,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return preact_compat_es.createElement(es_Link, NavLink__extends({
        to: to,
        className: isActive ? [className, activeClassName].filter(function (i) {
          return i;
        }).join(" ") : className,
        style: isActive ? NavLink__extends({}, style, activeStyle) : style,
        "aria-current": isActive && ariaCurrent || null
      }, rest));
    }
  });
};

NavLink_NavLink.defaultProps = {
  activeClassName: "active",
  "aria-current": "page"
};

/* harmony default export */ var es_NavLink = (NavLink_NavLink);
// CONCATENATED MODULE: ../node_modules/react-router/es/Prompt.js
function Prompt__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Prompt__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Prompt__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}





/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt_Prompt = function (_React$Component) {
  Prompt__inherits(Prompt, _React$Component);

  function Prompt() {
    Prompt__classCallCheck(this, Prompt);

    return Prompt__possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    invariant_default()(this.context.router, "You should not use <Prompt> outside a <Router>");

    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(preact_compat_es.Component);

Prompt_Prompt.propTypes = {
  when: prop_types_default.a.bool,
  message: prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.string]).isRequired
};
Prompt_Prompt.defaultProps = {
  when: true
};
Prompt_Prompt.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      block: prop_types_default.a.func.isRequired
    }).isRequired
  }).isRequired
};

/* harmony default export */ var es_Prompt = (Prompt_Prompt);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/Prompt.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Prompt = (es_Prompt);
// CONCATENATED MODULE: ../node_modules/react-router/es/generatePath.js


var generatePath_patternCache = {};
var generatePath_cacheLimit = 10000;
var generatePath_cacheCount = 0;

var generatePath_compileGenerator = function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = generatePath_patternCache[cacheKey] || (generatePath_patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var compiledGenerator = path_to_regexp_default.a.compile(pattern);

  if (generatePath_cacheCount < generatePath_cacheLimit) {
    cache[pattern] = compiledGenerator;
    generatePath_cacheCount++;
  }

  return compiledGenerator;
};

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
var generatePath = function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === "/") {
    return pattern;
  }
  var generator = generatePath_compileGenerator(pattern);
  return generator(params, { pretty: true });
};

/* harmony default export */ var es_generatePath = (generatePath);
// CONCATENATED MODULE: ../node_modules/react-router/es/Redirect.js
var Redirect__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function Redirect__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Redirect__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Redirect__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}








/**
 * The public API for updating the location programmatically
 * with a component.
 */

var Redirect_Redirect = function (_React$Component) {
  Redirect__inherits(Redirect, _React$Component);

  function Redirect() {
    Redirect__classCallCheck(this, Redirect);

    return Redirect__possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    invariant_default()(this.context.router, "You should not use <Redirect> outside a <Router>");

    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevTo = LocationUtils_createLocation(prevProps.to);
    var nextTo = LocationUtils_createLocation(this.props.to);

    if (LocationUtils_locationsAreEqual(prevTo, nextTo)) {
      warning_default()(false, "You tried to redirect to the same route you're currently on: " + ("\"" + nextTo.pathname + nextTo.search + "\""));
      return;
    }

    this.perform();
  };

  Redirect.prototype.computeTo = function computeTo(_ref) {
    var computedMatch = _ref.computedMatch,
        to = _ref.to;

    if (computedMatch) {
      if (typeof to === "string") {
        return es_generatePath(to, computedMatch.params);
      } else {
        return Redirect__extends({}, to, {
          pathname: es_generatePath(to.pathname, computedMatch.params)
        });
      }
    }

    return to;
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var push = this.props.push;

    var to = this.computeTo(this.props);

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(preact_compat_es.Component);

Redirect_Redirect.propTypes = {
  computedMatch: prop_types_default.a.object, // private, from <Switch>
  push: prop_types_default.a.bool,
  from: prop_types_default.a.string,
  to: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.object]).isRequired
};
Redirect_Redirect.defaultProps = {
  push: false
};
Redirect_Redirect.contextTypes = {
  router: prop_types_default.a.shape({
    history: prop_types_default.a.shape({
      push: prop_types_default.a.func.isRequired,
      replace: prop_types_default.a.func.isRequired
    }).isRequired,
    staticContext: prop_types_default.a.object
  }).isRequired
};

/* harmony default export */ var es_Redirect = (Redirect_Redirect);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/Redirect.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Redirect = (es_Redirect);
// CONCATENATED MODULE: ../node_modules/react-router/es/StaticRouter.js
var StaticRouter__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function StaticRouter__objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function StaticRouter__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function StaticRouter__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function StaticRouter__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}








var StaticRouter_addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return StaticRouter__extends({}, location, {
    pathname: StaticRouter_addLeadingSlash(basename) + location.pathname
  });
};

var StaticRouter_stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = StaticRouter_addLeadingSlash(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return StaticRouter__extends({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var StaticRouter_createURL = function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
};

var StaticRouter_staticHandler = function staticHandler(methodName) {
  return function () {
    invariant_default()(false, "You cannot %s with <StaticRouter>", methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter_StaticRouter = function (_React$Component) {
  StaticRouter__inherits(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    StaticRouter__classCallCheck(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = StaticRouter__possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return StaticRouter_addLeadingSlash(_this.props.basename + StaticRouter_createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = "PUSH";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = "REPLACE";
      context.location = addBasename(basename, LocationUtils_createLocation(location));
      context.url = StaticRouter_createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), StaticRouter__possibleConstructorReturn(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.componentWillMount = function componentWillMount() {
    warning_default()(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.");
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = StaticRouter__objectWithoutProperties(_props, ["basename", "context", "location"]);

    var history = {
      createHref: this.createHref,
      action: "POP",
      location: StaticRouter_stripBasename(basename, LocationUtils_createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: StaticRouter_staticHandler("go"),
      goBack: StaticRouter_staticHandler("goBack"),
      goForward: StaticRouter_staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return preact_compat_es.createElement(es_Router, StaticRouter__extends({}, props, { history: history }));
  };

  return StaticRouter;
}(preact_compat_es.Component);

StaticRouter_StaticRouter.defaultProps = {
  basename: "",
  location: "/"
};
StaticRouter_StaticRouter.childContextTypes = {
  router: prop_types_default.a.object.isRequired
};

/* harmony default export */ var es_StaticRouter = (StaticRouter_StaticRouter);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/StaticRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_StaticRouter = (es_StaticRouter);
// CONCATENATED MODULE: ../node_modules/react-router/es/Switch.js
function Switch__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Switch__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Switch__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}







/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch_Switch = function (_React$Component) {
  Switch__inherits(Switch, _React$Component);

  function Switch() {
    Switch__classCallCheck(this, Switch);

    return Switch__possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillMount = function componentWillMount() {
    invariant_default()(this.context.router, "You should not use <Switch> outside a <Router>");
  };

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_default()(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_default()(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    preact_compat_es.Children.forEach(children, function (element) {
      if (match == null && preact_compat_es.isValidElement(element)) {
        var _element$props = element.props,
            pathProp = _element$props.path,
            exact = _element$props.exact,
            strict = _element$props.strict,
            sensitive = _element$props.sensitive,
            from = _element$props.from;

        var path = pathProp || from;

        child = element;
        match = es_matchPath(location.pathname, { path: path, exact: exact, strict: strict, sensitive: sensitive }, route.match);
      }
    });

    return match ? preact_compat_es.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(preact_compat_es.Component);

Switch_Switch.contextTypes = {
  router: prop_types_default.a.shape({
    route: prop_types_default.a.object.isRequired
  }).isRequired
};


/* harmony default export */ var es_Switch = (Switch_Switch);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/Switch.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_Switch = (es_Switch);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/generatePath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_generatePath = (es_generatePath);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/matchPath.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_matchPath = (es_matchPath);
// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("89El");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ../node_modules/react-router/es/withRouter.js
var withRouter__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function withRouter__objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}






/**
 * A public higher-order component to access the imperative API
 */
var withRouter_withRouter = function withRouter(Component) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = withRouter__objectWithoutProperties(props, ["wrappedComponentRef"]);

    return preact_compat_es.createElement(es_Route, {
      children: function children(routeComponentProps) {
        return preact_compat_es.createElement(Component, withRouter__extends({}, remainingProps, routeComponentProps, {
          ref: wrappedComponentRef
        }));
      }
    });
  };

  C.displayName = "withRouter(" + (Component.displayName || Component.name) + ")";
  C.WrappedComponent = Component;


  return hoist_non_react_statics_cjs_default()(C, Component);
};

/* harmony default export */ var es_withRouter = (withRouter_withRouter);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/withRouter.js
// Written in this round about way for babel-transform-imports


/* harmony default export */ var react_router_dom_es_withRouter = (es_withRouter);
// CONCATENATED MODULE: ../node_modules/react-router-dom/es/index.js




























// CONCATENATED MODULE: ../node_modules/dlv/dist/dlv.es.js
/* harmony default export */ var dlv_es = (function (t, e, l, n) {
  for (n = 0, e = e.split ? e.split(".") : e; t && n < e.length;) {
    t = t[e[n++]];
  }return void 0 === t || n < e.length ? l : t;
});;
//# sourceMappingURL=dlv.es.js.map
// CONCATENATED MODULE: ../node_modules/preact-i18n/dist/preact-i18n.esm.js



/** Check if an object is not null or undefined
 *	@private
 */
function defined(obj) {
  return obj !== null && obj !== undefined;
}

/** A simpler Object.assign
 *  @private
 */
function preact_i18n_esm_assign(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}

/** Recursively copy keys from `source` to `target`, skipping truthy values already in `target`.
 *	@private
 */
function deepAssign(target, source) {
  var out = preact_i18n_esm_assign({}, target);
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      if (target[i] && source[i] && typeof target[i] === 'object' && typeof source[i] === 'object') {
        out[i] = deepAssign(target[i], source[i]);
      } else {
        out[i] = target[i] || source[i];
      }
    }
  }
  return out;
}

/** select('foo,bar') creates a mapping: `{ foo, bar }`
 *	@private
 */
function preact_i18n_esm_select(properties) {
  properties = properties || {};
  if (typeof properties === 'string') {
    properties = properties.split(',');
  }
  if ('join' in properties) {
    var selected = {};
    for (var i = 0; i < properties.length; i++) {
      var val = properties[i].trim();
      if (val) {
        selected[val.split('.').pop()] = val;
      }
    }
    return selected;
  }
  return properties;
}

var URL_FLAG = /[?&#]intl=show/;

/** `<IntlProvider>` is a nestable internationalization definition provider.
 *	It exposes an Intl scope & definition into the tree,
 *	making them available to descendant components.
 *
 *	> **Note:** When nested, gives precedence to keys higher up the tree!
 *	> This means lower-level components can set their defaults by wrapping themselves
 *	> in an `<IntlProvider>`, but still remain localizable by their parent components.
 *
 *	@name IntlProvider
 *	@param props
 *	@param {String} [props.scope]			Nest `definition` under a root key, and set the active scope for the tree (essentially prefixing all `<Text />` keys).
 *	@param {Boolean} [props.mark=false]		If `true`, all `<Text>` elements will be shown with a red/green background indicating whether they have valid Intl keys.
 *	@param {Object} [props.definition={}]	Merge the given definition into the current intl definition, giving the *current* definition precedence (i.e., only adding keys, acting as defaults)
 *
 *	@example
 *	// generally imported from a JSON file:
 *	let definition = {
 *		foo: 'Le Feux'
 *	};
 *
 *	<IntlProvider scope="weather" definition={definition}>
 *		<Text key="foo">The Foo</Text>
 *	</IntlProvider>
 *
 *	// This will render the text:
 *	"Le Feux"
 */
var IntlProvider = function (Component$$1) {
  function IntlProvider() {
    Component$$1.apply(this, arguments);
  }

  if (Component$$1) IntlProvider.__proto__ = Component$$1;
  IntlProvider.prototype = Object.create(Component$$1 && Component$$1.prototype);
  IntlProvider.prototype.constructor = IntlProvider;

  IntlProvider.prototype.getChildContext = function getChildContext() {
    var ref = this.props;
    var scope = ref.scope;
    var definition = ref.definition;
    var mark = ref.mark;
    var intl = preact_i18n_esm_assign({}, this.context.intl || {});

    // set active scope for the tree if given
    if (scope) {
      intl.scope = scope;
    }

    // merge definition into current with lower precedence
    if (definition) {
      intl.dictionary = deepAssign(intl.dictionary || {}, definition);
    }

    if (mark || typeof location !== 'undefined' && String(location).match(URL_FLAG)) {
      intl.mark = true;
    }

    return { intl: intl };
  };

  IntlProvider.prototype.render = function render(ref) {
    var children = ref.children;

    return children && children[0] || null;
  };

  return IntlProvider;
}(preact_min["Component"]);

/**
 * Higher-order function that creates an `<IntlProvider />` wrapper component for the given component.  It
 * takes two forms depending on how many arguments it's given:
 * It can take a functional form like:
 * intl(ComponentToWrap, options)
 *
 * or it can take an annotation form like:
 * @intl(options)
 * class ComponentToWrap extends Component {}
 *
 *	@param {Component or Object} args[0] If there are two arguments, the first argument is the Component to wrap in `<IntlProvider/>`. If there is just one argument, this is the options object to pass as `props` to `<IntlProvider/>`. See the definition of the options param below for details.
 *	@param {Object} options If there are two arguments, the second argument is Passed as `props` to `<IntlProvider />`
 *	@param [options.scope]			Nest `definition` under a root key, and set the active scope for the tree (essentially prefixing all `<Text />` keys).
 *	@param [options.definition={}]	Merge the given definition into the current intl definition, giving the *current* definition precedence (i.e., only adding keys, acting as defaults)
 */
function intl$1(Child, options) {
  if (arguments.length < 2) {
    options = Child;
    return function (Child) {
      return intl$1(Child, options);
    };
  }
  return function IntlProviderWrapper(props) {
    return Object(preact_min["h"])(IntlProvider, options || {}, Object(preact_min["h"])(Child, props));
  };
}

var EMPTY = {};

var currentFields;

/** Populate {{template.fields}} within a given string.
 *
 *	@private
 *	@param {String} template	The string containing fields to be resolved
 *	@param {Object} [fields={}]	Optionally nested object of fields, referencable from `template`.
 *	@example
 *		template('foo{{bar}}', { bar:'baz' }) === 'foobaz'
 */
function template(template, fields) {
  currentFields = fields || EMPTY;
  return template && template.replace(/\{\{([\w.-]+)\}\}/g, replacer);
}

/** Replacement callback for injecting fields into a String
 *	@private
 */
function replacer(s, field) {
  var parts = field.split('.'),
      v = currentFields;
  for (var i = 0; i < parts.length; i++) {
    v = v[parts[i]];
    if (v == null) {
      return '';
    } // eslint-disable-line eqeqeq
  }
  // allow for recursive {{config.xx}} references:
  if (typeof v === 'string' && v.match(/\{\{/)) {
    v = template(v, currentFields);
  }
  return v;
}

/** Attempts to look up a translated value from a given dictionary.
 *  Also supports json templating using the format: {{variable}}
 *	Falls back to default text.
 *
 *	@private
 *	@param {String} id				Intl field name/id (subject to scope)
 *	@param {String} [scope='']		Scope, which prefixes `id` with `${scope}.`
 *	@param {Object} dictionary		A nested object containing translations
 *	@param {Object} [fields={}]		Template fields for use by translated strings
 *	@param {Number} [plural]		Indicates a quantity, used to trigger pluralization
 *	@param {String|Array} [fallback]	Text to return if no translation is found
 *	@returns {String} translated
 */
function translate(id, scope, dictionary, fields, plural, fallback) {
  if (scope) {
    id = scope + '.' + id;
  }

  var value = dictionary && dlv_es(dictionary, id);

  // plural forms:
  // key: ['plural', 'singular']
  // key: { none, one, many }
  // key: { singular, plural }
  if ((plural || plural === 0) && value && typeof value === 'object') {
    if (value.splice) {
      value = value[plural] || value[0];
    } else if (plural === 0 && defined(value.none)) {
      value = value.none;
    } else if (plural === 1 && defined(value.one || value.singular)) {
      value = value.one || value.singular;
    } else {
      value = value.some || value.many || value.plural || value.other || value;
    }
  }

  return value && template(value, fields) || fallback || null;
}

/** Highlight/colorize the i18n'd node if `mark` is set on `intl` in context.  If not, just returns `value`
 *
 *	@private
 *	@param {String|VNode} value	The l10n'd text/vnode to highlight or pass through
 *	@param {string} id	The key used to lookup the value in the intl dictionary
 */
function HighlightI18N(ref, ref$1) {
  var value = ref.value;
  var id = ref.id;
  var intl = ref$1.intl;

  if (intl && intl.mark) {
    var dictionaryKey = "dictionary" + (intl && intl.scope ? "." + intl.scope : '') + "." + id;
    return Object(preact_min["h"])('mark', {
      style: 'background: ' + (value ? dlv_es(intl, dictionaryKey) ? 'rgba(119,231,117,.5)' // Green = this string is fully internationalized
      : 'rgba(229,226,41,.5)' // Yellow = this string does not have a value in the dictionary, but it has a fallback value
      : 'rgba(228,147,51,.5)' // Red = this string has no value and no fallback
      ),
      title: id
    }, value);
  }

  return value;
}

/** `<Text>` renders internationalized text.
 *	It attempts to look up translated values from a dictionary in context.
 *
 *	Template strings can contain `{{field}}` placeholders,
 *	which injects values from the `fields` prop.
 *
 *	When string lookup fails, renders its children as fallback text.
 *
 *	@param {Object} props				props
 *	@param {String} props.id			Key to look up in intl dictionary, within any parent scopes (`$scope1.$scope2.$id`)
 *	@param {Object} [props.fields={}]	Values to inject into template `{{fields}}`
 *	@param {Number} [props.plural]		Integer "count", used to select plural forms
 *	@param {Object} context
 *	@param {Object} context.intl		[internal] dictionary and scope info
 *
 *	@example
 *	// If there is no dictionary in context..
 *	<Text id="foo">The Foo</Text>
 *	// ..produces the text:
 *	"The Foo"
 *
 *	@example
 *	// Given a dictionary and some fields..
 *	<IntlProvider definition={{ foo:'Le Feux {{bar}}' }}>
 *		<Text id="foo" fields={{ bar: 'BEAR' }}>The Foo</Text>
 *	</IntlProvider>
 *	// ..produces the text:
 *	"Le Feux BEAR"
 *
 *	@example
 *	// Within a scope, both `id` and the definition are namespaced..
 *	<IntlProvider scope="weather" definition={{ foo:'Le Feux' }}>
 *		<Text id="foo">The Foo</Text>
 *	</IntlProvider>
 *	// ..produces the text:
 *	"Le Feux"
 */
function Text(ref, ref$1) {
  var id = ref.id;
  var children = ref.children;
  var plural = ref.plural;
  var fields = ref.fields;
  var intl = ref$1.intl;

  var fallback = children && children[0];

  var value = translate(id, intl && intl.scope, intl && intl.dictionary, fields, plural, fallback);

  return Object(preact_min["h"])(HighlightI18N, { id: id, value: value });
}

/** Translates the property values in an Object, returning a copy.
 *	**Note:** By default, `String` keys will be treated as Intl ID's.
 *	Pass `true` to return an Object containing *only* translated
 *	values where the prop is a <Text /> node.
 *
 *	@private
 *	@param {Object} props	An object with values to translate
 *	@param {Object} intl	An intl context object (eg: `context.intl`)
 *	@param {Boolean} [onlyTextNodes=false]	Only process `<Text />` values
 *	@returns {Object} translatedProps
 */
function translateMapping(props, intl, onlyTextNodes) {
  var out = {};
  intl = intl || {};
  props = preact_i18n_esm_select(props);
  for (var name in props) {
    if (props.hasOwnProperty(name) && props[name]) {
      var def = props[name];

      // if onlyTextNodes=true, skip any props that aren't <Text /> vnodes
      if (!onlyTextNodes && typeof def === 'string') {
        out[name] = translate(def, intl.scope, intl.dictionary);
      } else if (def.nodeName === Text) {
        // it's a <Text />, just grab its props:
        var c = def.children;
        def = preact_i18n_esm_assign({
          //no fallback if there are no children.  Return first child if there is only 1, or array of children if there are more than one
          fallback: c.length && (c.length === 1 ? c[0] : c)
        }, def.attributes);
        out[name] = translate(def.id, intl.scope, intl.dictionary, def.fields, def.plural, def.fallback);
      }
    }
  }
  return out;
}

/** `<Localizer />` is a Compositional Component.
 *	It "renders" out any `<Text />` values in its child's props.
 *
 *	@name Localizer
 *	@param {Object} props
 *	@param {Object} props.children	Child components with props to localize.
 *	@param {Object} context
 *	@param {Object} context.intl		[internal] dictionary and scope info
 *	@example
 *	<Localizer>
 *		<input placeholder={<Text id="username.placeholder" />} />
 *	</Localizer>
 *	// produces:
 *	<input placeholder="foo" />
 *
 *	@example
 *	<Localizer>
 *		<abbr title={<Text id="oss-title">Open Source Software</Text>}>
 *			<Text id="oss">OSS</Text>
 *		</abbr>
 *	</Localizer>
 *	// produces:
 *	<abbr title="Open Source Software">OSS</abbr>
 */
function Localizer(ref, ref$1) {
  var children = ref.children;
  var intl = ref$1.intl;

  var child = children && children[0];
  return child && Object(preact_min["cloneElement"])(child, translateMapping(child.attributes, intl, true));
}

/* eslint-disable react/no-danger */

/** `<MarkupText>` is just like {@link Text} but it can also contain html markup in rendered strings.  It wraps its contents in a `<span>` tag.
 *
 *	@param {Object} props				props
 *	@param {String} props.id			Key to look up in intl dictionary, within any parent scopes (`$scope1.$scope2.$id`)
 *	@param {Object} [props.fields={}]	Values to inject into template `{{fields}}`
 *	@param {Number} [props.plural]		Integer "count", used to select plural forms
 *	@param {Object} context
 *	@param {Object} context.intl		[internal] dictionary and scope info
 *
 *	@example
 *	// If there is no dictionary in context..
 *	<MarkupText id="foo"><b>The Foo</b></MarkupText>
 *	// ..produces the vnode:
 *	<span><b>The Foo</b></span>
 *
 *	@example
 *	// Given a dictionary and some fields..
 *	<IntlProvider definition={{ foo:'Le Feux <b>{{bar}}</b>' }}>
 *		<MarkupText id="foo" fields={{ bar: 'BEAR' }}>The Foo</MarkupText>
 *	</IntlProvider>
 *	// ..produces the vnode:
 *	<span>Le Feux <b>BEAR</b></span>
 *
 *	@example
 *	// Within a scope, both `id` and the definition are namespaced..
 *	<IntlProvider scope="weather" definition={{ foo:'Le <a href="http://foo.com">Feux</a>' }}>
 *		<MarkupText id="foo">The Foo</MarkupText>
 *	</IntlProvider>
 *	// ..produces the vnode:
 *	<span>Le <a href="http://foo.com">Feux</a></span>
 *
 *	@example
 *	// renders nothing if there is no key match and no fallback
 *	<div><MarkupText /></div>
 *	// ..produces the vnode:
 *	<div/>
 */
function MarkupText(props) {
  return Object(preact_min["h"])(Localizer, null, Object(preact_min["h"])(Html, { html: Object(preact_min["h"])(Text, props), id: props.id }));
}

function Html(ref) {
  var html = ref.html;
  var id = ref.id;

  var value = !html ? html : typeof html === 'string' ? Object(preact_min["h"])('span', { dangerouslySetInnerHTML: { __html: html } }) : Object(preact_min["h"])('span', null, html);
  return Object(preact_min["h"])(HighlightI18N, { id: id, value: value });
}

/** `@withText()` is a Higher Order Component, often used as a decorator.
 *
 *	It wraps a child component and passes it translations
 *	based on a mapping to the dictionary & scope in context.
 *
 *	@param {Object|Function|String} mapping		Maps prop names to intl keys (or `<Text>` nodes).
 *
 *	@example @withText({
 *		placeholder: 'user.placeholder'
 *	})
 *	class Foo {
 *		// now the `placeholder` prop is our localized String:
 *		render({ placeholder }) {
 *			return <input placeholder={placeholder} />
 *		}
 *	}
 *
 *	@example @withText({
 *		placeholder: <Text id="user.placeholder">fallback text</Text>
 *	})
 *	class Foo {
 *		render({ placeholder }) {
 *			return <input placeholder={placeholder} />
 *		}
 *	}
 *
 *	@example @withText('user.placeholder')
 *	class Foo {
 *		// for Strings/Arrays, the last path segment becomes the prop name:
 *		render({ placeholder }) {
 *			return <input placeholder={placeholder} />
 *		}
 *	}
 *
 *	@example
 *	// Works with functional components, too:
 *	const Foo = withText('user.placeholder')( props =>
 *		<input placeholder={props.placeholder} />
 *	)
 */
function withText(mapping) {
  return function withTextWrapper(Child) {
    return function WithTextWrapper(props, context) {
      var map = typeof mapping === 'function' ? mapping(props, context) : mapping;
      var translations = translateMapping(map, context.intl);
      return Object(preact_min["h"])(Child, preact_i18n_esm_assign(preact_i18n_esm_assign({}, props), translations));
    };
  };
}

intl$1.intl = intl$1;
intl$1.IntlProvider = IntlProvider;
intl$1.Text = Text;
intl$1.MarkupText = MarkupText;
intl$1.Localizer = Localizer;
intl$1.withText = withText;

/* harmony default export */ var preact_i18n_esm = (intl$1);
//# sourceMappingURL=preact-i18n.esm.js.map
// CONCATENATED MODULE: ./components/lang/en.tsx
var definition = {
    "heading": "Mailingful",
    "menu": {
        "home": "Home",
        "faq": "FAQ",
        "pricing": "Pricing",
        "demo": "Demo",
        "mailbox": "Mailbox"
    },
    "home": {
        "explanation": "Mailingful will be a simple and clean alternative to Google Inbox.",
        "google": "In September of 2018 Google announced that support for Inbox will stop in March of 2019. This service wants to be a spiritual successor to Inbox.",
        "features": {
            "title": "Features",
            "light-weight": {
                "short": "Minimal",
                "long": "A minimal but beautiful design, with no cruft or overhead that wastes time and network bandwidth."
            },
            "threads": {
                "short": "Mail Threads",
                "long": "Emails will be grouped together and displayed as threads so that you will never lose your overview."
            },
            "labels": {
                "short": "Label your Emails",
                "long": "Extensive support for automated labels (e.g. categories like 'promotion' or 'social media') as well as manual labels will help you sort your inbox."
            },
            "markdown-driven": {
                "short": "Markdown",
                "long": "Use Markdown to craft your emails."
            },
            "scheduling": {
                "short": "Scheduled Emails",
                "long": "Schedule the sending of messages at your convenience."
            },
            "non-interfering": {
                "short": "Non-Interfering",
                "long": "mailingful.com will not interfere with your messages as other services do. Send/Receive .zip files without worrying that they will never reach their destination."
            }
        },
        "promotion": "Do you want to know when we launch our beta?",
        "notify": "Notify Me",
        "added": "Thank You! We added your email address and we will notify you when we launch our beta."
    }
};

// CONCATENATED MODULE: ../node_modules/space-lift/es/iterator.js
var iteratorSymbol = typeof Symbol === 'function' && Symbol.iterator || '@@iterator';
function singleValueIterator(getValue) {
    return function () {
        var done = false;
        var value = getValue(this);
        return {
            next: function next() {
                if (done) return { done: true };
                done = true;
                return { value: value, done: false };
            }
        };
    };
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/lift.js

var lift = function lift(obj) {
    if (obj instanceof Array) return new ArrayOps(obj);
    if (obj instanceof Date) return new DateOps(obj);
    if (typeof obj === 'string') return new StringOps(obj);
    if (typeof obj === 'number') return new NumberOps(obj);
    return new ObjectOps(obj);
};
/* harmony default export */ var es_lift = (lift);
function getValue(input) {
    return input && input['_isLiftWrapper'] ? input.value() : input;
}
function makeOps() {
    var Ops = /** @class */function () {
        function Ops(_value) {
            this._value = _value;
            this._isLiftWrapper = true;
        }
        Ops.prototype.value = function () {
            return this._value;
        };
        return Ops;
    }();
    Ops.prototype[iteratorSymbol] = singleValueIterator(function (self) {
        return self._value;
    });
    return Ops;
}
var ArrayOps = makeOps();
ArrayOps.prototype[iteratorSymbol] = function () {
    var i = 0;
    var self = this;
    return {
        next: function next() {
            return i < self._value.length ? { value: self._value[i++], done: false } : { done: true };
        }
    };
};
var ObjectOps = makeOps();
var NumberOps = makeOps();
var StringOps = makeOps();
var DateOps = makeOps();
// CONCATENATED MODULE: ../node_modules/immupdate/es/immupdate.js
//--------------------------------------
//  Shallow update
//--------------------------------------
/** Performs a shallow update of an object using a partial object of the same shape. A new object is returned. */
function update(host, spec) {
    var result = cloneObject(host);
    var hasChanged = false;
    for (var key in spec) {
        var specValue = spec[key];
        if (specValue === DELETE) {
            delete result[key];
            hasChanged = hasChanged || key in host;
        } else {
            result[key] = specValue;
            hasChanged = hasChanged || host[key] !== specValue;
        }
    }
    return hasChanged ? result : host;
}
// We lie about the public type so that only a property that is optional or that can be assigned to undefined can be DELETE'd
/** Marker used to delete a key */
var DELETE = {};
var _Updater = /** @class */function () {
    function _Updater(data) {
        this.data = data;
    }
    _Updater.prototype.at = function (keyOrIndex) {
        return new _Updater({ type: 'at', parent: this, field: keyOrIndex });
    };
    _Updater.prototype.set = function (value) {
        return this.modify(function (_) {
            return value;
        });
    };
    _Updater.prototype.modify = function (modifier) {
        var target = this.findTarget();
        var result = this.cloneForUpdate(target);
        if (result.name === 'aborted') return target;
        var clonedTarget = result.clonedTarget,
            leafHost = result.leafHost,
            field = result.field,
            structurallyModified = result.structurallyModified;
        var leafHostIsOption = isOptionLike(leafHost);
        var currentValue = leafHostIsOption ? leafHost.get() : leafHost[field];
        var value = modifier(currentValue);
        // Actually shallow update, e.g deepUpdate(obj).set(otherObj)
        // Not much point but the typings make it possible ¯\_(ツ)_/¯
        if (field === '') return leafHostIsOption ? leafHost.Option(value) : value;
        var modified = structurallyModified;
        if (value === DELETE) {
            if (leafHostIsOption) {
                if (field in leafHost.value) modified = true;
                delete leafHost.value[field];
            } else {
                if (field in leafHost) modified = true;
                delete leafHost[field];
            }
        } else {
            if (currentValue !== value) modified = true;
            if (leafHostIsOption) {
                leafHost.value[field] = value;
            } else {
                // Setting a T | undefined as the value of an Option
                // should actually build a new Option<T>
                var finalValue = isOptionLike(currentValue) ? currentValue.Option(value) : value;
                leafHost[field] = finalValue;
            }
        }
        return modified ? clonedTarget : target;
    };
    _Updater.prototype.withDefault = function (value) {
        return new _Updater({ type: 'withDefault', parent: this, defaultValue: clone(value) });
    };
    _Updater.prototype.abortIfNot = function (predicate) {
        return new _Updater({ type: 'abortIfNot', parent: this, predicate: predicate });
    };
    _Updater.prototype.abortIfUndef = function () {
        return this.abortIfNot(function (value) {
            if (isOptionLike(value)) return value.type === 'some';
            return value !== undefined;
        });
    };
    _Updater.prototype.findTarget = function () {
        var current = this;
        while (true) {
            if (current.data.type === 'root') return current.data.target;
            current = current.data.parent;
        }
    };
    _Updater.prototype.parentUpdaters = function () {
        var updaters = [this];
        var parentUpdater = this.data.parent;
        // Ignore the root updater
        while (parentUpdater && parentUpdater.data.parent) {
            updaters.unshift(parentUpdater);
            parentUpdater = parentUpdater.data.parent;
        }
        return updaters;
    };
    _Updater.prototype.getNextValue = function (previousHost, host, field, isLast) {
        var hostIsOption = isOptionLike(host);
        var previousHostIsOption = isOptionLike(previousHost);
        if (this.data.type === 'at') {
            var newField = this.data.field;
            if (hostIsOption) {
                if (host.type === 'none') return { host: undefined, field: newField };
                host.value = clone(host.value);
                var value = host.value[newField];
                var nextValue = clone(value);
                var newHost_1 = isLast ? host : nextValue;
                host.value[this.data.field] = nextValue;
                return { host: newHost_1, field: newField };
            } else {
                if (!host) return { host: undefined, field: newField };
                var value = host[newField];
                var nextValue = clone(value);
                var newHost_2 = isLast ? host : nextValue;
                host[this.data.field] = nextValue;
                return { host: newHost_2, field: newField };
            }
        }
        if (this.data.type === 'abortIfNot' && this.data.predicate(host) === false) {
            return { host: host, field: field, aborted: true };
        }
        if (this.data.type === 'withDefault' && (previousHost[field] === undefined || isOptionLike(previousHost[field]))) {
            var nextValue = isOptionLike(host) ? host.Option(this.data.defaultValue) : this.data.defaultValue;
            var newHost_3 = isLast ? previousHost : nextValue;
            if (previousHostIsOption) previousHost.value[field] = nextValue;else previousHost[field] = nextValue;
            return { host: newHost_3, field: field, structurallyModified: true };
        }
        var newHost = isLast ? previousHost : host;
        return { host: newHost, field: field };
    };
    _Updater.prototype.cloneForUpdate = function (target) {
        var updaters = this.parentUpdaters();
        var obj = cloneContainer(target);
        var previousHost = obj;
        var host = obj;
        var field = '';
        var structurallyModified = false;
        for (var i = 0; i < updaters.length; i++) {
            var result = updaters[i].getNextValue(previousHost, host, field, i === updaters.length - 1);
            if (result.aborted) return { name: 'aborted' };
            structurallyModified = structurallyModified || result.structurallyModified;
            previousHost = host;
            host = result.host;
            field = result.field;
        }
        return {
            name: 'result',
            clonedTarget: obj,
            leafHost: host,
            field: field,
            structurallyModified: structurallyModified
        };
    };
    return _Updater;
}();
// TODO: This probably won't fly with some weird edge cases like deepUpdate(new Date()).set(), etc
// For completion sake, we should probably fix it.
function isContainer(obj) {
    return obj !== null && typeof obj === 'object';
}
function clone(obj) {
    return isContainer(obj) ? cloneContainer(obj) : obj;
}
function cloneContainer(obj) {
    if (Array.isArray(obj)) return obj.slice();
    if (isOptionLike(obj)) return obj.map(identity);
    return cloneObject(obj);
}
function cloneObject(obj) {
    var cloned = {};
    Object.keys(obj).forEach(function (key) {
        cloned[key] = obj[key];
    });
    return cloned;
}
function identity(x) {
    return x;
}
function isOptionLike(obj) {
    return !!obj && (obj.type === 'some' || obj.type === 'none') && obj.Option;
}
function deepUpdate(target) {
    return new _Updater({ type: 'root', target: target });
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/result/index.js


var ResultObject = {};
ResultObject.all = function (arr) {
    var okValues = [];
    var currentResult;
    for (var i = 0; i < arr.length; i++) {
        var currentResult_1 = arr[i];
        if (!currentResult_1.isOk()) return currentResult_1;
        okValues.push(currentResult_1.get());
    }
    return Ok(okValues);
};
ResultObject.isResult = function (value) {
    return !!value && (value.type === 'ok' || value.type === 'err');
};
function _Ok(value) {
    this._value = value;
}
_Ok.prototype = {
    type: 'ok',
    isOk: function isOk() {
        return true;
    },
    map: function map(fn) {
        return Ok(getValue(fn(this._value)));
    },
    mapError: function mapError(fn) {
        return this;
    },
    flatMap: function flatMap(fn) {
        return fn(this._value);
    },
    fold: function fold(ifErr, ifOk) {
        return ifOk(this._value);
    },
    toOption: function toOption() {
        return Some(this._value);
    },
    toString: function toString() {
        return "Ok(" + this._value + ")";
    },
    get: function get() {
        return this._value;
    }
};
function _Err(error) {
    this._error = error;
}
_Err.prototype = {
    type: 'err',
    isOk: function isOk() {
        return false;
    },
    map: function map(fn) {
        return this;
    },
    mapError: function mapError(fn) {
        return Err(fn(this._error));
    },
    flatMap: function flatMap(fn) {
        return this;
    },
    fold: function fold(ifErr, ifOk) {
        return ifErr(this._error);
    },
    toOption: function toOption() {
        return None;
    },
    toString: function toString() {
        return "Err(" + this._error + ")";
    },
    get: function get() {
        return this._error;
    }
};
var Result = ResultObject;
function Ok(value) {
    return new _Ok(value);
}
function Err(error) {
    return new _Err(error);
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/option/index.js
var option__a;



// The Option factory / static object
var OptionObject = function OptionObject(value) {
    return isDef(value) ? Some(value) : None;
};
OptionObject.all = function (arr) {
    var values = [];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (Option.isOption(value)) value = value.get();
        if (!isDef(value)) return None;
        values.push(value);
    }
    return Some(values);
};
OptionObject.isOption = function (value) {
    return !!value && (value.type === 'some' || value.type === 'none');
};
function makeNone() {
    var self = {};
    function returnNone() {
        return None;
    }
    function returnFalse() {
        return false;
    }
    self.type = 'none';
    self.Option = OptionObject;
    self.get = function () {
        return undefined;
    };
    self.isDefined = returnFalse;
    self.forEach = function () {};
    self.map = returnNone;
    self.flatMap = returnNone;
    self.filter = returnNone;
    self.fold = function (ifEmpty) {
        return ifEmpty();
    };
    self.orElse = function (alt) {
        return alt();
    };
    self.getOrElse = function (alt) {
        return alt;
    };
    self.contains = returnFalse;
    self.exists = returnFalse;
    self.toArray = function () {
        return es_lift([]);
    };
    self.toResult = function (ifNone) {
        return Err(ifNone());
    };
    self.toString = function () {
        return 'None';
    };
    self.toJSON = function () {
        return null;
    };
    self[iteratorSymbol] = function () {
        return {
            next: function next() {
                return { done: true };
            }
        };
    };
    return self;
}
function _Some(value) {
    this.value = value;
}
_Some.prototype = (option__a = {
    type: 'some',
    Option: OptionObject,
    get: function get() {
        return this.value;
    },
    isDefined: function isDefined() {
        return true;
    },
    forEach: function forEach(fn) {
        fn(this.value);
    },
    map: function map(fn) {
        return Option(getValue(fn(this.value)));
    },
    flatMap: function flatMap(fn) {
        return fn(this.value);
    },
    filter: function filter(fn) {
        return fn(this.value) ? this : None;
    },
    fold: function fold(ifEmpty, ifDefined) {
        return ifDefined(this.value);
    },
    orElse: function orElse() {
        return this;
    },
    getOrElse: function getOrElse() {
        return this.value;
    },
    contains: function contains(value) {
        return this.value === value;
    },
    exists: function exists(predicate) {
        return predicate(this.value);
    },
    toArray: function toArray() {
        return es_lift([this.value]);
    },
    toResult: function toResult() {
        return Ok(this.value);
    },
    toString: function toString() {
        return "Some(" + this.value + ")";
    },
    toJSON: function toJSON() {
        return this.value.toJSON ? this.value.toJSON() : this.value;
    }
}, option__a[iteratorSymbol] = singleValueIterator(function (self) {
    return self.value;
}), option__a);
function isDef(value) {
    return value !== null && value !== undefined;
}
var Option = OptionObject;
/** Creates a new Some instance using a non nullable value */
// extends {} to prevent null and undefined being passed
function Some(value) {
    return new _Some(value);
}
var None = makeNone();
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/range.js

/*
* Returns a number[] wrapper with all numbers from start to stop (inclusive),
* incremented or decremented by step.
*/
function range(start, stop, step) {
    if (arguments.length === 1) {
        stop = arguments[0] - 1;
        start = 0;
    }
    step = step || 1;
    var result = [];
    var increasing = step > 0;
    var next = start;
    while (increasing && next <= stop || !increasing && next >= stop) {
        result.push(next);
        next = next + step;
    }
    return new ArrayOps(result);
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/fromArrayLike.js

/**
 * Converts an Array-like object (such as an arguments or NodeList instance) to a regular Array
 */
function fromArrayLike(arrayLike) {
  return new ArrayOps([].slice.call(arrayLike));
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/tuple.js
function tuple() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    return arr;
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/set.js

/**
 * Creates a Set-like object (string keys, true values) from a list of keys
 */
function Set() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    var result = {};
    keys.forEach(function (key) {
        return result[key] = true;
    });
    return new ObjectOps(result);
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/is.js
/** Returns whether an object is an Array */
var array = Array.isArray;
/** Returns whether this object is a function */
function is_func(obj) {
    return typeof obj === 'function';
}
/** Returns whether this object is a string */
function string(obj) {
    return typeof obj === 'string';
}
/** Returns whether this object is a number */
function is_number(obj) {
    return typeof obj === 'number';
}
/** Returns whether this object is a boolean */
function is_boolean(obj) {
    return typeof obj === 'boolean';
}
/** Returns whether this value is an object (e.g not a primitive: dates, arrays, functions, objects, regexes, `new Number(0)`, and `new String('')) */
function object(obj) {
    var type = typeof obj;
    return type == 'object' || type == 'function';
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/function/memoize.js

var currentMemoId = 0;
/**
 * Memoizes a function of arbitrary arity.
 * This has two main uses:
 *   1) Reducing the CPU time taken by expensive calculations at the cost of some memory overhead
 *   2) Producing stable references for a given set of arguments. Useful when relying on reference equality.
 *
 * Memoized functions keep internal state. If you wish to clear that state entirely, you can recreate the function.
 */
function memoize(fun, options) {
    // The unique property name used by this memoize function instance.
    // This is used to store the id/reference of object arguments, as Weak maps/sets are very limited.
    var memoKey = "__memo__" + currentMemoId++;
    var lastArgKeys = [];
    var cacheSize = options && options.cacheSize || 30;
    var keyFunction = options && options.key;
    // The unique ids/references of objects inside the arityNCache cache
    var objId = 0;
    var arity0Cache;
    var arityNCache;
    var keyCache;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 0 arguments edge-case
        if (args.length === 0) {
            if (!arity0Cache) arity0Cache = fun();
            return arity0Cache;
        }
        // custom key function
        else if (keyFunction) {
                keyCache = keyCache || {};
                var key = keyFunction.apply(null, args);
                var result = keyCache[key];
                if (!result) {
                    lastArgKeys.push(key);
                    limitCacheSize(keyCache, lastArgKeys, cacheSize);
                    result = keyCache[key] = fun.apply(null, args);
                }
                return result;
            }
            // N arguments
            else {
                    arityNCache = arityNCache || {};
                    var key = '';
                    for (var i = 0; i < args.length; i++) {
                        var arg = args[i];
                        var argKey = void 0;
                        if (object(arg)) {
                            argKey = arg[memoKey];
                            if (!argKey) {
                                // Non enumerable
                                Object.defineProperty(arg, memoKey, { value: "obj" + objId++ });
                                argKey = arg[memoKey];
                            }
                        } else {
                            argKey = arg;
                        }
                        key += argKey + '_';
                    }
                    var result = arityNCache[key];
                    if (!result) {
                        lastArgKeys.push(key);
                        limitCacheSize(arityNCache, lastArgKeys, cacheSize);
                        result = arityNCache[key] = fun.apply(null, args);
                    }
                    return result;
                }
    };
}
function limitCacheSize(cache, lastArgKeys, size) {
    if (lastArgKeys.length === size + 1) {
        var key = lastArgKeys.shift();
        delete cache[key];
    }
}
// CONCATENATED MODULE: ../node_modules/space-lift/es/index.js

/* harmony default export */ var es = (es_lift);










var is = is_namespaceObject;
// CONCATENATED MODULE: ./api/api.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var Status;
(function (Status) {
    Status[Status["OK"] = 0] = "OK";
    Status[Status["NETWORK_ERROR"] = 1] = "NETWORK_ERROR";
    Status[Status["BAD_REQUEST"] = 2] = "BAD_REQUEST";
})(Status || (Status = {}));
var api_API = /** @class */ (function () {
    function API() {
    }
    API.setCookie = function (name, value, seconds) {
        var expires = "";
        if (seconds) {
            var date = new Date();
            date.setTime(date.getTime() + (seconds * 3600 * 24));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };
    API.getCookie = function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return Some(c.substring(nameEQ.length, c.length));
        }
        return None;
    };
    API.eraseCookie = function (name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    };
    API.getHeaders = function () {
        if (!this.TOKEN.isDefined()) {
            this.TOKEN = API.getCookie("token");
            if (!this.TOKEN.isDefined()) {
                window.location.href = "/login";
            }
        }
        return new Headers({
            'Authorization': "Bearer " + this.TOKEN.get(),
            'Content-Type': 'application/json'
        });
    };
    API.refreshToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/refresh_token", { headers: this.getHeaders(), method: "GET" })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = (_a.sent());
                        if (response.ok && json.token) {
                            this.TOKEN = Some(json.token);
                            this.setCookie("token", json.token, 3600);
                        }
                        else {
                            window.location.href = "/login";
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.getMails = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/mails/get", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(query) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.getMailContent = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/mails/content", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(query) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.getEnvelope = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/mails/envelope", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(query) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        console.log(e_4);
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.getExternalAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/accounts/get", { headers: this.getHeaders(), method: "POST", body: JSON.stringify({}) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        console.log(e_5);
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.markSeen = function (seen) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/mails/markseen", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(seen) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.insertAttachment = function (newAttachment) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/attachments/create", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(newAttachment) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_7 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.deleteAttachment = function (deleteAttachment) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/attachments/delete", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(deleteAttachment) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_8 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.saveDraft = function (draft) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/drafts/create", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(draft) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_9 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.sendDraft = function (byId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/drafts/send", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(byId) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_10 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.scheduleDraft = function (byId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/drafts/schedule", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(byId) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_11 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.moveToFolder = function (moveTo) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/mails/movetofolder", { headers: this.getHeaders(), method: "POST", body: JSON.stringify(moveTo) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_12 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.insertPromotion = function (promotion) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, e_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/promotions/insert", { method: "POST", body: JSON.stringify(promotion) })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (response.ok) {
                            return [2 /*return*/, Ok(json)];
                        }
                        else {
                            return [2 /*return*/, Err(Status.BAD_REQUEST)];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_13 = _a.sent();
                        return [2 /*return*/, Err(Status.NETWORK_ERROR)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    API.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var input, response, json, e_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        input = {
                            username: email,
                            password: password
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(this.ORIGIN + "/login", { headers: new Headers({ 'Content-Type': 'application/json' }), method: "POST", body: JSON.stringify(input) })];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 3:
                        json = (_a.sent());
                        if (response.ok && json.token) {
                            this.TOKEN = Some(json.token);
                            this.setCookie("token", json.token, 3600);
                            return [2 /*return*/, Status.OK];
                        }
                        else {
                            return [2 /*return*/, Status.BAD_REQUEST];
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_14 = _a.sent();
                        return [2 /*return*/, Status.NETWORK_ERROR];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    API.ORIGIN = "https://api.mailingful.com/v1";
    API.TOKEN = None;
    API.hasToken = function () { return API.TOKEN.isDefined(); };
    return API;
}());


// EXTERNAL MODULE: ./routes/login/style.css
var login_style = __webpack_require__("MrFd");
var login_style_default = /*#__PURE__*/__webpack_require__.n(login_style);

// CONCATENATED MODULE: ./routes/login/index.tsx
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var login___awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var login___generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var login_Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.login = function (event) { return login___awaiter(_this, void 0, void 0, function () {
            var result;
            return login___generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        return [4 /*yield*/, api_API.login(this.state.email, this.state.password)];
                    case 1:
                        result = _a.sent();
                        switch (result) {
                            case Status.OK:
                                this.props.history.push("/mailbox");
                                break;
                            case Status.NETWORK_ERROR:
                                alert("Kein Verbindung!");
                                break;
                            case Status.BAD_REQUEST:
                                alert("Falscher Nutzername/Password");
                                break;
                        }
                        event.preventDefault();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = { password: "", email: "" };
        return _this;
    }
    Login.prototype.render = function (props, state) {
        var _this = this;
        return (Object(preact_min["h"])("div", { class: login_style["login"] },
            Object(preact_min["h"])("form", { onSubmit: this.login },
                Object(preact_min["h"])("label", { for: "email" }, "E-Mail"),
                Object(preact_min["h"])("input", { type: "text", value: state.email, onChange: function (event) { return _this.setState({ email: event.target.value }); }, id: "email" }),
                Object(preact_min["h"])("label", { for: "password" }, "Password"),
                Object(preact_min["h"])("input", { type: "password", value: state.password, onChange: function (event) { return _this.setState({ password: event.target.value }); }, id: "password" }),
                Object(preact_min["h"])("button", { type: "submit" }, "Login"))));
    };
    return Login;
}(preact_min["Component"]));
/* harmony default export */ var login = (login_Login);

// EXTERNAL MODULE: ./components/menu/style.css
var menu_style = __webpack_require__("jsVd");
var menu_style_default = /*#__PURE__*/__webpack_require__.n(menu_style);

// CONCATENATED MODULE: ./components/menu/index.tsx
var menu___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var menu_Menu = /** @class */ (function (_super) {
    menu___extends(Menu, _super);
    function Menu(props) {
        return _super.call(this, props) || this;
    }
    Menu.prototype.render = function (props, state) {
        return (Object(preact_min["h"])("nav", { class: menu_style["menu"] },
            Object(preact_min["h"])("ul", null,
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])(es_NavLink, { activeClassName: menu_style["active"], exact: true, to: "/" },
                        Object(preact_min["h"])(Text, { id: "menu.home" }))),
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])(es_NavLink, { activeClassName: menu_style["active"], to: "/faq" },
                        Object(preact_min["h"])(Text, { id: "menu.faq" }))),
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])(es_NavLink, { activeClassName: menu_style["active"], to: "/mailbox" },
                        Object(preact_min["h"])(Text, { id: "menu.mailbox" }))))));
    };
    return Menu;
}(preact_min["Component"]));
/* harmony default export */ var menu = (menu_Menu);

// EXTERNAL MODULE: ./routes/home/style.css
var home_style = __webpack_require__("ZAL5");
var home_style_default = /*#__PURE__*/__webpack_require__.n(home_style);

// CONCATENATED MODULE: ./routes/home/index.tsx
var home___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var home___awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var home___generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var home_Home = /** @class */ (function (_super) {
    home___extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this.added = false;
        _this.promotion = function () { return home___awaiter(_this, void 0, void 0, function () {
            var element, response;
            return home___generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        element = document.getElementById("promotion");
                        if (!element) return [3 /*break*/, 2];
                        return [4 /*yield*/, api_API.insertPromotion({ Email: element.value })];
                    case 1:
                        response = _a.sent();
                        if (response.isOk() && response.get().Payload) {
                            this.setState({ added: true });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.state = { added: false };
        return _this;
    }
    Home.prototype.renderFeatures = function () {
        var features = [
            "home.features.light-weight",
            "home.features.threads",
            "home.features.labels",
            "home.features.markdown-driven",
            "home.features.scheduling",
            "home.features.non-interfering"
        ];
        return Object(preact_min["h"])("ul", null, features.map(function (feature) { return Object(preact_min["h"])("li", null,
            Object(preact_min["h"])("strong", null,
                Object(preact_min["h"])(Text, { id: feature + ".short" })),
            " \u2014 ",
            Object(preact_min["h"])(Text, { id: feature + ".long" })); }));
    };
    Home.prototype.render = function (props, state) {
        var _this = this;
        var added = state.added ? (Object(preact_min["h"])("p", null,
            Object(preact_min["h"])(Text, { id: "home.added" }))) : undefined;
        return (Object(preact_min["h"])("div", { class: home_style["home"] },
            Object(preact_min["h"])("h1", null,
                Object(preact_min["h"])(Text, { id: "heading" })),
            Object(preact_min["h"])(menu, null),
            Object(preact_min["h"])("p", null,
                Object(preact_min["h"])(Text, { id: "home.explanation" })),
            Object(preact_min["h"])("p", null,
                Object(preact_min["h"])(Text, { id: "home.google" })),
            Object(preact_min["h"])("h3", null,
                Object(preact_min["h"])(Text, { id: "home.features.title" })),
            this.renderFeatures(),
            Object(preact_min["h"])("p", null,
                Object(preact_min["h"])(Text, { id: "home.promotion" })),
            Object(preact_min["h"])("form", { class: home_style["promotion"], onSubmit: function (e) { e.preventDefault(); _this.promotion(); } },
                Object(preact_min["h"])("input", { placeholder: "Your Email", id: "promotion", type: "email", class: home_style["fixedheight"] }),
                Object(preact_min["h"])("button", { class: home_style["fixedheight"] },
                    Object(preact_min["h"])(Text, { id: "home.notify" }))),
            added));
    };
    return Home;
}(preact_min["Component"]));
/* harmony default export */ var home = (home_Home);

// EXTERNAL MODULE: ./routes/faq/style.css
var faq_style = __webpack_require__("kvG9");
var faq_style_default = /*#__PURE__*/__webpack_require__.n(faq_style);

// CONCATENATED MODULE: ./routes/faq/index.tsx
var faq___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var faq_FAQ = /** @class */ (function (_super) {
    faq___extends(FAQ, _super);
    function FAQ() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FAQ.prototype.render = function () {
        return (Object(preact_min["h"])("div", { class: faq_style["faq"] },
            Object(preact_min["h"])("h1", null, "Mailingful - FAQ"),
            Object(preact_min["h"])(menu, null),
            Object(preact_min["h"])("ul", null,
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])("strong", null, "Why did you create mailingful?"),
                    Object(preact_min["h"])("p", null,
                        "Even before Google announced to phase out inbox I was unhappy with the current state of Inbox:",
                        Object(preact_min["h"])("ul", null,
                            Object(preact_min["h"])("li", null, "Inbox was a bit bloated and slow"),
                            Object(preact_min["h"])("li", null, "Critical features like the scheduled sending of emails were never going to arrive"),
                            Object(preact_min["h"])("li", null, "A lot of settings were only accessible through Gmail"),
                            Object(preact_min["h"])("li", null, "Google interfering with certain attachments (.zip) files on the grounds of them being too \"dangerous\"."),
                            Object(preact_min["h"])("li", null, "Small UI Problems that added up (e.g. try to move a mail marked as spam back to your inbox on the desktop version)"))),
                    Object(preact_min["h"])("p", null,
                        "But Inbox also got a lot of things right:",
                        Object(preact_min["h"])("ul", null,
                            Object(preact_min["h"])("li", null, "Focus on content, don't have multiple tabs like Gmail"),
                            Object(preact_min["h"])("li", null, "Automatically group emails into categories"),
                            Object(preact_min["h"])("li", null, "Decent support for threading")))),
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])("strong", null, "Will Javascript be required?"),
                    Object(preact_min["h"])("p", null, "Yes, for now, Javascript is mandatory. I might reconsider this if there is a strong demand for an HTML-only version.")),
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])("strong", null, "Pricing"),
                    Object(preact_min["h"])("p", null,
                        "The smallest plan will start in the ",
                        Object(preact_min["h"])("i", null, "5-10$ per month"),
                        " region. This will not be the cheapest service available and I am ok with that. More details will be announced on our mailing list.")),
                Object(preact_min["h"])("li", null,
                    Object(preact_min["h"])("strong", null, "Will there be a free version?"),
                    Object(preact_min["h"])("p", null, "There will be a 30-day trial version, but no free version.")))));
    };
    return FAQ;
}(preact_min["Component"]));
/* harmony default export */ var faq = (faq_FAQ);

// CONCATENATED MODULE: ../node_modules/space-lift/es/transform.js

function transform(func) {
    return es_lift(getValue(func(this.value())));
}
NumberOps.prototype.transform = transform;
StringOps.prototype.transform = transform;
ArrayOps.prototype.transform = transform;
ObjectOps.prototype.transform = transform;
DateOps.prototype.transform = transform;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/append.js

/**
 * Appends one item at the end of the Array.
 */
function append(item) {
  return new ArrayOps(this.value().concat([item]));
}
ArrayOps.prototype.append = append;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/appendAll.js

/**
 * Appends an Array of items at the end of the Array.
 */
function appendAll(items) {
  return new ArrayOps(this.value().concat(items));
}
ArrayOps.prototype.appendAll = appendAll;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/compact.js

/**
 * Filters all the falsy elements out of this Array.
 * All occurences of false, null, undefined, 0, "" will be removed.
 */
function compact() {
  return this.filter(function (x) {
    return !!x;
  });
}
ArrayOps.prototype.compact = compact;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/count.js

/**
 * Counts the items satisfying a predicate.
 */
function count_count(predicate) {
    var arr = this.value(),
        result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i)) result++;
    }
    return new NumberOps(result);
}
ArrayOps.prototype.count = count_count;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/distinct.js

/**
 * Creates an array without any duplicate item.
 * If a key function is passed, items will be compared based on the result of that function;
 * if not, they will be compared using strict equality.
 */
function distinct(getKey) {
    var arr = this.value(),
        result = [];
    var keySet;
    var refList;
    if (getKey) keySet = {};else refList = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (getKey) {
            var key = getKey(item, i);
            if (!keySet[key]) {
                keySet[key] = 1;
                result.push(item);
            }
        } else {
            if (refList.indexOf(item) === -1) {
                refList.push(item);
                result.push(item);
            }
        }
    }
    return new ArrayOps(result);
}
ArrayOps.prototype.distinct = distinct;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/drop.js

/**
 * Drops the first 'count' items from this Array.
 */
function drop(count) {
  return new ArrayOps(this.value().slice(count));
}
ArrayOps.prototype.drop = drop;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/dropRight.js

/**
 * Drops the last 'count' items from this Array.
 */
function dropRight(count) {
  return new ArrayOps(this.value().slice(0, -count));
}
ArrayOps.prototype.dropRight = dropRight;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/every.js

/**
 * Returns whether all items satisfies the predicate.
 */
function every(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i)) return false;
    }
    return true;
}
ArrayOps.prototype.every = every;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/filter.js

function filter(predicate) {
    var arr = this.value(),
        result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate(item, i)) result.push(item);
    }
    return new ArrayOps(result);
}
ArrayOps.prototype.filter = filter;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/find.js


/**
 * Finds the first item in this Array satisfying a predicate.
 */
function find(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (predicate(item, i)) return Option(item);
    }
    return None;
}
ArrayOps.prototype.find = find;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/findIndex.js


/**
 * Finds the first item index in this Array satisfying a predicate.
 */
function findIndex(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i)) return Option(i);
    }
    return None;
}
ArrayOps.prototype.findIndex = findIndex;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/first.js


/**
 * Returns the first item of this Array, as an Option.
 */
function first() {
  return Option(this.value()[0]);
}
ArrayOps.prototype.first = first;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/flatMap.js


/**
 * Maps this Array to an Array of Array | Option | ArrayOps using a mapper function then flattens it.
 */
function flatMap(fun) {
    var arr = this.value(),
        result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = fun(arr[i], i);
        if (Option.isOption(item)) item.isDefined() && result.push(item.get());else result.push.apply(result, getValue(item));
    }
    return new ArrayOps(result);
}
ArrayOps.prototype.flatMap = flatMap;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/flatten.js


/**
 * Flattens this Array of Arrays/Options.
 */
function flatten() {
    var arr = this.value(),
        result = [];
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (Option.isOption(item)) item.isDefined() && result.push(item.get());else result.push.apply(result, item);
    }
    return new ArrayOps(result);
}
ArrayOps.prototype.flatten = flatten;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/fold.js

/**
 * Folds this Array into a single value, using a starting value.
 */
function fold(startValue, func) {
    var arr = this.value(),
        result = startValue;
    for (var i = 0; i < arr.length; i++) {
        result = func(result, arr[i], i);
    }
    return es_lift(result);
}
ArrayOps.prototype.fold = fold;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/foldRight.js

/**
 * Folds this Array into a single value, using a starting value, from the right.
 */
function foldRight(startValue, func) {
    var arr = this.value(),
        result = startValue,
        i = arr.length;
    while (i--) {
        result = func(result, arr[i], i);
    }
    return typeof result === 'boolean' ? result : es_lift(result);
}
ArrayOps.prototype.foldRight = foldRight;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/get.js


/**
 * Returns the item found at the provided index, as an Option.
 */
function get(index) {
  return Option(this.value()[index]);
}
ArrayOps.prototype.get = get;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/groupBy.js

/**
* Creates an object composed of keys generated from the results of running each element through a discriminator function.
* The corresponding value of each key is an array of the elements responsible for generating the key.
*/
function groupBy(discriminator) {
    var arr = this.value(),
        groups = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        var key = discriminator(item, i);
        if (!groups[key]) groups[key] = [];
        groups[key].push(item);
    }
    return new ObjectOps(groups);
}
ArrayOps.prototype.groupBy = groupBy;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/insert.js

/**
 * Insert an item at a specified index.
 */
function insert(index, item) {
    var result = this.value().slice();
    result.splice(index, 0, item);
    return new ArrayOps(result);
}
ArrayOps.prototype.insert = insert;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/insertAll.js

/**
 * Insert an Array of items at a specified index.
 */
function insertAll(index, items) {
    var result = this.value().slice();
    result.splice.apply(result, [index, 0].concat(items));
    return new ArrayOps(result);
}
ArrayOps.prototype.insertAll = insertAll;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/join.js

/**
 * Joins the items into a string, using a separator.
 */
function join(separator) {
  if (separator === void 0) {
    separator = ',';
  }
  return new StringOps(this.value().join(separator));
}
ArrayOps.prototype.join = join;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/last.js


/**
 * Returns the last item of this Array, as an Option.
 */
function last() {
  var arr = this.value();
  return Option(arr[arr.length - 1]);
}
ArrayOps.prototype.last = last;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/map.js

/**
 * Maps this Array using a mapper function.
 */
function map_map(fun) {
    var arr = this.value(),
        result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = getValue(fun(arr[i], i));
    }
    return new ArrayOps(result);
}
ArrayOps.prototype.map = map_map;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/removeAt.js

/**
 * Removes the item found at the specified index.
 */
function removeAt(index) {
    var result = this.value().slice();
    result.splice(index, index < 0 ? 0 : 1);
    return new ArrayOps(result);
}
ArrayOps.prototype.removeAt = removeAt;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/reverse.js

/**
 * Reverses the Array.
 */
function reverse() {
  return new ArrayOps(this.value().slice().reverse());
}
ArrayOps.prototype.reverse = reverse;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/some.js

/**
 * Returns whether at least one item satisfies the predicate.
 */
function some(predicate) {
    var arr = this.value();
    for (var i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i)) return true;
    }
    return false;
}
ArrayOps.prototype.some = some;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/sort.js

/**
* Sorts the Array. The sort is stable.
* If you want to sort on field "a" then on field "b", just chain a sort on "b" then a sort on "a".
*
* An option Object can be passed to modify the sort behavior.
* The supported options are:
*
* ignoreCase: Assuming strings are going to be sorted, ignore their cases. Defaults to false.
*
* localCompare: Assuming strings are going to be sorted,
*   handle locale-specific characters correctly at the cost of reduced sort speed. Defaults to false.
*
* by: Assuming objects are being sorted, a function either pointing to or computing the value
*   that should be used for the sort. Defaults to undefined.
*
* reverse: Reverses the sort. Defaults to false.
*/
function sort(options) {
    var arr = this.value();
    var o = options || {};
    var mapped = [];
    var missingData = [];
    var result = [];
    var sortFunction;
    for (var i = 0, length = arr.length; i < length; i++) {
        var item = arr[i];
        var originalItem = item;
        if (o.by && item) item = o.by(item);
        if (item === null || item === undefined || item === '') {
            missingData.push(originalItem);
            continue;
        }
        mapped.push({
            index: i,
            value: o.ignoreCase ? item.toUpperCase() : item
        });
    }
    if (o.localeCompare) {
        sortFunction = function sortFunction(a, b) {
            if (a.value !== b.value) return a.value.localeCompare(b.value);else return a.index < b.index ? -1 : 1;
        };
    } else {
        sortFunction = function sortFunction(a, b) {
            if (a.value !== b.value) return a.value < b.value ? -1 : 1;else return a.index < b.index ? -1 : 1;
        };
    }
    mapped.sort(sortFunction);
    for (var i = 0, length = mapped.length; i < length; i++) {
        result.push(arr[mapped[i].index]);
    }
    if (missingData.length) result = result.concat(missingData);
    if (o.reverse) result.reverse();
    return new ArrayOps(result);
}
ArrayOps.prototype.sort = sort;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/take.js

/**
 * Takes the first 'count' items from this Array.
 */
function take(count) {
  return new ArrayOps(this.value().slice(0, count));
}
ArrayOps.prototype.take = take;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/takeRight.js

/**
 * Takes the last 'count' items from this Array.
 */
function takeRight(count) {
    var arr = this.value();
    return new ArrayOps(arr.length < count ? arr.slice(0) : arr.slice(arr.length - count));
}
ArrayOps.prototype.takeRight = takeRight;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/toSet.js

/**
 * Converts this Array of numbers or strings to a Set-like object where values are all truthy.
 */
function toSet() {
    var arr = this.value(),
        result = {};
    for (var i = 0; i < arr.length; i++) {
        result[arr[i]] = true;
    }
    return new ObjectOps(result);
}
ArrayOps.prototype.toSet = toSet;
// CONCATENATED MODULE: ../node_modules/space-lift/es/array/updateAt.js

/**
 * Updates an item at the specified index.
 */
function updateAt(index, updater) {
    var result = this.value().slice();
    if (result.length > index && index > -1) result[index] = getValue(updater(result[index]));
    return new ArrayOps(result);
}
ArrayOps.prototype.updateAt = updateAt;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/add.js

/**
 * Adds a key/value to this heterogeneous object.
 * To add a (nullable) key to an object while preserving its type, use "update()" instead.
 * To add a key to a homogeneous key/value object, use "assoc" instead.
 */
function add_add(key, value) {
  var obj = this.value(),
      result = {};
  Object.keys(obj).forEach(function (key) {
    result[key] = obj[key];
  });
  result[key] = value;
  return new ObjectOps(result);
}
ObjectOps.prototype.add = add_add;
//export function add<A, K extends string, V>(this: ObjectOps<A>, key: K, value: V): ObjectOps<A & Record<K, V>> {
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/assoc.js


// Fake function body just to get TSDoc on augmented interface :(
/**
 * Adds a key/value to this homogeneous key/value object.
 * To add a (nullable) key to an object while preserving its type, use "update()" instead.
 * To add a key to an object and create a new type, use "add()"
 */
function assoc(key, value) {
  return {};
}
ObjectOps.prototype.assoc = add_add;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/contains.js

/**
 * Returns whether this object contains a specific key.
 */
function contains(key) {
  return this.value().hasOwnProperty(key);
}
ObjectOps.prototype.contains = contains;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/remove.js

/**
 * Removes a key/value from this heterogeneous object.
 * To remove a (nullable) key from an object while preserving its type, use "update()" instead.
 * To remove a key from a homogeneous key/value object, use "dissoc" instead.
 */
function remove(keyToRemove) {
    var obj = this.value();
    var keyToRemoveStr = keyToRemove.toString();
    var result = {};
    Object.keys(obj).forEach(function (key) {
        if (key !== keyToRemoveStr) result[key] = obj[key];
    });
    return new ObjectOps(result);
}
ObjectOps.prototype.remove = remove;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/dissoc.js


// Fake function body just to get TSDoc on augmented interface :(
/**
 * Removes a key/value from this homogeneous key/value object.
 * To remove a (nullable) key from an object while preserving its type, use "update()" instead.
 * To remove a key from an object and create a new type, use "remove()"
 */
function dissoc(key) {
  return {};
}
ObjectOps.prototype.dissoc = remove;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/filter.js

/**
 * Filter keys/values of a "Map" object
 */
function filter_filter(predicate) {
    var obj = this.value(),
        result = {};
    Object.keys(obj).forEach(function (key) {
        var value = obj[key];
        if (predicate(key, value)) result[key] = value;
    });
    return new ObjectOps(result);
}
ObjectOps.prototype.filter = filter_filter;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/get.js


/**
 * Returns the value found at the provided key, as an Option.
 * Usage 1: read a value from a "Map" object
 * Usage 2: read an optional value from a domain object
 */
function get_get(key) {
  return Option(this.value()[key]);
}
ObjectOps.prototype.get = get_get;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/isEmpty.js

/**
 * Returns whether this object contains no keys.
 */
function isEmpty() {
  return Object.keys(this.value()).length === 0;
}
ObjectOps.prototype.isEmpty = isEmpty;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/keys.js

/**
 * Creates an Array of all this object's keys, in no particular order.
 */
function keys_keys() {
  return new ArrayOps(Object.keys(this.value()));
}
ObjectOps.prototype.keys = keys_keys;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/mapValues.js

/**
 * Maps all the values of this object.
 */
function mapValues(mapper) {
    var obj = this.value(),
        result = {};
    Object.keys(obj).forEach(function (key) {
        var value = mapper(key, obj[key]);
        result[key] = value;
    });
    return new ObjectOps(result);
}
ObjectOps.prototype.mapValues = mapValues;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/toArray.js

/**
 * Converts this object to an Array of tuples.
 */
function toArray_toArray() {
    var obj = this.value(),
        result = [];
    Object.keys(obj).forEach(function (key) {
        result.push([key, obj[key]]);
    });
    return new ArrayOps(result);
}
ObjectOps.prototype.toArray = toArray_toArray;
// CONCATENATED MODULE: ../node_modules/space-lift/es/object/values.js

/**
 * Creates an Array of all this object's values.
 */
function values() {
    var obj = this.value(),
        result = [];
    Object.keys(obj).forEach(function (key) {
        result.push(obj[key]);
    });
    return new ArrayOps(result);
}
ObjectOps.prototype.values = values;
// CONCATENATED MODULE: ../node_modules/space-lift/es/all.js
/**
 * This module lists all operations currently attached to the various wrapper prototypes.
 * For simplicity sake, you can import this module, or create your own with only the operations you use.
 */

//--------------------------------------
//  Array
//--------------------------------------































//--------------------------------------
//  Object
//--------------------------------------












// EXTERNAL MODULE: ../node_modules/addressparser/lib/addressparser.js
var addressparser = __webpack_require__("eEqv");
var addressparser_default = /*#__PURE__*/__webpack_require__.n(addressparser);

// EXTERNAL MODULE: ../node_modules/classnames/index.js
var classnames = __webpack_require__("9qb7");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./components/mail/style.css
var mail_style = __webpack_require__("+5Dc");
var mail_style_default = /*#__PURE__*/__webpack_require__.n(mail_style);

// CONCATENATED MODULE: ../node_modules/dayjs/src/constant.js
var SECONDS_A_MINUTE = 60;
var SECONDS_A_HOUR = SECONDS_A_MINUTE * 60;
var SECONDS_A_DAY = SECONDS_A_HOUR * 24;
var SECONDS_A_WEEK = SECONDS_A_DAY * 7;

var MILLISECONDS_A_SECOND = 1e3;
var MILLISECONDS_A_MINUTE = SECONDS_A_MINUTE * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_HOUR = SECONDS_A_HOUR * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_DAY = SECONDS_A_DAY * MILLISECONDS_A_SECOND;
var MILLISECONDS_A_WEEK = SECONDS_A_WEEK * MILLISECONDS_A_SECOND;

// English locales
var MS = 'millisecond';
var S = 'second';
var MIN = 'minute';
var H = 'hour';
var D = 'day';
var W = 'week';
var M = 'month';
var Q = 'quarter';
var Y = 'year';
var DATE = 'date';

var FORMAT_DEFAULT = 'YYYY-MM-DDTHH:mm:ssZ';

var INVALID_DATE_STRING = 'Invalid Date';

// regex
var REGEX_PARSE = /^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/;
var REGEX_FORMAT = /\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

var en = {
  name: 'en',
  weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_')
};
// CONCATENATED MODULE: ../node_modules/dayjs/src/utils.js


var padStart = function padStart(string, length, pad) {
  var s = String(string);
  if (!s || s.length >= length) return string;
  return '' + Array(length + 1 - s.length).join(pad) + string;
};

var padZoneStr = function padZoneStr(negMinuts) {
  var minutes = Math.abs(negMinuts);
  var hourOffset = Math.floor(minutes / 60);
  var minuteOffset = minutes % 60;
  return '' + (negMinuts <= 0 ? '+' : '-') + padStart(hourOffset, 2, '0') + ':' + padStart(minuteOffset, 2, '0');
};

var monthDiff = function monthDiff(a, b) {
  // function from moment.js in order to keep the same result
  var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month());
  var anchor = a.clone().add(wholeMonthDiff, 'months');
  var c = b - anchor < 0;
  var anchor2 = a.clone().add(wholeMonthDiff + (c ? -1 : 1), 'months');
  return Number(-(wholeMonthDiff + (b - anchor) / (c ? anchor - anchor2 : anchor2 - anchor)) || 0);
};

var absFloor = function absFloor(n) {
  return n < 0 ? Math.ceil(n) || 0 : Math.floor(n);
};

var utils_prettyUnit = function prettyUnit(u) {
  var special = {
    M: M,
    y: Y,
    w: W,
    d: D,
    h: H,
    m: MIN,
    s: S,
    ms: MS
  };
  return special[u] || String(u || '').toLowerCase().replace(/s$/, '');
};

var isUndefined = function isUndefined(s) {
  return s === undefined;
};

/* harmony default export */ var utils = ({
  padStart: padStart,
  padZoneStr: padZoneStr,
  monthDiff: monthDiff,
  absFloor: absFloor,
  prettyUnit: utils_prettyUnit,
  isUndefined: isUndefined
});
// CONCATENATED MODULE: ../node_modules/dayjs/src/index.js
function src__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var L = 'en'; // global locale
var Ls = {}; // global loaded locale
Ls[L] = en;

var isDayjs = function isDayjs(d) {
  return d instanceof src_Dayjs;
}; // eslint-disable-line no-use-before-define

var parseLocale = function parseLocale(preset, object, isLocal) {
  var l = void 0;
  if (!preset) return null;
  if (typeof preset === 'string') {
    if (Ls[preset]) {
      l = preset;
    }
    if (object) {
      Ls[preset] = object;
      l = preset;
    }
  } else {
    var name = preset.name;

    Ls[name] = preset;
    l = name;
  }
  if (!isLocal) L = l;
  return l;
};

var dayjs = function dayjs(date, c) {
  if (isDayjs(date)) {
    return date.clone();
  }
  // eslint-disable-next-line no-nested-ternary
  var cfg = c ? typeof c === 'string' ? { format: c } : c : {};
  cfg.date = date;
  return new src_Dayjs(cfg); // eslint-disable-line no-use-before-define
};

var wrapper = function wrapper(date, instance) {
  return dayjs(date, { locale: instance.$L });
};

var src_Utils = utils; // for plugin use
src_Utils.parseLocale = parseLocale;
src_Utils.isDayjs = isDayjs;
src_Utils.wrapper = wrapper;

var src_parseDate = function parseDate(date) {
  var reg = void 0;
  if (date === null) return new Date(NaN); // Treat null as an invalid date
  if (src_Utils.isUndefined(date)) return new Date();
  if (date instanceof Date) return date;
  // eslint-disable-next-line no-cond-assign
  if (typeof date === 'string' && /.*[^Z]$/i.test(date) // looking for a better way
  && (reg = date.match(REGEX_PARSE))) {
    // 2018-08-08 or 20180808
    return new Date(reg[1], reg[2] - 1, reg[3] || 1, reg[5] || 0, reg[6] || 0, reg[7] || 0, reg[8] || 0);
  }
  return new Date(date); // timestamp
};

var src_Dayjs = function () {
  function Dayjs(cfg) {
    src__classCallCheck(this, Dayjs);

    this.parse(cfg); // for plugin
  }

  Dayjs.prototype.parse = function parse(cfg) {
    this.$d = src_parseDate(cfg.date);
    this.init(cfg);
  };

  Dayjs.prototype.init = function init(cfg) {
    var $d = this.$d;

    this.$y = $d.getFullYear();
    this.$M = $d.getMonth();
    this.$D = $d.getDate();
    this.$W = $d.getDay();
    this.$H = $d.getHours();
    this.$m = $d.getMinutes();
    this.$s = $d.getSeconds();
    this.$ms = $d.getMilliseconds();
    this.$L = this.$L || parseLocale(cfg.locale, null, true) || L;
  };

  // eslint-disable-next-line class-methods-use-this


  Dayjs.prototype.$utils = function $utils() {
    return src_Utils;
  };

  Dayjs.prototype.isValid = function isValid() {
    return !(this.$d.toString() === INVALID_DATE_STRING);
  };

  Dayjs.prototype.isSame = function isSame(that, units) {
    var other = dayjs(that);
    return this.startOf(units) <= other && other <= this.endOf(units);
  };

  Dayjs.prototype.isAfter = function isAfter(that, units) {
    return dayjs(that) < this.startOf(units);
  };

  Dayjs.prototype.isBefore = function isBefore(that, units) {
    return this.endOf(units) < dayjs(that);
  };

  Dayjs.prototype.year = function year() {
    return this.$y;
  };

  Dayjs.prototype.month = function month() {
    return this.$M;
  };

  Dayjs.prototype.day = function day() {
    return this.$W;
  };

  Dayjs.prototype.date = function date() {
    return this.$D;
  };

  Dayjs.prototype.hour = function hour() {
    return this.$H;
  };

  Dayjs.prototype.minute = function minute() {
    return this.$m;
  };

  Dayjs.prototype.second = function second() {
    return this.$s;
  };

  Dayjs.prototype.millisecond = function millisecond() {
    return this.$ms;
  };

  Dayjs.prototype.unix = function unix() {
    return Math.floor(this.valueOf() / 1000);
  };

  Dayjs.prototype.valueOf = function valueOf() {
    // timezone(hour) * 60 * 60 * 1000 => ms
    return this.$d.getTime();
  };

  Dayjs.prototype.startOf = function startOf(units, _startOf) {
    var _this = this;

    // startOf -> endOf
    var isStartOf = !src_Utils.isUndefined(_startOf) ? _startOf : true;
    var unit = src_Utils.prettyUnit(units);
    var instanceFactory = function instanceFactory(d, m) {
      var ins = wrapper(new Date(_this.$y, m, d), _this);
      return isStartOf ? ins : ins.endOf(D);
    };
    var instanceFactorySet = function instanceFactorySet(method, slice) {
      var argumentStart = [0, 0, 0, 0];
      var argumentEnd = [23, 59, 59, 999];
      return wrapper(_this.toDate()[method].apply( // eslint-disable-line prefer-spread
      _this.toDate(), (isStartOf ? argumentStart : argumentEnd).slice(slice)), _this);
    };

    switch (unit) {
      case Y:
        return isStartOf ? instanceFactory(1, 0) : instanceFactory(31, 11);
      case M:
        return isStartOf ? instanceFactory(1, this.$M) : instanceFactory(0, this.$M + 1);
      case W:
        return isStartOf ? instanceFactory(this.$D - this.$W, this.$M) : instanceFactory(this.$D + (6 - this.$W), this.$M);
      case D:
      case DATE:
        return instanceFactorySet('setHours', 0);
      case H:
        return instanceFactorySet('setMinutes', 1);
      case MIN:
        return instanceFactorySet('setSeconds', 2);
      case S:
        return instanceFactorySet('setMilliseconds', 3);
      default:
        return this.clone();
    }
  };

  Dayjs.prototype.endOf = function endOf(arg) {
    return this.startOf(arg, false);
  };

  Dayjs.prototype.$set = function $set(units, int) {
    var _C$D$C$DATE$C$M$C$Y$C;

    // private set
    var unit = src_Utils.prettyUnit(units);
    var name = (_C$D$C$DATE$C$M$C$Y$C = {}, _C$D$C$DATE$C$M$C$Y$C[D] = 'setDate', _C$D$C$DATE$C$M$C$Y$C[DATE] = 'setDate', _C$D$C$DATE$C$M$C$Y$C[M] = 'setMonth', _C$D$C$DATE$C$M$C$Y$C[Y] = 'setFullYear', _C$D$C$DATE$C$M$C$Y$C[H] = 'setHours', _C$D$C$DATE$C$M$C$Y$C[MIN] = 'setMinutes', _C$D$C$DATE$C$M$C$Y$C[S] = 'setSeconds', _C$D$C$DATE$C$M$C$Y$C[MS] = 'setMilliseconds', _C$D$C$DATE$C$M$C$Y$C)[unit];
    var arg = unit === D ? this.$D + (int - this.$W) : int;

    if (this.$d[name]) this.$d[name](arg);

    this.init();
    return this;
  };

  Dayjs.prototype.set = function set(string, int) {
    return this.clone().$set(string, int);
  };

  Dayjs.prototype.add = function add(number, units) {
    var _this2 = this,
        _C$MIN$C$H$C$S$unit;

    number = Number(number); // eslint-disable-line no-param-reassign
    var unit = src_Utils.prettyUnit(units);
    var instanceFactory = function instanceFactory(u, n) {
      var date = _this2.set(DATE, 1).set(u, n + number);
      return date.set(DATE, Math.min(_this2.$D, date.daysInMonth()));
    };
    var instanceFactorySet = function instanceFactorySet(n) {
      var date = new Date(_this2.$d);
      date.setDate(date.getDate() + n * number);
      return wrapper(date, _this2);
    };
    if (unit === M) {
      return instanceFactory(M, this.$M);
    }
    if (unit === Y) {
      return instanceFactory(Y, this.$y);
    }
    if (unit === D) {
      return instanceFactorySet(1);
    }
    if (unit === W) {
      return instanceFactorySet(7);
    }
    var step = (_C$MIN$C$H$C$S$unit = {}, _C$MIN$C$H$C$S$unit[MIN] = MILLISECONDS_A_MINUTE, _C$MIN$C$H$C$S$unit[H] = MILLISECONDS_A_HOUR, _C$MIN$C$H$C$S$unit[S] = MILLISECONDS_A_SECOND, _C$MIN$C$H$C$S$unit)[unit] || 1; // ms

    var nextTimeStamp = this.valueOf() + number * step;
    return wrapper(nextTimeStamp, this);
  };

  Dayjs.prototype.subtract = function subtract(number, string) {
    return this.add(number * -1, string);
  };

  Dayjs.prototype.format = function format(formatStr) {
    var _this3 = this;

    if (!this.isValid()) return INVALID_DATE_STRING;

    var str = formatStr || FORMAT_DEFAULT;
    var zoneStr = src_Utils.padZoneStr(this.$d.getTimezoneOffset());
    var locale = this.$locale();
    var weekdays = locale.weekdays,
        months = locale.months;

    var getShort = function getShort(arr, index, full, length) {
      return arr && arr[index] || full[index].substr(0, length);
    };
    var get$H = function get$H(match) {
      if (_this3.$H === 0) return 12;
      return src_Utils.padStart(_this3.$H < 13 ? _this3.$H : _this3.$H - 12, match === 'hh' ? 2 : 1, '0');
    };

    var matches = {
      YY: String(this.$y).slice(-2),
      YYYY: String(this.$y),
      M: String(this.$M + 1),
      MM: src_Utils.padStart(this.$M + 1, 2, '0'),
      MMM: getShort(locale.monthsShort, this.$M, months, 3),
      MMMM: months[this.$M],
      D: String(this.$D),
      DD: src_Utils.padStart(this.$D, 2, '0'),
      d: String(this.$W),
      dd: getShort(locale.weekdaysMin, this.$W, weekdays, 2),
      ddd: getShort(locale.weekdaysShort, this.$W, weekdays, 3),
      dddd: weekdays[this.$W],
      H: String(this.$H),
      HH: src_Utils.padStart(this.$H, 2, '0'),
      h: get$H('h'),
      hh: get$H('hh'),
      a: this.$H < 12 ? 'am' : 'pm',
      A: this.$H < 12 ? 'AM' : 'PM',
      m: String(this.$m),
      mm: src_Utils.padStart(this.$m, 2, '0'),
      s: String(this.$s),
      ss: src_Utils.padStart(this.$s, 2, '0'),
      SSS: src_Utils.padStart(this.$ms, 3, '0'),
      Z: zoneStr
    };

    return str.replace(REGEX_FORMAT, function (match) {
      if (match.indexOf('[') > -1) return match.replace(/\[|\]/g, '');
      return matches[match] || zoneStr.replace(':', ''); // 'ZZ'
    });
  };

  Dayjs.prototype.utcOffset = function utcOffset() {
    // Because a bug at FF24, we're rounding the timezone offset around 15 minutes
    // https://github.com/moment/moment/pull/1871
    return -Math.round(this.$d.getTimezoneOffset() / 15) * 15;
  };

  Dayjs.prototype.diff = function diff(input, units, float) {
    var _C$Y$C$M$C$Q$C$W$C$D$;

    var unit = src_Utils.prettyUnit(units);
    var that = dayjs(input);
    var zoneDelta = (that.utcOffset() - this.utcOffset()) * MILLISECONDS_A_MINUTE;
    var diff = this - that;
    var result = src_Utils.monthDiff(this, that);

    result = (_C$Y$C$M$C$Q$C$W$C$D$ = {}, _C$Y$C$M$C$Q$C$W$C$D$[Y] = result / 12, _C$Y$C$M$C$Q$C$W$C$D$[M] = result, _C$Y$C$M$C$Q$C$W$C$D$[Q] = result / 3, _C$Y$C$M$C$Q$C$W$C$D$[W] = (diff - zoneDelta) / MILLISECONDS_A_WEEK, _C$Y$C$M$C$Q$C$W$C$D$[D] = (diff - zoneDelta) / MILLISECONDS_A_DAY, _C$Y$C$M$C$Q$C$W$C$D$[H] = diff / MILLISECONDS_A_HOUR, _C$Y$C$M$C$Q$C$W$C$D$[MIN] = diff / MILLISECONDS_A_MINUTE, _C$Y$C$M$C$Q$C$W$C$D$[S] = diff / MILLISECONDS_A_SECOND, _C$Y$C$M$C$Q$C$W$C$D$)[unit] || diff; // milliseconds

    return float ? result : src_Utils.absFloor(result);
  };

  Dayjs.prototype.daysInMonth = function daysInMonth() {
    return this.endOf(M).$D;
  };

  Dayjs.prototype.$locale = function $locale() {
    // get locale object
    return Ls[this.$L];
  };

  Dayjs.prototype.locale = function locale(preset, object) {
    var that = this.clone();
    that.$L = parseLocale(preset, object, true);
    return that;
  };

  Dayjs.prototype.clone = function clone() {
    return wrapper(this.toDate(), this);
  };

  Dayjs.prototype.toDate = function toDate() {
    return new Date(this.$d);
  };

  Dayjs.prototype.toArray = function toArray() {
    return [this.$y, this.$M, this.$D, this.$H, this.$m, this.$s, this.$ms];
  };

  Dayjs.prototype.toJSON = function toJSON() {
    return this.toISOString();
  };

  Dayjs.prototype.toISOString = function toISOString() {
    // ie 8 return
    // new Dayjs(this.valueOf() + this.$d.getTimezoneOffset() * 60000)
    // .format('YYYY-MM-DDTHH:mm:ss.SSS[Z]')
    return this.$d.toISOString();
  };

  Dayjs.prototype.toObject = function toObject() {
    return {
      years: this.$y,
      months: this.$M,
      date: this.$D,
      hours: this.$H,
      minutes: this.$m,
      seconds: this.$s,
      milliseconds: this.$ms
    };
  };

  Dayjs.prototype.toString = function toString() {
    return this.$d.toUTCString();
  };

  return Dayjs;
}();

dayjs.prototype = src_Dayjs.prototype;

dayjs.extend = function (plugin, option) {
  plugin(option, src_Dayjs, dayjs);
  return dayjs;
};

dayjs.locale = parseLocale;

dayjs.isDayjs = isDayjs;

dayjs.unix = function (timestamp) {
  return dayjs(timestamp * 1e3);
};

dayjs.en = Ls[L];

/* harmony default export */ var src = (dayjs);
// EXTERNAL MODULE: ../node_modules/dayjs/plugin/isBetween.js
var isBetween = __webpack_require__("b2KM");
var isBetween_default = /*#__PURE__*/__webpack_require__.n(isBetween);

// CONCATENATED MODULE: ./util.ts


src.extend(isBetween_default.a);
var util_Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.isToday = function (date) {
        var todayStart = src().startOf("day");
        var todayEnd = src().endOf("day");
        return src(date).isBetween(todayStart, todayEnd);
    };
    Utils.isYesterday = function (date) {
        var yesterday = src().subtract(1, "day");
        var yesterdayStart = yesterday.startOf("day");
        var yesterdayEnd = yesterday.endOf("day");
        return src(date).isBetween(yesterdayStart, yesterdayEnd);
    };
    Utils.uuidv4 = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Utils;
}());


// CONCATENATED MODULE: ./components/mail/index.tsx
var mail___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var mail___awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var mail___generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









function resizeIframe(obj) {
    obj.style.height = (obj.contentWindow.document.body.scrollHeight + 60) + 'px';
}
var mail_Mail = /** @class */ (function (_super) {
    mail___extends(Mail, _super);
    function Mail(props) {
        var _this = _super.call(this, props) || this;
        _this.downloadContent = function (id) { return mail___awaiter(_this, void 0, void 0, function () {
            var response, result, copy;
            return mail___generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_API.getMailContent({ MailId: id })];
                    case 1:
                        response = _a.sent();
                        if (!response.isOk()) return [3 /*break*/, 4];
                        this.setState({ content: Some(response.get().Payload), visible: true });
                        if (!(this.state.envelope.Envelope.Seen === false)) return [3 /*break*/, 3];
                        return [4 /*yield*/, api_API.markSeen({ Seen: true, MailId: id })];
                    case 2:
                        result = _a.sent();
                        if (result.isOk()) {
                            copy = __assign({}, this.state.envelope);
                            copy.Envelope.Seen = true;
                            this.setState({ envelope: copy });
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        console.log(response.get());
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.toggleContent = function () {
            if (!_this.state.content.isDefined()) {
                _this.downloadContent(_this.state.envelope.Envelope.Id);
            }
            else {
                _this.setState({ visible: !_this.state.visible });
            }
        };
        _this.downloadAttachment = function (attachment) {
            var url = api_API.ORIGIN + "/attachments/download/" + encodeURIComponent(attachment.S3Key);
            window.open(url);
        };
        _this.deleteMail = function () { return mail___awaiter(_this, void 0, void 0, function () {
            var result;
            return mail___generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_API.moveToFolder({ MailIds: [this.state.envelope.Envelope.Id], FolderName: "trash" })];
                    case 1:
                        result = _a.sent();
                        if (!result.isOk()) {
                            console.error(result.get());
                        }
                        else {
                            this.props.emitter.emit("reload");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.replyTo = function () { return mail___awaiter(_this, void 0, void 0, function () {
            var body, textBody, responseAccounts, accounts_1, oldFrom, oldTo, oldCC, newFrom, newCC, newTo, result;
            return mail___generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.state.content.isDefined()) return [3 /*break*/, 3];
                        body = this.state.content.get().HtmlBody || this.state.content.get().TextBody;
                        textBody = body.split('\n').map(function (line) { return "> " + line; }).join('\n');
                        return [4 /*yield*/, api_API.getExternalAccounts()];
                    case 1:
                        responseAccounts = _a.sent();
                        if (!responseAccounts.isOk()) return [3 /*break*/, 3];
                        accounts_1 = responseAccounts.get().Payload;
                        oldFrom = addressparser(this.props.envelope.Envelope.From);
                        oldTo = addressparser(this.props.envelope.Envelope.To);
                        oldCC = addressparser(this.props.envelope.Envelope.CC);
                        newFrom = oldTo.filter(function (address) { return accounts_1.find(function (account) { return account.Username === address.address; }); })[0] ||
                            oldCC.filter(function (address) { return accounts_1.find(function (account) { return account.Username === address.address; }); })[0];
                        newCC = oldCC
                            .filter(function (address) { return accounts_1.find(function (account) { return account.Username === address.address; }) === undefined; });
                        newTo = oldTo
                            .filter(function (address) { return accounts_1.find(function (account) { return account.Username === address.address; }) === undefined; });
                        newTo.push.apply(newTo, oldFrom);
                        return [4 /*yield*/, api_API.saveDraft({
                                Mail: {
                                    Id: "",
                                    From: newFrom ? newFrom.address : "",
                                    BCC: "",
                                    CC: newCC.map(function (a) { return a.address; }).join(","),
                                    To: newTo.map(function (a) { return a.address; }).join(","),
                                    InReplyTo: this.props.envelope.Envelope.MessageId,
                                    MessageId: "<" + util_Utils.uuidv4() + "@mailingful.com>",
                                    Date: (new Date()).toISOString(),
                                    Seen: true,
                                    Subject: "Re: " + this.props.envelope.Envelope.Subject,
                                    Size: 0,
                                    S3Key: ""
                                }, TextBody: textBody, HTMLBody: "", Attachments: []
                            })];
                    case 2:
                        result = _a.sent();
                        if (!result.isOk()) {
                            console.error(result.get());
                        }
                        else {
                            window.open("/mailbox/compose/" + result.get().Payload);
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.moveToInbox = function () { return mail___awaiter(_this, void 0, void 0, function () {
            var result;
            return mail___generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_API.moveToFolder({ MailIds: [this.state.envelope.Envelope.Id], FolderName: "inbox" })];
                    case 1:
                        result = _a.sent();
                        if (!result.isOk()) {
                            console.error(result.get());
                        }
                        else {
                            this.props.emitter.emit("reload");
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = { envelope: props.envelope, content: None, visible: false };
        return _this;
    }
    Mail.prototype.componentDidMount = function () {
    };
    Mail.prototype.componentWillUnmount = function () {
    };
    Mail.prototype.componentWillReceiveProps = function (props) {
        if (this.state.envelope.Envelope.Id !== props.envelope.Envelope.Id) {
            this.setState({ envelope: props.envelope, content: None, visible: false });
        }
    };
    Mail.getFrom = function (from) {
        var parsed = addressparser(from);
        if (parsed.length > 0) {
            return Some(parsed[0].name || parsed[0].address);
        }
        else {
            return None;
        }
    };
    Mail.prototype.render = function (props, state) {
        var _this = this;
        var _a;
        var seenObj = (_a = {},
            _a[mail_style["header"]] = true,
            _a);
        seenObj[mail_style["unseen"]] = !state.envelope.Envelope.Seen;
        var ButtonToNavigate = function (_a) {
            var title = _a.title, history = _a.history;
            return (Object(preact_min["h"])("button", { type: "button", onClick: function () { return history.push('/mailbox/compose/' + _this.state.envelope.Envelope.Id); } }, title));
        };
        var ComposeButtonComponent = function () { return (Object(preact_min["h"])(react_router_dom_es_Route, { path: "/", render: function (props) { return Object(preact_min["h"])(ButtonToNavigate, __assign({}, props, { title: "Edit Draft" })); } })); };
        var names = classnames(seenObj);
        var content = state.visible ? this.state.content.map(function (mailContent) {
            var attachments = mailContent.Attachments.map(function (attachment) { return Object(preact_min["h"])("span", { onClick: function () { return _this.downloadAttachment(attachment); }, class: mail_style["button"] }, attachment.Name); });
            var renderContent = function (c) {
                if (c.HtmlBody) {
                    return (Object(preact_min["h"])("iframe", { sandbox: "allow-same-origin allow-popups", onLoad: function (e) { return resizeIframe(e.target); }, srcDoc: mailContent.HtmlBody || mailContent.TextBody }));
                }
                else {
                    return (Object(preact_min["h"])("p", null, mailContent.TextBody));
                }
            };
            return (Object(preact_min["h"])("div", null,
                Object(preact_min["h"])("div", { class: mail_style["attachments"] }, attachments),
                Object(preact_min["h"])("div", { class: mail_style["attachments"] },
                    _this.state.envelope.Labels.indexOf("folder:trash") === -1 ? Object(preact_min["h"])("button", { onClick: function () { return _this.deleteMail(); } }, "Delete") : null,
                    _this.state.envelope.Labels.indexOf("folder:inbox") !== -1 ? Object(preact_min["h"])("button", { onClick: function () { return _this.replyTo(); } }, "Reply") : null,
                    _this.state.envelope.Labels.indexOf("folder:inbox") === -1 ? Object(preact_min["h"])("button", { onClick: function () { return _this.moveToInbox(); } }, "To Inbox") : null,
                    _this.state.envelope.Labels.indexOf("folder:draft") !== -1 ? Object(preact_min["h"])(ComposeButtonComponent, null) : null),
                renderContent(mailContent)));
        }).getOrElse(undefined) : undefined;
        return (Object(preact_min["h"])("div", { class: mail_style["envelope"] },
            Object(preact_min["h"])("div", { className: names, onClick: function () { return _this.toggleContent(); } },
                (new Date(state.envelope.Envelope.Date)).toLocaleDateString(),
                " - ",
                Mail.getFrom(state.envelope.Envelope.From).getOrElse("unknown"),
                " - ",
                state.envelope.Envelope.Subject),
            content));
    };
    return Mail;
}(preact_min["Component"]));
/* harmony default export */ var components_mail = (mail_Mail);

// EXTERNAL MODULE: ../node_modules/mitt/dist/mitt.umd.js
var mitt_umd = __webpack_require__("695h");
var mitt_umd_default = /*#__PURE__*/__webpack_require__.n(mitt_umd);

// CONCATENATED MODULE: ./components/inbox/index.tsx
var inbox___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inbox___awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var inbox___generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ThreadNode = /** @class */ (function () {
    function ThreadNode(mail, hasChild, child) {
        this.mail = mail;
        this.hasChild = hasChild;
        this.child = child;
    }
    return ThreadNode;
}());
var inbox_Inbox = /** @class */ (function (_super) {
    inbox___extends(Inbox, _super);
    function Inbox(props) {
        var _this = _super.call(this, props) || this;
        _this.emitter = new mitt_umd();
        _this.state = { mails: [], tree: [] };
        _this.folder = props.routeProps.match.params.folder;
        _this.emitter.on("reload", function () { return _this.reloadEmails(); });
        _this.reloadEmails();
        return _this;
    }
    Inbox.prototype.componentDidMount = function () {
    };
    Inbox.prototype.componentWillUnmount = function () {
    };
    Inbox.constructNode = function (mail, mails, tempMails) {
        var node;
        if (mail.Envelope.InReplyTo) {
            var target = es(mails).find(function (m, i) { return m.Envelope.MessageId === mail.Envelope.InReplyTo; });
            if (target.isDefined()) {
                node = new ThreadNode(mail, true, Some(Inbox.constructNode(target.get(), mails, tempMails)));
            }
            else {
                node = new ThreadNode(mail, true, None);
            }
        }
        else {
            node = new ThreadNode(mail, false, None);
        }
        var index = es(tempMails).findIndex(function (m, i) { return m.Envelope.Id === mail.Envelope.Id; });
        index.forEach(function (i) { return tempMails.splice(i, 1); });
        return node;
    };
    Inbox.listToTree = function (mails) {
        var tempMails = mails.slice();
        var result = [];
        var next = es(tempMails).first();
        while (next.isDefined()) {
            result.push(Inbox.constructNode(next.get(), mails, tempMails));
            next = es(tempMails).first();
        }
        return result;
    };
    Inbox.prototype.reloadEmails = function () {
        return inbox___awaiter(this, void 0, void 0, function () {
            var response, mails;
            return inbox___generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_API.getMails({ Label: "folder:" + this.folder, SearchTerm: this.props.searchTerm })];
                    case 1:
                        response = _a.sent();
                        if (response.isOk()) {
                            mails = response.get().Payload;
                            this.setState({ mails: mails, tree: Inbox.listToTree(mails) });
                        }
                        else {
                            console.log(response.get());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Inbox.prototype.componentWillReceiveProps = function (props) {
        this.props = props;
        this.folder = props.routeProps.match.params.folder;
        this.reloadEmails();
    };
    Inbox.prototype.renderMails = function (props, state) {
        var _this = this;
        var today = [];
        var yesterday = [];
        var months = {};
        for (var _i = 0, _a = state.mails; _i < _a.length; _i++) {
            var mail = _a[_i];
            var date = new Date(mail.Envelope.Date);
            if (util_Utils.isToday(date)) {
                today.push(mail);
            }
            else if (util_Utils.isYesterday(date)) {
                yesterday.push(mail);
            }
            else {
                var month = new Date(date.getFullYear(), date.getMonth()).toISOString();
                if (months[month]) {
                    months[month].push(mail);
                }
                else {
                    months[month] = [mail];
                }
            }
        }
        var toMails = function (mails, heading) {
            var m = mails.map(function (mail) {
                return Object(preact_min["h"])(components_mail, { envelope: mail, emitter: _this.emitter });
            });
            return (Object(preact_min["h"])("div", null,
                Object(preact_min["h"])("h4", null, heading),
                m));
        };
        var todayMails = toMails(today, "Today");
        var yersterdayMails = toMails(yesterday, "Yesterday");
        var monthMails = Object.keys(months).sort().reverse().map(function (month) {
            var monthName = src(month).format("MMMM YYYY");
            return toMails(months[month], monthName);
        });
        return (Object(preact_min["h"])("div", null,
            today.length > 0 ? todayMails : null,
            yesterday.length > 0 ? yersterdayMails : null,
            monthMails));
    };
    Inbox.prototype.render = function (props, state) {
        return (Object(preact_min["h"])("div", null,
            Object(preact_min["h"])("div", null, this.renderMails(props, state))));
    };
    return Inbox;
}(preact_min["Component"]));
/* harmony default export */ var inbox = (inbox_Inbox);

// EXTERNAL MODULE: ./components/compose/style.css
var compose_style = __webpack_require__("OgBO");
var compose_style_default = /*#__PURE__*/__webpack_require__.n(compose_style);

// EXTERNAL MODULE: ../node_modules/simplemde/dist/simplemde.min.css
var simplemde_min = __webpack_require__("G78K");
var simplemde_min_default = /*#__PURE__*/__webpack_require__.n(simplemde_min);

// CONCATENATED MODULE: ../node_modules/react-router/es/index.js




















// CONCATENATED MODULE: ./components/compose/index.tsx
var compose___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var compose___assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var compose___awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var compose___generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var regexpDate = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var regexpTime = /^(\d\d):(\d\d)$/;
var compose_Compose = /** @class */ (function (_super) {
    compose___extends(Compose, _super);
    function Compose(props) {
        var _this = _super.call(this, props) || this;
        _this.saveDraft = function () { return compose___awaiter(_this, void 0, void 0, function () {
            var markdown, html, response, newEnvelope;
            return compose___generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        markdown = this.editor.value();
                        html = this.SimpleMDE.prototype.markdown(markdown);
                        return [4 /*yield*/, api_API.saveDraft({ Attachments: [], Mail: this.state.envelope, HTMLBody: html, TextBody: markdown })];
                    case 1:
                        response = _a.sent();
                        if (response.isOk()) {
                            newEnvelope = compose___assign({}, this.state.envelope);
                            newEnvelope.Id = response.get().Payload;
                            this.setState({ envelope: newEnvelope });
                        }
                        else {
                            console.log(response.get());
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.sendDraft = function () { return compose___awaiter(_this, void 0, void 0, function () {
            var response, response;
            return compose___generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveDraft()];
                    case 1:
                        _a.sent();
                        if (!this.state.envelope.Id) return [3 /*break*/, 5];
                        if (!this.state.later) return [3 /*break*/, 3];
                        return [4 /*yield*/, api_API.scheduleDraft({ MailId: this.state.envelope.Id })];
                    case 2:
                        response = _a.sent();
                        if (response.isOk()) {
                            this.setState({ redirect: true });
                        }
                        else {
                            console.log(response.get());
                        }
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, api_API.sendDraft({ MailId: this.state.envelope.Id })];
                    case 4:
                        response = _a.sent();
                        if (response.isOk()) {
                            this.setState({ redirect: true });
                        }
                        else {
                            console.log(response.get());
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.updateSubject = function (event) {
            var newEnvelope = compose___assign({}, _this.state.envelope);
            newEnvelope.Subject = event.target.value;
            _this.setState({ envelope: newEnvelope });
        };
        _this.deleteAttachment = function (index, s3Key) { return compose___awaiter(_this, void 0, void 0, function () {
            var response, newAttachments;
            return compose___generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, api_API.deleteAttachment({ MailId: this.state.envelope.Id, S3Key: s3Key })];
                    case 1:
                        response = _a.sent();
                        if (response.isOk() && response.get().Payload) {
                            newAttachments = this.state.attachments.slice();
                            newAttachments.splice(index, 1);
                            this.setState({ attachments: newAttachments });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.uploadAttachment = function (files) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();
                reader.onload = (function (content) {
                    return function (e) { return compose___awaiter(_this, void 0, void 0, function () {
                        var data, attachment, response, newAttachments;
                        return compose___generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    data = e.target.result.split(",")[1];
                                    attachment = {
                                        MimeType: content.type,
                                        S3Key: "",
                                        Name: content.name,
                                        Size: content.size
                                    };
                                    return [4 /*yield*/, api_API.insertAttachment({
                                            Data: data,
                                            MailId: this.state.envelope.Id,
                                            Attachment: attachment
                                        })];
                                case 1:
                                    response = _a.sent();
                                    if (response.isOk()) {
                                        newAttachments = this.state.attachments.slice();
                                        attachment.S3Key = response.get().Payload;
                                        newAttachments.push(attachment);
                                        this.setState({ attachments: newAttachments });
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                })(file);
                reader.readAsDataURL(file);
            }
        };
        _this.updateDate = function (e) {
            var match = regexpDate.exec(e.target.value);
            console.log(e.target.value);
            if (match) {
                var _a = [match[1], match[2], match[3]], year = _a[0], month = _a[1], day = _a[2];
                var newEnvelope = compose___assign({}, _this.state.envelope);
                var date = (new Date(newEnvelope.Date));
                date.setFullYear(+year);
                date.setMonth((+month) - 1);
                date.setDate(+day);
                console.log(date);
                newEnvelope.Date = date.toISOString();
                _this.setState({ envelope: newEnvelope });
            }
        };
        _this.updateTime = function (e) {
            var match = regexpTime.exec(e.target.value);
            if (match) {
                var _a = [match[1], match[2]], hour = _a[0], minute = _a[1];
                var newEnvelope = compose___assign({}, _this.state.envelope);
                var date = (new Date(newEnvelope.Date));
                date.setHours(+hour);
                date.setMinutes(+minute);
                newEnvelope.Date = date.toISOString();
                _this.setState({ envelope: newEnvelope });
            }
        };
        var id = "";
        if (props.routeProps) {
            id = props.routeProps.match.params.id;
        }
        _this.setState({
            envelope: {
                BCC: "",
                CC: "",
                Subject: "",
                Date: (new Date()).toISOString(),
                From: "",
                Id: id,
                InReplyTo: "",
                MessageId: "<" + util_Utils.uuidv4() + "@mailingful.com>",
                Seen: true,
                To: "",
                Size: 0,
                S3Key: ""
            },
            accounts: [],
            redirect: false,
            attachments: [],
            later: false
        });
        return _this;
    }
    Compose.prototype.updateFrom = function (from) {
        var newEnvelope = compose___assign({}, this.state.envelope);
        newEnvelope.From = from;
        this.setState({ envelope: newEnvelope });
    };
    Compose.prototype.componentDidMount = function () {
        return compose___awaiter(this, void 0, void 0, function () {
            var _a, response, accounts, body, envelope, e;
            return compose___generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "x/ZA"))];
                    case 1:
                        _a.SimpleMDE = _b.sent();
                        this.editor = new this.SimpleMDE();
                        return [4 /*yield*/, api_API.getExternalAccounts()];
                    case 2:
                        response = _b.sent();
                        if (response.isOk()) {
                            accounts = response.get().Payload;
                            this.setState({ accounts: accounts });
                            if (accounts.length > 0) {
                                this.updateFrom(accounts[0].Username);
                            }
                        }
                        if (!this.state.envelope.Id) return [3 /*break*/, 5];
                        return [4 /*yield*/, api_API.getMailContent({ MailId: this.state.envelope.Id })];
                    case 3:
                        body = _b.sent();
                        if (body.isOk()) {
                            this.setState({ attachments: body.get().Payload.Attachments });
                            this.editor.value(body.get().Payload.TextBody);
                        }
                        return [4 /*yield*/, api_API.getEnvelope({ MailId: this.state.envelope.Id })];
                    case 4:
                        envelope = _b.sent();
                        if (envelope.isOk()) {
                            e = envelope.get().Payload;
                            this.setState({ envelope: e, later: (new Date()) < new Date(e.Date) });
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Compose.prototype.renderAttachments = function (attachments) {
        var _this = this;
        return (Object(preact_min["h"])("ul", null, attachments.map(function (attachment, index) {
            return (Object(preact_min["h"])("li", null,
                attachment.Name,
                " - ",
                Object(preact_min["h"])("button", { onClick: function () { return _this.deleteAttachment(index, attachment.S3Key); } }, "Delete")));
        })));
    };
    Compose.prototype.renderLater = function (state) {
        var t = function (n) { return ("" + n).padStart(2, "0"); };
        if (this.state.later) {
            var date = new Date(state.envelope.Date);
            return (Object(preact_min["h"])("div", null,
                Object(preact_min["h"])("input", { value: date.getFullYear() + "-" + t(date.getMonth() + 1) + "-" + t(date.getDate()), onChange: this.updateDate, type: "date" }),
                Object(preact_min["h"])("input", { value: t(date.getHours()) + ":" + t(date.getMinutes()), onChange: this.updateTime, type: "time" })));
        }
    };
    Compose.prototype.render = function (props, state) {
        var _this = this;
        var accounts = this.state.accounts.map(function (account) { return Object(preact_min["h"])("option", { value: account.Username }, account.Username); });
        if (this.state.redirect) {
            return Object(preact_min["h"])(es_Redirect, { to: "/mailbox/folder/inbox" });
        }
        return (Object(preact_min["h"])("div", null,
            Object(preact_min["h"])("h4", null, "New Mail"),
            Object(preact_min["h"])("div", { className: compose_style["from"] },
                Object(preact_min["h"])("label", null, "From: "),
                Object(preact_min["h"])("select", { onChange: function (e) { return _this.updateFrom(e.target.value); } }, accounts)),
            Object(preact_min["h"])("input", { placeholder: "To", onChange: function (e) { return _this.state.envelope.To = e.target.value; }, value: this.state.envelope.To }),
            Object(preact_min["h"])("input", { placeholder: "Cc", onChange: function (e) { return _this.state.envelope.CC = e.target.value; }, value: this.state.envelope.CC }),
            Object(preact_min["h"])("input", { placeholder: "Bcc", onChange: function (e) { return _this.state.envelope.BCC = e.target.value; }, value: this.state.envelope.BCC }),
            Object(preact_min["h"])("input", { type: "text", placeholder: "Subject", onChange: this.updateSubject, value: this.state.envelope.Subject }),
            Object(preact_min["h"])("div", null,
                Object(preact_min["h"])("textarea", null)),
            Object(preact_min["h"])("div", null,
                Object(preact_min["h"])("label", { for: "later", class: compose_style["formheading"] },
                    Object(preact_min["h"])("input", { id: "later", onChange: function (e) { return _this.setState({ later: e.target.checked }); }, checked: this.state.later, type: "checkbox" }),
                    " Later"),
                this.renderLater(state)),
            Object(preact_min["h"])("div", null,
                Object(preact_min["h"])("h4", null, "Attachments"),
                Object(preact_min["h"])("input", { disabled: state.envelope.Id === "", onChange: function (e) { return _this.uploadAttachment(e.target.files); }, type: "file", id: "files", name: "files[]", multiple: true })),
            this.renderAttachments(state.attachments),
            Object(preact_min["h"])("button", { onClick: this.saveDraft }, "Save"),
            Object(preact_min["h"])("button", { onClick: this.sendDraft }, "Send")));
    };
    return Compose;
}(preact_min["Component"]));
/* harmony default export */ var compose = (compose_Compose);

// EXTERNAL MODULE: ./routes/mailbox/style.css
var mailbox_style = __webpack_require__("VkLV");
var mailbox_style_default = /*#__PURE__*/__webpack_require__.n(mailbox_style);

// CONCATENATED MODULE: ./routes/mailbox/index.tsx
var mailbox___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mailbox___assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var mailbox_Mailbox = /** @class */ (function (_super) {
    mailbox___extends(Mailbox, _super);
    function Mailbox() {
        var _this = _super.call(this) || this;
        _this.folders = function (state) {
            return state.folders.map(function (folder) { return Object(preact_min["h"])("li", null,
                Object(preact_min["h"])(es_NavLink, { activeClassName: mailbox_style["active"], to: "/mailbox/" + folder.label.split(":").join("/") }, folder.name)); });
        };
        _this.searchTermChange = function (event) {
            var searchTerm = (event.target.value);
            _this.setState({ searchTerm: searchTerm });
        };
        _this.state = {
            folders: [{ label: "folder:inbox", name: "Inbox" },
                { label: "folder:trash", name: "Trash" },
                { label: "folder:draft", name: "Drafts" },
                { label: "folder:scheduled", name: "Scheduled" },
                { label: "folder:sent", name: "Sent" },
                { label: "folder:spam", name: "Spam" }
            ], toCompose: false, searchTerm: ""
        };
        return _this;
    }
    Mailbox.prototype.componentDidMount = function () {
        setInterval(function () {
            api_API.refreshToken();
        }, 1200000);
    };
    Mailbox.prototype.compose = function () {
    };
    Mailbox.prototype.componentWillUnmount = function () {
    };
    Mailbox.prototype.render = function (props, state) {
        var _this = this;
        var ButtonToNavigate = function (_a) {
            var title = _a.title, history = _a.history;
            return (Object(preact_min["h"])("button", { type: "button", className: mailbox_style["inputheight"], onClick: function () { return history.push('/mailbox/compose'); } }, title));
        };
        var SomeComponent = function () { return (Object(preact_min["h"])(react_router_dom_es_Route, { path: "/", render: function (props) { return Object(preact_min["h"])(ButtonToNavigate, mailbox___assign({}, props, { title: "Compose" })); } })); };
        return (Object(preact_min["h"])("div", { class: mailbox_style["mailbox"] },
            Object(preact_min["h"])("div", { class: mailbox_style["sidebar"] },
                Object(preact_min["h"])(SomeComponent, null),
                Object(preact_min["h"])("nav", { class: "menu" },
                    Object(preact_min["h"])("ul", null, this.folders(state)),
                    Object(preact_min["h"])("ul", null,
                        Object(preact_min["h"])("li", null,
                            Object(preact_min["h"])("a", { href: "/login", onClick: function (e) { return api_API.eraseCookie("token"); } }, "Logout"))))),
            Object(preact_min["h"])("div", { class: mailbox_style["main"] },
                Object(preact_min["h"])("input", { type: "search", class: [mailbox_style["searchbox"], mailbox_style["inputheight"]].join(" "), value: state.searchTerm, onSearch: function (e) { return _this.searchTermChange(e); }, placeholder: "Suche..." }),
                Object(preact_min["h"])(react_router_dom_es_Switch, null,
                    Object(preact_min["h"])(react_router_dom_es_Route, { exact: true, path: "/mailbox", render: function () { return (Object(preact_min["h"])(react_router_dom_es_Redirect, { to: "/mailbox/folder/inbox" })); } }),
                    Object(preact_min["h"])(react_router_dom_es_Route, { path: '/mailbox/folder/:folder', render: function (routeProps) { return Object(preact_min["h"])(inbox, { routeProps: routeProps, searchTerm: state.searchTerm }); } }),
                    Object(preact_min["h"])(react_router_dom_es_Route, { exact: true, path: '/mailbox/compose', component: compose }),
                    Object(preact_min["h"])(react_router_dom_es_Route, { path: '/mailbox/compose/:id', render: function (routeProps) { return Object(preact_min["h"])(compose, { routeProps: routeProps }); } })))));
    };
    return Mailbox;
}(preact_min["Component"]));
/* harmony default export */ var mailbox = (mailbox_Mailbox);

// CONCATENATED MODULE: ./components/app.tsx
var app___extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';
if (false) {
    require('preact/debug');
}
var app_App = /** @class */ (function (_super) {
    app___extends(App, _super);
    function App(props) {
        return _super.call(this, props) || this;
    }
    App.prototype.render = function () {
        var content = Object(preact_min["h"])(react_router_dom_es_Switch, null,
            Object(preact_min["h"])(react_router_dom_es_Route, { exact: true, path: '/', component: home }),
            Object(preact_min["h"])(react_router_dom_es_Route, { path: '/faq', component: faq }),
            Object(preact_min["h"])(react_router_dom_es_Route, { path: '/mailbox', component: mailbox }),
            Object(preact_min["h"])(react_router_dom_es_Route, { path: '/login', component: login }));
        if (!(typeof process === 'object' && process + '' === '[object process]')) {
            return (Object(preact_min["h"])(IntlProvider, { definition: definition },
                Object(preact_min["h"])("div", { id: "app" },
                    Object(preact_min["h"])(es_BrowserRouter, null, content))));
        }
        else {
            return (Object(preact_min["h"])(IntlProvider, { definition: definition },
                Object(preact_min["h"])("div", { id: "app" },
                    Object(preact_min["h"])(react_router_dom_es_StaticRouter, null, content))));
        }
    };
    return App;
}(preact_min["Component"]));
/* harmony default export */ var app = (app_App);

// CONCATENATED MODULE: ./index.js



/* harmony default export */ var index_0 = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "MrFd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"login":"login__1zeTF"};

/***/ }),

/***/ "OgBO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"from":"from__2SEol","formheading":"formheading__2PI4S"};

/***/ }),

/***/ "Pwfr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "REa7":
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "Tvs4":
/***/ (function(module, exports, __webpack_require__) {

var isarray = __webpack_require__("REa7");

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys);
  }

  if (isarray(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys, options);
}

/***/ }),

/***/ "UyDz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/***/ }),

/***/ "VkLV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"inputheight":"inputheight__1j5Jo","mailbox":"mailbox__2JQuN","main":"main__Pt8eP","sidebar":"sidebar__3hylJ","active":"active__Wud6a","searchbox":"searchbox__1jNt8"};

/***/ }),

/***/ "XOCG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "ZAL5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__MseGd","promotion":"promotion__ZWa6C","fixedheight":"fixedheight__31pk8","active":"active__3aDmt"};

/***/ }),

/***/ "b2KM":
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.dayjs_plugin_isBetween = t();
}(this, function () {
  "use strict";
  return function (e, t, i) {
    t.prototype.isBetween = function (e, t, n) {
      var o = i(e),
          f = i(t);return this.isAfter(o, n) && this.isBefore(f, n) || this.isBefore(o, n) && this.isAfter(f, n);
    };
  };
});

/***/ }),

/***/ "eEqv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// expose to the world

module.exports = addressparser;

/**
 * Parses structured e-mail addresses from an address field
 *
 * Example:
 *
 *    'Name <address@domain>'
 *
 * will be converted to
 *
 *     [{name: 'Name', address: 'address@domain'}]
 *
 * @param {String} str Address field
 * @return {Array} An array of address objects
 */
function addressparser(str) {
    var tokenizer = new Tokenizer(str);
    var tokens = tokenizer.tokenize();

    var addresses = [];
    var address = [];
    var parsedAddresses = [];

    tokens.forEach(function (token) {
        if (token.type === 'operator' && (token.value === ',' || token.value === ';')) {
            if (address.length) {
                addresses.push(address);
            }
            address = [];
        } else {
            address.push(token);
        }
    });

    if (address.length) {
        addresses.push(address);
    }

    addresses.forEach(function (address) {
        address = _handleAddress(address);
        if (address.length) {
            parsedAddresses = parsedAddresses.concat(address);
        }
    });

    return parsedAddresses;
}

/**
 * Converts tokens for a single address into an address object
 *
 * @param {Array} tokens Tokens object
 * @return {Object} Address object
 */
function _handleAddress(tokens) {
    var token;
    var isGroup = false;
    var state = 'text';
    var address;
    var addresses = [];
    var data = {
        address: [],
        comment: [],
        group: [],
        text: []
    };
    var i;
    var len;

    // Filter out <addresses>, (comments) and regular text
    for (i = 0, len = tokens.length; i < len; i++) {
        token = tokens[i];
        if (token.type === 'operator') {
            switch (token.value) {
                case '<':
                    state = 'address';
                    break;
                case '(':
                    state = 'comment';
                    break;
                case ':':
                    state = 'group';
                    isGroup = true;
                    break;
                default:
                    state = 'text';
            }
        } else if (token.value) {
            if (state === 'address') {
                // handle use case where unquoted name includes a "<"
                // Apple Mail truncates everything between an unexpected < and an address
                // and so will we
                token.value = token.value.replace(/^[^<]*<\s*/, '');
            }
            data[state].push(token.value);
        }
    }

    // If there is no text but a comment, replace the two
    if (!data.text.length && data.comment.length) {
        data.text = data.comment;
        data.comment = [];
    }

    if (isGroup) {
        // http://tools.ietf.org/html/rfc2822#appendix-A.1.3
        data.text = data.text.join(' ');
        addresses.push({
            name: data.text || address && address.name,
            group: data.group.length ? addressparser(data.group.join(',')) : []
        });
    } else {
        // If no address was found, try to detect one from regular text
        if (!data.address.length && data.text.length) {
            for (i = data.text.length - 1; i >= 0; i--) {
                if (data.text[i].match(/^[^@\s]+@[^@\s]+$/)) {
                    data.address = data.text.splice(i, 1);
                    break;
                }
            }

            var _regexHandler = function _regexHandler(address) {
                if (!data.address.length) {
                    data.address = [address.trim()];
                    return ' ';
                } else {
                    return address;
                }
            };

            // still no address
            if (!data.address.length) {
                for (i = data.text.length - 1; i >= 0; i--) {
                    // fixed the regex to parse email address correctly when email address has more than one @
                    data.text[i] = data.text[i].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/, _regexHandler).trim();
                    if (data.address.length) {
                        break;
                    }
                }
            }
        }

        // If there's still is no text but a comment exixts, replace the two
        if (!data.text.length && data.comment.length) {
            data.text = data.comment;
            data.comment = [];
        }

        // Keep only the first address occurence, push others to regular text
        if (data.address.length > 1) {
            data.text = data.text.concat(data.address.splice(1));
        }

        // Join values with spaces
        data.text = data.text.join(' ');
        data.address = data.address.join(' ');

        if (!data.address && isGroup) {
            return [];
        } else {
            address = {
                address: data.address || data.text || '',
                name: data.text || data.address || ''
            };

            if (address.address === address.name) {
                if ((address.address || '').match(/@/)) {
                    address.name = '';
                } else {
                    address.address = '';
                }
            }

            addresses.push(address);
        }
    }

    return addresses;
}

/**
 * Creates a Tokenizer object for tokenizing address field strings
 *
 * @constructor
 * @param {String} str Address field string
 */
function Tokenizer(str) {
    this.str = (str || '').toString();
    this.operatorCurrent = '';
    this.operatorExpecting = '';
    this.node = null;
    this.escaped = false;

    this.list = [];
}

/**
 * Operator tokens and which tokens are expected to end the sequence
 */
Tokenizer.prototype.operators = {
    '"': '"',
    '(': ')',
    '<': '>',
    ',': '',
    ':': ';',
    // Semicolons are not a legal delimiter per the RFC2822 grammar other
    // than for terminating a group, but they are also not valid for any
    // other use in this context.  Given that some mail clients have
    // historically allowed the semicolon as a delimiter equivalent to the
    // comma in their UI, it makes sense to treat them the same as a comma
    // when used outside of a group.
    ';': ''
};

/**
 * Tokenizes the original input string
 *
 * @return {Array} An array of operator|text tokens
 */
Tokenizer.prototype.tokenize = function () {
    var chr,
        list = [];
    for (var i = 0, len = this.str.length; i < len; i++) {
        chr = this.str.charAt(i);
        this.checkChar(chr);
    }

    this.list.forEach(function (node) {
        node.value = (node.value || '').toString().trim();
        if (node.value) {
            list.push(node);
        }
    });

    return list;
};

/**
 * Checks if a character is an operator or text and acts accordingly
 *
 * @param {String} chr Character from the address field
 */
Tokenizer.prototype.checkChar = function (chr) {
    if ((chr in this.operators || chr === '\\') && this.escaped) {
        this.escaped = false;
    } else if (this.operatorExpecting && chr === this.operatorExpecting) {
        this.node = {
            type: 'operator',
            value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = '';
        this.escaped = false;
        return;
    } else if (!this.operatorExpecting && chr in this.operators) {
        this.node = {
            type: 'operator',
            value: chr
        };
        this.list.push(this.node);
        this.node = null;
        this.operatorExpecting = this.operators[chr];
        this.escaped = false;
        return;
    }

    if (!this.escaped && chr === '\\') {
        this.escaped = true;
        return;
    }

    if (!this.node) {
        this.node = {
            type: 'text',
            value: ''
        };
        this.list.push(this.node);
    }

    if (this.escaped && chr !== '\\') {
        this.node.value += '\\';
    }

    this.node.value += chr;
    this.escaped = false;
};

/***/ }),

/***/ "jsVd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"menu":"menu__1zKzy","active":"active__1q1xF"};

/***/ }),

/***/ "kvG9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"faq":"faq__2W9QX"};

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map