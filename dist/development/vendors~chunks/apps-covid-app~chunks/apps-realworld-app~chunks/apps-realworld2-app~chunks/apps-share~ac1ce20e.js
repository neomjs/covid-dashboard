self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld-app~chunks/apps-realworld2-app~chunks/apps-share~ac1ce20e"],{

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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9DYXJkLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0ZpdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9GbGV4Ym94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0hCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvVkJveC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStDO0FBQ0g7QUFDQTtBQUNEO0FBQ0M7QUFDQTtBQUNBO0FBQ0Q7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixPQUFPLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGdCQUFnQjtBQUMvQixlQUFlLGdCQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDhCQUE4QjtBQUM3QztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsd0RBQVU7QUFDM0M7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QyxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsYUFBYTtBQUM1QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLHdCQUF3Qix3REFBTTtBQUM5QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQyxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7QUFDaEIsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2poQkE7QUFBQTtBQUFBO0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0RBQVE7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDTzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUk7QUFDdkIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix1REFBUTtBQUN4QixnQkFBZ0IsdURBQVE7O0FBRXhCO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTtBQUNoQixRQUFRLHVEQUFROztBQUVoQjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ087O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlEQUFJO0FBQ3RCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQVE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUFBO0FBQWtDO0FBQ087O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0I7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQjtBQUNBLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBbUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFROztBQUVoQjtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxZQUFZO0FBQzNCLGVBQWUsWUFBWTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBOztBQUVBLGFBQWEsdURBQVE7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLFlBQVk7QUFDM0IsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBUTs7QUFFcEI7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdFNBO0FBQUE7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQU87QUFDMUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFBQTtBQUFBO0FBQW9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTztBQUMxQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmV+YWMxY2UyMGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tcG9uZW50ICBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IExheW91dEJhc2UgZnJvbSAnLi4vbGF5b3V0L0Jhc2UubWpzJztcbmltcG9ydCBMYXlvdXRDYXJkIGZyb20gJy4uL2xheW91dC9DYXJkLm1qcyc7XG5pbXBvcnQgTGF5b3V0Rml0ICBmcm9tICcuLi9sYXlvdXQvRml0Lm1qcyc7XG5pbXBvcnQgTGF5b3V0SGJveCBmcm9tICcuLi9sYXlvdXQvSEJveC5tanMnO1xuaW1wb3J0IExheW91dFZCb3ggZnJvbSAnLi4vbGF5b3V0L1ZCb3gubWpzJztcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0c189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGNvbmZpZyBvYmplY3RzfGluc3RhbmNlc3xtb2R1bGVzIGZvciBlYWNoIGNoaWxkIGNvbXBvbmVudFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaXRlbXNfPVtdXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGltcG9ydCBCdXR0b24gICAgICBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAgICAgKiBpbXBvcnQgTXlSZWRCdXR0b24gZnJvbSAnbXlhcHAvTXlSZWRCdXR0b24ubWpzJztcbiAgICAgICAgICogaW1wb3J0IFRvb2xiYXIgICAgIGZyb20gJy4uL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG4gICAgICAgICAqXG4gICAgICAgICAqIGxldCBteUJ1dHRvbiA9IE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICAgICAqICAgICB0ZXh0OiAnQnV0dG9uMSdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIE5lby5jcmVhdGUoVG9vbGJhciwge1xuICAgICAgICAgKiAgICAgLy8uLi5cbiAgICAgICAgICogICAgIGl0ZW1zOiBbXG4gICAgICAgICAqICAgICAgICAgbXlCdXR0b24sICAgICAgICAgICAgICAvLyBwYXNzZWQgaW5zdGFuY2VcbiAgICAgICAgICogICAgICAgICB7XG4gICAgICAgICAqICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJywgICAvLyBieSBudHlwZVxuICAgICAgICAgKiAgICAgICAgICAgICB0ZXh0IDogJ0J1dHRvbiAyJ1xuICAgICAgICAgKiAgICAgICAgIH0sXG4gICAgICAgICAqICAgICAgICAge1xuICAgICAgICAgKiAgICAgICAgICAgICBtb2R1bGU6IEJ1dHRvbiwgICAgLy8gYnkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAgICAqICAgICAgICAgICAgIHRleHQgIDogJ0J1dHRvbiAzJ1xuICAgICAgICAgKiAgICAgICAgIH0sXG4gICAgICAgICAqICAgICAgICAgTXlSZWRCdXR0b24gICAgICAgICAgICAvLyB5b3UgY2FuIGRyb3AgaW1wb3J0ZWQgbW9kdWxlcyBkaXJlY3RseSBpbnRvIHRoZSBpdGVtcyBhcnJheVxuICAgICAgICAgKiAgICAgXVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dF89e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXRfOiB7XG4gICAgICAgICAgICBudHlwZTogJ3Zib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgPSBzdXBlci5tZXJnZUNvbmZpZyguLi5hcmdzKTtcblxuICAgICAgICAvLyBhdm9pZCBhbnkgaW50ZXJmZXJlbmNlIG9uIHByb3RvdHlwZSBsZXZlbFxuICAgICAgICAvLyBkb2VzIG5vdCBjbG9uZSBleGlzdGluZyBOZW8gaW5zdGFuY2VzXG5cbiAgICAgICAgaWYgKGNvbmZpZy5pdGVtRGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lLl9pdGVtRGVmYXVsdHMgPSBOZW8uY2xvbmUoY29uZmlnLml0ZW1EZWZhdWx0cywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1EZWZhdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuaXRlbXMpIHtcbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IE5lby5jbG9uZShjb25maWcuaXRlbXMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIENvbnRhaW5lciBkb2VzIG5vdCBoYXZlIGEgbGF5b3V0IGNvbmZpZywgdGhlIHNldHRlciB3b24ndCB0cmlnZ2VyXG4gICAgICAgIG1lLl9sYXlvdXQgPSBtZS5jcmVhdGVMYXlvdXQobWUubGF5b3V0KTtcbiAgICAgICAgbWUuX2xheW91dC5hcHBseVJlbmRlckF0dHJpYnV0ZXMoKTtcblxuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbWUucGFyc2VJdGVtQ29uZmlncyhtZS5pdGVtcyk7XG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGF0IHRoZSBsYXN0IGluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBtZS5pbnNlcnQobWUuaXRlbXMgPyBtZS5pdGVtcy5sZW5ndGggOiAwLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGFwcE5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFwcE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFwcE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8ubGF5b3V0LkJhc2V9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8ubGF5b3V0LkJhc2V9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGF5b3V0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgb2xkVmFsdWUucmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgdmFsdWUuYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUucmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgICAgIGkgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICA9IGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbXNbaV0udmRvbS5yZW1vdmVEb20pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0ubW91bnRlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcmVuZGVyaW5nIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UmVuZGVyaW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnZkb20ucmVtb3ZlRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnJlbmRlcmluZyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8ubGF5b3V0LkJhc2V9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldExheW91dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMYXlvdXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgICAgPSBtZS5faXRlbXMsXG4gICAgICAgICAgICBkZWZhdWx0cyA9IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgIGxheW91dCAgID0gbWUubGF5b3V0LFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpO1xuXG4gICAgICAgIHZkb21Sb290LmNuID0gW107XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0uaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBOZW8uY3JlYXRlKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvLm50eXBlKHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZkb20gICA6IHtpbm5lckhUTUw6IGl0ZW19XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBOZW8uYXNzaWduRGVmYXVsdHMoaXRlbSwgZGVmYXVsdHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0ubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgOiBpdGVtLnN0eWxlIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXShpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXNbaW5kZXhdID0gaXRlbTtcblxuICAgICAgICAgICAgbGF5b3V0LmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcblxuICAgICAgICAgICAgdmRvbVJvb3QuY24ucHVzaChpdGVtLnZkb20pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xOZW8ubGF5b3V0LkJhc2V9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtOZW8ubGF5b3V0LkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlTGF5b3V0KHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMYXlvdXRCYXNlICYmIHZhbHVlLmlzTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY29udGFpbmVySWQgPSBtZS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtZS5wYXJzZUxheW91dENsYXNzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jb250YWluZXJJZCA9IG1lLmlkO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLm50eXBlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBhbGwgY29tcG9uZW50cyBpbnNpZGUgdGhpcy5pdGVtcyBiZWZvcmUgdGhlIHN1cGVyKCkgY2FsbC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt1cGRhdGVQYXJlbnRWZG9tPWZhbHNlXSB0cnVlIHRvIHJlbW92ZSB0aGUgY29tcG9uZW50IGZyb20gdGhlIHBhcmVudCB2ZG9tID0+IHJlYWwgZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXSB0cnVlIHRvIHVwZGF0ZSB0aGUgdmRvbSBzaWxlbnRseSAodXNlZnVsIGZvciBkZXN0cm95aW5nIG11bHRpcGxlIGNoaWxkIGl0ZW1zIGluIGEgcm93KVxuICAgICAqL1xuICAgIGRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbT1mYWxzZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbSwgc2lsZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgYSBkaXJlY3QgY2hpbGQgY29tcG9uZW50IGluc2lkZSB0aGlzLml0ZW1zLlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfFN0cmluZ30gaXRlbUlkIEVpdGhlciB0aGUgaXRlbSByZWZlcmVuY2Ugb3IgdGhlIGl0ZW0gaWRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSAtMSBpbiBjYXNlIG5vIG1hdGNoIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGluZGV4T2YoaXRlbUlkKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IG1lLml0ZW1zICYmIG1lLml0ZW1zLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKGl0ZW1JZCkpIHtcbiAgICAgICAgICAgIGl0ZW1JZCA9IGl0ZW1JZC5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS5pdGVtc1tpXS5pZCA9PT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGF0IGEgc3BlY2lmaWMgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheX0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8TmVvLmNvbXBvbmVudC5CYXNlW119XG4gICAgICovXG4gICAgaW5zZXJ0KGluZGV4LCBpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgdmRvbSAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY24sIGksIGxlbjtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgaSAgID0gMDtcbiAgICAgICAgICAgIGxlbiA9IGl0ZW0ubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogcmVuZGVyIGlzIGFzeW5jLCBlbnN1cmUgdGhlIG9yZGVyIG9mIGl0ZW1zIGlzIGNvcnJlY3RcblxuICAgICAgICAgICAgICAgIC8vIGluc2VydCB0aGUgYXJyYXkgYmFja3dhcmRzXG4gICAgICAgICAgICAgICAgaXRlbVtpXSA9IG1lLmluc2VydChpdGVtW2xlbiAtIDFdLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgTmVvLmNvbXBvbmVudC5CYXNlKSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0ubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWUuaXRlbURlZmF1bHRzIHx8IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdXRvTW91bnQgIDogbWUubW91bnRlZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJbmRleDogaW5kZXgsXG5cbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXShpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGRlZCB0aGUgdHJ1ZSBwYXJhbSA9PiBmb3IgY2FyZCBsYXlvdXRzLCB3ZSBkbyBub3Qgd2FudCBhIGR5bmFtaWNhbGx5IGluc2VydGVkIGNtcCB0byBnZXQgcmVtb3ZlZCByaWdodCBhd2F5XG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3aWxsIG1vc3QgbGlrZWx5IGdldCBhY3RpdmF0ZWQgcmlnaHQgYXdheVxuICAgICAgICAgICAgbWUubGF5b3V0LmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4LCB0cnVlKTtcblxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcblxuICAgICAgICAgICAgbWUuaXRlbXMgPSBpdGVtcztcblxuICAgICAgICAgICAgY24gPSB2ZG9tLmNuIHx8IHZkb20uY2hpbGROb2RlcyB8fCB2ZG9tLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICBjbi5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0udmRvbSk7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG9cbiAgICAgKiBNb3ZlcyBhbiBleGlzdGluZyBpdGVtIHRvIGEgbmV3IGluZGV4XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8TmVvLmNvbXBvbmVudC5CYXNlW119XG4gICAgICovXG4gICAgbW92ZVRvKGl0ZW1JZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBtZS5pbmRleE9mKGl0ZW1JZCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21vdmVUbycsIGN1cnJlbnRJbmRleCk7XG4gICAgfVxuXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdAY29uZmlnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWVbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1RoZSB1c2VkIEBjb25maWcgZG9lcyBub3QgZXhpc3Q6JywgdmFsdWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqL1xuICAgIHBhcnNlTGF5b3V0Q2xhc3MoY29uZmlnKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSkge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5udHlwZS5pbmRleE9mKCdsYXlvdXQtJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm50eXBlID0gJ2xheW91dC0nICsgY29uZmlnLm50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5pbmRleE9mKCdsYXlvdXQtJykgPCAwKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYXlvdXQtJyArIGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29udGFpbmVyIGl0ZW0gYnkgcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Rlc3Ryb3lJdGVtPXRydWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHJlbW92ZShjb21wb25lbnQsIGRlc3Ryb3lJdGVtPXRydWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgaXRlbXMgPSBbLi4udGhpcy5pdGVtc10sXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0uaWQgPT09IGNvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXQoaSwgZGVzdHJveUl0ZW0sIHNpbGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29udGFpbmVyIGl0ZW0gYXQgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Rlc3Ryb3lJdGVtPXRydWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4LCBkZXN0cm95SXRlbT10cnVlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gbWUuaXRlbXMsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjbiwgaXRlbTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBOZW8ud2FybignQ29udGFpbmVyLnJlbW92ZUF0OiBpbmRleCA+PSBpdGVtcy5sZW5ndGguICcgKyBtZS5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlIGl0ZW0nLCBpdGVtLmlkKTtcblxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY24gPSB2ZG9tLmNuIHx8IHZkb20uY2hpbGROb2RlcyB8fCB2ZG9tLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICBjbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBtZVtzaWxlbnQgJiYgIWRlc3Ryb3lJdGVtID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuXG4gICAgICAgICAgICBpZiAoZGVzdHJveUl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0ubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdGhlIHBvc2l0aW9uIG9mIDIgZGlyZWN0IGNoaWxkIGl0ZW1zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW0xaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbTJpZFxuICAgICAqL1xuICAgIHN3aXRjaEl0ZW1zKGl0ZW0xaWQsIGl0ZW0yaWQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbTFJbmRleCA9IG1lLmluZGV4T2YoaXRlbTFpZCksXG4gICAgICAgICAgICBpdGVtMkluZGV4ID0gbWUuaW5kZXhPZihpdGVtMmlkKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIE5lb0FycmF5Lm1vdmUobWUuaXRlbXMsICAgICAgICAgICAgICBpdGVtMkluZGV4LCBpdGVtMUluZGV4KTtcbiAgICAgICAgTmVvQXJyYXkubW92ZShtZS5nZXRWZG9tSXRlbXNSb290KCksIGl0ZW0ySW5kZXgsIGl0ZW0xSW5kZXgpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29yZUJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogVGhlIGJhc2UgY2xhc3MgZm9yIGFsbCBvdGhlciBsYXlvdXRzLlxuICogVXNlIGl0IGRpcmVjdGx5IGluIGNhc2UgeW91IHdhbnQgdG8gY3JlYXRlIGEgY29udGFpbmVyIHdpdGhvdXQgYSBsYXlvdXQuXG4gKiBAY2xhc3MgTmVvLmxheW91dC5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb3JlQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5CYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1iYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1iYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBJZCBvZiB0aGUgQ29udGFpbmVyIGluc3RhbmNlIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICAgICAqIEBtZW1iZXIgez9TdHJpbmd9IGNvbnRhaW5lcklkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbmVySWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZGVudGlmaWVyIGZvciBhbGwgY2xhc3NlcyB0aGF0IGV4dGVuZCBsYXlvdXQuQmFzZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc0xheW91dD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzTGF5b3V0OiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBpdGVtXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHt9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCkge31cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIE1ldGhvZFxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBpdGVtXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKSB7fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuQ2FyZFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5CYXNlXG4gKi9cbmNsYXNzIENhcmQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZm9yIGFuIGFjdGl2ZSBpdGVtIGluc2lkZSB0aGUgY2FyZCBsYXlvdXRcbiAgICAgICAgICogQG1lbWJlciBhY3RpdmVJdGVtQ2xzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUl0ZW1DbHM6ICdhY3RpdmUtaXRlbScsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZm9yIGFuIGluYWN0aXZlIGl0ZW0gaW5zaWRlIHRoZSBjYXJkIGxheW91dFxuICAgICAgICAgKiBAbWVtYmVyIGluYWN0aXZlSXRlbUNsc1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpbmFjdGl2ZUl0ZW1DbHM6ICdpbmFjdGl2ZS1pdGVtJyxcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBmb3IgYW4gaXRlbSBpbnNpZGUgdGhlIGNhcmQgbGF5b3V0XG4gICAgICAgICAqIEBtZW1iZXIgaXRlbUNsc1xuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtQ2xzOiAnbmVvLWxheW91dC1jYXJkLWl0ZW0nXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkNhcmQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuQ2FyZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtY2FyZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtY2FyZCcsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFRoZSBpdGVtIGluZGV4IG9mIHRoZSBjYXJkLCB3aGljaCBpcyBjdXJyZW50bHkgYWN0aXZlLlxuICAgICAgICAgKiBDaGFuZ2UgdGhpcyB2YWx1ZSB0byBhY3RpdmF0ZSBhIGRpZmZlcmVudCBjYXJkLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFjdGl2ZUluZGV4Xz0wXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVJbmRleF86IDAsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFJlbW92ZSB0aGUgRE9NIG9mIGluYWN0aXZlIGNhcmRzLlxuICAgICAgICAgKiBUaGlzIHdpbGwga2VlcCB0aGUgaW5zdGFuY2VzICYgdmRvbSB0cmVlc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW1vdmVJbmFjdGl2ZUNhcmRzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUluYWN0aXZlQ2FyZHM6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogTW9kaWZpZXMgdGhlIENTUyBjbGFzc2VzIG9mIHRoZSBjb250YWluZXIgaXRlbXMgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogQXV0b21hdGljYWxseSBnZXRzIHRyaWdnZXJlZCBhZnRlciBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgYWN0aXZlSW5kZXguXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QWN0aXZlSW5kZXgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBzQ2ZnICAgICAgPSBtZS5nZXRTdGF0aWNDb25maWcoKSxcbiAgICAgICAgICAgIGlzQWN0aXZlSW5kZXgsIGNscywgaXRlbXMsIHZkb207XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICAgICAgaXRlbXMgPSBjb250YWluZXIuaXRlbXM7XG4gICAgICAgICAgICB2ZG9tICA9IGNvbnRhaW5lci52ZG9tO1xuXG4gICAgICAgICAgICBpZiAoIWl0ZW1zW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgIE5lby5lcnJvcignVHJ5aW5nIHRvIGFjdGl2YXRlIGEgbm9uIGV4aXN0aW5nIGNhcmQnLCB2YWx1ZSwgaXRlbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNscyAgICAgICAgICAgPSBpdGVtLmNscztcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZUluZGV4ID0gaW5kZXggPT09IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgaXNBY3RpdmVJbmRleCA/IHNDZmcuaW5hY3RpdmVJdGVtQ2xzIDogc0NmZy5hY3RpdmVJdGVtQ2xzKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoICAgY2xzLCBpc0FjdGl2ZUluZGV4ID8gc0NmZy5hY3RpdmVJdGVtQ2xzICAgOiBzQ2ZnLmluYWN0aXZlSXRlbUNscyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWUucmVtb3ZlSW5hY3RpdmVDYXJkcykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLl9jbHMgPSBjbHM7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5nZXRWZG9tUm9vdCgpLmNscyA9IGNscztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52ZG9tLnJlbW92ZURvbSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZkb20ucmVtb3ZlRG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xzID0gY2xzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWUucmVtb3ZlSW5hY3RpdmVDYXJkcykge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxseSBzZXRzIHRoZSBDU1MgY2xhc3NlcyBvZiB0aGUgY29udGFpbmVyIGl0ZW1zIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBpdGVtXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtCb29sZWFufSBba2VlcEluRG9tPWZhbHNlXVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4LCBrZWVwSW5Eb209ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXNBY3RpdmVJbmRleCA9IG1lLmFjdGl2ZUluZGV4ID09PSBpbmRleCxcbiAgICAgICAgICAgIHNDZmcgICAgICAgICAgPSBtZS5nZXRTdGF0aWNDb25maWcoKSxcbiAgICAgICAgICAgIGNoaWxkQ2xzICAgICAgPSBpdGVtLmNscyxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgPSBpdGVtLnZkb207XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNoaWxkQ2xzLCBzQ2ZnLml0ZW1DbHMpO1xuICAgICAgICBOZW9BcnJheS5hZGQoY2hpbGRDbHMsIGlzQWN0aXZlSW5kZXggPyBzQ2ZnLmFjdGl2ZUl0ZW1DbHMgOiBzQ2ZnLmluYWN0aXZlSXRlbUNscyk7XG5cbiAgICAgICAgaWYgKCFrZWVwSW5Eb20gJiYgbWUucmVtb3ZlSW5hY3RpdmVDYXJkcykge1xuICAgICAgICAgICAgaXRlbS5fY2xzID0gY2hpbGRDbHM7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIHZkb20ucmVtb3ZlRG9tID0gIWlzQWN0aXZlSW5kZXg7XG4gICAgICAgICAgICBpdGVtLnZkb20gPSB2ZG9tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbS5jbHMgPSBjaGlsZENscztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgQ1NTIGNsYXNzZXMgdG8gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5DYXJkOiBhcHBseVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMgfHwgW10sICduZW8tbGF5b3V0LWNhcmQnKTtcblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIENTUyBydWxlcyBmcm9tIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgbGF5b3V0LlxuICAgICAqL1xuICAgIHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuQ2FyZDogcmVtb3ZlUmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1sYXlvdXQtY2FyZCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDYXJkKTtcblxuZXhwb3J0IHtDYXJkIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuRml0XG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkJhc2VcbiAqL1xuY2xhc3MgRml0IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuRml0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkZpdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtZml0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1maXQnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxseSBzZXRzIHRoZSBDU1MgY2xhc3NlcyBvZiB0aGUgY29udGFpbmVyIGl0ZW1zIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjaGlsZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBpZiAoIWNoaWxkLmlnbm9yZUxheW91dCkge1xuICAgICAgICAgICAgY2hpbGQuY2xzID0gTmVvQXJyYXkudW5pb24oY2hpbGQuY2xzLCAnbmVvLWxheW91dC1maXQtaXRlbScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBDU1MgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICovXG4gICAgYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkZpdDogYXBwbHlSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzIHx8IFtdLCAnbmVvLWxheW91dC1maXQnKTtcblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIENTUyBydWxlcyBmcm9tIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgbGF5b3V0LlxuICAgICAqL1xuICAgIHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRml0OiByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLWxheW91dC1maXQnKTtcblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoRml0KTtcblxuZXhwb3J0IHtGaXQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5GbGV4Ym94XG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkJhc2VcbiAqL1xuY2xhc3MgRmxleGJveCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgYWxpZ25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGFsaWduVmFsdWVzPVsnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsICdzdHJldGNoJywgbnVsbF1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnblZhbHVlczogWydjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgJ3N0cmV0Y2gnLCBudWxsXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgZGlyZWN0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBkaXJlY3Rpb25WYWx1ZXM9Wydjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnLCAncm93JywgJ3Jvdy1yZXZlcnNlJywgbnVsbF1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb25WYWx1ZXM6IFsnY29sdW1uJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3JvdycsICdyb3ctcmV2ZXJzZScsIG51bGxdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBwYWNrXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBwYWNrVmFsdWVzPVsnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsIG51bGxdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgcGFja1ZhbHVlczogWydjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgbnVsbF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHdyYXBcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHdyYXBWYWx1ZXM9Wydub3dyYXAnLCAnd3JhcCcsICd3cmFwLXJldmVyc2UnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHdyYXBWYWx1ZXM6IFsnbm93cmFwJywgJ3dyYXAnLCAnd3JhcC1yZXZlcnNlJ10sXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LkZsZXhib3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuRmxleGJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtZmxleGJveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtZmxleGJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6ICdjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgJ3N0cmV0Y2gnLCBudWxsXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhbGlnbl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ25fOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAnY29sdW1uJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3JvdycsICdyb3ctcmV2ZXJzZScsIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGRpcmVjdGlvbl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCBudWxsXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBwYWNrXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENTUyBjbGFzc05hbWUgcHJlZml4XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcHJlZml4PSduZW8tZmxleC0nXG4gICAgICAgICAqL1xuICAgICAgICBwcmVmaXg6ICduZW8tZmxleC0nLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiBub3dyYXAsIHdyYXAsIHdyYXByZXZlcnNlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gd3JhcF89J25vd3JhcCdcbiAgICAgICAgICovXG4gICAgICAgIHdyYXBfOiAnbm93cmFwJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNscyBhZnRlciBcImFsaWduXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFsaWduKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnYWxpZ24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNscyBhZnRlciBcImRpcmVjdGlvblwiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdkaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNscyBhZnRlciBcInBhY2tcIiBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UGFjayh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3BhY2snKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBDb250YWluZXIgQ1NTIGNscyBhZnRlciBcIndyYXBcIiBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXcmFwKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnd3JhcCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGZsZXggdmFsdWUgdG8gYW4gaXRlbSBvZiB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIGxldCBzdHlsZSA9IGl0ZW0ud3JhcHBlclN0eWxlO1xuXG4gICAgICAgIHN0eWxlLmZsZXggPSBzdHlsZS5mbGV4IHx8IGl0ZW0uZmxleCB8fCAodGhpcy5hbGlnbiA9PT0gJ3N0cmV0Y2gnID8gMSA6ICcwIDEgYXV0bycpO1xuICAgICAgICBpdGVtLndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgQ1NTIGNsYXNzZXMgdG8gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqL1xuICAgIGFwcGx5UmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHByZWZpeCAgICA9IG1lLnByZWZpeCxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GbGV4Ym94OiBhcHBseVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMgfHwgW10sIHByZWZpeCArICdjb250YWluZXInKTtcblxuICAgICAgICBpZiAobWUuYWxpZ24pIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICdhbGlnbi0nICsgbWUuYWxpZ24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICdkaXJlY3Rpb24tJyArIG1lLmRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLnBhY2spIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHByZWZpeCArICdwYWNrLScgKyBtZS5wYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUud3JhcCkge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgJ3dyYXAtJyArIG1lLndyYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJhbGlnblwiIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgYmVmb3JlU2V0QWxpZ24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2FsaWduVmFsdWVzJywgJ2FsaWduJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBuZXcgdmFsdWUgZm9yIFwiZGlyZWN0aW9uXCIgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREaXJlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2RpcmVjdGlvblZhbHVlcycsICdkaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJwYWNrXCIgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRQYWNrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdwYWNrVmFsdWVzJywgJ3BhY2snKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJ3cmFwXCIgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRXcmFwKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy50ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd3cmFwVmFsdWVzJywgJ3dyYXAnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBDU1MgcnVsZXMgZnJvbSBhbiBjb250YWluZXIgaXRlbSB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHN3aXRjaGluZyB0byBhIGRpZmZlcmVudCBsYXlvdXQuXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgbGV0IHN0eWxlID0gaXRlbS53cmFwcGVyU3R5bGUgfHwge307XG5cbiAgICAgICAgc3R5bGUuZmxleCA9IGl0ZW0uZmxleCB8fCBudWxsO1xuICAgICAgICBpdGVtLndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIENTUyBydWxlcyBmcm9tIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogR2V0cyBjYWxsZWQgd2hlbiBzd2l0Y2hpbmcgdG8gYSBkaWZmZXJlbnQgbGF5b3V0LlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgcHJlZml4ICAgID0gbWUucHJlZml4LFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkZsZXhib3g6IHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArICdjb250YWluZXInKTtcblxuICAgICAgICBpZiAobWUuYWxpZ24pIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArICdhbGlnbi0nICsgbWUuYWxpZ24pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArICdkaXJlY3Rpb24tJyArIG1lLmRpcmVjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLnBhY2spIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArICdwYWNrLScgKyBtZS5wYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUud3JhcCkge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ3dyYXAtJyArIG1lLndyYXApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgcHJvcGVydHlOYW1lIGlzIHZhbGlkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWxpZFZhbHVlc05hbWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvcGVydHlOYW1lXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICB0ZXN0SW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIHZhbGlkVmFsdWVzTmFtZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkVmFsdWVzID0gdGhpcy5nZXRTdGF0aWNDb25maWcodmFsaWRWYWx1ZXNOYW1lKTtcblxuICAgICAgICBpZiAoIU5lb0FycmF5Lmhhc0l0ZW0odmFsaWRWYWx1ZXMsIHZhbHVlKSkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKHRoaXMuY29udGFpbmVySWQsICctPiBsYXlvdXQ6IHN1cHBvcnRlZCB2YWx1ZXMgZm9yIFwiJyArIHByb3BlcnR5TmFtZSArICdcIiBhcmUnICwgdmFsaWRWYWx1ZXMpO1xuICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgcHJlZml4ICAgID0gbWUucHJlZml4LFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lciAmJiBjb250YWluZXIucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHByZWZpeCArIHByb3BlcnR5TmFtZSArICctJyArIG9sZFZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgcHJvcGVydHlOYW1lICsgJy0nICsgdmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGbGV4Ym94KTtcblxuZXhwb3J0IHtGbGV4Ym94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBGbGV4Ym94IGZyb20gJy4vRmxleGJveC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkhCb3hcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuRmxleGJveFxuICovXG5jbGFzcyBIQm94IGV4dGVuZHMgRmxleGJveCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuSEJveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5IQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1oYm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1oYm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uPSdyb3cnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbjogJ3JvdydcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgZmxleCB2YWx1ZSB0byBhbiBpdGVtIG9mIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgLy8gRG8gbm90IGFwcGx5IGZsZXggaWYgZml4ZWQgd2lkdGhcbiAgICAgICAgaWYgKCFpdGVtLndpZHRoKSB7XG4gICAgICAgICAgICBzdXBlci5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSEJveCk7XG5cbmV4cG9ydCB7SEJveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRmxleGJveCBmcm9tICcuL0ZsZXhib3gubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5WQm94XG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkZsZXhib3hcbiAqL1xuY2xhc3MgVkJveCBleHRlbmRzIEZsZXhib3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ubGF5b3V0LlZCb3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuVkJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYXlvdXQtdmJveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYXlvdXQtdmJveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpcmVjdGlvbj0nY29sdW1uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGZsZXggdmFsdWUgdG8gYW4gaXRlbSBvZiB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICBhcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKSB7XG4gICAgICAgIC8vIERvIG5vdCBhcHBseSBmbGV4IGlmIGZpeGVkIGhlaWdodFxuICAgICAgICBpZiAoIWl0ZW0uaGVpZ2h0KSB7XG4gICAgICAgICAgICBzdXBlci5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVkJveCk7XG5cbmV4cG9ydCB7VkJveCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9