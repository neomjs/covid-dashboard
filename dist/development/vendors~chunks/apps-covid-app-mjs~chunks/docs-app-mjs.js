self["webpackChunk"](["vendors~chunks/apps-covid-app-mjs~chunks/docs-app-mjs"],{

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
         *         domListeners.push(
         *             {mouseenter: me.onMouseEnter, scope: me},
         *             {mouseleave: me.onMouseLeave, scope: me}
         *         );
         *
         *        me.domListeners = domListeners;
         *    }
         *}
         */
        domListeners_: null,
        /**
         * Set this config to true to dynamically import a DropZone module & create an instance
         * @member {Boolean} droppable_=false
         */
        droppable_: false,
        /**
         * @member {Neo.draggable.DropZone|null} dropZone=null
         */
        dropZone: null,
        /**
         * @member {Object} dropZoneConfig=null
         */
        dropZoneConfig: null,
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
     * Triggered after the droppable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDroppable(value, oldValue) {
        let me = this;

        if (value && !me.dropZone) {
            __webpack_require__.e(/*! import() | src/draggable/DropZone-mjs.js */ "src/draggable/DropZone-mjs.js").then(__webpack_require__.bind(null, /*! ../draggable/DropZone.mjs */ "./node_modules/neo.mjs/src/draggable/DropZone.mjs")).then(module => {
                me.dropZone = Neo.create({
                    module : module.default,
                    appName: me.appName,
                    owner  : me,
                    ...me.dropZoneConfig || {}
                });
            });
        }
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
                __webpack_require__.e(/*! import() | src/tooltip/Base */ "src/tooltip/Base").then(__webpack_require__.bind(null, /*! ../tooltip/Base.mjs */ "./node_modules/neo.mjs/src/tooltip/Base.mjs")).then((module) => {
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
     *
     * @param {Object|String} opts
     * @returns {Neo.plugin.Base|null}
     */
    getPlugin(opts) {
        opts = typeof opts !== 'string' ? opts : {id: opts};

        let me = this,
            hasMatch;

        for (const plugin of me.plugins || []) {
            hasMatch = true;

            for (const key in opts) {
                if (plugin[key] !== opts[key]) {
                    hasMatch = false;
                    break;
                }
            }

            if (hasMatch) {
                return plugin;
            }
        }

        return null;
    }

    /**
     * Walks up the vdom tree and returns the closest theme found
     * @returns {String}
     */
    getTheme() {
        let me         = this,
            themeMatch = 'neo-theme-',
            app, mainView, parentNodes;

        for (const item of me.cls || []) {
            if (item.startsWith(themeMatch)) {
                return item;
            }
        }

        app      = Neo.apps[me.appName];
        mainView = app && app.mainViewInstance;

        if (mainView) {
            parentNodes = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].getParentNodes(mainView.vdom, me.id);

            for (const node of parentNodes || []) {
                for (const item of node.cls || []) {
                    if (item.startsWith(themeMatch)) {
                        return item;
                    }
                }
            }
        }

        return Neo.config.themes && Neo.config.themes[0];
    }

    /**
     * Search a vdom child node by id for a given vdom tree
     * @param {String} id
     * @param {Object} [vdom]
     * @returns {Object}
     */
    getVdomChild(id, vdom) {
        let node = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_10__["default"].findVdomChild(vdom || this.vdom, id);
        return node && node.vdom;
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
     * Specify a different vdom items root if needed (useful in case this container uses a wrapper node).
     * @returns {Object} The new vdom items root
     */
    getVdomItemsRoot() {
        return this.vdom.cn;
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

            me.promiseVdomUpdate().then(() => {
                me.fire('insert', {
                    index: index,
                    item : item
                });
            });
        }

        return item;
    }

    /**
     * Moves an existing item to a new index
     * @param {Number} fromIndex
     * @param {Number} toIndex
     * @returns {Neo.component.Base}
     */
    moveTo(fromIndex, toIndex) {
        let me   = this,
            item = me.items[fromIndex];

        if (fromIndex !== toIndex) {
            me.switchItems(me.items[toIndex].id, item.id);
        }

        return item;
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
         * @member {String[]} cls=['neo-panel','neo-container']
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
        },
        /**
         * @member {Boolean} sortable_=false
         */
        sortable_: false,
        /**
         * @member {Neo.draggable.toolbar.SortZone|null} sortZone=null
         */
        sortZone: null,
        /**
         * @member {Object} sortZoneConfig=null
         */
        sortZoneConfig: null
    }}

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
     * Triggered after the sortable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSortable(value, oldValue) {
        let me = this;

        if (value && !me.sortZone) {
            Promise.all(/*! import() | src/draggable/toolbar/SortZone-mjs.js */[__webpack_require__.e("vendors~src/draggable/list/DragZone-mjs.js~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/drag~e3af9737"), __webpack_require__.e("vendors~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/draggable/toolbar/SortZone-mjs.js")]).then(__webpack_require__.bind(null, /*! ../draggable/toolbar/SortZone.mjs */ "./node_modules/neo.mjs/src/draggable/toolbar/SortZone.mjs")).then(module => {
                me.sortZone = Neo.create({
                    module             : module.default,
                    appName            : me.appName,
                    boundaryContainerId: me.id,
                    owner              : me,
                    ...me.sortZoneConfig || {}
                });
            });
        }
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

    /**
     *
     */
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

/***/ "./node_modules/neo.mjs/src/controller/Component.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/controller/Component.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/controller/Base.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");
/* harmony import */ var _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/DomEvent.mjs */ "./node_modules/neo.mjs/src/manager/DomEvent.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");
/* harmony import */ var _util_Function_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Function.mjs */ "./node_modules/neo.mjs/src/util/Function.mjs");






/**
 * @class Neo.controller.Component
 * @extends Neo.controller.Base
 */
class Component extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.controller.Component'
         * @protected
         */
        className: 'Neo.controller.Component',
        /**
         * @member {String} ntype='view-controller'
         * @protected
         */
        ntype: 'component-controller',
        /**
         * @member {Object} references=null
         * @protected
         */
        references: null,
        /**
         * @member {Object} view_=null
         * @protected
         */
        view_: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.references = {};

        _util_Function_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].createSequence(me.view, 'onConstructed', me.onViewConstructed, me);
    }

    /**
     * Triggered when accessing the view config
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    beforeGetView(value, oldValue) {
        return Neo.get(value);
    }

    /**
     * Triggered before the view config gets changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    beforeSetView(value, oldValue) {
        return value.id;
    }

    /**
     *
     * @param {String} [ntype]
     * @returns {Neo.controller.Component|null}
     */
    getParent(ntype) {
        let me      = this,
            view    = me.view,
            parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(view),
            i       = 0,
            len     = parents.length,
            controller;

        for (; i < len; i++) {
            controller = parents[i].controller;

            if (controller) {
                if (ntype) {
                    if (ntype === controller.ntype) {
                        return controller;
                    }
                } else {
                    return controller;
                }
            }
        }

        return null;
    }

    /**
     *
     * @param {String} handlerName
     * @returns {Neo.controller.Component|null}
     */
    getParentHandlerScope(handlerName) {
        let me      = this,
            view    = me.view,
            parents = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getParents(view),
            i       = 0,
            len     = parents.length,
            controller;

        for (; i < len; i++) {
            controller = parents[i].controller;

            if (controller && controller[handlerName]) {
                return controller;
            }
        }

        return null;
    }

    /**
     * todo: cleanup no longer existing references
     * todo: update changed references (e.g. container.remove() then container.add() using the same key)
     * @param {String} name
     * @returns {*}
     */
    getReference(name) {
        let me          = this,
            componentId = me.references[name],
            component;

        if (componentId) {
            component = Neo.getComponent(componentId);
        }

        if (!component) {
            component = me.view.down({reference: name});

            if (component) {
                me.references[name] = component.id;
            }
        }

        return component || null;
    }

    /**
     *
     * @param {Neo.component.Base} view
     */
    onViewConstructed(view) {
        let me        = this,
            childCall = !!view,
            domListeners, eventHandler, fn, parentController;

        view = view || me.view;

        view.domListeners = Neo.clone(view.domListeners, true, true); // ensure there is no interference on prototype level
        domListeners = view.domListeners;

        if (domListeners) {
            if (!Array.isArray(domListeners)) {
                domListeners = [domListeners];
            }

            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    eventHandler = null;

                    if (key !== 'scope' && key !== 'delegate') {
                        if (Neo.isString(value)) {
                            eventHandler = value;
                        } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                            eventHandler = value.fn;
                        }

                        if (eventHandler) {
                            if (!me[eventHandler]) {
                                parentController = me.getParentHandlerScope(eventHandler);

                                if (!parentController) {
                                    _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown domEvent handler for', view, eventHandler);
                                } else {
                                    fn               = parentController[eventHandler].bind(parentController);
                                    domListener[key] = fn;

                                    _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateListenerPlaceholder({
                                        componentId       : view.id,
                                        eventHandlerMethod: fn,
                                        eventHandlerName  : eventHandler,
                                        eventName         : key,
                                        scope             : parentController
                                    });
                                }
                            } else {
                                fn               = me[eventHandler].bind(me);
                                domListener[key] = fn;

                                _manager_DomEvent_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].updateListenerPlaceholder({
                                    componentId       : view.id,
                                    eventHandlerMethod: fn,
                                    eventHandlerName  : eventHandler,
                                    eventName         : key,
                                    scope             : me
                                });
                            }
                        }
                    }
                });
            });
        }

        if (view.listeners) {
            Object.entries(view.listeners).forEach(([name, listener]) => {
                if (Array.isArray(listener)) {
                    listener.forEach(key => {
                        eventHandler = null;

                        if (Neo.isObject(key) && key.hasOwnProperty('fn') && Neo.isString(key.fn)) {
                            eventHandler = key.fn;

                            if (!me[eventHandler]) {
                                _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown event handler for', view, eventHandler);
                            } else {
                                key.fn = me[eventHandler].bind(me);
                            }
                        }
                    });
                }
            });
        }

        if (view.items) {
            view.items.forEach(item => {
                if (!item.controller) {
                    me.onViewConstructed(item);
                }
            });
        }

        if (!childCall) {
            me.onViewParsed();
        }
    }

    /**
     * Override this method inside your view controllers as a starting point in case you need references
     * (instead of using onConstructed() inside your controller)
     */
    onViewParsed() {

    }

    /**
     *
     * @param {Object} config
     */
    parseConfig(config) {
        let me           = this,
            view         = config || me.view,
            domListeners = view.domListeners,
            eventHandler;

        if (domListeners) {
            if (!Array.isArray(domListeners)) {
                domListeners = [domListeners];
            }

            domListeners.forEach(domListener => {
                Object.entries(domListener).forEach(([key, value]) => {
                    eventHandler = null;

                    if (key !== 'scope' && key !== 'delegate') {
                        if (Neo.isString(value)) {
                            eventHandler = value;
                        } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                            eventHandler = value.fn;
                        }

                        if (eventHandler) {
                            if (!me[eventHandler]) {
                                _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown domEvent handler for', view, eventHandler);
                            } else {console.log('#', key, me.id);
                                console.log('parseConfig', eventHandler);
                                domListener[key] = me[eventHandler].bind(me);
                            }
                        }
                    }
                });
            });
        }

        if (view.listeners) {
            Object.entries(view.listeners).forEach(([key, value]) => {
                eventHandler = null;

                if (key !== 'scope' && key !== 'delegate') {
                    if (Neo.isString(value)) {
                        eventHandler = value;
                    } else if (Neo.isObject(value) && value.hasOwnProperty('fn') && Neo.isString(value.fn)) {
                        eventHandler = value.fn;
                    }

                    if (eventHandler) {
                        if (!me[eventHandler]) {
                            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].logError('Unknown event handler for', view, eventHandler);
                        } else {
                            view.listeners[key] = me[eventHandler].bind(me);
                        }
                    }
                }
            });
        }

        if (view.headers) {
            view.headers.forEach(header => {
                if (!header.controller) {
                    me.parseConfig(header);
                }
            });
        }

        if (view.items) {
            view.items.forEach(item => {
                if (!item.controller) {
                    me.parseConfig(item);
                }
            });
        }
    }
}

Neo.applyClassConfig(Component);



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

/***/ "./node_modules/neo.mjs/src/list/Base.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/list/Base.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _selection_ListModel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection/ListModel.mjs */ "./node_modules/neo.mjs/src/selection/ListModel.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");






/**
 * @class Neo.list.Base
 * @extends Neo.component.Base
 */
class Base extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.list.Base'
         * @protected
         */
        className: 'Neo.list.Base',
        /**
         * @member {String} ntype='list'
         * @protected
         */
        ntype: 'list',
        /**
         * True will destroy the used collection / store when the component gets destroyed
         * @member {Boolean} autoDestroyStore=true
         */
        autoDestroyStore: true,
        /**
         * @member {String[]} cls=['neo-list-container','neo-list']
         */
        cls: ['neo-list-container', 'neo-list'],
        /**
         * @member {Boolean} disableSelection_=false
         */
        disableSelection_: false,
        /**
         * @member {String} displayField='name'
         */
        displayField: 'name',
        /**
         * @member {Boolean} draggable_=false
         */
        draggable_: false,
        /**
         * @member {Neo.draggable.list.DragZone|null} dragZone=null
         */
        dragZone: null,
        /**
         * @member {Object} dragZoneConfig=null
         */
        dragZoneConfig: null,
        /**
         * @member {Boolean} highlightFilterValue=true
         */
        highlightFilterValue: true,
        /**
         * @member {String} itemCls='neo-list-item'
         */
        itemCls: 'neo-list-item',
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * Either pass a selection.Model module, an instance or a config object
         * @member {Object|Neo.selection.Model} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * Set this to true in case a select event should only update _vdom (e.g. when used inside a form.field.Select
         * @member {Boolean} silentSelect=false
         */
        silentSelect: false,
        /**
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null,
        /**
         * True will add a checkbox in front of each list item
         * @member {Boolean} stacked_=true
         */
        useCheckBoxes_: false,
        /**
         * @member {Object} _vdom={tag:'ul',cn:[]}
         */
        _vdom: {
            tag: 'ul',
            cn : []
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.domListeners;

        domListeners.push({
            click: {fn: me.onClick, scope: me}
        });

        me.domListeners = domListeners;
    }

    onConstructed() {
        super.onConstructed();

        let me = this;

        if (me.selectionModel) {
            me.selectionModel.register(me);
        }
    }

    /**
     * Triggered after the disableSelection config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDisableSelection(value, oldValue) {
        let me = this;

        if (value && me.rendered && me.selectionModel) {
            me.selectionModel.deselectAll();
        }
    }

    /**
     * Triggered after the draggable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDraggable(value, oldValue) {
        let me = this;

        if (value && !me.dragZone) {
            Promise.all(/*! import() | src/draggable/list/DragZone-mjs.js */[__webpack_require__.e("vendors~src/draggable/list/DragZone-mjs.js~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/drag~e3af9737"), __webpack_require__.e("src/draggable/list/DragZone-mjs.js")]).then(__webpack_require__.bind(null, /*! ../draggable/list/DragZone.mjs */ "./node_modules/neo.mjs/src/draggable/list/DragZone.mjs")).then(module => {
                me.dragZone = Neo.create({
                    module : module.default,
                    appName: me.appName,
                    owner  : me,
                    ...me.dragZoneConfig || {}
                });
            });
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
        }
    }

    /**
     * Triggered after the store config got changed
     * @param {Neo.data.Store} value
     * @param {Neo.data.Store} oldValue
     * @protected
     */
    afterSetStore(value, oldValue) {
        let me = this;

        if (value) {
            value.on({
                filter: me.onStoreFilter,
                load  : me.onStoreLoad,
                scope : me
            });

            if (value.getCount() > 0) {
                me.onStoreLoad();
            }
        }
    }

    /**
     * Triggered after the useCheckBoxes config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseCheckBoxes(value, oldValue) {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][value ? 'add' : 'remove'](cls, 'neo-use-checkicons');
        me.cls = cls;
    }

    /**
     * Triggered before the selectionModel config gets changed.
     * @param {Neo.selection.Model} value
     * @param {Neo.selection.Model} oldValue
     * @returns {Neo.selection.Model}
     * @protected
     */
    beforeSetSelectionModel(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_ListModel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"]);
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store} value
     * @param {Object|Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value);
    }

    /**
     * Override this method for custom list items
     * @param {Object} record
     * @returns {Object} The list item object
     */
    createItem(record) {
        let me          = this,
            itemContent = me.createItemContent(record);

        const item = {
            tag     : 'li',
            cls     : [me.itemCls],
            id      : me.getItemId(record[me.getKeyProperty()]),
            tabIndex: -1
        };

        item[typeof itemContent === 'string' ? 'html' : 'cn'] = itemContent;

        return item;
    }

    /**
     * Override this method for custom renderers
     * @param {Object} record
     * @returns {Object[]|String} Either an vdom cn array or a html string
     */
    createItemContent(record) {
        let me       = this,
            itemText = record[this.displayField],
            filter;

        if (me.highlightFilterValue) {
            filter = me.store.getFilter(me.displayField);

            if (filter && filter.value !== null && filter.value !== '') {
                itemText = itemText.replace(new RegExp(filter.value, 'gi'), function(match) {
                    return '<span class="neo-highlight-search">' + match + '</span>';
                });
            }
        }

        return itemText;
    }

    /**
     * @param {Boolean} [silent=false]
     */
    createItems(silent=false) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn = [];

        me.store.items.forEach(item => {
            vdom.cn.push(me.createItem(item));
        });

        if (silent) {
            me._vdom = vdom;
        } else {
            me.promiseVdomUpdate().then(() => {
                me.fire('createItems');
            });
        }
    }

    /**
     *
     */
    destroy() {
        let me = this;

        if (me.selectionModel) {
            me.selectionModel.destroy();
        }

        if (me.store && me.autoDestroyStore) {
            me.store.destroy();
        }

        super.destroy();
    }

    /**
     * Calls focus() on the top level DOM node of this component or on a given node via id
     * @param {String} [id]
     */
    focus(id) {
        super.focus(id);

        if (id) {
            // remote method access
            Neo.main.DomAccess.scrollIntoView({
                behavior: 'auto',
                id      : id || this.id
            });
        }
    }

    /**
     *
     * @param {Number|String} id
     * @returns {String}
     */
    getItemId(id) {
        return this.id + '__' + id;
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {String|Number} itemId
     */
    getItemRecordId(vnodeId) {
        let itemId   = vnodeId.split('__')[1],
            model    = this.store.model,
            keyField = model && model.getField(model.keyProperty);

        if (keyField && (keyField.type.toLowerCase() === 'integer' || keyField.type.toLowerCase() === 'number')) {
            itemId = parseInt(itemId);
        }

        return itemId;
    }

    /**
     * Support collections & stores
     * @returns {String}
     */
    getKeyProperty() {
        return this.store.keyProperty || this.store.model.keyProperty;
    }

    /**
     *
     * @param {Object} data
     */
    onClick(data) {
        let me = this;

        if (data.path[0].id === me.id) {
            me.onContainerClick(data);
        }  else if (data.path[0].cls.includes(me.itemCls)) {
            me.onItemClick(data);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onContainerClick(data) {
        /**
         * The containerClick event fires when a click occurs on the component, but not on a list item
         * @event containerClick
         * @param {String[]} cls the classList of the target node (converted to an array)
         * @param {String} id the target dom id
         * @param {String[]} path the event path
         * @returns {Object}
         */
        this.fire('containerClick', data);
    }

    /**
     *
     * @param {Object} data
     */
    onItemClick(data) {
        let me     = this,
            nodeId = data.path[0].id;

        if (!me.disableSelection && me.selectionModel) {
            me.selectionModel.select(nodeId);
        }

        /**
         * The itemClick event fires when a click occurs on a list item
         * @event itemClick
         * @param {String} id the record matching the list item
         * @returns {Object}
         */
        me.fire('itemClick', me.store.get(me.getItemRecordId(nodeId)));
    }

    /**
     *
     */
    onStoreFilter() {
        this.createItems();
    }

    /**
     *
     */
    onStoreLoad() {
        let me = this;

        if (!me.mounted && me.rendering) {
            const listenerId = me.on('rendered', () => {
                me.un('rendered', listenerId);
                me.createItems();
            });
        } else {
            me.createItems();
        }
    }

    /**
     * Convenience shortcut
     * @param {Number} index
     */
    selectItem(index) {
        let me = this;

        if (!me.disableSelection && me.selectionModel) {
            me.selectionModel.selectAt(index);
        }
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/ListModel.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/ListModel.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");


/**
 * @class Neo.selection.ListModel
 * @extends Neo.selection.Model
 */
class ListModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.ListModel'
         * @protected
         */
        className: 'Neo.selection.ListModel',
        /**
         * @member {String} ntype='selection-listmodel'
         * @protected
         */
        ntype: 'selection-listmodel',
        /**
         * @member {Boolean} stayInList=true
         */
        stayInList: true
    }}

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        if (!this.view.disableSelection) {
            this.onNavKey(data, 1);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onKeyDownUp(data);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onKeyDownDown(data);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        if (!this.view.disableSelection) {
            this.onNavKey(data, -1);
        }
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKey(data, step) {
        let me               = this,
            item             = data.path[0],
            view             = me.view,
            store            = view.store,
            maxItems         = store.getCount(),
            preventSelection = false,
            index, itemId, record, recordId;

        if (item.cls.includes(view.itemCls)) {
            recordId = view.getItemRecordId(item.id);
            index    = store.indexOf(recordId) + step;

            if (index < 0) {
                if (me.stayInList) {
                    index = maxItems - 1;
                } else {
                    preventSelection = true;
                    view.fire('selectPreFirstItem');
                }
            } else if (index >= maxItems) {
                if (me.stayInList) {
                    index = 0;
                } else {
                    preventSelection = true;
                    view.fire('selectPostLastItem');
                }
            }
        } else {
            index = 0;
        }

        if (!preventSelection) {
            record = store.getAt(index);
            itemId = view.getItemId(record[me.view.getKeyProperty()]);

            me.select(itemId);
            view.focus(itemId);
            view.fire('itemNavigate', record);
        } else {
            me.deselectAll();
        }
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
     * @param {Number} index
     */
    selectAt(index) {
        let view      = this.view,
            recordKey = view.store.getKeyAt(index),
            itemId    = recordKey && view.getItemId(recordKey);

        if (itemId) {
            this.select(itemId);
            view.focus(itemId);
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

Neo.applyClassConfig(ListModel);



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
/* harmony import */ var _header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/Button.mjs */ "./node_modules/neo.mjs/src/tab/header/Button.mjs");
/* harmony import */ var _header_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Toolbar.mjs */ "./node_modules/neo.mjs/src/tab/header/Toolbar.mjs");
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
         * @protected
         * @static
         */
        tabBarPositions: ['top', 'right', 'bottom', 'left']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.Container'
         * @protected
         */
        className: 'Neo.tab.Container',
        /**
         * @member {String} ntype='tab-container'
         * @protected
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
         * @member {String[]} cls=['neo-tab-container'],
         * @protected
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
        /*
         * Remove the DOM of inactive cards (TabContainer Body).
         * This will keep the instances & vdom trees
         * @member {Boolean} removeInactiveCards=true
         */
        removeInactiveCards: true,
        /**
         * true enables sorting tabs via drag&drop.
         * The config gets passed to the header toolbar
         * @member {Boolean} sortable_=false
         */
        sortable_: false,
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
     * @protected
     */
    afterSetActiveIndex(value, oldValue) {
        if (oldValue !== undefined) {
            let me            = this,
                cardContainer = Neo.getComponent(me.cardContainerId);

            if (cardContainer && value > -1) {
                me.updateTabButtons();

                cardContainer.layout.activeIndex = value;

                me.fire('activeIndexChange', {
                    oldValue: oldValue,
                    value   : value
                });
            }
        }
    }

    /**
     * Triggered after the plain config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetPlain(value, oldValue) {
        let me      = this,
            baseCls = me.baseCls,
            cls     = me.cls || [];

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"][value ? 'unshift' : 'remove'](cls, baseCls + '-plain');
        me.cls = cls;
    }

    /**
     * Triggered after the sortable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSortable(value, oldValue) {
        if (oldValue !== undefined) {
            this.getTabBar().sortable = value;
        }
    }

    /**
     * Triggered after the tabBarPosition config got changed
     * @param {String} value 'top', 'right', 'bottom', 'left'
     * @param {String} oldValue 'top', 'right', 'bottom', 'left'
     * @protected
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
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (oldValue !== undefined) {
            this.getTabBar()  .useActiveTabIndicator = value;
            this.getTabStrip().useActiveTabIndicator = value;
        }
    }

    /**
     * Triggered before the tabBarPosition config gets changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     * @returns {String} value
     */
    beforeSetTabBarPosition(value, oldValue) {
        return this.beforeSetEnumValue(value, oldValue, 'tabBarPosition');
    }

    /**
     *
     * @protected
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

            if (!(item instanceof Neo.component.Base)) {
                item = {...me.itemDefaults, flex: 1, isTab:true, ...item};
            }

            tabComponents.push(item);
        });

        me.items = [{
            module               : _header_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            dock                 : me.tabBarPosition,
            flex                 : 'none',
            id                   : me.tabBarId,
            items                : tabButtons,
            sortable             : me.sortable,
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
            layout               : {ntype: 'card', activeIndex: me.activeIndex, removeInactiveCards: me.removeInactiveCards},
            useActiveTabIndicator: me.useActiveTabIndicator,
            ...me.contentContainerDefaults || {}
        }];

        me.itemDefaults = null;

        super.createItems();
    }

    /**
     * Returns the card matching this.activeIndex
     * @returns {Neo.component.Base|null}
     */
    getActiveCard() {
        return this.getCardContainer().items[this.activeIndex] || null;
    }

    /**
     * Returns a card by a given index
     * @param {Number} index
     * @returns {Neo.component.Base|null}
     */
    getCard(index) {
        return this.getCardContainer().items[index] || null;
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
     * @protected
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
     *
     * @param {Number} index
     * @returns {Neo.tab.header.Button|null}
     */
    getTabAtIndex(index) {
        return this.getTabBar().items[index] || null;
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
     * @protected
     */
    getTabButtonConfig(config, index) {
        let me = this,
            defaultConfig = {
                module : _header_Button_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                flex   : 'none',
                index  : index,
                pressed: me.activeIndex === index,

                domListeners: [{
                    click: function(data) {
                        me.activeIndex = data.component.index;
                    },
                    scope: me
                }]
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
            i, len, superItem, tab, tabButtonConfig;

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
        }

        if (!hasItem) {
            tabButtonConfig = item.tabButtonConfig;

            tab = tabBar.insert(index, me.getTabButtonConfig(tabButtonConfig, index));

            // todo: non index based matching of tab buttons and cards
            i   = 0;
            len = tabBar.items.length;

            for (; i < len; i++) {
                tabBar.items[i].index = i;

            }

            item.flex = 1;
            superItem = cardContainer.insert(index, item);

            if (me.activateInsertedTabs) {
                if (!me.vnode) {
                    me.activeIndex = index;
                } else {
                    tab.on('mounted', me.onTabButtonMounted, me);
                }
            }
        }

        return superItem
    }

    /**
     * Moves an existing item to a new index
     * @param {Number} fromIndex
     * @param {Number} toIndex
     * @returns {Neo.component.Base} the card item
     */
    moveTo(fromIndex, toIndex) {
        let me            = this,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            activeTab     = tabBar.items[me.activeIndex],
            index, returnValue;

        tabBar.moveTo(fromIndex, toIndex);
        index = activeTab.index;

        if (index !== me.activeIndex) {
            // silent updates
            me._activeIndex = index;
            cardContainer.layout._activeIndex = index;
        }

        returnValue = cardContainer.moveTo(fromIndex, toIndex);

        me.fire('moveTo', {
            fromIndex: fromIndex,
            toIndex  : toIndex
        });

        return returnValue;
    }

    /**
     * Gets triggered once a dynamically added header.Button gets mounted
     * in case activateInsertedTabs is set to true
     * @param {String} buttonId
     * @protected
     */
    onTabButtonMounted(buttonId) {
        let me            = this,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            i             = 0,
            len           = tabBar.items.length,
            index         = -1,
            card, listenerId;

        for (; i < len; i++) {
            if (tabBar.items[i].id === buttonId) {
                index = i;
                break;
            }
        }

        if (index > -1) {
            card = cardContainer.items[index];

            if (me.vnode && !card.mounted) {
                listenerId = card.on('mounted', () => {
                    card.un('mounted', listenerId);
                    me.activeIndex = index;
                });
            } else {
                me.activeIndex = index;
            }
        }
    }

    /**
     * Removes a container item by reference
     * @param {Neo.component.Base} component
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    remove(component, destroyItem=true, silent=false) {
        let items = [...this.getCardContainer().items],
            i     = 0,
            len   = items.length;

        for (; i < len; i++) {
            if (items[i].id === component.id) {
                this.removeAt(i, destroyItem, silent);
            }
        }
    }

    /**
     *
     * @param {Number} index
     * @param {Boolean} [destroyItem=true]
     * @param {Boolean} [silent=false]
     */
    removeAt(index, destroyItem=true, silent=false) {
        let me            = this,
            activeIndex   = me.activeIndex,
            cardContainer = me.getCardContainer(),
            tabBar        = me.getTabBar(),
            i, len;

        cardContainer.removeAt(index, destroyItem, silent);
        tabBar       .removeAt(index, true,        false);

        if (index < activeIndex) {
            // silent updates
            me._activeIndex = activeIndex - 1;
            cardContainer.layout._activeIndex = activeIndex - 1;
        } else if (index === activeIndex) {
            me.activeIndex = activeIndex - 1;
        }

        // todo: non index based matching of tab buttons and cards
        i   = 0;
        len = tabBar.items.length;

        for (; i < len; i++) {
            tabBar.items[i].index = i;
        }
    }

    /**
     *
     * @protected
     */
    updateTabButtons() {
        let me          = this,
            activeIndex = me.activeIndex,
            tabButtons  = me.getTabBar().items || [];

        tabButtons.forEach((item, index) => {
            item.pressed = index === activeIndex;
        });
    }
}

Neo.applyClassConfig(Container);



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
         * @protected
         */
        className: 'Neo.tab.Strip',
        /**
         * @member {String} ntype='tab-strip'
         * @protected
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
            activeIndexChange: me.getActiveTabRectThenMove,
            scope            : me
        });
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (oldValue !== undefined) {
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
    }

    /**
     * @param {Object|null} opts
     * @param {Number} opts.oldValue
     * @param {Number} opts.value
     * Gets the DomRect of the active tab, then moves the indicator
     */
    getActiveTabRectThenMove(opts) {
        let me           = this,
            ids          = [],
            tabContainer = me.getTabContainer();

        if (me.vnode) {
            if (opts) {
                ids.push(tabContainer.getTabAtIndex(opts.value), tabContainer.getTabAtIndex(opts.oldValue));
            } else {
                ids.push(tabContainer.getTabAtIndex(tabContainer.activeIndex));
            }

            ids = ids.map(e => e && e.id).filter(Boolean);

            if (me.useActiveTabIndicator) {
                Neo.main.DomAccess.getBoundingClientRect({
                    id: ids
                }).then(data => {
                    me.moveActiveIndicator(data);
                });
            }
        }
    }

    /**
     *
     */
    getTabContainer() {
        return Neo.getComponent(this.tabContainerId);
    }

    /**
     * Can either contain the new target rect or the new and old one
     * @param {Object[]} rects
     * @param {Number} rects[0].bottom
     * @param {Number} rects[0].height
     * @param {Number} rects[0].left
     * @param {Number} rects[0].right
     * @param {Number} rects[0].top
     * @param {Number} rects[0].width
     * @param {Number} rects[0].x
     * @param {Number} rects[0].y
     */
    moveActiveIndicator(rects) {
        let me   = this,
            rect = rects[1] || rects[0],
            activeTabIndicator, tabContainer, vdom;

        if (me.useActiveTabIndicator) {
            vdom               = me.vdom;
            activeTabIndicator = vdom.cn[0];
            tabContainer       = me.getTabContainer();

            switch (tabContainer.tabBarPosition) {
                case 'bottom':
                case 'top':
                    activeTabIndicator.style = {
                        height: null,
                        left  : `${rect.left}px`,
                        top   : null,
                        width : `${rect.width}px`
                    };
                    break;
                case 'left':
                case 'right':
                    activeTabIndicator.style = {
                        height: `${rect.height}px`,
                        left  : null,
                        top   : `${rect.top}px`,
                        width : null
                    };
                    break;
            }

            // in case there is a dynamic change (oldValue), call this method again
            if (rects[1]) {
                activeTabIndicator.style.opacity = 0;
                me.vdom = vdom;

                setTimeout(() => {
                    me.moveActiveIndicator([rects[0]]);
                }, 50)
            } else {
                activeTabIndicator.style.opacity = 1;
                me.vdom = vdom;

                setTimeout(() => {
                    activeTabIndicator.style.opacity = 0;
                    me.vdom = vdom;
                }, 300);
            }
        }
    }
}

Neo.applyClassConfig(Strip);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/header/Button.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/header/Button.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");


/**
 * @class Neo.tab.header.Button
 * @extends Neo.button.Base
 */
class Button extends _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.header.Button'
         * @protected
         */
        className: 'Neo.tab.header.Button',
        /**
         * @member {String} ntype='tab-header-button'
         * @protected
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
     * @protected
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

Neo.applyClassConfig(Button);



/***/ }),

/***/ "./node_modules/neo.mjs/src/tab/header/Toolbar.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/tab/header/Toolbar.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");


/**
 * @class Neo.tab.header.Toolbar
 * @extends Neo.container.Toolbar
 */
class Toolbar extends _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.tab.header.Toolbar'
         * @protected
         */
        className: 'Neo.tab.header.Toolbar',
        /**
         * @member {String} ntype='tab-header-toolbar'
         * @protected
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
     * Triggered after the sortable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetSortable(value, oldValue) {
        let me = this;

        if (value && !me.sortZone) {
            Promise.all(/*! import() | src/draggable/tab/header/toolbar/SortZone-mjs.js */[__webpack_require__.e("vendors~src/draggable/list/DragZone-mjs.js~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/drag~e3af9737"), __webpack_require__.e("vendors~src/draggable/tab/header/toolbar/SortZone-mjs.js~src/draggable/toolbar/SortZone-mjs.js"), __webpack_require__.e("src/draggable/tab/header/toolbar/SortZone-mjs.js")]).then(__webpack_require__.bind(null, /*! ../../draggable/tab/header/toolbar/SortZone.mjs */ "./node_modules/neo.mjs/src/draggable/tab/header/toolbar/SortZone.mjs")).then(module => {
                me.sortZone = Neo.create({
                    module             : module.default,
                    appName            : me.appName,
                    boundaryContainerId: me.id,
                    owner              : me,
                    ...me.sortZoneConfig || {}
                });
            });
        }
    }

    /**
     * Triggered after the useActiveTabIndicator config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseActiveTabIndicator(value, oldValue) {
        if (oldValue !== undefined) {
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
     * @protected
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
     * @protected
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

    /**
     * Moves an existing item to a new index
     * @param {Number} fromIndex
     * @param {Number} toIndex
     * @returns {Neo.component.Base}
     */
    moveTo(fromIndex, toIndex) {
        let returnValue = super.moveTo(fromIndex, toIndex);

        if (fromIndex !== toIndex) {
            this.items.forEach((item, index) => {
                item.index = index;
            });
        }

        return returnValue;
    }
}

