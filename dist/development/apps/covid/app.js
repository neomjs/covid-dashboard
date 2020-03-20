/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"Covid": 0
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
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./buildScripts/entrypoints/Covid.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/Covid/app.mjs":
/*!****************************!*\
  !*** ./apps/Covid/app.mjs ***!
  \****************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/MainContainer.mjs */ "./apps/Covid/view/MainContainer.mjs");


Neo.onStart = function() {
    Neo.app({
        appPath : 'apps/covid/',
        mainView: _view_MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        name    : 'Covid'
    });
};

/***/ }),

/***/ "./apps/Covid/view/MainContainer.mjs":
/*!*******************************************!*\
  !*** ./apps/Covid/view/MainContainer.mjs ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/neo.mjs/src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");




/**
 * @class Covid.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _node_modules_neo_mjs_src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        className: 'Covid.view.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        layout   : {ntype: 'fit'},

        items: [{
            module: _node_modules_neo_mjs_src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            height: 300,
            width : 500,
            style : {flex: 'none', margin: '20px'},

            itemDefaults: {
                module: _node_modules_neo_mjs_src_component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                cls   : ['neo-examples-tab-component'],
                style : {padding: '20px'},
            },

            items: [{
                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                },
                vdom: {innerHTML: 'Welcome to your new Neo App.'}
            }, {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                },
                vdom: {innerHTML: 'Have fun creating something awesome!'}
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./buildScripts/entrypoints/Covid.mjs":
/*!********************************************!*\
  !*** ./buildScripts/entrypoints/Covid.mjs ***!
  \********************************************/
/*! no exports provided */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_neo_mjs_src_worker_App_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/neo.mjs/src/worker/App.mjs */ "./node_modules/neo.mjs/src/worker/App.mjs");
/* harmony import */ var _apps_Covid_app_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../apps/Covid/app.mjs */ "./apps/Covid/app.mjs");



/***/ }),

/***/ "./node_modules/neo.mjs/src/DefaultConfig.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/DefaultConfig.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultConfig; });
const Neo = self.Neo || {};

Neo.config = Neo.config || {};

/**
 * Config object for the neo.mjs framework which will get passed to all workers
 * You can change the configs, e.g. inside the index.html of your app
 * @memberOf module:Neo
 * @name config
 * @type Object
 */
const DefaultConfig = {
    /**
     * true will apply 'neo-body' to the document.body classList
     * @default true
     * @memberOf! module:Neo
     * @name config.applyBodyCls
     * @type Boolean
     */
    applyBodyCls: true,
    /**
     * Path to your app.mjs file. You can create multiple apps there if needed.
     * @default null
     * @memberOf! module:Neo
     * @name config.appPath
     * @type String|null
     */
    appPath: null,
    /**
     * Path to the neo.mjs directory
     * @default './'
     * @memberOf! module:Neo
     * @name config.basePath
     * @type String
     */
    basePath: './',
    /**
     * Path to the neo.mjs theme css files
     * See main.mixins.Stylesheet => createStyleSheet()
     * @default Neo.config.basePath + 'build/' + Neo.config.environment
     * @memberOf! module:Neo
     * @name [config.cssPath]
     * @optional
     * @type String|null
     */
    cssPath: null,
    /**
     * The current build => dist environment. Valid values: 'development', 'production'
     * Used for automatically including the matching theme files
     * @default 'production'
     * @memberOf! module:Neo
     * @name config.environment
     * @type String
     */
    environment: 'production',
    /**
     * Flag if Neo is running without any JS builds
     * @default false
     * @memberOf! module:Neo
     * @name config.isExperimental
     * @type Boolean
     */
    isExperimental: false,
    /**
     * Flag for running the Neo main thread inside an iframe (Siesta Browser Harness)
     * @default false
     * @memberOf! module:Neo
     * @name config.isInsideSiesta
     * @type Boolean
     */
    isInsideSiesta: false,
    /**
     * Used by Intl.DateTimeFormat, for details take a look at:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
     * @default 'default'
     * @memberOf! module:Neo
     * @name config.locale
     * @type String
     */
    locale: 'default',
    /**
     * Add themes you want to use here. The first theme will get applied.
     * If config.useCss4 === true, other theme variables will get included as well
     * @default ['neo-theme-light', 'neo-theme-dark']
     * @memberOf! module:Neo
     * @name config.themes
     * @type String[]
     */
    themes: ['neo-theme-light', 'neo-theme-dark'],
    /**
     * Flag for standalone Siesta module tests => prevent registerRemote worker messages
     * @default false
     * @memberOf! module:Neo
     * @name config.unitTestMode
     * @type Boolean
     */
    unitTestMode: false,
    /**
     * Flag if CSS4 stylesheets are in use (important for switching themes)
     * @default false
     * @memberOf! module:Neo
     * @name config.useCss4
     * @type Boolean
     */
    useCss4: true,
    /**
     * True will automatically include the stylesheet
     * @default true
     * @memberOf! module:Neo
     * @name config.useFontAwesome
     * @type Boolean
     */
    useFontAwesome: true,
    /**
     * Required for the online examples
     * @default false
     * @memberOf! module:Neo
     * @name config.useGoogleAnalytics
     * @type Boolean
     */
    useGoogleAnalytics: false
};

Object.assign(DefaultConfig, {
    /**
     * Path to the top level neo.mjs resources folder
     * @default Neo.config.basePath + 'resources/'
     * @memberOf! module:Neo
     * @name config.resourcesPath
     * @type String
     */
    resourcesPath: (Neo.config.basePath || DefaultConfig.basePath) + 'resources/',
    /**
     * The default base URL for web worker entry points (App, Data, Vdom)
     * @default Neo.config.basePath + 'src/worker/'
     * @memberOf! module:Neo
     * @name config.workerBasePath
     * @type String
     */
    workerBasePath: (Neo.config.basePath || DefaultConfig.basePath) + 'src/worker/'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/Neo.mjs":
/*!******************************************!*\
  !*** ./node_modules/neo.mjs/src/Neo.mjs ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Neo; });
/* harmony import */ var _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DefaultConfig.mjs */ "./node_modules/neo.mjs/src/DefaultConfig.mjs");


const configSymbol = Symbol.for('configSymbol'),
      getSetCache  = Symbol('getSetCache');

/**
 * The base module to enhance classes, create instances and the Neo namespace
 * @module Neo
 * @singleton
 * @borrows Neo.core.Util.capitalize        as capitalize
 * @borrows Neo.core.Util.createStyleObject as createStyleObject
 * @borrows Neo.core.Util.createStyles      as createStyles
 * @borrows Neo.core.Util.decamel           as decamel
 * @borrows Neo.core.Util.isArray           as isArray
 * @borrows Neo.core.Util.isBoolean         as isBoolean
 * @borrows Neo.core.Util.isDefined         as isDefined
 * @borrows Neo.core.Util.isNumber          as isNumber
 * @borrows Neo.core.Util.isObject          as isObject
 * @borrows Neo.core.Util.isString          as isString
 * @borrows Neo.core.Util.toArray           as toArray
 * @tutorial 01_Concept
 */
let Neo = self.Neo || {};

Neo = self.Neo = Object.assign({
    /**
     * A map containing ntypes as key and Neo classes or singletons as values
     * @memberOf! module:Neo
     * @private
     * @type Object
     */
    ntypeMap: {},
    /**
     * Needed for Neo.create. False for the main thread, true for the App, Data & Vdom worker
     * @memberOf! module:Neo
     * @private
     * @type Boolean
     */
    insideWorker: typeof DedicatedWorkerGlobalScope !== 'undefined' || typeof WorkerGlobalScope !== 'undefined',

    /**
     * Internally used at the end of each class / module definition
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls The Neo class to apply configs to
     * @private
     * @tutorial 02_ClassSystem
     */
    applyClassConfig: function(cls) {
        let baseCfg       = null,
            baseStaticCfg = null,
            config        = {},
            proto         = cls.prototype || cls,
            protos        = [],
            staticConfig  = {},
            ctor;

        while (proto.__proto__) {
            ctor = proto.constructor;

            if (ctor.hasOwnProperty('classConfigApplied')) {
                baseCfg       = Neo.clone(ctor.config, true);
                baseStaticCfg = Neo.clone(ctor.staticConfig, true);
                break;
            }

            protos.unshift(proto);
            proto = proto.__proto__;
        }

        config       = baseCfg       ? baseCfg       : config;
        staticConfig = baseStaticCfg ? baseStaticCfg : staticConfig;

        protos.forEach(element => {
            ctor = element.constructor;
            let cfg       = ctor.getConfig       && ctor.getConfig()       || {},
                staticCfg = ctor.getStaticConfig && ctor.getStaticConfig() || {},
                mixins;

            if (cfg) {
                Object.entries(cfg).forEach(([key, value]) => {
                    if (key.slice(-1) === '_') {
                        delete cfg[key];
                        key = key.slice(0, -1);
                        cfg[key] = value;
                        autoGenerateGetSet(element, key);
                    }

                    // only apply properties which have no setters inside the prototype chain
                    // those will get applied on create (Neo.core.Base -> initConfig)
                    else if (!hasPropertySetter(element, key)) {
                        Object.defineProperty(element, key, {
                            enumerable: true,
                            value     : value,
                            writable  : true
                        });
                    }
                });
            }

            Object.assign(ctor, staticCfg);

            if (cfg.hasOwnProperty('ntype')) {
                Neo.ntypeMap[cfg.ntype] = cfg.className;
            }

            mixins = config.hasOwnProperty('mixins') && config.mixins || [];

            if (staticCfg && staticCfg.observable) {
                mixins.push('Neo.core.Observable');
            }

            if (cfg.hasOwnProperty('mixins') && Array.isArray(cfg.mixins) && cfg.mixins.length > 0) {
                mixins.push(...cfg.mixins);
            }

            if (mixins.length) {
                applyMixins(ctor, mixins);
            }

            delete cfg.mixins;
            delete config.mixins;

            Object.assign(config, cfg);
            Object.assign(staticConfig, staticCfg);

            Object.assign(ctor, {
                classConfigApplied: true,
                config            : Neo.clone(config, true),
                isClass           : true,
                staticConfig      : Neo.clone(staticConfig, true)
            });

            delete ctor.getConfig;
            delete ctor.getStaticConfig;

            if (!config.singleton) {
                this.applyToGlobalNs(cls);
            }
        });
    },

    /**
     * Maps a class to the global Neo or App namespace.
     * Can get called for classes and singleton instances
     * @memberOf module:Neo
     * @param {Neo.core.Base} cls
     */
    applyToGlobalNs: function(cls) {
        let proto = typeof cls === 'function' ? cls.prototype: cls,
            className, nsArray, key, ns;

        if (proto.constructor.registerToGlobalNs === true) {
            className = proto.isClass ? proto.config.className : proto.className;

            nsArray = className.split('.');
            key     = nsArray.pop();
            ns      = Neo.ns(nsArray, true);
            ns[key] = cls;
        }
    },

    /**
     * Maps methods from one namespace to another one
     * @example
     * // aliases
     * Neo.applyFromNs(Neo, Util, {
     *     createStyleObject: 'createStyleObject',
     *     createStyles     : 'createStyles',
     *     capitalize       : 'capitalize',
     *     decamel          : 'decamel',
     *     isArray          : 'isArray',
     *     isBoolean        : 'isBoolean',
     *     isDefined        : 'isDefined',
     *     isNumber         : 'isNumber',
     *     isObject         : 'isObject',
     *     isString         : 'isString',
     *     toArray          : 'toArray'
     * }, true);
     *
     * // e.g. Neo.core.Util.isObject => Neo.isObject
     * @memberOf module:Neo
     * @param {Neo|Neo.core.Base} target The target class or singleton Instance or Neo
     * @param {Neo.core.Base} namespace The class containing the methods
     * @param {Object} config
     * @param {Boolean} [bind] set this to true in case you want to bind methods to the "from" namespace
     * @returns {Object} target
     */
    applyFromNs: function(target, namespace, config, bind) {
        let fnName;

        if (target && config && typeof config === 'object') {
            Object.entries(config).forEach(([key, value]) => {
                fnName = namespace[value];
                target[key] = bind ? fnName.bind(namespace) : fnName;
            });
        }

        return target;
    },

    /**
     * Copies all keys of defaults into target, in case they don't already exist
     * @memberOf module:Neo
     * @param {Object} target The target object
     * @param {Object} defaults The object containing the keys you want to copy
     * @returns {Object} target
     */
    assignDefaults: function(target, defaults) {
        if (target && defaults && typeof defaults === 'object') {
            Object.entries(defaults).forEach(([key, value]) => {
                if (!target.hasOwnProperty(key)) {
                    target[key] = value;
                }
            });
        }

        return target;
    },

    /**
     * @memberOf module:Neo
     * @param {Object|Array|*} obj
     * @param {Boolean} [deep=false] Set this to true in case you want to clone nested objects as well
     * @param {Boolean} [ignoreNeoInstances=false] returns existing instances if set to true
     * @returns {Object|Array|*} the cloned input
     */
    clone: function(obj, deep, ignoreNeoInstances) {
        let out;

        if (Array.isArray(obj)) {
            return obj.map(val => {
                return Neo.clone(val, deep, ignoreNeoInstances);
            });
        }
        if (obj !== null && typeof obj === 'object') {
            if (obj.constructor.isClass && obj instanceof Neo.core.Base) {
                return ignoreNeoInstances ? obj : this.cloneNeoInstance(obj);
            } else if(obj.constructor.isClass) {
                return obj;
            } else {
                out = {};
                Object.entries(obj).forEach(([key, value]) => {
                    if (deep) {
                        value = Neo.clone(value, deep, ignoreNeoInstances);
                    }
                    out[key] = value;
                });
                return out;
            }
        }
        return obj; // return all other data types
    },

    /**
     * Creates a new instance using the originalConfig without the id
     * @memberOf module:Neo
     * @param {Neo.core.Base} instance
     * @returns {Neo.core.Base} the cloned instance
     */
    cloneNeoInstance: function(instance) {
        let config = {...instance.originalConfig};
        delete config._id;
        delete config.id;
        return Neo.create(instance.className, config);
    },

    /**
     * Use Neo.create() instead of "new" to create instances of all Neo classes
     * @example
     * import Button from './Button.mjs';
     *
     * Neo.create(Button, {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * import Button from './Button.mjs';
     *
     * Neo.create({
     *     module : Button,
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create('Neo.component.Button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.create({
     *     className: 'Neo.component.Button',
     *     iconCls  : 'fa fa-home',
     *     text     : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object|Neo.core.Base} className
     * @param {Object} [config]
     * @returns {Neo.core.Base|null} The new class instance
     * @tutorial 02_ClassSystem
     */
    create: function(className, config) {
        let cls, instance;

        if (typeof className === 'function' && undefined !== className.constructor) {
            cls = className;
        } else {
            if (typeof className === 'object') {
                config = className;

                if (!config.className && !config.module) {
                    // using console.error instead of throw to show the config object
                    console.error('Class created with object configuration missing className or module property', config);
                    return null;
                }

                className = config.className ? config.className : config.module.prototype.className;
            }

            if (!exists(className)) {
                throw new Error('Class ' + className + ' does not exist');
            }

            cls = Neo.ns(className);
        }

        instance = new cls(config);

        instance.onConstructed();
        instance.init();

        return instance;
    },

    emptyFn: function() {},

    /**
     * Maps a className string into a global namespace
     * @example
     * Neo.ns('Neo.component.Button', true);
     * // =>
     * // self.Neo = self.Neo || {};
     * // self.Neo.component = self.Neo.component || {};
     * // self.Neo.component.Button = self.Neo.component.Button || {};
     * // return self.Neo.component.Button;
     *
     * @memberOf module:Neo
     * @param {Array|String} names The class name string containing dots or an Array of the string parts
     * @param {Boolean} [create] Set create to true to create empty objects for non existing parts
     * @param {Object} [scope] Set a different starting point as self
     * @returns {Object} reference to the toplevel namespace
     */
    ns: function(names, create, scope) {
        names = Array.isArray(names) ? names : names.split('.');

        return names.reduce((prev, current) => {
            if (create && !prev[current]) {
                prev[current] = {};
            }
            if (prev) {
                return prev[current];
            }
        }, scope || self);
    },

    /**
     * Creates instances of Neo classes using their ntype instead of the class name
     * @example
     * Neo.ntype('button' {
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @example
     * Neo.ntype({
     *     ntype  : 'button',
     *     iconCls: 'fa fa-home',
     *     text   : 'Home'
     * });
     * @memberOf module:Neo
     * @param {String|Object} ntype
     * @param {Object} [config]
     * @returns {Neo.core.Base}
     * @see {@link module:Neo.create create}
     */
    ntype: function(ntype, config) {
        if (typeof ntype === 'object') {
            config = ntype;
            if (!config.ntype) {
                throw new Error('Class defined with object configuration missing ntype property. ' + config.ntype);
            }
            ntype = config.ntype;
        }

        let className = Neo.ntypeMap[ntype];

        if (!className) {
            throw new Error('ntype ' + ntype + ' does not exist');
        }
        return Neo.create(className, config);
    },

    onStart: Neo.emptyFn
}, Neo);

/**
 * List of class properties which are not supposed to get mixed into other classes
 * @type {string[]}
 * @private
 */
const ignoreMixin = [
    '_name',
    'classConfigApplied',
    'className',
    'constructor',
    'isClass',
    'mixin',
    'ntype',
    'observable',
    'registerToGlobalNs'
];

/**
 * Checks if the class name exists inside the Neo or app namespace
 * @param {String} className
 * @returns {Boolean}
 * @private
 */
function exists(className) {
    try {
        return !!className.split('.').reduce((prev, current) => {
            return prev[current];
        }, self);
    } catch(e) {
        return false;
    }
}

function mixReduce(mixinCls) {
    return (prev, current, idx, arr) => {
        return prev[current] = idx !== arr.length -1 ? prev[current] || {} : mixinCls;
    };
}

/**
 *
 * @param {Neo.core.Base} proto
 * @param {Neo.core.Base} mixinProto
 * @returns {Function}
 * @private
 */
function mixinProperty(proto, mixinProto) {
    return function(key) {
        if (~ignoreMixin.indexOf(key)) {
            return;
        }
        if (proto[key] && proto[key]._from) {
            if (mixinProto.className === proto[key]._from) {
                console.warn('Mixin set multiple times or already defined on a Base Class', proto.className, mixinProto.className, key);
                return;
            }
            throw new Error(
                proto.className + ': Multiple mixins defining same property (' +
                mixinProto.className + ', ' +
                proto[key]._from + ') => ' +
                key
            );
        }

        proto[key] = mixinProto[key];

        Object.getOwnPropertyDescriptor(proto, key)._from = mixinProto.className;

        if (typeof proto[key] === 'function') {
            proto[key]._name = key;
        }
    };
}

/**
 *
 * @param {Neo.core.Base} cls
 * @param {Array} mixins
 * @private
 */
function applyMixins(cls, mixins) {
    if (!Array.isArray(mixins)) {
        mixins = [mixins];
    }

    let i            = 0,
        len          = mixins.length,
        mixinClasses = {},
        mixin, mixinCls, mixinProto;

    for (;i < len;i++) {
        mixin = mixins[i];

        if (mixin.isClass) {
            mixinProto = mixin.prototype;
            mixinCls   = Neo.ns(mixinProto.className);
        } else {
            if (!exists(mixin)) {
                throw new Error('Attempting to mixin an undefined class: ' + mixin + ', ' + cls.prototype.className);
            }
            mixinCls   = Neo.ns(mixin);
            mixinProto = mixinCls.prototype;
        }

        mixinProto.className.split('.').reduce(mixReduce(mixinCls), mixinClasses);

        Object.getOwnPropertyNames(mixinProto).forEach(mixinProperty(cls.prototype, mixinProto));
    }

    cls.prototype.mixins = mixinClasses; // todo: we should do a deep merge
}

/**
 * Checks if there is a set method for a given property key inside the prototype chain
 * @param {Neo.core.Base} proto The top level prototype of a class
 * @param {String} key the property key to test
 * @returns {Boolean}
 * @private
 */
function hasPropertySetter(proto, key) {
    let descriptor;

    while (proto.__proto__) {
        descriptor = Object.getOwnPropertyDescriptor(proto, key);

        if (typeof descriptor === 'object' && typeof descriptor.set === 'function') {
            return true;
        }
        proto = proto.__proto__;
    }

    return false;
}

/**
 * Creates get / set methods for class configs ending with an underscore
 * @param {Neo.core.Base} proto
 * @param {String} key
 * @private
 * @tutorial 02_ClassSystem
 */
function autoGenerateGetSet(proto, key) {
    if (hasPropertySetter(proto, key)) {
        throw('Config ' + key + '_ (' + proto.className + ') already has a set method, use beforeGet, beforeSet & afterSet instead');
    }

    if (!Neo[getSetCache]) {
        Neo[getSetCache] = {};
    }

    if (!Neo[getSetCache][key]) {
        Neo[getSetCache][key] = {
            get: function() {
                let me        = this,
                    beforeGet = 'beforeGet' + Neo.capitalize(key),
                    hasNewKey = me[configSymbol].hasOwnProperty(key),
                    newKey    = me[configSymbol][key],
                    value     = hasNewKey ? newKey : me['_' + key];

                if (Array.isArray(value)) {
                    if (key !== 'items') {
                        value = [...value];
                    }
                } else if (value instanceof Date) {
                    value = new Date(value.valueOf());
                }

                if (hasNewKey) {
                    me[key] = value; // we do want to trigger the setter => beforeSet, afterSet
                    value = me['_' + key]; // return the value parsed by the setter
                }

                if (me[beforeGet] && typeof me[beforeGet] === 'function') {
                    value = me[beforeGet](value);
                }

                return value;
            },

            set: function(value) {
                let me        = this,
                    _key      = '_' + key,
                    uKey      = Neo.capitalize(key),
                    beforeSet = 'beforeSet' + uKey,
                    afterSet  = 'afterSet'  + uKey,
                    oldValue  = me[_key];

                // every set call has to delete the matching symbol
                delete me[configSymbol][key];

                // we do want to store the value before the beforeSet modification as well,
                // since it could get pulled by other beforeSet methods of different configs
                me[_key] = value;

                if (me[beforeSet] && typeof me[beforeSet] === 'function') {
                    value = me[beforeSet](value, oldValue);

                    // If they don't return a value, that means no change
                    if (value === undefined) {
                        me[_key] = oldValue;
                        return;
                    }

                    me[_key] = value;
                }

                // todo: we could compare objects & arrays for equality
                if (Neo.isObject(value) || Array.isArray(value) || value !== oldValue) {
                    if (me[afterSet] && typeof me[afterSet] === 'function') {
                        me[afterSet](value, oldValue);
                    }
                }
            }
        };
    }

    Object.defineProperty(proto, key, Neo[getSetCache][key]);
}

Neo.config = Neo.config || {};

Neo.assignDefaults(Neo.config, _DefaultConfig_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Filter_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filter.mjs */ "./node_modules/neo.mjs/src/collection/Filter.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sorter.mjs */ "./node_modules/neo.mjs/src/collection/Sorter.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");







const countMutations   = Symbol('countMutations'),
      isFiltered       = Symbol('isFiltered'),
      isSorted         = Symbol('isSorted'),
      silentUpdateMode = Symbol('silentUpdateMode'),
      toAddArray       = Symbol('toAddArray'),
      toRemoveArray    = Symbol('toRemoveArray'),
      updatingIndex    = Symbol('updatingIndex');

/**
 * @class Neo.collection.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Base'
         * @private
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @private
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems
         * @private
         */
        allItems: null,
        /**
         * True to sort the collection items when adding / inserting new ones
         * @member {Boolean} autoSort
         */
        autoSort: true,
        /**
         * Use 'primitive' for default filters, use 'advanced' for filters using a filterBy method
         * which need to iterate over other collection items
         * @member {String} filterMode='primitive'
         */
        filterMode: 'primitive',
        /**
         * An Array containing Neo.util.Filter config objects or instances
         * @member {Array} filters_=[]
         */
        filters_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {Array} items_=[]
         */
        items_: [],
        /**
         * The unique(!) key property of each collection item
         * @member {string} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * A map containing the key & reference of each collection item for faster access
         * @member {Map} map_=null
         */
        map_: null,
        /**
         * An internal Array of the sort directions for faster access
         * @member {Array} sortDirections=null
         * @private
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @private
         */
        sortProperties: null,
        /**
         * An Array containing Neo.util.Sorter config objects or instances
         * @member {Array} sorters_=[]
         */
        sorters_: [],
        /**
         * The id of another collection instance to use as this data source
         * @member {String|null} sourceId_=null
         */
        sourceId_: null
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me           = this,
            symbolConfig = {enumerable: false, writable: true};

        Object.defineProperties(me, {
            [countMutations]  : {...symbolConfig, value: false},
            [isFiltered]      : {...symbolConfig, value: false},
            [isSorted]        : {...symbolConfig, value: false},
            [silentUpdateMode]: {...symbolConfig, value: false},
            [toAddArray]      : {...symbolConfig, value: []},
            [toRemoveArray]   : {...symbolConfig, value: []},
            [updatingIndex]   : {...symbolConfig, value: 0}
        });

        if (me.autoSort && me._sorters.length > 0) {
            me.doSort();
        }
    }

    /**
     * Adds one or more items to the end of the collection and returns the new length of the collection.
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    add(item) {
        this.splice(0, null, item);
        return this.getCount();
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetFilters(value, oldValue) {
        let me = this;

        value.forEach(filter => {
            if (filter.listenerApplied === false) {
                filter.on('change', me.onFilterChange, me);
                filter.listenerApplied = true;
            }
        });

        if (oldValue) {
            me.filter();
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetItems(value, oldValue) {
        let me          = this,
            keyProperty = me.keyProperty,
            i           = 0,
            len         = value.length,
            item;

        for (; i < len; i++) {
            item = value[i];
            me.map.set(item[keyProperty], item);
        }
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetSorters(value, oldValue) {
        let me = this;

        me.applySorterConfigs();

        value.forEach(sorter => {
            if (sorter.listenerApplied === false) {
                sorter.on('change', me.onSorterChange, me);
                sorter.listenerApplied = true;
            }
        });

        if (oldValue && me.autoSort) {
            me.doSort();
        }
    }

    /**
     *
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @private
     */
    afterSetSourceId(value, oldValue) {
        if (value) {
            let me     = this,
                source = Neo.get(value);

            me._items = [...source._items];
            me.map    = new Map(source.map); // creates a clone of the original map

            const listenersConfig = {
                mutate: me.onMutate,
                scope : me
            };

            source.on(listenersConfig);

            // console.log('afterSetSourceId', source);

            if (oldValue) {
                source = Neo.get(oldValue);
                source.un(listenersConfig); // todo: core.Observable.un needs to support this syntax
            }
        }
    }

    /**
     * Saves the sort property & direction multiplier of each sorter inside 2 arrays for faster access when sorting
     * @private
     */
    applySorterConfigs() {
        let me = this;

        me.sortDirections = [];
        me.sortProperties = [];

        me.sorters.forEach(sorter => {//console.log('forEach', sorter);
            me.sortDirections.push(sorter.directionMultiplier);
            me.sortProperties.push(sorter.property);
        });
    }

    /**
     *
     * @param {Map|null} value
     * @param {Map|null} oldValue
     * @private
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (!(key instanceof _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                if (oldValue) {
                    hasMatch = false;
                    i        = 0;

                    for (; i < len; i++) {
                        if (oldValue[i].operator === (key.operator || '===') &&
                            oldValue[i].property === key.property &&
                            oldValue[i].value    === key.value
                        ) {
                            value[index] = oldValue[i];
                            hasMatch = true;
                            oldValue.splice(i, 1);
                            len--;
                            break;
                        }
                    }
                }

                if (!hasMatch) {
                    value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key);
                }
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (!(key instanceof _Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])) {
                if (oldValue) {
                    hasMatch = false;
                    i        = 0;

                    for (; i < len; i++) {
                        if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                            value[index] = oldValue[i];
                            hasMatch = true;
                            oldValue.splice(i, 1);
                            len--;
                            break;
                        }
                    }
                }

                if (!hasMatch) {
                    value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], key);
                }
            }
        });

        if (Array.isArray(oldValue)) {
            oldValue.forEach(key => {
                key.destroy();
            });
        }

        return value;
    }

    /**
     *
     * @param opts
     * @private
     */
    cacheUpdate(opts) {
        console.log('cacheUpdate', opts, this[toAddArray]);return;

        let me          = this,
            keyProperty = me.keyProperty,
            index, toAddMap, toRemoveMap;

        if (!me[silentUpdateMode]) {
            toAddMap    = me[toAddArray]   .map(e => e[keyProperty]);
            toRemoveMap = me[toRemoveArray].map(e => e[keyProperty]);

            opts.addedItems.forEach(item => {
                if (index = toRemoveMap.indexOf(item[keyProperty]) > - 1) {
                    me[toRemoveArray].splice(index, 1);
                } else if (toAddMap.indexOf(item[keyProperty]) < 0) {
                    me[toAddArray].push(item);
                }
            });

            opts.removedItems.forEach(item => {
                if (index = toAddMap.indexOf(item[keyProperty]) > - 1) {
                    me[toAddArray].splice(index, 1);
                } else if (toRemoveMap.indexOf(item[keyProperty]) < 0) {
                    me[toRemoveArray].push(item);
                }
            });
        }
    }

    /**
     * Removes all items and clears the map
     */
    clear() {
        let me = this;

        me._items.splice(0, me.getCount());
        me.map.clear();
    }

    /**
     * Clears all current filters and optionally restores the original ones in case they existed.
     * @param {boolean} [restoreOriginalFilters=false]
     */
    clearFilters(restoreOriginalFilters) {
        this.filters = restoreOriginalFilters ? Neo.clone(this.originalConfig.filters, true, true) : null;
    }

    /**
     * Clears all current sorters and optionally restores the original ones in case they existed.
     * Without restoreInitialState as true this will not affect the current sorting of this collection.
     * @param {boolean} [restoreOriginalSorters=false]
     */
    clearSorters(restoreOriginalSorters) {
        this.sorters = restoreOriginalSorters ? Neo.clone(this.originalConfig.sorters, true, true) : null;
    }

    /**
     *
     * @returns {Neo.collection.Base} The cloned collection
     */
    clone() {
        let me      = this,
            config  = Neo.clone(me.originalConfig, true),
            filters = me._filters || [],
            sorters = me._sorters || [];

        delete config.id;
        delete config.filters;
        delete config.items;
        delete config.sorters;

        if (me._items.length > 0) {
            config.items = [...me._items];
        }

        config.filters = [];
        config.sorters = [];

        // todo: filters & sorters should push their current state and not the original one

        filters.forEach(function(filter) {
            config.filters.push(filter.originalConfig);
        });

        sorters.forEach(function(sorter) {
            config.sorters.push(sorter.originalConfig);
        });

        return Neo.create(Base, config);
    }

    /**
     * Clears the map & items array before the super call
     */
    destroy() {
        let me = this;

        me.items.splice(0, me._items.length);
        me.map.clear();

        super.destroy();
    }

    /**
     * @private
     */
    doSort() {
        let me                = this,
            items             = me._items,
            sorters           = me.sorters,
            sortDirections    = me.sortDirections,
            sortProperties    = me.sortProperties,
            countSorters      = sortProperties.length || 0,
            hasSortByMethod   = false,
            hasTransformValue = false,
            i, mappedItems, obj, sorter, sortProperty, sortValue;

        if (countSorters > 0) {
            sorters.forEach(key => {
                if (key.sortBy) {
                    hasSortByMethod = true;
                }

                if (key.useTransformValue) {
                    hasTransformValue = true;
                }
            });

            if (hasSortByMethod) {
                me._items.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sorter    = sorters[i];
                        sortValue = sorter[sorter.sortBy ? 'sortBy' : 'defaultSortBy'](a, b);

                        if (sortValue !== 0) {
                            return sortValue;
                        }
                    }

                    return 0;
                });
            } else {
                if (hasTransformValue) {
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Sorting_with_map
                    mappedItems = items.map((item, index) => {
                        obj = {index: index};
                        i   = 0;

                        for (; i < countSorters; i++) {
                            if (sorters[i].useTransformValue) {
                                obj[sortProperties[i]] = sorters[i].transformValue(item[sortProperties[i]]);
                            } else {
                                obj[sortProperties[i]] = item[sortProperties[i]];
                            }
                        }

                        return obj;
                    });
                } else {
                    mappedItems = items;
                }

                mappedItems.sort((a, b) => {
                    i = 0;

                    for (; i < countSorters; i++) {
                        sortProperty = sortProperties[i];

                        if (a[sortProperty] > b[sortProperty]) {
                            return 1 * sortDirections[i];
                        }

                        if (a[sortProperty] < b[sortProperty]) {
                            return -1 * sortDirections[i];
                        }
                    }

                    return 0;
                });

                if (hasTransformValue) {
                    me._items = mappedItems.map(el => {
                        return items[el.index];
                    });
                }
            }
        }

        me[isSorted] = countSorters > 0;

        if (me[updatingIndex] === 0) {
            me.fire('sort');
        }
    }

    /**
     * Resumes the collection events.
     * If you started an update using the startSilentUpdateMode flag,
     * you must use the endSilentUpdateMode param for this call.
     * Using the endSilentUpdateMode param will not fire a mutation event.
     * @param {Boolean} [endSilentUpdateMode]
     * @see {@link Neo.collection.Base#startUpdate startUpdate}
     */
    endUpdate(endSilentUpdateMode) {
        const me = this;

        if (me[updatingIndex] > 0) {
            me[updatingIndex]--;
        }

        if (endSilentUpdateMode) {
            me[silentUpdateMode] = false;
        } else {
            me.fire('mutate', {
                addedItems  : me[toAddArray],
                removedItems: me[toRemoveArray]
            });

            me[toAddArray]   .splice(0, me[toAddArray]   .length);
            me[toRemoveArray].splice(0, me[toRemoveArray].length);
        }
    }

    /**
     * @private
     */
    filter() {
        let me              = this,
            filters         = me._filters,
            countAllFilters = filters.length,
            countFilters    = 0,
            items           = me.allItems && me.allItems._items || me._items,
            i               = 0,
            countItems      = items.length,
            filteredItems   = [],
            config, isIncluded, item, j, tmpItems;

        for (; i < countAllFilters; i++) {
            if (!filters[i].disabled) {
                countFilters++;
            }
        }

        if (countFilters === 0 && me.allItems) {
            me.clear();

            me.items = [...me.allItems._items];
            me.map.set(...me.allItems.map);
        } else {
            if (!me.allItems) {
                config = {...me.originalConfig};

                delete config.filters;
                delete config.items;
                delete config.sorters;

                me.allItems = Neo.create(Base, {
                    ...Neo.clone(config, true, true),
                    keyProperty: me.keyProperty,
                    sourceId   : me.id
                });

                // console.log('child collection', me.allItems);
            }

            me.map.clear();

            if (me.filterMode === 'primitive') {
                // using for loops on purpose -> performance
                for (i = 0; i < countItems; i++) {
                    isIncluded = true;
                    item       = items[i];
                    j          = 0;

                    for (; j < countAllFilters; j++) {
                        if (filters[j].isFiltered(item, items, items)) {
                            isIncluded = false;
                            break;
                        }
                    }

                    if (isIncluded) {
                        filteredItems.push(item);
                        me.map.set(item[me.keyProperty], item);
                    }
                }

                me._items = filteredItems; // silent update, the map is already in place
            } else {
                filteredItems = [...items];

                for (j=0; j < countAllFilters; j++) {
                    tmpItems = [];

                    for (i = 0; i < countItems; i++) {
                        if (!filters[j].isFiltered(filteredItems[i], filteredItems, items)) {
                            tmpItems.push(filteredItems[i]);
                        }
                    }

                    filteredItems = [...tmpItems];
                    countItems    = filteredItems.length;
                }

                me.items = filteredItems; // update the map
            }
        }

        me[isFiltered] = countFilters !== 0;

        me.fire('filter');
    }

    /**
     * Returns all items which match the property and value
     * @param {Object|String} property
     * @param {String|Number} value
     * @returns {Array} Returns an empty Array in case no items are found
     */
    find(property, value) {
        let me               = this,
            items            = [],
            isObjectProperty = Neo.isObject(property),
            matchArray, propertiesArray, propertiesLength;

        if (isObjectProperty) {
            propertiesArray  = Object.entries(property);
            propertiesLength = propertiesArray.length;
        }

        me.items.forEach(item => {
            if (isObjectProperty) {
                matchArray = [];

                propertiesArray.forEach(([key, value]) => {
                    if (item[key] === value) {
                        matchArray.push(true);
                    }
                });

                if (matchArray.length === propertiesLength) {
                    items.push(item);
                }
            }
            else if (item[property] === value) {
                items.push(item);
            }
        });

        return items;
    }

    /**
     * Returns all items in the collection for which the passed function returns true
     * @param {function} fn The function to run for each item inside the start-end range. Return true for a match.
     * @param {Object} fn.item The current collection item
     * @param {Object} [scope=this] The scope in which the passed function gets executed
     * @param {Number} [start=0] The start index
     * @param {Number} [end=this.getCount()] The end index (up to, last value excluded)
     * @returns {Array} Returns an empty Array in case no items are found
     */
    findBy(fn, scope, start, end) {
        let me    = this,
            items = [],
            i     = start || 0,
            len   = end   || me.getCount();

        scope = scope || me;

        for (; i < len; i++) {
            if (fn.call(scope, me.items[i])) {
                items.push(me.items[i]);
            }
        }

        return items;
    }

    /**
     * Returns the first item inside the collection
     * @returns {Object}
     */
    first() {
        return this._items[0];
    }

    /**
     * Returns the object associated to the key, or undefined if there is none.
     * @param key
     * @returns {Object|undefined}
     */
    get(key) {
        return this.map.get(key);
    }

    /**
     * Returns the item for a given index
     * @param {Number} index
     * @returns {Object|undefined}
     */
    getAt(index) {
        return this._items[index];
    }

    /**
     * Returns the length of the internal items array
     * @returns {Number}
     */
    getCount() {
        return this._items.length;
    }

    /**
     *
     * @return {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @return {Neo.collection.Filter|null}
     */
    getFilter(property) {
        let filters = this.filters || [],
            i       = 0,
            len     = filters.length;

        for (; i < len; i++) {
            if (filters[i].property === property) {
                return filters[i];
            }
        }

        return null;
    }

    /**
     * Returns the key for a given index
     * @param {Number} index
     * @returns {Number|String|undefined}
     */
    getKeyAt(index) {
        let item = this._items[index];
        return item && item[this.keyProperty];
    }

    /**
     * Returns a shallow copy of a portion of the items array
     * @param {Number} [start] Zero-based index at which to begin extraction.
     * @param {Number} [end] Zero-based index before which to end extraction (extracts up to but not including end).
     * @returns {Array}
     * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    getRange(start, end) {
        return this._items.slice(start, end);
    }

    /**
     * Returns the Source Collection in case the sourceCollectionId config was set
     * @returns {Neo.collection.Base|undefined}
     */
    getSource() {
        return this.sourceId && Neo.get(this.sourceId);
    }

    /**
     *
     * Returns a boolean asserting whether a value has been associated to the key in the Collection or not
     * @param {Number|String} key
     * @returns {Boolean}
     */
    has(key) {
        return this.map.has(key);
    }

    /**
     * Returns a boolean asserting whether an item exists in the Collection or not
     * @param {Object} item
     * @returns {Boolean}
     */
    hasItem(item) {
        return this.map.has(item[this.keyProperty]);
    }

    /**
     * Returns the index for a given key or item
     * @param {Number|String|Object} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOf(key) {
        return this._items.indexOf(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(key) ? key : this.map.get(key));
    }

    /**
     * Returns the index for a given item
     * @param {Object} item
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfItem(item) {
        return this._items.indexOf(item);
    }

    /**
     * Returns the index for a given key
     * @param {Number|String} key
     * @returns {Number} index (-1 in case no match is found)
     */
    indexOfKey(key) {
        return this._items.indexOf(this.map.get(key));
    }

    /**
     * Inserts an item or an array of items at the specified index
     * @param {Number} index
     * @param {Array|Object} item
     * @returns {Number} the collection count
     */
    insert(index, item) {
        this.splice(index, 0, item);
        return this.getCount();
    }

    /**
     *
     * @returns {Boolean} true in case the collection is filtered
     */
    isFiltered() {
        return this[isFiltered];
    }

    /**
     *
     * @param {Object} item
     * @returns {boolean}
     * @private
     */
    isFilteredItem(item) {
        let me         = this,
            filters    = me._filters,
            i          = 0,
            len        = filters.length,
            isFiltered = false;

        for (; i < len; i++) {
            if (filters[i].isFiltered(item)) {
                isFiltered = true;
                break;
            }
        }

        return isFiltered;
    }

    /**
     *
     * @returns {Boolean} true in case the collection is sorted
     */
    isSorted() {
        return this[isSorted];
    }

    /**
     * Returns the last item inside the collection
     * @returns {Object}
     */
    last() {
        return this._items[this.getCount() -1];
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onMutate(opts) {
        let me = this;

        if (opts.preventBubbleUp) {
            me.preventBubbleUp = true;
        }

        me.splice(null, opts.removedItems, opts.addedItems);

        // console.log('onMutate', me.getCount(), me.id, opts);
    }

    /**
     *
     * @param {Object} opts
     * @private
     */
    onSorterChange(opts) {
        this.applySorterConfigs();
        this.doSort();
    }

    /**
     * Removes the last element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    pop() {
        let mutation = this.splice(this.getCount() -1, 1);
        return mutation.removedItems[0];
    }

    /**
     * Adds one or more items to the end of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    push(item) {
        return this.add(item);
    }

    /**
     * Removes a given key, item or Array containing keys|items
     * @param {Number|String|Object|Array} key
     * @returns {Number} the collection count
     */
    remove(key) {
        this.splice(0, Array.isArray(key) ? key : [key]);
        return this.getCount();
    }

    /**
     * Removes the item at the given index
     * @param {Number} index
     * @returns {Number} the collection count
     */
    removeAt(index) {
        this.splice(index, 1);
        return this.getCount();
    }

    /**
     * Reverses the items array in place.
     * Intended for collections without sorters.
     * @returns {Array} items
     */
    reverse() {
        return this._items.reverse();
    }

    /**
     * Removes the first element from the items array and returns this element.
     * @returns {Object} The removed element from the collection; undefined if the collection is empty.
     */
    shift() {
        let mutation = this.splice(0, 1);
        return mutation.addedItems[0];
    }

    /**
     *
     * @param {function} callback Function to test for each item, taking three parameters:
     * @param {Object}   callback.item The current collection item being processed
     * @param {Number}  [callback.index] The index of the current item being processed
     * @param {Array}   [callback.items] The items array of the collection
     *
     * @param {Object} [scope] Value to use as "this" when executing the callback
     * @returns {boolean} true if the callback function returns a truthy value for any collection item, otherwise false
     */
    some(...args) {
        return this._items.some(...args);
    }

    /**
     * Removes items from and/or adds items to this collection
     * If the toRemoveArray is used, then the index is not used for removing, the entries are found by key and removed from where they are.
     * If index is not passed, toAddArray is appended to the Collection.
     * @param {Number|null} index
     * @param {Number|Array} [removeCountOrToRemoveArray]
     * @param {Array| Object} [toAddArray]
     * @returns {Object} An object containing the addedItems & removedItems arrays
     */
    splice(index, removeCountOrToRemoveArray, toAddArray) {
        let me                 = this,
            source             = me.getSource(),
            addedItems         = [],
            items              = me._items,
            keyProperty        = me.keyProperty,
            map                = me.map,
            removedItems       = [],
            removeCountAtIndex = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            toRemoveArray      = Array.isArray(removeCountOrToRemoveArray) ? removeCountOrToRemoveArray : null,
            i, item, key, len, toAddMap;

        if (!index && removeCountAtIndex) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].error(me.id + ': If index is not passed, removeCountAtIndex cannot be used');
        }

        toAddArray = toAddArray && !Array.isArray(toAddArray) ? [toAddArray] : toAddArray;

        if (toRemoveArray && (len = toRemoveArray.length) > 0) {
            if (toAddArray && toAddArray.length > 0) {
                toAddMap = toAddArray.map(e => e[keyProperty]);
            }

            for (i=0; i < len; i++) {
                item = toRemoveArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (map.has(key)) {
                    if (!toAddMap || (toAddMap && toAddMap.indexOf(key) < 0)) {
                        removedItems.push(items.splice(me.indexOfKey(key), 1)[0]);
                        map.delete(key);
                    }
                }
            }
        } else if (removeCountAtIndex && removeCountAtIndex > 0) {
            removedItems.push(...items.splice(index, removeCountAtIndex));
            removedItems.forEach(e => {
                map.delete(e[keyProperty]);
            });
        }

        if (toAddArray && (len = toAddArray.length) > 0) {
            for (i=0; i < len; i++) {
                item = toAddArray[i];
                key  = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isObject(item) ? item[keyProperty] : item;

                if (!map.has(key) && !me.isFilteredItem(item)) {
                    addedItems.push(item);
                    map.set(key, item);
                }
            }

            if (addedItems.length > 0) {
                items.splice(_core_Util_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isNumber(index) ? index : items.length, 0, ...addedItems);

                if (me.autoSort && me._sorters.length > 0) {
                    me.doSort();
                }
            }
        }

        if (source) {
            if (!source.getSource()) {
                source.preventBubbleUp = true;
            }

            if (!me.preventBubbleUp) {
                // console.log('source splice', source.id, 'added:', ...toAddArray, 'removed:', ...removedItems);
                me.startUpdate(true);
                source.splice(null, toRemoveArray || removedItems, toAddArray);
                me.endUpdate(true);
            }

            delete source.preventBubbleUp;
        }

        if (addedItems.length > 0 || removedItems.length > 0) {
            me[countMutations]++;
        }

        if(me[updatingIndex] === 0) {
            me.fire('mutate', {
                addedItems     : toAddArray,
                preventBubbleUp: me.preventBubbleUp,
                removedItems   : toRemoveArray || removedItems
            });

        } else if (!me[silentUpdateMode]) {
            me.cacheUpdate({
                addedItems  : addedItems,
                removedItems: removedItems
            });
        }

        if (me[updatingIndex] === 0) {
            delete me.preventBubbleUp;
        }

        return {
            addedItems  : addedItems,
            removedItems: removedItems
        };
    }

    /**
     * Prevents the collection from firing events until endUpdate gets called.
     * If you start an update using the startSilentUpdateMode param,
     * the mutation event will not fire after using endUpdate()
     * (you must use the endSilentUpdateMode param for the endUpdate call in case you used
     * startSilentUpdateMode here)
     * @param {Boolean} [startSilentUpdateMode]
     * @see {@link Neo.collection.Base#endUpdate endUpdate}
     */
    startUpdate(startSilentUpdateMode) {
        if (startSilentUpdateMode) {
            this[silentUpdateMode] = true;
        }

        this[updatingIndex]++;
    }

    /**
     * Adds one or more elements to the beginning of the collection and returns the new items count
     * @param {Array|Object} item The item(s) to add
     * @returns {Number} the collection count
     */
    unshift(item) {
        this.splice(0, 0, item);
        return this.getCount();
    }
}

/**
 * The mutate event fires after every splice call (invoked by all methods which change the content of the items array).
 * @event mutate
 * @param {Object[]} addedItems
 * @param {Boolean} preventBubbleUp private
 * @param {Object[]} removedItems
 * @returns {Object}
 */

Neo.applyClassConfig(Base);

/* harmony default export */ __webpack_exports__["default"] = (Base);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Filter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Filter.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Filter
 * @extends Neo.core.Base
 */
class Filter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true,
        /**
         * Valid values for the operator config:<br>
         * ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
         * @member {String[]} operators
         * @private
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @private
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @private
         */
        ntype: 'filter',
        /**
         * Setting disabled to true will exclude this filter from the collection filtering logic
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * Provide a custom filtering function, has a higher priority than property, operator & value
         * @member {Function|null} filterBy_=null
         */
        filterBy_: null,
        /**
         * True means not filtering out items in case the value is '', null, [] or {}
         * @member {Boolean} includeEmptyValues=false
         */
        includeEmptyValues: false,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @private
         */
        listenerApplied: false,
        /**
         * The operator to filter by (use the combination of property, operator & value)
         * Valid values:
         *
         * == (not recommended)
         * ===
         * != (not recommended)
         * !==
         * <
         * >=
         * >
         * >=
         * like (collectionValue.toLowerCase().indexOf(filterValue.toLowerCase()) > -1)
         * included (expects value to be an array)
         * excluded (expects value to be an array)
         * @member {String} operator='==='
         */
        operator_: '===',
        /**
         * The property to filter by (use the combination of property, operator & value)
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * The scope to use for the filterBy method, in case it is provided. Defaults to this instance.
         * @member {Object|null} scope=null
         */
        scope: null,
        /**
         * The value to filter by (use the combination of property, operator & value)
         * @member {String} value_=null
         */
        value_: null
    }}

    afterSetDisabled(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetFilterBy(value, oldValue) {
        // todo
    }

    afterSetIsUpdating(value, oldValue) {
        if (value === false) {
            this.fireChangeEvent(value, oldValue);
        }
    }

    afterSetOperator(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetProperty(...args) {
        this.fireChangeEvent(...args);
    }

    afterSetValue(...args) {
        this.fireChangeEvent(...args);
    }

    beforeSetFilterBy(value, oldValue) {
        if (value && typeof value !== 'function') {
            Neo.logError('filterBy has to be a function', this);
            return oldValue;
        }

        return value;
    }

    /**
     * Triggered before the operator config gets changed.
     * @param {String|null} value
     * @param {String} oldValue
     * @returns {String}
     * @private
     */
    beforeSetOperator(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'operator');
    }

    /**
     *
     * @param value
     * @param oldValue
     */
    fireChangeEvent(value, oldValue) {
        let me = this;

        if (oldValue !== undefined && me.isUpdating !== true) {
            me.fire('change', {
                operator: me.operator,
                property: me.property,
                value   : me.value
            });
        }
    }

    /**
     * Checks if a colletion item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this;

        if (me._disabled) {
            return false;
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, item, filteredItems, allItems);
        } else {
            return !Filter[me._operator](item[me._property], me._value);
        }
    }

    static ['=='] (a, b) {return a == b;}
    static ['==='](a, b) {return a === b;}
    static ['!='] (a, b) {return a != b;}
    static ['!=='](a, b) {return a !== b;}
    static ['<']  (a, b) {return a < b;}
    static ['<='] (a, b) {return a <= b;}
    static ['>']  (a, b) {return a > b;}
    static ['>='] (a, b) {return a >= b;}

    static ['excluded'](a, b) {
        return b.indexOf(a) < 0;
    }

    static ['included'](a, b) {
        return b.indexOf(a) > -1;
    }

    static ['isDefined'](a, b) {
        return a !== undefined;
    }

    static ['isUndefined'](a, b) {
        return a === undefined;
    }

    static ['like'](a, b) {
        return a.toLowerCase().includes(b.toLowerCase());
    }
}

Neo.applyClassConfig(Filter);

/* harmony default export */ __webpack_exports__["default"] = (Filter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/collection/Sorter.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/collection/Sorter.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");



/**
 * @class Neo.collection.Sorter
 * @extends Neo.core.Base
 */
class Sorter extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Sorter'
         * @private
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @private
         */
        ntype: 'sorter',
        /**
         * Internal config which mapps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @private
         */
        directionMultiplier: 1,
        /**
         * The sort direction when using a property.
         * @member {String} direction_='ASC'
         */
        direction_: 'ASC',
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {boolean} listenerApplied=false
         * @private
         */
        listenerApplied: false,
        /**
         * The property to sort by.
         * @member {String} property_='id'
         */
        property_: 'id',
        /**
         * Provide a custom sorting function, has a higher priority than property & direction
         * @member {Function|null} sortBy=null
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator
         */
        sortBy: null,
        /**
         * True to use the transformValue method for each item (the method can get overridden)
         * @member {Boolean} useTransformValue=true
         * @private
         */
        useTransformValue: true
    }}

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetDirection(value, oldValue) {
        let me = this;

        me.directionMultiplier = value === 'ASC' ? 1 : -1;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     *
     * @param {String} value
     * @param {String} oldValue
     */
    afterSetProperty(value, oldValue) {
        let me = this;

        if (oldValue) {
            me.fire('change', {
                direction: me.direction,
                property : me.property
            });
        }
    }

    /**
     * Default sorter function which gets used by collections in case at least one sorter has a real sortBy method
     * @param a
     * @param b
     */
    defaultSortBy(a, b) {
        let me = this;

        a = a[me.property];
        b = b[me.property];

        if (me.useTransformValue) {
            a = me.transformValue(a);
            b = me.transformValue(b);
        }

        if (a > b) {
            return 1 * me.directionMultiplier;
        }

        if (a < b) {
            return -1 * me.directionMultiplier;
        }

        return 0;
    }

    /**
     *
     * @param {*} value
     * @returns {*} value
     */
    transformValue(value) {
        if (typeof value === 'string') {
            value = value.toLowerCase();
        }

        return value;
    }
}

Neo.applyClassConfig(Sorter);

/* harmony default export */ __webpack_exports__["default"] = (Sorter);

/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Base.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Base.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/KeyNavigation.mjs */ "./node_modules/neo.mjs/src/util/KeyNavigation.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _util_Style_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Style.mjs */ "./node_modules/neo.mjs/src/util/Style.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");












/**
 * @class Neo.component.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Base'
         * @private
         */
        className: 'Neo.component.Base',
        /**
         * @member {String} ntype='component'
         * @private
         */
        ntype: 'component',
        /**
         * True automatically mounts a component after being rendered.
         * Use this for the top level component of your app.
         * @member {Boolean} autoMount=false
         * @tutorial 02_ClassSystem
         */
        autoMount: false,
        /**
         * True automatically renders a component after being created inside the init call.
         * Use this for the top level component of your app.
         * @member {Boolean} autoRender=false
         * @see {@link Neo.component.Base#init init}
         * @tutorial 02_ClassSystem
         */
        autoRender: false,
        /**
         * manager.Focus will change this flag on focusin & out dom events
         * @member {Boolean} containsFocus_=false
         * @private
         */
        containsFocus_: false,
        /**
         * Assign a component controller to this component (pass an imported module or the string based class name)
         * @member {Neo.controller.Component|String} controller_=null
         */
        controller_: null,
        /**
         * Disabled components will get the neo-disabled cls applied and won't receive DOM events
         * @member {Boolean} disabled_=false
         */
        disabled_: false,
        /**
         * An array of domListener configs
         * @member {Object[]|null} domListeners_=null
         * @example
         * afterSetStayOnHover(value, oldValue) {
         *     if (value) {
         *         let me           = this,
         *             domListeners = me.domListeners || [];
         *
         *         domListeners.push({
         *             mouseenter: me.onMouseEnter,
         *             scope     : me
         *         }, {
         *             mouseleave: me.onMouseLeave,
         *             scope     : me
         *         });
         *
         *        me.domListeners = domListeners;
         *    }
         *}
         */
        domListeners_: null,
        /**
         * Internal flag which will get set to true on mount
         * @member {Boolean} hasBeenMounted=false
         * @private
         */
        hasBeenMounted: false,
        /**
         * Internal flag for vdom changes after a component got unmounted
         * (delta updates can no longer get applied & a new render call is required before re-mounting)
         * @member {Boolean} hasUnmountedVdomChanges_=false
         * @private
         */
        hasUnmountedVdomChanges_: false,
        /**
         * Shortcut for style.height, defaults to px
         * @member {Number|String|null} height_=null
         */
        height_: null,
        /**
         * The top level innerHTML of the component
         * @member {String|null} html_=null
         */
        html_: null,
        /**
         * The unique component id
         * @member {String|null} id_=null
         */
        id_: null,
        /**
         * Internal flag which will get set to true while an update request (worker messages) is in progress
         * @member {Boolean} isVdomUpdating=false
         * @private
         */
        isVdomUpdating: false,
        /**
         * Using the keys config will create an instance of Neo.util.KeyNavigation.
         * @see {@link Neo.util.KeyNavigation KeyNavigation}
         * @member {Object} keys_=null
         */
        keys_: null,
        /**
         * Shortcut for style.maxHeight, defaults to px
         * @member {Number|String|null} maxHeight_=null
         */
        maxHeight_: null,
        /**
         * Shortcut for style.maxWidth, defaults to px
         * @member {Number|String|null} maxWidth_=null
         */
        maxWidth_: null,
        /**
         * Shortcut for style.minHeight, defaults to px
         * @member {Number|String|null} minHeight_=null
         */
        minHeight_: null,
        /**
         * Shortcut for style.minWidth, defaults to px
         * @member {Number|String|null} minWidth_=null
         */
        minWidth_: null,
        /**
         * True in case the component is mounted to the DOM
         * @member {Boolean} mounted_=false
         * @private
         */
        mounted_: false,
        /**
         * Internal flag which will get set to true in case an update call arrives while another update is running
         * @member {Boolean} isVdomUpdating=false
         * @private
         */
        needsVdomUpdate: false,
        /**
         * True in case the component is rendering the vnode
         * @member {Boolean} rendering_=false
         * @private
         */
        rendering: false,
        /**
         * Set this to true for bulk updates.
         * Ensure to set it back to false afterwards.
         * @member {Boolean} silentVdomUpdate=false
         */
        silentVdomUpdate: false,
        /**
         * Top level style attributes
         * @member {Object} style={}
         */
        style: {},
        /**
         * Add tooltip config objects
         * See tooltip/Base.mjs
         * @member {Array|Object} tooltips_=null
         */
        tooltips_: null,
        /**
         * The component vnode tree. Available after the component got rendered.
         * @member {Object} vnode_=null
         * @private
         */
        vnode_: null,
        /**
         * Shortcut for style.width, defaults to px
         * @member {Number|String|null} width_=null
         */
        width_: null,
        /**
         * Top level style attributes. Useful in case getVdomRoot() does not point to the top level DOM node.
         * @member {Object} wrapperStyle_={}
         */
        wrapperStyle_: {},
        /**
         * The vdom markup for this component.
         * @member {Object} _vdom={}
         */
        _vdom: {}
    }}

    /**
     * Specify a different vdom root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVnodeRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom;
    }

    /**
     * Specify a different vnode root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVdomRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode;
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(...args) {
        let me     = this,
            config = super.mergeConfig(...args),

            // it should be possible to set custom configs for the vdom on instance level,
            // however there will be already added attributes (e.g. id), so a merge seems to be the best strategy.
            vdom = {...me._vdom || {}, ...config.vdom || {}};

        // avoid any interference on prototype level
        // does not clone existing Neo instances
        me._vdom        = Neo.clone(vdom, true, true);
        me.cls          = config.cls;
        me._style       = config.style;
        me.wrapperStyle = Neo.clone(config.wrapperStyle, false);

        delete config.cls;
        delete config.style;
        delete config._vdom;
        delete config.vdom;
        delete config.wrapperStyle;

        return config;
    }

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].register(this);
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.fire('constructed', {id: me.id}); // testing

        if (me.keys) {
            me.keys.register(me);
        }
    }

    /**
     *
     */
    init() {
        if (this.autoRender) {
            this.render();
        }
    }

    /**
     * CSS selectors to apply to the top level node of this component
     * @member {String[]} cls=['neo-component']
     */
    get cls() {
        return this._cls ? Neo.clone(this._cls) : ['neo-component'];
    }
    set cls(value) {
        value = value ? value : [];

        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot(),
            oldCls;

        if (typeof value === 'string') {
            value = value.split('');
        }

        if (me.mounted) {
            oldCls = Neo.clone(me._cls);
        }

        me._cls = value;

        if (vdomRoot) {
            vdomRoot.cls = [...value];
        }

        me._vdom = vdom; // silent update

        if (me.mounted) {
            me.updateCls(value, oldCls);
        }
    }

    /**
     * Apply component based listeners
     * @member {Object} listeners={}
     */
    get listeners() {
        return this._listeners || {};
    }
    set listeners(value) {
        this._listeners = value;
    }

    /**
     * True after the component render() method was called. Also fires the rendered event.
     * @member {Boolean} rendered=false
     * @private
     */
    get rendered() {
        return this._rendered || false;
    }
    set rendered(value) {
        let me = this;

        me._rendered = value;

        if (value === true) {
            me.fire('rendered', me.id);
        }
    }

    /**
     * Top level style attributes
     * @member {Object} style={}
     */
    get style() {
        // we need to "clone" the object, otherwise changes will get applied directly and there are no deltas
        // this only affects non vdom related style to DOM deltas
        return Neo.clone(this._style);
    }
    set style(value) {
        let me       = this,
            vdomRoot = me.getVdomRoot(),
            oldStyle;

        if (me.mounted) {
            oldStyle = me._style;
        }

        me._style = value;

        // silent update
        if (!vdomRoot.style) {
            vdomRoot.style = {};
        }

        vdomRoot.style = value;

        if (me.mounted) {
            me.updateStyle(value, oldStyle);
        }
    }

    /**
     * The setter will handle vdom updates automatically
     * @member {Object} vdom=this._vdom
     */
    get vdom() {
        return this._vdom;
    }
    set vdom(value) {
        let me       = this,
            app      = Neo.apps[me.appName],
            vdom     = value,
            cls      = me.cls,
            height   = me.height,
            style    = me.style,
            vdomRoot = me.getVdomRoot(),
            width    = me.width,
            listenerId;

        if (vdomRoot) {
            if (cls) {
                vdomRoot.cls = cls;
            }

            if (height) {
                vdomRoot.height = height;
            }

            if (width) {
                vdomRoot.width = width;
            }

            if (style) {
                // todo: string based styles
                vdomRoot.style = Object.assign(vdomRoot.style || {}, style);
            }
        }

        // It is important to keep the vdom tree stable to ensure that containers do not lose the references to their
        // child vdom trees. The if case should not happen, but in case it does, keeping the reference and merging
        // the content over seems to be the best strategy
        if (me._vdom !== vdom) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].warn('vdom got replaced for: ' + me.id + '. Copying the content into the reference holder object');

            Object.keys(me._vdom).forEach(key => {
                delete me._vdom[key];
            });

            Object.assign(me._vdom, vdom);
        } else {
            me._vdom = vdom;
        }

        if (!me.silentVdomUpdate) {
            if (!me.mounted && app && app.rendering === true) {
                listenerId = app.on('render', () => {
                    app.un('render', listenerId);

                    setTimeout(() => {
                        me.updateVdom(me.vdom, me.vnode);
                    }, 50);
                });
            } else if (me.mounted) {
                me.updateVdom(vdom, me.vnode);
            }

            me.hasUnmountedVdomChanges = !me.mounted && me.hasBeenMounted;
        }
    }

    /**
     * Either a string like 'color: red; background-color: blue;'
     * or an object containing style attributes
     * @param {String|Object} value
     * @returns {Object} all styles of this.el
     */
    addStyle(value) {
        if (typeof value === 'string') {
            value = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].createStyleObject(value);
        }

        // todo: add a check if something has changed

        return this.style = Object.assign(this.style, value);
    }

    /**
     * Triggered after the disabled config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetDisabled(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"][value ? 'add' : 'remove'](cls, 'neo-disabled');
        me.cls = cls;
    }

    /**
     * Registers the domListeners inside the Neo.manager.DomEvent
     * @param {Array} value
     * @param {Array} oldValue
     * @private
     */
    afterSetDomListeners(value, oldValue) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateDomListeners(this, value, oldValue);
    }

    /**
     * Triggered after the hasUnmountedVdomChanges config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetHasUnmountedVdomChanges(value, oldValue) {
        if (value || (!value && oldValue)) {
            let parentIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentIds(this),
                i         = 0,
                len       = parentIds.length,
                parent;

            for (; i < len; i++) {
                parent = Neo.getComponent(parentIds[i]);

                if (parent) {
                    parent._hasUnmountedVdomChanges = value; // silent update
                }
            }
        }
    }

    /**
     * Triggered after the height config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetHeight(value, oldValue) {
        this.changeVdomRootKey('height', value);
    }

    /**
     * Triggered after the html config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetHtml(value, oldValue) {
        this.changeVdomRootKey('html', value);
    }

    /**
     * Triggered after the id config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetId(value, oldValue) {
        this.changeVdomRootKey('id', value);
    }

    /**
     * Triggered after the maxHeight config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMaxHeight(value, oldValue) {
        this.changeVdomRootKey('maxHeight', value);
    }

    /**
     * Triggered after the maxWidth config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMaxWidth(value, oldValue) {
        this.changeVdomRootKey('maxWidth', value);
    }

    /**
     * Triggered after the minHeight config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMinHeight(value, oldValue) {
        this.changeVdomRootKey('minHeight', value);
    }

    /**
     * Triggered after the minWidth config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetMinWidth(value, oldValue) {
        this.changeVdomRootKey('minWidth', value);
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetMounted(value, oldValue) {
        let me = this;

        if (value) {
            me.hasBeenMounted = true;
        }

        if (value || (!value && oldValue)) {
            let childIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(me.vnode),
                i        = 0,
                len      = childIds.length,
                child;

            for (; i < len; i++) {
                child = Neo.getComponent(childIds[i]);

                if (child) {
                    child.mounted = value; // silent update

                    if (value) {
                        child.hasBeenMounted = true;
                    }
                }
            }
        }

        if (value) {
            if (me.domListeners && me.domListeners.length > 0) {
                // todo: the main thread reply of mount arrives after pushing the task into the queue which does not ensure the dom is mounted
                setTimeout(() => {
                    _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].mountDomListeners(me);
                }, 50);
            }

            me.fire('mounted', me.id);
        }
    }

    /**
     * Triggered after the tooltips config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetTooltips(value, oldValue) {
        if (value) {
            let me = this;

            if (Neo.ns('Neo.tooltip.Base')) {
                me.createTooltips(value);
            } else {
                __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../tooltip/Base.mjs */ "./node_modules/neo.mjs/src/tooltip/Base.mjs")).then((module) => {
                        me.createTooltips(value);
                    }
                );
            }
        }
    }

    /**
     * Triggered after the vnode config got changed
     * @param {Object} value
     * @param {Object|null} oldValue
     * @private
     */
    afterSetVnode(value, oldValue) {
        if (value) {
            this.syncVnodeTree();
        }
    }

    /**
     * Triggered after the width config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @private
     */
    afterSetWidth(value, oldValue) {
        this.changeVdomRootKey('width', value);
    }

    /**
     * Triggered after the wrapperStyle config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    afterSetWrapperStyle(value, oldValue) {
        if (value && !Neo.isEmpty(value)) {
            let vdom = this.vdom;

            vdom.style = vdom.style || {};
            Object.assign(vdom.style, value);
            this.vdom  = vdom;
        }
    }

    /**
     * Triggered when accessing the controller config
     * @param {Object} value
     * @private
     */
    beforeGetController(value) {
        return value && Neo.get(value);
    }

    /**
     * Triggered before the controller config gets changed. Creates a ComponentController instance if needed.
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    beforeSetController(value, oldValue) {
        let me = this;

        if (oldValue) {
            oldValue.destroy();
        }

        if (value) {
            if (_core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(value) && value instanceof Neo.controller.Component) {
                // use the provided instance
                value.view = me;
            } else if ((value.prototype && value.prototype.constructor.isClass)|| _core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].isString(value)) {
                value = Neo.create(value, {
                    view: me
                });
            } else if (value.ntype) {
                value.view = me;
                value = Neo.ntype(value);
            }

            return value.id;
        }

        return value;
    }

    /**
     * Triggered before the domListeners config gets changed.
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    beforeSetDomListeners(value, oldValue) {
        if (Neo.isObject(value)) {
            value = [value];
        }

        return value || [];
    }

    /**
     * Triggered before the keys config gets changed. Creates a KeyNavigation instance if needed.
     * @param {Object} value
     * @param {Object} oldValue
     * @private
     */
    beforeSetKeys(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        if (_core_Util_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].isObject(value)) {
            if (value instanceof _util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]) {
                // use the provided instance
            } else if (value.constructor.isClass) {
                value = Neo.create(value);
            }  else {
                value = Neo.create(_util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    keys: value
                });
            }
        }

        return value;
    }

    /**
     * Changes the value of a vdom object attribute or removes it in case it has no value
     * @param {String} key
     * @param {Array|Number|Object|String|null} value
     */
    changeVdomRootKey(key, value) {
        let me   = this,
            vdom = me.vdom;

        if (value) {
            me.getVdomRoot()[key] = value;
        } else {
            delete me.getVdomRoot()[key];
        }

        me.vdom = vdom;
    }

    /**
     * Creates the tooltip instances
     * @param {Array|Object} value
     * @private
     */
    createTooltips(value) {
        if (!Array.isArray(value)) {
            value = [value];
        }

        let me       = this,
            tooltips = [],
            tip;

        value.forEach(item => {
            // todo: check for existing tooltips

            tip = Neo.create('Neo.tooltip.Base', {
                appName    : me.appName,
                componentId: me.id,
                ...item
            });

            tooltips.push(tip);
        });

        me._tooltips = tooltips; // silent update
    }

    /**
     * Unregisters this instance from the ComponentManager
     * @param {Boolean} [updateParentVdom=false] true to remove the component from the parent vdom => real dom
     * @param {Boolean} [silent=false] true to update the vdom silently (useful for destroying multiple child items in a row)
     * todo: unregister events
     */
    destroy(updateParentVdom=false, silent=false) {
        let me = this,
            parent, parentVdom;

        if (updateParentVdom && me.parentId) {
            parent     = Neo.getComponent(me.parentId);
            parentVdom = parent.vdom;

            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_9__["default"].removeVdomChild(parentVdom, me.id);
            parent[silent ? '_vdom' : 'vdom'] = parentVdom;
        }

        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].unregister(this);

        super.destroy();
    }

    /**
     * Convenience shortcut for Neo.manager.Component.down
     * @param {Object|String} config
     * @returns {Neo.core.Base} The matching instance or null
     */
    down(config) {
        return _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].down(this.id, config);
    }

    /**
     * Calls focus() on the top level DOM node of this component or on a given node via id
     * @param {String} [id]
     */
    focus(id) {
        let me = this;

        // remote method access
        Neo.main.DomAccess.focus({
            id: id || me.id
        }).then(data => {
            // console.log('focus received: ' + id || me.id);
        }).catch(err => {
            console.log('Error attempting to receive focus for component', err, me);
        });
    }

    /**
     * Returns this.controller or the closest parent controller
     * @param {String} [ntype]
     * @returns {Neo.controller.Base|null}
     */
    getController(ntype) {
        let controller = this.controller,
            i, len, parents;

        if (controller && (!ntype || ntype === controller.ntype)) {
            return controller;
        }

        parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(this);
        i       = 0;
        len     = parents.length;

        for (; i < len; i++) {
            if (parents[i].controller && (!ntype || ntype === parents[i].controller.ntype)) {
                return parents[i].controller;
            }
        }

        return null;
    }

    /**
     * Search vdom child nodes by id for a given vdom tree
     * @param {String} id
     * @param {Object} [vdom]
     * @returns {Object}
     */
    getVdomChild(id, vdom) {
        vdom = vdom || this.vdom;
        let child = null,
            i     = 0,
            len   = vdom.cn && vdom.cn.length,
            subChild;

        if (vdom.id === id) {
            return vdom;
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                subChild = this.getVdomChild(id, vdom.cn[i]);
                if (subChild) {
                    child = subChild;
                    break;
                }
            }
        }

        return child;
    }

    /**
     * Can get called after the component got rendered. See the autoMount config as well.
     */
    mount() {
        let me = this,
            child, childIds, i, len;

        if (!me.vnode) {
            throw new Error('Component vnode must be generated before mounting, use Component.render()');
        }

        // In case the component was already mounted, got unmounted and received vdom changes afterwards,
        // a new render() call is mandatory since delta updates could not get applied.
        // We need to clear the hasUnmountedVdomChanges state for all child components
        if (me.hasUnmountedVdomChanges) {
            // todo: the hasUnmountedVdomChanges flag changes should happen on render
            me.hasUnmountedVdomChanges = false;

            childIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(me.vnode);

            childIds.forEach(id => {
                child = Neo.getComponent(id);

                if (child) {
                    child._hasUnmountedVdomChanges = false; // silent update
                }
            });
            // end todo

            me.render(true);
        } else {
            // console.log('mount', me.parentId, me.id);

            Neo.currentWorker.promiseMessage('main', {
                action     : 'mountDom',
                id         : me.id,
                html       : me.vnode.outerHTML,
                parentId   : me.parentId,
                parentIndex: me.parentIndex
            }).then(() => {
                me.mounted = true;
            }).catch(err => {
                console.log('Error attempting to mount component', err, me);
            });
        }
    }

    /**
     * Triggered by manager.Focus
     * @name onFocusEnter
     * @function
     * @param {Array} path dom element ids upwards
     */

    /**
     * Triggered by manager.Focus
     * @name onFocusLeave
     * @function
     * @param {Array} path dom element ids upwards
     */

    /**
     * Triggered by manager.Focus
     * @name onFocusMove
     * @function
     * @param {Object} opts
     * @param {Array}  opts.newPath dom element ids upwards
     * @param {Array}  opts.oldPath dom element ids upwards
     */

    /**
     * Gets called from the render() promise success handler
     * @param {Object} data
     * @param {Boolean} autoMount Mount the DOM after the vnode got created
     * @private
     */
    onRender(data, autoMount) {
        let me  = this,
            app = Neo.apps[me.appName];

        me.rendering = false;

        if (!app.rendered) {
            app.rendering = false;
            app.rendered  = true;
            app.fire('render');
        }

        me.vnode = data;

        let childIds  = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(data),
            i         = 0,
            len       = childIds.length,
            child;

        for (; i < len; i++) {
            child = Neo.getComponent(childIds[i]);

            if (child) {
                child.rendered = true;
            }
        }

        me._rendered = true; // silent update
        me.fire('rendered', me.id);

        console.log('rendered: ' + me.appName + ' ' + me.id, me);

        if (autoMount) {
            me.mounted = true;
        }
    }

    /**
     * Promise based vdom update
     * @param {Object} [vdom=this.vdom]
     * @param {Neo.vdom.VNode} [vnode= this.vnode]
     */
    promiseVdomUpdate(vdom=this.vdom, vnode=this.vnode) {
        let me = this;

        // todo: updateVdom() should handle this
        // It is important to keep the vdom tree stable to ensure that containers do not lose the references to their
        // child vdom trees. The if case should not happen, but in case it does, keeping the reference and merging
        // the content over seems to be the best strategy
        if (me._vdom !== vdom) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].warn('vdom got replaced for: ' + me.id + '. Copying the content into the reference holder object');

            Object.keys(me._vdom).forEach(key => {
                delete me._vdom[key];
            });

            Object.assign(me._vdom, vdom);
        } else {
            me._vdom = vdom;
        }

        return new Promise((resolve, reject) => {
            if (me.mounted) {
                me.updateVdom(vdom, vnode, resolve, reject);
            } else {
                resolve();
            }
        });
    }

    /**
     * Either a string like 'color' or an array containing style attributes to remove
     * @param {String|Array} value camelCase only
     * @returns {Object} all styles of this.el
     */
    removeStyle(value) {
        if (typeof value === 'string') {
            value = [value];
        }

        let style    = this.style,
            doUpdate = false;

        Object.entries(style).forEach(key => {
            if (value.indexOf(key) > -1) {
                delete style[key];
                doUpdate = true;
            }
        });

        if (doUpdate) {
            this.style = style;
        }

        return style;
    }

    /**
     * Creates the vnode tree for this component and mounts the component in case
     * - you pass true for the mount param
     * - or the autoMount config is set to true
     * @param {Boolean} [mount] Mount the DOM after the vnode got created
     */
    render(mount) {
        let me        = this,
            autoMount = mount || me.autoMount,
            app       = Neo.apps[me.appName];

        me.rendering = true;

        if (!app.rendered) {
            app.rendering = true;
        }

        if (me.vdom) {
            Neo.vdom.Helper.create({
                autoMount  : autoMount,
                cls        : me.cls,
                parentId   : autoMount ? me.parentId    : undefined,
                parentIndex: autoMount ? me.parentIndex : undefined,
                style      : me.style,
                ...me.vdom
            }).then(data => {
                me.onRender(data, autoMount);
            }).catch(err => {
                console.log('Error attempting to render component', err, me);
            });
        }
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     * @param {Boolean} [silent=false]
     */
    set(values={}, silent=false) {
        let me   = this,
            vdom = me.vdom;

        me.silentVdomUpdate = true;

        super.set(values);

        me.silentVdomUpdate = false;

        if (silent) {
            me._vdom = vdom;
        } else {
            return me.promiseVdomUpdate();
        }
    }

    /**
     * Placeholder method for util.VDom.syncVdomIds to allow overriding (disabling) it
     * @param {Neo.vdom.VNode} [vnode=this.vnode]
     * @param {Object} [vdom=this.vdom]
     */
    syncVdomIds(vnode=this.vnode, vdom=this.vdom) {
        _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_9__["default"].syncVdomIds(vnode, vdom);
    }

    /**
     * Placeholder method for util.VDom.syncVdomIds to allow overriding (disabling) it
     * @param {Neo.vdom.VNode} [vnode=this.vnode]
     */
    syncVnodeTree(vnode=this.vnode) {
        let me    = this,
            debug = false,
            childVnode;

        if (debug) {
            let start = performance.now();
        }

        me.syncVdomIds();

        // delegate the latest node updates to all possible child components found inside the vnode tree
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildren(me).forEach(component => {
            childVnode = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].findChildVnode(me.vnode, component.vdom.id);

            if (childVnode) {
                component._vnode = childVnode.vnode; // silent update

                if (!component.rendered) {
                    component._rendered = true;
                    component.fire('rendered', component.id);
                }

                component.mounted = true;
            } else {
                console.warn('syncVnodeTree: Could not replace the child vnode for', component.id);
            }
        });

        // console.log(me.vnode, me.mounted);

        // keep the vnode parent tree in sync
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(me).forEach((component, index) => {
            // check for dynamically rendered components which get inserted into the component tree
            if (index === 0 && me.vnode.outerHTML) {
                // console.log('dyn item', me.vnode, me.parentIndex);
                component.vnode.childNodes.splice(me.parentIndex || 0, 0, me.vnode);
            }

            else if (!_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].replaceChildVnode(component.vnode, me.vnode.id, me.vnode)) {
                // todo: can happen for dynamically inserted container items
                // console.warn('syncVnodeTree: Could not replace the parent vnode for', me.vnode.id, component);
            }
        });

        if (debug) {
            let end = performance.now();
            console.log('syncVnodeTree', me.id, end - start);
        }

    }

    /**
     * Removes the component DOM
     */
    unmount() {
        let me = this;

        Neo.currentWorker.promiseMessage('main', {
            action: 'updateDom',
            deltas: [{
                action: 'removeNode',
                id    : me.id
            }]
        }).then(() => {
            me.mounted = false;
        }).catch(err => {
            console.log('Error attempting to unmount component', err, me);
        });
    }

    /**
     * Convenience shortcut for Neo.manager.Component.up
     * @param {Object|String} config
     * @returns {Neo.core.Base} The matching instance or null
     */
    up(config) {
        return _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].up(this.id, config);
    }

    /**
     * Delta updates for the cls config. Gets called after the cls config gets changed in case the component is mounted.
     * @param {Array} cls
     * @param {Array} oldCls
     * @private
     */
    updateCls(cls, oldCls) {
        let me    = this,
            vnode = me.vnode;

        if (!_util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].isEqual(cls, oldCls)) {
            if (vnode) {
                vnode.className = cls; // keep the vnode in sync
                me.vnode = vnode;
            }

            Neo.currentWorker.promiseMessage('main', {
                action: 'updateDom',
                deltas: [{
                    id : me.id,
                    cls: {
                        add   : Neo.util.Array.difference(cls, oldCls),
                        remove: Neo.util.Array.difference(oldCls, cls)
                    }
                }]
            }).then(() => {
                //console.log(me.vnode);
            }).catch(err => {
                console.log('Error attempting to update Component cls', err, me);
            });
        }
    }

    /**
     * Creates the style deltas for newValue & oldValue and applies them directly to the DOM.
     * @param newValue
     * @param oldValue
     * @private
     */
    updateStyle(newValue, oldValue) {
        let me    = this,
            delta = _util_Style_mjs__WEBPACK_IMPORTED_MODULE_7__["default"].compareStyles(newValue, oldValue),
            vnode = me.vnode;

        if (delta) {
            // console.log('updateStyle', 'new', newValue, 'old', oldValue, 'delta', delta);
            if (vnode) {
                vnode.style = newValue; // keep the vnode in sync
                me.vnode = vnode;
            }

            Neo.currentWorker.promiseMessage('main', {
                action: 'updateDom',
                deltas: [{
                    id   : me.id,
                    style: delta
                }]
            }).then(() => {
                // console.log('Component style updated');
            }).catch(err => {
                console.log('Error attempting to update component style', err, me);
            });
        }
    }

    /**
     * Gets called after the vdom config gets changed in case the component is already mounted (delta updates).
     * @param {Object} vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {function} [resolve] used by promiseVdomUpdate()
     * @param {function} [reject] used by promiseVdomUpdate()
     * @private
     */
    updateVdom(vdom, vnode, resolve, reject) {
        let me = this;

        // console.log('updateVdom', me.id, Neo.clone(vdom, true), Neo.clone(vnode, true));
        // console.log('updateVdom', me.isVdomUpdating);

        if (me.isVdomUpdating) {
            me.needsVdomUpdate = true;
        } else {
            me.isVdomUpdating = true;

            Neo.vdom.Helper.update({
                vdom : vdom,
                vnode: vnode
            }).then(data => {
                // console.log('Component vnode updated', data.vnode);
                me.vnode          = data.vnode;
                me.isVdomUpdating = false;

                if (resolve) {
                    resolve();
                }

                if (me.needsVdomUpdate) {
                    me.needsVdomUpdate = false;
                    me.vdom = me.vdom;
                }
            }).catch(err => {
                console.log('Error attempting to update component dom', err, me);
                me.isVdomUpdating = false;

                if (reject) {
                    reject();
                }
            });
        }
    }
}

/**
 * manager.Focus fires the event when the component id is included inside the dom id path
 * @event focusEnter
 * @param {Array} path dom element ids upwards
 */

/**
 * manager.Focus fires the event when the component id is not included inside the dom id path
 * @event focusLeave
 * @param {Array} path dom element ids upwards
 */

/**
 * manager.Focus fires the event when the component id is included inside the dom id path, but the path itself changed
 * @event focusMove
 * @param {Object} opts
 * @param {Array}  opts.newPath dom element ids upwards
 * @param {Array}  opts.oldPath dom element ids upwards
 */

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Button.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Button.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.component.Button
 * @extends Neo.component.Base
 */
class Button extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for iconPosition
         * @member {String[]} iconPositions=['top', 'right', 'bottom', 'left']
         * @private
         * @static
         */
        iconPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Button'
         * @private
         */
        className: 'Neo.component.Button',
        /**
         * @member {String} ntype='button'
         * @private
         */
        ntype: 'button',
        /**
         * @member {String[]} cls=['neo-button']
         */
        cls: ['neo-button'],
        /**
         * false calls Neo.Main.setRoute()
         * @member {Boolean} editRoute=true
         */
        editRoute: true,
        /**
         * Shortcut for domListeners={click:handler}
         * A string based value assumes that the handlerFn lives inside a ComponentController
         * @member {Function|String|null} handler_=null
         */
        handler_: null,
        /**
         * The scope (this pointer) inside the handler function.
         * Points to the button instance by default.
         * @member {Object|null} handlerScope=null
         */
        handlerScope: null,
        /**
         * The CSS class to use for an icon, e.g. 'fa fa-home'
         * @member {String|null} [iconCls_=null]
         */
        iconCls_: null,
        /**
         * The color to use for an icon, e.g. '#ff0000' [optional]
         * @member {String|null} iconColor_=null
         */
        iconColor_: null,
        /**
         * The position of the icon in case iconCls has a value.
         * Valid values are: 'top', 'right', 'bottom', 'left'
         * @member {String} iconPosition_='left'
         */
        iconPosition_: 'left',
        /**
         * The pressed state of the Button
         * @member {Boolean} pressed_=false
         */
        pressed_: false,
        /**
         * Change the browser hash value on click
         * @member {String|null} route_=null
         */
        route_: null,
        /**
         * The text displayed on the button [optional]
         * @member {String} text_=''
         */
        text_: '',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'button',
            cn : [
                {tag: 'span', cls: ['neo-button-glyph']},
                {tag: 'span', cls: ['neo-button-text']}
            ]
        }
    }}

    /**
     * Triggered after the handler config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetHandler(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners || [];

            domListeners.push({
                click: value,
                scope: me.handlerScope || me
            });

            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the iconCls config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetIconCls(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            iconNode = me.getVdomRoot().cn[0];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(iconNode.cls, oldValue);

        if (!value || value === '') {
            iconNode.removeDom = true;
        } else {
            iconNode.removeDom = false;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(iconNode.cls, value);
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the iconColor config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetIconColor(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            iconNode = me.getVdomRoot().cn[0];

        if (!iconNode.style) {
            iconNode.style = {};
        }

        if (value === '') {
            value = null;
        }

        iconNode.style.color = value;
        me.vdom = vdom;
    }

    /**
     * Triggered after the iconPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetIconPosition(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'icon-' + oldValue);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'icon-' + value);

        this.cls = cls;
    }

    /**
     * Triggered after the pressed config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetPressed(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value === true ? 'add' : 'remove'](cls, 'pressed');
        this.cls = cls;
    }

    /**
     * Triggered after the route config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetRoute(value, oldValue) {
        if (value) {
            let me           = this,
                domListeners = me.domListeners || [];

            domListeners.push({
                click: me.changeRoute,
                scope: me
            });

            me.domListeners = domListeners;
        }
    }

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetText(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot(),
            textNode = vdomRoot.cn[1];

        if (value === '') {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(me._cls,      'no-text');
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(vdomRoot.cls, 'no-text');
            textNode.removeDom = true;
        } else {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(me._cls,      'no-text');
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(vdomRoot.cls, 'no-text');
            textNode.removeDom = false;
            textNode.innerHTML = value;
        }

        me.vdom = vdom;
    }

    /**
     * Converts the iconCls array into a string on beforeGet
     * @returns {String}
     * @private
     */
    beforeGetIconCls() {
        let iconCls = this._iconCls;

        if (Array.isArray(iconCls)) {
            return iconCls.join(' ');
        }

        return iconCls;
    }

    /**
     * Triggered before the iconCls config gets changed. Converts the string into an array if needed.
     * @param {Array|String|null} value
     * @param {Array|String|null} oldValue
     * @returns {Array}
     * @private
     */
    beforeSetIconCls(value, oldValue) {
        if (value && !Array.isArray(value)) {
            value = value.split(' ');
        }

        return value;
    }

    /**
     * Triggered before the iconPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    beforeSetIconPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'iconPosition');
    }

    /**
     * @private
     */
    changeRoute() {
        const me = this;

        if (me.editRoute) {
            Neo.Main.editRoute(this.route);
        } else {
            Neo.Main.setRoute({
                value: me.route
            });
        }
    }
}

Neo.applyClassConfig(Button);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Label.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Label.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * Convenience class to render a label with a text
 * @class Neo.component.Label
 * @extends Neo.component.Base
 */
class Label extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Label'
         * @private
         */
        className: 'Neo.component.Label',
        /**
         * @member {String} ntype='label'
         * @private
         */
        ntype: 'label',
        /**
         * @member {String[]} cls=['neo-label']
         */
        cls: ['neo-label'],
        /**
         * @member {String} text_=''
         */
        text_: '',
        /**
         * @member {Object} _vdom={tag: 'label'}
         */
        _vdom: {
            tag: 'label'
        }
    }}

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetText(value, oldValue) {
        let vdom = this.vdom;
        vdom.html = value;
        this.vdom = vdom;
    }
}

Neo.applyClassConfig(Label);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Base.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Base.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _layout_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _layout_Card_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/Card.mjs */ "./node_modules/neo.mjs/src/layout/Card.mjs");
/* harmony import */ var _layout_Fit_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Fit.mjs */ "./node_modules/neo.mjs/src/layout/Fit.mjs");
/* harmony import */ var _layout_HBox_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/HBox.mjs */ "./node_modules/neo.mjs/src/layout/HBox.mjs");
/* harmony import */ var _layout_VBox_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/VBox.mjs */ "./node_modules/neo.mjs/src/layout/VBox.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");









/**
 * @class Neo.container.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Base'
         * @private
         */
        className: 'Neo.container.Base',
        /**
         * @member {String} ntype='container'
         * @private
         */
        ntype: 'container',
        /**
         * @member {String[]} cls=['neo-container']
         */
        cls: ['neo-container'],
        /**
         * @member {Object} itemDefaults_=null
         */
        itemDefaults_: null,
        /**
         * An array of config objects|instances|modules for each child component
         * @member {Object[]} items_=[]
         * @example
         * import Button      from '../component/Button.mjs';
         * import MyRedButton from 'myapp/MyRedButton.mjs';
         * import Toolbar     from '../container/Toolbar.mjs';
         *
         * let myButton = Neo.create(Button, {
         *     text: 'Button1'
         * });
         *
         * Neo.create(Toolbar, {
         *     //...
         *     items: [
         *         myButton,              // passed instance
         *         {
         *             ntype: 'button',   // by ntype
         *             text : 'Button 2'
         *         },
         *         {
         *             module: Button,    // by imported module
         *             text  : 'Button 3'
         *         },
         *         MyRedButton            // you can drop imported modules directly into the items array
         *     ]
         * });
         */
        items_: [],
        /**
         * @member {Object} layout_={ntype: 'vbox', align: 'stretch'}
         */
        layout_: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Object} _vdom={cn: []}
         */
        _vdom: {
            cn: []
        }
    }}

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(...args) {
        let me     = this,
            config = super.mergeConfig(...args);

        // avoid any inferference on prototype level
        // does not clone existing Neo instances

        if (config.itemDefaults) {
            me._itemDefaults = Neo.clone(config.itemDefaults, true, true);
            delete config.itemDefaults;
        }

        if (config.items) {
            me._items = Neo.clone(config.items, true, true);
            delete config.items;
        }

        return config;
    }

    /**
     *
     */
    onConstructed() {
        let me = this;

        // in case the Container does not have a layout config, the setter won't trigger
        me._layout = me.createLayout(me.layout);
        me._layout.applyRenderAttributes();

        super.onConstructed();

        me.parseItemConfigs(me.items);
        me.createItems();
    }

    /**
     * Inserts an item or array of items at the last index
     * @param {Object|Array} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    add(item) {
        let me = this;
        return me.insert(me.items ? me.items.length : 0, item);
    }

    /**
     *
     * @param {Neo.layout.Base} value
     * @param {Neo.layout.Base} oldValue
     * @private
     */
    afterSetLayout(value, oldValue) {
        let me = this;

        if (me.rendered) {
            oldValue.removeRenderAttributes();
            value.applyRenderAttributes();

            me.items.forEach((item, index) => {
                oldValue.removeChildAttributes(item, index);
                value.applyChildAttributes(item, index);
            });
        }
    }

    /**
     *
     * @param {Object|String} value
     * @returns {Neo.layout.Base}
     * @private
     */
    beforeSetLayout(value) {
        return this.createLayout(value);
    }

    /**
     *
     * @private
     */
    createItems() {
        let me       = this,
            items    = me._items,
            defaults = me.itemDefaults,
            layout   = me.layout,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        items.forEach((item, index) => {
            if (item.constructor.isClass && item instanceof Neo.core.Base) {
                Object.assign(item, {
                    appName : me.appName,
                    parentId: me.id
                });
            } else if(item.isClass) {
                item = Neo.create(item, {
                    appName : me.appName,
                    parentId: me.id
                });
            } else if (typeof item === 'string') {
                item = Neo.ntype({
                    ntype  : 'component',
                    appName: me.appName,
                    vdom   : {innerHTML: item}
                });
            } else {
                if (defaults) {
                    Neo.assignDefaults(item, defaults);
                }

                if (item.module) {
                    item.className = item.module.prototype.className;
                }

                Object.assign(item, {
                    appName : me.appName,
                    parentId: me.id,
                    style   : item.style || {}
                });

                item = Neo[item.className ? 'create' : 'ntype'](item);
            }

            items[index] = item;

            layout.applyChildAttributes(item, index);

            vdomRoot.cn.push(item.vdom);
        });

        me.vdom = vdom;
    }

    /**
     *
     * @param {Object|String|Neo.layout.Base} value
     * @private
     * @returns {Neo.layout.Base}
     */
    createLayout(value) {
        let me = this;

        if (value) {
            if (value instanceof _layout_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] && value.isLayout) {
                value.containerId = me.id;
            } else {
                value = me.parseLayoutClass(value);
                value.containerId = me.id;
                value = Neo.ntype(value);
            }
        }

        return value;
    }

    /**
     * Destroys all components inside this.items before the super() call.
     */
    destroy() {
        this.items.forEach(item => {
            item.destroy();
        });

        super.destroy();
    }

    /**
     * Finds the index of a direct child component inside this.items.
     * @param {Neo.component.Base|String} itemId Either the item reference or the item id
     * @return {Number} -1 in case no match was found
     */
    indexOf(itemId) {
        let me  = this,
            i   = 0,
            len = me.items && me.items.length || 0;

        if (!Neo.isString(itemId)) {
            itemId = itemId.id;
        }

        for (; i < len; i++) {
            if (me.items[i].id === itemId) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Inserts an item or array of items at a specific index
     * @param {Number} index
     * @param {Object|Array} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    insert(index, item) {
        let me    = this,
            items = me.items,
            vdom  = me.vdom,
            cn, i, len;

        if (Array.isArray(item)) {
            i   = 0;
            len = item.length;

            for (; i < len; i++) {
                // todo: render is async, ensure the order of items is correct

                // insert the array backwards
                item[i] = me.insert(item[len - 1], index);
            }
        } else if (typeof item === 'object') {
            if (item instanceof Neo.component.Base !== true) {
                if (item.module) {
                    item.className = item.module.prototype.className;
                }

                item = {
                    ...me.itemDefaults || {},

                    appName    : me.appName,
                    autoMount  : me.mounted,
                    parentId   : me.id,
                    parentIndex: index,

                    ...item
                };

                item = Neo[item.className ? 'create' : 'ntype'](item);
            }

            me.layout.applyChildAttributes(item, index);

            items.splice(index, 0, item);

            me.items = items;

            cn = vdom.cn || vdom.childNodes || vdom.children;

            cn.splice(index, 0, item.vdom);
            me.vdom = vdom;
        }

        return item;
    }

    /**
     * todo
     * Moves an existing item to a new index
     * @param {String} itemId
     * @param {Number} index
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    moveTo(itemId, index) {
        let me           = this,
            currentIndex = me.indexOf(itemId);

        console.log(currentIndex);
    }

    parseItemConfigs(items) {
        let me = this;

        items.forEach(item => {
            Object.entries(item).forEach(([key, value]) => {
                if (key === 'items') {
                    me.parseItemConfigs(value);
                } else if (typeof value === 'string' && value.startsWith('@config:')) {
                    value = value.substr(8);

                    if (!me[value]) {
                        _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].logError('The used @config does not exist:', value, me);
                    } else {
                        item[key] = me[value];
                    }
                }
            });
        });
    }

    /**
     *
     * @param {Object|String} config
     * @private
     * @returns {Object} layoutConfig
     */
    parseLayoutClass(config) {
        if (Neo.isObject(config)) {
            if (config.ntype.indexOf('layout-') < 0) {
                config.ntype = 'layout-' + config.ntype;
            }
        }
        else if (config.indexOf('layout-') < 0) {
            config = {
                ntype: 'layout-' + config
            };
        } else {
            config = {
                ntype: config
            };
        }

        return config;
    }

    /**
     * Removes a container item at a given index
     * @param {Number} index
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    removeAt(index, destroyItem=true, silent=false) {
        let me    = this,
            items = me.items,
            vdom  = me.vdom,
            cn, item;

        if (index >= items.length) {
            Neo.warn('Container.removeAt: index >= items.length. ' + me.id);
        } else {
            item = items[index];

            // console.log('remove item', item.id);

            items.splice(index, 1);

            cn = vdom.cn || vdom.childNodes || vdom.children;

            cn.splice(index, 1);

            me[silent ? '_vdom' : 'vdom'] = vdom;

            if (destroyItem) {
                item.destroy();
            }
        }
    }

    /**
     * Switches the position of 2 direct child items
     * @param {String} item1id
     * @param {String} item2id
     */
    switchItems(item1id, item2id) {
        let me         = this,
            item1Index = me.indexOf(item1id),
            item2Index = me.indexOf(item2id),
            vdom       = me.vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_7__["default"].move(me.items,              item2Index, item1Index);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_7__["default"].move(me.getVdomItemsRoot(), item2Index, item1Index);

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Toolbar.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Toolbar.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _component_Button_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Button.mjs */ "./node_modules/neo.mjs/src/component/Button.mjs");
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _component_Label_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");






/**
 * @class Neo.container.Toolbar
 * @extends Neo.container.Base
 */
class Toolbar extends _Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for dock
         * @member {String[]} dockPositions=['top', 'right', 'bottom', 'left']
         * @static
         */
        dockPositions: ['top', 'right', 'bottom', 'left'],
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Toolbar'
         * @private
         */
        className: 'Neo.container.Toolbar',
        /**
         * @member {String} ntype='toolbar'
         * @private
         */
        ntype: 'toolbar',
        /**
         * @member {String[]} cls=['neo-toolbar']
         */
        cls: ['neo-toolbar'],
        /**
         * @member {String} dock_='top'
         */
        dock_: 'top',
        /**
         * @member {Object} itemDefaults={ntype: 'button'}
         */
        itemDefaults: {
            ntype: 'button'
        },
        /**
         * @member {Object} _layout={ntype: 'hbox', align: 'center', pack : 'start'}
         */
        _layout: {
            ntype: 'hbox',
            align: 'center',
            pack : 'start'
        }
    }}

    /**
     * Creates a layout config depending on this.dock
     * @returns {Object} layoutConfig
     */
    getLayoutConfig() {
        let layoutConfig;

        switch(this.dock) {
            case 'bottom':
            case 'top':
                layoutConfig = {
                    ntype: 'hbox',
                    align: 'center',
                    pack : 'start'
                };
                break;
            case 'left':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'center',
                    direction: 'column-reverse',
                    pack     : 'start'
                };
                break;
            case 'right':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'center',
                    direction: 'column',
                    pack     : 'start'
                };
                break;
        }

        return layoutConfig;
    }

    /**
     * Triggered after the dock config got changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetDock(value, oldValue) {
        let me            = this,
            cls           = me.cls,
            dockPositions = me.getStaticConfig('dockPositions');

        dockPositions.forEach(key => {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][key === value ? 'add' : 'remove'](cls, 'neo-dock-' + key);
        });

        me.cls    = cls;
        me.layout = me.getLayoutConfig();
    }

    /**
     * Checks if the new dock position matches a value of the static dockPositions config
     * @param {String} value
     * @param {String} oldValue
     * @returns {String} value
     * @private
     */
    beforeSetDock(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'dock', 'dockPositions');
    }

    createItems() {
        const items = this._items;

        if (Array.isArray(items)) {
            items.forEach((item, index) => {
                if (item === '->') {
                    items[index] = Neo.create({
                        module: _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                        flex  : 1
                    });
                }
            });
        }

        return super.createItems();
    }
}

Neo.applyClassConfig(Toolbar);



/***/ }),

/***/ "./node_modules/neo.mjs/src/container/Viewport.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Viewport.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Viewport; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");


/**
 * @class Neo.container.Viewport
 * @extends Neo.container.Base
 */
class Viewport extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Viewport'
         * @private
         */
        className: 'Neo.container.Viewport',
        /**
         * @member {String} ntype='viewport'
         * @private
         */
        ntype: 'viewport',
        /**
         * true applies 'neo-body-viewport' to the document.body
         * @member {Boolean} applyBodyCls=true
         */
        applyBodyCls: true,
        /**
         * @member {String[]} cls=['neo-viewport']
         */
        cls: ['neo-viewport']
    }}

    onConstructed() {
        super.onConstructed();

        if (this.applyBodyCls) {
            Neo.main.DomAccess.applyBodyCls({cls: ['neo-body-viewport']});
        }
    }
}

Neo.applyClassConfig(Viewport);



/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Application.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Application.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Application; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");


/**
 * @class Neo.controller.Application
 * @extends Neo.controller.Base
 */
class Application extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Application'
         * @private
         */
        className: 'Neo.controller.Application',
        /**
         * @member {String} ntype='app'
         * @private
         */
        ntype: 'app',
        /**
         * @member {Boolean} createMainView=true
         */
        createMainView: true,
        /**
         * @member {Neo.component.Base} mainView_=null
         */
        mainView_: null,
        /**
         * @member {String} name='MyApp'
         */
        name: 'MyApp',
        /**
         * @member {String} parentId='document.body'
         */
        parentId: 'document.body',
        /**
         * @member {Boolean} rendered=false
         * @private
         */
        rendered: false,
        /**
         * @member {Boolean} rendering=false
         * @private
         */
        rendering: false
    }}

    constructor(config) {
        super(config);

        let me = this;

        Neo.apps = Neo.apps || {};

        Neo.apps[me.name] = me;

        if (me.createMainView) {
            me.renderMainView(config);
        }
    }

    renderMainView() {
        let me = this;

        if (Neo.isString(me.mainView)) {
            me.mainView = me.name + '.' + me.mainView;
        }

        me.mainViewInstance = Neo.create(me.mainView, {
            appName   : me.name,
            autoRender: true,
            parentId  : me.parentId
        });
    }
}

Neo.applyClassConfig(Application);

// shortcut
Neo.app = function(config) {
    return Neo.create(Application, config);
};



/***/ }),

/***/ "./node_modules/neo.mjs/src/controller/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");



/**
 * @class Neo.controller.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Base'
         * @private
         */
        className: 'Neo.controller.Base',
        /**
         * @member {String} ntype='controller'
         * @private
         */
        ntype: 'controller'
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].on('change', this.onHashChange, this);
    }

    /**
     * Placeholder method which gets triggered when the hash inside the browser url changes
     * @param {Object} value
     * @param {Object} oldValue
     * @param {String} hashString
     */
    onHashChange(value, oldValue, hashString) {

    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Base.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


const configSymbol = Symbol.for('configSymbol'),
      isInstance   = Symbol('isInstance');

/**
 * The base class for all classes inside the Neo namespace
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @private
         * @static
         */
        registerToGlobalNs: true
    }}

    /**
     * The return value will get applied to each class instance
     * @returns {Object} staticConfig
     * @tutorial 02_ClassSystem
     */
    static getConfig() {return {
        /**
         * The class name which will get mapped into the Neo or app namespace
         * @member {String} className='Neo.core.Base'
         * @private
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @private
         */
        ntype: 'base',
        /**
         * Add mixins as an array of classNames, imported modules or a mixed version
         * @member {String[]|Neo.core.Base[]|null} mixins=null
         */
        mixins: null
    }}

    /**
     * Consumes the static getConfig() object
     * Applies the observable mixin if needed, grants remote access if needed
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        let me = this;

        Object.defineProperties(me, {
            [configSymbol]: {
                configurable: true,
                enumerable  : false,
                value       : {},
                writable    : true
            },
            [isInstance]: {
                enumerable: false,
                value     : true
            }
        });

        me.createId(config.id || me.id);
        delete config.id;

        if (me.constructor.config) {
            delete me.constructor.config.id;
        }

        if (me.getStaticConfig('observable') || me.mixins && Neo.ns('Neo.core.Observable', me.mixins)) {
            me.initObservable(config);
        }

        me.initConfig(config);

        if (me.controller) {
            me.controller.parseConfig();
        }

        Object.defineProperty(me, 'configsApplied', {
            enumerable: false,
            value     : true
        });

        if (me.remote) {
            setTimeout(me.initRemote.bind(me), 1);
        }
    }

    /**
     * Gets triggered after all constructors are done
     * @tutorial 02_ClassSystem
     */
    onConstructed() {}

    /**
     * Gets triggered after onConstructed is done
     * @see {@link Neo.core.Base#onConstructed onConstructed}
     * @tutorial 02_ClassSystem
     */
    init() {}

    /**
     * Convenience method for beforeSet functions which test if a given value is inside a static array
     * @param {String|Number} value
     * @param {String|Number} oldValue
     * @param {String} name config name
     * @param {String} [staticName=name + 's'] name of the static config array
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError('Supported values for ' + name + ' are:', values.join(', '), this);
            return oldValue;
        }

        return value;
    }

    createId(id) {
        let me = this;

        if (!id) {
            id = _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(me.ntype);
        }

        me.id = id;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.register(me);
        } else {
            if (!Neo.idMap) {
                Neo.idMap = {};
            }

            Neo.idMap[me.id] = me;
        }
    }

    /**
     * Unregisters this instance from Neo.manager.Instance
     * and removes all object entries from this instance
     */
    destroy() {
        let me = this;

        if (Base.instanceManagerAvailable === true) {
            Neo.manager.Instance.unregister(me);
        }

        Object.entries(me).forEach(key => {
            me[key] = null;
            delete me[key];
        });
    }

    /**
     * Returns the value of a static config key or the staticConfig object itself in case no value is set
     * @param {String} [key] The key of a staticConfig defined inside static getStaticConfig
     * @returns {*}
     */
    getStaticConfig(key) {
        let cfg = this.constructor.staticConfig;
        return (key ? cfg[key] : cfg);
    }

    /**
     * Applies all class configs to this instance
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     */
    initConfig(config, preventOriginalConfig) {
        let me = this;

        Object.assign(me[configSymbol], me.mergeConfig(config, preventOriginalConfig));
        me.processConfigs();
    }

    /**
     *
     */
    processConfigs() {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (!me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs();
        }
    }

    /**
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me        = this,
            remote    = me.remote,
            className = me.className,
            origin;

        if (!me.singleton) {
            throw new Error('Remote method access only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            Object.entries(remote).forEach(([worker, methods]) => {
                if (Neo.workerId !== worker) {
                    origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                    origin.sendMessage(worker, {
                        action      : 'registerRemote',
                        methods     : methods,
                        className   : className
                    });
                }
            });
        }
    }

    /**
     * Override this method to change the order configs are applied to this instance.
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(config, preventOriginalConfig) {
        let me   = this,
            ctor = me.constructor;

        if (!ctor.config) {
            throw new Error('Neo.applyClassConfig has not been run on ' + me.className);
        }

        if (!preventOriginalConfig) {
            me.originalConfig = Neo.clone(config, true, true);
        }

        return {...ctor.config, ...config};
    }

    /**
     * Change multiple configs at once, ensuring that all afterSet methods get all new assigned values
     * @param {Object} values={}
     */
    set(values={}) {
        let me = this;

        // instead of using:
        // me[configSymbol] = values;
        // we keep the Object instance (defined via Object.defineProperties() => non enumerable)

        Object.keys(me[configSymbol]).forEach(key => {
            delete me[configSymbol][key];
        });

        Object.assign(me[configSymbol], values);

        me.processConfigs();
    }

    /**
     * Sets the value of a static config by a given key
     * @param {String} key The key of a staticConfig defined inside static getStaticConfig
     * @param {*} value
     * @returns {Boolean} true in case the config exists and got changed
     */
    setStaticConfig(key, value) {
        let staticConfig = this.constructor.staticConfig;

        if (staticConfig.hasOwnProperty(key)) {
            staticConfig[key] = value;
            return true;
        }

        return false;
    }

    /**
     * <p>Enhancing the toString() method, e.g.</p>
     * `Neo.create('Neo.component.Button').toString() => "[object Neo.component.Button (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return this.className + ' (id:' + this.id + ')';
    }

    /**
     * <p>Enhancing the instanceof method. Without this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => true`
     * <p>With this change:</p>
     * `Neo.collection.Base.prototype instanceof Neo.core.Base => false`<br>
     * `Neo.create(Neo.collection.Base) instanceof Neo.core.Base => true`
     * @returns {Boolean}
     */
    static [Symbol.hasInstance](instance) {
        if (!instance) {
            return false;
        }

        return instance[isInstance] === true ? super[Symbol.hasInstance](instance) : false;
    }
}

Neo.applyClassConfig(Base);

Base.instanceManagerAvailable = false;



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/IdGenerator.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/IdGenerator.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * This class gets used by core.Base, so it can not extend it.
 * It could get simplified to just being an object (needs to manually get put into the Neo namespace in this case).
 * @class Neo.core.IdGenerator
 * @singleton
 */
class IdGenerator {
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @private
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @private
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @private
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        let me = this;

        me.idCounter = {};

        // alias
        Neo.getId = me.getId.bind(me);
    }

    onConstructed() {}

    init() {}

    /**
     *
     * @param name
     * @returns {string}
     */
    getId(name) {
        name = name || 'neo';

        let me      = this,
            counter = me.idCounter,
            count   = counter[name] || 0;

        counter[name] = ++count;

        return me.base + (name === 'neo' ? '' : name + '-') + count;
    }
}

Neo.applyClassConfig(IdGenerator);

let instance = Neo.create(IdGenerator);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Logger.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Logger.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Logger
 * @extends Neo.core.Base
 * @singleton
 */
class Logger extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Logger'
         * @private
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @private
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @private
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        // aliases
        Neo.applyFromNs(Neo, this, {
            error   : 'error',
            info    : 'info',
            log     : 'log',
            logError: 'logError',
            warn    : 'warn'
        }, true);
    }

    /**
     *
     * @param value
     */
    error(value) {
        throw new Error(value);
    }

    /**
     *
     * @param args
     */
    log(...args) {
        this.level = 'log';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    info(...args) {
        this.level = 'info';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    logError(...args) {
        this.level = 'error';
        this.write(...args);
    }

    /**
     *
     * @param args
     */
    warn(...args) {
        this.level = 'warn';
        this.write(...args);
    }

    /**
     *
     * @param args
     * @private
     */
    write(...args) {
        if (this.enableLogs === true) {
            console[this.level](...args);
        }
    }
}

Neo.applyClassConfig(Logger);

let instance = Neo.create(Logger);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Observable.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Observable.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Observable; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Observable
 * @extends Neo.core.Base
 */
class Observable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Observable'
         * @private
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @private
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @private
         */
        mixin: true
    }}

    initObservable(config) {
        let me = this,
            proto = me.__proto__,
            listeners;

        if (config.listeners) {
            me.listeners = config.listeners;
            delete config.listeners;
        }

        listeners = me.listeners;

        me.listeners = {};

        if (listeners) {
            me.addListener(listeners);
        }

        while (proto && proto.constructor.isClass) {
            if (proto.constructor.staticConfig.observable && !proto.constructor.listeners) {
                Object.assign(proto.constructor, {
                    addListener   : me.addListener,
                    fire          : me.fire,
                    listeners     : {},
                    on            : me.on,
                    removeListener: me.removeListener,
                    un            : me.un
                });
            }
            proto = proto.__proto__;
        }
    }

    /**
     *
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    addListener(name, opts, scope, eventId, data, order) {
        let me = this,
            listener, existing, eventConfig;

        if (typeof name === 'object') {
            if (name.hasOwnProperty('scope')) {
                scope = name.scope;
                delete name.scope;
            }

            Object.entries(name).forEach(([key, value]) => {
                me.addListener(key, value, scope);
            });
        } else if (typeof opts === 'object') {
            scope = scope || opts.scope;
            listener = opts.fn;
            order = order || opts.order;
            eventId = eventId || opts.eventId;
        } else if (typeof opts === 'function') {
            listener = opts;
        } else if (typeof opts === 'string') {
            listener = opts; // VC hook, can get parsed after onConstructed in case the view uses the parent VC
        } else {
            throw new Error('Invalid addListener call: ' + name);
        }

        eventConfig = {
            fn    : listener,
            scope : scope,
            data  : data,
            id    : eventId || Neo.getId('event')
        };

        if (existing = me.listeners && me.listeners[name]) {
            existing.forEach(cfg => {
                if (cfg.id === eventId || (cfg.fn === listener && cfg.scope === scope)) {
                    throw new Error('Duplicate event handler attached: ' + name);
                }
            });

            if (typeof order === 'number') {
                existing.splice(order, 0, eventConfig);
            } else if (order === 'before') {
                existing.unshift(eventConfig);
            } else {
                existing.push(eventConfig);
            }
        } else {
            me.listeners[name] = [eventConfig];
        }

        return eventConfig.id;
    }

    /**
     *
     * @param name
     */
    fire(name) {
        let me        = this,
            args      = [].slice.call(arguments, 1),
            listeners = me.listeners,
            eventConfig, events, i, len;

        if (listeners && listeners[name]) {
            events = [...listeners[name]];
            len    = events.length;

            for (i = 0; i < len; i++) {
                eventConfig = events[i];

                eventConfig.fn.apply(eventConfig.scope || me, eventConfig.data ? args.concat(eventConfig.data) : args);
            }
        }
    }

    /**
     *
     * @param name
     * @param eventId
     */
    removeListener(name, eventId) {
        if (Neo.isString(eventId)) {
            let listeners   = this.listeners[name],
                match       = false;

            listeners.forEach((eventConfig, idx) => {
                if (eventConfig.id === eventId) {
                    return match = idx;
                }
            });

            if (match !== false) {
                listeners.splice(match, 1);
            }
        }
    }

    // removeAllListeners: function(name) {

    // },

    // suspendListeners: function(queue) {

    // },

    // resumeListeners: function() {

    // }

    /**
     * Alias for addListener
     * @param {Object|String} name
     * @param {Object} [opts]
     * @param {Object} [scope]
     * @param {String} [eventId]
     * @param {Object} [data]
     * @param {Number} [order]
     * @returns {String} eventId
     */
    on(...args) {
        return this.addListener(...args);
    }

    /**
     * Alias for removeListener
     * @param name
     * @param eventId
     */
    un(...args) {
        this.removeListener(...args);
    }
}

Neo.applyClassConfig(Observable);



/***/ }),

/***/ "./node_modules/neo.mjs/src/core/Util.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/Util.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.core.Util
 * @extends Neo.core.Base
 */
class Util extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * A regex to remove camel case syntax
         * @member {RegExp} decamelRegEx=/([a-z])([A-Z])/g
         * @private
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @private
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @private
         */
        ntype: 'core-util',
    }}

    /**
     * Converts a syles object which can use camelcase syntax into a styles string
     * @param {Object} styles The styles object
     * @returns {String} The styles string (DOM ready)
     */
    static createStyles(styles) {
        let style = '';

        Object.entries(styles).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                style += Util.decamel(key) + ':' + value + ';';
            }
        });

        return style;
    }

    /**
     * Makes the first character of a string uppercase
     * @param {String} string
     * @returns {Boolean|String} Returns false for non string inputs
     */
    static capitalize(string) {
        return Util.isString(string) && string[0].toUpperCase() + string.slice(1);
    }

    /**
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
    }

    /**
     * Transforms a styles string into a styles object using camelcase syntax
     * @param {String} string The styles string to parse
     * @returns {Object} The camelcase styles object
     */
    static createStyleObject(string) {
        if (!string) {
            return null;
        }

        let parts;

        // split(';') does fetch semicolons inside brackets
        // -> background-image: "url('data:image/png;base64,...

        // TODO: Cache all regex
        return string.split(/;(?=[^\)]*(?:\(|$))/g).reduce((obj, el) => {
            // we have to split by the first colon only
            // -> background-image: url('http://example.com/image.png')
            parts = el.split((/:(.+)/)).map(function (x) {
                let num = parseFloat(x);

                return x == num ? num : x.trim();
            });

            if (parts[0] !== '') {
                parts[0] = parts[0].replace(/-([a-z])/g, (str, letter) => {
                    return letter.toUpperCase();
                });
                obj[parts[0]] = parts[1];
            }
            return obj;
        }, {});
    }

    /**
     * Returns true if the passed value is an array
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isArray(value) {
        return Array.isArray(value)
    }

    /**
     * Returns true if the passed value is a boolean
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    /**
     * Returns true if the passed value is not undefined
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    /**
     * Returns true if the passed value is an empty Array, Object or String
     * @param {Array|Object|String} value The value to test
     * @returns {Boolean}
     */
    static isEmpty(value) {
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        if (Util.isObject(value)) {
            return Object.keys(value).length === 0;
        }

        if (Util.isString(value)) {
            return value === '';
        }

        return false;
    }

    /**
     * Returns true if the passed value is a function
     * @param {Function} value The value to test
     * @returns {Boolean}
     */
    static isFunction(value) {
        return typeof value === 'function';
    }

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers
     * @param {Number} value The value to test
     * @returns {Boolean}
     */
    static isNumber(value){
        return typeof value === 'number' && isFinite(value);
    }

    /**
     * Returns true if the passed value is an object
     * @param {Object} value The value to test
     * @returns {Boolean}
     */
    static isObject(value) {
        return value !== null && typeof value === 'object' && !Array.isArray(value);
    }

    /**
     * Returns true if the passed value is a string
     * @param {String} value The value to test
     * @returns {Boolean}
     */
    static isString(value) {
        return typeof value === 'string';
    }

    /**
     * Converts any iterable (strings, numeric indices and a length property) into a true array
     * @param {Object|String} iterable
     * @param {Number} [start=0] start index
     * @param {Number} [end=iterable.length] end index
     * @returns {Array}
     */
    static toArray(iterable, start, end) {
        let len;

        if (!iterable || !(len = iterable.length)) {
            return [];
        }

        if (typeof iterable === 'string') {
            return iterable.split('');
        }

        return Array.prototype.slice.call(iterable, start || 0, end || len);
    }
}

Neo.applyClassConfig(Util);

// aliases
Neo.applyFromNs(Neo, Util, {
    createStyleObject: 'createStyleObject',
    createStyles     : 'createStyles',
    capitalize       : 'capitalize',
    decamel          : 'decamel',
    isArray          : 'isArray',
    isBoolean        : 'isBoolean',
    isDefined        : 'isDefined',
    isEmpty          : 'isEmpty',
    isFunction       : 'isFunction',
    isNumber         : 'isNumber',
    isObject         : 'isObject',
    isString         : 'isString',
    toArray          : 'toArray'
}, true);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./node_modules/neo.mjs/src/core/_export.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/core/_export.mjs ***!
  \***************************************************/
/*! exports provided: Base, Logger, Observable, Util */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Base", function() { return _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return _Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _Observable_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Util_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return _Util_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]; });








/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * The base class for all other layouts.
 * Use it directly in case you want to create a container without a layout.
 * @class Neo.layout.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Base'
         * @private
         */
        className: 'Neo.layout.Base',
        /**
         * @member {String} ntype='layout-base'
         * @private
         */
        ntype: 'layout-base',
        /**
         * The Id of the Container instance this layout is bound to
         * @member {?String} containerId=null
         * @private
         */
        containerId: null,
        /**
         * Identifier for all classes that extend layout.Base
         * @member {Boolean} isLayout=true
         * @private
         */
        isLayout: true
    }}

    /**
     * Placeholder Method
     * @param {Neo.component.Base} item
     * @private
     */
    applyChildAttributes(item) {}

    /**
     * Placeholder Method
     * @private
     */
    applyRenderAttributes() {}

    /**
     * Placeholder Method
     * @param {Neo.component.Base} item
     * @private
     */
    removeChildAttributes(item) {}

    /**
     * Placeholder Method
     * @private
     */
    removeRenderAttributes() {}
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Card.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Card.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Card; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.layout.Card
 * @extends Neo.layout.Base
 */
class Card extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /*
         * The name of the CSS class for an active item inside the card layout
         * @member activeItemCls
         * @static
         */
        activeItemCls: 'active-item',
        /*
         * The name of the CSS class for an inactive item inside the card layout
         * @member inactiveItemCls
         * @static
         */
        inactiveItemCls: 'inactive-item',
        /*
         * The name of the CSS class for an item inside the card layout
         * @member itemCls
         * @static
         */
        itemCls: 'neo-layout-card-item'
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Card'
         * @private
         */
        className: 'Neo.layout.Card',
        /**
         * @member {String} ntype='layout-card'
         * @private
         */
        ntype: 'layout-card',
        /*
         * The item index of the card, which is currently active.
         * Change this value to activate a different card.
         * @member {Number} activeIndex_=0
         */
        activeIndex_: 0
    }}

    /**
     * Modifies the CSS classes of the container items this layout is bound to.
     * Automatically gets triggered after changing the value of activeIndex.
     * @param value
     * @param oldValue
     * @private
     */
    afterSetActiveIndex(value, oldValue) {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            sCfg      = me.getStaticConfig(),
            isActiveIndex, cls, items;

        if (container && container.rendered) {
            items = container.items;

            if (!items[value]) {
                Neo.error('Trying to activate a non existing card', value, items);
            }

            items.forEach((item, index) => {
                cls           = item.cls;
                isActiveIndex = index === value;

                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, isActiveIndex ? sCfg.inactiveItemCls : sCfg.activeItemCls);
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(   cls, isActiveIndex ? sCfg.activeItemCls   : sCfg.inactiveItemCls);

                item.cls = cls;
            });
        }
    }

    /**
     * Initially sets the CSS classes of the container items this layout is bound to.
     * @param child
     * @param index
     */
    applyChildAttributes(child, index) {
        let me       = this,
            sCfg     = me.getStaticConfig(),
            childCls = child.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(childCls, sCfg.itemCls);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(childCls, me.activeIndex === index ? sCfg.activeItemCls : sCfg.inactiveItemCls);

        child.cls = childCls;
    }

    /**
     * Applies CSS classes to the container this layout is bound to
     */
    applyRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Card: applyRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls || [], 'neo-layout-card');

        container.cls = cls;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     */
    removeRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Card: removeRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-layout-card');

        container.cls = cls;
    }
}

Neo.applyClassConfig(Card);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Fit.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Fit.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fit; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.layout.Fit
 * @extends Neo.layout.Base
 */
class Fit extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Fit'
         * @private
         */
        className: 'Neo.layout.Fit',
        /**
         * @member {String} ntype='layout-fit'
         * @private
         */
        ntype: 'layout-fit'
    }}

    /**
     * Initially sets the CSS classes of the container items this layout is bound to.
     * @param child
     * @param index
     */
    applyChildAttributes(child) {
        child.cls = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].union(child.cls, 'neo-layout-fit-item');
    }

    /**
     * Applies CSS classes to the container this layout is bound to
     */
    applyRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Fit: applyRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls || [], 'neo-layout-fit');

        container.cls = cls;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     */
    removeRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Fit: removeRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-layout-fit');

        container.cls = cls;
    }
}

Neo.applyClassConfig(Fit);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/Flexbox.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/Flexbox.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Flexbox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/layout/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.layout.Flexbox
 * @extends Neo.layout.Base
 */
class Flexbox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for align
         * @member {String[]} alignValues=['center', 'end', 'start', 'stretch', null]
         * @private
         * @static
         */
        alignValues: ['center', 'end', 'start', 'stretch', null],
        /**
         * Valid values for direction
         * @member {String[]} directionValues=['column', 'column-reverse', 'row', 'row-reverse', null]
         * @private
         * @static
         */
        directionValues: ['column', 'column-reverse', 'row', 'row-reverse', null],
        /**
         * Valid values for pack
         * @member {String[]} packValues=['center', 'end', 'start', null]
         * @private
         * @static
         */
        packValues: ['center', 'end', 'start', null],
        /**
         * Valid values for wrap
         * @member {String[]} wrapValues=['nowrap', 'wrap', 'wrap-reverse']
         * @private
         * @static
         */
        wrapValues: ['nowrap', 'wrap', 'wrap-reverse'],
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Flexbox'
         * @private
         */
        className: 'Neo.layout.Flexbox',
        /**
         * @member {String} ntype='layout-flexbox'
         * @private
         */
        ntype: 'layout-flexbox',
        /**
         * Valid values: 'center', 'end', 'start', 'stretch', null
         * @member {String|null} align_=null
         */
        align_: null,
        /**
         * Valid values: 'column', 'column-reverse', 'row', 'row-reverse', null
         * @member {String|null} direction_=null
         */
        direction_: null,
        /**
         * Valid values: 'center', 'end', 'start', null
         * @member {String|null} pack_=null
         */
        pack_: null,
        /**
         * CSS className prefix
         * @member {String} prefix='neo-flex-'
         */
        prefix: 'neo-flex-',
        /**
         * Valid values: nowrap, wrap, wrapreverse
         * @member {String} wrap_='nowrap'
         */
        wrap_: 'nowrap'
    }}

    /**
     * Updates the Container CSS cls after "align" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetAlign(value, oldValue) {
        this.updateInputValue(value, oldValue, 'align');
    }

    /**
     * Updates the Container CSS cls after "direction" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetDirection(value, oldValue) {
        this.updateInputValue(value, oldValue, 'direction');
    }

    /**
     * Updates the Container CSS cls after "pack" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     */
    afterSetPack(value, oldValue) {
        this.updateInputValue(value, oldValue, 'pack');
    }

    /**
     * Updates the Container CSS cls after "wrap" gets changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     */
    afterSetWrap(value, oldValue) {
        this.updateInputValue(value, oldValue, 'wrap');
    }

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Object} item
     */
    applyChildAttributes(item) {
        let style = item.style || {};

        style.flex = style.flex || item.flex || (this.align === 'stretch' ? 1 : '0 1 auto');
        item.style = style;
    }

    /**
     * Applies CSS classes to the container this layout is bound to
     */
    applyRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            prefix    = me.prefix,
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Flexbox: applyRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls || [], prefix + 'container');

        if (me.align) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'align-' + me.align);
        }
        if (me.direction) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'direction-' + me.direction);
        }
        if (me.pack) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'pack-' + me.pack);
        }
        if (me.wrap) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + 'wrap-' + me.wrap);
        }

        container.cls = cls;
    }

    /**
     * Checks if the new value for "align" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     * @returns {String|null} value
     */
    beforeSetAlign(value, oldValue) {
        return this.testInputValue(value, oldValue, 'alignValues', 'align');
    }

    /**
     * Checks if the new value for "direction" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     * @returns {String|null} value
     */
    beforeSetDirection(value, oldValue) {
        return this.testInputValue(value, oldValue, 'directionValues', 'direction');
    }

    /**
     * Checks if the new value for "pack" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @private
     * @returns {String|null} value
     */
    beforeSetPack(value, oldValue) {
        return this.testInputValue(value, oldValue, 'packValues', 'pack');
    }

    /**
     * Checks if the new value for "wrap" is valid
     * @param {String} value
     * @param {String} oldValue
     * @private
     * @returns {String} value
     */
    beforeSetWrap(value, oldValue) {
        return this.testInputValue(value, oldValue, 'wrapValues', 'wrap');
    }

    /**
     * Removes all CSS rules from an container item this layout is bound to.
     * Gets called when switching to a different layout.
     * @param item
     * @private
     */
    removeChildAttributes(item) {
        let style = item.style || {};

        style.flex = item.flex || null;
        item.style = style;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     * @private
     */
    removeRenderAttributes() {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            prefix    = me.prefix,
            cls       = container && container.cls;

        if (!container) {
            Neo.logError('layout.Flexbox: removeRenderAttributes -> container not yet created', me.containerId);
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'container');

        if (me.align) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'align-' + me.align);
        }
        if (me.direction) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'direction-' + me.direction);
        }
        if (me.pack) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'pack-' + me.pack);
        }
        if (me.wrap) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + 'wrap-' + me.wrap);
        }

        container.cls = cls;
    }

    /**
     * Checks if the new value for propertyName is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {String} validValuesName
     * @param {String} propertyName
     * @private
     * @returns {String|null} value
     */
    testInputValue(value, oldValue, validValuesName, propertyName) {
        const validValues = this.getStaticConfig(validValuesName);

        if (!_util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].hasItem(validValues, value)) {
            Neo.logError(this.containerId, '-> layout: supported values for "' + propertyName + '" are' , validValues);
            return oldValue;
        }

        return value;
    }

    /**
     * Updates the Container CSS cls
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {String} propertyName
     * @private
     */
    updateInputValue(value, oldValue, propertyName) {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            prefix    = me.prefix,
            cls       = container && container.cls;

        if (container && container.rendered) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, prefix + propertyName + '-' + oldValue);

            if (value !== null) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, prefix + propertyName + '-' + value);
            }

            container.cls = cls;
        }
    }
}

Neo.applyClassConfig(Flexbox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/HBox.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/HBox.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HBox; });
/* harmony import */ var _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flexbox.mjs */ "./node_modules/neo.mjs/src/layout/Flexbox.mjs");


/**
 * @class Neo.layout.HBox
 * @extends Neo.layout.Flexbox
 */
class HBox extends _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.HBox'
         * @private
         */
        className: 'Neo.layout.HBox',
        /**
         * @member {String} ntype='layout-hbox'
         * @private
         */
        ntype: 'layout-hbox',
        /**
         * @member {String} direction='row'
         * @private
         */
        direction: 'row'
    }}

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Object} item
     */
    applyChildAttributes(item) {
        // Do not apply flex if fixed width
        if (!item.width) {
            super.applyChildAttributes(item);
        }
    }
}

Neo.applyClassConfig(HBox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/layout/VBox.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/layout/VBox.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VBox; });
/* harmony import */ var _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Flexbox.mjs */ "./node_modules/neo.mjs/src/layout/Flexbox.mjs");


/**
 * @class Neo.layout.VBox
 * @extends Neo.layout.Flexbox
 */
class VBox extends _Flexbox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.VBox'
         * @private
         */
        className: 'Neo.layout.VBox',
        /**
         * @member {String} ntype='layout-vbox'
         * @private
         */
        ntype: 'layout-vbox',
        /**
         * @member {String} direction='column'
         * @private
         */
        direction: 'column'
    }}

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Object} item
     */
    applyChildAttributes(item) {
        // Do not apply flex if fixed height
        if (!item.height) {
            super.applyChildAttributes(item);
        }
    }
}

Neo.applyClassConfig(VBox);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Base.mjs":
/*!***************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Base.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");


/**
 * Abstract base class for the other manager classes
 * @class Neo.manager.Base
 * @extends Neo.collection.Base
 */
class Base extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]{
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Base'
         * @private
         */
        className: 'Neo.manager.Base',
        /**
         * @member {String} ntype='base-manager'
         * @private
         */
        ntype: 'base-manager'
    }}

    /**
     *
     * @param {Number|String} id
     * @returns {Object}
     */
    getById(id) {
        return this.get(id);
    }

    /**
     *
     * @param {Object} item
     */
    register(item) {
        let me = this;

        if (me.get(item.id)) {
            Neo.logError('Trying to create an item with an already existing id', item, me.get(item.id));
        } else {
            me.push(item);
        }
    }

    /**
     *
     * @param {Object} item
     */
    unregister(item) {
        this.remove(item);
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Component.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Component.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");




/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Component'
         * @private
         */
        className: 'Neo.manager.Component',
        /**
         * @member {String} ntype='component-manager'
         * @private
         */
        ntype: 'component-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);
        Neo.getComponent = this.getById.bind(this); // alias
    }

    /**
     * Returns the first component which matches the config-selector moving down the component items tree
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    down(componentId, config) {
        let me          = this,
            component   = me.getById(componentId),
            matchArray  = [],
            returnValue = null,
            i           = 0,
            len         = component.items && component.items.length || 0,
            configArray, configLength;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        configArray.forEach(([key, value]) => {
            if (component.hasOwnProperty(key) && component[key] === value) {
                matchArray.push(true);
            }
        });

        if (matchArray.length === configLength) {
            return component;
        }

        for (; i < len; i++) {
            returnValue = me.down(component.items[i].id, config);
            if (returnValue !== null) {
                return returnValue;
            }
        }

        return null;
    }

    /**
     *
     * @param {Array} path
     * @returns {String|null} the component id in case there is a match
     */
    findParentComponent(path) {
        let me  = this,
            i   = 0,
            len = path && path.length || 0,
            id;

        for (; i < len; i++) {
            id = path[i];

            if (id && me.has(id)) {
                return id;
            }
        }

        return null;
    }

    /**
     * todo: replace all calls of this method to calls using the util.VNode class
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param childIds
     * @returns {Array} childIds
     */
    getChildIds(vnode, childIds) {
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(vnode, childIds);
    }

    /**
     * Returns all child components found inside the vdom tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(component.vnode),
            childComponent;

        childNodes.forEach(node => {
            childComponent = this.get(node);

            if (childComponent) {
                childComponents.push(childComponent);
            }
        });

        return childComponents;
    }

    /**
     * Returns an Array containing the ids of all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {String[]} parentIds
     */
    getParentIds(component) {
        let parentIds = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parentIds.push(component.id);
            }
        }

        return parentIds;
    }

    /**
     *
     * @param {Array} path
     * @returns {Array}
     */
    getParentPath(path) {
        let me            = this,
            componentPath = [],
            i             = 0,
            len           = path && path.length || 0;

        for (; i < len; i++) {
            if (me.has(path[i])) {
                componentPath.push(path[i]);
            }
        }

        return componentPath;
    }

    /**
     * Returns an Array containing all parent components for a given component
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} parents
     */
    getParents(component) {
        let parents = [];

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (component) {
                parents.push(component);
            }
        }

        return parents;
    }

    /**
     * Returns the first component which matches the config-selector
     * @param {String} componentId
     * @param {Object|String} config
     * @returns {Neo.component.Base|null}
     */
    up(componentId, config) {
        let component = this.getById(componentId),
            configArray, configLength, matchArray;

        if (Neo.isString(config)) {
            config = {
                ntype: config
            };
        }

        configArray  = Object.entries(config);
        configLength = configArray.length;

        while (component && component.parentId) {
            component = this.getById(component.parentId);

            if (!component) {
                return null;
            }

            matchArray = [];

            configArray.forEach(([key, value]) => {
                if (component.hasOwnProperty(key) && component[key] === value) {
                    matchArray.push(true);
                }
            });

            if (matchArray.length === configLength) {
                return component;
            }
        }
    }
}

Neo.applyClassConfig(Component);

let instance = Neo.create(Component);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/DomEvent.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/DomEvent.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Focus.mjs */ "./node_modules/neo.mjs/src/manager/Focus.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");







const eventConfigKeys = [
    'bubble',
    'delegate',
    'local',
    'scope',
    'vnodeId'
];

const globalDomEvents = [
    'change',
    'click',
    'contextmenu',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mouseenter',
    'mouseleave',
    'wheel'
];

/**
 * @class Neo.manager.DomEvent
 * @extends Neo.core.Base
 * @singleton
 */
class DomEvent extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.DomEvent'
         * @private
         */
        className: 'Neo.manager.DomEvent',
        /**
         * @member {String} ntype='dom-event-manager'
         * @private
         */
        ntype: 'dom-event-manager',
        /**
         * @member {Object} listeners={}
         * @private
         */
        items: {},
        /**
         * @member {Object} map={}
         * @private
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} event
     * @private
     */
    fire(event) {
        let me         = this,
            bubble     = true,
            data       = event.data || {},
            eventName  = event.eventName,
            i          = 0,
            isDisabled = false,
            listeners  = null,
            pathIds    = data.path.map(e => e.id),
            path       = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len        = path.length,
            component, delegationVdom, delegationTargetId, id, preventFire, targetId;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (component.disabled) {
                isDisabled = true;
                break;
            }

            listeners = me.items[id] && me.items[id][eventName];

            if (listeners) {
                // console.log('fire', eventName, data, listeners, path);

                if (!isDisabled && Array.isArray(listeners)) {
                    listeners.forEach(listener => {
                        if (listener && listener.fn) {
                            delegationTargetId = me.verifyDelegationPath(listener, data.path);

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    targetId = eventName === 'mouseenter' ? data.fromElementId : data.toElementId;
                                    // console.log(targetId, delegationTargetId);

                                    if (targetId && targetId !== delegationTargetId) {
                                        delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(component.vdom, delegationTargetId);

                                        if (delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(delegationVdom.vdom, targetId)) {
                                            preventFire = true;
                                        }
                                    }
                                }

                                if (!preventFire) {
                                    // console.log(Neo.get(id));
                                    data.component = component;
                                    listener.fn.apply(listener.scope || self, [data]);

                                    if (!listener.bubble) {
                                        bubble = false;
                                    }
                                }
                            }
                        }
                    });
                }
            }

            // we do want to trigger the FocusManager after normal domListeners on these events got executed
            if (eventName === 'focusin' || eventName === 'focusout') {
                _Focus_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]['on' + Neo.capitalize(eventName)]({
                    componentPath: path,
                    data         : data
                });

                break;
            }

            if (!bubble) {
                break;
            }
        }
    }

    /**
     *
     * @param config
     * @param scope
     * @returns {Object}
     */
    generateListenerConfig(config, scope) {
        return {
            delegate : config.delegate,
            eventName: config.eventName,
            id       : scope.id,
            opts     : config,
            scope    : config.scope   || scope,
            vnodeId  : config.vnodeId || scope.id
        };
    }

    getEventName(config) {
        let eventName = null;

        if (Neo.isObject(config)) {
            Object.keys(config).forEach(key => {
                if (!eventConfigKeys.includes(key)) {
                    eventName = key;
                }
            });
        }

        return eventName;
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Object}
     */
    getListener(config) {
        let listeners = this.items,
            event;

        if (listeners && listeners[config.id]) {
            event = listeners[config.id][config.eventName];

            if (event) {
                console.log(event);
            }
        }
    }

    /**
     * Mounts local domEvent listeners for a given component
     * @param {Neo.component.Base} component
     * @private
     */
    mountDomListeners(component) {
        let listeners   = component.domListeners,
            localEvents = [],
            event, eventName;

        Object.keys(listeners).forEach(eventId => {
            event     = listeners[eventId];
            eventName = event.eventName;

            if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                console.log('localEvents', eventName);

                localEvents.push({
                    name   : eventName,
                    handler: 'domEventListener',
                    vnodeId: event.vnodeId
                });
            }
        });

        if (localEvents.length > 0) {
            Neo.worker.App.promiseMessage('main', {
                action : 'addDomListener',
                appName: component.appName,
                events : localEvents
            }).then(data => {
                // console.log('added domListener', data);
            }).catch(err => {
                console.log('App: Got error attempting to add a domListener', err);
            });
        }
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Boolean} config.local
     * @param {Number} config.opts
     * @param {Number} config.originalConfig
     * @param {Number} config.priority
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @returns {Boolean} true if the listener got registered successfully (false in case it was already there)
     */
    register(config) {
        let alreadyRegistered = false,
            eventName         = config.eventName,
            id                = config.id,
            listeners         = this.items,
            opts              = config.opts,
            scope             = config.scope,
            fnType            = typeof opts,
            fn, listener, listenerConfig, listenerId;

        if (fnType === 'function' || fnType === 'string') {
            fn = opts;
        } else {
            fn    = opts.fn;
            scope = opts.scope || scope;
        }

        if (!listeners[id]) {
            listeners[id] = {};
        }

        if (listeners[id][eventName]) {
            listener = listeners[id][eventName];

            Object.keys(listener).forEach(key => {
                if (
                    listener[key].fn.toString() === fn.toString() && // todo: add a better check
                    listener[key].scope         === scope &&
                    listener[key].delegate      === config.delegate
                ) {
                    alreadyRegistered = true;
                }
            });
        } else {
            listeners[id][eventName] = [];
        }

        if (alreadyRegistered === true) {
            return false;
        }

        // console.log('manager.DomEvent register', eventName, config);

        listenerId = Neo.getId('dom-event');

        config.listenerId = listenerId;

        listenerConfig = {
            bubble        : config.hasOwnProperty('bubble') ? config.bubble : opts.hasOwnProperty('bubble') ? opts.bubble : true,
            delegate      : config.delegate,
            fn            : fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            priority      : config.priority || 1,
            scope         : scope,
            vnodeId       : config.vnodeId
        };

        this.map[listenerId] = listenerConfig;

        listeners[id][eventName].push(listenerConfig);

        listeners[id][eventName].sort((a, b) => a.priority > b.priority);

        // console.log(this.map);

        return true;
    }

    /**
     * @param {Object} config
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Object} config.opts
     * @param {Object} config.scope
     * @param {String} config.vnodeId
     * @param {Object} scope
     * @returns {Boolean} true in case the listener did exist and got removed
     */
    unregister(config, scope) {
        console.log('unregister', config);
        console.log(this.generateListenerConfig(config, scope));
        return;

        let listener = this.getListener(config);

        if (listener) {
            console.log('listener found', listener);
        }
    }

    updateDomListeners(component, domListeners, oldDomListeners) {
        let me                  = this,
            registeredListeners = me.items[component.id] || {},
            i, len, listeners;

        if (Array.isArray(domListeners)) {
            if (Array.isArray(oldDomListeners)) {
                oldDomListeners.forEach(oldDomListener => {
                    // find & remove no longer existing listeners
                    if (!domListeners.includes(oldDomListener)) {
                        listeners = registeredListeners[me.getEventName(oldDomListener)] || [];
                        i         = 0;
                        len       = listeners.length;

                        for (; i < len; i++) {
                            if (listeners[i].originalConfig === oldDomListener) {
                                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].remove(listeners, listeners[i]);
                                break;
                            }
                        }
                    }
                });
            }

            // add new listeners
            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    if (!eventConfigKeys.includes(key)) {
                        me.register({
                            delegate      : value.delegate || domListener.delegate || '#' + component.id,
                            eventName     : key,
                            id            : component.id,
                            opts          : value,
                            originalConfig: domListener,
                            scope         : domListener.scope || component,
                            vnodeId       : value.vnodeId || component.id
                        });
                    }
                });
            });

            if (component.mounted) {
                me.mountDomListeners(component);
            }
        } else {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Component.domListeners have to be an array', component);
        }
    }

    /**
     * Intended for Neo.controller.Component to replace listener placeholders provided as a string
     * @param {Object} config
     * @param {String} config.componentId
     * @param {Function} config.eventHandlerMethod
     * @param {String} config.eventHandlerName
     * @param {String} config.eventName
     * @param {Neo.core.Base} config.scope
     */
    updateListenerPlaceholder(config) {
        let me             = this,
            items          = me.items[config.componentId] || {},
            eventListeners = items[config.eventName] || [],
            i              = 0,
            len            = eventListeners.length,
            listener;

        for (; i < len; i++) {
            listener = eventListeners[i];

            if (listener.fn === config.eventHandlerName) {
                listener.fn    = config.eventHandlerMethod;
                listener.scope = config.scope;
                break;
            }
        }
    }

    /**
     *
     * @param {Object} listener
     * @param {Array} path
     * @returns {Boolean|String} true in case the delegation string matches the event path
     */
    verifyDelegationPath(listener, path) {
        let delegationArray = listener.delegate.split(' '),
            j               = 0,
            len             = delegationArray.length,
            pathLen         = path.length,
            hasMatch, i, item, isId, targetId;

        for (i=len-1; i >= 0; i--) {
            hasMatch = false;
            item     = delegationArray[i];
            isId     = item.startsWith('#');

            if (isId || item.startsWith('.')) {
                item = item.substr(1);
            }

            for (; j < pathLen; j++) {
                if (
                    (isId && path[j].id === item) ||
                    path[j].cls.includes(item)
                ) {
                    hasMatch = true;
                    targetId = path[j].id;
                    break;
                }
            }

            if (!hasMatch) {
                return false;
            }
        }

        // ensure the delegation path is a child of the owner components root node
        for (; j < pathLen; j++) {
            if (path[j].id === listener.vnodeId) {
                return targetId;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(DomEvent);

let instance = Neo.create(DomEvent);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Focus.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Focus.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.manager.Focus
 * @extends Neo.core.Base
 * @singleton
 */
class Focus extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Focus'
         * @private
         */
        className: 'Neo.manager.Focus',
        /**
         * @member {String} ntype='focus-manager'
         * @private
         */
        ntype: 'focus-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * An array containing opts objects.
         * opts.componentPath
         * opts.data
         * @member {Object[]} history=[]
         */
        history: [],
        /**
         * The Date object when the last focusin event has occured
         * @member {Date|null} lastFocusInDate=null
         * @private
         */
        lastFocusInDate: null,
        /**
         * The Date object when the last focusout event has occured
         * @member {Date|null} lastFocusInDate=null
         * @private
         */
        lastFocusOutDate: null,
        /**
         * The amount of time for a focusIn to occur after the last focusOut
         * to be threated as a focusmove
         * @member {Number} maxFocusInOutGap=10
         */
        maxFocusInOutGap: 10,
        /**
         * The maximum amount of items stored inside the history array
         * @member {Number} maxHistoryLength=20
         */
        maxHistoryLength: 20
    }}

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    addToHistory(opts) {
        let history = this.history;

        history.unshift(opts);

        if (history.length >= this.maxHistoryLength) {
            history.pop();
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusEnter(opts) {
        this.setComponentFocus(opts, true);
        this.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    focusMove(opts) {
        let me               = this,
            history          = me.history,
            newComponentPath = opts.componentPath,
            oldComponentPath = history[0].componentPath,
            focusEnter       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(newComponentPath, oldComponentPath),
            focusLeave       = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].difference(oldComponentPath, newComponentPath),
            focusMove        = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].intersection(newComponentPath, oldComponentPath),
            component, data;

        me.setComponentFocus({componentPath: focusEnter, data: opts.data}, true);
        me.setComponentFocus({componentPath: focusLeave, data: opts.data}, false);

        focusMove.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                data = {
                    newPath: opts.data.path,
                    oldPath: history[0].data.path
                };

                if (typeof component.onFocusMove === 'function') {
                    component.onFocusMove(data);
                }

                component.fire('focusMove', data);
            }
        });

        me.addToHistory(opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    onFocusin(opts) {
        let me = this;

        me.lastFocusInDate = new Date();

        if (me.lastFocusOutDate && me.lastFocusInDate - me.lastFocusOutDate < me.maxFocusInOutGap) {
            me.focusMove(opts);
        } else {
            me.focusEnter(opts);
        }
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @private
     */
    onFocusout(opts) {
        let me = this;

        me.lastFocusOutDate = new Date();

        setTimeout(() => {
            if (me.lastFocusOutDate > me.lastFocusInDate) {
                me.focusLeave(opts);
            }
        }, me.maxFocusInOutGap);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @param {Boolean} containsFocus
     * @private
     */
    setComponentFocus(opts, containsFocus) {
        let component, handler;

        opts.componentPath.forEach(id => {
            component = Neo.getComponent(id);

            if (component) {
                component.containsFocus = containsFocus;

                handler = containsFocus ? 'onFocusEnter' : 'onFocusLeave';

                if (typeof component[handler] === 'function') {
                    component[handler](opts.data.path);
                }

                component.fire(containsFocus ? 'focusEnter' : 'focusLeave', opts.data.path);
            }
        });
    }
}

Neo.applyClassConfig(Focus);

let instance = Neo.create(Focus);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/manager/Instance.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/manager/Instance.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/manager/Base.mjs");
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");



/**
 * @class Neo.manager.Instance
 * @extends Neo.manager.Base
 * @singleton
 */
class Instance extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Instance'
         * @private
         */
        className: 'Neo.manager.Instance',
        /**
         * @member {String} ntype='instance-manager'
         * @private
         */
        ntype: 'instance-manager',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].instanceManagerAvailable = true;

        me.consumeNeoIdMap();

        Neo.get = me.get.bind(me); // alias
    }

    /**
     * Register all ids which got applied to the Neo namespace before this instance got created
     * @private
     */
    consumeNeoIdMap() {
        if (Neo.idMap) {
            this.add(Object.values(Neo.idMap));
            delete Neo.idMap;
        }
    }
}

Neo.applyClassConfig(Instance);

let instance = Neo.create(Instance);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/Container.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/Container.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _HeaderButton_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderButton.mjs */ "./node_modules/neo.mjs/src/tab/HeaderButton.mjs");
/* harmony import */ var _HeaderToolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderToolbar.mjs */ "./node_modules/neo.mjs/src/tab/HeaderToolbar.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _Strip_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strip.mjs */ "./node_modules/neo.mjs/src/tab/Strip.mjs");






/**
 * @class Neo.tab.Container
 * @extends Neo.container.Base
 */
class Container extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for tabBarPosition
         * @member {String[]} tabBarPositions=['top', 'right', 'bottom', 'left']
         * @private
         * @static
         */
        tabBarPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.Container'
         * @private
         */
        className: 'Neo.tab.Container',
        /**
         * @member {String} ntype='tab-container'
         * @private
         */
        ntype: 'tab-container',
        /**
         * @member {Number} activeIndex_=0
         */
        activeIndex_: 0,
        /**
         * True will activate a tab which gets dynamically inserted / added after the TabContainer is mounted
         * @member {Boolean} activateInsertedTabs=false
         */
        activateInsertedTabs: false,
        /**
         * @member {String} baseCls='neo-tab-container'
         */
        baseCls: 'neo-tab-container',
        /**
         * @member {String|null} [cardContainerId]=null
         */
        cardContainerId: null,
        /**
         * adds baseCls + '-plain' is case plain is set to true
         * @member {Array} cls=['neo-tab-container'],
         * @private
         */
        cls: ['neo-tab-container'],
        /**
         * Default configs for the tab.Strip
         * @member {Object|null} [contentContainerDefaults]=null
         */
        contentContainerDefaults: null,
        /**
         * Default configs for the tab.HeaderToolbar
         * @member {Object|null} [headerToolbarDefaults]=null
         */
        headerToolbarDefaults: null,
        /**
         * True to not apply a background effect to the tab header container
         * @member {Boolean} plain_=true
         */
        plain_: true,
        /**
         * @member {String|null} tabBarId=null
         */
        tabBarId: null,
        /**
         * Default configs for the tab.Strip
         * @member {Object|null} [tabStripDefaults]=null
         */
        tabStripDefaults: null,
        /**
         * @member {String|null} [tabStripId]=null
         */
        tabStripId: null,
        /**
         * The position of the tab header toolbar.
         * Valid values are top, right, bottom, left.
         * @member {String} tabBarPosition_='top'
         */
        tabBarPosition_: 'top',
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true
    }}

    /**
     *
     */
    onConstructed() {
        this._layout = this.getLayoutConfig(); // silent update
        super.onConstructed();
    }

    /**
     * Adds one or multiple tabs at the end of the header
     * @param {Object|Array} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    add(item) {
        return this.insert(this.getTabBar().items.length, item);
    }

    /**
     * Triggered after the activeIndex config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @private
     */
    afterSetActiveIndex(value, oldValue) {
        let me            = this,
            cardContainer = Neo.getComponent(me.cardContainerId);

        if (me.rendered && value > -1) {
            me.updateTabButtons();

            cardContainer.layout.activeIndex = value;

            me.fire('activeIndexChange', {
                oldValue: oldValue,
                value   : value
            });
        }
    }

    /**
     * Triggered after the plain config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetPlain(value, oldValue) {
        let me      = this,
            baseCls = me.baseCls,
            cls     = me.cls || [];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][value ? 'unshift' : 'remove'](cls, baseCls + '-plain');
        me.cls = cls;
    }

    /**
     * Triggered after the tabBarPosition config got changed
     * @param {String} value 'top', 'right', 'bottom', 'left'
     * @param {String} oldValue 'top', 'right', 'bottom', 'left'
     * @private
     */
    afterSetTabBarPosition(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].remove(cls, 'neo-' + oldValue);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].add(cls, 'neo-' + value);
        me.cls = cls;

        if (me.rendered) {
            me.layout = me.getLayoutConfig();
            me.getTabBar().dock = value;
            me.getTabStrip().cls = ['neo-tab-strip',  'neo-dock-' + value];

            me.fire('tabBarPositionChange', {
                oldValue: oldValue,
                value   : value
            });
        }
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (Neo.isDefined(oldValue)) {
            this.getTabBar()  .useActiveTabIndicator = value;
            this.getTabStrip().useActiveTabIndicator = value;
        }
    }

    /**
     * Triggered before the tabBarPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @private
     * @returns {String} value
     */
    beforeSetTabBarPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'tabBarPosition');
    }

    /**
     *
     * @private
     */
    createItems() {
        let me            = this,
            items         = me.items || [],
            tabButtons    = [],
            tabComponents = [];

        Object.assign(me, {
            cardContainerId: me.cardContainerId || Neo.getId('container'),
            tabBarId       : me.tabBarId        || Neo.getId('tab-header-toolbar'),
            tabStripId     : me.tabStripId      || Neo.getId('tab-strip')
        });

        items.forEach((item, index) => {
            tabButtons.push(me.getTabButtonConfig(item.tabButtonConfig, index));
            delete item.tabButtonConfig;

            if (item instanceof Neo.component.Base !== true) {
                item = {...me.itemDefaults, flex: 1, ...item};
            }

            tabComponents.push(item);
        });

        me.items = [{
            module               : _HeaderToolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            dock                 : me.tabBarPosition,
            flex                 : 'none',
            id                   : me.tabBarId,
            items                : tabButtons,
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.headerToolbarDefaults || {}
        }, {
            module               : _Strip_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            cls                  : ['neo-tab-strip', 'neo-dock-' + me.tabBarPosition],
            flex                 : 'none',
            id                   : me.tabStripId,
            tabContainerId       : me.id,
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.tabStripDefaults || {}
        }, {
            ntype                : 'container',
            cls                  : ['neo-container', 'neo-tab-content-container'],
            id                   : me.cardContainerId,
            itemDefaults         : me.itemDefaults,
            items                : tabComponents,
            layout               : {ntype: 'card', activeIndex: me.activeIndex},
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.contentContainerDefaults || {}
        }];

        me.itemDefaults = null;

        super.createItems();
    }

    /**
     * Returns a card by a given index
     * @param {Number} index
     * @return {Neo.component.Base|null}
     */
    getCard(index) {
        const card = this.getCardContainer().items[index];

        return card || null;
    }

    /**
     * @returns {Neo.container.Base}
     */
    getCardContainer() {
        return Neo.getComponent(this.cardContainerId);
    }

    /**
     * Returns the amount of items inside the tab header toolbar
     * @returns {Number}
     */
    getCount() {
        return this.getTabBar().items.length;
    }

    /**
     *
     * @returns {Object} layoutConfig
     * @private
     */
    getLayoutConfig() {
        let me           = this,
            layoutConfig = null;

        switch(me.tabBarPosition) {
            case 'bottom':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'stretch',
                    direction: 'column-reverse',
                    pack     : 'start'
                };
                break;
            case 'left':
                layoutConfig = {
                    ntype    : 'hbox',
                    align    : 'stretch',
                    direction: 'row',
                    pack     : 'start'
                };
                break;
            case 'right':
                layoutConfig = {
                    ntype    : 'hbox',
                    align    : 'stretch',
                    direction: 'row-reverse',
                    pack     : 'start'
                };
                break;
            case 'top':
                layoutConfig = {
                    ntype: 'vbox',
                    align: 'stretch'
                };
                break;
        }

        return layoutConfig;
    }

    /**
     * @returns {Neo.container.Toolbar}
     */
    getTabBar() {
        return Neo.getComponent(this.tabBarId);
    }

    /**
     *
     * @param {Object} config
     * @param {Number} index
     * @returns {Object} The merged config
     * @private
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _HeaderButton_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: {
                    click: {
                        fn: function(data) {
                            me.activeIndex = Neo.getComponent(data.target.id).index;
                        },
                        scope: me
                    }
                }
            };

        return {...defaultConfig, ...config};
    }

    /**
     * @returns {Neo.tab.Strip}
     */
    getTabStrip() {
        return Neo.getComponent(this.tabStripId);
    }

    /**
     * Inserts an item or array of items at a specific index
     * @param {Number} index
     * @param {Object|Object[]} item
     * @returns {Neo.component.Base|Neo.component.Base[]}
     */
    insert(index, item) {
        let me            = this,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            hasItem       = false,
            i, len, superItem, tabButtonConfig;

        if (Array.isArray(item)) {
            i   = 0;
            len = item.length;

            for (; i < len; i++) {
                // todo: render is async, ensure the order of items is correct

                // insert the array backwards
                item[i] = me.insert(item[len - 1], index);
            }
        } else if (typeof item === 'object') {
            i   = 0;
            len = cardContainer.items.length;

            for (; i < len; i++) {
                if (cardContainer.items[i].id === item.id) {
                    hasItem   = true;
                    superItem = cardContainer.items[i];
                    me.activeIndex = i;
                    break;
                }
            }

            if (!hasItem && item instanceof Neo.component.Base !== true) {
                tabButtonConfig = item.tabButtonConfig;

                if (me.activateInsertedTabs) {
                    tabButtonConfig.listeners = tabButtonConfig.listeners || {};

                    tabButtonConfig.listeners.mounted = {
                        fn   : me.onTabButtonMounted,
                        scope: me
                    };
                }

                tabBar.insert(index, me.getTabButtonConfig(tabButtonConfig, index));
                delete item.tabButtonConfig;

                // todo: non index based matching of tab buttons and cards
                i   = index + 1;
                len = tabBar.items.length;

                for (; i < len; i++) {
                    tabBar.items[i].index = i;

                }
            }
        }

        if (!hasItem) {
            item.flex = 1;
            superItem = cardContainer.insert(index, item);
        }

        return superItem
    }

    /**
     * Gets triggered once a dynamically added tabheader button gets mounted
     * in case activateInsertedTabs is set to true
     * @param {String} buttonId
     * @private
     */
    onTabButtonMounted(buttonId) {
        let me            = this,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            i             = 0,
            len           = tabBar.items.length,
            index         = -1,
            card;

        for (; i < len; i++) {
            if (tabBar.items[i].id === buttonId) {
                index = i;
                break;
            }
        }

        if (index > -1) {
            card = cardContainer.items[index];

            if (!card.mounted) {
                card.on('mounted', () => {
                    me.activeIndex = index;
                });
            } else {
                me.activeIndex = index;
            }
        }
    }

    /**
     *
     * @param {Number} index
     */
    removeAt(index) {
        let me            = this,
            activeIndex   = me.activeIndex,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            i, len;

        if (index < activeIndex) {
            me._activeIndex = activeIndex - 1; // silent update
        } else if (index === activeIndex) {
            me.activeIndex = activeIndex - 1;
        }

        cardContainer.removeAt(index);
        tabBar       .removeAt(index);

        // todo: non index based matching of tab buttons and cards
        i   = index;
        len = tabBar.items.length;

        for (; i < len; i++) {
            tabBar.items[i].index = i;
        }
    }

    /**
     *
     * @private
     */
    updateTabButtons() {
        let me          = this,
            activeIndex = me.activeIndex,
            tabBar      = me.getTabBar(),
            tabButtons  = tabBar.items || [];

        tabButtons.forEach((item, index) => {
            item.pressed = index === activeIndex;
        });
    }
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/HeaderButton.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/HeaderButton.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderButton; });
/* harmony import */ var _component_Button_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Button.mjs */ "./node_modules/neo.mjs/src/component/Button.mjs");


/**
 * @class Neo.tab.HeaderButton
 * @extends Neo.container.Toolbar
 */
class HeaderButton extends _component_Button_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.HeaderButton'
         * @private
         */
        className: 'Neo.tab.HeaderButton',
        /**
         * @member {String} ntype='tab-header-button'
         * @private
         */
        ntype: 'tab-header-button',
        /**
         * @member {Array} cls=['neo-button', 'neo-tab-button']
         */
        cls: ['neo-tab-header-button', 'neo-button'],
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tag: 'button',
            cn : [{
                tag: 'span',
                cls: ['neo-button-glyph']
            }, {
                tag: 'span',
                cls: ['neo-button-text']
            }, {
                cls: ['neo-tab-button-indicator']
            }]
        }
    }}

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        this.updateUseActiveTabIndicator();
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateUseActiveTabIndicator(silent=false) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[2].removeDom = !me.useActiveTabIndicator;

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
}

Neo.applyClassConfig(HeaderButton);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/HeaderToolbar.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/HeaderToolbar.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderToolbar; });
/* harmony import */ var _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");


/**
 * @class Neo.tab.HeaderToolbar
 * @extends Neo.container.Toolbar
 */
class HeaderToolbar extends _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.HeaderToolbar'
         * @private
         */
        className: 'Neo.tab.HeaderToolbar',
        /**
         * @member {String} ntype='tab-header-toolbar'
         * @private
         */
        ntype: 'tab-header-toolbar',
        /**
         * @member {Array} cls=['neo-tab-header-toolbar','neo-toolbar']
         */
        cls: ['neo-tab-header-toolbar', 'neo-toolbar'],
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true
    }}

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (Neo.isDefined(oldValue)) {
            let me   = this,
                vdom = me.vdom;

            me.items.forEach(item => {
                // silent updates
                item._useActiveTabIndicator = value;
                item.updateUseActiveTabIndicator(true);
            });

            me.vdom = vdom;
        }
    }

    /**
     *
     * @private
     */
    createItems() {
        let me       = this,
            defaults = me.itemDefaults || {};

        defaults.useActiveTabIndicator = me.useActiveTabIndicator;
        me.itemDefaults = defaults;

        super.createItems();
    }

    /**
     * Returns the layout config matching to the dock position
     * @returns {Object} layoutConfig
     * @private
     */
    getLayoutConfig() {
        let layoutConfig;

        switch(this.dock) {
            case 'bottom':
            case 'top':
                layoutConfig = {
                    ntype: 'hbox',
                    align: 'center',
                    pack : 'start'
                };
                break;
            case 'left':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'center',
                    direction: 'column-reverse',
                    pack     : 'end'
                };
                break;
            case 'right':
                layoutConfig = {
                    ntype    : 'vbox',
                    align    : 'center',
                    direction: 'column',
                    pack     : 'start'
                };
                break;
        }

        return layoutConfig;
    }
}

Neo.applyClassConfig(HeaderToolbar);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/Strip.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/Strip.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Strip; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.tab.Strip
 * @extends Neo.component.Base
 */
class Strip extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.Strip'
         * @private
         */
        className: 'Neo.tab.Strip',
        /**
         * @member {String} ntype='tab-strip'
         * @private
         */
        ntype: 'tab-strip',
        /**
         * @member {Array} cls=['neo-tab-strip']
         */
        cls: ['neo-tab-strip'],
        /**
         * @member {String|null} tabContainerId=null
         */
        tabContainerId: null,
        /**
         * @member {Boolean} useActiveTabIndicator_=true
         */
        useActiveTabIndicator_: true,
        /**
         * @member {Object} _vdom={cn: [{cls: 'neo-active-tab-indicator'}]}
         */
        _vdom: {
            cn: [{
                cls: ['neo-active-tab-indicator']
            }]
        }
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.getTabContainer().on({
            activeIndexChange   : me.getActiveTabRectThenMove,
            tabBarPositionChange: me.onTabBarPositionChange,
            scope               : me
        });
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value) {
            // todo: mount fires when pushing the task into the rendering queue, not when it is done
            setTimeout(() => {
                this.getActiveTabRectThenMove();
            }, 100, this);
        }
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @private
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[0].removeDom = !value;

        if (me.mounted && value) {
            me._vdom = vdom; // silent update
            me.getActiveTabRectThenMove();
        } else {
            me.vdom = vdom;
        }
    }

    /**
     *
     * @return {Neo.tab.HeaderButton}
     */
    getActiveTab() {
        let me           = this,
            tabContainer = me.getTabContainer();

        return tabContainer.getTabBar().items[tabContainer.activeIndex];
    }

    /**
     * Gets the DomRect of the active tab, then moves the indicator
     */
    getActiveTabRectThenMove() {
        let me = this;

        if (me.useActiveTabIndicator) {
            // remote method access
            Neo.main.DomAccess.getBoundingClientRect({
                id: me.getActiveTab().id
            }).then(data => {
                me.moveActiveIndicator(data);
            });
        }
    }

    /**
     *
     */
    getTabContainer() {
        return Neo.getComponent(this.tabContainerId);
    }

    /**
     *
     * @param {Object} rect
     * @param {Number} rect.bottom
     * @param {Number} rect.height
     * @param {Number} rect.left
     * @param {Number} rect.right
     * @param {Number} rect.top
     * @param {Number} rect.width
     * @param {Number} rect.x
     * @param {Number} rect.y
     */
    moveActiveIndicator(rect) {
        let me = this,
            activeTabIndicator, tabContainer, vdom;

        if (me.useActiveTabIndicator) {
            vdom               = me.vdom;
            activeTabIndicator = vdom.cn[0];
            tabContainer       = me.getTabContainer();

            switch (tabContainer.tabBarPosition) {
                case 'bottom':
                case 'top':
                    activeTabIndicator.style = {
                        left : rect.left  + 'px',
                        width: rect.width + 'px'
                    };
                    break;
                case 'left':
                case 'right':
                    activeTabIndicator.style = {
                        height: rect.height + 'px',
                        top   : rect.top    + 'px'
                    };
                    break;
            }

            activeTabIndicator.style.opacity = 1;
            me.vdom = vdom;

            setTimeout(() => {
                activeTabIndicator.style.opacity = 0;
                me.vdom = vdom;
            }, 300);
        }
    }

    /**
     * Listener for the tabBarPositionChange event
     * @param {Object} opts
     * @param {String} opts.oldValue
     * @param {String} opts.value
     */
    onTabBarPositionChange(opts) {
        let me = this;

        if (me.useActiveTabIndicator) {
            // we do need a delay to ensure the delta updates are done
            setTimeout(() => {
                me.getActiveTabRectThenMove();
            }, 50, me);
        }
    }
}

Neo.applyClassConfig(Strip);



/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Array.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Array.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Array
 * @extends Neo.core.Base
 */
class NeoArray extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Array'
         * @private
         */
        className: 'Neo.util.Array'
    }}

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static add(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.push(item);
            }
        });
    }

    /**
     * Returns an array of items which are present in array1, but not in array2
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static difference(array1=[], array2=[]) {
        return array1.filter(item => !array2.includes(item));
    }

    /**
     * Checks if the index of item is > -1
     * @param {Array} arr
     * @param {*} item
     */
    static hasItem(arr, item) {
        return arr.includes(item);
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Array}
     */
    static intersection(array1=[], array2=[]) {
        return array1.filter(item => array2.includes(item));
    }

    /**
     * Returns true if all items of array1 are present in array 2
     * Supports Arrays containing Objects, not Arrays containing Arrays
     * @param {Array} array1=[]
     * @param {Array} array2=[]
     * @returns {Boolean}
     */
    static isEqual(array1=[], array2=[]) {
        let i    = 0,
            len  = array1.length,
            len2 = array2.length,
            hasObject, j, value;

        for (; i < len; i++) {
            value = array1[i];

            if (Neo.isObject(value)) {
                hasObject = false;
                j         = 0;

                for (; j < len2; j++) {
                    if (Neo.isObject(array2[j]) && Neo.util.Object.isEqual(value, array2[j])) {
                        hasObject = true;
                        break;
                    }
                }

                if (!hasObject) {
                    return false;
                }
            }

            else if (!array2.includes(value)) {
                return false;
            }
        }

        return array1.length === array2.length;
    }

    /**
     * Moves an item inside arr from fromIndex to toIndex
     * @param {Array} arr
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    static move(arr, fromIndex, toIndex) {
        if (fromIndex === toIndex) {
            return arr;
        }

        if (fromIndex >= arr.length) {
            fromIndex = arr.length - 1;
        }

        arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
        return arr;
    }

    /**
     * Removes an item or array of items from an array. Only primitive items will get found
     * @param {Array} arr
     * @param {*} items
     */
    static remove(arr, items) {
        let index;

        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            index = arr.indexOf(item);

            if (index > -1) {
                arr.splice(index, 1);
            }
        });
    }

    /**
     * Removes an item from an array in case it does  exist, otherwise adds it
     * @param {Array} arr
     * @param {*} item
     */
    static toggle(arr, item) {
        if (this.hasItem(arr, item)) {
            this.remove(arr, item);
        } else {
            this.add(arr, item);
        }
    }

    /**
     * Returns an array of items which are present in array1 and array2
     * Only supports primitive items
     * @param {Array} array1
     * @param {Array} array2
     * @returns {Array}
     */
    static union(array1, array2) {
        let result = [],
            merge  = array1.concat(array2),
            len    = merge.length,
            assoc  = {},
            item;

        while (len--) {
            item = merge[len];

            if (!assoc[item]) {
                result.unshift(item);
                assoc[item] = true;
            }
        }

        return result;
    }

    /**
     * Adds an item or Array of items to an array in case it does not already exist.
     * Only primitive items will get found as duplicates
     * @param {Array} arr
     * @param {*} items
     */
    static unshift(arr, items) {
        if (!Array.isArray(items)) {
            items = [items];
        }

        items.forEach(item => {
            if (!arr.includes(item)) {
                arr.unshift(item);
            }
        });
    }
}

Neo.applyClassConfig(NeoArray);

/* harmony default export */ __webpack_exports__["default"] = (NeoArray);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/HashHistory.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/HashHistory.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.HashHistory
 * @extends Neo.core.Base
 * @singleton
 */
class HashHistory extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * True automatically applies the core/Observable.mjs mixin
         * @member {Boolean} observable=true
         * @static
         */
        observable: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @private
         */
        className: 'Neo.util.HashHistory',
        /**
         * @member {String} ntype='hash-history'
         * @private
         */
        ntype: 'hash-history',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Array} stack=[]
         * @private
         */
        stack: []
    }}

    /**
     *
     * @returns {Object}
     */
    first() {
        return this.stack[0];
    }

    /**
     *
     * @returns {Number}
     */
    getCount() {
        return this.stack.length;
    }

    /**
     *
     * @param {Object} hash
     * @param {String} hashString
     */
    push(hash, hashString) {
        let me = this;

        me.stack.unshift(hash);
        me.fire('change', hash, me.stack[1], hashString);
    }
}

Neo.applyClassConfig(HashHistory);

let instance = Neo.create(HashHistory);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/KeyNavigation.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/KeyNavigation.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_Object_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Object.mjs */ "./node_modules/neo.mjs/src/util/Object.mjs");




/**
 * @class Neo.util.KeyNavigation
 * @extends Neo.core.Base
 */
class KeyNavigation extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.KeyNavigation'
         * @private
         */
        className: 'Neo.util.KeyNavigation',
        /**
         * @member {String} ntype='keynav'
         * @private
         */
        ntype: 'keynav',
        /**
         * Internally stores the component id inside _component
         * @member {Neo.component.Base|null} component_=null
         */
        component_: null,
        /**
         * Set this to true in case the keydown event is supposed to bubble upwards inside the component tree
         * @member {Boolean} keyDownEventBubble=false
         */
        keyDownEventBubble: false,
        /**
         * @member {Array|null} keys_=null
         */
        keys_: null
    }}

    add(value) {
        this._keys.push(...this.parseKeys(value));
    }

    /**
     *
     * @private
     * @returns {Neo.component.Base}
     */
    beforeGetComponent() {
        return Neo.getComponent(this._component);
    }

    /**
     *
     * @param {Neo.component.Base} value
     * @private
     * @returns {String} the component id
     */
    beforeSetComponent(value) {
        return value && value.id;
    }

    /**
     *
     */
    destroy() {
        this.unregister();
        super.destroy();
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDown(data) {
        // Using the chrome auto-fill feature does trigger a keydown event, not containing a key. See: #64
        if (data.key) {
            let me           = this,
                upperCaseKey = data.key.toUpperCase(),
                scope;

            upperCaseKey = me.parseUpperCaseKey(upperCaseKey);

            // console.log('KeyNavigation onKeyDown', upperCaseKey, data, me.keys);

            me.keys.forEach(key => {
                scope = Neo.get(key.scope);

                if (key.key.toUpperCase() === upperCaseKey) {
                    if (scope[key.fn]) {
                        scope[key.fn].apply(scope, [data]);
                    }
                }
            });
        }
    }

    /**
     *
     * @param {Object} value
     * @returns {Object}
     */
    parseKeys(value) {
        if (!Array.isArray(value)) {
            let componentId = this._component,
                keyArray    = [];

            if (componentId) {
                Object.entries(value).forEach(([key, value]) => {
                    keyArray.push({
                        fn   : value,
                        key  : key,
                        scope: componentId // todo: support VCs later on
                    })
                });

                value = keyArray;
            }
        }

        return value;
    }

    /**
     * Replaces specific key names, e.g. " " => SPACE
     * @param {String} key
     * @private
     * @returns {String}
     */
    parseUpperCaseKey(key) {
        switch (key) {
            case ' ':
                key = 'SPACE';
                break;
            case 'ARROWDOWN':
                key = 'DOWN';
                break;
            case 'ARROWLEFT':
                key = 'LEFT';
                break;
            case 'ARROWRIGHT':
                key = 'RIGHT';
                break;
            case 'ARROWUP':
                key = 'UP';
                break;
        }

        return key;
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        let me           = this,
            domListeners = component.domListeners;

        me.component = component;
        me.keys      = me.parseKeys(me.keys);

        if (domListeners) {
            domListeners.push({
                keydown: {
                    fn    : me.onKeyDown,
                    bubble: me.keyDownEventBubble,
                    scope : me
                }
            });

            component.domListeners = domListeners;
        }
    }

    /**
     * Remove a key listener using the same config used when creating it
     * @param {Object} config
     */
    removeKey(config) {
        let me   = this,
            keys = me._keys,
            i    = 0,
            len  = keys.length,
            key;

        for (; i < len; i++) {
            key = keys[i];

            if (_util_Object_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].isEqual(key, config)) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(keys, key);
                break;
            }
        }
    }

    /**
     * Remove multiple key listeners passing an array of config items
     * @param {Array} items
     */
    removeKeys(items) {
        if (Array.isArray(items)) {
            items.forEach(item => this.removeKey(item));
        }
    }

    /**
     *
     */
    unregister() {
        // todo: remove the dom listener from the owner component
    }
}

Neo.applyClassConfig(KeyNavigation);

/* harmony default export */ __webpack_exports__["default"] = (KeyNavigation);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Object.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Object.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Object
 * @extends Neo.core.Base
 */
class NeoObject extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Object'
         * @private
         */
        className: 'Neo.util.Object'
    }}

    /**
     * Returns true if all properties of x match with the properties of y
     * Supports nested Objects, but not arrays as prop values
     * @param {Object} x
     * @param {Object} y
     * @returns {Boolean}
     */
    static isEqual(x, y) {
        return (Neo.isObject(x) && Neo.isObject(y)) ?
            (
                Object.keys(x).length === Object.keys(y).length) &&
                Object.keys(x).reduce(function(isEqual, key) {
                    return isEqual && NeoObject.isEqual(x[key], y[key]);
                }, true
            ) : (x === y);
    }
}

Neo.applyClassConfig(NeoObject);

/* harmony default export */ __webpack_exports__["default"] = (NeoObject);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Style.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Style.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Style
 * @extends Neo.core.Base
 */
class Style extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Style'
         * @private
         */
        className: 'Neo.util.Style'
    }}

    /**
     * Creates an delta object, containing the styles of newStyle which are not included or different than in oldStyle
     * Styles included in oldStyle but missing in newStyle will get a value of null
     * see: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
     * @param {Object|String} newStyle
     * @param {Object|String} oldStyle
     * @returns {Object} style delta
     */
    static compareStyles(newStyle, oldStyle) {
        let styles = {};

        if (Neo.isString(newStyle)) {
            newStyle = Neo.core.Util.createStyleObject(newStyle);
        }

        if (Neo.isString(oldStyle)) {
            oldStyle = Neo.core.Util.createStyleObject(oldStyle);
        }

        if (!newStyle && !oldStyle) {
            return null;
        } else if (!oldStyle) {
            return Neo.clone(newStyle);
        } else if (!newStyle) {
            Object.keys(oldStyle).forEach(function(style) {
                styles[style] = null;
            });
        } else {
            Object.keys(newStyle).forEach(function(style) {
                if (!oldStyle.hasOwnProperty(style) || oldStyle[style] !== newStyle[style]) {
                    styles[style] = newStyle[style];
                }
            });

            Object.keys(oldStyle).forEach(function(style) {
                if (!newStyle.hasOwnProperty(style)) {
                    styles[style] = null;
                }
            });

            if (Object.keys(styles).length > 0) {
                return styles;
            }

            return null;
        }
    }
}

Neo.applyClassConfig(Style);

/* harmony default export */ __webpack_exports__["default"] = (Style);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VDom.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VDom.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VDom
 * @extends Neo.core.Base
 */
class VDom extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VDom'
         * @private
         */
        className: 'Neo.util.VDom'
    }}

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} vdom
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vdom
     */
    static findVdomChild(vdom, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id:opts};

        let child      = null,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vdom.cn && vdom.cn.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vdom.hasOwnProperty(key)) {
                switch(key) {
                    case 'cls':
                        if (typeof value === 'string' && Neo.isArray(vdom[key])) {
                            if (vdom[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vdom[key])) {
                            // todo: either search the vdom array for all keys or compare if the arrays are equal.
                            throw new Error('findVdomChild: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (typeof value === 'string' && typeof vdom[key] === 'string') {
                            if (vdom[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isObject(value) && Neo.isObject(vdom[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vdom[key].hasOwnProperty(styleKey) && vdom[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        } else {
                            throw new Error('findVdomChild: style matching not supported for mixed target & source types (Object VS String)');
                        }
                        break;
                    default:
                        if (vdom[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vdom      : vdom
            };
        }

        if (vdom.cn) {
            for (; i < len; i++) {
                if (vdom.cn[i]) {
                    subChild = VDom.findVdomChild(vdom.cn[i], opts, i, vdom);

                    if (subChild) {
                        child = {
                            index     : subChild.index,
                            parentNode: subChild.parentNode,
                            vdom      : subChild.vdom
                        };
                        break;
                    }
                }
            }
        }

        return child;
    }

    /**
     * Convenience shortcut for findVdomChild(vdom, {flag: flag});
     * @param {Object} vdom
     * @param {String} flag The flag reference specified on the target vdom child node
     * @returns {Object} vdom
     */
    static getByFlag(vdom, flag) {
        let node = VDom.findVdomChild(vdom, {flag: flag});
        return node && node.vdom;
    }

    /**
     * Get the ids of all child nodes of the given vdom tree
     * @param vdom
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vdom, childIds=[]) {
        let childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VDom.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodes(vdom, index) {
        let columnNodes = [];

        if (vdom.cn) {
            vdom.cn.forEach(row => {
                if (row.cn && row.cn[index]) {
                    columnNodes.push(row.cn[index]);
                }
            });
        }

        return columnNodes;
    }

    /**
     *
     * @param {Object} vdom
     * @param {Number} index
     * @returns {Array}
     */
    static getColumnNodesIds(vdom, index) {
        return VDom.getColumnNodes(vdom, index).map(e => e.id);
    }

    /**
     *
     * @param {Object} vdom
     * @param {String} flag
     * @param {Array} [matchArray]
     * @return {Array} an array of vdom nodes which match the flag
     */
    static getFlags(vdom, flag, matchArray) {
        if (!matchArray) {
            matchArray = [];

            if (vdom.flag === flag) {
                matchArray.push(vdom);
            }
        }

        const childNodes = vdom && vdom.cn || [];

        childNodes.forEach(childNode => {
            if (childNode.flag === flag) {
                matchArray.push(childNode);
            }

            matchArray = VDom.getFlags(childNode, flag, matchArray);
        });

        return matchArray;
    }

    /**
     * Insert a given nodeToInsert after a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertAfterNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, false);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @returns {Boolean}
     */
    static insertBeforeNode(vdom, nodeToInsert, targetNodeId) {
        return VDom.insertNode(vdom, nodeToInsert, targetNodeId, true);
    }

    /**
     * Insert a given nodeToInsert before a targetNode inside a given vdom tree
     * @param {Object} vdom The vdom tree containing the targetNode
     * @param {Object} nodeToInsert The new vdom to insert
     * @param {Object|String} targetNodeId Either a vdom node or a vdom node id
     * @param {Boolean} insertBefore true inserts the new node at the same index, index+1 otherwise
     * @returns {Boolean}
     */
    static insertNode(vdom, nodeToInsert, targetNodeId, insertBefore) {
        if (Neo.isObject(targetNodeId)) {
            targetNodeId = targetNodeId.id;
        }

        let targetNode = VDom.findVdomChild(vdom, {id: targetNodeId}),
            index;

        if (targetNode) {
            index = insertBefore ? targetNode.index : targetNode.index + 1;
            targetNode.parentNode.cn.splice(index, 0, nodeToInsert);
            return true;
        }

        return false;
    }

    /**
     * Search vdom child nodes by id or opts object for a given vdom tree
     * @param {Object} [vdom]
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @returns {Boolean} true in case the node was found & removed
     */
    static removeVdomChild(vdom, opts) {
        let child = VDom.findVdomChild(vdom, opts);

        if (child) {
            child.parentNode.cn.splice(child.index, 1);
            return true;
        }

        return false;
    }

    /**
     * Replaces a child node inside a vdom tree by a given id
     * @param {Object} vdom
     * @param {String} id
     * @param {Object} newChildNode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceVdomChild(vdom, id, newChildNode) {
        let cn  = vdom.cn || [],
            i   = 0,
            len = cn.length,
            childNode;

        if (vdom.id === id) {
            throw new Error('replaceVdomChild: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = cn[i];

            if (childNode.id === id) {
                cn[i] = newChildNode;
                return true;
            }

            if (VDom.replaceVdomChild(childNode, id, newChildNode)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Neo.vdom.Helper will create ids for each vnode, so we need to sync them into the vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {Object} vdom
     */
    static syncVdomIds(vnode, vdom) {
        if (vnode && vdom) {
            let childNodes = vdom.childNodes || vdom.cn,
                cn, i, len;

            if (vnode.id && vnode.id !== vdom.id) {
                vdom.id = vnode.id;
                // console.log('vdom id set to', vnode.id);
            }

            if (childNodes) {
                cn   = childNodes.filter(item => item.removeDom !== true);
                i    = 0;
                len  = cn && cn.length || 0;

                for (; i < len; i++) {
                    if (vnode.childNodes) {
                        VDom.syncVdomIds(vnode.childNodes[i], cn[i]);
                    }
                }
            }
        }
    }
}

Neo.applyClassConfig(VDom);

/* harmony default export */ __webpack_exports__["default"] = (VDom);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/VNode.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/VNode.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.VNode
 * @extends Neo.core.Base
 */
class VNode extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.VNode'
         * @private
         */
        className: 'Neo.util.VNode'
    }}

    /**
     * Search vnode child nodes by id or opts object for a given vdom tree
     * @param {Object} vnode
     * @param {Object|String} opts Either an object containing vdom node attributes or a string based id
     * @param {Number} [index] Internal flag, do not use it
     * @param {Object} [parentNode] Internal flag, do not use it
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Object} vnode
     */
    static findChildVnode(vnode, opts, index, parentNode) {
        index = index || 0;
        opts  = typeof opts !== 'string' ? opts : {id: opts};

        let child      = null,
            attrMatch  = true,
            matchArray = [],
            styleMatch = true,
            i          = 0,
            len        = vnode.childNodes && vnode.childNodes.length,
            optsArray, optsLength, subChild;

        optsArray  = Object.entries(opts);
        optsLength = optsArray.length;

        optsArray.forEach(([key, value]) => {
            if (vnode.hasOwnProperty(key)) {
                switch(key) {
                    case 'attributes':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([attrKey, attrValue]) => {
                                if (!(vnode[key].hasOwnProperty(attrKey) && vnode[key][attrKey] === attrValue)) {
                                    attrMatch = false;
                                }
                            });

                            if (attrMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    case 'className':
                        if (typeof value === 'string' && Neo.isArray(vnode[key])) {
                            if (vnode[key].includes(value)) {
                                matchArray.push(true);
                            }
                        } else if (typeof value === 'string' && typeof vnode[key] === 'string') {
                            if (vnode[key] === value) {
                                matchArray.push(true);
                            }
                        } else if (Neo.isArray(value) && Neo.isArray(vnode[key])) {
                            // todo: either search the vnode array for all keys or compare if the arrays are equal.
                            throw new Error('findChildVnode: cls matching not supported for target & source types of Arrays');
                        }
                        break;
                    case 'style':
                        if (Neo.isObject(value) && Neo.isObject(vnode[key])) {
                            Object.entries(value).forEach(([styleKey, styleValue]) => {
                                if (!(vnode[key].hasOwnProperty(styleKey) && vnode[key][styleKey] === styleValue)) {
                                    styleMatch = false;
                                }
                            });

                            if (styleMatch) {
                                matchArray.push(true);
                            }
                        }
                        break;
                    default:
                        if (vnode[key] === value) {
                            matchArray.push(true);
                        }
                        break;
                }
            }
        });

        if (matchArray.length === optsLength) {
            return {
                index     : index,
                parentNode: parentNode,
                vnode     : vnode
            };
        }

        if (vnode.childNodes) {
            for (; i < len; i++) {
                subChild = VNode.findChildVnode(vnode.childNodes[i], opts, i, vnode);

                if (subChild) {
                    child = {
                        index     : subChild.index,
                        parentNode: subChild.parentNode,
                        vnode     : subChild.vnode
                    };
                    break;
                }
            }
        }

        return child;
    }

    /**
     * Finds a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String|null} id
     * @returns {Object|null} child vnode or null
     */
    static findChildVnodeById(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            return vnode;
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                return childNode
            }

            childNode = VNode.findChildVnodeById(childNode, id);

            if (childNode) {
                return childNode;
            }
        }

        return null;
    }

    /**
     * Get the ids of all child nodes of the given vnode
     * @param vnode
     * @param [childIds=[]]
     * @returns {Array} childIds
     */
    static getChildIds(vnode, childIds=[]) {
        let childNodes = vnode && vnode.childNodes || [];

        childNodes.forEach(childNode => {
            if (childNode.id) {
                childIds.push(childNode.id);
            }

            childIds = VNode.getChildIds(childNode, childIds);
        });

        return childIds;
    }

    /**
     * Replaces a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @param {Object} newChildVnode
     * @returns {Boolean} true in case the node was found and replaced
     */
    static replaceChildVnode(vnode, id, newChildVnode) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('replaceChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes[i] = newChildVnode;
                return true;
            }

            if (VNode.replaceChildVnode(childNode, id, newChildVnode)) {
                return true;
            }
        }

        return false;
    }
}

Neo.applyClassConfig(VNode);

/* harmony default export */ __webpack_exports__["default"] = (VNode);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/App.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/App.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _manager_Instance_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../manager/Instance.mjs */ "./node_modules/neo.mjs/src/manager/Instance.mjs");
/* harmony import */ var _controller_Application_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controller/Application.mjs */ "./node_modules/neo.mjs/src/controller/Application.mjs");
/* harmony import */ var _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/HashHistory.mjs */ "./node_modules/neo.mjs/src/util/HashHistory.mjs");








/**
 * The App worker contains most parts of the framework as well as all apps which get created.
 * See the tutorials for further infos.
 * @class Neo.worker.App
 * @extends Neo.worker.Base
 * @singleton
 */
class App extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.App'
         * @private
         */
        className: 'Neo.worker.App',
        /**
         * @member {String} ntype='app-worker'
         * @private
         */
        ntype: 'app-worker',
        /**
         * @member {Object|null} data=null
         * @private
         */
        data: null,
        /**
         * @member {Number} dataRemotesRegistered=0
         * @private
         */
        dataRemotesRegistered: 0,
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {Number} vdomRemotesRegistered=0
         * @private
         */
        vdomRemotesRegistered: 0,
        /**
         * @member {String} workerId='app'
         * @private
         */
        workerId: 'app',

        /**
         * todo: App needs to know how many singletons have remotes registered here to ensure a correct starting point
         * @member {Number} countDataRemotes=2
         * @private
         */
        countDataRemotes: 2,
        /**
         * todo: App needs to know how many singletons have remotes registered here to ensure a correct starting point
         * @member {Number} countVdomRemotes=1
         * @private
         */
        countVdomRemotes: 1
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;
        me.on('remoteregistered', me.onRemoteRegistered, me);
    }

    /**
     * Every dom event will get forwarded as a worker message from main and ends up here first
     * @param {Object} data useful event properties, differs for different event types. See Neo.main.DomEvents.
     */
    onDomEvent(data) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].fire(data);
    }

    /**
     * Every URL hash-change will create a post message in main and end up here first.
     * @param {Object} data parsed key-value pairs for each hash value
     */
    onHashChange(data) {console.log(data);
        _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(data.hash, data.hashString);
    }

    /**
     * The starting point for apps
     * @param {Object} data
     */
    onLoadApplication(data) {
        let me = this;

        if (data) {
            me.data = data;
            _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.resourcesPath = data.resourcesPath;
        }

        if (
            me.dataRemotesRegistered === me.countDataRemotes &&
            me.vdomRemotesRegistered === me.countVdomRemotes
        ) {
            if (!_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.isExperimental) {
                _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].onStart();

                if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                    _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hashString);
                }
            } else {
                // todo: in case FF still does not support dynamic imports, remove the dynamic import call for FF dev builds

                import(
                    /* webpackIgnore: true */
                    '../../' + me.data.path).then((module) => {
                        _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].onStart();

                        if (_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash) {
                            _util_HashHistory_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].push(_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hash, _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].config.hashString);
                        }
                    }
                );
            }
        }
    }

    /**
     * Each registered remote method will trigger this receiver
     * @param {Object} remote
     */
    onRemoteRegistered(remote) {
        let me = this;

        switch(remote.origin) {
            case 'data':
                me.dataRemotesRegistered++;
                break;
            case 'vdom':
                me.vdomRemotesRegistered++;
                break;
        }

        me.onLoadApplication();
    }
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(App);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(App);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _Message_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Message.mjs */ "./node_modules/neo.mjs/src/worker/Message.mjs");
/* harmony import */ var _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/RemoteMethodAccess.mjs */ "./node_modules/neo.mjs/src/worker/mixins/RemoteMethodAccess.mjs");





/**
 * The abstract base class for the App, Data & VDom worker
 * @class Neo.worker.Base
 * @extends Neo.core.Base
 * @abstract
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.Worker'
         * @private
         */
        className: 'Neo.worker.Worker',
        /**
         * @member {String} ntype='worker'
         * @private
         */
        ntype: 'worker',
        /**
         * @member {String[]|Neo.core.Base[]|null} mixins=[Observable, RemoteMethodAccess]
         */
        mixins: [_core_Observable_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_RemoteMethodAccess_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]],
        /**
         * @member {String|null} workerId=null
         * @private
         */
        workerId: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        config = config || {};

        super(config);

        let me = this;

        me.promises = {};

        self.addEventListener('message', me.onMessage.bind(me), false);

        Neo.workerId      = me.workerId;
        Neo.currentWorker = me;
    }

    /**
     *
     * @param {Object} e
     */
    onMessage(e) {
        let me      = this,
            data    = e.data,
            action  = data.action,
            replyId = data.replyId,
            promise;

        if (!action) {
            throw new Error('Message action is missing: ' + data.id);
        }

        if (action !== 'reply') {
            try {
                this['on' + Neo.capitalize(action)](data);
            } catch(err) {
                console.log('error', data, err, e);

                this.reject(data.id, {
                    error : err.message
                });
            }
        } else if (promise = action === 'reply' && me.promises[replyId]) {
            if (data.reject) {
                promise.reject(data.data);
            } else {
                promise.resolve(data.data);
            }

            delete me.promises[replyId];
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onPing(msg) {
        this.resolve(msg, {
            originMsg: msg
        });
    }

    /**
     *
     * @param {Object} msg
     */
    onRegisterNeoConfig(msg) {
        Neo.config = Neo.config || {};
        Object.assign(Neo.config, msg.data);
    }

    /**
     *
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Promise<any>}
     */
    promiseMessage(dest, opts, transfer) {
        let me = this;

        return new Promise(function(resolve, reject) {
            let message = me.sendMessage(dest, opts, transfer),
                msgId   = message.id;

            me.promises[msgId] = {
                resolve: resolve,
                reject : reject
            };
        });
    }

    /**
     * @param {String} dest app, data, main or vdom (excluding the current worker)
     * @param {Object} opts configs for Neo.worker.Message
     * @param {Array} [transfer] An optional array of Transferable objects to transfer ownership of.
     * If the ownership of an object is transferred, it becomes unusable (neutered) in the context it was sent from
     * and becomes available only to the worker it was sent to.
     * @returns {Neo.worker.Message}
     * @private
     */
    sendMessage(dest, opts, transfer) {
        opts.destination = dest;

        let message = new _Message_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](opts);

        self.postMessage(message, transfer);
        return message;
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/Message.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/Message.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/IdGenerator.mjs */ "./node_modules/neo.mjs/src/core/IdGenerator.mjs");


/**
 * A wrapper for worker post messages sent between the App, Data, VDom worker & the main thread.
 * You can add optional params as needed.
 * @class Neo.worker.Message
 */
class Message {
    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        /**
         * @member {String} action
         */

        /**
         * @member {String} destination='main'
         */

        /**
         * @member {String} id=IdGenerator.getId(Neo.workerId)
         */

        /**
         * @member {String} origin=Neo.workerId
         */

        config.destination = config.destination || 'main';
        config.id          = config.id          || _core_IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(Neo.workerId);
        config.origin      = config.origin      || Neo.workerId;

        Object.assign(this, config);
    }
}

const ns = Neo.ns('Neo.worker', true);
ns['Message'] = Message;



/***/ }),

/***/ "./node_modules/neo.mjs/src/worker/mixins/RemoteMethodAccess.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/mixins/RemoteMethodAccess.mjs ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RemoteMethodAccess; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.worker.mixins.RemoteMethodAccess
 * @extends Neo.core.Base
 */
class RemoteMethodAccess extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.mixins.RemoteMethodAccess'
         * @private
         */
        className: 'Neo.worker.mixins.RemoteMethodAccess',
        /**
         * @member {String} ntype='mixin-remote-method-access'
         * @private
         */
        ntype: 'mixin-remote-method-access',
        /**
         * @member {Boolean} mixin=true
         * @private
         */
        mixin: true
    }}

    /**
     *
     * @param {Object} remote
     * @param method
     * @returns {function(*=, *=): Promise<any>}
     */
    generateRemote(remote, method) {
        let me     = this,
            origin = remote.origin;

        return function(data, buffer) {
            let opts = {
                action         : 'remoteMethod',
                data           : data,
                destination    : origin,
                remoteClassName: remote.className,
                remoteMethod   : method
            };
            return me.promiseMessage(origin, opts, buffer);
        };
    }

    /**
     *
     * @param {Object} remote
     */
    onRegisterRemote(remote) {
        if (remote.destination === Neo.workerId) {
            let me        = this,
                className = remote.className,
                methods   = remote.methods,
                pkg       = Neo.ns(className, true);

            methods.forEach(function(method) {
                if (pkg[method]) {
                    throw new Error('Duplicate remote method definition ' + className + '.' + method);
                }

                pkg[method] = me.generateRemote(remote, method);
            });

            if (Neo.workerId !== 'main') {
                me.fire('remoteregistered', remote);
            }
        }
    }

    /**
     *
     * @param {Object} msg
     */
    onRemoteMethod(msg) {
        let me  = this,
            pkg = Neo.ns(msg.remoteClassName),
            out, method;

        if (!pkg) {
            throw new Error('Invalid remote namespace "' + msg.remoteClassName + '"');
        }

        method = pkg[msg.remoteMethod];

        if (!method) {
            throw new Error('Invalid remote method name "' + msg.remoteMethod + '"');
        }

        if (Array.isArray(msg.data)) {
            out = method.call(pkg, ...msg.data);
        } else {
            out = method.call(pkg, msg.data);
        }

        if (out instanceof Promise) {
            out.then(function(data) {
                me.resolve(msg, data);
            })
            .catch(function(err) {
                me.reject(msg, err);
            });
        } else {
            me.resolve(msg, out);
        }
    }

    /**
     * Gets called when promiseMessage gets rejected
     * @param {Object} msg
     * @param {Object} data
     */
    reject(msg, data) {
        this.sendMessage(msg.origin, {
            action : 'reply',
            data   : data,
            reject : true,
            replyId: msg.id
        });
    }

    /**
     * Gets called when promiseMessage gets resolved
     * @param {Object} msg
     * @param {Object} data
     */
    resolve(msg, data) {
        this.sendMessage(msg.origin, {
            action : 'reply',
            data   : data,
            replyId: msg.id
        });
    }
}

Neo.applyClassConfig(RemoteMethodAccess);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwcy9Db3ZpZC9hcHAubWpzIiwid2VicGFjazovLy8uL2FwcHMvQ292aWQvdmlldy9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9idWlsZFNjcmlwdHMvZW50cnlwb2ludHMvQ292aWQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9EZWZhdWx0Q29uZmlnLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvTmVvLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9GaWx0ZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL1NvcnRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0J1dHRvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9MYWJlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0FwcGxpY2F0aW9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udHJvbGxlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9PYnNlcnZhYmxlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9fZXhwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvQ2FyZC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9GaXQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvRmxleGJveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9IQm94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L1ZCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL21hbmFnZXIvRG9tRXZlbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0ZvY3VzLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9JbnN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvSGVhZGVyQnV0dG9uLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL0hlYWRlclRvb2xiYXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvU3RyaXAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9IYXNoSGlzdG9yeS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvS2V5TmF2aWdhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvT2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9TdHlsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvQXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvTWVzc2FnZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9taXhpbnMvUmVtb3RlTWV0aG9kQWNjZXNzLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxrQkFBa0IscUJBQXFCO1FBQ3ZDO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLGNBQWM7UUFDZCxJQUFJO1FBQ0o7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFxRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtEQUFhO0FBQy9CO0FBQ0EsS0FBSztBQUNMLEU7Ozs7Ozs7Ozs7OztB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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FB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ZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiIvYXBwcy9jb3ZpZC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkNvdmlkXCI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi9cIiArIGNodW5rSWQgKyBcIi5qc1wiKTtcbiBcdFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBjaHVuay5tb2R1bGVzLCBjaHVua0lkcyA9IGNodW5rLmlkcztcbiBcdFx0XHRmb3IodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXSA9IDA7XG4gXHRcdH1cbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gdW5jYXVnaHQgZXJyb3IgaGFuZGxlciBmb3Igd2VicGFjayBydW50aW1lXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7XG4gXHRcdHByb2Nlc3MubmV4dFRpY2soZnVuY3Rpb24oKSB7XG4gXHRcdFx0dGhyb3cgZXJyOyAvLyBjYXRjaCB0aGlzIGVycm9yIGJ5IHVzaW5nIGltcG9ydCgpLmNhdGNoKClcbiBcdFx0fSk7XG4gXHR9O1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2J1aWxkU2NyaXB0cy9lbnRyeXBvaW50cy9Db3ZpZC5tanNcIik7XG4iLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL3ZpZXcvTWFpbkNvbnRhaW5lci5tanMnO1xuXG5OZW8ub25TdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIE5lby5hcHAoe1xuICAgICAgICBhcHBQYXRoIDogJ2FwcHMvY292aWQvJyxcbiAgICAgICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgICAgIG5hbWUgICAgOiAnQ292aWQnXG4gICAgfSk7XG59OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnR9ICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIFRhYkNvbnRhaW5lcn0gZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYi9Db250YWluZXIubWpzJztcbmltcG9ydCBWaWV3cG9ydCAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgQ292aWQudmlldy5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdDb3ZpZC52aWV3Lk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ2ZpdCd9LFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbW9kdWxlOiBUYWJDb250YWluZXIsXG4gICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgIHdpZHRoIDogNTAwLFxuICAgICAgICAgICAgc3R5bGUgOiB7ZmxleDogJ25vbmUnLCBtYXJnaW46ICcyMHB4J30sXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG1vZHVsZTogQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGNscyAgIDogWyduZW8tZXhhbXBsZXMtdGFiLWNvbXBvbmVudCddLFxuICAgICAgICAgICAgICAgIHN0eWxlIDoge3BhZGRpbmc6ICcyMHB4J30sXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFiIDEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB2ZG9tOiB7aW5uZXJIVE1MOiAnV2VsY29tZSB0byB5b3VyIG5ldyBOZW8gQXBwLid9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1wbGF5LWNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUYWIgMidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZkb206IHtpbm5lckhUTUw6ICdIYXZlIGZ1biBjcmVhdGluZyBzb21ldGhpbmcgYXdlc29tZSEnfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCAnLi4vLi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9BcHAubWpzJztcbmltcG9ydCAnLi4vLi4vYXBwcy9Db3ZpZC9hcHAubWpzJzsiLCJjb25zdCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvLmNvbmZpZyA9IE5lby5jb25maWcgfHwge307XG5cbi8qKlxuICogQ29uZmlnIG9iamVjdCBmb3IgdGhlIG5lby5tanMgZnJhbWV3b3JrIHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCB0byBhbGwgd29ya2Vyc1xuICogWW91IGNhbiBjaGFuZ2UgdGhlIGNvbmZpZ3MsIGUuZy4gaW5zaWRlIHRoZSBpbmRleC5odG1sIG9mIHlvdXIgYXBwXG4gKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICogQG5hbWUgY29uZmlnXG4gKiBAdHlwZSBPYmplY3RcbiAqL1xuY29uc3QgRGVmYXVsdENvbmZpZyA9IHtcbiAgICAvKipcbiAgICAgKiB0cnVlIHdpbGwgYXBwbHkgJ25lby1ib2R5JyB0byB0aGUgZG9jdW1lbnQuYm9keSBjbGFzc0xpc3RcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcGx5Qm9keUNsc1xuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB5b3VyIGFwcC5tanMgZmlsZS4gWW91IGNhbiBjcmVhdGUgbXVsdGlwbGUgYXBwcyB0aGVyZSBpZiBuZWVkZWQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5hcHBQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nfG51bGxcbiAgICAgKi9cbiAgICBhcHBQYXRoOiBudWxsLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgZGlyZWN0b3J5XG4gICAgICogQGRlZmF1bHQgJy4vJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5iYXNlUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGJhc2VQYXRoOiAnLi8nLFxuICAgIC8qKlxuICAgICAqIFBhdGggdG8gdGhlIG5lby5tanMgdGhlbWUgY3NzIGZpbGVzXG4gICAgICogU2VlIG1haW4ubWl4aW5zLlN0eWxlc2hlZXQgPT4gY3JlYXRlU3R5bGVTaGVldCgpXG4gICAgICogQGRlZmF1bHQgTmVvLmNvbmZpZy5iYXNlUGF0aCArICdidWlsZC8nICsgTmVvLmNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIFtjb25maWcuY3NzUGF0aF1cbiAgICAgKiBAb3B0aW9uYWxcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGNzc1BhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogVGhlIGN1cnJlbnQgYnVpbGQgPT4gZGlzdCBlbnZpcm9ubWVudC4gVmFsaWQgdmFsdWVzOiAnZGV2ZWxvcG1lbnQnLCAncHJvZHVjdGlvbidcbiAgICAgKiBVc2VkIGZvciBhdXRvbWF0aWNhbGx5IGluY2x1ZGluZyB0aGUgbWF0Y2hpbmcgdGhlbWUgZmlsZXNcbiAgICAgKiBAZGVmYXVsdCAncHJvZHVjdGlvbidcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuZW52aXJvbm1lbnRcbiAgICAgKiBAdHlwZSBTdHJpbmdcbiAgICAgKi9cbiAgICBlbnZpcm9ubWVudDogJ3Byb2R1Y3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgTmVvIGlzIHJ1bm5pbmcgd2l0aG91dCBhbnkgSlMgYnVpbGRzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNFeHBlcmltZW50YWxcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNFeHBlcmltZW50YWw6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgZm9yIHJ1bm5pbmcgdGhlIE5lbyBtYWluIHRocmVhZCBpbnNpZGUgYW4gaWZyYW1lIChTaWVzdGEgQnJvd3NlciBIYXJuZXNzKVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmlzSW5zaWRlU2llc3RhXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGlzSW5zaWRlU2llc3RhOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBVc2VkIGJ5IEludGwuRGF0ZVRpbWVGb3JtYXQsIGZvciBkZXRhaWxzIHRha2UgYSBsb29rIGF0OlxuICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGVUaW1lRm9ybWF0XG4gICAgICogQGRlZmF1bHQgJ2RlZmF1bHQnXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmxvY2FsZVxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGxvY2FsZTogJ2RlZmF1bHQnLFxuICAgIC8qKlxuICAgICAqIEFkZCB0aGVtZXMgeW91IHdhbnQgdG8gdXNlIGhlcmUuIFRoZSBmaXJzdCB0aGVtZSB3aWxsIGdldCBhcHBsaWVkLlxuICAgICAqIElmIGNvbmZpZy51c2VDc3M0ID09PSB0cnVlLCBvdGhlciB0aGVtZSB2YXJpYWJsZXMgd2lsbCBnZXQgaW5jbHVkZWQgYXMgd2VsbFxuICAgICAqIEBkZWZhdWx0IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ11cbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudGhlbWVzXG4gICAgICogQHR5cGUgU3RyaW5nW11cbiAgICAgKi9cbiAgICB0aGVtZXM6IFsnbmVvLXRoZW1lLWxpZ2h0JywgJ25lby10aGVtZS1kYXJrJ10sXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3Igc3RhbmRhbG9uZSBTaWVzdGEgbW9kdWxlIHRlc3RzID0+IHByZXZlbnQgcmVnaXN0ZXJSZW1vdGUgd29ya2VyIG1lc3NhZ2VzXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudW5pdFRlc3RNb2RlXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVuaXRUZXN0TW9kZTogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiBDU1M0IHN0eWxlc2hlZXRzIGFyZSBpbiB1c2UgKGltcG9ydGFudCBmb3Igc3dpdGNoaW5nIHRoZW1lcylcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNzczQ6IHRydWUsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgaW5jbHVkZSB0aGUgc3R5bGVzaGVldFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRm9udEF3ZXNvbWVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRm9udEF3ZXNvbWU6IHRydWUsXG4gICAgLyoqXG4gICAgICogUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZVxufTtcblxuT2JqZWN0LmFzc2lnbihEZWZhdWx0Q29uZmlnLCB7XG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAncmVzb3VyY2VzLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHJlc291cmNlc1BhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3Jlc291cmNlcy8nLFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJhc2UgVVJMIGZvciB3ZWIgd29ya2VyIGVudHJ5IHBvaW50cyAoQXBwLCBEYXRhLCBWZG9tKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLndvcmtlckJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgd29ya2VyQmFzZVBhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3NyYy93b3JrZXIvJ1xufSk7XG5cbmV4cG9ydCB7RGVmYXVsdENvbmZpZyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRGVmYXVsdENvbmZpZyBmcm9tICcuL0RlZmF1bHRDb25maWcubWpzJztcblxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBnZXRTZXRDYWNoZSAgPSBTeW1ib2woJ2dldFNldENhY2hlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgbW9kdWxlIHRvIGVuaGFuY2UgY2xhc3NlcywgY3JlYXRlIGluc3RhbmNlcyBhbmQgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBtb2R1bGUgTmVvXG4gKiBAc2luZ2xldG9uXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNhcGl0YWxpemUgICAgICAgIGFzIGNhcGl0YWxpemVcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmRlY2FtZWwgICAgICAgICAgIGFzIGRlY2FtZWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNEZWZpbmVkICAgICAgICAgYXMgaXNEZWZpbmVkXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ICAgICAgICAgIGFzIGlzT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzU3RyaW5nICAgICAgICAgIGFzIGlzU3RyaW5nXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcbiAqIEB0dXRvcmlhbCAwMV9Db25jZXB0XG4gKi9cbmxldCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvID0gc2VsZi5OZW8gPSBPYmplY3QuYXNzaWduKHtcbiAgICAvKipcbiAgICAgKiBBIG1hcCBjb250YWluaW5nIG50eXBlcyBhcyBrZXkgYW5kIE5lbyBjbGFzc2VzIG9yIHNpbmdsZXRvbnMgYXMgdmFsdWVzXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsbHkgdXNlZCBhdCB0aGUgZW5kIG9mIGVhY2ggY2xhc3MgLyBtb2R1bGUgZGVmaW5pdGlvblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNsYXNzQ29uZmlnOiBmdW5jdGlvbihjbHMpIHtcbiAgICAgICAgbGV0IGJhc2VDZmcgICAgICAgPSBudWxsLFxuICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IG51bGwsXG4gICAgICAgICAgICBjb25maWcgICAgICAgID0ge30sXG4gICAgICAgICAgICBwcm90byAgICAgICAgID0gY2xzLnByb3RvdHlwZSB8fCBjbHMsXG4gICAgICAgICAgICBwcm90b3MgICAgICAgID0gW10sXG4gICAgICAgICAgICBzdGF0aWNDb25maWcgID0ge30sXG4gICAgICAgICAgICBjdG9yO1xuXG4gICAgICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgICAgIGN0b3IgPSBwcm90by5jb25zdHJ1Y3RvcjtcblxuICAgICAgICAgICAgaWYgKGN0b3IuaGFzT3duUHJvcGVydHkoJ2NsYXNzQ29uZmlnQXBwbGllZCcpKSB7XG4gICAgICAgICAgICAgICAgYmFzZUNmZyAgICAgICA9IE5lby5jbG9uZShjdG9yLmNvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYmFzZVN0YXRpY0NmZyA9IE5lby5jbG9uZShjdG9yLnN0YXRpY0NvbmZpZywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb3Rvcy51bnNoaWZ0KHByb3RvKTtcbiAgICAgICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnICAgICAgID0gYmFzZUNmZyAgICAgICA/IGJhc2VDZmcgICAgICAgOiBjb25maWc7XG4gICAgICAgIHN0YXRpY0NvbmZpZyA9IGJhc2VTdGF0aWNDZmcgPyBiYXNlU3RhdGljQ2ZnIDogc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIHByb3Rvcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgY3RvciA9IGVsZW1lbnQuY29uc3RydWN0b3I7XG4gICAgICAgICAgICBsZXQgY2ZnICAgICAgID0gY3Rvci5nZXRDb25maWcgICAgICAgJiYgY3Rvci5nZXRDb25maWcoKSAgICAgICB8fCB7fSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDZmcgPSBjdG9yLmdldFN0YXRpY0NvbmZpZyAmJiBjdG9yLmdldFN0YXRpY0NvbmZpZygpIHx8IHt9LFxuICAgICAgICAgICAgICAgIG1peGlucztcblxuICAgICAgICAgICAgaWYgKGNmZykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNmZykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuc2xpY2UoLTEpID09PSAnXycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjZmdba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZmdba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0dlbmVyYXRlR2V0U2V0KGVsZW1lbnQsIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGFwcGx5IHByb3BlcnRpZXMgd2hpY2ggaGF2ZSBubyBzZXR0ZXJzIGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gICAgICAgICAgICAgICAgICAgIC8vIHRob3NlIHdpbGwgZ2V0IGFwcGxpZWQgb24gY3JlYXRlIChOZW8uY29yZS5CYXNlIC0+IGluaXRDb25maWcpXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFoYXNQcm9wZXJ0eVNldHRlcihlbGVtZW50LCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZSAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHN0YXRpY0NmZyk7XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ250eXBlJykpIHtcbiAgICAgICAgICAgICAgICBOZW8ubnR5cGVNYXBbY2ZnLm50eXBlXSA9IGNmZy5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1peGlucyA9IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgY29uZmlnLm1peGlucyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKHN0YXRpY0NmZyAmJiBzdGF0aWNDZmcub2JzZXJ2YWJsZSkge1xuICAgICAgICAgICAgICAgIG1peGlucy5wdXNoKCdOZW8uY29yZS5PYnNlcnZhYmxlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjZmcuaGFzT3duUHJvcGVydHkoJ21peGlucycpICYmIEFycmF5LmlzQXJyYXkoY2ZnLm1peGlucykgJiYgY2ZnLm1peGlucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goLi4uY2ZnLm1peGlucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtaXhpbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlNaXhpbnMoY3RvciwgbWl4aW5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIGNmZy5taXhpbnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLm1peGlucztcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjb25maWcsIGNmZyk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHN0YXRpY0NvbmZpZywgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihjdG9yLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NDb25maWdBcHBsaWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgIDogTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgaXNDbGFzcyAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgICAgIDogTmVvLmNsb25lKHN0YXRpY0NvbmZpZywgdHJ1ZSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRDb25maWc7XG4gICAgICAgICAgICBkZWxldGUgY3Rvci5nZXRTdGF0aWNDb25maWc7XG5cbiAgICAgICAgICAgIGlmICghY29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlUb0dsb2JhbE5zKGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgY2xhc3MgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZS5cbiAgICAgKiBDYW4gZ2V0IGNhbGxlZCBmb3IgY2xhc3NlcyBhbmQgc2luZ2xldG9uIGluc3RhbmNlc1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcbiAgICAgKi9cbiAgICBhcHBseVRvR2xvYmFsTnM6IGZ1bmN0aW9uKGNscykge1xuICAgICAgICBsZXQgcHJvdG8gPSB0eXBlb2YgY2xzID09PSAnZnVuY3Rpb24nID8gY2xzLnByb3RvdHlwZTogY2xzLFxuICAgICAgICAgICAgY2xhc3NOYW1lLCBuc0FycmF5LCBrZXksIG5zO1xuXG4gICAgICAgIGlmIChwcm90by5jb25zdHJ1Y3Rvci5yZWdpc3RlclRvR2xvYmFsTnMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3RvLmlzQ2xhc3MgPyBwcm90by5jb25maWcuY2xhc3NOYW1lIDogcHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgICAgICBuc0FycmF5ID0gY2xhc3NOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBrZXkgICAgID0gbnNBcnJheS5wb3AoKTtcbiAgICAgICAgICAgIG5zICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XG4gICAgICAgICAgICBuc1trZXldID0gY2xzO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgbWV0aG9kcyBmcm9tIG9uZSBuYW1lc3BhY2UgdG8gYW5vdGhlciBvbmVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIC8vIGFsaWFzZXNcbiAgICAgKiBOZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgICogICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgICAqICAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgICogICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXG4gICAgICogICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXG4gICAgICogICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgICogICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICAgKiAgICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxuICAgICAqICAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcbiAgICAgKiAgICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgICogICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgICAqICAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXG4gICAgICogfSwgdHJ1ZSk7XG4gICAgICpcbiAgICAgKiAvLyBlLmcuIE5lby5jb3JlLlV0aWwuaXNPYmplY3QgPT4gTmVvLmlzT2JqZWN0XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lb3xOZW8uY29yZS5CYXNlfSB0YXJnZXQgVGhlIHRhcmdldCBjbGFzcyBvciBzaW5nbGV0b24gSW5zdGFuY2Ugb3IgTmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBuYW1lc3BhY2UgVGhlIGNsYXNzIGNvbnRhaW5pbmcgdGhlIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbYmluZF0gc2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGJpbmQgbWV0aG9kcyB0byB0aGUgXCJmcm9tXCIgbmFtZXNwYWNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gdGFyZ2V0XG4gICAgICovXG4gICAgYXBwbHlGcm9tTnM6IGZ1bmN0aW9uKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcbiAgICAgICAgbGV0IGZuTmFtZTtcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbGwga2V5cyBvZiBkZWZhdWx0cyBpbnRvIHRhcmdldCwgaW4gY2FzZSB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXlzIHlvdSB3YW50IHRvIGNvcHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhc3NpZ25EZWZhdWx0czogZnVuY3Rpb24odGFyZ2V0LCBkZWZhdWx0cykge1xuICAgICAgICBpZiAodGFyZ2V0ICYmIGRlZmF1bHRzICYmIHR5cGVvZiBkZWZhdWx0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRlZmF1bHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fCp9IG9ialxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2RlZXA9ZmFsc2VdIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBjbG9uZSBuZXN0ZWQgb2JqZWN0cyBhcyB3ZWxsXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbaWdub3JlTmVvSW5zdGFuY2VzPWZhbHNlXSByZXR1cm5zIGV4aXN0aW5nIGluc3RhbmNlcyBpZiBzZXQgdG8gdHJ1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8QXJyYXl8Kn0gdGhlIGNsb25lZCBpbnB1dFxuICAgICAqL1xuICAgIGNsb25lOiBmdW5jdGlvbihvYmosIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcykge1xuICAgICAgICBsZXQgb3V0O1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmoubWFwKHZhbCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh2YWwsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAob2JqLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgb2JqIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZ25vcmVOZW9JbnN0YW5jZXMgPyBvYmogOiB0aGlzLmNsb25lTmVvSW5zdGFuY2Uob2JqKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihvYmouY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG91dCA9IHt9O1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jbG9uZSh2YWx1ZSwgZGVlcCwgaWdub3JlTmVvSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajsgLy8gcmV0dXJuIGFsbCBvdGhlciBkYXRhIHR5cGVzXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgdXNpbmcgdGhlIG9yaWdpbmFsQ29uZmlnIHdpdGhvdXQgdGhlIGlkXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGluc3RhbmNlXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9IHRoZSBjbG9uZWQgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBjbG9uZU5lb0luc3RhbmNlOiBmdW5jdGlvbihpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24ubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmNvbXBvbmVudC5CdXR0b24nIHtcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoe1xuICAgICAqICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkJ1dHRvbicsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGU6IGZ1bmN0aW9uKGNsYXNzTmFtZSwgY29uZmlnKSB7XG4gICAgICAgIGxldCBjbHMsIGluc3RhbmNlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZCAhPT0gY2xhc3NOYW1lLmNvbnN0cnVjdG9yKSB7XG4gICAgICAgICAgICBjbHMgPSBjbGFzc05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjbGFzc05hbWU7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbmZpZy5jbGFzc05hbWUgJiYgIWNvbmZpZy5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXNpbmcgY29uc29sZS5lcnJvciBpbnN0ZWFkIG9mIHRocm93IHRvIHNob3cgdGhlIGNvbmZpZyBvYmplY3RcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2xhc3MgY3JlYXRlZCB3aXRoIG9iamVjdCBjb25maWd1cmF0aW9uIG1pc3NpbmcgY2xhc3NOYW1lIG9yIG1vZHVsZSBwcm9wZXJ0eScsIGNvbmZpZyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IGNvbmZpZy5jbGFzc05hbWUgPyBjb25maWcuY2xhc3NOYW1lIDogY29uZmlnLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhjbGFzc05hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyAnICsgY2xhc3NOYW1lICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbHMgPSBOZW8ubnMoY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlID0gbmV3IGNscyhjb25maWcpO1xuXG4gICAgICAgIGluc3RhbmNlLm9uQ29uc3RydWN0ZWQoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9LFxuXG4gICAgZW1wdHlGbjogZnVuY3Rpb24oKSB7fSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzc05hbWUgc3RyaW5nIGludG8gYSBnbG9iYWwgbmFtZXNwYWNlXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnMoJ05lby5jb21wb25lbnQuQnV0dG9uJywgdHJ1ZSk7XG4gICAgICogLy8gPT5cbiAgICAgKiAvLyBzZWxmLk5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuICAgICAqIC8vIHNlbGYuTmVvLmNvbXBvbmVudCA9IHNlbGYuTmVvLmNvbXBvbmVudCB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQuQnV0dG9uID0gc2VsZi5OZW8uY29tcG9uZW50LkJ1dHRvbiB8fCB7fTtcbiAgICAgKiAvLyByZXR1cm4gc2VsZi5OZW8uY29tcG9uZW50LkJ1dHRvbjtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IG5hbWVzIFRoZSBjbGFzcyBuYW1lIHN0cmluZyBjb250YWluaW5nIGRvdHMgb3IgYW4gQXJyYXkgb2YgdGhlIHN0cmluZyBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2NyZWF0ZV0gU2V0IGNyZWF0ZSB0byB0cnVlIHRvIGNyZWF0ZSBlbXB0eSBvYmplY3RzIGZvciBub24gZXhpc3RpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXSBTZXQgYSBkaWZmZXJlbnQgc3RhcnRpbmcgcG9pbnQgYXMgc2VsZlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHJlZmVyZW5jZSB0byB0aGUgdG9wbGV2ZWwgbmFtZXNwYWNlXG4gICAgICovXG4gICAgbnM6IGZ1bmN0aW9uKG5hbWVzLCBjcmVhdGUsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlOiBmdW5jdGlvbihudHlwZSwgY29uZmlnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25maWcgPSBudHlwZTtcbiAgICAgICAgICAgIGlmICghY29uZmlnLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDbGFzcyBkZWZpbmVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBudHlwZSBwcm9wZXJ0eS4gJyArIGNvbmZpZy5udHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBudHlwZSA9IGNvbmZpZy5udHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjbGFzc05hbWUgPSBOZW8ubnR5cGVNYXBbbnR5cGVdO1xuXG4gICAgICAgIGlmICghY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ250eXBlICcgKyBudHlwZSArICcgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShjbGFzc05hbWUsIGNvbmZpZyk7XG4gICAgfSxcblxuICAgIG9uU3RhcnQ6IE5lby5lbXB0eUZuXG59LCBOZW8pO1xuXG4vKipcbiAqIExpc3Qgb2YgY2xhc3MgcHJvcGVydGllcyB3aGljaCBhcmUgbm90IHN1cHBvc2VkIHRvIGdldCBtaXhlZCBpbnRvIG90aGVyIGNsYXNzZXNcbiAqIEB0eXBlIHtzdHJpbmdbXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IGlnbm9yZU1peGluID0gW1xuICAgICdfbmFtZScsXG4gICAgJ2NsYXNzQ29uZmlnQXBwbGllZCcsXG4gICAgJ2NsYXNzTmFtZScsXG4gICAgJ2NvbnN0cnVjdG9yJyxcbiAgICAnaXNDbGFzcycsXG4gICAgJ21peGluJyxcbiAgICAnbnR5cGUnLFxuICAgICdvYnNlcnZhYmxlJyxcbiAgICAncmVnaXN0ZXJUb0dsb2JhbE5zJ1xuXTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGNsYXNzIG5hbWUgZXhpc3RzIGluc2lkZSB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAqIEBwYXJhbSB7U3RyaW5nfSBjbGFzc05hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZXhpc3RzKGNsYXNzTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiAhIWNsYXNzTmFtZS5zcGxpdCgnLicpLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgIH0sIHNlbGYpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtaXhSZWR1Y2UobWl4aW5DbHMpIHtcbiAgICByZXR1cm4gKHByZXYsIGN1cnJlbnQsIGlkeCwgYXJyKSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2W2N1cnJlbnRdID0gaWR4ICE9PSBhcnIubGVuZ3RoIC0xID8gcHJldltjdXJyZW50XSB8fCB7fSA6IG1peGluQ2xzO1xuICAgIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbWl4aW5Qcm90b1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbWl4aW5Qcm9wZXJ0eShwcm90bywgbWl4aW5Qcm90bykge1xuICAgIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKH5pZ25vcmVNaXhpbi5pbmRleE9mKGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvdG9ba2V5XSAmJiBwcm90b1trZXldLl9mcm9tKSB7XG4gICAgICAgICAgICBpZiAobWl4aW5Qcm90by5jbGFzc05hbWUgPT09IHByb3RvW2tleV0uX2Zyb20pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ01peGluIHNldCBtdWx0aXBsZSB0aW1lcyBvciBhbHJlYWR5IGRlZmluZWQgb24gYSBCYXNlIENsYXNzJywgcHJvdG8uY2xhc3NOYW1lLCBtaXhpblByb3RvLmNsYXNzTmFtZSwga2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgcHJvdG8uY2xhc3NOYW1lICsgJzogTXVsdGlwbGUgbWl4aW5zIGRlZmluaW5nIHNhbWUgcHJvcGVydHkgKCcgK1xuICAgICAgICAgICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lICsgJywgJyArXG4gICAgICAgICAgICAgICAgcHJvdG9ba2V5XS5fZnJvbSArICcpID0+ICcgK1xuICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3RvW2tleV0gPSBtaXhpblByb3RvW2tleV07XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KS5fZnJvbSA9IG1peGluUHJvdG8uY2xhc3NOYW1lO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9ba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcHJvdG9ba2V5XS5fbmFtZSA9IGtleTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gY2xzXG4gKiBAcGFyYW0ge0FycmF5fSBtaXhpbnNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5TWl4aW5zKGNscywgbWl4aW5zKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KG1peGlucykpIHtcbiAgICAgICAgbWl4aW5zID0gW21peGluc107XG4gICAgfVxuXG4gICAgbGV0IGkgICAgICAgICAgICA9IDAsXG4gICAgICAgIGxlbiAgICAgICAgICA9IG1peGlucy5sZW5ndGgsXG4gICAgICAgIG1peGluQ2xhc3NlcyA9IHt9LFxuICAgICAgICBtaXhpbiwgbWl4aW5DbHMsIG1peGluUHJvdG87XG5cbiAgICBmb3IgKDtpIDwgbGVuO2krKykge1xuICAgICAgICBtaXhpbiA9IG1peGluc1tpXTtcblxuICAgICAgICBpZiAobWl4aW4uaXNDbGFzcykge1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluLnByb3RvdHlwZTtcbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW5Qcm90by5jbGFzc05hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFleGlzdHMobWl4aW4pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdHRlbXB0aW5nIHRvIG1peGluIGFuIHVuZGVmaW5lZCBjbGFzczogJyArIG1peGluICsgJywgJyArIGNscy5wcm90b3R5cGUuY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1peGluQ2xzICAgPSBOZW8ubnMobWl4aW4pO1xuICAgICAgICAgICAgbWl4aW5Qcm90byA9IG1peGluQ2xzLnByb3RvdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1peGluUHJvdG8uY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKG1peFJlZHVjZShtaXhpbkNscyksIG1peGluQ2xhc3Nlcyk7XG5cbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMobWl4aW5Qcm90bykuZm9yRWFjaChtaXhpblByb3BlcnR5KGNscy5wcm90b3R5cGUsIG1peGluUHJvdG8pKTtcbiAgICB9XG5cbiAgICBjbHMucHJvdG90eXBlLm1peGlucyA9IG1peGluQ2xhc3NlczsgLy8gdG9kbzogd2Ugc2hvdWxkIGRvIGEgZGVlcCBtZXJnZVxufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGVyZSBpcyBhIHNldCBtZXRob2QgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5IGluc2lkZSB0aGUgcHJvdG90eXBlIGNoYWluXG4gKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IHByb3RvIFRoZSB0b3AgbGV2ZWwgcHJvdG90eXBlIG9mIGEgY2xhc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgdGhlIHByb3BlcnR5IGtleSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5U2V0dGVyKHByb3RvLCBrZXkpIHtcbiAgICBsZXQgZGVzY3JpcHRvcjtcblxuICAgIHdoaWxlIChwcm90by5fX3Byb3RvX18pIHtcbiAgICAgICAgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIGtleSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgZGVzY3JpcHRvci5zZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3RvID0gcHJvdG8uX19wcm90b19fO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGdldCAvIHNldCBtZXRob2RzIGZvciBjbGFzcyBjb25maWdzIGVuZGluZyB3aXRoIGFuIHVuZGVyc2NvcmVcbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG9cbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwcml2YXRlXG4gKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAqL1xuZnVuY3Rpb24gYXV0b0dlbmVyYXRlR2V0U2V0KHByb3RvLCBrZXkpIHtcbiAgICBpZiAoaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkpIHtcbiAgICAgICAgdGhyb3coJ0NvbmZpZyAnICsga2V5ICsgJ18gKCcgKyBwcm90by5jbGFzc05hbWUgKyAnKSBhbHJlYWR5IGhhcyBhIHNldCBtZXRob2QsIHVzZSBiZWZvcmVHZXQsIGJlZm9yZVNldCAmIGFmdGVyU2V0IGluc3RlYWQnKTtcbiAgICB9XG5cbiAgICBpZiAoIU5lb1tnZXRTZXRDYWNoZV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXSA9IHt9O1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXVtrZXldKSB7XG4gICAgICAgIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZUdldCA9ICdiZWZvcmVHZXQnICsgTmVvLmNhcGl0YWxpemUoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgaGFzTmV3S2V5ID0gbWVbY29uZmlnU3ltYm9sXS5oYXNPd25Qcm9wZXJ0eShrZXkpLFxuICAgICAgICAgICAgICAgICAgICBuZXdLZXkgICAgPSBtZVtjb25maWdTeW1ib2xdW2tleV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA9IGhhc05ld0tleSA/IG5ld0tleSA6IG1lWydfJyArIGtleV07XG5cbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbLi4udmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChoYXNOZXdLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVba2V5XSA9IHZhbHVlOyAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIHNldHRlciA9PiBiZWZvcmVTZXQsIGFmdGVyU2V0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbJ18nICsga2V5XTsgLy8gcmV0dXJuIHRoZSB2YWx1ZSBwYXJzZWQgYnkgdGhlIHNldHRlclxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVHZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVHZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlR2V0XSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgICAgICA9IE5lby5jYXBpdGFsaXplKGtleSksXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZXQgID0gJ2FmdGVyU2V0JyAgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSAgPSBtZVtfa2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IHNldCBjYWxsIGhhcyB0byBkZWxldGUgdGhlIG1hdGNoaW5nIHN5bWJvbFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHN0b3JlIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGJlZm9yZVNldCBtb2RpZmljYXRpb24gYXMgd2VsbCxcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBjb3VsZCBnZXQgcHVsbGVkIGJ5IG90aGVyIGJlZm9yZVNldCBtZXRob2RzIG9mIGRpZmZlcmVudCBjb25maWdzXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVTZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0b2RvOiB3ZSBjb3VsZCBjb21wYXJlIG9iamVjdHMgJiBhcnJheXMgZm9yIGVxdWFsaXR5XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZVthZnRlclNldF0gJiYgdHlwZW9mIG1lW2FmdGVyU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVbYWZ0ZXJTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSk7XG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3JlQmFzZSAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEZpbHRlciAgICAgZnJvbSAnLi9GaWx0ZXIubWpzJztcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgU29ydGVyICAgICBmcm9tICcuL1NvcnRlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICBmcm9tICcuLi9jb3JlL1V0aWwubWpzJztcblxuY29uc3QgY291bnRNdXRhdGlvbnMgICA9IFN5bWJvbCgnY291bnRNdXRhdGlvbnMnKSxcbiAgICAgIGlzRmlsdGVyZWQgICAgICAgPSBTeW1ib2woJ2lzRmlsdGVyZWQnKSxcbiAgICAgIGlzU29ydGVkICAgICAgICAgPSBTeW1ib2woJ2lzU29ydGVkJyksXG4gICAgICBzaWxlbnRVcGRhdGVNb2RlID0gU3ltYm9sKCdzaWxlbnRVcGRhdGVNb2RlJyksXG4gICAgICB0b0FkZEFycmF5ICAgICAgID0gU3ltYm9sKCd0b0FkZEFycmF5JyksXG4gICAgICB0b1JlbW92ZUFycmF5ICAgID0gU3ltYm9sKCd0b1JlbW92ZUFycmF5JyksXG4gICAgICB1cGRhdGluZ0luZGV4ICAgID0gU3ltYm9sKCd1cGRhdGluZ0luZGV4Jyk7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29sbGVjdGlvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGZpbHRlcmluZyB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIGFsbEl0ZW1zIHdpbGwgYmVjb21lIGEgbmV3IGNvbGxlY3Rpb24gZm9yIHRoZSB1bmZpbHRlcmVkXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBhbGxJdGVtc1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgYWxsSXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNvcnQgdGhlIGNvbGxlY3Rpb24gaXRlbXMgd2hlbiBhZGRpbmcgLyBpbnNlcnRpbmcgbmV3IG9uZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b1NvcnRcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Tb3J0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVXNlICdwcmltaXRpdmUnIGZvciBkZWZhdWx0IGZpbHRlcnMsIHVzZSAnYWR2YW5jZWQnIGZvciBmaWx0ZXJzIHVzaW5nIGEgZmlsdGVyQnkgbWV0aG9kXG4gICAgICAgICAqIHdoaWNoIG5lZWQgdG8gaXRlcmF0ZSBvdmVyIG90aGVyIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBmaWx0ZXJNb2RlPSdwcmltaXRpdmUnXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJNb2RlOiAncHJpbWl0aXZlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuRmlsdGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gZmlsdGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBpdGVtc189W11cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlKCEpIGtleSBwcm9wZXJ0eSBvZiBlYWNoIGNvbGxlY3Rpb24gaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQSBtYXAgY29udGFpbmluZyB0aGUga2V5ICYgcmVmZXJlbmNlIG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge01hcH0gbWFwXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXBfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgZGlyZWN0aW9ucyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydERpcmVjdGlvbnM9bnVsbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydERpcmVjdGlvbnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBwcm9wZXJ0aWVzIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0UHJvcGVydGllcz1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuU29ydGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNvdXJjZUlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VJZF86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzeW1ib2xDb25maWcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvdW50TXV0YXRpb25zXSAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzU29ydGVkXSAgICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3NpbGVudFVwZGF0ZU1vZGVdOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3RvUmVtb3ZlQXJyYXldICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3VwZGF0aW5nSW5kZXhdICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogMH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmF1dG9Tb3J0ICYmIG1lLl9zb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgbnVsbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLm9uKCdjaGFuZ2UnLCBtZS5vbkZpbHRlckNoYW5nZSwgbWUpO1xuICAgICAgICAgICAgICAgIGZpbHRlci5saXN0ZW5lckFwcGxpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpbHRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5UHJvcGVydHkgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gdmFsdWUubGVuZ3RoLFxuICAgICAgICAgICAgaXRlbTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtID0gdmFsdWVbaV07XG4gICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1ba2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNvcnRlci5vbignY2hhbmdlJywgbWUub25Tb3J0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICYmIG1lLmF1dG9Tb3J0KSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0U291cmNlSWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IFsuLi5zb3VyY2UuX2l0ZW1zXTtcbiAgICAgICAgICAgIG1lLm1hcCAgICA9IG5ldyBNYXAoc291cmNlLm1hcCk7IC8vIGNyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgb3JpZ2luYWwgbWFwXG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyc0NvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBtdXRhdGU6IG1lLm9uTXV0YXRlLFxuICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNvdXJjZS5vbihsaXN0ZW5lcnNDb25maWcpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXJTZXRTb3VyY2VJZCcsIHNvdXJjZSk7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZSA9IE5lby5nZXQob2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS51bihsaXN0ZW5lcnNDb25maWcpOyAvLyB0b2RvOiBjb3JlLk9ic2VydmFibGUudW4gbmVlZHMgdG8gc3VwcG9ydCB0aGlzIHN5bnRheFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZXMgdGhlIHNvcnQgcHJvcGVydHkgJiBkaXJlY3Rpb24gbXVsdGlwbGllciBvZiBlYWNoIHNvcnRlciBpbnNpZGUgMiBhcnJheXMgZm9yIGZhc3RlciBhY2Nlc3Mgd2hlbiBzb3J0aW5nXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhcHBseVNvcnRlckNvbmZpZ3MoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc29ydERpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgbWUuc29ydFByb3BlcnRpZXMgPSBbXTtcblxuICAgICAgICBtZS5zb3J0ZXJzLmZvckVhY2goc29ydGVyID0+IHsvL2NvbnNvbGUubG9nKCdmb3JFYWNoJywgc29ydGVyKTtcbiAgICAgICAgICAgIG1lLnNvcnREaXJlY3Rpb25zLnB1c2goc29ydGVyLmRpcmVjdGlvbk11bHRpcGxpZXIpO1xuICAgICAgICAgICAgbWUuc29ydFByb3BlcnRpZXMucHVzaChzb3J0ZXIucHJvcGVydHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtNYXB8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZSA/IG5ldyBNYXAoKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbnN0YW5jZW9mIFNvcnRlcikpIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0udmFsdWUgICAgPT09IGtleS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShGaWx0ZXIsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoa2V5IGluc3RhbmNlb2YgU29ydGVyKSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiYgb2xkVmFsdWVbaV0uZGlyZWN0aW9uID09PSBrZXkuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvLmNyZWF0ZShTb3J0ZXIsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2FjaGVVcGRhdGUob3B0cykge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVVcGRhdGUnLCBvcHRzLCB0aGlzW3RvQWRkQXJyYXldKTtyZXR1cm47XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBpbmRleCwgdG9BZGRNYXAsIHRvUmVtb3ZlTWFwO1xuXG4gICAgICAgIGlmICghbWVbc2lsZW50VXBkYXRlTW9kZV0pIHtcbiAgICAgICAgICAgIHRvQWRkTWFwICAgID0gbWVbdG9BZGRBcnJheV0gICAubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgdG9SZW1vdmVNYXAgPSBtZVt0b1JlbW92ZUFycmF5XS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG5cbiAgICAgICAgICAgIG9wdHMuYWRkZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvUmVtb3ZlTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb3B0cy5yZW1vdmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPSB0b0FkZE1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA+IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvUmVtb3ZlQXJyYXldLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBpdGVtcyBhbmQgY2xlYXJzIHRoZSBtYXBcbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5faXRlbXMuc3BsaWNlKDAsIG1lLmdldENvdW50KCkpO1xuICAgICAgICBtZS5tYXAuY2xlYXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgZmlsdGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyRmlsdGVycyhyZXN0b3JlT3JpZ2luYWxGaWx0ZXJzKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5maWx0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBjdXJyZW50IHNvcnRlcnMgYW5kIG9wdGlvbmFsbHkgcmVzdG9yZXMgdGhlIG9yaWdpbmFsIG9uZXMgaW4gY2FzZSB0aGV5IGV4aXN0ZWQuXG4gICAgICogV2l0aG91dCByZXN0b3JlSW5pdGlhbFN0YXRlIGFzIHRydWUgdGhpcyB3aWxsIG5vdCBhZmZlY3QgdGhlIGN1cnJlbnQgc29ydGluZyBvZiB0aGlzIGNvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcmVzdG9yZU9yaWdpbmFsU29ydGVycz1mYWxzZV1cbiAgICAgKi9cbiAgICBjbGVhclNvcnRlcnMocmVzdG9yZU9yaWdpbmFsU29ydGVycykge1xuICAgICAgICB0aGlzLnNvcnRlcnMgPSByZXN0b3JlT3JpZ2luYWxTb3J0ZXJzID8gTmVvLmNsb25lKHRoaXMub3JpZ2luYWxDb25maWcuc29ydGVycywgdHJ1ZSwgdHJ1ZSkgOiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V9IFRoZSBjbG9uZWQgY29sbGVjdGlvblxuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgID0gTmVvLmNsb25lKG1lLm9yaWdpbmFsQ29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgIGZpbHRlcnMgPSBtZS5fZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIHNvcnRlcnMgPSBtZS5fc29ydGVycyB8fCBbXTtcblxuICAgICAgICBkZWxldGUgY29uZmlnLmlkO1xuICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuc29ydGVycztcblxuICAgICAgICBpZiAobWUuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbmZpZy5pdGVtcyA9IFsuLi5tZS5faXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnLmZpbHRlcnMgPSBbXTtcbiAgICAgICAgY29uZmlnLnNvcnRlcnMgPSBbXTtcblxuICAgICAgICAvLyB0b2RvOiBmaWx0ZXJzICYgc29ydGVycyBzaG91bGQgcHVzaCB0aGVpciBjdXJyZW50IHN0YXRlIGFuZCBub3QgdGhlIG9yaWdpbmFsIG9uZVxuXG4gICAgICAgIGZpbHRlcnMuZm9yRWFjaChmdW5jdGlvbihmaWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbmZpZy5maWx0ZXJzLnB1c2goZmlsdGVyLm9yaWdpbmFsQ29uZmlnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc29ydGVycy5mb3JFYWNoKGZ1bmN0aW9uKHNvcnRlcikge1xuICAgICAgICAgICAgY29uZmlnLnNvcnRlcnMucHVzaChzb3J0ZXIub3JpZ2luYWxDb25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShCYXNlLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgbWFwICYgaXRlbXMgYXJyYXkgYmVmb3JlIHRoZSBzdXBlciBjYWxsXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuX2l0ZW1zLmxlbmd0aCk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGRvU29ydCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAgc29ydGVycyAgICAgICAgICAgPSBtZS5zb3J0ZXJzLFxuICAgICAgICAgICAgc29ydERpcmVjdGlvbnMgICAgPSBtZS5zb3J0RGlyZWN0aW9ucyxcbiAgICAgICAgICAgIHNvcnRQcm9wZXJ0aWVzICAgID0gbWUuc29ydFByb3BlcnRpZXMsXG4gICAgICAgICAgICBjb3VudFNvcnRlcnMgICAgICA9IHNvcnRQcm9wZXJ0aWVzLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gZmFsc2UsXG4gICAgICAgICAgICBpLCBtYXBwZWRJdGVtcywgb2JqLCBzb3J0ZXIsIHNvcnRQcm9wZXJ0eSwgc29ydFZhbHVlO1xuXG4gICAgICAgIGlmIChjb3VudFNvcnRlcnMgPiAwKSB7XG4gICAgICAgICAgICBzb3J0ZXJzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5LnNvcnRCeSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNTb3J0QnlNZXRob2QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChrZXkudXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoaGFzU29ydEJ5TWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgbWUuX2l0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGVyICAgID0gc29ydGVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRWYWx1ZSA9IHNvcnRlcltzb3J0ZXIuc29ydEJ5ID8gJ3NvcnRCeScgOiAnZGVmYXVsdFNvcnRCeSddKGEsIGIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydFZhbHVlICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaGFzVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydCNTb3J0aW5nX3dpdGhfbWFwXG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge2luZGV4OiBpbmRleH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRlcnNbaV0udXNlVHJhbnNmb3JtVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3NvcnRQcm9wZXJ0aWVzW2ldXSA9IHNvcnRlcnNbaV0udHJhbnNmb3JtVmFsdWUoaXRlbVtzb3J0UHJvcGVydGllc1tpXV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBpdGVtW3NvcnRQcm9wZXJ0aWVzW2ldXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWFwcGVkSXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGNvdW50U29ydGVyczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0UHJvcGVydHkgPSBzb3J0UHJvcGVydGllc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFbc29ydFByb3BlcnR5XSA+IGJbc29ydFByb3BlcnR5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxICogc29ydERpcmVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPCBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0RGlyZWN0aW9uc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IG1hcHBlZEl0ZW1zLm1hcChlbCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbXNbZWwuaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc1NvcnRlZF0gPSBjb3VudFNvcnRlcnMgPiAwO1xuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lcyB0aGUgY29sbGVjdGlvbiBldmVudHMuXG4gICAgICogSWYgeW91IHN0YXJ0ZWQgYW4gdXBkYXRlIHVzaW5nIHRoZSBzdGFydFNpbGVudFVwZGF0ZU1vZGUgZmxhZyxcbiAgICAgKiB5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoaXMgY2FsbC5cbiAgICAgKiBVc2luZyB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSB3aWxsIG5vdCBmaXJlIGEgbXV0YXRpb24gZXZlbnQuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZW5kU2lsZW50VXBkYXRlTW9kZV1cbiAgICAgKiBAc2VlIHtAbGluayBOZW8uY29sbGVjdGlvbi5CYXNlI3N0YXJ0VXBkYXRlIHN0YXJ0VXBkYXRlfVxuICAgICAqL1xuICAgIGVuZFVwZGF0ZShlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPiAwKSB7XG4gICAgICAgICAgICBtZVt1cGRhdGluZ0luZGV4XS0tO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVuZFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgICAgIG1lW3NpbGVudFVwZGF0ZU1vZGVdID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBtZVt0b0FkZEFycmF5XSxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IG1lW3RvUmVtb3ZlQXJyYXldXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWVbdG9BZGRBcnJheV0gICAuc3BsaWNlKDAsIG1lW3RvQWRkQXJyYXldICAgLmxlbmd0aCk7XG4gICAgICAgICAgICBtZVt0b1JlbW92ZUFycmF5XS5zcGxpY2UoMCwgbWVbdG9SZW1vdmVBcnJheV0ubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZmlsdGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgICAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgID0gbWUuYWxsSXRlbXMgJiYgbWUuYWxsSXRlbXMuX2l0ZW1zIHx8IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZywgaXNJbmNsdWRlZCwgaXRlbSwgaiwgdG1wSXRlbXM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudEFsbEZpbHRlcnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRGaWx0ZXJzID09PSAwICYmIG1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICBtZS5jbGVhcigpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IFsuLi5tZS5hbGxJdGVtcy5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwLnNldCguLi5tZS5hbGxJdGVtcy5tYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQmFzZSwge1xuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydHk6IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZCBjb2xsZWN0aW9uJywgbWUuYWxsSXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1vZGUgPT09ICdwcmltaXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1bbWUua2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi50bXBJdGVtc107XG4gICAgICAgICAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcblxuICAgICAgICBtZS5maXJlKCdmaWx0ZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpc09iamVjdFByb3BlcnR5ID0gTmVvLmlzT2JqZWN0KHByb3BlcnR5KSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcblxuICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNMZW5ndGggPSBwcm9wZXJ0aWVzQXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IHByb3BlcnRpZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBpdGVtIGluc2lkZSB0aGUgc3RhcnQtZW5kIHJhbmdlLiBSZXR1cm4gdHJ1ZSBmb3IgYSBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZm4uaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlPXRoaXNdIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPXRoaXMuZ2V0Q291bnQoKV0gVGhlIGVuZCBpbmRleCAodXAgdG8sIGxhc3QgdmFsdWUgZXhjbHVkZWQpXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXG4gICAgICovXG4gICAgZmluZEJ5KGZuLCBzY29wZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgICAgIGkgICAgID0gc3RhcnQgfHwgMCxcbiAgICAgICAgICAgIGxlbiAgID0gZW5kICAgfHwgbWUuZ2V0Q291bnQoKTtcblxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG1lO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbi5jYWxsKHNjb3BlLCBtZS5pdGVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXNzb2NpYXRlZCB0byB0aGUga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm9uZS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaXRlbSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnRNdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2NvdW50TXV0YXRpb25zXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBtYXRjaGluZyBmaWx0ZXIgZm9yIHRoZSBnaXZlbiBwcm9wZXJ0eSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlcbiAgICAgKiBAcmV0dXJuIHtOZW8uY29sbGVjdGlvbi5GaWx0ZXJ8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRGaWx0ZXIocHJvcGVydHkpIHtcbiAgICAgICAgbGV0IGZpbHRlcnMgPSB0aGlzLmZpbHRlcnMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBmaWx0ZXJzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyc1tpXS5wcm9wZXJ0eSA9PT0gcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGtleSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRLZXlBdChpbmRleCkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuX2l0ZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIGl0ZW0gJiYgaXRlbVt0aGlzLmtleVByb3BlcnR5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2hhbGxvdyBjb3B5IG9mIGEgcG9ydGlvbiBvZiB0aGUgaXRlbXMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0XSBaZXJvLWJhc2VkIGluZGV4IGF0IHdoaWNoIHRvIGJlZ2luIGV4dHJhY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmRdIFplcm8tYmFzZWQgaW5kZXggYmVmb3JlIHdoaWNoIHRvIGVuZCBleHRyYWN0aW9uIChleHRyYWN0cyB1cCB0byBidXQgbm90IGluY2x1ZGluZyBlbmQpLlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKiBAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zbGljZVxuICAgICAqL1xuICAgIGdldFJhbmdlKHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFNvdXJjZSBDb2xsZWN0aW9uIGluIGNhc2UgdGhlIHNvdXJjZUNvbGxlY3Rpb25JZCBjb25maWcgd2FzIHNldFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29sbGVjdGlvbi5CYXNlfHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBnZXRTb3VyY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvdXJjZUlkICYmIE5lby5nZXQodGhpcy5zb3VyY2VJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgYm9vbGVhbiBhc3NlcnRpbmcgd2hldGhlciBhIHZhbHVlIGhhcyBiZWVuIGFzc29jaWF0ZWQgdG8gdGhlIGtleSBpbiB0aGUgQ29sbGVjdGlvbiBvciBub3RcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhrZXkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGFuIGl0ZW0gZXhpc3RzIGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hcC5oYXMoaXRlbVt0aGlzLmtleVByb3BlcnR5XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4ga2V5IG9yIGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihVdGlsLmlzT2JqZWN0KGtleSkgPyBrZXkgOiB0aGlzLm1hcC5nZXQoa2V5KSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaW5kZXggZm9yIGEgZ2l2ZW4gaXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZkl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2ZLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKHRoaXMubWFwLmdldChrZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYW4gYXJyYXkgb2YgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtXG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBmaWx0ZXJlZFxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzW2lzRmlsdGVyZWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGlzRmlsdGVyZWRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZmlsdGVycyAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBpc0ZpbHRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbHRlcnNbaV0uaXNGaWx0ZXJlZChpdGVtKSkge1xuICAgICAgICAgICAgICAgIGlzRmlsdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlzRmlsdGVyZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIHNvcnRlZFxuICAgICAqL1xuICAgIGlzU29ydGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tpc1NvcnRlZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGFzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGFzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zW3RoaXMuZ2V0Q291bnQoKSAtMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2Uob3B0cykge1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uTXV0YXRlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob3B0cy5wcmV2ZW50QnViYmxlVXApIHtcbiAgICAgICAgICAgIG1lLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5zcGxpY2UobnVsbCwgb3B0cy5yZW1vdmVkSXRlbXMsIG9wdHMuYWRkZWRJdGVtcyk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uTXV0YXRlJywgbWUuZ2V0Q291bnQoKSwgbWUuaWQsIG9wdHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uU29ydGVyQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5hcHBseVNvcnRlckNvbmZpZ3MoKTtcbiAgICAgICAgdGhpcy5kb1NvcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgZnJvbSB0aGUgaXRlbXMgYXJyYXkgYW5kIHJldHVybnMgdGhpcyBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSByZW1vdmVkIGVsZW1lbnQgZnJvbSB0aGUgY29sbGVjdGlvbjsgdW5kZWZpbmVkIGlmIHRoZSBjb2xsZWN0aW9uIGlzIGVtcHR5LlxuICAgICAqL1xuICAgIHBvcCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UodGhpcy5nZXRDb3VudCgpIC0xLCAxKTtcbiAgICAgICAgcmV0dXJuIG11dGF0aW9uLnJlbW92ZWRJdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGl0ZW1zIHRvIHRoZSBlbmQgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcHVzaChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgZ2l2ZW4ga2V5LCBpdGVtIG9yIEFycmF5IGNvbnRhaW5pbmcga2V5c3xpdGVtc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R8QXJyYXl9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgcmVtb3ZlKGtleSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCBBcnJheS5pc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnNlcyB0aGUgaXRlbXMgYXJyYXkgaW4gcGxhY2UuXG4gICAgICogSW50ZW5kZWQgZm9yIGNvbGxlY3Rpb25zIHdpdGhvdXQgc29ydGVycy5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnJldmVyc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHRoZSBmaXJzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBzaGlmdCgpIHtcbiAgICAgICAgbGV0IG11dGF0aW9uID0gdGhpcy5zcGxpY2UoMCwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5hZGRlZEl0ZW1zWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgRnVuY3Rpb24gdG8gdGVzdCBmb3IgZWFjaCBpdGVtLCB0YWtpbmcgdGhyZWUgcGFyYW1ldGVyczpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gICBjYWxsYmFjay5pdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbSBiZWluZyBwcm9jZXNzZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gIFtjYWxsYmFjay5pbmRleF0gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gICBbY2FsbGJhY2suaXRlbXNdIFRoZSBpdGVtcyBhcnJheSBvZiB0aGUgY29sbGVjdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gVmFsdWUgdG8gdXNlIGFzIFwidGhpc1wiIHdoZW4gZXhlY3V0aW5nIHRoZSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGEgdHJ1dGh5IHZhbHVlIGZvciBhbnkgY29sbGVjdGlvbiBpdGVtLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBzb21lKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNvbWUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBpdGVtcyBmcm9tIGFuZC9vciBhZGRzIGl0ZW1zIHRvIHRoaXMgY29sbGVjdGlvblxuICAgICAqIElmIHRoZSB0b1JlbW92ZUFycmF5IGlzIHVzZWQsIHRoZW4gdGhlIGluZGV4IGlzIG5vdCB1c2VkIGZvciByZW1vdmluZywgdGhlIGVudHJpZXMgYXJlIGZvdW5kIGJ5IGtleSBhbmQgcmVtb3ZlZCBmcm9tIHdoZXJlIHRoZXkgYXJlLlxuICAgICAqIElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHRvQWRkQXJyYXkgaXMgYXBwZW5kZWQgdG8gdGhlIENvbGxlY3Rpb24uXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8bnVsbH0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcnxBcnJheX0gW3JlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5XVxuICAgICAqIEBwYXJhbSB7QXJyYXl8IE9iamVjdH0gW3RvQWRkQXJyYXldXG4gICAgICogQHJldHVybnMge09iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkZGVkSXRlbXMgJiByZW1vdmVkSXRlbXMgYXJyYXlzXG4gICAgICovXG4gICAgc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSwgdG9BZGRBcnJheSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHNvdXJjZSAgICAgICAgICAgICA9IG1lLmdldFNvdXJjZSgpLFxuICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgPSBtZS5faXRlbXMsXG4gICAgICAgICAgICBrZXlQcm9wZXJ0eSAgICAgICAgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIG1hcCAgICAgICAgICAgICAgICA9IG1lLm1hcCxcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlQ291bnRBdEluZGV4ID0gVXRpbC5pc051bWJlcihyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICB0b1JlbW92ZUFycmF5ICAgICAgPSBBcnJheS5pc0FycmF5KHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5KSA/IHJlbW92ZUNvdW50T3JUb1JlbW92ZUFycmF5IDogbnVsbCxcbiAgICAgICAgICAgIGksIGl0ZW0sIGtleSwgbGVuLCB0b0FkZE1hcDtcblxuICAgICAgICBpZiAoIWluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCkge1xuICAgICAgICAgICAgTG9nZ2VyLmVycm9yKG1lLmlkICsgJzogSWYgaW5kZXggaXMgbm90IHBhc3NlZCwgcmVtb3ZlQ291bnRBdEluZGV4IGNhbm5vdCBiZSB1c2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b0FkZEFycmF5ID0gdG9BZGRBcnJheSAmJiAhQXJyYXkuaXNBcnJheSh0b0FkZEFycmF5KSA/IFt0b0FkZEFycmF5XSA6IHRvQWRkQXJyYXk7XG5cbiAgICAgICAgaWYgKHRvUmVtb3ZlQXJyYXkgJiYgKGxlbiA9IHRvUmVtb3ZlQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGlmICh0b0FkZEFycmF5ICYmIHRvQWRkQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRvQWRkTWFwID0gdG9BZGRBcnJheS5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9SZW1vdmVBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXAuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b0FkZE1hcCB8fCAodG9BZGRNYXAgJiYgdG9BZGRNYXAuaW5kZXhPZihrZXkpIDwgMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKGl0ZW1zLnNwbGljZShtZS5pbmRleE9mS2V5KGtleSksIDEpWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZW1vdmVDb3VudEF0SW5kZXggJiYgcmVtb3ZlQ291bnRBdEluZGV4ID4gMCkge1xuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zLnB1c2goLi4uaXRlbXMuc3BsaWNlKGluZGV4LCByZW1vdmVDb3VudEF0SW5kZXgpKTtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgICAgIG1hcC5kZWxldGUoZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG9BZGRBcnJheSAmJiAobGVuID0gdG9BZGRBcnJheS5sZW5ndGgpID4gMCkge1xuICAgICAgICAgICAgZm9yIChpPTA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSB0b0FkZEFycmF5W2ldO1xuICAgICAgICAgICAgICAgIGtleSAgPSBVdGlsLmlzT2JqZWN0KGl0ZW0pID8gaXRlbVtrZXlQcm9wZXJ0eV0gOiBpdGVtO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFtYXAuaGFzKGtleSkgJiYgIW1lLmlzRmlsdGVyZWRJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLnNldChrZXksIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnNwbGljZShVdGlsLmlzTnVtYmVyKGluZGV4KSA/IGluZGV4IDogaXRlbXMubGVuZ3RoLCAwLCAuLi5hZGRlZEl0ZW1zKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZS5hdXRvU29ydCAmJiBtZS5fc29ydGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGlmICghc291cmNlLmdldFNvdXJjZSgpKSB7XG4gICAgICAgICAgICAgICAgc291cmNlLnByZXZlbnRCdWJibGVVcCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbWUucHJldmVudEJ1YmJsZVVwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdXJjZSBzcGxpY2UnLCBzb3VyY2UuaWQsICdhZGRlZDonLCAuLi50b0FkZEFycmF5LCAncmVtb3ZlZDonLCAuLi5yZW1vdmVkSXRlbXMpO1xuICAgICAgICAgICAgICAgIG1lLnN0YXJ0VXBkYXRlKHRydWUpO1xuICAgICAgICAgICAgICAgIHNvdXJjZS5zcGxpY2UobnVsbCwgdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXMsIHRvQWRkQXJyYXkpO1xuICAgICAgICAgICAgICAgIG1lLmVuZFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHNvdXJjZS5wcmV2ZW50QnViYmxlVXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWRkZWRJdGVtcy5sZW5ndGggPiAwIHx8IHJlbW92ZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZVtjb3VudE11dGF0aW9uc10rKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1lW3VwZGF0aW5nSW5kZXhdID09PSAwKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdtdXRhdGUnLCB7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgICAgOiB0b0FkZEFycmF5LFxuICAgICAgICAgICAgICAgIHByZXZlbnRCdWJibGVVcDogbWUucHJldmVudEJ1YmJsZVVwLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtcyAgIDogdG9SZW1vdmVBcnJheSB8fCByZW1vdmVkSXRlbXNcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIW1lW3NpbGVudFVwZGF0ZU1vZGVdKSB7XG4gICAgICAgICAgICBtZS5jYWNoZVVwZGF0ZSh7XG4gICAgICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgICAgIHJlbW92ZWRJdGVtczogcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgZGVsZXRlIG1lLnByZXZlbnRCdWJibGVVcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRlZEl0ZW1zICA6IGFkZGVkSXRlbXMsXG4gICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXZlbnRzIHRoZSBjb2xsZWN0aW9uIGZyb20gZmlyaW5nIGV2ZW50cyB1bnRpbCBlbmRVcGRhdGUgZ2V0cyBjYWxsZWQuXG4gICAgICogSWYgeW91IHN0YXJ0IGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtLFxuICAgICAqIHRoZSBtdXRhdGlvbiBldmVudCB3aWxsIG5vdCBmaXJlIGFmdGVyIHVzaW5nIGVuZFVwZGF0ZSgpXG4gICAgICogKHlvdSBtdXN0IHVzZSB0aGUgZW5kU2lsZW50VXBkYXRlTW9kZSBwYXJhbSBmb3IgdGhlIGVuZFVwZGF0ZSBjYWxsIGluIGNhc2UgeW91IHVzZWRcbiAgICAgKiBzdGFydFNpbGVudFVwZGF0ZU1vZGUgaGVyZSlcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzdGFydFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNlbmRVcGRhdGUgZW5kVXBkYXRlfVxuICAgICAqL1xuICAgIHN0YXJ0VXBkYXRlKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBpZiAoc3RhcnRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgICAgICB0aGlzW3NpbGVudFVwZGF0ZU1vZGVdID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXNbdXBkYXRpbmdJbmRleF0rKztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtb3JlIGVsZW1lbnRzIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGNvbGxlY3Rpb24gYW5kIHJldHVybnMgdGhlIG5ldyBpdGVtcyBjb3VudFxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgdW5zaGlmdChpdGVtKSB7XG4gICAgICAgIHRoaXMuc3BsaWNlKDAsIDAsIGl0ZW0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgbXV0YXRlIGV2ZW50IGZpcmVzIGFmdGVyIGV2ZXJ5IHNwbGljZSBjYWxsIChpbnZva2VkIGJ5IGFsbCBtZXRob2RzIHdoaWNoIGNoYW5nZSB0aGUgY29udGVudCBvZiB0aGUgaXRlbXMgYXJyYXkpLlxuICogQGV2ZW50IG11dGF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gYWRkZWRJdGVtc1xuICogQHBhcmFtIHtCb29sZWFufSBwcmV2ZW50QnViYmxlVXAgcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3RbXX0gcmVtb3ZlZEl0ZW1zXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLkZpbHRlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGhlIG9wZXJhdG9yIGNvbmZpZzo8YnI+XG4gICAgICAgICAqIFsnPT0nLCAnPT09JywgJyE9JywgJyE9PScsICc8JywgJzw9JywgJz4nLCAnPj0nLCAnZXhjbHVkZWQnLCAnaW5jbHVkZWQnLCAnaXNEZWZpbmVkJywgJ2lzVW5kZWZpbmVkJywgJ2xpa2UnXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gb3BlcmF0b3JzXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yczogWyc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdleGNsdWRlZCcsICdpbmNsdWRlZCcsICdpc0RlZmluZWQnLCAnaXNVbmRlZmluZWQnLCAnbGlrZSddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5GaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZmlsdGVyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdmaWx0ZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGluZyBkaXNhYmxlZCB0byB0cnVlIHdpbGwgZXhjbHVkZSB0aGlzIGZpbHRlciBmcm9tIHRoZSBjb2xsZWN0aW9uIGZpbHRlcmluZyBsb2dpY1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIGZpbHRlcmluZyBmdW5jdGlvbiwgaGFzIGEgaGlnaGVyIHByaW9yaXR5IHRoYW4gcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWVcbiAgICAgICAgICogQG1lbWJlciB7RnVuY3Rpb258bnVsbH0gZmlsdGVyQnlfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlckJ5XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgbWVhbnMgbm90IGZpbHRlcmluZyBvdXQgaXRlbXMgaW4gY2FzZSB0aGUgdmFsdWUgaXMgJycsIG51bGwsIFtdIG9yIHt9XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGluY2x1ZGVFbXB0eVZhbHVlcz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGZsYWcgdG8gdHJ1ZSBiZWZvcmUgc3RhcnRpbmcgYnVsayB1cGRhdGVzIChlLmcuIGNoYW5naW5nIHByb3BlcnR5ICYgdmFsdWUpXG4gICAgICAgICAqIHRvIHByZXZlbnQgbXVsdGlwbGUgY2hhbmdlIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1VwZGF0aW5nXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNVcGRhdGluZ186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcGVyYXRvciB0byBmaWx0ZXIgYnkgKHVzZSB0aGUgY29tYmluYXRpb24gb2YgcHJvcGVydHksIG9wZXJhdG9yICYgdmFsdWUpXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczpcbiAgICAgICAgICpcbiAgICAgICAgICogPT0gKG5vdCByZWNvbW1lbmRlZClcbiAgICAgICAgICogPT09XG4gICAgICAgICAqICE9IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqICE9PVxuICAgICAgICAgKiA8XG4gICAgICAgICAqID49XG4gICAgICAgICAqID5cbiAgICAgICAgICogPj1cbiAgICAgICAgICogbGlrZSAoY29sbGVjdGlvblZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xKVxuICAgICAgICAgKiBpbmNsdWRlZCAoZXhwZWN0cyB2YWx1ZSB0byBiZSBhbiBhcnJheSlcbiAgICAgICAgICogZXhjbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3BlcmF0b3I9Jz09PSdcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yXzogJz09PScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBwcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgdG8gdXNlIGZvciB0aGUgZmlsdGVyQnkgbWV0aG9kLCBpbiBjYXNlIGl0IGlzIHByb3ZpZGVkLiBEZWZhdWx0cyB0byB0aGlzIGluc3RhbmNlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gc2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2NvcGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZV86IG51bGxcbiAgICB9fVxuXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICB9XG5cbiAgICBhZnRlclNldElzVXBkYXRpbmcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZnRlclNldE9wZXJhdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0VmFsdWUoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBiZWZvcmVTZXRGaWx0ZXJCeSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdmaWx0ZXJCeSBoYXMgdG8gYmUgYSBmdW5jdGlvbicsIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIG9wZXJhdG9yIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0T3BlcmF0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICovXG4gICAgZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1lLmlzVXBkYXRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogbWUub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZXRpb24gaXRlbSBtYXRjaGVzIHRoaXMgZmlsdGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGN1cnJlbnQgY29sbGVjdGlvbiBpdGVtXG4gICAgICogQHBhcmFtIHtBcnJheX0gZmlsdGVyZWRJdGVtcyBJZiB0aGUgY29sbGVjdGlvbiBmaWx0ZXJNb2RlIGlzIG5vdCBwcmltaXRpdmUgY29udGFpbnMgdGhlIGl0ZW1zIHdoaWNoIHBhc3NlZFxuICAgICAqIHRoZSBwcmV2aW91cyBmaWx0ZXJzLCBvdGhlcndpc2UgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhbGxJdGVtcyBhbGwgY29sbGVjdGlvbiBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzRmlsdGVyZWQoaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuX2Rpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuaW5jbHVkZUVtcHR5VmFsdWVzICYmIChtZS5fdmFsdWUgPT09IG51bGwgfHwgTmVvLmlzRW1wdHkobWUuX3ZhbHVlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5fZmlsdGVyQnkpIHtcbiAgICAgICAgICAgIHJldHVybiBtZS5maWx0ZXJCeS5jYWxsKG1lLnNjb3BlIHx8IG1lLCBpdGVtLCBmaWx0ZXJlZEl0ZW1zLCBhbGxJdGVtcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gIUZpbHRlclttZS5fb3BlcmF0b3JdKGl0ZW1bbWUuX3Byb3BlcnR5XSwgbWUuX3ZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBbJz09J10gKGEsIGIpIHtyZXR1cm4gYSA9PSBiO31cbiAgICBzdGF0aWMgWyc9PT0nXShhLCBiKSB7cmV0dXJuIGEgPT09IGI7fVxuICAgIHN0YXRpYyBbJyE9J10gKGEsIGIpIHtyZXR1cm4gYSAhPSBiO31cbiAgICBzdGF0aWMgWychPT0nXShhLCBiKSB7cmV0dXJuIGEgIT09IGI7fVxuICAgIHN0YXRpYyBbJzwnXSAgKGEsIGIpIHtyZXR1cm4gYSA8IGI7fVxuICAgIHN0YXRpYyBbJzw9J10gKGEsIGIpIHtyZXR1cm4gYSA8PSBiO31cbiAgICBzdGF0aWMgWyc+J10gIChhLCBiKSB7cmV0dXJuIGEgPiBiO31cbiAgICBzdGF0aWMgWyc+PSddIChhLCBiKSB7cmV0dXJuIGEgPj0gYjt9XG5cbiAgICBzdGF0aWMgWydleGNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA8IDA7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnaW5jbHVkZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBiLmluZGV4T2YoYSkgPiAtMTtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpc0RlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnaXNVbmRlZmluZWQnXShhLCBiKSB7XG4gICAgICAgIHJldHVybiBhID09PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIFsnbGlrZSddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhiLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRmlsdGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyOyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb2xsZWN0aW9uLlNvcnRlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBTb3J0ZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbGxlY3Rpb24uU29ydGVyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbGxlY3Rpb24uU29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NvcnRlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGNvbmZpZyB3aGljaCBtYXBwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbk11bHRpcGxpZXI6IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc29ydCBkaXJlY3Rpb24gd2hlbiB1c2luZyBhIHByb3BlcnR5LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbl89J0FTQydcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbl86ICdBU0MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG93bmVyIHV0aWwuQ29sbGVjdGlvbiBuZWVkcyB0byBhcHBseSBhbiBvbkNoYW5nZSBsaXN0ZW5lciBvbmNlXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGxpc3RlbmVyQXBwbGllZD1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdGVuZXJBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9wZXJ0eSB0byBzb3J0IGJ5LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBwcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQcm92aWRlIGEgY3VzdG9tIHNvcnRpbmcgZnVuY3Rpb24sIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5ICYgZGlyZWN0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IHNvcnRCeT1udWxsXG4gICAgICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQ29sbGF0b3JcbiAgICAgICAgICovXG4gICAgICAgIHNvcnRCeTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gdXNlIHRoZSB0cmFuc2Zvcm1WYWx1ZSBtZXRob2QgZm9yIGVhY2ggaXRlbSAodGhlIG1ldGhvZCBjYW4gZ2V0IG92ZXJyaWRkZW4pXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVRyYW5zZm9ybVZhbHVlPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHVzZVRyYW5zZm9ybVZhbHVlOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGRlZmF1bHRTb3J0QnkoYSwgYikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGEgPSBhW21lLnByb3BlcnR5XTtcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xuXG4gICAgICAgIGlmIChtZS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU29ydGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb3JlQmFzZX0gIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgICAgICAgZnJvbSAnLi4vbWFuYWdlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBEb21FdmVudE1hbmFnZXIgICAgICAgIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcbmltcG9ydCBLZXlOYXZpZ2F0aW9uICAgICAgICAgIGZyb20gJy4uL3V0aWwvS2V5TmF2aWdhdGlvbi5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFN0eWxlICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9TdHlsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9VdGlsLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVkRvbVV0aWx9ICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBWTm9kZVV0aWx9IGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb21wb25lbnQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgbW91bnRzIGEgY29tcG9uZW50IGFmdGVyIGJlaW5nIHJlbmRlcmVkLlxuICAgICAgICAgKiBVc2UgdGhpcyBmb3IgdGhlIHRvcCBsZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9Nb3VudD1mYWxzZVxuICAgICAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgcmVuZGVycyBhIGNvbXBvbmVudCBhZnRlciBiZWluZyBjcmVhdGVkIGluc2lkZSB0aGUgaW5pdCBjYWxsLlxuICAgICAgICAgKiBVc2UgdGhpcyBmb3IgdGhlIHRvcCBsZXZlbCBjb21wb25lbnQgb2YgeW91ciBhcHAuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9SZW5kZXI9ZmFsc2VcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbXBvbmVudC5CYXNlI2luaXQgaW5pdH1cbiAgICAgICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvUmVuZGVyOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1hbmFnZXIuRm9jdXMgd2lsbCBjaGFuZ2UgdGhpcyBmbGFnIG9uIGZvY3VzaW4gJiBvdXQgZG9tIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjb250YWluc0ZvY3VzXz1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbnNGb2N1c186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzaWduIGEgY29tcG9uZW50IGNvbnRyb2xsZXIgdG8gdGhpcyBjb21wb25lbnQgKHBhc3MgYW4gaW1wb3J0ZWQgbW9kdWxlIG9yIHRoZSBzdHJpbmcgYmFzZWQgY2xhc3MgbmFtZSlcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fFN0cmluZ30gY29udHJvbGxlcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlZCBjb21wb25lbnRzIHdpbGwgZ2V0IHRoZSBuZW8tZGlzYWJsZWQgY2xzIGFwcGxpZWQgYW5kIHdvbid0IHJlY2VpdmUgRE9NIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBkb21MaXN0ZW5lciBjb25maWdzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGRvbUxpc3RlbmVyc189bnVsbFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBhZnRlclNldFN0YXlPbkhvdmVyKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgKiAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAqICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAqICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAqICAgICAgICAgICAgIG1vdXNlZW50ZXI6IG1lLm9uTW91c2VFbnRlcixcbiAgICAgICAgICogICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgICogICAgICAgICB9LCB7XG4gICAgICAgICAqICAgICAgICAgICAgIG1vdXNlbGVhdmU6IG1lLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICogICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgICogICAgICAgICB9KTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgICogICAgfVxuICAgICAgICAgKn1cbiAgICAgICAgICovXG4gICAgICAgIGRvbUxpc3RlbmVyc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIG9uIG1vdW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhhc0JlZW5Nb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBoYXNCZWVuTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIGZvciB2ZG9tIGNoYW5nZXMgYWZ0ZXIgYSBjb21wb25lbnQgZ290IHVubW91bnRlZFxuICAgICAgICAgKiAoZGVsdGEgdXBkYXRlcyBjYW4gbm8gbG9uZ2VyIGdldCBhcHBsaWVkICYgYSBuZXcgcmVuZGVyIGNhbGwgaXMgcmVxdWlyZWQgYmVmb3JlIHJlLW1vdW50aW5nKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoYXNVbm1vdW50ZWRWZG9tQ2hhbmdlc189ZmFsc2VcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUuaGVpZ2h0LCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IGhlaWdodF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0b3AgbGV2ZWwgaW5uZXJIVE1MIG9mIHRoZSBjb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGh0bWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGh0bWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSBjb21wb25lbnQgaWRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIHdoaWxlIGFuIHVwZGF0ZSByZXF1ZXN0ICh3b3JrZXIgbWVzc2FnZXMpIGlzIGluIHByb2dyZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVmRvbVVwZGF0aW5nPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBpc1Zkb21VcGRhdGluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2luZyB0aGUga2V5cyBjb25maWcgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmVvLnV0aWwuS2V5TmF2aWdhdGlvbi5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgTmVvLnV0aWwuS2V5TmF2aWdhdGlvbiBLZXlOYXZpZ2F0aW9ufVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGtleXNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1heEhlaWdodCwgZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ3xudWxsfSBtYXhIZWlnaHRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1heEhlaWdodF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUubWF4V2lkdGgsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWF4V2lkdGhfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1heFdpZHRoXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBzdHlsZS5taW5IZWlnaHQsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWluSGVpZ2h0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaW5IZWlnaHRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1pbldpZHRoLCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG1pbldpZHRoXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaW5XaWR0aF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91bnRlZF89ZmFsc2VcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgd2hpY2ggd2lsbCBnZXQgc2V0IHRvIHRydWUgaW4gY2FzZSBhbiB1cGRhdGUgY2FsbCBhcnJpdmVzIHdoaWxlIGFub3RoZXIgdXBkYXRlIGlzIHJ1bm5pbmdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNWZG9tVXBkYXRpbmc9ZmFsc2VcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG5lZWRzVmRvbVVwZGF0ZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyByZW5kZXJpbmcgdGhlIHZub2RlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlcmluZ189ZmFsc2VcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIGZvciBidWxrIHVwZGF0ZXMuXG4gICAgICAgICAqIEVuc3VyZSB0byBzZXQgaXQgYmFjayB0byBmYWxzZSBhZnRlcndhcmRzLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaWxlbnRWZG9tVXBkYXRlPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaWxlbnRWZG9tVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9e31cbiAgICAgICAgICovXG4gICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCB0b29sdGlwIGNvbmZpZyBvYmplY3RzXG4gICAgICAgICAqIFNlZSB0b29sdGlwL0Jhc2UubWpzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fE9iamVjdH0gdG9vbHRpcHNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRvb2x0aXBzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQgdm5vZGUgdHJlZS4gQXZhaWxhYmxlIGFmdGVyIHRoZSBjb21wb25lbnQgZ290IHJlbmRlcmVkLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHZub2RlXz1udWxsXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2bm9kZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUud2lkdGgsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gd2lkdGhfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzLiBVc2VmdWwgaW4gY2FzZSBnZXRWZG9tUm9vdCgpIGRvZXMgbm90IHBvaW50IHRvIHRoZSB0b3AgbGV2ZWwgRE9NIG5vZGUuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gd3JhcHBlclN0eWxlXz17fVxuICAgICAgICAgKi9cbiAgICAgICAgd3JhcHBlclN0eWxlXzoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmRvbSBtYXJrdXAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt9XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2ZG9tIHJvb3QgaWYgbmVlZGVkIHRvIGFwcGx5IHRoZSB0b3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcyBvbiBhIGRpZmZlcmVudCBsZXZlbC5cbiAgICAgKiBNYWtlIHN1cmUgdG8gdXNlIGdldFZub2RlUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdmRvbSByb290XG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2bm9kZSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWZG9tUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdm5vZGUgcm9vdFxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoLi4uYXJncykge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyA9IHN1cGVyLm1lcmdlQ29uZmlnKC4uLmFyZ3MpLFxuXG4gICAgICAgICAgICAvLyBpdCBzaG91bGQgYmUgcG9zc2libGUgdG8gc2V0IGN1c3RvbSBjb25maWdzIGZvciB0aGUgdmRvbSBvbiBpbnN0YW5jZSBsZXZlbCxcbiAgICAgICAgICAgIC8vIGhvd2V2ZXIgdGhlcmUgd2lsbCBiZSBhbHJlYWR5IGFkZGVkIGF0dHJpYnV0ZXMgKGUuZy4gaWQpLCBzbyBhIG1lcmdlIHNlZW1zIHRvIGJlIHRoZSBiZXN0IHN0cmF0ZWd5LlxuICAgICAgICAgICAgdmRvbSA9IHsuLi5tZS5fdmRvbSB8fCB7fSwgLi4uY29uZmlnLnZkb20gfHwge319O1xuXG4gICAgICAgIC8vIGF2b2lkIGFueSBpbnRlcmZlcmVuY2Ugb24gcHJvdG90eXBlIGxldmVsXG4gICAgICAgIC8vIGRvZXMgbm90IGNsb25lIGV4aXN0aW5nIE5lbyBpbnN0YW5jZXNcbiAgICAgICAgbWUuX3Zkb20gICAgICAgID0gTmVvLmNsb25lKHZkb20sIHRydWUsIHRydWUpO1xuICAgICAgICBtZS5jbHMgICAgICAgICAgPSBjb25maWcuY2xzO1xuICAgICAgICBtZS5fc3R5bGUgICAgICAgPSBjb25maWcuc3R5bGU7XG4gICAgICAgIG1lLndyYXBwZXJTdHlsZSA9IE5lby5jbG9uZShjb25maWcud3JhcHBlclN0eWxlLCBmYWxzZSk7XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5jbHM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuc3R5bGU7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX3Zkb207XG4gICAgICAgIGRlbGV0ZSBjb25maWcudmRvbTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy53cmFwcGVyU3R5bGU7XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmZpcmUoJ2NvbnN0cnVjdGVkJywge2lkOiBtZS5pZH0pOyAvLyB0ZXN0aW5nXG5cbiAgICAgICAgaWYgKG1lLmtleXMpIHtcbiAgICAgICAgICAgIG1lLmtleXMucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ1NTIHNlbGVjdG9ycyB0byBhcHBseSB0byB0aGUgdG9wIGxldmVsIG5vZGUgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNvbXBvbmVudCddXG4gICAgICovXG4gICAgZ2V0IGNscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NscyA/IE5lby5jbG9uZSh0aGlzLl9jbHMpIDogWyduZW8tY29tcG9uZW50J107XG4gICAgfVxuICAgIHNldCBjbHModmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IHZhbHVlIDogW107XG5cbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIG9sZENscztcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgb2xkQ2xzID0gTmVvLmNsb25lKG1lLl9jbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuX2NscyA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh2ZG9tUm9vdCkge1xuICAgICAgICAgICAgdmRvbVJvb3QuY2xzID0gWy4uLnZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLl92ZG9tID0gdmRvbTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBtZS51cGRhdGVDbHModmFsdWUsIG9sZENscyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBjb21wb25lbnQgYmFzZWQgbGlzdGVuZXJzXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBsaXN0ZW5lcnM9e31cbiAgICAgKi9cbiAgICBnZXQgbGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuICAgIH1cbiAgICBzZXQgbGlzdGVuZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCByZW5kZXIoKSBtZXRob2Qgd2FzIGNhbGxlZC4gQWxzbyBmaXJlcyB0aGUgcmVuZGVyZWQgZXZlbnQuXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyZWQ9ZmFsc2VcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGdldCByZW5kZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICBzZXQgcmVuZGVyZWQodmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5fcmVuZGVyZWQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3JlbmRlcmVkJywgbWUuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXNcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXt9XG4gICAgICovXG4gICAgZ2V0IHN0eWxlKCkge1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIFwiY2xvbmVcIiB0aGUgb2JqZWN0LCBvdGhlcndpc2UgY2hhbmdlcyB3aWxsIGdldCBhcHBsaWVkIGRpcmVjdGx5IGFuZCB0aGVyZSBhcmUgbm8gZGVsdGFzXG4gICAgICAgIC8vIHRoaXMgb25seSBhZmZlY3RzIG5vbiB2ZG9tIHJlbGF0ZWQgc3R5bGUgdG8gRE9NIGRlbHRhc1xuICAgICAgICByZXR1cm4gTmVvLmNsb25lKHRoaXMuX3N0eWxlKTtcbiAgICB9XG4gICAgc2V0IHN0eWxlKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCksXG4gICAgICAgICAgICBvbGRTdHlsZTtcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgb2xkU3R5bGUgPSBtZS5fc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5fc3R5bGUgPSB2YWx1ZTtcblxuICAgICAgICAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIGlmICghdmRvbVJvb3Quc3R5bGUpIHtcbiAgICAgICAgICAgIHZkb21Sb290LnN0eWxlID0ge307XG4gICAgICAgIH1cblxuICAgICAgICB2ZG9tUm9vdC5zdHlsZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBtZS51cGRhdGVTdHlsZSh2YWx1ZSwgb2xkU3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNldHRlciB3aWxsIGhhbmRsZSB2ZG9tIHVwZGF0ZXMgYXV0b21hdGljYWxseVxuICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbT10aGlzLl92ZG9tXG4gICAgICovXG4gICAgZ2V0IHZkb20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZG9tO1xuICAgIH1cbiAgICBzZXQgdmRvbSh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwICAgICAgPSBOZW8uYXBwc1ttZS5hcHBOYW1lXSxcbiAgICAgICAgICAgIHZkb20gICAgID0gdmFsdWUsXG4gICAgICAgICAgICBjbHMgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIGhlaWdodCAgID0gbWUuaGVpZ2h0LFxuICAgICAgICAgICAgc3R5bGUgICAgPSBtZS5zdHlsZSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIHdpZHRoICAgID0gbWUud2lkdGgsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmICh2ZG9tUm9vdCkge1xuICAgICAgICAgICAgaWYgKGNscykge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNscyA9IGNscztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmRvbVJvb3Qud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogc3RyaW5nIGJhc2VkIHN0eWxlc1xuICAgICAgICAgICAgICAgIHZkb21Sb290LnN0eWxlID0gT2JqZWN0LmFzc2lnbih2ZG9tUm9vdC5zdHlsZSB8fCB7fSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIGtlZXAgdGhlIHZkb20gdHJlZSBzdGFibGUgdG8gZW5zdXJlIHRoYXQgY29udGFpbmVycyBkbyBub3QgbG9zZSB0aGUgcmVmZXJlbmNlcyB0byB0aGVpclxuICAgICAgICAvLyBjaGlsZCB2ZG9tIHRyZWVzLiBUaGUgaWYgY2FzZSBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGluIGNhc2UgaXQgZG9lcywga2VlcGluZyB0aGUgcmVmZXJlbmNlIGFuZCBtZXJnaW5nXG4gICAgICAgIC8vIHRoZSBjb250ZW50IG92ZXIgc2VlbXMgdG8gYmUgdGhlIGJlc3Qgc3RyYXRlZ3lcbiAgICAgICAgaWYgKG1lLl92ZG9tICE9PSB2ZG9tKSB7XG4gICAgICAgICAgICBMb2dnZXIud2FybigndmRvbSBnb3QgcmVwbGFjZWQgZm9yOiAnICsgbWUuaWQgKyAnLiBDb3B5aW5nIHRoZSBjb250ZW50IGludG8gdGhlIHJlZmVyZW5jZSBob2xkZXIgb2JqZWN0Jyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lLl92ZG9tKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLl92ZG9tW2tleV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZS5fdmRvbSwgdmRvbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLnNpbGVudFZkb21VcGRhdGUpIHtcbiAgICAgICAgICAgIGlmICghbWUubW91bnRlZCAmJiBhcHAgJiYgYXBwLnJlbmRlcmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBhcHAub24oJ3JlbmRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwLnVuKCdyZW5kZXInLCBsaXN0ZW5lcklkKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVZkb20obWUudmRvbSwgbWUudm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVWZG9tKHZkb20sIG1lLnZub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSAhbWUubW91bnRlZCAmJiBtZS5oYXNCZWVuTW91bnRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVpdGhlciBhIHN0cmluZyBsaWtlICdjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOydcbiAgICAgKiBvciBhbiBvYmplY3QgY29udGFpbmluZyBzdHlsZSBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGFsbCBzdHlsZXMgb2YgdGhpcy5lbFxuICAgICAqL1xuICAgIGFkZFN0eWxlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFV0aWwuY3JlYXRlU3R5bGVPYmplY3QodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogYWRkIGEgY2hlY2sgaWYgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3R5bGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRpc2FibGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldERpc2FibGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1kaXNhYmxlZCcpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIHRoZSBkb21MaXN0ZW5lcnMgaW5zaWRlIHRoZSBOZW8ubWFuYWdlci5Eb21FdmVudFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0RG9tTGlzdGVuZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBEb21FdmVudE1hbmFnZXIudXBkYXRlRG9tTGlzdGVuZXJzKHRoaXMsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIHx8ICghdmFsdWUgJiYgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50SWRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRJZHModGhpcyksXG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBwYXJlbnRJZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcmVudDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IE5lby5nZXRDb21wb25lbnQocGFyZW50SWRzW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Ll9oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyA9IHZhbHVlOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoZWlnaHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEhlaWdodCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWZG9tUm9vdEtleSgnaGVpZ2h0JywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaHRtbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEh0bWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ2h0bWwnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdpZCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heEhlaWdodCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0TWF4SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdtYXhIZWlnaHQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhXaWR0aCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0TWF4V2lkdGgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21heFdpZHRoJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWluSGVpZ2h0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNaW5IZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21pbkhlaWdodCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1pbldpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNaW5XaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWZG9tUm9vdEtleSgnbWluV2lkdGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBtZS5oYXNCZWVuTW91bnRlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgfHwgKCF2YWx1ZSAmJiBvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZElkcyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0Q2hpbGRJZHMobWUudm5vZGUpLFxuICAgICAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICAgICA9IGNoaWxkSWRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjaGlsZDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gTmVvLmdldENvbXBvbmVudChjaGlsZElkc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubW91bnRlZCA9IHZhbHVlOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5oYXNCZWVuTW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChtZS5kb21MaXN0ZW5lcnMgJiYgbWUuZG9tTGlzdGVuZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiB0aGUgbWFpbiB0aHJlYWQgcmVwbHkgb2YgbW91bnQgYXJyaXZlcyBhZnRlciBwdXNoaW5nIHRoZSB0YXNrIGludG8gdGhlIHF1ZXVlIHdoaWNoIGRvZXMgbm90IGVuc3VyZSB0aGUgZG9tIGlzIG1vdW50ZWRcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgRG9tRXZlbnRNYW5hZ2VyLm1vdW50RG9tTGlzdGVuZXJzKG1lKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ21vdW50ZWQnLCBtZS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRvb2x0aXBzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFRvb2x0aXBzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChOZW8ubnMoJ05lby50b29sdGlwLkJhc2UnKSkge1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVRvb2x0aXBzKHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgICAgICAnLi4vdG9vbHRpcC9CYXNlLm1qcycpLnRoZW4oKG1vZHVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlVG9vbHRpcHModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdm5vZGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0Vm5vZGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5zeW5jVm5vZGVUcmVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VWZG9tUm9vdEtleSgnd2lkdGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB3cmFwcGVyU3R5bGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFdyYXBwZXJTdHlsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmICFOZW8uaXNFbXB0eSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLnN0eWxlID0gdmRvbS5zdHlsZSB8fCB7fTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odmRvbS5zdHlsZSwgdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy52ZG9tICA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIGNvbnRyb2xsZXIgY29uZmlnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRDb250cm9sbGVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBOZW8uZ2V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBjb250cm9sbGVyIGNvbmZpZyBnZXRzIGNoYW5nZWQuIENyZWF0ZXMgYSBDb21wb25lbnRDb250cm9sbGVyIGluc3RhbmNlIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldENvbnRyb2xsZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZSBpbnN0YW5jZW9mIE5lby5jb250cm9sbGVyLkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgcHJvdmlkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgICAgICB2YWx1ZS52aWV3ID0gbWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCh2YWx1ZS5wcm90b3R5cGUgJiYgdmFsdWUucHJvdG90eXBlLmNvbnN0cnVjdG9yLmlzQ2xhc3MpfHwgVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jcmVhdGUodmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldzogbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52aWV3ID0gbWU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8ubnR5cGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgZG9tTGlzdGVuZXJzIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREb21MaXN0ZW5lcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUga2V5cyBjb25maWcgZ2V0cyBjaGFuZ2VkLiBDcmVhdGVzIGEgS2V5TmF2aWdhdGlvbiBpbnN0YW5jZSBpZiBuZWVkZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRLZXlzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgS2V5TmF2aWdhdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIHVzZSB0aGUgcHJvdmlkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLmNyZWF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9ICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5jcmVhdGUoS2V5TmF2aWdhdGlvbiwge1xuICAgICAgICAgICAgICAgICAgICBrZXlzOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW5nZXMgdGhlIHZhbHVlIG9mIGEgdmRvbSBvYmplY3QgYXR0cmlidXRlIG9yIHJlbW92ZXMgaXQgaW4gY2FzZSBpdCBoYXMgbm8gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtBcnJheXxOdW1iZXJ8T2JqZWN0fFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGNoYW5nZVZkb21Sb290S2V5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBtZS5nZXRWZG9tUm9vdCgpW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5nZXRWZG9tUm9vdCgpW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSB0b29sdGlwIGluc3RhbmNlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY3JlYXRlVG9vbHRpcHModmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRvb2x0aXBzID0gW10sXG4gICAgICAgICAgICB0aXA7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG86IGNoZWNrIGZvciBleGlzdGluZyB0b29sdGlwc1xuXG4gICAgICAgICAgICB0aXAgPSBOZW8uY3JlYXRlKCdOZW8udG9vbHRpcC5CYXNlJywge1xuICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudElkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAuLi5pdGVtXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdG9vbHRpcHMucHVzaCh0aXApO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5fdG9vbHRpcHMgPSB0b29sdGlwczsgLy8gc2lsZW50IHVwZGF0ZVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSB0aGUgQ29tcG9uZW50TWFuYWdlclxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3VwZGF0ZVBhcmVudFZkb209ZmFsc2VdIHRydWUgdG8gcmVtb3ZlIHRoZSBjb21wb25lbnQgZnJvbSB0aGUgcGFyZW50IHZkb20gPT4gcmVhbCBkb21cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdIHRydWUgdG8gdXBkYXRlIHRoZSB2ZG9tIHNpbGVudGx5ICh1c2VmdWwgZm9yIGRlc3Ryb3lpbmcgbXVsdGlwbGUgY2hpbGQgaXRlbXMgaW4gYSByb3cpXG4gICAgICogdG9kbzogdW5yZWdpc3RlciBldmVudHNcbiAgICAgKi9cbiAgICBkZXN0cm95KHVwZGF0ZVBhcmVudFZkb209ZmFsc2UsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcGFyZW50LCBwYXJlbnRWZG9tO1xuXG4gICAgICAgIGlmICh1cGRhdGVQYXJlbnRWZG9tICYmIG1lLnBhcmVudElkKSB7XG4gICAgICAgICAgICBwYXJlbnQgICAgID0gTmVvLmdldENvbXBvbmVudChtZS5wYXJlbnRJZCk7XG4gICAgICAgICAgICBwYXJlbnRWZG9tID0gcGFyZW50LnZkb207XG5cbiAgICAgICAgICAgIFZEb21VdGlsLnJlbW92ZVZkb21DaGlsZChwYXJlbnRWZG9tLCBtZS5pZCk7XG4gICAgICAgICAgICBwYXJlbnRbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSBwYXJlbnRWZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci51bnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCBmb3IgTmVvLm1hbmFnZXIuQ29tcG9uZW50LmRvd25cbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSBUaGUgbWF0Y2hpbmcgaW5zdGFuY2Ugb3IgbnVsbFxuICAgICAqL1xuICAgIGRvd24oY29uZmlnKSB7XG4gICAgICAgIHJldHVybiBDb21wb25lbnRNYW5hZ2VyLmRvd24odGhpcy5pZCwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBmb2N1cygpIG9uIHRoZSB0b3AgbGV2ZWwgRE9NIG5vZGUgb2YgdGhpcyBjb21wb25lbnQgb3Igb24gYSBnaXZlbiBub2RlIHZpYSBpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgZm9jdXMoaWQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyByZW1vdGUgbWV0aG9kIGFjY2Vzc1xuICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuZm9jdXMoe1xuICAgICAgICAgICAgaWQ6IGlkIHx8IG1lLmlkXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9jdXMgcmVjZWl2ZWQ6ICcgKyBpZCB8fCBtZS5pZCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYXR0ZW1wdGluZyB0byByZWNlaXZlIGZvY3VzIGZvciBjb21wb25lbnQnLCBlcnIsIG1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGlzLmNvbnRyb2xsZXIgb3IgdGhlIGNsb3Nlc3QgcGFyZW50IGNvbnRyb2xsZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW250eXBlXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udHJvbGxlci5CYXNlfG51bGx9XG4gICAgICovXG4gICAgZ2V0Q29udHJvbGxlcihudHlwZSkge1xuICAgICAgICBsZXQgY29udHJvbGxlciA9IHRoaXMuY29udHJvbGxlcixcbiAgICAgICAgICAgIGksIGxlbiwgcGFyZW50cztcblxuICAgICAgICBpZiAoY29udHJvbGxlciAmJiAoIW50eXBlIHx8IG50eXBlID09PSBjb250cm9sbGVyLm50eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgICAgIH1cblxuICAgICAgICBwYXJlbnRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRzKHRoaXMpO1xuICAgICAgICBpICAgICAgID0gMDtcbiAgICAgICAgbGVuICAgICA9IHBhcmVudHMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzW2ldLmNvbnRyb2xsZXIgJiYgKCFudHlwZSB8fCBudHlwZSA9PT0gcGFyZW50c1tpXS5jb250cm9sbGVyLm50eXBlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnRzW2ldLmNvbnRyb2xsZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdmRvbSBjaGlsZCBub2RlcyBieSBpZCBmb3IgYSBnaXZlbiB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb21dXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRWZG9tQ2hpbGQoaWQsIHZkb20pIHtcbiAgICAgICAgdmRvbSA9IHZkb20gfHwgdGhpcy52ZG9tO1xuICAgICAgICBsZXQgY2hpbGQgPSBudWxsLFxuICAgICAgICAgICAgaSAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgPSB2ZG9tLmNuICYmIHZkb20uY24ubGVuZ3RoLFxuICAgICAgICAgICAgc3ViQ2hpbGQ7XG5cbiAgICAgICAgaWYgKHZkb20uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSB0aGlzLmdldFZkb21DaGlsZChpZCwgdmRvbS5jbltpXSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gc3ViQ2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYW4gZ2V0IGNhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50IGdvdCByZW5kZXJlZC4gU2VlIHRoZSBhdXRvTW91bnQgY29uZmlnIGFzIHdlbGwuXG4gICAgICovXG4gICAgbW91bnQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZCwgY2hpbGRJZHMsIGksIGxlbjtcblxuICAgICAgICBpZiAoIW1lLnZub2RlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCB2bm9kZSBtdXN0IGJlIGdlbmVyYXRlZCBiZWZvcmUgbW91bnRpbmcsIHVzZSBDb21wb25lbnQucmVuZGVyKCknKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIGNhc2UgdGhlIGNvbXBvbmVudCB3YXMgYWxyZWFkeSBtb3VudGVkLCBnb3QgdW5tb3VudGVkIGFuZCByZWNlaXZlZCB2ZG9tIGNoYW5nZXMgYWZ0ZXJ3YXJkcyxcbiAgICAgICAgLy8gYSBuZXcgcmVuZGVyKCkgY2FsbCBpcyBtYW5kYXRvcnkgc2luY2UgZGVsdGEgdXBkYXRlcyBjb3VsZCBub3QgZ2V0IGFwcGxpZWQuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gY2xlYXIgdGhlIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzIHN0YXRlIGZvciBhbGwgY2hpbGQgY29tcG9uZW50c1xuICAgICAgICBpZiAobWUuaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMpIHtcbiAgICAgICAgICAgIC8vIHRvZG86IHRoZSBoYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyBmbGFnIGNoYW5nZXMgc2hvdWxkIGhhcHBlbiBvbiByZW5kZXJcbiAgICAgICAgICAgIG1lLmhhc1VubW91bnRlZFZkb21DaGFuZ2VzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNoaWxkSWRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZElkcyhtZS52bm9kZSk7XG5cbiAgICAgICAgICAgIGNoaWxkSWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuX2hhc1VubW91bnRlZFZkb21DaGFuZ2VzID0gZmFsc2U7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGVuZCB0b2RvXG5cbiAgICAgICAgICAgIG1lLnJlbmRlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdtb3VudCcsIG1lLnBhcmVudElkLCBtZS5pZCk7XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgOiAnbW91bnREb20nLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBodG1sICAgICAgIDogbWUudm5vZGUub3V0ZXJIVE1MLFxuICAgICAgICAgICAgICAgIHBhcmVudElkICAgOiBtZS5wYXJlbnRJZCxcbiAgICAgICAgICAgICAgICBwYXJlbnRJbmRleDogbWUucGFyZW50SW5kZXhcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYXR0ZW1wdGluZyB0byBtb3VudCBjb21wb25lbnQnLCBlcnIsIG1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJ5IG1hbmFnZXIuRm9jdXNcbiAgICAgKiBAbmFtZSBvbkZvY3VzRW50ZXJcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYnkgbWFuYWdlci5Gb2N1c1xuICAgICAqIEBuYW1lIG9uRm9jdXNMZWF2ZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBieSBtYW5hZ2VyLkZvY3VzXG4gICAgICogQG5hbWUgb25Gb2N1c01vdmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLm5ld1BhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5vbGRQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCBmcm9tIHRoZSByZW5kZXIoKSBwcm9taXNlIHN1Y2Nlc3MgaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBhdXRvTW91bnQgTW91bnQgdGhlIERPTSBhZnRlciB0aGUgdm5vZGUgZ290IGNyZWF0ZWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uUmVuZGVyKGRhdGEsIGF1dG9Nb3VudCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcCA9IE5lby5hcHBzW21lLmFwcE5hbWVdO1xuXG4gICAgICAgIG1lLnJlbmRlcmluZyA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghYXBwLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBhcHAucmVuZGVyaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBhcHAucmVuZGVyZWQgID0gdHJ1ZTtcbiAgICAgICAgICAgIGFwcC5maXJlKCdyZW5kZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZub2RlID0gZGF0YTtcblxuICAgICAgICBsZXQgY2hpbGRJZHMgID0gQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZElkcyhkYXRhKSxcbiAgICAgICAgICAgIGkgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgPSBjaGlsZElkcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZCA9IE5lby5nZXRDb21wb25lbnQoY2hpbGRJZHNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZW5kZXJlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5fcmVuZGVyZWQgPSB0cnVlOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIG1lLmZpcmUoJ3JlbmRlcmVkJywgbWUuaWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJlZDogJyArIG1lLmFwcE5hbWUgKyAnICcgKyBtZS5pZCwgbWUpO1xuXG4gICAgICAgIGlmIChhdXRvTW91bnQpIHtcbiAgICAgICAgICAgIG1lLm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvbWlzZSBiYXNlZCB2ZG9tIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbdmRvbT10aGlzLnZkb21dXG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gW3Zub2RlPSB0aGlzLnZub2RlXVxuICAgICAqL1xuICAgIHByb21pc2VWZG9tVXBkYXRlKHZkb209dGhpcy52ZG9tLCB2bm9kZT10aGlzLnZub2RlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gdG9kbzogdXBkYXRlVmRvbSgpIHNob3VsZCBoYW5kbGUgdGhpc1xuICAgICAgICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8ga2VlcCB0aGUgdmRvbSB0cmVlIHN0YWJsZSB0byBlbnN1cmUgdGhhdCBjb250YWluZXJzIGRvIG5vdCBsb3NlIHRoZSByZWZlcmVuY2VzIHRvIHRoZWlyXG4gICAgICAgIC8vIGNoaWxkIHZkb20gdHJlZXMuIFRoZSBpZiBjYXNlIHNob3VsZCBub3QgaGFwcGVuLCBidXQgaW4gY2FzZSBpdCBkb2VzLCBrZWVwaW5nIHRoZSByZWZlcmVuY2UgYW5kIG1lcmdpbmdcbiAgICAgICAgLy8gdGhlIGNvbnRlbnQgb3ZlciBzZWVtcyB0byBiZSB0aGUgYmVzdCBzdHJhdGVneVxuICAgICAgICBpZiAobWUuX3Zkb20gIT09IHZkb20pIHtcbiAgICAgICAgICAgIExvZ2dlci53YXJuKCd2ZG9tIGdvdCByZXBsYWNlZCBmb3I6ICcgKyBtZS5pZCArICcuIENvcHlpbmcgdGhlIGNvbnRlbnQgaW50byB0aGUgcmVmZXJlbmNlIGhvbGRlciBvYmplY3QnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMobWUuX3Zkb20pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWUuX3Zkb21ba2V5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLl92ZG9tLCB2ZG9tKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVZkb20odmRvbSwgdm5vZGUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGEgc3RyaW5nIGxpa2UgJ2NvbG9yJyBvciBhbiBhcnJheSBjb250YWluaW5nIHN0eWxlIGF0dHJpYnV0ZXMgdG8gcmVtb3ZlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8QXJyYXl9IHZhbHVlIGNhbWVsQ2FzZSBvbmx5XG4gICAgICogQHJldHVybnMge09iamVjdH0gYWxsIHN0eWxlcyBvZiB0aGlzLmVsXG4gICAgICovXG4gICAgcmVtb3ZlU3R5bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHlsZSAgICA9IHRoaXMuc3R5bGUsXG4gICAgICAgICAgICBkb1VwZGF0ZSA9IGZhbHNlO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHN0eWxlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaW5kZXhPZihrZXkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgc3R5bGVba2V5XTtcbiAgICAgICAgICAgICAgICBkb1VwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkb1VwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHZub2RlIHRyZWUgZm9yIHRoaXMgY29tcG9uZW50IGFuZCBtb3VudHMgdGhlIGNvbXBvbmVudCBpbiBjYXNlXG4gICAgICogLSB5b3UgcGFzcyB0cnVlIGZvciB0aGUgbW91bnQgcGFyYW1cbiAgICAgKiAtIG9yIHRoZSBhdXRvTW91bnQgY29uZmlnIGlzIHNldCB0byB0cnVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbbW91bnRdIE1vdW50IHRoZSBET00gYWZ0ZXIgdGhlIHZub2RlIGdvdCBjcmVhdGVkXG4gICAgICovXG4gICAgcmVuZGVyKG1vdW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXV0b01vdW50ID0gbW91bnQgfHwgbWUuYXV0b01vdW50LFxuICAgICAgICAgICAgYXBwICAgICAgID0gTmVvLmFwcHNbbWUuYXBwTmFtZV07XG5cbiAgICAgICAgbWUucmVuZGVyaW5nID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIWFwcC5yZW5kZXJlZCkge1xuICAgICAgICAgICAgYXBwLnJlbmRlcmluZyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUudmRvbSkge1xuICAgICAgICAgICAgTmVvLnZkb20uSGVscGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgYXV0b01vdW50ICA6IGF1dG9Nb3VudCxcbiAgICAgICAgICAgICAgICBjbHMgICAgICAgIDogbWUuY2xzLFxuICAgICAgICAgICAgICAgIHBhcmVudElkICAgOiBhdXRvTW91bnQgPyBtZS5wYXJlbnRJZCAgICA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBwYXJlbnRJbmRleDogYXV0b01vdW50ID8gbWUucGFyZW50SW5kZXggOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICA6IG1lLnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLm1lLnZkb21cbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUub25SZW5kZXIoZGF0YSwgYXV0b01vdW50KTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gcmVuZGVyIGNvbXBvbmVudCcsIGVyciwgbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLnNpbGVudFZkb21VcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHN1cGVyLnNldCh2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnNpbGVudFZkb21VcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZVZkb21VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIG1ldGhvZCBmb3IgdXRpbC5WRG9tLnN5bmNWZG9tSWRzIHRvIGFsbG93IG92ZXJyaWRpbmcgKGRpc2FibGluZykgaXRcbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSBbdm5vZGU9dGhpcy52bm9kZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Zkb209dGhpcy52ZG9tXVxuICAgICAqL1xuICAgIHN5bmNWZG9tSWRzKHZub2RlPXRoaXMudm5vZGUsIHZkb209dGhpcy52ZG9tKSB7XG4gICAgICAgIFZEb21VdGlsLnN5bmNWZG9tSWRzKHZub2RlLCB2ZG9tKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2QgZm9yIHV0aWwuVkRvbS5zeW5jVmRvbUlkcyB0byBhbGxvdyBvdmVycmlkaW5nIChkaXNhYmxpbmcpIGl0XG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gW3Zub2RlPXRoaXMudm5vZGVdXG4gICAgICovXG4gICAgc3luY1Zub2RlVHJlZSh2bm9kZT10aGlzLnZub2RlKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWJ1ZyA9IGZhbHNlLFxuICAgICAgICAgICAgY2hpbGRWbm9kZTtcblxuICAgICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc3luY1Zkb21JZHMoKTtcblxuICAgICAgICAvLyBkZWxlZ2F0ZSB0aGUgbGF0ZXN0IG5vZGUgdXBkYXRlcyB0byBhbGwgcG9zc2libGUgY2hpbGQgY29tcG9uZW50cyBmb3VuZCBpbnNpZGUgdGhlIHZub2RlIHRyZWVcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZHJlbihtZSkuZm9yRWFjaChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY2hpbGRWbm9kZSA9IFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZShtZS52bm9kZSwgY29tcG9uZW50LnZkb20uaWQpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGRWbm9kZSkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5fdm5vZGUgPSBjaGlsZFZub2RlLnZub2RlOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudC5yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ3JlbmRlcmVkJywgY29tcG9uZW50LmlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb21wb25lbnQubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybignc3luY1Zub2RlVHJlZTogQ291bGQgbm90IHJlcGxhY2UgdGhlIGNoaWxkIHZub2RlIGZvcicsIGNvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lLnZub2RlLCBtZS5tb3VudGVkKTtcblxuICAgICAgICAvLyBrZWVwIHRoZSB2bm9kZSBwYXJlbnQgdHJlZSBpbiBzeW5jXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuZ2V0UGFyZW50cyhtZSkuZm9yRWFjaCgoY29tcG9uZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGR5bmFtaWNhbGx5IHJlbmRlcmVkIGNvbXBvbmVudHMgd2hpY2ggZ2V0IGluc2VydGVkIGludG8gdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgbWUudm5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2R5biBpdGVtJywgbWUudm5vZGUsIG1lLnBhcmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudm5vZGUuY2hpbGROb2Rlcy5zcGxpY2UobWUucGFyZW50SW5kZXggfHwgMCwgMCwgbWUudm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghVk5vZGVVdGlsLnJlcGxhY2VDaGlsZFZub2RlKGNvbXBvbmVudC52bm9kZSwgbWUudm5vZGUuaWQsIG1lLnZub2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IGNhbiBoYXBwZW4gZm9yIGR5bmFtaWNhbGx5IGluc2VydGVkIGNvbnRhaW5lciBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc3luY1Zub2RlVHJlZTogQ291bGQgbm90IHJlcGxhY2UgdGhlIHBhcmVudCB2bm9kZSBmb3InLCBtZS52bm9kZS5pZCwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBsZXQgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3luY1Zub2RlVHJlZScsIG1lLmlkLCBlbmQgLSBzdGFydCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGNvbXBvbmVudCBET01cbiAgICAgKi9cbiAgICB1bm1vdW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICBpZCAgICA6IG1lLmlkXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVubW91bnQgY29tcG9uZW50JywgZXJyLCBtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGZvciBOZW8ubWFuYWdlci5Db21wb25lbnQudXBcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSBUaGUgbWF0Y2hpbmcgaW5zdGFuY2Ugb3IgbnVsbFxuICAgICAqL1xuICAgIHVwKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci51cCh0aGlzLmlkLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbHRhIHVwZGF0ZXMgZm9yIHRoZSBjbHMgY29uZmlnLiBHZXRzIGNhbGxlZCBhZnRlciB0aGUgY2xzIGNvbmZpZyBnZXRzIGNoYW5nZWQgaW4gY2FzZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICogQHBhcmFtIHtBcnJheX0gY2xzXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkQ2xzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB1cGRhdGVDbHMoY2xzLCBvbGRDbHMpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZub2RlID0gbWUudm5vZGU7XG5cbiAgICAgICAgaWYgKCFOZW9BcnJheS5pc0VxdWFsKGNscywgb2xkQ2xzKSkge1xuICAgICAgICAgICAgaWYgKHZub2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGUuY2xhc3NOYW1lID0gY2xzOyAvLyBrZWVwIHRoZSB2bm9kZSBpbiBzeW5jXG4gICAgICAgICAgICAgICAgbWUudm5vZGUgPSB2bm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBkZWx0YXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKGNscywgb2xkQ2xzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogTmVvLnV0aWwuQXJyYXkuZGlmZmVyZW5jZShvbGRDbHMsIGNscylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lLnZub2RlKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gdXBkYXRlIENvbXBvbmVudCBjbHMnLCBlcnIsIG1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgc3R5bGUgZGVsdGFzIGZvciBuZXdWYWx1ZSAmIG9sZFZhbHVlIGFuZCBhcHBsaWVzIHRoZW0gZGlyZWN0bHkgdG8gdGhlIERPTS5cbiAgICAgKiBAcGFyYW0gbmV3VmFsdWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVN0eWxlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGEgPSBTdHlsZS5jb21wYXJlU3R5bGVzKG5ld1ZhbHVlLCBvbGRWYWx1ZSksXG4gICAgICAgICAgICB2bm9kZSA9IG1lLnZub2RlO1xuXG4gICAgICAgIGlmIChkZWx0YSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVN0eWxlJywgJ25ldycsIG5ld1ZhbHVlLCAnb2xkJywgb2xkVmFsdWUsICdkZWx0YScsIGRlbHRhKTtcbiAgICAgICAgICAgIGlmICh2bm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2RlLnN0eWxlID0gbmV3VmFsdWU7IC8vIGtlZXAgdGhlIHZub2RlIGluIHN5bmNcbiAgICAgICAgICAgICAgICBtZS52bm9kZSA9IHZub2RlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogZGVsdGFcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbXBvbmVudCBzdHlsZSB1cGRhdGVkJyk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVwZGF0ZSBjb21wb25lbnQgc3R5bGUnLCBlcnIsIG1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgYWZ0ZXIgdGhlIHZkb20gY29uZmlnIGdldHMgY2hhbmdlZCBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgYWxyZWFkeSBtb3VudGVkIChkZWx0YSB1cGRhdGVzKS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW3Jlc29sdmVdIHVzZWQgYnkgcHJvbWlzZVZkb21VcGRhdGUoKVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtyZWplY3RdIHVzZWQgYnkgcHJvbWlzZVZkb21VcGRhdGUoKVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgdXBkYXRlVmRvbSh2ZG9tLCB2bm9kZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVZkb20nLCBtZS5pZCwgTmVvLmNsb25lKHZkb20sIHRydWUpLCBOZW8uY2xvbmUodm5vZGUsIHRydWUpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVZkb20nLCBtZS5pc1Zkb21VcGRhdGluZyk7XG5cbiAgICAgICAgaWYgKG1lLmlzVmRvbVVwZGF0aW5nKSB7XG4gICAgICAgICAgICBtZS5uZWVkc1Zkb21VcGRhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuaXNWZG9tVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBOZW8udmRvbS5IZWxwZXIudXBkYXRlKHtcbiAgICAgICAgICAgICAgICB2ZG9tIDogdmRvbSxcbiAgICAgICAgICAgICAgICB2bm9kZTogdm5vZGVcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbXBvbmVudCB2bm9kZSB1cGRhdGVkJywgZGF0YS52bm9kZSk7XG4gICAgICAgICAgICAgICAgbWUudm5vZGUgICAgICAgICAgPSBkYXRhLnZub2RlO1xuICAgICAgICAgICAgICAgIG1lLmlzVmRvbVVwZGF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKG1lLm5lZWRzVmRvbVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5uZWVkc1Zkb21VcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IG1lLnZkb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYXR0ZW1wdGluZyB0byB1cGRhdGUgY29tcG9uZW50IGRvbScsIGVyciwgbWUpO1xuICAgICAgICAgICAgICAgIG1lLmlzVmRvbVVwZGF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIG1hbmFnZXIuRm9jdXMgZmlyZXMgdGhlIGV2ZW50IHdoZW4gdGhlIGNvbXBvbmVudCBpZCBpcyBpbmNsdWRlZCBpbnNpZGUgdGhlIGRvbSBpZCBwYXRoXG4gKiBAZXZlbnQgZm9jdXNFbnRlclxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICovXG5cbi8qKlxuICogbWFuYWdlci5Gb2N1cyBmaXJlcyB0aGUgZXZlbnQgd2hlbiB0aGUgY29tcG9uZW50IGlkIGlzIG5vdCBpbmNsdWRlZCBpbnNpZGUgdGhlIGRvbSBpZCBwYXRoXG4gKiBAZXZlbnQgZm9jdXNMZWF2ZVxuICogQHBhcmFtIHtBcnJheX0gcGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICovXG5cbi8qKlxuICogbWFuYWdlci5Gb2N1cyBmaXJlcyB0aGUgZXZlbnQgd2hlbiB0aGUgY29tcG9uZW50IGlkIGlzIGluY2x1ZGVkIGluc2lkZSB0aGUgZG9tIGlkIHBhdGgsIGJ1dCB0aGUgcGF0aCBpdHNlbGYgY2hhbmdlZFxuICogQGV2ZW50IGZvY3VzTW92ZVxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLm5ld1BhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLm9sZFBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAqL1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnR9IGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LkJ1dHRvblxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBpY29uUG9zaXRpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGljb25Qb3NpdGlvbnM9Wyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpY29uUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LkJ1dHRvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuQnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2J1dHRvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tYnV0dG9uJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tYnV0dG9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmYWxzZSBjYWxscyBOZW8uTWFpbi5zZXRSb3V0ZSgpXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGVkaXRSb3V0ZT10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlZGl0Um91dGU6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3IgZG9tTGlzdGVuZXJzPXtjbGljazpoYW5kbGVyfVxuICAgICAgICAgKiBBIHN0cmluZyBiYXNlZCB2YWx1ZSBhc3N1bWVzIHRoYXQgdGhlIGhhbmRsZXJGbiBsaXZlcyBpbnNpZGUgYSBDb21wb25lbnRDb250cm9sbGVyXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufFN0cmluZ3xudWxsfSBoYW5kbGVyXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoYW5kbGVyXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzY29wZSAodGhpcyBwb2ludGVyKSBpbnNpZGUgdGhlIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIFBvaW50cyB0byB0aGUgYnV0dG9uIGluc3RhbmNlIGJ5IGRlZmF1bHQuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBoYW5kbGVyU2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlclNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIENTUyBjbGFzcyB0byB1c2UgZm9yIGFuIGljb24sIGUuZy4gJ2ZhIGZhLWhvbWUnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBbaWNvbkNsc189bnVsbF1cbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbG9yIHRvIHVzZSBmb3IgYW4gaWNvbiwgZS5nLiAnI2ZmMDAwMCcgW29wdGlvbmFsXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNvbG9yXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ29sb3JfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSBpY29uIGluIGNhc2UgaWNvbkNscyBoYXMgYSB2YWx1ZS5cbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGFyZTogJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpY29uUG9zaXRpb25fPSdsZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblBvc2l0aW9uXzogJ2xlZnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByZXNzZWQgc3RhdGUgb2YgdGhlIEJ1dHRvblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBwcmVzc2VkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcHJlc3NlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hhbmdlIHRoZSBicm93c2VyIGhhc2ggdmFsdWUgb24gY2xpY2tcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHJvdXRlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByb3V0ZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGV4dCBkaXNwbGF5ZWQgb24gdGhlIGJ1dHRvbiBbb3B0aW9uYWxdXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGV4dF89JydcbiAgICAgICAgICovXG4gICAgICAgIHRleHRfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY24gOiBbXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnbmVvLWJ1dHRvbi1nbHlwaCddfSxcbiAgICAgICAgICAgICAgICB7dGFnOiAnc3BhbicsIGNsczogWyduZW8tYnV0dG9uLXRleHQnXX1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhhbmRsZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEhhbmRsZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xpY2s6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZS5oYW5kbGVyU2NvcGUgfHwgbWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGljb25DbHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEljb25DbHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpY29uTm9kZSA9IG1lLmdldFZkb21Sb290KCkuY25bMF07XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGljb25Ob2RlLmNscywgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICghdmFsdWUgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBpY29uTm9kZS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWNvbk5vZGUucmVtb3ZlRG9tID0gZmFsc2U7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoaWNvbk5vZGUuY2xzLCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGljb25Db2xvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEljb25Db2xvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGljb25Ob2RlID0gbWUuZ2V0VmRvbVJvb3QoKS5jblswXTtcblxuICAgICAgICBpZiAoIWljb25Ob2RlLnN0eWxlKSB7XG4gICAgICAgICAgICBpY29uTm9kZS5zdHlsZSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWNvbk5vZGUuc3R5bGUuY29sb3IgPSB2YWx1ZTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpY29uUG9zaXRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEljb25Qb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICdpY29uLScgKyBvbGRWYWx1ZSk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICdpY29uLScgKyB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwcmVzc2VkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFByZXNzZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBjbHMgPSB0aGlzLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA9PT0gdHJ1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ3ByZXNzZWQnKTtcbiAgICAgICAgdGhpcy5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSByb3V0ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0Um91dGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xpY2s6IG1lLmNoYW5nZVJvdXRlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIHRleHROb2RlID0gdmRvbVJvb3QuY25bMV07XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKG1lLl9jbHMsICAgICAgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tUm9vdC5jbHMsICduby10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLl9jbHMsICAgICAgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZSh2ZG9tUm9vdC5jbHMsICduby10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgIHRleHROb2RlLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGljb25DbHMgYXJyYXkgaW50byBhIHN0cmluZyBvbiBiZWZvcmVHZXRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlR2V0SWNvbkNscygpIHtcbiAgICAgICAgbGV0IGljb25DbHMgPSB0aGlzLl9pY29uQ2xzO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGljb25DbHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gaWNvbkNscy5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaWNvbkNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBpY29uQ2xzIGNvbmZpZyBnZXRzIGNoYW5nZWQuIENvbnZlcnRzIHRoZSBzdHJpbmcgaW50byBhbiBhcnJheSBpZiBuZWVkZWQuXG4gICAgICogQHBhcmFtIHtBcnJheXxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEljb25DbHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBpY29uUG9zaXRpb24gY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0SWNvblBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnaWNvblBvc2l0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjaGFuZ2VSb3V0ZSgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5lZGl0Um91dGUpIHtcbiAgICAgICAgICAgIE5lby5NYWluLmVkaXRSb3V0ZSh0aGlzLnJvdXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE5lby5NYWluLnNldFJvdXRlKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbWUucm91dGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCdXR0b24pO1xuXG5leHBvcnQge0J1dHRvbiBhcyBkZWZhdWx0fTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29tcG9uZW50fSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjbGFzcyB0byByZW5kZXIgYSBsYWJlbCB3aXRoIGEgdGV4dFxuICogQGNsYXNzIE5lby5jb21wb25lbnQuTGFiZWxcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuTGFiZWwnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xhYmVsJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWxhYmVsJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tbGFiZWwnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGV4dF89JydcbiAgICAgICAgICovXG4gICAgICAgIHRleHRfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzogJ2xhYmVsJ31cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICdsYWJlbCdcbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuICAgICAgICB2ZG9tLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExhYmVsKTtcblxuZXhwb3J0IHtMYWJlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IExheW91dEJhc2UgICAgICAgICAgICAgZnJvbSAnLi4vbGF5b3V0L0Jhc2UubWpzJztcbmltcG9ydCBMYXlvdXRDYXJkICAgICAgICAgICAgIGZyb20gJy4uL2xheW91dC9DYXJkLm1qcyc7XG5pbXBvcnQgTGF5b3V0Rml0ICAgICAgICAgICAgICBmcm9tICcuLi9sYXlvdXQvRml0Lm1qcyc7XG5pbXBvcnQgTGF5b3V0SGJveCAgICAgICAgICAgICBmcm9tICcuLi9sYXlvdXQvSEJveC5tanMnO1xuaW1wb3J0IExheW91dFZCb3ggICAgICAgICAgICAgZnJvbSAnLi4vbGF5b3V0L1ZCb3gubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLkJhc2UnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtRGVmYXVsdHNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgY29uZmlnIG9iamVjdHN8aW5zdGFuY2VzfG1vZHVsZXMgZm9yIGVhY2ggY2hpbGQgY29tcG9uZW50XG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBpdGVtc189W11cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogaW1wb3J0IEJ1dHRvbiAgICAgIGZyb20gJy4uL2NvbXBvbmVudC9CdXR0b24ubWpzJztcbiAgICAgICAgICogaW1wb3J0IE15UmVkQnV0dG9uIGZyb20gJ215YXBwL015UmVkQnV0dG9uLm1qcyc7XG4gICAgICAgICAqIGltcG9ydCBUb29sYmFyICAgICBmcm9tICcuLi9jb250YWluZXIvVG9vbGJhci5tanMnO1xuICAgICAgICAgKlxuICAgICAgICAgKiBsZXQgbXlCdXR0b24gPSBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAgICAgKiAgICAgdGV4dDogJ0J1dHRvbjEnXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBOZW8uY3JlYXRlKFRvb2xiYXIsIHtcbiAgICAgICAgICogICAgIC8vLi4uXG4gICAgICAgICAqICAgICBpdGVtczogW1xuICAgICAgICAgKiAgICAgICAgIG15QnV0dG9uLCAgICAgICAgICAgICAgLy8gcGFzc2VkIGluc3RhbmNlXG4gICAgICAgICAqICAgICAgICAge1xuICAgICAgICAgKiAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbicsICAgLy8gYnkgbnR5cGVcbiAgICAgICAgICogICAgICAgICAgICAgdGV4dCA6ICdCdXR0b24gMidcbiAgICAgICAgICogICAgICAgICB9LFxuICAgICAgICAgKiAgICAgICAgIHtcbiAgICAgICAgICogICAgICAgICAgICAgbW9kdWxlOiBCdXR0b24sICAgIC8vIGJ5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgICAgKiAgICAgICAgICAgICB0ZXh0ICA6ICdCdXR0b24gMydcbiAgICAgICAgICogICAgICAgICB9LFxuICAgICAgICAgKiAgICAgICAgIE15UmVkQnV0dG9uICAgICAgICAgICAgLy8geW91IGNhbiBkcm9wIGltcG9ydGVkIG1vZHVsZXMgZGlyZWN0bHkgaW50byB0aGUgaXRlbXMgYXJyYXlcbiAgICAgICAgICogICAgIF1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXRfPXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0Xzoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyguLi5hcmdzKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29uZmlnID0gc3VwZXIubWVyZ2VDb25maWcoLi4uYXJncyk7XG5cbiAgICAgICAgLy8gYXZvaWQgYW55IGluZmVyZmVyZW5jZSBvbiBwcm90b3R5cGUgbGV2ZWxcbiAgICAgICAgLy8gZG9lcyBub3QgY2xvbmUgZXhpc3RpbmcgTmVvIGluc3RhbmNlc1xuXG4gICAgICAgIGlmIChjb25maWcuaXRlbURlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZS5faXRlbURlZmF1bHRzID0gTmVvLmNsb25lKGNvbmZpZy5pdGVtRGVmYXVsdHMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtRGVmYXVsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLml0ZW1zKSB7XG4gICAgICAgICAgICBtZS5faXRlbXMgPSBOZW8uY2xvbmUoY29uZmlnLml0ZW1zLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbiBjYXNlIHRoZSBDb250YWluZXIgZG9lcyBub3QgaGF2ZSBhIGxheW91dCBjb25maWcsIHRoZSBzZXR0ZXIgd29uJ3QgdHJpZ2dlclxuICAgICAgICBtZS5fbGF5b3V0ID0gbWUuY3JlYXRlTGF5b3V0KG1lLmxheW91dCk7XG4gICAgICAgIG1lLl9sYXlvdXQuYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3MobWUuaXRlbXMpO1xuICAgICAgICBtZS5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBhdCB0aGUgbGFzdCBpbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpdGVtXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBhZGQoaXRlbSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbWUuaW5zZXJ0KG1lLml0ZW1zID8gbWUuaXRlbXMubGVuZ3RoIDogMCwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5sYXlvdXQuQmFzZX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5sYXlvdXQuQmFzZX0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0TGF5b3V0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgb2xkVmFsdWUucmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgdmFsdWUuYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUucmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8ubGF5b3V0LkJhc2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRMYXlvdXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTGF5b3V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICA9IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIGRlZmF1bHRzID0gbWUuaXRlbURlZmF1bHRzLFxuICAgICAgICAgICAgbGF5b3V0ICAgPSBtZS5sYXlvdXQsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCk7XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0uaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBOZW8uY3JlYXRlKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvLm50eXBlKHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZkb20gICA6IHtpbm5lckhUTUw6IGl0ZW19XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBOZW8uYXNzaWduRGVmYXVsdHMoaXRlbSwgZGVmYXVsdHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0ubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgOiBpdGVtLnN0eWxlIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXShpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXNbaW5kZXhdID0gaXRlbTtcblxuICAgICAgICAgICAgbGF5b3V0LmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcblxuICAgICAgICAgICAgdmRvbVJvb3QuY24ucHVzaChpdGVtLnZkb20pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xOZW8ubGF5b3V0LkJhc2V9IHZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmxheW91dC5CYXNlfVxuICAgICAqL1xuICAgIGNyZWF0ZUxheW91dCh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGF5b3V0QmFzZSAmJiB2YWx1ZS5pc0xheW91dCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmNvbnRhaW5lcklkID0gbWUuaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWUucGFyc2VMYXlvdXRDbGFzcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUuY29udGFpbmVySWQgPSBtZS5pZDtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5udHlwZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgYWxsIGNvbXBvbmVudHMgaW5zaWRlIHRoaXMuaXRlbXMgYmVmb3JlIHRoZSBzdXBlcigpIGNhbGwuXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgYSBkaXJlY3QgY2hpbGQgY29tcG9uZW50IGluc2lkZSB0aGlzLml0ZW1zLlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfFN0cmluZ30gaXRlbUlkIEVpdGhlciB0aGUgaXRlbSByZWZlcmVuY2Ugb3IgdGhlIGl0ZW0gaWRcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IC0xIGluIGNhc2Ugbm8gbWF0Y2ggd2FzIGZvdW5kXG4gICAgICovXG4gICAgaW5kZXhPZihpdGVtSWQpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBpICAgPSAwLFxuICAgICAgICAgICAgbGVuID0gbWUuaXRlbXMgJiYgbWUuaXRlbXMubGVuZ3RoIHx8IDA7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNTdHJpbmcoaXRlbUlkKSkge1xuICAgICAgICAgICAgaXRlbUlkID0gaXRlbUlkLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKG1lLml0ZW1zW2ldLmlkID09PSBpdGVtSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgYXQgYSBzcGVjaWZpYyBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpdGVtXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gbWUuaXRlbXMsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjbiwgaSwgbGVuO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgbGVuID0gaXRlbS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiByZW5kZXIgaXMgYXN5bmMsIGVuc3VyZSB0aGUgb3JkZXIgb2YgaXRlbXMgaXMgY29ycmVjdFxuXG4gICAgICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBhcnJheSBiYWNrd2FyZHNcbiAgICAgICAgICAgICAgICBpdGVtW2ldID0gbWUuaW5zZXJ0KGl0ZW1bbGVuIC0gMV0sIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgTmVvLmNvbXBvbmVudC5CYXNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gaXRlbS5tb2R1bGUucHJvdG90eXBlLmNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5tZS5pdGVtRGVmYXVsdHMgfHwge30sXG5cbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Nb3VudCAgOiBtZS5tb3VudGVkLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBpbmRleCxcblxuICAgICAgICAgICAgICAgICAgICAuLi5pdGVtXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGl0ZW0gPSBOZW9baXRlbS5jbGFzc05hbWUgPyAnY3JlYXRlJyA6ICdudHlwZSddKGl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5sYXlvdXQuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSwgaW5kZXgpO1xuXG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IGl0ZW1zO1xuXG4gICAgICAgICAgICBjbiA9IHZkb20uY24gfHwgdmRvbS5jaGlsZE5vZGVzIHx8IHZkb20uY2hpbGRyZW47XG5cbiAgICAgICAgICAgIGNuLnNwbGljZShpbmRleCwgMCwgaXRlbS52ZG9tKTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdG9kb1xuICAgICAqIE1vdmVzIGFuIGV4aXN0aW5nIGl0ZW0gdG8gYSBuZXcgaW5kZXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBtb3ZlVG8oaXRlbUlkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG1lLmluZGV4T2YoaXRlbUlkKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SW5kZXgpO1xuICAgIH1cblxuICAgIHBhcnNlSXRlbUNvbmZpZ3MoaXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaXRlbSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUl0ZW1Db25maWdzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBtZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge09iamVjdH0gbGF5b3V0Q29uZmlnXG4gICAgICovXG4gICAgcGFyc2VMYXlvdXRDbGFzcyhjb25maWcpIHtcbiAgICAgICAgaWYgKE5lby5pc09iamVjdChjb25maWcpKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLm50eXBlLmluZGV4T2YoJ2xheW91dC0nKSA8IDApIHtcbiAgICAgICAgICAgICAgICBjb25maWcubnR5cGUgPSAnbGF5b3V0LScgKyBjb25maWcubnR5cGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29uZmlnLmluZGV4T2YoJ2xheW91dC0nKSA8IDApIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xheW91dC0nICsgY29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiBjb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjb250YWluZXIgaXRlbSBhdCBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVzdHJveUl0ZW09dHJ1ZV1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgcmVtb3ZlQXQoaW5kZXgsIGRlc3Ryb3lJdGVtPXRydWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIHZkb20gID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNuLCBpdGVtO1xuXG4gICAgICAgIGlmIChpbmRleCA+PSBpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIE5lby53YXJuKCdDb250YWluZXIucmVtb3ZlQXQ6IGluZGV4ID49IGl0ZW1zLmxlbmd0aC4gJyArIG1lLmlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpbmRleF07XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmUgaXRlbScsIGl0ZW0uaWQpO1xuXG4gICAgICAgICAgICBpdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBjbiA9IHZkb20uY24gfHwgdmRvbS5jaGlsZE5vZGVzIHx8IHZkb20uY2hpbGRyZW47XG5cbiAgICAgICAgICAgIGNuLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcblxuICAgICAgICAgICAgaWYgKGRlc3Ryb3lJdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0aGUgcG9zaXRpb24gb2YgMiBkaXJlY3QgY2hpbGQgaXRlbXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbTFpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtMmlkXG4gICAgICovXG4gICAgc3dpdGNoSXRlbXMoaXRlbTFpZCwgaXRlbTJpZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtMUluZGV4ID0gbWUuaW5kZXhPZihpdGVtMWlkKSxcbiAgICAgICAgICAgIGl0ZW0ySW5kZXggPSBtZS5pbmRleE9mKGl0ZW0yaWQpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgTmVvQXJyYXkubW92ZShtZS5pdGVtcywgICAgICAgICAgICAgIGl0ZW0ySW5kZXgsIGl0ZW0xSW5kZXgpO1xuICAgICAgICBOZW9BcnJheS5tb3ZlKG1lLmdldFZkb21JdGVtc1Jvb3QoKSwgaXRlbTJJbmRleCwgaXRlbTFJbmRleCk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCdXR0b24gICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudC9CdXR0b24ubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBDb21wb25lbnR9IGZyb20gJy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgQ29udGFpbmVyfSBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBMYWJlbCAgICAgICAgICAgICAgICAgIGZyb20gJy4uL2NvbXBvbmVudC9MYWJlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlRvb2xiYXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGRvY2tcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGRvY2tQb3NpdGlvbnM9Wyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkb2NrUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLFxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5Ub29sYmFyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5Ub29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3Rvb2xiYXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby10b29sYmFyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdG9vbGJhciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkb2NrXz0ndG9wJ1xuICAgICAgICAgKi9cbiAgICAgICAgZG9ja186ICd0b3AnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHM9e250eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgbnR5cGU6ICdidXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF9sYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnY2VudGVyJywgcGFjayA6ICdzdGFydCd9XG4gICAgICAgICAqL1xuICAgICAgICBfbGF5b3V0OiB7XG4gICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgcGFjayA6ICdzdGFydCdcbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbGF5b3V0IGNvbmZpZyBkZXBlbmRpbmcgb24gdGhpcy5kb2NrXG4gICAgICogQHJldHVybnMge09iamVjdH0gbGF5b3V0Q29uZmlnXG4gICAgICovXG4gICAgZ2V0TGF5b3V0Q29uZmlnKCkge1xuICAgICAgICBsZXQgbGF5b3V0Q29uZmlnO1xuXG4gICAgICAgIHN3aXRjaCh0aGlzLmRvY2spIHtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBwYWNrIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ3Zib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsYXlvdXRDb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkb2NrIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREb2NrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgICAgICAgICAgID0gbWUuY2xzLFxuICAgICAgICAgICAgZG9ja1Bvc2l0aW9ucyA9IG1lLmdldFN0YXRpY0NvbmZpZygnZG9ja1Bvc2l0aW9ucycpO1xuXG4gICAgICAgIGRvY2tQb3NpdGlvbnMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgTmVvQXJyYXlba2V5ID09PSB2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1kb2NrLScgKyBrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5jbHMgICAgPSBjbHM7XG4gICAgICAgIG1lLmxheW91dCA9IG1lLmdldExheW91dENvbmZpZygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IGRvY2sgcG9zaXRpb24gbWF0Y2hlcyBhIHZhbHVlIG9mIHRoZSBzdGF0aWMgZG9ja1Bvc2l0aW9ucyBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RG9jayh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2RvY2snLCAnZG9ja1Bvc2l0aW9ucycpO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gJy0+Jykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCAgOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUb29sYmFyKTtcblxuZXhwb3J0IHtUb29sYmFyIGFzIGRlZmF1bHR9OyIsImltcG9ydCB7ZGVmYXVsdCBhcyBDb250YWluZXJ9IGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5WaWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3cG9ydCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe2NsczogWyduZW8tYm9keS12aWV3cG9ydCddfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXdwb3J0KTtcblxuZXhwb3J0IHtWaWV3cG9ydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb25cbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqL1xuY2xhc3MgQXBwbGljYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRyb2xsZXIuQXBwbGljYXRpb24nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udHJvbGxlci5BcHBsaWNhdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhcHAnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2FwcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjcmVhdGVNYWluVmlldz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBjcmVhdGVNYWluVmlldzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZX0gbWFpblZpZXdfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1haW5WaWV3XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbmFtZT0nTXlBcHAnXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lOiAnTXlBcHAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYXJlbnRJZD0nZG9jdW1lbnQuYm9keSdcbiAgICAgICAgICovXG4gICAgICAgIHBhcmVudElkOiAnZG9jdW1lbnQuYm9keScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW5kZXJlZD1mYWxzZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nPWZhbHNlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJpbmc6IGZhbHNlXG4gICAgfX1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLmFwcHMgPSBOZW8uYXBwcyB8fCB7fTtcblxuICAgICAgICBOZW8uYXBwc1ttZS5uYW1lXSA9IG1lO1xuXG4gICAgICAgIGlmIChtZS5jcmVhdGVNYWluVmlldykge1xuICAgICAgICAgICAgbWUucmVuZGVyTWFpblZpZXcoY29uZmlnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlck1haW5WaWV3KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcobWUubWFpblZpZXcpKSB7XG4gICAgICAgICAgICBtZS5tYWluVmlldyA9IG1lLm5hbWUgKyAnLicgKyBtZS5tYWluVmlldztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLm1haW5WaWV3SW5zdGFuY2UgPSBOZW8uY3JlYXRlKG1lLm1haW5WaWV3LCB7XG4gICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5uYW1lLFxuICAgICAgICAgICAgYXV0b1JlbmRlcjogdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudElkICA6IG1lLnBhcmVudElkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBwbGljYXRpb24pO1xuXG4vLyBzaG9ydGN1dFxuTmVvLmFwcCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHJldHVybiBOZW8uY3JlYXRlKEFwcGxpY2F0aW9uLCBjb25maWcpO1xufTtcblxuZXhwb3J0IHtBcHBsaWNhdGlvbiBhcyBkZWZhdWx0fTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29yZUJhc2V9IGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IEhhc2hIaXN0b3J5ICAgICAgICAgICBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkJhc2UnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udHJvbGxlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbnRyb2xsZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbnRyb2xsZXInXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIEhhc2hIaXN0b3J5Lm9uKCdjaGFuZ2UnLCB0aGlzLm9uSGFzaENoYW5nZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIHdoaWNoIGdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlIGhhc2ggaW5zaWRlIHRoZSBicm93c2VyIHVybCBjaGFuZ2VzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhc2hTdHJpbmdcbiAgICAgKi9cbiAgICBvbkhhc2hDaGFuZ2UodmFsdWUsIG9sZFZhbHVlLCBoYXNoU3RyaW5nKSB7XG5cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xuXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGlzSW5zdGFuY2UgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBjbGFzcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byB0aGUgY2xhc3MgY29uc3RydWN0b3JcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBnZXQgYXBwbGllZCB0byBlYWNoIGNsYXNzIGluc3RhbmNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgd2hpY2ggd2lsbCBnZXQgbWFwcGVkIGludG8gdGhlIE5lbyBvciBhcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5CYXNlJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3Mgc2hvcnRjdXQtbmFtZSB0byB1c2UgZm9yIGUuZy4gY3JlYXRpbmcgY2hpbGQgY29tcG9uZW50cyBpbnNpZGUgYSBKU09OLWZvcm1hdFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdiYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ29uc3VtZXMgdGhlIHN0YXRpYyBnZXRDb25maWcoKSBvYmplY3RcbiAgICAgKiBBcHBsaWVzIHRoZSBvYnNlcnZhYmxlIG1peGluIGlmIG5lZWRlZCwgZ3JhbnRzIHJlbW90ZSBhY2Nlc3MgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvbmZpZ1N5bWJvbF06IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICA6IHt9LFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtpc0luc3RhbmNlXToge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuY3JlYXRlSWQoY29uZmlnLmlkIHx8IG1lLmlkKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICBpZiAobWUuY29uc3RydWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpIHx8IG1lLm1peGlucyAmJiBOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBtZS5taXhpbnMpKSB7XG4gICAgICAgICAgICBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIGlmIChtZS5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICBtZS5jb250cm9sbGVyLnBhcnNlQ29uZmlnKCk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUucmVtb3RlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgYWxsIGNvbnN0cnVjdG9ycyBhcmUgZG9uZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpcyBkb25lXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3N0YXRpY05hbWU9bmFtZSArICdzJ10gbmFtZSBvZiB0aGUgc3RhdGljIGNvbmZpZyBhcnJheVxuICAgICAqL1xuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZ2V0U3RhdGljQ29uZmlnKHN0YXRpY05hbWUpO1xuXG4gICAgICAgIGlmICghdmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdTdXBwb3J0ZWQgdmFsdWVzIGZvciAnICsgbmFtZSArICcgYXJlOicsIHZhbHVlcy5qb2luKCcsICcpLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVJZChpZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIGlkID0gSWRHZW5lcmF0b3IuZ2V0SWQobWUubnR5cGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaWQgPSBpZDtcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyhtZSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgbWVba2V5XSA9IG51bGw7XG4gICAgICAgICAgICBkZWxldGUgbWVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmFsdWUgb2YgYSBzdGF0aWMgY29uZmlnIGtleSBvciB0aGUgc3RhdGljQ29uZmlnIG9iamVjdCBpdHNlbGYgaW4gY2FzZSBubyB2YWx1ZSBpcyBzZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0U3RhdGljQ29uZmlnKGtleSkge1xuICAgICAgICBsZXQgY2ZnID0gdGhpcy5jb25zdHJ1Y3Rvci5zdGF0aWNDb25maWc7XG4gICAgICAgIHJldHVybiAoa2V5ID8gY2ZnW2tleV0gOiBjZmcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYWxsIGNsYXNzIGNvbmZpZ3MgdG8gdGhpcyBpbnN0YW5jZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqL1xuICAgIGluaXRDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIG1lLm1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSk7XG4gICAgICAgIG1lLnByb2Nlc3NDb25maWdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBwcm9jZXNzQ29uZmlncygpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pO1xuXG4gICAgICAgIC8vIFdlIGRvIG5vdCB3YW50IHRvIGl0ZXJhdGUgb3ZlciB0aGUga2V5cywgc2luY2UgMSBjb25maWcgY2FuIHJlbW92ZSBtb3JlIHRoYW4gMSBrZXkgKGJlZm9yZVNldFgsIGFmdGVyU2V0WClcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gVGhlIGhhc093blByb3BlcnR5IGNoZWNrIGlzIGludGVuZGVkIGZvciBjb25maWdzIHdpdGhvdXQgYSB0cmFpbGluZyB1bmRlcnNjb3JlXG4gICAgICAgICAgICAvLyA9PiB0aGV5IGNvdWxkIGFscmVhZHkgZ290IGFzc2lnbmVkIGluc2lkZSBhbiBhZnRlclNldC1tZXRob2RcbiAgICAgICAgICAgIGlmICghbWUuaGFzT3duUHJvcGVydHkoa2V5c1swXSkpIHtcbiAgICAgICAgICAgICAgICBtZVtrZXlzWzBdXSA9IG1lW2NvbmZpZ1N5bWJvbF1ba2V5c1swXV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgZGVsZXRlIGNhbGwgaW5zaWRlIHRoZSBjb25maWcgZ2V0dGVyIGFzIHdlbGwgKE5lby5tanMgPT4gYXV0b0dlbmVyYXRlR2V0U2V0KCkpXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGtlZXAgdGhpcyBvbmUgZm9yIGNvbmZpZ3MsIHdoaWNoIGRvIG5vdCB1c2UgZ2V0dGVycyAobm8gdHJhaWxpbmcgdW5kZXJzY29yZSlcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuXG4gICAgICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9lcyBnZXQgdHJpZ2dlcmVkIHdpdGggYSBkZWxheSB0byBlbnN1cmUgdGhhdCBOZW8ud29ya2VySWQgJiBOZW8ud29ya2VyLk1hbmFnZXIgYXJlIGRlZmluZWRcbiAgICAgKiBSZW1vdGUgbWV0aG9kIGFjY2VzcyB2aWEgcHJvbWlzZXNcbiAgICAgKi9cbiAgICBpbml0UmVtb3RlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlbW90ZSAgICA9IG1lLnJlbW90ZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IG1lLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIG9yaWdpbjtcblxuICAgICAgICBpZiAoIW1lLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdGUgbWV0aG9kIGFjY2VzcyBvbmx5IGZ1bmN0aW9uYWwgZm9yIFNpbmdsZXRvbiBjbGFzc2VzICcgKyBjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFOZW8uY29uZmlnLnVuaXRUZXN0TW9kZSAmJiBOZW8uaXNPYmplY3QocmVtb3RlKSkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVtb3RlKS5mb3JFYWNoKChbd29ya2VyLCBtZXRob2RzXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09IHdvcmtlcikge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW4gPSBOZW8ud29ya2VySWQgPT09ICdtYWluJyA/IE5lby53b3JrZXIuTWFuYWdlciA6IE5lby5jdXJyZW50V29ya2VyO1xuXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbi5zZW5kTWVzc2FnZSh3b3JrZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgICAgIDogJ3JlZ2lzdGVyUmVtb3RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZHMgICAgIDogbWV0aG9kcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSAgIDogY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoY29uZmlnLCBwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgY3RvciA9IG1lLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICghY3Rvci5jb25maWcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmVvLmFwcGx5Q2xhc3NDb25maWcgaGFzIG5vdCBiZWVuIHJ1biBvbiAnICsgbWUuY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgICAgICBtZS5vcmlnaW5hbENvbmZpZyA9IE5lby5jbG9uZShjb25maWcsIHRydWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jdG9yLmNvbmZpZywgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gaW5zdGVhZCBvZiB1c2luZzpcbiAgICAgICAgLy8gbWVbY29uZmlnU3ltYm9sXSA9IHZhbHVlcztcbiAgICAgICAgLy8gd2Uga2VlcCB0aGUgT2JqZWN0IGluc3RhbmNlIChkZWZpbmVkIHZpYSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygpID0+IG5vbiBlbnVtZXJhYmxlKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcblxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBieSBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgVGhlIGtleSBvZiBhIHN0YXRpY0NvbmZpZyBkZWZpbmVkIGluc2lkZSBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGNvbmZpZyBleGlzdHMgYW5kIGdvdCBjaGFuZ2VkXG4gICAgICovXG4gICAgc2V0U3RhdGljQ29uZmlnKGtleSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IHN0YXRpY0NvbmZpZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuXG4gICAgICAgIGlmIChzdGF0aWNDb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgc3RhdGljQ29uZmlnW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgdG9TdHJpbmcoKSBtZXRob2QsIGUuZy48L3A+XG4gICAgICogYE5lby5jcmVhdGUoJ05lby5jb21wb25lbnQuQnV0dG9uJykudG9TdHJpbmcoKSA9PiBcIltvYmplY3QgTmVvLmNvbXBvbmVudC5CdXR0b24gKG5lby1idXR0b24tMSldXCJgXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZSArICcgKGlkOicgKyB0aGlzLmlkICsgJyknO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDxwPkVuaGFuY2luZyB0aGUgaW5zdGFuY2VvZiBtZXRob2QuIFdpdGhvdXQgdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiA8cD5XaXRoIHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IGZhbHNlYDxicj5cbiAgICAgKiBgTmVvLmNyZWF0ZShOZW8uY29sbGVjdGlvbi5CYXNlKSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gdHJ1ZWBcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIHtcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlW2lzSW5zdGFuY2VdID09PSB0cnVlID8gc3VwZXJbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkgOiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5CYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9IGZhbHNlO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiLyoqXG4gKiBUaGlzIGNsYXNzIGdldHMgdXNlZCBieSBjb3JlLkJhc2UsIHNvIGl0IGNhbiBub3QgZXh0ZW5kIGl0LlxuICogSXQgY291bGQgZ2V0IHNpbXBsaWZpZWQgdG8ganVzdCBiZWluZyBhbiBvYmplY3QgKG5lZWRzIHRvIG1hbnVhbGx5IGdldCBwdXQgaW50byB0aGUgTmVvIG5hbWVzcGFjZSBpbiB0aGlzIGNhc2UpLlxuICogQGNsYXNzIE5lby5jb3JlLklkR2VuZXJhdG9yXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIElkR2VuZXJhdG9yIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcmVnaXN0ZXJUb0dsb2JhbE5zOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5JZEdlbmVyYXRvcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaWQtZ2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHByZWZpeCBmb3IgbmVvIGluc3RhbmNlIGlkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2U9J25lby0nXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlOiAnbmVvLScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249J3RydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pZENvdW50ZXIgPSB7fTtcblxuICAgICAgICAvLyBhbGlhc1xuICAgICAgICBOZW8uZ2V0SWQgPSBtZS5nZXRJZC5iaW5kKG1lKTtcbiAgICB9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWQobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZSB8fCAnbmVvJztcblxuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb3VudGVyID0gbWUuaWRDb3VudGVyLFxuICAgICAgICAgICAgY291bnQgICA9IGNvdW50ZXJbbmFtZV0gfHwgMDtcblxuICAgICAgICBjb3VudGVyW25hbWVdID0gKytjb3VudDtcblxuICAgICAgICByZXR1cm4gbWUuYmFzZSArIChuYW1lID09PSAnbmVvJyA/ICcnIDogbmFtZSArICctJykgKyBjb3VudDtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKElkR2VuZXJhdG9yKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJZEdlbmVyYXRvcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuTG9nZ2VyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIExvZ2dlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5Mb2dnZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Mb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbG9nZ2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIGZhbHNlIHRvIGRpc2FibGUgdGhlIGxvZ2dpbmdcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVMb2dzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsZXZlbD0nbG9nJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGV2ZWw6ICdsb2cnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gZW5hYmxlTG9ncz10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gYWxpYXNlc1xuICAgICAgICBOZW8uYXBwbHlGcm9tTnMoTmVvLCB0aGlzLCB7XG4gICAgICAgICAgICBlcnJvciAgIDogJ2Vycm9yJyxcbiAgICAgICAgICAgIGluZm8gICAgOiAnaW5mbycsXG4gICAgICAgICAgICBsb2cgICAgIDogJ2xvZycsXG4gICAgICAgICAgICBsb2dFcnJvcjogJ2xvZ0Vycm9yJyxcbiAgICAgICAgICAgIHdhcm4gICAgOiAnd2FybidcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBlcnJvcih2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2xvZyc7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGluZm8oLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2luZm8nO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBsb2dFcnJvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnZXJyb3InO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICB3YXJuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICd3YXJuJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB3cml0ZSguLi5hcmdzKSB7XG4gICAgICAgIGlmICh0aGlzLmVuYWJsZUxvZ3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVbdGhpcy5sZXZlbF0oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExvZ2dlcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoTG9nZ2VyKTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29yZS5PYnNlcnZhYmxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE9ic2VydmFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuT2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLk9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWl4aW4tb2JzZXJ2YWJsZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWl4aW4tb2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICBpbml0T2JzZXJ2YWJsZShjb25maWcpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHByb3RvID0gbWUuX19wcm90b19fLFxuICAgICAgICAgICAgbGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChjb25maWcubGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBtZS5saXN0ZW5lcnMgPSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0ZW5lcnMgPSBtZS5saXN0ZW5lcnM7XG5cbiAgICAgICAgbWUubGlzdGVuZXJzID0ge307XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnLm9ic2VydmFibGUgJiYgIXByb3RvLmNvbnN0cnVjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBmaXJlICAgICAgICAgIDogbWUuZmlyZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBtZS5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcihuYW1lLCBvcHRzLCBzY29wZSwgZXZlbnRJZCwgZGF0YSwgb3JkZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7IC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgIGZuICAgIDogbGlzdGVuZXIsXG4gICAgICAgICAgICBzY29wZSA6IHNjb3BlLFxuICAgICAgICAgICAgZGF0YSAgOiBkYXRhLFxuICAgICAgICAgICAgaWQgICAgOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChleGlzdGluZyA9IG1lLmxpc3RlbmVycyAmJiBtZS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLmZvckVhY2goY2ZnID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIGV2ZW50IGhhbmRsZXIgYXR0YWNoZWQ6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnB1c2goZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzW25hbWVdID0gW2V2ZW50Q29uZmlnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudENvbmZpZy5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgZmlyZShuYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyAgICAgID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcbiAgICAgICAgICAgIGxlbiAgICA9IGV2ZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnID0gZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBldmVudElkXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRJZCkge1xuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XG4gICAgICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBtYXRjaCAgICAgICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudENvbmZpZy5pZCA9PT0gZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBpZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKG1hdGNoLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHN1c3BlbmRMaXN0ZW5lcnM6IGZ1bmN0aW9uKHF1ZXVlKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBhZGRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgb24oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBldmVudElkXG4gICAgICovXG4gICAgdW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XG5cbmV4cG9ydCB7T2JzZXJ2YWJsZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGVjYW1lbFJlZ0V4OiAvKFthLXpdKShbQS1aXSkvZ1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuVXRpbCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLlV0aWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29yZS11dGlsJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnLFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN5bGVzIG9iamVjdCB3aGljaCBjYW4gdXNlIGNhbWVsY2FzZSBzeW50YXggaW50byBhIHN0eWxlcyBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIFRoZSBzdHlsZXMgb2JqZWN0XG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0eWxlcyBzdHJpbmcgKERPTSByZWFkeSlcbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlU3R5bGVzKHN0eWxlcykge1xuICAgICAgICBsZXQgc3R5bGUgPSAnJztcblxuICAgICAgICBPYmplY3QuZW50cmllcyhzdHlsZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSBVdGlsLmRlY2FtZWwoa2V5KSArICc6JyArIHZhbHVlICsgJzsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSBSZXR1cm5zIGZhbHNlIGZvciBub24gc3RyaW5nIGlucHV0c1xuICAgICAqL1xuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXRpbC5pc1N0cmluZyhzdHJpbmcpICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGlucHV0IGNvbnRhaW5pbmcgdXBwZXJjYXNlIGNoYXJhY3RlcnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoc3RyLCBsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0FycmF5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgYm9vbGVhblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIG5vdCB1bmRlZmluZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGVtcHR5IEFycmF5LCBPYmplY3Qgb3IgU3RyaW5nXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R8U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VtcHR5KHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIG51bWJlci4gUmV0dXJucyBmYWxzZSBmb3Igbm9uLWZpbml0ZSBudW1iZXJzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKHZhbHVlKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc09iamVjdCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYW55IGl0ZXJhYmxlIChzdHJpbmdzLCBudW1lcmljIGluZGljZXMgYW5kIGEgbGVuZ3RoIHByb3BlcnR5KSBpbnRvIGEgdHJ1ZSBhcnJheVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gaXRlcmFibGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIHN0YXJ0IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtlbmQ9aXRlcmFibGUubGVuZ3RoXSBlbmQgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIHRvQXJyYXkoaXRlcmFibGUsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgbGV0IGxlbjtcblxuICAgICAgICBpZiAoIWl0ZXJhYmxlIHx8ICEobGVuID0gaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYWJsZS5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlcmFibGUsIHN0YXJ0IHx8IDAsIGVuZCB8fCBsZW4pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVXRpbCk7XG5cbi8vIGFsaWFzZXNcbk5lby5hcHBseUZyb21OcyhOZW8sIFV0aWwsIHtcbiAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICBjcmVhdGVTdHlsZXMgICAgIDogJ2NyZWF0ZVN0eWxlcycsXG4gICAgY2FwaXRhbGl6ZSAgICAgICA6ICdjYXBpdGFsaXplJyxcbiAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgIGlzQXJyYXkgICAgICAgICAgOiAnaXNBcnJheScsXG4gICAgaXNCb29sZWFuICAgICAgICA6ICdpc0Jvb2xlYW4nLFxuICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICBpc0VtcHR5ICAgICAgICAgIDogJ2lzRW1wdHknLFxuICAgIGlzRnVuY3Rpb24gICAgICAgOiAnaXNGdW5jdGlvbicsXG4gICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgaXNPYmplY3QgICAgICAgICA6ICdpc09iamVjdCcsXG4gICAgaXNTdHJpbmcgICAgICAgICA6ICdpc1N0cmluZycsXG4gICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xufSwgdHJ1ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFV0aWw7IiwiaW1wb3J0IEJhc2UgICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgIGZyb20gJy4vTG9nZ2VyLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSAgZnJvbSAnLi9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgZnJvbSAnLi9VdGlsLm1qcyc7XG5cbmV4cG9ydCB7QmFzZSwgTG9nZ2VyLCBPYnNlcnZhYmxlLCBVdGlsfTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29yZUJhc2V9IGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhbGwgb3RoZXIgbGF5b3V0cy5cbiAqIFVzZSBpdCBkaXJlY3RseSBpbiBjYXNlIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGNvbnRhaW5lciB3aXRob3V0IGEgbGF5b3V0LlxuICogQGNsYXNzIE5lby5sYXlvdXQuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkJhc2UnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWJhc2UnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1iYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBJZCBvZiB0aGUgQ29udGFpbmVyIGluc3RhbmNlIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICAgICAqIEBtZW1iZXIgez9TdHJpbmd9IGNvbnRhaW5lcklkPW51bGxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lcklkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSWRlbnRpZmllciBmb3IgYWxsIGNsYXNzZXMgdGhhdCBleHRlbmQgbGF5b3V0LkJhc2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNMYXlvdXQ9dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNMYXlvdXQ6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHt9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHt9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gaXRlbVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHt9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKSB7fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuQ2FyZFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5CYXNlXG4gKi9cbmNsYXNzIENhcmQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZm9yIGFuIGFjdGl2ZSBpdGVtIGluc2lkZSB0aGUgY2FyZCBsYXlvdXRcbiAgICAgICAgICogQG1lbWJlciBhY3RpdmVJdGVtQ2xzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUl0ZW1DbHM6ICdhY3RpdmUtaXRlbScsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZm9yIGFuIGluYWN0aXZlIGl0ZW0gaW5zaWRlIHRoZSBjYXJkIGxheW91dFxuICAgICAgICAgKiBAbWVtYmVyIGluYWN0aXZlSXRlbUNsc1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpbmFjdGl2ZUl0ZW1DbHM6ICdpbmFjdGl2ZS1pdGVtJyxcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBmb3IgYW4gaXRlbSBpbnNpZGUgdGhlIGNhcmQgbGF5b3V0XG4gICAgICAgICAqIEBtZW1iZXIgaXRlbUNsc1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtQ2xzOiAnbmVvLWxheW91dC1jYXJkLWl0ZW0nXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkNhcmQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkNhcmQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWNhcmQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1jYXJkJyxcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGl0ZW0gaW5kZXggb2YgdGhlIGNhcmQsIHdoaWNoIGlzIGN1cnJlbnRseSBhY3RpdmUuXG4gICAgICAgICAqIENoYW5nZSB0aGlzIHZhbHVlIHRvIGFjdGl2YXRlIGEgZGlmZmVyZW50IGNhcmQuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlSW5kZXhfPTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUluZGV4XzogMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyB0aGUgQ1NTIGNsYXNzZXMgb2YgdGhlIGNvbnRhaW5lciBpdGVtcyB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBBdXRvbWF0aWNhbGx5IGdldHMgdHJpZ2dlcmVkIGFmdGVyIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiBhY3RpdmVJbmRleC5cbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0QWN0aXZlSW5kZXgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBzQ2ZnICAgICAgPSBtZS5nZXRTdGF0aWNDb25maWcoKSxcbiAgICAgICAgICAgIGlzQWN0aXZlSW5kZXgsIGNscywgaXRlbXM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gY29udGFpbmVyLml0ZW1zO1xuXG4gICAgICAgICAgICBpZiAoIWl0ZW1zW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgIE5lby5lcnJvcignVHJ5aW5nIHRvIGFjdGl2YXRlIGEgbm9uIGV4aXN0aW5nIGNhcmQnLCB2YWx1ZSwgaXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNscyAgICAgICAgICAgPSBpdGVtLmNscztcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZUluZGV4ID0gaW5kZXggPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXNBY3RpdmVJbmRleCA/IHNDZmcuaW5hY3RpdmVJdGVtQ2xzIDogc0NmZy5hY3RpdmVJdGVtQ2xzKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoICAgY2xzLCBpc0FjdGl2ZUluZGV4ID8gc0NmZy5hY3RpdmVJdGVtQ2xzICAgOiBzQ2ZnLmluYWN0aXZlSXRlbUNscyk7XG5cbiAgICAgICAgICAgICAgICBpdGVtLmNscyA9IGNscztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGx5IHNldHMgdGhlIENTUyBjbGFzc2VzIG9mIHRoZSBjb250YWluZXIgaXRlbXMgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIGNoaWxkXG4gICAgICogQHBhcmFtIGluZGV4XG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzQ2ZnICAgICA9IG1lLmdldFN0YXRpY0NvbmZpZygpLFxuICAgICAgICAgICAgY2hpbGRDbHMgPSBjaGlsZC5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNoaWxkQ2xzLCBzQ2ZnLml0ZW1DbHMpO1xuICAgICAgICBOZW9BcnJheS5hZGQoY2hpbGRDbHMsIG1lLmFjdGl2ZUluZGV4ID09PSBpbmRleCA/IHNDZmcuYWN0aXZlSXRlbUNscyA6IHNDZmcuaW5hY3RpdmVJdGVtQ2xzKTtcblxuICAgICAgICBjaGlsZC5jbHMgPSBjaGlsZENscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuQ2FyZDogYXBwbHlSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzIHx8IFtdLCAnbmVvLWxheW91dC1jYXJkJyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkNhcmQ6IHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tbGF5b3V0LWNhcmQnKTtcblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2FyZCk7XG5cbmV4cG9ydCB7Q2FyZCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkZpdFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5CYXNlXG4gKi9cbmNsYXNzIEZpdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkZpdCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuRml0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1maXQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1maXQnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxseSBzZXRzIHRoZSBDU1MgY2xhc3NlcyBvZiB0aGUgY29udGFpbmVyIGl0ZW1zIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSBjaGlsZFxuICAgICAqIEBwYXJhbSBpbmRleFxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLmNscyA9IE5lb0FycmF5LnVuaW9uKGNoaWxkLmNscywgJ25lby1sYXlvdXQtZml0LWl0ZW0nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRml0OiBhcHBseVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMgfHwgW10sICduZW8tbGF5b3V0LWZpdCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHN3aXRjaGluZyB0byBhIGRpZmZlcmVudCBsYXlvdXQuXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GaXQ6IHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tbGF5b3V0LWZpdCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaXQpO1xuXG5leHBvcnQge0ZpdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkZsZXhib3hcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuQmFzZVxuICovXG5jbGFzcyBGbGV4Ym94IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBhbGlnblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYWxpZ25WYWx1ZXM9WydjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgJ3N0cmV0Y2gnLCBudWxsXVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnblZhbHVlczogWydjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgJ3N0cmV0Y2gnLCBudWxsXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgZGlyZWN0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBkaXJlY3Rpb25WYWx1ZXM9Wydjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnLCAncm93JywgJ3Jvdy1yZXZlcnNlJywgbnVsbF1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uVmFsdWVzOiBbJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZScsICdyb3cnLCAncm93LXJldmVyc2UnLCBudWxsXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgcGFja1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gcGFja1ZhbHVlcz1bJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCBudWxsXVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrVmFsdWVzOiBbJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCBudWxsXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3Igd3JhcFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gd3JhcFZhbHVlcz1bJ25vd3JhcCcsICd3cmFwJywgJ3dyYXAtcmV2ZXJzZSddXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHdyYXBWYWx1ZXM6IFsnbm93cmFwJywgJ3dyYXAnLCAnd3JhcC1yZXZlcnNlJ10sXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkZsZXhib3gnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkZsZXhib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWZsZXhib3gnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1mbGV4Ym94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCAnc3RyZXRjaCcsIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFsaWduXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6ICdjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnLCAncm93JywgJ3Jvdy1yZXZlcnNlJywgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGlyZWN0aW9uXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb25fOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHBhY2tfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBhY2tfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NTIGNsYXNzTmFtZSBwcmVmaXhcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcmVmaXg9J25lby1mbGV4LSdcbiAgICAgICAgICovXG4gICAgICAgIHByZWZpeDogJ25lby1mbGV4LScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6IG5vd3JhcCwgd3JhcCwgd3JhcHJldmVyc2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB3cmFwXz0nbm93cmFwJ1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcF86ICdub3dyYXAnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwiYWxpZ25cIiBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldEFsaWduKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnYWxpZ24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNscyBhZnRlciBcImRpcmVjdGlvblwiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0RGlyZWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJwYWNrXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQYWNrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAncGFjaycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwid3JhcFwiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXcmFwKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnd3JhcCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGZsZXggdmFsdWUgdG8gYW4gaXRlbSBvZiB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIGxldCBzdHlsZSA9IGl0ZW0uc3R5bGUgfHwge307XG5cbiAgICAgICAgc3R5bGUuZmxleCA9IHN0eWxlLmZsZXggfHwgaXRlbS5mbGV4IHx8ICh0aGlzLmFsaWduID09PSAnc3RyZXRjaCcgPyAxIDogJzAgMSBhdXRvJyk7XG4gICAgICAgIGl0ZW0uc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBwcmVmaXggICAgPSBtZS5wcmVmaXgsXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRmxleGJveDogYXBwbHlSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzIHx8IFtdLCBwcmVmaXggKyAnY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKG1lLmFsaWduKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAnYWxpZ24tJyArIG1lLmFsaWduKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAnZGlyZWN0aW9uLScgKyBtZS5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5wYWNrKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAncGFjay0nICsgbWUucGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLndyYXApIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICd3cmFwLScgKyBtZS53cmFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIFwiYWxpZ25cIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRBbGlnbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnYWxpZ25WYWx1ZXMnLCAnYWxpZ24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJkaXJlY3Rpb25cIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2RpcmVjdGlvblZhbHVlcycsICdkaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJwYWNrXCIgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0UGFjayh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAncGFja1ZhbHVlcycsICdwYWNrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIFwid3JhcFwiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldFdyYXAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3dyYXBWYWx1ZXMnLCAnd3JhcCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIENTUyBydWxlcyBmcm9tIGFuIGNvbnRhaW5lciBpdGVtIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKiBAcGFyYW0gaXRlbVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgbGV0IHN0eWxlID0gaXRlbS5zdHlsZSB8fCB7fTtcblxuICAgICAgICBzdHlsZS5mbGV4ID0gaXRlbS5mbGV4IHx8IG51bGw7XG4gICAgICAgIGl0ZW0uc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBwcmVmaXggICAgPSBtZS5wcmVmaXgsXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRmxleGJveDogcmVtb3ZlUmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChtZS5hbGlnbikge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ2FsaWduLScgKyBtZS5hbGlnbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ2RpcmVjdGlvbi0nICsgbWUuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUucGFjaykge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ3BhY2stJyArIG1lLnBhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS53cmFwKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnd3JhcC0nICsgbWUud3JhcCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBwcm9wZXJ0eU5hbWUgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbGlkVmFsdWVzTmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICB0ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIHZhbGlkVmFsdWVzTmFtZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkVmFsdWVzID0gdGhpcy5nZXRTdGF0aWNDb25maWcodmFsaWRWYWx1ZXNOYW1lKTtcblxuICAgICAgICBpZiAoIU5lb0FycmF5Lmhhc0l0ZW0odmFsaWRWYWx1ZXMsIHZhbHVlKSkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKHRoaXMuY29udGFpbmVySWQsICctPiBsYXlvdXQ6IHN1cHBvcnRlZCB2YWx1ZXMgZm9yIFwiJyArIHByb3BlcnR5TmFtZSArICdcIiBhcmUnICwgdmFsaWRWYWx1ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHByZWZpeCAgICA9IG1lLnByZWZpeCxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyBwcm9wZXJ0eU5hbWUgKyAnLScgKyBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArIHByb3BlcnR5TmFtZSArICctJyArIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRmxleGJveCk7XG5cbmV4cG9ydCB7RmxleGJveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRmxleGJveCBmcm9tICcuL0ZsZXhib3gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5IQm94XG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkZsZXhib3hcbiAqL1xuY2xhc3MgSEJveCBleHRlbmRzIEZsZXhib3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkhCb3gnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkhCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWhib3gnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1oYm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uPSdyb3cnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb246ICdyb3cnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGZsZXggdmFsdWUgdG8gYW4gaXRlbSBvZiB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIC8vIERvIG5vdCBhcHBseSBmbGV4IGlmIGZpeGVkIHdpZHRoXG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgICAgc3VwZXIuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhCb3gpO1xuXG5leHBvcnQge0hCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IEZsZXhib3ggZnJvbSAnLi9GbGV4Ym94Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuVkJveFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5GbGV4Ym94XG4gKi9cbmNsYXNzIFZCb3ggZXh0ZW5kcyBGbGV4Ym94IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5WQm94J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5WQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC12Ym94J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtdmJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbj0nY29sdW1uJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBmbGV4IHZhbHVlIHRvIGFuIGl0ZW0gb2YgdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge1xuICAgICAgICAvLyBEbyBub3QgYXBwbHkgZmxleCBpZiBmaXhlZCBoZWlnaHRcbiAgICAgICAgaWYgKCFpdGVtLmhlaWdodCkge1xuICAgICAgICAgICAgc3VwZXIuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZCb3gpO1xuXG5leHBvcnQge1ZCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvbGxlY3Rpb25CYXNlfSBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJztcblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciB0aGUgb3RoZXIgbWFuYWdlciBjbGFzc2VzXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbGxlY3Rpb24uQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29sbGVjdGlvbkJhc2V7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkJhc2UnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2Jhc2UtbWFuYWdlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZS1tYW5hZ2VyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgcmVnaXN0ZXIoaXRlbSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5nZXQoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignVHJ5aW5nIHRvIGNyZWF0ZSBhbiBpdGVtIHdpdGggYW4gYWxyZWFkeSBleGlzdGluZyBpZCcsIGl0ZW0sIG1lLmdldChpdGVtLmlkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoaXRlbSkge1xuICAgICAgICB0aGlzLnJlbW92ZShpdGVtKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVkRvbVV0aWx9ICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBWTm9kZVV0aWx9IGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuQ29tcG9uZW50XG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIENvbXBvbmVudCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Db21wb25lbnQnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubWFuYWdlci5Db21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29tcG9uZW50LW1hbmFnZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbXBvbmVudC1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIE5lby5nZXRDb21wb25lbnQgPSB0aGlzLmdldEJ5SWQuYmluZCh0aGlzKTsgLy8gYWxpYXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBjb21wb25lbnQgd2hpY2ggbWF0Y2hlcyB0aGUgY29uZmlnLXNlbGVjdG9yIG1vdmluZyBkb3duIHRoZSBjb21wb25lbnQgaXRlbXMgdHJlZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGRvd24oY29tcG9uZW50SWQsIGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50ICAgPSBtZS5nZXRCeUlkKGNvbXBvbmVudElkKSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgID0gW10sXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG51bGwsXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IGNvbXBvbmVudC5pdGVtcyAmJiBjb21wb25lbnQuaXRlbXMubGVuZ3RoIHx8IDAsXG4gICAgICAgICAgICBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoO1xuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiBjb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdBcnJheSAgPSBPYmplY3QuZW50cmllcyhjb25maWcpO1xuICAgICAgICBjb25maWdMZW5ndGggPSBjb25maWdBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgY29uZmlnQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Lmhhc093blByb3BlcnR5KGtleSkgJiYgY29tcG9uZW50W2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IGNvbmZpZ0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gbWUuZG93bihjb21wb25lbnQuaXRlbXNbaV0uaWQsIGNvbmZpZyk7XG4gICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHRoZSBjb21wb25lbnQgaWQgaW4gY2FzZSB0aGVyZSBpcyBhIG1hdGNoXG4gICAgICovXG4gICAgZmluZFBhcmVudENvbXBvbmVudChwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IHBhdGggJiYgcGF0aC5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGlkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlkID0gcGF0aFtpXTtcblxuICAgICAgICAgICAgaWYgKGlkICYmIG1lLmhhcyhpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvOiByZXBsYWNlIGFsbCBjYWxscyBvZiB0aGlzIG1ldGhvZCB0byBjYWxscyB1c2luZyB0aGUgdXRpbC5WTm9kZSBjbGFzc1xuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdm5vZGVcbiAgICAgKiBAcGFyYW0gdm5vZGVcbiAgICAgKiBAcGFyYW0gY2hpbGRJZHNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXG4gICAgICovXG4gICAgZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzKSB7XG4gICAgICAgIHJldHVybiBWTm9kZVV0aWwuZ2V0Q2hpbGRJZHModm5vZGUsIGNoaWxkSWRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjaGlsZCBjb21wb25lbnRzIGZvdW5kIGluc2lkZSB0aGUgdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2VbXX0gY2hpbGRDb21wb25lbnRzXG4gICAgICovXG4gICAgZ2V0Q2hpbGRyZW4oY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBjaGlsZENvbXBvbmVudHMgPSBbXSxcbiAgICAgICAgICAgIGNoaWxkTm9kZXMgICAgICA9IFZOb2RlVXRpbC5nZXRDaGlsZElkcyhjb21wb25lbnQudm5vZGUpLFxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQ7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQgPSB0aGlzLmdldChub2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb21wb25lbnRzLnB1c2goY2hpbGRDb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRDb21wb25lbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gQXJyYXkgY29udGFpbmluZyB0aGUgaWRzIG9mIGFsbCBwYXJlbnQgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge1N0cmluZ1tdfSBwYXJlbnRJZHNcbiAgICAgKi9cbiAgICBnZXRQYXJlbnRJZHMoY29tcG9uZW50KSB7XG4gICAgICAgIGxldCBwYXJlbnRJZHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRJZHMucHVzaChjb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHBhdGhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZ2V0UGFyZW50UGF0aChwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbXBvbmVudFBhdGggPSBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICA9IHBhdGggJiYgcGF0aC5sZW5ndGggfHwgMDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWUuaGFzKHBhdGhbaV0pKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aC5wdXNoKHBhdGhbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFBhdGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIGFsbCBwYXJlbnQgY29tcG9uZW50cyBmb3IgYSBnaXZlbiBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfSBwYXJlbnRzXG4gICAgICovXG4gICAgZ2V0UGFyZW50cyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudHMgPSBbXTtcblxuICAgICAgICB3aGlsZSAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5wYXJlbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5nZXRCeUlkKGNvbXBvbmVudC5wYXJlbnRJZCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJlbnRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29tcG9uZW50SWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICB1cChjb21wb25lbnRJZCwgY29uZmlnKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50SWQpLFxuICAgICAgICAgICAgY29uZmlnQXJyYXksIGNvbmZpZ0xlbmd0aCwgbWF0Y2hBcnJheTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uZmlnQXJyYXkgID0gT2JqZWN0LmVudHJpZXMoY29uZmlnKTtcbiAgICAgICAgY29uZmlnTGVuZ3RoID0gY29uZmlnQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBjb25maWdBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50Lmhhc093blByb3BlcnR5KGtleSkgJiYgY29tcG9uZW50W2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBjb25maWdMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb21wb25lbnQpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKENvbXBvbmVudCk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgQ29tcG9uZW50TWFuYWdlcn0gZnJvbSAnLi9Db21wb25lbnQubWpzJztcbmltcG9ydCB7ZGVmYXVsdCBhcyBGb2N1c01hbmFnZXJ9ICAgICBmcm9tICcuL0ZvY3VzLm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVkRvbVV0aWx9ICAgICAgICAgZnJvbSAnLi4vdXRpbC9WRG9tLm1qcyc7XG5cbmNvbnN0IGV2ZW50Q29uZmlnS2V5cyA9IFtcbiAgICAnYnViYmxlJyxcbiAgICAnZGVsZWdhdGUnLFxuICAgICdsb2NhbCcsXG4gICAgJ3Njb3BlJyxcbiAgICAndm5vZGVJZCdcbl07XG5cbmNvbnN0IGdsb2JhbERvbUV2ZW50cyA9IFtcbiAgICAnY2hhbmdlJyxcbiAgICAnY2xpY2snLFxuICAgICdjb250ZXh0bWVudScsXG4gICAgJ2ZvY3VzaW4nLFxuICAgICdmb2N1c291dCcsXG4gICAgJ2lucHV0JyxcbiAgICAna2V5ZG93bicsXG4gICAgJ2tleXVwJyxcbiAgICAnbW91c2VlbnRlcicsXG4gICAgJ21vdXNlbGVhdmUnLFxuICAgICd3aGVlbCdcbl07XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkRvbUV2ZW50XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIERvbUV2ZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkRvbUV2ZW50J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuRG9tRXZlbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZG9tLWV2ZW50LW1hbmFnZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvbS1ldmVudC1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbGlzdGVuZXJzPXt9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG1hcD17fVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZpcmUoZXZlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYnViYmxlICAgICA9IHRydWUsXG4gICAgICAgICAgICBkYXRhICAgICAgID0gZXZlbnQuZGF0YSB8fCB7fSxcbiAgICAgICAgICAgIGV2ZW50TmFtZSAgPSBldmVudC5ldmVudE5hbWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgPSBudWxsLFxuICAgICAgICAgICAgcGF0aElkcyAgICA9IGRhdGEucGF0aC5tYXAoZSA9PiBlLmlkKSxcbiAgICAgICAgICAgIHBhdGggICAgICAgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudFBhdGgocGF0aElkcyksXG4gICAgICAgICAgICBsZW4gICAgICAgID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBjb21wb25lbnQsIGRlbGVnYXRpb25WZG9tLCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGlkLCBwcmV2ZW50RmlyZSwgdGFyZ2V0SWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWQgICAgICAgID0gcGF0aFtpXTtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IE5lby5nZXRDb21wb25lbnQoaWQpO1xuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLml0ZW1zW2lkXSAmJiBtZS5pdGVtc1tpZF1bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJlJywgZXZlbnROYW1lLCBkYXRhLCBsaXN0ZW5lcnMsIHBhdGgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFpc0Rpc2FibGVkICYmIEFycmF5LmlzQXJyYXkobGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXIgJiYgbGlzdGVuZXIuZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0aW9uVGFyZ2V0SWQgPSBtZS52ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgZGF0YS5wYXRoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZWxlZ2F0aW9uVGFyZ2V0SWQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXZlbnRGaXJlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Ugb25seSB3YW50IG1vdXNlZW50ZXIgJiBsZWF2ZSB0byBmaXJlIG9uIHRoZWlyIHRvcCBsZXZlbCBub2Rlcywgbm90IGZvciBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgfHwgZXZlbnROYW1lID09PSAnbW91c2VsZWF2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgPyBkYXRhLmZyb21FbGVtZW50SWQgOiBkYXRhLnRvRWxlbWVudElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFyZ2V0SWQsIGRlbGVnYXRpb25UYXJnZXRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJZCAmJiB0YXJnZXRJZCAhPT0gZGVsZWdhdGlvblRhcmdldElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGlvblZkb20gPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKGNvbXBvbmVudC52ZG9tLCBkZWxlZ2F0aW9uVGFyZ2V0SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbGVnYXRpb25WZG9tLnZkb20gJiYgVkRvbVV0aWwuZmluZFZkb21DaGlsZChkZWxlZ2F0aW9uVmRvbS52ZG9tLCB0YXJnZXRJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudEZpcmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcHJldmVudEZpcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKE5lby5nZXQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4uYXBwbHkobGlzdGVuZXIuc2NvcGUgfHwgc2VsZiwgW2RhdGFdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0ZW5lci5idWJibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWJibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHRyaWdnZXIgdGhlIEZvY3VzTWFuYWdlciBhZnRlciBub3JtYWwgZG9tTGlzdGVuZXJzIG9uIHRoZXNlIGV2ZW50cyBnb3QgZXhlY3V0ZWRcbiAgICAgICAgICAgIGlmIChldmVudE5hbWUgPT09ICdmb2N1c2luJyB8fCBldmVudE5hbWUgPT09ICdmb2N1c291dCcpIHtcbiAgICAgICAgICAgICAgICBGb2N1c01hbmFnZXJbJ29uJyArIE5lby5jYXBpdGFsaXplKGV2ZW50TmFtZSldKHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50UGF0aDogcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSAgICAgICAgIDogZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYnViYmxlKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdlbmVyYXRlTGlzdGVuZXJDb25maWcoY29uZmlnLCBzY29wZSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsZWdhdGUgOiBjb25maWcuZGVsZWdhdGUsXG4gICAgICAgICAgICBldmVudE5hbWU6IGNvbmZpZy5ldmVudE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgICA6IHNjb3BlLmlkLFxuICAgICAgICAgICAgb3B0cyAgICAgOiBjb25maWcsXG4gICAgICAgICAgICBzY29wZSAgICA6IGNvbmZpZy5zY29wZSAgIHx8IHNjb3BlLFxuICAgICAgICAgICAgdm5vZGVJZCAgOiBjb25maWcudm5vZGVJZCB8fCBzY29wZS5pZFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldEV2ZW50TmFtZShjb25maWcpIHtcbiAgICAgICAgbGV0IGV2ZW50TmFtZSA9IG51bGw7XG5cbiAgICAgICAgaWYgKE5lby5pc09iamVjdChjb25maWcpKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Q29uZmlnS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGtleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudE5hbWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRMaXN0ZW5lcihjb25maWcpIHtcbiAgICAgICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICBldmVudDtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tjb25maWcuaWRdKSB7XG4gICAgICAgICAgICBldmVudCA9IGxpc3RlbmVyc1tjb25maWcuaWRdW2NvbmZpZy5ldmVudE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3VudHMgbG9jYWwgZG9tRXZlbnQgbGlzdGVuZXJzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSBjb21wb25lbnQuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgbG9jYWxFdmVudHMgPSBbXSxcbiAgICAgICAgICAgIGV2ZW50LCBldmVudE5hbWU7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobGlzdGVuZXJzKS5mb3JFYWNoKGV2ZW50SWQgPT4ge1xuICAgICAgICAgICAgZXZlbnQgICAgID0gbGlzdGVuZXJzW2V2ZW50SWRdO1xuICAgICAgICAgICAgZXZlbnROYW1lID0gZXZlbnQuZXZlbnROYW1lO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lICYmIChldmVudC5sb2NhbCB8fCAhZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvY2FsRXZlbnRzJywgZXZlbnROYW1lKTtcblxuICAgICAgICAgICAgICAgIGxvY2FsRXZlbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBuYW1lICAgOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICdkb21FdmVudExpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgdm5vZGVJZDogZXZlbnQudm5vZGVJZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobG9jYWxFdmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgTmVvLndvcmtlci5BcHAucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ2FkZERvbUxpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBjb21wb25lbnQuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBldmVudHMgOiBsb2NhbEV2ZW50c1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkZWQgZG9tTGlzdGVuZXInLCBkYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcDogR290IGVycm9yIGF0dGVtcHRpbmcgdG8gYWRkIGEgZG9tTGlzdGVuZXInLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5kZWxlZ2F0ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZXZlbnROYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5pZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gY29uZmlnLmxvY2FsXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5vcmlnaW5hbENvbmZpZ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcucHJpb3JpdHlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaWYgdGhlIGxpc3RlbmVyIGdvdCByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSAoZmFsc2UgaW4gY2FzZSBpdCB3YXMgYWxyZWFkeSB0aGVyZSlcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb25maWcpIHtcbiAgICAgICAgbGV0IGFscmVhZHlSZWdpc3RlcmVkID0gZmFsc2UsXG4gICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA9IGNvbmZpZy5ldmVudE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgICA9IGNvbmZpZy5pZCxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgICAgID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgIG9wdHMgICAgICAgICAgICAgID0gY29uZmlnLm9wdHMsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICA9IGNvbmZpZy5zY29wZSxcbiAgICAgICAgICAgIGZuVHlwZSAgICAgICAgICAgID0gdHlwZW9mIG9wdHMsXG4gICAgICAgICAgICBmbiwgbGlzdGVuZXIsIGxpc3RlbmVyQ29uZmlnLCBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmIChmblR5cGUgPT09ICdmdW5jdGlvbicgfHwgZm5UeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZm4gPSBvcHRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm4gICAgPSBvcHRzLmZuO1xuICAgICAgICAgICAgc2NvcGUgPSBvcHRzLnNjb3BlIHx8IHNjb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaWRdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdGVuZXJzW2lkXVtldmVudE5hbWVdKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdGVuZXIpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uZm4udG9TdHJpbmcoKSA9PT0gZm4udG9TdHJpbmcoKSAmJiAvLyB0b2RvOiBhZGQgYSBiZXR0ZXIgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5zY29wZSAgICAgICAgID09PSBzY29wZSAmJlxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLmRlbGVnYXRlICAgICAgPT09IGNvbmZpZy5kZWxlZ2F0ZVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBhbHJlYWR5UmVnaXN0ZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhbHJlYWR5UmVnaXN0ZXJlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ21hbmFnZXIuRG9tRXZlbnQgcmVnaXN0ZXInLCBldmVudE5hbWUsIGNvbmZpZyk7XG5cbiAgICAgICAgbGlzdGVuZXJJZCA9IE5lby5nZXRJZCgnZG9tLWV2ZW50Jyk7XG5cbiAgICAgICAgY29uZmlnLmxpc3RlbmVySWQgPSBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGxpc3RlbmVyQ29uZmlnID0ge1xuICAgICAgICAgICAgYnViYmxlICAgICAgICA6IGNvbmZpZy5oYXNPd25Qcm9wZXJ0eSgnYnViYmxlJykgPyBjb25maWcuYnViYmxlIDogb3B0cy5oYXNPd25Qcm9wZXJ0eSgnYnViYmxlJykgPyBvcHRzLmJ1YmJsZSA6IHRydWUsXG4gICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogY29uZmlnLmRlbGVnYXRlLFxuICAgICAgICAgICAgZm4gICAgICAgICAgICA6IGZuLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGxpc3RlbmVySWQsXG4gICAgICAgICAgICBtb3VudGVkICAgICAgIDogIWNvbmZpZy5sb2NhbCAmJiBnbG9iYWxEb21FdmVudHMuaW5jbHVkZXMoZXZlbnROYW1lKSxcbiAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnOiBjb25maWcub3JpZ2luYWxDb25maWcsXG4gICAgICAgICAgICBwcmlvcml0eSAgICAgIDogY29uZmlnLnByaW9yaXR5IHx8IDEsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgIDogc2NvcGUsXG4gICAgICAgICAgICB2bm9kZUlkICAgICAgIDogY29uZmlnLnZub2RlSWRcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm1hcFtsaXN0ZW5lcklkXSA9IGxpc3RlbmVyQ29uZmlnO1xuXG4gICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXS5wdXNoKGxpc3RlbmVyQ29uZmlnKTtcblxuICAgICAgICBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV0uc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSA+IGIucHJpb3JpdHkpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFwKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIGxpc3RlbmVyIGRpZCBleGlzdCBhbmQgZ290IHJlbW92ZWRcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKGNvbmZpZywgc2NvcGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3VucmVnaXN0ZXInLCBjb25maWcpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdlbmVyYXRlTGlzdGVuZXJDb25maWcoY29uZmlnLCBzY29wZSkpO1xuICAgICAgICByZXR1cm47XG5cbiAgICAgICAgbGV0IGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihjb25maWcpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xpc3RlbmVyIGZvdW5kJywgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRG9tTGlzdGVuZXJzKGNvbXBvbmVudCwgZG9tTGlzdGVuZXJzLCBvbGREb21MaXN0ZW5lcnMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVnaXN0ZXJlZExpc3RlbmVycyA9IG1lLml0ZW1zW2NvbXBvbmVudC5pZF0gfHwge30sXG4gICAgICAgICAgICBpLCBsZW4sIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGREb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgb2xkRG9tTGlzdGVuZXJzLmZvckVhY2gob2xkRG9tTGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kICYgcmVtb3ZlIG5vIGxvbmdlciBleGlzdGluZyBsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb21MaXN0ZW5lcnMuaW5jbHVkZXMob2xkRG9tTGlzdGVuZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSByZWdpc3RlcmVkTGlzdGVuZXJzW21lLmdldEV2ZW50TmFtZShvbGREb21MaXN0ZW5lcildIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGxpc3RlbmVycy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldLm9yaWdpbmFsQ29uZmlnID09PSBvbGREb21MaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobGlzdGVuZXJzLCBsaXN0ZW5lcnNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIG5ldyBsaXN0ZW5lcnNcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnRDb25maWdLZXlzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnJlZ2lzdGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZSAgICAgIDogdmFsdWUuZGVsZWdhdGUgfHwgZG9tTGlzdGVuZXIuZGVsZWdhdGUgfHwgJyMnICsgY29tcG9uZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgICAgICA6IGNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGRvbUxpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiBkb21MaXN0ZW5lci5zY29wZSB8fCBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgICAgICA6IHZhbHVlLnZub2RlSWQgfHwgY29tcG9uZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIG1lLm1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ0NvbXBvbmVudC5kb21MaXN0ZW5lcnMgaGF2ZSB0byBiZSBhbiBhcnJheScsIGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50IHRvIHJlcGxhY2UgbGlzdGVuZXIgcGxhY2Vob2xkZXJzIHByb3ZpZGVkIGFzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuY29tcG9uZW50SWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNvbmZpZy5zY29wZVxuICAgICAqL1xuICAgIHVwZGF0ZUxpc3RlbmVyUGxhY2Vob2xkZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICA9IG1lLml0ZW1zW2NvbmZpZy5jb21wb25lbnRJZF0gfHwge30sXG4gICAgICAgICAgICBldmVudExpc3RlbmVycyA9IGl0ZW1zW2NvbmZpZy5ldmVudE5hbWVdIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBldmVudExpc3RlbmVycy5sZW5ndGgsXG4gICAgICAgICAgICBsaXN0ZW5lcjtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZm4gPT09IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4gICAgPSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlID0gY29uZmlnLnNjb3BlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSB0cnVlIGluIGNhc2UgdGhlIGRlbGVnYXRpb24gc3RyaW5nIG1hdGNoZXMgdGhlIGV2ZW50IHBhdGhcbiAgICAgKi9cbiAgICB2ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgcGF0aCkge1xuICAgICAgICBsZXQgZGVsZWdhdGlvbkFycmF5ID0gbGlzdGVuZXIuZGVsZWdhdGUuc3BsaXQoJyAnKSxcbiAgICAgICAgICAgIGogICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICAgPSBkZWxlZ2F0aW9uQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgcGF0aExlbiAgICAgICAgID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBoYXNNYXRjaCwgaSwgaXRlbSwgaXNJZCwgdGFyZ2V0SWQ7XG5cbiAgICAgICAgZm9yIChpPWxlbi0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW0gICAgID0gZGVsZWdhdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgaXNJZCAgICAgPSBpdGVtLnN0YXJ0c1dpdGgoJyMnKTtcblxuICAgICAgICAgICAgaWYgKGlzSWQgfHwgaXRlbS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoaXNJZCAmJiBwYXRoW2pdLmlkID09PSBpdGVtKSB8fFxuICAgICAgICAgICAgICAgICAgICBwYXRoW2pdLmNscy5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gcGF0aFtqXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5zdXJlIHRoZSBkZWxlZ2F0aW9uIHBhdGggaXMgYSBjaGlsZCBvZiB0aGUgb3duZXIgY29tcG9uZW50cyByb290IG5vZGVcbiAgICAgICAgZm9yICg7IGogPCBwYXRoTGVuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXRoW2pdLmlkID09PSBsaXN0ZW5lci52bm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tRXZlbnQpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERvbUV2ZW50KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkZvY3VzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEZvY3VzIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Gb2N1cydcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkZvY3VzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2ZvY3VzLW1hbmFnZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2ZvY3VzLW1hbmFnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb3B0cyBvYmplY3RzLlxuICAgICAgICAgKiBvcHRzLmNvbXBvbmVudFBhdGhcbiAgICAgICAgICogb3B0cy5kYXRhXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBoaXN0b3J5PVtdXG4gICAgICAgICAqL1xuICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3VzaW4gZXZlbnQgaGFzIG9jY3VyZWRcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBsYXN0Rm9jdXNJbkRhdGU9bnVsbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzSW5EYXRlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERhdGUgb2JqZWN0IHdoZW4gdGhlIGxhc3QgZm9jdXNvdXQgZXZlbnQgaGFzIG9jY3VyZWRcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBsYXN0Rm9jdXNJbkRhdGU9bnVsbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbGFzdEZvY3VzT3V0RGF0ZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbW91bnQgb2YgdGltZSBmb3IgYSBmb2N1c0luIHRvIG9jY3VyIGFmdGVyIHRoZSBsYXN0IGZvY3VzT3V0XG4gICAgICAgICAqIHRvIGJlIHRocmVhdGVkIGFzIGEgZm9jdXNtb3ZlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4Rm9jdXNJbk91dEdhcD0xMFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4Rm9jdXNJbk91dEdhcDogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4aW11bSBhbW91bnQgb2YgaXRlbXMgc3RvcmVkIGluc2lkZSB0aGUgaGlzdG9yeSBhcnJheVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEhpc3RvcnlMZW5ndGg9MjBcbiAgICAgICAgICovXG4gICAgICAgIG1heEhpc3RvcnlMZW5ndGg6IDIwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZGRUb0hpc3Rvcnkob3B0cykge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcblxuICAgICAgICBoaXN0b3J5LnVuc2hpZnQob3B0cyk7XG5cbiAgICAgICAgaWYgKGhpc3RvcnkubGVuZ3RoID49IHRoaXMubWF4SGlzdG9yeUxlbmd0aCkge1xuICAgICAgICAgICAgaGlzdG9yeS5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmb2N1c0VudGVyKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hZGRUb0hpc3Rvcnkob3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZvY3VzTGVhdmUob3B0cykge1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEZvY3VzKG9wdHMsIGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZm9jdXNNb3ZlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGlzdG9yeSAgICAgICAgICA9IG1lLmhpc3RvcnksXG4gICAgICAgICAgICBuZXdDb21wb25lbnRQYXRoID0gb3B0cy5jb21wb25lbnRQYXRoLFxuICAgICAgICAgICAgb2xkQ29tcG9uZW50UGF0aCA9IGhpc3RvcnlbMF0uY29tcG9uZW50UGF0aCxcbiAgICAgICAgICAgIGZvY3VzRW50ZXIgICAgICAgPSBOZW9BcnJheS5kaWZmZXJlbmNlKG5ld0NvbXBvbmVudFBhdGgsIG9sZENvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgZm9jdXNMZWF2ZSAgICAgICA9IE5lb0FycmF5LmRpZmZlcmVuY2Uob2xkQ29tcG9uZW50UGF0aCwgbmV3Q29tcG9uZW50UGF0aCksXG4gICAgICAgICAgICBmb2N1c01vdmUgICAgICAgID0gTmVvQXJyYXkuaW50ZXJzZWN0aW9uKG5ld0NvbXBvbmVudFBhdGgsIG9sZENvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgY29tcG9uZW50LCBkYXRhO1xuXG4gICAgICAgIG1lLnNldENvbXBvbmVudEZvY3VzKHtjb21wb25lbnRQYXRoOiBmb2N1c0VudGVyLCBkYXRhOiBvcHRzLmRhdGF9LCB0cnVlKTtcbiAgICAgICAgbWUuc2V0Q29tcG9uZW50Rm9jdXMoe2NvbXBvbmVudFBhdGg6IGZvY3VzTGVhdmUsIGRhdGE6IG9wdHMuZGF0YX0sIGZhbHNlKTtcblxuICAgICAgICBmb2N1c01vdmUuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BhdGg6IG9wdHMuZGF0YS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBvbGRQYXRoOiBoaXN0b3J5WzBdLmRhdGEucGF0aFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudC5vbkZvY3VzTW92ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub25Gb2N1c01vdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ2ZvY3VzTW92ZScsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hZGRUb0hpc3Rvcnkob3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uRm9jdXNpbihvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubGFzdEZvY3VzSW5EYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSAmJiBtZS5sYXN0Rm9jdXNJbkRhdGUgLSBtZS5sYXN0Rm9jdXNPdXREYXRlIDwgbWUubWF4Rm9jdXNJbk91dEdhcCkge1xuICAgICAgICAgICAgbWUuZm9jdXNNb3ZlKG9wdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZm9jdXNFbnRlcihvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBvbkZvY3Vzb3V0KG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5sYXN0Rm9jdXNPdXREYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtZS5sYXN0Rm9jdXNPdXREYXRlID4gbWUubGFzdEZvY3VzSW5EYXRlKSB7XG4gICAgICAgICAgICAgICAgbWUuZm9jdXNMZWF2ZShvcHRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbWUubWF4Rm9jdXNJbk91dEdhcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbnRhaW5zRm9jdXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHNldENvbXBvbmVudEZvY3VzKG9wdHMsIGNvbnRhaW5zRm9jdXMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCwgaGFuZGxlcjtcblxuICAgICAgICBvcHRzLmNvbXBvbmVudFBhdGguZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jb250YWluc0ZvY3VzID0gY29udGFpbnNGb2N1cztcblxuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBjb250YWluc0ZvY3VzID8gJ29uRm9jdXNFbnRlcicgOiAnb25Gb2N1c0xlYXZlJztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtoYW5kbGVyXShvcHRzLmRhdGEucGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoY29udGFpbnNGb2N1cyA/ICdmb2N1c0VudGVyJyA6ICdmb2N1c0xlYXZlJywgb3B0cy5kYXRhLnBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZvY3VzKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShGb2N1cyk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ29yZUJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkluc3RhbmNlXG4gKiBAZXh0ZW5kcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEluc3RhbmNlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkluc3RhbmNlJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuSW5zdGFuY2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naW5zdGFuY2UtbWFuYWdlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaW5zdGFuY2UtbWFuYWdlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgQ29yZUJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gdHJ1ZTtcblxuICAgICAgICBtZS5jb25zdW1lTmVvSWRNYXAoKTtcblxuICAgICAgICBOZW8uZ2V0ID0gbWUuZ2V0LmJpbmQobWUpOyAvLyBhbGlhc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGFsbCBpZHMgd2hpY2ggZ290IGFwcGxpZWQgdG8gdGhlIE5lbyBuYW1lc3BhY2UgYmVmb3JlIHRoaXMgaW5zdGFuY2UgZ290IGNyZWF0ZWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbnN1bWVOZW9JZE1hcCgpIHtcbiAgICAgICAgaWYgKE5lby5pZE1hcCkge1xuICAgICAgICAgICAgdGhpcy5hZGQoT2JqZWN0LnZhbHVlcyhOZW8uaWRNYXApKTtcbiAgICAgICAgICAgIGRlbGV0ZSBOZW8uaWRNYXA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEluc3RhbmNlKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShJbnN0YW5jZSk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQmFzZUNvbnRhaW5lcn0gZnJvbSAnLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIZWFkZXJCdXR0b24gICAgICAgICAgICAgICBmcm9tICcuL0hlYWRlckJ1dHRvbi5tanMnO1xuaW1wb3J0IEhlYWRlclRvb2xiYXIgICAgICAgICAgICAgIGZyb20gJy4vSGVhZGVyVG9vbGJhci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgICAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBTdHJpcCAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuL1N0cmlwLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWIuQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB0YWJCYXJQb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdGFiQmFyUG9zaXRpb25zPVsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J11cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFyUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFiLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWIuQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYi1jb250YWluZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYi1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhY3RpdmVJbmRleF89MFxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlSW5kZXhfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB3aWxsIGFjdGl2YXRlIGEgdGFiIHdoaWNoIGdldHMgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgLyBhZGRlZCBhZnRlciB0aGUgVGFiQ29udGFpbmVyIGlzIG1vdW50ZWRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYWN0aXZhdGVJbnNlcnRlZFRhYnM9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2YXRlSW5zZXJ0ZWRUYWJzOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZUNscz0nbmVvLXRhYi1jb250YWluZXInXG4gICAgICAgICAqL1xuICAgICAgICBiYXNlQ2xzOiAnbmVvLXRhYi1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IFtjYXJkQ29udGFpbmVySWRdPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNhcmRDb250YWluZXJJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGFkZHMgYmFzZUNscyArICctcGxhaW4nIGlzIGNhc2UgcGxhaW4gaXMgc2V0IHRvIHRydWVcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby10YWItY29udGFpbmVyJ10sXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgdGhlIHRhYi5TdHJpcFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gW2NvbnRlbnRDb250YWluZXJEZWZhdWx0c109bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudENvbnRhaW5lckRlZmF1bHRzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciB0aGUgdGFiLkhlYWRlclRvb2xiYXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IFtoZWFkZXJUb29sYmFyRGVmYXVsdHNdPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gbm90IGFwcGx5IGEgYmFja2dyb3VuZCBlZmZlY3QgdG8gdGhlIHRhYiBoZWFkZXIgY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHBsYWluXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwbGFpbl86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdGFiQmFySWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFySWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZhdWx0IGNvbmZpZ3MgZm9yIHRoZSB0YWIuU3RyaXBcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IFt0YWJTdHJpcERlZmF1bHRzXT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJTdHJpcERlZmF1bHRzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IFt0YWJTdHJpcElkXT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0YWJTdHJpcElkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBvc2l0aW9uIG9mIHRoZSB0YWIgaGVhZGVyIHRvb2xiYXIuXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBhcmUgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0LlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRhYkJhclBvc2l0aW9uXz0ndG9wJ1xuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFyUG9zaXRpb25fOiAndG9wJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUFjdGl2ZVRhYkluZGljYXRvcl89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yXzogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHRoaXMuX2xheW91dCA9IHRoaXMuZ2V0TGF5b3V0Q29uZmlnKCk7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgb25lIG9yIG11bHRpcGxlIHRhYnMgYXQgdGhlIGVuZCBvZiB0aGUgaGVhZGVyXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydCh0aGlzLmdldFRhYkJhcigpLml0ZW1zLmxlbmd0aCwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhY3RpdmVJbmRleCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0QWN0aXZlSW5kZXgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNhcmRDb250YWluZXJJZCk7XG5cbiAgICAgICAgaWYgKG1lLnJlbmRlcmVkICYmIHZhbHVlID4gLTEpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZVRhYkJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgY2FyZENvbnRhaW5lci5sYXlvdXQuYWN0aXZlSW5kZXggPSB2YWx1ZTtcblxuICAgICAgICAgICAgbWUuZmlyZSgnYWN0aXZlSW5kZXhDaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHBsYWluIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFBsYWluKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBiYXNlQ2xzID0gbWUuYmFzZUNscyxcbiAgICAgICAgICAgIGNscyAgICAgPSBtZS5jbHMgfHwgW107XG5cbiAgICAgICAgTmVvQXJyYXlbdmFsdWUgPyAndW5zaGlmdCcgOiAncmVtb3ZlJ10oY2xzLCBiYXNlQ2xzICsgJy1wbGFpbicpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0YWJCYXJQb3NpdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWUgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VGFiQmFyUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tJyArIG9sZFZhbHVlKTtcbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby0nICsgdmFsdWUpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG5cbiAgICAgICAgaWYgKG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBtZS5sYXlvdXQgPSBtZS5nZXRMYXlvdXRDb25maWcoKTtcbiAgICAgICAgICAgIG1lLmdldFRhYkJhcigpLmRvY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLmdldFRhYlN0cmlwKCkuY2xzID0gWyduZW8tdGFiLXN0cmlwJywgICduZW8tZG9jay0nICsgdmFsdWVdO1xuXG4gICAgICAgICAgICBtZS5maXJlKCd0YWJCYXJQb3NpdGlvbkNoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQWN0aXZlVGFiSW5kaWNhdG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZUFjdGl2ZVRhYkluZGljYXRvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc0RlZmluZWQob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmdldFRhYkJhcigpICAudXNlQWN0aXZlVGFiSW5kaWNhdG9yID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLmdldFRhYlN0cmlwKCkudXNlQWN0aXZlVGFiSW5kaWNhdG9yID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSB0YWJCYXJQb3NpdGlvbiBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldFRhYkJhclBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAndGFiQmFyUG9zaXRpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgPSBtZS5pdGVtcyB8fCBbXSxcbiAgICAgICAgICAgIHRhYkJ1dHRvbnMgICAgPSBbXSxcbiAgICAgICAgICAgIHRhYkNvbXBvbmVudHMgPSBbXTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVySWQ6IG1lLmNhcmRDb250YWluZXJJZCB8fCBOZW8uZ2V0SWQoJ2NvbnRhaW5lcicpLFxuICAgICAgICAgICAgdGFiQmFySWQgICAgICAgOiBtZS50YWJCYXJJZCAgICAgICAgfHwgTmVvLmdldElkKCd0YWItaGVhZGVyLXRvb2xiYXInKSxcbiAgICAgICAgICAgIHRhYlN0cmlwSWQgICAgIDogbWUudGFiU3RyaXBJZCAgICAgIHx8IE5lby5nZXRJZCgndGFiLXN0cmlwJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnMucHVzaChtZS5nZXRUYWJCdXR0b25Db25maWcoaXRlbS50YWJCdXR0b25Db25maWcsIGluZGV4KSk7XG4gICAgICAgICAgICBkZWxldGUgaXRlbS50YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgTmVvLmNvbXBvbmVudC5CYXNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsuLi5tZS5pdGVtRGVmYXVsdHMsIGZsZXg6IDEsIC4uLml0ZW19O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJDb21wb25lbnRzLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgIDogSGVhZGVyVG9vbGJhcixcbiAgICAgICAgICAgIGRvY2sgICAgICAgICAgICAgICAgIDogbWUudGFiQmFyUG9zaXRpb24sXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgIDogbWUudGFiQmFySWQsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA6IHRhYkJ1dHRvbnMsXG4gICAgICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3I6IG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcixcbiAgICAgICAgICAgIC4uLm1lLmhlYWRlclRvb2xiYXJEZWZhdWx0cyB8fCB7fVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICAgICAgICA6IFN0cmlwLFxuICAgICAgICAgICAgY2xzICAgICAgICAgICAgICAgICAgOiBbJ25lby10YWItc3RyaXAnLCAnbmVvLWRvY2stJyArIG1lLnRhYkJhclBvc2l0aW9uXSxcbiAgICAgICAgICAgIGZsZXggICAgICAgICAgICAgICAgIDogJ25vbmUnLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICAgOiBtZS50YWJTdHJpcElkLFxuICAgICAgICAgICAgdGFiQ29udGFpbmVySWQgICAgICAgOiBtZS5pZCxcbiAgICAgICAgICAgIHVzZUFjdGl2ZVRhYkluZGljYXRvcjogbWUudXNlQWN0aXZlVGFiSW5kaWNhdG9yLFxuICAgICAgICAgICAgLi4ubWUudGFiU3RyaXBEZWZhdWx0cyB8fCB7fVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSAgICAgICAgICAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgY2xzICAgICAgICAgICAgICAgICAgOiBbJ25lby1jb250YWluZXInLCAnbmVvLXRhYi1jb250ZW50LWNvbnRhaW5lciddLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICAgOiBtZS5jYXJkQ29udGFpbmVySWQsXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHMgICAgICAgICA6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgICAgIDogdGFiQ29tcG9uZW50cyxcbiAgICAgICAgICAgIGxheW91dCAgICAgICAgICAgICAgIDoge250eXBlOiAnY2FyZCcsIGFjdGl2ZUluZGV4OiBtZS5hY3RpdmVJbmRleH0sXG4gICAgICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3I6IG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcixcbiAgICAgICAgICAgIC4uLm1lLmNvbnRlbnRDb250YWluZXJEZWZhdWx0cyB8fCB7fVxuICAgICAgICB9XTtcblxuICAgICAgICBtZS5pdGVtRGVmYXVsdHMgPSBudWxsO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGNhcmQgYnkgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm4ge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldENhcmQoaW5kZXgpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuZ2V0Q2FyZENvbnRhaW5lcigpLml0ZW1zW2luZGV4XTtcblxuICAgICAgICByZXR1cm4gY2FyZCB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udGFpbmVyLkJhc2V9XG4gICAgICovXG4gICAgZ2V0Q2FyZENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5jYXJkQ29udGFpbmVySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFtb3VudCBvZiBpdGVtcyBpbnNpZGUgdGhlIHRhYiBoZWFkZXIgdG9vbGJhclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkJhcigpLml0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZ2V0TGF5b3V0Q29uZmlnKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGxheW91dENvbmZpZyA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoKG1lLnRhYkJhclBvc2l0aW9uKSB7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ3N0cmV0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2hib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdzdHJldGNoJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncm93JyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ2hib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdzdHJldGNoJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncm93LXJldmVyc2UnLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dENvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5Ub29sYmFyfVxuICAgICAqL1xuICAgIGdldFRhYkJhcigpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy50YWJCYXJJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG1lcmdlZCBjb25maWdcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGdldFRhYkJ1dHRvbkNvbmZpZyhjb25maWcsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEhlYWRlckJ1dHRvbixcbiAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgaW5kZXggIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogbWUuYWN0aXZlSW5kZXggPT09IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCkuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7Li4uZGVmYXVsdENvbmZpZywgLi4uY29uZmlnfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7TmVvLnRhYi5TdHJpcH1cbiAgICAgKi9cbiAgICBnZXRUYWJTdHJpcCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy50YWJTdHJpcElkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnRzIGFuIGl0ZW0gb3IgYXJyYXkgb2YgaXRlbXMgYXQgYSBzcGVjaWZpYyBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfSBpdGVtXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBpbnNlcnQoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2FyZENvbnRhaW5lciA9IG1lLmdldENhcmRDb250YWluZXIoKSxcbiAgICAgICAgICAgIHRhYkJhciAgICAgICAgPSBtZS5nZXRUYWJCYXIoKSxcbiAgICAgICAgICAgIGhhc0l0ZW0gICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGksIGxlbiwgc3VwZXJJdGVtLCB0YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICBsZW4gPSBpdGVtLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHJlbmRlciBpcyBhc3luYywgZW5zdXJlIHRoZSBvcmRlciBvZiBpdGVtcyBpcyBjb3JyZWN0XG5cbiAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIGFycmF5IGJhY2t3YXJkc1xuICAgICAgICAgICAgICAgIGl0ZW1baV0gPSBtZS5pbnNlcnQoaXRlbVtsZW4gLSAxXSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaSAgID0gMDtcbiAgICAgICAgICAgIGxlbiA9IGNhcmRDb250YWluZXIuaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmRDb250YWluZXIuaXRlbXNbaV0uaWQgPT09IGl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzSXRlbSAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJJdGVtID0gY2FyZENvbnRhaW5lci5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzSXRlbSAmJiBpdGVtIGluc3RhbmNlb2YgTmVvLmNvbXBvbmVudC5CYXNlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnID0gaXRlbS50YWJCdXR0b25Db25maWc7XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuYWN0aXZhdGVJbnNlcnRlZFRhYnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnLmxpc3RlbmVycyA9IHRhYkJ1dHRvbkNvbmZpZy5saXN0ZW5lcnMgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnLmxpc3RlbmVycy5tb3VudGVkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uVGFiQnV0dG9uTW91bnRlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRhYkJhci5pbnNlcnQoaW5kZXgsIG1lLmdldFRhYkJ1dHRvbkNvbmZpZyh0YWJCdXR0b25Db25maWcsIGluZGV4KSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGl0ZW0udGFiQnV0dG9uQ29uZmlnO1xuXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogbm9uIGluZGV4IGJhc2VkIG1hdGNoaW5nIG9mIHRhYiBidXR0b25zIGFuZCBjYXJkc1xuICAgICAgICAgICAgICAgIGkgICA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBsZW4gPSB0YWJCYXIuaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0YWJCYXIuaXRlbXNbaV0uaW5kZXggPSBpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNJdGVtKSB7XG4gICAgICAgICAgICBpdGVtLmZsZXggPSAxO1xuICAgICAgICAgICAgc3VwZXJJdGVtID0gY2FyZENvbnRhaW5lci5pbnNlcnQoaW5kZXgsIGl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVySXRlbVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIG9uY2UgYSBkeW5hbWljYWxseSBhZGRlZCB0YWJoZWFkZXIgYnV0dG9uIGdldHMgbW91bnRlZFxuICAgICAqIGluIGNhc2UgYWN0aXZhdGVJbnNlcnRlZFRhYnMgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYnV0dG9uSWRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIG9uVGFiQnV0dG9uTW91bnRlZChidXR0b25JZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyID0gbWUuZ2V0Q2FyZENvbnRhaW5lcigpLFxuICAgICAgICAgICAgdGFiQmFyICAgICAgICA9IG1lLmdldFRhYkJhcigpLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gdGFiQmFyLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgPSAtMSxcbiAgICAgICAgICAgIGNhcmQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRhYkJhci5pdGVtc1tpXS5pZCA9PT0gYnV0dG9uSWQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY2FyZCA9IGNhcmRDb250YWluZXIuaXRlbXNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAoIWNhcmQubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGNhcmQub24oJ21vdW50ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ICAgPSBtZS5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIgPSBtZS5nZXRDYXJkQ29udGFpbmVyKCksXG4gICAgICAgICAgICB0YWJCYXIgICAgICAgID0gbWUuZ2V0VGFiQmFyKCksXG4gICAgICAgICAgICBpLCBsZW47XG5cbiAgICAgICAgaWYgKGluZGV4IDwgYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIG1lLl9hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4IC0gMTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09PSBhY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjYXJkQ29udGFpbmVyLnJlbW92ZUF0KGluZGV4KTtcbiAgICAgICAgdGFiQmFyICAgICAgIC5yZW1vdmVBdChpbmRleCk7XG5cbiAgICAgICAgLy8gdG9kbzogbm9uIGluZGV4IGJhc2VkIG1hdGNoaW5nIG9mIHRhYiBidXR0b25zIGFuZCBjYXJkc1xuICAgICAgICBpICAgPSBpbmRleDtcbiAgICAgICAgbGVuID0gdGFiQmFyLml0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0YWJCYXIuaXRlbXNbaV0uaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHVwZGF0ZVRhYkJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhY3RpdmVJbmRleCA9IG1lLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgdGFiQmFyICAgICAgPSBtZS5nZXRUYWJCYXIoKSxcbiAgICAgICAgICAgIHRhYkJ1dHRvbnMgID0gdGFiQmFyLml0ZW1zIHx8IFtdO1xuXG4gICAgICAgIHRhYkJ1dHRvbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0ucHJlc3NlZCA9IGluZGV4ID09PSBhY3RpdmVJbmRleDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudC9CdXR0b24ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnRhYi5IZWFkZXJCdXR0b25cbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVG9vbGJhclxuICovXG5jbGFzcyBIZWFkZXJCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFiLkhlYWRlckJ1dHRvbidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWIuSGVhZGVyQnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYi1oZWFkZXItYnV0dG9uJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWItaGVhZGVyLWJ1dHRvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLWJ1dHRvbicsICduZW8tdGFiLWJ1dHRvbiddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYi1oZWFkZXItYnV0dG9uJywgJ25lby1idXR0b24nXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUFjdGl2ZVRhYkluZGljYXRvcl89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tYnV0dG9uLWdseXBoJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbi10ZXh0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXRhYi1idXR0b24taW5kaWNhdG9yJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VBY3RpdmVUYWJJbmRpY2F0b3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlQWN0aXZlVGFiSW5kaWNhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVzZUFjdGl2ZVRhYkluZGljYXRvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZUFjdGl2ZVRhYkluZGljYXRvcihzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSAhbWUudXNlQWN0aXZlVGFiSW5kaWNhdG9yO1xuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlYWRlckJ1dHRvbik7XG5cbmV4cG9ydCB7SGVhZGVyQnV0dG9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCBUb29sYmFyIGZyb20gJy4uL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWIuSGVhZGVyVG9vbGJhclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5Ub29sYmFyXG4gKi9cbmNsYXNzIEhlYWRlclRvb2xiYXIgZXh0ZW5kcyBUb29sYmFyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYi5IZWFkZXJUb29sYmFyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYi5IZWFkZXJUb29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYi1oZWFkZXItdG9vbGJhcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tdGFiLWhlYWRlci10b29sYmFyJywnbmVvLXRvb2xiYXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWItaGVhZGVyLXRvb2xiYXInLCAnbmVvLXRvb2xiYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUFjdGl2ZVRhYkluZGljYXRvcl89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yXzogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZUFjdGl2ZVRhYkluZGljYXRvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VBY3RpdmVUYWJJbmRpY2F0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNEZWZpbmVkKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNpbGVudCB1cGRhdGVzXG4gICAgICAgICAgICAgICAgaXRlbS5fdXNlQWN0aXZlVGFiSW5kaWNhdG9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGVVc2VBY3RpdmVUYWJJbmRpY2F0b3IodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0cyA9IG1lLml0ZW1EZWZhdWx0cyB8fCB7fTtcblxuICAgICAgICBkZWZhdWx0cy51c2VBY3RpdmVUYWJJbmRpY2F0b3IgPSBtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3I7XG4gICAgICAgIG1lLml0ZW1EZWZhdWx0cyA9IGRlZmF1bHRzO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGF5b3V0IGNvbmZpZyBtYXRjaGluZyB0byB0aGUgZG9jayBwb3NpdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZ2V0TGF5b3V0Q29uZmlnKCkge1xuICAgICAgICBsZXQgbGF5b3V0Q29uZmlnO1xuXG4gICAgICAgIHN3aXRjaCh0aGlzLmRvY2spIHtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBwYWNrIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ3Zib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZScsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ2VuZCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGF5b3V0Q29uZmlnO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVhZGVyVG9vbGJhcik7XG5cbmV4cG9ydCB7SGVhZGVyVG9vbGJhciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQge2RlZmF1bHQgYXMgQ29tcG9uZW50fSBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLlN0cmlwXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgU3RyaXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFiLlN0cmlwJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYi5TdHJpcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWItc3RyaXAnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYi1zdHJpcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXRhYi1zdHJpcCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYi1zdHJpcCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRhYkNvbnRhaW5lcklkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhYkNvbnRhaW5lcklkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlQWN0aXZlVGFiSW5kaWNhdG9yXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3JfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFt7Y2xzOiAnbmVvLWFjdGl2ZS10YWItaW5kaWNhdG9yJ31dfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tYWN0aXZlLXRhYi1pbmRpY2F0b3InXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmdldFRhYkNvbnRhaW5lcigpLm9uKHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4Q2hhbmdlICAgOiBtZS5nZXRBY3RpdmVUYWJSZWN0VGhlbk1vdmUsXG4gICAgICAgICAgICB0YWJCYXJQb3NpdGlvbkNoYW5nZTogbWUub25UYWJCYXJQb3NpdGlvbkNoYW5nZSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAvLyB0b2RvOiBtb3VudCBmaXJlcyB3aGVuIHB1c2hpbmcgdGhlIHRhc2sgaW50byB0aGUgcmVuZGVyaW5nIHF1ZXVlLCBub3Qgd2hlbiBpdCBpcyBkb25lXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEFjdGl2ZVRhYlJlY3RUaGVuTW92ZSgpO1xuICAgICAgICAgICAgfSwgMTAwLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQWN0aXZlVGFiSW5kaWNhdG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZUFjdGl2ZVRhYkluZGljYXRvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5yZW1vdmVEb20gPSAhdmFsdWU7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuZ2V0QWN0aXZlVGFiUmVjdFRoZW5Nb3ZlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybiB7TmVvLnRhYi5IZWFkZXJCdXR0b259XG4gICAgICovXG4gICAgZ2V0QWN0aXZlVGFiKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lciA9IG1lLmdldFRhYkNvbnRhaW5lcigpO1xuXG4gICAgICAgIHJldHVybiB0YWJDb250YWluZXIuZ2V0VGFiQmFyKCkuaXRlbXNbdGFiQ29udGFpbmVyLmFjdGl2ZUluZGV4XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBEb21SZWN0IG9mIHRoZSBhY3RpdmUgdGFiLCB0aGVuIG1vdmVzIHRoZSBpbmRpY2F0b3JcbiAgICAgKi9cbiAgICBnZXRBY3RpdmVUYWJSZWN0VGhlbk1vdmUoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcikge1xuICAgICAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3NcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgICAgIGlkOiBtZS5nZXRBY3RpdmVUYWIoKS5pZFxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5tb3ZlQWN0aXZlSW5kaWNhdG9yKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFRhYkNvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy50YWJDb250YWluZXJJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0LmJvdHRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0LmhlaWdodFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0LmxlZnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdC5yaWdodFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0LnRvcFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0LndpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3QueFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0LnlcbiAgICAgKi9cbiAgICBtb3ZlQWN0aXZlSW5kaWNhdG9yKHJlY3QpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvciwgdGFiQ29udGFpbmVyLCB2ZG9tO1xuXG4gICAgICAgIGlmIChtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgICA9IG1lLnZkb207XG4gICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3IgPSB2ZG9tLmNuWzBdO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyICAgICAgID0gbWUuZ2V0VGFiQ29udGFpbmVyKCk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodGFiQ29udGFpbmVyLnRhYkJhclBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0IDogcmVjdC5sZWZ0ICArICdweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogcmVjdC53aWR0aCArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgIDogcmVjdC50b3AgICAgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiSW5kaWNhdG9yLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbmVyIGZvciB0aGUgdGFiQmFyUG9zaXRpb25DaGFuZ2UgZXZlbnRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLm9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMudmFsdWVcbiAgICAgKi9cbiAgICBvblRhYkJhclBvc2l0aW9uQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUudXNlQWN0aXZlVGFiSW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAvLyB3ZSBkbyBuZWVkIGEgZGVsYXkgdG8gZW5zdXJlIHRoZSBkZWx0YSB1cGRhdGVzIGFyZSBkb25lXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5nZXRBY3RpdmVUYWJSZWN0VGhlbk1vdmUoKTtcbiAgICAgICAgICAgIH0sIDUwLCBtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFN0cmlwKTtcblxuZXhwb3J0IHtTdHJpcCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuQXJyYXlcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgTmVvQXJyYXkgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQXJyYXknXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5BcnJheSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBhZGQoYXJyLCBpdGVtcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEsIGJ1dCBub3QgaW4gYXJyYXkyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBkaWZmZXJlbmNlKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XG4gICAgICAgIHJldHVybiBhcnJheTEuZmlsdGVyKGl0ZW0gPT4gIWFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpbmRleCBvZiBpdGVtIGlzID4gLTFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgaGFzSXRlbShhcnIsIGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGFyci5pbmNsdWRlcyhpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGludGVyc2VjdGlvbihhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+IGFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBvZiBhcnJheTEgYXJlIHByZXNlbnQgaW4gYXJyYXkgMlxuICAgICAqIFN1cHBvcnRzIEFycmF5cyBjb250YWluaW5nIE9iamVjdHMsIG5vdCBBcnJheXMgY29udGFpbmluZyBBcnJheXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbChhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gYXJyYXkxLmxlbmd0aCxcbiAgICAgICAgICAgIGxlbjIgPSBhcnJheTIubGVuZ3RoLFxuICAgICAgICAgICAgaGFzT2JqZWN0LCBqLCB2YWx1ZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGFycmF5MVtpXTtcblxuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBqICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChhcnJheTJbal0pICYmIE5lby51dGlsLk9iamVjdC5pc0VxdWFsKHZhbHVlLCBhcnJheTJbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghYXJyYXkyLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGl0ZW0gaW5zaWRlIGFyciBmcm9tIGZyb21JbmRleCB0byB0b0luZGV4XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICovXG4gICAgc3RhdGljIG1vdmUoYXJyLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGZyb20gYW4gYXJyYXkuIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUoYXJyLCBpdGVtcykge1xuICAgICAgICBsZXQgaW5kZXg7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyAgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIHRvZ2dsZShhcnIsIGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShhcnIsIGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGQoYXJyLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxIGFuZCBhcnJheTJcbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdW5pb24oYXJyYXkxLCBhcnJheTIpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgbWVyZ2UgID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLFxuICAgICAgICAgICAgbGVuICAgID0gbWVyZ2UubGVuZ3RoLFxuICAgICAgICAgICAgYXNzb2MgID0ge30sXG4gICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgaXRlbSA9IG1lcmdlW2xlbl07XG5cbiAgICAgICAgICAgIGlmICghYXNzb2NbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICBhc3NvY1tpdGVtXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgIGFyci51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb0FycmF5KTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvQXJyYXk7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkhhc2hIaXN0b3J5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEhhc2hIaXN0b3J5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNsYXNzU3lzdGVtJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuSGFzaEhpc3RvcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naGFzaC1oaXN0b3J5J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdoYXNoLWhpc3RvcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzdGFjaz1bXVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RhY2s6IFtdXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBmaXJzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhY2tbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFjay5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGFzaFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBoYXNoU3RyaW5nXG4gICAgICovXG4gICAgcHVzaChoYXNoLCBoYXNoU3RyaW5nKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuc3RhY2sudW5zaGlmdChoYXNoKTtcbiAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywgaGFzaCwgbWUuc3RhY2tbMV0sIGhhc2hTdHJpbmcpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGFzaEhpc3RvcnkpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKEhhc2hIaXN0b3J5KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBOZW9PYmplY3QgZnJvbSAnLi4vdXRpbC9PYmplY3QubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuS2V5TmF2aWdhdGlvblxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBLZXlOYXZpZ2F0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLktleU5hdmlnYXRpb24nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5LZXlOYXZpZ2F0aW9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2tleW5hdidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAna2V5bmF2JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsbHkgc3RvcmVzIHRoZSBjb21wb25lbnQgaWQgaW5zaWRlIF9jb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9IGNvbXBvbmVudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB0aGUga2V5ZG93biBldmVudCBpcyBzdXBwb3NlZCB0byBidWJibGUgdXB3YXJkcyBpbnNpZGUgdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGtleURvd25FdmVudEJ1YmJsZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAga2V5RG93bkV2ZW50QnViYmxlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGtleXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGtleXNfOiBudWxsXG4gICAgfX1cblxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2goLi4udGhpcy5wYXJzZUtleXModmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBiZWZvcmVHZXRDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0Q29tcG9uZW50KHRoaXMuX2NvbXBvbmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gdmFsdWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBjb21wb25lbnQgaWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRDb21wb25lbnQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duKGRhdGEpIHtcbiAgICAgICAgLy8gVXNpbmcgdGhlIGNocm9tZSBhdXRvLWZpbGwgZmVhdHVyZSBkb2VzIHRyaWdnZXIgYSBrZXlkb3duIGV2ZW50LCBub3QgY29udGFpbmluZyBhIGtleS4gU2VlOiAjNjRcbiAgICAgICAgaWYgKGRhdGEua2V5KSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB1cHBlckNhc2VLZXkgPSBkYXRhLmtleS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgICAgIHNjb3BlO1xuXG4gICAgICAgICAgICB1cHBlckNhc2VLZXkgPSBtZS5wYXJzZVVwcGVyQ2FzZUtleSh1cHBlckNhc2VLZXkpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnS2V5TmF2aWdhdGlvbiBvbktleURvd24nLCB1cHBlckNhc2VLZXksIGRhdGEsIG1lLmtleXMpO1xuXG4gICAgICAgICAgICBtZS5rZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IE5lby5nZXQoa2V5LnNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChrZXkua2V5LnRvVXBwZXJDYXNlKCkgPT09IHVwcGVyQ2FzZUtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGVba2V5LmZuXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVba2V5LmZuXS5hcHBseShzY29wZSwgW2RhdGFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHBhcnNlS2V5cyh2YWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgY29tcG9uZW50SWQgPSB0aGlzLl9jb21wb25lbnQsXG4gICAgICAgICAgICAgICAga2V5QXJyYXkgICAgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrZXlBcnJheS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuICAgOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZTogY29tcG9uZW50SWQgLy8gdG9kbzogc3VwcG9ydCBWQ3MgbGF0ZXIgb25cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHZhbHVlID0ga2V5QXJyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgc3BlY2lmaWMga2V5IG5hbWVzLCBlLmcuIFwiIFwiID0+IFNQQUNFXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZVVwcGVyQ2FzZUtleShrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGtleSA9ICdTUEFDRSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBUlJPV0RPV04nOlxuICAgICAgICAgICAgICAgIGtleSA9ICdET1dOJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XTEVGVCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ0xFRlQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQVJST1dSSUdIVCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ1JJR0hUJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XVVAnOlxuICAgICAgICAgICAgICAgIGtleSA9ICdVUCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IGNvbXBvbmVudC5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBtZS5rZXlzICAgICAgPSBtZS5wYXJzZUtleXMobWUua2V5cyk7XG5cbiAgICAgICAgaWYgKGRvbUxpc3RlbmVycykge1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleWRvd246IHtcbiAgICAgICAgICAgICAgICAgICAgZm4gICAgOiBtZS5vbktleURvd24sXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZTogbWUua2V5RG93bkV2ZW50QnViYmxlLFxuICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBrZXkgbGlzdGVuZXIgdXNpbmcgdGhlIHNhbWUgY29uZmlnIHVzZWQgd2hlbiBjcmVhdGluZyBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICByZW1vdmVLZXkoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBtZS5fa2V5cyxcbiAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIGlmIChOZW9PYmplY3QuaXNFcXVhbChrZXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtdWx0aXBsZSBrZXkgbGlzdGVuZXJzIHBhc3NpbmcgYW4gYXJyYXkgb2YgY29uZmlnIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICByZW1vdmVLZXlzKGl0ZW1zKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMucmVtb3ZlS2V5KGl0ZW0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBkb20gbGlzdGVuZXIgZnJvbSB0aGUgb3duZXIgY29tcG9uZW50XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhLZXlOYXZpZ2F0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5TmF2aWdhdGlvbjsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuT2JqZWN0XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb09iamVjdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5PYmplY3QnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5PYmplY3QnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgcHJvcGVydGllcyBvZiB4IG1hdGNoIHdpdGggdGhlIHByb3BlcnRpZXMgb2YgeVxuICAgICAqIFN1cHBvcnRzIG5lc3RlZCBPYmplY3RzLCBidXQgbm90IGFycmF5cyBhcyBwcm9wIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB4XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHlcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbCh4LCB5KSB7XG4gICAgICAgIHJldHVybiAoTmVvLmlzT2JqZWN0KHgpICYmIE5lby5pc09iamVjdCh5KSkgP1xuICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHgpLmxlbmd0aCA9PT0gT2JqZWN0LmtleXMoeSkubGVuZ3RoKSAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHgpLnJlZHVjZShmdW5jdGlvbihpc0VxdWFsLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlzRXF1YWwgJiYgTmVvT2JqZWN0LmlzRXF1YWwoeFtrZXldLCB5W2tleV0pO1xuICAgICAgICAgICAgICAgIH0sIHRydWVcbiAgICAgICAgICAgICkgOiAoeCA9PT0geSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOZW9PYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBOZW9PYmplY3Q7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLlN0eWxlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFN0eWxlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlN0eWxlJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuU3R5bGUnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYW4gZGVsdGEgb2JqZWN0LCBjb250YWluaW5nIHRoZSBzdHlsZXMgb2YgbmV3U3R5bGUgd2hpY2ggYXJlIG5vdCBpbmNsdWRlZCBvciBkaWZmZXJlbnQgdGhhbiBpbiBvbGRTdHlsZVxuICAgICAqIFN0eWxlcyBpbmNsdWRlZCBpbiBvbGRTdHlsZSBidXQgbWlzc2luZyBpbiBuZXdTdHlsZSB3aWxsIGdldCBhIHZhbHVlIG9mIG51bGxcbiAgICAgKiBzZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MRWxlbWVudC9zdHlsZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmV3U3R5bGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9sZFN0eWxlXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3R5bGUgZGVsdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgY29tcGFyZVN0eWxlcyhuZXdTdHlsZSwgb2xkU3R5bGUpIHtcbiAgICAgICAgbGV0IHN0eWxlcyA9IHt9O1xuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcobmV3U3R5bGUpKSB7XG4gICAgICAgICAgICBuZXdTdHlsZSA9IE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QobmV3U3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhvbGRTdHlsZSkpIHtcbiAgICAgICAgICAgIG9sZFN0eWxlID0gTmVvLmNvcmUuVXRpbC5jcmVhdGVTdHlsZU9iamVjdChvbGRTdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW5ld1N0eWxlICYmICFvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSBpZiAoIW9sZFN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm4gTmVvLmNsb25lKG5ld1N0eWxlKTtcbiAgICAgICAgfSBlbHNlIGlmICghbmV3U3R5bGUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZFN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5ld1N0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbGRTdHlsZS5oYXNPd25Qcm9wZXJ0eShzdHlsZSkgfHwgb2xkU3R5bGVbc3R5bGVdICE9PSBuZXdTdHlsZVtzdHlsZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG5ld1N0eWxlW3N0eWxlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMob2xkU3R5bGUpLmZvckVhY2goZnVuY3Rpb24oc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1N0eWxlLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbc3R5bGVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHN0eWxlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTdHlsZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlOyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5WRG9tXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFZEb20gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVkRvbSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlZEb20nXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFNlYXJjaCB2ZG9tIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxuICAgICAqICAgICB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRWZG9tQ2hpbGQodmRvbSwgb3B0cywgaW5kZXgsIHBhcmVudE5vZGUpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAgICAgICBvcHRzICA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6b3B0c307XG5cbiAgICAgICAgbGV0IGNoaWxkICAgICAgPSBudWxsLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdLFxuICAgICAgICAgICAgc3R5bGVNYXRjaCA9IHRydWUsXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSB2ZG9tLmNuICYmIHZkb20uY24ubGVuZ3RoLFxuICAgICAgICAgICAgb3B0c0FycmF5LCBvcHRzTGVuZ3RoLCBzdWJDaGlsZDtcblxuICAgICAgICBvcHRzQXJyYXkgID0gT2JqZWN0LmVudHJpZXMob3B0cyk7XG4gICAgICAgIG9wdHNMZW5ndGggPSBvcHRzQXJyYXkubGVuZ3RoO1xuXG4gICAgICAgIG9wdHNBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2ZG9tLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2goa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nscyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc0FycmF5KHZhbHVlKSAmJiBOZW8uaXNBcnJheSh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG9kbzogZWl0aGVyIHNlYXJjaCB0aGUgdmRvbSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRWZG9tQ2hpbGQ6IGNscyBtYXRjaGluZyBub3Qgc3VwcG9ydGVkIGZvciB0YXJnZXQgJiBzb3VyY2UgdHlwZXMgb2YgQXJyYXlzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZkb21ba2V5XSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2ZG9tW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtzdHlsZUtleSwgc3R5bGVWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodmRvbVtrZXldLmhhc093blByb3BlcnR5KHN0eWxlS2V5KSAmJiB2ZG9tW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRWZG9tQ2hpbGQ6IHN0eWxlIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIG1peGVkIHRhcmdldCAmIHNvdXJjZSB0eXBlcyAoT2JqZWN0IFZTIFN0cmluZyknKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHZkb21cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh2ZG9tLmNuW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20uY25baV0sIG9wdHMsIGksIHZkb20pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgIDogc3ViQ2hpbGQuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZG9tICAgICAgOiBzdWJDaGlsZC52ZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgZm9yIGZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmbGFnIFRoZSBmbGFnIHJlZmVyZW5jZSBzcGVjaWZpZWQgb24gdGhlIHRhcmdldCB2ZG9tIGNoaWxkIG5vZGVcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIGdldEJ5RmxhZyh2ZG9tLCBmbGFnKSB7XG4gICAgICAgIGxldCBub2RlID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIHtmbGFnOiBmbGFnfSk7XG4gICAgICAgIHJldHVybiBub2RlICYmIG5vZGUudmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB2ZG9tXG4gICAgICogQHBhcmFtIFtjaGlsZElkcz1bXV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXG4gICAgICovXG4gICAgc3RhdGljIGdldENoaWxkSWRzKHZkb20sIGNoaWxkSWRzPVtdKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdmRvbSAmJiB2ZG9tLmNuIHx8IFtdO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGROb2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBWRG9tLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpIHtcbiAgICAgICAgbGV0IGNvbHVtbk5vZGVzID0gW107XG5cbiAgICAgICAgaWYgKHZkb20uY24pIHtcbiAgICAgICAgICAgIHZkb20uY24uZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyb3cuY24gJiYgcm93LmNuW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW5Ob2Rlcy5wdXNoKHJvdy5jbltpbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbHVtbk5vZGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldENvbHVtbk5vZGVzSWRzKHZkb20sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBWRG9tLmdldENvbHVtbk5vZGVzKHZkb20sIGluZGV4KS5tYXAoZSA9PiBlLmlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWdcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbbWF0Y2hBcnJheV1cbiAgICAgKiBAcmV0dXJuIHtBcnJheX0gYW4gYXJyYXkgb2YgdmRvbSBub2RlcyB3aGljaCBtYXRjaCB0aGUgZmxhZ1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRGbGFncyh2ZG9tLCBmbGFnLCBtYXRjaEFycmF5KSB7XG4gICAgICAgIGlmICghbWF0Y2hBcnJheSkge1xuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodmRvbS5mbGFnID09PSBmbGFnKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHZkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHZkb20gJiYgdmRvbS5jbiB8fCBbXTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuZmxhZyA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gVkRvbS5nZXRGbGFncyhjaGlsZE5vZGUsIGZsYWcsIG1hdGNoQXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYWZ0ZXIgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRBZnRlck5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRCZWZvcmVOb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zZXJ0QmVmb3JlIHRydWUgaW5zZXJ0cyB0aGUgbmV3IG5vZGUgYXQgdGhlIHNhbWUgaW5kZXgsIGluZGV4KzEgb3RoZXJ3aXNlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGluc2VydEJlZm9yZSkge1xuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHRhcmdldE5vZGVJZCkpIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGVJZCA9IHRhcmdldE5vZGVJZC5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIHtpZDogdGFyZ2V0Tm9kZUlkfSksXG4gICAgICAgICAgICBpbmRleDtcblxuICAgICAgICBpZiAodGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgaW5kZXggPSBpbnNlcnRCZWZvcmUgPyB0YXJnZXROb2RlLmluZGV4IDogdGFyZ2V0Tm9kZS5pbmRleCArIDE7XG4gICAgICAgICAgICB0YXJnZXROb2RlLnBhcmVudE5vZGUuY24uc3BsaWNlKGluZGV4LCAwLCBub2RlVG9JbnNlcnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCAmIHJlbW92ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlVmRvbUNoaWxkKHZkb20sIG9wdHMpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIG9wdHMpO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5jbi5zcGxpY2UoY2hpbGQuaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCBub2RlIGluc2lkZSBhIHZkb20gdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGROb2RlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXG4gICAgICovXG4gICAgc3RhdGljIHJlcGxhY2VWZG9tQ2hpbGQodmRvbSwgaWQsIG5ld0NoaWxkTm9kZSkge1xuICAgICAgICBsZXQgY24gID0gdmRvbS5jbiB8fCBbXSxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBjbi5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZkb20uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VWZG9tQ2hpbGQ6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY25baV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY25baV0gPSBuZXdDaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWRG9tLnJlcGxhY2VWZG9tQ2hpbGQoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGROb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lby52ZG9tLkhlbHBlciB3aWxsIGNyZWF0ZSBpZHMgZm9yIGVhY2ggdm5vZGUsIHNvIHdlIG5lZWQgdG8gc3luYyB0aGVtIGludG8gdGhlIHZkb21cbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSB2bm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIHN5bmNWZG9tSWRzKHZub2RlLCB2ZG9tKSB7XG4gICAgICAgIGlmICh2bm9kZSAmJiB2ZG9tKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZkb20uY2hpbGROb2RlcyB8fCB2ZG9tLmNuLFxuICAgICAgICAgICAgICAgIGNuLCBpLCBsZW47XG5cbiAgICAgICAgICAgIGlmICh2bm9kZS5pZCAmJiB2bm9kZS5pZCAhPT0gdmRvbS5pZCkge1xuICAgICAgICAgICAgICAgIHZkb20uaWQgPSB2bm9kZS5pZDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmRvbSBpZCBzZXQgdG8nLCB2bm9kZS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgY24gICA9IGNoaWxkTm9kZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZW1vdmVEb20gIT09IHRydWUpO1xuICAgICAgICAgICAgICAgIGkgICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiAgPSBjbiAmJiBjbi5sZW5ndGggfHwgMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZEb20uc3luY1Zkb21JZHModm5vZGUuY2hpbGROb2Rlc1tpXSwgY25baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWRG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgVkRvbTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuVk5vZGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVk5vZGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVk5vZGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WTm9kZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZub2RlIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJlbnROb2RlXSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcbiAgICAgKiAgICAge09iamVjdH0gdm5vZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGUodm5vZGUsIG9wdHMsIGluZGV4LCBwYXJlbnROb2RlKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOiBvcHRzfTtcblxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXG4gICAgICAgICAgICBhdHRyTWF0Y2ggID0gdHJ1ZSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXSxcbiAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSB0cnVlLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gdm5vZGUuY2hpbGROb2RlcyAmJiB2bm9kZS5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKG9wdHMpO1xuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBvcHRzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2F0dHJLZXksIGF0dHJWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShhdHRyS2V5KSAmJiB2bm9kZVtrZXldW2F0dHJLZXldID09PSBhdHRyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2bm9kZVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2bm9kZSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRDaGlsZFZub2RlOiBjbHMgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgdGFyZ2V0ICYgc291cmNlIHR5cGVzIG9mIEFycmF5cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZub2RlW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHZub2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZCA9IFZOb2RlLmZpbmRDaGlsZFZub2RlKHZub2RlLmNoaWxkTm9kZXNbaV0sIG9wdHMsIGksIHZub2RlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IHN1YkNoaWxkLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHN1YkNoaWxkLnZub2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IGlkXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBjaGlsZCB2bm9kZSBvciBudWxsXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDaGlsZFZub2RlQnlJZCh2bm9kZSwgaWQpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IFZOb2RlLmZpbmRDaGlsZFZub2RlQnlJZChjaGlsZE5vZGUsIGlkKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXG4gICAgICogQHBhcmFtIHZub2RlXG4gICAgICogQHBhcmFtIFtjaGlsZElkcz1bXV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXG4gICAgICovXG4gICAgc3RhdGljIGdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcz1bXSkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlICYmIHZub2RlLmNoaWxkTm9kZXMgfHwgW107XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZElkcyA9IFZOb2RlLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGRWbm9kZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlQ2hpbGRWbm9kZSh2bm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNbaV0gPSBuZXdDaGlsZFZub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVk5vZGUucmVwbGFjZUNoaWxkVm5vZGUoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZOb2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgVk5vZGU7IiwiaW1wb3J0IE5lbyAgICAgICAgICAgICBmcm9tICcuLi9OZW8ubWpzJztcbmltcG9ydCBCYXNlICAgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgKiBhcyBjb3JlICAgICAgIGZyb20gJy4uL2NvcmUvX2V4cG9ydC5tanMnO1xuaW1wb3J0IERvbUV2ZW50TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyc7XG5pbXBvcnQgSW5zdGFuY2UgICAgICAgIGZyb20gJy4uL21hbmFnZXIvSW5zdGFuY2UubWpzJztcbmltcG9ydCBBcHBsaWNhdGlvbiAgICAgZnJvbSAnLi4vY29udHJvbGxlci9BcHBsaWNhdGlvbi5tanMnO1xuaW1wb3J0IEhhc2hIaXN0b3J5ICAgICBmcm9tICcuLi91dGlsL0hhc2hIaXN0b3J5Lm1qcyc7XG5cbi8qKlxuICogVGhlIEFwcCB3b3JrZXIgY29udGFpbnMgbW9zdCBwYXJ0cyBvZiB0aGUgZnJhbWV3b3JrIGFzIHdlbGwgYXMgYWxsIGFwcHMgd2hpY2ggZ2V0IGNyZWF0ZWQuXG4gKiBTZWUgdGhlIHR1dG9yaWFscyBmb3IgZnVydGhlciBpbmZvcy5cbiAqIEBjbGFzcyBOZW8ud29ya2VyLkFwcFxuICogQGV4dGVuZHMgTmVvLndvcmtlci5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEFwcCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLkFwcCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby53b3JrZXIuQXBwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2FwcC13b3JrZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2FwcC13b3JrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGRhdGE9bnVsbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGF0YVJlbW90ZXNSZWdpc3RlcmVkPTBcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFSZW1vdGVzUmVnaXN0ZXJlZDogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHZkb21SZW1vdGVzUmVnaXN0ZXJlZD0wXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2ZG9tUmVtb3Rlc1JlZ2lzdGVyZWQ6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdvcmtlcklkPSdhcHAnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB3b3JrZXJJZDogJ2FwcCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvZG86IEFwcCBuZWVkcyB0byBrbm93IGhvdyBtYW55IHNpbmdsZXRvbnMgaGF2ZSByZW1vdGVzIHJlZ2lzdGVyZWQgaGVyZSB0byBlbnN1cmUgYSBjb3JyZWN0IHN0YXJ0aW5nIHBvaW50XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gY291bnREYXRhUmVtb3Rlcz0yXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjb3VudERhdGFSZW1vdGVzOiAyLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogQXBwIG5lZWRzIHRvIGtub3cgaG93IG1hbnkgc2luZ2xldG9ucyBoYXZlIHJlbW90ZXMgcmVnaXN0ZXJlZCBoZXJlIHRvIGVuc3VyZSBhIGNvcnJlY3Qgc3RhcnRpbmcgcG9pbnRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBjb3VudFZkb21SZW1vdGVzPTFcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNvdW50VmRvbVJlbW90ZXM6IDFcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUub24oJ3JlbW90ZXJlZ2lzdGVyZWQnLCBtZS5vblJlbW90ZVJlZ2lzdGVyZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSBkb20gZXZlbnQgd2lsbCBnZXQgZm9yd2FyZGVkIGFzIGEgd29ya2VyIG1lc3NhZ2UgZnJvbSBtYWluIGFuZCBlbmRzIHVwIGhlcmUgZmlyc3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSB1c2VmdWwgZXZlbnQgcHJvcGVydGllcywgZGlmZmVycyBmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzLiBTZWUgTmVvLm1haW4uRG9tRXZlbnRzLlxuICAgICAqL1xuICAgIG9uRG9tRXZlbnQoZGF0YSkge1xuICAgICAgICBEb21FdmVudE1hbmFnZXIuZmlyZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFdmVyeSBVUkwgaGFzaC1jaGFuZ2Ugd2lsbCBjcmVhdGUgYSBwb3N0IG1lc3NhZ2UgaW4gbWFpbiBhbmQgZW5kIHVwIGhlcmUgZmlyc3QuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgcGFyc2VkIGtleS12YWx1ZSBwYWlycyBmb3IgZWFjaCBoYXNoIHZhbHVlXG4gICAgICovXG4gICAgb25IYXNoQ2hhbmdlKGRhdGEpIHtjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgSGFzaEhpc3RvcnkucHVzaChkYXRhLmhhc2gsIGRhdGEuaGFzaFN0cmluZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHN0YXJ0aW5nIHBvaW50IGZvciBhcHBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkxvYWRBcHBsaWNhdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIG1lLmRhdGEgPSBkYXRhO1xuICAgICAgICAgICAgTmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoID0gZGF0YS5yZXNvdXJjZXNQYXRoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbWUuZGF0YVJlbW90ZXNSZWdpc3RlcmVkID09PSBtZS5jb3VudERhdGFSZW1vdGVzICYmXG4gICAgICAgICAgICBtZS52ZG9tUmVtb3Rlc1JlZ2lzdGVyZWQgPT09IG1lLmNvdW50VmRvbVJlbW90ZXNcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBpZiAoIU5lby5jb25maWcuaXNFeHBlcmltZW50YWwpIHtcbiAgICAgICAgICAgICAgICBOZW8ub25TdGFydCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKE5lby5jb25maWcuaGFzaCkge1xuICAgICAgICAgICAgICAgICAgICBIYXNoSGlzdG9yeS5wdXNoKE5lby5jb25maWcuaGFzaCwgTmVvLmNvbmZpZy5oYXNoU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IGluIGNhc2UgRkYgc3RpbGwgZG9lcyBub3Qgc3VwcG9ydCBkeW5hbWljIGltcG9ydHMsIHJlbW92ZSB0aGUgZHluYW1pYyBpbXBvcnQgY2FsbCBmb3IgRkYgZGV2IGJ1aWxkc1xuXG4gICAgICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgICAgICAvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovXG4gICAgICAgICAgICAgICAgICAgICcuLi8uLi8nICsgbWUuZGF0YS5wYXRoKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5vblN0YXJ0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uY29uZmlnLmhhc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBIYXNoSGlzdG9yeS5wdXNoKE5lby5jb25maWcuaGFzaCwgTmVvLmNvbmZpZy5oYXNoU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFYWNoIHJlZ2lzdGVyZWQgcmVtb3RlIG1ldGhvZCB3aWxsIHRyaWdnZXIgdGhpcyByZWNlaXZlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlbW90ZVJlZ2lzdGVyZWQocmVtb3RlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgc3dpdGNoKHJlbW90ZS5vcmlnaW4pIHtcbiAgICAgICAgICAgIGNhc2UgJ2RhdGEnOlxuICAgICAgICAgICAgICAgIG1lLmRhdGFSZW1vdGVzUmVnaXN0ZXJlZCsrO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndmRvbSc6XG4gICAgICAgICAgICAgICAgbWUudmRvbVJlbW90ZXNSZWdpc3RlcmVkKys7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5vbkxvYWRBcHBsaWNhdGlvbigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQXBwKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShBcHApO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvcmVCYXNlfSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyAgICBmcm9tICcuL21peGlucy9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5Xb3JrZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLldvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd3b3JrZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3dvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHdvcmtlcklkPW51bGxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHdvcmtlcklkOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XG5cbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWUub25NZXNzYWdlLmJpbmQobWUpLCBmYWxzZSk7XG5cbiAgICAgICAgTmVvLndvcmtlcklkICAgICAgPSBtZS53b3JrZXJJZDtcbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIgPSBtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25NZXNzYWdlKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0YSAgICA9IGUuZGF0YSxcbiAgICAgICAgICAgIGFjdGlvbiAgPSBkYXRhLmFjdGlvbixcbiAgICAgICAgICAgIHJlcGx5SWQgPSBkYXRhLnJlcGx5SWQsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpc1snb24nICsgTmVvLmNhcGl0YWxpemUoYWN0aW9uKV0oZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGRhdGEsIGVyciwgZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChkYXRhLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25QaW5nKG1zZykge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7XG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyTmVvQ29uZmlnKG1zZykge1xuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lLnNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSxcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcblxuICAgICAgICAgICAgbWUucHJvbWlzZXNbbXNnSWRdID0ge1xuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0IDogcmVqZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xuXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UobWVzc2FnZSwgdHJhbnNmZXIpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCB7TWVzc2FnZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi8uLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFJlbW90ZU1ldGhvZEFjY2VzcyBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3MnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLm1peGlucy5SZW1vdGVNZXRob2RBY2Nlc3MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbWl4aW4tcmVtb3RlLW1ldGhvZC1hY2Nlc3MnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLXJlbW90ZS1tZXRob2QtYWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1peGluPXRydWVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG1peGluOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24oKj0sICo9KTogUHJvbWlzZTxhbnk+fVxuICAgICAqL1xuICAgIGdlbmVyYXRlUmVtb3RlKHJlbW90ZSwgbWV0aG9kKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb3JpZ2luID0gcmVtb3RlLm9yaWdpbjtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSwgYnVmZmVyKSB7XG4gICAgICAgICAgICBsZXQgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgICAgICA6ICdyZW1vdGVNZXRob2QnLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICAgIDogZGF0YSxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbiAgICA6IG9yaWdpbixcbiAgICAgICAgICAgICAgICByZW1vdGVDbGFzc05hbWU6IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgcmVtb3RlTWV0aG9kICAgOiBtZXRob2RcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZU1lc3NhZ2Uob3JpZ2luLCBvcHRzLCBidWZmZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqL1xuICAgIG9uUmVnaXN0ZXJSZW1vdGUocmVtb3RlKSB7XG4gICAgICAgIGlmIChyZW1vdGUuZGVzdGluYXRpb24gPT09IE5lby53b3JrZXJJZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gcmVtb3RlLmNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICBtZXRob2RzICAgPSByZW1vdGUubWV0aG9kcyxcbiAgICAgICAgICAgICAgICBwa2cgICAgICAgPSBOZW8ubnMoY2xhc3NOYW1lLCB0cnVlKTtcblxuICAgICAgICAgICAgbWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgIGlmIChwa2dbbWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSByZW1vdGUgbWV0aG9kIGRlZmluaXRpb24gJyArIGNsYXNzTmFtZSArICcuJyArIG1ldGhvZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGtnW21ldGhvZF0gPSBtZS5nZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKE5lby53b3JrZXJJZCAhPT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgncmVtb3RlcmVnaXN0ZXJlZCcsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlbW90ZU1ldGhvZChtc2cpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBwa2cgPSBOZW8ubnMobXNnLnJlbW90ZUNsYXNzTmFtZSksXG4gICAgICAgICAgICBvdXQsIG1ldGhvZDtcblxuICAgICAgICBpZiAoIXBrZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBuYW1lc3BhY2UgXCInICsgbXNnLnJlbW90ZUNsYXNzTmFtZSArICdcIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kID0gcGtnW21zZy5yZW1vdGVNZXRob2RdO1xuXG4gICAgICAgIGlmICghbWV0aG9kKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcmVtb3RlIG1ldGhvZCBuYW1lIFwiJyArIG1zZy5yZW1vdGVNZXRob2QgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZy5kYXRhKSkge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCAuLi5tc2cuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvdXQgPSBtZXRob2QuY2FsbChwa2csIG1zZy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvdXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBvdXQudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIGRhdGEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICBtZS5yZWplY3QobXNnLCBlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZXNvbHZlKG1zZywgb3V0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZWplY3RlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlamVjdChtc2csIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlamVjdCA6IHRydWUsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBwcm9taXNlTWVzc2FnZSBnZXRzIHJlc29sdmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1zZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgcmVzb2x2ZShtc2csIGRhdGEpIHtcbiAgICAgICAgdGhpcy5zZW5kTWVzc2FnZShtc2cub3JpZ2luLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAncmVwbHknLFxuICAgICAgICAgICAgZGF0YSAgIDogZGF0YSxcbiAgICAgICAgICAgIHJlcGx5SWQ6IG1zZy5pZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJlbW90ZU1ldGhvZEFjY2Vzcyk7XG5cbmV4cG9ydCB7UmVtb3RlTWV0aG9kQWNjZXNzIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=