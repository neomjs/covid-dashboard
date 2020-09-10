/******/ (function(modules) { // webpackBootstrap
/******/ 	self["webpackChunk"] = function webpackChunkCallback(chunkIds, moreModules) {
/******/ 		for(var moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		while(chunkIds.length)
/******/ 			installedChunks[chunkIds.pop()] = 1;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "1" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"gallery": 1
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
/******/ 		promises.push(Promise.resolve().then(function() {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				importScripts(__webpack_require__.p + "" + chunkId + ".js");
/******/ 			}
/******/ 		}));
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/neo.mjs/examples/component/gallery/app.mjs");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/neo.mjs/examples/component/gallery/GalleryMainContainer.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/gallery/GalleryMainContainer.mjs ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryMainContainer; });
/* harmony import */ var _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Gallery.mjs */ "./node_modules/neo.mjs/src/component/Gallery.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");






/**
 * @class TestApp.GalleryMainContainer
 * @extends Neo.tab.Container
 */
class GalleryMainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype: 'main-container',

        autoMount: true,
        /**
         * @member {Neo.component.Gallery|null} gallery=null
         */
        gallery: null,
        /**
         * @member {Object|null} galleryConfig=null
         */
        galleryConfig: null,
        layout: {ntype: 'hbox', align: 'stretch'},

        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            ntype : 'panel',
            layout: {ntype: 'vbox', align: 'stretch'},
            style : {backgroundColor: '#2b2b2b'},
            width : 260,

            itemDefaults: {
                ntype        : 'rangefield',
                flex         : '0 1 auto',
                labelWidth   : '110px',
                style        : {padding: '10px'},
                useInputEvent: true,

                listeners: {
                    change: function(data) {
                        if (this.name === 'opacity') {
                            data.value /= 100;
                        }
                        Neo.get('neo-gallery-1')[this.name] = data.value;
                    }
                }
            },

            headers: [{
                dock: 'top',
                text: 'Gallery Controls'
            }],

            items: [{
                labelText: 'Translate X',
                maxValue : 5000,
                minValue : 0,
                name     : 'translateX',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-gallery-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-gallery-1').on('changeTranslateX', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Translate Y',
                maxValue : 1500,
                minValue : -1500,
                name     : 'translateY',
                value    : 0
            }, {
                labelText: 'Translate Z',
                maxValue : 550,
                minValue : -4500,
                name     : 'translateZ',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-gallery-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-gallery-1').on('changeTranslateZ', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Amount Rows',
                maxValue : 15,
                minValue : 1,
                name     : 'amountRows',
                value    : 3
            }, {
                module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                clearable: false,
                labelText: 'Max Items',
                maxValue : 600,
                minValue : 100,
                name     : 'maxItems',
                stepSize : 100,
                value    : 300
            }, {
                ntype       : 'button',
                text        : 'Order by Row',
                listeners   : {},
                style       : {margin: '20px'},
                domListeners: {
                    click: function() {
                        const gallery    = Neo.get('neo-gallery-1'),
                              orderByRow = !gallery.orderByRow;

                        this.text = orderByRow === true ? 'Order By Column' : 'Order by Row';

                        gallery.orderByRow = orderByRow;
                    }
                }
            }, {
                ntype    : 'button',
                disabled : true,
                text     : 'Sort by Lastname',
                listeners: {},
                style    : {margin: '20px', marginBottom: '10px'},

                domListeners: {
                    click: function() {
                        Neo.get('neo-gallery-1').store.sorters = [{
                            property : 'lastname',
                            direction: 'ASC'
                        }, {
                            property : 'firstname',
                            direction: 'ASC'
                        }];
                    }
                }
            }, {
                ntype    : 'button',
                disabled : true,
                text     : 'Sort by Firstname',
                listeners: {},
                style    : {margin: '20px', marginTop: 0},

                domListeners: {
                    click: function() {
                        Neo.get('neo-gallery-1').store.sorters = [{
                            property : 'firstname',
                            direction: 'ASC'
                        }, {
                            property : 'lastname',
                            direction: 'ASC'
                        }];
                    }
                }
            }, {
                ntype: 'label',
                text : [
                    '<b>Navigation Concept</b>',
                    '<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>'
                ].join(''),

                style: {
                    backgroundColor: '#323232',
                    color          : '#ddd',
                    fontSize       : '13px',
                    margin         : '10px',
                    padding        : '10px',
                    whiteSpace     : 'normal'
                }
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.gallery = Neo.create({
            module: _src_component_Gallery_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            id    : 'neo-gallery-1',
            ...me.galleryConfig || {}
        });

        me.items[0].items.push(me.gallery);
    }

    /**
     *
     * @returns {Neo.data.Store}
     */
    getStore() {
        return this.items[0].items[0].store;
    }
}

Neo.applyClassConfig(GalleryMainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/gallery/app.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/gallery/app.mjs ***!
  \*****************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _GalleryMainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GalleryMainContainer.mjs */ "./node_modules/neo.mjs/examples/component/gallery/GalleryMainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/component/gallery/',
    mainView: _GalleryMainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/button/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/button/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * @class Neo.button.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for iconPosition
         * @member {String[]} iconPositions=['top', 'right', 'bottom', 'left']
         * @protected
         * @static
         */
        iconPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.button.Base'
         * @protected
         */
        className: 'Neo.button.Base',
        /**
         * @member {String} ntype='button'
         * @protected
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
         * Transforms the button tag into an a tag [optional]
         * @member {String|null} url_=null
         */
        url_: null,
        /**
         * If url is set, applies the target attribute on the top level vdom node [optional]
         * @member {String} urlTarget_='_blank'
         */
        urlTarget_: '_blank',
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * Triggered after the url config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUrl(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        if (value) {
            vdomRoot.href = value;
            vdomRoot.tag  = 'a';
        } else {
            delete vdomRoot.href;
            vdomRoot.tag = 'button';
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the urlTarget config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUrlTarget(value, oldValue) {
        let me       = this,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        if (me.url) {
            vdomRoot.target = value;
        } else {
            delete vdomRoot.target;
        }

        me.vdom = vdom;
    }

    /**
     * Converts the iconCls array into a string on beforeGet
     * @returns {String}
     * @protected
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
     * @protected
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
     * @protected
     */
    beforeSetIconPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'iconPosition');
    }

    /**
     * @protected
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

Neo.applyClassConfig(Base);



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
         * @protected
         */
        className: 'Neo.collection.Base',
        /**
         * @member {String} ntype='collection'
         * @protected
         */
        ntype: 'collection',
        /**
         * When filtering the collection for the first time, allItems will become a new collection for the unfiltered
         * state, using this id as the sourceCollectionId
         * @member {Neo.collection.Base|null} allItems
         * @protected
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
         * @protected
         */
        sortDirections: null,
        /**
         * An internal Array of the sort properties for faster access
         * @member {Array} sortProperties=null
         * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
     */
    beforeSetMap(value, oldValue) {
        return !value ? new Map() : value;
    }

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetFilters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            operator: key.operator,
                            property: key.property,
                            value   : key.value
                        });

                        hasMatch = true;
                        break;
                    } else if (
                        oldValue[i].operator === (key.operator || '===') &&
                        oldValue[i].property === key.property &&
                        oldValue[i].value    === key.value
                    ) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Filter_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
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
     * @protected
     */
    beforeSetSorters(value, oldValue) {
        if (!Array.isArray(value)) {
            value = value ? [value] : [];
        }

        let len = oldValue && oldValue.length || 0,
            hasMatch, i;

        value.forEach((key, index) => {
            if (oldValue) {
                hasMatch = false;
                i        = 0;

                for (; i < len; i++) {
                    if (oldValue[i] === key) {
                        oldValue[i].set({
                            direction: key.direction,
                            property : key.property
                        });

                        hasMatch = true;
                        break;
                    } else if (oldValue[i].property === key.property && oldValue[i].direction === key.direction) {
                        hasMatch = true;
                        break;
                    }
                }
            }

            if (!hasMatch) {
                value[index] = Neo.create(_Sorter_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], key);
            } else {
                value[index] = oldValue[i];
                oldValue.splice(i, 1);
                len--;
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
     * @protected
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
     * @protected
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
     * @protected
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
     * @returns {Number}
     */
    getCountMutations() {
        return this[countMutations];
    }

    /**
     * Returns the first matching filter for the given property config
     * @param {String} property
     * @returns {Neo.collection.Filter|null}
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
     * @protected
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
     * @protected
     */
    onFilterChange(opts) {
        this.filter();
    }

    /**
     *
     * @param {Object} opts
     * @protected
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
     * @protected
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
         * @protected
         * @static
         */
        operators: ['==', '===', '!=', '!==', '<', '<=', '>', '>=', 'excluded', 'included', 'isDefined', 'isUndefined', 'like']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.collection.Filter'
         * @protected
         */
        className: 'Neo.collection.Filter',
        /**
         * @member {String} ntype='filter'
         * @protected
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
         * @member {Boolean} includeEmptyValues=true
         */
        includeEmptyValues: true,
        /**
         * Set this flag to true before starting bulk updates (e.g. changing property & value)
         * to prevent multiple change events
         * @member {Boolean} isUpdating_=false
         */
        isUpdating_: false,
        /**
         * The owner util.Collection needs to apply an onChange listener once
         * @member {Boolean} listenerApplied=false
         * @protected
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
     * @protected
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
     * Checks if a collection item matches this filter
     * @param {Object} item The current collection item
     * @param {Array} filteredItems If the collection filterMode is not primitive contains the items which passed
     * the previous filters, otherwise all collection items
     * @param {Array} allItems all collection items
     * @returns {Boolean}
     */
    isFiltered(item, filteredItems, allItems) {
        let me = this,
            filterValue, recordValue;

        if (me._disabled) {
            return false;
        }

        if (me.includeEmptyValues && (me._value === null || Neo.isEmpty(me._value))) {
            return false;
        }

        if (me._filterBy) {
            return me.filterBy.call(me.scope || me, item, filteredItems, allItems);
        } else {
            filterValue = me._value;
            recordValue = item[me._property];

            if (filterValue instanceof Date && recordValue instanceof Date) {
                filterValue = filterValue.valueOf();
                recordValue = recordValue.valueOf();
            }

            return !Filter[me._operator](recordValue, filterValue);
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
         * @protected
         */
        className: 'Neo.collection.Sorter',
        /**
         * @member {String} ntype='sorter'
         * @protected
         */
        ntype: 'sorter',
        /**
         * Internal config which mapps the direction ASC to 1, -1 otherwise
         * @member {Number} directionMultiplier=1
         * @protected
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
         * @protected
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
         * @protected
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
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/KeyNavigation.mjs */ "./node_modules/neo.mjs/src/util/KeyNavigation.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _util_Style_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/Style.mjs */ "./node_modules/neo.mjs/src/util/Style.mjs");
/* harmony import */ var _core_Util_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/Util.mjs */ "./node_modules/neo.mjs/src/core/Util.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");













/**
 * @class Neo.component.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
         * @protected
         */
        className: 'Neo.component.Base',
        /**
         * @member {String} ntype='component'
         * @protected
         */
        ntype: 'component',
        /**
         * The name of the App this component belongs to
         * @member {String|null} appName_=null
         */
        appName_: null,
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
         * @protected
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
         * @protected
         */
        hasBeenMounted: false,
        /**
         * Internal flag for vdom changes after a component got unmounted
         * (delta updates can no longer get applied & a new render call is required before re-mounting)
         * @member {Boolean} hasUnmountedVdomChanges_=false
         * @protected
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
         * @protected
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
         * @protected
         */
        mounted_: false,
        /**
         * Internal flag which will get set to true in case an update call arrives while another update is running
         * @member {Boolean} needsVdomUpdate=false
         * @protected
         */
        needsVdomUpdate: false,
        /**
         * The parent component id or document.body
         * @member {String} parentId='document.body'
         */
        parentId: 'document.body',
        /**
         * Array of Plugin Modules and / or config objects
         * @member {Array|null} plugins_=null
         * @protected
         */
        plugins_: null,
        /**
         * True in case the component is rendering the vnode
         * @member {Boolean} rendering_=false
         * @protected
         */
        rendering_: false,
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
         * @protected
         */
        vnode_: null,
        /**
         * Shortcut for style.width, defaults to px
         * @member {Number|String|null} width_=null
         */
        width_: null,
        /**
         * Top level style attributes. Useful in case getVdomRoot() does not point to the top level DOM node.
         * @member {Object|null} wrapperStyle_=null
         */
        wrapperStyle_: null,
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
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].register(this);
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
     * @protected
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
            oldStyle = me.style; // cloned => getter

        me._style = value;
        me.updateStyle(value, oldStyle);
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
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].warn('vdom got replaced for: ' + me.id + '. Copying the content into the reference holder object');

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
            value = _core_Util_mjs__WEBPACK_IMPORTED_MODULE_9__["default"].createStyleObject(value);
        }

        // todo: add a check if something has changed

        return this.style = Object.assign(this.style, value);
    }

    /**
     * Triggered after the disabled config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDisabled(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_6__["default"][value ? 'add' : 'remove'](cls, 'neo-disabled');
        me.cls = cls;
    }

    /**
     * Registers the domListeners inside the Neo.manager.DomEvent
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetDomListeners(value, oldValue) {
        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].updateDomListeners(this, value, oldValue);
    }

    /**
     * Triggered after the hasUnmountedVdomChanges config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetHasUnmountedVdomChanges(value, oldValue) {
        if (value || (!value && oldValue)) {
            let parentIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getParentIds(this),
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
     * @protected
     */
    afterSetHeight(value, oldValue) {
        this.changeVdomRootKey('height', value);
    }

    /**
     * Triggered after the html config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetHtml(value, oldValue) {
        this.changeVdomRootKey('html', value);
    }

    /**
     * Triggered after the id config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetId(value, oldValue) {
        this.changeVdomRootKey('id', value);
    }

    /**
     * Triggered after the maxHeight config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @protected
     */
    afterSetMaxHeight(value, oldValue) {
        this.changeVdomRootKey('maxHeight', value);
    }

    /**
     * Triggered after the maxWidth config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @protected
     */
    afterSetMaxWidth(value, oldValue) {
        this.changeVdomRootKey('maxWidth', value);
    }

    /**
     * Triggered after the minHeight config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @protected
     */
    afterSetMinHeight(value, oldValue) {
        this.changeVdomRootKey('minHeight', value);
    }

    /**
     * Triggered after the minWidth config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @protected
     */
    afterSetMinWidth(value, oldValue) {
        this.changeVdomRootKey('minWidth', value);
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this;

            if (value) {
                me.hasBeenMounted = true;

                if (me.domListeners && me.domListeners.length > 0) {
                    // todo: the main thread reply of mount arrives after pushing the task into the queue which does not ensure the dom is mounted
                    setTimeout(() => {
                        _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].mountDomListeners(me);
                    }, 300);
                }

                me.fire('mounted', me.id);
            }
        }
    }

    /**
     * Triggered after the tooltips config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetTooltips(value, oldValue) {
        if (value) {
            let me = this;

            if (Neo.ns('Neo.tooltip.Base')) {
                me.createTooltips(value);
            } else {
                Promise.all(/*! import() | src/tooltip/Base */[__webpack_require__.e("vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e"), __webpack_require__.e("src/tooltip/Base")]).then(__webpack_require__.bind(null, /*! ../tooltip/Base.mjs */ "./node_modules/neo.mjs/src/tooltip/Base.mjs")).then((module) => {
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
     * @protected
     */
    afterSetVnode(value, oldValue) {
        if (oldValue !== undefined) {
            this.syncVnodeTree();
        }
    }

    /**
     * Triggered after the width config got changed
     * @param {Number|String|null} value
     * @param {Number|String|null} oldValue
     * @protected
     */
    afterSetWidth(value, oldValue) {
        this.changeVdomRootKey('width', value);
    }

    /**
     * Triggered after the wrapperStyle config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetWrapperStyle(value, oldValue) {
        if (!(!value && oldValue === undefined)) {
            let me   = this,
                vdom = me.vdom;

            if (!me.vdom.id) {
                vdom.style = value;
                me.vdom = vdom;
            } else {
                me.updateStyle(value, oldValue, me.vdom.id);
            }
        }
    }

    /**
     * Triggered when accessing the wrapperStyle config
     * @param {Object} value
     * @protected
     */
    beforeGetWrapperStyle(value) {
        return {...Object.assign(this.vdom.style || {}, value)};
    }

    /**
     * Triggered when accessing the controller config
     * @param {Object} value
     * @protected
     */
    beforeGetController(value) {
        return value && Neo.get(value);
    }

    /**
     * Triggered before the controller config gets changed.
     * Creates a ComponentController instance if needed.
     * @param {Object} value
     * @param {Object} oldValue
     * @returns {String} id
     * @protected
     */
    beforeSetController(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        value = _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, null, {
            view: this
        });

        return value && value.id;
    }

    /**
     * Triggered before the domListeners config gets changed.
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    beforeSetDomListeners(value, oldValue) {
        if (Neo.isObject(value)) {
            value = [value];
        }

        return value || [];
    }

    /**
     * Triggered before the keys config gets changed.
     * Creates a KeyNavigation instance if needed.
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    beforeSetKeys(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        if (value) {
            value = _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _util_KeyNavigation_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], {
                keys: value
            });
        }

        return value;
    }

    /**
     * Triggered before the plugins config gets changed.
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetPlugins(value, oldValue) {
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                value[index] = _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(item, null, {
                    owner: this
                });
            });
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
     * @protected
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
            if (me.parentId === 'document.body') {
                Neo.currentWorker.promiseMessage('main', {
                    action: 'updateDom',
                    deltas: [{action: 'removeNode', id: me.vdom.id}]
                });
            } else {
                parent     = Neo.getComponent(me.parentId);
                parentVdom = parent.vdom;

                _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].removeVdomChild(parentVdom, me.vdom.id);
                parent[silent ? '_vdom' : 'vdom'] = parentVdom;
            }
        }

        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].unregister(this);

        super.destroy();
    }

    /**
     * Convenience shortcut for Neo.manager.Component.down
     * @param {Object|String} config
     * @returns {Neo.core.Base} The matching instance or null
     */
    down(config) {
        return _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].down(this.id, config);
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

        parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getParents(this);
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
            child, childIds;

        if (!me.vnode) {
            throw new Error('Component vnode must be generated before mounting, use Component.render()');
        }

        // In case the component was already mounted, got unmounted and received vdom changes afterwards,
        // a new render() call is mandatory since delta updates could not get applied.
        // We need to clear the hasUnmountedVdomChanges state for all child components
        if (me.hasUnmountedVdomChanges) {
            // todo: the hasUnmountedVdomChanges flag changes should happen on render
            me.hasUnmountedVdomChanges = false;

            childIds = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(me.vnode);

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
     * @protected
     */
    onRender(data, autoMount) {
        let me  = this,
            app = Neo.apps[me.appName];

        me.rendering = false;

        // if app is a check to see if the Component got destroyed while rendering => before onRender got triggered
        if (app) {
            if (!app.rendered) {
                app.rendering = false;
                app.rendered  = true;
                app.fire('render');
            }

            me.vnode = data;

            let childIds  = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildIds(data),
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
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].warn('vdom got replaced for: ' + me.id + '. Copying the content into the reference holder object');

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
                appName    : me.appName,
                autoMount  : autoMount,
                cls        : me.cls,
                parentId   : autoMount ? me.parentId    : undefined,
                parentIndex: autoMount ? me.parentIndex : undefined,
                style      : me.style,
                ...me.vdom
            }).then(data => {
                me.onRender(data, autoMount);
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
     * Convenience shortcut calling set() with the silent flag
     * @param {Object} values={}
     */
    setSilent(values={}) {
        return this.set(values, true);
    }

    /**
     * Placeholder method for util.VDom.syncVdomIds to allow overriding (disabling) it
     * @param {Neo.vdom.VNode} [vnode=this.vnode]
     * @param {Object} [vdom=this.vdom]
     */
    syncVdomIds(vnode=this.vnode, vdom=this.vdom) {
        _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].syncVdomIds(vnode, vdom);
    }

    /**
     * Placeholder method for util.VDom.syncVdomIds to allow overriding (disabling) it
     * @param {Neo.vdom.VNode} [vnode=this.vnode]
     */
    syncVnodeTree(vnode=this.vnode) {
        let me    = this,
            debug = false,
            childVnode, start;

        if (debug) {
            start = performance.now();
        }

        me.syncVdomIds();

        // delegate the latest node updates to all possible child components found inside the vnode tree
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getChildren(me).forEach(component => {
            childVnode = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_11__["default"].findChildVnode(me.vnode, component.vdom.id);

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
        _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getParents(me).forEach((component, index) => {
            if (!me.vnode) {
                if (index === 0 && !_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_11__["default"].removeChildVnode(component.vnode, me.id)) {
                    // This can fail, in case the vnode is already removed (not an issue, better safe than sorry)
                    // console.warn('syncVnodeTree: Could not remove the parent vnode for', me.id, component);
                }
            }

            // check for dynamically rendered components which get inserted into the component tree
            else if (index === 0 && me.vnode.outerHTML) {
                // console.log('dyn item', me.vnode, me.parentIndex);
                component.vnode.childNodes.splice(me.parentIndex || 0, 0, me.vnode);
            }

            else if (!_util_VNode_mjs__WEBPACK_IMPORTED_MODULE_11__["default"].replaceChildVnode(component.vnode, me.vnode.id, me.vnode)) {
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
        return _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].up(this.id, config);
    }

    /**
     * Delta updates for the cls config. Gets called after the cls config gets changed in case the component is mounted.
     * @param {Array} cls
     * @param {Array} oldCls
     * @protected
     */
    updateCls(cls, oldCls) {
        let me    = this,
            vnode = me.vnode,
            opts;

        if (!_util_Array_mjs__WEBPACK_IMPORTED_MODULE_6__["default"].isEqual(cls, oldCls)) {
            if (vnode) {
                vnode.className = cls; // keep the vnode in sync
                me.vnode = vnode;
            }

            opts = {
                action: 'updateDom',
                deltas: [{
                    id : me.id,
                    cls: {
                        add   : Neo.util.Array.difference(cls, oldCls),
                        remove: Neo.util.Array.difference(oldCls, cls)
                    }
                }]
            };

            if (Neo.currentWorker.isSharedWorker) {
                opts.appName = me.appName;
            }

            Neo.currentWorker.promiseMessage('main', opts).then(() => {
                //console.log(me.vnode);
            }).catch(err => {
                console.log('Error attempting to update Component cls', err, me);
            });
        }
    }

    /**
     * Creates the style deltas for newValue & oldValue and applies them directly to the DOM.
     * @param {Object|String} newValue
     * @param {Object|String} oldValue
     * @param {String} [id=this.id]
     * @protected
     */
    updateStyle(newValue, oldValue, id=this.id) {
        let me    = this,
            delta = _util_Style_mjs__WEBPACK_IMPORTED_MODULE_8__["default"].compareStyles(newValue, oldValue),
            vdom  = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].findVdomChild(me.vdom, id),
            vnode = me.vnode && _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_11__["default"].findChildVnode(me.vnode, id),
            opts;

        if (delta) {
            vdom.vdom.style = newValue; // keep the vdom in sync

            if (vnode) {
                vnode.vnode.style = newValue; // keep the vnode in sync

                opts = {
                    action: 'updateDom',
                    deltas: [{
                        id   : id,
                        style: delta
                    }]
                };

                if (Neo.currentWorker.isSharedWorker) {
                    opts.appName = me.appName;
                }

                Neo.currentWorker.sendMessage('main', opts);
            }
        }
    }

    /**
     * Gets called after the vdom config gets changed in case the component is already mounted (delta updates).
     * @param {Object} vdom
     * @param {Neo.vdom.VNode} vnode
     * @param {function} [resolve] used by promiseVdomUpdate()
     * @param {function} [reject] used by promiseVdomUpdate()
     * @protected
     */
    updateVdom(vdom, vnode, resolve, reject) {
        let me = this,
            opts;

        // console.log('updateVdom', me.id, Neo.clone(vdom, true), Neo.clone(vnode, true));
        // console.log('updateVdom', me.isVdomUpdating);

        if (me.isVdomUpdating) {
            me.needsVdomUpdate = true;
        } else {
            me.isVdomUpdating = true;

            opts = {
                vdom : vdom,
                vnode: vnode
            };

            if (Neo.currentWorker.isSharedWorker) {
                opts.appName = me.appName;
            }

            Neo.vdom.Helper.update(opts).then(data => {
                // console.log('Component vnode updated', data);
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

/***/ "./node_modules/neo.mjs/src/component/Gallery.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Gallery.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _selection_GalleryModel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selection/GalleryModel.mjs */ "./node_modules/neo.mjs/src/selection/GalleryModel.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");







const itemsMounted = Symbol.for('itemsMounted');

/**
 * @class Neo.component.Gallery
 * @extends Neo.component.Base
 */
class Gallery extends _Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Gallery'
         * @protected
         */
        className: 'Neo.component.Gallery',
        /**
         * @member {String} ntype='gallery'
         * @protected
         */
        ntype: 'gallery',
        /**
         * The amount of visible rows inside the gallery
         * @member {Number} amountRows_=3
         */
        amountRows_: 3,
        /**
         * The background color of the gallery container
         * @member {String} backgroundColor_='#000000'
         */
        backgroundColor_: '#000000',
        /**
         * @member {String[]} cls=['neo-gallery', 'page', 'view']
         */
        cls: ['neo-gallery', 'page', 'view'],
        /**
         * True disables selection of  gallery items
         * @member {Boolean} disableSelection=false
         */
        disableSelection: false,
        /**
         * The image height of the gallery
         * @member {Number} imageHeight=160
         */
        imageHeight: 160,
        /**
         * The image width of the gallery
         * @member {Number} imageWidth=120
         */
        imageWidth: 120,
        /**
         * @member {Object} itemTpl_
         */
        itemTpl_: {
            cls     : ['neo-gallery-item', 'image-wrap', 'view', 'neo-transition-1000'],
            tabIndex: '-1',
            cn: [{
                cls: ['neo-item-wrapper'],
                cn : [{
                    tag  : 'img',
                    cls  : [],
                    style: {}
                }]
            }]
        },
        /**
         * The unique record field containing the id.
         * @member {String} keyProperty='id'
         */
        keyProperty: 'id',
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * The max amount of store items to show
         * @member {Number} maxItems_=300
         */
        maxItems_: 300,
        /**
         * The zooming factor which replaces the default wheelDelta.
         * @member {Number} mouseWheelDeltaX=10
         */
        mouseWheelDeltaX: 10,
        /**
         * The zooming factor which replaces the default wheelDelta.
         * @member {Number} mouseWheelDeltaY=10
         */
        mouseWheelDeltaY: 10,
        /**
         * Specifies whether the mouse wheel should change the translateZ value for zooming
         * @member {Boolean} mouseWheelEnabled_=true
         */
        mouseWheelEnabled_: true,
        /**
         * The DOM element offsetHeight of the top level div.
         * Gets fetched after the gallery got mounted.
         * @member {Number|null} offsetHeight=null
         * @protected
         */
        offsetHeight: null,
        /**
         * The DOM element offsetWidth of the top level div.
         * Gets fetched after the gallery got mounted.
         * @member {Number|null} offsetWidth=null
         * @protected
         */
        offsetWidth: null,
        /**
         * Set this one to true to order the items by row instead of by column
         * @member {Boolean} orderByRow_=false
         */
        orderByRow_: false,
        /**
         * The name of the CSS rule for selected items
         * @member {String} selectedItemCls='neo-selected'
         */
        selectedItemCls: 'neo-selected',
        /**
         * uses the selection.GalleryModel by default
         * @member {Neo.selection.GalleryModel|null} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * True to select the item inside the middle of the store items on mount
         * @member {Boolean} selectOnMount=true
         */
        selectOnMount: true,
        /**
         * The store instance or class containing the data for the gallery items
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null, // todo: use a store once collecitons are integrated
        /**
         * The setTimeout() ids for calls which can get cancelled
         * @member {Array} transitionTimeouts=[]
         * @protected
         */
        transitionTimeouts: [],
        /**
         * The translateX value of the view origin
         * @member {Number} translateX_=0
         */
        translateX_: 0,
        /**
         * The translateX value of the view origin
         * @member {Number} translateY_=0
         */
        translateY_: 0,
        /**
         * The translateX value of the view origin
         * @member {Number} translateZ_=0
         */
        translateZ_: 0,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cls     : ['page', 'view'],
            style   : {},
            tabIndex: '-1',
            cn: [{
                cls  : ['origin', 'view'],
                style: {},
                cn   : [{
                    cls  : ['camera', 'view'],
                    style: {},
                    cn   : [{
                        cls  : ['dolly', 'view'],
                        style: {},
                        cn   : [{
                            cls  : ['view'],
                            style: {},
                            cn   : []
                        }]
                    }]
                }]
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = Neo.clone(me.domListeners, true),
            vdom         = me.vdom,
            origin       = vdom.cn[0],
            camera       = origin.cn[0],
            dolly        = camera.cn[0],
            view         = dolly.cn[0];

        me[itemsMounted] = false;

        camera.id = me.id + '__' + 'camera';
        dolly .id = me.id + '__' + 'dolly';
        origin.id = me.id + '__' + 'origin';
        view  .id = me.id + '__' + 'view';

        me.vdom = vdom;

        domListeners.push({
            click: {
                fn   : me.onClick,
                scope: me
            },
            wheel: {
                fn   : me.onMouseWheel,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.selectionModel) {
            me.selectionModel.register(me);
        }

        // load data for the example collection
        if (!(me.store instanceof _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])) {
            Neo.Xhr.promiseJson({
                insideNeo: true,
                url      : '../../resources/examples/data/ai_contacts.json'
            }).then(data => {
                me.store.items = data.json.data;
                setTimeout(() => { // todo: rendering check
                    me.createItems();

                    if (me.selectOnMount) {
                        me.afterSetMounted(true, false);
                    }
                }, 100);
            }).catch(err => {
                console.log('Error for Neo.Xhr.request', err, me.id);
            });
        }
    }

    /**
     * Triggered after the amountRows config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetAmountRows(value, oldValue) {
        if (Neo.isNumber(oldValue)) {
            let me = this;

            me.afterSetOrderByRow(me.orderByRow, !me.orderByRow);
        }
    }

    /**
     * Triggered after the maxItem config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaxItems(value, oldValue) {
        let me = this;

        if (value && me.rendered) {
            if (oldValue > value) {
                me.destroyItems(value, oldValue - value);
            } else {
                me.createItems(oldValue);
            }
        }
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        if (value) {
            let me = this;

            setTimeout(() => {
                Neo.currentWorker.promiseMessage('main', {
                    action    : 'readDom',
                    appName   : me.appName,
                    vnodeId   : me.id,
                    attributes: [
                        'offsetHeight',
                        'offsetWidth'
                    ]
                }).then(data => {
                    me.offsetHeight = data.attributes.offsetHeight;
                    me.offsetWidth  = data.attributes.offsetWidth;

                    if (me.selectOnMount || me.selectionModel.hasSelection()) {
                        let selection = me.selectionModel.getSelection(),
                            key       = selection.length > 0 && selection[0];

                        if (!key) {
                            let index = parseInt(Math.min(me.maxItems, me.store.getCount()) / me.amountRows);

                            key = me.store.getKeyAt(index);
                        }

                        me.selectionModel.select(key);
                    }
                });
            }, 300);
        } else {
            this.selectionModel.items = [];
        }
    }

    /**
     * Triggered after the orderByRow config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetOrderByRow(value, oldValue) {
        if (Neo.isBoolean(oldValue)) {
            let me   = this,
                i    = 0,
                len  = Math.min(me.maxItems, me.store.items.length),
                vdom = me.vdom,
                view = me.getItemsRoot();

            if (me.rendered) {
                me.refreshImageReflection();

                setTimeout(() => {
                    for (; i < len; i++) {
                        view.cn[i].style.transform = me.getItemTransform(i);
                    }

                    me.vdom = vdom;

                    setTimeout(() => {
                        let sm = me.selectionModel;

                        if (sm.hasSelection()) {
                            me.onSelectionChange(sm.items);
                        }
                    }, 500);
                }, 50);
            }
        }
    }

    /**
     * Triggered after the selectionModel config got changed
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    afterSetSelectionModel(value, oldValue) {
        if (this.rendered) {
            value.register(this);

            if (oldValue) {
                oldValue.destroy();
            }
        }
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Neo.data.Store|null} value
     * @param {Neo.data.Store|null} oldValue
     * @protected
     */
    beforeSetStore(value, oldValue) {
        let me = this;

        if (oldValue) {
            oldValue.destroy();
        }

        // todo: remove the if check once all demos use stores (instead of collections)
        if (value) {
            return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
                listeners  : {
                    load : me.onStoreLoad,
                    sort : me.onSort,
                    scope: me
                }
            });
        }

        return Neo.create(_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            keyProperty: 'id',
            listeners  : {
                sort : me.onSort,
                scope: me
            }
        });
    }

    afterSetTranslateX() {this.moveOrigin();}
    afterSetTranslateY() {this.moveOrigin();}
    afterSetTranslateZ() {this.moveOrigin();}

    /**
     *
     * @returns {*}
     */
    beforeGetItemTpl() {
        return Neo.clone(this._itemTpl, true);
    }

    /**
     * Triggered before the selectionModel config gets changed.
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @protected
     */
    beforeSetSelectionModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_GalleryModel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            listeners: {
                selectionChange: this.onSelectionChange,
                scope          : this
            }
        });
    }

    /**
     * Override this method to get different item-markups
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me        = this,
            imageVdom = vdomItem.cn[0].cn[0];

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        imageVdom.src = Neo.config.resourcesPath + 'examples/' + record.image;

        imageVdom.style.height = me.imageHeight + 'px';
        imageVdom.style.width  = me.imageWidth  + 'px';

        return vdomItem;
    }

    /**
     * @param {Number} [startIndex] the start index for creating items,
     * e.g. increasing maxItems only needs to create the new ones
     * @protected
     */
    createItems(startIndex) {
        let me               = this,
            amountRows       = me.amountRows,
            orderByRow       = me.orderByRow,
            secondLastColumn = amountRows - 1,
            vdom             = me.vdom,
            itemsRoot        = me.getItemsRoot(),
            i                = startIndex || 0,
            len              = Math.min(me.maxItems, me.store.items.length),
            amountColumns, item, vdomItem;

        if (orderByRow) {
            amountColumns = Math.ceil(me.store.getCount() / amountRows);
        }

        for (; i < len; i++) {
            item      = me.store.items[i];
            vdomItem  = me.createItem(me.itemTpl, item, i);

            vdomItem. style = vdomItem.style || {};

            vdomItem.style['transform'] = me.getItemTransform(i);

            if (orderByRow) {
                if (i >= secondLastColumn * amountColumns) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].add(vdomItem.cls, 'neo-reflection');
                }
            } else {
                if (i % amountRows === secondLastColumn) {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].add(vdomItem.cls, 'neo-reflection');
                }
            }

            itemsRoot.cn.push(vdomItem);
        }

        me.promiseVdomUpdate(vdom).then(() => {
            me[itemsMounted] = true;
        });
    }

    /**
     *
     * @param {Number} [startIndex]
     * @param {Number} [amountItems]
     */
    destroyItems(startIndex, amountItems) {
        let me           = this,
            vdom         = me.vdom,
            countItems   = amountItems || me.store.getCount(),
            selectedItem = me.selectionModel.items[0];

        me.getItemsRoot().cn.splice(startIndex || 0, countItems);
        me.vdom = vdom;

        if (me.selectionModel.hasSelection() && selectedItem > startIndex && selectedItem < startIndex + countItems) {
            me.afterSetMounted(true, false);
        }
    }

    /**
     *
     * @param {Number} index
     * @returns {Number[]}
     */
    getCameraTransformForCell(index) {
        let me          = this,
            amountRows  = me.amountRows,
            imageWidth  = me.imageWidth,
            gap         = 10,
            height      = me.offsetHeight / (amountRows + 2),
            spacing     = height + gap,
            x           = Math.floor(index / amountRows),
            y           = index - x * amountRows;

        if (me.orderByRow) {
            let amountColumns = Math.ceil(Math.min(me.maxItems, me.store.getCount()) / amountRows);

            x = index % amountColumns;
            y = Math.floor(index / amountColumns);
        }

        let cx = x * (imageWidth + 10),
            cy = (y + 0.5) * spacing * 1.1 + 50;

        return [-cx, -cy, 0];
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {Number} itemId
     */
    getItemId(vnodeId) {
        return parseInt(vnodeId.split('__')[1]);
    }

    /**
     * Returns the vdom node containing the gallery items
     * @returns {Object} vdom
     */
    getItemsRoot() {
        return this.vdom.cn[0].cn[0].cn[0].cn[0];
    }

    /**
     *
     * @param {Number} index
     * @returns {String}
     */
    getItemTransform(index) {
        let me         = this,
            amountRows = me.amountRows,
            x, y;

        if (me.orderByRow) {
            amountRows = Math.ceil(Math.min(me.maxItems, me.store.getCount()) / amountRows);

            x = index % amountRows;
            y = Math.floor(index / amountRows);
        } else {
            x = Math.floor(index / amountRows);
            y = index % amountRows;
        }

        return this.translate3d(
            x * (me.imageWidth  + 10),
            y * (me.imageHeight + 10) + 100,
            0
        );
    }

    /**
     *
     * @param {String} id
     * @returns {String}
     */
    getItemVnodeId(id) {
        return this.id + '__' + id;
    }

    /**
     *
     */
    moveOrigin() {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[0].style.transform = me.translate3d(me.translateX, me.translateY, me.translateZ);

        me.vdom = vdom;
    }

    /**
     *
     * @param {Object} data
     */
    onClick(data) {
        this.fire(data.id === this.id ? 'containerClick' : 'itemClick', data);
    }

    /**
     *
     * @param {Object} data
     */
    onMouseWheel(data) {
        let me         = this,
            deltaX     = data.deltaX,
            deltaY     = data.deltaY,
            translateX = me.translateX,
            translateZ = me.translateZ;

        if (me.mouseWheelEnabled) {
            me._translateX = translateX - (deltaX * me.mouseWheelDeltaX); // silent update
            me._translateZ = translateZ + (deltaY * me.mouseWheelDeltaY); // silent update

            me.moveOrigin();

            me.fire('changeTranslateX', me._translateX);
            me.fire('changeTranslateZ', me._translateZ);
        }
    }

    /**
     *
     * @param {Array} value
     */
    onSelectionChange(value) {
        let me             = this,
            index          = me.store.indexOf(value && value[0] || 0),
            imageHeight    = me.imageHeight,
            imageWidth     = me.imageWidth,
            vdom           = me.vdom,
            camera         = vdom.cn[0].cn[0],
            dollyTransform = me.getCameraTransformForCell(index),
            height         = me.offsetHeight / (me.amountRows + 2),
            width          = Math.round(height * imageWidth / imageHeight),
            spacing        = width + 10,
            timeoutId;

        me.transitionTimeouts.forEach(item => {
            clearTimeout(item);
        });

        me.transitionTimeouts.splice(0, me.transitionTimeouts.length);

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: me.appName,
            deltas : {
                id   : me.id + '__' + 'dolly',
                style: {
                    transform: me.translate3d(...dollyTransform)
                }
            }
        }).then(() => {
            Neo.currentWorker.promiseMessage('main', {
                action    : 'readDom',
                appName   : me.appName,
                vnodeId   : me.id,
                functions : [
                    {
                        fn            : 'getComputedStyle',
                        params        : [me.id + '__' + 'dolly', null],
                        paramIsDomNode: [true, false],
                        scope         : 'defaultView',
                        returnFnName  : 'transform',
                        returnValue   : 'transform'
                    }
                ]
            }).then(data => {
                let transform = data.functions.transform,
                    translateX, angle;

                if (transform.indexOf('matrix3d') === 0) {
                    transform = transform.substring(9, transform.length - 1); // remove matrix3d( ... )
                    transform = transform.split(',').map(e => parseFloat(e));
                    translateX = transform[12]; // bottom left element of the 4x4 matrix
                } else {
                    transform = transform.substring(7, transform.length - 1); // remove matrix( ... )
                    transform = transform.split(',').map(e => parseFloat(e));
                    translateX = transform[4]; // bottom left element of the 2x3 matrix
                }

                translateX = translateX - dollyTransform[0];
                angle      = Math.min(Math.max(translateX / (spacing * 3), -1), 1) * 45;

                camera.style.transform          = 'rotateY(' + angle + 'deg)';
                camera.style.transitionDuration = '330ms';

                me.vdom = vdom;

                timeoutId = setTimeout(() => {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].remove(me.transitionTimeouts, timeoutId);

                    vdom = me.vdom;

                    camera.style.transform          = 'rotateY(0deg)';
                    camera.style.transitionDuration = '5000ms';

                    me.vdom = vdom;
                }, 330);

                me.transitionTimeouts.push(timeoutId);
            });
        });
    }

    /**
     *
     */
    onSort() {
        if (this[itemsMounted] === true) {
            let me        = this,
                hasChange = false,
                items     = [...me.store.items || []],
                newCn     = [],
                vdom      = me.vdom,
                view      = me.getItemsRoot(),
                vdomMap   = view.cn.map(e => e.id),
                fromIndex, vdomId;

            items.length = Math.min(me.maxItems, me.store.getCount());

            if (items.length > 0) {
                items.forEach((item, index) => {
                    vdomId    = me.getItemVnodeId(item[me.keyProperty]);
                    fromIndex = vdomMap.indexOf(vdomId);

                    newCn.push(view.cn[fromIndex]);

                    if (index !== fromIndex) {
                        hasChange = true;
                    }
                });

                if (hasChange) {
                    view.cn = newCn;
                    me.vdom = vdom;

                    setTimeout(() => {
                        me.afterSetOrderByRow(me.orderByRow, !me.orderByRow);
                    }, 50);
                }
            }
        }
    }

    /**
     *
     * @param {Array} items
     */
    onStoreLoad(items) {
        this.getItemsRoot().cn = []; // silent update
        this.createItems();
    }

    /**
     *
     */
    refreshImageReflection() {
        let me               = this,
            amountRows       = me.amountRows,
            orderByRow       = me.orderByRow,
            secondLastColumn = amountRows - 1,
            vdom             = me.vdom,
            view             = me.getItemsRoot(),
            amountColumns;

        if (orderByRow) {
            amountColumns = Math.ceil(Math.min(me.maxItems, me.store.getCount()) / amountRows);
        }

        view.cn.forEach((item, index) => {
            if (orderByRow) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][index >= secondLastColumn * amountColumns ? 'add' : 'remove'](item.cls, 'neo-reflection');
            } else {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][index % amountRows === secondLastColumn   ? 'add' : 'remove'](item.cls, 'neo-reflection');
            }
        });

        me.vdom = vdom;
    }

    /**
     *
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @returns {String}
     */
    translate3d(x, y, z) {
        return 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)';
    }
}

Neo.applyClassConfig(Gallery);



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
         * @protected
         */
        className: 'Neo.component.Label',
        /**
         * @member {String} ntype='label'
         * @protected
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
            tag      : 'label',
            draggable: false
        }
    }}

    /**
     * Triggered after the text config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
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
         * @protected
         */
        className: 'Neo.container.Base',
        /**
         * @member {String} ntype='container'
         * @protected
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
         * import Button      from '../button/Base.mjs';
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

        // avoid any interference on prototype level
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
     * Triggered after the appName config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetAppName(value, oldValue) {
        if (value && this.items) {
            this.items.forEach(item => {
                if (Neo.isObject(item)) {
                    item.appName = value;
                }
            });
        }
    }

    /**
     *
     * @param {Neo.layout.Base} value
     * @param {Neo.layout.Base} oldValue
     * @protected
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
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (oldValue !== undefined) {
            let items = this.items,
                i     = 0,
                len   = items.length;

            for (; i < len; i++) {
                if (!items[i].vdom.removeDom) {
                    items[i].mounted = value;
                }
            }
        }
    }

    /**
     * Triggered after the rendering config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetRendering(value, oldValue) {
        if (oldValue !== undefined) {
            let items = this.items,
                i     = 0,
                len   = items.length;

            for (; i < len; i++) {
                if (!items[i].vdom.removeDom) {
                    items[i].rendering = value;
                }
            }
        }
    }

    /**
     *
     * @param {Object|String} value
     * @returns {Neo.layout.Base}
     * @protected
     */
    beforeSetLayout(value) {
        return this.createLayout(value);
    }

    /**
     *
     * @protected
     */
    createItems() {
        let me       = this,
            items    = me._items,
            defaults = me.itemDefaults,
            layout   = me.layout,
            vdom     = me.vdom,
            vdomRoot = me.getVdomRoot();

        vdomRoot.cn = [];

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
     * @protected
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
     * @param {Boolean} [updateParentVdom=false] true to remove the component from the parent vdom => real dom
     * @param {Boolean} [silent=false] true to update the vdom silently (useful for destroying multiple child items in a row)
     */
    destroy(updateParentVdom=false, silent=false) {
        this.items.forEach(item => {
            item.destroy(false, true);
        });

        super.destroy(updateParentVdom, silent);
    }

    /**
     * Finds the index of a direct child component inside this.items.
     * @param {Neo.component.Base|String} itemId Either the item reference or the item id
     * @returns {Number} -1 in case no match was found
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
            if (!(item instanceof Neo.component.Base)) {
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
            } else {
                Object.assign(item, {
                    appName    : me.appName,
                    parentId   : me.id,
                    parentIndex: index
                });
            }

            // added the true param => for card layouts, we do not want a dynamically inserted cmp to get removed right away
            // since it will most likely get activated right away
            me.layout.applyChildAttributes(item, index, true);

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

        console.log('moveTo', currentIndex);
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
     * @protected
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
     * Removes a container item by reference
     * @param {Neo.component.Base} component
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    remove(component, destroyItem=true, silent=false) {
        let items = [...this.items],
            i     = 0,
            len   = items.length;

        for (; i < len; i++) {
            if (items[i].id === component.id) {
                this.removeAt(i, destroyItem, silent);
            }
        }
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

            me[silent && !destroyItem ? '_vdom' : 'vdom'] = vdom;

            if (destroyItem) {
                item.destroy(true);
            } else {
                item.mounted = false;
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

/***/ "./node_modules/neo.mjs/src/container/Panel.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/container/Panel.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Panel; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");



/**
 * An extended Container supporting multiple docked header toolbars
 * @class Neo.container.Panel
 * @extends Neo.container.Base
 */
class Panel extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.container.Panel'
         * @protected
         */
        className: 'Neo.container.Panel',
        /**
         * @member {String} ntype='panel'
         * @protected
         */
        ntype: 'panel',
        /**
         * @member {String[]} cls=['neo-panel', 'neo-container']
         */
        cls: ['neo-panel', 'neo-container'],
        /**
         * @member {Object} containerConfig=null
         */
        containerConfig: null,
        /**
         * @member {Object} headerDefaults=null
         */
        headerDefaults: null,
        /**
         * @member {Array} headers=null
         */
        headers: null,
        /**
         * @member {Object} items={ntype: 'vbox', align: 'stretch'}
         */
        _layout: {
            ntype: 'vbox',
            align: 'stretch'
        },
        /**
         * @member {Boolean} verticalHeadersFirst=false
         */
        verticalHeadersFirst: false
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this,
            hf = config && config.verticalHeadersFirst === true || me.verticalHeadersFirst === true;

        if (hf) {
            me.layout = {
                ntype: 'hbox',
                align: 'stretch'
            };
        }
    }

    /**
     *
     */
    createItems() {
        let me                   = this,
            hf                   = me.verticalHeadersFirst === false,
            headers              = me.headers || [],
            bottomHeaders        = headers.filter(header => {return header.dock === (hf ?'bottom': 'right')}),
            leftHeaders          = headers.filter(header => {return header.dock === (hf ?'left'  : 'top')}),
            rightHeaders         = headers.filter(header => {return header.dock === (hf ?'right' : 'bottom')}),
            topHeaders           = headers.filter(header => {return header.dock === (hf ?'top'   : 'left')}),
            hasHorizontalHeaders = bottomHeaders.length > 0 || topHeaders  .length > 0,
            hasVerticalHeaders   = leftHeaders  .length > 0 || rightHeaders.length > 0,
            items                = me.items,
            horizontalItems      = [],
            verticalItems        = [],
            config;

        if (headers.length < 1) {
            Neo.error('Panel without headers, please use a Container instead', me.id);
        }

        topHeaders.forEach(header => {
            verticalItems.push(Panel.createHeaderConfig(header));
        });

        if (hasVerticalHeaders && (hf && hasHorizontalHeaders || !hf && hasHorizontalHeaders)) {
            leftHeaders.forEach(header => {
                horizontalItems.push(Panel.createHeaderConfig(header));
            });

            config = {
                ntype       : 'container',
                flex        : 1,
                items       : items,
                itemDefaults: me.itemDefaults,
                ...me.containerConfig || {}
            };

            horizontalItems.push({...me.headerDefaults, ...config});

            rightHeaders.forEach(header => {
                horizontalItems.push(Panel.createHeaderConfig(header));
            });

            verticalItems.push({
                ntype : 'container',
                items : horizontalItems,
                layout: {
                    ntype: (hf ? 'hbox' : 'vbox'),
                    align: 'stretch'
                }
            });
        } else {
            config = {
                ntype       : 'container',
                flex        : 1,
                items       : items,
                itemDefaults: me.itemDefaults,
                ...me.containerConfig || {}
            };

            verticalItems.push({...me.headerDefaults, ...config});
        }

        bottomHeaders.forEach(header => {
            verticalItems.push(Panel.createHeaderConfig(header));
        });

        me.items = verticalItems;

        me.itemDefaults = null;

        super.createItems();
    }

    /**
     *
     * @param {Object} header the header config
     * @returns {Object}
     */
    static createHeaderConfig(header) {
        let config = {
            ntype: 'toolbar',
            flex : '0 1 auto'
        };

        if (header.text) {
            config.items = [
                {
                    ntype: 'label',
                    cls  : ['neo-panel-header-text', 'neo-label'],
                    text : header.text
                }
            ];

            delete header.text;
        }

        // assuming all labels inside a Panel Header are meant to be titles -> look the same way
        if (Neo.isArray(header.items)) {
            header.items.forEach(item => {
                if (item.ntype === 'label') {
                    item.cls = ['neo-panel-header-text', 'neo-label'];
                }
            });
        }

        return {...config, ...header};
    }
}

Neo.applyClassConfig(Panel);



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
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
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
         * @protected
         */
        className: 'Neo.container.Toolbar',
        /**
         * @member {String} ntype='toolbar'
         * @protected
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
     * @protected
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
     * @protected
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
         * @protected
         */
        className: 'Neo.container.Viewport',
        /**
         * @member {String} ntype='viewport'
         * @protected
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
            Neo.main.DomAccess.applyBodyCls({
                appName: this.appName,
                cls    : ['neo-body-viewport']
            });
        }
    }
}

Neo.applyClassConfig(Viewport);



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
 * The base class for (almost) all classes inside the Neo namespace
 * Exceptions are e.g. core.IdGenerator, vdom.VNode
 * @class Neo.core.Base
 */
class Base {
    /**
     * The return value will get applied to the class constructor
     * @returns {Object} staticConfig
     * @static
     * @tutorial 02_ClassSystem
     */
    static getStaticConfig() {return {
        /**
         * Set this one to false in case you don't want to stick
         * to the "anti-pattern" to apply classes to the global Neo or App namespace
         * @member {Boolean} registerToGlobalNs=true
         * @protected
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
         * @protected
         */
        className: 'Neo.core.Base',
        /**
         * The class shortcut-name to use for e.g. creating child components inside a JSON-format
         * @member {String} ntype='base'
         * @protected
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
     * @param {Array|String} [staticName=name + 's'] name of the static config array
     * @returns {String|Number} value or oldValue
     */
    beforeSetEnumValue(value, oldValue, name, staticName = name + 's') {
        const values = Array.isArray(staticName) ? staticName : this.getStaticConfig(staticName);

        if (!values.includes(value)) {
            Neo.logError('Supported values for ' + name + ' are:', values.join(', '), this);
            return oldValue;
        }

        return value;
    }

    /**
     * Uses the IdGenerator to create an id if a static one is not explicitly set.
     * Registers the instance to manager.Instance if this one is already created,
     * otherwise stores it inside a tmp map.
     * @param {String} id
     */
    createId(id) {
        let me = this;

        me.id = id || _IdGenerator_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].getId(me.getIdKey());

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
        } else if (Neo.idMap) {
            delete Neo.idMap[me.id];
        }

        Object.keys(me).forEach(key => {
            if (Object.getOwnPropertyDescriptor(me, key).writable) {
                delete me[key];
            }
        });
    }

    /**
     * Used inside createId() as the default value passed to the IdGenerator.
     * Override this method as needed.
     * @returns {String}
     */
    getIdKey() {
        return this.ntype;
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
     * Does get triggered with a delay to ensure that Neo.workerId & Neo.worker.Manager are defined
     * Remote method access via promises
     */
    initRemote() {
        let me            = this,
            remote        = me.remote,
            className     = me.className,
            currentWorker = Neo.currentWorker,
            listenerId;

        if (!me.singleton) {
            throw new Error('Remote method access only functional for Singleton classes ' + className);
        }

        if (!Neo.config.unitTestMode && Neo.isObject(remote)) {
            if (Neo.workerId !== 'main' && currentWorker.isSharedWorker && !currentWorker.isConnected) {
                listenerId = currentWorker.on('connected', () => {
                    currentWorker.un('connected', listenerId);
                    Base.sendRemotes(className, remote);
                });
            } else {
                Base.sendRemotes(className, remote);
            }
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
     * When using set(), configs without a trailing underscore can already be assigned,
     * so the hasOwnProperty() check will return true
     * @param {Boolean} [forceAssign=false]
     */
    processConfigs(forceAssign=false) {
        let me   = this,
            keys = Object.keys(me[configSymbol]);

        // We do not want to iterate over the keys, since 1 config can remove more than 1 key (beforeSetX, afterSetX)
        if (keys.length > 0) {
            // The hasOwnProperty check is intended for configs without a trailing underscore
            // => they could already got assigned inside an afterSet-method
            if (forceAssign || !me.hasOwnProperty(keys[0])) {
                me[keys[0]] = me[configSymbol][keys[0]];
            }

            // there is a delete call inside the config getter as well (Neo.mjs => autoGenerateGetSet())
            // we need to keep this one for configs, which do not use getters (no trailing underscore)
            delete me[configSymbol][keys[0]];

            me.processConfigs(forceAssign);
        }
    }

    /**
     *
     * @param {String} className
     * @param {Object} remote
     */
    static sendRemotes(className, remote) {
        let origin;

        Object.entries(remote).forEach(([worker, methods]) => {
            if (Neo.workerId !== worker) {
                origin = Neo.workerId === 'main' ? Neo.worker.Manager : Neo.currentWorker;

                origin.sendMessage(worker, {
                    action   : 'registerRemote',
                    methods  : methods,
                    className: className
                });
            }
        });
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

        me.processConfigs(true);
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
     * `Neo.create('Neo.button.Base').toString() => "[object Neo.button.Base (neo-button-1)]"`
     * @returns {String}
     */
    get [Symbol.toStringTag]() {
        return `${this.className} (id: ${this.id})`;
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
         * @protected
         * @static
         */
        registerToGlobalNs: true
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.IdGenerator'
         * @protected
         */
        className: 'Neo.core.IdGenerator',
        /**
         * @member {String} ntype='id-generator'
         * @protected
         */
        ntype: 'id-generator',
        /**
         * The default prefix for neo instance ids
         * @member {String} base='neo-'
         */
        base: 'neo-',
        /**
         * @member {Boolean} singleton='true
         * @protected
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
         * @protected
         */
        className: 'Neo.core.Logger',
        /**
         * @member {String} ntype='logger'
         * @protected
         */
        ntype: 'logger',
        /**
         * Set this config to false to disable the logging
         * @member {boolean} enableLogs=true
         */
        enableLogs: true,
        /**
         * @member {String} level='log'
         * @protected
         */
        level: 'log',
        /**
         * @member {boolean} enableLogs=true
         * @protected
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
     * @protected
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
         * @protected
         */
        className: 'Neo.core.Observable',
        /**
         * @member {String} ntype='mixin-observable'
         * @protected
         */
        ntype: 'mixin-observable',
        /**
         * @member {Boolean} mixin=true
         * @protected
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
            if (Neo.isObject(listeners)) {
                listeners = {...listeners};
            }

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
         * @protected
         * @static
         */
        decamelRegEx: /([a-z])([A-Z])/g
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.core.Util'
         * @protected
         */
        className: 'Neo.core.Util',
        /**
         * @member {String} ntype='core-util'
         * @protected
         */
        ntype: 'core-util',
    }}

    /**
     *
     * @param {Object} scope
     * @param {String[]} values
     */
    static bindMethods(scope, values) {
        values.forEach(value => {
            scope[value] = scope[value].bind(scope);
        });
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
     * Converts a styles object which can use camelcase syntax into a styles string
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
     * Transforms all uppercase characters of a string into lowercase.
     * Does not touch special characters.
     * @param {String} value The input containing uppercase characters
     * @returns {String} The lowercase output
     */
    static decamel(value) {
        return value.replace(Util.decamelRegEx, '$1-$2').toLowerCase();
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

        if (value instanceof Date) {
            return false;
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
    bindMethods      : 'bindMethods',
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

/***/ "./node_modules/neo.mjs/src/data/Model.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/data/Model.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.data.Model
 * @extends Neo.core.Base
 */
class Model extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.data.Model'
         * @protected
         */
        className: 'Neo.data.Model',
        /**
         * @member {String} ntype='model'
         * @protected
         */
        ntype: 'model',
        /**
         * @member {Array} fields_=[]
         * @protected
         */
        fields_: [],
        /**
         * @member {String} keyProperty_='id'
         * @protected
         */
        keyProperty_: 'id',
        /**
         * @member {String|null} storeId=null
         * @protected
         */
        storeId: null,
        /**
         * Set this config to true in case you want to track modified fields.
         * Be aware that this will double the amount of data inside each record,
         * since each field will get an original value flag.
         * @member {Boolean} trackModifiedFields=false
         */
        trackModifiedFields: false
    }}

    /**
     *
     * @param {Array} value
     * @param {Array} oldValue
     */
    afterSetFields(value, oldValue) {
        // todo
        // console.log('afterSetFields', value, oldValue);
    }

    /**
     * Finds a field config by a given field name
     * @param {String} key
     * @returns {Object|null} The field config object or null if no match was found
     */
    getField(key) {
        let me  = this,
            i   = 0,
            len = me.fields.length;

        for (; i < len; i++) {
            if (me.fields[i].name === key) {
                return me.fields[i];
            }
        }

        return null;
    }
}

Neo.applyClassConfig(Model);



/***/ }),

/***/ "./node_modules/neo.mjs/src/data/RecordFactory.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/data/RecordFactory.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");




let instance;

/**
 * @class Neo.data.RecordFactory
 * @extends Neo.core.Base
 * @singleton
 */
class RecordFactory extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.data.RecordFactory'
         * @protected
         */
        className: 'Neo.data.RecordFactory',
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true,
        /**
         * The internal record prefix for original field values.
         * Only used in case the model has trackModifiedFields set to true.
         * @member {String} ovPrefix='ov_'
         */
        ovPrefix: 'ov_',
        /**
         * @member {String} recordNamespace='Neo.data.record.'
         */
        recordNamespace: 'Neo.data.record.'
    }}

    /**
     *
     * @param {Neo.data.Model} model
     * @param {Object} config
     * @returns {Object}
     */
    createRecord(model, config) {
        let recordClass = Neo.ns(this.recordNamespace + model.className);

        if (!recordClass) {
            recordClass = this.createRecordClass(model);
        }

        return new recordClass(config);
    }

    /**
     *
     * @param {Neo.data.Model} model
     * @returns {Object}
     */
    createRecordClass(model) {
        if (model instanceof _Model_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]) {
            let className = this.recordNamespace + model.className,
                ns        = Neo.ns(className),
                key, nsArray;

            model.trackModifiedFields = true; // todo: remove, just for testing

            if (!ns) {
                nsArray = className.split('.');
                key     = nsArray.pop();
                ns      = Neo.ns(nsArray, true);
                ns[key] = class Record {
                    constructor(config) {
                        let me = this,
                            properties;

                        Object.defineProperties(me, {
                            _isModified: {
                                value   : false,
                                writable: true
                            }
                        });

                        if (Array.isArray(model.fields)) {
                            model.fields.forEach(field => {
                                let parsedValue = instance.parseRecordValue(field, config[field.name]),
                                    symbol      = Symbol(field.name);

                                properties = {
                                    [symbol]: {
                                        value   : parsedValue,
                                        writable: true
                                    },
                                    [field.name]: {
                                        configurable: true,
                                        enumerable  : true,
                                        get() {
                                            return this[symbol];
                                        },
                                        set(value) {
                                            let me       = this,
                                                oldValue = me[symbol];

                                            if (instance.hasChanged(value, oldValue)) {
                                                value = instance.parseRecordValue(field, value);

                                                me[symbol] = value;

                                                me._isModified = true;
                                                me._isModified = instance.isModified(me, model.trackModifiedFields);

                                                instance.onRecordChange({
                                                    field   : field.name,
                                                    model   : model,
                                                    oldValue: oldValue,
                                                    record  : me,
                                                    value   : value
                                                });
                                            }
                                        }
                                    }
                                };

                                // adding the original value of each field
                                if (model.trackModifiedFields) {
                                    properties[instance.ovPrefix + field.name] = {
                                        value: parsedValue
                                    }
                                }

                                Object.defineProperties(me, properties);
                            });
                        }
                    }
                };


                return ns[key];
            }

            return ns;
        }
    }

    /**
     * Checks if the value of a config has changed
     * todo: we could compare objects & arrays for equality
     * @param {*} value
     * @param {*} oldValue
     * @returns {Boolean}
     * @private
     */
    hasChanged(value, oldValue) {
        if (Array.isArray(value)) {
            return true;
        } else if (Neo.isObject(value)) {
            if (oldValue instanceof Date && value instanceof Date) {
                return oldValue.valueOf() !== value.valueOf();
            }

            return true;
        }

        return oldValue !== value;
    }

    /**
     *
     * @param {Object} record
     * @param {Boolean} trackModifiedFields
     * @returns {Boolean} true in case a change was found
     */
    isModified(record, trackModifiedFields) {
        if (trackModifiedFields) {
            let fields = Object.keys(record),
                i      = 0,
                len    = fields.length,
                field;

            for (; i < len; i++) {
                field = fields[i];

                if (record[field] !== record[this.ovPrefix + field]) {
                    return true;
                }
            }

            return false;
        }

        return record._isModified;
    }

    /**
     *
     * @param {Object} record
     * @param {String} fieldName
     * @returns {Boolean|null} null in case the model does not use trackModifiedFields, true in case a change was found
     */
    isModifiedField(record, fieldName) {
        if (!record.hasOwnProperty(fieldName)) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].logError('The record does not contain the field', fieldName, record);
        }

        if (record.hasOwnProperty(this.ovPrefix + fieldName)) {
            return record[fieldName] !== record[this.ovPrefix + fieldName];
        }

        return null;
    }

    /**
     * Tests if a given object is an instance of a class created by this factory
     * @param {Object} obj
     * @returns {Boolean}
     */
    isRecord(obj) {
        return obj && obj.constructor && obj.constructor.name && obj.constructor.name === 'Record';
    }

    /**
     * Gets triggered after changing the value of a record field.
     * E.g. myRecord.foo = 'bar';
     * @param {Object} opts
     * @param {String} opts.field The name of the field which got changed
     * @param {Neo.data.Model} opts.model The model instance of the changed record
     * @param {*} opts.oldValue
     * @param {Object} opts.record
     * @param {*} opts.value
     */
    onRecordChange(opts) {
        let store = Neo.get(opts.model.storeId);

        if (store) {
            store.onRecordChange(opts);
        }
    }

    /**
     * todo: parse value for more field types
     * @param {Object} field
     * @param {*} value
     * @returns {*}
     */
    parseRecordValue(field, value) {
        const type = field.type && field.type.toLowerCase();

        if (type === 'date') {
            return new Date(value);
        }

        return value;
    }
}

Neo.applyClassConfig(RecordFactory);

instance = Neo.create(RecordFactory);

Neo.applyToGlobalNs(instance);

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./node_modules/neo.mjs/src/data/Store.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/data/Store.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");
/* harmony import */ var _RecordFactory_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RecordFactory.mjs */ "./node_modules/neo.mjs/src/data/RecordFactory.mjs");






/**
 * @class Neo.data.Store
 * @extends Neo.collection.Base
 */
class Store extends _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='Neo.data.Store'
         * @protected
         */
        className: 'Neo.data.Store',
        /**
         * @member {String} ntype='store'
         * @protected
         */
        ntype: 'store',
        /**
         * @member {Boolean} autoLoad=false
         */
        autoLoad: false,
        /**
         * @member {Array|null} data_=null
         */
        data_: null,
        /**
         * @member {Array|null} initialData_=null
         */
        initialData_: null,
        /**
         * @member {Boolean} isGrouped=false
         */
        isGrouped: false,
        /**
         * @member {Boolean} isLoaded=false
         */
        isLoaded: false,
        /**
         * @member {Boolean} isLoading=false
         */
        isLoading: false,
        /**
         * @member {Neo.data.Model} model_=null
         */
        model_: null,
        /**
         * True to let the backend handle the filtering.
         * Useful for buffered stores
         * @member {Boolean} remoteFilter=false
         */
        remoteFilter: false,
        /**
         * True to let the backend handle the sorting.
         * Useful for buffered stores
         * @member {Boolean} remoteSort=false
         */
        remoteSort: false,
        /**
         * Url for Ajax requests
         * @member {String|null} url=null
         */
        url: null
    }}

    constructor(config) {
        super(config);

        let me = this;

        // todo
        me.on({
            mutate: me.onCollectionMutate,
            sort  : me.onCollectionSort,
            scope : me
        });
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.data) {
            me.afterSetData(me.data);
        }

        if (me.autoLoad) {
            setTimeout(() => { // todo
                me.load();
            }, 100);
        }
    }

    /**
     *
     * @param value
     * @param oldValue
     * @protected
     */
    afterSetData(value, oldValue) {
        let me = this;

        if (me.configsApplied) {
            if (value) {
                if (oldValue) {
                    me.clear();
                } else {
                    me.initialData = [...value];
                }

                me.add(value);
            }
        }
    }

    /**
     *
     * @param value
     * @param oldValue
     * @protected
     */
    afterSetInitialData(value, oldValue) {
        // console.log('afterSetInitialData', value, oldValue);
    }

    /**
     *
     * @param value
     * @param oldValue
     * @protected
     */
    afterSetModel(value, oldValue) {
        if (value) {
            value.storeId = this.id;
            _RecordFactory_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].createRecordClass(value);
        }
    }

    /**
     *
     * @param value
     * @param oldValue
     * @protected
     * @returns {*}
     */
    beforeSetData(value, oldValue) {
        let me = this;

        if (value) {
            if (!Array.isArray(value)) {
                value = [value];
            }

            // todo: add a config to make the cloning optional
            value = Neo.clone(value, true);

            value.forEach((key, index) => {
                if (!_RecordFactory_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].isRecord(key)) {
                    value[index] = _RecordFactory_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].createRecord(me.model, key);
                }
            });

            // console.log('beforeSetData', value);
        }

        return value;
    }

    /**
     *
     * @param value
     * @param oldValue
     * @protected
     * @returns {*}
     */
    beforeSetInitialData(value, oldValue) {
        if (!value && oldValue) {
            return oldValue;
        }

        return value;
    }

    /**
     *
     * @param {Neo.data.Model} value
     * @param {Neo.data.Model} oldValue
     * @protected
     * @returns {Neo.data.Model}
     */
    beforeSetModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].beforeSetInstance(value, _Model_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }

    /**
     *
     * @param {Object} config
     */
    createRecord(config) {
        _RecordFactory_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].createRecord(config);
    }

    load() {
        let me = this;

        Neo.Xhr.promiseJson({
            url: me.url
        }).then(data => {
            me.data = Array.isArray(data.json) ? data.json : data.json.data;
            // we do not need to fire a load event => onCollectionMutate()
        }).catch(err => {
            console.log('Error for Neo.Xhr.request', err, me.id);
        });
    }

    /**
     *
     * @param {Object} opts
     */
    onCollectionMutate(opts) {
        let me = this;

        if (me.configsApplied) {
            // console.log('onCollectionMutate', opts);
            me.fire('load', me.items);
        }
    }

    /**
     * todo: add will fire mutate and sort right after another
     */
    onCollectionSort() {
        let me = this;

        if (me.configsApplied) {
            // console.log('onCollectionSort', me.collection.items);
            // me.fire('load', me.items);
        }
    }

    /**
     * Gets triggered after changing the value of a record field.
     * E.g. myRecord.foo = 'bar';
     * @param {Object} opts
     * @param {String} opts.field The name of the field which got changed
     * @param {Neo.data.Model} opts.model The model instance of the changed record
     * @param {*} opts.oldValue
     * @param {Object} opts.record
     * @param {*} opts.value
     */
    onRecordChange(opts) {
        this.fire('recordChange', opts);
    }

    /**
     *
     * @param {Object} opts
     * @param {String} opts.direction
     * @param {String} opts.property
     */
    sort(opts={}) {
        let me = this;

        if (me.remoteSort) {
            // todo
        } else {
            // console.log('sort', opts.property, opts.direction, me.configsApplied);

            if (me.configsApplied) {
                if (opts.direction) {
                    me.sorters = [{
                        direction: opts.direction,
                        property : opts.property
                    }];
                } else {
                    me.startUpdate();
                    me.clear();
                    me.sorters = [];
                    me.add([...me.initialData]);
                    me.endUpdate();
                    me.fire('sort');
                }
            }
        }
    }
}

Neo.applyClassConfig(Store);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Base.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Base.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * Abstract base class for form fields
 * @class Neo.form.field.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Base'
         * @protected
         */
        className: 'Neo.form.field.Base',
        /**
         * @member {String} ntype='basefield'
         * @protected
         */
        ntype: 'basefield',
        /**
         * @member {*} value_=null
         */
        value_: null
    }}

    /**
     * Triggered after the value config got changed
     * @param {*} value
     * @param {*} oldValue
     */
    afterSetValue(value, oldValue) {
        if (oldValue !== undefined) {
            this.fire('change', {
                component: this,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     *
     * @returns {*} this.value
     */
    getSubmitValue() {
        return this.value;
    }

    /**
     *
     * @returns {Boolean}
     */
    isValid() {
        return true;
    }
}

/**
 * The change event fires after the value config gets changed
 * @event change
 * @param {*} value
 * @param {*} oldValue
 * @returns {Object}
 */

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Number.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Number.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Number; });
/* harmony import */ var _trigger_SpinDown_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trigger/SpinDown.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/SpinDown.mjs");
/* harmony import */ var _trigger_SpinUp_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger/SpinUp.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/SpinUp.mjs");
/* harmony import */ var _trigger_SpinUpDown_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger/SpinUpDown.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/SpinUpDown.mjs");
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");





/**
 * Uses an input type number and optionally provides custom spin buttons for up and down
 * @class Neo.form.field.Number
 * @extends Neo.form.field.Text
 */
class Number extends _Text_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for triggerPosition
         * @member {String[]} triggerPositions=['right', 'sides']
         * @protected
         * @static
         */
        triggerPositions: ['right', 'sides']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Number'
         * @protected
         */
        className: 'Neo.form.field.Number',
        /**
         * @member {String} ntype='numberfield'
         * @protected
         */
        ntype: 'numberfield',
        /**
         * @member {Array} cls=['neo-numberfield', 'neo-textfield']
         */
        cls: ['neo-numberfield', 'neo-textfield'],
        /**
         * @member {Number[]|null} excluded=null
         */
        excludedValues: null,
        /**
         * false only allows changing the field using the spin buttons
         * @member {Boolean} inputEditable_=true
         */
        inputEditable_: true,
        /**
         * Value for the inputType_ textfield config
         * @member {String} inputType='number'
         */
        inputType: 'number',
        /**
         * @member {Number} maxValue_=100
         */
        maxValue_: 100,
        /**
         * @member {Number} minValue_=0
         */
        minValue_: 0,
        /**
         * @member {Number} stepSize_=1
         */
        stepSize_: 1,
        /**
         * Valid values: 'right', 'sides'
         * @member {String} triggerPosition='right'
         */
        triggerPosition_: 'right',
        /**
         * @member {Boolean} useSpinButtons_=true
         */
        useSpinButtons_: true
    }}

    /**
     *
     */
    onConstructed() {
        this.updateTriggers();
        super.onConstructed();
    }

    /**
     * Triggered after the inputEditable config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetInputEditable(value, oldValue) {
        let me      = this,
            vdom    = me.vdom,
            inputEl = me.getInputEl(),
            style   = inputEl.style || {};

        if (value) {
            delete style.pointerEvents;
        } else {
            style.pointerEvents = 'none';
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the maxValue config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaxValue(value, oldValue) {
        this.changeInputElKey('max', value);
    }

    /**
     * Triggered after the minValue config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMinValue(value, oldValue) {
        this.changeInputElKey('min', value);
    }

    /**
     * Triggered after the stepSize config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetStepSize(value, oldValue) {
        let me  = this,
            val = me.value,
            modulo;

        me.changeInputElKey('step', value);

        if (val !== null) {
            modulo = (val - me.minValue) % value;

            if (modulo !== 0) { // find the closest valid value
                if (modulo / value > 0.5) {
                    if      (val + value - modulo < me.maxValue) {me.value = val + value - modulo;}
                    else if (val - modulo > me.minValue)         {me.value = val - modulo;}
                } else {
                    if      (val - modulo > me.minValue)         {me.value = val - modulo;}
                    else if (val + value - modulo < me.maxValue) {me.value = val + value - modulo;}
                }
            }
        }
    }

    /**
     * Triggered after the triggerPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTriggerPosition(value, oldValue) {
        if (oldValue) {
            this.updateTriggers();
        }
    }

    /**
     * Triggered after the useSpinButtons config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseSpinButtons(value, oldValue) {
        if (typeof oldValue === 'boolean') {
            this.updateTriggers();
        }
    }

    /**
     * Triggered before the triggerPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetTriggerPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'triggerPosition');
    }

    /**
     * @param {Object} data
     * @override
     */
    onInputValueChange(data) {
        let me       = this,
            value    = data.value,
            oldValue = me.value;

        if (!value && !me.required) {
            super.onInputValueChange(data);
        } else {
            value = parseInt(value); // todo: support for other number types

            if (!Neo.isNumber(value)) {
                me._value = oldValue;
            } else {
                value = value - value % me.stepSize;
                value = Math.max(me.minValue, value);
                value = Math.min(me.maxValue, value);

                data.value = value;

                super.onInputValueChange(data);
            }
        }
    }

    /**
     * @protected
     */
    onSpinButtonDownClick() {
        let me       = this,
            oldValue = me.value || (me.maxValue + me.stepSize),
            value    = Math.max(me.minValue, oldValue - me.stepSize);

        if (me.excludedValues) {
            while(me.excludedValues.includes(value)) {
                value = Math.max(me.minValue, value - me.stepSize);
            }
        }

        if (oldValue !== value) {
            me.value = value;
        }
    }

    /**
     * @protected
     */
    onSpinButtonUpClick() {
        let me       = this,
            oldValue = me.value || (me.minValue - me.stepSize),
            value    = Math.min(me.maxValue, oldValue + me.stepSize);

        if (me.excludedValues) {
            while(me.excludedValues.includes(value)) {
                value = Math.min(me.maxValue, value + me.stepSize);
            }
        }

        if (oldValue !== value) {
            me.value = value;
        }
    }

    /**
     *
     */
    updateTriggers() {
        let me       = this,
            triggers = me.triggers || [];

        if (me.useSpinButtons) {
            if (me.triggerPosition === 'right') {
                if (!me.hasTrigger('spinupdown')) {
                    triggers.push(_trigger_SpinUpDown_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
                }

                me.removeTrigger('spindown', true, triggers);
                me.removeTrigger('spinup',   true, triggers);
            } else {
                if (!me.hasTrigger('spindown')) {
                    triggers.push(_trigger_SpinDown_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]);
                }

                if (!me.hasTrigger('spinup')) {
                    triggers.push(_trigger_SpinUp_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
                }

                me.removeTrigger('spinupdown', true, triggers);
            }
        } else {
            me.removeTrigger('spindown',   true, triggers);
            me.removeTrigger('spinup',     true, triggers);
            me.removeTrigger('spinupdown', true, triggers);
        }

        me.triggers = triggers;
    }
}

Neo.applyClassConfig(Number);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Range.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Range.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Range; });
/* harmony import */ var _Number_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");


/**
 * @class Neo.form.field.Range
 * @extends Neo.form.field.Number
 */
class Range extends _Number_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Range'
         * @protected
         */
        className: 'Neo.form.field.Range',
        /**
         * @member {String} ntype='rangefield'
         * @protected
         */
        ntype: 'rangefield',
        /**
         * True shows a clear trigger in case the field has a non empty value.
         * @member {Boolean} clearable=false
         */
        clearable: false,
        /**
         * @member {String[]} cls=['neo-rangefield','neo-textfield']
         */
        cls: ['neo-rangefield', 'neo-textfield'],
        /**
         * Value for the inputType_ textfield config
         * @member {String} inputType='range'
         */
        inputType: 'range',
        /**
         * @member {Array} tickmarks_=[]
         */
        tickmarks_: [],
        /**
         * @member {Boolean} useInputEvent=false
         */
        useInputEvent : false,
        /**
         * Disables the field.Number buttons
         * @member {Boolean} useInputEvent=false
         */
        useSpinButtons: false
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners,
            inputEl      = me.vdom.cn[1];

        if (me.useInputEvent) {
            domListeners.push({
                input: {
                    fn    : me.onInputValueChange,
                    id    : me.vdom.cn[1].id,
                    scope : me
                }
            });

            me.domListeners = domListeners;
        }

        inputEl.cls = ['neo-rangefield-input']; // replace neo-textfield-input
    }

    /**
     * Triggered after the tickmarks config got changed
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    afterSetTickmarks(value, oldValue) {
        //console.log('updateTickmarks');
    }
}

Neo.applyClassConfig(Range);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Text.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Text.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");
/* harmony import */ var _trigger_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger/Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");
/* harmony import */ var _trigger_Clear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trigger/Clear.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Clear.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");







/**
 * @class Neo.form.field.Text
 * @extends Neo.form.field.Base
 */
class Text extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for labelPosition
         * @member {String[]} labelPositions=['bottom', 'inline', 'left', 'right', 'top']
         * @protected
         * @static
         */
        labelPositions: ['bottom', 'inline', 'left', 'right', 'top']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Text'
         * @protected
         */
        className: 'Neo.form.field.Text',
        /**
         * @member {String} ntype='textfield'
         * @protected
         */
        ntype: 'textfield',
        /**
         * Internal variable to store the actual width for the label centerBorderEl
         * (only needed for labelPosition: 'inline')
         * @member {Number|null} centerBorderElWidth=null
         * @protected
         */
        centerBorderElWidth: null,
        /**
         * True shows a clear trigger in case the field has a non empty value.
         * @member {Boolean} clearable_=true
         */
        clearable_: true,
        /**
         * True will reset the field to its initial value config.
         * Recommended for fields with required: true
         * @member {Boolean} clearToOriginalValue=false
         */
        clearToOriginalValue_: false,
        /**
         * @member {String[]} cls=['neo-textfield']
         */
        cls: ['neo-textfield'],
        /**
         * @member {Boolean} hideLabel_=false
         */
        hideLabel_: false,
        /**
         * @member {String} inputType_='text'
         */
        inputType_: 'text',
        /**
         * @member {String} labelPosition_='left'
         */
        labelPosition_: 'left',
        /**
         * @member {String} labelText_='LabelText'
         */
        labelText_: 'LabelText',
        /**
         * defaults to px
         * @member {Number|String} labelWidth_=150
         */
        labelWidth_: 150,
        /**
         * @member {String|null} placeholderText_=null
         */
        placeholderText_: null,
        /**
         * @member {Boolean} required_=false
         */
        required_: false,
        /**
         * @member {Object|Object[]|null} triggers_=null
         */
        triggers_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag  : 'label',
                cls  : ['neo-textfield-label'],
                style: {}
            }, {
                tag         : 'input',
                autocomplete: 'off',
                autocorrect : 'off',
                cls         : ['neo-textfield-input'],
                flag        : 'neo-real-input',
                spellcheck  : 'false',
                style       : {}
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = Neo.clone(me.domListeners, true, true),
            vdom         = me.vdom,
            inputEl      = me.getInputEl(),
            labelEl      = me.getLabelEl();

        inputEl.id = labelEl.for = me.id + '-input';

        me.vdom = vdom;

        domListeners.push({
            input: {
                fn   : me.onInputValueChange,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     * @param {Object} config
     * @param {Boolean} [preventOriginalConfig] True prevents the instance from getting an originalConfig property
     * @returns {Object} config
     */
    mergeConfig(...args) {
        let me       = this,
            config   = super.mergeConfig(...args),
            triggers = config.triggers || me.triggers;

        me[triggers ? 'triggers' : '_triggers'] = triggers;

        delete config.triggers;
        return config;
    }

    /**
     * Triggered after the clearable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetClearable(value, oldValue) {
        let me = this,
            triggers;

        if (value) {
            triggers = me.triggers || [];
            triggers.unshift(_trigger_Clear_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
            me.triggers = triggers;
        } else {
            me.removeTrigger('clear');
        }
    }

    /**
     * Triggered after the clearToOriginalValue config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetClearToOriginalValue(value, oldValue) {
        this.fire('changeClearToOriginalValue', {
            oldValue: oldValue,
            value   : value
        });
    }

    /**
     * Triggered after the hideLabel config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetHideLabel(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[0].removeDom = value;
        me._vdom = vdom; // silent update

        me.updateInputWidth();
    }

    /**
     * Triggered after the inputType config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputType(value, oldValue) {
        this.changeInputElKey('type', value);
    }

    /**
     * Triggered after the labelPosition config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelPosition(value, oldValue) {
        let me  = this,
            cls = me.cls,
            centerBorderElCls, isEmpty, vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].remove(cls, 'label-' + oldValue);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].add(cls, 'label-' + value);
        me[oldValue === 'inline' || value === 'inline' ? '_cls' : 'cls'] = cls; // silent update if needed

        if (oldValue === 'inline') {
            vdom = me.vdom;

            vdom.cn[0] = me.getLabelEl(); // remove the wrapper

            vdom.cn[0].width = me.labelWidth;

            me._vdom = vdom; // silent update
            me.updateInputWidth();
        } else if (value === 'inline') {
            centerBorderElCls = ['neo-center-border'];
            isEmpty           = me.isEmpty();
            vdom              = me.vdom;

            if (!isEmpty) {
                centerBorderElCls.push('neo-float-above');
            }

            delete vdom.cn[0].width;

            vdom.cn[0] = {
                cls: ['neo-label-wrapper'],
                cn : [{
                    cls: ['neo-left-border']
                }, {
                    cls: centerBorderElCls,
                    cn : [vdom.cn[0]]
                }, {
                    cls: ['neo-right-border']
                }]
            };

            me._vdom = vdom; // silent update
            me.updateInputWidth();

            if (!isEmpty) {
                setTimeout(() => {
                    me.updateCenterBorderElWidth(false);
                }, 20);
            }
        }
    }

    /**
     * Triggered after the labelText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelText(value, oldValue) {
        let me      = this,
            isEmpty = me.isEmpty(),
            vdom    = me.vdom;

        me.getLabelEl().innerHTML = value;

        if (me.hideLabel) {
            me._vdom = vdom; // silent update
        } else {
            if (me.labelPosition === 'inline') {
                if (!isEmpty) {
                    delete me.getCenterBorderEl().width;
                }

                me.promiseVdomUpdate(vdom).then(() => {
                    me.updateCenterBorderElWidth(isEmpty);
                });
            } else {
                me.vdom = vdom;
            }
        }
    }

    /**
     * Triggered after the labelWidth config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetLabelWidth(value, oldValue) {
        if (this.labelPosition !== 'inline') {
            let me    = this,
                vdom  = me.vdom,
                label = vdom.cn[0];

            label.width = value;

            me._vdom = vdom; // silent update

            if (!me.hideLabel) {
                me.updateInputWidth();
            }
        }
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value && this.labelPosition === 'inline') {
            this.updateCenterBorderElWidth();
        }
    }

    /**
     * Triggered after the placeholderText config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetPlaceholderText(value, oldValue) {
        this.changeInputElKey('placeholder', value === '' ? null : value);
    }

    /**
     * Triggered after the required config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetRequired(value, oldValue) {
        this.changeInputElKey('required', value);
    }

    /**
     * Triggered after the triggers config got changed
     * @param {Object[]} value
     * @param {Object[]} oldValue
     * @protected
     */
    afterSetTriggers(value, oldValue) {
        let me           = this,
            vdom         = me.vdom,
            inputEl      = vdom.cn[1], // inputEl or inputWrapperEl
            preTriggers  = [],
            postTriggers = [],
            width;

        // console.log(value && [...value], oldValue && [...oldValue]);

        if (oldValue) {
            oldValue.forEach(item => {
                if (!me.getTrigger(item.type)) {
                    item.destroy();
                }
            });
        }

        if (value.length > 0) {
            value.forEach(item => {
                if (item.align === 'start') {
                    preTriggers.push(item);
                } else {
                    postTriggers.push(item);
                }
            });

            postTriggers.sort((a, b) => b.weight - a.weight); // DESC
            preTriggers .sort((a, b) => a.weight - b.weight); // ASC

            postTriggers = postTriggers.map(a => a.vdom);
            preTriggers  = preTriggers .map(a => a.vdom);

            if (inputEl.tag === 'input') {
                // wrap the input tag
                vdom.cn[1] = {
                    cls  : ['neo-input-wrapper'],
                    cn   : [...preTriggers, inputEl, ...postTriggers],
                    id   : me.id + '-input-wrapper',
                    width: inputEl.width
                };

                delete inputEl.width;
            } else {
                inputEl.cn = [...preTriggers, me.getInputEl(), ...postTriggers];
            }
        } else {
            if (inputEl.tag !== 'input') {
                // replacing the input wrapper div with the input tag
                width = inputEl.width;
                vdom.cn[1] = me.getInputEl();
                vdom.cn[1].width = width;
            }
        }

        me.promiseVdomUpdate().then(() => {
            me.updateTriggerVnodes();
        });
    }

    /**
     * Triggered after the value config got changed
     * todo: add validation logic
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        super.afterSetValue(value, oldValue);

        me.getInputEl().value = value;

        if (!!value !== !!oldValue) { // change from empty to non empty
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][value && value.toString().length > 0 ? 'add' : 'remove'](me._cls, 'neo-has-content');
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][me.originalConfig.value !== value ? 'add' : 'remove'](me._cls, 'neo-is-dirty');

        me.vdom = vdom;
    }

    /**
     * Triggered after the width config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetWidth(value, oldValue) {
        super.afterSetWidth(value, oldValue);
        this.updateInputWidth();
    }

    /**
     * Return a shallow copy of the triggers config
     * @param {Array|null} value
     * @protected
     */
    beforeGetTriggers(value) {
        if (Array.isArray(value)) {
            return [...value];
        }

        return value;
    }

    /**
     * Triggered before the labelPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     * @returns {String}
     */
    beforeSetLabelPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'labelPosition');
    }

    /**
     * Triggered before the triggers config gets changed
     * @param {Object|Object[]} value
     * @param {Object[]} oldValue
     * @returns {Object[]} the parsed triggers config
     * @protected
     * @returns {Object|Object[]}
     */
    beforeSetTriggers(value, oldValue) {
        if (!value) {
            value = [];
        } else if (!Array.isArray(value)) {
            value = [value];
        }

        let me = this;

        value.forEach((item, index) => {
            if (item.isClass) {
                value[index] = Neo.create(item, {
                    id   : me.getTriggerId(item.prototype.type),
                    field: me
                });
            } else if (!(item instanceof _trigger_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])) {
                if (!item.module && !item.ntype) {
                    item.ntype = 'trigger';
                }

                if (item.module) {
                    item.className = item.module.prototype.className;
                    item.id        = me.getTriggerId(item.module.prototype.type);
                }

                value[index] = Neo[item.className ? 'create' : 'ntype']({...item, field: me});
            }
        });

        return value;
    }

    /**
     * Changes the value of a inputEl vdom object attribute or removes it in case it has no value
     * @param {String} key
     * @param {Array|Number|Object|String|null} value
     */
    changeInputElKey(key, value) {
        let me   = this,
            vdom = me.vdom;

        if (value || value === 0) {
            me.getInputEl()[key] = value;
        } else {
            delete me.getInputEl()[key];
        }

        me.vdom = vdom;
    }

    /**
     * Resets the field to its original value or null depending on the clearToOriginalValue config
     */
    clear() {
        let me = this;

        me.value = me.clearToOriginalValue ? me.originalConfig.value : null;
        me.fire('clear');
    }

    /**
     *
     * @returns {Object|null}
     */
    getCenterBorderEl() {
        let el = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, {cls: 'neo-center-border'});
        return el && el.vdom;
    }

    /**
     *
     * @returns {Object|null}
     */
    getInputEl() {
        let el = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, {flag: 'neo-real-input'});
        return el && el.vdom;
    }

    /**
     *
     * @returns {String}
     */
    getInputElId() {
        return this.id + '-input';
    }

    /**
     * Calculates the new inputWidth based on the labelWidth & total width
     * @returns {Number|null} null in case this.width is unknown
     */
    getInputWidth() {
        let me          = this,
            ignoreLabel = me.hideLabel || me.labelPosition === 'bottom' || me.labelPosition === 'inline' || me.labelPosition === 'top',
            labelWidth  = ignoreLabel ? 0 : me.labelWidth,
            width       = me.width;

        if (labelWidth && width) {
            return parseInt(width) - parseInt(labelWidth);
        } else if (width) {
            return width;
        }

        return null;
    }

    /**
     *
     * @returns {Object|null}
     */
    getLabelEl() {
        let el = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, {tag: 'label'});
        return el && el.vdom;
    }

    /**
     *
     * @param {String} type
     * @returns {Neo.form.field.trigger.Base|null}
     */
    getTrigger(type) {
        let me       = this,
            triggers = me.triggers || [],
            i        = 0,
            len      = triggers.length;

        for (; i < len; i++) {
            if (triggers[i].type === type) {
                return triggers[i];
            }
        }

        return null;
    }

    /**
     *
     * @param {String} id
     * @returns {Neo.form.field.trigger.Base|null}
     */
    getTriggerById(id) {
        let me       = this,
            triggers = me.triggers || [],
            i        = 0,
            len      = triggers.length;

        for (; i < len; i++) {
            if (triggers[i].id === id) {
                return triggers[i];
            }
        }

        return null;
    }

    /**
     *
     * @param {String} type
     * @protected
     * @returns {String} The trigger node id
     */
    getTriggerId(type) {
        return this.id + '-trigger-' + type;
    }

    /**
     * Finds a trigger by a given type config
     * @param {String} type
     * @returns {Boolean}
     */
    hasTrigger(type) {
        let triggers = this.triggers || [],
            i        = 0,
            len      = triggers.length;

        for (; i < len; i++) {
            if (triggers[i].type === type) {
                return true;
            }
        }

        return false;
    }

    /**
     *
     * @returns {Boolean}
     */
    isEmpty() {
        return !(this.value && this.value.toString().length > 0);
    }

    /**
     *
     * @returns {Boolean}
     */
    isValid() {
        let me = this;

        if (me.required && (!me.value || me.value && me.value.length < 1)) {
            return false;
        }

        return super.isValid();
    }

    /**
     *
     * @param {Array} path
     * @protected
     */
    onFocusEnter(path) {
        let me  = this,
            cls = me.cls,
            vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].add(cls, 'neo-focus');
        me.cls = cls;

        if (me.labelPosition === 'inline') {
            if (me.centerBorderElWidth) {
                vdom = me.vdom;
                me.getCenterBorderEl().width = me.centerBorderElWidth;
                me.vdom = vdom;
            } else {
                me.updateCenterBorderElWidth(false);
            }
        }
    }

    /**
     *
     * @param {Array} path
     * @protected
     */
    onFocusLeave(path) {
        let me             = this,
            centerBorderEl = me.getCenterBorderEl(), // labelPosition: 'inline'
            cls            = me.cls,
            vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].remove(cls, 'neo-focus');

        if (centerBorderEl && me.isEmpty()) {
            me._cls = cls; // silent update
            vdom = me.vdom;
            delete centerBorderEl.width;
            me.vdom = vdom;
        } else {
            me.cls = cls;
        }
    }

    /**
     * @param {Object} data
     * @protected
     */
    onInputValueChange(data) {
        let me       = this,
            value    = data.value,
            oldValue = me.value,
            vnode    = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findChildVnode(me.vnode, {nodeName: 'input'});

        if (vnode) {
            // required for validation -> revert a wrong user input
            vnode.vnode.attributes.value = value;
        }

        if (value !== oldValue) {
            me.value = value;
        }
    }

    /**
     * Removes all triggers of a given type
     * @param {String} type
     * @param {Boolean} [silent=false] true prevents a vdom update
     * @param {Array} [triggerSource] pass a shallow copy of this.triggers
     * @returns {Boolean} true in case a trigger was found & removed
     */
    removeTrigger(type, silent=false, triggerSource) {
        let me       = this,
            hasMatch = false,
            triggers = triggerSource || me.triggers || [],
            i        = 0,
            len      = triggers.length,
            trigger;

        for (; i < len; i++) {
            trigger = triggers[i];

            if (trigger.type === type) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].remove(triggers, trigger);
                len--;
                hasMatch = true;
            }
        }

        if (hasMatch && !silent) {
            me.triggers = triggers;
        }

        return hasMatch;
    }

    /**
     * Used for labelPosition: 'inline' to adjust the top border matching to the length of the label
     * @param {Boolean} [silent=false] true to get the value, but not apply it to the DOM
     * @protected
     */
    updateCenterBorderElWidth(silent=false) {
        let me = this;

        if (me.mounted) {
            Neo.main.DomAccess.getBoundingClientRect({
                id: me.getCenterBorderEl().id
            }).then(data => {
                me.centerBorderElWidth = Math.round(data.width * .7) + 8;

                if (!silent) {
                    let vdom = me.vdom;

                    me.getCenterBorderEl().width = me.centerBorderElWidth;
                    me.vdom = vdom;
                }
            });
        }
    }

    /**
     * Calculates the new inputWidth based on the labelWidth & total width
     * @protected
     */
    updateInputWidth() {
        let me         = this,
            inputWidth = me.getInputWidth(),
            vdom       = me.vdom;

        if (inputWidth !== null && inputWidth !== me.width) {
            vdom.cn[1].width = inputWidth;
        } else {
            delete vdom.cn[1].width;
        }

        me.vdom = vdom;
    }

    /**
     * Since triggers do not get rendered, assign the relevant props
     * todo: this could be handled by component.Base
     */
    updateTriggerVnodes() {
        let me           = this,
            triggerRoot  = me.vnode && me.vnode.childNodes[1],
            childNodes   = triggerRoot && triggerRoot.childNodes || [],
            trigger;

        childNodes.forEach(vnode => {
            trigger = me.getTriggerById(vnode.id);

            if (trigger) {
                Object.assign(trigger, {
                    vnode    : vnode,
                    _rendered: true,
                    _mounted : true
                });
            }
        });
    }
}

Neo.applyClassConfig(Text);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/Base.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * Base class for form field Triggers
 * @class Neo.form.field.trigger.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for align
         * @member {String[]} alignValues=['end', 'start']
         * @protected
         * @static
         */
        alignValues: ['end', 'start']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Base'
         * @protected
         */
        className: 'Neo.form.field.trigger.Base',
        /**
         * @member {String} ntype='trigger'
         * @protected
         */
        ntype: 'trigger',
        /**
         * @member {String} align_='end'
         */
        align_: 'end',
        /**
         * @member {String[]} cls=['neo-field-trigger']
         */
        cls: ['neo-field-trigger'],
        /**
         * @member {Neo.form.field.Base|null} field=null
         */
        field: null,
        /**
         * @member {Boolean} hidden_=false
         */
        hidden_: false,
        /**
         * @member {String|null} iconCls_=null
         */
        iconCls_: null,
        /**
         * The scope of the trigger handler
         * @member {Neo.core.Base|null} scope=null
         */
        scope: null,
        /**
         * @member {Boolean} showOnHover=false
         */
        showOnHover: false,
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='base'
         * @protected
         */
        type: 'base',
        /**
         * @member {Object} _vdom={tabIndex: -1}
         */
        _vdom: {
            tabIndex: -1
        },
        /**
         * @member {Number} weight_=10
         */
        weight_: 10
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me             = this,
            domListeners   = Neo.clone(me.domListeners, true, true),
            fieldListeners;

        domListeners.push({
            click: {
                fn   : me.onTriggerClick,
                scope: me
            }
        });

        if (me.showOnHover) {
            me.hiden = true;

            me.field.on('constructed', () => {
                fieldListeners = !me.field.domListeners ? [] : Neo.clone(me.field.domListeners, true, true);
                fieldListeners.push({
                    mouseenter: {
                        fn    : me.onMouseEnter,
                        scope : me
                    }
                }, {
                    mouseleave: {
                        fn    : me.onMouseLeave,
                        scope : me
                    }
                });
                me.field.domListeners = fieldListeners;
                
            }, me);
        }

        me.domListeners = domListeners;
    }

    /**
     * Triggered after the align config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetAlign(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value === 'start' ? 'add' : 'remove'](cls, 'neo-align-start');
        this.cls = cls;
    }

    /**
     * Triggered after the hidden config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetHidden(value, oldValue) {
        let vdom  = this.vdom,
            style = vdom.style || {};

        style.display = value ? 'none' : 'inline-block';
        this.vdom  = vdom;
    }

    /**
     * Triggered after the iconCls config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetIconCls(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, oldValue);

        if (value && value !== '') {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, value);
        }

        this.cls = cls;
    }

    /**
     * Triggered before the align config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetAlign(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'align', 'alignValues');
    }

    /**
     *
     */
    destroy() {
        delete this.field;
        super.destroy();
    }

    /**
     *
     */
    onMouseEnter() {
        this.hidden = false;
    }

    /**
     *
     */
    onMouseLeave() {
        this.hidden = true;
    }

    /**
     * click domEvent listener
     * @param {Object} data
     * @protected
     */
    onTriggerClick(data) {
        let me    = this,
            scope = me.scope || me;

        if (me.handler) {
            scope[me.handler].call(scope);
        }
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/Clear.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/Clear.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clear; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * Clear Trigger to remove the input value of TextFields or subclasses
 * @class Neo.form.field.trigger.Clear
 * @extends Neo.form.field.trigger.Base
 */
class Clear extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Clear'
         * @protected
         */
        className: 'Neo.form.field.trigger.Clear',
        /**
         * @member {String} ntype='trigger-clear'
         * @protected
         */
        ntype: 'trigger-clear',
        /**
         * @member {String[]} cls=['neo-field-trigger', 'neo-trigger-clear']
         */
        cls: ['neo-field-trigger', 'neo-trigger-clear'],
        /**
         * @member {String|null} iconCls='fa fa-times'
         */
        iconCls: 'fa fa-times',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='clear'
         * @protected
         */
        type: 'clear',
        /**
         * @member {Number} weight_=20
         */
        weight: 20
    }}

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.field.on({
            change                    : me.onFieldChange,
            changeClearToOriginalValue: me.onFieldChange,
            scope                     : me
        });

        me.hidden = me.getHiddenState();
    }

    /**
     * Triggered after the hidden config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetHidden(value, oldValue) {
        let cls = this.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][value ? 'add' : 'remove'](cls, 'neo-is-hidden');
        this.cls = cls;
    }

    /**
     *
     * @returns {Boolean} true in case the trigger should be hidden
     */
    getHiddenState() {
        let me    = this,
            field = me.field,
            value = field.value;

        if (field.clearToOriginalValue) {
            return value === field.originalConfig.value;
        } else {
            if (value === 0) {
                value = '0';
            }

            return !field.value || value.toString().length < 1;
        }
    }

    /**
     *
     * @param {Object} opts
     */
    onFieldChange(opts) {
        this.hidden = this.getHiddenState();
    }

    /**
     *
     * @param {Object} data
     */
    onTriggerClick(data) {
        this.field.clear();
    }
}

Neo.applyClassConfig(Clear);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/SpinDown.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/SpinDown.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpinDown; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Decreases the value of a NumberField
 * @class Neo.form.field.trigger.SpinDown
 * @extends Neo.form.field.trigger.Base
 */
class SpinDown extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.SpinUp'
         * @protected
         */
        className: 'Neo.form.field.trigger.SpinDown',
        /**
         * @member {String} ntype='trigger-spindown'
         * @protected
         */
        ntype: 'trigger-spindown',
        /**
         * @member {String} align_='start'
         */
        align: 'start',
        /**
         * @member {String|null} iconCls='fa fa-chevron-left'
         */
        iconCls: 'fa fa-chevron-left',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spindown'
         * @protected
         */
        type: 'spindown'
    }}

    onTriggerClick(data) {
        this.field.onSpinButtonDownClick();
    }
}

Neo.applyClassConfig(SpinDown);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/SpinUp.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/SpinUp.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpinUp; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Increases the value of a NumberField
 * @class Neo.form.field.trigger.SpinUp
 * @extends Neo.form.field.trigger.Base
 */
class SpinUp extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.SpinUp'
         * @protected
         */
        className: 'Neo.form.field.trigger.SpinUp',
        /**
         * @member {String} ntype='trigger-spinup'
         * @protected
         */
        ntype: 'trigger-spinup',
        /**
         * @member {String|null} iconCls='fa fa-chevron-right'
         */
        iconCls: 'fa fa-chevron-right',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spinup'
         * @protected
         */
        type: 'spinup'
    }}

    onTriggerClick(data) {
        this.field.onSpinButtonUpClick();
    }
}

Neo.applyClassConfig(SpinUp);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/SpinUpDown.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/SpinUpDown.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpinUpDown; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Combines spin up & down inside one trigger
 * @class Neo.form.field.trigger.SpinUpDown
 * @extends Neo.form.field.trigger.Base
 */
class SpinUpDown extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.SpinUpDown'
         * @protected
         */
        className: 'Neo.form.field.trigger.SpinUpDown',
        /**
         * @member {String} ntype='trigger-spinupdown'
         * @protected
         */
        ntype: 'trigger-spinupdown',
        /**
         * @member {String[]} cls=['neo-field-trigger', 'neo-spin-buttons']
         */
        cls: ['neo-field-trigger', 'neo-spin-buttons'],
        /**
         * @member {String} spinButtonDownIconCls='fa fa-chevron-down'
         */
        spinButtonDownIconCls: 'fa fa-chevron-down',
        /**
         * @member {String} spinButtonUpIconCls='fa fa-chevron-up'
         */
        spinButtonUpIconCls: 'fa fa-chevron-up',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='spinupdown'
         * @protected
         */
        type: 'spinupdown'
    }}

    onConstructed() {
        let me   = this,
            vdom = me.vdom;

        vdom.cn = [
            {cls: ['neo-spin-button', 'neo-up',   me.spinButtonUpIconCls]},
            {cls: ['neo-spin-button', 'neo-down', me.spinButtonDownIconCls]}
        ];

        me.vdom = vdom;

        super.onConstructed();
    }

    onTriggerClick(data) {
        let me     = this,
            target = data.path[0],
            cls    = target.cls.join(' ');

        if (cls.includes('neo-down')) {
            me.field.onSpinButtonDownClick();
        } else if (cls.includes('neo-up')) {
            me.field.onSpinButtonUpClick();
        }
    }
}

Neo.applyClassConfig(SpinUpDown);



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
         * @protected
         */
        className: 'Neo.layout.Base',
        /**
         * @member {String} ntype='layout-base'
         * @protected
         */
        ntype: 'layout-base',
        /**
         * The Id of the Container instance this layout is bound to
         * @member {?String} containerId=null
         * @protected
         */
        containerId: null,
        /**
         * Identifier for all classes that extend layout.Base
         * @member {Boolean} isLayout=true
         * @protected
         */
        isLayout: true
    }}

    /**
     * Placeholder Method
     * @param {Neo.component.Base} item
     * @protected
     */
    applyChildAttributes(item) {}

    /**
     * Placeholder Method
     * @protected
     */
    applyRenderAttributes() {}

    /**
     * Placeholder Method
     * @param {Neo.component.Base} item
     * @protected
     */
    removeChildAttributes(item) {}

    /**
     * Placeholder Method
     * @protected
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
         * @protected
         */
        className: 'Neo.layout.Card',
        /**
         * @member {String} ntype='layout-card'
         * @protected
         */
        ntype: 'layout-card',
        /*
         * The item index of the card, which is currently active.
         * Change this value to activate a different card.
         * @member {Number} activeIndex_=0
         */
        activeIndex_: 0,
        /*
         * Remove the DOM of inactive cards.
         * This will keep the instances & vdom trees
         * @member {Boolean} removeInactiveCards=true
         */
        removeInactiveCards: true
    }}

    /**
     * Modifies the CSS classes of the container items this layout is bound to.
     * Automatically gets triggered after changing the value of activeIndex.
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetActiveIndex(value, oldValue) {
        let me        = this,
            container = Neo.getComponent(me.containerId),
            sCfg      = me.getStaticConfig(),
            isActiveIndex, cls, items, vdom;

        if (container) {
            items = container.items;
            vdom  = container.vdom;

            if (!items[value]) {
                Neo.error('Trying to activate a non existing card', value, items);
            }

            items.forEach((item, index) => {
                cls           = item.cls;
                isActiveIndex = index === value;

                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, isActiveIndex ? sCfg.inactiveItemCls : sCfg.activeItemCls);
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(   cls, isActiveIndex ? sCfg.activeItemCls   : sCfg.inactiveItemCls);

                if (me.removeInactiveCards) {
                    item._cls = cls; // silent update
                    item.getVdomRoot().cls = cls;

                    if (isActiveIndex) {
                        item.vdom.removeDom = false;
                    } else {
                        item.mounted = false;
                        item.vdom.removeDom = true;
                    }
                } else {
                    item.cls = cls;
                }
            });

            if (me.removeInactiveCards) {
                container.vdom = vdom;
            }
        }
    }

    /**
     * Initially sets the CSS classes of the container items this layout is bound to.
     * @param {Neo.component.Base} item
     * @param {Number} index
     * @param {Boolean} [keepInDom=false]
     */
    applyChildAttributes(item, index, keepInDom=false) {
        let me            = this,
            isActiveIndex = me.activeIndex === index,
            sCfg          = me.getStaticConfig(),
            childCls      = item.cls,
            vdom          = item.vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(childCls, sCfg.itemCls);
        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(childCls, isActiveIndex ? sCfg.activeItemCls : sCfg.inactiveItemCls);

        if (!keepInDom && me.removeInactiveCards) {
            item._cls = childCls; // silent update
            vdom.removeDom = !isActiveIndex;
            item.vdom = vdom;
        } else {
            item.cls = childCls;
        }
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
         * @protected
         */
        className: 'Neo.layout.Fit',
        /**
         * @member {String} ntype='layout-fit'
         * @protected
         */
        ntype: 'layout-fit'
    }}

    /**
     * Initially sets the CSS classes of the container items this layout is bound to.
     * @param {Neo.component.Base} child
     * @param {Number} index
     */
    applyChildAttributes(child, index) {
        if (!child.ignoreLayout) {
            child.cls = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].union(child.cls, 'neo-layout-fit-item');
        }
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
         * @protected
         * @static
         */
        alignValues: ['center', 'end', 'start', 'stretch', null],
        /**
         * Valid values for direction
         * @member {String[]} directionValues=['column', 'column-reverse', 'row', 'row-reverse', null]
         * @protected
         * @static
         */
        directionValues: ['column', 'column-reverse', 'row', 'row-reverse', null],
        /**
         * Valid values for pack
         * @member {String[]} packValues=['center', 'end', 'start', null]
         * @protected
         * @static
         */
        packValues: ['center', 'end', 'start', null],
        /**
         * Valid values for wrap
         * @member {String[]} wrapValues=['nowrap', 'wrap', 'wrap-reverse']
         * @protected
         * @static
         */
        wrapValues: ['nowrap', 'wrap', 'wrap-reverse'],
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.layout.Flexbox'
         * @protected
         */
        className: 'Neo.layout.Flexbox',
        /**
         * @member {String} ntype='layout-flexbox'
         * @protected
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
     * @protected
     */
    afterSetAlign(value, oldValue) {
        this.updateInputValue(value, oldValue, 'align');
    }

    /**
     * Updates the Container CSS cls after "direction" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetDirection(value, oldValue) {
        this.updateInputValue(value, oldValue, 'direction');
    }

    /**
     * Updates the Container CSS cls after "pack" gets changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     */
    afterSetPack(value, oldValue) {
        this.updateInputValue(value, oldValue, 'pack');
    }

    /**
     * Updates the Container CSS cls after "wrap" gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetWrap(value, oldValue) {
        this.updateInputValue(value, oldValue, 'wrap');
    }

    /**
     * Applies the flex value to an item of the container this layout is bound to
     * @param {Neo.component.Base} item
     */
    applyChildAttributes(item) {
        let style = item.wrapperStyle;

        style.flex = style.flex || item.flex || (this.align === 'stretch' ? 1 : '0 1 auto');
        item.wrapperStyle = style;
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
     * @protected
     * @returns {String|null} value
     */
    beforeSetAlign(value, oldValue) {
        return this.testInputValue(value, oldValue, 'alignValues', 'align');
    }

    /**
     * Checks if the new value for "direction" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     * @returns {String|null} value
     */
    beforeSetDirection(value, oldValue) {
        return this.testInputValue(value, oldValue, 'directionValues', 'direction');
    }

    /**
     * Checks if the new value for "pack" is valid
     * @param {String|null} value
     * @param {String|null} oldValue
     * @protected
     * @returns {String|null} value
     */
    beforeSetPack(value, oldValue) {
        return this.testInputValue(value, oldValue, 'packValues', 'pack');
    }

    /**
     * Checks if the new value for "wrap" is valid
     * @param {String} value
     * @param {String} oldValue
     * @protected
     * @returns {String} value
     */
    beforeSetWrap(value, oldValue) {
        return this.testInputValue(value, oldValue, 'wrapValues', 'wrap');
    }

    /**
     * Removes all CSS rules from an container item this layout is bound to.
     * Gets called when switching to a different layout.
     * @param {Neo.component.Base} item
     * @protected
     */
    removeChildAttributes(item) {
        let style = item.wrapperStyle || {};

        style.flex = item.flex || null;
        item.wrapperStyle = style;
    }

    /**
     * Removes all CSS rules from the container this layout is bound to.
     * Gets called when switching to a different layout.
     * @protected
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
     * @protected
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
     * @protected
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
         * @protected
         */
        className: 'Neo.layout.HBox',
        /**
         * @member {String} ntype='layout-hbox'
         * @protected
         */
        ntype: 'layout-hbox',
        /**
         * @member {String} direction='row'
         * @protected
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
         * @protected
         */
        className: 'Neo.layout.VBox',
        /**
         * @member {String} ntype='layout-vbox'
         * @protected
         */
        ntype: 'layout-vbox',
        /**
         * @member {String} direction='column'
         * @protected
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
         * @protected
         */
        className: 'Neo.manager.Base',
        /**
         * @member {String} ntype='base-manager'
         * @protected
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
/* harmony import */ var _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/VNode.mjs */ "./node_modules/neo.mjs/src/util/VNode.mjs");



/**
 * @class Neo.manager.Component
 * @extends Neo.manager.Base
 * @singleton
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.manager.Component'
         * @protected
         */
        className: 'Neo.manager.Component',
        /**
         * @member {String} ntype='component-manager'
         * @protected
         */
        ntype: 'component-manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
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
            if (component[key] === value) {
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
        return _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(vnode, childIds);
    }

    /**
     * Returns all child components found inside the vdom tree
     * @param {Neo.component.Base} component
     * @returns {Neo.component.Base[]} childComponents
     */
    getChildren(component) {
        let childComponents = [],
            childNodes      = _util_VNode_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getChildIds(component.vnode),
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
                if (component[key] === value) {
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
    'drag:end',
    'drag:move',
    'drag:start',
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
         * @protected
         */
        className: 'Neo.manager.DomEvent',
        /**
         * @member {String} ntype='dom-event-manager'
         * @protected
         */
        ntype: 'dom-event-manager',
        /**
         * @member {Object} items={}
         * @protected
         */
        items: {},
        /**
         * @member {Object} map={}
         * @protected
         */
        map: {},
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }}

    /**
     *
     * @param {Object} event
     * @protected
     */
    fire(event) {
        let me         = this,
            bubble     = true,
            data       = event.data || {},
            eventName  = event.eventName,
            i          = 0,
            listeners  = null,
            pathIds    = data.path.map(e => e.id),
            path       = _Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParentPath(pathIds),
            len        = path.length,
            component, delegationTargetId, id, preventFire;

        for (; i < len; i++) {
            id        = path[i];
            component = Neo.getComponent(id);

            if (!component || component.disabled) {
                break;
            }

            listeners = me.items[id] && me.items[id][eventName];

            if (listeners) {
                // console.log('fire', eventName, data, listeners, path);

                if (Array.isArray(listeners)) {
                    listeners.forEach(listener => {
                        if (listener && listener.fn) {
                            delegationTargetId = me.verifyDelegationPath(listener, data.path);

                            if (delegationTargetId !== false) {
                                preventFire = false;

                                // we only want mouseenter & leave to fire on their top level nodes, not for children
                                if (eventName === 'mouseenter' || eventName === 'mouseleave') {
                                    preventFire = !DomEvent.verifyMouseEnterLeave(component, data, delegationTargetId, eventName);
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
     * @protected
     */
    mountDomListeners(component) {
        let listeners   = this.items[component.id],
            localEvents = [];

        if (listeners) {
            Object.entries(listeners).forEach(([eventName, value]) => {
                value.forEach(event => {
                    eventName = event.eventName;

                    if (eventName && (event.local || !globalDomEvents.includes(eventName))) {
                        // console.log('localEvents', eventName);

                        localEvents.push({
                            name   : eventName,
                            handler: 'domEventListener',
                            vnodeId: event.vnodeId
                        });
                    }
                });
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
    }

    /**
     * @param {Object} config
     * @param {String} config.delegate
     * @param {String} config.eventName
     * @param {String} config.id
     * @param {Boolean} config.local
     * @param {Number} config.opts
     * @param {Number} config.originalConfig
     * @param {String} config.ownerId
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
            eventName     : eventName,
            fn            : fn,
            id            : listenerId,
            mounted       : !config.local && globalDomEvents.includes(eventName),
            originalConfig: config.originalConfig,
            ownerId       : config.ownerId,
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
        // todo
        console.log('unregister', config);
        console.log(this.generateListenerConfig(config, scope));
        return;

        let listener = this.getListener(config);

        if (listener) {
            console.log('listener found', listener);
        }
    }

    /**
     *
     * @param {Neo.component.Base} component
     * @param {Object[]} domListeners
     * @param {Object[]} oldDomListeners
     */
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
                            ownerId       : component.id,
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

    /**
     *
     * @param {Neo.component.Base} component
     * @param {Object} data
     * @param {String} delegationTargetId
     * @param {String} eventName
     * @returns {Boolean}
     */
    static verifyMouseEnterLeave(component, data, delegationTargetId, eventName) {
        let targetId = eventName === 'mouseenter' ? data.fromElementId : data.toElementId,
            delegationVdom;

        if (targetId && targetId !== delegationTargetId) {
            delegationVdom = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(component.vdom, delegationTargetId);

            // delegationVdom can be undefined when dragging a proxy over the node.
            // see issues/1137 for details.
            if (!delegationVdom || delegationVdom.vdom && _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(delegationVdom.vdom, targetId)) {
                return false;
            }
        }

        return true;
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
         * @protected
         */
        className: 'Neo.manager.Focus',
        /**
         * @member {String} ntype='focus-manager'
         * @protected
         */
        ntype: 'focus-manager',
        /**
         * @member {Boolean} singleton=true
         * @protected
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
         * @protected
         */
        lastFocusInDate: null,
        /**
         * The Date object when the last focusout event has occured
         * @member {Date|null} lastFocusInDate=null
         * @protected
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
     * @protected
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
     * @protected
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
     * @protected
     */
    focusLeave(opts) {
        this.setComponentFocus(opts, false);
    }

    /**
     *
     * @param {Object} opts
     * @param {Array}  opts.componentPath Component ids upwards
     * @param {Object} opts.data dom event infos
     * @protected
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
     * @protected
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
     * @protected
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
     * @protected
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

/***/ "./node_modules/neo.mjs/src/selection/GalleryModel.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/GalleryModel.mjs ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * A selection model intended to use for Neo.component.Gallery
 * @class Neo.selection.GalleryModel
 * @extends Neo.selection.Model
 */
class GalleryModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.GalleryModel'
         * @protected
         */
        className: 'Neo.selection.GalleryModel',
        /**
         * @member {String} ntype='selection-gallerymodel'
         * @protected
         */
        ntype: 'selection-gallerymodel',
        /**
         * True to stay in the same column when navigating with the up and down keys,
         * otherwise you will navigate to the next / prev column when moving out
         * @member {Boolean} stayInRow=false
         */
        stayInRow: false
    }}

    /**
     * Override to not apply a domListener
     */
    addDomListener() {}

    /**
     *
     */
    onContainerClick() {
        let me       = this,
            view     = me.view,
            oldItems = [...me.items],
            deltas   = [];

        me.items.forEach(item => {
            deltas.push({
                id : view.getItemVnodeId(item),
                cls: {
                    add   : [],
                    remove: ['neo-selected']
                }
            });
        });

        me.items.splice(0, me.items.length);

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: view.appName,
            deltas : deltas
        }).then(() => {
            me.fire('selectionChange', me.items, oldItems);
        });
    }

    /**
     *
     * @param {Object} data
     */
    onItemClick(data) {
        let i    = 0,
            len  = data.path.length,
            view = this.view,
            key;

        for (; i < len; i++) {
            if (data.path[i].cls.includes('neo-gallery-item')) {
                key = view.getItemId(data.path[i].id);
                this.select(key);

                view.fire('select', {
                    record: view.store.get(key)
                });

                break;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        this[this.view.orderByRow ? 'onNavKeyRow' : 'onNavKeyColumn'](1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this[this.view.orderByRow ? 'onNavKeyColumn' : 'onNavKeyRow'](-1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this[this.view.orderByRow ? 'onNavKeyColumn' : 'onNavKeyRow'](1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        this[this.view.orderByRow ? 'onNavKeyRow' : 'onNavKeyColumn'](-1);
    }

    /**
     *
     * @param {Number} step=1
     */
    onNavKeyColumn(step=1) {
        let me           = this,
            view         = me.view,
            store        = view.store,
            selected     = me.items[0],
            countRecords = store.getCount(),
            index, record;

        if (selected) {
            index = store.indexOf(selected) + step;
        } else {
            index = 0;
        }

        if (index < 0) {
            index = countRecords - 1;
        } else if (index >= countRecords) {
            index = 0;
        }

        record = store.getAt(index);

        me.select(record[store.keyProperty]);

        view.fire('select', {
            record: record
        });
    }

    /**
     *
     * @param {Number} step=1
     */
    onNavKeyRow(step=1) {
        let me           = this,
            view         = me.view,
            store        = view.store,
            selected     = me.items[0],
            countRecords = store.getCount(),
            amountRows   = view.amountRows,
            stayInRow    = me.stayInRow,
            index, record;

        if (view.orderByRow) {
            amountRows = Math.ceil(view.store.getCount() / amountRows);
        }

        step *= amountRows;

        if (selected) {
            index = store.indexOf(selected) + step;
        } else {
            index = 0;
        }

        if (index < 0) {
            if (!stayInRow) {
                index++;
            }
            while (index < (countRecords - amountRows)) {
                index += amountRows;
            }
        } else if (index >= countRecords) {
            if (!stayInRow) {
                index--;
            }
            while (index >= amountRows) {
                index -= amountRows;
            }
        }

        record = store.getAt(index);

        me.select(record[store.keyProperty]);

        view.fire('select', {
            record: record
        });
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        super.register(component);

        let me   = this,
            id   = me.id,
            view = me.view;

        view.on({
            containerClick: me.onContainerClick,
            itemClick     : me.onItemClick,
            scope         : me
        });

        if (view.keys) {
            view.keys._keys.push(
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            );
        }
    }

    /**
     *
     * @param {String} itemId
     */
    select(itemId) {
        let me       = this,
            view     = me.view,
            oldItems = [...me.items],
            deltas   = [],
            vnodeId  = view.getItemVnodeId(itemId);

        if (me.singleSelect) {
            me.items.forEach(item => {
                if (item !== itemId) {console.log(item, itemId)
                    deltas.push({
                        id : view.getItemVnodeId(item),
                        cls: {
                            add   : [],
                            remove: ['neo-selected']
                        }
                    });
                }
            });

            me.items.splice(0, me.items.length);
        }

        deltas.push({
            id : vnodeId,
            cls: {
                add: ['neo-selected']
            }
        });

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]['add'](me.items, itemId);

        if (deltas.length > 0 && view.mounted) {
            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: view.appName,
                deltas : deltas
            }).then(() => {
                me.fire('selectionChange', me.items, oldItems);
            });
        } else if (view.mounted) {
            me.fire('selectionChange', me.items, oldItems);
        }
    }

    /**
     *
     */
    unregister() {
        let me   = this,
            id   = me.id,
            view = me.view;

        if (view.keys) {
            view.keys.removeKeys([
                {fn: 'onKeyDownDown'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownUp'    ,key: 'Up'    ,scope: id}
            ]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(GalleryModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/Model.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/Model.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _core_Observable_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/Observable.mjs */ "./node_modules/neo.mjs/src/core/Observable.mjs");




/**
 * @class Neo.selection.Model
 * @extends Neo.core.Base
 */
class Model extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
         * @member {String} className='Neo.selection.Model'
         * @protected
         */
        className: 'Neo.selection.Model',
        /**
         * @member {String} ntype='selection-model'
         * @protected
         */
        ntype: 'selection-model',
        /**
         * Placeholder for extended classes to add a custom css rule to this owner component
         * @member {String|null} cls=null
         * @protected
         */
        cls: null,
        /**
         * @member {Array} items=[]
         * @protected
         */
        items: [],
        /**
         * @member {String} selectedCls='selected'
         */
        selectedCls: 'neo-selected',
        /**
         * @member {Boolean} singleSelect=true
         */
        singleSelect: true,
        /**
         * Internally saves the view id, but the getter will return the matching instance
         * @member {Object} view_=null
         * @protected
         */
        view_: null
    }}

    /**
     * Gets triggered before getting the value of the view config
     * @returns {Neo.component.Base}
     */
    beforeGetView() {
        return Neo.getComponent(this._view);
    }

    /**
     * Gets triggered before setting the value of the view config
     * @returns {String} the view id
     */
    beforeSetView(value) {
        return value && value.id;
    }

    /**
     *
     */
    addDomListener() {}

    /**
     *
     * @param {Object} item
     * @param {Boolean} [silent] true to prevent a vdom update
     * @param {Array} [itemCollection]
     * @param {String} [selectedCls]
     */
    deselect(item, silent, itemCollection, selectedCls) {
        let me   = this,
            view = me.view,
            vdom = view.vdom,
            node = view.getVdomChild(item), // todo: support for nodes (right now limited to ids)
            cls;

        if (node) {
            cls = node.cls || [];
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, selectedCls || me.selectedCls);
            node.cls = cls;
        }

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(itemCollection || me.items, item);

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     * @param {Boolean} [silent] true to prevent a vdom update
     */
    deselectAll(silent) {
        let me    = this,
            items = [...me.items],
            view  = me.view,
            vdom  = view.vdom;

        items.forEach(item => {
            me.deselect(item, true);
        });

        if (!silent && items.length > 0) {
            view.vdom = vdom;
        }
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
     * @returns {Array} this.items
     */
    getSelection() {
        return this.items;
    }

    /**
     *
     * @returns {Boolean} true in case there is a selection
     */
    hasSelection() {
        return this.items.length > 0;
    }

    /**
     *
     * @param {String} id
     * @returns {Boolean} true in case the item is selected
     */
    isSelected(id) {
        return this.items.indexOf(id) > -1;
    }

    /**
     *
     * @param {Neo.component.Base} component
     */
    register(component) {
        let me  = this,
            cls = component.cls || [];

        if (me.cls && !cls.includes(me.cls)) {
            cls.push(me.cls);
            component.cls = cls;
        }

        me.view = component;
        me.addDomListener();
    }

    /**
     *
     */
    removeDomListeners() {
        let me           = this,
            component    = me.view,
            domListeners = [...component.domListeners];

        component.domListeners.forEach(listener => {
            if (listener.scope === me) {
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(domListeners, listener);
            }
        });

        component.domListeners = domListeners;
    }

    /**
     *
     * @param {Object|Object[]|String[]} items
     * @param {Array} [itemCollection]
     * @param {String} [selectedCls]
     */
    select(items, itemCollection, selectedCls) {
        items = Array.isArray(items) ? items : [items];

        let me   = this,
            view = me.view,
            vdom = view.vdom,
            cls;

        if (me.singleSelect) {
            me.deselectAll(true);
        }

        items.forEach(node => {
            if (typeof node === 'string') {
                node = view.getVdomChild(node);
            }

            if (node) {
                cls = node.cls || [];
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, selectedCls || me.selectedCls);
                node.cls = cls;
            }
        });

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(itemCollection || me.items, items);

        view[view.hasOwnProperty('silentSelect') && view.silentSelect === true ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Object} item
     */
    toggleSelection(item) {
        let me = this;

        if (me.isSelected(item)) {
            me.deselect(item);
        } else {
            me.select(item);
        }
    }

    /**
     *
     */
    unregister() {
        let me  = this,
            cls = me.view.cls || [];

        if (me.cls && cls.includes(me.cls)) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, me.cls);
            me.view.cls = cls;
        }

        me.deselectAll();

        me.removeDomListeners();
    }
}

Neo.applyClassConfig(Model);



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
         * @protected
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

/***/ "./node_modules/neo.mjs/src/util/ClassSystem.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/ClassSystem.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.ClassSystem
 * @extends Neo.core.Base
 */
class ClassSystem extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.ClassSystem'
         * @protected
         */
        className: 'Neo.util.ClassSystem'
    }}

    /**
     * can get used inside beforeSet methods in case you want to create instances like stores
     * @param {Object|Neo.core.Base|null} config
     * @param {Neo.core.Base} [DefaultClass=null]
     * @param {Object} [defaultValues={}]
     * @returns {Neo.core.Base} instance
     */
    static beforeSetInstance(config, DefaultClass=null, defaultValues={}) {
        if (!config && DefaultClass) {
            config = Neo.create(DefaultClass, defaultValues);
        } else if (config && config.isClass) {
            config = Neo.create(config, defaultValues);
        } else if (Neo.isObject(config) && !(config instanceof Neo.core.Base)) {
            if (config.ntype) {
                config = Neo.ntype({
                    ...defaultValues,
                    ...config
                });
            } else {
                const newConfig = {};

                if (DefaultClass) {
                    newConfig.module = DefaultClass;
                }

                Object.assign(newConfig, {
                    ...defaultValues,
                    ...config
                });

                config = Neo.create(newConfig);
            }
        }

        return config;
    }
}

Neo.applyClassConfig(ClassSystem);

/* harmony default export */ __webpack_exports__["default"] = (ClassSystem);

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
         * @protected
         */
        className: 'Neo.util.KeyNavigation',
        /**
         * @member {String} ntype='keynav'
         * @protected
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
     * @protected
     * @returns {Neo.component.Base}
     */
    beforeGetComponent() {
        return Neo.getComponent(this._component);
    }

    /**
     *
     * @param {Neo.component.Base} value
     * @protected
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
     * @protected
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
         * @protected
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
         * @protected
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
         * @protected
         */
        className: 'Neo.util.VDom'
    }}

    /**
     *
     * @param {Object} vdom
     * @param {Boolean} [removeIds=true]
     * @returns {Object} cloned vdom
     */
    static clone(vdom, removeIds=true) {
        const clone = Neo.clone(vdom, true);

        if (removeIds) {
            delete clone.id;
        }

        if (clone.cn) {
            clone.cn.forEach((item, index) => {
                clone.cn[index] = VDom.clone(item, removeIds);
            });
        }

        return clone;
    }

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
     * @returns {Array} an array of vdom nodes which match the flag
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
         * @protected
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

        let attrMatch  = true,
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
                    return subChild;
                }
            }
        }

        return null;
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
     * Removes a child vnode inside a vnode tree by a given id
     * @param {Object} vnode
     * @param {String} id
     * @returns {Boolean} true in case the node was found and removed
     */
    static removeChildVnode(vnode, id) {
        let childNodes = vnode.childNodes || [],
            i          = 0,
            len        = childNodes.length,
            childNode;

        if (vnode.id === id) {
            throw new Error('removeChildVnode: target id matches the root vnode id: ' + id);
        }

        for (; i < len; i++) {
            childNode = childNodes[i];

            if (childNode.id === id) {
                childNodes.splice(i, 1);
                return true;
            }

            if (VNode.removeChildVnode(childNode, id)) {
                return true;
            }
        }

        return false;
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvY29tcG9uZW50L2dhbGxlcnkvR2FsbGVyeU1haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9nYWxsZXJ5L2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2J1dHRvbi9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29sbGVjdGlvbi9GaWx0ZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb2xsZWN0aW9uL1NvcnRlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0dhbGxlcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvTGFiZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9QYW5lbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9Ub29sYmFyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9JZEdlbmVyYXRvci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvcmUvTG9nZ2VyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9PYnNlcnZhYmxlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29yZS9VdGlsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGF0YS9Nb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvUmVjb3JkRmFjdG9yeS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvU3RvcmUubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9DbGVhci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9TcGluRG93bi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9TcGluVXAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvU3BpblVwRG93bi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0NhcmQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvRml0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0ZsZXhib3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvSEJveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9WQm94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Db21wb25lbnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbWFuYWdlci9Gb2N1cy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3NlbGVjdGlvbi9HYWxsZXJ5TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vTW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0FycmF5Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9DbGFzc1N5c3RlbS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvS2V5TmF2aWdhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvT2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9TdHlsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVkRvbS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvVk5vZGUubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZEO0FBQ0E7QUFDRjtBQUNDO0FBQ0U7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1FQUFRO0FBQzNDLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQSxpQkFBaUIsZ0NBQWdDOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLGdDQUFnQztBQUNyRCxxQkFBcUIsMkJBQTJCO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsMkJBQTJCLGtFQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEMsK0JBQStCLGVBQWU7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw0QkFBNEIscUNBQXFDOztBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsNEJBQTRCLDZCQUE2Qjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9CQUFvQixrRUFBTztBQUMzQjtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN2TkE7QUFBQTtBQUFBO0FBQStEOztBQUUvRDtBQUNBO0FBQ0EsY0FBYyxpRUFBb0I7QUFDbEM7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ0o7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1Q0FBdUM7QUFDeEQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxZQUFZLHVEQUFRO0FBQ3BCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7QUFDaEIsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQixZQUFZLHVEQUFRO0FBQ3BCO0FBQ0EsU0FBUztBQUNULFlBQVksdURBQVE7QUFDcEIsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQyxlQUFlLGtCQUFrQjtBQUNqQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDclZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ0o7QUFDTTtBQUNOO0FBQ1U7QUFDTjs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVE7QUFDM0IsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0EsaUNBQWlDLDhCQUE4QjtBQUMvRCxpQ0FBaUMsOEJBQThCO0FBQy9ELGlDQUFpQyw4QkFBOEI7QUFDL0QsaUNBQWlDLDhCQUE4QjtBQUMvRCxpQ0FBaUMsMkJBQTJCO0FBQzVELGlDQUFpQywyQkFBMkI7QUFDNUQsaUNBQWlDO0FBQ2pDLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxtREFBTTtBQUNoRCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsbURBQU07QUFDaEQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7O0FBRTNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsa0JBQWtCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLGtCQUFrQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixnQkFBZ0I7QUFDM0M7QUFDQTtBQUNBOztBQUVBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBDQUEwQztBQUMxQyxhQUFhO0FBQ2I7O0FBRUEseUJBQXlCLHFCQUFxQjtBQUM5Qzs7QUFFQSwrQkFBK0IsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxxQkFBcUI7QUFDcEMsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBLG1DQUFtQyxzREFBSTtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGFBQWE7QUFDNUIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTyx5Q0FBeUM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQyxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU8seUNBQXlDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsTUFBTTtBQUNyQjtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLGFBQWE7QUFDNUIsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxzREFBSTtBQUNyQztBQUNBOztBQUVBO0FBQ0EsWUFBWSx3REFBTTtBQUNsQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBLHVCQUF1QixzREFBSTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EscUJBQXFCLFNBQVM7QUFDOUI7QUFDQSx1QkFBdUIsc0RBQUk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsc0RBQUk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsYUFBYTtBQUNiOztBQUVBOztBQUVlLG1FQUFJLEU7Ozs7Ozs7Ozs7OztBQ3ByQ25CO0FBQUE7QUFBQTtBQUEwQztBQUNNOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBSTtBQUN6Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsTUFBTTtBQUNyQjtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxxRUFBTSxFOzs7Ozs7Ozs7Ozs7QUNwT3JCO0FBQUE7QUFBQTtBQUEwQztBQUNNOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzREFBSTtBQUN6Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQixFQUFFO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVlLHFFQUFNLEU7Ozs7Ozs7Ozs7OztBQzdJckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNQO0FBQ1E7QUFDRDtBQUNFO0FBQ1A7QUFDRDtBQUNLO0FBQ0w7QUFDRDtBQUNBO0FBQ0M7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFRO0FBQzNCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFnQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdDQUFnQyxVQUFVLEVBQUU7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7O0FBRWhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQU07O0FBRWxCO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLHdCQUF3QjtBQUNoRTtBQUNBLGVBQWUsY0FBYztBQUM3QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQUk7QUFDeEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZEQUFlO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhEQUFnQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUE7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQWU7QUFDdkMscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixnQkFBZ0IsaVZBQzBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNDQUFzQztBQUN0RDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDZEQUFlO0FBQy9CO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDZEQUFlLDBCQUEwQiwrREFBYTtBQUMxRTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsNkRBQWU7QUFDOUM7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQSxTQUFTOztBQUVULGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFDQUFxQztBQUNuRSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUEsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDhEQUFnQjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQixjQUFjO0FBQy9CO0FBQ0E7QUFDQSxlQUFlLDhEQUFnQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQiw4REFBZ0I7QUFDbEM7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUIsOERBQWdCOztBQUV2QztBQUNBOztBQUVBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsTUFBTTtBQUNyQixlQUFlLE1BQU07QUFDckI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIsOERBQWdCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQU07O0FBRWxCO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBLFFBQVEsdURBQVE7QUFDaEI7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFFBQVEsOERBQWdCO0FBQ3hCLHlCQUF5Qix3REFBUzs7QUFFbEM7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0EsUUFBUSw4REFBZ0I7QUFDeEI7QUFDQSxvQ0FBb0Msd0RBQVM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isd0RBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBLGVBQWUsOERBQWdCO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhLHVEQUFRO0FBQ3JCO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix1REFBSztBQUN6QixvQkFBb0IsdURBQVE7QUFDNUIsZ0NBQWdDLHdEQUFTO0FBQ3pDOztBQUVBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGVBQWU7QUFDOUIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3g0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNGO0FBQ1g7QUFDbUI7QUFDWjtBQUNBOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUztBQUMvQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx1REFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkMsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2REFBZSwwQkFBMEIsdURBQUs7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSwwQkFBMEIsNERBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkMsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsNkRBQWUsMEJBQTBCLG1FQUFZO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQVE7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxvQkFBb0IsdURBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXlFO0FBQ3pFLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0EsK0NBQStDO0FBQy9DLGlCQUFpQjtBQUNqQiw2RUFBNkU7QUFDN0U7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHVEQUFROztBQUU1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCLGFBQWE7QUFDYixnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzV6QkE7QUFBQTtBQUFBO0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFTO0FBQzdCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTyxRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUErQztBQUNIO0FBQ0E7QUFDRDtBQUNDO0FBQ0E7QUFDQTtBQUNEOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyREFBUztBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsT0FBTyxRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxhQUFhO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxnQkFBZ0I7QUFDL0IsZUFBZSxnQkFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSw4QkFBOEI7QUFDN0M7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLHdEQUFVO0FBQzNDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSwwQkFBMEI7QUFDekMsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSx3QkFBd0Isd0RBQU07QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QjtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEMsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFRO0FBQ2hCLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqaEJBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ0c7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVM7QUFDN0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwrQ0FBK0M7QUFDNUcsNkRBQTZELDZDQUE2QztBQUMxRyw2REFBNkQsZ0RBQWdEO0FBQzdHLDZEQUE2RCw4Q0FBOEM7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxnQ0FBZ0M7O0FBRWxFO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0MsZ0NBQWdDO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDbkxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ0c7QUFDWDtBQUNZO0FBQ0w7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFTO0FBQy9CLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPLGVBQWU7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLE9BQU8sVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZLHVEQUFRO0FBQ3BCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywyREFBUztBQUN6QztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQUE7QUFBQTtBQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVM7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBMkM7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGVBQWUsT0FBTztBQUN0QixlQUFlLGFBQWE7QUFDNUIsaUJBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBLHNCQUFzQix3REFBVzs7QUFFakM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWtCLGVBQWUsUUFBUSxRQUFRO0FBQ2pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMvV0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ2xGdkI7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBSTtBQUN6Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDbkh2QjtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlEQUFJO0FBQzdCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCO0FBQzVCLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLFNBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVE7O0FBRVI7O0FBRUEsUUFBUTs7QUFFUjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzlNQTtBQUFBO0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBSTtBQUN2Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkFBbUI7QUFDbkIscURBQXFEOztBQUVyRDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQ7QUFDN0Q7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYyxtRUFBSSxFOzs7Ozs7Ozs7Ozs7QUNsUG5CO0FBQUE7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQUk7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNFO0FBQ1A7O0FBRWpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0RBQUk7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsNkJBQTZCLGtEQUFLO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEVBQUU7QUFDakIsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixhQUFhO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQU07QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLGVBQWU7QUFDOUIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsT0FBTztBQUN0QixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxFQUFFO0FBQ2pCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNsUXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFEO0FBQ0M7QUFDWjtBQUNXO0FBQ0g7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDREQUFJO0FBQ3hCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUFhO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwREFBYTtBQUNsQyxtQ0FBbUMsMERBQWE7QUFDaEQ7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGVBQWUsZUFBZTtBQUM5QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsNkRBQWUsMEJBQTBCLGtEQUFLO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBLFFBQVEsMERBQWE7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLGVBQWU7QUFDOUIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsT0FBTztBQUN0QixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNwVEE7QUFBQTtBQUFBO0FBQWlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsRUFBRTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsRUFBRTtBQUNqQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLEVBQUU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWE7QUFDYjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVEO0FBQ0Y7QUFDSTtBQUNkOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQSxrRUFBa0U7QUFDbEUsa0VBQWtFO0FBQ2xFLGlCQUFpQjtBQUNqQixrRUFBa0U7QUFDbEUsa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQywrREFBaUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGtDQUFrQyw2REFBZTtBQUNqRDs7QUFFQTtBQUNBLGtDQUFrQywyREFBYTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM5UkE7QUFBQTtBQUFBO0FBQWtDOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtREFBTTtBQUMxQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQSwrQ0FBK0M7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNDO0FBQ1E7QUFDQztBQUNDO0FBQ0Q7QUFDQzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2QiwwREFBWTtBQUN6QztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7O0FBRXhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTtBQUNoQixRQUFRLHVEQUFRO0FBQ2hCLCtFQUErRTs7QUFFL0U7QUFDQTs7QUFFQSx5Q0FBeUM7O0FBRXpDOztBQUVBLDRCQUE0QjtBQUM1QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhOztBQUViLDZEQUE2RDtBQUM3RCw2REFBNkQ7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLHFDQUFxQztBQUNyQyxZQUFZLHVEQUFRO0FBQ3BCOztBQUVBLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZ0JBQWdCO0FBQy9CLGVBQWUsU0FBUztBQUN4QixpQkFBaUIsU0FBUztBQUMxQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYSw0QkFBNEIseURBQVc7QUFDcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUIsc0RBQVEsMkJBQTJCLHlCQUF5QjtBQUM3RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQixzREFBUSwyQkFBMkIsdUJBQXVCO0FBQzNFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQixzREFBUSwyQkFBMkIsYUFBYTtBQUNqRTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFRO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBUywyQkFBMkIsa0JBQWtCOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixlQUFlLE1BQU07QUFDckIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6MUJBO0FBQUE7QUFBQTtBQUFBO0FBQW9EO0FBQ0o7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMkRBQVM7QUFDNUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuTkE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDYTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBSTtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQUk7QUFDN0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2REFBNkQ7QUFDMUUsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVE7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDTzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1REFBUTtBQUN4QixnQkFBZ0IsdURBQVE7O0FBRXhCO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTtBQUNoQixRQUFRLHVEQUFROztBQUVoQjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ087O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFJO0FBQ3RCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ087O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBOztBQUVBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBUTs7QUFFcEI7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdFNBO0FBQUE7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQU87QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTztBQUMxQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQWM7QUFDakMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFtQztBQUNPOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFJO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixNQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxlQUFlLHVEQUFTO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix1REFBUztBQUN2Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEMsaUJBQWlCLFNBQVM7QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDL092QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRDtBQUNEO0FBQ0o7QUFDTztBQUNEO0FBQ0Q7O0FBRWhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0RBQUk7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFnQjtBQUN6QztBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrREFBWTtBQUM1QjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLFNBQVM7QUFDdkM7QUFDQSxnQ0FBZ0MsdURBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsWUFBWSx3REFBTTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsU0FBUztBQUN4QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQixlQUFlO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixRQUFRO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGFBQWE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxhQUFhO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixzREFBUTs7QUFFckM7QUFDQTtBQUNBLDBEQUEwRCxzREFBUTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQzNmdkI7QUFBQTtBQUFBO0FBQXdDO0FBQ0M7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQVE7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFVBQVU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHVEQUFRO0FBQ3ZDLCtCQUErQix1REFBUTtBQUN2QywrQkFBK0IsdURBQVE7QUFDdkM7O0FBRUEsOEJBQThCLDJDQUEyQztBQUN6RSw4QkFBOEIsMkNBQTJDOztBQUV6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ2xOdkI7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBSztBQUNoQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDQztBQUNLOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBSTtBQUN4Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QyxlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix1REFBUTtBQUN4QjtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxRQUFRLHVEQUFROztBQUVoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDalFBO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNEQUFJO0FBQzNCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFVBQVU7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsRUFBRTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxFQUFFO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUMzTXZCO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHNEQUFJO0FBQzlCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QyxlQUFlLGNBQWM7QUFDN0IsZUFBZSxPQUFPLGtCQUFrQjtBQUN4QyxpQkFBaUIsY0FBYztBQUMvQjtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVlLDBFQUFXLEU7Ozs7Ozs7Ozs7OztBQ3ZEMUI7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDQztBQUNDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzREFBSTtBQUNoQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBLGdCQUFnQix3REFBUztBQUN6QixnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDck41QjtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBSTtBQUM1Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDbkN4QjtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBSTtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0IsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNsRXBCO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFJO0FBQ3ZCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLGNBQWM7QUFDN0IsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsU0FBUztBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxXQUFXO0FBQ2hFLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBLDZDQUE2QyxXQUFXO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsTUFBTTtBQUNyQixpQkFBaUIsTUFBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLGNBQWM7QUFDN0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQsaUJBQWlCO0FBQ3BFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDbFduQjtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBSTtBQUN4Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQixZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxZQUFZO0FBQzNCLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE1BQU07QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxvRUFBSyxFIiwiZmlsZSI6Ii9leGFtcGxlcy9jb21wb25lbnQvZ2FsbGVyeS9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHRzZWxmW1wid2VicGFja0NodW5rXCJdID0gZnVuY3Rpb24gd2VicGFja0NodW5rQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuIFx0XHR3aGlsZShjaHVua0lkcy5sZW5ndGgpXG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzLnBvcCgpXSA9IDE7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIxXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImdhbGxlcnlcIjogMVxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcbiBcdFx0cHJvbWlzZXMucHVzaChQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdC8vIFwiMVwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRcdGlmKCFpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdGltcG9ydFNjcmlwdHMoX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiKTtcbiBcdFx0XHR9XG4gXHRcdH0pKTtcbiBcdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvZ2FsbGVyeS9hcHAubWpzXCIpO1xuIiwiaW1wb3J0IEdhbGxlcnkgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvR2FsbGVyeS5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuaW1wb3J0IFBhbmVsICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBSYW5nZUZpZWxkICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5HYWxsZXJ5TWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLnRhYi5Db250YWluZXJcbiAqL1xuY2xhc3MgR2FsbGVyeU1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZTogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkdhbGxlcnl8bnVsbH0gZ2FsbGVyeT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBnYWxsZXJ5OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGdhbGxlcnlDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZ2FsbGVyeUNvbmZpZzogbnVsbCxcbiAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ30sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgZmxleCAgOiAxLFxuICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcbiAgICAgICAgICAgIGl0ZW1zIDogW11cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgOiAncGFuZWwnLFxuICAgICAgICAgICAgbGF5b3V0OiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgICAgICBzdHlsZSA6IHtiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ30sXG4gICAgICAgICAgICB3aWR0aCA6IDI2MCxcblxuICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgIDogJ3JhbmdlZmllbGQnLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgICA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICAgICAgbGFiZWxXaWR0aCAgIDogJzExMHB4JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgOiB7cGFkZGluZzogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICB1c2VJbnB1dEV2ZW50OiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSAvPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8tZ2FsbGVyeS0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnLFxuICAgICAgICAgICAgICAgIHRleHQ6ICdHYWxsZXJ5IENvbnRyb2xzJ1xuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBYJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDUwMDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMCxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8tZ2FsbGVyeS0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGZpZWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXQoZmllbGRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1nYWxsZXJ5LTEnKS5vbignY2hhbmdlVHJhbnNsYXRlWCcsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgdGhpcy5taW5WYWx1ZSksIHRoaXMubWF4VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdUcmFuc2xhdGUgWScsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAxNTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTE1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFonLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogNTUwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogLTQ1MDAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAndHJhbnNsYXRlWicsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1nYWxsZXJ5LTEnKVt0aGlzLm5hbWVdID0gZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW91bnRlZDogZnVuY3Rpb24oZmllbGRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkID0gTmVvLmdldChmaWVsZElkKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWdhbGxlcnktMScpLm9uKCdjaGFuZ2VUcmFuc2xhdGVaJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pblZhbHVlKSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0Ftb3VudCBSb3dzJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDE1LFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMSxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdhbW91bnRSb3dzJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDNcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWF4IEl0ZW1zJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDYwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtYXhJdGVtcycsXG4gICAgICAgICAgICAgICAgc3RlcFNpemUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAzMDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHRleHQgICAgICAgIDogJ09yZGVyIGJ5IFJvdycsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgOiB7fSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhbGxlcnkgICAgPSBOZW8uZ2V0KCduZW8tZ2FsbGVyeS0xJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlckJ5Um93ID0gIWdhbGxlcnkub3JkZXJCeVJvdztcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0ID0gb3JkZXJCeVJvdyA9PT0gdHJ1ZSA/ICdPcmRlciBCeSBDb2x1bW4nIDogJ09yZGVyIGJ5IFJvdyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbGxlcnkub3JkZXJCeVJvdyA9IG9yZGVyQnlSb3c7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnU29ydCBieSBMYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcyMHB4JywgbWFyZ2luQm90dG9tOiAnMTBweCd9LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1nYWxsZXJ5LTEnKS5zdG9yZS5zb3J0ZXJzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCA6IHRydWUsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnU29ydCBieSBGaXJzdG5hbWUnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge30sXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luOiAnMjBweCcsIG1hcmdpblRvcDogMH0sXG5cbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldCgnbmVvLWdhbGxlcnktMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2xhc3RuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogW1xuICAgICAgICAgICAgICAgICAgICAnPGI+TmF2aWdhdGlvbiBDb25jZXB0PC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5DbGljayBvbiBhbiBpdGVtIHRvIHNlbGVjdCBpdC4gQWZ0ZXJ3YXJkcyB5b3UgY2FuIHVzZSB0aGUgQXJyb3cgS2V5cyB0byB3YWxrIHRocm91Z2ggdGhlIGl0ZW1zLjwvcD4nXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKSxcblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMjMyMzInLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgICA6ICcjZGRkJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgICAgICAgOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZSAgICAgOiAnbm9ybWFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZ2FsbGVyeSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlOiBHYWxsZXJ5LFxuICAgICAgICAgICAgaWQgICAgOiAnbmVvLWdhbGxlcnktMScsXG4gICAgICAgICAgICAuLi5tZS5nYWxsZXJ5Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zLnB1c2gobWUuZ2FsbGVyeSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmRhdGEuU3RvcmV9XG4gICAgICovXG4gICAgZ2V0U3RvcmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zWzBdLml0ZW1zWzBdLnN0b3JlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeU1haW5Db250YWluZXIpO1xuXG5leHBvcnQge0dhbGxlcnlNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBHYWxsZXJ5TWFpbkNvbnRhaW5lciAgZnJvbSAnLi9HYWxsZXJ5TWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9jb21wb25lbnQvZ2FsbGVyeS8nLFxuICAgIG1haW5WaWV3OiBHYWxsZXJ5TWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1Rlc3RBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uYnV0dG9uLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGljb25Qb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gaWNvblBvc2l0aW9ucz1bJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblBvc2l0aW9uczogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmJ1dHRvbi5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uYnV0dG9uLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2J1dHRvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWJ1dHRvbiddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbiddLFxuICAgICAgICAvKipcbiAgICAgICAgICogZmFsc2UgY2FsbHMgTmVvLk1haW4uc2V0Um91dGUoKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBlZGl0Um91dGU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZWRpdFJvdXRlOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIGRvbUxpc3RlbmVycz17Y2xpY2s6aGFuZGxlcn1cbiAgICAgICAgICogQSBzdHJpbmcgYmFzZWQgdmFsdWUgYXNzdW1lcyB0aGF0IHRoZSBoYW5kbGVyRm4gbGl2ZXMgaW5zaWRlIGEgQ29tcG9uZW50Q29udHJvbGxlclxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxTdHJpbmd8bnVsbH0gaGFuZGxlcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgKHRoaXMgcG9pbnRlcikgaW5zaWRlIHRoZSBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBQb2ludHMgdG8gdGhlIGJ1dHRvbiBpbnN0YW5jZSBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gaGFuZGxlclNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhhbmRsZXJTY29wZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBDU1MgY2xhc3MgdG8gdXNlIGZvciBhbiBpY29uLCBlLmcuICdmYSBmYS1ob21lJ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gW2ljb25DbHNfPW51bGxdXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb2xvciB0byB1c2UgZm9yIGFuIGljb24sIGUuZy4gJyNmZjAwMDAnIFtvcHRpb25hbF1cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25Db2xvcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNvbG9yXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgaWNvbiBpbiBjYXNlIGljb25DbHMgaGFzIGEgdmFsdWUuXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBhcmU6ICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWNvblBvc2l0aW9uXz0nbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25Qb3NpdGlvbl86ICdsZWZ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcmVzc2VkIHN0YXRlIG9mIHRoZSBCdXR0b25cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcHJlc3NlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHByZXNzZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoYW5nZSB0aGUgYnJvd3NlciBoYXNoIHZhbHVlIG9uIGNsaWNrXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSByb3V0ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcm91dGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgZGlzcGxheWVkIG9uIHRoZSBidXR0b24gW29wdGlvbmFsXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRleHRfPScnXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0XzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFuc2Zvcm1zIHRoZSBidXR0b24gdGFnIGludG8gYW4gYSB0YWcgW29wdGlvbmFsXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdXJsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1cmxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdXJsIGlzIHNldCwgYXBwbGllcyB0aGUgdGFyZ2V0IGF0dHJpYnV0ZSBvbiB0aGUgdG9wIGxldmVsIHZkb20gbm9kZSBbb3B0aW9uYWxdXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdXJsVGFyZ2V0Xz0nX2JsYW5rJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXJsVGFyZ2V0XzogJ19ibGFuaycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ25lby1idXR0b24tZ2x5cGgnXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnbmVvLWJ1dHRvbi10ZXh0J119XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoYW5kbGVyIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhhbmRsZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xpY2s6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZS5oYW5kbGVyU2NvcGUgfHwgbWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGljb25DbHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWNvbkNscyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGljb25Ob2RlID0gbWUuZ2V0VmRvbVJvb3QoKS5jblswXTtcblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoaWNvbk5vZGUuY2xzLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGljb25Ob2RlLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpY29uTm9kZS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChpY29uTm9kZS5jbHMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNvbG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJY29uQ29sb3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpY29uTm9kZSA9IG1lLmdldFZkb21Sb290KCkuY25bMF07XG5cbiAgICAgICAgaWYgKCFpY29uTm9kZS5zdHlsZSkge1xuICAgICAgICAgICAgaWNvbk5vZGUuc3R5bGUgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGljb25Ob2RlLnN0eWxlLmNvbG9yID0gdmFsdWU7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvblBvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEljb25Qb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICdpY29uLScgKyBvbGRWYWx1ZSk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICdpY29uLScgKyB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwcmVzc2VkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UHJlc3NlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID09PSB0cnVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAncHJlc3NlZCcpO1xuICAgICAgICB0aGlzLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJvdXRlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJvdXRlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyB8fCBbXTtcblxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNsaWNrOiBtZS5jaGFuZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIHRleHROb2RlID0gdmRvbVJvb3QuY25bMV07XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKG1lLl9jbHMsICAgICAgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tUm9vdC5jbHMsICduby10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLl9jbHMsICAgICAgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZSh2ZG9tUm9vdC5jbHMsICduby10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgIHRleHROb2RlLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1cmwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXJsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmRvbVJvb3QuaHJlZiA9IHZhbHVlO1xuICAgICAgICAgICAgdmRvbVJvb3QudGFnICA9ICdhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB2ZG9tUm9vdC5ocmVmO1xuICAgICAgICAgICAgdmRvbVJvb3QudGFnID0gJ2J1dHRvbic7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVybFRhcmdldCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVcmxUYXJnZXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCk7XG5cbiAgICAgICAgaWYgKG1lLnVybCkge1xuICAgICAgICAgICAgdmRvbVJvb3QudGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdmRvbVJvb3QudGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGljb25DbHMgYXJyYXkgaW50byBhIHN0cmluZyBvbiBiZWZvcmVHZXRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRJY29uQ2xzKCkge1xuICAgICAgICBsZXQgaWNvbkNscyA9IHRoaXMuX2ljb25DbHM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWNvbkNscykpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uQ2xzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpY29uQ2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGljb25DbHMgY29uZmlnIGdldHMgY2hhbmdlZC4gQ29udmVydHMgdGhlIHN0cmluZyBpbnRvIGFuIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRJY29uQ2xzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgaWNvblBvc2l0aW9uIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0SWNvblBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnaWNvblBvc2l0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNoYW5nZVJvdXRlKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmVkaXRSb3V0ZSkge1xuICAgICAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHRoaXMucm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5yb3V0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvcmVCYXNlICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRmlsdGVyICAgICBmcm9tICcuL0ZpbHRlci5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBTb3J0ZXIgICAgIGZyb20gJy4vU29ydGVyLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBVdGlsICAgICAgIGZyb20gJy4uL2NvcmUvVXRpbC5tanMnO1xuXG5jb25zdCBjb3VudE11dGF0aW9ucyAgID0gU3ltYm9sKCdjb3VudE11dGF0aW9ucycpLFxuICAgICAgaXNGaWx0ZXJlZCAgICAgICA9IFN5bWJvbCgnaXNGaWx0ZXJlZCcpLFxuICAgICAgaXNTb3J0ZWQgICAgICAgICA9IFN5bWJvbCgnaXNTb3J0ZWQnKSxcbiAgICAgIHNpbGVudFVwZGF0ZU1vZGUgPSBTeW1ib2woJ3NpbGVudFVwZGF0ZU1vZGUnKSxcbiAgICAgIHRvQWRkQXJyYXkgICAgICAgPSBTeW1ib2woJ3RvQWRkQXJyYXknKSxcbiAgICAgIHRvUmVtb3ZlQXJyYXkgICAgPSBTeW1ib2woJ3RvUmVtb3ZlQXJyYXknKSxcbiAgICAgIHVwZGF0aW5nSW5kZXggICAgPSBTeW1ib2woJ3VwZGF0aW5nSW5kZXgnKTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29sbGVjdGlvbi5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbGxlY3Rpb24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaGVuIGZpbHRlcmluZyB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIGZpcnN0IHRpbWUsIGFsbEl0ZW1zIHdpbGwgYmVjb21lIGEgbmV3IGNvbGxlY3Rpb24gZm9yIHRoZSB1bmZpbHRlcmVkXG4gICAgICAgICAqIHN0YXRlLCB1c2luZyB0aGlzIGlkIGFzIHRoZSBzb3VyY2VDb2xsZWN0aW9uSWRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZXxudWxsfSBhbGxJdGVtc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBhbGxJdGVtczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gc29ydCB0aGUgY29sbGVjdGlvbiBpdGVtcyB3aGVuIGFkZGluZyAvIGluc2VydGluZyBuZXcgb25lc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvU29ydFxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1NvcnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgJ3ByaW1pdGl2ZScgZm9yIGRlZmF1bHQgZmlsdGVycywgdXNlICdhZHZhbmNlZCcgZm9yIGZpbHRlcnMgdXNpbmcgYSBmaWx0ZXJCeSBtZXRob2RcbiAgICAgICAgICogd2hpY2ggbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgY29sbGVjdGlvbiBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGZpbHRlck1vZGU9J3ByaW1pdGl2ZSdcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlck1vZGU6ICdwcmltaXRpdmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gQXJyYXkgY29udGFpbmluZyBOZW8udXRpbC5GaWx0ZXIgY29uZmlnIG9iamVjdHMgb3IgaW5zdGFuY2VzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBmaWx0ZXJzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSghKSBrZXkgcHJvcGVydHkgb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUoISkga2V5IHByb3BlcnR5IG9mIGVhY2ggY29sbGVjdGlvbiBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge3N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIG1hcCBjb250YWluaW5nIHRoZSBrZXkgJiByZWZlcmVuY2Ugb2YgZWFjaCBjb2xsZWN0aW9uIGl0ZW0gZm9yIGZhc3RlciBhY2Nlc3NcbiAgICAgICAgICogQG1lbWJlciB7TWFwfSBtYXBfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1hcF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbnRlcm5hbCBBcnJheSBvZiB0aGUgc29ydCBkaXJlY3Rpb25zIGZvciBmYXN0ZXIgYWNjZXNzXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBzb3J0RGlyZWN0aW9ucz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNvcnREaXJlY3Rpb25zOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW50ZXJuYWwgQXJyYXkgb2YgdGhlIHNvcnQgcHJvcGVydGllcyBmb3IgZmFzdGVyIGFjY2Vzc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydFByb3BlcnRpZXM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0UHJvcGVydGllczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIEFycmF5IGNvbnRhaW5pbmcgTmVvLnV0aWwuU29ydGVyIGNvbmZpZyBvYmplY3RzIG9yIGluc3RhbmNlc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gc29ydGVyc189W11cbiAgICAgICAgICovXG4gICAgICAgIHNvcnRlcnNfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpZCBvZiBhbm90aGVyIGNvbGxlY3Rpb24gaW5zdGFuY2UgdG8gdXNlIGFzIHRoaXMgZGF0YSBzb3VyY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHNvdXJjZUlkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VJZF86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzeW1ib2xDb25maWcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlfTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvdW50TXV0YXRpb25zXSAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzRmlsdGVyZWRdICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW2lzU29ydGVkXSAgICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3NpbGVudFVwZGF0ZU1vZGVdOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogZmFsc2V9LFxuICAgICAgICAgICAgW3RvQWRkQXJyYXldICAgICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3RvUmVtb3ZlQXJyYXldICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogW119LFxuICAgICAgICAgICAgW3VwZGF0aW5nSW5kZXhdICAgOiB7Li4uc3ltYm9sQ29uZmlnLCB2YWx1ZTogMH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLmF1dG9Tb3J0ICYmIG1lLl9zb3J0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1lLmRvU29ydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgbGVuZ3RoIG9mIHRoZSBjb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBpdGVtIFRoZSBpdGVtKHMpIHRvIGFkZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBjb2xsZWN0aW9uIGNvdW50XG4gICAgICovXG4gICAgYWRkKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgbnVsbCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmlsdGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZS5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIub24oJ2NoYW5nZScsIG1lLm9uRmlsdGVyQ2hhbmdlLCBtZSk7XG4gICAgICAgICAgICAgICAgZmlsdGVyLmxpc3RlbmVyQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgbWUuZmlsdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleVByb3BlcnR5ID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IHZhbHVlLmxlbmd0aCxcbiAgICAgICAgICAgIGl0ZW07XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaXRlbSA9IHZhbHVlW2ldO1xuICAgICAgICAgICAgbWUubWFwLnNldChpdGVtW2tleVByb3BlcnR5XSwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmFwcGx5U29ydGVyQ29uZmlncygpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goc29ydGVyID0+IHtcbiAgICAgICAgICAgIGlmIChzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHNvcnRlci5vbignY2hhbmdlJywgbWUub25Tb3J0ZXJDaGFuZ2UsIG1lKTtcbiAgICAgICAgICAgICAgICBzb3J0ZXIubGlzdGVuZXJBcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICYmIG1lLmF1dG9Tb3J0KSB7XG4gICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3VyY2VJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBzb3VyY2UgPSBOZW8uZ2V0KHZhbHVlKTtcblxuICAgICAgICAgICAgbWUuX2l0ZW1zID0gWy4uLnNvdXJjZS5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwICAgID0gbmV3IE1hcChzb3VyY2UubWFwKTsgLy8gY3JlYXRlcyBhIGNsb25lIG9mIHRoZSBvcmlnaW5hbCBtYXBcblxuICAgICAgICAgICAgY29uc3QgbGlzdGVuZXJzQ29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG11dGF0ZTogbWUub25NdXRhdGUsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc291cmNlLm9uKGxpc3RlbmVyc0NvbmZpZyk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlclNldFNvdXJjZUlkJywgc291cmNlKTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc291cmNlID0gTmVvLmdldChvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgc291cmNlLnVuKGxpc3RlbmVyc0NvbmZpZyk7IC8vIHRvZG86IGNvcmUuT2JzZXJ2YWJsZS51biBuZWVkcyB0byBzdXBwb3J0IHRoaXMgc3ludGF4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTYXZlcyB0aGUgc29ydCBwcm9wZXJ0eSAmIGRpcmVjdGlvbiBtdWx0aXBsaWVyIG9mIGVhY2ggc29ydGVyIGluc2lkZSAyIGFycmF5cyBmb3IgZmFzdGVyIGFjY2VzcyB3aGVuIHNvcnRpbmdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlTb3J0ZXJDb25maWdzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnNvcnREaXJlY3Rpb25zID0gW107XG4gICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzID0gW107XG5cbiAgICAgICAgbWUuc29ydGVycy5mb3JFYWNoKHNvcnRlciA9PiB7Ly9jb25zb2xlLmxvZygnZm9yRWFjaCcsIHNvcnRlcik7XG4gICAgICAgICAgICBtZS5zb3J0RGlyZWN0aW9ucy5wdXNoKHNvcnRlci5kaXJlY3Rpb25NdWx0aXBsaWVyKTtcbiAgICAgICAgICAgIG1lLnNvcnRQcm9wZXJ0aWVzLnB1c2goc29ydGVyLnByb3BlcnR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hcHxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TWFwfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldE1hcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICF2YWx1ZSA/IG5ldyBNYXAoKSA6IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlID8gW3ZhbHVlXSA6IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxlbiA9IG9sZFZhbHVlICYmIG9sZFZhbHVlLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaGFzTWF0Y2gsIGk7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpICAgICAgICA9IDA7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZVtpXSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5zZXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBrZXkub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IGtleS5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDoga2V5LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZVtpXS5vcGVyYXRvciA9PT0gKGtleS5vcGVyYXRvciB8fCAnPT09JykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnByb3BlcnR5ID09PSBrZXkucHJvcGVydHkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlW2ldLnZhbHVlICAgID09PSBrZXkudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IE5lby5jcmVhdGUoRmlsdGVyLCBrZXkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBvbGRWYWx1ZVtpXTtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgbGVuLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGtleS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U29ydGVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IFt2YWx1ZV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsZW4gPSBvbGRWYWx1ZSAmJiBvbGRWYWx1ZS5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc01hdGNoLCBpO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaSAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWVbaV0gPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWVbaV0uc2V0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IGtleS5kaXJlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiBrZXkucHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRWYWx1ZVtpXS5wcm9wZXJ0eSA9PT0ga2V5LnByb3BlcnR5ICYmIG9sZFZhbHVlW2ldLmRpcmVjdGlvbiA9PT0ga2V5LmRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKFNvcnRlciwga2V5KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gb2xkVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGxlbi0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBrZXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjYWNoZVVwZGF0ZShvcHRzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZVVwZGF0ZScsIG9wdHMsIHRoaXNbdG9BZGRBcnJheV0pO3JldHVybjtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAga2V5UHJvcGVydHkgPSBtZS5rZXlQcm9wZXJ0eSxcbiAgICAgICAgICAgIGluZGV4LCB0b0FkZE1hcCwgdG9SZW1vdmVNYXA7XG5cbiAgICAgICAgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xuICAgICAgICAgICAgdG9BZGRNYXAgICAgPSBtZVt0b0FkZEFycmF5XSAgIC5tYXAoZSA9PiBlW2tleVByb3BlcnR5XSk7XG4gICAgICAgICAgICB0b1JlbW92ZU1hcCA9IG1lW3RvUmVtb3ZlQXJyYXldLm1hcChlID0+IGVba2V5UHJvcGVydHldKTtcblxuICAgICAgICAgICAgb3B0cy5hZGRlZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID0gdG9SZW1vdmVNYXAuaW5kZXhPZihpdGVtW2tleVByb3BlcnR5XSkgPiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBtZVt0b0FkZEFycmF5XS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvcHRzLnJlbW92ZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9IHRvQWRkTWFwLmluZGV4T2YoaXRlbVtrZXlQcm9wZXJ0eV0pID4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0b1JlbW92ZU1hcC5pbmRleE9mKGl0ZW1ba2V5UHJvcGVydHldKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGl0ZW1zIGFuZCBjbGVhcnMgdGhlIG1hcFxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9pdGVtcy5zcGxpY2UoMCwgbWUuZ2V0Q291bnQoKSk7XG4gICAgICAgIG1lLm1hcC5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY3VycmVudCBmaWx0ZXJzIGFuZCBvcHRpb25hbGx5IHJlc3RvcmVzIHRoZSBvcmlnaW5hbCBvbmVzIGluIGNhc2UgdGhleSBleGlzdGVkLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3Jlc3RvcmVPcmlnaW5hbEZpbHRlcnM9ZmFsc2VdXG4gICAgICovXG4gICAgY2xlYXJGaWx0ZXJzKHJlc3RvcmVPcmlnaW5hbEZpbHRlcnMpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gcmVzdG9yZU9yaWdpbmFsRmlsdGVycyA/IE5lby5jbG9uZSh0aGlzLm9yaWdpbmFsQ29uZmlnLmZpbHRlcnMsIHRydWUsIHRydWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIGN1cnJlbnQgc29ydGVycyBhbmQgb3B0aW9uYWxseSByZXN0b3JlcyB0aGUgb3JpZ2luYWwgb25lcyBpbiBjYXNlIHRoZXkgZXhpc3RlZC5cbiAgICAgKiBXaXRob3V0IHJlc3RvcmVJbml0aWFsU3RhdGUgYXMgdHJ1ZSB0aGlzIHdpbGwgbm90IGFmZmVjdCB0aGUgY3VycmVudCBzb3J0aW5nIG9mIHRoaXMgY29sbGVjdGlvbi5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzPWZhbHNlXVxuICAgICAqL1xuICAgIGNsZWFyU29ydGVycyhyZXN0b3JlT3JpZ2luYWxTb3J0ZXJzKSB7XG4gICAgICAgIHRoaXMuc29ydGVycyA9IHJlc3RvcmVPcmlnaW5hbFNvcnRlcnMgPyBOZW8uY2xvbmUodGhpcy5vcmlnaW5hbENvbmZpZy5zb3J0ZXJzLCB0cnVlLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gVGhlIGNsb25lZCBjb2xsZWN0aW9uXG4gICAgICovXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyAgPSBOZW8uY2xvbmUobWUub3JpZ2luYWxDb25maWcsIHRydWUpLFxuICAgICAgICAgICAgZmlsdGVycyA9IG1lLl9maWx0ZXJzIHx8IFtdLFxuICAgICAgICAgICAgc29ydGVycyA9IG1lLl9zb3J0ZXJzIHx8IFtdO1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuaWQ7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuZmlsdGVycztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5zb3J0ZXJzO1xuXG4gICAgICAgIGlmIChtZS5faXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gWy4uLm1lLl9pdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWcuZmlsdGVycyA9IFtdO1xuICAgICAgICBjb25maWcuc29ydGVycyA9IFtdO1xuXG4gICAgICAgIC8vIHRvZG86IGZpbHRlcnMgJiBzb3J0ZXJzIHNob3VsZCBwdXNoIHRoZWlyIGN1cnJlbnQgc3RhdGUgYW5kIG5vdCB0aGUgb3JpZ2luYWwgb25lXG5cbiAgICAgICAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlcikge1xuICAgICAgICAgICAgY29uZmlnLmZpbHRlcnMucHVzaChmaWx0ZXIub3JpZ2luYWxDb25maWcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzb3J0ZXJzLmZvckVhY2goZnVuY3Rpb24oc29ydGVyKSB7XG4gICAgICAgICAgICBjb25maWcuc29ydGVycy5wdXNoKHNvcnRlci5vcmlnaW5hbENvbmZpZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKEJhc2UsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIHRoZSBtYXAgJiBpdGVtcyBhcnJheSBiZWZvcmUgdGhlIHN1cGVyIGNhbGxcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5faXRlbXMubGVuZ3RoKTtcbiAgICAgICAgbWUubWFwLmNsZWFyKCk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBkb1NvcnQoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICA9IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIHNvcnRlcnMgICAgICAgICAgID0gbWUuc29ydGVycyxcbiAgICAgICAgICAgIHNvcnREaXJlY3Rpb25zICAgID0gbWUuc29ydERpcmVjdGlvbnMsXG4gICAgICAgICAgICBzb3J0UHJvcGVydGllcyAgICA9IG1lLnNvcnRQcm9wZXJ0aWVzLFxuICAgICAgICAgICAgY291bnRTb3J0ZXJzICAgICAgPSBzb3J0UHJvcGVydGllcy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGhhc1NvcnRCeU1ldGhvZCAgID0gZmFsc2UsXG4gICAgICAgICAgICBoYXNUcmFuc2Zvcm1WYWx1ZSA9IGZhbHNlLFxuICAgICAgICAgICAgaSwgbWFwcGVkSXRlbXMsIG9iaiwgc29ydGVyLCBzb3J0UHJvcGVydHksIHNvcnRWYWx1ZTtcblxuICAgICAgICBpZiAoY291bnRTb3J0ZXJzID4gMCkge1xuICAgICAgICAgICAgc29ydGVycy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5zb3J0QnkpIHtcbiAgICAgICAgICAgICAgICAgICAgaGFzU29ydEJ5TWV0aG9kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybVZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGhhc1NvcnRCeU1ldGhvZCkge1xuICAgICAgICAgICAgICAgIG1lLl9pdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgY291bnRTb3J0ZXJzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRlciAgICA9IHNvcnRlcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0VmFsdWUgPSBzb3J0ZXJbc29ydGVyLnNvcnRCeSA/ICdzb3J0QnknIDogJ2RlZmF1bHRTb3J0QnknXShhLCBiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRWYWx1ZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzb3J0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1RyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NvcnQjU29ydGluZ193aXRoX21hcFxuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtpbmRleDogaW5kZXh9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaSAgID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0ZXJzW2ldLnVzZVRyYW5zZm9ybVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtzb3J0UHJvcGVydGllc1tpXV0gPSBzb3J0ZXJzW2ldLnRyYW5zZm9ybVZhbHVlKGl0ZW1bc29ydFByb3BlcnRpZXNbaV1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpbc29ydFByb3BlcnRpZXNbaV1dID0gaXRlbVtzb3J0UHJvcGVydGllc1tpXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXBwZWRJdGVtcyA9IGl0ZW1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1hcHBlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBjb3VudFNvcnRlcnM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydFByb3BlcnR5ID0gc29ydFByb3BlcnRpZXNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhW3NvcnRQcm9wZXJ0eV0gPiBiW3NvcnRQcm9wZXJ0eV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMSAqIHNvcnREaXJlY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYVtzb3J0UHJvcGVydHldIDwgYltzb3J0UHJvcGVydHldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xICogc29ydERpcmVjdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5faXRlbXMgPSBtYXBwZWRJdGVtcy5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zW2VsLmluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWVbaXNTb3J0ZWRdID0gY291bnRTb3J0ZXJzID4gMDtcblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3NvcnQnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc3VtZXMgdGhlIGNvbGxlY3Rpb24gZXZlbnRzLlxuICAgICAqIElmIHlvdSBzdGFydGVkIGFuIHVwZGF0ZSB1c2luZyB0aGUgc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGZsYWcsXG4gICAgICogeW91IG11c3QgdXNlIHRoZSBlbmRTaWxlbnRVcGRhdGVNb2RlIHBhcmFtIGZvciB0aGlzIGNhbGwuXG4gICAgICogVXNpbmcgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gd2lsbCBub3QgZmlyZSBhIG11dGF0aW9uIGV2ZW50LlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VuZFNpbGVudFVwZGF0ZU1vZGVdXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvbGxlY3Rpb24uQmFzZSNzdGFydFVwZGF0ZSBzdGFydFVwZGF0ZX1cbiAgICAgKi9cbiAgICBlbmRVcGRhdGUoZW5kU2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lW3VwZGF0aW5nSW5kZXhdID4gMCkge1xuICAgICAgICAgICAgbWVbdXBkYXRpbmdJbmRleF0tLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmRTaWxlbnRVcGRhdGVNb2RlKSB7XG4gICAgICAgICAgICBtZVtzaWxlbnRVcGRhdGVNb2RlXSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogbWVbdG9BZGRBcnJheV0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiBtZVt0b1JlbW92ZUFycmF5XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lW3RvQWRkQXJyYXldICAgLnNwbGljZSgwLCBtZVt0b0FkZEFycmF5XSAgIC5sZW5ndGgpO1xuICAgICAgICAgICAgbWVbdG9SZW1vdmVBcnJheV0uc3BsaWNlKDAsIG1lW3RvUmVtb3ZlQXJyYXldLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZmlsdGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgICAgICA9IG1lLl9maWx0ZXJzLFxuICAgICAgICAgICAgY291bnRBbGxGaWx0ZXJzID0gZmlsdGVycy5sZW5ndGgsXG4gICAgICAgICAgICBjb3VudEZpbHRlcnMgICAgPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgID0gbWUuYWxsSXRlbXMgJiYgbWUuYWxsSXRlbXMuX2l0ZW1zIHx8IG1lLl9pdGVtcyxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgICAgPSBpdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZywgaXNJbmNsdWRlZCwgaXRlbSwgaiwgdG1wSXRlbXM7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudEFsbEZpbHRlcnM7IGkrKykge1xuICAgICAgICAgICAgaWYgKCFmaWx0ZXJzW2ldLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgY291bnRGaWx0ZXJzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnRGaWx0ZXJzID09PSAwICYmIG1lLmFsbEl0ZW1zKSB7XG4gICAgICAgICAgICBtZS5jbGVhcigpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcyA9IFsuLi5tZS5hbGxJdGVtcy5faXRlbXNdO1xuICAgICAgICAgICAgbWUubWFwLnNldCguLi5tZS5hbGxJdGVtcy5tYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFtZS5hbGxJdGVtcykge1xuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHsuLi5tZS5vcmlnaW5hbENvbmZpZ307XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmZpbHRlcnM7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLnNvcnRlcnM7XG5cbiAgICAgICAgICAgICAgICBtZS5hbGxJdGVtcyA9IE5lby5jcmVhdGUoQmFzZSwge1xuICAgICAgICAgICAgICAgICAgICAuLi5OZW8uY2xvbmUoY29uZmlnLCB0cnVlLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAga2V5UHJvcGVydHk6IG1lLmtleVByb3BlcnR5LFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VJZCAgIDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGlsZCBjb2xsZWN0aW9uJywgbWUuYWxsSXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5tYXAuY2xlYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1lLmZpbHRlck1vZGUgPT09ICdwcmltaXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgZm9yIGxvb3BzIG9uIHB1cnBvc2UgLT4gcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtICAgICAgID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGogICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJzW2pdLmlzRmlsdGVyZWQoaXRlbSwgaXRlbXMsIGl0ZW1zKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzSW5jbHVkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0luY2x1ZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5tYXAuc2V0KGl0ZW1bbWUua2V5UHJvcGVydHldLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLl9pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHNpbGVudCB1cGRhdGUsIHRoZSBtYXAgaXMgYWxyZWFkeSBpbiBwbGFjZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gWy4uLml0ZW1zXTtcblxuICAgICAgICAgICAgICAgIGZvciAoaj0wOyBqIDwgY291bnRBbGxGaWx0ZXJzOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpbHRlcnNbal0uaXNGaWx0ZXJlZChmaWx0ZXJlZEl0ZW1zW2ldLCBmaWx0ZXJlZEl0ZW1zLCBpdGVtcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBJdGVtcy5wdXNoKGZpbHRlcmVkSXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcyA9IFsuLi50bXBJdGVtc107XG4gICAgICAgICAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBmaWx0ZXJlZEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5pdGVtcyA9IGZpbHRlcmVkSXRlbXM7IC8vIHVwZGF0ZSB0aGUgbWFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZVtpc0ZpbHRlcmVkXSA9IGNvdW50RmlsdGVycyAhPT0gMDtcblxuICAgICAgICBtZS5maXJlKCdmaWx0ZXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpdGVtcyB3aGljaCBtYXRjaCB0aGUgcHJvcGVydHkgYW5kIHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYW4gZW1wdHkgQXJyYXkgaW4gY2FzZSBubyBpdGVtcyBhcmUgZm91bmRcbiAgICAgKi9cbiAgICBmaW5kKHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgID0gW10sXG4gICAgICAgICAgICBpc09iamVjdFByb3BlcnR5ID0gTmVvLmlzT2JqZWN0KHByb3BlcnR5KSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXksIHByb3BlcnRpZXNBcnJheSwgcHJvcGVydGllc0xlbmd0aDtcblxuICAgICAgICBpZiAoaXNPYmplY3RQcm9wZXJ0eSkge1xuICAgICAgICAgICAgcHJvcGVydGllc0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKHByb3BlcnR5KTtcbiAgICAgICAgICAgIHByb3BlcnRpZXNMZW5ndGggPSBwcm9wZXJ0aWVzQXJyYXkubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgcHJvcGVydGllc0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IHByb3BlcnRpZXNMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpdGVtW3Byb3BlcnR5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgaXRlbXMgaW4gdGhlIGNvbGxlY3Rpb24gZm9yIHdoaWNoIHRoZSBwYXNzZWQgZnVuY3Rpb24gcmV0dXJucyB0cnVlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBmb3IgZWFjaCBpdGVtIGluc2lkZSB0aGUgc3RhcnQtZW5kIHJhbmdlLiBSZXR1cm4gdHJ1ZSBmb3IgYSBtYXRjaC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZm4uaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlPXRoaXNdIFRoZSBzY29wZSBpbiB3aGljaCB0aGUgcGFzc2VkIGZ1bmN0aW9uIGdldHMgZXhlY3V0ZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZW5kPXRoaXMuZ2V0Q291bnQoKV0gVGhlIGVuZCBpbmRleCAodXAgdG8sIGxhc3QgdmFsdWUgZXhjbHVkZWQpXG4gICAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGFuIGVtcHR5IEFycmF5IGluIGNhc2Ugbm8gaXRlbXMgYXJlIGZvdW5kXG4gICAgICovXG4gICAgZmluZEJ5KGZuLCBzY29wZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbXSxcbiAgICAgICAgICAgIGkgICAgID0gc3RhcnQgfHwgMCxcbiAgICAgICAgICAgIGxlbiAgID0gZW5kICAgfHwgbWUuZ2V0Q291bnQoKTtcblxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IG1lO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmbi5jYWxsKHNjb3BlLCBtZS5pdGVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKG1lLml0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBpdGVtIGluc2lkZSB0aGUgY29sbGVjdGlvblxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZmlyc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBvYmplY3QgYXNzb2NpYXRlZCB0byB0aGUga2V5LCBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm9uZS5cbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge09iamVjdHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaXRlbSBmb3IgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEF0KGluZGV4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1tpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBpbnRlcm5hbCBpdGVtcyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGdldENvdW50TXV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpc1tjb3VudE11dGF0aW9uc107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZmlsdGVyIGZvciB0aGUgZ2l2ZW4gcHJvcGVydHkgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkZpbHRlcnxudWxsfVxuICAgICAqL1xuICAgIGdldEZpbHRlcihwcm9wZXJ0eSkge1xuICAgICAgICBsZXQgZmlsdGVycyA9IHRoaXMuZmlsdGVycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICA9IGZpbHRlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLnByb3BlcnR5ID09PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXJzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUga2V5IGZvciBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcnxTdHJpbmd8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldEtleUF0KGluZGV4KSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4gaXRlbSAmJiBpdGVtW3RoaXMua2V5UHJvcGVydHldO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzaGFsbG93IGNvcHkgb2YgYSBwb3J0aW9uIG9mIHRoZSBpdGVtcyBhcnJheVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRdIFplcm8tYmFzZWQgaW5kZXggYXQgd2hpY2ggdG8gYmVnaW4gZXh0cmFjdGlvbi5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZF0gWmVyby1iYXNlZCBpbmRleCBiZWZvcmUgd2hpY2ggdG8gZW5kIGV4dHJhY3Rpb24gKGV4dHJhY3RzIHVwIHRvIGJ1dCBub3QgaW5jbHVkaW5nIGVuZCkuXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3NsaWNlXG4gICAgICovXG4gICAgZ2V0UmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgU291cmNlIENvbGxlY3Rpb24gaW4gY2FzZSB0aGUgc291cmNlQ29sbGVjdGlvbklkIGNvbmZpZyB3YXMgc2V0XG4gICAgICogQHJldHVybnMge05lby5jb2xsZWN0aW9uLkJhc2V8dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGdldFNvdXJjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlSWQgJiYgTmVvLmdldCh0aGlzLnNvdXJjZUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIFJldHVybnMgYSBib29sZWFuIGFzc2VydGluZyB3aGV0aGVyIGEgdmFsdWUgaGFzIGJlZW4gYXNzb2NpYXRlZCB0byB0aGUga2V5IGluIHRoZSBDb2xsZWN0aW9uIG9yIG5vdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXAuaGFzKGtleSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGJvb2xlYW4gYXNzZXJ0aW5nIHdoZXRoZXIgYW4gaXRlbSBleGlzdHMgaW4gdGhlIENvbGxlY3Rpb24gb3Igbm90XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNJdGVtKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwLmhhcyhpdGVtW3RoaXMua2V5UHJvcGVydHldKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBrZXkgb3IgaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xPYmplY3R9IGtleVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGluZGV4ICgtMSBpbiBjYXNlIG5vIG1hdGNoIGlzIGZvdW5kKVxuICAgICAqL1xuICAgIGluZGV4T2Yoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKFV0aWwuaXNPYmplY3Qoa2V5KSA/IGtleSA6IHRoaXMubWFwLmdldChrZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbmRleCBmb3IgYSBnaXZlbiBpdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpbmRleCAoLTEgaW4gY2FzZSBubyBtYXRjaCBpcyBmb3VuZClcbiAgICAgKi9cbiAgICBpbmRleE9mSXRlbShpdGVtKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5pbmRleE9mKGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGluZGV4IGZvciBhIGdpdmVuIGtleVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge051bWJlcn0gaW5kZXggKC0xIGluIGNhc2Ugbm8gbWF0Y2ggaXMgZm91bmQpXG4gICAgICovXG4gICAgaW5kZXhPZktleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmluZGV4T2YodGhpcy5tYXAuZ2V0KGtleSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhbiBhcnJheSBvZiBpdGVtcyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb2xsZWN0aW9uIGlzIGZpbHRlcmVkXG4gICAgICovXG4gICAgaXNGaWx0ZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNGaWx0ZXJlZF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkSXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnMgICAgPSBtZS5fZmlsdGVycyxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGZpbHRlcnMubGVuZ3RoLFxuICAgICAgICAgICAgaXNGaWx0ZXJlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJzW2ldLmlzRmlsdGVyZWQoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBpc0ZpbHRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpc0ZpbHRlcmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgY29sbGVjdGlvbiBpcyBzb3J0ZWRcbiAgICAgKi9cbiAgICBpc1NvcnRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbaXNTb3J0ZWRdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxhc3QgaXRlbSBpbnNpZGUgdGhlIGNvbGxlY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxhc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtc1t0aGlzLmdldENvdW50KCkgLTFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25GaWx0ZXJDaGFuZ2Uob3B0cykge1xuICAgICAgICB0aGlzLmZpbHRlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25NdXRhdGUob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvcHRzLnByZXZlbnRCdWJibGVVcCkge1xuICAgICAgICAgICAgbWUucHJldmVudEJ1YmJsZVVwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNwbGljZShudWxsLCBvcHRzLnJlbW92ZWRJdGVtcywgb3B0cy5hZGRlZEl0ZW1zKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnb25NdXRhdGUnLCBtZS5nZXRDb3VudCgpLCBtZS5pZCwgb3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNvcnRlckNoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuYXBwbHlTb3J0ZXJDb25maWdzKCk7XG4gICAgICAgIHRoaXMuZG9Tb3J0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgbGFzdCBlbGVtZW50IGZyb20gdGhlIGl0ZW1zIGFycmF5IGFuZCByZXR1cm5zIHRoaXMgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgcmVtb3ZlZCBlbGVtZW50IGZyb20gdGhlIGNvbGxlY3Rpb247IHVuZGVmaW5lZCBpZiB0aGUgY29sbGVjdGlvbiBpcyBlbXB0eS5cbiAgICAgKi9cbiAgICBwb3AoKSB7XG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKHRoaXMuZ2V0Q291bnQoKSAtMSwgMSk7XG4gICAgICAgIHJldHVybiBtdXRhdGlvbi5yZW1vdmVkSXRlbXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBpdGVtcyB0byB0aGUgZW5kIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgaXRlbXMgY291bnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHB1c2goaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGdpdmVuIGtleSwgaXRlbSBvciBBcnJheSBjb250YWluaW5nIGtleXN8aXRlbXNcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8T2JqZWN0fEFycmF5fSBrZXlcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgdGhpcy5zcGxpY2UoMCwgQXJyYXkuaXNBcnJheShrZXkpID8ga2V5IDogW2tleV0pO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcn0gdGhlIGNvbGxlY3Rpb24gY291bnRcbiAgICAgKi9cbiAgICByZW1vdmVBdChpbmRleCkge1xuICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV2ZXJzZXMgdGhlIGl0ZW1zIGFycmF5IGluIHBsYWNlLlxuICAgICAqIEludGVuZGVkIGZvciBjb2xsZWN0aW9ucyB3aXRob3V0IHNvcnRlcnMuXG4gICAgICogQHJldHVybnMge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmlyc3QgZWxlbWVudCBmcm9tIHRoZSBpdGVtcyBhcnJheSBhbmQgcmV0dXJucyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIHJlbW92ZWQgZWxlbWVudCBmcm9tIHRoZSBjb2xsZWN0aW9uOyB1bmRlZmluZWQgaWYgdGhlIGNvbGxlY3Rpb24gaXMgZW1wdHkuXG4gICAgICovXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIGxldCBtdXRhdGlvbiA9IHRoaXMuc3BsaWNlKDAsIDEpO1xuICAgICAgICByZXR1cm4gbXV0YXRpb24uYWRkZWRJdGVtc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIEZ1bmN0aW9uIHRvIHRlc3QgZm9yIGVhY2ggaXRlbSwgdGFraW5nIHRocmVlIHBhcmFtZXRlcnM6XG4gICAgICogQHBhcmFtIHtPYmplY3R9ICAgY2FsbGJhY2suaXRlbSBUaGUgY3VycmVudCBjb2xsZWN0aW9uIGl0ZW0gYmVpbmcgcHJvY2Vzc2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9ICBbY2FsbGJhY2suaW5kZXhdIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBpdGVtIGJlaW5nIHByb2Nlc3NlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9ICAgW2NhbGxiYWNrLml0ZW1zXSBUaGUgaXRlbXMgYXJyYXkgb2YgdGhlIGNvbGxlY3Rpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdIFZhbHVlIHRvIHVzZSBhcyBcInRoaXNcIiB3aGVuIGV4ZWN1dGluZyB0aGUgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSBmb3IgYW55IGNvbGxlY3Rpb24gaXRlbSwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgc29tZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcy5zb21lKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgaXRlbXMgZnJvbSBhbmQvb3IgYWRkcyBpdGVtcyB0byB0aGlzIGNvbGxlY3Rpb25cbiAgICAgKiBJZiB0aGUgdG9SZW1vdmVBcnJheSBpcyB1c2VkLCB0aGVuIHRoZSBpbmRleCBpcyBub3QgdXNlZCBmb3IgcmVtb3ZpbmcsIHRoZSBlbnRyaWVzIGFyZSBmb3VuZCBieSBrZXkgYW5kIHJlbW92ZWQgZnJvbSB3aGVyZSB0aGV5IGFyZS5cbiAgICAgKiBJZiBpbmRleCBpcyBub3QgcGFzc2VkLCB0b0FkZEFycmF5IGlzIGFwcGVuZGVkIHRvIHRoZSBDb2xsZWN0aW9uLlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfG51bGx9IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ8QXJyYXl9IFtyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheV1cbiAgICAgKiBAcGFyYW0ge0FycmF5fCBPYmplY3R9IFt0b0FkZEFycmF5XVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBhZGRlZEl0ZW1zICYgcmVtb3ZlZEl0ZW1zIGFycmF5c1xuICAgICAqL1xuICAgIHNwbGljZShpbmRleCwgcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXksIHRvQWRkQXJyYXkpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzb3VyY2UgICAgICAgICAgICAgPSBtZS5nZXRTb3VyY2UoKSxcbiAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAga2V5UHJvcGVydHkgICAgICAgID0gbWUua2V5UHJvcGVydHksXG4gICAgICAgICAgICBtYXAgICAgICAgICAgICAgICAgPSBtZS5tYXAsXG4gICAgICAgICAgICByZW1vdmVkSXRlbXMgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHJlbW92ZUNvdW50QXRJbmRleCA9IFV0aWwuaXNOdW1iZXIocmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkpID8gcmVtb3ZlQ291bnRPclRvUmVtb3ZlQXJyYXkgOiBudWxsLFxuICAgICAgICAgICAgdG9SZW1vdmVBcnJheSAgICAgID0gQXJyYXkuaXNBcnJheShyZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSkgPyByZW1vdmVDb3VudE9yVG9SZW1vdmVBcnJheSA6IG51bGwsXG4gICAgICAgICAgICBpLCBpdGVtLCBrZXksIGxlbiwgdG9BZGRNYXA7XG5cbiAgICAgICAgaWYgKCFpbmRleCAmJiByZW1vdmVDb3VudEF0SW5kZXgpIHtcbiAgICAgICAgICAgIExvZ2dlci5lcnJvcihtZS5pZCArICc6IElmIGluZGV4IGlzIG5vdCBwYXNzZWQsIHJlbW92ZUNvdW50QXRJbmRleCBjYW5ub3QgYmUgdXNlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9BZGRBcnJheSA9IHRvQWRkQXJyYXkgJiYgIUFycmF5LmlzQXJyYXkodG9BZGRBcnJheSkgPyBbdG9BZGRBcnJheV0gOiB0b0FkZEFycmF5O1xuXG4gICAgICAgIGlmICh0b1JlbW92ZUFycmF5ICYmIChsZW4gPSB0b1JlbW92ZUFycmF5Lmxlbmd0aCkgPiAwKSB7XG4gICAgICAgICAgICBpZiAodG9BZGRBcnJheSAmJiB0b0FkZEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0b0FkZE1hcCA9IHRvQWRkQXJyYXkubWFwKGUgPT4gZVtrZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGk9MDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHRvUmVtb3ZlQXJyYXlbaV07XG4gICAgICAgICAgICAgICAga2V5ICA9IFV0aWwuaXNPYmplY3QoaXRlbSkgPyBpdGVtW2tleVByb3BlcnR5XSA6IGl0ZW07XG5cbiAgICAgICAgICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdG9BZGRNYXAgfHwgKHRvQWRkTWFwICYmIHRvQWRkTWFwLmluZGV4T2Yoa2V5KSA8IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMucHVzaChpdGVtcy5zcGxpY2UobWUuaW5kZXhPZktleShrZXkpLCAxKVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVtb3ZlQ291bnRBdEluZGV4ICYmIHJlbW92ZUNvdW50QXRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHJlbW92ZWRJdGVtcy5wdXNoKC4uLml0ZW1zLnNwbGljZShpbmRleCwgcmVtb3ZlQ291bnRBdEluZGV4KSk7XG4gICAgICAgICAgICByZW1vdmVkSXRlbXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGVba2V5UHJvcGVydHldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRvQWRkQXJyYXkgJiYgKGxlbiA9IHRvQWRkQXJyYXkubGVuZ3RoKSA+IDApIHtcbiAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gdG9BZGRBcnJheVtpXTtcbiAgICAgICAgICAgICAgICBrZXkgID0gVXRpbC5pc09iamVjdChpdGVtKSA/IGl0ZW1ba2V5UHJvcGVydHldIDogaXRlbTtcblxuICAgICAgICAgICAgICAgIGlmICghbWFwLmhhcyhrZXkpICYmICFtZS5pc0ZpbHRlcmVkSXRlbShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIG1hcC5zZXQoa2V5LCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhZGRlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5zcGxpY2UoVXRpbC5pc051bWJlcihpbmRleCkgPyBpbmRleCA6IGl0ZW1zLmxlbmd0aCwgMCwgLi4uYWRkZWRJdGVtcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWUuYXV0b1NvcnQgJiYgbWUuX3NvcnRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBtZS5kb1NvcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoIXNvdXJjZS5nZXRTb3VyY2UoKSkge1xuICAgICAgICAgICAgICAgIHNvdXJjZS5wcmV2ZW50QnViYmxlVXAgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW1lLnByZXZlbnRCdWJibGVVcCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VyY2Ugc3BsaWNlJywgc291cmNlLmlkLCAnYWRkZWQ6JywgLi4udG9BZGRBcnJheSwgJ3JlbW92ZWQ6JywgLi4ucmVtb3ZlZEl0ZW1zKTtcbiAgICAgICAgICAgICAgICBtZS5zdGFydFVwZGF0ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKG51bGwsIHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zLCB0b0FkZEFycmF5KTtcbiAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSBzb3VyY2UucHJldmVudEJ1YmJsZVVwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFkZGVkSXRlbXMubGVuZ3RoID4gMCB8fCByZW1vdmVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWVbY291bnRNdXRhdGlvbnNdKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZihtZVt1cGRhdGluZ0luZGV4XSA9PT0gMCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnbXV0YXRlJywge1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgICAgIDogdG9BZGRBcnJheSxcbiAgICAgICAgICAgICAgICBwcmV2ZW50QnViYmxlVXA6IG1lLnByZXZlbnRCdWJibGVVcCxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXMgICA6IHRvUmVtb3ZlQXJyYXkgfHwgcmVtb3ZlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2UgaWYgKCFtZVtzaWxlbnRVcGRhdGVNb2RlXSkge1xuICAgICAgICAgICAgbWUuY2FjaGVVcGRhdGUoe1xuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXMgIDogYWRkZWRJdGVtcyxcbiAgICAgICAgICAgICAgICByZW1vdmVkSXRlbXM6IHJlbW92ZWRJdGVtc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVbdXBkYXRpbmdJbmRleF0gPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5wcmV2ZW50QnViYmxlVXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWRkZWRJdGVtcyAgOiBhZGRlZEl0ZW1zLFxuICAgICAgICAgICAgcmVtb3ZlZEl0ZW1zOiByZW1vdmVkSXRlbXNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcmV2ZW50cyB0aGUgY29sbGVjdGlvbiBmcm9tIGZpcmluZyBldmVudHMgdW50aWwgZW5kVXBkYXRlIGdldHMgY2FsbGVkLlxuICAgICAqIElmIHlvdSBzdGFydCBhbiB1cGRhdGUgdXNpbmcgdGhlIHN0YXJ0U2lsZW50VXBkYXRlTW9kZSBwYXJhbSxcbiAgICAgKiB0aGUgbXV0YXRpb24gZXZlbnQgd2lsbCBub3QgZmlyZSBhZnRlciB1c2luZyBlbmRVcGRhdGUoKVxuICAgICAqICh5b3UgbXVzdCB1c2UgdGhlIGVuZFNpbGVudFVwZGF0ZU1vZGUgcGFyYW0gZm9yIHRoZSBlbmRVcGRhdGUgY2FsbCBpbiBjYXNlIHlvdSB1c2VkXG4gICAgICogc3RhcnRTaWxlbnRVcGRhdGVNb2RlIGhlcmUpXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc3RhcnRTaWxlbnRVcGRhdGVNb2RlXVxuICAgICAqIEBzZWUge0BsaW5rIE5lby5jb2xsZWN0aW9uLkJhc2UjZW5kVXBkYXRlIGVuZFVwZGF0ZX1cbiAgICAgKi9cbiAgICBzdGFydFVwZGF0ZShzdGFydFNpbGVudFVwZGF0ZU1vZGUpIHtcbiAgICAgICAgaWYgKHN0YXJ0U2lsZW50VXBkYXRlTW9kZSkge1xuICAgICAgICAgICAgdGhpc1tzaWxlbnRVcGRhdGVNb2RlXSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzW3VwZGF0aW5nSW5kZXhdKys7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBvbmUgb3IgbW9yZSBlbGVtZW50cyB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjb2xsZWN0aW9uIGFuZCByZXR1cm5zIHRoZSBuZXcgaXRlbXMgY291bnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gaXRlbSBUaGUgaXRlbShzKSB0byBhZGRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgY29sbGVjdGlvbiBjb3VudFxuICAgICAqL1xuICAgIHVuc2hpZnQoaXRlbSkge1xuICAgICAgICB0aGlzLnNwbGljZSgwLCAwLCBpdGVtKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q291bnQoKTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIG11dGF0ZSBldmVudCBmaXJlcyBhZnRlciBldmVyeSBzcGxpY2UgY2FsbCAoaW52b2tlZCBieSBhbGwgbWV0aG9kcyB3aGljaCBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGl0ZW1zIGFycmF5KS5cbiAqIEBldmVudCBtdXRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0W119IGFkZGVkSXRlbXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJldmVudEJ1YmJsZVVwIHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0W119IHJlbW92ZWRJdGVtc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTsiLCJpbXBvcnQgQmFzZSAgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29sbGVjdGlvbi5GaWx0ZXJcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBvcGVyYXRvciBjb25maWc6PGJyPlxuICAgICAgICAgKiBbJz09JywgJz09PScsICchPScsICchPT0nLCAnPCcsICc8PScsICc+JywgJz49JywgJ2V4Y2x1ZGVkJywgJ2luY2x1ZGVkJywgJ2lzRGVmaW5lZCcsICdpc1VuZGVmaW5lZCcsICdsaWtlJ11cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IG9wZXJhdG9yc1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9wZXJhdG9yczogWyc9PScsICc9PT0nLCAnIT0nLCAnIT09JywgJzwnLCAnPD0nLCAnPicsICc+PScsICdleGNsdWRlZCcsICdpbmNsdWRlZCcsICdpc0RlZmluZWQnLCAnaXNVbmRlZmluZWQnLCAnbGlrZSddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5GaWx0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLkZpbHRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdmaWx0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZmlsdGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRpbmcgZGlzYWJsZWQgdG8gdHJ1ZSB3aWxsIGV4Y2x1ZGUgdGhpcyBmaWx0ZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmaWx0ZXJpbmcgbG9naWNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBmaWx0ZXJpbmcgZnVuY3Rpb24sIGhhcyBhIGhpZ2hlciBwcmlvcml0eSB0aGFuIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlXG4gICAgICAgICAqIEBtZW1iZXIge0Z1bmN0aW9ufG51bGx9IGZpbHRlckJ5Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJCeV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIG1lYW5zIG5vdCBmaWx0ZXJpbmcgb3V0IGl0ZW1zIGluIGNhc2UgdGhlIHZhbHVlIGlzICcnLCBudWxsLCBbXSBvciB7fVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpbmNsdWRlRW1wdHlWYWx1ZXM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgZmxhZyB0byB0cnVlIGJlZm9yZSBzdGFydGluZyBidWxrIHVwZGF0ZXMgKGUuZy4gY2hhbmdpbmcgcHJvcGVydHkgJiB2YWx1ZSlcbiAgICAgICAgICogdG8gcHJldmVudCBtdWx0aXBsZSBjaGFuZ2UgZXZlbnRzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzVXBkYXRpbmdfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc1VwZGF0aW5nXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3BlcmF0b3IgdG8gZmlsdGVyIGJ5ICh1c2UgdGhlIGNvbWJpbmF0aW9uIG9mIHByb3BlcnR5LCBvcGVyYXRvciAmIHZhbHVlKVxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6XG4gICAgICAgICAqXG4gICAgICAgICAqID09IChub3QgcmVjb21tZW5kZWQpXG4gICAgICAgICAqID09PVxuICAgICAgICAgKiAhPSAobm90IHJlY29tbWVuZGVkKVxuICAgICAgICAgKiAhPT1cbiAgICAgICAgICogPFxuICAgICAgICAgKiA+PVxuICAgICAgICAgKiA+XG4gICAgICAgICAqID49XG4gICAgICAgICAqIGxpa2UgKGNvbGxlY3Rpb25WYWx1ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSlcbiAgICAgICAgICogaW5jbHVkZWQgKGV4cGVjdHMgdmFsdWUgdG8gYmUgYW4gYXJyYXkpXG4gICAgICAgICAqIGV4Y2x1ZGVkIChleHBlY3RzIHZhbHVlIHRvIGJlIGFuIGFycmF5KVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG9wZXJhdG9yPSc9PT0nXG4gICAgICAgICAqL1xuICAgICAgICBvcGVyYXRvcl86ICc9PT0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHByb3BlcnR5IHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNjb3BlIHRvIHVzZSBmb3IgdGhlIGZpbHRlckJ5IG1ldGhvZCwgaW4gY2FzZSBpdCBpcyBwcm92aWRlZC4gRGVmYXVsdHMgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIHRvIGZpbHRlciBieSAodXNlIHRoZSBjb21iaW5hdGlvbiBvZiBwcm9wZXJ0eSwgb3BlcmF0b3IgJiB2YWx1ZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVfOiBudWxsXG4gICAgfX1cblxuICAgIGFmdGVyU2V0RGlzYWJsZWQoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBhZnRlclNldEZpbHRlckJ5KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAvLyB0b2RvXG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRJc1VwZGF0aW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRPcGVyYXRvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuZmlyZUNoYW5nZUV2ZW50KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGFmdGVyU2V0UHJvcGVydHkoLi4uYXJncykge1xuICAgICAgICB0aGlzLmZpcmVDaGFuZ2VFdmVudCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBhZnRlclNldFZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5maXJlQ2hhbmdlRXZlbnQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgYmVmb3JlU2V0RmlsdGVyQnkodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignZmlsdGVyQnkgaGFzIHRvIGJlIGEgZnVuY3Rpb24nLCB0aGlzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBvcGVyYXRvciBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0T3BlcmF0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdvcGVyYXRvcicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICovXG4gICAgZmlyZUNoYW5nZUV2ZW50KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1lLmlzVXBkYXRpbmcgIT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBvcGVyYXRvcjogbWUub3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLnByb3BlcnR5LFxuICAgICAgICAgICAgICAgIHZhbHVlICAgOiBtZS52YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgYSBjb2xsZWN0aW9uIGl0ZW0gbWF0Y2hlcyB0aGlzIGZpbHRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBjdXJyZW50IGNvbGxlY3Rpb24gaXRlbVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmVkSXRlbXMgSWYgdGhlIGNvbGxlY3Rpb24gZmlsdGVyTW9kZSBpcyBub3QgcHJpbWl0aXZlIGNvbnRhaW5zIHRoZSBpdGVtcyB3aGljaCBwYXNzZWRcbiAgICAgKiB0aGUgcHJldmlvdXMgZmlsdGVycywgb3RoZXJ3aXNlIGFsbCBjb2xsZWN0aW9uIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gYWxsSXRlbXMgYWxsIGNvbGxlY3Rpb24gaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0ZpbHRlcmVkKGl0ZW0sIGZpbHRlcmVkSXRlbXMsIGFsbEl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJWYWx1ZSwgcmVjb3JkVmFsdWU7XG5cbiAgICAgICAgaWYgKG1lLl9kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmluY2x1ZGVFbXB0eVZhbHVlcyAmJiAobWUuX3ZhbHVlID09PSBudWxsIHx8IE5lby5pc0VtcHR5KG1lLl92YWx1ZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuX2ZpbHRlckJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gbWUuZmlsdGVyQnkuY2FsbChtZS5zY29wZSB8fCBtZSwgaXRlbSwgZmlsdGVyZWRJdGVtcywgYWxsSXRlbXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmlsdGVyVmFsdWUgPSBtZS5fdmFsdWU7XG4gICAgICAgICAgICByZWNvcmRWYWx1ZSA9IGl0ZW1bbWUuX3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgaWYgKGZpbHRlclZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiByZWNvcmRWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJWYWx1ZSA9IGZpbHRlclZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICByZWNvcmRWYWx1ZSA9IHJlY29yZFZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICFGaWx0ZXJbbWUuX29wZXJhdG9yXShyZWNvcmRWYWx1ZSwgZmlsdGVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIFsnPT0nXSAoYSwgYikge3JldHVybiBhID09IGI7fVxuICAgIHN0YXRpYyBbJz09PSddKGEsIGIpIHtyZXR1cm4gYSA9PT0gYjt9XG4gICAgc3RhdGljIFsnIT0nXSAoYSwgYikge3JldHVybiBhICE9IGI7fVxuICAgIHN0YXRpYyBbJyE9PSddKGEsIGIpIHtyZXR1cm4gYSAhPT0gYjt9XG4gICAgc3RhdGljIFsnPCddICAoYSwgYikge3JldHVybiBhIDwgYjt9XG4gICAgc3RhdGljIFsnPD0nXSAoYSwgYikge3JldHVybiBhIDw9IGI7fVxuICAgIHN0YXRpYyBbJz4nXSAgKGEsIGIpIHtyZXR1cm4gYSA+IGI7fVxuICAgIHN0YXRpYyBbJz49J10gKGEsIGIpIHtyZXR1cm4gYSA+PSBiO31cblxuICAgIHN0YXRpYyBbJ2V4Y2x1ZGVkJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYi5pbmRleE9mKGEpIDwgMDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpbmNsdWRlZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGIuaW5kZXhPZihhKSA+IC0xO1xuICAgIH1cblxuICAgIHN0YXRpYyBbJ2lzRGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydpc1VuZGVmaW5lZCddKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgPT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgWydsaWtlJ10oYSwgYikge1xuICAgICAgICByZXR1cm4gYS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGIudG9Mb3dlckNhc2UoKSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaWx0ZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbGxlY3Rpb24uU29ydGVyXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIFNvcnRlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29sbGVjdGlvbi5Tb3J0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb2xsZWN0aW9uLlNvcnRlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzb3J0ZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc29ydGVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGNvbmZpZyB3aGljaCBtYXBwcyB0aGUgZGlyZWN0aW9uIEFTQyB0byAxLCAtMSBvdGhlcndpc2VcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaXJlY3Rpb25NdWx0aXBsaWVyPTFcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uTXVsdGlwbGllcjogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzb3J0IGRpcmVjdGlvbiB3aGVuIHVzaW5nIGEgcHJvcGVydHkuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uXz0nQVNDJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uXzogJ0FTQycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3duZXIgdXRpbC5Db2xsZWN0aW9uIG5lZWRzIHRvIGFwcGx5IGFuIG9uQ2hhbmdlIGxpc3RlbmVyIG9uY2VcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gbGlzdGVuZXJBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RlbmVyQXBwbGllZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvcGVydHkgdG8gc29ydCBieS5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJvcGVydHlfOiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUHJvdmlkZSBhIGN1c3RvbSBzb3J0aW5nIGZ1bmN0aW9uLCBoYXMgYSBoaWdoZXIgcHJpb3JpdHkgdGhhbiBwcm9wZXJ0eSAmIGRpcmVjdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxudWxsfSBzb3J0Qnk9bnVsbFxuICAgICAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0NvbGxhdG9yXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Qnk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHVzZSB0aGUgdHJhbnNmb3JtVmFsdWUgbWV0aG9kIGZvciBlYWNoIGl0ZW0gKHRoZSBtZXRob2QgY2FuIGdldCBvdmVycmlkZGVuKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VUcmFuc2Zvcm1WYWx1ZT10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHVzZVRyYW5zZm9ybVZhbHVlOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuZGlyZWN0aW9uTXVsdGlwbGllciA9IHZhbHVlID09PSAnQVNDJyA/IDEgOiAtMTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQcm9wZXJ0eSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG1lLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA6IG1lLnByb3BlcnR5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgc29ydGVyIGZ1bmN0aW9uIHdoaWNoIGdldHMgdXNlZCBieSBjb2xsZWN0aW9ucyBpbiBjYXNlIGF0IGxlYXN0IG9uZSBzb3J0ZXIgaGFzIGEgcmVhbCBzb3J0QnkgbWV0aG9kXG4gICAgICogQHBhcmFtIGFcbiAgICAgKiBAcGFyYW0gYlxuICAgICAqL1xuICAgIGRlZmF1bHRTb3J0QnkoYSwgYikge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGEgPSBhW21lLnByb3BlcnR5XTtcbiAgICAgICAgYiA9IGJbbWUucHJvcGVydHldO1xuXG4gICAgICAgIGlmIChtZS51c2VUcmFuc2Zvcm1WYWx1ZSkge1xuICAgICAgICAgICAgYSA9IG1lLnRyYW5zZm9ybVZhbHVlKGEpO1xuICAgICAgICAgICAgYiA9IG1lLnRyYW5zZm9ybVZhbHVlKGIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGEgPiBiKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYSA8IGIpIHtcbiAgICAgICAgICAgIHJldHVybiAtMSAqIG1lLmRpcmVjdGlvbk11bHRpcGxpZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn0gdmFsdWVcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm1WYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU29ydGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgU29ydGVyOyIsImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBDb3JlQmFzZSAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi4vbWFuYWdlci9Db21wb25lbnQubWpzJztcbmltcG9ydCBEb21FdmVudE1hbmFnZXIgIGZyb20gJy4uL21hbmFnZXIvRG9tRXZlbnQubWpzJztcbmltcG9ydCBLZXlOYXZpZ2F0aW9uICAgIGZyb20gJy4uL3V0aWwvS2V5TmF2aWdhdGlvbi5tanMnO1xuaW1wb3J0IExvZ2dlciAgICAgICAgICAgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgIGZyb20gJy4uL2NvcmUvT2JzZXJ2YWJsZS5tanMnO1xuaW1wb3J0IFN0eWxlICAgICAgICAgICAgZnJvbSAnLi4vdXRpbC9TdHlsZS5tanMnO1xuaW1wb3J0IFV0aWwgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9VdGlsLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICAgICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcbmltcG9ydCBWTm9kZVV0aWwgICAgICAgIGZyb20gJy4uL3V0aWwvVk5vZGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIEFwcCB0aGlzIGNvbXBvbmVudCBiZWxvbmdzIHRvXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhcHBOYW1lXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhcHBOYW1lXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBtb3VudHMgYSBjb21wb25lbnQgYWZ0ZXIgYmVpbmcgcmVuZGVyZWQuXG4gICAgICAgICAqIFVzZSB0aGlzIGZvciB0aGUgdG9wIGxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcC5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PWZhbHNlXG4gICAgICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b01vdW50OiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSByZW5kZXJzIGEgY29tcG9uZW50IGFmdGVyIGJlaW5nIGNyZWF0ZWQgaW5zaWRlIHRoZSBpbml0IGNhbGwuXG4gICAgICAgICAqIFVzZSB0aGlzIGZvciB0aGUgdG9wIGxldmVsIGNvbXBvbmVudCBvZiB5b3VyIGFwcC5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b1JlbmRlcj1mYWxzZVxuICAgICAgICAgKiBAc2VlIHtAbGluayBOZW8uY29tcG9uZW50LkJhc2UjaW5pdCBpbml0fVxuICAgICAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgICAgICovXG4gICAgICAgIGF1dG9SZW5kZXI6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogbWFuYWdlci5Gb2N1cyB3aWxsIGNoYW5nZSB0aGlzIGZsYWcgb24gZm9jdXNpbiAmIG91dCBkb20gZXZlbnRzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNvbnRhaW5zRm9jdXNfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5zRm9jdXNfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzc2lnbiBhIGNvbXBvbmVudCBjb250cm9sbGVyIHRvIHRoaXMgY29tcG9uZW50IChwYXNzIGFuIGltcG9ydGVkIG1vZHVsZSBvciB0aGUgc3RyaW5nIGJhc2VkIGNsYXNzIG5hbWUpXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxTdHJpbmd9IGNvbnRyb2xsZXJfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xsZXJfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZWQgY29tcG9uZW50cyB3aWxsIGdldCB0aGUgbmVvLWRpc2FibGVkIGNscyBhcHBsaWVkIGFuZCB3b24ndCByZWNlaXZlIERPTSBldmVudHNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgZG9tTGlzdGVuZXIgY29uZmlnc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBkb21MaXN0ZW5lcnNfPW51bGxcbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICogYWZ0ZXJTZXRTdGF5T25Ib3Zlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICogICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgKiAgICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgKiAgICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnMgfHwgW107XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgKiAgICAgICAgICAgICBtb3VzZWVudGVyOiBtZS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAqICAgICAgICAgICAgIHNjb3BlICAgICA6IG1lXG4gICAgICAgICAqICAgICAgICAgfSwge1xuICAgICAgICAgKiAgICAgICAgICAgICBtb3VzZWxlYXZlOiBtZS5vbk1vdXNlTGVhdmUsXG4gICAgICAgICAqICAgICAgICAgICAgIHNjb3BlICAgICA6IG1lXG4gICAgICAgICAqICAgICAgICAgfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgICAqICAgIH1cbiAgICAgICAgICp9XG4gICAgICAgICAqL1xuICAgICAgICBkb21MaXN0ZW5lcnNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB3aGljaCB3aWxsIGdldCBzZXQgdG8gdHJ1ZSBvbiBtb3VudFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoYXNCZWVuTW91bnRlZD1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoYXNCZWVuTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIGZvciB2ZG9tIGNoYW5nZXMgYWZ0ZXIgYSBjb21wb25lbnQgZ290IHVubW91bnRlZFxuICAgICAgICAgKiAoZGVsdGEgdXBkYXRlcyBjYW4gbm8gbG9uZ2VyIGdldCBhcHBsaWVkICYgYSBuZXcgcmVuZGVyIGNhbGwgaXMgcmVxdWlyZWQgYmVmb3JlIHJlLW1vdW50aW5nKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoYXNVbm1vdW50ZWRWZG9tQ2hhbmdlc189ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaGFzVW5tb3VudGVkVmRvbUNoYW5nZXNfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBzdHlsZS5oZWlnaHQsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gaGVpZ2h0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRvcCBsZXZlbCBpbm5lckhUTUwgb2YgdGhlIGNvbXBvbmVudFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaHRtbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaHRtbF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIGNvbXBvbmVudCBpZFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGlkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgd2hpY2ggd2lsbCBnZXQgc2V0IHRvIHRydWUgd2hpbGUgYW4gdXBkYXRlIHJlcXVlc3QgKHdvcmtlciBtZXNzYWdlcykgaXMgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNWZG9tVXBkYXRpbmc9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNWZG9tVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVXNpbmcgdGhlIGtleXMgY29uZmlnIHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIE5lby51dGlsLktleU5hdmlnYXRpb24uXG4gICAgICAgICAqIEBzZWUge0BsaW5rIE5lby51dGlsLktleU5hdmlnYXRpb24gS2V5TmF2aWdhdGlvbn1cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBzdHlsZS5tYXhIZWlnaHQsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWF4SGVpZ2h0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXhIZWlnaHRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1heFdpZHRoLCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG1heFdpZHRoXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXhXaWR0aF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUubWluSGVpZ2h0LCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG1pbkhlaWdodF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWluSGVpZ2h0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBzdHlsZS5taW5XaWR0aCwgZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ3xudWxsfSBtaW5XaWR0aF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWluV2lkdGhfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCB0byB0aGUgRE9NXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdW50ZWRfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1vdW50ZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgd2hpY2ggd2lsbCBnZXQgc2V0IHRvIHRydWUgaW4gY2FzZSBhbiB1cGRhdGUgY2FsbCBhcnJpdmVzIHdoaWxlIGFub3RoZXIgdXBkYXRlIGlzIHJ1bm5pbmdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbmVlZHNWZG9tVXBkYXRlPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG5lZWRzVmRvbVVwZGF0ZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGFyZW50IGNvbXBvbmVudCBpZCBvciBkb2N1bWVudC5ib2R5XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFyZW50SWQ9J2RvY3VtZW50LmJvZHknXG4gICAgICAgICAqL1xuICAgICAgICBwYXJlbnRJZDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXJyYXkgb2YgUGx1Z2luIE1vZHVsZXMgYW5kIC8gb3IgY29uZmlnIG9iamVjdHNcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gcGx1Z2luc189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwbHVnaW5zXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgaW4gY2FzZSB0aGUgY29tcG9uZW50IGlzIHJlbmRlcmluZyB0aGUgdm5vZGVcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyaW5nXz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJpbmdfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIHRvIHRydWUgZm9yIGJ1bGsgdXBkYXRlcy5cbiAgICAgICAgICogRW5zdXJlIHRvIHNldCBpdCBiYWNrIHRvIGZhbHNlIGFmdGVyd2FyZHMuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbGVudFZkb21VcGRhdGU9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNpbGVudFZkb21VcGRhdGU6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXNcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBzdHlsZT17fVxuICAgICAgICAgKi9cbiAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIHRvb2x0aXAgY29uZmlnIG9iamVjdHNcbiAgICAgICAgICogU2VlIHRvb2x0aXAvQmFzZS5tanNcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8T2JqZWN0fSB0b29sdGlwc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdG9vbHRpcHNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbXBvbmVudCB2bm9kZSB0cmVlLiBBdmFpbGFibGUgYWZ0ZXIgdGhlIGNvbXBvbmVudCBnb3QgcmVuZGVyZWQuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdm5vZGVfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdm5vZGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLndpZHRoLCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHdpZHRoXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcy4gVXNlZnVsIGluIGNhc2UgZ2V0VmRvbVJvb3QoKSBkb2VzIG5vdCBwb2ludCB0byB0aGUgdG9wIGxldmVsIERPTSBub2RlLlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gd3JhcHBlclN0eWxlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwcGVyU3R5bGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZkb20gbWFya3VwIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17fVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHt9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdmRvbSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWbm9kZVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdm5vZGUgcm9vdCBpZiBuZWVkZWQgdG8gYXBwbHkgdGhlIHRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzIG9uIGEgZGlmZmVyZW50IGxldmVsLlxuICAgICAqIE1ha2Ugc3VyZSB0byB1c2UgZ2V0VmRvbVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZub2RlIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgPSBzdXBlci5tZXJnZUNvbmZpZyguLi5hcmdzKSxcblxuICAgICAgICAgICAgLy8gaXQgc2hvdWxkIGJlIHBvc3NpYmxlIHRvIHNldCBjdXN0b20gY29uZmlncyBmb3IgdGhlIHZkb20gb24gaW5zdGFuY2UgbGV2ZWwsXG4gICAgICAgICAgICAvLyBob3dldmVyIHRoZXJlIHdpbGwgYmUgYWxyZWFkeSBhZGRlZCBhdHRyaWJ1dGVzIChlLmcuIGlkKSwgc28gYSBtZXJnZSBzZWVtcyB0byBiZSB0aGUgYmVzdCBzdHJhdGVneS5cbiAgICAgICAgICAgIHZkb20gPSB7Li4ubWUuX3Zkb20gfHwge30sIC4uLmNvbmZpZy52ZG9tIHx8IHt9fTtcblxuICAgICAgICAvLyBhdm9pZCBhbnkgaW50ZXJmZXJlbmNlIG9uIHByb3RvdHlwZSBsZXZlbFxuICAgICAgICAvLyBkb2VzIG5vdCBjbG9uZSBleGlzdGluZyBOZW8gaW5zdGFuY2VzXG4gICAgICAgIG1lLl92ZG9tICAgICAgICA9IE5lby5jbG9uZSh2ZG9tLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgbWUuY2xzICAgICAgICAgID0gY29uZmlnLmNscztcbiAgICAgICAgbWUuX3N0eWxlICAgICAgID0gY29uZmlnLnN0eWxlO1xuICAgICAgICBtZS53cmFwcGVyU3R5bGUgPSBOZW8uY2xvbmUoY29uZmlnLndyYXBwZXJTdHlsZSwgZmFsc2UpO1xuXG4gICAgICAgIGRlbGV0ZSBjb25maWcuY2xzO1xuICAgICAgICBkZWxldGUgY29uZmlnLnN0eWxlO1xuICAgICAgICBkZWxldGUgY29uZmlnLl92ZG9tO1xuICAgICAgICBkZWxldGUgY29uZmlnLnZkb207XG4gICAgICAgIGRlbGV0ZSBjb25maWcud3JhcHBlclN0eWxlO1xuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIucmVnaXN0ZXIodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5maXJlKCdjb25zdHJ1Y3RlZCcsIHtpZDogbWUuaWR9KTsgLy8gdGVzdGluZ1xuXG4gICAgICAgIGlmIChtZS5rZXlzKSB7XG4gICAgICAgICAgICBtZS5rZXlzLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b1JlbmRlcikge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENTUyBzZWxlY3RvcnMgdG8gYXBwbHkgdG8gdGhlIHRvcCBsZXZlbCBub2RlIG9mIHRoaXMgY29tcG9uZW50XG4gICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jb21wb25lbnQnXVxuICAgICAqL1xuICAgIGdldCBjbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jbHMgPyBOZW8uY2xvbmUodGhpcy5fY2xzKSA6IFsnbmVvLWNvbXBvbmVudCddO1xuICAgIH1cbiAgICBzZXQgY2xzKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUgPyB2YWx1ZSA6IFtdO1xuXG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCksXG4gICAgICAgICAgICBvbGRDbHM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG9sZENscyA9IE5lby5jbG9uZShtZS5fY2xzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLl9jbHMgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmRvbVJvb3QpIHtcbiAgICAgICAgICAgIHZkb21Sb290LmNscyA9IFsuLi52YWx1ZV07XG4gICAgICAgIH1cblxuICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgbWUudXBkYXRlQ2xzKHZhbHVlLCBvbGRDbHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbHkgY29tcG9uZW50IGJhc2VkIGxpc3RlbmVyc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gbGlzdGVuZXJzPXt9XG4gICAgICovXG4gICAgZ2V0IGxpc3RlbmVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcbiAgICB9XG4gICAgc2V0IGxpc3RlbmVycyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGFmdGVyIHRoZSBjb21wb25lbnQgcmVuZGVyKCkgbWV0aG9kIHdhcyBjYWxsZWQuIEFsc28gZmlyZXMgdGhlIHJlbmRlcmVkIGV2ZW50LlxuICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbmRlcmVkPWZhbHNlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldCByZW5kZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVkIHx8IGZhbHNlO1xuICAgIH1cbiAgICBzZXQgcmVuZGVyZWQodmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5fcmVuZGVyZWQgPSB2YWx1ZTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3JlbmRlcmVkJywgbWUuaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXNcbiAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXt9XG4gICAgICovXG4gICAgZ2V0IHN0eWxlKCkge1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIFwiY2xvbmVcIiB0aGUgb2JqZWN0LCBvdGhlcndpc2UgY2hhbmdlcyB3aWxsIGdldCBhcHBsaWVkIGRpcmVjdGx5IGFuZCB0aGVyZSBhcmUgbm8gZGVsdGFzXG4gICAgICAgIC8vIHRoaXMgb25seSBhZmZlY3RzIG5vbiB2ZG9tIHJlbGF0ZWQgc3R5bGUgdG8gRE9NIGRlbHRhc1xuICAgICAgICByZXR1cm4gTmVvLmNsb25lKHRoaXMuX3N0eWxlKTtcbiAgICB9XG4gICAgc2V0IHN0eWxlKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBvbGRTdHlsZSA9IG1lLnN0eWxlOyAvLyBjbG9uZWQgPT4gZ2V0dGVyXG5cbiAgICAgICAgbWUuX3N0eWxlID0gdmFsdWU7XG4gICAgICAgIG1lLnVwZGF0ZVN0eWxlKHZhbHVlLCBvbGRTdHlsZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIHNldHRlciB3aWxsIGhhbmRsZSB2ZG9tIHVwZGF0ZXMgYXV0b21hdGljYWxseVxuICAgICAqIEBtZW1iZXIge09iamVjdH0gdmRvbT10aGlzLl92ZG9tXG4gICAgICovXG4gICAgZ2V0IHZkb20oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92ZG9tO1xuICAgIH1cbiAgICBzZXQgdmRvbSh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwICAgICAgPSBOZW8uYXBwc1ttZS5hcHBOYW1lXSxcbiAgICAgICAgICAgIHZkb20gICAgID0gdmFsdWUsXG4gICAgICAgICAgICBjbHMgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIGhlaWdodCAgID0gbWUuaGVpZ2h0LFxuICAgICAgICAgICAgc3R5bGUgICAgPSBtZS5zdHlsZSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIHdpZHRoICAgID0gbWUud2lkdGgsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmICh2ZG9tUm9vdCkge1xuICAgICAgICAgICAgaWYgKGNscykge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmNscyA9IGNscztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZkb21Sb290LmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmRvbVJvb3Qud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogc3RyaW5nIGJhc2VkIHN0eWxlc1xuICAgICAgICAgICAgICAgIHZkb21Sb290LnN0eWxlID0gT2JqZWN0LmFzc2lnbih2ZG9tUm9vdC5zdHlsZSB8fCB7fSwgc3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSXQgaXMgaW1wb3J0YW50IHRvIGtlZXAgdGhlIHZkb20gdHJlZSBzdGFibGUgdG8gZW5zdXJlIHRoYXQgY29udGFpbmVycyBkbyBub3QgbG9zZSB0aGUgcmVmZXJlbmNlcyB0byB0aGVpclxuICAgICAgICAvLyBjaGlsZCB2ZG9tIHRyZWVzLiBUaGUgaWYgY2FzZSBzaG91bGQgbm90IGhhcHBlbiwgYnV0IGluIGNhc2UgaXQgZG9lcywga2VlcGluZyB0aGUgcmVmZXJlbmNlIGFuZCBtZXJnaW5nXG4gICAgICAgIC8vIHRoZSBjb250ZW50IG92ZXIgc2VlbXMgdG8gYmUgdGhlIGJlc3Qgc3RyYXRlZ3lcbiAgICAgICAgaWYgKG1lLl92ZG9tICE9PSB2ZG9tKSB7XG4gICAgICAgICAgICBMb2dnZXIud2FybigndmRvbSBnb3QgcmVwbGFjZWQgZm9yOiAnICsgbWUuaWQgKyAnLiBDb3B5aW5nIHRoZSBjb250ZW50IGludG8gdGhlIHJlZmVyZW5jZSBob2xkZXIgb2JqZWN0Jyk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG1lLl92ZG9tKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLl92ZG9tW2tleV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihtZS5fdmRvbSwgdmRvbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLnNpbGVudFZkb21VcGRhdGUpIHtcbiAgICAgICAgICAgIGlmICghbWUubW91bnRlZCAmJiBhcHAgJiYgYXBwLnJlbmRlcmluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBhcHAub24oJ3JlbmRlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwLnVuKCdyZW5kZXInLCBsaXN0ZW5lcklkKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVZkb20obWUudmRvbSwgbWUudm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVWZG9tKHZkb20sIG1lLnZub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSAhbWUubW91bnRlZCAmJiBtZS5oYXNCZWVuTW91bnRlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVpdGhlciBhIHN0cmluZyBsaWtlICdjb2xvcjogcmVkOyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOydcbiAgICAgKiBvciBhbiBvYmplY3QgY29udGFpbmluZyBzdHlsZSBhdHRyaWJ1dGVzXG4gICAgICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGFsbCBzdHlsZXMgb2YgdGhpcy5lbFxuICAgICAqL1xuICAgIGFkZFN0eWxlKHZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFV0aWwuY3JlYXRlU3R5bGVPYmplY3QodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogYWRkIGEgY2hlY2sgaWYgc29tZXRoaW5nIGhhcyBjaGFuZ2VkXG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGUgPSBPYmplY3QuYXNzaWduKHRoaXMuc3R5bGUsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRpc2FibGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGlzYWJsZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLWRpc2FibGVkJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgdGhlIGRvbUxpc3RlbmVycyBpbnNpZGUgdGhlIE5lby5tYW5hZ2VyLkRvbUV2ZW50XG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERvbUxpc3RlbmVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgRG9tRXZlbnRNYW5hZ2VyLnVwZGF0ZURvbUxpc3RlbmVycyh0aGlzLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIHx8ICghdmFsdWUgJiYgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50SWRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRJZHModGhpcyksXG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBwYXJlbnRJZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcmVudDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IE5lby5nZXRDb21wb25lbnQocGFyZW50SWRzW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Ll9oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyA9IHZhbHVlOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoZWlnaHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdoZWlnaHQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBodG1sIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIdG1sKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdodG1sJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdpZCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heEhlaWdodCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhIZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21heEhlaWdodCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdtYXhXaWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1pbkhlaWdodCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNaW5IZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21pbkhlaWdodCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1pbldpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1pbldpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdtaW5XaWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWUuaGFzQmVlbk1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLmRvbUxpc3RlbmVycyAmJiBtZS5kb21MaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB0aGUgbWFpbiB0aHJlYWQgcmVwbHkgb2YgbW91bnQgYXJyaXZlcyBhZnRlciBwdXNoaW5nIHRoZSB0YXNrIGludG8gdGhlIHF1ZXVlIHdoaWNoIGRvZXMgbm90IGVuc3VyZSB0aGUgZG9tIGlzIG1vdW50ZWRcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb21FdmVudE1hbmFnZXIubW91bnREb21MaXN0ZW5lcnMobWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ21vdW50ZWQnLCBtZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRvb2x0aXBzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VG9vbHRpcHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKE5lby5ucygnTmVvLnRvb2x0aXAuQmFzZScpKSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlVG9vbHRpcHModmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3NyYy90b29sdGlwL0Jhc2UnICovXG4gICAgICAgICAgICAgICAgICAgICcuLi90b29sdGlwL0Jhc2UubWpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVUb29sdGlwcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2bm9kZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZub2RlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zeW5jVm5vZGVUcmVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCd3aWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdyYXBwZXJTdHlsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXcmFwcGVyU3R5bGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghKCF2YWx1ZSAmJiBvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBpZiAoIW1lLnZkb20uaWQpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLnN0eWxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVN0eWxlKHZhbHVlLCBvbGRWYWx1ZSwgbWUudmRvbS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIHdyYXBwZXJTdHlsZSBjb25maWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0V3JhcHBlclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7Li4uT2JqZWN0LmFzc2lnbih0aGlzLnZkb20uc3R5bGUgfHwge30sIHZhbHVlKX07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSBjb250cm9sbGVyIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRDb250cm9sbGVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBOZW8uZ2V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBjb250cm9sbGVyIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQ3JlYXRlcyBhIENvbXBvbmVudENvbnRyb2xsZXIgaW5zdGFuY2UgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGlkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENvbnRyb2xsZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIG51bGwsIHtcbiAgICAgICAgICAgIHZpZXc6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGRvbUxpc3RlbmVycyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREb21MaXN0ZW5lcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUga2V5cyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIENyZWF0ZXMgYSBLZXlOYXZpZ2F0aW9uIGluc3RhbmNlIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0S2V5cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBLZXlOYXZpZ2F0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5czogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHBsdWdpbnMgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFBsdWdpbnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UoaXRlbSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgdmFsdWUgb2YgYSB2ZG9tIG9iamVjdCBhdHRyaWJ1dGUgb3IgcmVtb3ZlcyBpdCBpbiBjYXNlIGl0IGhhcyBubyB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fE51bWJlcnxPYmplY3R8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgY2hhbmdlVmRvbVJvb3RLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmdldFZkb21Sb290KClba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmdldFZkb21Sb290KClba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHRvb2x0aXAgaW5zdGFuY2VzXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZVRvb2x0aXBzKHZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0b29sdGlwcyA9IFtdLFxuICAgICAgICAgICAgdGlwO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAvLyB0b2RvOiBjaGVjayBmb3IgZXhpc3RpbmcgdG9vbHRpcHNcblxuICAgICAgICAgICAgdGlwID0gTmVvLmNyZWF0ZSgnTmVvLnRvb2x0aXAuQmFzZScsIHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgLi4uaXRlbVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRvb2x0aXBzLnB1c2godGlwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuX3Rvb2x0aXBzID0gdG9vbHRpcHM7IC8vIHNpbGVudCB1cGRhdGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gdGhlIENvbXBvbmVudE1hbmFnZXJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt1cGRhdGVQYXJlbnRWZG9tPWZhbHNlXSB0cnVlIHRvIHJlbW92ZSB0aGUgY29tcG9uZW50IGZyb20gdGhlIHBhcmVudCB2ZG9tID0+IHJlYWwgZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXSB0cnVlIHRvIHVwZGF0ZSB0aGUgdmRvbSBzaWxlbnRseSAodXNlZnVsIGZvciBkZXN0cm95aW5nIG11bHRpcGxlIGNoaWxkIGl0ZW1zIGluIGEgcm93KVxuICAgICAqIHRvZG86IHVucmVnaXN0ZXIgZXZlbnRzXG4gICAgICovXG4gICAgZGVzdHJveSh1cGRhdGVQYXJlbnRWZG9tPWZhbHNlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHBhcmVudCwgcGFyZW50VmRvbTtcblxuICAgICAgICBpZiAodXBkYXRlUGFyZW50VmRvbSAmJiBtZS5wYXJlbnRJZCkge1xuICAgICAgICAgICAgaWYgKG1lLnBhcmVudElkID09PSAnZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzOiBbe2FjdGlvbjogJ3JlbW92ZU5vZGUnLCBpZDogbWUudmRvbS5pZH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudCAgICAgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLnBhcmVudElkKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRWZG9tID0gcGFyZW50LnZkb207XG5cbiAgICAgICAgICAgICAgICBWRG9tVXRpbC5yZW1vdmVWZG9tQ2hpbGQocGFyZW50VmRvbSwgbWUudmRvbS5pZCk7XG4gICAgICAgICAgICAgICAgcGFyZW50W3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gcGFyZW50VmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIudW5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgZm9yIE5lby5tYW5hZ2VyLkNvbXBvbmVudC5kb3duXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gVGhlIG1hdGNoaW5nIGluc3RhbmNlIG9yIG51bGxcbiAgICAgKi9cbiAgICBkb3duKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5kb3duKHRoaXMuaWQsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgZm9jdXMoKSBvbiB0aGUgdG9wIGxldmVsIERPTSBub2RlIG9mIHRoaXMgY29tcG9uZW50IG9yIG9uIGEgZ2l2ZW4gbm9kZSB2aWEgaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGZvY3VzKGlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3NcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmZvY3VzKHtcbiAgICAgICAgICAgIGlkOiBpZCB8fCBtZS5pZFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzIHJlY2VpdmVkOiAnICsgaWQgfHwgbWUuaWQpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gcmVjZWl2ZSBmb2N1cyBmb3IgY29tcG9uZW50JywgZXJyLCBtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhpcy5jb250cm9sbGVyIG9yIHRoZSBjbG9zZXN0IHBhcmVudCBjb250cm9sbGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtudHlwZV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRyb2xsZXIuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldENvbnRyb2xsZXIobnR5cGUpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIsXG4gICAgICAgICAgICBpLCBsZW4sIHBhcmVudHM7XG5cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgKCFudHlwZSB8fCBudHlwZSA9PT0gY29udHJvbGxlci5udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50cyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0UGFyZW50cyh0aGlzKTtcbiAgICAgICAgaSAgICAgICA9IDA7XG4gICAgICAgIGxlbiAgICAgPSBwYXJlbnRzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50c1tpXS5jb250cm9sbGVyICYmICghbnR5cGUgfHwgbnR5cGUgPT09IHBhcmVudHNbaV0uY29udHJvbGxlci5udHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50c1tpXS5jb250cm9sbGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0VmRvbUNoaWxkKGlkLCB2ZG9tKSB7XG4gICAgICAgIHZkb20gPSB2ZG9tIHx8IHRoaXMudmRvbTtcbiAgICAgICAgbGV0IGNoaWxkID0gbnVsbCxcbiAgICAgICAgICAgIGkgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgID0gdmRvbS5jbiAmJiB2ZG9tLmNuLmxlbmd0aCxcbiAgICAgICAgICAgIHN1YkNoaWxkO1xuXG4gICAgICAgIGlmICh2ZG9tLmlkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHN1YkNoaWxkID0gdGhpcy5nZXRWZG9tQ2hpbGQoaWQsIHZkb20uY25baV0pO1xuICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHN1YkNoaWxkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuIGdldCBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBnb3QgcmVuZGVyZWQuIFNlZSB0aGUgYXV0b01vdW50IGNvbmZpZyBhcyB3ZWxsLlxuICAgICAqL1xuICAgIG1vdW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGQsIGNoaWxkSWRzO1xuXG4gICAgICAgIGlmICghbWUudm5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHZub2RlIG11c3QgYmUgZ2VuZXJhdGVkIGJlZm9yZSBtb3VudGluZywgdXNlIENvbXBvbmVudC5yZW5kZXIoKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IG1vdW50ZWQsIGdvdCB1bm1vdW50ZWQgYW5kIHJlY2VpdmVkIHZkb20gY2hhbmdlcyBhZnRlcndhcmRzLFxuICAgICAgICAvLyBhIG5ldyByZW5kZXIoKSBjYWxsIGlzIG1hbmRhdG9yeSBzaW5jZSBkZWx0YSB1cGRhdGVzIGNvdWxkIG5vdCBnZXQgYXBwbGllZC5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBjbGVhciB0aGUgaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgc3RhdGUgZm9yIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAgICAgIGlmIChtZS5oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcykge1xuICAgICAgICAgICAgLy8gdG9kbzogdGhlIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzIGZsYWcgY2hhbmdlcyBzaG91bGQgaGFwcGVuIG9uIHJlbmRlclxuICAgICAgICAgICAgbWUuaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldENoaWxkSWRzKG1lLnZub2RlKTtcblxuICAgICAgICAgICAgY2hpbGRJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5faGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSBmYWxzZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZW5kIHRvZG9cblxuICAgICAgICAgICAgbWUucmVuZGVyKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdW50JywgbWUucGFyZW50SWQsIG1lLmlkKTtcblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICA6ICdtb3VudERvbScsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGh0bWwgICAgICAgOiBtZS52bm9kZS5vdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IG1lLnBhcmVudElkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBtZS5wYXJlbnRJbmRleFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBieSBtYW5hZ2VyLkZvY3VzXG4gICAgICogQG5hbWUgb25Gb2N1c0VudGVyXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJ5IG1hbmFnZXIuRm9jdXNcbiAgICAgKiBAbmFtZSBvbkZvY3VzTGVhdmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYnkgbWFuYWdlci5Gb2N1c1xuICAgICAqIEBuYW1lIG9uRm9jdXNNb3ZlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5uZXdQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMub2xkUGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgZnJvbSB0aGUgcmVuZGVyKCkgcHJvbWlzZSBzdWNjZXNzIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXV0b01vdW50IE1vdW50IHRoZSBET00gYWZ0ZXIgdGhlIHZub2RlIGdvdCBjcmVhdGVkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uUmVuZGVyKGRhdGEsIGF1dG9Nb3VudCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcCA9IE5lby5hcHBzW21lLmFwcE5hbWVdO1xuXG4gICAgICAgIG1lLnJlbmRlcmluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGlmIGFwcCBpcyBhIGNoZWNrIHRvIHNlZSBpZiB0aGUgQ29tcG9uZW50IGdvdCBkZXN0cm95ZWQgd2hpbGUgcmVuZGVyaW5nID0+IGJlZm9yZSBvblJlbmRlciBnb3QgdHJpZ2dlcmVkXG4gICAgICAgIGlmIChhcHApIHtcbiAgICAgICAgICAgIGlmICghYXBwLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgYXBwLnJlbmRlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFwcC5yZW5kZXJlZCAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFwcC5maXJlKCdyZW5kZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUudm5vZGUgPSBkYXRhO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRJZHMgID0gQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZElkcyhkYXRhKSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGNoaWxkSWRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjaGlsZDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gTmVvLmdldENvbXBvbmVudChjaGlsZElkc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuX3JlbmRlcmVkID0gdHJ1ZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuZmlyZSgncmVuZGVyZWQnLCBtZS5pZCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJlZDogJyArIG1lLmFwcE5hbWUgKyAnICcgKyBtZS5pZCwgbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXV0b01vdW50KSB7XG4gICAgICAgICAgICAgICAgbWUubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9taXNlIGJhc2VkIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tPXRoaXMudmRvbV1cbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSBbdm5vZGU9IHRoaXMudm5vZGVdXG4gICAgICovXG4gICAgcHJvbWlzZVZkb21VcGRhdGUodmRvbT10aGlzLnZkb20sIHZub2RlPXRoaXMudm5vZGUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyB0b2RvOiB1cGRhdGVWZG9tKCkgc2hvdWxkIGhhbmRsZSB0aGlzXG4gICAgICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byBrZWVwIHRoZSB2ZG9tIHRyZWUgc3RhYmxlIHRvIGVuc3VyZSB0aGF0IGNvbnRhaW5lcnMgZG8gbm90IGxvc2UgdGhlIHJlZmVyZW5jZXMgdG8gdGhlaXJcbiAgICAgICAgLy8gY2hpbGQgdmRvbSB0cmVlcy4gVGhlIGlmIGNhc2Ugc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBpbiBjYXNlIGl0IGRvZXMsIGtlZXBpbmcgdGhlIHJlZmVyZW5jZSBhbmQgbWVyZ2luZ1xuICAgICAgICAvLyB0aGUgY29udGVudCBvdmVyIHNlZW1zIHRvIGJlIHRoZSBiZXN0IHN0cmF0ZWd5XG4gICAgICAgIGlmIChtZS5fdmRvbSAhPT0gdmRvbSkge1xuICAgICAgICAgICAgTG9nZ2VyLndhcm4oJ3Zkb20gZ290IHJlcGxhY2VkIGZvcjogJyArIG1lLmlkICsgJy4gQ29weWluZyB0aGUgY29udGVudCBpbnRvIHRoZSByZWZlcmVuY2UgaG9sZGVyIG9iamVjdCcpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZS5fdmRvbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZS5fdmRvbVtrZXldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWUuX3Zkb20sIHZkb20pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVmRvbSh2ZG9tLCB2bm9kZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFaXRoZXIgYSBzdHJpbmcgbGlrZSAnY29sb3InIG9yIGFuIGFycmF5IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyB0byByZW1vdmVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdmFsdWUgY2FtZWxDYXNlIG9ubHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbGwgc3R5bGVzIG9mIHRoaXMuZWxcbiAgICAgKi9cbiAgICByZW1vdmVTdHlsZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0eWxlICAgID0gdGhpcy5zdHlsZSxcbiAgICAgICAgICAgIGRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZVtrZXldO1xuICAgICAgICAgICAgICAgIGRvVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRvVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdm5vZGUgdHJlZSBmb3IgdGhpcyBjb21wb25lbnQgYW5kIG1vdW50cyB0aGUgY29tcG9uZW50IGluIGNhc2VcbiAgICAgKiAtIHlvdSBwYXNzIHRydWUgZm9yIHRoZSBtb3VudCBwYXJhbVxuICAgICAqIC0gb3IgdGhlIGF1dG9Nb3VudCBjb25maWcgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttb3VudF0gTW91bnQgdGhlIERPTSBhZnRlciB0aGUgdm5vZGUgZ290IGNyZWF0ZWRcbiAgICAgKi9cbiAgICByZW5kZXIobW91bnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhdXRvTW91bnQgPSBtb3VudCB8fCBtZS5hdXRvTW91bnQsXG4gICAgICAgICAgICBhcHAgICAgICAgPSBOZW8uYXBwc1ttZS5hcHBOYW1lXTtcblxuICAgICAgICBtZS5yZW5kZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghYXBwLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBhcHAucmVuZGVyaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS52ZG9tKSB7XG4gICAgICAgICAgICBOZW8udmRvbS5IZWxwZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBhdXRvTW91bnQgIDogYXV0b01vdW50LFxuICAgICAgICAgICAgICAgIGNscyAgICAgICAgOiBtZS5jbHMsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IGF1dG9Nb3VudCA/IG1lLnBhcmVudElkICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBhdXRvTW91bnQgPyBtZS5wYXJlbnRJbmRleCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDogbWUuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4ubWUudmRvbVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5vblJlbmRlcihkYXRhLCBhdXRvTW91bnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLnNpbGVudFZkb21VcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHN1cGVyLnNldCh2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnNpbGVudFZkb21VcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZVZkb21VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGNhbGxpbmcgc2V0KCkgd2l0aCB0aGUgc2lsZW50IGZsYWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0U2lsZW50KHZhbHVlcz17fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQodmFsdWVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2QgZm9yIHV0aWwuVkRvbS5zeW5jVmRvbUlkcyB0byBhbGxvdyBvdmVycmlkaW5nIChkaXNhYmxpbmcpIGl0XG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gW3Zub2RlPXRoaXMudm5vZGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tPXRoaXMudmRvbV1cbiAgICAgKi9cbiAgICBzeW5jVmRvbUlkcyh2bm9kZT10aGlzLnZub2RlLCB2ZG9tPXRoaXMudmRvbSkge1xuICAgICAgICBWRG9tVXRpbC5zeW5jVmRvbUlkcyh2bm9kZSwgdmRvbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIGZvciB1dGlsLlZEb20uc3luY1Zkb21JZHMgdG8gYWxsb3cgb3ZlcnJpZGluZyAoZGlzYWJsaW5nKSBpdFxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IFt2bm9kZT10aGlzLnZub2RlXVxuICAgICAqL1xuICAgIHN5bmNWbm9kZVRyZWUodm5vZGU9dGhpcy52bm9kZSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVidWcgPSBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkVm5vZGUsIHN0YXJ0O1xuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnN5bmNWZG9tSWRzKCk7XG5cbiAgICAgICAgLy8gZGVsZWdhdGUgdGhlIGxhdGVzdCBub2RlIHVwZGF0ZXMgdG8gYWxsIHBvc3NpYmxlIGNoaWxkIGNvbXBvbmVudHMgZm91bmQgaW5zaWRlIHRoZSB2bm9kZSB0cmVlXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuZ2V0Q2hpbGRyZW4obWUpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIGNoaWxkVm5vZGUgPSBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUobWUudm5vZGUsIGNvbXBvbmVudC52ZG9tLmlkKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkVm5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuX3Zub2RlID0gY2hpbGRWbm9kZS52bm9kZTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Ll9yZW5kZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKCdyZW5kZXJlZCcsIGNvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3N5bmNWbm9kZVRyZWU6IENvdWxkIG5vdCByZXBsYWNlIHRoZSBjaGlsZCB2bm9kZSBmb3InLCBjb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZS52bm9kZSwgbWUubW91bnRlZCk7XG5cbiAgICAgICAgLy8ga2VlcCB0aGUgdm5vZGUgcGFyZW50IHRyZWUgaW4gc3luY1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHMobWUpLmZvckVhY2goKGNvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghbWUudm5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgIVZOb2RlVXRpbC5yZW1vdmVDaGlsZFZub2RlKGNvbXBvbmVudC52bm9kZSwgbWUuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuIGZhaWwsIGluIGNhc2UgdGhlIHZub2RlIGlzIGFscmVhZHkgcmVtb3ZlZCAobm90IGFuIGlzc3VlLCBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5KVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3N5bmNWbm9kZVRyZWU6IENvdWxkIG5vdCByZW1vdmUgdGhlIHBhcmVudCB2bm9kZSBmb3InLCBtZS5pZCwgY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkeW5hbWljYWxseSByZW5kZXJlZCBjb21wb25lbnRzIHdoaWNoIGdldCBpbnNlcnRlZCBpbnRvIHRoZSBjb21wb25lbnQgdHJlZVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDAgJiYgbWUudm5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2R5biBpdGVtJywgbWUudm5vZGUsIG1lLnBhcmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudm5vZGUuY2hpbGROb2Rlcy5zcGxpY2UobWUucGFyZW50SW5kZXggfHwgMCwgMCwgbWUudm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghVk5vZGVVdGlsLnJlcGxhY2VDaGlsZFZub2RlKGNvbXBvbmVudC52bm9kZSwgbWUudm5vZGUuaWQsIG1lLnZub2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IGNhbiBoYXBwZW4gZm9yIGR5bmFtaWNhbGx5IGluc2VydGVkIGNvbnRhaW5lciBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc3luY1Zub2RlVHJlZTogQ291bGQgbm90IHJlcGxhY2UgdGhlIHBhcmVudCB2bm9kZSBmb3InLCBtZS52bm9kZS5pZCwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBsZXQgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3luY1Zub2RlVHJlZScsIG1lLmlkLCBlbmQgLSBzdGFydCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGNvbXBvbmVudCBET01cbiAgICAgKi9cbiAgICB1bm1vdW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICBpZCAgICA6IG1lLmlkXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVubW91bnQgY29tcG9uZW50JywgZXJyLCBtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGZvciBOZW8ubWFuYWdlci5Db21wb25lbnQudXBcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSBUaGUgbWF0Y2hpbmcgaW5zdGFuY2Ugb3IgbnVsbFxuICAgICAqL1xuICAgIHVwKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci51cCh0aGlzLmlkLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbHRhIHVwZGF0ZXMgZm9yIHRoZSBjbHMgY29uZmlnLiBHZXRzIGNhbGxlZCBhZnRlciB0aGUgY2xzIGNvbmZpZyBnZXRzIGNoYW5nZWQgaW4gY2FzZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICogQHBhcmFtIHtBcnJheX0gY2xzXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkQ2xzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZUNscyhjbHMsIG9sZENscykge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGUgPSBtZS52bm9kZSxcbiAgICAgICAgICAgIG9wdHM7XG5cbiAgICAgICAgaWYgKCFOZW9BcnJheS5pc0VxdWFsKGNscywgb2xkQ2xzKSkge1xuICAgICAgICAgICAgaWYgKHZub2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGUuY2xhc3NOYW1lID0gY2xzOyAvLyBrZWVwIHRoZSB2bm9kZSBpbiBzeW5jXG4gICAgICAgICAgICAgICAgbWUudm5vZGUgPSB2bm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IE5lby51dGlsLkFycmF5LmRpZmZlcmVuY2UoY2xzLCBvbGRDbHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKG9sZENscywgY2xzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChOZW8uY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG1lLmFwcE5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywgb3B0cykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZS52bm9kZSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVwZGF0ZSBDb21wb25lbnQgY2xzJywgZXJyLCBtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHN0eWxlIGRlbHRhcyBmb3IgbmV3VmFsdWUgJiBvbGRWYWx1ZSBhbmQgYXBwbGllcyB0aGVtIGRpcmVjdGx5IHRvIHRoZSBET00uXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2lkPXRoaXMuaWRdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZVN0eWxlKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgaWQ9dGhpcy5pZCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGEgPSBTdHlsZS5jb21wYXJlU3R5bGVzKG5ld1ZhbHVlLCBvbGRWYWx1ZSksXG4gICAgICAgICAgICB2ZG9tICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQobWUudmRvbSwgaWQpLFxuICAgICAgICAgICAgdm5vZGUgPSBtZS52bm9kZSAmJiBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUobWUudm5vZGUsIGlkKSxcbiAgICAgICAgICAgIG9wdHM7XG5cbiAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICB2ZG9tLnZkb20uc3R5bGUgPSBuZXdWYWx1ZTsgLy8ga2VlcCB0aGUgdmRvbSBpbiBzeW5jXG5cbiAgICAgICAgICAgIGlmICh2bm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2RlLnZub2RlLnN0eWxlID0gbmV3VmFsdWU7IC8vIGtlZXAgdGhlIHZub2RlIGluIHN5bmNcblxuICAgICAgICAgICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBkZWx0YVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLmN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbWUuYXBwTmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5zZW5kTWVzc2FnZSgnbWFpbicsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgYWZ0ZXIgdGhlIHZkb20gY29uZmlnIGdldHMgY2hhbmdlZCBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgYWxyZWFkeSBtb3VudGVkIChkZWx0YSB1cGRhdGVzKS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW3Jlc29sdmVdIHVzZWQgYnkgcHJvbWlzZVZkb21VcGRhdGUoKVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtyZWplY3RdIHVzZWQgYnkgcHJvbWlzZVZkb21VcGRhdGUoKVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVWZG9tKHZkb20sIHZub2RlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG9wdHM7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVZkb20nLCBtZS5pZCwgTmVvLmNsb25lKHZkb20sIHRydWUpLCBOZW8uY2xvbmUodm5vZGUsIHRydWUpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVZkb20nLCBtZS5pc1Zkb21VcGRhdGluZyk7XG5cbiAgICAgICAgaWYgKG1lLmlzVmRvbVVwZGF0aW5nKSB7XG4gICAgICAgICAgICBtZS5uZWVkc1Zkb21VcGRhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuaXNWZG9tVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgIHZkb20gOiB2ZG9tLFxuICAgICAgICAgICAgICAgIHZub2RlOiB2bm9kZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKE5lby5jdXJyZW50V29ya2VyLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbWUuYXBwTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLnZkb20uSGVscGVyLnVwZGF0ZShvcHRzKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQgdm5vZGUgdXBkYXRlZCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgIG1lLnZub2RlICAgICAgICAgID0gZGF0YS52bm9kZTtcbiAgICAgICAgICAgICAgICBtZS5pc1Zkb21VcGRhdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZS5uZWVkc1Zkb21VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUubmVlZHNWZG9tVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSBtZS52ZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gdXBkYXRlIGNvbXBvbmVudCBkb20nLCBlcnIsIG1lKTtcbiAgICAgICAgICAgICAgICBtZS5pc1Zkb21VcGRhdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBtYW5hZ2VyLkZvY3VzIGZpcmVzIHRoZSBldmVudCB3aGVuIHRoZSBjb21wb25lbnQgaWQgaXMgaW5jbHVkZWQgaW5zaWRlIHRoZSBkb20gaWQgcGF0aFxuICogQGV2ZW50IGZvY3VzRW50ZXJcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAqL1xuXG4vKipcbiAqIG1hbmFnZXIuRm9jdXMgZmlyZXMgdGhlIGV2ZW50IHdoZW4gdGhlIGNvbXBvbmVudCBpZCBpcyBub3QgaW5jbHVkZWQgaW5zaWRlIHRoZSBkb20gaWQgcGF0aFxuICogQGV2ZW50IGZvY3VzTGVhdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAqL1xuXG4vKipcbiAqIG1hbmFnZXIuRm9jdXMgZmlyZXMgdGhlIGV2ZW50IHdoZW4gdGhlIGNvbXBvbmVudCBpZCBpcyBpbmNsdWRlZCBpbnNpZGUgdGhlIGRvbSBpZCBwYXRoLCBidXQgdGhlIHBhdGggaXRzZWxmIGNoYW5nZWRcbiAqIEBldmVudCBmb2N1c01vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5uZXdQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5vbGRQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gKi9cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBDb2xsZWN0aW9uICAgICAgZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcydcbmltcG9ydCBDb21wb25lbnQgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgR2FsbGVyeU1vZGVsICAgIGZyb20gJy4uL3NlbGVjdGlvbi9HYWxsZXJ5TW9kZWwubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICBmcm9tICcuLi9kYXRhL1N0b3JlLm1qcyc7XG5cbmNvbnN0IGl0ZW1zTW91bnRlZCA9IFN5bWJvbC5mb3IoJ2l0ZW1zTW91bnRlZCcpO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LkdhbGxlcnlcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5HYWxsZXJ5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkdhbGxlcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZ2FsbGVyeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdnYWxsZXJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbW91bnQgb2YgdmlzaWJsZSByb3dzIGluc2lkZSB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFtb3VudFJvd3NfPTNcbiAgICAgICAgICovXG4gICAgICAgIGFtb3VudFJvd3NfOiAzLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGdhbGxlcnkgY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFja2dyb3VuZENvbG9yXz0nIzAwMDAwMCdcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmRDb2xvcl86ICcjMDAwMDAwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1nYWxsZXJ5JywgJ3BhZ2UnLCAndmlldyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBkaXNhYmxlcyBzZWxlY3Rpb24gb2YgIGdhbGxlcnkgaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGlzYWJsZVNlbGVjdGlvbj1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2UgaGVpZ2h0IG9mIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW1hZ2VIZWlnaHQ9MTYwXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZUhlaWdodDogMTYwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltYWdlIHdpZHRoIG9mIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gaW1hZ2VXaWR0aD0xMjBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlV2lkdGg6IDEyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGxfOiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWyduZW8tZ2FsbGVyeS1pdGVtJywgJ2ltYWdlLXdyYXAnLCAndmlldycsICduZW8tdHJhbnNpdGlvbi0xMDAwJ10sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8taXRlbS13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWcgIDogJ2ltZycsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdW5pcXVlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpZC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eT0naWQnXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4IGFtb3VudCBvZiBzdG9yZSBpdGVtcyB0byBzaG93XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4SXRlbXNfPTMwMFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SXRlbXNfOiAzMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFYPTEwXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRGVsdGFYOiAxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6b29taW5nIGZhY3RvciB3aGljaCByZXBsYWNlcyB0aGUgZGVmYXVsdCB3aGVlbERlbHRhLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1vdXNlV2hlZWxEZWx0YVk9MTBcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YVk6IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3BlY2lmaWVzIHdoZXRoZXIgdGhlIG1vdXNlIHdoZWVsIHNob3VsZCBjaGFuZ2UgdGhlIHRyYW5zbGF0ZVogdmFsdWUgZm9yIHpvb21pbmdcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91c2VXaGVlbEVuYWJsZWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxFbmFibGVkXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBET00gZWxlbWVudCBvZmZzZXRIZWlnaHQgb2YgdGhlIHRvcCBsZXZlbCBkaXYuXG4gICAgICAgICAqIEdldHMgZmV0Y2hlZCBhZnRlciB0aGUgZ2FsbGVyeSBnb3QgbW91bnRlZC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IG9mZnNldEhlaWdodD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldEhlaWdodDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBET00gZWxlbWVudCBvZmZzZXRXaWR0aCBvZiB0aGUgdG9wIGxldmVsIGRpdi5cbiAgICAgICAgICogR2V0cyBmZXRjaGVkIGFmdGVyIHRoZSBnYWxsZXJ5IGdvdCBtb3VudGVkLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gb2Zmc2V0V2lkdGg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRXaWR0aDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byB0cnVlIHRvIG9yZGVyIHRoZSBpdGVtcyBieSByb3cgaW5zdGVhZCBvZiBieSBjb2x1bW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb3JkZXJCeVJvd189ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIG9yZGVyQnlSb3dfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgcnVsZSBmb3Igc2VsZWN0ZWQgaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzZWxlY3RlZEl0ZW1DbHM9J25lby1zZWxlY3RlZCdcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkSXRlbUNsczogJ25lby1zZWxlY3RlZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB1c2VzIHRoZSBzZWxlY3Rpb24uR2FsbGVyeU1vZGVsIGJ5IGRlZmF1bHRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLnNlbGVjdGlvbi5HYWxsZXJ5TW9kZWx8bnVsbH0gc2VsZWN0aW9uTW9kZWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGlvbk1vZGVsXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gc2VsZWN0IHRoZSBpdGVtIGluc2lkZSB0aGUgbWlkZGxlIG9mIHRoZSBzdG9yZSBpdGVtcyBvbiBtb3VudFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzZWxlY3RPbk1vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdE9uTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RvcmUgaW5zdGFuY2Ugb3IgY2xhc3MgY29udGFpbmluZyB0aGUgZGF0YSBmb3IgdGhlIGdhbGxlcnkgaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCwgLy8gdG9kbzogdXNlIGEgc3RvcmUgb25jZSBjb2xsZWNpdG9ucyBhcmUgaW50ZWdyYXRlZFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNldFRpbWVvdXQoKSBpZHMgZm9yIGNhbGxzIHdoaWNoIGNhbiBnZXQgY2FuY2VsbGVkXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB0cmFuc2l0aW9uVGltZW91dHM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNpdGlvblRpbWVvdXRzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIG9mIHRoZSB2aWV3IG9yaWdpblxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVhfPTBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVhfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgb2YgdGhlIHZpZXcgb3JpZ2luXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWV89MFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWV86IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBvZiB0aGUgdmlldyBvcmlnaW5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVaXz0wXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVaXzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWydwYWdlJywgJ3ZpZXcnXSxcbiAgICAgICAgICAgIHN0eWxlICAgOiB7fSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnb3JpZ2luJywgJ3ZpZXcnXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgY24gICA6IFt7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ2NhbWVyYScsICd2aWV3J10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgY24gICA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgIDogWydkb2xseScsICd2aWV3J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbiAgIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyd2aWV3J10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuICAgOiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUpLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIG9yaWdpbiAgICAgICA9IHZkb20uY25bMF0sXG4gICAgICAgICAgICBjYW1lcmEgICAgICAgPSBvcmlnaW4uY25bMF0sXG4gICAgICAgICAgICBkb2xseSAgICAgICAgPSBjYW1lcmEuY25bMF0sXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBkb2xseS5jblswXTtcblxuICAgICAgICBtZVtpdGVtc01vdW50ZWRdID0gZmFsc2U7XG5cbiAgICAgICAgY2FtZXJhLmlkID0gbWUuaWQgKyAnX18nICsgJ2NhbWVyYSc7XG4gICAgICAgIGRvbGx5IC5pZCA9IG1lLmlkICsgJ19fJyArICdkb2xseSc7XG4gICAgICAgIG9yaWdpbi5pZCA9IG1lLmlkICsgJ19fJyArICdvcmlnaW4nO1xuICAgICAgICB2aWV3ICAuaWQgPSBtZS5pZCArICdfXycgKyAndmlldyc7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25DbGljayxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aGVlbDoge1xuICAgICAgICAgICAgICAgIGZuICAgOiBtZS5vbk1vdXNlV2hlZWwsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9hZCBkYXRhIGZvciB0aGUgZXhhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgIGlmICghKG1lLnN0b3JlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG4gICAgICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgICAgICBpbnNpZGVOZW86IHRydWUsXG4gICAgICAgICAgICAgICAgdXJsICAgICAgOiAnLi4vLi4vcmVzb3VyY2VzL2V4YW1wbGVzL2RhdGEvYWlfY29udGFjdHMuanNvbidcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb24uZGF0YTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdG9kbzogcmVuZGVyaW5nIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLnNlbGVjdE9uTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0TW91bnRlZCh0cnVlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZm9yIE5lby5YaHIucmVxdWVzdCcsIGVyciwgbWUuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGFtb3VudFJvd3MgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QW1vdW50Um93cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc051bWJlcihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIG1lLmFmdGVyU2V0T3JkZXJCeVJvdyhtZS5vcmRlckJ5Um93LCAhbWUub3JkZXJCeVJvdyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heEl0ZW0gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TWF4SXRlbXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1lLmRlc3Ryb3lJdGVtcyh2YWx1ZSwgb2xkVmFsdWUgLSB2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgICA6ICdyZWFkRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICdvZmZzZXRIZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ29mZnNldFdpZHRoJ1xuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUub2Zmc2V0SGVpZ2h0ID0gZGF0YS5hdHRyaWJ1dGVzLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgbWUub2Zmc2V0V2lkdGggID0gZGF0YS5hdHRyaWJ1dGVzLm9mZnNldFdpZHRoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5zZWxlY3RPbk1vdW50IHx8IG1lLnNlbGVjdGlvbk1vZGVsLmhhc1NlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0aW9uID0gbWUuc2VsZWN0aW9uTW9kZWwuZ2V0U2VsZWN0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ICAgICAgID0gc2VsZWN0aW9uLmxlbmd0aCA+IDAgJiYgc2VsZWN0aW9uWzBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IHBhcnNlSW50KE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKSAvIG1lLmFtb3VudFJvd3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gbWUuc3RvcmUuZ2V0S2V5QXQoaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uTW9kZWwuaXRlbXMgPSBbXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgb3JkZXJCeVJvdyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE9yZGVyQnlSb3codmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNCb29sZWFuKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgICAgIGxlbiAgPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuaXRlbXMubGVuZ3RoKSxcbiAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICB2aWV3ID0gbWUuZ2V0SXRlbXNSb290KCk7XG5cbiAgICAgICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIG1lLnJlZnJlc2hJbWFnZVJlZmxlY3Rpb24oKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3LmNuW2ldLnN0eWxlLnRyYW5zZm9ybSA9IG1lLmdldEl0ZW1UcmFuc2Zvcm0oaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzbSA9IG1lLnNlbGVjdGlvbk1vZGVsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc20uaGFzU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5vblNlbGVjdGlvbkNoYW5nZShzbS5pdGVtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdmFsdWUucmVnaXN0ZXIodGhpcyk7XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiByZW1vdmUgdGhlIGlmIGNoZWNrIG9uY2UgYWxsIGRlbW9zIHVzZSBzdG9yZXMgKGluc3RlYWQgb2YgY29sbGVjdGlvbnMpXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgU3RvcmUsIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgIDoge1xuICAgICAgICAgICAgICAgICAgICBsb2FkIDogbWUub25TdG9yZUxvYWQsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQgOiBtZS5vblNvcnQsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgIDoge1xuICAgICAgICAgICAgICAgIHNvcnQgOiBtZS5vblNvcnQsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWCgpIHt0aGlzLm1vdmVPcmlnaW4oKTt9XG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVZKCkge3RoaXMubW92ZU9yaWdpbigpO31cbiAgICBhZnRlclNldFRyYW5zbGF0ZVooKSB7dGhpcy5tb3ZlT3JpZ2luKCk7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBiZWZvcmVHZXRJdGVtVHBsKCkge1xuICAgICAgICByZXR1cm4gTmVvLmNsb25lKHRoaXMuX2l0ZW1UcGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgR2FsbGVyeU1vZGVsLCB7XG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2U6IHRoaXMub25TZWxlY3Rpb25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICAgOiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGdldCBkaWZmZXJlbnQgaXRlbS1tYXJrdXBzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21JdGVtXG4gICAgICovXG4gICAgY3JlYXRlSXRlbSh2ZG9tSXRlbSwgcmVjb3JkLCBpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGltYWdlVmRvbSA9IHZkb21JdGVtLmNuWzBdLmNuWzBdO1xuXG4gICAgICAgIHZkb21JdGVtLmlkID0gbWUuZ2V0SXRlbVZub2RlSWQocmVjb3JkW21lLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgaW1hZ2VWZG9tLnNyYyA9IE5lby5jb25maWcucmVzb3VyY2VzUGF0aCArICdleGFtcGxlcy8nICsgcmVjb3JkLmltYWdlO1xuXG4gICAgICAgIGltYWdlVmRvbS5zdHlsZS5oZWlnaHQgPSBtZS5pbWFnZUhlaWdodCArICdweCc7XG4gICAgICAgIGltYWdlVmRvbS5zdHlsZS53aWR0aCAgPSBtZS5pbWFnZVdpZHRoICArICdweCc7XG5cbiAgICAgICAgcmV0dXJuIHZkb21JdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRJbmRleF0gdGhlIHN0YXJ0IGluZGV4IGZvciBjcmVhdGluZyBpdGVtcyxcbiAgICAgKiBlLmcuIGluY3JlYXNpbmcgbWF4SXRlbXMgb25seSBuZWVkcyB0byBjcmVhdGUgdGhlIG5ldyBvbmVzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYW1vdW50Um93cyAgICAgICA9IG1lLmFtb3VudFJvd3MsXG4gICAgICAgICAgICBvcmRlckJ5Um93ICAgICAgID0gbWUub3JkZXJCeVJvdyxcbiAgICAgICAgICAgIHNlY29uZExhc3RDb2x1bW4gPSBhbW91bnRSb3dzIC0gMSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaXRlbXNSb290ICAgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgICA9IHN0YXJ0SW5kZXggfHwgMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgICAgPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuaXRlbXMubGVuZ3RoKSxcbiAgICAgICAgICAgIGFtb3VudENvbHVtbnMsIGl0ZW0sIHZkb21JdGVtO1xuXG4gICAgICAgIGlmIChvcmRlckJ5Um93KSB7XG4gICAgICAgICAgICBhbW91bnRDb2x1bW5zID0gTWF0aC5jZWlsKG1lLnN0b3JlLmdldENvdW50KCkgLyBhbW91bnRSb3dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGl0ZW0gICAgICA9IG1lLnN0b3JlLml0ZW1zW2ldO1xuICAgICAgICAgICAgdmRvbUl0ZW0gID0gbWUuY3JlYXRlSXRlbShtZS5pdGVtVHBsLCBpdGVtLCBpKTtcblxuICAgICAgICAgICAgdmRvbUl0ZW0uIHN0eWxlID0gdmRvbUl0ZW0uc3R5bGUgfHwge307XG5cbiAgICAgICAgICAgIHZkb21JdGVtLnN0eWxlWyd0cmFuc2Zvcm0nXSA9IG1lLmdldEl0ZW1UcmFuc2Zvcm0oaSk7XG5cbiAgICAgICAgICAgIGlmIChvcmRlckJ5Um93KSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gc2Vjb25kTGFzdENvbHVtbiAqIGFtb3VudENvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKHZkb21JdGVtLmNscywgJ25lby1yZWZsZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaSAlIGFtb3VudFJvd3MgPT09IHNlY29uZExhc3RDb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKHZkb21JdGVtLmNscywgJ25lby1yZWZsZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtc1Jvb3QuY24ucHVzaCh2ZG9tSXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSh2ZG9tKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lW2l0ZW1zTW91bnRlZF0gPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRJbmRleF1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2Ftb3VudEl0ZW1zXVxuICAgICAqL1xuICAgIGRlc3Ryb3lJdGVtcyhzdGFydEluZGV4LCBhbW91bnRJdGVtcykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjb3VudEl0ZW1zICAgPSBhbW91bnRJdGVtcyB8fCBtZS5zdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gbWUuc2VsZWN0aW9uTW9kZWwuaXRlbXNbMF07XG5cbiAgICAgICAgbWUuZ2V0SXRlbXNSb290KCkuY24uc3BsaWNlKHN0YXJ0SW5kZXggfHwgMCwgY291bnRJdGVtcyk7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbC5oYXNTZWxlY3Rpb24oKSAmJiBzZWxlY3RlZEl0ZW0gPiBzdGFydEluZGV4ICYmIHNlbGVjdGVkSXRlbSA8IHN0YXJ0SW5kZXggKyBjb3VudEl0ZW1zKSB7XG4gICAgICAgICAgICBtZS5hZnRlclNldE1vdW50ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyW119XG4gICAgICovXG4gICAgZ2V0Q2FtZXJhVHJhbnNmb3JtRm9yQ2VsbChpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYW1vdW50Um93cyAgPSBtZS5hbW91bnRSb3dzLFxuICAgICAgICAgICAgaW1hZ2VXaWR0aCAgPSBtZS5pbWFnZVdpZHRoLFxuICAgICAgICAgICAgZ2FwICAgICAgICAgPSAxMCxcbiAgICAgICAgICAgIGhlaWdodCAgICAgID0gbWUub2Zmc2V0SGVpZ2h0IC8gKGFtb3VudFJvd3MgKyAyKSxcbiAgICAgICAgICAgIHNwYWNpbmcgICAgID0gaGVpZ2h0ICsgZ2FwLFxuICAgICAgICAgICAgeCAgICAgICAgICAgPSBNYXRoLmZsb29yKGluZGV4IC8gYW1vdW50Um93cyksXG4gICAgICAgICAgICB5ICAgICAgICAgICA9IGluZGV4IC0geCAqIGFtb3VudFJvd3M7XG5cbiAgICAgICAgaWYgKG1lLm9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGxldCBhbW91bnRDb2x1bW5zID0gTWF0aC5jZWlsKE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKSAvIGFtb3VudFJvd3MpO1xuXG4gICAgICAgICAgICB4ID0gaW5kZXggJSBhbW91bnRDb2x1bW5zO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoaW5kZXggLyBhbW91bnRDb2x1bW5zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjeCA9IHggKiAoaW1hZ2VXaWR0aCArIDEwKSxcbiAgICAgICAgICAgIGN5ID0gKHkgKyAwLjUpICogc3BhY2luZyAqIDEuMSArIDUwO1xuXG4gICAgICAgIHJldHVybiBbLWN4LCAtY3ksIDBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZub2RlSWRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSBpdGVtSWRcbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodm5vZGVJZC5zcGxpdCgnX18nKVsxXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmRvbSBub2RlIGNvbnRhaW5pbmcgdGhlIGdhbGxlcnkgaXRlbXNcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgZ2V0SXRlbXNSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuWzBdLmNuWzBdLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtVHJhbnNmb3JtKGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgPSBtZS5hbW91bnRSb3dzLFxuICAgICAgICAgICAgeCwgeTtcblxuICAgICAgICBpZiAobWUub3JkZXJCeVJvdykge1xuICAgICAgICAgICAgYW1vdW50Um93cyA9IE1hdGguY2VpbChNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSkgLyBhbW91bnRSb3dzKTtcblxuICAgICAgICAgICAgeCA9IGluZGV4ICUgYW1vdW50Um93cztcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKGluZGV4IC8gYW1vdW50Um93cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB4ID0gTWF0aC5mbG9vcihpbmRleCAvIGFtb3VudFJvd3MpO1xuICAgICAgICAgICAgeSA9IGluZGV4ICUgYW1vdW50Um93cztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZTNkKFxuICAgICAgICAgICAgeCAqIChtZS5pbWFnZVdpZHRoICArIDEwKSxcbiAgICAgICAgICAgIHkgKiAobWUuaW1hZ2VIZWlnaHQgKyAxMCkgKyAxMDAsXG4gICAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1Wbm9kZUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgbW92ZU9yaWdpbigpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5zdHlsZS50cmFuc2Zvcm0gPSBtZS50cmFuc2xhdGUzZChtZS50cmFuc2xhdGVYLCBtZS50cmFuc2xhdGVZLCBtZS50cmFuc2xhdGVaKTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZShkYXRhLmlkID09PSB0aGlzLmlkID8gJ2NvbnRhaW5lckNsaWNrJyA6ICdpdGVtQ2xpY2snLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Nb3VzZVdoZWVsKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFYICAgICA9IGRhdGEuZGVsdGFYLFxuICAgICAgICAgICAgZGVsdGFZICAgICA9IGRhdGEuZGVsdGFZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IG1lLnRyYW5zbGF0ZVgsXG4gICAgICAgICAgICB0cmFuc2xhdGVaID0gbWUudHJhbnNsYXRlWjtcblxuICAgICAgICBpZiAobWUubW91c2VXaGVlbEVuYWJsZWQpIHtcbiAgICAgICAgICAgIG1lLl90cmFuc2xhdGVYID0gdHJhbnNsYXRlWCAtIChkZWx0YVggKiBtZS5tb3VzZVdoZWVsRGVsdGFYKTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuX3RyYW5zbGF0ZVogPSB0cmFuc2xhdGVaICsgKGRlbHRhWSAqIG1lLm1vdXNlV2hlZWxEZWx0YVkpOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgIG1lLm1vdmVPcmlnaW4oKTtcblxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlVHJhbnNsYXRlWCcsIG1lLl90cmFuc2xhdGVYKTtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZVRyYW5zbGF0ZVonLCBtZS5fdHJhbnNsYXRlWik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICovXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgID0gbWUuc3RvcmUuaW5kZXhPZih2YWx1ZSAmJiB2YWx1ZVswXSB8fCAwKSxcbiAgICAgICAgICAgIGltYWdlSGVpZ2h0ICAgID0gbWUuaW1hZ2VIZWlnaHQsXG4gICAgICAgICAgICBpbWFnZVdpZHRoICAgICA9IG1lLmltYWdlV2lkdGgsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjYW1lcmEgICAgICAgICA9IHZkb20uY25bMF0uY25bMF0sXG4gICAgICAgICAgICBkb2xseVRyYW5zZm9ybSA9IG1lLmdldENhbWVyYVRyYW5zZm9ybUZvckNlbGwoaW5kZXgpLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgICAgPSBtZS5vZmZzZXRIZWlnaHQgLyAobWUuYW1vdW50Um93cyArIDIpLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICAgPSBNYXRoLnJvdW5kKGhlaWdodCAqIGltYWdlV2lkdGggLyBpbWFnZUhlaWdodCksXG4gICAgICAgICAgICBzcGFjaW5nICAgICAgICA9IHdpZHRoICsgMTAsXG4gICAgICAgICAgICB0aW1lb3V0SWQ7XG5cbiAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5zcGxpY2UoMCwgbWUudHJhbnNpdGlvblRpbWVvdXRzLmxlbmd0aCk7XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgaWQgICA6IG1lLmlkICsgJ19fJyArICdkb2xseScsXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBtZS50cmFuc2xhdGUzZCguLi5kb2xseVRyYW5zZm9ybSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgIDogJ3JlYWREb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWUgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgdm5vZGVJZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zIDogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbiAgICAgICAgICAgIDogJ2dldENvbXB1dGVkU3R5bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zICAgICAgICA6IFttZS5pZCArICdfXycgKyAnZG9sbHknLCBudWxsXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtSXNEb21Ob2RlOiBbdHJ1ZSwgZmFsc2VdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICA6ICdkZWZhdWx0VmlldycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5Gbk5hbWUgIDogJ3RyYW5zZm9ybScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSAgIDogJ3RyYW5zZm9ybSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGRhdGEuZnVuY3Rpb25zLnRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCwgYW5nbGU7XG5cbiAgICAgICAgICAgICAgICBpZiAodHJhbnNmb3JtLmluZGV4T2YoJ21hdHJpeDNkJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnN1YnN0cmluZyg5LCB0cmFuc2Zvcm0ubGVuZ3RoIC0gMSk7IC8vIHJlbW92ZSBtYXRyaXgzZCggLi4uIClcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnNwbGl0KCcsJykubWFwKGUgPT4gcGFyc2VGbG9hdChlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2Zvcm1bMTJdOyAvLyBib3R0b20gbGVmdCBlbGVtZW50IG9mIHRoZSA0eDQgbWF0cml4XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnN1YnN0cmluZyg3LCB0cmFuc2Zvcm0ubGVuZ3RoIC0gMSk7IC8vIHJlbW92ZSBtYXRyaXgoIC4uLiApXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zcGxpdCgnLCcpLm1hcChlID0+IHBhcnNlRmxvYXQoZSkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNmb3JtWzRdOyAvLyBib3R0b20gbGVmdCBlbGVtZW50IG9mIHRoZSAyeDMgbWF0cml4XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVggLSBkb2xseVRyYW5zZm9ybVswXTtcbiAgICAgICAgICAgICAgICBhbmdsZSAgICAgID0gTWF0aC5taW4oTWF0aC5tYXgodHJhbnNsYXRlWCAvIChzcGFjaW5nICogMyksIC0xKSwgMSkgKiA0NTtcblxuICAgICAgICAgICAgICAgIGNhbWVyYS5zdHlsZS50cmFuc2Zvcm0gICAgICAgICAgPSAncm90YXRlWSgnICsgYW5nbGUgKyAnZGVnKSc7XG4gICAgICAgICAgICAgICAgY2FtZXJhLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICczMzBtcyc7XG5cbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUudHJhbnNpdGlvblRpbWVvdXRzLCB0aW1lb3V0SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5zdHlsZS50cmFuc2Zvcm0gICAgICAgICAgPSAncm90YXRlWSgwZGVnKSc7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNTAwMG1zJztcblxuICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgICAgICB9LCAzMzApO1xuXG4gICAgICAgICAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLnB1c2godGltZW91dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU29ydCgpIHtcbiAgICAgICAgaWYgKHRoaXNbaXRlbXNNb3VudGVkXSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgID0gWy4uLm1lLnN0b3JlLml0ZW1zIHx8IFtdXSxcbiAgICAgICAgICAgICAgICBuZXdDbiAgICAgPSBbXSxcbiAgICAgICAgICAgICAgICB2ZG9tICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIHZpZXcgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgICAgIHZkb21NYXAgICA9IHZpZXcuY24ubWFwKGUgPT4gZS5pZCksXG4gICAgICAgICAgICAgICAgZnJvbUluZGV4LCB2ZG9tSWQ7XG5cbiAgICAgICAgICAgIGl0ZW1zLmxlbmd0aCA9IE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKTtcblxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2ZG9tSWQgICAgPSBtZS5nZXRJdGVtVm5vZGVJZChpdGVtW21lLmtleVByb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICAgIGZyb21JbmRleCA9IHZkb21NYXAuaW5kZXhPZih2ZG9tSWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld0NuLnB1c2godmlldy5jbltmcm9tSW5kZXhdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IGZyb21JbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0NoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICB2aWV3LmNuID0gbmV3Q247XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuYWZ0ZXJTZXRPcmRlckJ5Um93KG1lLm9yZGVyQnlSb3csICFtZS5vcmRlckJ5Um93KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChpdGVtcykge1xuICAgICAgICB0aGlzLmdldEl0ZW1zUm9vdCgpLmNuID0gW107IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgcmVmcmVzaEltYWdlUmVmbGVjdGlvbigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYW1vdW50Um93cyAgICAgICA9IG1lLmFtb3VudFJvd3MsXG4gICAgICAgICAgICBvcmRlckJ5Um93ICAgICAgID0gbWUub3JkZXJCeVJvdyxcbiAgICAgICAgICAgIHNlY29uZExhc3RDb2x1bW4gPSBhbW91bnRSb3dzIC0gMSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmlldyAgICAgICAgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgYW1vdW50Q29sdW1ucztcblxuICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgYW1vdW50Q29sdW1ucyA9IE1hdGguY2VpbChNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSkgLyBhbW91bnRSb3dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZpZXcuY24uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChvcmRlckJ5Um93KSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXlbaW5kZXggPj0gc2Vjb25kTGFzdENvbHVtbiAqIGFtb3VudENvbHVtbnMgPyAnYWRkJyA6ICdyZW1vdmUnXShpdGVtLmNscywgJ25lby1yZWZsZWN0aW9uJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5W2luZGV4ICUgYW1vdW50Um93cyA9PT0gc2Vjb25kTGFzdENvbHVtbiAgID8gJ2FkZCcgOiAncmVtb3ZlJ10oaXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gelxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgdHJhbnNsYXRlM2QoeCwgeSwgeikge1xuICAgICAgICByZXR1cm4gJ3RyYW5zbGF0ZTNkKCcgKyB4ICsgJ3B4LCAnICsgeSArICdweCwgJyArIHogKyAncHgpJztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnkpO1xuXG5leHBvcnQge0dhbGxlcnkgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjbGFzcyB0byByZW5kZXIgYSBsYWJlbCB3aXRoIGEgdGV4dFxuICogQGNsYXNzIE5lby5jb21wb25lbnQuTGFiZWxcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBMYWJlbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuTGFiZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuTGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGFiZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1sYWJlbCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWxhYmVsJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRleHRfPScnXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0XzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6ICdsYWJlbCd9XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnICAgICAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcbiAgICAgICAgdmRvbS5odG1sID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhMYWJlbCk7XG5cbmV4cG9ydCB7TGFiZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCAgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBMYXlvdXRCYXNlIGZyb20gJy4uL2xheW91dC9CYXNlLm1qcyc7XG5pbXBvcnQgTGF5b3V0Q2FyZCBmcm9tICcuLi9sYXlvdXQvQ2FyZC5tanMnO1xuaW1wb3J0IExheW91dEZpdCAgZnJvbSAnLi4vbGF5b3V0L0ZpdC5tanMnO1xuaW1wb3J0IExheW91dEhib3ggZnJvbSAnLi4vbGF5b3V0L0hCb3gubWpzJztcbmltcG9ydCBMYXlvdXRWQm94IGZyb20gJy4uL2xheW91dC9WQm94Lm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1EZWZhdWx0c186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBjb25maWcgb2JqZWN0c3xpbnN0YW5jZXN8bW9kdWxlcyBmb3IgZWFjaCBjaGlsZCBjb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0W119IGl0ZW1zXz1bXVxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBpbXBvcnQgQnV0dG9uICAgICAgZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbiAgICAgICAgICogaW1wb3J0IE15UmVkQnV0dG9uIGZyb20gJ215YXBwL015UmVkQnV0dG9uLm1qcyc7XG4gICAgICAgICAqIGltcG9ydCBUb29sYmFyICAgICBmcm9tICcuLi9jb250YWluZXIvVG9vbGJhci5tanMnO1xuICAgICAgICAgKlxuICAgICAgICAgKiBsZXQgbXlCdXR0b24gPSBOZW8uY3JlYXRlKEJ1dHRvbiwge1xuICAgICAgICAgKiAgICAgdGV4dDogJ0J1dHRvbjEnXG4gICAgICAgICAqIH0pO1xuICAgICAgICAgKlxuICAgICAgICAgKiBOZW8uY3JlYXRlKFRvb2xiYXIsIHtcbiAgICAgICAgICogICAgIC8vLi4uXG4gICAgICAgICAqICAgICBpdGVtczogW1xuICAgICAgICAgKiAgICAgICAgIG15QnV0dG9uLCAgICAgICAgICAgICAgLy8gcGFzc2VkIGluc3RhbmNlXG4gICAgICAgICAqICAgICAgICAge1xuICAgICAgICAgKiAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbicsICAgLy8gYnkgbnR5cGVcbiAgICAgICAgICogICAgICAgICAgICAgdGV4dCA6ICdCdXR0b24gMidcbiAgICAgICAgICogICAgICAgICB9LFxuICAgICAgICAgKiAgICAgICAgIHtcbiAgICAgICAgICogICAgICAgICAgICAgbW9kdWxlOiBCdXR0b24sICAgIC8vIGJ5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgICAgKiAgICAgICAgICAgICB0ZXh0ICA6ICdCdXR0b24gMydcbiAgICAgICAgICogICAgICAgICB9LFxuICAgICAgICAgKiAgICAgICAgIE15UmVkQnV0dG9uICAgICAgICAgICAgLy8geW91IGNhbiBkcm9wIGltcG9ydGVkIG1vZHVsZXMgZGlyZWN0bHkgaW50byB0aGUgaXRlbXMgYXJyYXlcbiAgICAgICAgICogICAgIF1cbiAgICAgICAgICogfSk7XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBsYXlvdXRfPXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgbGF5b3V0Xzoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NuOiBbXX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyguLi5hcmdzKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29uZmlnID0gc3VwZXIubWVyZ2VDb25maWcoLi4uYXJncyk7XG5cbiAgICAgICAgLy8gYXZvaWQgYW55IGludGVyZmVyZW5jZSBvbiBwcm90b3R5cGUgbGV2ZWxcbiAgICAgICAgLy8gZG9lcyBub3QgY2xvbmUgZXhpc3RpbmcgTmVvIGluc3RhbmNlc1xuXG4gICAgICAgIGlmIChjb25maWcuaXRlbURlZmF1bHRzKSB7XG4gICAgICAgICAgICBtZS5faXRlbURlZmF1bHRzID0gTmVvLmNsb25lKGNvbmZpZy5pdGVtRGVmYXVsdHMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtRGVmYXVsdHM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLml0ZW1zKSB7XG4gICAgICAgICAgICBtZS5faXRlbXMgPSBOZW8uY2xvbmUoY29uZmlnLml0ZW1zLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaXRlbXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbiBjYXNlIHRoZSBDb250YWluZXIgZG9lcyBub3QgaGF2ZSBhIGxheW91dCBjb25maWcsIHRoZSBzZXR0ZXIgd29uJ3QgdHJpZ2dlclxuICAgICAgICBtZS5fbGF5b3V0ID0gbWUuY3JlYXRlTGF5b3V0KG1lLmxheW91dCk7XG4gICAgICAgIG1lLl9sYXlvdXQuYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3MobWUuaXRlbXMpO1xuICAgICAgICBtZS5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBhdCB0aGUgbGFzdCBpbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpdGVtXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBhZGQoaXRlbSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbWUuaW5zZXJ0KG1lLml0ZW1zID8gbWUuaXRlbXMubGVuZ3RoIDogMCwgaXRlbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhcHBOYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBcHBOYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5pdGVtcykge1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmxheW91dC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmxheW91dC5CYXNlfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExheW91dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLnJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgIHZhbHVlLmFwcGx5UmVuZGVyQXR0cmlidXRlcygpO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlLnJlbW92ZUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgdmFsdWUuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnZkb20ucmVtb3ZlRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLm1vdW50ZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJlbmRlcmluZyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJlbmRlcmluZyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICAgICAgaSAgICAgPSAwLFxuICAgICAgICAgICAgICAgIGxlbiAgID0gaXRlbXMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS52ZG9tLnJlbW92ZURvbSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpXS5yZW5kZXJpbmcgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7TmVvLmxheW91dC5CYXNlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRMYXlvdXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTGF5b3V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgID0gbWUuX2l0ZW1zLFxuICAgICAgICAgICAgZGVmYXVsdHMgPSBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICBsYXlvdXQgICA9IG1lLmxheW91dCxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKTtcblxuICAgICAgICB2ZG9tUm9vdC5jbiA9IFtdO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jb25zdHJ1Y3Rvci5pc0NsYXNzICYmIGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29yZS5CYXNlKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvLmNyZWF0ZShpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IE5lby5udHlwZSh7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICA6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2ZG9tICAgOiB7aW5uZXJIVE1MOiBpdGVtfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLmFzc2lnbkRlZmF1bHRzKGl0ZW0sIGRlZmF1bHRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBpdGVtLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZSAgIDogaXRlbS5zdHlsZSB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaXRlbSA9IE5lb1tpdGVtLmNsYXNzTmFtZSA/ICdjcmVhdGUnIDogJ250eXBlJ10oaXRlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1zW2luZGV4XSA9IGl0ZW07XG5cbiAgICAgICAgICAgIGxheW91dC5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCk7XG5cbiAgICAgICAgICAgIHZkb21Sb290LmNuLnB1c2goaXRlbS52ZG9tKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd8TmVvLmxheW91dC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmxheW91dC5CYXNlfVxuICAgICAqL1xuICAgIGNyZWF0ZUxheW91dCh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgTGF5b3V0QmFzZSAmJiB2YWx1ZS5pc0xheW91dCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmNvbnRhaW5lcklkID0gbWUuaWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbWUucGFyc2VMYXlvdXRDbGFzcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUuY29udGFpbmVySWQgPSBtZS5pZDtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE5lby5udHlwZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgYWxsIGNvbXBvbmVudHMgaW5zaWRlIHRoaXMuaXRlbXMgYmVmb3JlIHRoZSBzdXBlcigpIGNhbGwuXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbdXBkYXRlUGFyZW50VmRvbT1mYWxzZV0gdHJ1ZSB0byByZW1vdmUgdGhlIGNvbXBvbmVudCBmcm9tIHRoZSBwYXJlbnQgdmRvbSA9PiByZWFsIGRvbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV0gdHJ1ZSB0byB1cGRhdGUgdGhlIHZkb20gc2lsZW50bHkgKHVzZWZ1bCBmb3IgZGVzdHJveWluZyBtdWx0aXBsZSBjaGlsZCBpdGVtcyBpbiBhIHJvdylcbiAgICAgKi9cbiAgICBkZXN0cm95KHVwZGF0ZVBhcmVudFZkb209ZmFsc2UsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koZmFsc2UsIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdXBlci5kZXN0cm95KHVwZGF0ZVBhcmVudFZkb20sIHNpbGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIGluZGV4IG9mIGEgZGlyZWN0IGNoaWxkIGNvbXBvbmVudCBpbnNpZGUgdGhpcy5pdGVtcy5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZXxTdHJpbmd9IGl0ZW1JZCBFaXRoZXIgdGhlIGl0ZW0gcmVmZXJlbmNlIG9yIHRoZSBpdGVtIGlkXG4gICAgICogQHJldHVybnMge051bWJlcn0gLTEgaW4gY2FzZSBubyBtYXRjaCB3YXMgZm91bmRcbiAgICAgKi9cbiAgICBpbmRleE9mKGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBtZS5pdGVtcyAmJiBtZS5pdGVtcy5sZW5ndGggfHwgMDtcblxuICAgICAgICBpZiAoIU5lby5pc1N0cmluZyhpdGVtSWQpKSB7XG4gICAgICAgICAgICBpdGVtSWQgPSBpdGVtSWQuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWUuaXRlbXNbaV0uaWQgPT09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBhdCBhIHNwZWNpZmljIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIHZkb20gID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNuLCBpLCBsZW47XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICBsZW4gPSBpdGVtLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IHJlbmRlciBpcyBhc3luYywgZW5zdXJlIHRoZSBvcmRlciBvZiBpdGVtcyBpcyBjb3JyZWN0XG5cbiAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIGFycmF5IGJhY2t3YXJkc1xuICAgICAgICAgICAgICAgIGl0ZW1baV0gPSBtZS5pbnNlcnQoaXRlbVtsZW4gLSAxXSwgaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIE5lby5jb21wb25lbnQuQmFzZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBpdGVtLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLml0ZW1EZWZhdWx0cyB8fCB7fSxcblxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b01vdW50ICA6IG1lLm1vdW50ZWQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SW5kZXg6IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgICAgIC4uLml0ZW1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaXRlbSA9IE5lb1tpdGVtLmNsYXNzTmFtZSA/ICdjcmVhdGUnIDogJ250eXBlJ10oaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkZWQgdGhlIHRydWUgcGFyYW0gPT4gZm9yIGNhcmQgbGF5b3V0cywgd2UgZG8gbm90IHdhbnQgYSBkeW5hbWljYWxseSBpbnNlcnRlZCBjbXAgdG8gZ2V0IHJlbW92ZWQgcmlnaHQgYXdheVxuICAgICAgICAgICAgLy8gc2luY2UgaXQgd2lsbCBtb3N0IGxpa2VseSBnZXQgYWN0aXZhdGVkIHJpZ2h0IGF3YXlcbiAgICAgICAgICAgIG1lLmxheW91dC5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zID0gaXRlbXM7XG5cbiAgICAgICAgICAgIGNuID0gdmRvbS5jbiB8fCB2ZG9tLmNoaWxkTm9kZXMgfHwgdmRvbS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgY24uc3BsaWNlKGluZGV4LCAwLCBpdGVtLnZkb20pO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvXG4gICAgICogTW92ZXMgYW4gZXhpc3RpbmcgaXRlbSB0byBhIG5ldyBpbmRleFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIG1vdmVUbyhpdGVtSWQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbWUuaW5kZXhPZihpdGVtSWQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtb3ZlVG8nLCBjdXJyZW50SW5kZXgpO1xuICAgIH1cblxuICAgIHBhcnNlSXRlbUNvbmZpZ3MoaXRlbXMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoaXRlbSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2l0ZW1zJykge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUl0ZW1Db25maWdzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBtZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBsYXlvdXRDb25maWdcbiAgICAgKi9cbiAgICBwYXJzZUxheW91dENsYXNzKGNvbmZpZykge1xuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGNvbmZpZykpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcubnR5cGUuaW5kZXhPZignbGF5b3V0LScpIDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbmZpZy5udHlwZSA9ICdsYXlvdXQtJyArIGNvbmZpZy5udHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb25maWcuaW5kZXhPZignbGF5b3V0LScpIDwgMCkge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGF5b3V0LScgKyBjb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnRhaW5lciBpdGVtIGJ5IHJlZmVyZW5jZVxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkZXN0cm95SXRlbT10cnVlXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICByZW1vdmUoY29tcG9uZW50LCBkZXN0cm95SXRlbT10cnVlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IGl0ZW1zID0gWy4uLnRoaXMuaXRlbXNdLFxuICAgICAgICAgICAgaSAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLmlkID09PSBjb21wb25lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0KGksIGRlc3Ryb3lJdGVtLCBzaWxlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnRhaW5lciBpdGVtIGF0IGEgZ2l2ZW4gaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkZXN0cm95SXRlbT10cnVlXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICByZW1vdmVBdChpbmRleCwgZGVzdHJveUl0ZW09dHJ1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgdmRvbSAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY24sIGl0ZW07XG5cbiAgICAgICAgaWYgKGluZGV4ID49IGl0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgTmVvLndhcm4oJ0NvbnRhaW5lci5yZW1vdmVBdDogaW5kZXggPj0gaXRlbXMubGVuZ3RoLiAnICsgbWUuaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2luZGV4XTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZSBpdGVtJywgaXRlbS5pZCk7XG5cbiAgICAgICAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgICAgIGNuID0gdmRvbS5jbiB8fCB2ZG9tLmNoaWxkTm9kZXMgfHwgdmRvbS5jaGlsZHJlbjtcblxuICAgICAgICAgICAgY24uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgbWVbc2lsZW50ICYmICFkZXN0cm95SXRlbSA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcblxuICAgICAgICAgICAgaWYgKGRlc3Ryb3lJdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN3aXRjaGVzIHRoZSBwb3NpdGlvbiBvZiAyIGRpcmVjdCBjaGlsZCBpdGVtc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtMWlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW0yaWRcbiAgICAgKi9cbiAgICBzd2l0Y2hJdGVtcyhpdGVtMWlkLCBpdGVtMmlkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW0xSW5kZXggPSBtZS5pbmRleE9mKGl0ZW0xaWQpLFxuICAgICAgICAgICAgaXRlbTJJbmRleCA9IG1lLmluZGV4T2YoaXRlbTJpZCksXG4gICAgICAgICAgICB2ZG9tICAgICAgID0gbWUudmRvbTtcblxuICAgICAgICBOZW9BcnJheS5tb3ZlKG1lLml0ZW1zLCAgICAgICAgICAgICAgaXRlbTJJbmRleCwgaXRlbTFJbmRleCk7XG4gICAgICAgIE5lb0FycmF5Lm1vdmUobWUuZ2V0VmRvbUl0ZW1zUm9vdCgpLCBpdGVtMkluZGV4LCBpdGVtMUluZGV4KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBUb29sYmFyICAgZnJvbSAnLi9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQW4gZXh0ZW5kZWQgQ29udGFpbmVyIHN1cHBvcnRpbmcgbXVsdGlwbGUgZG9ja2VkIGhlYWRlciB0b29sYmFyc1xuICogQGNsYXNzIE5lby5jb250YWluZXIuUGFuZWxcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBQYW5lbCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuUGFuZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuUGFuZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGFuZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncGFuZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb250YWluZXJDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbmVyQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBoZWFkZXJEZWZhdWx0cz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBoZWFkZXJzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlcnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1zPXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgX2xheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHZlcnRpY2FsSGVhZGVyc0ZpcnN0PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB2ZXJ0aWNhbEhlYWRlcnNGaXJzdDogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGhmID0gY29uZmlnICYmIGNvbmZpZy52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gdHJ1ZSB8fCBtZS52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAoaGYpIHtcbiAgICAgICAgICAgIG1lLmxheW91dCA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGYgICAgICAgICAgICAgICAgICAgPSBtZS52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJzICAgICAgICAgICAgICA9IG1lLmhlYWRlcnMgfHwgW10sXG4gICAgICAgICAgICBib3R0b21IZWFkZXJzICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydib3R0b20nOiAncmlnaHQnKX0pLFxuICAgICAgICAgICAgbGVmdEhlYWRlcnMgICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8nbGVmdCcgIDogJ3RvcCcpfSksXG4gICAgICAgICAgICByaWdodEhlYWRlcnMgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydyaWdodCcgOiAnYm90dG9tJyl9KSxcbiAgICAgICAgICAgIHRvcEhlYWRlcnMgICAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J3RvcCcgICA6ICdsZWZ0Jyl9KSxcbiAgICAgICAgICAgIGhhc0hvcml6b250YWxIZWFkZXJzID0gYm90dG9tSGVhZGVycy5sZW5ndGggPiAwIHx8IHRvcEhlYWRlcnMgIC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgaGFzVmVydGljYWxIZWFkZXJzICAgPSBsZWZ0SGVhZGVycyAgLmxlbmd0aCA+IDAgfHwgcmlnaHRIZWFkZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zICAgICAgPSBbXSxcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMgICAgICAgID0gW10sXG4gICAgICAgICAgICBjb25maWc7XG5cbiAgICAgICAgaWYgKGhlYWRlcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgTmVvLmVycm9yKCdQYW5lbCB3aXRob3V0IGhlYWRlcnMsIHBsZWFzZSB1c2UgYSBDb250YWluZXIgaW5zdGVhZCcsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc1ZlcnRpY2FsSGVhZGVycyAmJiAoaGYgJiYgaGFzSG9yaXpvbnRhbEhlYWRlcnMgfHwgIWhmICYmIGhhc0hvcml6b250YWxIZWFkZXJzKSkge1xuICAgICAgICAgICAgbGVmdEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgICAgICAuLi5tZS5jb250YWluZXJDb25maWcgfHwge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKHsuLi5tZS5oZWFkZXJEZWZhdWx0cywgLi4uY29uZmlnfSk7XG5cbiAgICAgICAgICAgIHJpZ2h0SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IGhvcml6b250YWxJdGVtcyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6IChoZiA/ICdoYm94JyA6ICd2Ym94JyksXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgIDogMSxcbiAgICAgICAgICAgICAgICBpdGVtcyAgICAgICA6IGl0ZW1zLFxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czogbWUuaXRlbURlZmF1bHRzLFxuICAgICAgICAgICAgICAgIC4uLm1lLmNvbnRhaW5lckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKHsuLi5tZS5oZWFkZXJEZWZhdWx0cywgLi4uY29uZmlnfSk7XG4gICAgICAgIH1cblxuICAgICAgICBib3R0b21IZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zID0gdmVydGljYWxJdGVtcztcblxuICAgICAgICBtZS5pdGVtRGVmYXVsdHMgPSBudWxsO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyIHRoZSBoZWFkZXIgY29uZmlnXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikge1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhlYWRlci50ZXh0KSB7XG4gICAgICAgICAgICBjb25maWcuaXRlbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLXBhbmVsLWhlYWRlci10ZXh0JywgJ25lby1sYWJlbCddLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogaGVhZGVyLnRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3N1bWluZyBhbGwgbGFiZWxzIGluc2lkZSBhIFBhbmVsIEhlYWRlciBhcmUgbWVhbnQgdG8gYmUgdGl0bGVzIC0+IGxvb2sgdGhlIHNhbWUgd2F5XG4gICAgICAgIGlmIChOZW8uaXNBcnJheShoZWFkZXIuaXRlbXMpKSB7XG4gICAgICAgICAgICBoZWFkZXIuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5udHlwZSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNscyA9IFsnbmVvLXBhbmVsLWhlYWRlci10ZXh0JywgJ25lby1sYWJlbCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jb25maWcsIC4uLmhlYWRlcn07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQYW5lbCk7XG5cbmV4cG9ydCB7UGFuZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJ1dHRvbiAgICBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBMYWJlbCAgICAgZnJvbSAnLi4vY29tcG9uZW50L0xhYmVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5Ub29sYmFyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVG9vbGJhciBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBkb2NrXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBkb2NrUG9zaXRpb25zPVsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J11cbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZG9ja1Bvc2l0aW9uczogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5Ub29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3Rvb2xiYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXRvb2xiYXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10b29sYmFyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRvY2tfPSd0b3AnXG4gICAgICAgICAqL1xuICAgICAgICBkb2NrXzogJ3RvcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0cz17bnR5cGU6ICdidXR0b24nfVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZTogJ2J1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX2xheW91dD17bnR5cGU6ICdoYm94JywgYWxpZ246ICdjZW50ZXInLCBwYWNrIDogJ3N0YXJ0J31cbiAgICAgICAgICovXG4gICAgICAgIF9sYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAnaGJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICBwYWNrIDogJ3N0YXJ0J1xuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBsYXlvdXQgY29uZmlnIGRlcGVuZGluZyBvbiB0aGlzLmRvY2tcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBsYXlvdXRDb25maWdcbiAgICAgKi9cbiAgICBnZXRMYXlvdXRDb25maWcoKSB7XG4gICAgICAgIGxldCBsYXlvdXRDb25maWc7XG5cbiAgICAgICAgc3dpdGNoKHRoaXMuZG9jaykge1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ3Zib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dENvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRvY2sgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RG9jayh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzICAgICAgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIGRvY2tQb3NpdGlvbnMgPSBtZS5nZXRTdGF0aWNDb25maWcoJ2RvY2tQb3NpdGlvbnMnKTtcblxuICAgICAgICBkb2NrUG9zaXRpb25zLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIE5lb0FycmF5W2tleSA9PT0gdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXShjbHMsICduZW8tZG9jay0nICsga2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuY2xzICAgID0gY2xzO1xuICAgICAgICBtZS5sYXlvdXQgPSBtZS5nZXRMYXlvdXRDb25maWcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyBkb2NrIHBvc2l0aW9uIG1hdGNoZXMgYSB2YWx1ZSBvZiB0aGUgc3RhdGljIGRvY2tQb3NpdGlvbnMgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0RG9jayh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2RvY2snLCAnZG9ja1Bvc2l0aW9ucycpO1xuICAgIH1cblxuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuX2l0ZW1zO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gJy0+Jykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpbmRleF0gPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZTogQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCAgOiAxXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUb29sYmFyKTtcblxuZXhwb3J0IHtUb29sYmFyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1ib2R5LXZpZXdwb3J0J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3cG9ydCk7XG5cbmV4cG9ydCB7Vmlld3BvcnQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IElkR2VuZXJhdG9yIGZyb20gJy4vSWRHZW5lcmF0b3IubWpzJ1xuXG5jb25zdCBjb25maWdTeW1ib2wgPSBTeW1ib2wuZm9yKCdjb25maWdTeW1ib2wnKSxcbiAgICAgIGlzSW5zdGFuY2UgICA9IFN5bWJvbCgnaXNJbnN0YW5jZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciAoYWxtb3N0KSBhbGwgY2xhc3NlcyBpbnNpZGUgdGhlIE5lbyBuYW1lc3BhY2VcbiAqIEV4Y2VwdGlvbnMgYXJlIGUuZy4gY29yZS5JZEdlbmVyYXRvciwgdmRvbS5WTm9kZVxuICogQGNsYXNzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSB3aWxsIGdldCBhcHBsaWVkIHRvIHRoZSBjbGFzcyBjb25zdHJ1Y3RvclxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0YXRpY0NvbmZpZ1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gZmFsc2UgaW4gY2FzZSB5b3UgZG9uJ3Qgd2FudCB0byBzdGlja1xuICAgICAgICAgKiB0byB0aGUgXCJhbnRpLXBhdHRlcm5cIiB0byBhcHBseSBjbGFzc2VzIHRvIHRoZSBnbG9iYWwgTmVvIG9yIEFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVnaXN0ZXJUb0dsb2JhbE5zPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlclRvR2xvYmFsTnM6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVGhlIHJldHVybiB2YWx1ZSB3aWxsIGdldCBhcHBsaWVkIHRvIGVhY2ggY2xhc3MgaW5zdGFuY2VcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBzdGF0aWNDb25maWdcbiAgICAgKiBAdHV0b3JpYWwgMDJfQ2xhc3NTeXN0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgbmFtZSB3aGljaCB3aWxsIGdldCBtYXBwZWQgaW50byB0aGUgTmVvIG9yIGFwcCBuYW1lc3BhY2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb3JlLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIHNob3J0Y3V0LW5hbWUgdG8gdXNlIGZvciBlLmcuIGNyZWF0aW5nIGNoaWxkIGNvbXBvbmVudHMgaW5zaWRlIGEgSlNPTi1mb3JtYXRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdiYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBtaXhpbnMgYXMgYW4gYXJyYXkgb2YgY2xhc3NOYW1lcywgaW1wb3J0ZWQgbW9kdWxlcyBvciBhIG1peGVkIHZlcnNpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW118TmVvLmNvcmUuQmFzZVtdfG51bGx9IG1peGlucz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaXhpbnM6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQ29uc3VtZXMgdGhlIHN0YXRpYyBnZXRDb25maWcoKSBvYmplY3RcbiAgICAgKiBBcHBsaWVzIHRoZSBvYnNlcnZhYmxlIG1peGluIGlmIG5lZWRlZCwgZ3JhbnRzIHJlbW90ZSBhY2Nlc3MgaWYgbmVlZGVkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgW2NvbmZpZ1N5bWJvbF06IHtcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZSAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICA6IHt9LFxuICAgICAgICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtpc0luc3RhbmNlXToge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuY3JlYXRlSWQoY29uZmlnLmlkIHx8IG1lLmlkKTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5pZDtcblxuICAgICAgICBpZiAobWUuY29uc3RydWN0b3IuY29uZmlnKSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuY29uc3RydWN0b3IuY29uZmlnLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmdldFN0YXRpY0NvbmZpZygnb2JzZXJ2YWJsZScpIHx8IG1lLm1peGlucyAmJiBOZW8ubnMoJ05lby5jb3JlLk9ic2VydmFibGUnLCBtZS5taXhpbnMpKSB7XG4gICAgICAgICAgICBtZS5pbml0T2JzZXJ2YWJsZShjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaW5pdENvbmZpZyhjb25maWcpO1xuXG4gICAgICAgIGlmIChtZS5jb250cm9sbGVyKSB7XG4gICAgICAgICAgICBtZS5jb250cm9sbGVyLnBhcnNlQ29uZmlnKCk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobWUsICdjb25maWdzQXBwbGllZCcsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWUucmVtb3RlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KG1lLmluaXRSZW1vdGUuYmluZChtZSksIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgYWxsIGNvbnN0cnVjdG9ycyBhcmUgZG9uZVxuICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7fVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgb25Db25zdHJ1Y3RlZCBpcyBkb25lXG4gICAgICogQHNlZSB7QGxpbmsgTmVvLmNvcmUuQmFzZSNvbkNvbnN0cnVjdGVkIG9uQ29uc3RydWN0ZWR9XG4gICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICovXG4gICAgaW5pdCgpIHt9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGJlZm9yZVNldCBmdW5jdGlvbnMgd2hpY2ggdGVzdCBpZiBhIGdpdmVuIHZhbHVlIGlzIGluc2lkZSBhIHN0YXRpYyBhcnJheVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgY29uZmlnIG5hbWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gW3N0YXRpY05hbWU9bmFtZSArICdzJ10gbmFtZSBvZiB0aGUgc3RhdGljIGNvbmZpZyBhcnJheVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8TnVtYmVyfSB2YWx1ZSBvciBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIG5hbWUsIHN0YXRpY05hbWUgPSBuYW1lICsgJ3MnKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IEFycmF5LmlzQXJyYXkoc3RhdGljTmFtZSkgPyBzdGF0aWNOYW1lIDogdGhpcy5nZXRTdGF0aWNDb25maWcoc3RhdGljTmFtZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ1N1cHBvcnRlZCB2YWx1ZXMgZm9yICcgKyBuYW1lICsgJyBhcmU6JywgdmFsdWVzLmpvaW4oJywgJyksIHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZXMgdGhlIElkR2VuZXJhdG9yIHRvIGNyZWF0ZSBhbiBpZCBpZiBhIHN0YXRpYyBvbmUgaXMgbm90IGV4cGxpY2l0bHkgc2V0LlxuICAgICAqIFJlZ2lzdGVycyB0aGUgaW5zdGFuY2UgdG8gbWFuYWdlci5JbnN0YW5jZSBpZiB0aGlzIG9uZSBpcyBhbHJlYWR5IGNyZWF0ZWQsXG4gICAgICogb3RoZXJ3aXNlIHN0b3JlcyBpdCBpbnNpZGUgYSB0bXAgbWFwLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqL1xuICAgIGNyZWF0ZUlkKGlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWQgPSBpZCB8fCBJZEdlbmVyYXRvci5nZXRJZChtZS5nZXRJZEtleSgpKTtcblxuICAgICAgICBpZiAoQmFzZS5pbnN0YW5jZU1hbmFnZXJBdmFpbGFibGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIE5lby5tYW5hZ2VyLkluc3RhbmNlLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICghTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICAgICAgTmVvLmlkTWFwID0ge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5pZE1hcFttZS5pZF0gPSBtZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVucmVnaXN0ZXJzIHRoaXMgaW5zdGFuY2UgZnJvbSBOZW8ubWFuYWdlci5JbnN0YW5jZVxuICAgICAqIGFuZCByZW1vdmVzIGFsbCBvYmplY3QgZW50cmllcyBmcm9tIHRoaXMgaW5zdGFuY2VcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChCYXNlLmluc3RhbmNlTWFuYWdlckF2YWlsYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgTmVvLm1hbmFnZXIuSW5zdGFuY2UudW5yZWdpc3RlcihtZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoTmVvLmlkTWFwKSB7XG4gICAgICAgICAgICBkZWxldGUgTmVvLmlkTWFwW21lLmlkXTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihtZSwga2V5KS53cml0YWJsZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2VkIGluc2lkZSBjcmVhdGVJZCgpIGFzIHRoZSBkZWZhdWx0IHZhbHVlIHBhc3NlZCB0byB0aGUgSWRHZW5lcmF0b3IuXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgYXMgbmVlZGVkLlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SWRLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm50eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZhbHVlIG9mIGEgc3RhdGljIGNvbmZpZyBrZXkgb3IgdGhlIHN0YXRpY0NvbmZpZyBvYmplY3QgaXRzZWxmIGluIGNhc2Ugbm8gdmFsdWUgaXMgc2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldFN0YXRpY0NvbmZpZyhrZXkpIHtcbiAgICAgICAgbGV0IGNmZyA9IHRoaXMuY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnO1xuICAgICAgICByZXR1cm4gKGtleSA/IGNmZ1trZXldIDogY2ZnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIGFsbCBjbGFzcyBjb25maWdzIHRvIHRoaXMgaW5zdGFuY2VcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKi9cbiAgICBpbml0Q29uZmlnKGNvbmZpZywgcHJldmVudE9yaWdpbmFsQ29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihtZVtjb25maWdTeW1ib2xdLCBtZS5tZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykpO1xuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgZ2V0IHRyaWdnZXJlZCB3aXRoIGEgZGVsYXkgdG8gZW5zdXJlIHRoYXQgTmVvLndvcmtlcklkICYgTmVvLndvcmtlci5NYW5hZ2VyIGFyZSBkZWZpbmVkXG4gICAgICogUmVtb3RlIG1ldGhvZCBhY2Nlc3MgdmlhIHByb21pc2VzXG4gICAgICovXG4gICAgaW5pdFJlbW90ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVtb3RlICAgICAgICA9IG1lLnJlbW90ZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSAgICAgPSBtZS5jbGFzc05hbWUsXG4gICAgICAgICAgICBjdXJyZW50V29ya2VyID0gTmVvLmN1cnJlbnRXb3JrZXIsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmICghbWUuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW90ZSBtZXRob2QgYWNjZXNzIG9ubHkgZnVuY3Rpb25hbCBmb3IgU2luZ2xldG9uIGNsYXNzZXMgJyArIGNsYXNzTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU5lby5jb25maWcudW5pdFRlc3RNb2RlICYmIE5lby5pc09iamVjdChyZW1vdGUpKSB7XG4gICAgICAgICAgICBpZiAoTmVvLndvcmtlcklkICE9PSAnbWFpbicgJiYgY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlciAmJiAhY3VycmVudFdvcmtlci5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBjdXJyZW50V29ya2VyLm9uKCdjb25uZWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRXb3JrZXIudW4oJ2Nvbm5lY3RlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgICAgICBCYXNlLnNlbmRSZW1vdGVzKGNsYXNzTmFtZSwgcmVtb3RlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQmFzZS5zZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjaGFuZ2UgdGhlIG9yZGVyIGNvbmZpZ3MgYXJlIGFwcGxpZWQgdG8gdGhpcyBpbnN0YW5jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyhjb25maWcsIHByZXZlbnRPcmlnaW5hbENvbmZpZykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBjdG9yID0gbWUuY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKCFjdG9yLmNvbmZpZykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZW8uYXBwbHlDbGFzc0NvbmZpZyBoYXMgbm90IGJlZW4gcnVuIG9uICcgKyBtZS5jbGFzc05hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50T3JpZ2luYWxDb25maWcpIHtcbiAgICAgICAgICAgIG1lLm9yaWdpbmFsQ29uZmlnID0gTmVvLmNsb25lKGNvbmZpZywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmN0b3IuY29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZW4gdXNpbmcgc2V0KCksIGNvbmZpZ3Mgd2l0aG91dCBhIHRyYWlsaW5nIHVuZGVyc2NvcmUgY2FuIGFscmVhZHkgYmUgYXNzaWduZWQsXG4gICAgICogc28gdGhlIGhhc093blByb3BlcnR5KCkgY2hlY2sgd2lsbCByZXR1cm4gdHJ1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2ZvcmNlQXNzaWduPWZhbHNlXVxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWdzKGZvcmNlQXNzaWduPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBPYmplY3Qua2V5cyhtZVtjb25maWdTeW1ib2xdKTtcblxuICAgICAgICAvLyBXZSBkbyBub3Qgd2FudCB0byBpdGVyYXRlIG92ZXIgdGhlIGtleXMsIHNpbmNlIDEgY29uZmlnIGNhbiByZW1vdmUgbW9yZSB0aGFuIDEga2V5IChiZWZvcmVTZXRYLCBhZnRlclNldFgpXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIFRoZSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBpcyBpbnRlbmRlZCBmb3IgY29uZmlncyB3aXRob3V0IGEgdHJhaWxpbmcgdW5kZXJzY29yZVxuICAgICAgICAgICAgLy8gPT4gdGhleSBjb3VsZCBhbHJlYWR5IGdvdCBhc3NpZ25lZCBpbnNpZGUgYW4gYWZ0ZXJTZXQtbWV0aG9kXG4gICAgICAgICAgICBpZiAoZm9yY2VBc3NpZ24gfHwgIW1lLmhhc093blByb3BlcnR5KGtleXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgbWVba2V5c1swXV0gPSBtZVtjb25maWdTeW1ib2xdW2tleXNbMF1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIGRlbGV0ZSBjYWxsIGluc2lkZSB0aGUgY29uZmlnIGdldHRlciBhcyB3ZWxsIChOZW8ubWpzID0+IGF1dG9HZW5lcmF0ZUdldFNldCgpKVxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBrZWVwIHRoaXMgb25lIGZvciBjb25maWdzLCB3aGljaCBkbyBub3QgdXNlIGdldHRlcnMgKG5vIHRyYWlsaW5nIHVuZGVyc2NvcmUpXG4gICAgICAgICAgICBkZWxldGUgbWVbY29uZmlnU3ltYm9sXVtrZXlzWzBdXTtcblxuICAgICAgICAgICAgbWUucHJvY2Vzc0NvbmZpZ3MoZm9yY2VBc3NpZ24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlbW90ZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZW5kUmVtb3RlcyhjbGFzc05hbWUsIHJlbW90ZSkge1xuICAgICAgICBsZXQgb3JpZ2luO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHJlbW90ZSkuZm9yRWFjaCgoW3dvcmtlciwgbWV0aG9kc10pID0+IHtcbiAgICAgICAgICAgIGlmIChOZW8ud29ya2VySWQgIT09IHdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9yaWdpbiA9IE5lby53b3JrZXJJZCA9PT0gJ21haW4nID8gTmVvLndvcmtlci5NYW5hZ2VyIDogTmVvLmN1cnJlbnRXb3JrZXI7XG5cbiAgICAgICAgICAgICAgICBvcmlnaW4uc2VuZE1lc3NhZ2Uod29ya2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgIDogJ3JlZ2lzdGVyUmVtb3RlJyxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kcyAgOiBtZXRob2RzLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKi9cbiAgICBzZXQodmFsdWVzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gaW5zdGVhZCBvZiB1c2luZzpcbiAgICAgICAgLy8gbWVbY29uZmlnU3ltYm9sXSA9IHZhbHVlcztcbiAgICAgICAgLy8gd2Uga2VlcCB0aGUgT2JqZWN0IGluc3RhbmNlIChkZWZpbmVkIHZpYSBPYmplY3QuZGVmaW5lUHJvcGVydGllcygpID0+IG5vbiBlbnVtZXJhYmxlKVxuXG4gICAgICAgIE9iamVjdC5rZXlzKG1lW2NvbmZpZ1N5bWJvbF0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZVtjb25maWdTeW1ib2xdW2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWVbY29uZmlnU3ltYm9sXSwgdmFsdWVzKTtcblxuICAgICAgICBtZS5wcm9jZXNzQ29uZmlncyh0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBvZiBhIHN0YXRpYyBjb25maWcgYnkgYSBnaXZlbiBrZXlcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5IFRoZSBrZXkgb2YgYSBzdGF0aWNDb25maWcgZGVmaW5lZCBpbnNpZGUgc3RhdGljIGdldFN0YXRpY0NvbmZpZ1xuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBjb25maWcgZXhpc3RzIGFuZCBnb3QgY2hhbmdlZFxuICAgICAqL1xuICAgIHNldFN0YXRpY0NvbmZpZyhrZXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBzdGF0aWNDb25maWcgPSB0aGlzLmNvbnN0cnVjdG9yLnN0YXRpY0NvbmZpZztcblxuICAgICAgICBpZiAoc3RhdGljQ29uZmlnLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHN0YXRpY0NvbmZpZ1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiA8cD5FbmhhbmNpbmcgdGhlIHRvU3RyaW5nKCkgbWV0aG9kLCBlLmcuPC9wPlxuICAgICAqIGBOZW8uY3JlYXRlKCdOZW8uYnV0dG9uLkJhc2UnKS50b1N0cmluZygpID0+IFwiW29iamVjdCBOZW8uYnV0dG9uLkJhc2UgKG5lby1idXR0b24tMSldXCJgXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQgW1N5bWJvbC50b1N0cmluZ1RhZ10oKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmNsYXNzTmFtZX0gKGlkOiAke3RoaXMuaWR9KWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogPHA+RW5oYW5jaW5nIHRoZSBpbnN0YW5jZW9mIG1ldGhvZC4gV2l0aG91dCB0aGlzIGNoYW5nZTo8L3A+XG4gICAgICogYE5lby5jb2xsZWN0aW9uLkJhc2UucHJvdG90eXBlIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIDxwPldpdGggdGhpcyBjaGFuZ2U6PC9wPlxuICAgICAqIGBOZW8uY29sbGVjdGlvbi5CYXNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UgPT4gZmFsc2VgPGJyPlxuICAgICAqIGBOZW8uY3JlYXRlKE5lby5jb2xsZWN0aW9uLkJhc2UpIGluc3RhbmNlb2YgTmVvLmNvcmUuQmFzZSA9PiB0cnVlYFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBbU3ltYm9sLmhhc0luc3RhbmNlXShpbnN0YW5jZSkge1xuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VbaXNJbnN0YW5jZV0gPT09IHRydWUgPyBzdXBlcltTeW1ib2wuaGFzSW5zdGFuY2VdKGluc3RhbmNlKSA6IGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbkJhc2UuaW5zdGFuY2VNYW5hZ2VyQXZhaWxhYmxlID0gZmFsc2U7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCIvKipcbiAqIFRoaXMgY2xhc3MgZ2V0cyB1c2VkIGJ5IGNvcmUuQmFzZSwgc28gaXQgY2FuIG5vdCBleHRlbmQgaXQuXG4gKiBJdCBjb3VsZCBnZXQgc2ltcGxpZmllZCB0byBqdXN0IGJlaW5nIGFuIG9iamVjdCAobmVlZHMgdG8gbWFudWFsbHkgZ2V0IHB1dCBpbnRvIHRoZSBOZW8gbmFtZXNwYWNlIGluIHRoaXMgY2FzZSkuXG4gKiBAY2xhc3MgTmVvLmNvcmUuSWRHZW5lcmF0b3JcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgSWRHZW5lcmF0b3Ige1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIG9uZSB0byBmYWxzZSBpbiBjYXNlIHlvdSBkb24ndCB3YW50IHRvIHN0aWNrXG4gICAgICAgICAqIHRvIHRoZSBcImFudGktcGF0dGVyblwiIHRvIGFwcGx5IGNsYXNzZXMgdG8gdGhlIGdsb2JhbCBOZW8gb3IgQXBwIG5hbWVzcGFjZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZWdpc3RlclRvR2xvYmFsTnM9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHJlZ2lzdGVyVG9HbG9iYWxOczogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuSWRHZW5lcmF0b3InXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb3JlLklkR2VuZXJhdG9yJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2lkLWdlbmVyYXRvcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdpZC1nZW5lcmF0b3InLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgcHJlZml4IGZvciBuZW8gaW5zdGFuY2UgaWRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFzZT0nbmVvLSdcbiAgICAgICAgICovXG4gICAgICAgIGJhc2U6ICduZW8tJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj0ndHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaWRDb3VudGVyID0ge307XG5cbiAgICAgICAgLy8gYWxpYXNcbiAgICAgICAgTmVvLmdldElkID0gbWUuZ2V0SWQuYmluZChtZSk7XG4gICAgfVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHt9XG5cbiAgICBpbml0KCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldElkKG5hbWUpIHtcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgJ25lbyc7XG5cbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY291bnRlciA9IG1lLmlkQ291bnRlcixcbiAgICAgICAgICAgIGNvdW50ICAgPSBjb3VudGVyW25hbWVdIHx8IDA7XG5cbiAgICAgICAgY291bnRlcltuYW1lXSA9ICsrY291bnQ7XG5cbiAgICAgICAgcmV0dXJuIG1lLmJhc2UgKyAobmFtZSA9PT0gJ25lbycgPyAnJyA6IG5hbWUgKyAnLScpICsgY291bnQ7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhJZEdlbmVyYXRvcik7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoSWRHZW5lcmF0b3IpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLkxvZ2dlclxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICogQHNpbmdsZXRvblxuICovXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvcmUuTG9nZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5Mb2dnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbG9nZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xvZ2dlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBjb25maWcgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgbG9nZ2luZ1xuICAgICAgICAgKiBAbWVtYmVyIHtib29sZWFufSBlbmFibGVMb2dzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZUxvZ3M6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxldmVsPSdsb2cnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxldmVsOiAnbG9nJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IGVuYWJsZUxvZ3M9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgLy8gYWxpYXNlc1xuICAgICAgICBOZW8uYXBwbHlGcm9tTnMoTmVvLCB0aGlzLCB7XG4gICAgICAgICAgICBlcnJvciAgIDogJ2Vycm9yJyxcbiAgICAgICAgICAgIGluZm8gICAgOiAnaW5mbycsXG4gICAgICAgICAgICBsb2cgICAgIDogJ2xvZycsXG4gICAgICAgICAgICBsb2dFcnJvcjogJ2xvZ0Vycm9yJyxcbiAgICAgICAgICAgIHdhcm4gICAgOiAnd2FybidcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBlcnJvcih2YWx1ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBsb2coLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2xvZyc7XG4gICAgICAgIHRoaXMud3JpdGUoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqL1xuICAgIGluZm8oLi4uYXJncykge1xuICAgICAgICB0aGlzLmxldmVsID0gJ2luZm8nO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICBsb2dFcnJvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMubGV2ZWwgPSAnZXJyb3InO1xuICAgICAgICB0aGlzLndyaXRlKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGFyZ3NcbiAgICAgKi9cbiAgICB3YXJuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5sZXZlbCA9ICd3YXJuJztcbiAgICAgICAgdGhpcy53cml0ZSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHdyaXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5hYmxlTG9ncyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZVt0aGlzLmxldmVsXSguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTG9nZ2VyKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShMb2dnZXIpO1xuXG5OZW8uYXBwbHlUb0dsb2JhbE5zKGluc3RhbmNlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb3JlLk9ic2VydmFibGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgT2JzZXJ2YWJsZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5PYnNlcnZhYmxlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5PYnNlcnZhYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21peGluLW9ic2VydmFibGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbWl4aW4tb2JzZXJ2YWJsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtaXhpbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1peGluOiB0cnVlXG4gICAgfX1cblxuICAgIGluaXRPYnNlcnZhYmxlKGNvbmZpZykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcHJvdG8gPSBtZS5fX3Byb3RvX18sXG4gICAgICAgICAgICBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIG1lLmxpc3RlbmVycyA9IGNvbmZpZy5saXN0ZW5lcnM7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLmxpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3RlbmVycyA9IG1lLmxpc3RlbmVycztcblxuICAgICAgICBtZS5saXN0ZW5lcnMgPSB7fTtcblxuICAgICAgICBpZiAobGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSB7Li4ubGlzdGVuZXJzfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuYWRkTGlzdGVuZXIobGlzdGVuZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlIChwcm90byAmJiBwcm90by5jb25zdHJ1Y3Rvci5pc0NsYXNzKSB7XG4gICAgICAgICAgICBpZiAocHJvdG8uY29uc3RydWN0b3Iuc3RhdGljQ29uZmlnLm9ic2VydmFibGUgJiYgIXByb3RvLmNvbnN0cnVjdG9yLmxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ocHJvdG8uY29uc3RydWN0b3IsIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIgICA6IG1lLmFkZExpc3RlbmVyLFxuICAgICAgICAgICAgICAgICAgICBmaXJlICAgICAgICAgIDogbWUuZmlyZSxcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHt9LFxuICAgICAgICAgICAgICAgICAgICBvbiAgICAgICAgICAgIDogbWUub24sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxpc3RlbmVyOiBtZS5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgdW4gICAgICAgICAgICA6IG1lLnVuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm90byA9IHByb3RvLl9fcHJvdG9fXztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRzXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbc2NvcGVdXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtldmVudElkXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGF0YV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW29yZGVyXVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGV2ZW50SWRcbiAgICAgKi9cbiAgICBhZGRMaXN0ZW5lcihuYW1lLCBvcHRzLCBzY29wZSwgZXZlbnRJZCwgZGF0YSwgb3JkZXIpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGxpc3RlbmVyLCBleGlzdGluZywgZXZlbnRDb25maWc7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBuYW1lID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG5hbWUuaGFzT3duUHJvcGVydHkoJ3Njb3BlJykpIHtcbiAgICAgICAgICAgICAgICBzY29wZSA9IG5hbWUuc2NvcGU7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG5hbWUuc2NvcGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKG5hbWUpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmFkZExpc3RlbmVyKGtleSwgdmFsdWUsIHNjb3BlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgc2NvcGUgPSBzY29wZSB8fCBvcHRzLnNjb3BlO1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBvcHRzLmZuO1xuICAgICAgICAgICAgb3JkZXIgPSBvcmRlciB8fCBvcHRzLm9yZGVyO1xuICAgICAgICAgICAgZXZlbnRJZCA9IGV2ZW50SWQgfHwgb3B0cy5ldmVudElkO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9wdHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IG9wdHM7IC8vIFZDIGhvb2ssIGNhbiBnZXQgcGFyc2VkIGFmdGVyIG9uQ29uc3RydWN0ZWQgaW4gY2FzZSB0aGUgdmlldyB1c2VzIHRoZSBwYXJlbnQgVkNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhZGRMaXN0ZW5lciBjYWxsOiAnICsgbmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudENvbmZpZyA9IHtcbiAgICAgICAgICAgIGZuICAgIDogbGlzdGVuZXIsXG4gICAgICAgICAgICBzY29wZSA6IHNjb3BlLFxuICAgICAgICAgICAgZGF0YSAgOiBkYXRhLFxuICAgICAgICAgICAgaWQgICAgOiBldmVudElkIHx8IE5lby5nZXRJZCgnZXZlbnQnKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChleGlzdGluZyA9IG1lLmxpc3RlbmVycyAmJiBtZS5saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLmZvckVhY2goY2ZnID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2ZnLmlkID09PSBldmVudElkIHx8IChjZmcuZm4gPT09IGxpc3RlbmVyICYmIGNmZy5zY29wZSA9PT0gc2NvcGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRHVwbGljYXRlIGV2ZW50IGhhbmRsZXIgYXR0YWNoZWQ6ICcgKyBuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZy5zcGxpY2Uob3JkZXIsIDAsIGV2ZW50Q29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3JkZXIgPT09ICdiZWZvcmUnKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmcudW5zaGlmdChldmVudENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nLnB1c2goZXZlbnRDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUubGlzdGVuZXJzW25hbWVdID0gW2V2ZW50Q29uZmlnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudENvbmZpZy5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICovXG4gICAgZmlyZShuYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXJncyAgICAgID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0gbWUubGlzdGVuZXJzLFxuICAgICAgICAgICAgZXZlbnRDb25maWcsIGV2ZW50cywgaSwgbGVuO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMgJiYgbGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICBldmVudHMgPSBbLi4ubGlzdGVuZXJzW25hbWVdXTtcbiAgICAgICAgICAgIGxlbiAgICA9IGV2ZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGV2ZW50Q29uZmlnID0gZXZlbnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgZXZlbnRDb25maWcuZm4uYXBwbHkoZXZlbnRDb25maWcuc2NvcGUgfHwgbWUsIGV2ZW50Q29uZmlnLmRhdGEgPyBhcmdzLmNvbmNhdChldmVudENvbmZpZy5kYXRhKSA6IGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBldmVudElkXG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIobmFtZSwgZXZlbnRJZCkge1xuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKGV2ZW50SWQpKSB7XG4gICAgICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSB0aGlzLmxpc3RlbmVyc1tuYW1lXSxcbiAgICAgICAgICAgICAgICBtYXRjaCAgICAgICA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRDb25maWcsIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldmVudENvbmZpZy5pZCA9PT0gZXZlbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPSBpZHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKG1hdGNoLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlbW92ZUFsbExpc3RlbmVyczogZnVuY3Rpb24obmFtZSkge1xuXG4gICAgLy8gfSxcblxuICAgIC8vIHN1c3BlbmRMaXN0ZW5lcnM6IGZ1bmN0aW9uKHF1ZXVlKSB7XG5cbiAgICAvLyB9LFxuXG4gICAgLy8gcmVzdW1lTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcblxuICAgIC8vIH1cblxuICAgIC8qKlxuICAgICAqIEFsaWFzIGZvciBhZGRMaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0c11cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3Njb3BlXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbZXZlbnRJZF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2RhdGFdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtvcmRlcl1cbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBldmVudElkXG4gICAgICovXG4gICAgb24oLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRMaXN0ZW5lciguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgcmVtb3ZlTGlzdGVuZXJcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSBldmVudElkXG4gICAgICovXG4gICAgdW4oLi4uYXJncykge1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoT2JzZXJ2YWJsZSk7XG5cbmV4cG9ydCB7T2JzZXJ2YWJsZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvcmUuVXRpbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBVdGlsIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSByZWdleCB0byByZW1vdmUgY2FtZWwgY2FzZSBzeW50YXhcbiAgICAgICAgICogQG1lbWJlciB7UmVnRXhwfSBkZWNhbWVsUmVnRXg9LyhbYS16XSkoW0EtWl0pL2dcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkZWNhbWVsUmVnRXg6IC8oW2Etel0pKFtBLVpdKS9nXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29yZS5VdGlsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29yZS5VdGlsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvcmUtdXRpbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb3JlLXV0aWwnLFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlc1xuICAgICAqL1xuICAgIHN0YXRpYyBiaW5kTWV0aG9kcyhzY29wZSwgdmFsdWVzKSB7XG4gICAgICAgIHZhbHVlcy5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgICAgIHNjb3BlW3ZhbHVlXSA9IHNjb3BlW3ZhbHVlXS5iaW5kKHNjb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBhIHN0cmluZyB1cHBlcmNhc2VcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSBSZXR1cm5zIGZhbHNlIGZvciBub24gc3RyaW5nIGlucHV0c1xuICAgICAqL1xuICAgIHN0YXRpYyBjYXBpdGFsaXplKHN0cmluZykge1xuICAgICAgICByZXR1cm4gVXRpbC5pc1N0cmluZyhzdHJpbmcpICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYSBzdHlsZXMgc3RyaW5nIGludG8gYSBzdHlsZXMgb2JqZWN0IHVzaW5nIGNhbWVsY2FzZSBzeW50YXhcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBzdHlsZXMgc3RyaW5nIHRvIHBhcnNlXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGNhbWVsY2FzZSBzdHlsZXMgb2JqZWN0XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlT2JqZWN0KHN0cmluZykge1xuICAgICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGFydHM7XG5cbiAgICAgICAgLy8gc3BsaXQoJzsnKSBkb2VzIGZldGNoIHNlbWljb2xvbnMgaW5zaWRlIGJyYWNrZXRzXG4gICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IFwidXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsLi4uXG5cbiAgICAgICAgLy8gVE9ETzogQ2FjaGUgYWxsIHJlZ2V4XG4gICAgICAgIHJldHVybiBzdHJpbmcuc3BsaXQoLzsoPz1bXlxcKV0qKD86XFwofCQpKS9nKS5yZWR1Y2UoKG9iaiwgZWwpID0+IHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgYnkgdGhlIGZpcnN0IGNvbG9uIG9ubHlcbiAgICAgICAgICAgIC8vIC0+IGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZycpXG4gICAgICAgICAgICBwYXJ0cyA9IGVsLnNwbGl0KCgvOiguKykvKSkubWFwKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IHBhcnNlRmxvYXQoeCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geCA9PSBudW0gPyBudW0gOiB4LnRyaW0oKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocGFydHNbMF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcGFydHNbMF0gPSBwYXJ0c1swXS5yZXBsYWNlKC8tKFthLXpdKS9nLCAoc3RyLCBsZXR0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG9ialtwYXJ0c1swXV0gPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHN0eWxlcyBvYmplY3Qgd2hpY2ggY2FuIHVzZSBjYW1lbGNhc2Ugc3ludGF4IGludG8gYSBzdHlsZXMgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHN0eWxlcyBUaGUgc3R5bGVzIG9iamVjdFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHlsZXMgc3RyaW5nIChET00gcmVhZHkpXG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZVN0eWxlcyhzdHlsZXMpIHtcbiAgICAgICAgbGV0IHN0eWxlID0gJyc7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gVXRpbC5kZWNhbWVsKGtleSkgKyAnOicgKyB2YWx1ZSArICc7JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5zZm9ybXMgYWxsIHVwcGVyY2FzZSBjaGFyYWN0ZXJzIG9mIGEgc3RyaW5nIGludG8gbG93ZXJjYXNlLlxuICAgICAqIERvZXMgbm90IHRvdWNoIHNwZWNpYWwgY2hhcmFjdGVycy5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWUgVGhlIGlucHV0IGNvbnRhaW5pbmcgdXBwZXJjYXNlIGNoYXJhY3RlcnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgbG93ZXJjYXNlIG91dHB1dFxuICAgICAqL1xuICAgIHN0YXRpYyBkZWNhbWVsKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFV0aWwuZGVjYW1lbFJlZ0V4LCAnJDEtJDInKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGFuIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQXJyYXkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYSBib29sZWFuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgbm90IHVuZGVmaW5lZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0RlZmluZWQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gZW1wdHkgQXJyYXksIE9iamVjdCBvciBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdHxTdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzRW1wdHkodmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFV0aWwuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcGFzc2VkIHZhbHVlIGlzIGEgbnVtYmVyLiBSZXR1cm5zIGZhbHNlIGZvciBub24tZmluaXRlIG51bWJlcnNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3RcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNOdW1iZXIodmFsdWUpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwYXNzZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0XG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBhc3NlZCB2YWx1ZSBpcyBhIHN0cmluZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc1N0cmluZyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbnkgaXRlcmFibGUgKHN0cmluZ3MsIG51bWVyaWMgaW5kaWNlcyBhbmQgYSBsZW5ndGggcHJvcGVydHkpIGludG8gYSB0cnVlIGFycmF5XG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBpdGVyYWJsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnQ9MF0gc3RhcnQgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2VuZD1pdGVyYWJsZS5sZW5ndGhdIGVuZCBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdG9BcnJheShpdGVyYWJsZSwgc3RhcnQsIGVuZCkge1xuICAgICAgICBsZXQgbGVuO1xuXG4gICAgICAgIGlmICghaXRlcmFibGUgfHwgIShsZW4gPSBpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZXJhYmxlLnNwbGl0KCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdGVyYWJsZSwgc3RhcnQgfHwgMCwgZW5kIHx8IGxlbik7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhVdGlsKTtcblxuLy8gYWxpYXNlc1xuTmVvLmFwcGx5RnJvbU5zKE5lbywgVXRpbCwge1xuICAgIGJpbmRNZXRob2RzICAgICAgOiAnYmluZE1ldGhvZHMnLFxuICAgIGNyZWF0ZVN0eWxlT2JqZWN0OiAnY3JlYXRlU3R5bGVPYmplY3QnLFxuICAgIGNyZWF0ZVN0eWxlcyAgICAgOiAnY3JlYXRlU3R5bGVzJyxcbiAgICBjYXBpdGFsaXplICAgICAgIDogJ2NhcGl0YWxpemUnLFxuICAgIGRlY2FtZWwgICAgICAgICAgOiAnZGVjYW1lbCcsXG4gICAgaXNBcnJheSAgICAgICAgICA6ICdpc0FycmF5JyxcbiAgICBpc0Jvb2xlYW4gICAgICAgIDogJ2lzQm9vbGVhbicsXG4gICAgaXNEZWZpbmVkICAgICAgICA6ICdpc0RlZmluZWQnLFxuICAgIGlzRW1wdHkgICAgICAgICAgOiAnaXNFbXB0eScsXG4gICAgaXNGdW5jdGlvbiAgICAgICA6ICdpc0Z1bmN0aW9uJyxcbiAgICBpc051bWJlciAgICAgICAgIDogJ2lzTnVtYmVyJyxcbiAgICBpc09iamVjdCAgICAgICAgIDogJ2lzT2JqZWN0JyxcbiAgICBpc1N0cmluZyAgICAgICAgIDogJ2lzU3RyaW5nJyxcbiAgICB0b0FycmF5ICAgICAgICAgIDogJ3RvQXJyYXknXG59LCB0cnVlKTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbDsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmRhdGEuTW9kZWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgTW9kZWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmRhdGEuTW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5kYXRhLk1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBmaWVsZHNfPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBrZXlQcm9wZXJ0eV89J2lkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBrZXlQcm9wZXJ0eV86ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gc3RvcmVJZD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlSWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBjb25maWcgdG8gdHJ1ZSBpbiBjYXNlIHlvdSB3YW50IHRvIHRyYWNrIG1vZGlmaWVkIGZpZWxkcy5cbiAgICAgICAgICogQmUgYXdhcmUgdGhhdCB0aGlzIHdpbGwgZG91YmxlIHRoZSBhbW91bnQgb2YgZGF0YSBpbnNpZGUgZWFjaCByZWNvcmQsXG4gICAgICAgICAqIHNpbmNlIGVhY2ggZmllbGQgd2lsbCBnZXQgYW4gb3JpZ2luYWwgdmFsdWUgZmxhZy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdHJhY2tNb2RpZmllZEZpZWxkcz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdHJhY2tNb2RpZmllZEZpZWxkczogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICovXG4gICAgYWZ0ZXJTZXRGaWVsZHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyU2V0RmllbGRzJywgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyBhIGZpZWxkIGNvbmZpZyBieSBhIGdpdmVuIGZpZWxkIG5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBUaGUgZmllbGQgY29uZmlnIG9iamVjdCBvciBudWxsIGlmIG5vIG1hdGNoIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGdldEZpZWxkKGtleSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBtZS5maWVsZHMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS5maWVsZHNbaV0ubmFtZSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lLmZpZWxkc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTW9kZWwpO1xuXG5leHBvcnQge01vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTG9nZ2VyIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgTW9kZWwgIGZyb20gJy4vTW9kZWwubWpzJztcblxubGV0IGluc3RhbmNlO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZGF0YS5SZWNvcmRGYWN0b3J5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIFJlY29yZEZhY3RvcnkgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmRhdGEuUmVjb3JkRmFjdG9yeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmRhdGEuUmVjb3JkRmFjdG9yeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGV0b249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBzaW5nbGV0b246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW50ZXJuYWwgcmVjb3JkIHByZWZpeCBmb3Igb3JpZ2luYWwgZmllbGQgdmFsdWVzLlxuICAgICAgICAgKiBPbmx5IHVzZWQgaW4gY2FzZSB0aGUgbW9kZWwgaGFzIHRyYWNrTW9kaWZpZWRGaWVsZHMgc2V0IHRvIHRydWUuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gb3ZQcmVmaXg9J292XydcbiAgICAgICAgICovXG4gICAgICAgIG92UHJlZml4OiAnb3ZfJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcmVjb3JkTmFtZXNwYWNlPSdOZW8uZGF0YS5yZWNvcmQuJ1xuICAgICAgICAgKi9cbiAgICAgICAgcmVjb3JkTmFtZXNwYWNlOiAnTmVvLmRhdGEucmVjb3JkLidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLk1vZGVsfSBtb2RlbFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGNyZWF0ZVJlY29yZChtb2RlbCwgY29uZmlnKSB7XG4gICAgICAgIGxldCByZWNvcmRDbGFzcyA9IE5lby5ucyh0aGlzLnJlY29yZE5hbWVzcGFjZSArIG1vZGVsLmNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKCFyZWNvcmRDbGFzcykge1xuICAgICAgICAgICAgcmVjb3JkQ2xhc3MgPSB0aGlzLmNyZWF0ZVJlY29yZENsYXNzKG1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgcmVjb3JkQ2xhc3MoY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG1vZGVsXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBjcmVhdGVSZWNvcmRDbGFzcyhtb2RlbCkge1xuICAgICAgICBpZiAobW9kZWwgaW5zdGFuY2VvZiBNb2RlbCkge1xuICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IHRoaXMucmVjb3JkTmFtZXNwYWNlICsgbW9kZWwuY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgIG5zICAgICAgICA9IE5lby5ucyhjbGFzc05hbWUpLFxuICAgICAgICAgICAgICAgIGtleSwgbnNBcnJheTtcblxuICAgICAgICAgICAgbW9kZWwudHJhY2tNb2RpZmllZEZpZWxkcyA9IHRydWU7IC8vIHRvZG86IHJlbW92ZSwganVzdCBmb3IgdGVzdGluZ1xuXG4gICAgICAgICAgICBpZiAoIW5zKSB7XG4gICAgICAgICAgICAgICAgbnNBcnJheSA9IGNsYXNzTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgIGtleSAgICAgPSBuc0FycmF5LnBvcCgpO1xuICAgICAgICAgICAgICAgIG5zICAgICAgPSBOZW8ubnMobnNBcnJheSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbnNba2V5XSA9IGNsYXNzIFJlY29yZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pc01vZGlmaWVkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobW9kZWwuZmllbGRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnNlZFZhbHVlID0gaW5zdGFuY2UucGFyc2VSZWNvcmRWYWx1ZShmaWVsZCwgY29uZmlnW2ZpZWxkLm5hbWVdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCAgICAgID0gU3ltYm9sKGZpZWxkLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3ltYm9sXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiBwYXJzZWRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmaWVsZC5uYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlICA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1tzeW1ib2xdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IG1lW3N5bWJvbF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBpbnN0YW5jZS5wYXJzZVJlY29yZFZhbHVlKGZpZWxkLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lW3N5bWJvbF0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2lzTW9kaWZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuX2lzTW9kaWZpZWQgPSBpbnN0YW5jZS5pc01vZGlmaWVkKG1lLCBtb2RlbC50cmFja01vZGlmaWVkRmllbGRzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Uub25SZWNvcmRDaGFuZ2Uoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkICAgOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsICAgOiBtb2RlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkICA6IG1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgOiB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkaW5nIHRoZSBvcmlnaW5hbCB2YWx1ZSBvZiBlYWNoIGZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RlbC50cmFja01vZGlmaWVkRmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzW2luc3RhbmNlLm92UHJlZml4ICsgZmllbGQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhcnNlZFZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtZSwgcHJvcGVydGllcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnNba2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5zO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSB2YWx1ZSBvZiBhIGNvbmZpZyBoYXMgY2hhbmdlZFxuICAgICAqIHRvZG86IHdlIGNvdWxkIGNvbXBhcmUgb2JqZWN0cyAmIGFycmF5cyBmb3IgZXF1YWxpdHlcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHBhcmFtIHsqfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS52YWx1ZU9mKCkgIT09IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2xkVmFsdWUgIT09IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJhY2tNb2RpZmllZEZpZWxkc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgYSBjaGFuZ2Ugd2FzIGZvdW5kXG4gICAgICovXG4gICAgaXNNb2RpZmllZChyZWNvcmQsIHRyYWNrTW9kaWZpZWRGaWVsZHMpIHtcbiAgICAgICAgaWYgKHRyYWNrTW9kaWZpZWRGaWVsZHMpIHtcbiAgICAgICAgICAgIGxldCBmaWVsZHMgPSBPYmplY3Qua2V5cyhyZWNvcmQpLFxuICAgICAgICAgICAgICAgIGkgICAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICAgID0gZmllbGRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBmaWVsZDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGZpZWxkID0gZmllbGRzW2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlY29yZFtmaWVsZF0gIT09IHJlY29yZFt0aGlzLm92UHJlZml4ICsgZmllbGRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZC5faXNNb2RpZmllZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmllbGROYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58bnVsbH0gbnVsbCBpbiBjYXNlIHRoZSBtb2RlbCBkb2VzIG5vdCB1c2UgdHJhY2tNb2RpZmllZEZpZWxkcywgdHJ1ZSBpbiBjYXNlIGEgY2hhbmdlIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGlzTW9kaWZpZWRGaWVsZChyZWNvcmQsIGZpZWxkTmFtZSkge1xuICAgICAgICBpZiAoIXJlY29yZC5oYXNPd25Qcm9wZXJ0eShmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1RoZSByZWNvcmQgZG9lcyBub3QgY29udGFpbiB0aGUgZmllbGQnLCBmaWVsZE5hbWUsIHJlY29yZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVjb3JkLmhhc093blByb3BlcnR5KHRoaXMub3ZQcmVmaXggKyBmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkW2ZpZWxkTmFtZV0gIT09IHJlY29yZFt0aGlzLm92UHJlZml4ICsgZmllbGROYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlc3RzIGlmIGEgZ2l2ZW4gb2JqZWN0IGlzIGFuIGluc3RhbmNlIG9mIGEgY2xhc3MgY3JlYXRlZCBieSB0aGlzIGZhY3RvcnlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSZWNvcmQob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lICYmIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnUmVjb3JkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgYSByZWNvcmQgZmllbGQuXG4gICAgICogRS5nLiBteVJlY29yZC5mb28gPSAnYmFyJztcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmZpZWxkIFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB3aGljaCBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG9wdHMubW9kZWwgVGhlIG1vZGVsIGluc3RhbmNlIG9mIHRoZSBjaGFuZ2VkIHJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy5vbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy52YWx1ZVxuICAgICAqL1xuICAgIG9uUmVjb3JkQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgbGV0IHN0b3JlID0gTmVvLmdldChvcHRzLm1vZGVsLnN0b3JlSWQpO1xuXG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgc3RvcmUub25SZWNvcmRDaGFuZ2Uob3B0cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvOiBwYXJzZSB2YWx1ZSBmb3IgbW9yZSBmaWVsZCB0eXBlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBmaWVsZFxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBwYXJzZVJlY29yZFZhbHVlKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gZmllbGQudHlwZSAmJiBmaWVsZC50eXBlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJlY29yZEZhY3RvcnkpO1xuXG5pbnN0YW5jZSA9IE5lby5jcmVhdGUoUmVjb3JkRmFjdG9yeSk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgTW9kZWwgICAgICAgICAgIGZyb20gJy4vTW9kZWwubWpzJztcbmltcG9ydCBPYnNlcnZhYmxlICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgUmVjb3JkRmFjdG9yeSAgIGZyb20gJy4vUmVjb3JkRmFjdG9yeS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZGF0YS5TdG9yZVxuICogQGV4dGVuZHMgTmVvLmNvbGxlY3Rpb24uQmFzZVxuICovXG5jbGFzcyBTdG9yZSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZGF0YS5TdG9yZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmRhdGEuU3RvcmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc3RvcmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc3RvcmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b0xvYWQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Mb2FkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGRhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gaW5pdGlhbERhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxEYXRhXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzR3JvdXBlZD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNHcm91cGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzTG9hZGVkPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc0xvYWRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0xvYWRpbmc9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gbGV0IHRoZSBiYWNrZW5kIGhhbmRsZSB0aGUgZmlsdGVyaW5nLlxuICAgICAgICAgKiBVc2VmdWwgZm9yIGJ1ZmZlcmVkIHN0b3Jlc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW1vdGVGaWx0ZXI9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZUZpbHRlcjogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIGxldCB0aGUgYmFja2VuZCBoYW5kbGUgdGhlIHNvcnRpbmcuXG4gICAgICAgICAqIFVzZWZ1bCBmb3IgYnVmZmVyZWQgc3RvcmVzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW90ZVNvcnQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHJlbW90ZVNvcnQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVXJsIGZvciBBamF4IHJlcXVlc3RzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB1cmw9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdXJsOiBudWxsXG4gICAgfX1cblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gdG9kb1xuICAgICAgICBtZS5vbih7XG4gICAgICAgICAgICBtdXRhdGU6IG1lLm9uQ29sbGVjdGlvbk11dGF0ZSxcbiAgICAgICAgICAgIHNvcnQgIDogbWUub25Db2xsZWN0aW9uU29ydCxcbiAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZGF0YSkge1xuICAgICAgICAgICAgbWUuYWZ0ZXJTZXREYXRhKG1lLmRhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmF1dG9Mb2FkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgLy8gdG9kb1xuICAgICAgICAgICAgICAgIG1lLmxvYWQoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmNvbmZpZ3NBcHBsaWVkKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuY2xlYXIoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5pbml0aWFsRGF0YSA9IFsuLi52YWx1ZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUuYWRkKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5pdGlhbERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlclNldEluaXRpYWxEYXRhJywgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLnN0b3JlSWQgPSB0aGlzLmlkO1xuICAgICAgICAgICAgUmVjb3JkRmFjdG9yeS5jcmVhdGVSZWNvcmRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBiZWZvcmVTZXREYXRhKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdG9kbzogYWRkIGEgY29uZmlnIHRvIG1ha2UgdGhlIGNsb25pbmcgb3B0aW9uYWxcbiAgICAgICAgICAgIHZhbHVlID0gTmVvLmNsb25lKHZhbHVlLCB0cnVlKTtcblxuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghUmVjb3JkRmFjdG9yeS5pc1JlY29yZChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2luZGV4XSA9IFJlY29yZEZhY3RvcnkuY3JlYXRlUmVjb3JkKG1lLm1vZGVsLCBrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYmVmb3JlU2V0RGF0YScsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBiZWZvcmVTZXRJbml0aWFsRGF0YSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSAmJiBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmRhdGEuTW9kZWx9XG4gICAgICovXG4gICAgYmVmb3JlU2V0TW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgTW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNyZWF0ZVJlY29yZChjb25maWcpIHtcbiAgICAgICAgUmVjb3JkRmFjdG9yeS5jcmVhdGVSZWNvcmQoY29uZmlnKTtcbiAgICB9XG5cbiAgICBsb2FkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgdXJsOiBtZS51cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmRhdGEgPSBBcnJheS5pc0FycmF5KGRhdGEuanNvbikgPyBkYXRhLmpzb24gOiBkYXRhLmpzb24uZGF0YTtcbiAgICAgICAgICAgIC8vIHdlIGRvIG5vdCBuZWVkIHRvIGZpcmUgYSBsb2FkIGV2ZW50ID0+IG9uQ29sbGVjdGlvbk11dGF0ZSgpXG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZm9yIE5lby5YaHIucmVxdWVzdCcsIGVyciwgbWUuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICovXG4gICAgb25Db2xsZWN0aW9uTXV0YXRlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuY29uZmlnc0FwcGxpZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkNvbGxlY3Rpb25NdXRhdGUnLCBvcHRzKTtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2xvYWQnLCBtZS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiB0b2RvOiBhZGQgd2lsbCBmaXJlIG11dGF0ZSBhbmQgc29ydCByaWdodCBhZnRlciBhbm90aGVyXG4gICAgICovXG4gICAgb25Db2xsZWN0aW9uU29ydCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuY29uZmlnc0FwcGxpZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdvbkNvbGxlY3Rpb25Tb3J0JywgbWUuY29sbGVjdGlvbi5pdGVtcyk7XG4gICAgICAgICAgICAvLyBtZS5maXJlKCdsb2FkJywgbWUuaXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIGEgcmVjb3JkIGZpZWxkLlxuICAgICAqIEUuZy4gbXlSZWNvcmQuZm9vID0gJ2Jhcic7XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5maWVsZCBUaGUgbmFtZSBvZiB0aGUgZmllbGQgd2hpY2ggZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLk1vZGVsfSBvcHRzLm1vZGVsIFRoZSBtb2RlbCBpbnN0YW5jZSBvZiB0aGUgY2hhbmdlZCByZWNvcmRcbiAgICAgKiBAcGFyYW0geyp9IG9wdHMub2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5yZWNvcmRcbiAgICAgKiBAcGFyYW0geyp9IG9wdHMudmFsdWVcbiAgICAgKi9cbiAgICBvblJlY29yZENoYW5nZShvcHRzKSB7XG4gICAgICAgIHRoaXMuZmlyZSgncmVjb3JkQ2hhbmdlJywgb3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmRpcmVjdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLnByb3BlcnR5XG4gICAgICovXG4gICAgc29ydChvcHRzPXt9KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnJlbW90ZVNvcnQpIHtcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3J0Jywgb3B0cy5wcm9wZXJ0eSwgb3B0cy5kaXJlY3Rpb24sIG1lLmNvbmZpZ3NBcHBsaWVkKTtcblxuICAgICAgICAgICAgaWYgKG1lLmNvbmZpZ3NBcHBsaWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdHMuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBvcHRzLmRpcmVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogb3B0cy5wcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZS5zdGFydFVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgICAgICBtZS5zb3J0ZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgIG1lLmFkZChbLi4ubWUuaW5pdGlhbERhdGFdKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuZW5kVXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3NvcnQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFN0b3JlKTtcblxuZXhwb3J0IHtTdG9yZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQWJzdHJhY3QgYmFzZSBjbGFzcyBmb3IgZm9ybSBmaWVsZHNcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYmFzZWZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2Jhc2VmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHsqfSB2YWx1ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Kn0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiB0aGlzLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfSB0aGlzLnZhbHVlXG4gICAgICovXG4gICAgZ2V0U3VibWl0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBjaGFuZ2UgZXZlbnQgZmlyZXMgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAqIEBldmVudCBjaGFuZ2VcbiAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAqIEBwYXJhbSB7Kn0gb2xkVmFsdWVcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgU3BpbkRvd25UcmlnZ2VyICAgZnJvbSAnLi90cmlnZ2VyL1NwaW5Eb3duLm1qcyc7XG5pbXBvcnQgU3BpblVwVHJpZ2dlciAgICAgZnJvbSAnLi90cmlnZ2VyL1NwaW5VcC5tanMnO1xuaW1wb3J0IFNwaW5VcERvd25UcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9TcGluVXBEb3duLm1qcyc7XG5pbXBvcnQgVGV4dCAgICAgICAgICAgICAgZnJvbSAnLi9UZXh0Lm1qcyc7XG5cbi8qKlxuICogVXNlcyBhbiBpbnB1dCB0eXBlIG51bWJlciBhbmQgb3B0aW9uYWxseSBwcm92aWRlcyBjdXN0b20gc3BpbiBidXR0b25zIGZvciB1cCBhbmQgZG93blxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLk51bWJlclxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBOdW1iZXIgZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHRyaWdnZXJQb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdHJpZ2dlclBvc2l0aW9ucz1bJ3JpZ2h0JywgJ3NpZGVzJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyUG9zaXRpb25zOiBbJ3JpZ2h0JywgJ3NpZGVzJ11cbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLk51bWJlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuTnVtYmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J251bWJlcmZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ251bWJlcmZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tbnVtYmVyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLW51bWJlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcltdfG51bGx9IGV4Y2x1ZGVkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGV4Y2x1ZGVkVmFsdWVzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogZmFsc2Ugb25seSBhbGxvd3MgY2hhbmdpbmcgdGhlIGZpZWxkIHVzaW5nIHRoZSBzcGluIGJ1dHRvbnNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaW5wdXRFZGl0YWJsZV89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRFZGl0YWJsZV86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZSBmb3IgdGhlIGlucHV0VHlwZV8gdGV4dGZpZWxkIGNvbmZpZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0nbnVtYmVyJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlOiAnbnVtYmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4VmFsdWVfPTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4VmFsdWVfOiAxMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1pblZhbHVlXz0wXG4gICAgICAgICAqL1xuICAgICAgICBtaW5WYWx1ZV86IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHN0ZXBTaXplXz0xXG4gICAgICAgICAqL1xuICAgICAgICBzdGVwU2l6ZV86IDEsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6ICdyaWdodCcsICdzaWRlcydcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0cmlnZ2VyUG9zaXRpb249J3JpZ2h0J1xuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlclBvc2l0aW9uXzogJ3JpZ2h0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVNwaW5CdXR0b25zXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VTcGluQnV0dG9uc186IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJzKCk7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlucHV0RWRpdGFibGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRFZGl0YWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEVsID0gbWUuZ2V0SW5wdXRFbCgpLFxuICAgICAgICAgICAgc3R5bGUgICA9IGlucHV0RWwuc3R5bGUgfHwge307XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBkZWxldGUgc3R5bGUucG9pbnRlckV2ZW50cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heFZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ21heCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1pblZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1pblZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ21pbicsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHN0ZXBTaXplIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFN0ZXBTaXplKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIHZhbCA9IG1lLnZhbHVlLFxuICAgICAgICAgICAgbW9kdWxvO1xuXG4gICAgICAgIG1lLmNoYW5nZUlucHV0RWxLZXkoJ3N0ZXAnLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgbW9kdWxvID0gKHZhbCAtIG1lLm1pblZhbHVlKSAlIHZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobW9kdWxvICE9PSAwKSB7IC8vIGZpbmQgdGhlIGNsb3Nlc3QgdmFsaWQgdmFsdWVcbiAgICAgICAgICAgICAgICBpZiAobW9kdWxvIC8gdmFsdWUgPiAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgICAgICAodmFsICsgdmFsdWUgLSBtb2R1bG8gPCBtZS5tYXhWYWx1ZSkge21lLnZhbHVlID0gdmFsICsgdmFsdWUgLSBtb2R1bG87fVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWwgLSBtb2R1bG8gPiBtZS5taW5WYWx1ZSkgICAgICAgICB7bWUudmFsdWUgPSB2YWwgLSBtb2R1bG87fVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICAgICAgKHZhbCAtIG1vZHVsbyA+IG1lLm1pblZhbHVlKSAgICAgICAgIHttZS52YWx1ZSA9IHZhbCAtIG1vZHVsbzt9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbCArIHZhbHVlIC0gbW9kdWxvIDwgbWUubWF4VmFsdWUpIHttZS52YWx1ZSA9IHZhbCArIHZhbHVlIC0gbW9kdWxvO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRyaWdnZXJQb3NpdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUcmlnZ2VyUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VTcGluQnV0dG9ucyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZVNwaW5CdXR0b25zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9sZFZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHRyaWdnZXJQb3NpdGlvbiBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFRyaWdnZXJQb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3RyaWdnZXJQb3NpdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQG92ZXJyaWRlXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZhbHVlICAgID0gZGF0YS52YWx1ZSxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWU7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSAmJiAhbWUucmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHN1cGVyLm9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpOyAvLyB0b2RvOiBzdXBwb3J0IGZvciBvdGhlciBudW1iZXIgdHlwZXNcblxuICAgICAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbWUuX3ZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgLSB2YWx1ZSAlIG1lLnN0ZXBTaXplO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgobWUubWluVmFsdWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKG1lLm1heFZhbHVlLCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBkYXRhLnZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25TcGluQnV0dG9uRG93bkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb2xkVmFsdWUgPSBtZS52YWx1ZSB8fCAobWUubWF4VmFsdWUgKyBtZS5zdGVwU2l6ZSksXG4gICAgICAgICAgICB2YWx1ZSAgICA9IE1hdGgubWF4KG1lLm1pblZhbHVlLCBvbGRWYWx1ZSAtIG1lLnN0ZXBTaXplKTtcblxuICAgICAgICBpZiAobWUuZXhjbHVkZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHdoaWxlKG1lLmV4Y2x1ZGVkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5tYXgobWUubWluVmFsdWUsIHZhbHVlIC0gbWUuc3RlcFNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNwaW5CdXR0b25VcENsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb2xkVmFsdWUgPSBtZS52YWx1ZSB8fCAobWUubWluVmFsdWUgLSBtZS5zdGVwU2l6ZSksXG4gICAgICAgICAgICB2YWx1ZSAgICA9IE1hdGgubWluKG1lLm1heFZhbHVlLCBvbGRWYWx1ZSArIG1lLnN0ZXBTaXplKTtcblxuICAgICAgICBpZiAobWUuZXhjbHVkZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHdoaWxlKG1lLmV4Y2x1ZGVkVmFsdWVzLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4obWUubWF4VmFsdWUsIHZhbHVlICsgbWUuc3RlcFNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbWUudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdXBkYXRlVHJpZ2dlcnMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0cmlnZ2VycyA9IG1lLnRyaWdnZXJzIHx8IFtdO1xuXG4gICAgICAgIGlmIChtZS51c2VTcGluQnV0dG9ucykge1xuICAgICAgICAgICAgaWYgKG1lLnRyaWdnZXJQb3NpdGlvbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGlmICghbWUuaGFzVHJpZ2dlcignc3BpbnVwZG93bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzLnB1c2goU3BpblVwRG93blRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW5kb3duJywgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW51cCcsICAgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1RyaWdnZXIoJ3NwaW5kb3duJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcnMucHVzaChTcGluRG93blRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghbWUuaGFzVHJpZ2dlcignc3BpbnVwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcnMucHVzaChTcGluVXBUcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGludXBkb3duJywgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbmRvd24nLCAgIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW51cCcsICAgICB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGludXBkb3duJywgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudHJpZ2dlcnMgPSB0cmlnZ2VycztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE51bWJlcik7XG5cbmV4cG9ydCB7TnVtYmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBOdW1iZXIgZnJvbSAnLi9OdW1iZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUmFuZ2VcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLk51bWJlclxuICovXG5jbGFzcyBSYW5nZSBleHRlbmRzIE51bWJlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlJhbmdlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5SYW5nZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdyYW5nZWZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3JhbmdlZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBzaG93cyBhIGNsZWFyIHRyaWdnZXIgaW4gY2FzZSB0aGUgZmllbGQgaGFzIGEgbm9uIGVtcHR5IHZhbHVlLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjbGVhcmFibGU9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXJhbmdlZmllbGQnLCduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcmFuZ2VmaWVsZCcsICduZW8tdGV4dGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZSBmb3IgdGhlIGlucHV0VHlwZV8gdGV4dGZpZWxkIGNvbmZpZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0ncmFuZ2UnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6ICdyYW5nZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gdGlja21hcmtzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgdGlja21hcmtzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VJbnB1dEV2ZW50PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VJbnB1dEV2ZW50IDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyB0aGUgZmllbGQuTnVtYmVyIGJ1dHRvbnNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlSW5wdXRFdmVudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlU3BpbkJ1dHRvbnM6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gbWUudmRvbS5jblsxXTtcblxuICAgICAgICBpZiAobWUudXNlSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZuICAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICA6IG1lLnZkb20uY25bMV0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRFbC5jbHMgPSBbJ25lby1yYW5nZWZpZWxkLWlucHV0J107IC8vIHJlcGxhY2UgbmVvLXRleHRmaWVsZC1pbnB1dFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGlja21hcmtzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaWNrbWFya3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZVRpY2ttYXJrcycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmFuZ2UpO1xuXG5leHBvcnQge1JhbmdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQmFzZVRyaWdnZXIgIGZyb20gJy4vdHJpZ2dlci9CYXNlLm1qcyc7XG5pbXBvcnQgQ2xlYXJUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9DbGVhci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICBmcm9tICcuLi8uLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgIGZyb20gJy4uLy4uL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCAgICBmcm9tICcuLi8uLi91dGlsL1ZOb2RlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlRleHRcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqL1xuY2xhc3MgVGV4dCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgbGFiZWxQb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gbGFiZWxQb3NpdGlvbnM9Wydib3R0b20nLCAnaW5saW5lJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFBvc2l0aW9uczogWydib3R0b20nLCAnaW5saW5lJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJ11cbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlRleHQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGV4dGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RleHRmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCB2YXJpYWJsZSB0byBzdG9yZSB0aGUgYWN0dWFsIHdpZHRoIGZvciB0aGUgbGFiZWwgY2VudGVyQm9yZGVyRWxcbiAgICAgICAgICogKG9ubHkgbmVlZGVkIGZvciBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJylcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGNlbnRlckJvcmRlckVsV2lkdGg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjZW50ZXJCb3JkZXJFbFdpZHRoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBzaG93cyBhIGNsZWFyIHRyaWdnZXIgaW4gY2FzZSB0aGUgZmllbGQgaGFzIGEgbm9uIGVtcHR5IHZhbHVlLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjbGVhcmFibGVfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyYWJsZV86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHdpbGwgcmVzZXQgdGhlIGZpZWxkIHRvIGl0cyBpbml0aWFsIHZhbHVlIGNvbmZpZy5cbiAgICAgICAgICogUmVjb21tZW5kZWQgZm9yIGZpZWxkcyB3aXRoIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNsZWFyVG9PcmlnaW5hbFZhbHVlPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjbGVhclRvT3JpZ2luYWxWYWx1ZV86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGVfPSd0ZXh0J1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlXzogJ3RleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbFBvc2l0aW9uXz0nbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsUG9zaXRpb25fOiAnbGVmdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxhYmVsVGV4dF89J0xhYmVsVGV4dCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsVGV4dF86ICdMYWJlbFRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gbGFiZWxXaWR0aF89MTUwXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFdpZHRoXzogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHBsYWNlaG9sZGVyVGV4dF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlcXVpcmVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVxdWlyZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXXxudWxsfSB0cmlnZ2Vyc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZyAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby10ZXh0ZmllbGQtbGFiZWwnXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICAgICA6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICBhdXRvY29ycmVjdCA6ICdvZmYnLFxuICAgICAgICAgICAgICAgIGNscyAgICAgICAgIDogWyduZW8tdGV4dGZpZWxkLWlucHV0J10sXG4gICAgICAgICAgICAgICAgZmxhZyAgICAgICAgOiAnbmVvLXJlYWwtaW5wdXQnLFxuICAgICAgICAgICAgICAgIHNwZWxsY2hlY2sgIDogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICA6IHt9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSwgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gbWUuZ2V0SW5wdXRFbCgpLFxuICAgICAgICAgICAgbGFiZWxFbCAgICAgID0gbWUuZ2V0TGFiZWxFbCgpO1xuXG4gICAgICAgIGlucHV0RWwuaWQgPSBsYWJlbEVsLmZvciA9IG1lLmlkICsgJy1pbnB1dCc7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyguLi5hcmdzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgICA9IHN1cGVyLm1lcmdlQ29uZmlnKC4uLmFyZ3MpLFxuICAgICAgICAgICAgdHJpZ2dlcnMgPSBjb25maWcudHJpZ2dlcnMgfHwgbWUudHJpZ2dlcnM7XG5cbiAgICAgICAgbWVbdHJpZ2dlcnMgPyAndHJpZ2dlcnMnIDogJ190cmlnZ2VycyddID0gdHJpZ2dlcnM7XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy50cmlnZ2VycztcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNsZWFyYWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENsZWFyYWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHRyaWdnZXJzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdHJpZ2dlcnMgPSBtZS50cmlnZ2VycyB8fCBbXTtcbiAgICAgICAgICAgIHRyaWdnZXJzLnVuc2hpZnQoQ2xlYXJUcmlnZ2VyKTtcbiAgICAgICAgICAgIG1lLnRyaWdnZXJzID0gdHJpZ2dlcnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdjbGVhcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjbGVhclRvT3JpZ2luYWxWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENsZWFyVG9PcmlnaW5hbFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZUNsZWFyVG9PcmlnaW5hbFZhbHVlJywge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBtZS51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dFR5cGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRUeXBlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ3R5cGUnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFBvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzLFxuICAgICAgICAgICAgY2VudGVyQm9yZGVyRWxDbHMsIGlzRW1wdHksIHZkb207XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ2xhYmVsLScgKyBvbGRWYWx1ZSk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICdsYWJlbC0nICsgdmFsdWUpO1xuICAgICAgICBtZVtvbGRWYWx1ZSA9PT0gJ2lubGluZScgfHwgdmFsdWUgPT09ICdpbmxpbmUnID8gJ19jbHMnIDogJ2NscyddID0gY2xzOyAvLyBzaWxlbnQgdXBkYXRlIGlmIG5lZWRlZFxuXG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdID0gbWUuZ2V0TGFiZWxFbCgpOyAvLyByZW1vdmUgdGhlIHdyYXBwZXJcblxuICAgICAgICAgICAgdmRvbS5jblswXS53aWR0aCA9IG1lLmxhYmVsV2lkdGg7XG5cbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUudXBkYXRlSW5wdXRXaWR0aCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgY2VudGVyQm9yZGVyRWxDbHMgPSBbJ25lby1jZW50ZXItYm9yZGVyJ107XG4gICAgICAgICAgICBpc0VtcHR5ICAgICAgICAgICA9IG1lLmlzRW1wdHkoKTtcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgID0gbWUudmRvbTtcblxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgY2VudGVyQm9yZGVyRWxDbHMucHVzaCgnbmVvLWZsb2F0LWFib3ZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB2ZG9tLmNuWzBdLndpZHRoO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdID0ge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGFiZWwtd3JhcHBlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1sZWZ0LWJvcmRlciddXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHM6IGNlbnRlckJvcmRlckVsQ2xzLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt2ZG9tLmNuWzBdXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yaWdodC1ib3JkZXInXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLnVwZGF0ZUlucHV0V2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZUNlbnRlckJvcmRlckVsV2lkdGgoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxUZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXNFbXB0eSA9IG1lLmlzRW1wdHkoKSxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmdldExhYmVsRWwoKS5pbm5lckhUTUwgPSB2YWx1ZTtcblxuICAgICAgICBpZiAobWUuaGlkZUxhYmVsKSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWUuZ2V0Q2VudGVyQm9yZGVyRWwoKS53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSh2ZG9tKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUudXBkYXRlQ2VudGVyQm9yZGVyRWxXaWR0aChpc0VtcHR5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uICE9PSAnaW5saW5lJykge1xuICAgICAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgbGFiZWwgPSB2ZG9tLmNuWzBdO1xuXG4gICAgICAgICAgICBsYWJlbC53aWR0aCA9IHZhbHVlO1xuXG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgaWYgKCFtZS5oaWRlTGFiZWwpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3JkZXJFbFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHBsYWNlaG9sZGVyVGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UGxhY2Vob2xkZXJUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ3BsYWNlaG9sZGVyJywgdmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJlcXVpcmVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UmVxdWlyZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgncmVxdWlyZWQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0cmlnZ2VycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VHJpZ2dlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IHZkb20uY25bMV0sIC8vIGlucHV0RWwgb3IgaW5wdXRXcmFwcGVyRWxcbiAgICAgICAgICAgIHByZVRyaWdnZXJzICA9IFtdLFxuICAgICAgICAgICAgcG9zdFRyaWdnZXJzID0gW10sXG4gICAgICAgICAgICB3aWR0aDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSAmJiBbLi4udmFsdWVdLCBvbGRWYWx1ZSAmJiBbLi4ub2xkVmFsdWVdKTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5nZXRUcmlnZ2VyKGl0ZW0udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5hbGlnbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICBwcmVUcmlnZ2Vycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RUcmlnZ2Vycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwb3N0VHJpZ2dlcnMuc29ydCgoYSwgYikgPT4gYi53ZWlnaHQgLSBhLndlaWdodCk7IC8vIERFU0NcbiAgICAgICAgICAgIHByZVRyaWdnZXJzIC5zb3J0KChhLCBiKSA9PiBhLndlaWdodCAtIGIud2VpZ2h0KTsgLy8gQVNDXG5cbiAgICAgICAgICAgIHBvc3RUcmlnZ2VycyA9IHBvc3RUcmlnZ2Vycy5tYXAoYSA9PiBhLnZkb20pO1xuICAgICAgICAgICAgcHJlVHJpZ2dlcnMgID0gcHJlVHJpZ2dlcnMgLm1hcChhID0+IGEudmRvbSk7XG5cbiAgICAgICAgICAgIGlmIChpbnB1dEVsLnRhZyA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGhlIGlucHV0IHRhZ1xuICAgICAgICAgICAgICAgIHZkb20uY25bMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1pbnB1dC13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuICAgOiBbLi4ucHJlVHJpZ2dlcnMsIGlucHV0RWwsIC4uLnBvc3RUcmlnZ2Vyc10sXG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBtZS5pZCArICctaW5wdXQtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbnB1dEVsLndpZHRoXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnB1dEVsLndpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsLmNuID0gWy4uLnByZVRyaWdnZXJzLCBtZS5nZXRJbnB1dEVsKCksIC4uLnBvc3RUcmlnZ2Vyc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbC50YWcgIT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICAvLyByZXBsYWNpbmcgdGhlIGlucHV0IHdyYXBwZXIgZGl2IHdpdGggdGhlIGlucHV0IHRhZ1xuICAgICAgICAgICAgICAgIHdpZHRoID0gaW5wdXRFbC53aWR0aDtcbiAgICAgICAgICAgICAgICB2ZG9tLmNuWzFdID0gbWUuZ2V0SW5wdXRFbCgpO1xuICAgICAgICAgICAgICAgIHZkb20uY25bMV0ud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS51cGRhdGVUcmlnZ2VyVm5vZGVzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogdG9kbzogYWRkIHZhbGlkYXRpb24gbG9naWNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIG1lLmdldElucHV0RWwoKS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghIXZhbHVlICE9PSAhIW9sZFZhbHVlKSB7IC8vIGNoYW5nZSBmcm9tIGVtcHR5IHRvIG5vbiBlbXB0eVxuICAgICAgICAgICAgTmVvQXJyYXlbdmFsdWUgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwID8gJ2FkZCcgOiAncmVtb3ZlJ10obWUuX2NscywgJ25lby1oYXMtY29udGVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXlbbWUub3JpZ2luYWxDb25maWcudmFsdWUgIT09IHZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10obWUuX2NscywgJ25lby1pcy1kaXJ0eScpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgd2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBzaGFsbG93IGNvcHkgb2YgdGhlIHRyaWdnZXJzIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0VHJpZ2dlcnModmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBsYWJlbFBvc2l0aW9uIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBiZWZvcmVTZXRMYWJlbFBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnbGFiZWxQb3NpdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHRyaWdnZXJzIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX0gdGhlIHBhcnNlZCB0cmlnZ2VycyBjb25maWdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge09iamVjdHxPYmplY3RbXX1cbiAgICAgKi9cbiAgICBiZWZvcmVTZXRUcmlnZ2Vycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IG1lLmdldFRyaWdnZXJJZChpdGVtLnByb3RvdHlwZS50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIEJhc2VUcmlnZ2VyKSkge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS5tb2R1bGUgJiYgIWl0ZW0ubnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5udHlwZSA9ICd0cmlnZ2VyJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBpdGVtLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkICAgICAgICA9IG1lLmdldFRyaWdnZXJJZChpdGVtLm1vZHVsZS5wcm90b3R5cGUudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXSh7Li4uaXRlbSwgZmllbGQ6IG1lfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGlucHV0RWwgdmRvbSBvYmplY3QgYXR0cmlidXRlIG9yIHJlbW92ZXMgaXQgaW4gY2FzZSBpdCBoYXMgbm8gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtBcnJheXxOdW1iZXJ8T2JqZWN0fFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGNoYW5nZUlucHV0RWxLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIG1lLmdldElucHV0RWwoKVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuZ2V0SW5wdXRFbCgpW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGZpZWxkIHRvIGl0cyBvcmlnaW5hbCB2YWx1ZSBvciBudWxsIGRlcGVuZGluZyBvbiB0aGUgY2xlYXJUb09yaWdpbmFsVmFsdWUgY29uZmlnXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudmFsdWUgPSBtZS5jbGVhclRvT3JpZ2luYWxWYWx1ZSA/IG1lLm9yaWdpbmFsQ29uZmlnLnZhbHVlIDogbnVsbDtcbiAgICAgICAgbWUuZmlyZSgnY2xlYXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXJCb3JkZXJFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHtjbHM6ICduZW8tY2VudGVyLWJvcmRlcid9KTtcbiAgICAgICAgcmV0dXJuIGVsICYmIGVsLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZ2V0SW5wdXRFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHtmbGFnOiAnbmVvLXJlYWwtaW5wdXQnfSk7XG4gICAgICAgIHJldHVybiBlbCAmJiBlbC52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEVsSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJy1pbnB1dCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbmV3IGlucHV0V2lkdGggYmFzZWQgb24gdGhlIGxhYmVsV2lkdGggJiB0b3RhbCB3aWR0aFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8bnVsbH0gbnVsbCBpbiBjYXNlIHRoaXMud2lkdGggaXMgdW5rbm93blxuICAgICAqL1xuICAgIGdldElucHV0V2lkdGgoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZ25vcmVMYWJlbCA9IG1lLmhpZGVMYWJlbCB8fCBtZS5sYWJlbFBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyB8fCBtZS5sYWJlbFBvc2l0aW9uID09PSAndG9wJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggID0gaWdub3JlTGFiZWwgPyAwIDogbWUubGFiZWxXaWR0aCxcbiAgICAgICAgICAgIHdpZHRoICAgICAgID0gbWUud2lkdGg7XG5cbiAgICAgICAgaWYgKGxhYmVsV2lkdGggJiYgd2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh3aWR0aCkgLSBwYXJzZUludChsYWJlbFdpZHRoKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZ2V0TGFiZWxFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHt0YWc6ICdsYWJlbCd9KTtcbiAgICAgICAgcmV0dXJuIGVsICYmIGVsLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm5zIHtOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRUcmlnZ2VyKHR5cGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyaWdnZXJzID0gbWUudHJpZ2dlcnMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICA9IHRyaWdnZXJzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlcnNbaV0udHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2Vyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldFRyaWdnZXJCeUlkKGlkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0cmlnZ2VycyA9IG1lLnRyaWdnZXJzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgPSB0cmlnZ2Vycy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2Vyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHRyaWdnZXIgbm9kZSBpZFxuICAgICAqL1xuICAgIGdldFRyaWdnZXJJZCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJy10cmlnZ2VyLScgKyB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgdHJpZ2dlciBieSBhIGdpdmVuIHR5cGUgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNUcmlnZ2VyKHR5cGUpIHtcbiAgICAgICAgbGV0IHRyaWdnZXJzID0gdGhpcy50cmlnZ2VycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gdHJpZ2dlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0cmlnZ2Vyc1tpXS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnJlcXVpcmVkICYmICghbWUudmFsdWUgfHwgbWUudmFsdWUgJiYgbWUudmFsdWUubGVuZ3RoIDwgMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5pc1ZhbGlkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRm9jdXNFbnRlcihwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzLFxuICAgICAgICAgICAgdmRvbTtcblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLWZvY3VzJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcblxuICAgICAgICBpZiAobWUubGFiZWxQb3NpdGlvbiA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgIGlmIChtZS5jZW50ZXJCb3JkZXJFbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG4gICAgICAgICAgICAgICAgbWUuZ2V0Q2VudGVyQm9yZGVyRWwoKS53aWR0aCA9IG1lLmNlbnRlckJvcmRlckVsV2lkdGg7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZUNlbnRlckJvcmRlckVsV2lkdGgoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRm9jdXNMZWF2ZShwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJCb3JkZXJFbCA9IG1lLmdldENlbnRlckJvcmRlckVsKCksIC8vIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnXG4gICAgICAgICAgICBjbHMgICAgICAgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIHZkb207XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1mb2N1cycpO1xuXG4gICAgICAgIGlmIChjZW50ZXJCb3JkZXJFbCAmJiBtZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIG1lLl9jbHMgPSBjbHM7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuICAgICAgICAgICAgZGVsZXRlIGNlbnRlckJvcmRlckVsLndpZHRoO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgb2xkVmFsdWUgPSBtZS52YWx1ZSxcbiAgICAgICAgICAgIHZub2RlICAgID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG1lLnZub2RlLCB7bm9kZU5hbWU6ICdpbnB1dCd9KTtcblxuICAgICAgICBpZiAodm5vZGUpIHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIC0+IHJldmVydCBhIHdyb25nIHVzZXIgaW5wdXRcbiAgICAgICAgICAgIHZub2RlLnZub2RlLmF0dHJpYnV0ZXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0cmlnZ2VycyBvZiBhIGdpdmVuIHR5cGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV0gdHJ1ZSBwcmV2ZW50cyBhIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyaWdnZXJTb3VyY2VdIHBhc3MgYSBzaGFsbG93IGNvcHkgb2YgdGhpcy50cmlnZ2Vyc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgYSB0cmlnZ2VyIHdhcyBmb3VuZCAmIHJlbW92ZWRcbiAgICAgKi9cbiAgICByZW1vdmVUcmlnZ2VyKHR5cGUsIHNpbGVudD1mYWxzZSwgdHJpZ2dlclNvdXJjZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXJzID0gdHJpZ2dlclNvdXJjZSB8fCBtZS50cmlnZ2VycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gdHJpZ2dlcnMubGVuZ3RoLFxuICAgICAgICAgICAgdHJpZ2dlcjtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0cmlnZ2VyID0gdHJpZ2dlcnNbaV07XG5cbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUodHJpZ2dlcnMsIHRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIGxlbi0tO1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCAmJiAhc2lsZW50KSB7XG4gICAgICAgICAgICBtZS50cmlnZ2VycyA9IHRyaWdnZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhhc01hdGNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnIHRvIGFkanVzdCB0aGUgdG9wIGJvcmRlciBtYXRjaGluZyB0byB0aGUgbGVuZ3RoIG9mIHRoZSBsYWJlbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV0gdHJ1ZSB0byBnZXQgdGhlIHZhbHVlLCBidXQgbm90IGFwcGx5IGl0IHRvIHRoZSBET01cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlQ2VudGVyQm9yZGVyRWxXaWR0aChzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgaWQ6IG1lLmdldENlbnRlckJvcmRlckVsKCkuaWRcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuY2VudGVyQm9yZGVyRWxXaWR0aCA9IE1hdGgucm91bmQoZGF0YS53aWR0aCAqIC43KSArIDg7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0Q2VudGVyQm9yZGVyRWwoKS53aWR0aCA9IG1lLmNlbnRlckJvcmRlckVsV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbmV3IGlucHV0V2lkdGggYmFzZWQgb24gdGhlIGxhYmVsV2lkdGggJiB0b3RhbCB3aWR0aFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVJbnB1dFdpZHRoKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbnB1dFdpZHRoID0gbWUuZ2V0SW5wdXRXaWR0aCgpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKGlucHV0V2lkdGggIT09IG51bGwgJiYgaW5wdXRXaWR0aCAhPT0gbWUud2lkdGgpIHtcbiAgICAgICAgICAgIHZkb20uY25bMV0ud2lkdGggPSBpbnB1dFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHZkb20uY25bMV0ud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSB0cmlnZ2VycyBkbyBub3QgZ2V0IHJlbmRlcmVkLCBhc3NpZ24gdGhlIHJlbGV2YW50IHByb3BzXG4gICAgICogdG9kbzogdGhpcyBjb3VsZCBiZSBoYW5kbGVkIGJ5IGNvbXBvbmVudC5CYXNlXG4gICAgICovXG4gICAgdXBkYXRlVHJpZ2dlclZub2RlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0cmlnZ2VyUm9vdCAgPSBtZS52bm9kZSAmJiBtZS52bm9kZS5jaGlsZE5vZGVzWzFdLFxuICAgICAgICAgICAgY2hpbGROb2RlcyAgID0gdHJpZ2dlclJvb3QgJiYgdHJpZ2dlclJvb3QuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIHRyaWdnZXI7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKHZub2RlID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXIgPSBtZS5nZXRUcmlnZ2VyQnlJZCh2bm9kZS5pZCk7XG5cbiAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0cmlnZ2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIHZub2RlICAgIDogdm5vZGUsXG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgX21vdW50ZWQgOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGV4dCk7XG5cbmV4cG9ydCB7VGV4dCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBmb3JtIGZpZWxkIFRyaWdnZXJzXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBhbGlnblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYWxpZ25WYWx1ZXM9WydlbmQnLCAnc3RhcnQnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduVmFsdWVzOiBbJ2VuZCcsICdzdGFydCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhbGlnbl89J2VuZCdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduXzogJ2VuZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWZpZWxkLXRyaWdnZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1maWVsZC10cmlnZ2VyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZm9ybS5maWVsZC5CYXNlfG51bGx9IGZpZWxkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZGVuXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZGVuXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNsc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgb2YgdGhlIHRyaWdnZXIgaGFuZGxlclxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29yZS5CYXNlfG51bGx9IHNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd09uSG92ZXI9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdiYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWJJbmRleDogLTF9XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFiSW5kZXg6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHdlaWdodF89MTBcbiAgICAgICAgICovXG4gICAgICAgIHdlaWdodF86IDEwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgICA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUsIHRydWUpLFxuICAgICAgICAgICAgZmllbGRMaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25UcmlnZ2VyQ2xpY2ssXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS5zaG93T25Ib3Zlcikge1xuICAgICAgICAgICAgbWUuaGlkZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICBtZS5maWVsZC5vbignY29uc3RydWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGRMaXN0ZW5lcnMgPSAhbWUuZmllbGQuZG9tTGlzdGVuZXJzID8gW10gOiBOZW8uY2xvbmUobWUuZmllbGQuZG9tTGlzdGVuZXJzLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaWVsZExpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4gICAgOiBtZS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuICAgIDogbWUub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbWUuZmllbGQuZG9tTGlzdGVuZXJzID0gZmllbGRMaXN0ZW5lcnM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCBtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhbGlnbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBbGlnbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID09PSAnc3RhcnQnID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLWFsaWduLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZGVuIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZGVuKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSAgPSB0aGlzLnZkb20sXG4gICAgICAgICAgICBzdHlsZSA9IHZkb20uc3R5bGUgfHwge307XG5cbiAgICAgICAgc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMudmRvbSAgPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNscyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJY29uQ2xzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgY2xzID0gdGhpcy5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGFsaWduIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0QWxpZ24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnbicsICdhbGlnblZhbHVlcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmllbGQ7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNsaWNrIGRvbUV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgc2NvcGUgPSBtZS5zY29wZSB8fCBtZTtcblxuICAgICAgICBpZiAobWUuaGFuZGxlcikge1xuICAgICAgICAgICAgc2NvcGVbbWUuaGFuZGxlcl0uY2FsbChzY29wZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uLy4uLy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBDbGVhciBUcmlnZ2VyIHRvIHJlbW92ZSB0aGUgaW5wdXQgdmFsdWUgb2YgVGV4dEZpZWxkcyBvciBzdWJjbGFzc2VzXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5DbGVhclxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKi9cbmNsYXNzIENsZWFyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQ2xlYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQ2xlYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1jbGVhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLWNsZWFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tdHJpZ2dlci1jbGVhciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWZpZWxkLXRyaWdnZXInLCAnbmVvLXRyaWdnZXItY2xlYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ2xzPSdmYSBmYS10aW1lcydcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS10aW1lcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nY2xlYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdjbGVhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHdlaWdodF89MjBcbiAgICAgICAgICovXG4gICAgICAgIHdlaWdodDogMjBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5maWVsZC5vbih7XG4gICAgICAgICAgICBjaGFuZ2UgICAgICAgICAgICAgICAgICAgIDogbWUub25GaWVsZENoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZUNsZWFyVG9PcmlnaW5hbFZhbHVlOiBtZS5vbkZpZWxkQ2hhbmdlLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmhpZGRlbiA9IG1lLmdldEhpZGRlblN0YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRkZW4gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRkZW4odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBjbHMgPSB0aGlzLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1pcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSB0cmlnZ2VyIHNob3VsZCBiZSBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXRIaWRkZW5TdGF0ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpZWxkID0gbWUuZmllbGQsXG4gICAgICAgICAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuXG4gICAgICAgIGlmIChmaWVsZC5jbGVhclRvT3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBmaWVsZC5vcmlnaW5hbENvbmZpZy52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJzAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gIWZpZWxkLnZhbHVlIHx8IHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKi9cbiAgICBvbkZpZWxkQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0aGlzLmdldEhpZGRlblN0YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5jbGVhcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2xlYXIpO1xuXG5leHBvcnQge0NsZWFyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgdmFsdWUgb2YgYSBOdW1iZXJGaWVsZFxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpbkRvd25cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBTcGluRG93biBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluRG93bicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXNwaW5kb3duJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItc3BpbmRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhbGlnbl89J3N0YXJ0J1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2hldnJvbi1sZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNoZXZyb24tbGVmdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nc3BpbmRvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdzcGluZG93bidcbiAgICB9fVxuXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpZWxkLm9uU3BpbkJ1dHRvbkRvd25DbGljaygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3BpbkRvd24pO1xuXG5leHBvcnQge1NwaW5Eb3duIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgdmFsdWUgb2YgYSBOdW1iZXJGaWVsZFxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgU3BpblVwIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXNwaW51cCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXNwaW51cCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2hldnJvbi1yaWdodCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdzcGludXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdzcGludXAnXG4gICAgfX1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5vblNwaW5CdXR0b25VcENsaWNrKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTcGluVXApO1xuXG5leHBvcnQge1NwaW5VcCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBDb21iaW5lcyBzcGluIHVwICYgZG93biBpbnNpZGUgb25lIHRyaWdnZXJcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcERvd25cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBTcGluVXBEb3duIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwRG93bidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXBEb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItc3BpbnVwZG93bidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXNwaW51cGRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1maWVsZC10cmlnZ2VyJywgJ25lby1zcGluLWJ1dHRvbnMnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1maWVsZC10cmlnZ2VyJywgJ25lby1zcGluLWJ1dHRvbnMnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc3BpbkJ1dHRvbkRvd25JY29uQ2xzPSdmYSBmYS1jaGV2cm9uLWRvd24nXG4gICAgICAgICAqL1xuICAgICAgICBzcGluQnV0dG9uRG93bkljb25DbHM6ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzcGluQnV0dG9uVXBJY29uQ2xzPSdmYSBmYS1jaGV2cm9uLXVwJ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BpbkJ1dHRvblVwSWNvbkNsczogJ2ZhIGZhLWNoZXZyb24tdXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3NwaW51cGRvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdzcGludXBkb3duJ1xuICAgIH19XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuID0gW1xuICAgICAgICAgICAge2NsczogWyduZW8tc3Bpbi1idXR0b24nLCAnbmVvLXVwJywgICBtZS5zcGluQnV0dG9uVXBJY29uQ2xzXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ25lby1zcGluLWJ1dHRvbicsICduZW8tZG93bicsIG1lLnNwaW5CdXR0b25Eb3duSWNvbkNsc119XG4gICAgICAgIF07XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgIH1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXQgPSBkYXRhLnBhdGhbMF0sXG4gICAgICAgICAgICBjbHMgICAgPSB0YXJnZXQuY2xzLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKCduZW8tZG93bicpKSB7XG4gICAgICAgICAgICBtZS5maWVsZC5vblNwaW5CdXR0b25Eb3duQ2xpY2soKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbHMuaW5jbHVkZXMoJ25lby11cCcpKSB7XG4gICAgICAgICAgICBtZS5maWVsZC5vblNwaW5CdXR0b25VcENsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNwaW5VcERvd24pO1xuXG5leHBvcnQge1NwaW5VcERvd24gYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFRoZSBiYXNlIGNsYXNzIGZvciBhbGwgb3RoZXIgbGF5b3V0cy5cbiAqIFVzZSBpdCBkaXJlY3RseSBpbiBjYXNlIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGNvbnRhaW5lciB3aXRob3V0IGEgbGF5b3V0LlxuICogQGNsYXNzIE5lby5sYXlvdXQuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtYmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgSWQgb2YgdGhlIENvbnRhaW5lciBpbnN0YW5jZSB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAgICAgKiBAbWVtYmVyIHs/U3RyaW5nfSBjb250YWluZXJJZD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lcklkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSWRlbnRpZmllciBmb3IgYWxsIGNsYXNzZXMgdGhhdCBleHRlbmQgbGF5b3V0LkJhc2VcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNMYXlvdXQ9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc0xheW91dDogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gaXRlbVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHt9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gaXRlbVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge31cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIE1ldGhvZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge31cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkNhcmRcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuQmFzZVxuICovXG5jbGFzcyBDYXJkIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGZvciBhbiBhY3RpdmUgaXRlbSBpbnNpZGUgdGhlIGNhcmQgbGF5b3V0XG4gICAgICAgICAqIEBtZW1iZXIgYWN0aXZlSXRlbUNsc1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVJdGVtQ2xzOiAnYWN0aXZlLWl0ZW0nLFxuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGZvciBhbiBpbmFjdGl2ZSBpdGVtIGluc2lkZSB0aGUgY2FyZCBsYXlvdXRcbiAgICAgICAgICogQG1lbWJlciBpbmFjdGl2ZUl0ZW1DbHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgaW5hY3RpdmVJdGVtQ2xzOiAnaW5hY3RpdmUtaXRlbScsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZm9yIGFuIGl0ZW0gaW5zaWRlIHRoZSBjYXJkIGxheW91dFxuICAgICAgICAgKiBAbWVtYmVyIGl0ZW1DbHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbUNsczogJ25lby1sYXlvdXQtY2FyZC1pdGVtJ1xuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5DYXJkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkNhcmQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWNhcmQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWNhcmQnLFxuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgaXRlbSBpbmRleCBvZiB0aGUgY2FyZCwgd2hpY2ggaXMgY3VycmVudGx5IGFjdGl2ZS5cbiAgICAgICAgICogQ2hhbmdlIHRoaXMgdmFsdWUgdG8gYWN0aXZhdGUgYSBkaWZmZXJlbnQgY2FyZC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhY3RpdmVJbmRleF89MFxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlSW5kZXhfOiAwLFxuICAgICAgICAvKlxuICAgICAgICAgKiBSZW1vdmUgdGhlIERPTSBvZiBpbmFjdGl2ZSBjYXJkcy5cbiAgICAgICAgICogVGhpcyB3aWxsIGtlZXAgdGhlIGluc3RhbmNlcyAmIHZkb20gdHJlZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVtb3ZlSW5hY3RpdmVDYXJkcz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICByZW1vdmVJbmFjdGl2ZUNhcmRzOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE1vZGlmaWVzIHRoZSBDU1MgY2xhc3NlcyBvZiB0aGUgY29udGFpbmVyIGl0ZW1zIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEF1dG9tYXRpY2FsbHkgZ2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIGFjdGl2ZUluZGV4LlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFjdGl2ZUluZGV4KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgc0NmZyAgICAgID0gbWUuZ2V0U3RhdGljQ29uZmlnKCksXG4gICAgICAgICAgICBpc0FjdGl2ZUluZGV4LCBjbHMsIGl0ZW1zLCB2ZG9tO1xuXG4gICAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gY29udGFpbmVyLml0ZW1zO1xuICAgICAgICAgICAgdmRvbSAgPSBjb250YWluZXIudmRvbTtcblxuICAgICAgICAgICAgaWYgKCFpdGVtc1t2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICBOZW8uZXJyb3IoJ1RyeWluZyB0byBhY3RpdmF0ZSBhIG5vbiBleGlzdGluZyBjYXJkJywgdmFsdWUsIGl0ZW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjbHMgICAgICAgICAgID0gaXRlbS5jbHM7XG4gICAgICAgICAgICAgICAgaXNBY3RpdmVJbmRleCA9IGluZGV4ID09PSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIGlzQWN0aXZlSW5kZXggPyBzQ2ZnLmluYWN0aXZlSXRlbUNscyA6IHNDZmcuYWN0aXZlSXRlbUNscyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKCAgIGNscywgaXNBY3RpdmVJbmRleCA/IHNDZmcuYWN0aXZlSXRlbUNscyAgIDogc0NmZy5pbmFjdGl2ZUl0ZW1DbHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLnJlbW92ZUluYWN0aXZlQ2FyZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5fY2xzID0gY2xzOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZ2V0VmRvbVJvb3QoKS5jbHMgPSBjbHM7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52ZG9tLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNscyA9IGNscztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lLnJlbW92ZUluYWN0aXZlQ2FyZHMpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsbHkgc2V0cyB0aGUgQ1NTIGNsYXNzZXMgb2YgdGhlIGNvbnRhaW5lciBpdGVtcyB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gaXRlbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2tlZXBJbkRvbT1mYWxzZV1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCwga2VlcEluRG9tPWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlzQWN0aXZlSW5kZXggPSBtZS5hY3RpdmVJbmRleCA9PT0gaW5kZXgsXG4gICAgICAgICAgICBzQ2ZnICAgICAgICAgID0gbWUuZ2V0U3RhdGljQ29uZmlnKCksXG4gICAgICAgICAgICBjaGlsZENscyAgICAgID0gaXRlbS5jbHMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgID0gaXRlbS52ZG9tO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjaGlsZENscywgc0NmZy5pdGVtQ2xzKTtcbiAgICAgICAgTmVvQXJyYXkuYWRkKGNoaWxkQ2xzLCBpc0FjdGl2ZUluZGV4ID8gc0NmZy5hY3RpdmVJdGVtQ2xzIDogc0NmZy5pbmFjdGl2ZUl0ZW1DbHMpO1xuXG4gICAgICAgIGlmICgha2VlcEluRG9tICYmIG1lLnJlbW92ZUluYWN0aXZlQ2FyZHMpIHtcbiAgICAgICAgICAgIGl0ZW0uX2NscyA9IGNoaWxkQ2xzOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICB2ZG9tLnJlbW92ZURvbSA9ICFpc0FjdGl2ZUluZGV4O1xuICAgICAgICAgICAgaXRlbS52ZG9tID0gdmRvbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uY2xzID0gY2hpbGRDbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuQ2FyZDogYXBwbHlSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzIHx8IFtdLCAnbmVvLWxheW91dC1jYXJkJyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkNhcmQ6IHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tbGF5b3V0LWNhcmQnKTtcblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2FyZCk7XG5cbmV4cG9ydCB7Q2FyZCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkZpdFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5CYXNlXG4gKi9cbmNsYXNzIEZpdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkZpdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5GaXQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWZpdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtZml0J1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsbHkgc2V0cyB0aGUgQ1NTIGNsYXNzZXMgb2YgdGhlIGNvbnRhaW5lciBpdGVtcyB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY2hpbGRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFjaGlsZC5pZ25vcmVMYXlvdXQpIHtcbiAgICAgICAgICAgIGNoaWxkLmNscyA9IE5lb0FycmF5LnVuaW9uKGNoaWxkLmNscywgJ25lby1sYXlvdXQtZml0LWl0ZW0nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgQ1NTIGNsYXNzZXMgdG8gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GaXQ6IGFwcGx5UmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscyB8fCBbXSwgJ25lby1sYXlvdXQtZml0Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkZpdDogcmVtb3ZlUmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1sYXlvdXQtZml0Jyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZpdCk7XG5cbmV4cG9ydCB7Rml0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuRmxleGJveFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5CYXNlXG4gKi9cbmNsYXNzIEZsZXhib3ggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGFsaWduXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBhbGlnblZhbHVlcz1bJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCAnc3RyZXRjaCcsIG51bGxdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ25WYWx1ZXM6IFsnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsICdzdHJldGNoJywgbnVsbF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGRpcmVjdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gZGlyZWN0aW9uVmFsdWVzPVsnY29sdW1uJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3JvdycsICdyb3ctcmV2ZXJzZScsIG51bGxdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uVmFsdWVzOiBbJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZScsICdyb3cnLCAncm93LXJldmVyc2UnLCBudWxsXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgcGFja1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gcGFja1ZhbHVlcz1bJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCBudWxsXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHBhY2tWYWx1ZXM6IFsnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsIG51bGxdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB3cmFwXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB3cmFwVmFsdWVzPVsnbm93cmFwJywgJ3dyYXAnLCAnd3JhcC1yZXZlcnNlJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwVmFsdWVzOiBbJ25vd3JhcCcsICd3cmFwJywgJ3dyYXAtcmV2ZXJzZSddLFxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5GbGV4Ym94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkZsZXhib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWZsZXhib3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWZsZXhib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsICdzdHJldGNoJywgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYWxpZ25fPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZScsICdyb3cnLCAncm93LXJldmVyc2UnLCBudWxsXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkaXJlY3Rpb25fPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6ICdjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gcGFja189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGFja186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDU1MgY2xhc3NOYW1lIHByZWZpeFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByZWZpeD0nbmVvLWZsZXgtJ1xuICAgICAgICAgKi9cbiAgICAgICAgcHJlZml4OiAnbmVvLWZsZXgtJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogbm93cmFwLCB3cmFwLCB3cmFwcmV2ZXJzZVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHdyYXBfPSdub3dyYXAnXG4gICAgICAgICAqL1xuICAgICAgICB3cmFwXzogJ25vd3JhcCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJhbGlnblwiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBbGlnbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2FsaWduJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJkaXJlY3Rpb25cIiBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGlyZWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJwYWNrXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFBhY2sodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdwYWNrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHMgYWZ0ZXIgXCJ3cmFwXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0V3JhcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3dyYXAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBmbGV4IHZhbHVlIHRvIGFuIGl0ZW0gb2YgdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBpdGVtXG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge1xuICAgICAgICBsZXQgc3R5bGUgPSBpdGVtLndyYXBwZXJTdHlsZTtcblxuICAgICAgICBzdHlsZS5mbGV4ID0gc3R5bGUuZmxleCB8fCBpdGVtLmZsZXggfHwgKHRoaXMuYWxpZ24gPT09ICdzdHJldGNoJyA/IDEgOiAnMCAxIGF1dG8nKTtcbiAgICAgICAgaXRlbS53cmFwcGVyU3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBwcmVmaXggICAgPSBtZS5wcmVmaXgsXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRmxleGJveDogYXBwbHlSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzIHx8IFtdLCBwcmVmaXggKyAnY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKG1lLmFsaWduKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAnYWxpZ24tJyArIG1lLmFsaWduKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAnZGlyZWN0aW9uLScgKyBtZS5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5wYWNrKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAncGFjay0nICsgbWUucGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLndyYXApIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICd3cmFwLScgKyBtZS53cmFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIFwiYWxpZ25cIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldEFsaWduKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnblZhbHVlcycsICdhbGlnbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBcImRpcmVjdGlvblwiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0RGlyZWN0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdkaXJlY3Rpb25WYWx1ZXMnLCAnZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIFwicGFja1wiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0UGFjayh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAncGFja1ZhbHVlcycsICdwYWNrJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIFwid3JhcFwiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0V3JhcCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnd3JhcFZhbHVlcycsICd3cmFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gYW4gY29udGFpbmVyIGl0ZW0gdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgbGF5b3V0LlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBpdGVtXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIGxldCBzdHlsZSA9IGl0ZW0ud3JhcHBlclN0eWxlIHx8IHt9O1xuXG4gICAgICAgIHN0eWxlLmZsZXggPSBpdGVtLmZsZXggfHwgbnVsbDtcbiAgICAgICAgaXRlbS53cmFwcGVyU3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHByZWZpeCAgICA9IG1lLnByZWZpeCxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GbGV4Ym94OiByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnY29udGFpbmVyJyk7XG5cbiAgICAgICAgaWYgKG1lLmFsaWduKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnYWxpZ24tJyArIG1lLmFsaWduKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUuZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnZGlyZWN0aW9uLScgKyBtZS5kaXJlY3Rpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5wYWNrKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAncGFjay0nICsgbWUucGFjayk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLndyYXApIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArICd3cmFwLScgKyBtZS53cmFwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIHByb3BlcnR5TmFtZSBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsaWRWYWx1ZXNOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgdGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCB2YWxpZFZhbHVlc05hbWUsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBjb25zdCB2YWxpZFZhbHVlcyA9IHRoaXMuZ2V0U3RhdGljQ29uZmlnKHZhbGlkVmFsdWVzTmFtZSk7XG5cbiAgICAgICAgaWYgKCFOZW9BcnJheS5oYXNJdGVtKHZhbGlkVmFsdWVzLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcih0aGlzLmNvbnRhaW5lcklkLCAnLT4gbGF5b3V0OiBzdXBwb3J0ZWQgdmFsdWVzIGZvciBcIicgKyBwcm9wZXJ0eU5hbWUgKyAnXCIgYXJlJyAsIHZhbGlkVmFsdWVzKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNsc1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHByZWZpeCAgICA9IG1lLnByZWZpeCxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgY29udGFpbmVyLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyBwcm9wZXJ0eU5hbWUgKyAnLScgKyBvbGRWYWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArIHByb3BlcnR5TmFtZSArICctJyArIHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRmxleGJveCk7XG5cbmV4cG9ydCB7RmxleGJveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRmxleGJveCBmcm9tICcuL0ZsZXhib3gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5IQm94XG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkZsZXhib3hcbiAqL1xuY2xhc3MgSEJveCBleHRlbmRzIEZsZXhib3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkhCb3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuSEJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtaGJveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtaGJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbj0ncm93J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb246ICdyb3cnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGZsZXggdmFsdWUgdG8gYW4gaXRlbSBvZiB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIC8vIERvIG5vdCBhcHBseSBmbGV4IGlmIGZpeGVkIHdpZHRoXG4gICAgICAgIGlmICghaXRlbS53aWR0aCkge1xuICAgICAgICAgICAgc3VwZXIuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhCb3gpO1xuXG5leHBvcnQge0hCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IEZsZXhib3ggZnJvbSAnLi9GbGV4Ym94Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuVkJveFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5GbGV4Ym94XG4gKi9cbmNsYXNzIFZCb3ggZXh0ZW5kcyBGbGV4Ym94IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5WQm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LlZCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LXZib3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LXZib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkaXJlY3Rpb249J2NvbHVtbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBmbGV4IHZhbHVlIHRvIGFuIGl0ZW0gb2YgdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge1xuICAgICAgICAvLyBEbyBub3QgYXBwbHkgZmxleCBpZiBmaXhlZCBoZWlnaHRcbiAgICAgICAgaWYgKCFpdGVtLmhlaWdodCkge1xuICAgICAgICAgICAgc3VwZXIuYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZCb3gpO1xuXG5leHBvcnQge1ZCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbGxlY3Rpb25CYXNlIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEFic3RyYWN0IGJhc2UgY2xhc3MgZm9yIHRoZSBvdGhlciBtYW5hZ2VyIGNsYXNzZXNcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29sbGVjdGlvbi5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb2xsZWN0aW9uQmFzZXtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlLW1hbmFnZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZS1tYW5hZ2VyJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgcmVnaXN0ZXIoaXRlbSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5nZXQoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignVHJ5aW5nIHRvIGNyZWF0ZSBhbiBpdGVtIHdpdGggYW4gYWxyZWFkeSBleGlzdGluZyBpZCcsIGl0ZW0sIG1lLmdldChpdGVtLmlkKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoaXRlbSkge1xuICAgICAgICB0aGlzLnJlbW92ZShpdGVtKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBWTm9kZVV0aWwgZnJvbSAnLi4vdXRpbC9WTm9kZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubWFuYWdlci5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5tYW5hZ2VyLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5tYW5hZ2VyLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NvbXBvbmVudC1tYW5hZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbXBvbmVudC1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgTmVvLmdldENvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZC5iaW5kKHRoaXMpOyAvLyBhbGlhc1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IGNvbXBvbmVudCB3aGljaCBtYXRjaGVzIHRoZSBjb25maWctc2VsZWN0b3IgbW92aW5nIGRvd24gdGhlIGNvbXBvbmVudCBpdGVtcyB0cmVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbXBvbmVudElkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9XG4gICAgICovXG4gICAgZG93bihjb21wb25lbnRJZCwgY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnQgICA9IG1lLmdldEJ5SWQoY29tcG9uZW50SWQpLFxuICAgICAgICAgICAgbWF0Y2hBcnJheSAgPSBbXSxcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gbnVsbCxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gY29tcG9uZW50Lml0ZW1zICYmIGNvbXBvbmVudC5pdGVtcy5sZW5ndGggfHwgMCxcbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LCBjb25maWdMZW5ndGg7XG5cbiAgICAgICAgaWYgKE5lby5pc1N0cmluZyhjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6IGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbmZpZ0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKGNvbmZpZyk7XG4gICAgICAgIGNvbmZpZ0xlbmd0aCA9IGNvbmZpZ0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBjb25maWdBcnJheS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gY29uZmlnTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBtZS5kb3duKGNvbXBvbmVudC5pdGVtc1tpXS5pZCwgY29uZmlnKTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdGhlIGNvbXBvbmVudCBpZCBpbiBjYXNlIHRoZXJlIGlzIGEgbWF0Y2hcbiAgICAgKi9cbiAgICBmaW5kUGFyZW50Q29tcG9uZW50KHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBpICAgPSAwLFxuICAgICAgICAgICAgbGVuID0gcGF0aCAmJiBwYXRoLmxlbmd0aCB8fCAwLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWQgPSBwYXRoW2ldO1xuXG4gICAgICAgICAgICBpZiAoaWQgJiYgbWUuaGFzKGlkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IHJlcGxhY2UgYWxsIGNhbGxzIG9mIHRoaXMgbWV0aG9kIHRvIGNhbGxzIHVzaW5nIHRoZSB1dGlsLlZOb2RlIGNsYXNzXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxuICAgICAqIEBwYXJhbSB2bm9kZVxuICAgICAqIEBwYXJhbSBjaGlsZElkc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpIHtcbiAgICAgICAgcmV0dXJuIFZOb2RlVXRpbC5nZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGNoaWxkIGNvbXBvbmVudHMgZm91bmQgaW5zaWRlIHRoZSB2ZG9tIHRyZWVcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZVtdfSBjaGlsZENvbXBvbmVudHNcbiAgICAgKi9cbiAgICBnZXRDaGlsZHJlbihjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50cyA9IFtdLFxuICAgICAgICAgICAgY2hpbGROb2RlcyAgICAgID0gVk5vZGVVdGlsLmdldENoaWxkSWRzKGNvbXBvbmVudC52bm9kZSksXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudDtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudCA9IHRoaXMuZ2V0KG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoY2hpbGRDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbXBvbmVudHMucHVzaChjaGlsZENvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZENvbXBvbmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBBcnJheSBjb250YWluaW5nIHRoZSBpZHMgb2YgYWxsIHBhcmVudCBjb21wb25lbnRzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nW119IHBhcmVudElkc1xuICAgICAqL1xuICAgIGdldFBhcmVudElkcyhjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IHBhcmVudElkcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudElkcy5wdXNoKGNvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcGFyZW50SWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBnZXRQYXJlbnRQYXRoKHBhdGgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50UGF0aCA9IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gcGF0aCAmJiBwYXRoLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS5oYXMocGF0aFtpXSkpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRQYXRoLnB1c2gocGF0aFtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50UGF0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIEFycmF5IGNvbnRhaW5pbmcgYWxsIHBhcmVudCBjb21wb25lbnRzIGZvciBhIGdpdmVuIGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlW119IHBhcmVudHNcbiAgICAgKi9cbiAgICBnZXRQYXJlbnRzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgcGFyZW50cyA9IFtdO1xuXG4gICAgICAgIHdoaWxlIChjb21wb25lbnQgJiYgY29tcG9uZW50LnBhcmVudElkKSB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLmdldEJ5SWQoY29tcG9uZW50LnBhcmVudElkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgY29tcG9uZW50IHdoaWNoIG1hdGNoZXMgdGhlIGNvbmZpZy1zZWxlY3RvclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb21wb25lbnRJZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIHVwKGNvbXBvbmVudElkLCBjb25maWcpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnRJZCksXG4gICAgICAgICAgICBjb25maWdBcnJheSwgY29uZmlnTGVuZ3RoLCBtYXRjaEFycmF5O1xuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiBjb25maWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25maWdBcnJheSAgPSBPYmplY3QuZW50cmllcyhjb25maWcpO1xuICAgICAgICBjb25maWdMZW5ndGggPSBjb25maWdBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgd2hpbGUgKGNvbXBvbmVudCAmJiBjb21wb25lbnQucGFyZW50SWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuZ2V0QnlJZChjb21wb25lbnQucGFyZW50SWQpO1xuXG4gICAgICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW107XG5cbiAgICAgICAgICAgIGNvbmZpZ0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnRba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hBcnJheS5sZW5ndGggPT09IGNvbmZpZ0xlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XG5cbmxldCBpbnN0YW5jZSA9IE5lby5jcmVhdGUoQ29tcG9uZW50KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICAgICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudE1hbmFnZXIgZnJvbSAnLi9Db21wb25lbnQubWpzJztcbmltcG9ydCBGb2N1c01hbmFnZXIgICAgIGZyb20gJy4vRm9jdXMubWpzJztcbmltcG9ydCBMb2dnZXIgICAgICAgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICAgICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcblxuY29uc3QgZXZlbnRDb25maWdLZXlzID0gW1xuICAgICdidWJibGUnLFxuICAgICdkZWxlZ2F0ZScsXG4gICAgJ2xvY2FsJyxcbiAgICAnc2NvcGUnLFxuICAgICd2bm9kZUlkJ1xuXTtcblxuY29uc3QgZ2xvYmFsRG9tRXZlbnRzID0gW1xuICAgICdjaGFuZ2UnLFxuICAgICdjbGljaycsXG4gICAgJ2NvbnRleHRtZW51JyxcbiAgICAnZHJhZzplbmQnLFxuICAgICdkcmFnOm1vdmUnLFxuICAgICdkcmFnOnN0YXJ0JyxcbiAgICAnZm9jdXNpbicsXG4gICAgJ2ZvY3Vzb3V0JyxcbiAgICAnaW5wdXQnLFxuICAgICdrZXlkb3duJyxcbiAgICAna2V5dXAnLFxuICAgICdtb3VzZWVudGVyJyxcbiAgICAnbW91c2VsZWF2ZScsXG4gICAgJ3doZWVsJ1xuXTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLm1hbmFnZXIuRG9tRXZlbnRcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgRG9tRXZlbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLm1hbmFnZXIuRG9tRXZlbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5tYW5hZ2VyLkRvbUV2ZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RvbS1ldmVudC1tYW5hZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2RvbS1ldmVudC1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbXM9e31cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBtYXA9e31cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbWFwOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmaXJlKGV2ZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgPSB0cnVlLFxuICAgICAgICAgICAgZGF0YSAgICAgICA9IGV2ZW50LmRhdGEgfHwge30sXG4gICAgICAgICAgICBldmVudE5hbWUgID0gZXZlbnQuZXZlbnROYW1lLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgID0gbnVsbCxcbiAgICAgICAgICAgIHBhdGhJZHMgICAgPSBkYXRhLnBhdGgubWFwKGUgPT4gZS5pZCksXG4gICAgICAgICAgICBwYXRoICAgICAgID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRQYXRoKHBhdGhJZHMpLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgY29tcG9uZW50LCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGlkLCBwcmV2ZW50RmlyZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZCAgICAgICAgPSBwYXRoW2ldO1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChpZCk7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50IHx8IGNvbXBvbmVudC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXN0ZW5lcnMgPSBtZS5pdGVtc1tpZF0gJiYgbWUuaXRlbXNbaWRdW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlyZScsIGV2ZW50TmFtZSwgZGF0YSwgbGlzdGVuZXJzLCBwYXRoKTtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGxpc3RlbmVycykpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyICYmIGxpc3RlbmVyLmZuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGlvblRhcmdldElkID0gbWUudmVyaWZ5RGVsZWdhdGlvblBhdGgobGlzdGVuZXIsIGRhdGEucGF0aCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZWdhdGlvblRhcmdldElkICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG9ubHkgd2FudCBtb3VzZWVudGVyICYgbGVhdmUgdG8gZmlyZSBvbiB0aGVpciB0b3AgbGV2ZWwgbm9kZXMsIG5vdCBmb3IgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ21vdXNlZW50ZXInIHx8IGV2ZW50TmFtZSA9PT0gJ21vdXNlbGVhdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2ZW50RmlyZSA9ICFEb21FdmVudC52ZXJpZnlNb3VzZUVudGVyTGVhdmUoY29tcG9uZW50LCBkYXRhLCBkZWxlZ2F0aW9uVGFyZ2V0SWQsIGV2ZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByZXZlbnRGaXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhOZW8uZ2V0KGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbXBvbmVudCA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmZuLmFwcGx5KGxpc3RlbmVyLnNjb3BlIHx8IHNlbGYsIFtkYXRhXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlzdGVuZXIuYnViYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnViYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gd2UgZG8gd2FudCB0byB0cmlnZ2VyIHRoZSBGb2N1c01hbmFnZXIgYWZ0ZXIgbm9ybWFsIGRvbUxpc3RlbmVycyBvbiB0aGVzZSBldmVudHMgZ290IGV4ZWN1dGVkXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnZm9jdXNpbicgfHwgZXZlbnROYW1lID09PSAnZm9jdXNvdXQnKSB7XG4gICAgICAgICAgICAgICAgRm9jdXNNYW5hZ2VyWydvbicgKyBOZW8uY2FwaXRhbGl6ZShldmVudE5hbWUpXSh7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgICAgICAgICA6IGRhdGFcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWJ1YmJsZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICogQHBhcmFtIHNjb3BlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGVnYXRlIDogY29uZmlnLmRlbGVnYXRlLFxuICAgICAgICAgICAgZXZlbnROYW1lOiBjb25maWcuZXZlbnROYW1lLFxuICAgICAgICAgICAgaWQgICAgICAgOiBzY29wZS5pZCxcbiAgICAgICAgICAgIG9wdHMgICAgIDogY29uZmlnLFxuICAgICAgICAgICAgc2NvcGUgICAgOiBjb25maWcuc2NvcGUgICB8fCBzY29wZSxcbiAgICAgICAgICAgIHZub2RlSWQgIDogY29uZmlnLnZub2RlSWQgfHwgc2NvcGUuaWRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXRFdmVudE5hbWUoY29uZmlnKSB7XG4gICAgICAgIGxldCBldmVudE5hbWUgPSBudWxsO1xuXG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFldmVudENvbmZpZ0tleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBrZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnROYW1lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmRlbGVnYXRlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5vcHRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0TGlzdGVuZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBsaXN0ZW5lcnMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgZXZlbnQ7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVycyAmJiBsaXN0ZW5lcnNbY29uZmlnLmlkXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBsaXN0ZW5lcnNbY29uZmlnLmlkXVtjb25maWcuZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW91bnRzIGxvY2FsIGRvbUV2ZW50IGxpc3RlbmVycyBmb3IgYSBnaXZlbiBjb21wb25lbnRcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbGlzdGVuZXJzICAgPSB0aGlzLml0ZW1zW2NvbXBvbmVudC5pZF0sXG4gICAgICAgICAgICBsb2NhbEV2ZW50cyA9IFtdO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGxpc3RlbmVycykuZm9yRWFjaCgoW2V2ZW50TmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSA9IGV2ZW50LmV2ZW50TmFtZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnROYW1lICYmIChldmVudC5sb2NhbCB8fCAhZ2xvYmFsRG9tRXZlbnRzLmluY2x1ZGVzKGV2ZW50TmFtZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbG9jYWxFdmVudHMnLCBldmVudE5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbEV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lICAgOiBldmVudE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogJ2RvbUV2ZW50TGlzdGVuZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZub2RlSWQ6IGV2ZW50LnZub2RlSWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsRXZlbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBOZW8ud29ya2VyLkFwcC5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ2FkZERvbUxpc3RlbmVyJyxcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogY29tcG9uZW50LmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cyA6IGxvY2FsRXZlbnRzXG4gICAgICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FkZGVkIGRvbUxpc3RlbmVyJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcDogR290IGVycm9yIGF0dGVtcHRpbmcgdG8gYWRkIGEgZG9tTGlzdGVuZXInLCBlcnIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuZGVsZWdhdGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGNvbmZpZy5sb2NhbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcub3B0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb25maWcub3JpZ2luYWxDb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLm93bmVySWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gY29uZmlnLnByaW9yaXR5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZy5zY29wZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcudm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGlmIHRoZSBsaXN0ZW5lciBnb3QgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkgKGZhbHNlIGluIGNhc2UgaXQgd2FzIGFscmVhZHkgdGhlcmUpXG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBhbHJlYWR5UmVnaXN0ZXJlZCA9IGZhbHNlLFxuICAgICAgICAgICAgZXZlbnROYW1lICAgICAgICAgPSBjb25maWcuZXZlbnROYW1lLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgPSBjb25maWcuaWQsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgICAgICA9IHRoaXMuaXRlbXMsXG4gICAgICAgICAgICBvcHRzICAgICAgICAgICAgICA9IGNvbmZpZy5vcHRzLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgPSBjb25maWcuc2NvcGUsXG4gICAgICAgICAgICBmblR5cGUgICAgICAgICAgICA9IHR5cGVvZiBvcHRzLFxuICAgICAgICAgICAgZm4sIGxpc3RlbmVyLCBsaXN0ZW5lckNvbmZpZywgbGlzdGVuZXJJZDtcblxuICAgICAgICBpZiAoZm5UeXBlID09PSAnZnVuY3Rpb24nIHx8IGZuVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGZuID0gb3B0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZuICAgID0gb3B0cy5mbjtcbiAgICAgICAgICAgIHNjb3BlID0gb3B0cy5zY29wZSB8fCBzY29wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbGlzdGVuZXJzW2lkXSkge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2lkXSA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaWRdW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3RlbmVyKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltrZXldLmZuLnRvU3RyaW5nKCkgPT09IGZuLnRvU3RyaW5nKCkgJiYgLy8gdG9kbzogYWRkIGEgYmV0dGVyIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2tleV0uc2NvcGUgICAgICAgICA9PT0gc2NvcGUgJiZcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJba2V5XS5kZWxlZ2F0ZSAgICAgID09PSBjb25maWcuZGVsZWdhdGVcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxyZWFkeVJlZ2lzdGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWxyZWFkeVJlZ2lzdGVyZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdtYW5hZ2VyLkRvbUV2ZW50IHJlZ2lzdGVyJywgZXZlbnROYW1lLCBjb25maWcpO1xuXG4gICAgICAgIGxpc3RlbmVySWQgPSBOZW8uZ2V0SWQoJ2RvbS1ldmVudCcpO1xuXG4gICAgICAgIGNvbmZpZy5saXN0ZW5lcklkID0gbGlzdGVuZXJJZDtcblxuICAgICAgICBsaXN0ZW5lckNvbmZpZyA9IHtcbiAgICAgICAgICAgIGJ1YmJsZSAgICAgICAgOiBjb25maWcuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gY29uZmlnLmJ1YmJsZSA6IG9wdHMuaGFzT3duUHJvcGVydHkoJ2J1YmJsZScpID8gb3B0cy5idWJibGUgOiB0cnVlLFxuICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IGNvbmZpZy5kZWxlZ2F0ZSxcbiAgICAgICAgICAgIGV2ZW50TmFtZSAgICAgOiBldmVudE5hbWUsXG4gICAgICAgICAgICBmbiAgICAgICAgICAgIDogZm4sXG4gICAgICAgICAgICBpZCAgICAgICAgICAgIDogbGlzdGVuZXJJZCxcbiAgICAgICAgICAgIG1vdW50ZWQgICAgICAgOiAhY29uZmlnLmxvY2FsICYmIGdsb2JhbERvbUV2ZW50cy5pbmNsdWRlcyhldmVudE5hbWUpLFxuICAgICAgICAgICAgb3JpZ2luYWxDb25maWc6IGNvbmZpZy5vcmlnaW5hbENvbmZpZyxcbiAgICAgICAgICAgIG93bmVySWQgICAgICAgOiBjb25maWcub3duZXJJZCxcbiAgICAgICAgICAgIHByaW9yaXR5ICAgICAgOiBjb25maWcucHJpb3JpdHkgfHwgMSxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiBzY29wZSxcbiAgICAgICAgICAgIHZub2RlSWQgICAgICAgOiBjb25maWcudm5vZGVJZFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubWFwW2xpc3RlbmVySWRdID0gbGlzdGVuZXJDb25maWc7XG5cbiAgICAgICAgbGlzdGVuZXJzW2lkXVtldmVudE5hbWVdLnB1c2gobGlzdGVuZXJDb25maWcpO1xuXG4gICAgICAgIGxpc3RlbmVyc1tpZF1bZXZlbnROYW1lXS5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5ID4gYi5wcmlvcml0eSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXApO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY29uZmlnLmV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLm9wdHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnLnNjb3BlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy52bm9kZUlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbGlzdGVuZXIgZGlkIGV4aXN0IGFuZCBnb3QgcmVtb3ZlZFxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoY29uZmlnLCBzY29wZSkge1xuICAgICAgICAvLyB0b2RvXG4gICAgICAgIGNvbnNvbGUubG9nKCd1bnJlZ2lzdGVyJywgY29uZmlnKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5nZW5lcmF0ZUxpc3RlbmVyQ29uZmlnKGNvbmZpZywgc2NvcGUpKTtcbiAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGxldCBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIoY29uZmlnKTtcblxuICAgICAgICBpZiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsaXN0ZW5lciBmb3VuZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRvbUxpc3RlbmVyc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZERvbUxpc3RlbmVyc1xuICAgICAqL1xuICAgIHVwZGF0ZURvbUxpc3RlbmVycyhjb21wb25lbnQsIGRvbUxpc3RlbmVycywgb2xkRG9tTGlzdGVuZXJzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHJlZ2lzdGVyZWRMaXN0ZW5lcnMgPSBtZS5pdGVtc1tjb21wb25lbnQuaWRdIHx8IHt9LFxuICAgICAgICAgICAgaSwgbGVuLCBsaXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2xkRG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIG9sZERvbUxpc3RlbmVycy5mb3JFYWNoKG9sZERvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCAmIHJlbW92ZSBubyBsb25nZXIgZXhpc3RpbmcgbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9tTGlzdGVuZXJzLmluY2x1ZGVzKG9sZERvbUxpc3RlbmVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gcmVnaXN0ZXJlZExpc3RlbmVyc1ttZS5nZXRFdmVudE5hbWUob2xkRG9tTGlzdGVuZXIpXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgICAgICAgICA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBsaXN0ZW5lcnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXS5vcmlnaW5hbENvbmZpZyA9PT0gb2xkRG9tTGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGxpc3RlbmVycywgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFkZCBuZXcgbGlzdGVuZXJzXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMuZm9yRWFjaChkb21MaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZG9tTGlzdGVuZXIpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWV2ZW50Q29uZmlnS2V5cy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5yZWdpc3Rlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGUgICAgICA6IHZhbHVlLmRlbGVnYXRlIHx8IGRvbUxpc3RlbmVyLmRlbGVnYXRlIHx8ICcjJyArIGNvbXBvbmVudC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgOiBjb21wb25lbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cyAgICAgICAgICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29uZmlnOiBkb21MaXN0ZW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvd25lcklkICAgICAgIDogY29tcG9uZW50LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiBkb21MaXN0ZW5lci5zY29wZSB8fCBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGVJZCAgICAgICA6IHZhbHVlLnZub2RlSWQgfHwgY29tcG9uZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnQubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIG1lLm1vdW50RG9tTGlzdGVuZXJzKGNvbXBvbmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ0NvbXBvbmVudC5kb21MaXN0ZW5lcnMgaGF2ZSB0byBiZSBhbiBhcnJheScsIGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnRlbmRlZCBmb3IgTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50IHRvIHJlcGxhY2UgbGlzdGVuZXIgcGxhY2Vob2xkZXJzIHByb3ZpZGVkIGFzIGEgc3RyaW5nXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjb25maWcuY29tcG9uZW50SWRcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGNvbmZpZy5ldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge05lby5jb3JlLkJhc2V9IGNvbmZpZy5zY29wZVxuICAgICAqL1xuICAgIHVwZGF0ZUxpc3RlbmVyUGxhY2Vob2xkZXIoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICA9IG1lLml0ZW1zW2NvbmZpZy5jb21wb25lbnRJZF0gfHwge30sXG4gICAgICAgICAgICBldmVudExpc3RlbmVycyA9IGl0ZW1zW2NvbmZpZy5ldmVudE5hbWVdIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBldmVudExpc3RlbmVycy5sZW5ndGgsXG4gICAgICAgICAgICBsaXN0ZW5lcjtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGV2ZW50TGlzdGVuZXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuZm4gPT09IGNvbmZpZy5ldmVudEhhbmRsZXJOYW1lKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIuZm4gICAgPSBjb25maWcuZXZlbnRIYW5kbGVyTWV0aG9kO1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLnNjb3BlID0gY29uZmlnLnNjb3BlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHJldHVybnMge0Jvb2xlYW58U3RyaW5nfSB0cnVlIGluIGNhc2UgdGhlIGRlbGVnYXRpb24gc3RyaW5nIG1hdGNoZXMgdGhlIGV2ZW50IHBhdGhcbiAgICAgKi9cbiAgICB2ZXJpZnlEZWxlZ2F0aW9uUGF0aChsaXN0ZW5lciwgcGF0aCkge1xuICAgICAgICBsZXQgZGVsZWdhdGlvbkFycmF5ID0gbGlzdGVuZXIuZGVsZWdhdGUuc3BsaXQoJyAnKSxcbiAgICAgICAgICAgIGogICAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICAgPSBkZWxlZ2F0aW9uQXJyYXkubGVuZ3RoLFxuICAgICAgICAgICAgcGF0aExlbiAgICAgICAgID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBoYXNNYXRjaCwgaSwgaXRlbSwgaXNJZCwgdGFyZ2V0SWQ7XG5cbiAgICAgICAgZm9yIChpPWxlbi0xOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGl0ZW0gICAgID0gZGVsZWdhdGlvbkFycmF5W2ldO1xuICAgICAgICAgICAgaXNJZCAgICAgPSBpdGVtLnN0YXJ0c1dpdGgoJyMnKTtcblxuICAgICAgICAgICAgaWYgKGlzSWQgfHwgaXRlbS5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgcGF0aExlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoaXNJZCAmJiBwYXRoW2pdLmlkID09PSBpdGVtKSB8fFxuICAgICAgICAgICAgICAgICAgICBwYXRoW2pdLmNscy5pbmNsdWRlcyhpdGVtKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gcGF0aFtqXS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZW5zdXJlIHRoZSBkZWxlZ2F0aW9uIHBhdGggaXMgYSBjaGlsZCBvZiB0aGUgb3duZXIgY29tcG9uZW50cyByb290IG5vZGVcbiAgICAgICAgZm9yICg7IGogPCBwYXRoTGVuOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXRoW2pdLmlkID09PSBsaXN0ZW5lci52bm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldElkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRlbGVnYXRpb25UYXJnZXRJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgdmVyaWZ5TW91c2VFbnRlckxlYXZlKGNvbXBvbmVudCwgZGF0YSwgZGVsZWdhdGlvblRhcmdldElkLCBldmVudE5hbWUpIHtcbiAgICAgICAgbGV0IHRhcmdldElkID0gZXZlbnROYW1lID09PSAnbW91c2VlbnRlcicgPyBkYXRhLmZyb21FbGVtZW50SWQgOiBkYXRhLnRvRWxlbWVudElkLFxuICAgICAgICAgICAgZGVsZWdhdGlvblZkb207XG5cbiAgICAgICAgaWYgKHRhcmdldElkICYmIHRhcmdldElkICE9PSBkZWxlZ2F0aW9uVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIGRlbGVnYXRpb25WZG9tID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChjb21wb25lbnQudmRvbSwgZGVsZWdhdGlvblRhcmdldElkKTtcblxuICAgICAgICAgICAgLy8gZGVsZWdhdGlvblZkb20gY2FuIGJlIHVuZGVmaW5lZCB3aGVuIGRyYWdnaW5nIGEgcHJveHkgb3ZlciB0aGUgbm9kZS5cbiAgICAgICAgICAgIC8vIHNlZSBpc3N1ZXMvMTEzNyBmb3IgZGV0YWlscy5cbiAgICAgICAgICAgIGlmICghZGVsZWdhdGlvblZkb20gfHwgZGVsZWdhdGlvblZkb20udmRvbSAmJiBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKGRlbGVnYXRpb25WZG9tLnZkb20sIHRhcmdldElkKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRG9tRXZlbnQpO1xuXG5sZXQgaW5zdGFuY2UgPSBOZW8uY3JlYXRlKERvbUV2ZW50KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5tYW5hZ2VyLkZvY3VzXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKiBAc2luZ2xldG9uXG4gKi9cbmNsYXNzIEZvY3VzIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubWFuYWdlci5Gb2N1cydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLm1hbmFnZXIuRm9jdXMnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZm9jdXMtbWFuYWdlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdmb2N1cy1tYW5hZ2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgb3B0cyBvYmplY3RzLlxuICAgICAgICAgKiBvcHRzLmNvbXBvbmVudFBhdGhcbiAgICAgICAgICogb3B0cy5kYXRhXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfSBoaXN0b3J5PVtdXG4gICAgICAgICAqL1xuICAgICAgICBoaXN0b3J5OiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBEYXRlIG9iamVjdCB3aGVuIHRoZSBsYXN0IGZvY3VzaW4gZXZlbnQgaGFzIG9jY3VyZWRcbiAgICAgICAgICogQG1lbWJlciB7RGF0ZXxudWxsfSBsYXN0Rm9jdXNJbkRhdGU9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0Rm9jdXNJbkRhdGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRGF0ZSBvYmplY3Qgd2hlbiB0aGUgbGFzdCBmb2N1c291dCBldmVudCBoYXMgb2NjdXJlZFxuICAgICAgICAgKiBAbWVtYmVyIHtEYXRlfG51bGx9IGxhc3RGb2N1c0luRGF0ZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RGb2N1c091dERhdGU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYW1vdW50IG9mIHRpbWUgZm9yIGEgZm9jdXNJbiB0byBvY2N1ciBhZnRlciB0aGUgbGFzdCBmb2N1c091dFxuICAgICAgICAgKiB0byBiZSB0aHJlYXRlZCBhcyBhIGZvY3VzbW92ZVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEZvY3VzSW5PdXRHYXA9MTBcbiAgICAgICAgICovXG4gICAgICAgIG1heEZvY3VzSW5PdXRHYXA6IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gYW1vdW50IG9mIGl0ZW1zIHN0b3JlZCBpbnNpZGUgdGhlIGhpc3RvcnkgYXJyYXlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhIaXN0b3J5TGVuZ3RoPTIwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhIaXN0b3J5TGVuZ3RoOiAyMFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZGRUb0hpc3Rvcnkob3B0cykge1xuICAgICAgICBsZXQgaGlzdG9yeSA9IHRoaXMuaGlzdG9yeTtcblxuICAgICAgICBoaXN0b3J5LnVuc2hpZnQob3B0cyk7XG5cbiAgICAgICAgaWYgKGhpc3RvcnkubGVuZ3RoID49IHRoaXMubWF4SGlzdG9yeUxlbmd0aCkge1xuICAgICAgICAgICAgaGlzdG9yeS5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGZvY3VzRW50ZXIob3B0cykge1xuICAgICAgICB0aGlzLnNldENvbXBvbmVudEZvY3VzKG9wdHMsIHRydWUpO1xuICAgICAgICB0aGlzLmFkZFRvSGlzdG9yeShvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMuY29tcG9uZW50UGF0aCBDb21wb25lbnQgaWRzIHVwd2FyZHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5kYXRhIGRvbSBldmVudCBpbmZvc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBmb2N1c0xlYXZlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5zZXRDb21wb25lbnRGb2N1cyhvcHRzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZm9jdXNNb3ZlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGlzdG9yeSAgICAgICAgICA9IG1lLmhpc3RvcnksXG4gICAgICAgICAgICBuZXdDb21wb25lbnRQYXRoID0gb3B0cy5jb21wb25lbnRQYXRoLFxuICAgICAgICAgICAgb2xkQ29tcG9uZW50UGF0aCA9IGhpc3RvcnlbMF0uY29tcG9uZW50UGF0aCxcbiAgICAgICAgICAgIGZvY3VzRW50ZXIgICAgICAgPSBOZW9BcnJheS5kaWZmZXJlbmNlKG5ld0NvbXBvbmVudFBhdGgsIG9sZENvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgZm9jdXNMZWF2ZSAgICAgICA9IE5lb0FycmF5LmRpZmZlcmVuY2Uob2xkQ29tcG9uZW50UGF0aCwgbmV3Q29tcG9uZW50UGF0aCksXG4gICAgICAgICAgICBmb2N1c01vdmUgICAgICAgID0gTmVvQXJyYXkuaW50ZXJzZWN0aW9uKG5ld0NvbXBvbmVudFBhdGgsIG9sZENvbXBvbmVudFBhdGgpLFxuICAgICAgICAgICAgY29tcG9uZW50LCBkYXRhO1xuXG4gICAgICAgIG1lLnNldENvbXBvbmVudEZvY3VzKHtjb21wb25lbnRQYXRoOiBmb2N1c0VudGVyLCBkYXRhOiBvcHRzLmRhdGF9LCB0cnVlKTtcbiAgICAgICAgbWUuc2V0Q29tcG9uZW50Rm9jdXMoe2NvbXBvbmVudFBhdGg6IGZvY3VzTGVhdmUsIGRhdGE6IG9wdHMuZGF0YX0sIGZhbHNlKTtcblxuICAgICAgICBmb2N1c01vdmUuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1BhdGg6IG9wdHMuZGF0YS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBvbGRQYXRoOiBoaXN0b3J5WzBdLmRhdGEucGF0aFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbXBvbmVudC5vbkZvY3VzTW92ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQub25Gb2N1c01vdmUoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoJ2ZvY3VzTW92ZScsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5hZGRUb0hpc3Rvcnkob3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c2luKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5sYXN0Rm9jdXNJbkRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgIGlmIChtZS5sYXN0Rm9jdXNPdXREYXRlICYmIG1lLmxhc3RGb2N1c0luRGF0ZSAtIG1lLmxhc3RGb2N1c091dERhdGUgPCBtZS5tYXhGb2N1c0luT3V0R2FwKSB7XG4gICAgICAgICAgICBtZS5mb2N1c01vdmUob3B0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5mb2N1c0VudGVyKG9wdHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7QXJyYXl9ICBvcHRzLmNvbXBvbmVudFBhdGggQ29tcG9uZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMuZGF0YSBkb20gZXZlbnQgaW5mb3NcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c291dChvcHRzKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUubGFzdEZvY3VzT3V0RGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAobWUubGFzdEZvY3VzT3V0RGF0ZSA+IG1lLmxhc3RGb2N1c0luRGF0ZSkge1xuICAgICAgICAgICAgICAgIG1lLmZvY3VzTGVhdmUob3B0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG1lLm1heEZvY3VzSW5PdXRHYXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5jb21wb25lbnRQYXRoIENvbXBvbmVudCBpZHMgdXB3YXJkc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLmRhdGEgZG9tIGV2ZW50IGluZm9zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBjb250YWluc0ZvY3VzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHNldENvbXBvbmVudEZvY3VzKG9wdHMsIGNvbnRhaW5zRm9jdXMpIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCwgaGFuZGxlcjtcblxuICAgICAgICBvcHRzLmNvbXBvbmVudFBhdGguZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5jb250YWluc0ZvY3VzID0gY29udGFpbnNGb2N1cztcblxuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSBjb250YWluc0ZvY3VzID8gJ29uRm9jdXNFbnRlcicgOiAnb25Gb2N1c0xlYXZlJztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50W2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudFtoYW5kbGVyXShvcHRzLmRhdGEucGF0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50LmZpcmUoY29udGFpbnNGb2N1cyA/ICdmb2N1c0VudGVyJyA6ICdmb2N1c0xlYXZlJywgb3B0cy5kYXRhLnBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZvY3VzKTtcblxubGV0IGluc3RhbmNlID0gTmVvLmNyZWF0ZShGb2N1cyk7XG5cbk5lby5hcHBseVRvR2xvYmFsTnMoaW5zdGFuY2UpO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTsiLCJpbXBvcnQgTW9kZWwgICAgZnJvbSAnLi9Nb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBBIHNlbGVjdGlvbiBtb2RlbCBpbnRlbmRlZCB0byB1c2UgZm9yIE5lby5jb21wb25lbnQuR2FsbGVyeVxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uc2VsZWN0aW9uLk1vZGVsXG4gKi9cbmNsYXNzIEdhbGxlcnlNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5HYWxsZXJ5TW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi1nYWxsZXJ5bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLWdhbGxlcnltb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHN0YXkgaW4gdGhlIHNhbWUgY29sdW1uIHdoZW4gbmF2aWdhdGluZyB3aXRoIHRoZSB1cCBhbmQgZG93biBrZXlzLFxuICAgICAgICAgKiBvdGhlcndpc2UgeW91IHdpbGwgbmF2aWdhdGUgdG8gdGhlIG5leHQgLyBwcmV2IGNvbHVtbiB3aGVuIG1vdmluZyBvdXRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RheUluUm93PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF5SW5Sb3c6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRvIG5vdCBhcHBseSBhIGRvbUxpc3RlbmVyXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgb2xkSXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXTtcblxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5pdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gZGF0YS5wYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGEucGF0aFtpXS5jbHMuaW5jbHVkZXMoJ25lby1nYWxsZXJ5LWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgIGtleSA9IHZpZXcuZ2V0SXRlbUlkKGRhdGEucGF0aFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Qoa2V5KTtcblxuICAgICAgICAgICAgICAgIHZpZXcuZmlyZSgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQ6IHZpZXcuc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkRvd24oZGF0YSkge1xuICAgICAgICB0aGlzW3RoaXMudmlldy5vcmRlckJ5Um93ID8gJ29uTmF2S2V5Um93JyA6ICdvbk5hdktleUNvbHVtbiddKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25MZWZ0KGRhdGEpIHtcbiAgICAgICAgdGhpc1t0aGlzLnZpZXcub3JkZXJCeVJvdyA/ICdvbk5hdktleUNvbHVtbicgOiAnb25OYXZLZXlSb3cnXSgtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blJpZ2h0KGRhdGEpIHtcbiAgICAgICAgdGhpc1t0aGlzLnZpZXcub3JkZXJCeVJvdyA/ICdvbk5hdktleUNvbHVtbicgOiAnb25OYXZLZXlSb3cnXSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duVXAoZGF0YSkge1xuICAgICAgICB0aGlzW3RoaXMudmlldy5vcmRlckJ5Um93ID8gJ29uTmF2S2V5Um93JyA6ICdvbk5hdktleUNvbHVtbiddKC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwPTFcbiAgICAgKi9cbiAgICBvbk5hdktleUNvbHVtbihzdGVwPTEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHNlbGVjdGVkICAgICA9IG1lLml0ZW1zWzBdLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIGluZGV4LCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gY291bnRSZWNvcmRzIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwPTFcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhzdGVwPTEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHNlbGVjdGVkICAgICA9IG1lLml0ZW1zWzBdLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgICA9IHZpZXcuYW1vdW50Um93cyxcbiAgICAgICAgICAgIHN0YXlJblJvdyAgICA9IG1lLnN0YXlJblJvdyxcbiAgICAgICAgICAgIGluZGV4LCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKHZpZXcub3JkZXJCeVJvdykge1xuICAgICAgICAgICAgYW1vdW50Um93cyA9IE1hdGguY2VpbCh2aWV3LnN0b3JlLmdldENvdW50KCkgLyBhbW91bnRSb3dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ZXAgKj0gYW1vdW50Um93cztcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gc3RvcmUuaW5kZXhPZihzZWxlY3RlZCkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKCFzdGF5SW5Sb3cpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgKGNvdW50UmVjb3JkcyAtIGFtb3VudFJvd3MpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gYW1vdW50Um93cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmICghc3RheUluUm93KSB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+PSBhbW91bnRSb3dzKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggLT0gYW1vdW50Um93cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICB2aWV3Lm9uKHtcbiAgICAgICAgICAgIGNvbnRhaW5lckNsaWNrOiBtZS5vbkNvbnRhaW5lckNsaWNrLFxuICAgICAgICAgICAgaXRlbUNsaWNrICAgICA6IG1lLm9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgb2xkSXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXSxcbiAgICAgICAgICAgIHZub2RlSWQgID0gdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtSWQpO1xuXG4gICAgICAgIGlmIChtZS5zaW5nbGVTZWxlY3QpIHtcbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IGl0ZW1JZCkge2NvbnNvbGUubG9nKGl0ZW0sIGl0ZW1JZClcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiB2aWV3LmdldEl0ZW1Wbm9kZUlkKGl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFsnbmVvLXNlbGVjdGVkJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5pdGVtcy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgaWQgOiB2bm9kZUlkLFxuICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgYWRkOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5WydhZGQnXShtZS5pdGVtcywgaXRlbUlkKTtcblxuICAgICAgICBpZiAoZGVsdGFzLmxlbmd0aCA+IDAgJiYgdmlldy5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlldy5tb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeU1vZGVsKTtcblxuZXhwb3J0IHtHYWxsZXJ5TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBNb2RlbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLk1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLk1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi1tb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tbW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUGxhY2Vob2xkZXIgZm9yIGV4dGVuZGVkIGNsYXNzZXMgdG8gYWRkIGEgY3VzdG9tIGNzcyBydWxlIHRvIHRoaXMgb3duZXIgY29tcG9uZW50XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjbHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzZWxlY3RlZENscz0nc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZENsczogJ25lby1zZWxlY3RlZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGVTZWxlY3Q9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xlU2VsZWN0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWxseSBzYXZlcyB0aGUgdmlldyBpZCwgYnV0IHRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gdGhlIG1hdGNoaW5nIGluc3RhbmNlXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmlld189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3XzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBiZWZvcmUgZ2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBiZWZvcmVHZXRWaWV3KCkge1xuICAgICAgICByZXR1cm4gTmVvLmdldENvbXBvbmVudCh0aGlzLl92aWV3KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBiZWZvcmUgc2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIHZpZXcgaWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRWaWV3KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnRdIHRydWUgdG8gcHJldmVudCBhIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2l0ZW1Db2xsZWN0aW9uXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0ZWRDbHNdXG4gICAgICovXG4gICAgZGVzZWxlY3QoaXRlbSwgc2lsZW50LCBpdGVtQ29sbGVjdGlvbiwgc2VsZWN0ZWRDbHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXcsXG4gICAgICAgICAgICB2ZG9tID0gdmlldy52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHZpZXcuZ2V0VmRvbUNoaWxkKGl0ZW0pLCAvLyB0b2RvOiBzdXBwb3J0IGZvciBub2RlcyAocmlnaHQgbm93IGxpbWl0ZWQgdG8gaWRzKVxuICAgICAgICAgICAgY2xzO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBjbHMgPSBub2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHNlbGVjdGVkQ2xzIHx8IG1lLnNlbGVjdGVkQ2xzKTtcbiAgICAgICAgICAgIG5vZGUuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGl0ZW1Db2xsZWN0aW9uIHx8IG1lLml0ZW1zLCBpdGVtKTtcblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50XSB0cnVlIHRvIHByZXZlbnQgYSB2ZG9tIHVwZGF0ZVxuICAgICAqL1xuICAgIGRlc2VsZWN0QWxsKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgdmlldyAgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSAgPSB2aWV3LnZkb207XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGl0ZW0sIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNpbGVudCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3LnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXIoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fSB0aGlzLml0ZW1zXG4gICAgICovXG4gICAgZ2V0U2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlcmUgaXMgYSBzZWxlY3Rpb25cbiAgICAgKi9cbiAgICBoYXNTZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaXNTZWxlY3RlZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKGlkKSA+IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IGNvbXBvbmVudC5jbHMgfHwgW107XG5cbiAgICAgICAgaWYgKG1lLmNscyAmJiAhY2xzLmluY2x1ZGVzKG1lLmNscykpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKG1lLmNscyk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmlldyA9IGNvbXBvbmVudDtcbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbW92ZURvbUxpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnQgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gWy4uLmNvbXBvbmVudC5kb21MaXN0ZW5lcnNdO1xuXG4gICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuc2NvcGUgPT09IG1lKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGRvbUxpc3RlbmVycywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W118U3RyaW5nW119IGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2l0ZW1Db2xsZWN0aW9uXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0ZWRDbHNdXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1zLCBpdGVtQ29sbGVjdGlvbiwgc2VsZWN0ZWRDbHMpIHtcbiAgICAgICAgaXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKSA/IGl0ZW1zIDogW2l0ZW1zXTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldyxcbiAgICAgICAgICAgIHZkb20gPSB2aWV3LnZkb20sXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKG1lLnNpbmdsZVNlbGVjdCkge1xuICAgICAgICAgICAgbWUuZGVzZWxlY3RBbGwodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB2aWV3LmdldFZkb21DaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjbHMgPSBub2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBzZWxlY3RlZENscyB8fCBtZS5zZWxlY3RlZENscyk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbHMgPSBjbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChpdGVtQ29sbGVjdGlvbiB8fCBtZS5pdGVtcywgaXRlbXMpO1xuXG4gICAgICAgIHZpZXdbdmlldy5oYXNPd25Qcm9wZXJ0eSgnc2lsZW50U2VsZWN0JykgJiYgdmlldy5zaWxlbnRTZWxlY3QgPT09IHRydWUgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbihpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmlzU2VsZWN0ZWQoaXRlbSkpIHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLnZpZXcuY2xzIHx8IFtdO1xuXG4gICAgICAgIGlmIChtZS5jbHMgJiYgY2xzLmluY2x1ZGVzKG1lLmNscykpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIG1lLmNscyk7XG4gICAgICAgICAgICBtZS52aWV3LmNscyA9IGNscztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmRlc2VsZWN0QWxsKCk7XG5cbiAgICAgICAgbWUucmVtb3ZlRG9tTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNb2RlbCk7XG5cbmV4cG9ydCB7TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkFycmF5XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0FycmF5IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkFycmF5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5BcnJheSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpdGVtIG9yIEFycmF5IG9mIGl0ZW1zIHRvIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyBub3QgYWxyZWFkeSBleGlzdC5cbiAgICAgKiBPbmx5IHByaW1pdGl2ZSBpdGVtcyB3aWxsIGdldCBmb3VuZCBhcyBkdXBsaWNhdGVzXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyBhZGQoYXJyLCBpdGVtcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbXMpKSB7XG4gICAgICAgICAgICBpdGVtcyA9IFtpdGVtc107XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKCFhcnIuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiBpdGVtcyB3aGljaCBhcmUgcHJlc2VudCBpbiBhcnJheTEsIGJ1dCBub3QgaW4gYXJyYXkyXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkxPVtdXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkyPVtdXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBkaWZmZXJlbmNlKGFycmF5MT1bXSwgYXJyYXkyPVtdKSB7XG4gICAgICAgIHJldHVybiBhcnJheTEuZmlsdGVyKGl0ZW0gPT4gIWFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBpbmRleCBvZiBpdGVtIGlzID4gLTFcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJcbiAgICAgKiBAcGFyYW0geyp9IGl0ZW1cbiAgICAgKi9cbiAgICBzdGF0aWMgaGFzSXRlbShhcnIsIGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGFyci5pbmNsdWRlcyhpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zIHdoaWNoIGFyZSBwcmVzZW50IGluIGFycmF5MSBhbmQgYXJyYXkyXG4gICAgICogT25seSBzdXBwb3J0cyBwcmltaXRpdmUgaXRlbXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGludGVyc2VjdGlvbihhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICByZXR1cm4gYXJyYXkxLmZpbHRlcihpdGVtID0+IGFycmF5Mi5pbmNsdWRlcyhpdGVtKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBpdGVtcyBvZiBhcnJheTEgYXJlIHByZXNlbnQgaW4gYXJyYXkgMlxuICAgICAqIFN1cHBvcnRzIEFycmF5cyBjb250YWluaW5nIE9iamVjdHMsIG5vdCBBcnJheXMgY29udGFpbmluZyBBcnJheXNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTE9W11cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheTI9W11cbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNFcXVhbChhcnJheTE9W10sIGFycmF5Mj1bXSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gYXJyYXkxLmxlbmd0aCxcbiAgICAgICAgICAgIGxlbjIgPSBhcnJheTIubGVuZ3RoLFxuICAgICAgICAgICAgaGFzT2JqZWN0LCBqLCB2YWx1ZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGFycmF5MVtpXTtcblxuICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBqICAgICAgICAgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGogPCBsZW4yOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChhcnJheTJbal0pICYmIE5lby51dGlsLk9iamVjdC5pc0VxdWFsKHZhbHVlLCBhcnJheTJbal0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNPYmplY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIWhhc09iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghYXJyYXkyLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGl0ZW0gaW5zaWRlIGFyciBmcm9tIGZyb21JbmRleCB0byB0b0luZGV4XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICovXG4gICAgc3RhdGljIG1vdmUoYXJyLCBmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgaWYgKGZyb21JbmRleCA9PT0gdG9JbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIGFycjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcm9tSW5kZXggPj0gYXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgZnJvbUluZGV4ID0gYXJyLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBhcnIuc3BsaWNlKHRvSW5kZXgsIDAsIGFyci5zcGxpY2UoZnJvbUluZGV4LCAxKVswXSk7XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGZyb20gYW4gYXJyYXkuIE9ubHkgcHJpbWl0aXZlIGl0ZW1zIHdpbGwgZ2V0IGZvdW5kXG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtc1xuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUoYXJyLCBpdGVtcykge1xuICAgICAgICBsZXQgaW5kZXg7XG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMgPSBbaXRlbXNdO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gaXRlbSBmcm9tIGFuIGFycmF5IGluIGNhc2UgaXQgZG9lcyAgZXhpc3QsIG90aGVyd2lzZSBhZGRzIGl0XG4gICAgICogQHBhcmFtIHtBcnJheX0gYXJyXG4gICAgICogQHBhcmFtIHsqfSBpdGVtXG4gICAgICovXG4gICAgc3RhdGljIHRvZ2dsZShhcnIsIGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzSXRlbShhcnIsIGl0ZW0pKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShhcnIsIGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGQoYXJyLCBpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgaXRlbXMgd2hpY2ggYXJlIHByZXNlbnQgaW4gYXJyYXkxIGFuZCBhcnJheTJcbiAgICAgKiBPbmx5IHN1cHBvcnRzIHByaW1pdGl2ZSBpdGVtc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5MlxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdW5pb24oYXJyYXkxLCBhcnJheTIpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgbWVyZ2UgID0gYXJyYXkxLmNvbmNhdChhcnJheTIpLFxuICAgICAgICAgICAgbGVuICAgID0gbWVyZ2UubGVuZ3RoLFxuICAgICAgICAgICAgYXNzb2MgID0ge30sXG4gICAgICAgICAgICBpdGVtO1xuXG4gICAgICAgIHdoaWxlIChsZW4tLSkge1xuICAgICAgICAgICAgaXRlbSA9IG1lcmdlW2xlbl07XG5cbiAgICAgICAgICAgIGlmICghYXNzb2NbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdChpdGVtKTtcbiAgICAgICAgICAgICAgICBhc3NvY1tpdGVtXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gaXRlbSBvciBBcnJheSBvZiBpdGVtcyB0byBhbiBhcnJheSBpbiBjYXNlIGl0IGRvZXMgbm90IGFscmVhZHkgZXhpc3QuXG4gICAgICogT25seSBwcmltaXRpdmUgaXRlbXMgd2lsbCBnZXQgZm91bmQgYXMgZHVwbGljYXRlc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IGFyclxuICAgICAqIEBwYXJhbSB7Kn0gaXRlbXNcbiAgICAgKi9cbiAgICBzdGF0aWMgdW5zaGlmdChhcnIsIGl0ZW1zKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW2l0ZW1zXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFyci5pbmNsdWRlcyhpdGVtKSkge1xuICAgICAgICAgICAgICAgIGFyci51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb0FycmF5KTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvQXJyYXk7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkNsYXNzU3lzdGVtXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENsYXNzU3lzdGVtIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNsYXNzU3lzdGVtJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5DbGFzc1N5c3RlbSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogY2FuIGdldCB1c2VkIGluc2lkZSBiZWZvcmVTZXQgbWV0aG9kcyBpbiBjYXNlIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnN0YW5jZXMgbGlrZSBzdG9yZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOZW8uY29yZS5CYXNlfG51bGx9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gW0RlZmF1bHRDbGFzcz1udWxsXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmYXVsdFZhbHVlcz17fV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYmVmb3JlU2V0SW5zdGFuY2UoY29uZmlnLCBEZWZhdWx0Q2xhc3M9bnVsbCwgZGVmYXVsdFZhbHVlcz17fSkge1xuICAgICAgICBpZiAoIWNvbmZpZyAmJiBEZWZhdWx0Q2xhc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IE5lby5jcmVhdGUoRGVmYXVsdENsYXNzLCBkZWZhdWx0VmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcgJiYgY29uZmlnLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IE5lby5jcmVhdGUoY29uZmlnLCBkZWZhdWx0VmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSAmJiAhKGNvbmZpZyBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gTmVvLm50eXBlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKERlZmF1bHRDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb25maWcubW9kdWxlID0gRGVmYXVsdENsYXNzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3Q29uZmlnLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uZmlnID0gTmVvLmNyZWF0ZShuZXdDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENsYXNzU3lzdGVtKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NTeXN0ZW07IiwiaW1wb3J0IEJhc2UgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IE5lb09iamVjdCBmcm9tICcuLi91dGlsL09iamVjdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5LZXlOYXZpZ2F0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEtleU5hdmlnYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuS2V5TmF2aWdhdGlvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuS2V5TmF2aWdhdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdrZXluYXYnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAna2V5bmF2JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsbHkgc3RvcmVzIHRoZSBjb21wb25lbnQgaWQgaW5zaWRlIF9jb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9IGNvbXBvbmVudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB0aGUga2V5ZG93biBldmVudCBpcyBzdXBwb3NlZCB0byBidWJibGUgdXB3YXJkcyBpbnNpZGUgdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGtleURvd25FdmVudEJ1YmJsZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAga2V5RG93bkV2ZW50QnViYmxlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGtleXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGtleXNfOiBudWxsXG4gICAgfX1cblxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2goLi4udGhpcy5wYXJzZUtleXModmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGJlZm9yZUdldENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5fY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgY29tcG9uZW50IGlkXG4gICAgICovXG4gICAgYmVmb3JlU2V0Q29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bihkYXRhKSB7XG4gICAgICAgIC8vIFVzaW5nIHRoZSBjaHJvbWUgYXV0by1maWxsIGZlYXR1cmUgZG9lcyB0cmlnZ2VyIGEga2V5ZG93biBldmVudCwgbm90IGNvbnRhaW5pbmcgYSBrZXkuIFNlZTogIzY0XG4gICAgICAgIGlmIChkYXRhLmtleSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdXBwZXJDYXNlS2V5ID0gZGF0YS5rZXkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBzY29wZTtcblxuICAgICAgICAgICAgdXBwZXJDYXNlS2V5ID0gbWUucGFyc2VVcHBlckNhc2VLZXkodXBwZXJDYXNlS2V5KTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0tleU5hdmlnYXRpb24gb25LZXlEb3duJywgdXBwZXJDYXNlS2V5LCBkYXRhLCBtZS5rZXlzKTtcblxuICAgICAgICAgICAgbWUua2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBOZW8uZ2V0KGtleS5zY29wZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LmtleS50b1VwcGVyQ2FzZSgpID09PSB1cHBlckNhc2VLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlW2tleS5mbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlW2tleS5mbl0uYXBwbHkoc2NvcGUsIFtkYXRhXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBwYXJzZUtleXModmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudElkID0gdGhpcy5fY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGtleUFycmF5ICAgID0gW107XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5QXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbiAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IGNvbXBvbmVudElkIC8vIHRvZG86IHN1cHBvcnQgVkNzIGxhdGVyIG9uXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGtleUFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNwZWNpZmljIGtleSBuYW1lcywgZS5nLiBcIiBcIiA9PiBTUEFDRVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZVVwcGVyQ2FzZUtleShrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGtleSA9ICdTUEFDRSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBUlJPV0RPV04nOlxuICAgICAgICAgICAgICAgIGtleSA9ICdET1dOJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XTEVGVCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ0xFRlQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQVJST1dSSUdIVCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ1JJR0hUJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XVVAnOlxuICAgICAgICAgICAgICAgIGtleSA9ICdVUCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IGNvbXBvbmVudC5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBtZS5rZXlzICAgICAgPSBtZS5wYXJzZUtleXMobWUua2V5cyk7XG5cbiAgICAgICAgaWYgKGRvbUxpc3RlbmVycykge1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleWRvd246IHtcbiAgICAgICAgICAgICAgICAgICAgZm4gICAgOiBtZS5vbktleURvd24sXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZTogbWUua2V5RG93bkV2ZW50QnViYmxlLFxuICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBrZXkgbGlzdGVuZXIgdXNpbmcgdGhlIHNhbWUgY29uZmlnIHVzZWQgd2hlbiBjcmVhdGluZyBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICByZW1vdmVLZXkoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBtZS5fa2V5cyxcbiAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIGlmIChOZW9PYmplY3QuaXNFcXVhbChrZXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtdWx0aXBsZSBrZXkgbGlzdGVuZXJzIHBhc3NpbmcgYW4gYXJyYXkgb2YgY29uZmlnIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICByZW1vdmVLZXlzKGl0ZW1zKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMucmVtb3ZlS2V5KGl0ZW0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBkb20gbGlzdGVuZXIgZnJvbSB0aGUgb3duZXIgY29tcG9uZW50XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhLZXlOYXZpZ2F0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5TmF2aWdhdGlvbjsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuT2JqZWN0XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb09iamVjdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5PYmplY3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLk9iamVjdCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBwcm9wZXJ0aWVzIG9mIHggbWF0Y2ggd2l0aCB0aGUgcHJvcGVydGllcyBvZiB5XG4gICAgICogU3VwcG9ydHMgbmVzdGVkIE9iamVjdHMsIGJ1dCBub3QgYXJyYXlzIGFzIHByb3AgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0geVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VxdWFsKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIChOZW8uaXNPYmplY3QoeCkgJiYgTmVvLmlzT2JqZWN0KHkpKSA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoeCkubGVuZ3RoID09PSBPYmplY3Qua2V5cyh5KS5sZW5ndGgpICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoeCkucmVkdWNlKGZ1bmN0aW9uKGlzRXF1YWwsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNFcXVhbCAmJiBOZW9PYmplY3QuaXNFcXVhbCh4W2tleV0sIHlba2V5XSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZVxuICAgICAgICAgICAgKSA6ICh4ID09PSB5KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb09iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lb09iamVjdDsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuU3R5bGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgU3R5bGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuU3R5bGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlN0eWxlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGRlbHRhIG9iamVjdCwgY29udGFpbmluZyB0aGUgc3R5bGVzIG9mIG5ld1N0eWxlIHdoaWNoIGFyZSBub3QgaW5jbHVkZWQgb3IgZGlmZmVyZW50IHRoYW4gaW4gb2xkU3R5bGVcbiAgICAgKiBTdHlsZXMgaW5jbHVkZWQgaW4gb2xkU3R5bGUgYnV0IG1pc3NpbmcgaW4gbmV3U3R5bGUgd2lsbCBnZXQgYSB2YWx1ZSBvZiBudWxsXG4gICAgICogc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvc3R5bGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5ld1N0eWxlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvbGRTdHlsZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0eWxlIGRlbHRhXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVTdHlsZXMobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgbmV3U3R5bGUgPSBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0KG5ld1N0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcob2xkU3R5bGUpKSB7XG4gICAgICAgICAgICBvbGRTdHlsZSA9IE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3Qob2xkU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdTdHlsZSAmJiAhb2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIE5lby5jbG9uZShuZXdTdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld1N0eWxlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhuZXdTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmICghb2xkU3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpIHx8IG9sZFN0eWxlW3N0eWxlXSAhPT0gbmV3U3R5bGVbc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBuZXdTdHlsZVtzdHlsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZFN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdTdHlsZS5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzdHlsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3R5bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuVkRvbVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBWRG9tIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLlZEb20nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlZEb20nXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZW1vdmVJZHM9dHJ1ZV1cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjbG9uZWQgdmRvbVxuICAgICAqL1xuICAgIHN0YXRpYyBjbG9uZSh2ZG9tLCByZW1vdmVJZHM9dHJ1ZSkge1xuICAgICAgICBjb25zdCBjbG9uZSA9IE5lby5jbG9uZSh2ZG9tLCB0cnVlKTtcblxuICAgICAgICBpZiAocmVtb3ZlSWRzKSB7XG4gICAgICAgICAgICBkZWxldGUgY2xvbmUuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2xvbmUuY24pIHtcbiAgICAgICAgICAgIGNsb25lLmNuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2xvbmUuY25baW5kZXhdID0gVkRvbS5jbG9uZShpdGVtLCByZW1vdmVJZHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHMgRWl0aGVyIGFuIG9iamVjdCBjb250YWluaW5nIHZkb20gbm9kZSBhdHRyaWJ1dGVzIG9yIGEgc3RyaW5nIGJhc2VkIGlkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyZW50Tm9kZV0gSW50ZXJuYWwgZmxhZywgZG8gbm90IHVzZSBpdFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICogICAgIHtOdW1iZXJ9IGluZGV4XG4gICAgICogICAgIHtTdHJpbmd9IHBhcmVudElkXG4gICAgICogICAgIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZmluZFZkb21DaGlsZCh2ZG9tLCBvcHRzLCBpbmRleCwgcGFyZW50Tm9kZSkge1xuICAgICAgICBpbmRleCA9IGluZGV4IHx8IDA7XG4gICAgICAgIG9wdHMgID0gdHlwZW9mIG9wdHMgIT09ICdzdHJpbmcnID8gb3B0cyA6IHtpZDpvcHRzfTtcblxuICAgICAgICBsZXQgY2hpbGQgICAgICA9IG51bGwsXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gW10sXG4gICAgICAgICAgICBzdHlsZU1hdGNoID0gdHJ1ZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IHZkb20uY24gJiYgdmRvbS5jbi5sZW5ndGgsXG4gICAgICAgICAgICBvcHRzQXJyYXksIG9wdHNMZW5ndGgsIHN1YkNoaWxkO1xuXG4gICAgICAgIG9wdHNBcnJheSAgPSBPYmplY3QuZW50cmllcyhvcHRzKTtcbiAgICAgICAgb3B0c0xlbmd0aCA9IG9wdHNBcnJheS5sZW5ndGg7XG5cbiAgICAgICAgb3B0c0FycmF5LmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgaWYgKHZkb20uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2ZG9tW2tleV0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZkb21ba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzQXJyYXkodmFsdWUpICYmIE5lby5pc0FycmF5KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2ZG9tIGFycmF5IGZvciBhbGwga2V5cyBvciBjb21wYXJlIGlmIHRoZSBhcnJheXMgYXJlIGVxdWFsLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogY2xzIG1hdGNoaW5nIG5vdCBzdXBwb3J0ZWQgZm9yIHRhcmdldCAmIHNvdXJjZSB0eXBlcyBvZiBBcnJheXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdzdHlsZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmRvbVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2ZG9tW2tleV0gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgTmVvLmlzT2JqZWN0KHZkb21ba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW3N0eWxlS2V5LCBzdHlsZVZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoISh2ZG9tW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZkb21ba2V5XVtzdHlsZUtleV0gPT09IHN0eWxlVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZU1hdGNoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZmluZFZkb21DaGlsZDogc3R5bGUgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgbWl4ZWQgdGFyZ2V0ICYgc291cmNlIHR5cGVzIChPYmplY3QgVlMgU3RyaW5nKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmRvbVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoQXJyYXkubGVuZ3RoID09PSBvcHRzTGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluZGV4ICAgICA6IGluZGV4LFxuICAgICAgICAgICAgICAgIHBhcmVudE5vZGU6IHBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgdmRvbSAgICAgIDogdmRvbVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZG9tLmNuKSB7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZkb20uY25baV0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViQ2hpbGQgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbS5jbltpXSwgb3B0cywgaSwgdmRvbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YkNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBzdWJDaGlsZC5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBzdWJDaGlsZC5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZkb20gICAgICA6IHN1YkNoaWxkLnZkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZW5pZW5jZSBzaG9ydGN1dCBmb3IgZmluZFZkb21DaGlsZCh2ZG9tLCB7ZmxhZzogZmxhZ30pO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGZsYWcgVGhlIGZsYWcgcmVmZXJlbmNlIHNwZWNpZmllZCBvbiB0aGUgdGFyZ2V0IHZkb20gY2hpbGQgbm9kZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QnlGbGFnKHZkb20sIGZsYWcpIHtcbiAgICAgICAgbGV0IG5vZGUgPSBWRG9tLmZpbmRWZG9tQ2hpbGQodmRvbSwge2ZsYWc6IGZsYWd9KTtcbiAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgaWRzIG9mIGFsbCBjaGlsZCBub2RlcyBvZiB0aGUgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHZkb21cbiAgICAgKiBAcGFyYW0gW2NoaWxkSWRzPVtdXVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gY2hpbGRJZHNcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q2hpbGRJZHModmRvbSwgY2hpbGRJZHM9W10pIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2ZG9tICYmIHZkb20uY24gfHwgW107XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlLmlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRJZHMucHVzaChjaGlsZE5vZGUuaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZElkcyA9IFZEb20uZ2V0Q2hpbGRJZHMoY2hpbGROb2RlLCBjaGlsZElkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGlsZElkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDb2x1bW5Ob2Rlcyh2ZG9tLCBpbmRleCkge1xuICAgICAgICBsZXQgY29sdW1uTm9kZXMgPSBbXTtcblxuICAgICAgICBpZiAodmRvbS5jbikge1xuICAgICAgICAgICAgdmRvbS5jbi5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJvdy5jbiAmJiByb3cuY25baW5kZXhdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbk5vZGVzLnB1c2gocm93LmNuW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sdW1uTm9kZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Q29sdW1uTm9kZXNJZHModmRvbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uZ2V0Q29sdW1uTm9kZXModmRvbSwgaW5kZXgpLm1hcChlID0+IGUuaWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZmxhZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IFttYXRjaEFycmF5XVxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYW4gYXJyYXkgb2YgdmRvbSBub2RlcyB3aGljaCBtYXRjaCB0aGUgZmxhZ1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRGbGFncyh2ZG9tLCBmbGFnLCBtYXRjaEFycmF5KSB7XG4gICAgICAgIGlmICghbWF0Y2hBcnJheSkge1xuICAgICAgICAgICAgbWF0Y2hBcnJheSA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodmRvbS5mbGFnID09PSBmbGFnKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hBcnJheS5wdXNoKHZkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IHZkb20gJiYgdmRvbS5jbiB8fCBbXTtcblxuICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goY2hpbGROb2RlID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuZmxhZyA9PT0gZmxhZykge1xuICAgICAgICAgICAgICAgIG1hdGNoQXJyYXkucHVzaChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYXRjaEFycmF5ID0gVkRvbS5nZXRGbGFncyhjaGlsZE5vZGUsIGZsYWcsIG1hdGNoQXJyYXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbWF0Y2hBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgYSBnaXZlbiBub2RlVG9JbnNlcnQgYWZ0ZXIgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRBZnRlck5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIFZEb20uaW5zZXJ0Tm9kZSh2ZG9tLCBub2RlVG9JbnNlcnQsIHRhcmdldE5vZGVJZCwgZmFsc2UpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpbnNlcnRCZWZvcmVOb2RlKHZkb20sIG5vZGVUb0luc2VydCwgdGFyZ2V0Tm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBWRG9tLmluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydCBhIGdpdmVuIG5vZGVUb0luc2VydCBiZWZvcmUgYSB0YXJnZXROb2RlIGluc2lkZSBhIGdpdmVuIHZkb20gdHJlZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tIFRoZSB2ZG9tIHRyZWUgY29udGFpbmluZyB0aGUgdGFyZ2V0Tm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBub2RlVG9JbnNlcnQgVGhlIG5ldyB2ZG9tIHRvIGluc2VydFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdGFyZ2V0Tm9kZUlkIEVpdGhlciBhIHZkb20gbm9kZSBvciBhIHZkb20gbm9kZSBpZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gaW5zZXJ0QmVmb3JlIHRydWUgaW5zZXJ0cyB0aGUgbmV3IG5vZGUgYXQgdGhlIHNhbWUgaW5kZXgsIGluZGV4KzEgb3RoZXJ3aXNlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGluc2VydE5vZGUodmRvbSwgbm9kZVRvSW5zZXJ0LCB0YXJnZXROb2RlSWQsIGluc2VydEJlZm9yZSkge1xuICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHRhcmdldE5vZGVJZCkpIHtcbiAgICAgICAgICAgIHRhcmdldE5vZGVJZCA9IHRhcmdldE5vZGVJZC5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0YXJnZXROb2RlID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIHtpZDogdGFyZ2V0Tm9kZUlkfSksXG4gICAgICAgICAgICBpbmRleDtcblxuICAgICAgICBpZiAodGFyZ2V0Tm9kZSkge1xuICAgICAgICAgICAgaW5kZXggPSBpbnNlcnRCZWZvcmUgPyB0YXJnZXROb2RlLmluZGV4IDogdGFyZ2V0Tm9kZS5pbmRleCArIDE7XG4gICAgICAgICAgICB0YXJnZXROb2RlLnBhcmVudE5vZGUuY24uc3BsaWNlKGluZGV4LCAwLCBub2RlVG9JbnNlcnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIHZkb20gY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb3B0cyBFaXRoZXIgYW4gb2JqZWN0IGNvbnRhaW5pbmcgdmRvbSBub2RlIGF0dHJpYnV0ZXMgb3IgYSBzdHJpbmcgYmFzZWQgaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCAmIHJlbW92ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlVmRvbUNoaWxkKHZkb20sIG9wdHMpIHtcbiAgICAgICAgbGV0IGNoaWxkID0gVkRvbS5maW5kVmRvbUNoaWxkKHZkb20sIG9wdHMpO1xuXG4gICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5jbi5zcGxpY2UoY2hpbGQuaW5kZXgsIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBjaGlsZCBub2RlIGluc2lkZSBhIHZkb20gdHJlZSBieSBhIGdpdmVuIGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZkb21cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbmV3Q2hpbGROb2RlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXG4gICAgICovXG4gICAgc3RhdGljIHJlcGxhY2VWZG9tQ2hpbGQodmRvbSwgaWQsIG5ld0NoaWxkTm9kZSkge1xuICAgICAgICBsZXQgY24gID0gdmRvbS5jbiB8fCBbXSxcbiAgICAgICAgICAgIGkgICA9IDAsXG4gICAgICAgICAgICBsZW4gPSBjbi5sZW5ndGgsXG4gICAgICAgICAgICBjaGlsZE5vZGU7XG5cbiAgICAgICAgaWYgKHZkb20uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VWZG9tQ2hpbGQ6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY25baV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY25baV0gPSBuZXdDaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWRG9tLnJlcGxhY2VWZG9tQ2hpbGQoY2hpbGROb2RlLCBpZCwgbmV3Q2hpbGROb2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE5lby52ZG9tLkhlbHBlciB3aWxsIGNyZWF0ZSBpZHMgZm9yIGVhY2ggdm5vZGUsIHNvIHdlIG5lZWQgdG8gc3luYyB0aGVtIGludG8gdGhlIHZkb21cbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSB2bm9kZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tXG4gICAgICovXG4gICAgc3RhdGljIHN5bmNWZG9tSWRzKHZub2RlLCB2ZG9tKSB7XG4gICAgICAgIGlmICh2bm9kZSAmJiB2ZG9tKSB7XG4gICAgICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZkb20uY2hpbGROb2RlcyB8fCB2ZG9tLmNuLFxuICAgICAgICAgICAgICAgIGNuLCBpLCBsZW47XG5cbiAgICAgICAgICAgIGlmICh2bm9kZS5pZCAmJiB2bm9kZS5pZCAhPT0gdmRvbS5pZCkge1xuICAgICAgICAgICAgICAgIHZkb20uaWQgPSB2bm9kZS5pZDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmRvbSBpZCBzZXQgdG8nLCB2bm9kZS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgY24gICA9IGNoaWxkTm9kZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZW1vdmVEb20gIT09IHRydWUpO1xuICAgICAgICAgICAgICAgIGkgICAgPSAwO1xuICAgICAgICAgICAgICAgIGxlbiAgPSBjbiAmJiBjbi5sZW5ndGggfHwgMDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFZEb20uc3luY1Zkb21JZHModm5vZGUuY2hpbGROb2Rlc1tpXSwgY25baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWRG9tKTtcblxuZXhwb3J0IGRlZmF1bHQgVkRvbTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuVk5vZGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgVk5vZGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuVk5vZGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlZOb2RlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggdm5vZGUgY2hpbGQgbm9kZXMgYnkgaWQgb3Igb3B0cyBvYmplY3QgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZub2RlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvcHRzIEVpdGhlciBhbiBvYmplY3QgY29udGFpbmluZyB2ZG9tIG5vZGUgYXR0cmlidXRlcyBvciBhIHN0cmluZyBiYXNlZCBpZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbaW5kZXhdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmVudE5vZGVdIEludGVybmFsIGZsYWcsIGRvIG5vdCB1c2UgaXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqICAgICB7TnVtYmVyfSBpbmRleFxuICAgICAqICAgICB7U3RyaW5nfSBwYXJlbnRJZFxuICAgICAqICAgICB7T2JqZWN0fSB2bm9kZVxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2hpbGRWbm9kZSh2bm9kZSwgb3B0cywgaW5kZXgsIHBhcmVudE5vZGUpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCB8fCAwO1xuICAgICAgICBvcHRzICA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6IG9wdHN9O1xuXG4gICAgICAgIGxldCBhdHRyTWF0Y2ggID0gdHJ1ZSxcbiAgICAgICAgICAgIG1hdGNoQXJyYXkgPSBbXSxcbiAgICAgICAgICAgIHN0eWxlTWF0Y2ggPSB0cnVlLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgID0gdm5vZGUuY2hpbGROb2RlcyAmJiB2bm9kZS5jaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIG9wdHNBcnJheSwgb3B0c0xlbmd0aCwgc3ViQ2hpbGQ7XG5cbiAgICAgICAgb3B0c0FycmF5ICA9IE9iamVjdC5lbnRyaWVzKG9wdHMpO1xuICAgICAgICBvcHRzTGVuZ3RoID0gb3B0c0FycmF5Lmxlbmd0aDtcblxuICAgICAgICBvcHRzQXJyYXkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICBpZiAodm5vZGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXR0cmlidXRlcyc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiBOZW8uaXNPYmplY3Qodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh2YWx1ZSkuZm9yRWFjaCgoW2F0dHJLZXksIGF0dHJWYWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEodm5vZGVba2V5XS5oYXNPd25Qcm9wZXJ0eShhdHRyS2V5KSAmJiB2bm9kZVtrZXldW2F0dHJLZXldID09PSBhdHRyVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsYXNzTmFtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBOZW8uaXNBcnJheSh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiB2bm9kZVtrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bm9kZVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgJiYgTmVvLmlzQXJyYXkodm5vZGVba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiBlaXRoZXIgc2VhcmNoIHRoZSB2bm9kZSBhcnJheSBmb3IgYWxsIGtleXMgb3IgY29tcGFyZSBpZiB0aGUgYXJyYXlzIGFyZSBlcXVhbC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZpbmRDaGlsZFZub2RlOiBjbHMgbWF0Y2hpbmcgbm90IHN1cHBvcnRlZCBmb3IgdGFyZ2V0ICYgc291cmNlIHR5cGVzIG9mIEFycmF5cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0eWxlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIE5lby5pc09iamVjdCh2bm9kZVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChbc3R5bGVLZXksIHN0eWxlVmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHZub2RlW2tleV0uaGFzT3duUHJvcGVydHkoc3R5bGVLZXkpICYmIHZub2RlW2tleV1bc3R5bGVLZXldID09PSBzdHlsZVZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3R5bGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodm5vZGVba2V5XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEFycmF5LnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaEFycmF5Lmxlbmd0aCA9PT0gb3B0c0xlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbmRleCAgICAgOiBpbmRleCxcbiAgICAgICAgICAgICAgICBwYXJlbnROb2RlOiBwYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgIHZub2RlICAgICA6IHZub2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZub2RlLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZCA9IFZOb2RlLmZpbmRDaGlsZFZub2RlKHZub2RlLmNoaWxkTm9kZXNbaV0sIG9wdHMsIGksIHZub2RlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdWJDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ViQ2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBpZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gY2hpbGQgdm5vZGUgb3IgbnVsbFxuICAgICAqL1xuICAgIHN0YXRpYyBmaW5kQ2hpbGRWbm9kZUJ5SWQodm5vZGUsIGlkKSB7XG4gICAgICAgIGxldCBjaGlsZE5vZGVzID0gdm5vZGUuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgICA9IGNoaWxkTm9kZXMubGVuZ3RoLFxuICAgICAgICAgICAgY2hpbGROb2RlO1xuXG4gICAgICAgIGlmICh2bm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2bm9kZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBWTm9kZS5maW5kQ2hpbGRWbm9kZUJ5SWQoY2hpbGROb2RlLCBpZCk7XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBpZHMgb2YgYWxsIGNoaWxkIG5vZGVzIG9mIHRoZSBnaXZlbiB2bm9kZVxuICAgICAqIEBwYXJhbSB2bm9kZVxuICAgICAqIEBwYXJhbSBbY2hpbGRJZHM9W11dXG4gICAgICogQHJldHVybnMge0FycmF5fSBjaGlsZElkc1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDaGlsZElkcyh2bm9kZSwgY2hpbGRJZHM9W10pIHtcbiAgICAgICAgbGV0IGNoaWxkTm9kZXMgPSB2bm9kZSAmJiB2bm9kZS5jaGlsZE5vZGVzIHx8IFtdO1xuXG4gICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkSWRzLnB1c2goY2hpbGROb2RlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBWTm9kZS5nZXRDaGlsZElkcyhjaGlsZE5vZGUsIGNoaWxkSWRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkSWRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBjaGlsZCB2bm9kZSBpbnNpZGUgYSB2bm9kZSB0cmVlIGJ5IGEgZ2l2ZW4gaWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdm5vZGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBub2RlIHdhcyBmb3VuZCBhbmQgcmVtb3ZlZFxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmVDaGlsZFZub2RlKHZub2RlLCBpZCkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlbW92ZUNoaWxkVm5vZGU6IHRhcmdldCBpZCBtYXRjaGVzIHRoZSByb290IHZub2RlIGlkOiAnICsgaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKFZOb2RlLnJlbW92ZUNoaWxkVm5vZGUoY2hpbGROb2RlLCBpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGNoaWxkIHZub2RlIGluc2lkZSBhIHZub2RlIHRyZWUgYnkgYSBnaXZlbiBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2bm9kZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBuZXdDaGlsZFZub2RlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgbm9kZSB3YXMgZm91bmQgYW5kIHJlcGxhY2VkXG4gICAgICovXG4gICAgc3RhdGljIHJlcGxhY2VDaGlsZFZub2RlKHZub2RlLCBpZCwgbmV3Q2hpbGRWbm9kZSkge1xuICAgICAgICBsZXQgY2hpbGROb2RlcyA9IHZub2RlLmNoaWxkTm9kZXMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgPSBjaGlsZE5vZGVzLmxlbmd0aCxcbiAgICAgICAgICAgIGNoaWxkTm9kZTtcblxuICAgICAgICBpZiAodm5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3JlcGxhY2VDaGlsZFZub2RlOiB0YXJnZXQgaWQgbWF0Y2hlcyB0aGUgcm9vdCB2bm9kZSBpZDogJyArIGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGROb2Rlc1tpXSA9IG5ld0NoaWxkVm5vZGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChWTm9kZS5yZXBsYWNlQ2hpbGRWbm9kZShjaGlsZE5vZGUsIGlkLCBuZXdDaGlsZFZub2RlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVk5vZGUpO1xuXG5leHBvcnQgZGVmYXVsdCBWTm9kZTsiXSwic291cmNlUm9vdCI6IiJ9