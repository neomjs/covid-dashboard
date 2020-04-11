/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/neo.mjs/src/worker/VDom.mjs");
/******/ })
/************************************************************************/
/******/ ({

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
     * Flag if you want to load the files needed for working with amCharts
     * https://www.amcharts.com/docs/v4/
     * @default false
     * @memberOf! module:Neo
     * @name config.useAmCharts
     * @type Boolean
     */
    useAmCharts: false,
    /**
     * Flag if CSS4 stylesheets are in use (important for switching themes)
     * @default true
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
    useGoogleAnalytics: false,
    /**
     * Flag if you want to load the files needed for working with OpenStreetMaps
     * https://docs.mapbox.com/mapbox-gl-js/overview/
     * @default false
     * @memberOf! module:Neo
     * @name config.useOpenStreetMaps
     * @type Boolean
     */
    useOpenStreetMaps: false
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
    applyClassConfig(cls) {
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
    applyToGlobalNs(cls) {
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
    applyFromNs(target, namespace, config, bind) {
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
    assignDefaults(target, defaults) {
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
    clone(obj, deep, ignoreNeoInstances) {
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
    cloneNeoInstance(instance) {
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
    create(className, config) {
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

    emptyFn() {},

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
    ns(names, create, scope) {
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
    ntype(ntype, config) {
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
            get() {
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

            set(value) {
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

/***/ "./node_modules/neo.mjs/src/vdom/Helper.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/vdom/Helper.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _VNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VNode.mjs */ "./node_modules/neo.mjs/src/vdom/VNode.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");




/**
 * The central class for the VDom worker to create vnodes & delta updates.
 * @class Neo.vdom.Helper
 * @extends Neo.core.Base
 * @singleton
 */
class Helper extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.vdom.Helper'
         * @private
         */
        className: 'Neo.vdom.Helper',
        /**
         * @member {String} ntype='vdom-helper'
         * @private
         */
        ntype: 'vdom-helper',
        /**
         * Remote method access for other workers
         * @member {Object} remote={app: ['create', 'update']}
         * @private
         */
        remote: {
            app: ['create', 'update']
        },
        /**
         * @member {Boolean} returnChildNodeOuterHtml=false
         */
        returnChildNodeOuterHtml: false,
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * Void attributes inside html tags
         * @member {String[]} voidAttributes
         * @private
         */
        voidAttributes: [
            'checked',
            'required'
        ],
        /**
         * Void html tags
         * @member {String[]} voidElements
         * @private
         */
        voidElements: [
            'area',
            'base',
            'br',
            'col',
            'command',
            'embed',
            'hr',
            'img',
            'input',
            'keygen',
            'link',
            'meta',
            'param',
            'source',
            'track',
            'wbr'
        ]
    }}

    /**
     * Creates a Neo.vdom.VNode tree for the given vdom template.
     * The top level vnode contains the outerHTML as a string.
     * @param {Object} opts
     * @param {Object} opts.vdom
     * @returns {Neo.vdom.VNode}
     */
    create(opts) {
        let me          = this,
            autoMount   = opts.autoMount === true,
            parentId    = opts.parentId,
            parentIndex = opts.parentIndex,
            node;

        delete opts.autoMount;
        delete opts.parentId;
        delete opts.parentIndex;

        node           = me.parseHelper(opts);
        node.outerHTML = me.createStringFromVnode(node);

        if (autoMount) {
            node.autoMount   = true;
            node.parentId    = parentId;
            node.parentIndex = parentIndex;
        }

        return node;
    }

    /**
     * Creates a Neo.vdom.VNode tree for the given vdom template and compares the new vnode with the current one
     * to calculate the vdom deltas.
     * @param {Object} opts
     * @param {Object} opts.vdom
     * @param {Object} opts.vnode
     * @returns {Object}
     */
    update(opts) {
        let me     = this,
            node   = me.parseHelper(opts.vdom),
            deltas = me.createDeltas({
                newVnode: node,
                oldVnode: opts.vnode
            });

        return {
            deltas    : deltas,
            updateVdom: true,
            vnode     : node
        };
    }

    /**
     *
     * @param {Object} vnode
     */
    createStringFromVnode(vnode) {
        let me = this;

        switch (vnode.vtype) {
            case 'root':
                return me.createStringFromVnode(vnode.childNodes[0]);
            case 'text':
                return vnode.innerHTML === undefined ? '' : String(vnode.innerHTML);
            case 'vnode':
                return me.createOpenTag(vnode) + me.createTagContent(vnode) + me.createCloseTag(vnode);
            default:
                return '';
        }
    }

    /**
     * @param {Object} vnode
     * @private
     */
    createOpenTag(vnode) {
        let string     = '<' + vnode.nodeName,
            attributes = vnode.attributes,
            cls        = vnode.className,
            style;

        if (vnode.style) {
            style = Neo.createStyles(vnode.style);

            if (style !== '') {
                string += ' style="' + style + '"';
            }
        }

        if (cls) {
            if (Neo.isArray(cls)) {
                cls = cls.join(' ');
            }

            if (cls !== '') {
                string += ' class="' + cls + '"';
            }
        }

        if (vnode.id) {
            string += ' id="' + vnode.id + '"';
        }

        Object.entries(attributes).forEach(([key, value]) => {
            if (this.voidAttributes.includes(key)) {
                if (value === 'true') { // vnode attribute values get converted into strings
                    string += (' ' + key);
                }
            } else if (key !== 'removeDom') {
                string += (' ' + key + '="' + value + '"');
            }
        });

        return string + '>';
    }

    /**
     * @param {Object} vnode
     * @private
     */
    createTagContent(vnode) {
        if (vnode.innerHTML) {
            return vnode.innerHTML;
        }

        let string = '',
            len    = vnode.childNodes ? vnode.childNodes.length : 0,
            i      = 0,
            childNode, outerHTML;

        for (; i < len; i++) {
            childNode = vnode.childNodes[i];

            outerHTML = this.createStringFromVnode(childNode);

            if (childNode.innerHTML !== outerHTML) {
                if (this.returnChildNodeOuterHtml) {
                    childNode.outerHTML = outerHTML;
                }
            }

            string += outerHTML;
        }

        return string;
    }

    /**
     * @param {Object} vnode
     * @private
     */
    createCloseTag(vnode) {
        return this.voidElements.indexOf(vnode.nodeName) > -1 ? '' : '</' + vnode.nodeName + '>';
    }

    /**
     *
     * @param {Object} opts
     * @returns {Object|Neo.vdom.VNode|null}
     */
    parseHelper(opts) {
        if (opts.removeDom === true) {
            return null;
        }

        if (typeof opts === 'string') {

        }

        if (opts.vtype === 'text') {
            if (!opts.id) {
                opts.id = Neo.getId('vtext'); // adding an id to be able to find vtype='text' items inside the vnode tree
            }

            opts.innerHTML = `<!-- ${opts.id} -->${opts.html || ''}<!-- /neo-vtext -->`;
            delete opts.html;
            return opts;
        }

        let me   = this,
            node = {attributes: {}, childNodes: [], style: {}},
            potentialNode;

        if (!opts.tag) {
            opts.tag = 'div';
        }

        Object.entries(opts).forEach(([key, value]) => {
            let hasUnit, newValue, style;

            if (value !== undefined && value !== null && key !== 'flag') {
                switch (key) {
                    case 'tag':
                    case 'nodeName':
                        node.nodeName = value;
                        break;
                    case 'html':
                    case 'innerHTML':
                        node.innerHTML = value.toString(); // support for numbers
                        break;
                    case 'children':
                    case 'childNodes':
                    case 'cn':
                        if (!Neo.isArray(value)) {
                            value = [value];
                        }

                        newValue = [];

                        value.forEach(item => {
                            if (item.removeDom !== true) {
                                delete item.removeDom; // could be false
                                potentialNode = me.parseHelper(item);

                                if (potentialNode) { // don't add null values
                                    newValue.push(potentialNode);
                                }
                            }
                        });

                        node.childNodes = newValue;
                        break;
                    case 'cls':
                        if (value && !Array.isArray(value)) {
                            node.className = [value];
                        } else if (!(Neo.isArray(value) && value.length < 1)) {
                            node.className = value;
                        }
                        break;
                    case 'height':
                    case 'maxHeight':
                    case 'maxWidth':
                    case 'minHeight':
                    case 'minWidth':
                    case 'width':
                        hasUnit = value != parseInt(value);
                        node.style[key] = value + (hasUnit ? '' : 'px');
                        break;
                    case 'id':
                        node.id = value;
                        break;
                    case 'style':
                        style = node.style;
                        if (Neo.isString(value)) {
                            node.style = Object.assign(style, Neo.core.Util.createStyleObject(value));
                        } else {
                            node.style = Object.assign(style, value);
                        }
                        break;
                    default:
                        node.attributes[key] = value + '';
                        break;
                }
            }
        });

        return new _VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](node);
    }

    /**
     * @param {Object} config
     * @param {Array} config.deltas
     * @param {Number} config.index
     * @param {Object} config.newVnode
     * @param {Object} config.newVnodeRoot
     * @param {Object} config.oldVnode
     * @param {Object} config.oldVnodeRoot
     * @param {String} config.parentId
     * @returns {Array} deltas
     */
    createDeltas(config) {
        let me            = this,
            deltas        = config.deltas || [],
            index         = config.index,
            newVnode      = config.newVnode,
            newVnodeRoot  = config.newVnodeRoot || newVnode,
            oldVnode      = config.oldVnode,
            oldVnodeRoot  = config.oldVnodeRoot || oldVnode,
            parentId      = config.parentId,
            attributes, delta, value, i, indexDelta, keys, len, movedNode, movedOldNode, styles, add, remove, returnValue, tmp, wrappedNode;

        // console.log('createDeltas', newVnode && newVnode.id, oldVnode && oldVnode.id, newVnode, oldVnode);

        if (newVnode && !oldVnode) { // new node at top level or at the end of a child array
            // console.log('insertNode', newVnode);

            deltas.push({
                action   : 'insertNode',
                id       : newVnode.id,
                index    : index,
                outerHTML: me.createStringFromVnode(newVnode),
                parentId : parentId
            });
        } else if (!newVnode && oldVnode) {
            // console.log('top level removed node', oldVnode.id, oldVnode);

            deltas.push({
                action: 'removeNode',
                id    : oldVnode.id
            });
        } else {
            if (newVnode && oldVnode && newVnode.id !== oldVnode.id) {
                movedNode    = me.findVnode(newVnodeRoot, oldVnode.id, newVnode);
                movedOldNode = me.findVnode(oldVnodeRoot, newVnode.id, oldVnode);

                 // console.log('movedNode', movedNode);
                 // console.log('movedOldNode', movedOldNode);

                if (!movedNode && !movedOldNode) {
                    // console.log('replace node', oldVnode.id, '('+newVnode.id+')');

                    deltas.push({
                        action: 'removeNode',
                        id    : oldVnode.id,
                    });

                    deltas.push({
                        action   : 'insertNode',
                        id       : newVnode.id,
                        index    : index,
                        outerHTML: me.createStringFromVnode(newVnode),
                        parentId : parentId
                    });

                    return {
                        indexDelta: 0
                    }
                }

                // this case matches a typical array re-sorting
                else if (movedNode && movedOldNode && movedNode.parentNode.id === movedOldNode.parentNode.id) {
                    deltas.push({
                        action: 'moveNode',
                        id      : movedOldNode.vnode.id,
                        index   : index,
                        parentId: parentId
                    });

                    me.createDeltas({
                        deltas      : deltas,
                        newVnode    : newVnode,
                        newVnodeRoot: newVnodeRoot,
                        oldVnode    : movedOldNode.vnode,
                        oldVnodeRoot: oldVnodeRoot,
                        parentId    : movedNode.parentNode.id
                    });
                } else if (!movedNode && movedOldNode) {
                    if (newVnode.id === movedOldNode.vnode.id) {
                        indexDelta = 0;

                        if (_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnodeById(oldVnode, newVnode.id)) {
                            // the old vnode replaced a parent vnode
                            // e.g.: vdom.cn[1] = vdom.cn[1].cn[0];

                            deltas.push({
                                action  : 'replaceChild',
                                fromId  : oldVnode.id,
                                parentId: parentId,
                                toId    : newVnode.id
                            });
                        } else {
                            // the old vnode got moved into a different higher level branch
                            // and its parent got removed
                            // e.g.:
                            // vdom.cn[1] = vdom.cn[2].cn[0];
                            // vdom.cn.splice(2, 1);

                            let movedOldNodeDetails = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(oldVnodeRoot, movedOldNode.vnode.id),
                                oldVnodeDetails     = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(oldVnodeRoot, oldVnode.id);

                            indexDelta = 1;

                            if (movedOldNodeDetails.parentNode.id === oldVnodeDetails.parentNode.id) {
                                // console.log('potential move node', index, movedOldNodeDetails.index);

                                let newVnodeDetails = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeRoot, newVnode.id),
                                    targetIndex = index + 1; // +1 since the current index will already get removed

                                // console.log(newVnodeDetails.parentNode);

                                i   = index + 1;
                                tmp = oldVnodeDetails.parentNode.childNodes;
                                len = movedOldNodeDetails.index;

                                for (; i < len; i++) {
                                    // console.log(tmp[i]);
                                    if (!_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeDetails.parentNode, tmp[i].id)) {
                                        // console.log('not found');
                                        targetIndex ++;
                                    }
                                }

                                // console.log(movedOldNodeDetails.index, targetIndex);

                                movedOldNodeDetails.parentNode.childNodes.splice(movedOldNodeDetails.index, 1);

                                // do not move a node in case its previous sibling nodes will get removed
                                if (movedOldNodeDetails.index !== targetIndex) {
                                    deltas.push({
                                        action: 'moveNode',
                                        id      : movedOldNode.vnode.id,
                                        index   : index,
                                        parentId: parentId
                                    });
                                }

                                // console.log(movedOldNodeDetails);

                                indexDelta = 0;
                            }

                            deltas.push({
                                action: 'removeNode',
                                id    : oldVnode.id
                            });
                        }

                        me.createDeltas({
                            deltas      : deltas,
                            newVnode    : newVnode,
                            newVnodeRoot: newVnodeRoot,
                            oldVnode    : movedOldNode.vnode,
                            oldVnodeRoot: oldVnodeRoot,
                            parentId    : parentId
                        });

                        return {
                            indexDelta: indexDelta
                        };
                    } else {
                        // console.log('removed node', oldVnode.id, '('+newVnode.id+')');

                        deltas.push({
                            action: 'removeNode',
                            id    : oldVnode.id
                        });

                        return {
                            indexDelta: 1
                        };
                    }
                } else if (!movedOldNode) {
                    // new node inside of a child array
                    // console.log('new node', index, parentId, newVnode);

                    wrappedNode = movedNode && _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnodeById(newVnode, oldVnode.id);

                    if (wrappedNode) {
                        // an existing vnode got wrapped into a new vnode
                        // => we need to remove the old one, since it will get recreated

                        // console.log('movedNode removeNode', movedNode.vnode.id);

                        deltas.push({
                            action: 'removeNode',
                            id    : movedNode.vnode.id
                        });
                    }

                    deltas.push({
                        action   : 'insertNode',
                        id       : newVnode.id,
                        index    : index,
                        outerHTML: me.createStringFromVnode(newVnode),
                        parentId : parentId
                    });

                    return {
                        indexDelta: wrappedNode ? 0 : -1
                    }
                } else if (movedNode) {
                    indexDelta = 0;

                    // check if the vnode got moved inside the vnode tree

                    let newVnodeDetails = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeRoot, newVnode.id);

                    if (newVnodeDetails.parentNode.id === movedNode.parentNode.id) {
                        // console.log(newVnodeDetails.index, movedNode.index);

                        if (newVnodeDetails.index > movedNode.index) {
                            // todo: needs testing => index gaps > 1
                            indexDelta = newVnodeDetails.index - movedNode.index;
                        }
                    }

                    deltas.push({
                        action: 'moveNode',
                        id      : movedNode.vnode.id,
                        index   : movedNode.index,
                        parentId: movedNode.parentNode.id
                    });

                    me.createDeltas({
                        deltas      : deltas,
                        newVnode    : movedNode.vnode,
                        newVnodeRoot: newVnodeRoot,
                        oldVnode    : oldVnode,
                        oldVnodeRoot: oldVnodeRoot,
                        parentId    : movedNode.parentNode.id
                    });

                    return {
                        indexDelta: 0
                    }
                }
            }

            if (newVnode && oldVnode && newVnode.id === oldVnode.id) {
                if (newVnode.vtype === 'text' && newVnode.innerHTML !== oldVnode.innerHTML) {
                    deltas.push({
                        action  : 'updateVtext',
                        id      : newVnode.id,
                        parentId: _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findChildVnode(newVnodeRoot, newVnode.id).parentNode.id,
                        value   : newVnode.innerHTML
                    })
                } else {
                    keys = Object.keys(newVnode);

                    Object.keys(oldVnode).forEach(prop => {
                        if (!newVnode.hasOwnProperty(prop)) {
                            keys.push(prop);
                        } else if (prop === 'attributes') { // find removed attributes
                            Object.keys(oldVnode[prop]).forEach(attr => {
                                if (!newVnode[prop].hasOwnProperty(attr)) {
                                    newVnode[prop][attr] = null;
                                }
                            });
                        }
                    });

                    keys.forEach(prop => {
                        delta = {};
                        value = newVnode[prop];

                        switch (prop) {
                            case 'attributes':
                                attributes = {};

                                Object.entries(value).forEach(([key, value]) => {
                                    if (!(oldVnode.attributes.hasOwnProperty(key) && oldVnode.attributes[key] === value)) {
                                        if (value !== '' && Neo.isEmpty(value)) {
                                            // ignore empty arrays & objects
                                        } else {
                                            attributes[key] = value;
                                        }
                                    }
                                });

                                if (Object.keys(attributes).length > 0) {
                                    delta.attributes = attributes;

                                    Object.entries(attributes).forEach(([key, value]) => {
                                        if (value === null) {
                                            delete newVnode.attributes[key];
                                        }
                                    });
                                }
                                break;
                            case 'childNodes':
                                i          = 0;
                                indexDelta = 0;
                                len        = Math.max(value.length, oldVnode.childNodes.length);

                                for (; i < len; i++) {
                                    returnValue = me.createDeltas({
                                        deltas      : deltas,
                                        index       : i,
                                        newVnode    : value[i],
                                        newVnodeRoot: newVnodeRoot,
                                        oldVnode    : oldVnode.childNodes[i + indexDelta],
                                        oldVnodeRoot: oldVnodeRoot,
                                        parentId    : newVnode.id
                                    });

                                    if (returnValue && returnValue.indexDelta) {
                                        indexDelta += returnValue.indexDelta;
                                    }
                                }
                                break;
                            case 'nodeName':
                            case 'innerHTML':
                                if (value !== oldVnode[prop]) {
                                    delta[prop] = value;
                                }
                                break;
                            case 'style':
                                styles = Neo.util.Style.compareStyles(value, oldVnode.style);
                                if (styles) {
                                    delta.style = styles;
                                }
                                break;
                            case 'className':
                                if (oldVnode.className) {
                                    add    = Neo.util.Array.difference(value, oldVnode.className);
                                    remove = Neo.util.Array.difference(oldVnode.className, value);
                                } else {
                                    add    =  value;
                                    remove = [];
                                }

                                if (add.length > 0 || remove.length > 0) {
                                    delta.cls = {
                                        add   : add,
                                        remove: remove
                                    };
                                }
                                break;
                        }

                        if (Object.keys(delta).length > 0) {
                            delta.id = newVnode.id;
                            deltas.push(delta);
                        }
                    });
                }
            }
        }

        return deltas;
    }

    /**
     *
     * @param {Neo.vdom.VNode} vnode
     * @param {String} id
     * @param {Neo.vdom.VNode} parentNode
     * @param {Number} index
     * @returns {Object}
     *     {Number} index
     *     {String} parentId
     *     {Neo.vdom.VNode} vnode
     */
    findVnode(vnode, id, parentNode, index) {
        if (!index) {
            index = 0;
        }

        let returnValue = null,
            children, childValue, i, len;

        if (vnode.id === id) {
            returnValue = {
                index     : index,
                parentNode: parentNode,
                vnode     : vnode
            };
        } else if (vnode.vtype !== 'text') {
            children = vnode.childNodes;
            i        = 0;
            len      = children && children.length || 0;

            for (; i < len; i++) {
                childValue = this.findVnode(children[i], id, vnode, i);

                if (childValue && childValue.vnode.id === id) {
                    returnValue = childValue;
                    break;
                }
            }
        }

        if (returnValue && returnValue.parentId === 'root') {
            returnValue.index = null;
        }

        return returnValue;
    }
}

Neo.applyClassConfig(Helper);

let instance = Neo.create(Helper);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/vdom/VNode.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/vdom/VNode.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VNode; });
/**
 * Wrapper class for vnode objects. See the tutorials for further infos.
 * @class Neo.vdom.VNode
 */
class VNode {
    /**
     *
     * @param config
     */
    constructor(config) {
        /**
         * @member {Array} attributes=[]
         */

        /**
         * @member {Array} childNodes=[]
         */

        /**
         * @member {Array} className=[]
         */

        /**
         * @member {String} id=Neo.getId('vnode')
         */

        /**
         * @member {String} innerHTML
         */

        /**
         * @member {String} nodeName
         */

        /**
         * @member {Object} style
         */

        /**
         * @member {String} vtype='vnode'
         */

        Object.assign(this, {
            attributes: config.attributes || [],
            childNodes: config.childNodes || [],
            className : config.className  || [],
            id        : config.id         || Neo.getId('vnode'),
            innerHTML : config.innerHTML,
            nodeName  : config.nodeName,
            style     : config.style,
            vtype     : config.vtype      || 'vnode'
        });
    }
}

const ns = Neo.ns('Neo.vdom', true);
ns['VNode'] = VNode;



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

/***/ "./node_modules/neo.mjs/src/worker/VDom.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/worker/VDom.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Neo.mjs */ "./node_modules/neo.mjs/src/Neo.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/worker/Base.mjs");
/* harmony import */ var _core_export_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/_export.mjs */ "./node_modules/neo.mjs/src/core/_export.mjs");
/* harmony import */ var _vdom_Helper_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vdom/Helper.mjs */ "./node_modules/neo.mjs/src/vdom/Helper.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_Style_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Style.mjs */ "./node_modules/neo.mjs/src/util/Style.mjs");







/**
 * The Vdom worker converts vdom templates into vnodes, as well as creating delta-updates.
 * See the tutorials for further infos.
 * @class Neo.worker.VDom
 * @extends Neo.worker.Base
 * @singleton
 */
class VDom extends _Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.worker.VDom'
         * @private
         */
        className: 'Neo.worker.VDom',
        /**
         * @member {String} ntype='vdom-worker'
         * @private
         */
        ntype: 'vdom-worker',
        /**
         * @member {Boolean} singleton=true
         * @private
         */
        singleton: true,
        /**
         * @member {String} workerId='vdom'
         * @private
         */
        workerId: 'vdom'
    }}
}

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyClassConfig(VDom);