Neo.applyClassConfig(Toolbar);



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

/***/ "./node_modules/neo.mjs/src/util/Function.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Function.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Function
 * @extends Neo.core.Base
 */
class NeoFunction extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Function'
         * @protected
         */
        className: 'Neo.util.Function'
    }}

    /**
     * Append args instead of prepending them
     * @param {Object} scope
     * @returns {Function}
     */
    static bindAppend(scope) {
        const fn   = this,
              args = [].slice.call(arguments).slice(1);

        return function() {
            return fn.apply(scope, [].slice.call(arguments).concat(args));
        }
    }

    /**
     *
     * @param {Neo.core.Base} target
     * @param {String} methodName
     * @param {Function} fn
     * @param {Object} scope
     * @returns {Function}
     */
    static createSequence(target, methodName, fn, scope) {
        let method = target[methodName] || Neo.emptyFn;

        return (target[methodName] = function() {
            method.apply(this, arguments);
            return fn.apply(scope || this, arguments);
        });
    }

    /**
     *
     * @param {Neo.core.Base} target
     * @param {String} methodName
     * @param {Function} fn
     * @param {Object} scope
     * @returns {Function}
     */
    static intercept(target, methodName, fn, scope) {
        let method = target[methodName] || Neo.emptyFn;

        return (target[methodName] = function() {
            let returnValue = fn.apply(scope || this, arguments);
            method.apply(this, arguments);

            return returnValue;
        });
    }
}

Neo.applyClassConfig(NeoFunction);

/* harmony default export */ __webpack_exports__["default"] = (NeoFunction);

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvYnV0dG9uL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbXBvbmVudC9MYWJlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2NvbnRhaW5lci9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1Rvb2xiYXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250cm9sbGVyL0NvbXBvbmVudC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2RhdGEvTW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1JlY29yZEZhY3RvcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kYXRhL1N0b3JlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9CYXNlLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9UZXh0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvQ2xlYXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9DYXJkLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0ZpdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xheW91dC9GbGV4Ym94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvbGF5b3V0L0hCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9sYXlvdXQvVkJveC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xpc3QvQmFzZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3NlbGVjdGlvbi9MaXN0TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vTW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL1N0cmlwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFiL2hlYWRlci9CdXR0b24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWIvaGVhZGVyL1Rvb2xiYXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0NsYXNzU3lzdGVtLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9GdW5jdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvS2V5TmF2aWdhdGlvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvT2JqZWN0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9TdHlsZS5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ0o7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxv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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBOztBQUVlLHdFQUFTLEU7Ozs7Ozs7Ozs7OztBQ25DeEI7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0RBQUk7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUsb0VBQUssRSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcC1tanN+Y2h1bmtzL2RvY3MtYXBwLW1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uYnV0dG9uLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGljb25Qb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gaWNvblBvc2l0aW9ucz1bJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvblBvc2l0aW9uczogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmJ1dHRvbi5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uYnV0dG9uLkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2J1dHRvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWJ1dHRvbiddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbiddLFxuICAgICAgICAvKipcbiAgICAgICAgICogZmFsc2UgY2FsbHMgTmVvLk1haW4uc2V0Um91dGUoKVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBlZGl0Um91dGU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZWRpdFJvdXRlOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIGRvbUxpc3RlbmVycz17Y2xpY2s6aGFuZGxlcn1cbiAgICAgICAgICogQSBzdHJpbmcgYmFzZWQgdmFsdWUgYXNzdW1lcyB0aGF0IHRoZSBoYW5kbGVyRm4gbGl2ZXMgaW5zaWRlIGEgQ29tcG9uZW50Q29udHJvbGxlclxuICAgICAgICAgKiBAbWVtYmVyIHtGdW5jdGlvbnxTdHJpbmd8bnVsbH0gaGFuZGxlcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGFuZGxlcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgKHRoaXMgcG9pbnRlcikgaW5zaWRlIHRoZSBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBQb2ludHMgdG8gdGhlIGJ1dHRvbiBpbnN0YW5jZSBieSBkZWZhdWx0LlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gaGFuZGxlclNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhhbmRsZXJTY29wZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBDU1MgY2xhc3MgdG8gdXNlIGZvciBhbiBpY29uLCBlLmcuICdmYSBmYS1ob21lJ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gW2ljb25DbHNfPW51bGxdXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb2xvciB0byB1c2UgZm9yIGFuIGljb24sIGUuZy4gJyNmZjAwMDAnIFtvcHRpb25hbF1cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25Db2xvcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNvbG9yXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgaWNvbiBpbiBjYXNlIGljb25DbHMgaGFzIGEgdmFsdWUuXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBhcmU6ICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWNvblBvc2l0aW9uXz0nbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25Qb3NpdGlvbl86ICdsZWZ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcmVzc2VkIHN0YXRlIG9mIHRoZSBCdXR0b25cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcHJlc3NlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHByZXNzZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoYW5nZSB0aGUgYnJvd3NlciBoYXNoIHZhbHVlIG9uIGNsaWNrXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSByb3V0ZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcm91dGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRleHQgZGlzcGxheWVkIG9uIHRoZSBidXR0b24gW29wdGlvbmFsXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRleHRfPScnXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0XzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcmFuc2Zvcm1zIHRoZSBidXR0b24gdGFnIGludG8gYW4gYSB0YWcgW29wdGlvbmFsXVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gdXJsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1cmxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdXJsIGlzIHNldCwgYXBwbGllcyB0aGUgdGFyZ2V0IGF0dHJpYnV0ZSBvbiB0aGUgdG9wIGxldmVsIHZkb20gbm9kZSBbb3B0aW9uYWxdXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdXJsVGFyZ2V0Xz0nX2JsYW5rJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXJsVGFyZ2V0XzogJ19ibGFuaycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNuIDogW1xuICAgICAgICAgICAgICAgIHt0YWc6ICdzcGFuJywgY2xzOiBbJ25lby1idXR0b24tZ2x5cGgnXX0sXG4gICAgICAgICAgICAgICAge3RhZzogJ3NwYW4nLCBjbHM6IFsnbmVvLWJ1dHRvbi10ZXh0J119XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoYW5kbGVyIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhhbmRsZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzIHx8IFtdO1xuXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgY2xpY2s6IHZhbHVlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZS5oYW5kbGVyU2NvcGUgfHwgbWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGljb25DbHMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SWNvbkNscyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGljb25Ob2RlID0gbWUuZ2V0VmRvbVJvb3QoKS5jblswXTtcblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoaWNvbk5vZGUuY2xzLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIGljb25Ob2RlLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpY29uTm9kZS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChpY29uTm9kZS5jbHMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNvbG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJY29uQ29sb3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpY29uTm9kZSA9IG1lLmdldFZkb21Sb290KCkuY25bMF07XG5cbiAgICAgICAgaWYgKCFpY29uTm9kZS5zdHlsZSkge1xuICAgICAgICAgICAgaWNvbk5vZGUuc3R5bGUgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGljb25Ob2RlLnN0eWxlLmNvbG9yID0gdmFsdWU7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvblBvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEljb25Qb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICdpY29uLScgKyBvbGRWYWx1ZSk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICdpY29uLScgKyB2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwcmVzc2VkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UHJlc3NlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID09PSB0cnVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAncHJlc3NlZCcpO1xuICAgICAgICB0aGlzLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJvdXRlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFJvdXRlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyB8fCBbXTtcblxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGNsaWNrOiBtZS5jaGFuZ2VSb3V0ZSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIHRleHROb2RlID0gdmRvbVJvb3QuY25bMV07XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKG1lLl9jbHMsICAgICAgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tUm9vdC5jbHMsICduby10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLl9jbHMsICAgICAgJ25vLXRleHQnKTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZSh2ZG9tUm9vdC5jbHMsICduby10ZXh0Jyk7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5yZW1vdmVEb20gPSBmYWxzZTtcbiAgICAgICAgICAgIHRleHROb2RlLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1cmwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXJsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmRvbVJvb3QuaHJlZiA9IHZhbHVlO1xuICAgICAgICAgICAgdmRvbVJvb3QudGFnICA9ICdhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSB2ZG9tUm9vdC5ocmVmO1xuICAgICAgICAgICAgdmRvbVJvb3QudGFnID0gJ2J1dHRvbic7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVybFRhcmdldCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVcmxUYXJnZXQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2ZG9tUm9vdCA9IG1lLmdldFZkb21Sb290KCk7XG5cbiAgICAgICAgaWYgKG1lLnVybCkge1xuICAgICAgICAgICAgdmRvbVJvb3QudGFyZ2V0ID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgdmRvbVJvb3QudGFyZ2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgdGhlIGljb25DbHMgYXJyYXkgaW50byBhIHN0cmluZyBvbiBiZWZvcmVHZXRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRJY29uQ2xzKCkge1xuICAgICAgICBsZXQgaWNvbkNscyA9IHRoaXMuX2ljb25DbHM7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaWNvbkNscykpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uQ2xzLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpY29uQ2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGljb25DbHMgY29uZmlnIGdldHMgY2hhbmdlZC4gQ29udmVydHMgdGhlIHN0cmluZyBpbnRvIGFuIGFycmF5IGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRJY29uQ2xzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgaWNvblBvc2l0aW9uIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0SWNvblBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnaWNvblBvc2l0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNoYW5nZVJvdXRlKCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmVkaXRSb3V0ZSkge1xuICAgICAgICAgICAgTmVvLk1haW4uZWRpdFJvdXRlKHRoaXMucm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTmVvLk1haW4uc2V0Um91dGUoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBtZS5yb3V0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENsYXNzU3lzdGVtVXRpbCAgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENvcmVCYXNlICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuLi9tYW5hZ2VyL0NvbXBvbmVudC5tanMnO1xuaW1wb3J0IERvbUV2ZW50TWFuYWdlciAgZnJvbSAnLi4vbWFuYWdlci9Eb21FdmVudC5tanMnO1xuaW1wb3J0IEtleU5hdmlnYXRpb24gICAgZnJvbSAnLi4vdXRpbC9LZXlOYXZpZ2F0aW9uLm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICAgICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICAgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5pbXBvcnQgU3R5bGUgICAgICAgICAgICBmcm9tICcuLi91dGlsL1N0eWxlLm1qcyc7XG5pbXBvcnQgVXRpbCAgICAgICAgICAgICBmcm9tICcuLi9jb3JlL1V0aWwubWpzJztcbmltcG9ydCBWRG9tVXRpbCAgICAgICAgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCAgICAgICAgZnJvbSAnLi4vdXRpbC9WTm9kZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY29tcG9uZW50J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQXBwIHRoaXMgY29tcG9uZW50IGJlbG9uZ3MgdG9cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFwcE5hbWVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGFwcE5hbWVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IG1vdW50cyBhIGNvbXBvbmVudCBhZnRlciBiZWluZyByZW5kZXJlZC5cbiAgICAgICAgICogVXNlIHRoaXMgZm9yIHRoZSB0b3AgbGV2ZWwgY29tcG9uZW50IG9mIHlvdXIgYXBwLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTW91bnQ9ZmFsc2VcbiAgICAgICAgICogQHR1dG9yaWFsIDAyX0NsYXNzU3lzdGVtXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvTW91bnQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IHJlbmRlcnMgYSBjb21wb25lbnQgYWZ0ZXIgYmVpbmcgY3JlYXRlZCBpbnNpZGUgdGhlIGluaXQgY2FsbC5cbiAgICAgICAgICogVXNlIHRoaXMgZm9yIHRoZSB0b3AgbGV2ZWwgY29tcG9uZW50IG9mIHlvdXIgYXBwLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvUmVuZGVyPWZhbHNlXG4gICAgICAgICAqIEBzZWUge0BsaW5rIE5lby5jb21wb25lbnQuQmFzZSNpbml0IGluaXR9XG4gICAgICAgICAqIEB0dXRvcmlhbCAwMl9DbGFzc1N5c3RlbVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1JlbmRlcjogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtYW5hZ2VyLkZvY3VzIHdpbGwgY2hhbmdlIHRoaXMgZmxhZyBvbiBmb2N1c2luICYgb3V0IGRvbSBldmVudHNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29udGFpbnNGb2N1c189ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbnNGb2N1c186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzaWduIGEgY29tcG9uZW50IGNvbnRyb2xsZXIgdG8gdGhpcyBjb21wb25lbnQgKHBhc3MgYW4gaW1wb3J0ZWQgbW9kdWxlIG9yIHRoZSBzdHJpbmcgYmFzZWQgY2xhc3MgbmFtZSlcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50fFN0cmluZ30gY29udHJvbGxlcl89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udHJvbGxlcl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlZCBjb21wb25lbnRzIHdpbGwgZ2V0IHRoZSBuZW8tZGlzYWJsZWQgY2xzIGFwcGxpZWQgYW5kIHdvbid0IHJlY2VpdmUgRE9NIGV2ZW50c1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBkb21MaXN0ZW5lciBjb25maWdzXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGRvbUxpc3RlbmVyc189bnVsbFxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKiBhZnRlclNldFN0YXlPbkhvdmVyKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgKiAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAqICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAqICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyB8fCBbXTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBkb21MaXN0ZW5lcnMucHVzaChcbiAgICAgICAgICogICAgICAgICAgICAge21vdXNlZW50ZXI6IG1lLm9uTW91c2VFbnRlciwgc2NvcGU6IG1lfSxcbiAgICAgICAgICogICAgICAgICAgICAge21vdXNlbGVhdmU6IG1lLm9uTW91c2VMZWF2ZSwgc2NvcGU6IG1lfVxuICAgICAgICAgKiAgICAgICAgICk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgICAqICAgIH1cbiAgICAgICAgICp9XG4gICAgICAgICAqL1xuICAgICAgICBkb21MaXN0ZW5lcnNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgY29uZmlnIHRvIHRydWUgdG8gZHluYW1pY2FsbHkgaW1wb3J0IGEgRHJvcFpvbmUgbW9kdWxlICYgY3JlYXRlIGFuIGluc3RhbmNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRyb3BwYWJsZV89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRyb3BwYWJsZV86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRyYWdnYWJsZS5Ecm9wWm9uZXxudWxsfSBkcm9wWm9uZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wWm9uZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZHJvcFpvbmVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcFpvbmVDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHdoaWNoIHdpbGwgZ2V0IHNldCB0byB0cnVlIG9uIG1vdW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhhc0JlZW5Nb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGhhc0JlZW5Nb3VudGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgZm9yIHZkb20gY2hhbmdlcyBhZnRlciBhIGNvbXBvbmVudCBnb3QgdW5tb3VudGVkXG4gICAgICAgICAqIChkZWx0YSB1cGRhdGVzIGNhbiBubyBsb25nZXIgZ2V0IGFwcGxpZWQgJiBhIG5ldyByZW5kZXIgY2FsbCBpcyByZXF1aXJlZCBiZWZvcmUgcmUtbW91bnRpbmcpXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhhc1VubW91bnRlZFZkb21DaGFuZ2VzXz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBoYXNVbm1vdW50ZWRWZG9tQ2hhbmdlc186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLmhlaWdodCwgZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ3xudWxsfSBoZWlnaHRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdG9wIGxldmVsIGlubmVySFRNTCBvZiB0aGUgY29tcG9uZW50XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBodG1sXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBodG1sXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgY29tcG9uZW50IGlkXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB3aGljaCB3aWxsIGdldCBzZXQgdG8gdHJ1ZSB3aGlsZSBhbiB1cGRhdGUgcmVxdWVzdCAod29ya2VyIG1lc3NhZ2VzKSBpcyBpbiBwcm9ncmVzc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpc1Zkb21VcGRhdGluZz1mYWxzZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpc1Zkb21VcGRhdGluZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2luZyB0aGUga2V5cyBjb25maWcgd2lsbCBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgTmVvLnV0aWwuS2V5TmF2aWdhdGlvbi5cbiAgICAgICAgICogQHNlZSB7QGxpbmsgTmVvLnV0aWwuS2V5TmF2aWdhdGlvbiBLZXlOYXZpZ2F0aW9ufVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGtleXNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1heEhlaWdodCwgZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ3xudWxsfSBtYXhIZWlnaHRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1heEhlaWdodF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUubWF4V2lkdGgsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWF4V2lkdGhfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIG1heFdpZHRoXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3J0Y3V0IGZvciBzdHlsZS5taW5IZWlnaHQsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gbWluSGVpZ2h0Xz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaW5IZWlnaHRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvcnRjdXQgZm9yIHN0eWxlLm1pbldpZHRoLCBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG1pbldpZHRoXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtaW5XaWR0aF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGluIGNhc2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIHRvIHRoZSBET01cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91bnRlZF89ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbW91bnRlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB3aGljaCB3aWxsIGdldCBzZXQgdG8gdHJ1ZSBpbiBjYXNlIGFuIHVwZGF0ZSBjYWxsIGFycml2ZXMgd2hpbGUgYW5vdGhlciB1cGRhdGUgaXMgcnVubmluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBuZWVkc1Zkb21VcGRhdGU9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbmVlZHNWZG9tVXBkYXRlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYXJlbnQgY29tcG9uZW50IGlkIG9yIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYXJlbnRJZD0nZG9jdW1lbnQuYm9keSdcbiAgICAgICAgICovXG4gICAgICAgIHBhcmVudElkOiAnZG9jdW1lbnQuYm9keScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBcnJheSBvZiBQbHVnaW4gTW9kdWxlcyBhbmQgLyBvciBjb25maWcgb2JqZWN0c1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBwbHVnaW5zXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBsdWdpbnNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgcmVuZGVyaW5nIHRoZSB2bm9kZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSByZW5kZXJpbmdfPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHJlbmRlcmluZ186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgdG8gdHJ1ZSBmb3IgYnVsayB1cGRhdGVzLlxuICAgICAgICAgKiBFbnN1cmUgdG8gc2V0IGl0IGJhY2sgdG8gZmFsc2UgYWZ0ZXJ3YXJkcy5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2lsZW50VmRvbVVwZGF0ZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2lsZW50VmRvbVVwZGF0ZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUb3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlc1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHN0eWxlPXt9XG4gICAgICAgICAqL1xuICAgICAgICBzdHlsZToge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgdG9vbHRpcCBjb25maWcgb2JqZWN0c1xuICAgICAgICAgKiBTZWUgdG9vbHRpcC9CYXNlLm1qc1xuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxPYmplY3R9IHRvb2x0aXBzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB0b29sdGlwc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50IHZub2RlIHRyZWUuIEF2YWlsYWJsZSBhZnRlciB0aGUgY29tcG9uZW50IGdvdCByZW5kZXJlZC5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2bm9kZV89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2bm9kZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG9ydGN1dCBmb3Igc3R5bGUud2lkdGgsIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd8bnVsbH0gd2lkdGhfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzLiBVc2VmdWwgaW4gY2FzZSBnZXRWZG9tUm9vdCgpIGRvZXMgbm90IHBvaW50IHRvIHRoZSB0b3AgbGV2ZWwgRE9NIG5vZGUuXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSB3cmFwcGVyU3R5bGVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHdyYXBwZXJTdHlsZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmRvbSBtYXJrdXAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt9XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge31cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2ZG9tIHJvb3QgaWYgbmVlZGVkIHRvIGFwcGx5IHRoZSB0b3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcyBvbiBhIGRpZmZlcmVudCBsZXZlbC5cbiAgICAgKiBNYWtlIHN1cmUgdG8gdXNlIGdldFZub2RlUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdmRvbSByb290XG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2bm9kZSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWZG9tUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdm5vZGUgcm9vdFxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY2hhbmdlIHRoZSBvcmRlciBjb25maWdzIGFyZSBhcHBsaWVkIHRvIHRoaXMgaW5zdGFuY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRPcmlnaW5hbENvbmZpZ10gVHJ1ZSBwcmV2ZW50cyB0aGUgaW5zdGFuY2UgZnJvbSBnZXR0aW5nIGFuIG9yaWdpbmFsQ29uZmlnIHByb3BlcnR5XG4gICAgICogQHJldHVybnMge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgbWVyZ2VDb25maWcoLi4uYXJncykge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbmZpZyA9IHN1cGVyLm1lcmdlQ29uZmlnKC4uLmFyZ3MpLFxuXG4gICAgICAgICAgICAvLyBpdCBzaG91bGQgYmUgcG9zc2libGUgdG8gc2V0IGN1c3RvbSBjb25maWdzIGZvciB0aGUgdmRvbSBvbiBpbnN0YW5jZSBsZXZlbCxcbiAgICAgICAgICAgIC8vIGhvd2V2ZXIgdGhlcmUgd2lsbCBiZSBhbHJlYWR5IGFkZGVkIGF0dHJpYnV0ZXMgKGUuZy4gaWQpLCBzbyBhIG1lcmdlIHNlZW1zIHRvIGJlIHRoZSBiZXN0IHN0cmF0ZWd5LlxuICAgICAgICAgICAgdmRvbSA9IHsuLi5tZS5fdmRvbSB8fCB7fSwgLi4uY29uZmlnLnZkb20gfHwge319O1xuXG4gICAgICAgIC8vIGF2b2lkIGFueSBpbnRlcmZlcmVuY2Ugb24gcHJvdG90eXBlIGxldmVsXG4gICAgICAgIC8vIGRvZXMgbm90IGNsb25lIGV4aXN0aW5nIE5lbyBpbnN0YW5jZXNcbiAgICAgICAgbWUuX3Zkb20gICAgICAgID0gTmVvLmNsb25lKHZkb20sIHRydWUsIHRydWUpO1xuICAgICAgICBtZS5jbHMgICAgICAgICAgPSBjb25maWcuY2xzO1xuICAgICAgICBtZS5fc3R5bGUgICAgICAgPSBjb25maWcuc3R5bGU7XG4gICAgICAgIG1lLndyYXBwZXJTdHlsZSA9IE5lby5jbG9uZShjb25maWcud3JhcHBlclN0eWxlLCBmYWxzZSk7XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy5jbHM7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuc3R5bGU7XG4gICAgICAgIGRlbGV0ZSBjb25maWcuX3Zkb207XG4gICAgICAgIGRlbGV0ZSBjb25maWcudmRvbTtcbiAgICAgICAgZGVsZXRlIGNvbmZpZy53cmFwcGVyU3R5bGU7XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcbiAgICAgICAgQ29tcG9uZW50TWFuYWdlci5yZWdpc3Rlcih0aGlzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmZpcmUoJ2NvbnN0cnVjdGVkJywge2lkOiBtZS5pZH0pOyAvLyB0ZXN0aW5nXG5cbiAgICAgICAgaWYgKG1lLmtleXMpIHtcbiAgICAgICAgICAgIG1lLmtleXMucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvUmVuZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ1NTIHNlbGVjdG9ycyB0byBhcHBseSB0byB0aGUgdG9wIGxldmVsIG5vZGUgb2YgdGhpcyBjb21wb25lbnRcbiAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWNvbXBvbmVudCddXG4gICAgICovXG4gICAgZ2V0IGNscygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NscyA/IE5lby5jbG9uZSh0aGlzLl9jbHMpIDogWyduZW8tY29tcG9uZW50J107XG4gICAgfVxuICAgIHNldCBjbHModmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSA/IHZhbHVlIDogW107XG5cbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZkb21Sb290ID0gbWUuZ2V0VmRvbVJvb3QoKSxcbiAgICAgICAgICAgIG9sZENscztcblxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zcGxpdCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgb2xkQ2xzID0gTmVvLmNsb25lKG1lLl9jbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuX2NscyA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh2ZG9tUm9vdCkge1xuICAgICAgICAgICAgdmRvbVJvb3QuY2xzID0gWy4uLnZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLl92ZG9tID0gdmRvbTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBtZS51cGRhdGVDbHModmFsdWUsIG9sZENscyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBjb21wb25lbnQgYmFzZWQgbGlzdGVuZXJzXG4gICAgICogQG1lbWJlciB7T2JqZWN0fSBsaXN0ZW5lcnM9e31cbiAgICAgKi9cbiAgICBnZXQgbGlzdGVuZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXJzIHx8IHt9O1xuICAgIH1cbiAgICBzZXQgbGlzdGVuZXJzKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRydWUgYWZ0ZXIgdGhlIGNvbXBvbmVudCByZW5kZXIoKSBtZXRob2Qgd2FzIGNhbGxlZC4gQWxzbyBmaXJlcyB0aGUgcmVuZGVyZWQgZXZlbnQuXG4gICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVuZGVyZWQ9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZ2V0IHJlbmRlcmVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZWQgfHwgZmFsc2U7XG4gICAgfVxuICAgIHNldCByZW5kZXJlZCh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLl9yZW5kZXJlZCA9IHZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgbWUuZmlyZSgncmVuZGVyZWQnLCBtZS5pZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlc1xuICAgICAqIEBtZW1iZXIge09iamVjdH0gc3R5bGU9e31cbiAgICAgKi9cbiAgICBnZXQgc3R5bGUoKSB7XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gXCJjbG9uZVwiIHRoZSBvYmplY3QsIG90aGVyd2lzZSBjaGFuZ2VzIHdpbGwgZ2V0IGFwcGxpZWQgZGlyZWN0bHkgYW5kIHRoZXJlIGFyZSBubyBkZWx0YXNcbiAgICAgICAgLy8gdGhpcyBvbmx5IGFmZmVjdHMgbm9uIHZkb20gcmVsYXRlZCBzdHlsZSB0byBET00gZGVsdGFzXG4gICAgICAgIHJldHVybiBOZW8uY2xvbmUodGhpcy5fc3R5bGUpO1xuICAgIH1cbiAgICBzZXQgc3R5bGUodmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFN0eWxlID0gbWUuc3R5bGU7IC8vIGNsb25lZCA9PiBnZXR0ZXJcblxuICAgICAgICBtZS5fc3R5bGUgPSB2YWx1ZTtcbiAgICAgICAgbWUudXBkYXRlU3R5bGUodmFsdWUsIG9sZFN0eWxlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2V0dGVyIHdpbGwgaGFuZGxlIHZkb20gdXBkYXRlcyBhdXRvbWF0aWNhbGx5XG4gICAgICogQG1lbWJlciB7T2JqZWN0fSB2ZG9tPXRoaXMuX3Zkb21cbiAgICAgKi9cbiAgICBnZXQgdmRvbSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zkb207XG4gICAgfVxuICAgIHNldCB2ZG9tKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhcHAgICAgICA9IE5lby5hcHBzW21lLmFwcE5hbWVdLFxuICAgICAgICAgICAgdmRvbSAgICAgPSB2YWx1ZSxcbiAgICAgICAgICAgIGNscyAgICAgID0gbWUuY2xzLFxuICAgICAgICAgICAgaGVpZ2h0ICAgPSBtZS5oZWlnaHQsXG4gICAgICAgICAgICBzdHlsZSAgICA9IG1lLnN0eWxlLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpLFxuICAgICAgICAgICAgd2lkdGggICAgPSBtZS53aWR0aCxcbiAgICAgICAgICAgIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgaWYgKHZkb21Sb290KSB7XG4gICAgICAgICAgICBpZiAoY2xzKSB7XG4gICAgICAgICAgICAgICAgdmRvbVJvb3QuY2xzID0gY2xzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdmRvbVJvb3QuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgICAgICAgICB2ZG9tUm9vdC53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiBzdHJpbmcgYmFzZWQgc3R5bGVzXG4gICAgICAgICAgICAgICAgdmRvbVJvb3Quc3R5bGUgPSBPYmplY3QuYXNzaWduKHZkb21Sb290LnN0eWxlIHx8IHt9LCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJdCBpcyBpbXBvcnRhbnQgdG8ga2VlcCB0aGUgdmRvbSB0cmVlIHN0YWJsZSB0byBlbnN1cmUgdGhhdCBjb250YWluZXJzIGRvIG5vdCBsb3NlIHRoZSByZWZlcmVuY2VzIHRvIHRoZWlyXG4gICAgICAgIC8vIGNoaWxkIHZkb20gdHJlZXMuIFRoZSBpZiBjYXNlIHNob3VsZCBub3QgaGFwcGVuLCBidXQgaW4gY2FzZSBpdCBkb2VzLCBrZWVwaW5nIHRoZSByZWZlcmVuY2UgYW5kIG1lcmdpbmdcbiAgICAgICAgLy8gdGhlIGNvbnRlbnQgb3ZlciBzZWVtcyB0byBiZSB0aGUgYmVzdCBzdHJhdGVneVxuICAgICAgICBpZiAobWUuX3Zkb20gIT09IHZkb20pIHtcbiAgICAgICAgICAgIExvZ2dlci53YXJuKCd2ZG9tIGdvdCByZXBsYWNlZCBmb3I6ICcgKyBtZS5pZCArICcuIENvcHlpbmcgdGhlIGNvbnRlbnQgaW50byB0aGUgcmVmZXJlbmNlIGhvbGRlciBvYmplY3QnKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMobWUuX3Zkb20pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWUuX3Zkb21ba2V5XTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKG1lLl92ZG9tLCB2ZG9tKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghbWUuc2lsZW50VmRvbVVwZGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFtZS5tb3VudGVkICYmIGFwcCAmJiBhcHAucmVuZGVyaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJJZCA9IGFwcC5vbigncmVuZGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhcHAudW4oJ3JlbmRlcicsIGxpc3RlbmVySWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUudXBkYXRlVmRvbShtZS52ZG9tLCBtZS52bm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVZkb20odmRvbSwgbWUudm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZS5oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyA9ICFtZS5tb3VudGVkICYmIG1lLmhhc0JlZW5Nb3VudGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRWl0aGVyIGEgc3RyaW5nIGxpa2UgJ2NvbG9yOiByZWQ7IGJhY2tncm91bmQtY29sb3I6IGJsdWU7J1xuICAgICAqIG9yIGFuIG9iamVjdCBjb250YWluaW5nIHN0eWxlIGF0dHJpYnV0ZXNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IHZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH0gYWxsIHN0eWxlcyBvZiB0aGlzLmVsXG4gICAgICovXG4gICAgYWRkU3R5bGUodmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHZhbHVlID0gVXRpbC5jcmVhdGVTdHlsZU9iamVjdCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiBhZGQgYSBjaGVjayBpZiBzb21ldGhpbmcgaGFzIGNoYW5nZWRcblxuICAgICAgICByZXR1cm4gdGhpcy5zdHlsZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdHlsZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGlzYWJsZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREaXNhYmxlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXlbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXShjbHMsICduZW8tZGlzYWJsZWQnKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyB0aGUgZG9tTGlzdGVuZXJzIGluc2lkZSB0aGUgTmVvLm1hbmFnZXIuRG9tRXZlbnRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RG9tTGlzdGVuZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBEb21FdmVudE1hbmFnZXIudXBkYXRlRG9tTGlzdGVuZXJzKHRoaXMsIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkcm9wcGFibGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREcm9wcGFibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICFtZS5kcm9wWm9uZSkge1xuICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdzcmMvZHJhZ2dhYmxlL0Ryb3Bab25lLW1qcy5qcycgKi9cbiAgICAgICAgICAgICAgICAnLi4vZHJhZ2dhYmxlL0Ryb3Bab25lLm1qcydcbiAgICAgICAgICAgICAgICApLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICBtZS5kcm9wWm9uZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgOiBtb2R1bGUuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb3duZXIgIDogbWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmRyb3Bab25lQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlIHx8ICghdmFsdWUgJiYgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50SWRzID0gQ29tcG9uZW50TWFuYWdlci5nZXRQYXJlbnRJZHModGhpcyksXG4gICAgICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICAgICAgPSBwYXJlbnRJZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcmVudDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IE5lby5nZXRDb21wb25lbnQocGFyZW50SWRzW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Ll9oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcyA9IHZhbHVlOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoZWlnaHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGVpZ2h0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdoZWlnaHQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBodG1sIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIdG1sKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdodG1sJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdpZCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heEhlaWdodCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhIZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21heEhlaWdodCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdtYXhXaWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1pbkhlaWdodCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNaW5IZWlnaHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVmRvbVJvb3RLZXkoJ21pbkhlaWdodCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1pbldpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1pbldpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCdtaW5XaWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWUuaGFzQmVlbk1vdW50ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1lLmRvbUxpc3RlbmVycyAmJiBtZS5kb21MaXN0ZW5lcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2RvOiB0aGUgbWFpbiB0aHJlYWQgcmVwbHkgb2YgbW91bnQgYXJyaXZlcyBhZnRlciBwdXNoaW5nIHRoZSB0YXNrIGludG8gdGhlIHF1ZXVlIHdoaWNoIGRvZXMgbm90IGVuc3VyZSB0aGUgZG9tIGlzIG1vdW50ZWRcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBEb21FdmVudE1hbmFnZXIubW91bnREb21MaXN0ZW5lcnMobWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ21vdW50ZWQnLCBtZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRvb2x0aXBzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VG9vbHRpcHModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKE5lby5ucygnTmVvLnRvb2x0aXAuQmFzZScpKSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlVG9vbHRpcHModmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ3NyYy90b29sdGlwL0Jhc2UnICovXG4gICAgICAgICAgICAgICAgICAgICcuLi90b29sdGlwL0Jhc2UubWpzJykudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVUb29sdGlwcyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2bm9kZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZub2RlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zeW5jVm5vZGVUcmVlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZVZkb21Sb290S2V5KCd3aWR0aCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHdyYXBwZXJTdHlsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXcmFwcGVyU3R5bGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghKCF2YWx1ZSAmJiBvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBpZiAoIW1lLnZkb20uaWQpIHtcbiAgICAgICAgICAgICAgICB2ZG9tLnN0eWxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVN0eWxlKHZhbHVlLCBvbGRWYWx1ZSwgbWUudmRvbS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIHdyYXBwZXJTdHlsZSBjb25maWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0V3JhcHBlclN0eWxlKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB7Li4uT2JqZWN0LmFzc2lnbih0aGlzLnZkb20uc3R5bGUgfHwge30sIHZhbHVlKX07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIHdoZW4gYWNjZXNzaW5nIHRoZSBjb250cm9sbGVyIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVHZXRDb250cm9sbGVyKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiBOZW8uZ2V0KHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBjb250cm9sbGVyIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQ3JlYXRlcyBhIENvbXBvbmVudENvbnRyb2xsZXIgaW5zdGFuY2UgaWYgbmVlZGVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGlkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENvbnRyb2xsZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFsdWUgPSBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIG51bGwsIHtcbiAgICAgICAgICAgIHZpZXc6IHRoaXNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGRvbUxpc3RlbmVycyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREb21MaXN0ZW5lcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IFt2YWx1ZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUgfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUga2V5cyBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIENyZWF0ZXMgYSBLZXlOYXZpZ2F0aW9uIGluc3RhbmNlIGlmIG5lZWRlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0S2V5cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlID0gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBLZXlOYXZpZ2F0aW9uLCB7XG4gICAgICAgICAgICAgICAga2V5czogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHBsdWdpbnMgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFBsdWdpbnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UoaXRlbSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICBvd25lcjogdGhpc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hhbmdlcyB0aGUgdmFsdWUgb2YgYSB2ZG9tIG9iamVjdCBhdHRyaWJ1dGUgb3IgcmVtb3ZlcyBpdCBpbiBjYXNlIGl0IGhhcyBubyB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fE51bWJlcnxPYmplY3R8U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICovXG4gICAgY2hhbmdlVmRvbVJvb3RLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmdldFZkb21Sb290KClba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIG1lLmdldFZkb21Sb290KClba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHRvb2x0aXAgaW5zdGFuY2VzXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZVRvb2x0aXBzKHZhbHVlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0b29sdGlwcyA9IFtdLFxuICAgICAgICAgICAgdGlwO1xuXG4gICAgICAgIHZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAvLyB0b2RvOiBjaGVjayBmb3IgZXhpc3RpbmcgdG9vbHRpcHNcblxuICAgICAgICAgICAgdGlwID0gTmVvLmNyZWF0ZSgnTmVvLnRvb2x0aXAuQmFzZScsIHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgLi4uaXRlbVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRvb2x0aXBzLnB1c2godGlwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuX3Rvb2x0aXBzID0gdG9vbHRpcHM7IC8vIHNpbGVudCB1cGRhdGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyB0aGlzIGluc3RhbmNlIGZyb20gdGhlIENvbXBvbmVudE1hbmFnZXJcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt1cGRhdGVQYXJlbnRWZG9tPWZhbHNlXSB0cnVlIHRvIHJlbW92ZSB0aGUgY29tcG9uZW50IGZyb20gdGhlIHBhcmVudCB2ZG9tID0+IHJlYWwgZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXSB0cnVlIHRvIHVwZGF0ZSB0aGUgdmRvbSBzaWxlbnRseSAodXNlZnVsIGZvciBkZXN0cm95aW5nIG11bHRpcGxlIGNoaWxkIGl0ZW1zIGluIGEgcm93KVxuICAgICAqIHRvZG86IHVucmVnaXN0ZXIgZXZlbnRzXG4gICAgICovXG4gICAgZGVzdHJveSh1cGRhdGVQYXJlbnRWZG9tPWZhbHNlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHBhcmVudCwgcGFyZW50VmRvbTtcblxuICAgICAgICBpZiAodXBkYXRlUGFyZW50VmRvbSAmJiBtZS5wYXJlbnRJZCkge1xuICAgICAgICAgICAgaWYgKG1lLnBhcmVudElkID09PSAnZG9jdW1lbnQuYm9keScpIHtcbiAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzOiBbe2FjdGlvbjogJ3JlbW92ZU5vZGUnLCBpZDogbWUudmRvbS5pZH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudCAgICAgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLnBhcmVudElkKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRWZG9tID0gcGFyZW50LnZkb207XG5cbiAgICAgICAgICAgICAgICBWRG9tVXRpbC5yZW1vdmVWZG9tQ2hpbGQocGFyZW50VmRvbSwgbWUudmRvbS5pZCk7XG4gICAgICAgICAgICAgICAgcGFyZW50W3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gcGFyZW50VmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIudW5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVuaWVuY2Ugc2hvcnRjdXQgZm9yIE5lby5tYW5hZ2VyLkNvbXBvbmVudC5kb3duXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gVGhlIG1hdGNoaW5nIGluc3RhbmNlIG9yIG51bGxcbiAgICAgKi9cbiAgICBkb3duKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci5kb3duKHRoaXMuaWQsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgZm9jdXMoKSBvbiB0aGUgdG9wIGxldmVsIERPTSBub2RlIG9mIHRoaXMgY29tcG9uZW50IG9yIG9uIGEgZ2l2ZW4gbm9kZSB2aWEgaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGZvY3VzKGlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3NcbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmZvY3VzKHtcbiAgICAgICAgICAgIGlkOiBpZCB8fCBtZS5pZFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZvY3VzIHJlY2VpdmVkOiAnICsgaWQgfHwgbWUuaWQpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gcmVjZWl2ZSBmb2N1cyBmb3IgY29tcG9uZW50JywgZXJyLCBtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhpcy5jb250cm9sbGVyIG9yIHRoZSBjbG9zZXN0IHBhcmVudCBjb250cm9sbGVyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IFtudHlwZV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRyb2xsZXIuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldENvbnRyb2xsZXIobnR5cGUpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSB0aGlzLmNvbnRyb2xsZXIsXG4gICAgICAgICAgICBpLCBsZW4sIHBhcmVudHM7XG5cbiAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgKCFudHlwZSB8fCBudHlwZSA9PT0gY29udHJvbGxlci5udHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyZW50cyA9IENvbXBvbmVudE1hbmFnZXIuZ2V0UGFyZW50cyh0aGlzKTtcbiAgICAgICAgaSAgICAgICA9IDA7XG4gICAgICAgIGxlbiAgICAgPSBwYXJlbnRzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50c1tpXS5jb250cm9sbGVyICYmICghbnR5cGUgfHwgbnR5cGUgPT09IHBhcmVudHNbaV0uY29udHJvbGxlci5udHlwZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50c1tpXS5jb250cm9sbGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9wdHNcbiAgICAgKiBAcmV0dXJucyB7TmVvLnBsdWdpbi5CYXNlfG51bGx9XG4gICAgICovXG4gICAgZ2V0UGx1Z2luKG9wdHMpIHtcbiAgICAgICAgb3B0cyA9IHR5cGVvZiBvcHRzICE9PSAnc3RyaW5nJyA/IG9wdHMgOiB7aWQ6IG9wdHN9O1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBoYXNNYXRjaDtcblxuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiBtZS5wbHVnaW5zIHx8IFtdKSB7XG4gICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2luW2tleV0gIT09IG9wdHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChoYXNNYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwbHVnaW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXYWxrcyB1cCB0aGUgdmRvbSB0cmVlIGFuZCByZXR1cm5zIHRoZSBjbG9zZXN0IHRoZW1lIGZvdW5kXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRUaGVtZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGhlbWVNYXRjaCA9ICduZW8tdGhlbWUtJyxcbiAgICAgICAgICAgIGFwcCwgbWFpblZpZXcsIHBhcmVudE5vZGVzO1xuXG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBtZS5jbHMgfHwgW10pIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnN0YXJ0c1dpdGgodGhlbWVNYXRjaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFwcCAgICAgID0gTmVvLmFwcHNbbWUuYXBwTmFtZV07XG4gICAgICAgIG1haW5WaWV3ID0gYXBwICYmIGFwcC5tYWluVmlld0luc3RhbmNlO1xuXG4gICAgICAgIGlmIChtYWluVmlldykge1xuICAgICAgICAgICAgcGFyZW50Tm9kZXMgPSBWRG9tVXRpbC5nZXRQYXJlbnROb2RlcyhtYWluVmlldy52ZG9tLCBtZS5pZCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiBwYXJlbnROb2RlcyB8fCBbXSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiBub2RlLmNscyB8fCBbXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5zdGFydHNXaXRoKHRoZW1lTWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uY29uZmlnLnRoZW1lcyAmJiBOZW8uY29uZmlnLnRoZW1lc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZWFyY2ggYSB2ZG9tIGNoaWxkIG5vZGUgYnkgaWQgZm9yIGEgZ2l2ZW4gdmRvbSB0cmVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tXVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0VmRvbUNoaWxkKGlkLCB2ZG9tKSB7XG4gICAgICAgIGxldCBub2RlID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh2ZG9tIHx8IHRoaXMudmRvbSwgaWQpO1xuICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuIGdldCBjYWxsZWQgYWZ0ZXIgdGhlIGNvbXBvbmVudCBnb3QgcmVuZGVyZWQuIFNlZSB0aGUgYXV0b01vdW50IGNvbmZpZyBhcyB3ZWxsLlxuICAgICAqL1xuICAgIG1vdW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgY2hpbGQsIGNoaWxkSWRzO1xuXG4gICAgICAgIGlmICghbWUudm5vZGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IHZub2RlIG11c3QgYmUgZ2VuZXJhdGVkIGJlZm9yZSBtb3VudGluZywgdXNlIENvbXBvbmVudC5yZW5kZXIoKScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW4gY2FzZSB0aGUgY29tcG9uZW50IHdhcyBhbHJlYWR5IG1vdW50ZWQsIGdvdCB1bm1vdW50ZWQgYW5kIHJlY2VpdmVkIHZkb20gY2hhbmdlcyBhZnRlcndhcmRzLFxuICAgICAgICAvLyBhIG5ldyByZW5kZXIoKSBjYWxsIGlzIG1hbmRhdG9yeSBzaW5jZSBkZWx0YSB1cGRhdGVzIGNvdWxkIG5vdCBnZXQgYXBwbGllZC5cbiAgICAgICAgLy8gV2UgbmVlZCB0byBjbGVhciB0aGUgaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgc3RhdGUgZm9yIGFsbCBjaGlsZCBjb21wb25lbnRzXG4gICAgICAgIGlmIChtZS5oYXNVbm1vdW50ZWRWZG9tQ2hhbmdlcykge1xuICAgICAgICAgICAgLy8gdG9kbzogdGhlIGhhc1VubW91bnRlZFZkb21DaGFuZ2VzIGZsYWcgY2hhbmdlcyBzaG91bGQgaGFwcGVuIG9uIHJlbmRlclxuICAgICAgICAgICAgbWUuaGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSBmYWxzZTtcblxuICAgICAgICAgICAgY2hpbGRJZHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldENoaWxkSWRzKG1lLnZub2RlKTtcblxuICAgICAgICAgICAgY2hpbGRJZHMuZm9yRWFjaChpZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQgPSBOZW8uZ2V0Q29tcG9uZW50KGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5faGFzVW5tb3VudGVkVmRvbUNoYW5nZXMgPSBmYWxzZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gZW5kIHRvZG9cblxuICAgICAgICAgICAgbWUucmVuZGVyKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ21vdW50JywgbWUucGFyZW50SWQsIG1lLmlkKTtcblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICAgICA6ICdtb3VudERvbScsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGh0bWwgICAgICAgOiBtZS52bm9kZS5vdXRlckhUTUwsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IG1lLnBhcmVudElkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBtZS5wYXJlbnRJbmRleFxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBieSBtYW5hZ2VyLkZvY3VzXG4gICAgICogQG5hbWUgb25Gb2N1c0VudGVyXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtBcnJheX0gcGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJ5IG1hbmFnZXIuRm9jdXNcbiAgICAgKiBAbmFtZSBvbkZvY3VzTGVhdmVcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYnkgbWFuYWdlci5Gb2N1c1xuICAgICAqIEBuYW1lIG9uRm9jdXNNb3ZlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5uZXdQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gICAgICogQHBhcmFtIHtBcnJheX0gIG9wdHMub2xkUGF0aCBkb20gZWxlbWVudCBpZHMgdXB3YXJkc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgZnJvbSB0aGUgcmVuZGVyKCkgcHJvbWlzZSBzdWNjZXNzIGhhbmRsZXJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYXV0b01vdW50IE1vdW50IHRoZSBET00gYWZ0ZXIgdGhlIHZub2RlIGdvdCBjcmVhdGVkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uUmVuZGVyKGRhdGEsIGF1dG9Nb3VudCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcCA9IE5lby5hcHBzW21lLmFwcE5hbWVdO1xuXG4gICAgICAgIG1lLnJlbmRlcmluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGlmIGFwcCBpcyBhIGNoZWNrIHRvIHNlZSBpZiB0aGUgQ29tcG9uZW50IGdvdCBkZXN0cm95ZWQgd2hpbGUgcmVuZGVyaW5nID0+IGJlZm9yZSBvblJlbmRlciBnb3QgdHJpZ2dlcmVkXG4gICAgICAgIGlmIChhcHApIHtcbiAgICAgICAgICAgIGlmICghYXBwLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgYXBwLnJlbmRlcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFwcC5yZW5kZXJlZCAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFwcC5maXJlKCdyZW5kZXInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUudm5vZGUgPSBkYXRhO1xuXG4gICAgICAgICAgICBsZXQgY2hpbGRJZHMgID0gQ29tcG9uZW50TWFuYWdlci5nZXRDaGlsZElkcyhkYXRhKSxcbiAgICAgICAgICAgICAgICBpICAgICAgICAgPSAwLFxuICAgICAgICAgICAgICAgIGxlbiAgICAgICA9IGNoaWxkSWRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjaGlsZDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNoaWxkID0gTmVvLmdldENvbXBvbmVudChjaGlsZElkc1tpXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuX3JlbmRlcmVkID0gdHJ1ZTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuZmlyZSgncmVuZGVyZWQnLCBtZS5pZCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXJlZDogJyArIG1lLmFwcE5hbWUgKyAnICcgKyBtZS5pZCwgbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXV0b01vdW50KSB7XG4gICAgICAgICAgICAgICAgbWUubW91bnRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9taXNlIGJhc2VkIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tPXRoaXMudmRvbV1cbiAgICAgKiBAcGFyYW0ge05lby52ZG9tLlZOb2RlfSBbdm5vZGU9IHRoaXMudm5vZGVdXG4gICAgICovXG4gICAgcHJvbWlzZVZkb21VcGRhdGUodmRvbT10aGlzLnZkb20sIHZub2RlPXRoaXMudm5vZGUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyB0b2RvOiB1cGRhdGVWZG9tKCkgc2hvdWxkIGhhbmRsZSB0aGlzXG4gICAgICAgIC8vIEl0IGlzIGltcG9ydGFudCB0byBrZWVwIHRoZSB2ZG9tIHRyZWUgc3RhYmxlIHRvIGVuc3VyZSB0aGF0IGNvbnRhaW5lcnMgZG8gbm90IGxvc2UgdGhlIHJlZmVyZW5jZXMgdG8gdGhlaXJcbiAgICAgICAgLy8gY2hpbGQgdmRvbSB0cmVlcy4gVGhlIGlmIGNhc2Ugc2hvdWxkIG5vdCBoYXBwZW4sIGJ1dCBpbiBjYXNlIGl0IGRvZXMsIGtlZXBpbmcgdGhlIHJlZmVyZW5jZSBhbmQgbWVyZ2luZ1xuICAgICAgICAvLyB0aGUgY29udGVudCBvdmVyIHNlZW1zIHRvIGJlIHRoZSBiZXN0IHN0cmF0ZWd5XG4gICAgICAgIGlmIChtZS5fdmRvbSAhPT0gdmRvbSkge1xuICAgICAgICAgICAgTG9nZ2VyLndhcm4oJ3Zkb20gZ290IHJlcGxhY2VkIGZvcjogJyArIG1lLmlkICsgJy4gQ29weWluZyB0aGUgY29udGVudCBpbnRvIHRoZSByZWZlcmVuY2UgaG9sZGVyIG9iamVjdCcpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhtZS5fdmRvbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZS5fdmRvbVtrZXldO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obWUuX3Zkb20sIHZkb20pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVmRvbSh2ZG9tLCB2bm9kZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFaXRoZXIgYSBzdHJpbmcgbGlrZSAnY29sb3InIG9yIGFuIGFycmF5IGNvbnRhaW5pbmcgc3R5bGUgYXR0cmlidXRlcyB0byByZW1vdmVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xBcnJheX0gdmFsdWUgY2FtZWxDYXNlIG9ubHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBhbGwgc3R5bGVzIG9mIHRoaXMuZWxcbiAgICAgKi9cbiAgICByZW1vdmVTdHlsZSh2YWx1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0eWxlICAgID0gdGhpcy5zdHlsZSxcbiAgICAgICAgICAgIGRvVXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXMoc3R5bGUpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKGtleSkgPiAtMSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZVtrZXldO1xuICAgICAgICAgICAgICAgIGRvVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRvVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgdm5vZGUgdHJlZSBmb3IgdGhpcyBjb21wb25lbnQgYW5kIG1vdW50cyB0aGUgY29tcG9uZW50IGluIGNhc2VcbiAgICAgKiAtIHlvdSBwYXNzIHRydWUgZm9yIHRoZSBtb3VudCBwYXJhbVxuICAgICAqIC0gb3IgdGhlIGF1dG9Nb3VudCBjb25maWcgaXMgc2V0IHRvIHRydWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFttb3VudF0gTW91bnQgdGhlIERPTSBhZnRlciB0aGUgdm5vZGUgZ290IGNyZWF0ZWRcbiAgICAgKi9cbiAgICByZW5kZXIobW91bnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhdXRvTW91bnQgPSBtb3VudCB8fCBtZS5hdXRvTW91bnQsXG4gICAgICAgICAgICBhcHAgICAgICAgPSBOZW8uYXBwc1ttZS5hcHBOYW1lXTtcblxuICAgICAgICBtZS5yZW5kZXJpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICghYXBwLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBhcHAucmVuZGVyaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS52ZG9tKSB7XG4gICAgICAgICAgICBOZW8udmRvbS5IZWxwZXIuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBhdXRvTW91bnQgIDogYXV0b01vdW50LFxuICAgICAgICAgICAgICAgIGNscyAgICAgICAgOiBtZS5jbHMsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IGF1dG9Nb3VudCA/IG1lLnBhcmVudElkICAgIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBhdXRvTW91bnQgPyBtZS5wYXJlbnRJbmRleCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDogbWUuc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4ubWUudmRvbVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5vblJlbmRlcihkYXRhLCBhdXRvTW91bnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2UgbXVsdGlwbGUgY29uZmlncyBhdCBvbmNlLCBlbnN1cmluZyB0aGF0IGFsbCBhZnRlclNldCBtZXRob2RzIGdldCBhbGwgbmV3IGFzc2lnbmVkIHZhbHVlc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZXM9e31cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgc2V0KHZhbHVlcz17fSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLnNpbGVudFZkb21VcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgIHN1cGVyLnNldCh2YWx1ZXMpO1xuXG4gICAgICAgIG1lLnNpbGVudFZkb21VcGRhdGUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWUucHJvbWlzZVZkb21VcGRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGNhbGxpbmcgc2V0KCkgd2l0aCB0aGUgc2lsZW50IGZsYWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVzPXt9XG4gICAgICovXG4gICAgc2V0U2lsZW50KHZhbHVlcz17fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQodmFsdWVzLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBtZXRob2QgZm9yIHV0aWwuVkRvbS5zeW5jVmRvbUlkcyB0byBhbGxvdyBvdmVycmlkaW5nIChkaXNhYmxpbmcpIGl0XG4gICAgICogQHBhcmFtIHtOZW8udmRvbS5WTm9kZX0gW3Zub2RlPXRoaXMudm5vZGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFt2ZG9tPXRoaXMudmRvbV1cbiAgICAgKi9cbiAgICBzeW5jVmRvbUlkcyh2bm9kZT10aGlzLnZub2RlLCB2ZG9tPXRoaXMudmRvbSkge1xuICAgICAgICBWRG9tVXRpbC5zeW5jVmRvbUlkcyh2bm9kZSwgdmRvbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgbWV0aG9kIGZvciB1dGlsLlZEb20uc3luY1Zkb21JZHMgdG8gYWxsb3cgb3ZlcnJpZGluZyAoZGlzYWJsaW5nKSBpdFxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IFt2bm9kZT10aGlzLnZub2RlXVxuICAgICAqL1xuICAgIHN5bmNWbm9kZVRyZWUodm5vZGU9dGhpcy52bm9kZSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVidWcgPSBmYWxzZSxcbiAgICAgICAgICAgIGNoaWxkVm5vZGUsIHN0YXJ0O1xuXG4gICAgICAgIGlmIChkZWJ1Zykge1xuICAgICAgICAgICAgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnN5bmNWZG9tSWRzKCk7XG5cbiAgICAgICAgLy8gZGVsZWdhdGUgdGhlIGxhdGVzdCBub2RlIHVwZGF0ZXMgdG8gYWxsIHBvc3NpYmxlIGNoaWxkIGNvbXBvbmVudHMgZm91bmQgaW5zaWRlIHRoZSB2bm9kZSB0cmVlXG4gICAgICAgIENvbXBvbmVudE1hbmFnZXIuZ2V0Q2hpbGRyZW4obWUpLmZvckVhY2goY29tcG9uZW50ID0+IHtcbiAgICAgICAgICAgIGNoaWxkVm5vZGUgPSBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUobWUudm5vZGUsIGNvbXBvbmVudC52ZG9tLmlkKTtcblxuICAgICAgICAgICAgaWYgKGNoaWxkVm5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuX3Zub2RlID0gY2hpbGRWbm9kZS52bm9kZTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wb25lbnQucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Ll9yZW5kZXJlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5maXJlKCdyZW5kZXJlZCcsIGNvbXBvbmVudC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcG9uZW50Lm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3N5bmNWbm9kZVRyZWU6IENvdWxkIG5vdCByZXBsYWNlIHRoZSBjaGlsZCB2bm9kZSBmb3InLCBjb21wb25lbnQuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZS52bm9kZSwgbWUubW91bnRlZCk7XG5cbiAgICAgICAgLy8ga2VlcCB0aGUgdm5vZGUgcGFyZW50IHRyZWUgaW4gc3luY1xuICAgICAgICBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHMobWUpLmZvckVhY2goKGNvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghbWUudm5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDAgJiYgIVZOb2RlVXRpbC5yZW1vdmVDaGlsZFZub2RlKGNvbXBvbmVudC52bm9kZSwgbWUuaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgY2FuIGZhaWwsIGluIGNhc2UgdGhlIHZub2RlIGlzIGFscmVhZHkgcmVtb3ZlZCAobm90IGFuIGlzc3VlLCBiZXR0ZXIgc2FmZSB0aGFuIHNvcnJ5KVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ3N5bmNWbm9kZVRyZWU6IENvdWxkIG5vdCByZW1vdmUgdGhlIHBhcmVudCB2bm9kZSBmb3InLCBtZS5pZCwgY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkeW5hbWljYWxseSByZW5kZXJlZCBjb21wb25lbnRzIHdoaWNoIGdldCBpbnNlcnRlZCBpbnRvIHRoZSBjb21wb25lbnQgdHJlZVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDAgJiYgbWUudm5vZGUub3V0ZXJIVE1MKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2R5biBpdGVtJywgbWUudm5vZGUsIG1lLnBhcmVudEluZGV4KTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQudm5vZGUuY2hpbGROb2Rlcy5zcGxpY2UobWUucGFyZW50SW5kZXggfHwgMCwgMCwgbWUudm5vZGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIGlmICghVk5vZGVVdGlsLnJlcGxhY2VDaGlsZFZub2RlKGNvbXBvbmVudC52bm9kZSwgbWUudm5vZGUuaWQsIG1lLnZub2RlKSkge1xuICAgICAgICAgICAgICAgIC8vIHRvZG86IGNhbiBoYXBwZW4gZm9yIGR5bmFtaWNhbGx5IGluc2VydGVkIGNvbnRhaW5lciBpdGVtc1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2Fybignc3luY1Zub2RlVHJlZTogQ291bGQgbm90IHJlcGxhY2UgdGhlIHBhcmVudCB2bm9kZSBmb3InLCBtZS52bm9kZS5pZCwgY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGRlYnVnKSB7XG4gICAgICAgICAgICBsZXQgZW5kID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3luY1Zub2RlVHJlZScsIG1lLmlkLCBlbmQgLSBzdGFydCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIGNvbXBvbmVudCBET01cbiAgICAgKi9cbiAgICB1bm1vdW50KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICBpZCAgICA6IG1lLmlkXG4gICAgICAgICAgICB9XVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVubW91bnQgY29tcG9uZW50JywgZXJyLCBtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0IGZvciBOZW8ubWFuYWdlci5Db21wb25lbnQudXBcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29yZS5CYXNlfSBUaGUgbWF0Y2hpbmcgaW5zdGFuY2Ugb3IgbnVsbFxuICAgICAqL1xuICAgIHVwKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50TWFuYWdlci51cCh0aGlzLmlkLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbHRhIHVwZGF0ZXMgZm9yIHRoZSBjbHMgY29uZmlnLiBHZXRzIGNhbGxlZCBhZnRlciB0aGUgY2xzIGNvbmZpZyBnZXRzIGNoYW5nZWQgaW4gY2FzZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAgICogQHBhcmFtIHtBcnJheX0gY2xzXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkQ2xzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZUNscyhjbHMsIG9sZENscykge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgdm5vZGUgPSBtZS52bm9kZSxcbiAgICAgICAgICAgIG9wdHM7XG5cbiAgICAgICAgaWYgKCFOZW9BcnJheS5pc0VxdWFsKGNscywgb2xkQ2xzKSkge1xuICAgICAgICAgICAgaWYgKHZub2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGUuY2xhc3NOYW1lID0gY2xzOyAvLyBrZWVwIHRoZSB2bm9kZSBpbiBzeW5jXG4gICAgICAgICAgICAgICAgbWUudm5vZGUgPSB2bm9kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IE5lby51dGlsLkFycmF5LmRpZmZlcmVuY2UoY2xzLCBvbGRDbHMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBOZW8udXRpbC5BcnJheS5kaWZmZXJlbmNlKG9sZENscywgY2xzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChOZW8uY3VycmVudFdvcmtlci5pc1NoYXJlZFdvcmtlcikge1xuICAgICAgICAgICAgICAgIG9wdHMuYXBwTmFtZSA9IG1lLmFwcE5hbWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywgb3B0cykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZS52bm9kZSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBhdHRlbXB0aW5nIHRvIHVwZGF0ZSBDb21wb25lbnQgY2xzJywgZXJyLCBtZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIHN0eWxlIGRlbHRhcyBmb3IgbmV3VmFsdWUgJiBvbGRWYWx1ZSBhbmQgYXBwbGllcyB0aGVtIGRpcmVjdGx5IHRvIHRoZSBET00uXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBuZXdWYWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW2lkPXRoaXMuaWRdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZVN0eWxlKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgaWQ9dGhpcy5pZCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGEgPSBTdHlsZS5jb21wYXJlU3R5bGVzKG5ld1ZhbHVlLCBvbGRWYWx1ZSksXG4gICAgICAgICAgICB2ZG9tICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQobWUudmRvbSwgaWQpLFxuICAgICAgICAgICAgdm5vZGUgPSBtZS52bm9kZSAmJiBWTm9kZVV0aWwuZmluZENoaWxkVm5vZGUobWUudm5vZGUsIGlkKSxcbiAgICAgICAgICAgIG9wdHM7XG5cbiAgICAgICAgaWYgKGRlbHRhKSB7XG4gICAgICAgICAgICB2ZG9tLnZkb20uc3R5bGUgPSBuZXdWYWx1ZTsgLy8ga2VlcCB0aGUgdmRvbSBpbiBzeW5jXG5cbiAgICAgICAgICAgIGlmICh2bm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2RlLnZub2RlLnN0eWxlID0gbmV3VmFsdWU7IC8vIGtlZXAgdGhlIHZub2RlIGluIHN5bmNcblxuICAgICAgICAgICAgICAgIG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBkZWx0YVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoTmVvLmN1cnJlbnRXb3JrZXIuaXNTaGFyZWRXb3JrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbWUuYXBwTmFtZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5zZW5kTWVzc2FnZSgnbWFpbicsIG9wdHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBjYWxsZWQgYWZ0ZXIgdGhlIHZkb20gY29uZmlnIGdldHMgY2hhbmdlZCBpbiBjYXNlIHRoZSBjb21wb25lbnQgaXMgYWxyZWFkeSBtb3VudGVkIChkZWx0YSB1cGRhdGVzKS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbVxuICAgICAqIEBwYXJhbSB7TmVvLnZkb20uVk5vZGV9IHZub2RlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gW3Jlc29sdmVdIHVzZWQgYnkgcHJvbWlzZVZkb21VcGRhdGUoKVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtyZWplY3RdIHVzZWQgYnkgcHJvbWlzZVZkb21VcGRhdGUoKVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVWZG9tKHZkb20sIHZub2RlLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG9wdHM7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVZkb20nLCBtZS5pZCwgTmVvLmNsb25lKHZkb20sIHRydWUpLCBOZW8uY2xvbmUodm5vZGUsIHRydWUpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVZkb20nLCBtZS5pc1Zkb21VcGRhdGluZyk7XG5cbiAgICAgICAgaWYgKG1lLmlzVmRvbVVwZGF0aW5nKSB7XG4gICAgICAgICAgICBtZS5uZWVkc1Zkb21VcGRhdGUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuaXNWZG9tVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgIHZkb20gOiB2ZG9tLFxuICAgICAgICAgICAgICAgIHZub2RlOiB2bm9kZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKE5lby5jdXJyZW50V29ya2VyLmlzU2hhcmVkV29ya2VyKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5hcHBOYW1lID0gbWUuYXBwTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLnZkb20uSGVscGVyLnVwZGF0ZShvcHRzKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdDb21wb25lbnQgdm5vZGUgdXBkYXRlZCcsIGRhdGEpO1xuICAgICAgICAgICAgICAgIG1lLnZub2RlICAgICAgICAgID0gZGF0YS52bm9kZTtcbiAgICAgICAgICAgICAgICBtZS5pc1Zkb21VcGRhdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChtZS5uZWVkc1Zkb21VcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUubmVlZHNWZG9tVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSBtZS52ZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gdXBkYXRlIGNvbXBvbmVudCBkb20nLCBlcnIsIG1lKTtcbiAgICAgICAgICAgICAgICBtZS5pc1Zkb21VcGRhdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBtYW5hZ2VyLkZvY3VzIGZpcmVzIHRoZSBldmVudCB3aGVuIHRoZSBjb21wb25lbnQgaWQgaXMgaW5jbHVkZWQgaW5zaWRlIHRoZSBkb20gaWQgcGF0aFxuICogQGV2ZW50IGZvY3VzRW50ZXJcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAqL1xuXG4vKipcbiAqIG1hbmFnZXIuRm9jdXMgZmlyZXMgdGhlIGV2ZW50IHdoZW4gdGhlIGNvbXBvbmVudCBpZCBpcyBub3QgaW5jbHVkZWQgaW5zaWRlIHRoZSBkb20gaWQgcGF0aFxuICogQGV2ZW50IGZvY3VzTGVhdmVcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggZG9tIGVsZW1lbnQgaWRzIHVwd2FyZHNcbiAqL1xuXG4vKipcbiAqIG1hbmFnZXIuRm9jdXMgZmlyZXMgdGhlIGV2ZW50IHdoZW4gdGhlIGNvbXBvbmVudCBpZCBpcyBpbmNsdWRlZCBpbnNpZGUgdGhlIGRvbSBpZCBwYXRoLCBidXQgdGhlIHBhdGggaXRzZWxmIGNoYW5nZWRcbiAqIEBldmVudCBmb2N1c01vdmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5uZXdQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gKiBAcGFyYW0ge0FycmF5fSAgb3B0cy5vbGRQYXRoIGRvbSBlbGVtZW50IGlkcyB1cHdhcmRzXG4gKi9cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhIGxhYmVsIHdpdGggYSB0ZXh0XG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5MYWJlbFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIExhYmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5MYWJlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5MYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdsYWJlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWxhYmVsJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tbGFiZWwnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGV4dF89JydcbiAgICAgICAgICovXG4gICAgICAgIHRleHRfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzogJ2xhYmVsJ31cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWcgICAgICA6ICdsYWJlbCcsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0ZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuICAgICAgICB2ZG9tLmh0bWwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKExhYmVsKTtcblxuZXhwb3J0IHtMYWJlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50ICBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IExheW91dEJhc2UgZnJvbSAnLi4vbGF5b3V0L0Jhc2UubWpzJztcbmltcG9ydCBMYXlvdXRDYXJkIGZyb20gJy4uL2xheW91dC9DYXJkLm1qcyc7XG5pbXBvcnQgTGF5b3V0Rml0ICBmcm9tICcuLi9sYXlvdXQvRml0Lm1qcyc7XG5pbXBvcnQgTGF5b3V0SGJveCBmcm9tICcuLi9sYXlvdXQvSEJveC5tanMnO1xuaW1wb3J0IExheW91dFZCb3ggZnJvbSAnLi4vbGF5b3V0L1ZCb3gubWpzJztcbmltcG9ydCBMb2dnZXIgICAgIGZyb20gJy4uL2NvcmUvTG9nZ2VyLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEJhc2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjb250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1EZWZhdWx0c189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGNvbmZpZyBvYmplY3RzfGluc3RhbmNlc3xtb2R1bGVzIGZvciBlYWNoIGNoaWxkIGNvbXBvbmVudFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXX0gaXRlbXNfPVtdXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqIGltcG9ydCBCdXR0b24gICAgICBmcm9tICcuLi9idXR0b24vQmFzZS5tanMnO1xuICAgICAgICAgKiBpbXBvcnQgTXlSZWRCdXR0b24gZnJvbSAnbXlhcHAvTXlSZWRCdXR0b24ubWpzJztcbiAgICAgICAgICogaW1wb3J0IFRvb2xiYXIgICAgIGZyb20gJy4uL2NvbnRhaW5lci9Ub29sYmFyLm1qcyc7XG4gICAgICAgICAqXG4gICAgICAgICAqIGxldCBteUJ1dHRvbiA9IE5lby5jcmVhdGUoQnV0dG9uLCB7XG4gICAgICAgICAqICAgICB0ZXh0OiAnQnV0dG9uMSdcbiAgICAgICAgICogfSk7XG4gICAgICAgICAqXG4gICAgICAgICAqIE5lby5jcmVhdGUoVG9vbGJhciwge1xuICAgICAgICAgKiAgICAgLy8uLi5cbiAgICAgICAgICogICAgIGl0ZW1zOiBbXG4gICAgICAgICAqICAgICAgICAgbXlCdXR0b24sICAgICAgICAgICAgICAvLyBwYXNzZWQgaW5zdGFuY2VcbiAgICAgICAgICogICAgICAgICB7XG4gICAgICAgICAqICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJywgICAvLyBieSBudHlwZVxuICAgICAgICAgKiAgICAgICAgICAgICB0ZXh0IDogJ0J1dHRvbiAyJ1xuICAgICAgICAgKiAgICAgICAgIH0sXG4gICAgICAgICAqICAgICAgICAge1xuICAgICAgICAgKiAgICAgICAgICAgICBtb2R1bGU6IEJ1dHRvbiwgICAgLy8gYnkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAgICAqICAgICAgICAgICAgIHRleHQgIDogJ0J1dHRvbiAzJ1xuICAgICAgICAgKiAgICAgICAgIH0sXG4gICAgICAgICAqICAgICAgICAgTXlSZWRCdXR0b24gICAgICAgICAgICAvLyB5b3UgY2FuIGRyb3AgaW1wb3J0ZWQgbW9kdWxlcyBkaXJlY3RseSBpbnRvIHRoZSBpdGVtcyBhcnJheVxuICAgICAgICAgKiAgICAgXVxuICAgICAgICAgKiB9KTtcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGxheW91dF89e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXRfOiB7XG4gICAgICAgICAgICBudHlwZTogJ3Zib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGNoYW5nZSB0aGUgb3JkZXIgY29uZmlncyBhcmUgYXBwbGllZCB0byB0aGlzIGluc3RhbmNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtwcmV2ZW50T3JpZ2luYWxDb25maWddIFRydWUgcHJldmVudHMgdGhlIGluc3RhbmNlIGZyb20gZ2V0dGluZyBhbiBvcmlnaW5hbENvbmZpZyBwcm9wZXJ0eVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIG1lcmdlQ29uZmlnKC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgPSBzdXBlci5tZXJnZUNvbmZpZyguLi5hcmdzKTtcblxuICAgICAgICAvLyBhdm9pZCBhbnkgaW50ZXJmZXJlbmNlIG9uIHByb3RvdHlwZSBsZXZlbFxuICAgICAgICAvLyBkb2VzIG5vdCBjbG9uZSBleGlzdGluZyBOZW8gaW5zdGFuY2VzXG5cbiAgICAgICAgaWYgKGNvbmZpZy5pdGVtRGVmYXVsdHMpIHtcbiAgICAgICAgICAgIG1lLl9pdGVtRGVmYXVsdHMgPSBOZW8uY2xvbmUoY29uZmlnLml0ZW1EZWZhdWx0cywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICBkZWxldGUgY29uZmlnLml0ZW1EZWZhdWx0cztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcuaXRlbXMpIHtcbiAgICAgICAgICAgIG1lLl9pdGVtcyA9IE5lby5jbG9uZShjb25maWcuaXRlbXMsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgZGVsZXRlIGNvbmZpZy5pdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGluIGNhc2UgdGhlIENvbnRhaW5lciBkb2VzIG5vdCBoYXZlIGEgbGF5b3V0IGNvbmZpZywgdGhlIHNldHRlciB3b24ndCB0cmlnZ2VyXG4gICAgICAgIG1lLl9sYXlvdXQgPSBtZS5jcmVhdGVMYXlvdXQobWUubGF5b3V0KTtcbiAgICAgICAgbWUuX2xheW91dC5hcHBseVJlbmRlckF0dHJpYnV0ZXMoKTtcblxuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbWUucGFyc2VJdGVtQ29uZmlncyhtZS5pdGVtcyk7XG4gICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGF0IHRoZSBsYXN0IGluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGFkZChpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBtZS5pbnNlcnQobWUuaXRlbXMgPyBtZS5pdGVtcy5sZW5ndGggOiAwLCBpdGVtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGFwcE5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFwcE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLml0ZW1zKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmFwcE5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8ubGF5b3V0LkJhc2V9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8ubGF5b3V0LkJhc2V9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGF5b3V0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgb2xkVmFsdWUucmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpO1xuICAgICAgICAgICAgdmFsdWUuYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUucmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5hcHBseUNoaWxkQXR0cmlidXRlcyhpdGVtLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zLFxuICAgICAgICAgICAgICAgIGkgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICA9IGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbXNbaV0udmRvbS5yZW1vdmVEb20pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaV0ubW91bnRlZCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcmVuZGVyaW5nIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UmVuZGVyaW5nKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcyxcbiAgICAgICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnZkb20ucmVtb3ZlRG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2ldLnJlbmRlcmluZyA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8ubGF5b3V0LkJhc2V9XG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldExheW91dCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVMYXlvdXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgICAgPSBtZS5faXRlbXMsXG4gICAgICAgICAgICBkZWZhdWx0cyA9IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgIGxheW91dCAgID0gbWUubGF5b3V0LFxuICAgICAgICAgICAgdmRvbSAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgdmRvbVJvb3QgPSBtZS5nZXRWZG9tUm9vdCgpO1xuXG4gICAgICAgIHZkb21Sb290LmNuID0gW107XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNvbnN0cnVjdG9yLmlzQ2xhc3MgJiYgaXRlbSBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0uaXNDbGFzcykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBOZW8uY3JlYXRlKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkOiBtZS5pZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvLm50eXBlKHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgIDogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZkb20gICA6IHtpbm5lckhUTUw6IGl0ZW19XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0cykge1xuICAgICAgICAgICAgICAgICAgICBOZW8uYXNzaWduRGVmYXVsdHMoaXRlbSwgZGVmYXVsdHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0ubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgOiBpdGVtLnN0eWxlIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXShpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXNbaW5kZXhdID0gaXRlbTtcblxuICAgICAgICAgICAgbGF5b3V0LmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4KTtcblxuICAgICAgICAgICAgdmRvbVJvb3QuY24ucHVzaChpdGVtLnZkb20pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xOZW8ubGF5b3V0LkJhc2V9IHZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtOZW8ubGF5b3V0LkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlTGF5b3V0KHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMYXlvdXRCYXNlICYmIHZhbHVlLmlzTGF5b3V0KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY29udGFpbmVySWQgPSBtZS5pZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBtZS5wYXJzZUxheW91dENsYXNzKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jb250YWluZXJJZCA9IG1lLmlkO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTmVvLm50eXBlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cm95cyBhbGwgY29tcG9uZW50cyBpbnNpZGUgdGhpcy5pdGVtcyBiZWZvcmUgdGhlIHN1cGVyKCkgY2FsbC5cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt1cGRhdGVQYXJlbnRWZG9tPWZhbHNlXSB0cnVlIHRvIHJlbW92ZSB0aGUgY29tcG9uZW50IGZyb20gdGhlIHBhcmVudCB2ZG9tID0+IHJlYWwgZG9tXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXSB0cnVlIHRvIHVwZGF0ZSB0aGUgdmRvbSBzaWxlbnRseSAodXNlZnVsIGZvciBkZXN0cm95aW5nIG11bHRpcGxlIGNoaWxkIGl0ZW1zIGluIGEgcm93KVxuICAgICAqL1xuICAgIGRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbT1mYWxzZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbSwgc2lsZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IGEgZGlmZmVyZW50IHZkb20gaXRlbXMgcm9vdCBpZiBuZWVkZWQgKHVzZWZ1bCBpbiBjYXNlIHRoaXMgY29udGFpbmVyIHVzZXMgYSB3cmFwcGVyIG5vZGUpLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdmRvbSBpdGVtcyByb290XG4gICAgICovXG4gICAgZ2V0VmRvbUl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgaW5kZXggb2YgYSBkaXJlY3QgY2hpbGQgY29tcG9uZW50IGluc2lkZSB0aGlzLml0ZW1zLlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfFN0cmluZ30gaXRlbUlkIEVpdGhlciB0aGUgaXRlbSByZWZlcmVuY2Ugb3IgdGhlIGl0ZW0gaWRcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfSAtMSBpbiBjYXNlIG5vIG1hdGNoIHdhcyBmb3VuZFxuICAgICAqL1xuICAgIGluZGV4T2YoaXRlbUlkKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IG1lLml0ZW1zICYmIG1lLml0ZW1zLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGlmICghTmVvLmlzU3RyaW5nKGl0ZW1JZCkpIHtcbiAgICAgICAgICAgIGl0ZW1JZCA9IGl0ZW1JZC5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChtZS5pdGVtc1tpXS5pZCA9PT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJ0cyBhbiBpdGVtIG9yIGFycmF5IG9mIGl0ZW1zIGF0IGEgc3BlY2lmaWMgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge09iamVjdHxBcnJheX0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8TmVvLmNvbXBvbmVudC5CYXNlW119XG4gICAgICovXG4gICAgaW5zZXJ0KGluZGV4LCBpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgdmRvbSAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY24sIGksIGxlbjtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICAgICAgaSAgID0gMDtcbiAgICAgICAgICAgIGxlbiA9IGl0ZW0ubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gdG9kbzogcmVuZGVyIGlzIGFzeW5jLCBlbnN1cmUgdGhlIG9yZGVyIG9mIGl0ZW1zIGlzIGNvcnJlY3RcblxuICAgICAgICAgICAgICAgIC8vIGluc2VydCB0aGUgYXJyYXkgYmFja3dhcmRzXG4gICAgICAgICAgICAgICAgaXRlbVtpXSA9IG1lLmluc2VydChpdGVtW2xlbiAtIDFdLCBpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoIShpdGVtIGluc3RhbmNlb2YgTmVvLmNvbXBvbmVudC5CYXNlKSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm1vZHVsZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTmFtZSA9IGl0ZW0ubW9kdWxlLnByb3RvdHlwZS5jbGFzc05hbWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4ubWUuaXRlbURlZmF1bHRzIHx8IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBhdXRvTW91bnQgIDogbWUubW91bnRlZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJbmRleDogaW5kZXgsXG5cbiAgICAgICAgICAgICAgICAgICAgLi4uaXRlbVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpdGVtID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXShpdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRJZCAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBpbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGRlZCB0aGUgdHJ1ZSBwYXJhbSA9PiBmb3IgY2FyZCBsYXlvdXRzLCB3ZSBkbyBub3Qgd2FudCBhIGR5bmFtaWNhbGx5IGluc2VydGVkIGNtcCB0byBnZXQgcmVtb3ZlZCByaWdodCBhd2F5XG4gICAgICAgICAgICAvLyBzaW5jZSBpdCB3aWxsIG1vc3QgbGlrZWx5IGdldCBhY3RpdmF0ZWQgcmlnaHQgYXdheVxuICAgICAgICAgICAgbWUubGF5b3V0LmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0sIGluZGV4LCB0cnVlKTtcblxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcblxuICAgICAgICAgICAgbWUuaXRlbXMgPSBpdGVtcztcblxuICAgICAgICAgICAgY24gPSB2ZG9tLmNuIHx8IHZkb20uY2hpbGROb2RlcyB8fCB2ZG9tLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICBjbi5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0udmRvbSk7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnaW5zZXJ0Jywge1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gOiBpdGVtXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vdmVzIGFuIGV4aXN0aW5nIGl0ZW0gdG8gYSBuZXcgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZnJvbUluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHRvSW5kZXhcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIG1vdmVUbyhmcm9tSW5kZXgsIHRvSW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbSA9IG1lLml0ZW1zW2Zyb21JbmRleF07XG5cbiAgICAgICAgaWYgKGZyb21JbmRleCAhPT0gdG9JbmRleCkge1xuICAgICAgICAgICAgbWUuc3dpdGNoSXRlbXMobWUuaXRlbXNbdG9JbmRleF0uaWQsIGl0ZW0uaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgcGFyc2VJdGVtQ29uZmlncyhpdGVtcykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpdGVtKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSAnaXRlbXMnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnBhcnNlSXRlbUNvbmZpZ3ModmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5zdGFydHNXaXRoKCdAY29uZmlnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc3Vic3RyKDgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWVbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1RoZSB1c2VkIEBjb25maWcgZG9lcyBub3QgZXhpc3Q6JywgdmFsdWUsIG1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1ba2V5XSA9IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqL1xuICAgIHBhcnNlTGF5b3V0Q2xhc3MoY29uZmlnKSB7XG4gICAgICAgIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSkge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5udHlwZS5pbmRleE9mKCdsYXlvdXQtJykgPCAwKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnLm50eXBlID0gJ2xheW91dC0nICsgY29uZmlnLm50eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbmZpZy5pbmRleE9mKCdsYXlvdXQtJykgPCAwKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYXlvdXQtJyArIGNvbmZpZ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogY29uZmlnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29udGFpbmVyIGl0ZW0gYnkgcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Rlc3Ryb3lJdGVtPXRydWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHJlbW92ZShjb21wb25lbnQsIGRlc3Ryb3lJdGVtPXRydWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgaXRlbXMgPSBbLi4udGhpcy5pdGVtc10sXG4gICAgICAgICAgICBpICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICA9IGl0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaXRlbXNbaV0uaWQgPT09IGNvbXBvbmVudC5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXQoaSwgZGVzdHJveUl0ZW0sIHNpbGVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29udGFpbmVyIGl0ZW0gYXQgYSBnaXZlbiBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Rlc3Ryb3lJdGVtPXRydWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHJlbW92ZUF0KGluZGV4LCBkZXN0cm95SXRlbT10cnVlLCBzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gbWUuaXRlbXMsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjbiwgaXRlbTtcblxuICAgICAgICBpZiAoaW5kZXggPj0gaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBOZW8ud2FybignQ29udGFpbmVyLnJlbW92ZUF0OiBpbmRleCA+PSBpdGVtcy5sZW5ndGguICcgKyBtZS5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbaW5kZXhdO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlIGl0ZW0nLCBpdGVtLmlkKTtcblxuICAgICAgICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgY24gPSB2ZG9tLmNuIHx8IHZkb20uY2hpbGROb2RlcyB8fCB2ZG9tLmNoaWxkcmVuO1xuXG4gICAgICAgICAgICBjbi5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICBtZVtzaWxlbnQgJiYgIWRlc3Ryb3lJdGVtID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuXG4gICAgICAgICAgICBpZiAoZGVzdHJveUl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0ubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdGhlIHBvc2l0aW9uIG9mIDIgZGlyZWN0IGNoaWxkIGl0ZW1zXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW0xaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbTJpZFxuICAgICAqL1xuICAgIHN3aXRjaEl0ZW1zKGl0ZW0xaWQsIGl0ZW0yaWQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbTFJbmRleCA9IG1lLmluZGV4T2YoaXRlbTFpZCksXG4gICAgICAgICAgICBpdGVtMkluZGV4ID0gbWUuaW5kZXhPZihpdGVtMmlkKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIE5lb0FycmF5Lm1vdmUobWUuaXRlbXMsICAgICAgICAgICAgICBpdGVtMkluZGV4LCBpdGVtMUluZGV4KTtcbiAgICAgICAgTmVvQXJyYXkubW92ZShtZS5nZXRWZG9tSXRlbXNSb290KCksIGl0ZW0ySW5kZXgsIGl0ZW0xSW5kZXgpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQmFzZSk7XG5cbmV4cG9ydCB7QmFzZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICBmcm9tICcuL1Rvb2xiYXIubWpzJztcblxuLyoqXG4gKiBBbiBleHRlbmRlZCBDb250YWluZXIgc3VwcG9ydGluZyBtdWx0aXBsZSBkb2NrZWQgaGVhZGVyIHRvb2xiYXJzXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5QYW5lbFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFBhbmVsIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5QYW5lbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5QYW5lbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdwYW5lbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdwYW5lbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXBhbmVsJywnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY29udGFpbmVyQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaGVhZGVyRGVmYXVsdHM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyRGVmYXVsdHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaGVhZGVycz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtcz17bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICAgICAgICovXG4gICAgICAgIF9sYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB2ZXJ0aWNhbEhlYWRlcnNGaXJzdD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdmVydGljYWxIZWFkZXJzRmlyc3Q6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBoZiA9IGNvbmZpZyAmJiBjb25maWcudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IHRydWUgfHwgbWUudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IHRydWU7XG5cbiAgICAgICAgaWYgKGhmKSB7XG4gICAgICAgICAgICBtZS5sYXlvdXQgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGhmICAgICAgICAgICAgICAgICAgID0gbWUudmVydGljYWxIZWFkZXJzRmlyc3QgPT09IGZhbHNlLFxuICAgICAgICAgICAgaGVhZGVycyAgICAgICAgICAgICAgPSBtZS5oZWFkZXJzIHx8IFtdLFxuICAgICAgICAgICAgYm90dG9tSGVhZGVycyAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8nYm90dG9tJzogJ3JpZ2h0Jyl9KSxcbiAgICAgICAgICAgIGxlZnRIZWFkZXJzICAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J2xlZnQnICA6ICd0b3AnKX0pLFxuICAgICAgICAgICAgcmlnaHRIZWFkZXJzICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8ncmlnaHQnIDogJ2JvdHRvbScpfSksXG4gICAgICAgICAgICB0b3BIZWFkZXJzICAgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPyd0b3AnICAgOiAnbGVmdCcpfSksXG4gICAgICAgICAgICBoYXNIb3Jpem9udGFsSGVhZGVycyA9IGJvdHRvbUhlYWRlcnMubGVuZ3RoID4gMCB8fCB0b3BIZWFkZXJzICAubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIGhhc1ZlcnRpY2FsSGVhZGVycyAgID0gbGVmdEhlYWRlcnMgIC5sZW5ndGggPiAwIHx8IHJpZ2h0SGVhZGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgICAgICAgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIGhvcml6b250YWxJdGVtcyAgICAgID0gW10sXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zICAgICAgICA9IFtdLFxuICAgICAgICAgICAgY29uZmlnO1xuXG4gICAgICAgIGlmIChoZWFkZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIE5lby5lcnJvcignUGFuZWwgd2l0aG91dCBoZWFkZXJzLCBwbGVhc2UgdXNlIGEgQ29udGFpbmVyIGluc3RlYWQnLCBtZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3BIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChoYXNWZXJ0aWNhbEhlYWRlcnMgJiYgKGhmICYmIGhhc0hvcml6b250YWxIZWFkZXJzIHx8ICFoZiAmJiBoYXNIb3Jpem9udGFsSGVhZGVycykpIHtcbiAgICAgICAgICAgIGxlZnRIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgOiAxLFxuICAgICAgICAgICAgICAgIGl0ZW1zICAgICAgIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICAgICAgLi4ubWUuY29udGFpbmVyQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaCh7Li4ubWUuaGVhZGVyRGVmYXVsdHMsIC4uLmNvbmZpZ30pO1xuXG4gICAgICAgICAgICByaWdodEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgaXRlbXMgOiBob3Jpem9udGFsSXRlbXMsXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAoaGYgPyAnaGJveCcgOiAndmJveCcpLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgICAgICAuLi5tZS5jb250YWluZXJDb25maWcgfHwge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaCh7Li4ubWUuaGVhZGVyRGVmYXVsdHMsIC4uLmNvbmZpZ30pO1xuICAgICAgICB9XG5cbiAgICAgICAgYm90dG9tSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcyA9IHZlcnRpY2FsSXRlbXM7XG5cbiAgICAgICAgbWUuaXRlbURlZmF1bHRzID0gbnVsbDtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGhlYWRlciB0aGUgaGVhZGVyIGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpIHtcbiAgICAgICAgbGV0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJ1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChoZWFkZXIudGV4dCkge1xuICAgICAgICAgICAgY29uZmlnLml0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1wYW5lbC1oZWFkZXItdGV4dCcsICduZW8tbGFiZWwnXSxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6IGhlYWRlci50ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgZGVsZXRlIGhlYWRlci50ZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXNzdW1pbmcgYWxsIGxhYmVscyBpbnNpZGUgYSBQYW5lbCBIZWFkZXIgYXJlIG1lYW50IHRvIGJlIHRpdGxlcyAtPiBsb29rIHRoZSBzYW1lIHdheVxuICAgICAgICBpZiAoTmVvLmlzQXJyYXkoaGVhZGVyLml0ZW1zKSkge1xuICAgICAgICAgICAgaGVhZGVyLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ubnR5cGUgPT09ICdsYWJlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbHMgPSBbJ25lby1wYW5lbC1oZWFkZXItdGV4dCcsICduZW8tbGFiZWwnXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7Li4uY29uZmlnLCAuLi5oZWFkZXJ9O1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUGFuZWwpO1xuXG5leHBvcnQge1BhbmVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCdXR0b24gICAgZnJvbSAnLi4vYnV0dG9uL0Jhc2UubWpzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTGFiZWwgICAgIGZyb20gJy4uL2NvbXBvbmVudC9MYWJlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVG9vbGJhclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgZG9ja1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gZG9ja1Bvc2l0aW9ucz1bJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGRvY2tQb3NpdGlvbnM6IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlRvb2xiYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVG9vbGJhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0b29sYmFyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby10b29sYmFyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdG9vbGJhciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkb2NrXz0ndG9wJ1xuICAgICAgICAgKi9cbiAgICAgICAgZG9ja186ICd0b3AnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHM9e250eXBlOiAnYnV0dG9uJ31cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgbnR5cGU6ICdidXR0b24nXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF9sYXlvdXQ9e250eXBlOiAnaGJveCcsIGFsaWduOiAnY2VudGVyJywgcGFjayA6ICdzdGFydCd9XG4gICAgICAgICAqL1xuICAgICAgICBfbGF5b3V0OiB7XG4gICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgcGFjayA6ICdzdGFydCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNvcnRhYmxlXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc29ydGFibGVfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kcmFnZ2FibGUudG9vbGJhci5Tb3J0Wm9uZXxudWxsfSBzb3J0Wm9uZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0Wm9uZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gc29ydFpvbmVDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc29ydFpvbmVDb25maWc6IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkb2NrIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERvY2sodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgPSBtZS5jbHMsXG4gICAgICAgICAgICBkb2NrUG9zaXRpb25zID0gbWUuZ2V0U3RhdGljQ29uZmlnKCdkb2NrUG9zaXRpb25zJyk7XG5cbiAgICAgICAgZG9ja1Bvc2l0aW9ucy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBOZW9BcnJheVtrZXkgPT09IHZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLWRvY2stJyArIGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmNscyAgICA9IGNscztcbiAgICAgICAgbWUubGF5b3V0ID0gbWUuZ2V0TGF5b3V0Q29uZmlnKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzb3J0YWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNvcnRhYmxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiAhbWUuc29ydFpvbmUpIHtcbiAgICAgICAgICAgIGltcG9ydChcbiAgICAgICAgICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnc3JjL2RyYWdnYWJsZS90b29sYmFyL1NvcnRab25lLW1qcy5qcycgKi9cbiAgICAgICAgICAgICAgICAnLi4vZHJhZ2dhYmxlL3Rvb2xiYXIvU29ydFpvbmUubWpzJ1xuICAgICAgICAgICAgICAgICkudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnNvcnRab25lID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICA6IG1vZHVsZS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lICAgICAgICAgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBib3VuZGFyeUNvbnRhaW5lcklkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgb3duZXIgICAgICAgICAgICAgIDogbWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLnNvcnRab25lQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IGRvY2sgcG9zaXRpb24gbWF0Y2hlcyBhIHZhbHVlIG9mIHRoZSBzdGF0aWMgZG9ja1Bvc2l0aW9ucyBjb25maWdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXREb2NrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZG9jaycsICdkb2NrUG9zaXRpb25zJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLl9pdGVtcztcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09ICctPicpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaW5kZXhdID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU6IENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggIDogMVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBsYXlvdXQgY29uZmlnIGRlcGVuZGluZyBvbiB0aGlzLmRvY2tcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBsYXlvdXRDb25maWdcbiAgICAgKi9cbiAgICBnZXRMYXlvdXRDb25maWcoKSB7XG4gICAgICAgIGxldCBsYXlvdXRDb25maWc7XG5cbiAgICAgICAgc3dpdGNoKHRoaXMuZG9jaykge1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAndmJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ3Zib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dENvbmZpZztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRvb2xiYXIpO1xuXG5leHBvcnQge1Rvb2xiYXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5WaWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5WaWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd2aWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0cnVlIGFwcGxpZXMgJ25lby1ib2R5LXZpZXdwb3J0JyB0byB0aGUgZG9jdW1lbnQuYm9keVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhcHBseUJvZHlDbHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXZpZXdwb3J0J11cbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwcGx5Qm9keUNscykge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFwcGx5Qm9keUNscyh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWJvZHktdmlld3BvcnQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXdwb3J0KTtcblxuZXhwb3J0IHtWaWV3cG9ydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgICAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uL21hbmFnZXIvQ29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgRG9tRXZlbnRNYW5hZ2VyICBmcm9tICcuLi9tYW5hZ2VyL0RvbUV2ZW50Lm1qcyc7XG5pbXBvcnQgTG9nZ2VyICAgICAgICAgICBmcm9tICcuLi9jb3JlL0xvZ2dlci5tanMnO1xuaW1wb3J0IE5lb0Z1bmN0aW9uICAgICAgZnJvbSAnLi4vdXRpbC9GdW5jdGlvbi5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udHJvbGxlci5Db21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkJhc2VcbiAqL1xuY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250cm9sbGVyLkNvbXBvbmVudCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRyb2xsZXIuQ29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3ZpZXctY29udHJvbGxlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjb21wb25lbnQtY29udHJvbGxlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlZmVyZW5jZXM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByZWZlcmVuY2VzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSB2aWV3Xz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHZpZXdfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUucmVmZXJlbmNlcyA9IHt9O1xuXG4gICAgICAgIE5lb0Z1bmN0aW9uLmNyZWF0ZVNlcXVlbmNlKG1lLnZpZXcsICdvbkNvbnN0cnVjdGVkJywgbWUub25WaWV3Q29uc3RydWN0ZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgd2hlbiBhY2Nlc3NpbmcgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0Vmlldyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXQodmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHZpZXcgY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFZpZXcodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbbnR5cGVdXG4gICAgICogQHJldHVybnMge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfVxuICAgICAqL1xuICAgIGdldFBhcmVudChudHlwZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHBhcmVudHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHModmlldyksXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBwYXJlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29udHJvbGxlciA9IHBhcmVudHNbaV0uY29udHJvbGxlcjtcblxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAobnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG50eXBlID09PSBjb250cm9sbGVyLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGhhbmRsZXJOYW1lXG4gICAgICogQHJldHVybnMge05lby5jb250cm9sbGVyLkNvbXBvbmVudHxudWxsfVxuICAgICAqL1xuICAgIGdldFBhcmVudEhhbmRsZXJTY29wZShoYW5kbGVyTmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHBhcmVudHMgPSBDb21wb25lbnRNYW5hZ2VyLmdldFBhcmVudHModmlldyksXG4gICAgICAgICAgICBpICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgPSBwYXJlbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbnRyb2xsZXI7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29udHJvbGxlciA9IHBhcmVudHNbaV0uY29udHJvbGxlcjtcblxuICAgICAgICAgICAgaWYgKGNvbnRyb2xsZXIgJiYgY29udHJvbGxlcltoYW5kbGVyTmFtZV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IGNsZWFudXAgbm8gbG9uZ2VyIGV4aXN0aW5nIHJlZmVyZW5jZXNcbiAgICAgKiB0b2RvOiB1cGRhdGUgY2hhbmdlZCByZWZlcmVuY2VzIChlLmcuIGNvbnRhaW5lci5yZW1vdmUoKSB0aGVuIGNvbnRhaW5lci5hZGQoKSB1c2luZyB0aGUgc2FtZSBrZXkpXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRSZWZlcmVuY2UobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50SWQgPSBtZS5yZWZlcmVuY2VzW25hbWVdLFxuICAgICAgICAgICAgY29tcG9uZW50O1xuXG4gICAgICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gTmVvLmdldENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gbWUudmlldy5kb3duKHtyZWZlcmVuY2U6IG5hbWV9KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIG1lLnJlZmVyZW5jZXNbbmFtZV0gPSBjb21wb25lbnQuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9uZW50IHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gdmlld1xuICAgICAqL1xuICAgIG9uVmlld0NvbnN0cnVjdGVkKHZpZXcpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZENhbGwgPSAhIXZpZXcsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMsIGV2ZW50SGFuZGxlciwgZm4sIHBhcmVudENvbnRyb2xsZXI7XG5cbiAgICAgICAgdmlldyA9IHZpZXcgfHwgbWUudmlldztcblxuICAgICAgICB2aWV3LmRvbUxpc3RlbmVycyA9IE5lby5jbG9uZSh2aWV3LmRvbUxpc3RlbmVycywgdHJ1ZSwgdHJ1ZSk7IC8vIGVuc3VyZSB0aGVyZSBpcyBubyBpbnRlcmZlcmVuY2Ugb24gcHJvdG90eXBlIGxldmVsXG4gICAgICAgIGRvbUxpc3RlbmVycyA9IHZpZXcuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGlmIChkb21MaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShkb21MaXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gW2RvbUxpc3RlbmVyc107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5mb3JFYWNoKGRvbUxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhkb21MaXN0ZW5lcikuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSAhPT0gJ3Njb3BlJyAmJiBrZXkgIT09ICdkZWxlZ2F0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkgJiYgdmFsdWUuaGFzT3duUHJvcGVydHkoJ2ZuJykgJiYgTmVvLmlzU3RyaW5nKHZhbHVlLmZuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHZhbHVlLmZuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVtldmVudEhhbmRsZXJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENvbnRyb2xsZXIgPSBtZS5nZXRQYXJlbnRIYW5kbGVyU2NvcGUoZXZlbnRIYW5kbGVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudENvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVW5rbm93biBkb21FdmVudCBoYW5kbGVyIGZvcicsIHZpZXcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbiAgICAgICAgICAgICAgID0gcGFyZW50Q29udHJvbGxlcltldmVudEhhbmRsZXJdLmJpbmQocGFyZW50Q29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcltrZXldID0gZm47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERvbUV2ZW50TWFuYWdlci51cGRhdGVMaXN0ZW5lclBsYWNlaG9sZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRJZCAgICAgICA6IHZpZXcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyTWV0aG9kOiBmbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJOYW1lICA6IGV2ZW50SGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgICAgICA6IHBhcmVudENvbnRyb2xsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4gICAgICAgICAgICAgICA9IG1lW2V2ZW50SGFuZGxlcl0uYmluZChtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyW2tleV0gPSBmbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb21FdmVudE1hbmFnZXIudXBkYXRlTGlzdGVuZXJQbGFjZWhvbGRlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRJZCAgICAgICA6IHZpZXcuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXJNZXRob2Q6IGZuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyTmFtZSAgOiBldmVudEhhbmRsZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWUgICAgICAgICA6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgIDogbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3Lmxpc3RlbmVycykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmlldy5saXN0ZW5lcnMpLmZvckVhY2goKFtuYW1lLCBsaXN0ZW5lcl0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShsaXN0ZW5lcikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE5lby5pc09iamVjdChrZXkpICYmIGtleS5oYXNPd25Qcm9wZXJ0eSgnZm4nKSAmJiBOZW8uaXNTdHJpbmcoa2V5LmZuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IGtleS5mbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVbZXZlbnRIYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1Vua25vd24gZXZlbnQgaGFuZGxlciBmb3InLCB2aWV3LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleS5mbiA9IG1lW2V2ZW50SGFuZGxlcl0uYmluZChtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3Lml0ZW1zKSB7XG4gICAgICAgICAgICB2aWV3Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUub25WaWV3Q29uc3RydWN0ZWQoaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNoaWxkQ2FsbCkge1xuICAgICAgICAgICAgbWUub25WaWV3UGFyc2VkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBpbnNpZGUgeW91ciB2aWV3IGNvbnRyb2xsZXJzIGFzIGEgc3RhcnRpbmcgcG9pbnQgaW4gY2FzZSB5b3UgbmVlZCByZWZlcmVuY2VzXG4gICAgICogKGluc3RlYWQgb2YgdXNpbmcgb25Db25zdHJ1Y3RlZCgpIGluc2lkZSB5b3VyIGNvbnRyb2xsZXIpXG4gICAgICovXG4gICAgb25WaWV3UGFyc2VkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgcGFyc2VDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gY29uZmlnIHx8IG1lLnZpZXcsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSB2aWV3LmRvbUxpc3RlbmVycyxcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlcjtcblxuICAgICAgICBpZiAoZG9tTGlzdGVuZXJzKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZG9tTGlzdGVuZXJzKSkge1xuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IFtkb21MaXN0ZW5lcnNdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMuZm9yRWFjaChkb21MaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoZG9tTGlzdGVuZXIpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkgIT09ICdzY29wZScgJiYga2V5ICE9PSAnZGVsZWdhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QodmFsdWUpICYmIHZhbHVlLmhhc093blByb3BlcnR5KCdmbicpICYmIE5lby5pc1N0cmluZyh2YWx1ZS5mbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSB2YWx1ZS5mbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVbZXZlbnRIYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ1Vua25vd24gZG9tRXZlbnQgaGFuZGxlciBmb3InLCB2aWV3LCBldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7Y29uc29sZS5sb2coJyMnLCBrZXksIG1lLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BhcnNlQ29uZmlnJywgZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJba2V5XSA9IG1lW2V2ZW50SGFuZGxlcl0uYmluZChtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3Lmxpc3RlbmVycykge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModmlldy5saXN0ZW5lcnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5ICE9PSAnc2NvcGUnICYmIGtleSAhPT0gJ2RlbGVnYXRlJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTmVvLmlzT2JqZWN0KHZhbHVlKSAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnZm4nKSAmJiBOZW8uaXNTdHJpbmcodmFsdWUuZm4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIgPSB2YWx1ZS5mbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWVbZXZlbnRIYW5kbGVyXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVW5rbm93biBldmVudCBoYW5kbGVyIGZvcicsIHZpZXcsIGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcubGlzdGVuZXJzW2tleV0gPSBtZVtldmVudEhhbmRsZXJdLmJpbmQobWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlldy5oZWFkZXJzKSB7XG4gICAgICAgICAgICB2aWV3LmhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghaGVhZGVyLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucGFyc2VDb25maWcoaGVhZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWV3Lml0ZW1zKSB7XG4gICAgICAgICAgICB2aWV3Lml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFpdGVtLmNvbnRyb2xsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucGFyc2VDb25maWcoaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENvbXBvbmVudCk7XG5cbmV4cG9ydCB7Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZGF0YS5Nb2RlbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBNb2RlbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZGF0YS5Nb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmRhdGEuTW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGZpZWxkc189W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZmllbGRzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5Xz0naWQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5XzogJ2lkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBzdG9yZUlkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIGNvbmZpZyB0byB0cnVlIGluIGNhc2UgeW91IHdhbnQgdG8gdHJhY2sgbW9kaWZpZWQgZmllbGRzLlxuICAgICAgICAgKiBCZSBhd2FyZSB0aGF0IHRoaXMgd2lsbCBkb3VibGUgdGhlIGFtb3VudCBvZiBkYXRhIGluc2lkZSBlYWNoIHJlY29yZCxcbiAgICAgICAgICogc2luY2UgZWFjaCBmaWVsZCB3aWxsIGdldCBhbiBvcmlnaW5hbCB2YWx1ZSBmbGFnLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB0cmFja01vZGlmaWVkRmllbGRzPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB0cmFja01vZGlmaWVkRmllbGRzOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBhZnRlclNldEZpZWxkcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgLy8gdG9kb1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXJTZXRGaWVsZHMnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgZmllbGQgY29uZmlnIGJ5IGEgZ2l2ZW4gZmllbGQgbmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9IFRoZSBmaWVsZCBjb25maWcgb2JqZWN0IG9yIG51bGwgaWYgbm8gbWF0Y2ggd2FzIGZvdW5kXG4gICAgICovXG4gICAgZ2V0RmllbGQoa2V5KSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgID0gMCxcbiAgICAgICAgICAgIGxlbiA9IG1lLmZpZWxkcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKG1lLmZpZWxkc1tpXS5uYW1lID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWUuZmllbGRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNb2RlbCk7XG5cbmV4cG9ydCB7TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBMb2dnZXIgZnJvbSAnLi4vY29yZS9Mb2dnZXIubWpzJztcbmltcG9ydCBNb2RlbCAgZnJvbSAnLi9Nb2RlbC5tanMnO1xuXG5sZXQgaW5zdGFuY2U7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kYXRhLlJlY29yZEZhY3RvcnlcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqIEBzaW5nbGV0b25cbiAqL1xuY2xhc3MgUmVjb3JkRmFjdG9yeSBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZGF0YS5SZWNvcmRGYWN0b3J5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZGF0YS5SZWNvcmRGYWN0b3J5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNpbmdsZXRvbj10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZXRvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbnRlcm5hbCByZWNvcmQgcHJlZml4IGZvciBvcmlnaW5hbCBmaWVsZCB2YWx1ZXMuXG4gICAgICAgICAqIE9ubHkgdXNlZCBpbiBjYXNlIHRoZSBtb2RlbCBoYXMgdHJhY2tNb2RpZmllZEZpZWxkcyBzZXQgdG8gdHJ1ZS5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBvdlByZWZpeD0nb3ZfJ1xuICAgICAgICAgKi9cbiAgICAgICAgb3ZQcmVmaXg6ICdvdl8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSByZWNvcmROYW1lc3BhY2U9J05lby5kYXRhLnJlY29yZC4nXG4gICAgICAgICAqL1xuICAgICAgICByZWNvcmROYW1lc3BhY2U6ICdOZW8uZGF0YS5yZWNvcmQuJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG1vZGVsXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgY3JlYXRlUmVjb3JkKG1vZGVsLCBjb25maWcpIHtcbiAgICAgICAgbGV0IHJlY29yZENsYXNzID0gTmVvLm5zKHRoaXMucmVjb3JkTmFtZXNwYWNlICsgbW9kZWwuY2xhc3NOYW1lKTtcblxuICAgICAgICBpZiAoIXJlY29yZENsYXNzKSB7XG4gICAgICAgICAgICByZWNvcmRDbGFzcyA9IHRoaXMuY3JlYXRlUmVjb3JkQ2xhc3MobW9kZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyByZWNvcmRDbGFzcyhjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5Nb2RlbH0gbW9kZWxcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGNyZWF0ZVJlY29yZENsYXNzKG1vZGVsKSB7XG4gICAgICAgIGlmIChtb2RlbCBpbnN0YW5jZW9mIE1vZGVsKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gdGhpcy5yZWNvcmROYW1lc3BhY2UgKyBtb2RlbC5jbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgbnMgICAgICAgID0gTmVvLm5zKGNsYXNzTmFtZSksXG4gICAgICAgICAgICAgICAga2V5LCBuc0FycmF5O1xuXG4gICAgICAgICAgICBtb2RlbC50cmFja01vZGlmaWVkRmllbGRzID0gdHJ1ZTsgLy8gdG9kbzogcmVtb3ZlLCBqdXN0IGZvciB0ZXN0aW5nXG5cbiAgICAgICAgICAgIGlmICghbnMpIHtcbiAgICAgICAgICAgICAgICBuc0FycmF5ID0gY2xhc3NOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICAgICAga2V5ICAgICA9IG5zQXJyYXkucG9wKCk7XG4gICAgICAgICAgICAgICAgbnMgICAgICA9IE5lby5ucyhuc0FycmF5LCB0cnVlKTtcbiAgICAgICAgICAgICAgICBuc1trZXldID0gY2xhc3MgUmVjb3JkIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2lzTW9kaWZpZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtb2RlbC5maWVsZHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyc2VkVmFsdWUgPSBpbnN0YW5jZS5wYXJzZVJlY29yZFZhbHVlKGZpZWxkLCBjb25maWdbZmllbGQubmFtZV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sICAgICAgPSBTeW1ib2woZmllbGQubmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzeW1ib2xdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHBhcnNlZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkLm5hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGUgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW3N5bWJvbF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gbWVbc3ltYm9sXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGluc3RhbmNlLnBhcnNlUmVjb3JkVmFsdWUoZmllbGQsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVbc3ltYm9sXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5faXNNb2RpZmllZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5faXNNb2RpZmllZCA9IGluc3RhbmNlLmlzTW9kaWZpZWQobWUsIG1vZGVsLnRyYWNrTW9kaWZpZWRGaWVsZHMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5vblJlY29yZENoYW5nZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQgICA6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwgICA6IG1vZGVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQgIDogbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGRpbmcgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIGVhY2ggZmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsLnRyYWNrTW9kaWZpZWRGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnRpZXNbaW5zdGFuY2Uub3ZQcmVmaXggKyBmaWVsZC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcGFyc2VkVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKG1lLCBwcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBuc1trZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIHZhbHVlIG9mIGEgY29uZmlnIGhhcyBjaGFuZ2VkXG4gICAgICogdG9kbzogd2UgY291bGQgY29tcGFyZSBvYmplY3RzICYgYXJyYXlzIGZvciBlcXVhbGl0eVxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcGFyYW0geyp9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBoYXNDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLnZhbHVlT2YoKSAhPT0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvbGRWYWx1ZSAhPT0gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB0cmFja01vZGlmaWVkRmllbGRzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSBhIGNoYW5nZSB3YXMgZm91bmRcbiAgICAgKi9cbiAgICBpc01vZGlmaWVkKHJlY29yZCwgdHJhY2tNb2RpZmllZEZpZWxkcykge1xuICAgICAgICBpZiAodHJhY2tNb2RpZmllZEZpZWxkcykge1xuICAgICAgICAgICAgbGV0IGZpZWxkcyA9IE9iamVjdC5rZXlzKHJlY29yZCksXG4gICAgICAgICAgICAgICAgaSAgICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gICAgPSBmaWVsZHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGZpZWxkO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZmllbGQgPSBmaWVsZHNbaV07XG5cbiAgICAgICAgICAgICAgICBpZiAocmVjb3JkW2ZpZWxkXSAhPT0gcmVjb3JkW3RoaXMub3ZQcmVmaXggKyBmaWVsZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVjb3JkLl9pc01vZGlmaWVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBmaWVsZE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbnxudWxsfSBudWxsIGluIGNhc2UgdGhlIG1vZGVsIGRvZXMgbm90IHVzZSB0cmFja01vZGlmaWVkRmllbGRzLCB0cnVlIGluIGNhc2UgYSBjaGFuZ2Ugd2FzIGZvdW5kXG4gICAgICovXG4gICAgaXNNb2RpZmllZEZpZWxkKHJlY29yZCwgZmllbGROYW1lKSB7XG4gICAgICAgIGlmICghcmVjb3JkLmhhc093blByb3BlcnR5KGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVGhlIHJlY29yZCBkb2VzIG5vdCBjb250YWluIHRoZSBmaWVsZCcsIGZpZWxkTmFtZSwgcmVjb3JkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWNvcmQuaGFzT3duUHJvcGVydHkodGhpcy5vdlByZWZpeCArIGZpZWxkTmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmRbZmllbGROYW1lXSAhPT0gcmVjb3JkW3RoaXMub3ZQcmVmaXggKyBmaWVsZE5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVzdHMgaWYgYSBnaXZlbiBvYmplY3QgaXMgYW4gaW5zdGFuY2Ugb2YgYSBjbGFzcyBjcmVhdGVkIGJ5IHRoaXMgZmFjdG9yeVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1JlY29yZChvYmopIHtcbiAgICAgICAgcmV0dXJuIG9iaiAmJiBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgJiYgb2JqLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdSZWNvcmQnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiBhIHJlY29yZCBmaWVsZC5cbiAgICAgKiBFLmcuIG15UmVjb3JkLmZvbyA9ICdiYXInO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMuZmllbGQgVGhlIG5hbWUgb2YgdGhlIGZpZWxkIHdoaWNoIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5Nb2RlbH0gb3B0cy5tb2RlbCBUaGUgbW9kZWwgaW5zdGFuY2Ugb2YgdGhlIGNoYW5nZWQgcmVjb3JkXG4gICAgICogQHBhcmFtIHsqfSBvcHRzLm9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMucmVjb3JkXG4gICAgICogQHBhcmFtIHsqfSBvcHRzLnZhbHVlXG4gICAgICovXG4gICAgb25SZWNvcmRDaGFuZ2Uob3B0cykge1xuICAgICAgICBsZXQgc3RvcmUgPSBOZW8uZ2V0KG9wdHMubW9kZWwuc3RvcmVJZCk7XG5cbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgICBzdG9yZS5vblJlY29yZENoYW5nZShvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IHBhcnNlIHZhbHVlIGZvciBtb3JlIGZpZWxkIHR5cGVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkXG4gICAgICogQHBhcmFtIHsqfSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHBhcnNlUmVjb3JkVmFsdWUoZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBmaWVsZC50eXBlICYmIGZpZWxkLnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmVjb3JkRmFjdG9yeSk7XG5cbmluc3RhbmNlID0gTmVvLmNyZWF0ZShSZWNvcmRGYWN0b3J5KTtcblxuTmVvLmFwcGx5VG9HbG9iYWxOcyhpbnN0YW5jZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyIsImltcG9ydCBCYXNlICAgICAgICAgICAgZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcyc7XG5pbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBNb2RlbCAgICAgICAgICAgZnJvbSAnLi9Nb2RlbC5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgICAgICBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcbmltcG9ydCBSZWNvcmRGYWN0b3J5ICAgZnJvbSAnLi9SZWNvcmRGYWN0b3J5Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kYXRhLlN0b3JlXG4gKiBAZXh0ZW5kcyBOZW8uY29sbGVjdGlvbi5CYXNlXG4gKi9cbmNsYXNzIFN0b3JlIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBhdXRvbWF0aWNhbGx5IGFwcGxpZXMgdGhlIGNvcmUvT2JzZXJ2YWJsZS5tanMgbWl4aW5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gb2JzZXJ2YWJsZT10cnVlXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG9ic2VydmFibGU6IHRydWVcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5kYXRhLlN0b3JlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZGF0YS5TdG9yZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzdG9yZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzdG9yZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhdXRvTG9hZD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b0xvYWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gZGF0YV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBpbml0aWFsRGF0YV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbERhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNHcm91cGVkPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc0dyb3VwZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNMb2FkZWQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGlzTG9hZGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzTG9hZGluZz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLk1vZGVsfSBtb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBsZXQgdGhlIGJhY2tlbmQgaGFuZGxlIHRoZSBmaWx0ZXJpbmcuXG4gICAgICAgICAqIFVzZWZ1bCBmb3IgYnVmZmVyZWQgc3RvcmVzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW90ZUZpbHRlcj1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlRmlsdGVyOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gbGV0IHRoZSBiYWNrZW5kIGhhbmRsZSB0aGUgc29ydGluZy5cbiAgICAgICAgICogVXNlZnVsIGZvciBidWZmZXJlZCBzdG9yZXNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcmVtb3RlU29ydD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3RlU29ydDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVcmwgZm9yIEFqYXggcmVxdWVzdHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHVybD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB1cmw6IG51bGxcbiAgICB9fVxuXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyB0b2RvXG4gICAgICAgIG1lLm9uKHtcbiAgICAgICAgICAgIG11dGF0ZTogbWUub25Db2xsZWN0aW9uTXV0YXRlLFxuICAgICAgICAgICAgc29ydCAgOiBtZS5vbkNvbGxlY3Rpb25Tb3J0LFxuICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5kYXRhKSB7XG4gICAgICAgICAgICBtZS5hZnRlclNldERhdGEobWUuZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuYXV0b0xvYWQpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyB0b2RvXG4gICAgICAgICAgICAgICAgbWUubG9hZCgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGF0YSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuY29uZmlnc0FwcGxpZWQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmluaXRpYWxEYXRhID0gWy4uLnZhbHVlXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5hZGQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbml0aWFsRGF0YSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyU2V0SW5pdGlhbERhdGEnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUuc3RvcmVJZCA9IHRoaXMuaWQ7XG4gICAgICAgICAgICBSZWNvcmRGYWN0b3J5LmNyZWF0ZVJlY29yZENsYXNzKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGJlZm9yZVNldERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBbdmFsdWVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyB0b2RvOiBhZGQgYSBjb25maWcgdG8gbWFrZSB0aGUgY2xvbmluZyBvcHRpb25hbFxuICAgICAgICAgICAgdmFsdWUgPSBOZW8uY2xvbmUodmFsdWUsIHRydWUpO1xuXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFSZWNvcmRGYWN0b3J5LmlzUmVjb3JkKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gUmVjb3JkRmFjdG9yeS5jcmVhdGVSZWNvcmQobWUubW9kZWwsIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiZWZvcmVTZXREYXRhJywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGJlZm9yZVNldEluaXRpYWxEYXRhKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoIXZhbHVlICYmIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5Nb2RlbH1cbiAgICAgKi9cbiAgICBiZWZvcmVTZXRNb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBNb2RlbCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY3JlYXRlUmVjb3JkKGNvbmZpZykge1xuICAgICAgICBSZWNvcmRGYWN0b3J5LmNyZWF0ZVJlY29yZChjb25maWcpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICB1cmw6IG1lLnVybFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuZGF0YSA9IEFycmF5LmlzQXJyYXkoZGF0YS5qc29uKSA/IGRhdGEuanNvbiA6IGRhdGEuanNvbi5kYXRhO1xuICAgICAgICAgICAgLy8gd2UgZG8gbm90IG5lZWQgdG8gZmlyZSBhIGxvYWQgZXZlbnQgPT4gb25Db2xsZWN0aW9uTXV0YXRlKClcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmb3IgTmVvLlhoci5yZXF1ZXN0JywgZXJyLCBtZS5pZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKi9cbiAgICBvbkNvbGxlY3Rpb25NdXRhdGUob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5jb25maWdzQXBwbGllZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uQ29sbGVjdGlvbk11dGF0ZScsIG9wdHMpO1xuICAgICAgICAgICAgbWUuZmlyZSgnbG9hZCcsIG1lLml0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZG86IGFkZCB3aWxsIGZpcmUgbXV0YXRlIGFuZCBzb3J0IHJpZ2h0IGFmdGVyIGFub3RoZXJcbiAgICAgKi9cbiAgICBvbkNvbGxlY3Rpb25Tb3J0KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5jb25maWdzQXBwbGllZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ29uQ29sbGVjdGlvblNvcnQnLCBtZS5jb2xsZWN0aW9uLml0ZW1zKTtcbiAgICAgICAgICAgIC8vIG1lLmZpcmUoJ2xvYWQnLCBtZS5pdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBhZnRlciBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgYSByZWNvcmQgZmllbGQuXG4gICAgICogRS5nLiBteVJlY29yZC5mb28gPSAnYmFyJztcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvcHRzLmZpZWxkIFRoZSBuYW1lIG9mIHRoZSBmaWVsZCB3aGljaCBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuTW9kZWx9IG9wdHMubW9kZWwgVGhlIG1vZGVsIGluc3RhbmNlIG9mIHRoZSBjaGFuZ2VkIHJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy5vbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLnJlY29yZFxuICAgICAqIEBwYXJhbSB7Kn0gb3B0cy52YWx1ZVxuICAgICAqL1xuICAgIG9uUmVjb3JkQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5maXJlKCdyZWNvcmRDaGFuZ2UnLCBvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMuZGlyZWN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMucHJvcGVydHlcbiAgICAgKi9cbiAgICBzb3J0KG9wdHM9e30pIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucmVtb3RlU29ydCkge1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvcnQnLCBvcHRzLnByb3BlcnR5LCBvcHRzLmRpcmVjdGlvbiwgbWUuY29uZmlnc0FwcGxpZWQpO1xuXG4gICAgICAgICAgICBpZiAobWUuY29uZmlnc0FwcGxpZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0cy5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuc29ydGVycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IG9wdHMuZGlyZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiBvcHRzLnByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnN0YXJ0VXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLnNvcnRlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWRkKFsuLi5tZS5pbml0aWFsRGF0YV0pO1xuICAgICAgICAgICAgICAgICAgICBtZS5lbmRVcGRhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3RvcmUpO1xuXG5leHBvcnQge1N0b3JlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBBYnN0cmFjdCBiYXNlIGNsYXNzIGZvciBmb3JtIGZpZWxkc1xuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuQmFzZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdiYXNlZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYmFzZWZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIgeyp9IHZhbHVlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZV86IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAgICogQHBhcmFtIHsqfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9IHRoaXMudmFsdWVcbiAgICAgKi9cbiAgICBnZXRTdWJtaXRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbi8qKlxuICogVGhlIGNoYW5nZSBldmVudCBmaXJlcyBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdldHMgY2hhbmdlZFxuICogQGV2ZW50IGNoYW5nZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHsqfSBvbGRWYWx1ZVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQmFzZVRyaWdnZXIgIGZyb20gJy4vdHJpZ2dlci9CYXNlLm1qcyc7XG5pbXBvcnQgQ2xlYXJUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9DbGVhci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICBmcm9tICcuLi8uLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgIGZyb20gJy4uLy4uL3V0aWwvVkRvbS5tanMnO1xuaW1wb3J0IFZOb2RlVXRpbCAgICBmcm9tICcuLi8uLi91dGlsL1ZOb2RlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlRleHRcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqL1xuY2xhc3MgVGV4dCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgbGFiZWxQb3NpdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gbGFiZWxQb3NpdGlvbnM9Wydib3R0b20nLCAnaW5saW5lJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJ11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFBvc2l0aW9uczogWydib3R0b20nLCAnaW5saW5lJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJ11cbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlRleHQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGV4dGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RleHRmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCB2YXJpYWJsZSB0byBzdG9yZSB0aGUgYWN0dWFsIHdpZHRoIGZvciB0aGUgbGFiZWwgY2VudGVyQm9yZGVyRWxcbiAgICAgICAgICogKG9ubHkgbmVlZGVkIGZvciBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJylcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IGNlbnRlckJvcmRlckVsV2lkdGg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjZW50ZXJCb3JkZXJFbFdpZHRoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBzaG93cyBhIGNsZWFyIHRyaWdnZXIgaW4gY2FzZSB0aGUgZmllbGQgaGFzIGEgbm9uIGVtcHR5IHZhbHVlLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjbGVhcmFibGVfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyYWJsZV86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHdpbGwgcmVzZXQgdGhlIGZpZWxkIHRvIGl0cyBpbml0aWFsIHZhbHVlIGNvbmZpZy5cbiAgICAgICAgICogUmVjb21tZW5kZWQgZm9yIGZpZWxkcyB3aXRoIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNsZWFyVG9PcmlnaW5hbFZhbHVlPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjbGVhclRvT3JpZ2luYWxWYWx1ZV86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGVfPSd0ZXh0J1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlXzogJ3RleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbFBvc2l0aW9uXz0nbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsUG9zaXRpb25fOiAnbGVmdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxhYmVsVGV4dF89J0xhYmVsVGV4dCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsVGV4dF86ICdMYWJlbFRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gbGFiZWxXaWR0aF89MTUwXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFdpZHRoXzogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHBsYWNlaG9sZGVyVGV4dF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXJUZXh0XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlcXVpcmVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVxdWlyZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXXxudWxsfSB0cmlnZ2Vyc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZyAgOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby10ZXh0ZmllbGQtbGFiZWwnXSxcbiAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWcgICAgICAgICA6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICBhdXRvY29ycmVjdCA6ICdvZmYnLFxuICAgICAgICAgICAgICAgIGNscyAgICAgICAgIDogWyduZW8tdGV4dGZpZWxkLWlucHV0J10sXG4gICAgICAgICAgICAgICAgZmxhZyAgICAgICAgOiAnbmVvLXJlYWwtaW5wdXQnLFxuICAgICAgICAgICAgICAgIHNwZWxsY2hlY2sgIDogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICA6IHt9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSwgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gbWUuZ2V0SW5wdXRFbCgpLFxuICAgICAgICAgICAgbGFiZWxFbCAgICAgID0gbWUuZ2V0TGFiZWxFbCgpO1xuXG4gICAgICAgIGlucHV0RWwuaWQgPSBsYWJlbEVsLmZvciA9IG1lLmlkICsgJy1pbnB1dCc7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudE9yaWdpbmFsQ29uZmlnXSBUcnVlIHByZXZlbnRzIHRoZSBpbnN0YW5jZSBmcm9tIGdldHRpbmcgYW4gb3JpZ2luYWxDb25maWcgcHJvcGVydHlcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBtZXJnZUNvbmZpZyguLi5hcmdzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb25maWcgICA9IHN1cGVyLm1lcmdlQ29uZmlnKC4uLmFyZ3MpLFxuICAgICAgICAgICAgdHJpZ2dlcnMgPSBjb25maWcudHJpZ2dlcnMgfHwgbWUudHJpZ2dlcnM7XG5cbiAgICAgICAgbWVbdHJpZ2dlcnMgPyAndHJpZ2dlcnMnIDogJ190cmlnZ2VycyddID0gdHJpZ2dlcnM7XG5cbiAgICAgICAgZGVsZXRlIGNvbmZpZy50cmlnZ2VycztcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNsZWFyYWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENsZWFyYWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHRyaWdnZXJzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdHJpZ2dlcnMgPSBtZS50cmlnZ2VycyB8fCBbXTtcbiAgICAgICAgICAgIHRyaWdnZXJzLnVuc2hpZnQoQ2xlYXJUcmlnZ2VyKTtcbiAgICAgICAgICAgIG1lLnRyaWdnZXJzID0gdHJpZ2dlcnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdjbGVhcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjbGVhclRvT3JpZ2luYWxWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENsZWFyVG9PcmlnaW5hbFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmZpcmUoJ2NoYW5nZUNsZWFyVG9PcmlnaW5hbFZhbHVlJywge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICBtZS51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dFR5cGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRUeXBlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ3R5cGUnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFBvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzLFxuICAgICAgICAgICAgY2VudGVyQm9yZGVyRWxDbHMsIGlzRW1wdHksIHZkb207XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ2xhYmVsLScgKyBvbGRWYWx1ZSk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICdsYWJlbC0nICsgdmFsdWUpO1xuICAgICAgICBtZVtvbGRWYWx1ZSA9PT0gJ2lubGluZScgfHwgdmFsdWUgPT09ICdpbmxpbmUnID8gJ19jbHMnIDogJ2NscyddID0gY2xzOyAvLyBzaWxlbnQgdXBkYXRlIGlmIG5lZWRlZFxuXG4gICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdID0gbWUuZ2V0TGFiZWxFbCgpOyAvLyByZW1vdmUgdGhlIHdyYXBwZXJcblxuICAgICAgICAgICAgdmRvbS5jblswXS53aWR0aCA9IG1lLmxhYmVsV2lkdGg7XG5cbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUudXBkYXRlSW5wdXRXaWR0aCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgY2VudGVyQm9yZGVyRWxDbHMgPSBbJ25lby1jZW50ZXItYm9yZGVyJ107XG4gICAgICAgICAgICBpc0VtcHR5ICAgICAgICAgICA9IG1lLmlzRW1wdHkoKTtcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgICAgID0gbWUudmRvbTtcblxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgY2VudGVyQm9yZGVyRWxDbHMucHVzaCgnbmVvLWZsb2F0LWFib3ZlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB2ZG9tLmNuWzBdLndpZHRoO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzBdID0ge1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tbGFiZWwtd3JhcHBlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1sZWZ0LWJvcmRlciddXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBjbHM6IGNlbnRlckJvcmRlckVsQ2xzLFxuICAgICAgICAgICAgICAgICAgICBjbiA6IFt2ZG9tLmNuWzBdXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yaWdodC1ib3JkZXInXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLnVwZGF0ZUlucHV0V2lkdGgoKTtcblxuICAgICAgICAgICAgaWYgKCFpc0VtcHR5KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZUNlbnRlckJvcmRlckVsV2lkdGgoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxUZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXNFbXB0eSA9IG1lLmlzRW1wdHkoKSxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmdldExhYmVsRWwoKS5pbm5lckhUTUwgPSB2YWx1ZTtcblxuICAgICAgICBpZiAobWUuaGlkZUxhYmVsKSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgICAgIGlmICghaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWUuZ2V0Q2VudGVyQm9yZGVyRWwoKS53aWR0aDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSh2ZG9tKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUudXBkYXRlQ2VudGVyQm9yZGVyRWxXaWR0aChpc0VtcHR5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbFBvc2l0aW9uICE9PSAnaW5saW5lJykge1xuICAgICAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICB2ZG9tICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgbGFiZWwgPSB2ZG9tLmNuWzBdO1xuXG4gICAgICAgICAgICBsYWJlbC53aWR0aCA9IHZhbHVlO1xuXG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgaWYgKCFtZS5oaWRlTGFiZWwpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVJbnB1dFdpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdGhpcy5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDZW50ZXJCb3JkZXJFbFdpZHRoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHBsYWNlaG9sZGVyVGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UGxhY2Vob2xkZXJUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNoYW5nZUlucHV0RWxLZXkoJ3BsYWNlaG9sZGVyJywgdmFsdWUgPT09ICcnID8gbnVsbCA6IHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHJlcXVpcmVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UmVxdWlyZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgncmVxdWlyZWQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0cmlnZ2VycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VHJpZ2dlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IHZkb20uY25bMV0sIC8vIGlucHV0RWwgb3IgaW5wdXRXcmFwcGVyRWxcbiAgICAgICAgICAgIHByZVRyaWdnZXJzICA9IFtdLFxuICAgICAgICAgICAgcG9zdFRyaWdnZXJzID0gW10sXG4gICAgICAgICAgICB3aWR0aDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSAmJiBbLi4udmFsdWVdLCBvbGRWYWx1ZSAmJiBbLi4ub2xkVmFsdWVdKTtcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5nZXRUcmlnZ2VyKGl0ZW0udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5hbGlnbiA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICAgICAgICAgICAgICBwcmVUcmlnZ2Vycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RUcmlnZ2Vycy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwb3N0VHJpZ2dlcnMuc29ydCgoYSwgYikgPT4gYi53ZWlnaHQgLSBhLndlaWdodCk7IC8vIERFU0NcbiAgICAgICAgICAgIHByZVRyaWdnZXJzIC5zb3J0KChhLCBiKSA9PiBhLndlaWdodCAtIGIud2VpZ2h0KTsgLy8gQVNDXG5cbiAgICAgICAgICAgIHBvc3RUcmlnZ2VycyA9IHBvc3RUcmlnZ2Vycy5tYXAoYSA9PiBhLnZkb20pO1xuICAgICAgICAgICAgcHJlVHJpZ2dlcnMgID0gcHJlVHJpZ2dlcnMgLm1hcChhID0+IGEudmRvbSk7XG5cbiAgICAgICAgICAgIGlmIChpbnB1dEVsLnRhZyA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIC8vIHdyYXAgdGhlIGlucHV0IHRhZ1xuICAgICAgICAgICAgICAgIHZkb20uY25bMV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ25lby1pbnB1dC13cmFwcGVyJ10sXG4gICAgICAgICAgICAgICAgICAgIGNuICAgOiBbLi4ucHJlVHJpZ2dlcnMsIGlucHV0RWwsIC4uLnBvc3RUcmlnZ2Vyc10sXG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBtZS5pZCArICctaW5wdXQtd3JhcHBlcicsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBpbnB1dEVsLndpZHRoXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnB1dEVsLndpZHRoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbnB1dEVsLmNuID0gWy4uLnByZVRyaWdnZXJzLCBtZS5nZXRJbnB1dEVsKCksIC4uLnBvc3RUcmlnZ2Vyc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbC50YWcgIT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICAvLyByZXBsYWNpbmcgdGhlIGlucHV0IHdyYXBwZXIgZGl2IHdpdGggdGhlIGlucHV0IHRhZ1xuICAgICAgICAgICAgICAgIHdpZHRoID0gaW5wdXRFbC53aWR0aDtcbiAgICAgICAgICAgICAgICB2ZG9tLmNuWzFdID0gbWUuZ2V0SW5wdXRFbCgpO1xuICAgICAgICAgICAgICAgIHZkb20uY25bMV0ud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS51cGRhdGVUcmlnZ2VyVm5vZGVzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogdG9kbzogYWRkIHZhbGlkYXRpb24gbG9naWNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIG1lLmdldElucHV0RWwoKS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIGlmICghIXZhbHVlICE9PSAhIW9sZFZhbHVlKSB7IC8vIGNoYW5nZSBmcm9tIGVtcHR5IHRvIG5vbiBlbXB0eVxuICAgICAgICAgICAgTmVvQXJyYXlbdmFsdWUgJiYgdmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwID8gJ2FkZCcgOiAncmVtb3ZlJ10obWUuX2NscywgJ25lby1oYXMtY29udGVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXlbbWUub3JpZ2luYWxDb25maWcudmFsdWUgIT09IHZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10obWUuX2NscywgJ25lby1pcy1kaXJ0eScpO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgd2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYSBzaGFsbG93IGNvcHkgb2YgdGhlIHRyaWdnZXJzIGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gdmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlR2V0VHJpZ2dlcnModmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gWy4uLnZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBsYWJlbFBvc2l0aW9uIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBiZWZvcmVTZXRMYWJlbFBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnbGFiZWxQb3NpdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHRyaWdnZXJzIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdHxPYmplY3RbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXX0gdGhlIHBhcnNlZCB0cmlnZ2VycyBjb25maWdcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge09iamVjdHxPYmplY3RbXX1cbiAgICAgKi9cbiAgICBiZWZvcmVTZXRUcmlnZ2Vycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgdmFsdWUgPSBbXTtcbiAgICAgICAgfSBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVtpbmRleF0gPSBOZW8uY3JlYXRlKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICA6IG1lLmdldFRyaWdnZXJJZChpdGVtLnByb3RvdHlwZS50eXBlKSxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IG1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEoaXRlbSBpbnN0YW5jZW9mIEJhc2VUcmlnZ2VyKSkge1xuICAgICAgICAgICAgICAgIGlmICghaXRlbS5tb2R1bGUgJiYgIWl0ZW0ubnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5udHlwZSA9ICd0cmlnZ2VyJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5tb2R1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBpdGVtLm1vZHVsZS5wcm90b3R5cGUuY2xhc3NOYW1lO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmlkICAgICAgICA9IG1lLmdldFRyaWdnZXJJZChpdGVtLm1vZHVsZS5wcm90b3R5cGUudHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsdWVbaW5kZXhdID0gTmVvW2l0ZW0uY2xhc3NOYW1lID8gJ2NyZWF0ZScgOiAnbnR5cGUnXSh7Li4uaXRlbSwgZmllbGQ6IG1lfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGFuZ2VzIHRoZSB2YWx1ZSBvZiBhIGlucHV0RWwgdmRvbSBvYmplY3QgYXR0cmlidXRlIG9yIHJlbW92ZXMgaXQgaW4gY2FzZSBpdCBoYXMgbm8gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtBcnJheXxOdW1iZXJ8T2JqZWN0fFN0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGNoYW5nZUlucHV0RWxLZXkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUgfHwgdmFsdWUgPT09IDApIHtcbiAgICAgICAgICAgIG1lLmdldElucHV0RWwoKVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuZ2V0SW5wdXRFbCgpW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGZpZWxkIHRvIGl0cyBvcmlnaW5hbCB2YWx1ZSBvciBudWxsIGRlcGVuZGluZyBvbiB0aGUgY2xlYXJUb09yaWdpbmFsVmFsdWUgY29uZmlnXG4gICAgICovXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudmFsdWUgPSBtZS5jbGVhclRvT3JpZ2luYWxWYWx1ZSA/IG1lLm9yaWdpbmFsQ29uZmlnLnZhbHVlIDogbnVsbDtcbiAgICAgICAgbWUuZmlyZSgnY2xlYXInKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRDZW50ZXJCb3JkZXJFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHtjbHM6ICduZW8tY2VudGVyLWJvcmRlcid9KTtcbiAgICAgICAgcmV0dXJuIGVsICYmIGVsLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZ2V0SW5wdXRFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHtmbGFnOiAnbmVvLXJlYWwtaW5wdXQnfSk7XG4gICAgICAgIHJldHVybiBlbCAmJiBlbC52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEVsSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJy1pbnB1dCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbmV3IGlucHV0V2lkdGggYmFzZWQgb24gdGhlIGxhYmVsV2lkdGggJiB0b3RhbCB3aWR0aFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ8bnVsbH0gbnVsbCBpbiBjYXNlIHRoaXMud2lkdGggaXMgdW5rbm93blxuICAgICAqL1xuICAgIGdldElucHV0V2lkdGgoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZ25vcmVMYWJlbCA9IG1lLmhpZGVMYWJlbCB8fCBtZS5sYWJlbFBvc2l0aW9uID09PSAnYm90dG9tJyB8fCBtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyB8fCBtZS5sYWJlbFBvc2l0aW9uID09PSAndG9wJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggID0gaWdub3JlTGFiZWwgPyAwIDogbWUubGFiZWxXaWR0aCxcbiAgICAgICAgICAgIHdpZHRoICAgICAgID0gbWUud2lkdGg7XG5cbiAgICAgICAgaWYgKGxhYmVsV2lkdGggJiYgd2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh3aWR0aCkgLSBwYXJzZUludChsYWJlbFdpZHRoKTtcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fG51bGx9XG4gICAgICovXG4gICAgZ2V0TGFiZWxFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHt0YWc6ICdsYWJlbCd9KTtcbiAgICAgICAgcmV0dXJuIGVsICYmIGVsLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqIEByZXR1cm5zIHtOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRUcmlnZ2VyKHR5cGUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyaWdnZXJzID0gbWUudHJpZ2dlcnMgfHwgW10sXG4gICAgICAgICAgICBpICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICA9IHRyaWdnZXJzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodHJpZ2dlcnNbaV0udHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2Vyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldFRyaWdnZXJCeUlkKGlkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0cmlnZ2VycyA9IG1lLnRyaWdnZXJzIHx8IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgPSB0cmlnZ2Vycy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRyaWdnZXJzW2ldLmlkID09PSBpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cmlnZ2Vyc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gVGhlIHRyaWdnZXIgbm9kZSBpZFxuICAgICAqL1xuICAgIGdldFRyaWdnZXJJZCh0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJy10cmlnZ2VyLScgKyB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGEgdHJpZ2dlciBieSBhIGdpdmVuIHR5cGUgY29uZmlnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNUcmlnZ2VyKHR5cGUpIHtcbiAgICAgICAgbGV0IHRyaWdnZXJzID0gdGhpcy50cmlnZ2VycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gdHJpZ2dlcnMubGVuZ3RoO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0cmlnZ2Vyc1tpXS50eXBlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0VtcHR5KCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGggPiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnJlcXVpcmVkICYmICghbWUudmFsdWUgfHwgbWUudmFsdWUgJiYgbWUudmFsdWUubGVuZ3RoIDwgMSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5pc1ZhbGlkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRm9jdXNFbnRlcihwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzLFxuICAgICAgICAgICAgdmRvbTtcblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLWZvY3VzJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcblxuICAgICAgICBpZiAobWUubGFiZWxQb3NpdGlvbiA9PT0gJ2lubGluZScpIHtcbiAgICAgICAgICAgIGlmIChtZS5jZW50ZXJCb3JkZXJFbFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG4gICAgICAgICAgICAgICAgbWUuZ2V0Q2VudGVyQm9yZGVyRWwoKS53aWR0aCA9IG1lLmNlbnRlckJvcmRlckVsV2lkdGg7XG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZUNlbnRlckJvcmRlckVsV2lkdGgoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBwYXRoXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRm9jdXNMZWF2ZShwYXRoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjZW50ZXJCb3JkZXJFbCA9IG1lLmdldENlbnRlckJvcmRlckVsKCksIC8vIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnXG4gICAgICAgICAgICBjbHMgICAgICAgICAgICA9IG1lLmNscyxcbiAgICAgICAgICAgIHZkb207XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1mb2N1cycpO1xuXG4gICAgICAgIGlmIChjZW50ZXJCb3JkZXJFbCAmJiBtZS5pc0VtcHR5KCkpIHtcbiAgICAgICAgICAgIG1lLl9jbHMgPSBjbHM7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuICAgICAgICAgICAgZGVsZXRlIGNlbnRlckJvcmRlckVsLndpZHRoO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgb2xkVmFsdWUgPSBtZS52YWx1ZSxcbiAgICAgICAgICAgIHZub2RlICAgID0gVk5vZGVVdGlsLmZpbmRDaGlsZFZub2RlKG1lLnZub2RlLCB7bm9kZU5hbWU6ICdpbnB1dCd9KTtcblxuICAgICAgICBpZiAodm5vZGUpIHtcbiAgICAgICAgICAgIC8vIHJlcXVpcmVkIGZvciB2YWxpZGF0aW9uIC0+IHJldmVydCBhIHdyb25nIHVzZXIgaW5wdXRcbiAgICAgICAgICAgIHZub2RlLnZub2RlLmF0dHJpYnV0ZXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCB0cmlnZ2VycyBvZiBhIGdpdmVuIHR5cGVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV0gdHJ1ZSBwcmV2ZW50cyBhIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW3RyaWdnZXJTb3VyY2VdIHBhc3MgYSBzaGFsbG93IGNvcHkgb2YgdGhpcy50cmlnZ2Vyc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgYSB0cmlnZ2VyIHdhcyBmb3VuZCAmIHJlbW92ZWRcbiAgICAgKi9cbiAgICByZW1vdmVUcmlnZ2VyKHR5cGUsIHNpbGVudD1mYWxzZSwgdHJpZ2dlclNvdXJjZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWF0Y2ggPSBmYWxzZSxcbiAgICAgICAgICAgIHRyaWdnZXJzID0gdHJpZ2dlclNvdXJjZSB8fCBtZS50cmlnZ2VycyB8fCBbXSxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gdHJpZ2dlcnMubGVuZ3RoLFxuICAgICAgICAgICAgdHJpZ2dlcjtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0cmlnZ2VyID0gdHJpZ2dlcnNbaV07XG5cbiAgICAgICAgICAgIGlmICh0cmlnZ2VyLnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUodHJpZ2dlcnMsIHRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIGxlbi0tO1xuICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNNYXRjaCAmJiAhc2lsZW50KSB7XG4gICAgICAgICAgICBtZS50cmlnZ2VycyA9IHRyaWdnZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGhhc01hdGNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZWQgZm9yIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnIHRvIGFkanVzdCB0aGUgdG9wIGJvcmRlciBtYXRjaGluZyB0byB0aGUgbGVuZ3RoIG9mIHRoZSBsYWJlbFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV0gdHJ1ZSB0byBnZXQgdGhlIHZhbHVlLCBidXQgbm90IGFwcGx5IGl0IHRvIHRoZSBET01cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlQ2VudGVyQm9yZGVyRWxXaWR0aChzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgaWQ6IG1lLmdldENlbnRlckJvcmRlckVsKCkuaWRcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuY2VudGVyQm9yZGVyRWxXaWR0aCA9IE1hdGgucm91bmQoZGF0YS53aWR0aCAqIC43KSArIDg7XG5cbiAgICAgICAgICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgbWUuZ2V0Q2VudGVyQm9yZGVyRWwoKS53aWR0aCA9IG1lLmNlbnRlckJvcmRlckVsV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbmV3IGlucHV0V2lkdGggYmFzZWQgb24gdGhlIGxhYmVsV2lkdGggJiB0b3RhbCB3aWR0aFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVJbnB1dFdpZHRoKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbnB1dFdpZHRoID0gbWUuZ2V0SW5wdXRXaWR0aCgpLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKGlucHV0V2lkdGggIT09IG51bGwgJiYgaW5wdXRXaWR0aCAhPT0gbWUud2lkdGgpIHtcbiAgICAgICAgICAgIHZkb20uY25bMV0ud2lkdGggPSBpbnB1dFdpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVsZXRlIHZkb20uY25bMV0ud2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSB0cmlnZ2VycyBkbyBub3QgZ2V0IHJlbmRlcmVkLCBhc3NpZ24gdGhlIHJlbGV2YW50IHByb3BzXG4gICAgICogdG9kbzogdGhpcyBjb3VsZCBiZSBoYW5kbGVkIGJ5IGNvbXBvbmVudC5CYXNlXG4gICAgICovXG4gICAgdXBkYXRlVHJpZ2dlclZub2RlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0cmlnZ2VyUm9vdCAgPSBtZS52bm9kZSAmJiBtZS52bm9kZS5jaGlsZE5vZGVzWzFdLFxuICAgICAgICAgICAgY2hpbGROb2RlcyAgID0gdHJpZ2dlclJvb3QgJiYgdHJpZ2dlclJvb3QuY2hpbGROb2RlcyB8fCBbXSxcbiAgICAgICAgICAgIHRyaWdnZXI7XG5cbiAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKHZub2RlID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXIgPSBtZS5nZXRUcmlnZ2VyQnlJZCh2bm9kZS5pZCk7XG5cbiAgICAgICAgICAgIGlmICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0cmlnZ2VyLCB7XG4gICAgICAgICAgICAgICAgICAgIHZub2RlICAgIDogdm5vZGUsXG4gICAgICAgICAgICAgICAgICAgIF9yZW5kZXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgX21vdW50ZWQgOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVGV4dCk7XG5cbmV4cG9ydCB7VGV4dCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgIGZyb20gJy4uLy4uLy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBmb3JtIGZpZWxkIFRyaWdnZXJzXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBhbGlnblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYWxpZ25WYWx1ZXM9WydlbmQnLCAnc3RhcnQnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduVmFsdWVzOiBbJ2VuZCcsICdzdGFydCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhbGlnbl89J2VuZCdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduXzogJ2VuZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWZpZWxkLXRyaWdnZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1maWVsZC10cmlnZ2VyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZm9ybS5maWVsZC5CYXNlfG51bGx9IGZpZWxkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpZWxkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZGVuXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZGVuXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNsc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NvcGUgb2YgdGhlIHRyaWdnZXIgaGFuZGxlclxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29yZS5CYXNlfG51bGx9IHNjb3BlPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd09uSG92ZXI9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdiYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnYmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWJJbmRleDogLTF9XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFiSW5kZXg6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHdlaWdodF89MTBcbiAgICAgICAgICovXG4gICAgICAgIHdlaWdodF86IDEwXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgICA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUsIHRydWUpLFxuICAgICAgICAgICAgZmllbGRMaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25UcmlnZ2VyQ2xpY2ssXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS5zaG93T25Ib3Zlcikge1xuICAgICAgICAgICAgbWUuaGlkZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICBtZS5maWVsZC5vbignY29uc3RydWN0ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmllbGRMaXN0ZW5lcnMgPSAhbWUuZmllbGQuZG9tTGlzdGVuZXJzID8gW10gOiBOZW8uY2xvbmUobWUuZmllbGQuZG9tTGlzdGVuZXJzLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBmaWVsZExpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2VlbnRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4gICAgOiBtZS5vbk1vdXNlRW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlbGVhdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuICAgIDogbWUub25Nb3VzZUxlYXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbWUuZmllbGQuZG9tTGlzdGVuZXJzID0gZmllbGRMaXN0ZW5lcnM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LCBtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhbGlnbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBbGlnbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IGNscyA9IHRoaXMuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID09PSAnc3RhcnQnID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLWFsaWduLXN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZGVuIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZGVuKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSAgPSB0aGlzLnZkb20sXG4gICAgICAgICAgICBzdHlsZSA9IHZkb20uc3R5bGUgfHwge307XG5cbiAgICAgICAgc3R5bGUuZGlzcGxheSA9IHZhbHVlID8gJ25vbmUnIDogJ2lubGluZS1ibG9jayc7XG4gICAgICAgIHRoaXMudmRvbSAgPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaWNvbkNscyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJY29uQ2xzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgY2xzID0gdGhpcy5jbHM7XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGFsaWduIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0QWxpZ24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnbicsICdhbGlnblZhbHVlcycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuZmllbGQ7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNsaWNrIGRvbUV2ZW50IGxpc3RlbmVyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgc2NvcGUgPSBtZS5zY29wZSB8fCBtZTtcblxuICAgICAgICBpZiAobWUuaGFuZGxlcikge1xuICAgICAgICAgICAgc2NvcGVbbWUuaGFuZGxlcl0uY2FsbChzY29wZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uLy4uLy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBDbGVhciBUcmlnZ2VyIHRvIHJlbW92ZSB0aGUgaW5wdXQgdmFsdWUgb2YgVGV4dEZpZWxkcyBvciBzdWJjbGFzc2VzXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5DbGVhclxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKi9cbmNsYXNzIENsZWFyIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQ2xlYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuQ2xlYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1jbGVhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLWNsZWFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tdHJpZ2dlci1jbGVhciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWZpZWxkLXRyaWdnZXInLCAnbmVvLXRyaWdnZXItY2xlYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ2xzPSdmYSBmYS10aW1lcydcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS10aW1lcycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nY2xlYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdjbGVhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHdlaWdodF89MjBcbiAgICAgICAgICovXG4gICAgICAgIHdlaWdodDogMjBcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5maWVsZC5vbih7XG4gICAgICAgICAgICBjaGFuZ2UgICAgICAgICAgICAgICAgICAgIDogbWUub25GaWVsZENoYW5nZSxcbiAgICAgICAgICAgIGNoYW5nZUNsZWFyVG9PcmlnaW5hbFZhbHVlOiBtZS5vbkZpZWxkQ2hhbmdlLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmhpZGRlbiA9IG1lLmdldEhpZGRlblN0YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRkZW4gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRkZW4odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBjbHMgPSB0aGlzLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1pcy1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSB0cmlnZ2VyIHNob3VsZCBiZSBoaWRkZW5cbiAgICAgKi9cbiAgICBnZXRIaWRkZW5TdGF0ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZpZWxkID0gbWUuZmllbGQsXG4gICAgICAgICAgICB2YWx1ZSA9IGZpZWxkLnZhbHVlO1xuXG4gICAgICAgIGlmIChmaWVsZC5jbGVhclRvT3JpZ2luYWxWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBmaWVsZC5vcmlnaW5hbENvbmZpZy52YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gJzAnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gIWZpZWxkLnZhbHVlIHx8IHZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKi9cbiAgICBvbkZpZWxkQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgdGhpcy5oaWRkZW4gPSB0aGlzLmdldEhpZGRlblN0YXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5jbGVhcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2xlYXIpO1xuXG5leHBvcnQge0NsZWFyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb3JlQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBUaGUgYmFzZSBjbGFzcyBmb3IgYWxsIG90aGVyIGxheW91dHMuXG4gKiBVc2UgaXQgZGlyZWN0bHkgaW4gY2FzZSB5b3Ugd2FudCB0byBjcmVhdGUgYSBjb250YWluZXIgd2l0aG91dCBhIGxheW91dC5cbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkJhc2VcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvcmVCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5CYXNlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIElkIG9mIHRoZSBDb250YWluZXIgaW5zdGFuY2UgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgICAgICogQG1lbWJlciB7P1N0cmluZ30gY29udGFpbmVySWQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXJJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElkZW50aWZpZXIgZm9yIGFsbCBjbGFzc2VzIHRoYXQgZXh0ZW5kIGxheW91dC5CYXNlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlzTGF5b3V0PXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNMYXlvdXQ6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge31cblxuICAgIC8qKlxuICAgICAqIFBsYWNlaG9sZGVyIE1ldGhvZFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7fVxuXG4gICAgLyoqXG4gICAgICogUGxhY2Vob2xkZXIgTWV0aG9kXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVtb3ZlQ2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHt9XG5cbiAgICAvKipcbiAgICAgKiBQbGFjZWhvbGRlciBNZXRob2RcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHt9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5DYXJkXG4gKiBAZXh0ZW5kcyBOZW8ubGF5b3V0LkJhc2VcbiAqL1xuY2xhc3MgQ2FyZCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBmb3IgYW4gYWN0aXZlIGl0ZW0gaW5zaWRlIHRoZSBjYXJkIGxheW91dFxuICAgICAgICAgKiBAbWVtYmVyIGFjdGl2ZUl0ZW1DbHNcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlSXRlbUNsczogJ2FjdGl2ZS1pdGVtJyxcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIENTUyBjbGFzcyBmb3IgYW4gaW5hY3RpdmUgaXRlbSBpbnNpZGUgdGhlIGNhcmQgbGF5b3V0XG4gICAgICAgICAqIEBtZW1iZXIgaW5hY3RpdmVJdGVtQ2xzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGluYWN0aXZlSXRlbUNsczogJ2luYWN0aXZlLWl0ZW0nLFxuICAgICAgICAvKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGZvciBhbiBpdGVtIGluc2lkZSB0aGUgY2FyZCBsYXlvdXRcbiAgICAgICAgICogQG1lbWJlciBpdGVtQ2xzXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1DbHM6ICduZW8tbGF5b3V0LWNhcmQtaXRlbSdcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuQ2FyZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5DYXJkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1jYXJkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1jYXJkJyxcbiAgICAgICAgLypcbiAgICAgICAgICogVGhlIGl0ZW0gaW5kZXggb2YgdGhlIGNhcmQsIHdoaWNoIGlzIGN1cnJlbnRseSBhY3RpdmUuXG4gICAgICAgICAqIENoYW5nZSB0aGlzIHZhbHVlIHRvIGFjdGl2YXRlIGEgZGlmZmVyZW50IGNhcmQuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlSW5kZXhfPTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUluZGV4XzogMCxcbiAgICAgICAgLypcbiAgICAgICAgICogUmVtb3ZlIHRoZSBET00gb2YgaW5hY3RpdmUgY2FyZHMuXG4gICAgICAgICAqIFRoaXMgd2lsbCBrZWVwIHRoZSBpbnN0YW5jZXMgJiB2ZG9tIHRyZWVzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW92ZUluYWN0aXZlQ2FyZHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlSW5hY3RpdmVDYXJkczogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBNb2RpZmllcyB0aGUgQ1NTIGNsYXNzZXMgb2YgdGhlIGNvbnRhaW5lciBpdGVtcyB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBBdXRvbWF0aWNhbGx5IGdldHMgdHJpZ2dlcmVkIGFmdGVyIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiBhY3RpdmVJbmRleC5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBY3RpdmVJbmRleCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIHNDZmcgICAgICA9IG1lLmdldFN0YXRpY0NvbmZpZygpLFxuICAgICAgICAgICAgaXNBY3RpdmVJbmRleCwgY2xzLCBpdGVtcywgdmRvbTtcblxuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpdGVtcyA9IGNvbnRhaW5lci5pdGVtcztcbiAgICAgICAgICAgIHZkb20gID0gY29udGFpbmVyLnZkb207XG5cbiAgICAgICAgICAgIGlmICghaXRlbXNbdmFsdWVdKSB7XG4gICAgICAgICAgICAgICAgTmVvLmVycm9yKCdUcnlpbmcgdG8gYWN0aXZhdGUgYSBub24gZXhpc3RpbmcgY2FyZCcsIHZhbHVlLCBpdGVtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2xzICAgICAgICAgICA9IGl0ZW0uY2xzO1xuICAgICAgICAgICAgICAgIGlzQWN0aXZlSW5kZXggPSBpbmRleCA9PT0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBpc0FjdGl2ZUluZGV4ID8gc0NmZy5pbmFjdGl2ZUl0ZW1DbHMgOiBzQ2ZnLmFjdGl2ZUl0ZW1DbHMpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZCggICBjbHMsIGlzQWN0aXZlSW5kZXggPyBzQ2ZnLmFjdGl2ZUl0ZW1DbHMgICA6IHNDZmcuaW5hY3RpdmVJdGVtQ2xzKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZS5yZW1vdmVJbmFjdGl2ZUNhcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uX2NscyA9IGNsczsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmdldFZkb21Sb290KCkuY2xzID0gY2xzO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZkb20ucmVtb3ZlRG9tID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbHMgPSBjbHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZS5yZW1vdmVJbmFjdGl2ZUNhcmRzKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGx5IHNldHMgdGhlIENTUyBjbGFzc2VzIG9mIHRoZSBjb250YWluZXIgaXRlbXMgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtrZWVwSW5Eb209ZmFsc2VdXG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSwgaW5kZXgsIGtlZXBJbkRvbT1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpc0FjdGl2ZUluZGV4ID0gbWUuYWN0aXZlSW5kZXggPT09IGluZGV4LFxuICAgICAgICAgICAgc0NmZyAgICAgICAgICA9IG1lLmdldFN0YXRpY0NvbmZpZygpLFxuICAgICAgICAgICAgY2hpbGRDbHMgICAgICA9IGl0ZW0uY2xzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICA9IGl0ZW0udmRvbTtcblxuICAgICAgICBOZW9BcnJheS5hZGQoY2hpbGRDbHMsIHNDZmcuaXRlbUNscyk7XG4gICAgICAgIE5lb0FycmF5LmFkZChjaGlsZENscywgaXNBY3RpdmVJbmRleCA/IHNDZmcuYWN0aXZlSXRlbUNscyA6IHNDZmcuaW5hY3RpdmVJdGVtQ2xzKTtcblxuICAgICAgICBpZiAoIWtlZXBJbkRvbSAmJiBtZS5yZW1vdmVJbmFjdGl2ZUNhcmRzKSB7XG4gICAgICAgICAgICBpdGVtLl9jbHMgPSBjaGlsZENsczsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgdmRvbS5yZW1vdmVEb20gPSAhaXNBY3RpdmVJbmRleDtcbiAgICAgICAgICAgIGl0ZW0udmRvbSA9IHZkb207XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmNscyA9IGNoaWxkQ2xzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBDU1MgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICovXG4gICAgYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkNhcmQ6IGFwcGx5UmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscyB8fCBbXSwgJ25lby1sYXlvdXQtY2FyZCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHN3aXRjaGluZyB0byBhIGRpZmZlcmVudCBsYXlvdXQuXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5DYXJkOiByZW1vdmVSZW5kZXJBdHRyaWJ1dGVzIC0+IGNvbnRhaW5lciBub3QgeWV0IGNyZWF0ZWQnLCBtZS5jb250YWluZXJJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLWxheW91dC1jYXJkJyk7XG5cbiAgICAgICAgY29udGFpbmVyLmNscyA9IGNscztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENhcmQpO1xuXG5leHBvcnQge0NhcmQgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmxheW91dC5GaXRcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuQmFzZVxuICovXG5jbGFzcyBGaXQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5GaXQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5sYXlvdXQuRml0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1maXQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWZpdCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGx5IHNldHMgdGhlIENTUyBjbGFzc2VzIG9mIHRoZSBjb250YWluZXIgaXRlbXMgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNoaWxkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIGlmICghY2hpbGQuaWdub3JlTGF5b3V0KSB7XG4gICAgICAgICAgICBjaGlsZC5jbHMgPSBOZW9BcnJheS51bmlvbihjaGlsZC5jbHMsICduZW8tbGF5b3V0LWZpdC1pdGVtJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIENTUyBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKi9cbiAgICBhcHBseVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRml0OiBhcHBseVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMgfHwgW10sICduZW8tbGF5b3V0LWZpdCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHN3aXRjaGluZyB0byBhIGRpZmZlcmVudCBsYXlvdXQuXG4gICAgICovXG4gICAgcmVtb3ZlUmVuZGVyQXR0cmlidXRlcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLmNvbnRhaW5lcklkKSxcbiAgICAgICAgICAgIGNscyAgICAgICA9IGNvbnRhaW5lciAmJiBjb250YWluZXIuY2xzO1xuXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ2xheW91dC5GaXQ6IHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMgLT4gY29udGFpbmVyIG5vdCB5ZXQgY3JlYXRlZCcsIG1lLmNvbnRhaW5lcklkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tbGF5b3V0LWZpdCcpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhGaXQpO1xuXG5leHBvcnQge0ZpdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LkZsZXhib3hcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuQmFzZVxuICovXG5jbGFzcyBGbGV4Ym94IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBhbGlnblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYWxpZ25WYWx1ZXM9WydjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgJ3N0cmV0Y2gnLCBudWxsXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduVmFsdWVzOiBbJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCAnc3RyZXRjaCcsIG51bGxdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBkaXJlY3Rpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGRpcmVjdGlvblZhbHVlcz1bJ2NvbHVtbicsICdjb2x1bW4tcmV2ZXJzZScsICdyb3cnLCAncm93LXJldmVyc2UnLCBudWxsXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvblZhbHVlczogWydjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnLCAncm93JywgJ3Jvdy1yZXZlcnNlJywgbnVsbF0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIHBhY2tcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHBhY2tWYWx1ZXM9WydjZW50ZXInLCAnZW5kJywgJ3N0YXJ0JywgbnVsbF1cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrVmFsdWVzOiBbJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCBudWxsXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3Igd3JhcFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gd3JhcFZhbHVlcz1bJ25vd3JhcCcsICd3cmFwJywgJ3dyYXAtcmV2ZXJzZSddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcFZhbHVlczogWydub3dyYXAnLCAnd3JhcCcsICd3cmFwLXJldmVyc2UnXSxcbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuRmxleGJveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5GbGV4Ym94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC1mbGV4Ym94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC1mbGV4Ym94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogJ2NlbnRlcicsICdlbmQnLCAnc3RhcnQnLCAnc3RyZXRjaCcsIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFsaWduXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbl86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6ICdjb2x1bW4nLCAnY29sdW1uLXJldmVyc2UnLCAncm93JywgJ3Jvdy1yZXZlcnNlJywgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGlyZWN0aW9uXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkaXJlY3Rpb25fOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAnY2VudGVyJywgJ2VuZCcsICdzdGFydCcsIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHBhY2tfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBhY2tfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ1NTIGNsYXNzTmFtZSBwcmVmaXhcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwcmVmaXg9J25lby1mbGV4LSdcbiAgICAgICAgICovXG4gICAgICAgIHByZWZpeDogJ25lby1mbGV4LScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXM6IG5vd3JhcCwgd3JhcCwgd3JhcHJldmVyc2VcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB3cmFwXz0nbm93cmFwJ1xuICAgICAgICAgKi9cbiAgICAgICAgd3JhcF86ICdub3dyYXAnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwiYWxpZ25cIiBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QWxpZ24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICdhbGlnbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwiZGlyZWN0aW9uXCIgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERpcmVjdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2RpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwicGFja1wiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQYWNrKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZUlucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAncGFjaycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIENvbnRhaW5lciBDU1MgY2xzIGFmdGVyIFwid3JhcFwiIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFdyYXAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd3cmFwJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgZmxleCB2YWx1ZSB0byBhbiBpdGVtIG9mIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gaXRlbVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgbGV0IHN0eWxlID0gaXRlbS53cmFwcGVyU3R5bGU7XG5cbiAgICAgICAgc3R5bGUuZmxleCA9IHN0eWxlLmZsZXggfHwgaXRlbS5mbGV4IHx8ICh0aGlzLmFsaWduID09PSAnc3RyZXRjaCcgPyAxIDogJzAgMSBhdXRvJyk7XG4gICAgICAgIGl0ZW0ud3JhcHBlclN0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBDU1MgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvXG4gICAgICovXG4gICAgYXBwbHlSZW5kZXJBdHRyaWJ1dGVzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY29udGFpbmVySWQpLFxuICAgICAgICAgICAgcHJlZml4ICAgID0gbWUucHJlZml4LFxuICAgICAgICAgICAgY2xzICAgICAgID0gY29udGFpbmVyICYmIGNvbnRhaW5lci5jbHM7XG5cbiAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgIE5lby5sb2dFcnJvcignbGF5b3V0LkZsZXhib3g6IGFwcGx5UmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscyB8fCBbXSwgcHJlZml4ICsgJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChtZS5hbGlnbikge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgJ2FsaWduLScgKyBtZS5hbGlnbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgJ2RpcmVjdGlvbi0nICsgbWUuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUucGFjaykge1xuICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgcHJlZml4ICsgJ3BhY2stJyArIG1lLnBhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS53cmFwKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyAnd3JhcC0nICsgbWUud3JhcCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBcImFsaWduXCIgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRBbGlnbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnYWxpZ25WYWx1ZXMnLCAnYWxpZ24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIG5ldyB2YWx1ZSBmb3IgXCJkaXJlY3Rpb25cIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldERpcmVjdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGVzdElucHV0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnZGlyZWN0aW9uVmFsdWVzJywgJ2RpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBcInBhY2tcIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldFBhY2sodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3BhY2tWYWx1ZXMnLCAncGFjaycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBcIndyYXBcIiBpcyB2YWxpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIGJlZm9yZVNldFdyYXAodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3dyYXBWYWx1ZXMnLCAnd3JhcCcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIENTUyBydWxlcyBmcm9tIGFuIGNvbnRhaW5lciBpdGVtIHRoaXMgbGF5b3V0IGlzIGJvdW5kIHRvLlxuICAgICAqIEdldHMgY2FsbGVkIHdoZW4gc3dpdGNoaW5nIHRvIGEgZGlmZmVyZW50IGxheW91dC5cbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gaXRlbVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdmVDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge1xuICAgICAgICBsZXQgc3R5bGUgPSBpdGVtLndyYXBwZXJTdHlsZSB8fCB7fTtcblxuICAgICAgICBzdHlsZS5mbGV4ID0gaXRlbS5mbGV4IHx8IG51bGw7XG4gICAgICAgIGl0ZW0ud3JhcHBlclN0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgQ1NTIHJ1bGVzIGZyb20gdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0by5cbiAgICAgKiBHZXRzIGNhbGxlZCB3aGVuIHN3aXRjaGluZyB0byBhIGRpZmZlcmVudCBsYXlvdXQuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZVJlbmRlckF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBwcmVmaXggICAgPSBtZS5wcmVmaXgsXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdsYXlvdXQuRmxleGJveDogcmVtb3ZlUmVuZGVyQXR0cmlidXRlcyAtPiBjb250YWluZXIgbm90IHlldCBjcmVhdGVkJywgbWUuY29udGFpbmVySWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgIGlmIChtZS5hbGlnbikge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ2FsaWduLScgKyBtZS5hbGlnbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLmRpcmVjdGlvbikge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ2RpcmVjdGlvbi0nICsgbWUuZGlyZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWUucGFjaykge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgJ3BhY2stJyArIG1lLnBhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZS53cmFwKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBwcmVmaXggKyAnd3JhcC0nICsgbWUud3JhcCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgbmV3IHZhbHVlIGZvciBwcm9wZXJ0eU5hbWUgaXMgdmFsaWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbGlkVmFsdWVzTmFtZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wZXJ0eU5hbWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqL1xuICAgIHRlc3RJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgdmFsaWRWYWx1ZXNOYW1lLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgY29uc3QgdmFsaWRWYWx1ZXMgPSB0aGlzLmdldFN0YXRpY0NvbmZpZyh2YWxpZFZhbHVlc05hbWUpO1xuXG4gICAgICAgIGlmICghTmVvQXJyYXkuaGFzSXRlbSh2YWxpZFZhbHVlcywgdmFsdWUpKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IodGhpcy5jb250YWluZXJJZCwgJy0+IGxheW91dDogc3VwcG9ydGVkIHZhbHVlcyBmb3IgXCInICsgcHJvcGVydHlOYW1lICsgJ1wiIGFyZScgLCB2YWxpZFZhbHVlcyk7XG4gICAgICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgQ29udGFpbmVyIENTUyBjbHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5TmFtZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVJbnB1dFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChtZS5jb250YWluZXJJZCksXG4gICAgICAgICAgICBwcmVmaXggICAgPSBtZS5wcmVmaXgsXG4gICAgICAgICAgICBjbHMgICAgICAgPSBjb250YWluZXIgJiYgY29udGFpbmVyLmNscztcblxuICAgICAgICBpZiAoY29udGFpbmVyICYmIGNvbnRhaW5lci5yZW5kZXJlZCkge1xuICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgcHJlZml4ICsgcHJvcGVydHlOYW1lICsgJy0nICsgb2xkVmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBwcmVmaXggKyBwcm9wZXJ0eU5hbWUgKyAnLScgKyB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5jbHMgPSBjbHM7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEZsZXhib3gpO1xuXG5leHBvcnQge0ZsZXhib3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IEZsZXhib3ggZnJvbSAnLi9GbGV4Ym94Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5sYXlvdXQuSEJveFxuICogQGV4dGVuZHMgTmVvLmxheW91dC5GbGV4Ym94XG4gKi9cbmNsYXNzIEhCb3ggZXh0ZW5kcyBGbGV4Ym94IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxheW91dC5IQm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8ubGF5b3V0LkhCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGF5b3V0LWhib3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbGF5b3V0LWhib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkaXJlY3Rpb249J3JvdydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZGlyZWN0aW9uOiAncm93J1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBmbGV4IHZhbHVlIHRvIGFuIGl0ZW0gb2YgdGhlIGNvbnRhaW5lciB0aGlzIGxheW91dCBpcyBib3VuZCB0b1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICovXG4gICAgYXBwbHlDaGlsZEF0dHJpYnV0ZXMoaXRlbSkge1xuICAgICAgICAvLyBEbyBub3QgYXBwbHkgZmxleCBpZiBmaXhlZCB3aWR0aFxuICAgICAgICBpZiAoIWl0ZW0ud2lkdGgpIHtcbiAgICAgICAgICAgIHN1cGVyLmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIQm94KTtcblxuZXhwb3J0IHtIQm94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBGbGV4Ym94IGZyb20gJy4vRmxleGJveC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGF5b3V0LlZCb3hcbiAqIEBleHRlbmRzIE5lby5sYXlvdXQuRmxleGJveFxuICovXG5jbGFzcyBWQm94IGV4dGVuZHMgRmxleGJveCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5sYXlvdXQuVkJveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxheW91dC5WQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2xheW91dC12Ym94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2xheW91dC12Ym94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlyZWN0aW9uPSdjb2x1bW4nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyB0aGUgZmxleCB2YWx1ZSB0byBhbiBpdGVtIG9mIHRoZSBjb250YWluZXIgdGhpcyBsYXlvdXQgaXMgYm91bmQgdG9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIGFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pIHtcbiAgICAgICAgLy8gRG8gbm90IGFwcGx5IGZsZXggaWYgZml4ZWQgaGVpZ2h0XG4gICAgICAgIGlmICghaXRlbS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHN1cGVyLmFwcGx5Q2hpbGRBdHRyaWJ1dGVzKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWQm94KTtcblxuZXhwb3J0IHtWQm94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuaW1wb3J0IExpc3RNb2RlbCAgICAgICBmcm9tICcuLi9zZWxlY3Rpb24vTGlzdE1vZGVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vZGF0YS9TdG9yZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGlzdC5CYXNlXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQmFzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5saXN0LkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5saXN0LkJhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdsaXN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgd2lsbCBkZXN0cm95IHRoZSB1c2VkIGNvbGxlY3Rpb24gLyBzdG9yZSB3aGVuIHRoZSBjb21wb25lbnQgZ2V0cyBkZXN0cm95ZWRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b0Rlc3Ryb3lTdG9yZT10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvRGVzdHJveVN0b3JlOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1saXN0LWNvbnRhaW5lcicsJ25lby1saXN0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tbGlzdC1jb250YWluZXInLCAnbmVvLWxpc3QnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpc2FibGVTZWxlY3Rpb25fPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlU2VsZWN0aW9uXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRpc3BsYXlGaWVsZD0nbmFtZSdcbiAgICAgICAgICovXG4gICAgICAgIGRpc3BsYXlGaWVsZDogJ25hbWUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZHJhZ2dhYmxlXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ2dhYmxlXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZHJhZ2dhYmxlLmxpc3QuRHJhZ1pvbmV8bnVsbH0gZHJhZ1pvbmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1pvbmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGRyYWdab25lQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdab25lQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlnaGxpZ2h0RmlsdGVyVmFsdWU9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGxpZ2h0RmlsdGVyVmFsdWU6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGl0ZW1DbHM9J25lby1saXN0LWl0ZW0nXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtQ2xzOiAnbmVvLWxpc3QtaXRlbScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogRWl0aGVyIHBhc3MgYSBzZWxlY3Rpb24uTW9kZWwgbW9kdWxlLCBhbiBpbnN0YW5jZSBvciBhIGNvbmZpZyBvYmplY3RcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fE5lby5zZWxlY3Rpb24uTW9kZWx9IHNlbGVjdGlvbk1vZGVsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25Nb2RlbF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyB0byB0cnVlIGluIGNhc2UgYSBzZWxlY3QgZXZlbnQgc2hvdWxkIG9ubHkgdXBkYXRlIF92ZG9tIChlLmcuIHdoZW4gdXNlZCBpbnNpZGUgYSBmb3JtLmZpZWxkLlNlbGVjdFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaWxlbnRTZWxlY3Q9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNpbGVudFNlbGVjdDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB3aWxsIGFkZCBhIGNoZWNrYm94IGluIGZyb250IG9mIGVhY2ggbGlzdCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0YWNrZWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZUNoZWNrQm94ZXNfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzondWwnLGNuOltdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhZzogJ3VsJyxcbiAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycztcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazoge2ZuOiBtZS5vbkNsaWNrLCBzY29wZTogbWV9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGlzYWJsZVNlbGVjdGlvbiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERpc2FibGVTZWxlY3Rpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIG1lLnJlbmRlcmVkICYmIG1lLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5kZXNlbGVjdEFsbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkcmFnZ2FibGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREcmFnZ2FibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICFtZS5kcmFnWm9uZSkge1xuICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdzcmMvZHJhZ2dhYmxlL2xpc3QvRHJhZ1pvbmUtbWpzLmpzJyAqL1xuICAgICAgICAgICAgICAgICcuLi9kcmFnZ2FibGUvbGlzdC9EcmFnWm9uZS5tanMnXG4gICAgICAgICAgICApLnRoZW4obW9kdWxlID0+IHtcbiAgICAgICAgICAgICAgICBtZS5kcmFnWm9uZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUgOiBtb2R1bGUuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgb3duZXIgIDogbWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmRyYWdab25lQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdG9yZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5vbih7XG4gICAgICAgICAgICAgICAgZmlsdGVyOiBtZS5vblN0b3JlRmlsdGVyLFxuICAgICAgICAgICAgICAgIGxvYWQgIDogbWUub25TdG9yZUxvYWQsXG4gICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRDb3VudCgpID4gMCkge1xuICAgICAgICAgICAgICAgIG1lLm9uU3RvcmVMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZUNoZWNrQm94ZXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VDaGVja0JveGVzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby11c2UtY2hlY2tpY29ucycpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uc2VsZWN0aW9uLk1vZGVsfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBMaXN0TW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge05lby5kYXRhLlN0b3JlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCBmb3IgY3VzdG9tIGxpc3QgaXRlbXNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIGxpc3QgaXRlbSBvYmplY3RcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbUNvbnRlbnQgPSBtZS5jcmVhdGVJdGVtQ29udGVudChyZWNvcmQpO1xuXG4gICAgICAgIGNvbnN0IGl0ZW0gPSB7XG4gICAgICAgICAgICB0YWcgICAgIDogJ2xpJyxcbiAgICAgICAgICAgIGNscyAgICAgOiBbbWUuaXRlbUNsc10sXG4gICAgICAgICAgICBpZCAgICAgIDogbWUuZ2V0SXRlbUlkKHJlY29yZFttZS5nZXRLZXlQcm9wZXJ0eSgpXSksXG4gICAgICAgICAgICB0YWJJbmRleDogLTFcbiAgICAgICAgfTtcblxuICAgICAgICBpdGVtW3R5cGVvZiBpdGVtQ29udGVudCA9PT0gJ3N0cmluZycgPyAnaHRtbCcgOiAnY24nXSA9IGl0ZW1Db250ZW50O1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIGZvciBjdXN0b20gcmVuZGVyZXJzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEByZXR1cm5zIHtPYmplY3RbXXxTdHJpbmd9IEVpdGhlciBhbiB2ZG9tIGNuIGFycmF5IG9yIGEgaHRtbCBzdHJpbmdcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtQ29udGVudChyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1UZXh0ID0gcmVjb3JkW3RoaXMuZGlzcGxheUZpZWxkXSxcbiAgICAgICAgICAgIGZpbHRlcjtcblxuICAgICAgICBpZiAobWUuaGlnaGxpZ2h0RmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IG1lLnN0b3JlLmdldEZpbHRlcihtZS5kaXNwbGF5RmllbGQpO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyICYmIGZpbHRlci52YWx1ZSAhPT0gbnVsbCAmJiBmaWx0ZXIudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgaXRlbVRleHQgPSBpdGVtVGV4dC5yZXBsYWNlKG5ldyBSZWdFeHAoZmlsdGVyLnZhbHVlLCAnZ2knKSwgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIm5lby1oaWdobGlnaHQtc2VhcmNoXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1UZXh0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcyhzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jbiA9IFtdO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2ZG9tLmNuLnB1c2gobWUuY3JlYXRlSXRlbShpdGVtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnY3JlYXRlSXRlbXMnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLnN0b3JlICYmIG1lLmF1dG9EZXN0cm95U3RvcmUpIHtcbiAgICAgICAgICAgIG1lLnN0b3JlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxscyBmb2N1cygpIG9uIHRoZSB0b3AgbGV2ZWwgRE9NIG5vZGUgb2YgdGhpcyBjb21wb25lbnQgb3Igb24gYSBnaXZlbiBub2RlIHZpYSBpZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgZm9jdXMoaWQpIHtcbiAgICAgICAgc3VwZXIuZm9jdXMoaWQpO1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgLy8gcmVtb3RlIG1ldGhvZCBhY2Nlc3NcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogaWQgfHwgdGhpcy5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1JZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldEl0ZW1SZWNvcmRJZCh2bm9kZUlkKSB7XG4gICAgICAgIGxldCBpdGVtSWQgICA9IHZub2RlSWQuc3BsaXQoJ19fJylbMV0sXG4gICAgICAgICAgICBtb2RlbCAgICA9IHRoaXMuc3RvcmUubW9kZWwsXG4gICAgICAgICAgICBrZXlGaWVsZCA9IG1vZGVsICYmIG1vZGVsLmdldEZpZWxkKG1vZGVsLmtleVByb3BlcnR5KTtcblxuICAgICAgICBpZiAoa2V5RmllbGQgJiYgKGtleUZpZWxkLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2ludGVnZXInIHx8IGtleUZpZWxkLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgICBpdGVtSWQgPSBwYXJzZUludChpdGVtSWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1JZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdXBwb3J0IGNvbGxlY3Rpb25zICYgc3RvcmVzXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRLZXlQcm9wZXJ0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmUua2V5UHJvcGVydHkgfHwgdGhpcy5zdG9yZS5tb2RlbC5rZXlQcm9wZXJ0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGRhdGEucGF0aFswXS5pZCA9PT0gbWUuaWQpIHtcbiAgICAgICAgICAgIG1lLm9uQ29udGFpbmVyQ2xpY2soZGF0YSk7XG4gICAgICAgIH0gIGVsc2UgaWYgKGRhdGEucGF0aFswXS5jbHMuaW5jbHVkZXMobWUuaXRlbUNscykpIHtcbiAgICAgICAgICAgIG1lLm9uSXRlbUNsaWNrKGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ29udGFpbmVyQ2xpY2soZGF0YSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbnRhaW5lckNsaWNrIGV2ZW50IGZpcmVzIHdoZW4gYSBjbGljayBvY2N1cnMgb24gdGhlIGNvbXBvbmVudCwgYnV0IG5vdCBvbiBhIGxpc3QgaXRlbVxuICAgICAgICAgKiBAZXZlbnQgY29udGFpbmVyQ2xpY2tcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmdbXX0gY2xzIHRoZSBjbGFzc0xpc3Qgb2YgdGhlIHRhcmdldCBub2RlIChjb252ZXJ0ZWQgdG8gYW4gYXJyYXkpXG4gICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZCB0aGUgdGFyZ2V0IGRvbSBpZFxuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBwYXRoIHRoZSBldmVudCBwYXRoXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmZpcmUoJ2NvbnRhaW5lckNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSXRlbUNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlSWQgPSBkYXRhLnBhdGhbMF0uaWQ7XG5cbiAgICAgICAgaWYgKCFtZS5kaXNhYmxlU2VsZWN0aW9uICYmIG1lLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5zZWxlY3Qobm9kZUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaXRlbUNsaWNrIGV2ZW50IGZpcmVzIHdoZW4gYSBjbGljayBvY2N1cnMgb24gYSBsaXN0IGl0ZW1cbiAgICAgICAgICogQGV2ZW50IGl0ZW1DbGlja1xuICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWQgdGhlIHJlY29yZCBtYXRjaGluZyB0aGUgbGlzdCBpdGVtXG4gICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICBtZS5maXJlKCdpdGVtQ2xpY2snLCBtZS5zdG9yZS5nZXQobWUuZ2V0SXRlbVJlY29yZElkKG5vZGVJZCkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3RvcmVGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUubW91bnRlZCAmJiBtZS5yZW5kZXJpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVySWQgPSBtZS5vbigncmVuZGVyZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudW4oJ3JlbmRlcmVkJywgbGlzdGVuZXJJZCk7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHNob3J0Y3V0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgc2VsZWN0SXRlbShpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuZGlzYWJsZVNlbGVjdGlvbiAmJiBtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuc2VsZWN0QXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCYXNlKTtcblxuZXhwb3J0IHtCYXNlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uTGlzdE1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uc2VsZWN0aW9uLk1vZGVsXG4gKi9cbmNsYXNzIExpc3RNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5MaXN0TW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uTGlzdE1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi1saXN0bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLWxpc3Rtb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzdGF5SW5MaXN0PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHN0YXlJbkxpc3Q6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkRvd24oZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMudmlldy5kaXNhYmxlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9uTmF2S2V5KGRhdGEsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkxlZnQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uS2V5RG93blVwKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25SaWdodChkYXRhKSB7XG4gICAgICAgIHRoaXMub25LZXlEb3duRG93bihkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duVXAoZGF0YSkge1xuICAgICAgICBpZiAoIXRoaXMudmlldy5kaXNhYmxlU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLm9uTmF2S2V5KGRhdGEsIC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcFxuICAgICAqL1xuICAgIG9uTmF2S2V5KGRhdGEsIHN0ZXApIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbSAgICAgICAgICAgICA9IGRhdGEucGF0aFswXSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICBtYXhJdGVtcyAgICAgICAgID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIHByZXZlbnRTZWxlY3Rpb24gPSBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4LCBpdGVtSWQsIHJlY29yZCwgcmVjb3JkSWQ7XG5cbiAgICAgICAgaWYgKGl0ZW0uY2xzLmluY2x1ZGVzKHZpZXcuaXRlbUNscykpIHtcbiAgICAgICAgICAgIHJlY29yZElkID0gdmlldy5nZXRJdGVtUmVjb3JkSWQoaXRlbS5pZCk7XG4gICAgICAgICAgICBpbmRleCAgICA9IHN0b3JlLmluZGV4T2YocmVjb3JkSWQpICsgc3RlcDtcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGlmIChtZS5zdGF5SW5MaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gbWF4SXRlbXMgLSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByZXZlbnRTZWxlY3Rpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdFByZUZpcnN0SXRlbScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gbWF4SXRlbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAobWUuc3RheUluTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmVudFNlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuZmlyZSgnc2VsZWN0UG9zdExhc3RJdGVtJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwcmV2ZW50U2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZWNvcmQgPSBzdG9yZS5nZXRBdChpbmRleCk7XG4gICAgICAgICAgICBpdGVtSWQgPSB2aWV3LmdldEl0ZW1JZChyZWNvcmRbbWUudmlldy5nZXRLZXlQcm9wZXJ0eSgpXSk7XG5cbiAgICAgICAgICAgIG1lLnNlbGVjdChpdGVtSWQpO1xuICAgICAgICAgICAgdmlldy5mb2N1cyhpdGVtSWQpO1xuICAgICAgICAgICAgdmlldy5maXJlKCdpdGVtTmF2aWdhdGUnLCByZWNvcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKi9cbiAgICBzZWxlY3RBdChpbmRleCkge1xuICAgICAgICBsZXQgdmlldyAgICAgID0gdGhpcy52aWV3LFxuICAgICAgICAgICAgcmVjb3JkS2V5ID0gdmlldy5zdG9yZS5nZXRLZXlBdChpbmRleCksXG4gICAgICAgICAgICBpdGVtSWQgICAgPSByZWNvcmRLZXkgJiYgdmlldy5nZXRJdGVtSWQocmVjb3JkS2V5KTtcblxuICAgICAgICBpZiAoaXRlbUlkKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtSWQpO1xuICAgICAgICAgICAgdmlldy5mb2N1cyhpdGVtSWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTGlzdE1vZGVsKTtcblxuZXhwb3J0IHtMaXN0TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgT2JzZXJ2YWJsZSBmcm9tICcuLi9jb3JlL09ic2VydmFibGUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBNb2RlbCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgYXV0b21hdGljYWxseSBhcHBsaWVzIHRoZSBjb3JlL09ic2VydmFibGUubWpzIG1peGluXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9ic2VydmFibGU9dHJ1ZVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICBvYnNlcnZhYmxlOiB0cnVlXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLk1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLk1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi1tb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tbW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogUGxhY2Vob2xkZXIgZm9yIGV4dGVuZGVkIGNsYXNzZXMgdG8gYWRkIGEgY3VzdG9tIGNzcyBydWxlIHRvIHRoaXMgb3duZXIgY29tcG9uZW50XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjbHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gaXRlbXM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzZWxlY3RlZENscz0nc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZENsczogJ25lby1zZWxlY3RlZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaW5nbGVTZWxlY3Q9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2luZ2xlU2VsZWN0OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWxseSBzYXZlcyB0aGUgdmlldyBpZCwgYnV0IHRoZSBnZXR0ZXIgd2lsbCByZXR1cm4gdGhlIG1hdGNoaW5nIGluc3RhbmNlXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gdmlld189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3XzogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBiZWZvcmUgZ2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBiZWZvcmVHZXRWaWV3KCkge1xuICAgICAgICByZXR1cm4gTmVvLmdldENvbXBvbmVudCh0aGlzLl92aWV3KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBiZWZvcmUgc2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHZpZXcgY29uZmlnXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdGhlIHZpZXcgaWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRWaWV3KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnRdIHRydWUgdG8gcHJldmVudCBhIHZkb20gdXBkYXRlXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2l0ZW1Db2xsZWN0aW9uXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0ZWRDbHNdXG4gICAgICovXG4gICAgZGVzZWxlY3QoaXRlbSwgc2lsZW50LCBpdGVtQ29sbGVjdGlvbiwgc2VsZWN0ZWRDbHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXcsXG4gICAgICAgICAgICB2ZG9tID0gdmlldy52ZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHZpZXcuZ2V0VmRvbUNoaWxkKGl0ZW0pLCAvLyB0b2RvOiBzdXBwb3J0IGZvciBub2RlcyAocmlnaHQgbm93IGxpbWl0ZWQgdG8gaWRzKVxuICAgICAgICAgICAgY2xzO1xuXG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICBjbHMgPSBub2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIHNlbGVjdGVkQ2xzIHx8IG1lLnNlbGVjdGVkQ2xzKTtcbiAgICAgICAgICAgIG5vZGUuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGl0ZW1Db2xsZWN0aW9uIHx8IG1lLml0ZW1zLCBpdGVtKTtcblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50XSB0cnVlIHRvIHByZXZlbnQgYSB2ZG9tIHVwZGF0ZVxuICAgICAqL1xuICAgIGRlc2VsZWN0QWxsKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgdmlldyAgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSAgPSB2aWV3LnZkb207XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGl0ZW0sIHRydWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNpbGVudCAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2aWV3LnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVucmVnaXN0ZXIoKTtcbiAgICAgICAgc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge0FycmF5fSB0aGlzLml0ZW1zXG4gICAgICovXG4gICAgZ2V0U2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlcmUgaXMgYSBzZWxlY3Rpb25cbiAgICAgKi9cbiAgICBoYXNTZWxlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZSBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICovXG4gICAgaXNTZWxlY3RlZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5pbmRleE9mKGlkKSA+IC0xO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IGNvbXBvbmVudC5jbHMgfHwgW107XG5cbiAgICAgICAgaWYgKG1lLmNscyAmJiAhY2xzLmluY2x1ZGVzKG1lLmNscykpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKG1lLmNscyk7XG4gICAgICAgICAgICBjb21wb25lbnQuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmlldyA9IGNvbXBvbmVudDtcbiAgICAgICAgbWUuYWRkRG9tTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlbW92ZURvbUxpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb21wb25lbnQgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gWy4uLmNvbXBvbmVudC5kb21MaXN0ZW5lcnNdO1xuXG4gICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXIuc2NvcGUgPT09IG1lKSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGRvbUxpc3RlbmVycywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb21wb25lbnQuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W118U3RyaW5nW119IGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gW2l0ZW1Db2xsZWN0aW9uXVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBbc2VsZWN0ZWRDbHNdXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1zLCBpdGVtQ29sbGVjdGlvbiwgc2VsZWN0ZWRDbHMpIHtcbiAgICAgICAgaXRlbXMgPSBBcnJheS5pc0FycmF5KGl0ZW1zKSA/IGl0ZW1zIDogW2l0ZW1zXTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldyxcbiAgICAgICAgICAgIHZkb20gPSB2aWV3LnZkb20sXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKG1lLnNpbmdsZVNlbGVjdCkge1xuICAgICAgICAgICAgbWUuZGVzZWxlY3RBbGwodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpdGVtcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIG5vZGUgPSB2aWV3LmdldFZkb21DaGlsZChub2RlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBjbHMgPSBub2RlLmNscyB8fCBbXTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCBzZWxlY3RlZENscyB8fCBtZS5zZWxlY3RlZENscyk7XG4gICAgICAgICAgICAgICAgbm9kZS5jbHMgPSBjbHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChpdGVtQ29sbGVjdGlvbiB8fCBtZS5pdGVtcywgaXRlbXMpO1xuXG4gICAgICAgIHZpZXdbdmlldy5oYXNPd25Qcm9wZXJ0eSgnc2lsZW50U2VsZWN0JykgJiYgdmlldy5zaWxlbnRTZWxlY3QgPT09IHRydWUgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqL1xuICAgIHRvZ2dsZVNlbGVjdGlvbihpdGVtKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmlzU2VsZWN0ZWQoaXRlbSkpIHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLnZpZXcuY2xzIHx8IFtdO1xuXG4gICAgICAgIGlmIChtZS5jbHMgJiYgY2xzLmluY2x1ZGVzKG1lLmNscykpIHtcbiAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsIG1lLmNscyk7XG4gICAgICAgICAgICBtZS52aWV3LmNscyA9IGNscztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmRlc2VsZWN0QWxsKCk7XG5cbiAgICAgICAgbWUucmVtb3ZlRG9tTGlzdGVuZXJzKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNb2RlbCk7XG5cbmV4cG9ydCB7TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBIZWFkZXJCdXR0b24gIGZyb20gJy4vaGVhZGVyL0J1dHRvbi5tanMnO1xuaW1wb3J0IEhlYWRlclRvb2xiYXIgZnJvbSAnLi9oZWFkZXIvVG9vbGJhci5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFN0cmlwICAgICAgICAgZnJvbSAnLi9TdHJpcC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJhc2VDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdGFiQmFyUG9zaXRpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRhYkJhclBvc2l0aW9ucz1bJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdGFiQmFyUG9zaXRpb25zOiBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFiLkNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYi5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFiLWNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWItY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYWN0aXZlSW5kZXhfPTBcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUluZGV4XzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgd2lsbCBhY3RpdmF0ZSBhIHRhYiB3aGljaCBnZXRzIGR5bmFtaWNhbGx5IGluc2VydGVkIC8gYWRkZWQgYWZ0ZXIgdGhlIFRhYkNvbnRhaW5lciBpcyBtb3VudGVkXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFjdGl2YXRlSW5zZXJ0ZWRUYWJzPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmF0ZUluc2VydGVkVGFiczogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhc2VDbHM9J25lby10YWItY29udGFpbmVyJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFzZUNsczogJ25lby10YWItY29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBbY2FyZENvbnRhaW5lcklkXT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjYXJkQ29udGFpbmVySWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhZGRzIGJhc2VDbHMgKyAnLXBsYWluJyBpcyBjYXNlIHBsYWluIGlzIHNldCB0byB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdGFiLWNvbnRhaW5lciddLFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYi1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgdGhlIHRhYi5TdHJpcFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gW2NvbnRlbnRDb250YWluZXJEZWZhdWx0c109bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGVudENvbnRhaW5lckRlZmF1bHRzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciB0aGUgdGFiLkhlYWRlclRvb2xiYXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IFtoZWFkZXJUb29sYmFyRGVmYXVsdHNdPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gbm90IGFwcGx5IGEgYmFja2dyb3VuZCBlZmZlY3QgdG8gdGhlIHRhYiBoZWFkZXIgY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHBsYWluXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwbGFpbl86IHRydWUsXG4gICAgICAgIC8qXG4gICAgICAgICAqIFJlbW92ZSB0aGUgRE9NIG9mIGluYWN0aXZlIGNhcmRzIChUYWJDb250YWluZXIgQm9keSkuXG4gICAgICAgICAqIFRoaXMgd2lsbCBrZWVwIHRoZSBpbnN0YW5jZXMgJiB2ZG9tIHRyZWVzXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHJlbW92ZUluYWN0aXZlQ2FyZHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlSW5hY3RpdmVDYXJkczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRydWUgZW5hYmxlcyBzb3J0aW5nIHRhYnMgdmlhIGRyYWcmZHJvcC5cbiAgICAgICAgICogVGhlIGNvbmZpZyBnZXRzIHBhc3NlZCB0byB0aGUgaGVhZGVyIHRvb2xiYXJcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc29ydGFibGVfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzb3J0YWJsZV86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRhYkJhcklkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhYkJhcklkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciB0aGUgdGFiLlN0cmlwXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBbdGFiU3RyaXBEZWZhdWx0c109bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFiU3RyaXBEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBbdGFiU3RyaXBJZF09bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgdGFiU3RyaXBJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgdGFiIGhlYWRlciB0b29sYmFyLlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgYXJlIHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdC5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0YWJCYXJQb3NpdGlvbl89J3RvcCdcbiAgICAgICAgICovXG4gICAgICAgIHRhYkJhclBvc2l0aW9uXzogJ3RvcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VBY3RpdmVUYWJJbmRpY2F0b3JfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZUFjdGl2ZVRhYkluZGljYXRvcl86IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICB0aGlzLl9sYXlvdXQgPSB0aGlzLmdldExheW91dENvbmZpZygpOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIG9uZSBvciBtdWx0aXBsZSB0YWJzIGF0IHRoZSBlbmQgb2YgdGhlIGhlYWRlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBpdGVtXG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxOZW8uY29tcG9uZW50LkJhc2VbXX1cbiAgICAgKi9cbiAgICBhZGQoaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnQodGhpcy5nZXRUYWJCYXIoKS5pdGVtcy5sZW5ndGgsIGl0ZW0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYWN0aXZlSW5kZXggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0QWN0aXZlSW5kZXgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgY2FyZENvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQobWUuY2FyZENvbnRhaW5lcklkKTtcblxuICAgICAgICAgICAgaWYgKGNhcmRDb250YWluZXIgJiYgdmFsdWUgPiAtMSkge1xuICAgICAgICAgICAgICAgIG1lLnVwZGF0ZVRhYkJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgICAgIGNhcmRDb250YWluZXIubGF5b3V0LmFjdGl2ZUluZGV4ID0gdmFsdWU7XG5cbiAgICAgICAgICAgICAgICBtZS5maXJlKCdhY3RpdmVJbmRleENoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcGxhaW4gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQbGFpbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYmFzZUNscyA9IG1lLmJhc2VDbHMsXG4gICAgICAgICAgICBjbHMgICAgID0gbWUuY2xzIHx8IFtdO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ3Vuc2hpZnQnIDogJ3JlbW92ZSddKGNscywgYmFzZUNscyArICctcGxhaW4nKTtcbiAgICAgICAgbWUuY2xzID0gY2xzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc29ydGFibGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3J0YWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFiQmFyKCkuc29ydGFibGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGFiQmFyUG9zaXRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGFiQmFyUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tJyArIG9sZFZhbHVlKTtcbiAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby0nICsgdmFsdWUpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG5cbiAgICAgICAgaWYgKG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBtZS5sYXlvdXQgPSBtZS5nZXRMYXlvdXRDb25maWcoKTtcbiAgICAgICAgICAgIG1lLmdldFRhYkJhcigpLmRvY2sgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLmdldFRhYlN0cmlwKCkuY2xzID0gWyduZW8tdGFiLXN0cmlwJywgICduZW8tZG9jay0nICsgdmFsdWVdO1xuXG4gICAgICAgICAgICBtZS5maXJlKCd0YWJCYXJQb3NpdGlvbkNoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZUFjdGl2ZVRhYkluZGljYXRvciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZUFjdGl2ZVRhYkluZGljYXRvcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFiQmFyKCkgIC51c2VBY3RpdmVUYWJJbmRpY2F0b3IgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFiU3RyaXAoKS51c2VBY3RpdmVUYWJJbmRpY2F0b3IgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHRhYkJhclBvc2l0aW9uIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRUYWJCYXJQb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ3RhYkJhclBvc2l0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgPSBtZS5pdGVtcyB8fCBbXSxcbiAgICAgICAgICAgIHRhYkJ1dHRvbnMgICAgPSBbXSxcbiAgICAgICAgICAgIHRhYkNvbXBvbmVudHMgPSBbXTtcblxuICAgICAgICBPYmplY3QuYXNzaWduKG1lLCB7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVySWQ6IG1lLmNhcmRDb250YWluZXJJZCB8fCBOZW8uZ2V0SWQoJ2NvbnRhaW5lcicpLFxuICAgICAgICAgICAgdGFiQmFySWQgICAgICAgOiBtZS50YWJCYXJJZCAgICAgICAgfHwgTmVvLmdldElkKCd0YWItaGVhZGVyLXRvb2xiYXInKSxcbiAgICAgICAgICAgIHRhYlN0cmlwSWQgICAgIDogbWUudGFiU3RyaXBJZCAgICAgIHx8IE5lby5nZXRJZCgndGFiLXN0cmlwJylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRhYkJ1dHRvbnMucHVzaChtZS5nZXRUYWJCdXR0b25Db25maWcoaXRlbS50YWJCdXR0b25Db25maWcsIGluZGV4KSk7XG5cbiAgICAgICAgICAgIGlmICghKGl0ZW0gaW5zdGFuY2VvZiBOZW8uY29tcG9uZW50LkJhc2UpKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IHsuLi5tZS5pdGVtRGVmYXVsdHMsIGZsZXg6IDEsIGlzVGFiOnRydWUsIC4uLml0ZW19O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJDb21wb25lbnRzLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zID0gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICAgIDogSGVhZGVyVG9vbGJhcixcbiAgICAgICAgICAgIGRvY2sgICAgICAgICAgICAgICAgIDogbWUudGFiQmFyUG9zaXRpb24sXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgIDogbWUudGFiQmFySWQsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA6IHRhYkJ1dHRvbnMsXG4gICAgICAgICAgICBzb3J0YWJsZSAgICAgICAgICAgICA6IG1lLnNvcnRhYmxlLFxuICAgICAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yOiBtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3IsXG4gICAgICAgICAgICAuLi5tZS5oZWFkZXJUb29sYmFyRGVmYXVsdHMgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgICAgICAgOiBTdHJpcCxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgICAgIDogWyduZW8tdGFiLXN0cmlwJywgJ25lby1kb2NrLScgKyBtZS50YWJCYXJQb3NpdGlvbl0sXG4gICAgICAgICAgICBmbGV4ICAgICAgICAgICAgICAgICA6ICdub25lJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgIDogbWUudGFiU3RyaXBJZCxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lcklkICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3I6IG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcixcbiAgICAgICAgICAgIC4uLm1lLnRhYlN0cmlwRGVmYXVsdHMgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGUgICAgICAgICAgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgIGNscyAgICAgICAgICAgICAgICAgIDogWyduZW8tY29udGFpbmVyJywgJ25lby10YWItY29udGVudC1jb250YWluZXInXSxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgICAgICAgIDogbWUuY2FyZENvbnRhaW5lcklkLFxuICAgICAgICAgICAgaXRlbURlZmF1bHRzICAgICAgICAgOiBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA6IHRhYkNvbXBvbmVudHMsXG4gICAgICAgICAgICBsYXlvdXQgICAgICAgICAgICAgICA6IHtudHlwZTogJ2NhcmQnLCBhY3RpdmVJbmRleDogbWUuYWN0aXZlSW5kZXgsIHJlbW92ZUluYWN0aXZlQ2FyZHM6IG1lLnJlbW92ZUluYWN0aXZlQ2FyZHN9LFxuICAgICAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yOiBtZS51c2VBY3RpdmVUYWJJbmRpY2F0b3IsXG4gICAgICAgICAgICAuLi5tZS5jb250ZW50Q29udGFpbmVyRGVmYXVsdHMgfHwge31cbiAgICAgICAgfV07XG5cbiAgICAgICAgbWUuaXRlbURlZmF1bHRzID0gbnVsbDtcblxuICAgICAgICBzdXBlci5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhcmQgbWF0Y2hpbmcgdGhpcy5hY3RpdmVJbmRleFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V8bnVsbH1cbiAgICAgKi9cbiAgICBnZXRBY3RpdmVDYXJkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDYXJkQ29udGFpbmVyKCkuaXRlbXNbdGhpcy5hY3RpdmVJbmRleF0gfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgY2FyZCBieSBhIGdpdmVuIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZXxudWxsfVxuICAgICAqL1xuICAgIGdldENhcmQoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2FyZENvbnRhaW5lcigpLml0ZW1zW2luZGV4XSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udGFpbmVyLkJhc2V9XG4gICAgICovXG4gICAgZ2V0Q2FyZENvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5jYXJkQ29udGFpbmVySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFtb3VudCBvZiBpdGVtcyBpbnNpZGUgdGhlIHRhYiBoZWFkZXIgdG9vbGJhclxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0Q291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFRhYkJhcigpLml0ZW1zLmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IGxheW91dENvbmZpZ1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBnZXRMYXlvdXRDb25maWcoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2gobWUudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnc3RyZXRjaCcsXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2NvbHVtbi1yZXZlcnNlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayAgICAgOiAnc3RhcnQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ3N0cmV0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduICAgIDogJ3N0cmV0Y2gnLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdyb3ctcmV2ZXJzZScsXG4gICAgICAgICAgICAgICAgICAgIHBhY2sgICAgIDogJ3N0YXJ0J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3AnOlxuICAgICAgICAgICAgICAgIGxheW91dENvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGF5b3V0Q29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge05lby50YWIuaGVhZGVyLkJ1dHRvbnxudWxsfVxuICAgICAqL1xuICAgIGdldFRhYkF0SW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFiQmFyKCkuaXRlbXNbaW5kZXhdIHx8IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHJldHVybnMge05lby5jb250YWluZXIuVG9vbGJhcn1cbiAgICAgKi9cbiAgICBnZXRUYWJCYXIoKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0Q29tcG9uZW50KHRoaXMudGFiQmFySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBtZXJnZWQgY29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldFRhYkJ1dHRvbkNvbmZpZyhjb25maWcsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA6IEhlYWRlckJ1dHRvbixcbiAgICAgICAgICAgICAgICBmbGV4ICAgOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgaW5kZXggIDogaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJlc3NlZDogbWUuYWN0aXZlSW5kZXggPT09IGluZGV4LFxuXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBkYXRhLmNvbXBvbmVudC5pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsuLi5kZWZhdWx0Q29uZmlnLCAuLi5jb25maWd9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtOZW8udGFiLlN0cmlwfVxuICAgICAqL1xuICAgIGdldFRhYlN0cmlwKCkge1xuICAgICAgICByZXR1cm4gTmVvLmdldENvbXBvbmVudCh0aGlzLnRhYlN0cmlwSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VydHMgYW4gaXRlbSBvciBhcnJheSBvZiBpdGVtcyBhdCBhIHNwZWNpZmljIGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R8T2JqZWN0W119IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfE5lby5jb21wb25lbnQuQmFzZVtdfVxuICAgICAqL1xuICAgIGluc2VydChpbmRleCwgaXRlbSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyID0gbWUuZ2V0Q2FyZENvbnRhaW5lcigpLFxuICAgICAgICAgICAgdGFiQmFyICAgICAgICA9IG1lLmdldFRhYkJhcigpLFxuICAgICAgICAgICAgaGFzSXRlbSAgICAgICA9IGZhbHNlLFxuICAgICAgICAgICAgaSwgbGVuLCBzdXBlckl0ZW0sIHRhYiwgdGFiQnV0dG9uQ29uZmlnO1xuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICBpICAgPSAwO1xuICAgICAgICAgICAgbGVuID0gaXRlbS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyB0b2RvOiByZW5kZXIgaXMgYXN5bmMsIGVuc3VyZSB0aGUgb3JkZXIgb2YgaXRlbXMgaXMgY29ycmVjdFxuXG4gICAgICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBhcnJheSBiYWNrd2FyZHNcbiAgICAgICAgICAgICAgICBpdGVtW2ldID0gbWUuaW5zZXJ0KGl0ZW1bbGVuIC0gMV0sIGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgaXRlbSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGkgICA9IDA7XG4gICAgICAgICAgICBsZW4gPSBjYXJkQ29udGFpbmVyLml0ZW1zLmxlbmd0aDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjYXJkQ29udGFpbmVyLml0ZW1zW2ldLmlkID09PSBpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc0l0ZW0gICA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHN1cGVySXRlbSA9IGNhcmRDb250YWluZXIuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNJdGVtKSB7XG4gICAgICAgICAgICB0YWJCdXR0b25Db25maWcgPSBpdGVtLnRhYkJ1dHRvbkNvbmZpZztcblxuICAgICAgICAgICAgdGFiID0gdGFiQmFyLmluc2VydChpbmRleCwgbWUuZ2V0VGFiQnV0dG9uQ29uZmlnKHRhYkJ1dHRvbkNvbmZpZywgaW5kZXgpKTtcblxuICAgICAgICAgICAgLy8gdG9kbzogbm9uIGluZGV4IGJhc2VkIG1hdGNoaW5nIG9mIHRhYiBidXR0b25zIGFuZCBjYXJkc1xuICAgICAgICAgICAgaSAgID0gMDtcbiAgICAgICAgICAgIGxlbiA9IHRhYkJhci5pdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0YWJCYXIuaXRlbXNbaV0uaW5kZXggPSBpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW0uZmxleCA9IDE7XG4gICAgICAgICAgICBzdXBlckl0ZW0gPSBjYXJkQ29udGFpbmVyLmluc2VydChpbmRleCwgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChtZS5hY3RpdmF0ZUluc2VydGVkVGFicykge1xuICAgICAgICAgICAgICAgIGlmICghbWUudm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUuYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YWIub24oJ21vdW50ZWQnLCBtZS5vblRhYkJ1dHRvbk1vdW50ZWQsIG1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXJJdGVtXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYW4gZXhpc3RpbmcgaXRlbSB0byBhIG5ldyBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tSW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleFxuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V9IHRoZSBjYXJkIGl0ZW1cbiAgICAgKi9cbiAgICBtb3ZlVG8oZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIgPSBtZS5nZXRDYXJkQ29udGFpbmVyKCksXG4gICAgICAgICAgICB0YWJCYXIgICAgICAgID0gbWUuZ2V0VGFiQmFyKCksXG4gICAgICAgICAgICBhY3RpdmVUYWIgICAgID0gdGFiQmFyLml0ZW1zW21lLmFjdGl2ZUluZGV4XSxcbiAgICAgICAgICAgIGluZGV4LCByZXR1cm5WYWx1ZTtcblxuICAgICAgICB0YWJCYXIubW92ZVRvKGZyb21JbmRleCwgdG9JbmRleCk7XG4gICAgICAgIGluZGV4ID0gYWN0aXZlVGFiLmluZGV4O1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gbWUuYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIHNpbGVudCB1cGRhdGVzXG4gICAgICAgICAgICBtZS5fYWN0aXZlSW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIubGF5b3V0Ll9hY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYXJkQ29udGFpbmVyLm1vdmVUbyhmcm9tSW5kZXgsIHRvSW5kZXgpO1xuXG4gICAgICAgIG1lLmZpcmUoJ21vdmVUbycsIHtcbiAgICAgICAgICAgIGZyb21JbmRleDogZnJvbUluZGV4LFxuICAgICAgICAgICAgdG9JbmRleCAgOiB0b0luZGV4XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCBvbmNlIGEgZHluYW1pY2FsbHkgYWRkZWQgaGVhZGVyLkJ1dHRvbiBnZXRzIG1vdW50ZWRcbiAgICAgKiBpbiBjYXNlIGFjdGl2YXRlSW5zZXJ0ZWRUYWJzIGlzIHNldCB0byB0cnVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGJ1dHRvbklkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uVGFiQnV0dG9uTW91bnRlZChidXR0b25JZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyID0gbWUuZ2V0Q2FyZENvbnRhaW5lcigpLFxuICAgICAgICAgICAgdGFiQmFyICAgICAgICA9IG1lLmdldFRhYkJhcigpLFxuICAgICAgICAgICAgaSAgICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gdGFiQmFyLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgPSAtMSxcbiAgICAgICAgICAgIGNhcmQsIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKHRhYkJhci5pdGVtc1tpXS5pZCA9PT0gYnV0dG9uSWQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgY2FyZCA9IGNhcmRDb250YWluZXIuaXRlbXNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAobWUudm5vZGUgJiYgIWNhcmQubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVySWQgPSBjYXJkLm9uKCdtb3VudGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYXJkLnVuKCdtb3VudGVkJywgbGlzdGVuZXJJZCk7XG4gICAgICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29udGFpbmVyIGl0ZW0gYnkgcmVmZXJlbmNlXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW2Rlc3Ryb3lJdGVtPXRydWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHJlbW92ZShjb21wb25lbnQsIGRlc3Ryb3lJdGVtPXRydWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgaXRlbXMgPSBbLi4udGhpcy5nZXRDYXJkQ29udGFpbmVyKCkuaXRlbXNdLFxuICAgICAgICAgICAgaSAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgPSBpdGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGl0ZW1zW2ldLmlkID09PSBjb21wb25lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0KGksIGRlc3Ryb3lJdGVtLCBzaWxlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtkZXN0cm95SXRlbT10cnVlXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICByZW1vdmVBdChpbmRleCwgZGVzdHJveUl0ZW09dHJ1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ICAgPSBtZS5hY3RpdmVJbmRleCxcbiAgICAgICAgICAgIGNhcmRDb250YWluZXIgPSBtZS5nZXRDYXJkQ29udGFpbmVyKCksXG4gICAgICAgICAgICB0YWJCYXIgICAgICAgID0gbWUuZ2V0VGFiQmFyKCksXG4gICAgICAgICAgICBpLCBsZW47XG5cbiAgICAgICAgY2FyZENvbnRhaW5lci5yZW1vdmVBdChpbmRleCwgZGVzdHJveUl0ZW0sIHNpbGVudCk7XG4gICAgICAgIHRhYkJhciAgICAgICAucmVtb3ZlQXQoaW5kZXgsIHRydWUsICAgICAgICBmYWxzZSk7XG5cbiAgICAgICAgaWYgKGluZGV4IDwgYWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIC8vIHNpbGVudCB1cGRhdGVzXG4gICAgICAgICAgICBtZS5fYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgICAgICBjYXJkQ29udGFpbmVyLmxheW91dC5fYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IGFjdGl2ZUluZGV4KSB7XG4gICAgICAgICAgICBtZS5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4IC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IG5vbiBpbmRleCBiYXNlZCBtYXRjaGluZyBvZiB0YWIgYnV0dG9ucyBhbmQgY2FyZHNcbiAgICAgICAgaSAgID0gMDtcbiAgICAgICAgbGVuID0gdGFiQmFyLml0ZW1zLmxlbmd0aDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0YWJCYXIuaXRlbXNbaV0uaW5kZXggPSBpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVGFiQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4ID0gbWUuYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICB0YWJCdXR0b25zICA9IG1lLmdldFRhYkJhcigpLml0ZW1zIHx8IFtdO1xuXG4gICAgICAgIHRhYkJ1dHRvbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGl0ZW0ucHJlc3NlZCA9IGluZGV4ID09PSBhY3RpdmVJbmRleDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWIuU3RyaXBcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBTdHJpcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby50YWIuU3RyaXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWIuU3RyaXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFiLXN0cmlwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYi1zdHJpcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXRhYi1zdHJpcCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYi1zdHJpcCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHRhYkNvbnRhaW5lcklkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRhYkNvbnRhaW5lcklkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlQWN0aXZlVGFiSW5kaWNhdG9yXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VBY3RpdmVUYWJJbmRpY2F0b3JfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17Y246IFt7Y2xzOiAnbmVvLWFjdGl2ZS10YWItaW5kaWNhdG9yJ31dfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNsczogWyduZW8tYWN0aXZlLXRhYi1pbmRpY2F0b3InXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmdldFRhYkNvbnRhaW5lcigpLm9uKHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4Q2hhbmdlOiBtZS5nZXRBY3RpdmVUYWJSZWN0VGhlbk1vdmUsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VBY3RpdmVUYWJJbmRpY2F0b3IgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VBY3RpdmVUYWJJbmRpY2F0b3IodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMF0ucmVtb3ZlRG9tID0gIXZhbHVlO1xuXG4gICAgICAgICAgICBpZiAobWUubW91bnRlZCAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgICAgIG1lLmdldEFjdGl2ZVRhYlJlY3RUaGVuTW92ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fG51bGx9IG9wdHNcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb3B0cy5vbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvcHRzLnZhbHVlXG4gICAgICogR2V0cyB0aGUgRG9tUmVjdCBvZiB0aGUgYWN0aXZlIHRhYiwgdGhlbiBtb3ZlcyB0aGUgaW5kaWNhdG9yXG4gICAgICovXG4gICAgZ2V0QWN0aXZlVGFiUmVjdFRoZW5Nb3ZlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpZHMgICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lciA9IG1lLmdldFRhYkNvbnRhaW5lcigpO1xuXG4gICAgICAgIGlmIChtZS52bm9kZSkge1xuICAgICAgICAgICAgaWYgKG9wdHMpIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaCh0YWJDb250YWluZXIuZ2V0VGFiQXRJbmRleChvcHRzLnZhbHVlKSwgdGFiQ29udGFpbmVyLmdldFRhYkF0SW5kZXgob3B0cy5vbGRWYWx1ZSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZHMucHVzaCh0YWJDb250YWluZXIuZ2V0VGFiQXRJbmRleCh0YWJDb250YWluZXIuYWN0aXZlSW5kZXgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWRzID0gaWRzLm1hcChlID0+IGUgJiYgZS5pZCkuZmlsdGVyKEJvb2xlYW4pO1xuXG4gICAgICAgICAgICBpZiAobWUudXNlQWN0aXZlVGFiSW5kaWNhdG9yKSB7XG4gICAgICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZHNcbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5tb3ZlQWN0aXZlSW5kaWNhdG9yKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRUYWJDb250YWluZXIoKSB7XG4gICAgICAgIHJldHVybiBOZW8uZ2V0Q29tcG9uZW50KHRoaXMudGFiQ29udGFpbmVySWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbiBlaXRoZXIgY29udGFpbiB0aGUgbmV3IHRhcmdldCByZWN0IG9yIHRoZSBuZXcgYW5kIG9sZCBvbmVcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfSByZWN0c1xuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByZWN0c1swXS5ib3R0b21cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0uaGVpZ2h0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3RzWzBdLmxlZnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0ucmlnaHRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0udG9wXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3RzWzBdLndpZHRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJlY3RzWzBdLnhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gcmVjdHNbMF0ueVxuICAgICAqL1xuICAgIG1vdmVBY3RpdmVJbmRpY2F0b3IocmVjdHMpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgcmVjdCA9IHJlY3RzWzFdIHx8IHJlY3RzWzBdLFxuICAgICAgICAgICAgYWN0aXZlVGFiSW5kaWNhdG9yLCB0YWJDb250YWluZXIsIHZkb207XG5cbiAgICAgICAgaWYgKG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcikge1xuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgICAgID0gbWUudmRvbTtcbiAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvciA9IHZkb20uY25bMF07XG4gICAgICAgICAgICB0YWJDb250YWluZXIgICAgICAgPSBtZS5nZXRUYWJDb250YWluZXIoKTtcblxuICAgICAgICAgICAgc3dpdGNoICh0YWJDb250YWluZXIudGFiQmFyUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvci5zdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgIDogYCR7cmVjdC5sZWZ0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogYCR7cmVjdC53aWR0aH1weGBcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGAke3JlY3QuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcCAgIDogYCR7cmVjdC50b3B9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpbiBjYXNlIHRoZXJlIGlzIGEgZHluYW1pYyBjaGFuZ2UgKG9sZFZhbHVlKSwgY2FsbCB0aGlzIG1ldGhvZCBhZ2FpblxuICAgICAgICAgICAgaWYgKHJlY3RzWzFdKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiSW5kaWNhdG9yLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm1vdmVBY3RpdmVJbmRpY2F0b3IoW3JlY3RzWzBdXSk7XG4gICAgICAgICAgICAgICAgfSwgNTApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYkluZGljYXRvci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVUYWJJbmRpY2F0b3Iuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFN0cmlwKTtcblxuZXhwb3J0IHtTdHJpcCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLmhlYWRlci5CdXR0b25cbiAqIEBleHRlbmRzIE5lby5idXR0b24uQmFzZVxuICovXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQnV0dG9uIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYi5oZWFkZXIuQnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFiLmhlYWRlci5CdXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFiLWhlYWRlci1idXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFiLWhlYWRlci1idXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1idXR0b24nLCAnbmVvLXRhYi1idXR0b24nXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWItaGVhZGVyLWJ1dHRvbicsICduZW8tYnV0dG9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VBY3RpdmVUYWJJbmRpY2F0b3JfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZUFjdGl2ZVRhYkluZGljYXRvcl86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbi1nbHlwaCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1idXR0b24tdGV4dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby10YWItYnV0dG9uLWluZGljYXRvciddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQWN0aXZlVGFiSW5kaWNhdG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlQWN0aXZlVGFiSW5kaWNhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLnVwZGF0ZVVzZUFjdGl2ZVRhYkluZGljYXRvcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZVVzZUFjdGl2ZVRhYkluZGljYXRvcihzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSAhbWUudXNlQWN0aXZlVGFiSW5kaWNhdG9yO1xuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJ1dHRvbik7XG5cbmV4cG9ydCB7QnV0dG9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlVG9vbGJhciBmcm9tICcuLi8uLi9jb250YWluZXIvVG9vbGJhci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFiLmhlYWRlci5Ub29sYmFyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlRvb2xiYXJcbiAqL1xuY2xhc3MgVG9vbGJhciBleHRlbmRzIEJhc2VUb29sYmFyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYi5oZWFkZXIuVG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYi5oZWFkZXIuVG9vbGJhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWItaGVhZGVyLXRvb2xiYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFiLWhlYWRlci10b29sYmFyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tdGFiLWhlYWRlci10b29sYmFyJywnbmVvLXRvb2xiYXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWItaGVhZGVyLXRvb2xiYXInLCAnbmVvLXRvb2xiYXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUFjdGl2ZVRhYkluZGljYXRvcl89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlQWN0aXZlVGFiSW5kaWNhdG9yXzogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNvcnRhYmxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U29ydGFibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICFtZS5zb3J0Wm9uZSkge1xuICAgICAgICAgICAgaW1wb3J0KFxuICAgICAgICAgICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6ICdzcmMvZHJhZ2dhYmxlL3RhYi9oZWFkZXIvdG9vbGJhci9Tb3J0Wm9uZS1tanMuanMnICovXG4gICAgICAgICAgICAgICAgJy4uLy4uL2RyYWdnYWJsZS90YWIvaGVhZGVyL3Rvb2xiYXIvU29ydFpvbmUubWpzJ1xuICAgICAgICAgICAgICAgICkudGhlbihtb2R1bGUgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnNvcnRab25lID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICA6IG1vZHVsZS5kZWZhdWx0LFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lICAgICAgICAgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBib3VuZGFyeUNvbnRhaW5lcklkOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgb3duZXIgICAgICAgICAgICAgIDogbWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLnNvcnRab25lQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQWN0aXZlVGFiSW5kaWNhdG9yIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlQWN0aXZlVGFiSW5kaWNhdG9yKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIC8vIHNpbGVudCB1cGRhdGVzXG4gICAgICAgICAgICAgICAgaXRlbS5fdXNlQWN0aXZlVGFiSW5kaWNhdG9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgaXRlbS51cGRhdGVVc2VBY3RpdmVUYWJJbmRpY2F0b3IodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlZmF1bHRzID0gbWUuaXRlbURlZmF1bHRzIHx8IHt9O1xuXG4gICAgICAgIGRlZmF1bHRzLnVzZUFjdGl2ZVRhYkluZGljYXRvciA9IG1lLnVzZUFjdGl2ZVRhYkluZGljYXRvcjtcbiAgICAgICAgbWUuaXRlbURlZmF1bHRzID0gZGVmYXVsdHM7XG5cbiAgICAgICAgc3VwZXIuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsYXlvdXQgY29uZmlnIG1hdGNoaW5nIHRvIHRoZSBkb2NrIHBvc2l0aW9uXG4gICAgICogQHJldHVybnMge09iamVjdH0gbGF5b3V0Q29uZmlnXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGdldExheW91dENvbmZpZygpIHtcbiAgICAgICAgbGV0IGxheW91dENvbmZpZztcblxuICAgICAgICBzd2l0Y2godGhpcy5kb2NrKSB7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgcGFjayA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgbGF5b3V0Q29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICBudHlwZSAgICA6ICd2Ym94JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24gICAgOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnY29sdW1uLXJldmVyc2UnLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdlbmQnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgICBsYXlvdXRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ3Zib3gnLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbiAgICA6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICBwYWNrICAgICA6ICdzdGFydCdcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxheW91dENvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhbiBleGlzdGluZyBpdGVtIHRvIGEgbmV3IGluZGV4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0b0luZGV4XG4gICAgICogQHJldHVybnMge05lby5jb21wb25lbnQuQmFzZX1cbiAgICAgKi9cbiAgICBtb3ZlVG8oZnJvbUluZGV4LCB0b0luZGV4KSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IHN1cGVyLm1vdmVUbyhmcm9tSW5kZXgsIHRvSW5kZXgpO1xuXG4gICAgICAgIGlmIChmcm9tSW5kZXggIT09IHRvSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLmluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRvb2xiYXIpO1xuXG5leHBvcnQge1Rvb2xiYXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkNsYXNzU3lzdGVtXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIENsYXNzU3lzdGVtIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNsYXNzU3lzdGVtJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5DbGFzc1N5c3RlbSdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogY2FuIGdldCB1c2VkIGluc2lkZSBiZWZvcmVTZXQgbWV0aG9kcyBpbiBjYXNlIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnN0YW5jZXMgbGlrZSBzdG9yZXNcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOZW8uY29yZS5CYXNlfG51bGx9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gW0RlZmF1bHRDbGFzcz1udWxsXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbZGVmYXVsdFZhbHVlcz17fV1cbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvcmUuQmFzZX0gaW5zdGFuY2VcbiAgICAgKi9cbiAgICBzdGF0aWMgYmVmb3JlU2V0SW5zdGFuY2UoY29uZmlnLCBEZWZhdWx0Q2xhc3M9bnVsbCwgZGVmYXVsdFZhbHVlcz17fSkge1xuICAgICAgICBpZiAoIWNvbmZpZyAmJiBEZWZhdWx0Q2xhc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IE5lby5jcmVhdGUoRGVmYXVsdENsYXNzLCBkZWZhdWx0VmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWcgJiYgY29uZmlnLmlzQ2xhc3MpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IE5lby5jcmVhdGUoY29uZmlnLCBkZWZhdWx0VmFsdWVzKTtcbiAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNPYmplY3QoY29uZmlnKSAmJiAhKGNvbmZpZyBpbnN0YW5jZW9mIE5lby5jb3JlLkJhc2UpKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLm50eXBlKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gTmVvLm50eXBlKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGVmYXVsdFZhbHVlcyxcbiAgICAgICAgICAgICAgICAgICAgLi4uY29uZmlnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKERlZmF1bHRDbGFzcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdDb25maWcubW9kdWxlID0gRGVmYXVsdENsYXNzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3Q29uZmlnLCB7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZXMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmNvbmZpZ1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uZmlnID0gTmVvLmNyZWF0ZShuZXdDb25maWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENsYXNzU3lzdGVtKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xhc3NTeXN0ZW07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkZ1bmN0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb0Z1bmN0aW9uIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkZ1bmN0aW9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5GdW5jdGlvbidcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kIGFyZ3MgaW5zdGVhZCBvZiBwcmVwZW5kaW5nIHRoZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gc2NvcGVcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgc3RhdGljIGJpbmRBcHBlbmQoc2NvcGUpIHtcbiAgICAgICAgY29uc3QgZm4gICA9IHRoaXMsXG4gICAgICAgICAgICAgIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuc2xpY2UoMSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KHNjb3BlLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykuY29uY2F0KGFyZ3MpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29yZS5CYXNlfSB0YXJnZXRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNjb3BlXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVTZXF1ZW5jZSh0YXJnZXQsIG1ldGhvZE5hbWUsIGZuLCBzY29wZSkge1xuICAgICAgICBsZXQgbWV0aG9kID0gdGFyZ2V0W21ldGhvZE5hbWVdIHx8IE5lby5lbXB0eUZuO1xuXG4gICAgICAgIHJldHVybiAodGFyZ2V0W21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShzY29wZSB8fCB0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvcmUuQmFzZX0gdGFyZ2V0XG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzY29wZVxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaW50ZXJjZXB0KHRhcmdldCwgbWV0aG9kTmFtZSwgZm4sIHNjb3BlKSB7XG4gICAgICAgIGxldCBtZXRob2QgPSB0YXJnZXRbbWV0aG9kTmFtZV0gfHwgTmVvLmVtcHR5Rm47XG5cbiAgICAgICAgcmV0dXJuICh0YXJnZXRbbWV0aG9kTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZuLmFwcGx5KHNjb3BlIHx8IHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICBtZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb0Z1bmN0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgTmVvRnVuY3Rpb247IiwiaW1wb3J0IEJhc2UgICAgICBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IE5lb09iamVjdCBmcm9tICcuLi91dGlsL09iamVjdC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5LZXlOYXZpZ2F0aW9uXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIEtleU5hdmlnYXRpb24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuS2V5TmF2aWdhdGlvbidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuS2V5TmF2aWdhdGlvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdrZXluYXYnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAna2V5bmF2JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsbHkgc3RvcmVzIHRoZSBjb21wb25lbnQgaWQgaW5zaWRlIF9jb21wb25lbnRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbXBvbmVudC5CYXNlfG51bGx9IGNvbXBvbmVudF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50XzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNldCB0aGlzIHRvIHRydWUgaW4gY2FzZSB0aGUga2V5ZG93biBldmVudCBpcyBzdXBwb3NlZCB0byBidWJibGUgdXB3YXJkcyBpbnNpZGUgdGhlIGNvbXBvbmVudCB0cmVlXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGtleURvd25FdmVudEJ1YmJsZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAga2V5RG93bkV2ZW50QnViYmxlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGtleXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGtleXNfOiBudWxsXG4gICAgfX1cblxuICAgIGFkZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9rZXlzLnB1c2goLi4udGhpcy5wYXJzZUtleXModmFsdWUpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbXBvbmVudC5CYXNlfVxuICAgICAqL1xuICAgIGJlZm9yZUdldENvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5fY29tcG9uZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSB2YWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgY29tcG9uZW50IGlkXG4gICAgICovXG4gICAgYmVmb3JlU2V0Q29tcG9uZW50KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudW5yZWdpc3RlcigpO1xuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bihkYXRhKSB7XG4gICAgICAgIC8vIFVzaW5nIHRoZSBjaHJvbWUgYXV0by1maWxsIGZlYXR1cmUgZG9lcyB0cmlnZ2VyIGEga2V5ZG93biBldmVudCwgbm90IGNvbnRhaW5pbmcgYSBrZXkuIFNlZTogIzY0XG4gICAgICAgIGlmIChkYXRhLmtleSkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdXBwZXJDYXNlS2V5ID0gZGF0YS5rZXkudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgICAgICBzY29wZTtcblxuICAgICAgICAgICAgdXBwZXJDYXNlS2V5ID0gbWUucGFyc2VVcHBlckNhc2VLZXkodXBwZXJDYXNlS2V5KTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0tleU5hdmlnYXRpb24gb25LZXlEb3duJywgdXBwZXJDYXNlS2V5LCBkYXRhLCBtZS5rZXlzKTtcblxuICAgICAgICAgICAgbWUua2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgc2NvcGUgPSBOZW8uZ2V0KGtleS5zY29wZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoa2V5LmtleS50b1VwcGVyQ2FzZSgpID09PSB1cHBlckNhc2VLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlW2tleS5mbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlW2tleS5mbl0uYXBwbHkoc2NvcGUsIFtkYXRhXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBwYXJzZUtleXModmFsdWUpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IGNvbXBvbmVudElkID0gdGhpcy5fY29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGtleUFycmF5ICAgID0gW107XG5cbiAgICAgICAgICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbHVlKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAga2V5QXJyYXkucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbiAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgIDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGU6IGNvbXBvbmVudElkIC8vIHRvZG86IHN1cHBvcnQgVkNzIGxhdGVyIG9uXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGtleUFycmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIHNwZWNpZmljIGtleSBuYW1lcywgZS5nLiBcIiBcIiA9PiBTUEFDRVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZVVwcGVyQ2FzZUtleShrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgICAgIGtleSA9ICdTUEFDRSc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdBUlJPV0RPV04nOlxuICAgICAgICAgICAgICAgIGtleSA9ICdET1dOJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XTEVGVCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ0xFRlQnO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQVJST1dSSUdIVCc6XG4gICAgICAgICAgICAgICAga2V5ID0gJ1JJR0hUJztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FSUk9XVVAnOlxuICAgICAgICAgICAgICAgIGtleSA9ICdVUCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ga2V5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IGNvbXBvbmVudC5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgICAgICBtZS5rZXlzICAgICAgPSBtZS5wYXJzZUtleXMobWUua2V5cyk7XG5cbiAgICAgICAgaWYgKGRvbUxpc3RlbmVycykge1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGtleWRvd246IHtcbiAgICAgICAgICAgICAgICAgICAgZm4gICAgOiBtZS5vbktleURvd24sXG4gICAgICAgICAgICAgICAgICAgIGJ1YmJsZTogbWUua2V5RG93bkV2ZW50QnViYmxlLFxuICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbXBvbmVudC5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBrZXkgbGlzdGVuZXIgdXNpbmcgdGhlIHNhbWUgY29uZmlnIHVzZWQgd2hlbiBjcmVhdGluZyBpdFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICByZW1vdmVLZXkoY29uZmlnKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGtleXMgPSBtZS5fa2V5cyxcbiAgICAgICAgICAgIGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGtleXMubGVuZ3RoLFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIGlmIChOZW9PYmplY3QuaXNFcXVhbChrZXksIGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBtdWx0aXBsZSBrZXkgbGlzdGVuZXJzIHBhc3NpbmcgYW4gYXJyYXkgb2YgY29uZmlnIGl0ZW1zXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICByZW1vdmVLZXlzKGl0ZW1zKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zKSkge1xuICAgICAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHRoaXMucmVtb3ZlS2V5KGl0ZW0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBkb20gbGlzdGVuZXIgZnJvbSB0aGUgb3duZXIgY29tcG9uZW50XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhLZXlOYXZpZ2F0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5TmF2aWdhdGlvbjsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuT2JqZWN0XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE5lb09iamVjdCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5PYmplY3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLk9iamVjdCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBwcm9wZXJ0aWVzIG9mIHggbWF0Y2ggd2l0aCB0aGUgcHJvcGVydGllcyBvZiB5XG4gICAgICogU3VwcG9ydHMgbmVzdGVkIE9iamVjdHMsIGJ1dCBub3QgYXJyYXlzIGFzIHByb3AgdmFsdWVzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0geVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0VxdWFsKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIChOZW8uaXNPYmplY3QoeCkgJiYgTmVvLmlzT2JqZWN0KHkpKSA/XG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoeCkubGVuZ3RoID09PSBPYmplY3Qua2V5cyh5KS5sZW5ndGgpICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoeCkucmVkdWNlKGZ1bmN0aW9uKGlzRXF1YWwsIGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXNFcXVhbCAmJiBOZW9PYmplY3QuaXNFcXVhbCh4W2tleV0sIHlba2V5XSk7XG4gICAgICAgICAgICAgICAgfSwgdHJ1ZVxuICAgICAgICAgICAgKSA6ICh4ID09PSB5KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE5lb09iamVjdCk7XG5cbmV4cG9ydCBkZWZhdWx0IE5lb09iamVjdDsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnV0aWwuU3R5bGVcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgU3R5bGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuU3R5bGUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLlN0eWxlJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGFuIGRlbHRhIG9iamVjdCwgY29udGFpbmluZyB0aGUgc3R5bGVzIG9mIG5ld1N0eWxlIHdoaWNoIGFyZSBub3QgaW5jbHVkZWQgb3IgZGlmZmVyZW50IHRoYW4gaW4gb2xkU3R5bGVcbiAgICAgKiBTdHlsZXMgaW5jbHVkZWQgaW4gb2xkU3R5bGUgYnV0IG1pc3NpbmcgaW4gbmV3U3R5bGUgd2lsbCBnZXQgYSB2YWx1ZSBvZiBudWxsXG4gICAgICogc2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvc3R5bGVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG5ld1N0eWxlXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBvbGRTdHlsZVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHN0eWxlIGRlbHRhXG4gICAgICovXG4gICAgc3RhdGljIGNvbXBhcmVTdHlsZXMobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGxldCBzdHlsZXMgPSB7fTtcblxuICAgICAgICBpZiAoTmVvLmlzU3RyaW5nKG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgbmV3U3R5bGUgPSBOZW8uY29yZS5VdGlsLmNyZWF0ZVN0eWxlT2JqZWN0KG5ld1N0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChOZW8uaXNTdHJpbmcob2xkU3R5bGUpKSB7XG4gICAgICAgICAgICBvbGRTdHlsZSA9IE5lby5jb3JlLlV0aWwuY3JlYXRlU3R5bGVPYmplY3Qob2xkU3R5bGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFuZXdTdHlsZSAmJiAhb2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKCFvbGRTdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIE5lby5jbG9uZShuZXdTdHlsZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW5ld1N0eWxlKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhvbGRTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhuZXdTdHlsZSkuZm9yRWFjaChmdW5jdGlvbihzdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmICghb2xkU3R5bGUuaGFzT3duUHJvcGVydHkoc3R5bGUpIHx8IG9sZFN0eWxlW3N0eWxlXSAhPT0gbmV3U3R5bGVbc3R5bGVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1tzdHlsZV0gPSBuZXdTdHlsZVtzdHlsZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZFN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdTdHlsZS5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW3N0eWxlXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhzdHlsZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3R5bGUpO1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZTsiXSwic291cmNlUm9vdCI6IiJ9