let instance = _Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].create(VDom);

_Neo_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL0RlZmF1bHRDb25maWcubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9OZW8ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL0lkR2VuZXJhdG9yLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9Mb2dnZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL09ic2VydmFibGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL1V0aWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb3JlL19leHBvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9TdHlsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy92ZG9tL0hlbHBlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3Zkb20vVk5vZGUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9NZXNzYWdlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvd29ya2VyL1ZEb20ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy93b3JrZXIvbWl4aW5zL1JlbW90ZU1ldGhvZEFjY2Vzcy5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FDOUpEO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmRvbXdvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3dvcmtlci9WRG9tLm1qc1wiKTtcbiIsImNvbnN0IE5lbyA9IHNlbGYuTmVvIHx8IHt9O1xuXG5OZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcblxuLyoqXG4gKiBDb25maWcgb2JqZWN0IGZvciB0aGUgbmVvLm1qcyBmcmFtZXdvcmsgd2hpY2ggd2lsbCBnZXQgcGFzc2VkIHRvIGFsbCB3b3JrZXJzXG4gKiBZb3UgY2FuIGNoYW5nZSB0aGUgY29uZmlncywgZS5nLiBpbnNpZGUgdGhlIGluZGV4Lmh0bWwgb2YgeW91ciBhcHBcbiAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gKiBAbmFtZSBjb25maWdcbiAqIEB0eXBlIE9iamVjdFxuICovXG5jb25zdCBEZWZhdWx0Q29uZmlnID0ge1xuICAgIC8qKlxuICAgICAqIHRydWUgd2lsbCBhcHBseSAnbmVvLWJvZHknIHRvIHRoZSBkb2N1bWVudC5ib2R5IGNsYXNzTGlzdFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuYXBwbHlCb2R5Q2xzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAvKipcbiAgICAgKiBQYXRoIHRvIHlvdXIgYXBwLm1qcyBmaWxlLiBZb3UgY2FuIGNyZWF0ZSBtdWx0aXBsZSBhcHBzIHRoZXJlIGlmIG5lZWRlZC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmFwcFBhdGhcbiAgICAgKiBAdHlwZSBTdHJpbmd8bnVsbFxuICAgICAqL1xuICAgIGFwcFBhdGg6IG51bGwsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyBkaXJlY3RvcnlcbiAgICAgKiBAZGVmYXVsdCAnLi8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLmJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgYmFzZVBhdGg6ICcuLycsXG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgbmVvLm1qcyB0aGVtZSBjc3MgZmlsZXNcbiAgICAgKiBTZWUgbWFpbi5taXhpbnMuU3R5bGVzaGVldCA9PiBjcmVhdGVTdHlsZVNoZWV0KClcbiAgICAgKiBAZGVmYXVsdCBOZW8uY29uZmlnLmJhc2VQYXRoICsgJ2J1aWxkLycgKyBOZW8uY29uZmlnLmVudmlyb25tZW50XG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgW2NvbmZpZy5jc3NQYXRoXVxuICAgICAqIEBvcHRpb25hbFxuICAgICAqIEB0eXBlIFN0cmluZ3xudWxsXG4gICAgICovXG4gICAgY3NzUGF0aDogbnVsbCxcbiAgICAvKipcbiAgICAgKiBUaGUgY3VycmVudCBidWlsZCA9PiBkaXN0IGVudmlyb25tZW50LiBWYWxpZCB2YWx1ZXM6ICdkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ1xuICAgICAqIFVzZWQgZm9yIGF1dG9tYXRpY2FsbHkgaW5jbHVkaW5nIHRoZSBtYXRjaGluZyB0aGVtZSBmaWxlc1xuICAgICAqIEBkZWZhdWx0ICdwcm9kdWN0aW9uJ1xuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5lbnZpcm9ubWVudFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIGVudmlyb25tZW50OiAncHJvZHVjdGlvbicsXG4gICAgLyoqXG4gICAgICogRmxhZyBpZiBOZW8gaXMgcnVubmluZyB3aXRob3V0IGFueSBKUyBidWlsZHNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy5pc0V4cGVyaW1lbnRhbFxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpc0V4cGVyaW1lbnRhbDogZmFsc2UsXG4gICAgLyoqXG4gICAgICogRmxhZyBmb3IgcnVubmluZyB0aGUgTmVvIG1haW4gdGhyZWFkIGluc2lkZSBhbiBpZnJhbWUgKFNpZXN0YSBCcm93c2VyIEhhcm5lc3MpXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcuaXNJbnNpZGVTaWVzdGFcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgaXNJbnNpZGVTaWVzdGE6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIFVzZWQgYnkgSW50bC5EYXRlVGltZUZvcm1hdCwgZm9yIGRldGFpbHMgdGFrZSBhIGxvb2sgYXQ6XG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXRcbiAgICAgKiBAZGVmYXVsdCAnZGVmYXVsdCdcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcubG9jYWxlXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgbG9jYWxlOiAnZGVmYXVsdCcsXG4gICAgLyoqXG4gICAgICogQWRkIHRoZW1lcyB5b3Ugd2FudCB0byB1c2UgaGVyZS4gVGhlIGZpcnN0IHRoZW1lIHdpbGwgZ2V0IGFwcGxpZWQuXG4gICAgICogSWYgY29uZmlnLnVzZUNzczQgPT09IHRydWUsIG90aGVyIHRoZW1lIHZhcmlhYmxlcyB3aWxsIGdldCBpbmNsdWRlZCBhcyB3ZWxsXG4gICAgICogQGRlZmF1bHQgWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy50aGVtZXNcbiAgICAgKiBAdHlwZSBTdHJpbmdbXVxuICAgICAqL1xuICAgIHRoZW1lczogWyduZW8tdGhlbWUtbGlnaHQnLCAnbmVvLXRoZW1lLWRhcmsnXSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGZvciBzdGFuZGFsb25lIFNpZXN0YSBtb2R1bGUgdGVzdHMgPT4gcHJldmVudCByZWdpc3RlclJlbW90ZSB3b3JrZXIgbWVzc2FnZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51bml0VGVzdE1vZGVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdW5pdFRlc3RNb2RlOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIHlvdSB3YW50IHRvIGxvYWQgdGhlIGZpbGVzIG5lZWRlZCBmb3Igd29ya2luZyB3aXRoIGFtQ2hhcnRzXG4gICAgICogaHR0cHM6Ly93d3cuYW1jaGFydHMuY29tL2RvY3MvdjQvXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlQW1DaGFydHNcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlQW1DaGFydHM6IGZhbHNlLFxuICAgIC8qKlxuICAgICAqIEZsYWcgaWYgQ1NTNCBzdHlsZXNoZWV0cyBhcmUgaW4gdXNlIChpbXBvcnRhbnQgZm9yIHN3aXRjaGluZyB0aGVtZXMpXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VDc3M0XG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZUNzczQ6IHRydWUsXG4gICAgLyoqXG4gICAgICogVHJ1ZSB3aWxsIGF1dG9tYXRpY2FsbHkgaW5jbHVkZSB0aGUgc3R5bGVzaGVldFxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcudXNlRm9udEF3ZXNvbWVcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlRm9udEF3ZXNvbWU6IHRydWUsXG4gICAgLyoqXG4gICAgICogUmVxdWlyZWQgZm9yIHRoZSBvbmxpbmUgZXhhbXBsZXNcbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqIEBtZW1iZXJPZiEgbW9kdWxlOk5lb1xuICAgICAqIEBuYW1lIGNvbmZpZy51c2VHb29nbGVBbmFseXRpY3NcbiAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICovXG4gICAgdXNlR29vZ2xlQW5hbHl0aWNzOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGbGFnIGlmIHlvdSB3YW50IHRvIGxvYWQgdGhlIGZpbGVzIG5lZWRlZCBmb3Igd29ya2luZyB3aXRoIE9wZW5TdHJlZXRNYXBzXG4gICAgICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL292ZXJ2aWV3L1xuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLnVzZU9wZW5TdHJlZXRNYXBzXG4gICAgICogQHR5cGUgQm9vbGVhblxuICAgICAqL1xuICAgIHVzZU9wZW5TdHJlZXRNYXBzOiBmYWxzZVxufTtcblxuT2JqZWN0LmFzc2lnbihEZWZhdWx0Q29uZmlnLCB7XG4gICAgLyoqXG4gICAgICogUGF0aCB0byB0aGUgdG9wIGxldmVsIG5lby5tanMgcmVzb3VyY2VzIGZvbGRlclxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAncmVzb3VyY2VzLydcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAbmFtZSBjb25maWcucmVzb3VyY2VzUGF0aFxuICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAqL1xuICAgIHJlc291cmNlc1BhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3Jlc291cmNlcy8nLFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWZhdWx0IGJhc2UgVVJMIGZvciB3ZWIgd29ya2VyIGVudHJ5IHBvaW50cyAoQXBwLCBEYXRhLCBWZG9tKVxuICAgICAqIEBkZWZhdWx0IE5lby5jb25maWcuYmFzZVBhdGggKyAnc3JjL3dvcmtlci8nXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQG5hbWUgY29uZmlnLndvcmtlckJhc2VQYXRoXG4gICAgICogQHR5cGUgU3RyaW5nXG4gICAgICovXG4gICAgd29ya2VyQmFzZVBhdGg6IChOZW8uY29uZmlnLmJhc2VQYXRoIHx8IERlZmF1bHRDb25maWcuYmFzZVBhdGgpICsgJ3NyYy93b3JrZXIvJ1xufSk7XG5cbmV4cG9ydCB7RGVmYXVsdENvbmZpZyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRGVmYXVsdENvbmZpZyBmcm9tICcuL0RlZmF1bHRDb25maWcubWpzJztcblxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBnZXRTZXRDYWNoZSAgPSBTeW1ib2woJ2dldFNldENhY2hlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgbW9kdWxlIHRvIGVuaGFuY2UgY2xhc3NlcywgY3JlYXRlIGluc3RhbmNlcyBhbmQgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEBtb2R1bGUgTmVvXG4gKiBAc2luZ2xldG9uXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmNhcGl0YWxpemUgICAgICAgIGFzIGNhcGl0YWxpemVcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QgYXMgY3JlYXRlU3R5bGVPYmplY3RcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVzICAgICAgYXMgY3JlYXRlU3R5bGVzXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmRlY2FtZWwgICAgICAgICAgIGFzIGRlY2FtZWxcbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNBcnJheSAgICAgICAgICAgYXMgaXNBcnJheVxuICogQGJvcnJvd3MgTmVvLmNvcmUuVXRpbC5pc0Jvb2xlYW4gICAgICAgICBhcyBpc0Jvb2xlYW5cbiAqIEBib3Jyb3dzIE5lby5jb3JlLlV0aWwuaXNEZWZpbmVkICAgICAgICAgYXMgaXNEZWZpbmVkXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzTnVtYmVyICAgICAgICAgIGFzIGlzTnVtYmVyXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ICAgICAgICAgIGFzIGlzT2JqZWN0XG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLmlzU3RyaW5nICAgICAgICAgIGFzIGlzU3RyaW5nXG4gKiBAYm9ycm93cyBOZW8uY29yZS5VdGlsLnRvQXJyYXkgICAgICAgICAgIGFzIHRvQXJyYXlcbiAqIEB0dXRvcmlhbCAwMV9Db25jZXB0XG4gKi9cbmxldCBOZW8gPSBzZWxmLk5lbyB8fCB7fTtcblxuTmVvID0gc2VsZi5OZW8gPSBPYmplY3QuYXNzaWduKHtcbiAgICAvKipcbiAgICAgKiBBIG1hcCBjb250YWluaW5nIG50eXBlcyBhcyBrZXkgYW5kIE5lbyBjbGFzc2VzIG9yIHNpbmdsZXRvbnMgYXMgdmFsdWVzXG4gICAgICogQG1lbWJlck9mISBtb2R1bGU6TmVvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgKi9cbiAgICBudHlwZU1hcDoge30sXG4gICAgLyoqXG4gICAgICogTmVlZGVkIGZvciBOZW8uY3JlYXRlLiBGYWxzZSBmb3IgdGhlIG1haW4gdGhyZWFkLCB0cnVlIGZvciB0aGUgQXBwLCBEYXRhICYgVmRvbSB3b3JrZXJcbiAgICAgKiBAbWVtYmVyT2YhIG1vZHVsZTpOZW9cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgKi9cbiAgICBpbnNpZGVXb3JrZXI6IHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIFdvcmtlckdsb2JhbFNjb3BlICE9PSAndW5kZWZpbmVkJyxcblxuICAgIC8qKlxuICAgICAqIEludGVybmFsbHkgdXNlZCBhdCB0aGUgZW5kIG9mIGVhY2ggY2xhc3MgLyBtb2R1bGUgZGVmaW5pdGlvblxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHMgVGhlIE5lbyBjbGFzcyB0byBhcHBseSBjb25maWdzIHRvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNsYXNzQ29uZmlnKGNscykge1xuICAgICAgICBsZXQgYmFzZUNmZyAgICAgICA9IG51bGwsXG4gICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gbnVsbCxcbiAgICAgICAgICAgIGNvbmZpZyAgICAgICAgPSB7fSxcbiAgICAgICAgICAgIHByb3RvICAgICAgICAgPSBjbHMucHJvdG90eXBlIHx8IGNscyxcbiAgICAgICAgICAgIHByb3RvcyAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZyAgPSB7fSxcbiAgICAgICAgICAgIGN0b3I7XG5cbiAgICAgICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICAgICAgY3RvciA9IHByb3RvLmNvbnN0cnVjdG9yO1xuXG4gICAgICAgICAgICBpZiAoY3Rvci5oYXNPd25Qcm9wZXJ0eSgnY2xhc3NDb25maWdBcHBsaWVkJykpIHtcbiAgICAgICAgICAgICAgICBiYXNlQ2ZnICAgICAgID0gTmVvLmNsb25lKGN0b3IuY29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBiYXNlU3RhdGljQ2ZnID0gTmVvLmNsb25lKGN0b3Iuc3RhdGljQ29uZmlnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvdG9zLnVuc2hpZnQocHJvdG8pO1xuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcgICAgICAgPSBiYXNlQ2ZnICAgICAgID8gYmFzZUNmZyAgICAgICA6IGNvbmZpZztcbiAgICAgICAgc3RhdGljQ29uZmlnID0gYmFzZVN0YXRpY0NmZyA/IGJhc2VTdGF0aWNDZmcgOiBzdGF0aWNDb25maWc7XG5cbiAgICAgICAgcHJvdG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBjdG9yID0gZWxlbWVudC5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGxldCBjZmcgICAgICAgPSBjdG9yLmdldENvbmZpZyAgICAgICAmJiBjdG9yLmdldENvbmZpZygpICAgICAgIHx8IHt9LFxuICAgICAgICAgICAgICAgIHN0YXRpY0NmZyA9IGN0b3IuZ2V0U3RhdGljQ29uZmlnICYmIGN0b3IuZ2V0U3RhdGljQ29uZmlnKCkgfHwge30sXG4gICAgICAgICAgICAgICAgbWl4aW5zO1xuXG4gICAgICAgICAgICBpZiAoY2ZnKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY2ZnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleS5zbGljZSgtMSkgPT09ICdfJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNmZ1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNmZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvR2VuZXJhdGVHZXRTZXQoZWxlbWVudCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgYXBwbHkgcHJvcGVydGllcyB3aGljaCBoYXZlIG5vIHNldHRlcnMgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhvc2Ugd2lsbCBnZXQgYXBwbGllZCBvbiBjcmVhdGUgKE5lby5jb3JlLkJhc2UgLT4gaW5pdENvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWhhc1Byb3BlcnR5U2V0dGVyKGVsZW1lbnQsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlICA6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3Rvciwgc3RhdGljQ2ZnKTtcblxuICAgICAgICAgICAgaWYgKGNmZy5oYXNPd25Qcm9wZXJ0eSgnbnR5cGUnKSkge1xuICAgICAgICAgICAgICAgIE5lby5udHlwZU1hcFtjZmcubnR5cGVdID0gY2ZnLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWl4aW5zID0gY29uZmlnLmhhc093blByb3BlcnR5KCdtaXhpbnMnKSAmJiBjb25maWcubWl4aW5zIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGljQ2ZnICYmIHN0YXRpY0NmZy5vYnNlcnZhYmxlKSB7XG4gICAgICAgICAgICAgICAgbWl4aW5zLnB1c2goJ05lby5jb3JlLk9ic2VydmFibGUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNmZy5oYXNPd25Qcm9wZXJ0eSgnbWl4aW5zJykgJiYgQXJyYXkuaXNBcnJheShjZmcubWl4aW5zKSAmJiBjZmcubWl4aW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBtaXhpbnMucHVzaCguLi5jZmcubWl4aW5zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1peGlucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBhcHBseU1peGlucyhjdG9yLCBtaXhpbnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxldGUgY2ZnLm1peGlucztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubWl4aW5zO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGNvbmZpZywgY2ZnKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3RhdGljQ29uZmlnLCBzdGF0aWNDZmcpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGN0b3IsIHtcbiAgICAgICAgICAgICAgICBjbGFzc0NvbmZpZ0FwcGxpZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlnICAgICAgICAgICAgOiBOZW8uY2xvbmUoY29uZmlnLCB0cnVlKSxcbiAgICAgICAgICAgICAgICBpc0NsYXNzICAgICAgICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgc3RhdGljQ29uZmlnICAgICAgOiBOZW8uY2xvbmUoc3RhdGljQ29uZmlnLCB0cnVlKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRlbGV0ZSBjdG9yLmdldENvbmZpZztcbiAgICAgICAgICAgIGRlbGV0ZSBjdG9yLmdldFN0YXRpY0NvbmZpZztcblxuICAgICAgICAgICAgaWYgKCFjb25maWcuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVRvR2xvYmFsTnMoY2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1hcHMgYSBjbGFzcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlLlxuICAgICAqIENhbiBnZXQgY2FsbGVkIGZvciBjbGFzc2VzIGFuZCBzaW5nbGV0b24gaW5zdGFuY2VzXG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNsc1xuICAgICAqL1xuICAgIGFwcGx5VG9HbG9iYWxOcyhjbHMpIHtcbiAgICAgICAgbGV0IHByb3RvID0gdHlwZW9mIGNscyA9PT0gJ2Z1bmN0aW9uJyA/IGNscy5wcm90b3R5cGU6IGNscyxcbiAgICAgICAgICAgIGNsYXNzTmFtZSwgbnNBcnJheSwga2V5LCBucztcblxuICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3IucmVnaXN0ZXJUb0dsb2JhbE5zID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBwcm90by5pc0NsYXNzID8gcHJvdG8uY29uZmlnLmNsYXNzTmFtZSA6IHByb3RvLmNsYXNzTmFtZTtcblxuICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICBucyAgICAgID0gTmVvLm5zKG5zQXJyYXksIHRydWUpO1xuICAgICAgICAgICAgbnNba2V5XSA9IGNscztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIG1ldGhvZHMgZnJvbSBvbmUgbmFtZXNwYWNlIHRvIGFub3RoZXIgb25lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiAvLyBhbGlhc2VzXG4gICAgICogTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgICAqICAgICBjcmVhdGVTdHlsZU9iamVjdDogJ2NyZWF0ZVN0eWxlT2JqZWN0JyxcbiAgICAgKiAgICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgICAqICAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgICAqICAgICBkZWNhbWVsICAgICAgICAgIDogJ2RlY2FtZWwnLFxuICAgICAqICAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgICAqICAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgICogICAgIGlzRGVmaW5lZCAgICAgICAgOiAnaXNEZWZpbmVkJyxcbiAgICAgKiAgICAgaXNOdW1iZXIgICAgICAgICA6ICdpc051bWJlcicsXG4gICAgICogICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgICAqICAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICAgKiAgICAgdG9BcnJheSAgICAgICAgICA6ICd0b0FycmF5J1xuICAgICAqIH0sIHRydWUpO1xuICAgICAqXG4gICAgICogLy8gZS5nLiBOZW8uY29yZS5VdGlsLmlzT2JqZWN0ID0+IE5lby5pc09iamVjdFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW98TmVvLmNvcmUuQmFzZX0gdGFyZ2V0IFRoZSB0YXJnZXQgY2xhc3Mgb3Igc2luZ2xldG9uIEluc3RhbmNlIG9yIE5lb1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gbmFtZXNwYWNlIFRoZSBjbGFzcyBjb250YWluaW5nIHRoZSBtZXRob2RzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JpbmRdIHNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB5b3Ugd2FudCB0byBiaW5kIG1ldGhvZHMgdG8gdGhlIFwiZnJvbVwiIG5hbWVzcGFjZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHRhcmdldFxuICAgICAqL1xuICAgIGFwcGx5RnJvbU5zKHRhcmdldCwgbmFtZXNwYWNlLCBjb25maWcsIGJpbmQpIHtcbiAgICAgICAgbGV0IGZuTmFtZTtcblxuICAgICAgICBpZiAodGFyZ2V0ICYmIGNvbmZpZyAmJiB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBmbk5hbWUgPSBuYW1lc3BhY2VbdmFsdWVdO1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gYmluZCA/IGZuTmFtZS5iaW5kKG5hbWVzcGFjZSkgOiBmbk5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvcGllcyBhbGwga2V5cyBvZiBkZWZhdWx0cyBpbnRvIHRhcmdldCwgaW4gY2FzZSB0aGV5IGRvbid0IGFscmVhZHkgZXhpc3RcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHMgVGhlIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXlzIHlvdSB3YW50IHRvIGNvcHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB0YXJnZXRcbiAgICAgKi9cbiAgICBhc3NpZ25EZWZhdWx0cyh0YXJnZXQsIGRlZmF1bHRzKSB7XG4gICAgICAgIGlmICh0YXJnZXQgJiYgZGVmYXVsdHMgJiYgdHlwZW9mIGRlZmF1bHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZGVmYXVsdHMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl8Kn0gb2JqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbZGVlcD1mYWxzZV0gU2V0IHRoaXMgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIGNsb25lIG5lc3RlZCBvYmplY3RzIGFzIHdlbGxcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtpZ25vcmVOZW9JbnN0YW5jZXM9ZmFsc2VdIHJldHVybnMgZXhpc3RpbmcgaW5zdGFuY2VzIGlmIHNldCB0byB0cnVlXG4gICAgICogQHJldHVybnMge09iamVjdHxBcnJheXwqfSB0aGUgY2xvbmVkIGlucHV0XG4gICAgICovXG4gICAgY2xvbmUob2JqLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpIHtcbiAgICAgICAgbGV0IG91dDtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqLm1hcCh2YWwgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBOZW8uY2xvbmUodmFsLCBkZWVwLCBpZ25vcmVOZW9JbnN0YW5jZXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG9iai5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIG9iaiBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWdub3JlTmVvSW5zdGFuY2VzID8gb2JqIDogdGhpcy5jbG9uZU5lb0luc3RhbmNlKG9iaik7XG4gICAgICAgICAgICB9IGVsc2UgaWYob2JqLmNvbnN0cnVjdG9yLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvdXQgPSB7fTtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhvYmopLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIGRlZXAsIGlnbm9yZU5lb0luc3RhbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmo7IC8vIHJldHVybiBhbGwgb3RoZXIgZGF0YSB0eXBlc1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIHVzaW5nIHRoZSBvcmlnaW5hbENvbmZpZyB3aXRob3V0IHRoZSBpZFxuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSB0aGUgY2xvbmVkIGluc3RhbmNlXG4gICAgICovXG4gICAgY2xvbmVOZW9JbnN0YW5jZShpbnN0YW5jZSkge1xuICAgICAgICBsZXQgY29uZmlnID0gey4uLmluc3RhbmNlLm9yaWdpbmFsQ29uZmlnfTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5faWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGluc3RhbmNlLmNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVXNlIE5lby5jcmVhdGUoKSBpbnN0ZWFkIG9mIFwibmV3XCIgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBhbGwgTmVvIGNsYXNzZXNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24ubWpzJztcbiAgICAgKlxuICAgICAqIE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBpbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uLm1qcyc7XG4gICAgICpcbiAgICAgKiBOZW8uY3JlYXRlKHtcbiAgICAgKiAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLmNyZWF0ZSgnTmVvLmNvbXBvbmVudC5CdXR0b24nIHtcbiAgICAgKiAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgOiAnSG9tZSdcbiAgICAgKiB9KTtcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIE5lby5jcmVhdGUoe1xuICAgICAqICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkJ1dHRvbicsXG4gICAgICogICAgIGljb25DbHMgIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAqICAgICB0ZXh0ICAgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBtZW1iZXJPZiBtb2R1bGU6TmVvXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fE5lby5jb3JlLkJhc2V9IGNsYXNzTmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnXVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfG51bGx9IFRoZSBuZXcgY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGUoY2xhc3NOYW1lLCBjb25maWcpIHtcbiAgICAgICAgbGV0IGNscywgaW5zdGFuY2U7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICdmdW5jdGlvbicgJiYgdW5kZWZpbmVkICE9PSBjbGFzc05hbWUuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIGNscyA9IGNsYXNzTmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNsYXNzTmFtZTtcblxuICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNsYXNzTmFtZSAmJiAhY29uZmlnLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyB1c2luZyBjb25zb2xlLmVycm9yIGluc3RlYWQgb2YgdGhyb3cgdG8gc2hvdyB0aGUgY29uZmlnIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDbGFzcyBjcmVhdGVkIHdpdGggb2JqZWN0IGNvbmZpZ3VyYXRpb24gbWlzc2luZyBjbGFzc05hbWUgb3IgbW9kdWxlIHByb3BlcnR5JywgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gY29uZmlnLmNsYXNzTmFtZSA/IGNvbmZpZy5jbGFzc05hbWUgOiBjb25maWcubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZXhpc3RzKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzICcgKyBjbGFzc05hbWUgKyAnIGRvZXMgbm90IGV4aXN0Jyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNscyA9IE5lby5ucyhjbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgY2xzKGNvbmZpZyk7XG5cbiAgICAgICAgaW5zdGFuY2Uub25Db25zdHJ1Y3RlZCgpO1xuICAgICAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH0sXG5cbiAgICBlbXB0eUZuKCkge30sXG5cbiAgICAvKipcbiAgICAgKiBNYXBzIGEgY2xhc3NOYW1lIHN0cmluZyBpbnRvIGEgZ2xvYmFsIG5hbWVzcGFjZVxuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm5zKCdOZW8uY29tcG9uZW50LkJ1dHRvbicsIHRydWUpO1xuICAgICAqIC8vID0+XG4gICAgICogLy8gc2VsZi5OZW8gPSBzZWxmLk5lbyB8fCB7fTtcbiAgICAgKiAvLyBzZWxmLk5lby5jb21wb25lbnQgPSBzZWxmLk5lby5jb21wb25lbnQgfHwge307XG4gICAgICogLy8gc2VsZi5OZW8uY29tcG9uZW50LkJ1dHRvbiA9IHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b24gfHwge307XG4gICAgICogLy8gcmV0dXJuIHNlbGYuTmVvLmNvbXBvbmVudC5CdXR0b247XG4gICAgICpcbiAgICAgKiBAbWVtYmVyT2YgbW9kdWxlOk5lb1xuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBuYW1lcyBUaGUgY2xhc3MgbmFtZSBzdHJpbmcgY29udGFpbmluZyBkb3RzIG9yIGFuIEFycmF5IG9mIHRoZSBzdHJpbmcgcGFydHNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtjcmVhdGVdIFNldCBjcmVhdGUgdG8gdHJ1ZSB0byBjcmVhdGUgZW1wdHkgb2JqZWN0cyBmb3Igbm9uIGV4aXN0aW5nIHBhcnRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV0gU2V0IGEgZGlmZmVyZW50IHN0YXJ0aW5nIHBvaW50IGFzIHNlbGZcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSByZWZlcmVuY2UgdG8gdGhlIHRvcGxldmVsIG5hbWVzcGFjZVxuICAgICAqL1xuICAgIG5zKG5hbWVzLCBjcmVhdGUsIHNjb3BlKSB7XG4gICAgICAgIG5hbWVzID0gQXJyYXkuaXNBcnJheShuYW1lcykgPyBuYW1lcyA6IG5hbWVzLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hbWVzLnJlZHVjZSgocHJldiwgY3VycmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNyZWF0ZSAmJiAhcHJldltjdXJyZW50XSkge1xuICAgICAgICAgICAgICAgIHByZXZbY3VycmVudF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHNjb3BlIHx8IHNlbGYpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGluc3RhbmNlcyBvZiBOZW8gY2xhc3NlcyB1c2luZyB0aGVpciBudHlwZSBpbnN0ZWFkIG9mIHRoZSBjbGFzcyBuYW1lXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiBOZW8ubnR5cGUoJ2J1dHRvbicge1xuICAgICAqICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICogICAgIHRleHQgICA6ICdIb21lJ1xuICAgICAqIH0pO1xuICAgICAqIEBleGFtcGxlXG4gICAgICogTmVvLm50eXBlKHtcbiAgICAgKiAgICAgbnR5cGUgIDogJ2J1dHRvbicsXG4gICAgICogICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgKiAgICAgdGV4dCAgIDogJ0hvbWUnXG4gICAgICogfSk7XG4gICAgICogQG1lbWJlck9mIG1vZHVsZTpOZW9cbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IG50eXBlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWddXG4gICAgICogQHJldHVybnMge05lby5jb3JlLkJhc2V9XG4gICAgICogQHNlZSB7QGxpbmsgbW9kdWxlOk5lby5jcmVhdGUgY3JlYXRlfVxuICAgICAqL1xuICAgIG50eXBlKG50eXBlLCBjb25maWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IG50eXBlO1xuICAgICAgICAgICAgaWYgKCFjb25maWcubnR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NsYXNzIGRlZmluZWQgd2l0aCBvYmplY3QgY29uZmlndXJhdGlvbiBtaXNzaW5nIG50eXBlIHByb3BlcnR5LiAnICsgY29uZmlnLm50eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG50eXBlID0gY29uZmlnLm50eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzTmFtZSA9IE5lby5udHlwZU1hcFtudHlwZV07XG5cbiAgICAgICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbnR5cGUgJyArIG50eXBlICsgJyBkb2VzIG5vdCBleGlzdCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKGNsYXNzTmFtZSwgY29uZmlnKTtcbiAgICB9LFxuXG4gICAgb25TdGFydDogTmVvLmVtcHR5Rm5cbn0sIE5lbyk7XG5cbi8qKlxuICogTGlzdCBvZiBjbGFzcyBwcm9wZXJ0aWVzIHdoaWNoIGFyZSBub3Qgc3VwcG9zZWQgdG8gZ2V0IG1peGVkIGludG8gb3RoZXIgY2xhc3Nlc1xuICogQHR5cGUge3N0cmluZ1tdfVxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgaWdub3JlTWl4aW4gPSBbXG4gICAgJ19uYW1lJyxcbiAgICAnY2xhc3NDb25maWdBcHBsaWVkJyxcbiAgICAnY2xhc3NOYW1lJyxcbiAgICAnY29uc3RydWN0b3InLFxuICAgICdpc0NsYXNzJyxcbiAgICAnbWl4aW4nLFxuICAgICdudHlwZScsXG4gICAgJ29ic2VydmFibGUnLFxuICAgICdyZWdpc3RlclRvR2xvYmFsTnMnXG5dO1xuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgY2xhc3MgbmFtZSBleGlzdHMgaW5zaWRlIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IGNsYXNzTmFtZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBleGlzdHMoY2xhc3NOYW1lKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuICEhY2xhc3NOYW1lLnNwbGl0KCcuJykucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gcHJldltjdXJyZW50XTtcbiAgICAgICAgfSwgc2VsZik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1peFJlZHVjZShtaXhpbkNscykge1xuICAgIHJldHVybiAocHJldiwgY3VycmVudCwgaWR4LCBhcnIpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXZbY3VycmVudF0gPSBpZHggIT09IGFyci5sZW5ndGggLTEgPyBwcmV2W2N1cnJlbnRdIHx8IHt9IDogbWl4aW5DbHM7XG4gICAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBtaXhpblByb3RvXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBtaXhpblByb3BlcnR5KHByb3RvLCBtaXhpblByb3RvKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgICAgICBpZiAofmlnbm9yZU1peGluLmluZGV4T2Yoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm90b1trZXldICYmIHByb3RvW2tleV0uX2Zyb20pIHtcbiAgICAgICAgICAgIGlmIChtaXhpblByb3RvLmNsYXNzTmFtZSA9PT0gcHJvdG9ba2V5XS5fZnJvbSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWl4aW4gc2V0IG11bHRpcGxlIHRpbWVzIG9yIGFscmVhZHkgZGVmaW5lZCBvbiBhIEJhc2UgQ2xhc3MnLCBwcm90by5jbGFzc05hbWUsIG1peGluUHJvdG8uY2xhc3NOYW1lLCBrZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBwcm90by5jbGFzc05hbWUgKyAnOiBNdWx0aXBsZSBtaXhpbnMgZGVmaW5pbmcgc2FtZSBwcm9wZXJ0eSAoJyArXG4gICAgICAgICAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUgKyAnLCAnICtcbiAgICAgICAgICAgICAgICBwcm90b1trZXldLl9mcm9tICsgJykgPT4gJyArXG4gICAgICAgICAgICAgICAga2V5XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdG9ba2V5XSA9IG1peGluUHJvdG9ba2V5XTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHByb3RvLCBrZXkpLl9mcm9tID0gbWl4aW5Qcm90by5jbGFzc05hbWU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBwcm90b1trZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwcm90b1trZXldLl9uYW1lID0ga2V5O1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBjbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1peGluc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gYXBwbHlNaXhpbnMoY2xzLCBtaXhpbnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobWl4aW5zKSkge1xuICAgICAgICBtaXhpbnMgPSBbbWl4aW5zXTtcbiAgICB9XG5cbiAgICBsZXQgaSAgICAgICAgICAgID0gMCxcbiAgICAgICAgbGVuICAgICAgICAgID0gbWl4aW5zLmxlbmd0aCxcbiAgICAgICAgbWl4aW5DbGFzc2VzID0ge30sXG4gICAgICAgIG1peGluLCBtaXhpbkNscywgbWl4aW5Qcm90bztcblxuICAgIGZvciAoO2kgPCBsZW47aSsrKSB7XG4gICAgICAgIG1peGluID0gbWl4aW5zW2ldO1xuXG4gICAgICAgIGlmIChtaXhpbi5pc0NsYXNzKSB7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW4ucHJvdG90eXBlO1xuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpblByb3RvLmNsYXNzTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhtaXhpbikpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dGVtcHRpbmcgdG8gbWl4aW4gYW4gdW5kZWZpbmVkIGNsYXNzOiAnICsgbWl4aW4gKyAnLCAnICsgY2xzLnByb3RvdHlwZS5jbGFzc05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWl4aW5DbHMgICA9IE5lby5ucyhtaXhpbik7XG4gICAgICAgICAgICBtaXhpblByb3RvID0gbWl4aW5DbHMucHJvdG90eXBlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWl4aW5Qcm90by5jbGFzc05hbWUuc3BsaXQoJy4nKS5yZWR1Y2UobWl4UmVkdWNlKG1peGluQ2xzKSwgbWl4aW5DbGFzc2VzKTtcblxuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhtaXhpblByb3RvKS5mb3JFYWNoKG1peGluUHJvcGVydHkoY2xzLnByb3RvdHlwZSwgbWl4aW5Qcm90bykpO1xuICAgIH1cblxuICAgIGNscy5wcm90b3R5cGUubWl4aW5zID0gbWl4aW5DbGFzc2VzOyAvLyB0b2RvOiB3ZSBzaG91bGQgZG8gYSBkZWVwIG1lcmdlXG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZXJlIGlzIGEgc2V0IG1ldGhvZCBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBrZXkgaW5zaWRlIHRoZSBwcm90b3R5cGUgY2hhaW5cbiAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gcHJvdG8gVGhlIHRvcCBsZXZlbCBwcm90b3R5cGUgb2YgYSBjbGFzc1xuICogQHBhcmFtIHtTdHJpbmd9IGtleSB0aGUgcHJvcGVydHkga2V5IHRvIHRlc3RcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gaGFzUHJvcGVydHlTZXR0ZXIocHJvdG8sIGtleSkge1xuICAgIGxldCBkZXNjcmlwdG9yO1xuXG4gICAgd2hpbGUgKHByb3RvLl9fcHJvdG9fXykge1xuICAgICAgICBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihwcm90bywga2V5KTtcblxuICAgICAgICBpZiAodHlwZW9mIGRlc2NyaXB0b3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBkZXNjcmlwdG9yLnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgZ2V0IC8gc2V0IG1ldGhvZHMgZm9yIGNsYXNzIGNvbmZpZ3MgZW5kaW5nIHdpdGggYW4gdW5kZXJzY29yZVxuICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSBwcm90b1xuICogQHBhcmFtIHtTdHJpbmd9IGtleVxuICogQHByaXZhdGVcbiAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICovXG5mdW5jdGlvbiBhdXRvR2VuZXJhdGVHZXRTZXQocHJvdG8sIGtleSkge1xuICAgIGlmIChoYXNQcm9wZXJ0eVNldHRlcihwcm90bywga2V5KSkge1xuICAgICAgICB0aHJvdygnQ29uZmlnICcgKyBrZXkgKyAnXyAoJyArIHByb3RvLmNsYXNzTmFtZSArICcpIGFscmVhZHkgaGFzIGEgc2V0IG1ldGhvZCwgdXNlIGJlZm9yZUdldCwgYmVmb3JlU2V0ICYgYWZ0ZXJTZXQgaW5zdGVhZCcpO1xuICAgIH1cblxuICAgIGlmICghTmVvW2dldFNldENhY2hlXSkge1xuICAgICAgICBOZW9bZ2V0U2V0Q2FjaGVdID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFOZW9bZ2V0U2V0Q2FjaGVdW2tleV0pIHtcbiAgICAgICAgTmVvW2dldFNldENhY2hlXVtrZXldID0ge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBiZWZvcmVHZXQgPSAnYmVmb3JlR2V0JyArIE5lby5jYXBpdGFsaXplKGtleSksXG4gICAgICAgICAgICAgICAgICAgIGhhc05ld0tleSA9IG1lW2NvbmZpZ1N5bWJvbF0uaGFzT3duUHJvcGVydHkoa2V5KSxcbiAgICAgICAgICAgICAgICAgICAgbmV3S2V5ICAgID0gbWVbY29uZmlnU3ltYm9sXVtrZXldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgPSBoYXNOZXdLZXkgPyBuZXdLZXkgOiBtZVsnXycgKyBrZXldO1xuXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdpdGVtcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gWy4uLnZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUudmFsdWVPZigpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzTmV3S2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW2tleV0gPSB2YWx1ZTsgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBzZXR0ZXIgPT4gYmVmb3JlU2V0LCBhZnRlclNldFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lWydfJyArIGtleV07IC8vIHJldHVybiB0aGUgdmFsdWUgcGFyc2VkIGJ5IHRoZSBzZXR0ZXJcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobWVbYmVmb3JlR2V0XSAmJiB0eXBlb2YgbWVbYmVmb3JlR2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG1lW2JlZm9yZUdldF0odmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICBfa2V5ICAgICAgPSAnXycgKyBrZXksXG4gICAgICAgICAgICAgICAgICAgIHVLZXkgICAgICA9IE5lby5jYXBpdGFsaXplKGtleSksXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZVNldCA9ICdiZWZvcmVTZXQnICsgdUtleSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJTZXQgID0gJ2FmdGVyU2V0JyAgKyB1S2V5LFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSAgPSBtZVtfa2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5IHNldCBjYWxsIGhhcyB0byBkZWxldGUgdGhlIG1hdGNoaW5nIHN5bWJvbFxuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyB3ZSBkbyB3YW50IHRvIHN0b3JlIHRoZSB2YWx1ZSBiZWZvcmUgdGhlIGJlZm9yZVNldCBtb2RpZmljYXRpb24gYXMgd2VsbCxcbiAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCBjb3VsZCBnZXQgcHVsbGVkIGJ5IG90aGVyIGJlZm9yZVNldCBtZXRob2RzIG9mIGRpZmZlcmVudCBjb25maWdzXG4gICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIGlmIChtZVtiZWZvcmVTZXRdICYmIHR5cGVvZiBtZVtiZWZvcmVTZXRdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbWVbYmVmb3JlU2V0XSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZXkgZG9uJ3QgcmV0dXJuIGEgdmFsdWUsIHRoYXQgbWVhbnMgbm8gY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZVtfa2V5XSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWVbX2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0b2RvOiB3ZSBjb3VsZCBjb21wYXJlIG9iamVjdHMgJiBhcnJheXMgZm9yIGVxdWFsaXR5XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgfHwgdmFsdWUgIT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZVthZnRlclNldF0gJiYgdHlwZW9mIG1lW2FmdGVyU2V0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVbYWZ0ZXJTZXRdKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCBrZXksIE5lb1tnZXRTZXRDYWNoZV1ba2V5XSk7XG59XG5cbk5lby5jb25maWcgPSBOZW8uY29uZmlnIHx8IHt9O1xuXG5OZW8uYXNzaWduRGVmYXVsdHMoTmVvLmNvbmZpZywgRGVmYXVsdENvbmZpZyk7XG5cbmV4cG9ydCB7TmVvIGFzIGRlZmF1bHR9OyIsImltcG9ydCBJZEdlbmVyYXRvciBmcm9tICcuL0lkR2VuZXJhdG9yLm1qcydcblxuY29uc3QgY29uZmlnU3ltYm9sID0gU3ltYm9sLmZvcignY29uZmlnU3ltYm9sJyksXG4gICAgICBpc0luc3RhbmNlICAgPSBTeW1ib2woJ2lzSW5zdGFuY2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIGNsYXNzZXMgaW5zaWRlIHRoZSBOZW8gbmFtZXNwYWNlXG4gKiBAY2xhc3MgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gdGhlIGNsYXNzIGNvbnN0cnVjdG9yXG4gICAgICogQHJldHVybnMge09iamVjdH0gc3RhdGljQ29uZmlnXG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmV0dXJuIHZhbHVlIHdpbGwgZ2V0IGFwcGxpZWQgdG8gZWFjaCBjbGFzcyBpbnN0YW5jZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0YXRpY0NvbmZpZ1xuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIHdoaWNoIHdpbGwgZ2V0IG1hcHBlZCBpbnRvIHRoZSBOZW8gb3IgYXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuQmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbWl4aW5zIGFzIGFuIGFycmF5IG9mIGNsYXNzTmFtZXMsIGltcG9ydGVkIG1vZHVsZXMgb3IgYSBtaXhlZCB2ZXJzaW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfE5lby5jb3JlLkJhc2VbXXxudWxsfSBtaXhpbnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW5zOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENvbnN1bWVzIHRoZSBzdGF0aWMgZ2V0Q29uZmlnKCkgb2JqZWN0XG4gICAgICogQXBwbGllcyB0aGUgb2JzZXJ2YWJsZSBtaXhpbiBpZiBuZWVkZWQsIGdyYW50cyByZW1vdGUgYWNjZXNzIGlmIG5lZWRlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWUsIHtcbiAgICAgICAgICAgIFtjb25maWdTeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZSAgICA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbaXNJbnN0YW5jZV06IHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNyZWF0ZUlkKGNvbmZpZy5pZCB8fCBtZS5pZCk7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG5cbiAgICAgICAgaWYgKG1lLmNvbnN0cnVjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmNvbnN0cnVjdG9yLmNvbmZpZy5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5nZXRTdGF0aWNDb25maWcoJ29ic2VydmFibGUnKSB8fCBtZS5taXhpbnMgJiYgTmVvLm5zKCdOZW8uY29yZS5PYnNlcnZhYmxlJywgbWUubWl4aW5zKSkge1xuICAgICAgICAgICAgbWUuaW5pdE9ic2VydmFibGUoY29uZmlnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmluaXRDb25maWcoY29uZmlnKTtcblxuICAgICAgICBpZiAobWUuY29udHJvbGxlcikge1xuICAgICAgICAgICAgbWUuY29udHJvbGxlci5wYXJzZUNvbmZpZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lLCAnY29uZmlnc0FwcGxpZWQnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLnJlbW90ZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChtZS5pbml0UmVtb3RlLmJpbmQobWUpLCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGFsbCBjb25zdHJ1Y3RvcnMgYXJlIGRvbmVcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge31cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaXMgZG9uZVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb3JlLkJhc2Ujb25Db25zdHJ1Y3RlZCBvbkNvbnN0cnVjdGVkfVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIGluaXQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBiZWZvcmVTZXQgZnVuY3Rpb25zIHdoaWNoIHRlc3QgaWYgYSBnaXZlbiB2YWx1ZSBpcyBpbnNpZGUgYSBzdGF0aWMgYXJyYXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIGNvbmZpZyBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtzdGF0aWNOYW1lPW5hbWUgKyAncyddIG5hbWUgb2YgdGhlIHN0YXRpYyBjb25maWcgYXJyYXlcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCBuYW1lLCBzdGF0aWNOYW1lID0gbmFtZSArICdzJykge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldFN0YXRpY0NvbmZpZyhzdGF0aWNOYW1lKTtcblxuICAgICAgICBpZiAoIXZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignU3VwcG9ydGVkIHZhbHVlcyBmb3IgJyArIG5hbWUgKyAnIGFyZTonLCB2YWx1ZXMuam9pbignLCAnKSwgdGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgY3JlYXRlSWQoaWQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICBpZCA9IElkR2VuZXJhdG9yLmdldElkKG1lLm50eXBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmlkID0gaWQ7XG5cbiAgICAgICAgaWYgKEJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBOZW8ubWFuYWdlci5JbnN0YW5jZS5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIU5lby5pZE1hcCkge1xuICAgICAgICAgICAgICAgIE5lby5pZE1hcCA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBOZW8uaWRNYXBbbWUuaWRdID0gbWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gTmVvLm1hbmFnZXIuSW5zdGFuY2VcbiAgICAgKiBhbmQgcmVtb3ZlcyBhbGwgb2JqZWN0IGVudHJpZXMgZnJvbSB0aGlzIGluc3RhbmNlXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnVucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMobWUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIG1lW2tleV0gPSBudWxsO1xuICAgICAgICAgICAgZGVsZXRlIG1lW2tleV07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgbGV0IGNmZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuICAgICAgICByZXR1cm4gKGtleSA/IGNmZ1trZXldIDogY2ZnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKi9cbiAgICBpbml0Q29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcHJvY2Vzc0NvbmZpZ3MoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKTtcblxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBpcyBpbnRlbmRlZCBmb3IgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZVxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGdvdCBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXG4gICAgICAgICAgICBpZiAoIW1lLmhhc093blByb3BlcnR5KGtleXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgbWVba2V5c1swXV0gPSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGRlbGV0ZSBjYWxsIGluc2lkZSB0aGUgY29uZmlnIGdldHRlciBhcyB3ZWxsIChOZW8ubWpzID0+IGF1dG9HZW5lcmF0ZUdldFNldCgpKVxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcblxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICByZW1vdGUgICAgPSBtZS5yZW1vdGUsXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZS5jbGFzc05hbWUsXG4gICAgICAgICAgICBvcmlnaW47XG5cbiAgICAgICAgaWYgKCFtZS5zaW5nbGV0b24pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3RlIG1ldGhvZCBhY2Nlc3Mgb25seSBmdW5jdGlvbmFsIGZvciBTaW5nbGV0b24gY2xhc3NlcyAnICsgY2xhc3NOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghTmVvLmNvbmZpZy51bml0VGVzdE1vZGUgJiYgTmVvLmlzT2JqZWN0KHJlbW90ZSkpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlbW90ZSkuZm9yRWFjaCgoW3dvcmtlciwgbWV0aG9kc10pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSB3b3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luID0gTmVvLndvcmtlcklkID09PSAnbWFpbicgPyBOZW8ud29ya2VyLk1hbmFnZXIgOiBOZW8uY3VycmVudFdvcmtlcjtcblxuICAgICAgICAgICAgICAgICAgICBvcmlnaW4uc2VuZE1lc3NhZ2Uod29ya2VyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICAgICA6ICdyZWdpc3RlclJlbW90ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRob2RzICAgICA6IG1ldGhvZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgICA6IGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGN0b3IgPSBtZS5jb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAoIWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05lby5hcHBseUNsYXNzQ29uZmlnIGhhcyBub3QgYmVlbiBydW4gb24gJyArIG1lLmNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICAgICAgbWUub3JpZ2luYWxDb25maWcgPSBOZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY3Rvci5jb25maWcsIC4uLmNvbmZpZ307XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlIG11bHRpcGxlIGNvbmZpZ3MgYXQgb25jZSwgZW5zdXJpbmcgdGhhdCBhbGwgYWZ0ZXJTZXQgbWV0aG9kcyBnZXQgYWxsIG5ldyBhc3NpZ25lZCB2YWx1ZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdXNpbmc6XG4gICAgICAgIC8vIG1lW2NvbmZpZ1N5bWJvbF0gPSB2YWx1ZXM7XG4gICAgICAgIC8vIHdlIGtlZXAgdGhlIE9iamVjdCBpbnN0YW5jZSAoZGVmaW5lZCB2aWEgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoKSA9PiBub24gZW51bWVyYWJsZSlcblxuICAgICAgICBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXldO1xuICAgICAgICB9KTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lW2NvbmZpZ1N5bWJvbF0sIHZhbHVlcyk7XG5cbiAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxuICAgICAqL1xuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcblxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uY29tcG9uZW50LkJ1dHRvbicpLnRvU3RyaW5nKCkgPT4gXCJbb2JqZWN0IE5lby5jb21wb25lbnQuQnV0dG9uIChuZW8tYnV0dG9uLTEpXVwiYFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0IFtTeW1ib2wudG9TdHJpbmdUYWddKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWUgKyAnIChpZDonICsgdGhpcy5pZCArICcpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIGluc3RhbmNlb2YgbWV0aG9kLiBXaXRob3V0IHRoaXMgY2hhbmdlOjwvcD5cbiAgICAgKiBgTmVvLmNvbGxlY3Rpb24uQmFzZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogPHA+V2l0aCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiBmYWxzZWA8YnI+XG4gICAgICogYE5lby5jcmVhdGUoTmVvLmNvbGxlY3Rpb24uQmFzZSkgaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlID0+IHRydWVgXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIFtTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSB7XG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtpc0luc3RhbmNlXSA9PT0gdHJ1ZSA/IHN1cGVyW1N5bWJvbC5oYXNJbnN0YW5jZV0oaW5zdGFuY2UpIDogZmFsc2U7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPSBmYWxzZTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsIi8qKlxuICogVGhpcyBjbGFzcyBnZXRzIHVzZWQgYnkgY29yZS5CYXNlLCBzbyBpdCBjYW4gbm90IGV4dGVuZCBpdC5cbiAqIEl0IGNvdWxkIGdldCBzaW1wbGlmaWVkIHRvIGp1c3QgYmVpbmcgYW4gb2JqZWN0IChuZWVkcyB0byBtYW51YWxseSBnZXQgcHV0IGludG8gdGhlIE5lbyBuYW1lc3BhY2UgaW4gdGhpcyBjYXNlKS5cbiAqIEBjbGFzcyBOZW8uY29yZS5JZEdlbmVyYXRvclxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBJZEdlbmVyYXRvciB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIGZhbHNlIGluIGNhc2UgeW91IGRvbid0IHdhbnQgdG8gc3RpY2tcbiAgICAgICAgICogdG8gdGhlIFwiYW50aS1wYXR0ZXJuXCIgdG8gYXBwbHkgY2xhc3NlcyB0byB0aGUgZ2xvYmFsIE5lbyBvciBBcHAgbmFtZXNwYWNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlZ2lzdGVyVG9HbG9iYWxOcz10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5JZEdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdpZC1nZW5lcmF0b3InXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2lkLWdlbmVyYXRvcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBwcmVmaXggZm9yIG5lbyBpbnN0YW5jZSBpZHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYXNlPSduZW8tJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFzZTogJ25lby0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xldG9uPSd0cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBpbml0KCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XG5cbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIG1lLmJhc2UgKyAobmFtZSA9PT0gJ25lbycgPyAnJyA6IG5hbWUgKyAnLScpICsgY291bnQ7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJZEdlbmVyYXRvcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSWRHZW5lcmF0b3IpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkxvZ2dlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuTG9nZ2VyJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvcmUuTG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xvZ2dlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbG9nZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBsb2dnaW5nXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZW5hYmxlTG9nczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGV2ZWw9J2xvZydcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGxldmVsOiAnbG9nJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xldG9uOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIC8vIGFsaWFzZXNcbiAgICAgICAgTmVvLmFwcGx5RnJvbU5zKE5lbywgdGhpcywge1xuICAgICAgICAgICAgZXJyb3IgICA6ICdlcnJvcicsXG4gICAgICAgICAgICBpbmZvICAgIDogJ2luZm8nLFxuICAgICAgICAgICAgbG9nICAgICA6ICdsb2cnLFxuICAgICAgICAgICAgbG9nRXJyb3I6ICdsb2dFcnJvcicsXG4gICAgICAgICAgICB3YXJuICAgIDogJ3dhcm4nXG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgZXJyb3IodmFsdWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdsb2cnO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBpbmZvKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICdpbmZvJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgbG9nRXJyb3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2Vycm9yJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICovXG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnd2Fybic7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgd3JpdGUoLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVMb2dzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb25zb2xlW3RoaXMubGV2ZWxdKC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMb2dnZXIpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKExvZ2dlcik7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuT2JzZXJ2YWJsZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBPYnNlcnZhYmxlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLk9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21peGluLW9ic2VydmFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWl4aW49dHJ1ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWl4aW46IHRydWVcbiAgICB9fVxuXG4gICAgaW5pdE9ic2VydmFibGUoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwcm90byA9IG1lLl9fcHJvdG9fXyxcbiAgICAgICAgICAgIGxpc3RlbmVycztcblxuICAgICAgICBpZiAoY29uZmlnLmxpc3RlbmVycykge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzID0gY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcubGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzO1xuXG4gICAgICAgIG1lLmxpc3RlbmVycyA9IHt9O1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGxpc3RlbmVycyk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAocHJvdG8gJiYgcHJvdG8uY29uc3RydWN0b3IuaXNDbGFzcykge1xuICAgICAgICAgICAgaWYgKHByb3RvLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZy5vYnNlcnZhYmxlICYmICFwcm90by5jb25zdHJ1Y3Rvci5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHByb3RvLmNvbnN0cnVjdG9yLCB7XG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyICAgOiBtZS5hZGRMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgZmlyZSAgICAgICAgICA6IG1lLmZpcmUsXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgb24gICAgICAgICAgICA6IG1lLm9uLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMaXN0ZW5lcjogbWUucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgICAgICAgICAgICAgIHVuICAgICAgICAgICAgOiBtZS51blxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvdG8gPSBwcm90by5fX3Byb3RvX187XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgYWRkTGlzdGVuZXIobmFtZSwgb3B0cywgc2NvcGUsIGV2ZW50SWQsIGRhdGEsIG9yZGVyKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ZW5lciwgZXhpc3RpbmcsIGV2ZW50Q29uZmlnO1xuXG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChuYW1lLmhhc093blByb3BlcnR5KCdzY29wZScpKSB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBuYW1lLnNjb3BlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhuYW1lKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBtZS5hZGRMaXN0ZW5lcihrZXksIHZhbHVlLCBzY29wZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHNjb3BlID0gc2NvcGUgfHwgb3B0cy5zY29wZTtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gb3B0cy5mbjtcbiAgICAgICAgICAgIG9yZGVyID0gb3JkZXIgfHwgb3B0cy5vcmRlcjtcbiAgICAgICAgICAgIGV2ZW50SWQgPSBldmVudElkIHx8IG9wdHMuZXZlbnRJZDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzOyAvLyBWQyBob29rLCBjYW4gZ2V0IHBhcnNlZCBhZnRlciBvbkNvbnN0cnVjdGVkIGluIGNhc2UgdGhlIHZpZXcgdXNlcyB0aGUgcGFyZW50IFZDXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYWRkTGlzdGVuZXIgY2FsbDogJyArIG5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRDb25maWcgPSB7XG4gICAgICAgICAgICBmbiAgICA6IGxpc3RlbmVyLFxuICAgICAgICAgICAgc2NvcGUgOiBzY29wZSxcbiAgICAgICAgICAgIGRhdGEgIDogZGF0YSxcbiAgICAgICAgICAgIGlkICAgIDogZXZlbnRJZCB8fCBOZW8uZ2V0SWQoJ2V2ZW50JylcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZXhpc3RpbmcgPSBtZS5saXN0ZW5lcnMgJiYgbWUubGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBleGlzdGluZy5mb3JFYWNoKGNmZyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNmZy5pZCA9PT0gZXZlbnRJZCB8fCAoY2ZnLmZuID09PSBsaXN0ZW5lciAmJiBjZmcuc2NvcGUgPT09IHNjb3BlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSBldmVudCBoYW5kbGVyIGF0dGFjaGVkOiAnICsgbmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3JkZXIgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZXhpc3Rpbmcuc3BsaWNlKG9yZGVyLCAwLCBldmVudENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yZGVyID09PSAnYmVmb3JlJykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnVuc2hpZnQoZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5wdXNoKGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVyc1tuYW1lXSA9IFtldmVudENvbmZpZ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnRDb25maWcuaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqL1xuICAgIGZpcmUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFyZ3MgICAgICA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycyxcbiAgICAgICAgICAgIGV2ZW50Q29uZmlnLCBldmVudHMsIGksIGxlbjtcblxuICAgICAgICBpZiAobGlzdGVuZXJzICYmIGxpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgZXZlbnRzID0gWy4uLmxpc3RlbmVyc1tuYW1lXV07XG4gICAgICAgICAgICBsZW4gICAgPSBldmVudHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBldmVudENvbmZpZyA9IGV2ZW50c1tpXTtcblxuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnLmZuLmFwcGx5KGV2ZW50Q29uZmlnLnNjb3BlIHx8IG1lLCBldmVudENvbmZpZy5kYXRhID8gYXJncy5jb25jYXQoZXZlbnRDb25maWcuZGF0YSkgOiBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxuICAgICAqL1xuICAgIHJlbW92ZUxpc3RlbmVyKG5hbWUsIGV2ZW50SWQpIHtcbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhldmVudElkKSkge1xuICAgICAgICAgICAgbGV0IGxpc3RlbmVycyAgID0gdGhpcy5saXN0ZW5lcnNbbmFtZV0sXG4gICAgICAgICAgICAgICAgbWF0Y2ggICAgICAgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGV2ZW50Q29uZmlnLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRDb25maWcuaWQgPT09IGV2ZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID0gaWR4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2ggIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShtYXRjaCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZW1vdmVBbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKG5hbWUpIHtcblxuICAgIC8vIH0sXG5cbiAgICAvLyBzdXNwZW5kTGlzdGVuZXJzOiBmdW5jdGlvbihxdWV1ZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHJlc3VtZUxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgYWRkTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdHNdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtzY29wZV1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2V2ZW50SWRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtkYXRhXVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbb3JkZXJdXG4gICAgICogQHJldHVybnMge1N0cmluZ30gZXZlbnRJZFxuICAgICAqL1xuICAgIG9uKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkTGlzdGVuZXIoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgZm9yIHJlbW92ZUxpc3RlbmVyXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gZXZlbnRJZFxuICAgICAqL1xuICAgIHVuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE9ic2VydmFibGUpO1xuXG5leHBvcnQge09ic2VydmFibGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLlV0aWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVXRpbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcmVnZXggdG8gcmVtb3ZlIGNhbWVsIGNhc2Ugc3ludGF4XG4gICAgICAgICAqIEBtZW1iZXIge1JlZ0V4cH0gZGVjYW1lbFJlZ0V4PS8oW2Etel0pKFtBLVpdKS9nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGRlY2FtZWxSZWdFeDogLyhbYS16XSkoW0EtWl0pL2dcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLlV0aWwnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5VdGlsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29yZS11dGlsJyxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBzeWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzdHJpbmcgdXBwZXJjYXNlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufFN0cmluZ30gUmV0dXJucyBmYWxzZSBmb3Igbm9uIHN0cmluZyBpbnB1dHNcbiAgICAgKi9cbiAgICBzdGF0aWMgY2FwaXRhbGl6ZShzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIFV0aWwuaXNTdHJpbmcoc3RyaW5nKSAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGFsbCB1cHBlcmNhc2UgY2hhcmFjdGVycyBvZiBhIHN0cmluZyBpbnRvIGxvd2VyY2FzZS5cbiAgICAgKiBEb2VzIG5vdCB0b3VjaCBzcGVjaWFsIGNoYXJhY3RlcnMuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSBpbnB1dCBjb250YWluaW5nIHVwcGVyY2FzZSBjaGFyYWN0ZXJzXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIGxvd2VyY2FzZSBvdXRwdXRcbiAgICAgKi9cbiAgICBzdGF0aWMgZGVjYW1lbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShVdGlsLmRlY2FtZWxSZWdFeCwgJyQxLSQyJykudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2Zvcm1zIGEgc3R5bGVzIHN0cmluZyBpbnRvIGEgc3R5bGVzIG9iamVjdCB1c2luZyBjYW1lbGNhc2Ugc3ludGF4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyBUaGUgc3R5bGVzIHN0cmluZyB0byBwYXJzZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBjYW1lbGNhc2Ugc3R5bGVzIG9iamVjdFxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTdHlsZU9iamVjdChzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhcnRzO1xuXG4gICAgICAgIC8vIHNwbGl0KCc7JykgZG9lcyBmZXRjaCBzZW1pY29sb25zIGluc2lkZSBicmFja2V0c1xuICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiBcInVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LC4uLlxuXG4gICAgICAgIC8vIFRPRE86IENhY2hlIGFsbCByZWdleFxuICAgICAgICByZXR1cm4gc3RyaW5nLnNwbGl0KC87KD89W15cXCldKig/OlxcKHwkKSkvZykucmVkdWNlKChvYmosIGVsKSA9PiB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IGJ5IHRoZSBmaXJzdCBjb2xvbiBvbmx5XG4gICAgICAgICAgICAvLyAtPiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9leGFtcGxlLmNvbS9pbWFnZS5wbmcnKVxuICAgICAgICAgICAgcGFydHMgPSBlbC5zcGxpdCgoLzooLispLykpLm1hcChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgIGxldCBudW0gPSBwYXJzZUZsb2F0KHgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHggPT0gbnVtID8gbnVtIDogeC50cmltKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHBhcnRzWzBdICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvLShbYS16XSkvZywgKHN0ciwgbGV0dGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBvYmpbcGFydHNbMF1dID0gcGFydHNbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGJvb2xlYW5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBub3QgdW5kZWZpbmVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBlbXB0eSBBcnJheSwgT2JqZWN0IG9yIFN0cmluZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fFN0cmluZ30gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFbXB0eSh2YWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPT09IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbC5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09ICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBudW1iZXIuIFJldHVybnMgZmFsc2UgZm9yIG5vbi1maW5pdGUgbnVtYmVyc1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc051bWJlcih2YWx1ZSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNPYmplY3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGFueSBpdGVyYWJsZSAoc3RyaW5ncywgbnVtZXJpYyBpbmRpY2VzIGFuZCBhIGxlbmd0aCBwcm9wZXJ0eSkgaW50byBhIHRydWUgYXJyYXlcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGl0ZXJhYmxlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydD0wXSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPWl0ZXJhYmxlLmxlbmd0aF0gZW5kIGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyB0b0FycmF5KGl0ZXJhYmxlLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGxldCBsZW47XG5cbiAgICAgICAgaWYgKCFpdGVyYWJsZSB8fCAhKGxlbiA9IGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlcmFibGUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZXJhYmxlLCBzdGFydCB8fCAwLCBlbmQgfHwgbGVuKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFV0aWwpO1xuXG4vLyBhbGlhc2VzXG5OZW8uYXBwbHlGcm9tTnMoTmVvLCBVdGlsLCB7XG4gICAgY3JlYXRlU3R5bGVPYmplY3Q6ICdjcmVhdGVTdHlsZU9iamVjdCcsXG4gICAgY3JlYXRlU3R5bGVzICAgICA6ICdjcmVhdGVTdHlsZXMnLFxuICAgIGNhcGl0YWxpemUgICAgICAgOiAnY2FwaXRhbGl6ZScsXG4gICAgZGVjYW1lbCAgICAgICAgICA6ICdkZWNhbWVsJyxcbiAgICBpc0FycmF5ICAgICAgICAgIDogJ2lzQXJyYXknLFxuICAgIGlzQm9vbGVhbiAgICAgICAgOiAnaXNCb29sZWFuJyxcbiAgICBpc0RlZmluZWQgICAgICAgIDogJ2lzRGVmaW5lZCcsXG4gICAgaXNFbXB0eSAgICAgICAgICA6ICdpc0VtcHR5JyxcbiAgICBpc0Z1bmN0aW9uICAgICAgIDogJ2lzRnVuY3Rpb24nLFxuICAgIGlzTnVtYmVyICAgICAgICAgOiAnaXNOdW1iZXInLFxuICAgIGlzT2JqZWN0ICAgICAgICAgOiAnaXNPYmplY3QnLFxuICAgIGlzU3RyaW5nICAgICAgICAgOiAnaXNTdHJpbmcnLFxuICAgIHRvQXJyYXkgICAgICAgICAgOiAndG9BcnJheSdcbn0sIHRydWUpO1xuXG5leHBvcnQgZGVmYXVsdCBVdGlsOyIsImltcG9ydCBCYXNlICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICBmcm9tICcuL0xvZ2dlci5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgIGZyb20gJy4vT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgIGZyb20gJy4vVXRpbC5tanMnO1xuXG5leHBvcnQge0Jhc2UsIExvZ2dlciwgT2JzZXJ2YWJsZSwgVXRpbH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkFycmF5J1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQXJyYXknXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKGFyciwgaXRlbXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmICghYXJyLmluY2x1ZGVzKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxLCBidXQgbm90IGluIGFycmF5MlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MT1bXVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5Mj1bXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZGlmZmVyZW5jZShhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+ICFhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgaW5kZXggb2YgaXRlbSBpcyA+IC0xXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIGhhc0l0ZW0oYXJyLCBpdGVtKSB7XG4gICAgICAgIHJldHVybiBhcnIuaW5jbHVkZXMoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEgYW5kIGFycmF5MlxuICAgICAqIE9ubHkgc3VwcG9ydHMgcHJpbWl0aXZlIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3Rpb24oYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgcmV0dXJuIGFycmF5MS5maWx0ZXIoaXRlbSA9PiBhcnJheTIuaW5jbHVkZXMoaXRlbSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBhbGwgaXRlbXMgb2YgYXJyYXkxIGFyZSBwcmVzZW50IGluIGFycmF5IDJcbiAgICAgKiBTdXBwb3J0cyBBcnJheXMgY29udGFpbmluZyBPYmplY3RzLCBub3QgQXJyYXlzIGNvbnRhaW5pbmcgQXJyYXlzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRXF1YWwoYXJyYXkxPVtdLCBhcnJheTI9W10pIHtcbiAgICAgICAgbGV0IGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGFycmF5MS5sZW5ndGgsXG4gICAgICAgICAgICBsZW4yID0gYXJyYXkyLmxlbmd0aCxcbiAgICAgICAgICAgIGhhc09iamVjdCwgaiwgdmFsdWU7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgdmFsdWUgPSBhcnJheTFbaV07XG5cbiAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaGFzT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaiAgICAgICAgID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgbGVuMjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QoYXJyYXkyW2pdKSAmJiBOZW8udXRpbC5PYmplY3QuaXNFcXVhbCh2YWx1ZSwgYXJyYXkyW2pdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZWxzZSBpZiAoIWFycmF5Mi5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyYXkxLmxlbmd0aCA9PT0gYXJyYXkyLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhbiBpdGVtIGluc2lkZSBhcnIgZnJvbSBmcm9tSW5kZXggdG8gdG9JbmRleFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgICAqL1xuICAgIHN0YXRpYyBtb3ZlKGFyciwgZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGlmIChmcm9tSW5kZXggPT09IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJvbUluZGV4ID49IGFyci5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZyb21JbmRleCA9IGFyci5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyLnNwbGljZSh0b0luZGV4LCAwLCBhcnIuc3BsaWNlKGZyb21JbmRleCwgMSlbMF0pO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBmcm9tIGFuIGFycmF5LiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlKGFyciwgaXRlbXMpIHtcbiAgICAgICAgbGV0IGluZGV4O1xuXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGl0ZW0gZnJvbSBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgIGV4aXN0LCBvdGhlcndpc2UgYWRkcyBpdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbVxuICAgICAqL1xuICAgIHN0YXRpYyB0b2dnbGUoYXJyLCBpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0l0ZW0oYXJyLCBpdGVtKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoYXJyLCBpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkKGFyciwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIHVuaW9uKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXSxcbiAgICAgICAgICAgIG1lcmdlICA9IGFycmF5MS5jb25jYXQoYXJyYXkyKSxcbiAgICAgICAgICAgIGxlbiAgICA9IG1lcmdlLmxlbmd0aCxcbiAgICAgICAgICAgIGFzc29jICA9IHt9LFxuICAgICAgICAgICAgaXRlbTtcblxuICAgICAgICB3aGlsZSAobGVuLS0pIHtcbiAgICAgICAgICAgIGl0ZW0gPSBtZXJnZVtsZW5dO1xuXG4gICAgICAgICAgICBpZiAoIWFzc29jW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnVuc2hpZnQoaXRlbSk7XG4gICAgICAgICAgICAgICAgYXNzb2NbaXRlbV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGl0ZW0gb3IgQXJyYXkgb2YgaXRlbXMgdG8gYW4gYXJyYXkgaW4gY2FzZSBpdCBkb2VzIG5vdCBhbHJlYWR5IGV4aXN0LlxuICAgICAqIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kIGFzIGR1cGxpY2F0ZXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1zXG4gICAgICovXG4gICAgc3RhdGljIHVuc2hpZnQoYXJyLCBpdGVtcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOZW9BcnJheSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lb0FycmF5OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5TdHlsZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBTdHlsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5TdHlsZSdcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlN0eWxlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGRlbHRhIG9iamVjdCwgY29udGFpbmluZyB0aGUgc3R5bGVzIG9mIG5ld1N0eWxlIHdoaWNoIGFyZSBub3QgaW5jbHVkZWQgb3IgZGlmZmVyZW50IHRoYW4gaW4gb2xkU3R5bGVcbiAgICAgKiBTdHlsZXMgaW5jbHVkZWQgaW4gb2xkU3R5bGUgYnV0IG1pc3NpbmcgaW4gbmV3U3R5bGUgd2lsbCBnZXQgYSB2YWx1ZSBvZiBudWxsXG4gICAgICogc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvc3R5bGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5ld1N0eWxlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvbGRTdHlsZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0eWxlIGRlbHRhXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVTdHlsZXMobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgbmV3U3R5bGUgPSBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0KG5ld1N0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcob2xkU3R5bGUpKSB7XG4gICAgICAgICAgICBvbGRTdHlsZSA9IE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3Qob2xkU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdTdHlsZSAmJiAhb2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIE5lby5jbG9uZShuZXdTdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld1N0eWxlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhuZXdTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmICghb2xkU3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpIHx8IG9sZFN0eWxlW3N0eWxlXSAhPT0gbmV3U3R5bGVbc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBuZXdTdHlsZVtzdHlsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZFN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdTdHlsZS5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzdHlsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3R5bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuVk5vZGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVk5vZGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVk5vZGUnXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5WTm9kZSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZub2RlIGNoaWxkIG5vZGVzIGJ5IGlkIG9yIG9wdHMgb2JqZWN0IGZvciBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJlbnROb2RlXSBJbnRlcm5hbCBmbGFnLCBkbyBub3QgdXNlIGl0XG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKiAgICAge051bWJlcn0gaW5kZXhcbiAgICAgKiAgICAge1N0cmluZ30gcGFyZW50SWRcbiAgICAgKiAgICAge09iamVjdH0gdm5vZGVcbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZENoaWxkVm5vZGUodm5vZGUsIG9wdHMsIGluZGV4LCBwYXJlbnROb2RlKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggfHwgMDtcbiAgICAgICAgb3B0cyAgPSB0eXBlb2Ygb3B0cyAhPT0gJ3N0cmluZycgPyBvcHRzIDoge2lkOiBvcHRzfTtcblxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXG4gICAgICAgICAgICBhdHRyTWF0Y2ggID0gdHJ1ZSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXSxcbiAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSB0cnVlLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gdm5vZGUuY2hpbGROb2RlcyAmJiB2bm9kZS5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKG9wdHMpO1xuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBvcHRzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2F0dHJLZXksIGF0dHJWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShhdHRyS2V5KSAmJiB2bm9kZVtrZXldW2F0dHJLZXldID09PSBhdHRyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2bm9kZVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2bm9kZSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRDaGlsZFZub2RlOiBjbHMgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgdGFyZ2V0ICYgc291cmNlIHR5cGVzIG9mIEFycmF5cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZub2RlW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHZub2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZCA9IFZOb2RlLmZpbmRDaGlsZFZub2RlKHZub2RlLmNoaWxkTm9kZXNbaV0sIG9wdHMsIGksIHZub2RlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IHN1YkNoaWxkLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogc3ViQ2hpbGQucGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHN1YkNoaWxkLnZub2RlXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IGlkXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBjaGlsZCB2bm9kZSBvciBudWxsXG4gICAgICovXG4gICAgc3RhdGljIGZpbmRDaGlsZFZub2RlQnlJZCh2bm9kZSwgaWQpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZub2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IFZOb2RlLmZpbmRDaGlsZFZub2RlQnlJZChjaGlsZE5vZGUsIGlkKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkcyBvZiBhbGwgY2hpbGQgbm9kZXMgb2YgdGhlIGdpdmVuIHZub2RlXG4gICAgICogQHBhcmFtIHZub2RlXG4gICAgICogQHBhcmFtIFtjaGlsZElkcz1bXV1cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGNoaWxkSWRzXG4gICAgICovXG4gICAgc3RhdGljIGdldENoaWxkSWRzKHZub2RlLCBjaGlsZElkcz1bXSkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlICYmIHZub2RlLmNoaWxkTm9kZXMgfHwgW107XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZElkcyA9IFZOb2RlLmdldENoaWxkSWRzKGNoaWxkTm9kZSwgY2hpbGRJZHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY2hpbGRJZHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGRWbm9kZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgd2FzIGZvdW5kIGFuZCByZXBsYWNlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZXBsYWNlQ2hpbGRWbm9kZSh2bm9kZSwgaWQsIG5ld0NoaWxkVm5vZGUpIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gY2hpbGROb2Rlcy5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdyZXBsYWNlQ2hpbGRWbm9kZTogdGFyZ2V0IGlkIG1hdGNoZXMgdGhlIHJvb3Qgdm5vZGUgaWQ6ICcgKyBpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXNbaV0gPSBuZXdDaGlsZFZub2RlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoVk5vZGUucmVwbGFjZUNoaWxkVm5vZGUoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZOb2RlKTtcblxuZXhwb3J0IGRlZmF1bHQgVk5vZGU7IiwiaW1wb3J0IEJhc2UgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgVk5vZGUgICAgICAgICAgICAgICAgICBmcm9tICcuL1ZOb2RlLm1qcyc7XG5pbXBvcnQge2RlZmF1bHQgYXMgVk5vZGVVdGlsfSBmcm9tICcuLi91dGlsL1ZOb2RlLm1qcyc7XG5cbi8qKlxuICogVGhlIGNlbnRyYWwgY2xhc3MgZm9yIHRoZSBWRG9tIHdvcmtlciB0byBjcmVhdGUgdm5vZGVzICYgZGVsdGEgdXBkYXRlcy5cbiAqIEBjbGFzcyBOZW8udmRvbS5IZWxwZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSGVscGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby52ZG9tLkhlbHBlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby52ZG9tLkhlbHBlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2ZG9tLWhlbHBlcidcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmRvbS1oZWxwZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgZm9yIG90aGVyIHdvcmtlcnNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZW1vdGU9e2FwcDogWydjcmVhdGUnLCAndXBkYXRlJ119XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdGU6IHtcbiAgICAgICAgICAgIGFwcDogWydjcmVhdGUnLCAndXBkYXRlJ11cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJldHVybkNoaWxkTm9kZU91dGVySHRtbD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuQ2hpbGROb2RlT3V0ZXJIdG1sOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWb2lkIGF0dHJpYnV0ZXMgaW5zaWRlIGh0bWwgdGFnc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdm9pZEF0dHJpYnV0ZXNcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHZvaWRBdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICAgICAncmVxdWlyZWQnXG4gICAgICAgIF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWb2lkIGh0bWwgdGFnc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdm9pZEVsZW1lbnRzXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB2b2lkRWxlbWVudHM6IFtcbiAgICAgICAgICAgICdhcmVhJyxcbiAgICAgICAgICAgICdiYXNlJyxcbiAgICAgICAgICAgICdicicsXG4gICAgICAgICAgICAnY29sJyxcbiAgICAgICAgICAgICdjb21tYW5kJyxcbiAgICAgICAgICAgICdlbWJlZCcsXG4gICAgICAgICAgICAnaHInLFxuICAgICAgICAgICAgJ2ltZycsXG4gICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICAgICAgJ2tleWdlbicsXG4gICAgICAgICAgICAnbGluaycsXG4gICAgICAgICAgICAnbWV0YScsXG4gICAgICAgICAgICAncGFyYW0nLFxuICAgICAgICAgICAgJ3NvdXJjZScsXG4gICAgICAgICAgICAndHJhY2snLFxuICAgICAgICAgICAgJ3dicidcbiAgICAgICAgXVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTmVvLnZkb20uVk5vZGUgdHJlZSBmb3IgdGhlIGdpdmVuIHZkb20gdGVtcGxhdGUuXG4gICAgICogVGhlIHRvcCBsZXZlbCB2bm9kZSBjb250YWlucyB0aGUgb3V0ZXJIVE1MIGFzIGEgc3RyaW5nLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMudmRvbVxuICAgICAqIEByZXR1cm5zIHtOZW8udmRvbS5WTm9kZX1cbiAgICAgKi9cbiAgICBjcmVhdGUob3B0cykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXV0b01vdW50ICAgPSBvcHRzLmF1dG9Nb3VudCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgIHBhcmVudElkICAgID0gb3B0cy5wYXJlbnRJZCxcbiAgICAgICAgICAgIHBhcmVudEluZGV4ID0gb3B0cy5wYXJlbnRJbmRleCxcbiAgICAgICAgICAgIG5vZGU7XG5cbiAgICAgICAgZGVsZXRlIG9wdHMuYXV0b01vdW50O1xuICAgICAgICBkZWxldGUgb3B0cy5wYXJlbnRJZDtcbiAgICAgICAgZGVsZXRlIG9wdHMucGFyZW50SW5kZXg7XG5cbiAgICAgICAgbm9kZSAgICAgICAgICAgPSBtZS5wYXJzZUhlbHBlcihvcHRzKTtcbiAgICAgICAgbm9kZS5vdXRlckhUTUwgPSBtZS5jcmVhdGVTdHJpbmdGcm9tVm5vZGUobm9kZSk7XG5cbiAgICAgICAgaWYgKGF1dG9Nb3VudCkge1xuICAgICAgICAgICAgbm9kZS5hdXRvTW91bnQgICA9IHRydWU7XG4gICAgICAgICAgICBub2RlLnBhcmVudElkICAgID0gcGFyZW50SWQ7XG4gICAgICAgICAgICBub2RlLnBhcmVudEluZGV4ID0gcGFyZW50SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgTmVvLnZkb20uVk5vZGUgdHJlZSBmb3IgdGhlIGdpdmVuIHZkb20gdGVtcGxhdGUgYW5kIGNvbXBhcmVzIHRoZSBuZXcgdm5vZGUgd2l0aCB0aGUgY3VycmVudCBvbmVcbiAgICAgKiB0byBjYWxjdWxhdGUgdGhlIHZkb20gZGVsdGFzLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMudmRvbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnZub2RlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICB1cGRhdGUob3B0cykge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGUgICA9IG1lLnBhcnNlSGVscGVyKG9wdHMudmRvbSksXG4gICAgICAgICAgICBkZWx0YXMgPSBtZS5jcmVhdGVEZWx0YXMoe1xuICAgICAgICAgICAgICAgIG5ld1Zub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgIG9sZFZub2RlOiBvcHRzLnZub2RlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsdGFzICAgIDogZGVsdGFzLFxuICAgICAgICAgICAgdXBkYXRlVmRvbTogdHJ1ZSxcbiAgICAgICAgICAgIHZub2RlICAgICA6IG5vZGVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqL1xuICAgIGNyZWF0ZVN0cmluZ0Zyb21Wbm9kZSh2bm9kZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHN3aXRjaCAodm5vZGUudnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Jvb3QnOlxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5jcmVhdGVTdHJpbmdGcm9tVm5vZGUodm5vZGUuY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdm5vZGUuaW5uZXJIVE1MID09PSB1bmRlZmluZWQgPyAnJyA6IFN0cmluZyh2bm9kZS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgY2FzZSAndm5vZGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBtZS5jcmVhdGVPcGVuVGFnKHZub2RlKSArIG1lLmNyZWF0ZVRhZ0NvbnRlbnQodm5vZGUpICsgbWUuY3JlYXRlQ2xvc2VUYWcodm5vZGUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNyZWF0ZU9wZW5UYWcodm5vZGUpIHtcbiAgICAgICAgbGV0IHN0cmluZyAgICAgPSAnPCcgKyB2bm9kZS5ub2RlTmFtZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSB2bm9kZS5hdHRyaWJ1dGVzLFxuICAgICAgICAgICAgY2xzICAgICAgICA9IHZub2RlLmNsYXNzTmFtZSxcbiAgICAgICAgICAgIHN0eWxlO1xuXG4gICAgICAgIGlmICh2bm9kZS5zdHlsZSkge1xuICAgICAgICAgICAgc3R5bGUgPSBOZW8uY3JlYXRlU3R5bGVzKHZub2RlLnN0eWxlKTtcblxuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSAnIHN0eWxlPVwiJyArIHN0eWxlICsgJ1wiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbHMpIHtcbiAgICAgICAgICAgIGlmIChOZW8uaXNBcnJheShjbHMpKSB7XG4gICAgICAgICAgICAgICAgY2xzID0gY2xzLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNscyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gJyBjbGFzcz1cIicgKyBjbHMgKyAnXCInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZub2RlLmlkKSB7XG4gICAgICAgICAgICBzdHJpbmcgKz0gJyBpZD1cIicgKyB2bm9kZS5pZCArICdcIic7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZvaWRBdHRyaWJ1dGVzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09ICd0cnVlJykgeyAvLyB2bm9kZSBhdHRyaWJ1dGUgdmFsdWVzIGdldCBjb252ZXJ0ZWQgaW50byBzdHJpbmdzXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSAoJyAnICsga2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSAhPT0gJ3JlbW92ZURvbScpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gKCcgJyArIGtleSArICc9XCInICsgdmFsdWUgKyAnXCInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZyArICc+JztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNyZWF0ZVRhZ0NvbnRlbnQodm5vZGUpIHtcbiAgICAgICAgaWYgKHZub2RlLmlubmVySFRNTCkge1xuICAgICAgICAgICAgcmV0dXJuIHZub2RlLmlubmVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGxlbiAgICA9IHZub2RlLmNoaWxkTm9kZXMgPyB2bm9kZS5jaGlsZE5vZGVzLmxlbmd0aCA6IDAsXG4gICAgICAgICAgICBpICAgICAgPSAwLFxuICAgICAgICAgICAgY2hpbGROb2RlLCBvdXRlckhUTUw7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gdm5vZGUuY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICAgICAgb3V0ZXJIVE1MID0gdGhpcy5jcmVhdGVTdHJpbmdGcm9tVm5vZGUoY2hpbGROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pbm5lckhUTUwgIT09IG91dGVySFRNTCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJldHVybkNoaWxkTm9kZU91dGVySHRtbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUub3V0ZXJIVE1MID0gb3V0ZXJIVE1MO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3RyaW5nICs9IG91dGVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjcmVhdGVDbG9zZVRhZyh2bm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy52b2lkRWxlbWVudHMuaW5kZXhPZih2bm9kZS5ub2RlTmFtZSkgPiAtMSA/ICcnIDogJzwvJyArIHZub2RlLm5vZGVOYW1lICsgJz4nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fE5lby52ZG9tLlZOb2RlfG51bGx9XG4gICAgICovXG4gICAgcGFyc2VIZWxwZXIob3B0cykge1xuICAgICAgICBpZiAob3B0cy5yZW1vdmVEb20gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRzID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0cy52dHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBpZiAoIW9wdHMuaWQpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmlkID0gTmVvLmdldElkKCd2dGV4dCcpOyAvLyBhZGRpbmcgYW4gaWQgdG8gYmUgYWJsZSB0byBmaW5kIHZ0eXBlPSd0ZXh0JyBpdGVtcyBpbnNpZGUgdGhlIHZub2RlIHRyZWVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cy5pbm5lckhUTUwgPSBgPCEtLSAke29wdHMuaWR9IC0tPiR7b3B0cy5odG1sIHx8ICcnfTwhLS0gL25lby12dGV4dCAtLT5gO1xuICAgICAgICAgICAgZGVsZXRlIG9wdHMuaHRtbDtcbiAgICAgICAgICAgIHJldHVybiBvcHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSA9IHthdHRyaWJ1dGVzOiB7fSwgY2hpbGROb2RlczogW10sIHN0eWxlOiB7fX0sXG4gICAgICAgICAgICBwb3RlbnRpYWxOb2RlO1xuXG4gICAgICAgIGlmICghb3B0cy50YWcpIHtcbiAgICAgICAgICAgIG9wdHMudGFnID0gJ2Rpdic7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyhvcHRzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGxldCBoYXNVbml0LCBuZXdWYWx1ZSwgc3R5bGU7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsICYmIGtleSAhPT0gJ2ZsYWcnKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGFnJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9kZU5hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ub2RlTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbm5lckhUTUwnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSB2YWx1ZS50b1N0cmluZygpOyAvLyBzdXBwb3J0IGZvciBudW1iZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2hpbGRyZW4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGlsZE5vZGVzJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFOZW8uaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucmVtb3ZlRG9tICE9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBpdGVtLnJlbW92ZURvbTsgLy8gY291bGQgYmUgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG90ZW50aWFsTm9kZSA9IG1lLnBhcnNlSGVscGVyKGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3RlbnRpYWxOb2RlKSB7IC8vIGRvbid0IGFkZCBudWxsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUucHVzaChwb3RlbnRpYWxOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNoaWxkTm9kZXMgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbHMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIShOZW8uaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoIDwgMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21heEhlaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21heFdpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWluSGVpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWluV2lkdGgnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd3aWR0aCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNVbml0ID0gdmFsdWUgIT0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZVtrZXldID0gdmFsdWUgKyAoaGFzVW5pdCA/ICcnIDogJ3B4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnaWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5pZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3QodmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZSArICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbmV3IFZOb2RlKG5vZGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBjb25maWcuZGVsdGFzXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvbmZpZy5pbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcubmV3Vm5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm5ld1Zub2RlUm9vdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcub2xkVm5vZGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9sZFZub2RlUm9vdFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcucGFyZW50SWRcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGRlbHRhc1xuICAgICAqL1xuICAgIGNyZWF0ZURlbHRhcyhjb25maWcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFzICAgICAgICA9IGNvbmZpZy5kZWx0YXMgfHwgW10sXG4gICAgICAgICAgICBpbmRleCAgICAgICAgID0gY29uZmlnLmluZGV4LFxuICAgICAgICAgICAgbmV3Vm5vZGUgICAgICA9IGNvbmZpZy5uZXdWbm9kZSxcbiAgICAgICAgICAgIG5ld1Zub2RlUm9vdCAgPSBjb25maWcubmV3Vm5vZGVSb290IHx8IG5ld1Zub2RlLFxuICAgICAgICAgICAgb2xkVm5vZGUgICAgICA9IGNvbmZpZy5vbGRWbm9kZSxcbiAgICAgICAgICAgIG9sZFZub2RlUm9vdCAgPSBjb25maWcub2xkVm5vZGVSb290IHx8IG9sZFZub2RlLFxuICAgICAgICAgICAgcGFyZW50SWQgICAgICA9IGNvbmZpZy5wYXJlbnRJZCxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMsIGRlbHRhLCB2YWx1ZSwgaSwgaW5kZXhEZWx0YSwga2V5cywgbGVuLCBtb3ZlZE5vZGUsIG1vdmVkT2xkTm9kZSwgc3R5bGVzLCBhZGQsIHJlbW92ZSwgcmV0dXJuVmFsdWUsIHRtcCwgd3JhcHBlZE5vZGU7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZURlbHRhcycsIG5ld1Zub2RlICYmIG5ld1Zub2RlLmlkLCBvbGRWbm9kZSAmJiBvbGRWbm9kZS5pZCwgbmV3Vm5vZGUsIG9sZFZub2RlKTtcblxuICAgICAgICBpZiAobmV3Vm5vZGUgJiYgIW9sZFZub2RlKSB7IC8vIG5ldyBub2RlIGF0IHRvcCBsZXZlbCBvciBhdCB0aGUgZW5kIG9mIGEgY2hpbGQgYXJyYXlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbnNlcnROb2RlJywgbmV3Vm5vZGUpO1xuXG4gICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgOiAnaW5zZXJ0Tm9kZScsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgOiBuZXdWbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBpbmRleCAgICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIG91dGVySFRNTDogbWUuY3JlYXRlU3RyaW5nRnJvbVZub2RlKG5ld1Zub2RlKSxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZCA6IHBhcmVudElkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICghbmV3Vm5vZGUgJiYgb2xkVm5vZGUpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0b3AgbGV2ZWwgcmVtb3ZlZCBub2RlJywgb2xkVm5vZGUuaWQsIG9sZFZub2RlKTtcblxuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgIGlkICAgIDogb2xkVm5vZGUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG5ld1Zub2RlICYmIG9sZFZub2RlICYmIG5ld1Zub2RlLmlkICE9PSBvbGRWbm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIG1vdmVkTm9kZSAgICA9IG1lLmZpbmRWbm9kZShuZXdWbm9kZVJvb3QsIG9sZFZub2RlLmlkLCBuZXdWbm9kZSk7XG4gICAgICAgICAgICAgICAgbW92ZWRPbGROb2RlID0gbWUuZmluZFZub2RlKG9sZFZub2RlUm9vdCwgbmV3Vm5vZGUuaWQsIG9sZFZub2RlKTtcblxuICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbW92ZWROb2RlJywgbW92ZWROb2RlKTtcbiAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdmVkT2xkTm9kZScsIG1vdmVkT2xkTm9kZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1vdmVkTm9kZSAmJiAhbW92ZWRPbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXBsYWNlIG5vZGUnLCBvbGRWbm9kZS5pZCwgJygnK25ld1Zub2RlLmlkKycpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVtb3ZlTm9kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICA6IG9sZFZub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICA6ICdpbnNlcnROb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgIDogbmV3Vm5vZGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICA6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0ZXJIVE1MOiBtZS5jcmVhdGVTdHJpbmdGcm9tVm5vZGUobmV3Vm5vZGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgOiBwYXJlbnRJZFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YTogMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjYXNlIG1hdGNoZXMgYSB0eXBpY2FsIGFycmF5IHJlLXNvcnRpbmdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChtb3ZlZE5vZGUgJiYgbW92ZWRPbGROb2RlICYmIG1vdmVkTm9kZS5wYXJlbnROb2RlLmlkID09PSBtb3ZlZE9sZE5vZGUucGFyZW50Tm9kZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdtb3ZlTm9kZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogbW92ZWRPbGROb2RlLnZub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICA6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZURlbHRhcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgICAgICA6IGRlbHRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlICAgIDogbmV3Vm5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWbm9kZVJvb3Q6IG5ld1Zub2RlUm9vdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZub2RlICAgIDogbW92ZWRPbGROb2RlLnZub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGVSb290OiBvbGRWbm9kZVJvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCAgICA6IG1vdmVkTm9kZS5wYXJlbnROb2RlLmlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIW1vdmVkTm9kZSAmJiBtb3ZlZE9sZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Zub2RlLmlkID09PSBtb3ZlZE9sZE5vZGUudm5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGEgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlQnlJZChvbGRWbm9kZSwgbmV3Vm5vZGUuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2bm9kZSByZXBsYWNlZCBhIHBhcmVudCB2bm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGUuZy46IHZkb20uY25bMV0gPSB2ZG9tLmNuWzFdLmNuWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gIDogJ3JlcGxhY2VDaGlsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21JZCAgOiBvbGRWbm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b0lkICAgIDogbmV3Vm5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2bm9kZSBnb3QgbW92ZWQgaW50byBhIGRpZmZlcmVudCBoaWdoZXIgbGV2ZWwgYnJhbmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGl0cyBwYXJlbnQgZ290IHJlbW92ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlLmcuOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZkb20uY25bMV0gPSB2ZG9tLmNuWzJdLmNuWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZkb20uY24uc3BsaWNlKDIsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vdmVkT2xkTm9kZURldGFpbHMgPSBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUob2xkVm5vZGVSb290LCBtb3ZlZE9sZE5vZGUudm5vZGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWbm9kZURldGFpbHMgICAgID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG9sZFZub2RlUm9vdCwgb2xkVm5vZGUuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YSA9IDE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobW92ZWRPbGROb2RlRGV0YWlscy5wYXJlbnROb2RlLmlkID09PSBvbGRWbm9kZURldGFpbHMucGFyZW50Tm9kZS5pZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncG90ZW50aWFsIG1vdmUgbm9kZScsIGluZGV4LCBtb3ZlZE9sZE5vZGVEZXRhaWxzLmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Vm5vZGVEZXRhaWxzID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG5ld1Zub2RlUm9vdCwgbmV3Vm5vZGUuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0SW5kZXggPSBpbmRleCArIDE7IC8vICsxIHNpbmNlIHRoZSBjdXJyZW50IGluZGV4IHdpbGwgYWxyZWFkeSBnZXQgcmVtb3ZlZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Zub2RlRGV0YWlscy5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICAgPSBpbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IG9sZFZub2RlRGV0YWlscy5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiA9IG1vdmVkT2xkTm9kZURldGFpbHMuaW5kZXg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codG1wW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG5ld1Zub2RlRGV0YWlscy5wYXJlbnROb2RlLCB0bXBbaV0uaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ25vdCBmb3VuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEluZGV4ICsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobW92ZWRPbGROb2RlRGV0YWlscy5pbmRleCwgdGFyZ2V0SW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVkT2xkTm9kZURldGFpbHMucGFyZW50Tm9kZS5jaGlsZE5vZGVzLnNwbGljZShtb3ZlZE9sZE5vZGVEZXRhaWxzLmluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgbW92ZSBhIG5vZGUgaW4gY2FzZSBpdHMgcHJldmlvdXMgc2libGluZyBub2RlcyB3aWxsIGdldCByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb3ZlZE9sZE5vZGVEZXRhaWxzLmluZGV4ICE9PSB0YXJnZXRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ21vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgIDogbW92ZWRPbGROb2RlLnZub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogcGFyZW50SWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobW92ZWRPbGROb2RlRGV0YWlscyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBvbGRWbm9kZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVEZWx0YXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyAgICAgIDogZGVsdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlICAgIDogbmV3Vm5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Vm5vZGVSb290OiBuZXdWbm9kZVJvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGUgICAgOiBtb3ZlZE9sZE5vZGUudm5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGVSb290OiBvbGRWbm9kZVJvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgICAgOiBwYXJlbnRJZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YTogaW5kZXhEZWx0YVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkIG5vZGUnLCBvbGRWbm9kZS5pZCwgJygnK25ld1Zub2RlLmlkKycpJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgICA6IG9sZFZub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlbHRhOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghbW92ZWRPbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5ldyBub2RlIGluc2lkZSBvZiBhIGNoaWxkIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCduZXcgbm9kZScsIGluZGV4LCBwYXJlbnRJZCwgbmV3Vm5vZGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZWROb2RlID0gbW92ZWROb2RlICYmIFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZUJ5SWQobmV3Vm5vZGUsIG9sZFZub2RlLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAod3JhcHBlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuIGV4aXN0aW5nIHZub2RlIGdvdCB3cmFwcGVkIGludG8gYSBuZXcgdm5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vID0+IHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBvbGQgb25lLCBzaW5jZSBpdCB3aWxsIGdldCByZWNyZWF0ZWRcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdmVkTm9kZSByZW1vdmVOb2RlJywgbW92ZWROb2RlLnZub2RlLmlkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogbW92ZWROb2RlLnZub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ2luc2VydE5vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgOiBuZXdWbm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRlckhUTUw6IG1lLmNyZWF0ZVN0cmluZ0Zyb21Wbm9kZShuZXdWbm9kZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCA6IHBhcmVudElkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlbHRhOiB3cmFwcGVkTm9kZSA/IDAgOiAtMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtb3ZlZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHZub2RlIGdvdCBtb3ZlZCBpbnNpZGUgdGhlIHZub2RlIHRyZWVcblxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Vm5vZGVEZXRhaWxzID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG5ld1Zub2RlUm9vdCwgbmV3Vm5vZGUuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWbm9kZURldGFpbHMucGFyZW50Tm9kZS5pZCA9PT0gbW92ZWROb2RlLnBhcmVudE5vZGUuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld1Zub2RlRGV0YWlscy5pbmRleCwgbW92ZWROb2RlLmluZGV4KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Zub2RlRGV0YWlscy5pbmRleCA+IG1vdmVkTm9kZS5pbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvZG86IG5lZWRzIHRlc3RpbmcgPT4gaW5kZXggZ2FwcyA+IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlbHRhID0gbmV3Vm5vZGVEZXRhaWxzLmluZGV4IC0gbW92ZWROb2RlLmluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IG1vdmVkTm9kZS52bm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ICAgOiBtb3ZlZE5vZGUuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbW92ZWROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlRGVsdGFzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyAgICAgIDogZGVsdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Vm5vZGUgICAgOiBtb3ZlZE5vZGUudm5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWbm9kZVJvb3Q6IG5ld1Zub2RlUm9vdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZub2RlICAgIDogb2xkVm5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWbm9kZVJvb3Q6IG9sZFZub2RlUm9vdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudElkICAgIDogbW92ZWROb2RlLnBhcmVudE5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVsdGE6IDBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Zub2RlICYmIG9sZFZub2RlICYmIG5ld1Zub2RlLmlkID09PSBvbGRWbm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWbm9kZS52dHlwZSA9PT0gJ3RleHQnICYmIG5ld1Zub2RlLmlubmVySFRNTCAhPT0gb2xkVm5vZGUuaW5uZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAndXBkYXRlVnRleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICA6IG5ld1Zub2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IFZOb2RlVXRpbC5maW5kQ2hpbGRWbm9kZShuZXdWbm9kZVJvb3QsIG5ld1Zub2RlLmlkKS5wYXJlbnROb2RlLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IG5ld1Zub2RlLmlubmVySFRNTFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhuZXdWbm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMob2xkVm5vZGUpLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1Zub2RlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAnYXR0cmlidXRlcycpIHsgLy8gZmluZCByZW1vdmVkIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRWbm9kZVtwcm9wXSkuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWbm9kZVtwcm9wXS5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Vm5vZGVbcHJvcF1bYXR0cl0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGtleXMuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IG5ld1Zub2RlW3Byb3BdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKG9sZFZub2RlLmF0dHJpYnV0ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBvbGRWbm9kZS5hdHRyaWJ1dGVzW2tleV0gPT09IHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgTmVvLmlzRW1wdHkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlnbm9yZSBlbXB0eSBhcnJheXMgJiBvYmplY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXR0cmlidXRlcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEuYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbmV3Vm5vZGUuYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTm9kZXMnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpICAgICAgICAgID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWx0YSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlbiAgICAgICAgPSBNYXRoLm1heCh2YWx1ZS5sZW5ndGgsIG9sZFZub2RlLmNoaWxkTm9kZXMubGVuZ3RoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IG1lLmNyZWF0ZURlbHRhcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzICAgICAgOiBkZWx0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggICAgICAgOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Zub2RlICAgIDogdmFsdWVbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Vm5vZGVSb290OiBuZXdWbm9kZVJvb3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkVm5vZGUgICAgOiBvbGRWbm9kZS5jaGlsZE5vZGVzW2kgKyBpbmRleERlbHRhXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWbm9kZVJvb3Q6IG9sZFZub2RlUm9vdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCAgICA6IG5ld1Zub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlICYmIHJldHVyblZhbHVlLmluZGV4RGVsdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlbHRhICs9IHJldHVyblZhbHVlLmluZGV4RGVsdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbm9kZU5hbWUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2lubmVySFRNTCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVm5vZGVbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3R5bGUnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMgPSBOZW8udXRpbC5TdHlsZS5jb21wYXJlU3R5bGVzKHZhbHVlLCBvbGRWbm9kZS5zdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhLnN0eWxlID0gc3R5bGVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRWbm9kZS5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgICA9IE5lby51dGlsLkFycmF5LmRpZmZlcmVuY2UodmFsdWUsIG9sZFZub2RlLmNsYXNzTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmUgPSBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKG9sZFZub2RlLmNsYXNzTmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgID0gIHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkLmxlbmd0aCA+IDAgfHwgcmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhLmNscyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IGFkZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IHJlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRlbHRhKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEuaWQgPSBuZXdWbm9kZS5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaChkZWx0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWx0YXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHBhcmVudE5vZGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxuICAgICAqICAgICB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICovXG4gICAgZmluZFZub2RlKHZub2RlLCBpZCwgcGFyZW50Tm9kZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHJldHVyblZhbHVlID0gbnVsbCxcbiAgICAgICAgICAgIGNoaWxkcmVuLCBjaGlsZFZhbHVlLCBpLCBsZW47XG5cbiAgICAgICAgaWYgKHZub2RlLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgaW5kZXggICAgIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcGFyZW50Tm9kZTogcGFyZW50Tm9kZSxcbiAgICAgICAgICAgICAgICB2bm9kZSAgICAgOiB2bm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICh2bm9kZS52dHlwZSAhPT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IHZub2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBpICAgICAgICA9IDA7XG4gICAgICAgICAgICBsZW4gICAgICA9IGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRWYWx1ZSA9IHRoaXMuZmluZFZub2RlKGNoaWxkcmVuW2ldLCBpZCwgdm5vZGUsIGkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkVmFsdWUgJiYgY2hpbGRWYWx1ZS52bm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjaGlsZFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmV0dXJuVmFsdWUgJiYgcmV0dXJuVmFsdWUucGFyZW50SWQgPT09ICdyb290Jykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUuaW5kZXggPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVscGVyKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShIZWxwZXIpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiLyoqXG4gKiBXcmFwcGVyIGNsYXNzIGZvciB2bm9kZSBvYmplY3RzLiBTZWUgdGhlIHR1dG9yaWFscyBmb3IgZnVydGhlciBpbmZvcy5cbiAqIEBjbGFzcyBOZW8udmRvbS5WTm9kZVxuICovXG5jbGFzcyBWTm9kZSB7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gYXR0cmlidXRlcz1bXVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNoaWxkTm9kZXM9W11cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbGFzc05hbWU9W11cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWQ9TmVvLmdldElkKCd2bm9kZScpXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlubmVySFRNTFxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBub2RlTmFtZVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZVxuICAgICAgICAgKi9cblxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2dHlwZT0ndm5vZGUnXG4gICAgICAgICAqL1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywge1xuICAgICAgICAgICAgYXR0cmlidXRlczogY29uZmlnLmF0dHJpYnV0ZXMgfHwgW10sXG4gICAgICAgICAgICBjaGlsZE5vZGVzOiBjb25maWcuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSA6IGNvbmZpZy5jbGFzc05hbWUgIHx8IFtdLFxuICAgICAgICAgICAgaWQgICAgICAgIDogY29uZmlnLmlkICAgICAgICAgfHwgTmVvLmdldElkKCd2bm9kZScpLFxuICAgICAgICAgICAgaW5uZXJIVE1MIDogY29uZmlnLmlubmVySFRNTCxcbiAgICAgICAgICAgIG5vZGVOYW1lICA6IGNvbmZpZy5ub2RlTmFtZSxcbiAgICAgICAgICAgIHN0eWxlICAgICA6IGNvbmZpZy5zdHlsZSxcbiAgICAgICAgICAgIHZ0eXBlICAgICA6IGNvbmZpZy52dHlwZSAgICAgIHx8ICd2bm9kZSdcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLnZkb20nLCB0cnVlKTtcbm5zWydWTm9kZSddID0gVk5vZGU7XG5cbmV4cG9ydCB7Vk5vZGUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IHtkZWZhdWx0IGFzIENvcmVCYXNlfSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgTWVzc2FnZSAgICAgICAgICAgICAgIGZyb20gJy4vTWVzc2FnZS5tanMnO1xuaW1wb3J0IFJlbW90ZU1ldGhvZEFjY2VzcyAgICBmcm9tICcuL21peGlucy9SZW1vdGVNZXRob2RBY2Nlc3MubWpzJztcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgdGhlIEFwcCwgRGF0YSAmIFZEb20gd29ya2VyXG4gKiBAY2xhc3MgTmVvLndvcmtlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5Xb3JrZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLldvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd3b3JrZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3dvcmtlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXXxOZW8uY29yZS5CYXNlW118bnVsbH0gbWl4aW5zPVtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IFtPYnNlcnZhYmxlLCBSZW1vdGVNZXRob2RBY2Nlc3NdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHdvcmtlcklkPW51bGxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHdvcmtlcklkOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnByb21pc2VzID0ge307XG5cbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbWUub25NZXNzYWdlLmJpbmQobWUpLCBmYWxzZSk7XG5cbiAgICAgICAgTmVvLndvcmtlcklkICAgICAgPSBtZS53b3JrZXJJZDtcbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIgPSBtZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlXG4gICAgICovXG4gICAgb25NZXNzYWdlKGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGF0YSAgICA9IGUuZGF0YSxcbiAgICAgICAgICAgIGFjdGlvbiAgPSBkYXRhLmFjdGlvbixcbiAgICAgICAgICAgIHJlcGx5SWQgPSBkYXRhLnJlcGx5SWQsXG4gICAgICAgICAgICBwcm9taXNlO1xuXG4gICAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01lc3NhZ2UgYWN0aW9uIGlzIG1pc3Npbmc6ICcgKyBkYXRhLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb24gIT09ICdyZXBseScpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGhpc1snb24nICsgTmVvLmNhcGl0YWxpemUoYWN0aW9uKV0oZGF0YSk7XG4gICAgICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicsIGRhdGEsIGVyciwgZSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChkYXRhLmlkLCB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yIDogZXJyLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChwcm9taXNlID0gYWN0aW9uID09PSAncmVwbHknICYmIG1lLnByb21pc2VzW3JlcGx5SWRdKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZWplY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlamVjdChkYXRhLmRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoZGF0YS5kYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIG1lLnByb21pc2VzW3JlcGx5SWRdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25QaW5nKG1zZykge1xuICAgICAgICB0aGlzLnJlc29sdmUobXNnLCB7XG4gICAgICAgICAgICBvcmlnaW5Nc2c6IG1zZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyTmVvQ29uZmlnKG1zZykge1xuICAgICAgICBOZW8uY29uZmlnID0gTmVvLmNvbmZpZyB8fCB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihOZW8uY29uZmlnLCBtc2cuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAgICovXG4gICAgcHJvbWlzZU1lc3NhZ2UoZGVzdCwgb3B0cywgdHJhbnNmZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1lLnNlbmRNZXNzYWdlKGRlc3QsIG9wdHMsIHRyYW5zZmVyKSxcbiAgICAgICAgICAgICAgICBtc2dJZCAgID0gbWVzc2FnZS5pZDtcblxuICAgICAgICAgICAgbWUucHJvbWlzZXNbbXNnSWRdID0ge1xuICAgICAgICAgICAgICAgIHJlc29sdmU6IHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0IDogcmVqZWN0XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGVzdCBhcHAsIGRhdGEsIG1haW4gb3IgdmRvbSAoZXhjbHVkaW5nIHRoZSBjdXJyZW50IHdvcmtlcilcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cyBjb25maWdzIGZvciBOZW8ud29ya2VyLk1lc3NhZ2VcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBbdHJhbnNmZXJdIEFuIG9wdGlvbmFsIGFycmF5IG9mIFRyYW5zZmVyYWJsZSBvYmplY3RzIHRvIHRyYW5zZmVyIG93bmVyc2hpcCBvZi5cbiAgICAgKiBJZiB0aGUgb3duZXJzaGlwIG9mIGFuIG9iamVjdCBpcyB0cmFuc2ZlcnJlZCwgaXQgYmVjb21lcyB1bnVzYWJsZSAobmV1dGVyZWQpIGluIHRoZSBjb250ZXh0IGl0IHdhcyBzZW50IGZyb21cbiAgICAgKiBhbmQgYmVjb21lcyBhdmFpbGFibGUgb25seSB0byB0aGUgd29ya2VyIGl0IHdhcyBzZW50IHRvLlxuICAgICAqIEByZXR1cm5zIHtOZW8ud29ya2VyLk1lc3NhZ2V9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBzZW5kTWVzc2FnZShkZXN0LCBvcHRzLCB0cmFuc2Zlcikge1xuICAgICAgICBvcHRzLmRlc3RpbmF0aW9uID0gZGVzdDtcblxuICAgICAgICBsZXQgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKG9wdHMpO1xuXG4gICAgICAgIHNlbGYucG9zdE1lc3NhZ2UobWVzc2FnZSwgdHJhbnNmZXIpO1xuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4uL2NvcmUvSWRHZW5lcmF0b3IubWpzJztcblxuLyoqXG4gKiBBIHdyYXBwZXIgZm9yIHdvcmtlciBwb3N0IG1lc3NhZ2VzIHNlbnQgYmV0d2VlbiB0aGUgQXBwLCBEYXRhLCBWRG9tIHdvcmtlciAmIHRoZSBtYWluIHRocmVhZC5cbiAqIFlvdSBjYW4gYWRkIG9wdGlvbmFsIHBhcmFtcyBhcyBuZWVkZWQuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5NZXNzYWdlXG4gKi9cbmNsYXNzIE1lc3NhZ2Uge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhY3Rpb25cbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVzdGluYXRpb249J21haW4nXG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlkPUlkR2VuZXJhdG9yLmdldElkKE5lby53b3JrZXJJZClcbiAgICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3JpZ2luPU5lby53b3JrZXJJZFxuICAgICAgICAgKi9cblxuICAgICAgICBjb25maWcuZGVzdGluYXRpb24gPSBjb25maWcuZGVzdGluYXRpb24gfHwgJ21haW4nO1xuICAgICAgICBjb25maWcuaWQgICAgICAgICAgPSBjb25maWcuaWQgICAgICAgICAgfHwgSWRHZW5lcmF0b3IuZ2V0SWQoTmVvLndvcmtlcklkKTtcbiAgICAgICAgY29uZmlnLm9yaWdpbiAgICAgID0gY29uZmlnLm9yaWdpbiAgICAgIHx8IE5lby53b3JrZXJJZDtcblxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxufVxuXG5jb25zdCBucyA9IE5lby5ucygnTmVvLndvcmtlcicsIHRydWUpO1xubnNbJ01lc3NhZ2UnXSA9IE1lc3NhZ2U7XG5cbmV4cG9ydCB7TWVzc2FnZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTmVvICAgICAgIGZyb20gJy4uL05lby5tanMnO1xuaW1wb3J0IEJhc2UgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSAnLi4vY29yZS9fZXhwb3J0Lm1qcyc7XG5pbXBvcnQgSGVscGVyICAgIGZyb20gJy4uL3Zkb20vSGVscGVyLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBTdHlsZSAgICAgZnJvbSAnLi4vdXRpbC9TdHlsZS5tanMnO1xuXG4vKipcbiAqIFRoZSBWZG9tIHdvcmtlciBjb252ZXJ0cyB2ZG9tIHRlbXBsYXRlcyBpbnRvIHZub2RlcywgYXMgd2VsbCBhcyBjcmVhdGluZyBkZWx0YS11cGRhdGVzLlxuICogU2VlIHRoZSB0dXRvcmlhbHMgZm9yIGZ1cnRoZXIgaW5mb3MuXG4gKiBAY2xhc3MgTmVvLndvcmtlci5WRG9tXG4gKiBAZXh0ZW5kcyBOZW8ud29ya2VyLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgVkRvbSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ud29ya2VyLlZEb20nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ud29ya2VyLlZEb20nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmRvbS13b3JrZXInXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3Zkb20td29ya2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdvcmtlcklkPSd2ZG9tJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgd29ya2VySWQ6ICd2ZG9tJ1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZEb20pO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKFZEb20pO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby53b3JrZXIubWl4aW5zLlJlbW90ZU1ldGhvZEFjY2Vzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBSZW1vdGVNZXRob2RBY2Nlc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLndvcmtlci5taXhpbnMuUmVtb3RlTWV0aG9kQWNjZXNzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLXJlbW90ZS1tZXRob2QtYWNjZXNzJ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtaXhpbi1yZW1vdGUtbWV0aG9kLWFjY2VzcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9uKCo9LCAqPSk6IFByb21pc2U8YW55Pn1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZVJlbW90ZShyZW1vdGUsIG1ldGhvZCkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9yaWdpbiA9IHJlbW90ZS5vcmlnaW47XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEsIGJ1ZmZlcikge1xuICAgICAgICAgICAgbGV0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICAgICAgOiAncmVtb3RlTWV0aG9kJyxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICA6IGRhdGEsXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24gICAgOiBvcmlnaW4sXG4gICAgICAgICAgICAgICAgcmVtb3RlQ2xhc3NOYW1lOiByZW1vdGUuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIHJlbW90ZU1ldGhvZCAgIDogbWV0aG9kXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIG1lLnByb21pc2VNZXNzYWdlKG9yaWdpbiwgb3B0cywgYnVmZmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZW1vdGVcbiAgICAgKi9cbiAgICBvblJlZ2lzdGVyUmVtb3RlKHJlbW90ZSkge1xuICAgICAgICBpZiAocmVtb3RlLmRlc3RpbmF0aW9uID09PSBOZW8ud29ya2VySWQpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHJlbW90ZS5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgbWV0aG9kcyAgID0gcmVtb3RlLm1ldGhvZHMsXG4gICAgICAgICAgICAgICAgcGtnICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICBpZiAocGtnW21ldGhvZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEdXBsaWNhdGUgcmVtb3RlIG1ldGhvZCBkZWZpbml0aW9uICcgKyBjbGFzc05hbWUgKyAnLicgKyBtZXRob2QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHBrZ1ttZXRob2RdID0gbWUuZ2VuZXJhdGVSZW1vdGUocmVtb3RlLCBtZXRob2QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09ICdtYWluJykge1xuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3JlbW90ZXJlZ2lzdGVyZWQnLCByZW1vdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICovXG4gICAgb25SZW1vdGVNZXRob2QobXNnKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgcGtnID0gTmVvLm5zKG1zZy5yZW1vdGVDbGFzc05hbWUpLFxuICAgICAgICAgICAgb3V0LCBtZXRob2Q7XG5cbiAgICAgICAgaWYgKCFwa2cpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCByZW1vdGUgbmFtZXNwYWNlIFwiJyArIG1zZy5yZW1vdGVDbGFzc05hbWUgKyAnXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZCA9IHBrZ1ttc2cucmVtb3RlTWV0aG9kXTtcblxuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlbW90ZSBtZXRob2QgbmFtZSBcIicgKyBtc2cucmVtb3RlTWV0aG9kICsgJ1wiJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtc2cuZGF0YSkpIHtcbiAgICAgICAgICAgIG91dCA9IG1ldGhvZC5jYWxsKHBrZywgLi4ubXNnLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb3V0ID0gbWV0aG9kLmNhbGwocGtnLCBtc2cuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3V0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgb3V0LnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgIG1lLnJlc29sdmUobXNnLCBkYXRhKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICAgICAgbWUucmVqZWN0KG1zZywgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVzb2x2ZShtc2csIG91dCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHByb21pc2VNZXNzYWdlIGdldHMgcmVqZWN0ZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbXNnXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZWplY3QobXNnLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZWplY3QgOiB0cnVlLFxuICAgICAgICAgICAgcmVwbHlJZDogbXNnLmlkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gcHJvbWlzZU1lc3NhZ2UgZ2V0cyByZXNvbHZlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBtc2dcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc29sdmUobXNnLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobXNnLm9yaWdpbiwge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3JlcGx5JyxcbiAgICAgICAgICAgIGRhdGEgICA6IGRhdGEsXG4gICAgICAgICAgICByZXBseUlkOiBtc2cuaWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSZW1vdGVNZXRob2RBY2Nlc3MpO1xuXG5leHBvcnQge1JlbW90ZU1ldGhvZEFjY2VzcyBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9