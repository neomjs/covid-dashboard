self["webpackChunk"](["vendors~chunks/apps-shareddialog-app~chunks/apps-shareddialog2-app~chunks/examples-dialog-app"],{

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

/***/ "./node_modules/neo.mjs/src/dialog/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/dialog/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _draggable_DragZone_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../draggable/DragZone.mjs */ "./node_modules/neo.mjs/src/draggable/DragZone.mjs");
/* harmony import */ var _container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _plugin_Resizable_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin/Resizable.mjs */ "./node_modules/neo.mjs/src/plugin/Resizable.mjs");





/**
 * @class Neo.dialog.Base
 * @extends Neo.container.Panel
 */
class Base extends _container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.dialog.Base'
         * @protected
         */
        className: 'Neo.dialog.Base',
        /**
         * @member {String} ntype='dialog'
         * @protected
         */
        ntype: 'dialog',
        /**
         * @member {String|null} animateTargetId=null
         */
        animateTargetId: null,
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Boolean} autoRender=true
         */
        autoRender: true,
        /**
         * Either a dom node id, 'document.body' or null
         * @member {String|null} boundaryContainerId='document.body'
         */
        boundaryContainerId: 'document.body',
        /**
         * @member {String[]} cls=['neo-dialog','neo-panel','neo-container']
         * @protected
         */
        cls: ['neo-dialog', 'neo-panel', 'neo-container'],
        /**
         * @member {Boolean} draggable_=true
         */
        draggable_: true,
        /**
         * @member {Boolean} dragListenersAdded=false
         * @protected
         */
        dragListenersAdded: false,
        /**
         * @member {Neo.draggable.DragZone|null} dragZone=null
         */
        dragZone: null,
        /**
         * @member {Neo.container.Toolbar|null} headerToolbar=null
         */
        headerToolbar: null,
        /**
         * @member {Boolean} isDragging=false
         */
        isDragging: false,
        /**
         * @member {String} maximizeCls='far fa-window-maximize'
         */
        maximizeCls: 'far fa-window-maximize',
        /**
         * @member {Boolean} maximized_=false
         */
        maximized_: false,
        /**
         * @member {String} minimizeCls='far fa-window-minimize'
         */
        minimizeCls: 'far fa-window-minimize',
        /**
         * @member {Array} plugins=[Resizable]
         */
        plugins: [{
            module       :_plugin_Resizable_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            delegationCls: 'neo-dialog'
        }],
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cls: ['neo-dialog-wrapper'],
            cn : [{
                cn: []
            }]
        }
    }}

    /**
     *
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     *
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.vdom.id = me.getWrapperId();

        me.createHeader();

        if (me.animateTargetId) {
            me.animateShow();
        }
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        let me = this;

        me.headerToolbar = me.down({
            id: me.getHeaderToolbarId()
        });
    }

    /**
     * Triggered after the draggable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDraggable(value, oldValue) {
        let me           = this,
            domListeners = me.domListeners,
            cls;

        if (oldValue !== undefined && me.headerToolbar) {
            cls = me.headerToolbar.cls;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][value ? 'add' : 'remove'](cls, 'neo-draggable');
            me.headerToolbar.cls = cls;
        }

        if (value && !me.dragListenersAdded) {
            domListeners.push(
                {'drag:end'  : me.onDragEnd,   scope: me, delegate: '.neo-header-toolbar'},
                {'drag:start': me.onDragStart, scope: me, delegate: '.neo-header-toolbar'}
            );

            me.domListeners       = domListeners;
            me.dragListenersAdded = true; // todo: multi window apps
        }
    }

    /**
     * Triggered after the maximized config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMaximized(value, oldValue) {
        let me   = this,
            vdom = me.vdom,
            cls  = vdom.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"][value ? 'add' : 'remove'](cls, 'neo-maximized');
        me.vdom = vdom;
    }

    /**
     * Triggered after the mounted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetMounted(value, oldValue) {
        super.afterSetMounted(value, oldValue);

        if (value) {
            let me = this;

            if (me.animateTargetId) {
                Neo.currentWorker.promiseMessage('main', {
                    action : 'updateDom',
                    appName: me.appName,
                    deltas : [{
                        action: 'removeNode',
                        id    : me.getAnimateTargetId()
                    }]
                });
            }
        }
    }

    /**
     *
     */
    animateHide() {
        let me      = this,
            appName = me.appName,
            id      = me.getAnimateTargetId();

        Neo.main.DomAccess.getBoundingClientRect({
            id: [me.id, me.animateTargetId]
        }).then(rects => {
            Neo.currentWorker.promiseMessage('main', {
                action  : 'mountDom',
                appName : appName,
                html    : `<div id="${id}" class="neo-animate-dialog neo-hide" style="height:${rects[0].height}px;left:${rects[0].left}px;top:${rects[0].top}px;width:${rects[0].width}px;"></div>`,
                parentId: 'document.body'
            }).then(() => {
                setTimeout(() => {
                    Neo.currentWorker.promiseMessage('main', {
                        action  : 'updateDom',
                        appName : appName,

                        deltas: [{
                            id   : id,
                            style: {
                                height: `${rects[1].height}px`,
                                left  : `${rects[1].left  }px`,
                                top   : `${rects[1].top   }px`,
                                width : `${rects[1].width }px`,
                            }
                        }]
                    }).then(() => {
                        setTimeout(() => {
                            Neo.currentWorker.promiseMessage('main', {
                                action : 'updateDom',
                                appName: appName,
                                deltas : [{
                                    action: 'removeNode',
                                    id    : id
                                }]
                            });
                        }, 250);
                    });
                }, 30);

                me.fire('close');
                me.destroy(true);
            });
        });
    }

    /**
     *
     */
    animateShow() {
        let me        = this,
            appName   = me.appName,
            autoMount = me.autoMount,
            id        = me.getAnimateTargetId();

        me.autoMount  = false;
        me.autoRender = false;

        Neo.main.DomAccess.getBoundingClientRect({
            id: me.animateTargetId
        }).then(rect => {
            Neo.currentWorker.promiseMessage('main', {
                action  : 'mountDom',
                appName : appName,
                html    : `<div id="${id}" class="neo-animate-dialog" style="height:${rect.height}px;left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;"></div>`,
                parentId: 'document.body'
            }).then(() => {
                setTimeout(() => {
                    Neo.currentWorker.promiseMessage('main', {
                        action  : 'updateDom',
                        appName : appName,

                        deltas: [{
                            id   : id,
                            style: {
                                height   : me.wrapperStyle && me.wrapperStyle.height || '50%',
                                left     : '50%',
                                top      : '50%',
                                transform: 'translate(-50%, -50%)',
                                width    : me.wrapperStyle && me.wrapperStyle.width || '50%'
                            }
                        }]
                    }).then(() => {
                        if (autoMount) {
                            setTimeout(() => {
                                me.render(true);
                            }, 200);
                        }
                    });
                }, 30);
            });
        });
    }

    /**
     *
     */
    close() {
        let me = this;

        if (me.animateTargetId) {
            me.animateHide();
        } else {
            me.fire('close');
            me.destroy(true);
        }
    }

    /**
     *
     */
    createHeader() {
        let me      = this,
            cls     = ['neo-header-toolbar', 'neo-toolbar'],
            headers = me.headers || [];

        if (me.draggable) {
            cls.push('neo-draggable');
        }

        headers.unshift({
            cls  : cls,
            dock : 'top',
            id   : me.getHeaderToolbarId(),
            items: [{
                ntype: 'label',
                text : 'Dialog Title'
            }, '->', {
                iconCls: 'far fa-window-maximize',
                handler: me.maximize.bind(me)
            }, {
                iconCls: 'far fa-window-close',
                handler: me.close.bind(me)
            }]
        });

        me.headers = headers;
    }

    /**
     * Returns the id of the animation node
     * @returns {String}
     */
    getAnimateTargetId() {
        return this.id + '-animate';
    }

    /**
     * Returns the id of the header toolbar
     * @returns {String}
     */
    getHeaderToolbarId() {
        return this.id + '-header-toolbar';
    }

    /**
     * Returns the id of the header toolbar
     * @returns {String}
     */
    getWrapperId() {
        return this.id + '-wrapper';
    }

    /**
     * @param {Object} data
     */
    maximize(data) {
        let me = this;

        data.component.iconCls = me.maximized ? me.maximizeCls : me.minimizeCls;

        me.maximized = !me.maximized;
    }

    /**
     *
     * @param data
     */
    onDragEnd(data) {
        let me = this,
            style;

        if (!me.maximized) {
            Neo.main.DomAccess.getBoundingClientRect({
                id: me.dragZone.dragProxy.id
            }).then(rect => {
                style = me.wrapperStyle;

                Object.assign(style, {
                    height   : `${rect.height}px`,
                    left     : `${rect.left}px`,
                    opacity  : 1,
                    top      : `${rect.top}px`,
                    transform: 'none',
                    width    : `${rect.width}px`
                });

                me.wrapperStyle = style;

                me.dragZone.dragEnd(data);

                // we need a reset, otherwise we do not get a change event for the next onDragStart() call
                me.dragZone.boundaryContainerId = null;
                me.isDragging                   = false;
            });
        }
    }

    /**
     *
     * @param data
     */
    onDragStart(data) {
            let me    = this,
                style = me.wrapperStyle || {};

        if (!me.maximized) {
            me.isDragging = true;
            me.plugins[0].removeAllNodes(); // todo: getPlugin()

            if (!me.dragZone) {
                me.dragZone = Neo.create({
                    module             : _draggable_DragZone_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                    appName            : me.appName,
                    boundaryContainerId: me.boundaryContainerId,
                    dragElement        : me.vdom
                });
            } else {
                me.dragZone.boundaryContainerId = me.boundaryContainerId;
            }

            me.dragZone.dragStart(data);

            style.opacity = 0.3;

            me.wrapperStyle = style;
        }
    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/draggable/DragProxyComponent.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/src/draggable/DragProxyComponent.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragProxyComponent; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.draggable.DragProxyComponent
 * @extends Neo.component.Base
 */
class DragProxyComponent extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.DragProxyComponent'
         * @protected
         */
        className: 'Neo.draggable.DragProxyComponent',
        /**
         * @member {String} ntype='dragproxy'
         * @protected
         */
        ntype: 'dragproxy',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {Boolean} autoRender=true
         */
        autoRender: true,
        /**
         * @member {String[]} cls=['neo-dragproxy']
         */
        cls: ['neo-dragproxy'],
        /**
         * @member {Boolean} moveInMainThread=true
         */
        moveInMainThread: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.on('mounted', me.onMounted, me);
    }

    /**
     *
     * @param {String} id
     */
    onMounted(id) {
        if (this.moveInMainThread) {
            Neo.main.addon.DragDrop.setDragProxyElement({
                id: id
            });
        }
    }
}

Neo.applyClassConfig(DragProxyComponent);



/***/ }),

/***/ "./node_modules/neo.mjs/src/draggable/DragZone.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/draggable/DragZone.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DragZone; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");
/* harmony import */ var _DragProxyComponent_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DragProxyComponent.mjs */ "./node_modules/neo.mjs/src/draggable/DragProxyComponent.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class Neo.draggable.DragZone
 * @extends Neo.core.Base
 */
class DragZone extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.draggable.DragZone'
         * @protected
         */
        className: 'Neo.draggable.DragZone',
        /**
         * @member {String} ntype='dragzone'
         * @protected
         */
        ntype: 'dragzone',
        /**
         * The name of the App this instance belongs to
         * @member {String|null} appName=null
         */
        appName: null,
        /**
         * @member {String|null} boundaryContainerId_=null
         */
        boundaryContainerId_: null,
        /**
         * The vdom (tree) of the element you want to drag
         * @member {Object|null} dragElement=null
         */
        dragElement: null,
        /**
         * @member {Neo.component.Base|null} dragProxy=null
         * @protected
         */
        dragProxy: null,
        /**
         * @member {Object|null} dragProxyConfig=null
         */
        dragProxyConfig: null,
        /**
         * @member {Boolean} moveHorizontal=true
         */
        moveHorizontal: true,
        /**
         * @member {Boolean} moveInMainThread=true
         */
        moveInMainThread: true,
        /**
         * @member {Boolean} moveVertical=true
         */
        moveVertical: true,
        /**
         * @member {Number} offsetX=0
         */
        offsetX: 0,
        /**
         * @member {Number} offsetY=0
         */
        offsetY: 0,
        /**
         * @member {String} proxyParentId_='document.body'
         */
        proxyParentId_: 'document.body',
        /**
         * @member {String|null} scrollContainerId_=null
         */
        scrollContainerId_: null,
        /**
         * @member {Number} scrollFactorLeft_=1
         */
        scrollFactorLeft_: 1,
        /**
         * @member {Number} scrollFactorTop_=1
         */
        scrollFactorTop_: 1,
        /**
         * True creates a position:absolute wrapper div which contains the cloned element
         * @member {Boolean} useProxyWrapper=true
         */
        useProxyWrapper: true
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        if (!Neo.main.addon.DragDrop) {
            throw new Error('You can not use Neo.draggable.DragZone without adding Neo.main.addon.DragDrop to the main thread addons');
        }
    }

    /**
     * Triggered after the scrollContainerId config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetScrollContainerId(value, oldValue) {
        if (value) {
            Neo.main.addon.DragDrop.setScrollContainer({
                id: value
            });
        }
    }

    /**
     * Triggered after the boundaryContainerId config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetBoundaryContainerId(value, oldValue) {
        if (value) {
            Neo.main.addon.DragDrop.setBoundaryContainer({
                id: value
            });
        }
    }

    /**
     * Triggered after the scrollFactorLeft config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetScrollFactorLeft(value, oldValue) {
        if (!(value === 1 && oldValue === undefined)) {
            Neo.main.addon.DragDrop.setScrollFactorLeft({
                value: value
            });
        }
    }

    /**
     * Triggered after the scrollFactorTop config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetScrollFactorTop(value, oldValue) {
        if (!(value === 1 && oldValue === undefined)) {
            Neo.main.addon.DragDrop.setScrollFactorTop({
                value: value
            });
        }
    }

    /**
     *
     * @param {Object} data
     */
    createDragProxy(data) {
        let me    = this,
            clone = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].clone(me.dragElement);

        const config = {
            module          : _DragProxyComponent_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            appName         : me.appName,
            moveInMainThread: me.moveInMainThread,
            parentId        : me.proxyParentId,
            vdom            : me.useProxyWrapper ? {cn: [clone]} : clone,

            style: {
                height: `${data.height}px`,
                left  : `${me.moveHorizontal ? data.left : 0}px`,
                top   : `${me.moveVertical   ? data.top  : 0}px`,
                width : `${data.width}px`
            },

            ...me.dragProxyConfig || {}
        };

        if (!me.useProxyWrapper) {
            config.cls = clone.cls;
        }

        me.dragProxy = Neo.create(config);
    }

    /**
     * Override for using custom animations
     */
    destroyDragProxy() {
        let me = this,
            id = me.dragProxy.id;

        setTimeout(() => {
            Neo.currentWorker.promiseMessage('main', {
                action: 'updateDom',
                deltas: [{action: 'removeNode', id: id}]
            });
        }, me.moveInMainThread ? 0 : 30);

        me.dragProxy.destroy();
    }

    /**
     *
     */
    dragEnd() {
        let me = this;

        if (me.dragProxy) {
            me.destroyDragProxy();
            me.dragProxy = null;
        }

        me.scrollContainerId = null;
    }

    /**
     *
     * @param {Object} data
     */
    dragMove(data) {
        let me = this,
            style;

        if (!me.moveInMainThread && me.dragProxy) {
            style = me.dragProxy.style;

            if (me.moveHorizontal) {
                style.left = `${data.clientX - me.offsetX}px`;
            }

            if (me.moveVertical) {
                style.top = `${data.clientY - me.offsetY}px`;
            }

            me.dragProxy.style = style;
        }
    }

    /**
     *
     * @param {Object} data
     */
    dragStart(data) {
        let me = this;

        Neo.main.DomAccess.getBoundingClientRect({
            id: me.dragElement.id
        }).then(rect => {
            me.offsetX = data.clientX - rect.left;
            me.offsetY = data.clientY - rect.top;

            me.createDragProxy(rect);
        });
    }
}

Neo.applyClassConfig(DragZone);



/***/ }),

/***/ "./node_modules/neo.mjs/src/plugin/Base.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/plugin/Base.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Plugins are intended to get put into the plugins config of component.Base
 * to enhance them or add additional features
 * @class Neo.plugin.Base
 * @extends Neo.core.Base
 */
class Base extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.plugin.Base'
         * @protected
         */
        className: 'Neo.plugin.Base',
        /**
         * @member {String} ntype='plugin'
         * @protected
         */
        ntype: 'plugin',
        /**
         * @member {Neo.component.Base} owner=null
         * @protected
         */
        owner: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.owner.on('mounted', me.onOwnerMounted, me);
    }

    /**
     * Override this method to apply changes to the owner Component when it does get mounted
     */
    onOwnerMounted() {

    }
}

Neo.applyClassConfig(Base);



/***/ }),

/***/ "./node_modules/neo.mjs/src/plugin/Resizable.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/plugin/Resizable.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Resizable; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/plugin/Base.mjs");
/* harmony import */ var _draggable_DragZone_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../draggable/DragZone.mjs */ "./node_modules/neo.mjs/src/draggable/DragZone.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");




/**
 * @class Neo.plugin.Resizable
 * @extends Neo.plugin.Base
 */
class Resizable extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Resize cursor styles use north, south based names, so we need a mapping.
         * The order has to match the static positions array.
         * @member {String[]} cursorPositions=['s', 'sw', 'se', 'w', 'e', 'n', 'nw', 'ne']
         * @protected
         * @static
         */
        cursorPositions: ['s', 'sw', 'se', 'w', 'e', 'n', 'nw', 'ne'],
        /**
         * remove - chars
         * @member {RegExp} nameRegEx=/-([a-z])/g
         * @protected
         * @static
         */
        nameRegEx: /-([a-z])/g,
        /**
         * Internal position names
         * @member {String[]} validDirections=['bottom','bottom-left','bottom-right','left','right','top','top-left','top-right']
         * @static
         */
        positions: ['bottom', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'top-left', 'top-right'],
        /**
         * Directions into which you want to drag => resize
         * @member {String[]} validDirections=['b','bl','br','l','r','t','tl','tr']
         * @static
         */
        validDirections: ['b', 'bl', 'br', 'l', 'r', 't', 'tl', 'tr']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.plugin.Resizable'
         * @protected
         */
        className: 'Neo.plugin.Resizable',
        /**
         * @member {String} ntype='plugin-resizable'
         * @protected
         */
        ntype: 'plugin-resizable',
        /**
         * @member {String|null} boundaryContainerId='document.body'
         */
        boundaryContainerId: 'document.body',
        /**
         * The DOMRect of the boundaryContainer if set (measured on drag:start)
         * @member {Object} boundaryContainerRect=null
         * @protected
         */
        boundaryContainerRect: null,
        /**
         * @member {String} currentNodeName=null
         * @protected
         */
        currentNodeName: null,
        /**
         * Must be set by each owner
         * @member {String} delegationCls=null
         */
        delegationCls: null,
        /**
         * Directions into which you want to drag => resize
         * @member {String[]} directions_=['b','bl','br','l','r','t','tl','tr']
         */
        directions_: ['b', 'bl', 'br', 'l', 'r', 't', 'tl', 'tr'],
        /**
         * @member {Neo.draggable.DragZone|null} dragZone=null
         */
        dragZone: null,
        /**
         * @member {Number} gap=10
         * @protected
         */
        gap: 10,
        /**
         * The DOMRect of the element to drag (measured on drag:start)
         * @member {Object} initialRect=null
         * @protected
         */
        initialRect: null,
        /**
         * @member {Boolean} isDragging=false
         */
        isDragging: false,
        /**
         * maximum height when resizing in px
         * @member {Number|null} maxHeight=null
         */
        maxHeight: null,
        /**
         * maximum width when resizing in px
         * @member {Number|null} maxWidth=null
         */
        maxWidth: null,
        /**
         * minimum height when resizing in px
         * @member {Number} minHeight=200
         */
        minHeight: 200,
        /**
         * minimum width when resizing in px
         * @member {Number} minWidth=200
         */
        minWidth: 200,
        /**
         * @member {Object} nodeBottom=null
         * @protected
         */
        nodeBottom: null,
        /**
         * @member {Object} nodeBottomLeft=null
         * @protected
         */
        nodeBottomLeft: null,
        /**
         * @member {Object} nodeBottomRight=null
         * @protected
         */
        nodeBottomRight: null,
        /**
         * @member {Object} nodeLeft=null
         * @protected
         */
        nodeLeft: null,
        /**
         * @member {Object} nodeRight=null
         * @protected
         */
        nodeRight: null,
        /**
         * @member {Object} nodeTop=null
         * @protected
         */
        nodeTop: null,
        /**
         * @member {Object} nodeTopLeft=null
         * @protected
         */
        nodeTopLeft: null,
        /**
         * @member {Object} nodeTopRight=null
         * @protected
         */
        nodeTopRight: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me           = this,
            domListeners = me.owner.domListeners;

        domListeners.push(
            {'drag:end'  : me.onDragEnd,    scope: me, delegate: '.neo-resizable'},
            {'drag:move' : me.onDragMove,   scope: me, delegate: '.neo-resizable'},
            {'drag:start': me.onDragStart,  scope: me, delegate: '.neo-resizable'},
            {mousemove   : me.onMouseMove,  scope: me, local   : true},
            {mouseleave  : me.onMouseLeave, scope: me}
        );

        me.owner.domListeners = domListeners;
    }

    /**
     *
     * @param {String} name
     * @returns {Boolean} true
     */
    addNode(name) {
        let me       = this,
            nodeName = 'node' + Neo.capitalize(name.replace(Resizable.nameRegEx, (str, letter) => letter.toUpperCase()));

        me.currentNodeName = name;
        me[nodeName] = {cls: ['neo-resizable', `neo-resizable-${name}`]};
        me.owner.getVdomRoot().cn.push(me[nodeName]);

        return true;
    }

    /**
     * Triggered before the directions config gets changed.
     * @param {String[]} value
     * @param {String[]} oldValue
     * @returns {String[]}
     * @protected
     */
    beforeSetDirections(value, oldValue) {
        if (Array.isArray(value)) {
            let i   = 0,
                len = value.length;

            for (; i < len; i++) {
                if (this.beforeSetEnumValue(value[i], oldValue, 'directions', 'validDirections') !== value[i]) {
                    return oldValue;
                }
            }
        }

        return value;
    }

    /**
     *
     * @param {Object} data
     */
    onDragEnd(data) {
        let me    = this,
            style = me.owner.wrapperStyle; // todo: delegation target

        Object.assign(me, {
            boundaryContainerRect: null,
            initialRect          : null,
            isDragging           : false
        });

        Object.assign(style, {
            opacity  : 1,
            transform: 'none',
            ...me.dragZone.dragProxy.wrapperStyle
        });

        me.owner.wrapperStyle = style;

        Neo.main.DomAccess.setStyle({
            id   : 'document.body',
            style: {cursor: null}
        });

        me.dragZone.dragEnd();
        me.removeAllNodes();
    }

    /**
     *
     * @param {Object} data
     */
    onDragMove(data) {
        let me        = this,
            node      = me.currentNodeName,
            ctRect    = me.boundaryContainerRect,
            maxHeight = me.maxHeight,
            maxWidth  = me.maxWidth,
            minHeight = me.minHeight,
            minWidth  = me.minWidth,
            rect      = me.initialRect,
            dist, size, style;

        if (!node) {
            me.onDragEnd({});
        } else if (me.dragZone.dragProxy) {
            style = me.dragZone.dragProxy.wrapperStyle;

            if (node.includes('bottom')) {
                size = Math.max(minHeight, data.clientY - rect.top);

                if (maxHeight) {
                    size = Math.min(size, maxHeight);
                }

                if (ctRect) {
                    size = Math.min(size, ctRect.bottom - rect.top);
                }

                style.height = `${size}px`;
            } else if (node.includes('top')) {
                dist = Math.min(rect.bottom - minHeight, data.clientY);
                size = Math.max(minHeight, rect.height + rect.top - data.clientY);

                if (maxHeight) {
                    dist = Math.max(dist, rect.bottom - maxHeight);
                    size = Math.min(size, maxHeight);
                }

                if (ctRect) {
                    dist = Math.max(dist, ctRect.top);
                    size = Math.min(size, rect.bottom - ctRect.top);
                }

                style.height = `${size}px`;
                style.top    = `${dist}px`;
            }

            if (node.includes('left')) {
                dist = Math.min(rect.right - minWidth, data.clientX);
                size = Math.max(minWidth, rect.width + rect.left - data.clientX);

                if (maxWidth) {
                    dist = Math.max(dist, rect.right - maxWidth);
                    size = Math.min(size, maxWidth);
                }

                if (ctRect) {
                    dist = Math.max(dist, ctRect.left);
                    size = Math.min(size, rect.right - ctRect.left);
                }

                style.left  = `${dist}px`;
                style.width = `${size}px`;
            } else if (node.includes('right')) {
                size = Math.max(minWidth, rect.width - rect.right + data.clientX);

                if (maxWidth) {
                    size = Math.min(size, maxWidth);
                }

                if (ctRect) {
                    size = Math.min(size, ctRect.right - rect.left);
                }

                style.width = `${size}px`;
            }

            me.dragZone.dragProxy.wrapperStyle = style;
        }
    }

    /**
     *
     * @param {Object} data
     */
    onDragStart(data) {
        let me          = this,
            containerId = me.boundaryContainerId,
            i           = 0,
            len         = data.path.length,
            owner       = me.owner,
            style       = owner.wrapperStyle, // todo: delegation target
            target;

        me.isDragging = true;

        style.opacity = 0.3;
        me.owner.wrapperStyle = style;

        for (; i < len; i++) {
            target = data.path[i];

            if (target.cls.includes(me.delegationCls)) {
                me.initialRect = target.rect;
            }

            if (containerId) {
                if (containerId === 'document.body' && target.tagName === 'body' || containerId === target.id) {
                    me.boundaryContainerRect = target.rect;
                    break; // assuming that the dragEl is not outside of the container
                }
            }
        }

        if (!me.boundaryContainerRect) {
            Neo.main.DomAccess.getBoundingClientRect({
                id: me.boundaryContainerRect
            }).then(rect => {
                me.boundaryContainerRect = rect;
            });
        }

        Neo.main.DomAccess.setStyle({
            id   : 'document.body',
            style: {cursor: `${Resizable.cursorPositions[Resizable.positions.indexOf(me.currentNodeName)]}-resize !important`}
        });

        if (!me.dragZone) {
            me.dragZone = Neo.create({
                module             : _draggable_DragZone_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                appName            : owner.appName,
                boundaryContainerId: owner.boundaryContainerId,
                dragElement        : owner.vdom,
                moveInMainThread   : false
            });
        } else {
            me.dragZone.boundaryContainerId = owner.boundaryContainerId;
        }

        me.dragZone.dragStart(data);
    }

    /**
     *
     * @param {Object} data
     */
    onMouseMove(data) {
        let me   = this,
            dir  = me.directions,
            i    = 0,
            gap  = me.gap,
            h    = false,
            len  = data.path.length,
            vdom = me.owner.vdom,
            bottom, left, right, target, top;

        if (!me.isDragging && !me.owner.isDragging) {
            for (; i < len; i++) {
                if (data.path[i].cls.includes(me.delegationCls)) {
                    target = data.path[i];
                    break;
                }
            }

            bottom = data.clientY >= target.rect.y - gap + target.rect.height;
            left   = data.clientX <= target.rect.x + gap;
            right  = data.clientX >= target.rect.x - gap + target.rect.width;
            top    = data.clientY <= target.rect.y + gap;

            if (me.nodeBottom && (!bottom || bottom && left  || bottom && right)) {h = me.removeNode('bottom');}
            if (me.nodeLeft   && (!left   || bottom && left  || top    && left))  {h = me.removeNode('left');}
            if (me.nodeRight  && (!right  || bottom && right || top    && right)) {h = me.removeNode('right');}
            if (me.nodeTop    && (!top    || top    && left  || top    && right)) {h = me.removeNode('top');}

            if (me.nodeBottomLeft  && (!bottom || !left))  {h = me.removeNode('bottom-left');}
            if (me.nodeBottomRight && (!bottom || !right)) {h = me.removeNode('bottom-right');}
            if (me.nodeTopLeft     && (!top    || !left))  {h = me.removeNode('top-left');}
            if (me.nodeTopRight    && (!top    || !right)) {h = me.removeNode('top-right');}

            if      (dir.includes('bl') && bottom && left)  {if (!me.nodeBottomLeft)  {h = me.addNode('bottom-left');}}
            else if (dir.includes('br') && bottom && right) {if (!me.nodeBottomRight) {h = me.addNode('bottom-right');}}
            else if (dir.includes('tl') && top    && left)  {if (!me.nodeTopLeft)     {h = me.addNode('top-left');}}
            else if (dir.includes('tr') && top    && right) {if (!me.nodeTopRight)    {h = me.addNode('top-right');}}
            else if (dir.includes('b')  && bottom)          {if (!me.nodeBottom)      {h = me.addNode('bottom');}}
            else if (dir.includes('l')  && left)            {if (!me.nodeLeft)        {h = me.addNode('left');}}
            else if (dir.includes('r')  && right)           {if (!me.nodeRight)       {h = me.addNode('right');}}
            else if (dir.includes('t')  && top)             {if (!me.nodeTop)         {h = me.addNode('top');}}

            if (h) {
                me.owner.vdom = vdom;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    onMouseLeave(data) {
        let me = this;

        if (!me.isDragging) {
            // limit the event to delegation targets
            if (data.path[0].cls.includes(me.delegationCls)) {
                me.removeAllNodes();
            }
        }
    }

    /**
     * There should be max 1 node (resize handle) at any given time.
     * see: /issues/1139
     */
    removeAllNodes() {
        let me   = this,
            vdom = me.owner.vdom;

        if (me.currentNodeName) {
            me.removeNode(me.currentNodeName);
            me.owner.vdom = vdom;
        }
    }

    /**
     *
     * @param {String} name
     * @returns {Boolean} true in case the node existed
     */
    removeNode(name) {
        let me       = this,
            nodeName = 'node' + Neo.capitalize(name.replace(Resizable.nameRegEx, (str, letter) => letter.toUpperCase()));

        if (me[nodeName]) {
            me.currentNodeName = null;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].remove(me.owner.getVdomRoot().cn, me[nodeName]);
            me[nodeName] = null;

            return true;
        }

        return false;
    }
}

Neo.applyClassConfig(Resizable);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZGlhbG9nL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9kcmFnZ2FibGUvRHJhZ1Byb3h5Q29tcG9uZW50Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZHJhZ2dhYmxlL0RyYWdab25lLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvcGx1Z2luL0Jhc2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9wbHVnaW4vUmVzaXphYmxlLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDRzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpREFBUztBQUM3Qix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELCtDQUErQztBQUM1Ryw2REFBNkQsNkNBQTZDO0FBQzFHLDZEQUE2RCxnREFBZ0Q7QUFDN0csNkRBQTZELDhDQUE4QztBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0NBQWtDLGdDQUFnQzs7QUFFbEU7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxnQ0FBZ0M7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuTEE7QUFBQTtBQUFBO0FBQW1DOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBUztBQUNoQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRDtBQUNIO0FBQ0w7QUFDTTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQUs7QUFDeEIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0EsMEJBQTBCLDZEQUFTO0FBQ25DO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIseUVBQXlFO0FBQzFGLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUcsc0RBQXNELGdCQUFnQixHQUFHLE9BQU8sY0FBYyxHQUFHLE1BQU0sYUFBYSxHQUFHLFFBQVEsZUFBZSxHQUFHO0FBQzFMO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0QsMkNBQTJDLGdCQUFnQjtBQUMzRCwyQ0FBMkMsZ0JBQWdCO0FBQzNELDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLEdBQUcsNkNBQTZDLFlBQVksR0FBRyxPQUFPLFVBQVUsR0FBRyxNQUFNLFNBQVMsR0FBRyxRQUFRLFdBQVcsR0FBRztBQUNqSztBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUMsa0NBQWtDLFVBQVU7QUFDNUM7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBLGtDQUFrQyxXQUFXO0FBQzdDLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBLHlDQUF5QywrREFBUTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdGNBO0FBQUE7QUFBQTtBQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMkRBQUk7QUFDckMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDUTtBQUNSOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzREFBSTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixzREFBUTs7QUFFNUI7QUFDQSw4QkFBOEIsK0RBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxZQUFZOztBQUVoRTtBQUNBLDJCQUEyQixZQUFZO0FBQ3ZDLDJCQUEyQixrQ0FBa0M7QUFDN0QsMkJBQTJCLGtDQUFrQztBQUM3RCwyQkFBMkIsV0FBVztBQUN0QyxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw2QkFBNkI7QUFDdkQsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLDBCQUEwQjtBQUMxRDs7QUFFQTtBQUNBLCtCQUErQiwwQkFBMEI7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2xRQTtBQUFBO0FBQUE7QUFBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixzREFBUTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0M7QUFDZTtBQUNSOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpREFBSTtBQUM1Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEscUVBQXFFO0FBQ2xGLGFBQWEscUVBQXFFO0FBQ2xGLGFBQWEscUVBQXFFO0FBQ2xGLGFBQWEseURBQXlEO0FBQ3RFLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0NBQXdDLEtBQUs7QUFDckU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxLQUFLO0FBQ3ZDLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFrQyxLQUFLO0FBQ3ZDLGtDQUFrQyxLQUFLO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsS0FBSztBQUN0QyxpQ0FBaUMsS0FBSztBQUN0QyxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsS0FBSztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVywyRUFBMkU7QUFDMUcsU0FBUzs7QUFFVDtBQUNBO0FBQ0EscUNBQXFDLCtEQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUZBQW1GO0FBQ25GLG1GQUFtRjtBQUNuRixtRkFBbUY7QUFDbkYsbUZBQW1GOztBQUVuRiw0REFBNEQ7QUFDNUQsNERBQTREO0FBQzVELDREQUE0RDtBQUM1RCw0REFBNEQ7O0FBRTVELDZEQUE2RCwwQkFBMEI7QUFDdkYsNkRBQTZELDBCQUEwQjtBQUN2Riw2REFBNkQsMEJBQTBCO0FBQ3ZGLDZEQUE2RCwwQkFBMEI7QUFDdkYsNkRBQTZELDBCQUEwQjtBQUN2Riw2REFBNkQsMEJBQTBCO0FBQ3ZGLDZEQUE2RCwwQkFBMEI7QUFDdkYsNkRBQTZELDBCQUEwQjs7QUFFdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVksdURBQVE7QUFDcEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvYXBwcy1zaGFyZWRkaWFsb2ctYXBwfmNodW5rcy9hcHBzLXNoYXJlZGRpYWxvZzItYXBwfmNodW5rcy9leGFtcGxlcy1kaWFsb2ctYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBUb29sYmFyICAgZnJvbSAnLi9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQW4gZXh0ZW5kZWQgQ29udGFpbmVyIHN1cHBvcnRpbmcgbXVsdGlwbGUgZG9ja2VkIGhlYWRlciB0b29sYmFyc1xuICogQGNsYXNzIE5lby5jb250YWluZXIuUGFuZWxcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBQYW5lbCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuUGFuZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuUGFuZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGFuZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncGFuZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb250YWluZXJDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbmVyQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBoZWFkZXJEZWZhdWx0cz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBoZWFkZXJzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlcnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1zPXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgX2xheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHZlcnRpY2FsSGVhZGVyc0ZpcnN0PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB2ZXJ0aWNhbEhlYWRlcnNGaXJzdDogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGhmID0gY29uZmlnICYmIGNvbmZpZy52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gdHJ1ZSB8fCBtZS52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAoaGYpIHtcbiAgICAgICAgICAgIG1lLmxheW91dCA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGYgICAgICAgICAgICAgICAgICAgPSBtZS52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJzICAgICAgICAgICAgICA9IG1lLmhlYWRlcnMgfHwgW10sXG4gICAgICAgICAgICBib3R0b21IZWFkZXJzICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydib3R0b20nOiAncmlnaHQnKX0pLFxuICAgICAgICAgICAgbGVmdEhlYWRlcnMgICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8nbGVmdCcgIDogJ3RvcCcpfSksXG4gICAgICAgICAgICByaWdodEhlYWRlcnMgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydyaWdodCcgOiAnYm90dG9tJyl9KSxcbiAgICAgICAgICAgIHRvcEhlYWRlcnMgICAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J3RvcCcgICA6ICdsZWZ0Jyl9KSxcbiAgICAgICAgICAgIGhhc0hvcml6b250YWxIZWFkZXJzID0gYm90dG9tSGVhZGVycy5sZW5ndGggPiAwIHx8IHRvcEhlYWRlcnMgIC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgaGFzVmVydGljYWxIZWFkZXJzICAgPSBsZWZ0SGVhZGVycyAgLmxlbmd0aCA+IDAgfHwgcmlnaHRIZWFkZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zICAgICAgPSBbXSxcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMgICAgICAgID0gW10sXG4gICAgICAgICAgICBjb25maWc7XG5cbiAgICAgICAgaWYgKGhlYWRlcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgTmVvLmVycm9yKCdQYW5lbCB3aXRob3V0IGhlYWRlcnMsIHBsZWFzZSB1c2UgYSBDb250YWluZXIgaW5zdGVhZCcsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc1ZlcnRpY2FsSGVhZGVycyAmJiAoaGYgJiYgaGFzSG9yaXpvbnRhbEhlYWRlcnMgfHwgIWhmICYmIGhhc0hvcml6b250YWxIZWFkZXJzKSkge1xuICAgICAgICAgICAgbGVmdEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgICAgICAuLi5tZS5jb250YWluZXJDb25maWcgfHwge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKHsuLi5tZS5oZWFkZXJEZWZhdWx0cywgLi4uY29uZmlnfSk7XG5cbiAgICAgICAgICAgIHJpZ2h0SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IGhvcml6b250YWxJdGVtcyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6IChoZiA/ICdoYm94JyA6ICd2Ym94JyksXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgIDogMSxcbiAgICAgICAgICAgICAgICBpdGVtcyAgICAgICA6IGl0ZW1zLFxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czogbWUuaXRlbURlZmF1bHRzLFxuICAgICAgICAgICAgICAgIC4uLm1lLmNvbnRhaW5lckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKHsuLi5tZS5oZWFkZXJEZWZhdWx0cywgLi4uY29uZmlnfSk7XG4gICAgICAgIH1cblxuICAgICAgICBib3R0b21IZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zID0gdmVydGljYWxJdGVtcztcblxuICAgICAgICBtZS5pdGVtRGVmYXVsdHMgPSBudWxsO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyIHRoZSBoZWFkZXIgY29uZmlnXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikge1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhlYWRlci50ZXh0KSB7XG4gICAgICAgICAgICBjb25maWcuaXRlbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLXBhbmVsLWhlYWRlci10ZXh0JywgJ25lby1sYWJlbCddLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogaGVhZGVyLnRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3N1bWluZyBhbGwgbGFiZWxzIGluc2lkZSBhIFBhbmVsIEhlYWRlciBhcmUgbWVhbnQgdG8gYmUgdGl0bGVzIC0+IGxvb2sgdGhlIHNhbWUgd2F5XG4gICAgICAgIGlmIChOZW8uaXNBcnJheShoZWFkZXIuaXRlbXMpKSB7XG4gICAgICAgICAgICBoZWFkZXIuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5udHlwZSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNscyA9IFsnbmVvLXBhbmVsLWhlYWRlci10ZXh0JywgJ25lby1sYWJlbCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jb25maWcsIC4uLmhlYWRlcn07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQYW5lbCk7XG5cbmV4cG9ydCB7UGFuZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5WaWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5WaWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd2aWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0cnVlIGFwcGxpZXMgJ25lby1ib2R5LXZpZXdwb3J0JyB0byB0aGUgZG9jdW1lbnQuYm9keVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhcHBseUJvZHlDbHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXZpZXdwb3J0J11cbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwcGx5Qm9keUNscykge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFwcGx5Qm9keUNscyh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWJvZHktdmlld3BvcnQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXdwb3J0KTtcblxuZXhwb3J0IHtWaWV3cG9ydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgRHJhZ1pvbmUgIGZyb20gJy4uL2RyYWdnYWJsZS9EcmFnWm9uZS5tanMnO1xuaW1wb3J0IFBhbmVsICAgICBmcm9tICcuLi9jb250YWluZXIvUGFuZWwubWpzJztcbmltcG9ydCBOZW9BcnJheSAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFJlc2l6YWJsZSBmcm9tICcuLi9wbHVnaW4vUmVzaXphYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5kaWFsb2cuQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5QYW5lbFxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgUGFuZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZGlhbG9nLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5kaWFsb2cuQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdkaWFsb2cnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZGlhbG9nJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhbmltYXRlVGFyZ2V0SWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0ZVRhcmdldElkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9SZW5kZXI9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1JlbmRlcjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVpdGhlciBhIGRvbSBub2RlIGlkLCAnZG9jdW1lbnQuYm9keScgb3IgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYm91bmRhcnlDb250YWluZXJJZD0nZG9jdW1lbnQuYm9keSdcbiAgICAgICAgICovXG4gICAgICAgIGJvdW5kYXJ5Q29udGFpbmVySWQ6ICdkb2N1bWVudC5ib2R5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZGlhbG9nJywnbmVvLXBhbmVsJywnbmVvLWNvbnRhaW5lciddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZGlhbG9nJywgJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkcmFnZ2FibGVfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdnYWJsZV86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkcmFnTGlzdGVuZXJzQWRkZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ0xpc3RlbmVyc0FkZGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kcmFnZ2FibGUuRHJhZ1pvbmV8bnVsbH0gZHJhZ1pvbmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1pvbmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29udGFpbmVyLlRvb2xiYXJ8bnVsbH0gaGVhZGVyVG9vbGJhcj1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJUb29sYmFyOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNEcmFnZ2luZz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG1heGltaXplQ2xzPSdmYXIgZmEtd2luZG93LW1heGltaXplJ1xuICAgICAgICAgKi9cbiAgICAgICAgbWF4aW1pemVDbHM6ICdmYXIgZmEtd2luZG93LW1heGltaXplJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1heGltaXplZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIG1heGltaXplZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBtaW5pbWl6ZUNscz0nZmFyIGZhLXdpbmRvdy1taW5pbWl6ZSdcbiAgICAgICAgICovXG4gICAgICAgIG1pbmltaXplQ2xzOiAnZmFyIGZhLXdpbmRvdy1taW5pbWl6ZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gcGx1Z2lucz1bUmVzaXphYmxlXVxuICAgICAgICAgKi9cbiAgICAgICAgcGx1Z2luczogW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICA6UmVzaXphYmxlLFxuICAgICAgICAgICAgZGVsZWdhdGlvbkNsczogJ25lby1kaWFsb2cnXG4gICAgICAgIH1dLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNsczogWyduZW8tZGlhbG9nLXdyYXBwZXInXSxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICBjbjogW11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2bm9kZSByb290XG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudmRvbS5pZCA9IG1lLmdldFdyYXBwZXJJZCgpO1xuXG4gICAgICAgIG1lLmNyZWF0ZUhlYWRlcigpO1xuXG4gICAgICAgIGlmIChtZS5hbmltYXRlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIG1lLmFuaW1hdGVTaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmhlYWRlclRvb2xiYXIgPSBtZS5kb3duKHtcbiAgICAgICAgICAgIGlkOiBtZS5nZXRIZWFkZXJUb29sYmFySWQoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRyYWdnYWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERyYWdnYWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnMsXG4gICAgICAgICAgICBjbHM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgbWUuaGVhZGVyVG9vbGJhcikge1xuICAgICAgICAgICAgY2xzID0gbWUuaGVhZGVyVG9vbGJhci5jbHM7XG4gICAgICAgICAgICBOZW9BcnJheVt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKGNscywgJ25lby1kcmFnZ2FibGUnKTtcbiAgICAgICAgICAgIG1lLmhlYWRlclRvb2xiYXIuY2xzID0gY2xzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlICYmICFtZS5kcmFnTGlzdGVuZXJzQWRkZWQpIHtcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAgICAgIHsnZHJhZzplbmQnICA6IG1lLm9uRHJhZ0VuZCwgICBzY29wZTogbWUsIGRlbGVnYXRlOiAnLm5lby1oZWFkZXItdG9vbGJhcid9LFxuICAgICAgICAgICAgICAgIHsnZHJhZzpzdGFydCc6IG1lLm9uRHJhZ1N0YXJ0LCBzY29wZTogbWUsIGRlbGVnYXRlOiAnLm5lby1oZWFkZXItdG9vbGJhcid9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgICAgICAgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgICAgICBtZS5kcmFnTGlzdGVuZXJzQWRkZWQgPSB0cnVlOyAvLyB0b2RvOiBtdWx0aSB3aW5kb3cgYXBwc1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhpbWl6ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhpbWl6ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgY2xzICA9IHZkb20uY2xzO1xuXG4gICAgICAgIE5lb0FycmF5W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oY2xzLCAnbmVvLW1heGltaXplZCcpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmIChtZS5hbmltYXRlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgIDogbWUuZ2V0QW5pbWF0ZVRhcmdldElkKClcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYW5pbWF0ZUhpZGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFwcE5hbWUgPSBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgICA9IG1lLmdldEFuaW1hdGVUYXJnZXRJZCgpO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IFttZS5pZCwgbWUuYW5pbWF0ZVRhcmdldElkXVxuICAgICAgICB9KS50aGVuKHJlY3RzID0+IHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAnbW91bnREb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBhcHBOYW1lLFxuICAgICAgICAgICAgICAgIGh0bWwgICAgOiBgPGRpdiBpZD1cIiR7aWR9XCIgY2xhc3M9XCJuZW8tYW5pbWF0ZS1kaWFsb2cgbmVvLWhpZGVcIiBzdHlsZT1cImhlaWdodDoke3JlY3RzWzBdLmhlaWdodH1weDtsZWZ0OiR7cmVjdHNbMF0ubGVmdH1weDt0b3A6JHtyZWN0c1swXS50b3B9cHg7d2lkdGg6JHtyZWN0c1swXS53aWR0aH1weDtcIj48L2Rpdj5gLFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiAnZG9jdW1lbnQuYm9keSdcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgOiBhcHBOYW1lLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICA6IGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYCR7cmVjdHNbMV0uaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdCAgOiBgJHtyZWN0c1sxXS5sZWZ0ICB9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgICA6IGAke3JlY3RzWzFdLnRvcCAgIH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogYCR7cmVjdHNbMV0ud2lkdGggfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ3JlbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjUwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMzApO1xuXG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnY2xvc2UnKTtcbiAgICAgICAgICAgICAgICBtZS5kZXN0cm95KHRydWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYW5pbWF0ZVNob3coKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYXBwTmFtZSAgID0gbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGF1dG9Nb3VudCA9IG1lLmF1dG9Nb3VudCxcbiAgICAgICAgICAgIGlkICAgICAgICA9IG1lLmdldEFuaW1hdGVUYXJnZXRJZCgpO1xuXG4gICAgICAgIG1lLmF1dG9Nb3VudCAgPSBmYWxzZTtcbiAgICAgICAgbWUuYXV0b1JlbmRlciA9IGZhbHNlO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IG1lLmFuaW1hdGVUYXJnZXRJZFxuICAgICAgICB9KS50aGVuKHJlY3QgPT4ge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uICA6ICdtb3VudERvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZSA6IGFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaHRtbCAgICA6IGA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cIm5lby1hbmltYXRlLWRpYWxvZ1wiIHN0eWxlPVwiaGVpZ2h0OiR7cmVjdC5oZWlnaHR9cHg7bGVmdDoke3JlY3QubGVmdH1weDt0b3A6JHtyZWN0LnRvcH1weDt3aWR0aDoke3JlY3Qud2lkdGh9cHg7XCI+PC9kaXY+YCxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZDogJ2RvY3VtZW50LmJvZHknXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lIDogYXBwTmFtZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQgICA6IG1lLndyYXBwZXJTdHlsZSAmJiBtZS53cmFwcGVyU3R5bGUuaGVpZ2h0IHx8ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ICAgICA6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3AgICAgICA6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICA6IG1lLndyYXBwZXJTdHlsZSAmJiBtZS53cmFwcGVyU3R5bGUud2lkdGggfHwgJzUwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdXRvTW91bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUucmVuZGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDMwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNsb3NlKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5hbmltYXRlVGFyZ2V0SWQpIHtcbiAgICAgICAgICAgIG1lLmFuaW1hdGVIaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjbG9zZScpO1xuICAgICAgICAgICAgbWUuZGVzdHJveSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlSGVhZGVyKCkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgICAgID0gWyduZW8taGVhZGVyLXRvb2xiYXInLCAnbmVvLXRvb2xiYXInXSxcbiAgICAgICAgICAgIGhlYWRlcnMgPSBtZS5oZWFkZXJzIHx8IFtdO1xuXG4gICAgICAgIGlmIChtZS5kcmFnZ2FibGUpIHtcbiAgICAgICAgICAgIGNscy5wdXNoKCduZW8tZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBoZWFkZXJzLnVuc2hpZnQoe1xuICAgICAgICAgICAgY2xzICA6IGNscyxcbiAgICAgICAgICAgIGRvY2sgOiAndG9wJyxcbiAgICAgICAgICAgIGlkICAgOiBtZS5nZXRIZWFkZXJUb29sYmFySWQoKSxcbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHRleHQgOiAnRGlhbG9nIFRpdGxlJ1xuICAgICAgICAgICAgfSwgJy0+Jywge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYXIgZmEtd2luZG93LW1heGltaXplJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBtZS5tYXhpbWl6ZS5iaW5kKG1lKVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYXIgZmEtd2luZG93LWNsb3NlJyxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBtZS5jbG9zZS5iaW5kKG1lKVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaGVhZGVycyA9IGhlYWRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgaWQgb2YgdGhlIGFuaW1hdGlvbiBub2RlXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRBbmltYXRlVGFyZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJy1hbmltYXRlJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgaGVhZGVyIHRvb2xiYXJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEhlYWRlclRvb2xiYXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnLWhlYWRlci10b29sYmFyJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpZCBvZiB0aGUgaGVhZGVyIHRvb2xiYXJcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldFdyYXBwZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnLXdyYXBwZXInO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgbWF4aW1pemUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGRhdGEuY29tcG9uZW50Lmljb25DbHMgPSBtZS5tYXhpbWl6ZWQgPyBtZS5tYXhpbWl6ZUNscyA6IG1lLm1pbmltaXplQ2xzO1xuXG4gICAgICAgIG1lLm1heGltaXplZCA9ICFtZS5tYXhpbWl6ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJhZ0VuZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBzdHlsZTtcblxuICAgICAgICBpZiAoIW1lLm1heGltaXplZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgaWQ6IG1lLmRyYWdab25lLmRyYWdQcm94eS5pZFxuICAgICAgICAgICAgfSkudGhlbihyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IG1lLndyYXBwZXJTdHlsZTtcblxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc3R5bGUsIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0ICAgOiBgJHtyZWN0LmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgICAgIDogYCR7cmVjdC5sZWZ0fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgICAgICAgICAgICB0b3AgICAgICA6IGAke3JlY3QudG9wfXB4YCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoICAgIDogYCR7cmVjdC53aWR0aH1weGBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1lLndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuXG4gICAgICAgICAgICAgICAgbWUuZHJhZ1pvbmUuZHJhZ0VuZChkYXRhKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgYSByZXNldCwgb3RoZXJ3aXNlIHdlIGRvIG5vdCBnZXQgYSBjaGFuZ2UgZXZlbnQgZm9yIHRoZSBuZXh0IG9uRHJhZ1N0YXJ0KCkgY2FsbFxuICAgICAgICAgICAgICAgIG1lLmRyYWdab25lLmJvdW5kYXJ5Q29udGFpbmVySWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIG1lLmlzRHJhZ2dpbmcgICAgICAgICAgICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJhZ1N0YXJ0KGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBtZS53cmFwcGVyU3R5bGUgfHwge307XG5cbiAgICAgICAgaWYgKCFtZS5tYXhpbWl6ZWQpIHtcbiAgICAgICAgICAgIG1lLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICAgICAgICAgICAgbWUucGx1Z2luc1swXS5yZW1vdmVBbGxOb2RlcygpOyAvLyB0b2RvOiBnZXRQbHVnaW4oKVxuXG4gICAgICAgICAgICBpZiAoIW1lLmRyYWdab25lKSB7XG4gICAgICAgICAgICAgICAgbWUuZHJhZ1pvbmUgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgICAgICAgICAgIDogRHJhZ1pvbmUsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgICAgICAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kYXJ5Q29udGFpbmVySWQ6IG1lLmJvdW5kYXJ5Q29udGFpbmVySWQsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdFbGVtZW50ICAgICAgICA6IG1lLnZkb21cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuZHJhZ1pvbmUuYm91bmRhcnlDb250YWluZXJJZCA9IG1lLmJvdW5kYXJ5Q29udGFpbmVySWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmRyYWdab25lLmRyYWdTdGFydChkYXRhKTtcblxuICAgICAgICAgICAgc3R5bGUub3BhY2l0eSA9IDAuMztcblxuICAgICAgICAgICAgbWUud3JhcHBlclN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29tcG9uZW50L0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmRyYWdnYWJsZS5EcmFnUHJveHlDb21wb25lbnRcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBEcmFnUHJveHlDb21wb25lbnQgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmRyYWdnYWJsZS5EcmFnUHJveHlDb21wb25lbnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5kcmFnZ2FibGUuRHJhZ1Byb3h5Q29tcG9uZW50JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2RyYWdwcm94eSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdkcmFncHJveHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXV0b01vdW50PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGF1dG9SZW5kZXI9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXV0b1JlbmRlcjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZHJhZ3Byb3h5J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZHJhZ3Byb3h5J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3ZlSW5NYWluVGhyZWFkPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVJbk1haW5UaHJlYWQ6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5vbignbW91bnRlZCcsIG1lLm9uTW91bnRlZCwgbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICovXG4gICAgb25Nb3VudGVkKGlkKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdmVJbk1haW5UaHJlYWQpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkRyYWdEcm9wLnNldERyYWdQcm94eUVsZW1lbnQoe1xuICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKERyYWdQcm94eUNvbXBvbmVudCk7XG5cbmV4cG9ydCB7RHJhZ1Byb3h5Q29tcG9uZW50IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgICAgICAgICAgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5pbXBvcnQgRHJhZ1Byb3h5Q29tcG9uZW50IGZyb20gJy4vRHJhZ1Byb3h5Q29tcG9uZW50Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICAgICAgIGZyb20gJy4uL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZHJhZ2dhYmxlLkRyYWdab25lXG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIERyYWdab25lIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5kcmFnZ2FibGUuRHJhZ1pvbmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5kcmFnZ2FibGUuRHJhZ1pvbmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nZHJhZ3pvbmUnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZHJhZ3pvbmUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIEFwcCB0aGlzIGluc3RhbmNlIGJlbG9uZ3MgdG9cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGFwcE5hbWU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYXBwTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBib3VuZGFyeUNvbnRhaW5lcklkXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBib3VuZGFyeUNvbnRhaW5lcklkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZG9tICh0cmVlKSBvZiB0aGUgZWxlbWVudCB5b3Ugd2FudCB0byBkcmFnXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBkcmFnRWxlbWVudD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnRWxlbWVudDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZXxudWxsfSBkcmFnUHJveHk9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnUHJveHk6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gZHJhZ1Byb3h5Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdQcm94eUNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdmVIb3Jpem9udGFsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVIb3Jpem9udGFsOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW92ZUluTWFpblRocmVhZD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3ZlSW5NYWluVGhyZWFkOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW92ZVZlcnRpY2FsPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIG1vdmVWZXJ0aWNhbDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gb2Zmc2V0WD0wXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRYOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBvZmZzZXRZPTBcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldFk6IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHByb3h5UGFyZW50SWRfPSdkb2N1bWVudC5ib2R5J1xuICAgICAgICAgKi9cbiAgICAgICAgcHJveHlQYXJlbnRJZF86ICdkb2N1bWVudC5ib2R5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBzY3JvbGxDb250YWluZXJJZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsQ29udGFpbmVySWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBzY3JvbGxGYWN0b3JMZWZ0Xz0xXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxGYWN0b3JMZWZ0XzogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc2Nyb2xsRmFjdG9yVG9wXz0xXG4gICAgICAgICAqL1xuICAgICAgICBzY3JvbGxGYWN0b3JUb3BfOiAxLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBjcmVhdGVzIGEgcG9zaXRpb246YWJzb2x1dGUgd3JhcHBlciBkaXYgd2hpY2ggY29udGFpbnMgdGhlIGNsb25lZCBlbGVtZW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVByb3h5V3JhcHBlcj10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VQcm94eVdyYXBwZXI6IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgaWYgKCFOZW8ubWFpbi5hZGRvbi5EcmFnRHJvcCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2FuIG5vdCB1c2UgTmVvLmRyYWdnYWJsZS5EcmFnWm9uZSB3aXRob3V0IGFkZGluZyBOZW8ubWFpbi5hZGRvbi5EcmFnRHJvcCB0byB0aGUgbWFpbiB0aHJlYWQgYWRkb25zJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNjcm9sbENvbnRhaW5lcklkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNjcm9sbENvbnRhaW5lcklkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkRyYWdEcm9wLnNldFNjcm9sbENvbnRhaW5lcih7XG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYm91bmRhcnlDb250YWluZXJJZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRCb3VuZGFyeUNvbnRhaW5lcklkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkRyYWdEcm9wLnNldEJvdW5kYXJ5Q29udGFpbmVyKHtcbiAgICAgICAgICAgICAgICBpZDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzY3JvbGxGYWN0b3JMZWZ0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNjcm9sbEZhY3RvckxlZnQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICghKHZhbHVlID09PSAxICYmIG9sZFZhbHVlID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5EcmFnRHJvcC5zZXRTY3JvbGxGYWN0b3JMZWZ0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzY3JvbGxGYWN0b3JUb3AgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2Nyb2xsRmFjdG9yVG9wKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoISh2YWx1ZSA9PT0gMSAmJiBvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uRHJhZ0Ryb3Auc2V0U2Nyb2xsRmFjdG9yVG9wKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZURyYWdQcm94eShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbG9uZSA9IFZEb21VdGlsLmNsb25lKG1lLmRyYWdFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICAgOiBEcmFnUHJveHlDb21wb25lbnQsXG4gICAgICAgICAgICBhcHBOYW1lICAgICAgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgbW92ZUluTWFpblRocmVhZDogbWUubW92ZUluTWFpblRocmVhZCxcbiAgICAgICAgICAgIHBhcmVudElkICAgICAgICA6IG1lLnByb3h5UGFyZW50SWQsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICAgOiBtZS51c2VQcm94eVdyYXBwZXIgPyB7Y246IFtjbG9uZV19IDogY2xvbmUsXG5cbiAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBgJHtkYXRhLmhlaWdodH1weGAsXG4gICAgICAgICAgICAgICAgbGVmdCAgOiBgJHttZS5tb3ZlSG9yaXpvbnRhbCA/IGRhdGEubGVmdCA6IDB9cHhgLFxuICAgICAgICAgICAgICAgIHRvcCAgIDogYCR7bWUubW92ZVZlcnRpY2FsICAgPyBkYXRhLnRvcCAgOiAwfXB4YCxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IGAke2RhdGEud2lkdGh9cHhgXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAuLi5tZS5kcmFnUHJveHlDb25maWcgfHwge31cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIW1lLnVzZVByb3h5V3JhcHBlcikge1xuICAgICAgICAgICAgY29uZmlnLmNscyA9IGNsb25lLmNscztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmRyYWdQcm94eSA9IE5lby5jcmVhdGUoY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBmb3IgdXNpbmcgY3VzdG9tIGFuaW1hdGlvbnNcbiAgICAgKi9cbiAgICBkZXN0cm95RHJhZ1Byb3h5KCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaWQgPSBtZS5kcmFnUHJveHkuaWQ7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGRlbHRhczogW3thY3Rpb246ICdyZW1vdmVOb2RlJywgaWQ6IGlkfV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBtZS5tb3ZlSW5NYWluVGhyZWFkID8gMCA6IDMwKTtcblxuICAgICAgICBtZS5kcmFnUHJveHkuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZHJhZ0VuZCgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZHJhZ1Byb3h5KSB7XG4gICAgICAgICAgICBtZS5kZXN0cm95RHJhZ1Byb3h5KCk7XG4gICAgICAgICAgICBtZS5kcmFnUHJveHkgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc2Nyb2xsQ29udGFpbmVySWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBkcmFnTW92ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBzdHlsZTtcblxuICAgICAgICBpZiAoIW1lLm1vdmVJbk1haW5UaHJlYWQgJiYgbWUuZHJhZ1Byb3h5KSB7XG4gICAgICAgICAgICBzdHlsZSA9IG1lLmRyYWdQcm94eS5zdHlsZTtcblxuICAgICAgICAgICAgaWYgKG1lLm1vdmVIb3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUubGVmdCA9IGAke2RhdGEuY2xpZW50WCAtIG1lLm9mZnNldFh9cHhgO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWUubW92ZVZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUudG9wID0gYCR7ZGF0YS5jbGllbnRZIC0gbWUub2Zmc2V0WX1weGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLmRyYWdQcm94eS5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGRyYWdTdGFydChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICBpZDogbWUuZHJhZ0VsZW1lbnQuaWRcbiAgICAgICAgfSkudGhlbihyZWN0ID0+IHtcbiAgICAgICAgICAgIG1lLm9mZnNldFggPSBkYXRhLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBtZS5vZmZzZXRZID0gZGF0YS5jbGllbnRZIC0gcmVjdC50b3A7XG5cbiAgICAgICAgICAgIG1lLmNyZWF0ZURyYWdQcm94eShyZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhEcmFnWm9uZSk7XG5cbmV4cG9ydCB7RHJhZ1pvbmUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvcmVCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIFBsdWdpbnMgYXJlIGludGVuZGVkIHRvIGdldCBwdXQgaW50byB0aGUgcGx1Z2lucyBjb25maWcgb2YgY29tcG9uZW50LkJhc2VcbiAqIHRvIGVuaGFuY2UgdGhlbSBvciBhZGQgYWRkaXRpb25hbCBmZWF0dXJlc1xuICogQGNsYXNzIE5lby5wbHVnaW4uQmFzZVxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBCYXNlIGV4dGVuZHMgQ29yZUJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ucGx1Z2luLkJhc2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5wbHVnaW4uQmFzZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdwbHVnaW4nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncGx1Z2luJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb21wb25lbnQuQmFzZX0gb3duZXI9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvd25lcjogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLm93bmVyLm9uKCdtb3VudGVkJywgbWUub25Pd25lck1vdW50ZWQsIG1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhcHBseSBjaGFuZ2VzIHRvIHRoZSBvd25lciBDb21wb25lbnQgd2hlbiBpdCBkb2VzIGdldCBtb3VudGVkXG4gICAgICovXG4gICAgb25Pd25lck1vdW50ZWQoKSB7XG5cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJhc2UpO1xuXG5leHBvcnQge0Jhc2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IERyYWdab25lIGZyb20gJy4uL2RyYWdnYWJsZS9EcmFnWm9uZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnBsdWdpbi5SZXNpemFibGVcbiAqIEBleHRlbmRzIE5lby5wbHVnaW4uQmFzZVxuICovXG5jbGFzcyBSZXNpemFibGUgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZXNpemUgY3Vyc29yIHN0eWxlcyB1c2Ugbm9ydGgsIHNvdXRoIGJhc2VkIG5hbWVzLCBzbyB3ZSBuZWVkIGEgbWFwcGluZy5cbiAgICAgICAgICogVGhlIG9yZGVyIGhhcyB0byBtYXRjaCB0aGUgc3RhdGljIHBvc2l0aW9ucyBhcnJheS5cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGN1cnNvclBvc2l0aW9ucz1bJ3MnLCAnc3cnLCAnc2UnLCAndycsICdlJywgJ24nLCAnbncnLCAnbmUnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGN1cnNvclBvc2l0aW9uczogWydzJywgJ3N3JywgJ3NlJywgJ3cnLCAnZScsICduJywgJ253JywgJ25lJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiByZW1vdmUgLSBjaGFyc1xuICAgICAgICAgKiBAbWVtYmVyIHtSZWdFeHB9IG5hbWVSZWdFeD0vLShbYS16XSkvZ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIG5hbWVSZWdFeDogLy0oW2Etel0pL2csXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBwb3NpdGlvbiBuYW1lc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gdmFsaWREaXJlY3Rpb25zPVsnYm90dG9tJywnYm90dG9tLWxlZnQnLCdib3R0b20tcmlnaHQnLCdsZWZ0JywncmlnaHQnLCd0b3AnLCd0b3AtbGVmdCcsJ3RvcC1yaWdodCddXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHBvc2l0aW9uczogWydib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlyZWN0aW9ucyBpbnRvIHdoaWNoIHlvdSB3YW50IHRvIGRyYWcgPT4gcmVzaXplXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB2YWxpZERpcmVjdGlvbnM9WydiJywnYmwnLCdicicsJ2wnLCdyJywndCcsJ3RsJywndHInXVxuICAgICAgICAgKiBAc3RhdGljXG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZERpcmVjdGlvbnM6IFsnYicsICdibCcsICdicicsICdsJywgJ3InLCAndCcsICd0bCcsICd0ciddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8ucGx1Z2luLlJlc2l6YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnBsdWdpbi5SZXNpemFibGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGx1Z2luLXJlc2l6YWJsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdwbHVnaW4tcmVzaXphYmxlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBib3VuZGFyeUNvbnRhaW5lcklkPSdkb2N1bWVudC5ib2R5J1xuICAgICAgICAgKi9cbiAgICAgICAgYm91bmRhcnlDb250YWluZXJJZDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTVJlY3Qgb2YgdGhlIGJvdW5kYXJ5Q29udGFpbmVyIGlmIHNldCAobWVhc3VyZWQgb24gZHJhZzpzdGFydClcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBib3VuZGFyeUNvbnRhaW5lclJlY3Q9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBib3VuZGFyeUNvbnRhaW5lclJlY3Q6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGN1cnJlbnROb2RlTmFtZT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGN1cnJlbnROb2RlTmFtZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11c3QgYmUgc2V0IGJ5IGVhY2ggb3duZXJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZWxlZ2F0aW9uQ2xzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRlbGVnYXRpb25DbHM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXJlY3Rpb25zIGludG8gd2hpY2ggeW91IHdhbnQgdG8gZHJhZyA9PiByZXNpemVcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGRpcmVjdGlvbnNfPVsnYicsJ2JsJywnYnInLCdsJywncicsJ3QnLCd0bCcsJ3RyJ11cbiAgICAgICAgICovXG4gICAgICAgIGRpcmVjdGlvbnNfOiBbJ2InLCAnYmwnLCAnYnInLCAnbCcsICdyJywgJ3QnLCAndGwnLCAndHInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kcmFnZ2FibGUuRHJhZ1pvbmV8bnVsbH0gZHJhZ1pvbmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ1pvbmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGdhcD0xMFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBnYXA6IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTVJlY3Qgb2YgdGhlIGVsZW1lbnQgdG8gZHJhZyAobWVhc3VyZWQgb24gZHJhZzpzdGFydClcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpbml0aWFsUmVjdD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxSZWN0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNEcmFnZ2luZz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaXNEcmFnZ2luZzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBtYXhpbXVtIGhlaWdodCB3aGVuIHJlc2l6aW5nIGluIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBtYXhIZWlnaHQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SGVpZ2h0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogbWF4aW11bSB3aWR0aCB3aGVuIHJlc2l6aW5nIGluIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBtYXhXaWR0aD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXhXaWR0aDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1pbmltdW0gaGVpZ2h0IHdoZW4gcmVzaXppbmcgaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtaW5IZWlnaHQ9MjAwXG4gICAgICAgICAqL1xuICAgICAgICBtaW5IZWlnaHQ6IDIwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIG1pbmltdW0gd2lkdGggd2hlbiByZXNpemluZyBpbiBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1pbldpZHRoPTIwMFxuICAgICAgICAgKi9cbiAgICAgICAgbWluV2lkdGg6IDIwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbm9kZUJvdHRvbT1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG5vZGVCb3R0b206IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG5vZGVCb3R0b21MZWZ0PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbm9kZUJvdHRvbUxlZnQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IG5vZGVCb3R0b21SaWdodD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG5vZGVCb3R0b21SaWdodDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbm9kZUxlZnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBub2RlTGVmdDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbm9kZVJpZ2h0PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbm9kZVJpZ2h0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBub2RlVG9wPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbm9kZVRvcDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbm9kZVRvcExlZnQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBub2RlVG9wTGVmdDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gbm9kZVRvcFJpZ2h0PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbm9kZVRvcFJpZ2h0OiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUub3duZXIuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKFxuICAgICAgICAgICAgeydkcmFnOmVuZCcgIDogbWUub25EcmFnRW5kLCAgICBzY29wZTogbWUsIGRlbGVnYXRlOiAnLm5lby1yZXNpemFibGUnfSxcbiAgICAgICAgICAgIHsnZHJhZzptb3ZlJyA6IG1lLm9uRHJhZ01vdmUsICAgc2NvcGU6IG1lLCBkZWxlZ2F0ZTogJy5uZW8tcmVzaXphYmxlJ30sXG4gICAgICAgICAgICB7J2RyYWc6c3RhcnQnOiBtZS5vbkRyYWdTdGFydCwgIHNjb3BlOiBtZSwgZGVsZWdhdGU6ICcubmVvLXJlc2l6YWJsZSd9LFxuICAgICAgICAgICAge21vdXNlbW92ZSAgIDogbWUub25Nb3VzZU1vdmUsICBzY29wZTogbWUsIGxvY2FsICAgOiB0cnVlfSxcbiAgICAgICAgICAgIHttb3VzZWxlYXZlICA6IG1lLm9uTW91c2VMZWF2ZSwgc2NvcGU6IG1lfVxuICAgICAgICApO1xuXG4gICAgICAgIG1lLm93bmVyLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWVcbiAgICAgKi9cbiAgICBhZGROb2RlKG5hbWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG5vZGVOYW1lID0gJ25vZGUnICsgTmVvLmNhcGl0YWxpemUobmFtZS5yZXBsYWNlKFJlc2l6YWJsZS5uYW1lUmVnRXgsIChzdHIsIGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpKTtcblxuICAgICAgICBtZS5jdXJyZW50Tm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICBtZVtub2RlTmFtZV0gPSB7Y2xzOiBbJ25lby1yZXNpemFibGUnLCBgbmVvLXJlc2l6YWJsZS0ke25hbWV9YF19O1xuICAgICAgICBtZS5vd25lci5nZXRWZG9tUm9vdCgpLmNuLnB1c2gobWVbbm9kZU5hbWVdKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBkaXJlY3Rpb25zIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0RGlyZWN0aW9ucyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgaSAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWVbaV0sIG9sZFZhbHVlLCAnZGlyZWN0aW9ucycsICd2YWxpZERpcmVjdGlvbnMnKSAhPT0gdmFsdWVbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25EcmFnRW5kKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0eWxlID0gbWUub3duZXIud3JhcHBlclN0eWxlOyAvLyB0b2RvOiBkZWxlZ2F0aW9uIHRhcmdldFxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24obWUsIHtcbiAgICAgICAgICAgIGJvdW5kYXJ5Q29udGFpbmVyUmVjdDogbnVsbCxcbiAgICAgICAgICAgIGluaXRpYWxSZWN0ICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgIGlzRHJhZ2dpbmcgICAgICAgICAgIDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwge1xuICAgICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAuLi5tZS5kcmFnWm9uZS5kcmFnUHJveHkud3JhcHBlclN0eWxlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLm93bmVyLndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5zZXRTdHlsZSh7XG4gICAgICAgICAgICBpZCAgIDogJ2RvY3VtZW50LmJvZHknLFxuICAgICAgICAgICAgc3R5bGU6IHtjdXJzb3I6IG51bGx9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRyYWdab25lLmRyYWdFbmQoKTtcbiAgICAgICAgbWUucmVtb3ZlQWxsTm9kZXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25EcmFnTW92ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSAgICAgID0gbWUuY3VycmVudE5vZGVOYW1lLFxuICAgICAgICAgICAgY3RSZWN0ICAgID0gbWUuYm91bmRhcnlDb250YWluZXJSZWN0LFxuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gbWUubWF4SGVpZ2h0LFxuICAgICAgICAgICAgbWF4V2lkdGggID0gbWUubWF4V2lkdGgsXG4gICAgICAgICAgICBtaW5IZWlnaHQgPSBtZS5taW5IZWlnaHQsXG4gICAgICAgICAgICBtaW5XaWR0aCAgPSBtZS5taW5XaWR0aCxcbiAgICAgICAgICAgIHJlY3QgICAgICA9IG1lLmluaXRpYWxSZWN0LFxuICAgICAgICAgICAgZGlzdCwgc2l6ZSwgc3R5bGU7XG5cbiAgICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgICAgICBtZS5vbkRyYWdFbmQoe30pO1xuICAgICAgICB9IGVsc2UgaWYgKG1lLmRyYWdab25lLmRyYWdQcm94eSkge1xuICAgICAgICAgICAgc3R5bGUgPSBtZS5kcmFnWm9uZS5kcmFnUHJveHkud3JhcHBlclN0eWxlO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5pbmNsdWRlcygnYm90dG9tJykpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gTWF0aC5tYXgobWluSGVpZ2h0LCBkYXRhLmNsaWVudFkgLSByZWN0LnRvcCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBNYXRoLm1pbihzaXplLCBtYXhIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IE1hdGgubWluKHNpemUsIGN0UmVjdC5ib3R0b20gLSByZWN0LnRvcCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuaW5jbHVkZXMoJ3RvcCcpKSB7XG4gICAgICAgICAgICAgICAgZGlzdCA9IE1hdGgubWluKHJlY3QuYm90dG9tIC0gbWluSGVpZ2h0LCBkYXRhLmNsaWVudFkpO1xuICAgICAgICAgICAgICAgIHNpemUgPSBNYXRoLm1heChtaW5IZWlnaHQsIHJlY3QuaGVpZ2h0ICsgcmVjdC50b3AgLSBkYXRhLmNsaWVudFkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gTWF0aC5tYXgoZGlzdCwgcmVjdC5ib3R0b20gLSBtYXhIZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICBzaXplID0gTWF0aC5taW4oc2l6ZSwgbWF4SGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY3RSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3QgPSBNYXRoLm1heChkaXN0LCBjdFJlY3QudG9wKTtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IE1hdGgubWluKHNpemUsIHJlY3QuYm90dG9tIC0gY3RSZWN0LnRvcCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICAgICAgc3R5bGUudG9wICAgID0gYCR7ZGlzdH1weGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlLmluY2x1ZGVzKCdsZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBkaXN0ID0gTWF0aC5taW4ocmVjdC5yaWdodCAtIG1pbldpZHRoLCBkYXRhLmNsaWVudFgpO1xuICAgICAgICAgICAgICAgIHNpemUgPSBNYXRoLm1heChtaW5XaWR0aCwgcmVjdC53aWR0aCArIHJlY3QubGVmdCAtIGRhdGEuY2xpZW50WCk7XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4V2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdCA9IE1hdGgubWF4KGRpc3QsIHJlY3QucmlnaHQgLSBtYXhXaWR0aCk7XG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBNYXRoLm1pbihzaXplLCBtYXhXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGN0UmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0ID0gTWF0aC5tYXgoZGlzdCwgY3RSZWN0LmxlZnQpO1xuICAgICAgICAgICAgICAgICAgICBzaXplID0gTWF0aC5taW4oc2l6ZSwgcmVjdC5yaWdodCAtIGN0UmVjdC5sZWZ0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzdHlsZS5sZWZ0ICA9IGAke2Rpc3R9cHhgO1xuICAgICAgICAgICAgICAgIHN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUuaW5jbHVkZXMoJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICBzaXplID0gTWF0aC5tYXgobWluV2lkdGgsIHJlY3Qud2lkdGggLSByZWN0LnJpZ2h0ICsgZGF0YS5jbGllbnRYKTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBzaXplID0gTWF0aC5taW4oc2l6ZSwgbWF4V2lkdGgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChjdFJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IE1hdGgubWluKHNpemUsIGN0UmVjdC5yaWdodCAtIHJlY3QubGVmdCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3R5bGUud2lkdGggPSBgJHtzaXplfXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUuZHJhZ1pvbmUuZHJhZ1Byb3h5LndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJhZ1N0YXJ0KGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbnRhaW5lcklkID0gbWUuYm91bmRhcnlDb250YWluZXJJZCxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gZGF0YS5wYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIG93bmVyICAgICAgID0gbWUub3duZXIsXG4gICAgICAgICAgICBzdHlsZSAgICAgICA9IG93bmVyLndyYXBwZXJTdHlsZSwgLy8gdG9kbzogZGVsZWdhdGlvbiB0YXJnZXRcbiAgICAgICAgICAgIHRhcmdldDtcblxuICAgICAgICBtZS5pc0RyYWdnaW5nID0gdHJ1ZTtcblxuICAgICAgICBzdHlsZS5vcGFjaXR5ID0gMC4zO1xuICAgICAgICBtZS5vd25lci53cmFwcGVyU3R5bGUgPSBzdHlsZTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBkYXRhLnBhdGhbaV07XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuY2xzLmluY2x1ZGVzKG1lLmRlbGVnYXRpb25DbHMpKSB7XG4gICAgICAgICAgICAgICAgbWUuaW5pdGlhbFJlY3QgPSB0YXJnZXQucmVjdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnRhaW5lcklkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lcklkID09PSAnZG9jdW1lbnQuYm9keScgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdib2R5JyB8fCBjb250YWluZXJJZCA9PT0gdGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmJvdW5kYXJ5Q29udGFpbmVyUmVjdCA9IHRhcmdldC5yZWN0O1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgLy8gYXNzdW1pbmcgdGhhdCB0aGUgZHJhZ0VsIGlzIG5vdCBvdXRzaWRlIG9mIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW1lLmJvdW5kYXJ5Q29udGFpbmVyUmVjdCkge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICAgICAgaWQ6IG1lLmJvdW5kYXJ5Q29udGFpbmVyUmVjdFxuICAgICAgICAgICAgfSkudGhlbihyZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBtZS5ib3VuZGFyeUNvbnRhaW5lclJlY3QgPSByZWN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3Muc2V0U3R5bGUoe1xuICAgICAgICAgICAgaWQgICA6ICdkb2N1bWVudC5ib2R5JyxcbiAgICAgICAgICAgIHN0eWxlOiB7Y3Vyc29yOiBgJHtSZXNpemFibGUuY3Vyc29yUG9zaXRpb25zW1Jlc2l6YWJsZS5wb3NpdGlvbnMuaW5kZXhPZihtZS5jdXJyZW50Tm9kZU5hbWUpXX0tcmVzaXplICFpbXBvcnRhbnRgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1lLmRyYWdab25lKSB7XG4gICAgICAgICAgICBtZS5kcmFnWm9uZSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgICAgICAgICAgICA6IERyYWdab25lLFxuICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgICAgICAgICA6IG93bmVyLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgYm91bmRhcnlDb250YWluZXJJZDogb3duZXIuYm91bmRhcnlDb250YWluZXJJZCxcbiAgICAgICAgICAgICAgICBkcmFnRWxlbWVudCAgICAgICAgOiBvd25lci52ZG9tLFxuICAgICAgICAgICAgICAgIG1vdmVJbk1haW5UaHJlYWQgICA6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmRyYWdab25lLmJvdW5kYXJ5Q29udGFpbmVySWQgPSBvd25lci5ib3VuZGFyeUNvbnRhaW5lcklkO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZHJhZ1pvbmUuZHJhZ1N0YXJ0KGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdXNlTW92ZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGRpciAgPSBtZS5kaXJlY3Rpb25zLFxuICAgICAgICAgICAgaSAgICA9IDAsXG4gICAgICAgICAgICBnYXAgID0gbWUuZ2FwLFxuICAgICAgICAgICAgaCAgICA9IGZhbHNlLFxuICAgICAgICAgICAgbGVuICA9IGRhdGEucGF0aC5sZW5ndGgsXG4gICAgICAgICAgICB2ZG9tID0gbWUub3duZXIudmRvbSxcbiAgICAgICAgICAgIGJvdHRvbSwgbGVmdCwgcmlnaHQsIHRhcmdldCwgdG9wO1xuXG4gICAgICAgIGlmICghbWUuaXNEcmFnZ2luZyAmJiAhbWUub3duZXIuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhdGhbaV0uY2xzLmluY2x1ZGVzKG1lLmRlbGVnYXRpb25DbHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGRhdGEucGF0aFtpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib3R0b20gPSBkYXRhLmNsaWVudFkgPj0gdGFyZ2V0LnJlY3QueSAtIGdhcCArIHRhcmdldC5yZWN0LmhlaWdodDtcbiAgICAgICAgICAgIGxlZnQgICA9IGRhdGEuY2xpZW50WCA8PSB0YXJnZXQucmVjdC54ICsgZ2FwO1xuICAgICAgICAgICAgcmlnaHQgID0gZGF0YS5jbGllbnRYID49IHRhcmdldC5yZWN0LnggLSBnYXAgKyB0YXJnZXQucmVjdC53aWR0aDtcbiAgICAgICAgICAgIHRvcCAgICA9IGRhdGEuY2xpZW50WSA8PSB0YXJnZXQucmVjdC55ICsgZ2FwO1xuXG4gICAgICAgICAgICBpZiAobWUubm9kZUJvdHRvbSAmJiAoIWJvdHRvbSB8fCBib3R0b20gJiYgbGVmdCAgfHwgYm90dG9tICYmIHJpZ2h0KSkge2ggPSBtZS5yZW1vdmVOb2RlKCdib3R0b20nKTt9XG4gICAgICAgICAgICBpZiAobWUubm9kZUxlZnQgICAmJiAoIWxlZnQgICB8fCBib3R0b20gJiYgbGVmdCAgfHwgdG9wICAgICYmIGxlZnQpKSAge2ggPSBtZS5yZW1vdmVOb2RlKCdsZWZ0Jyk7fVxuICAgICAgICAgICAgaWYgKG1lLm5vZGVSaWdodCAgJiYgKCFyaWdodCAgfHwgYm90dG9tICYmIHJpZ2h0IHx8IHRvcCAgICAmJiByaWdodCkpIHtoID0gbWUucmVtb3ZlTm9kZSgncmlnaHQnKTt9XG4gICAgICAgICAgICBpZiAobWUubm9kZVRvcCAgICAmJiAoIXRvcCAgICB8fCB0b3AgICAgJiYgbGVmdCAgfHwgdG9wICAgICYmIHJpZ2h0KSkge2ggPSBtZS5yZW1vdmVOb2RlKCd0b3AnKTt9XG5cbiAgICAgICAgICAgIGlmIChtZS5ub2RlQm90dG9tTGVmdCAgJiYgKCFib3R0b20gfHwgIWxlZnQpKSAge2ggPSBtZS5yZW1vdmVOb2RlKCdib3R0b20tbGVmdCcpO31cbiAgICAgICAgICAgIGlmIChtZS5ub2RlQm90dG9tUmlnaHQgJiYgKCFib3R0b20gfHwgIXJpZ2h0KSkge2ggPSBtZS5yZW1vdmVOb2RlKCdib3R0b20tcmlnaHQnKTt9XG4gICAgICAgICAgICBpZiAobWUubm9kZVRvcExlZnQgICAgICYmICghdG9wICAgIHx8ICFsZWZ0KSkgIHtoID0gbWUucmVtb3ZlTm9kZSgndG9wLWxlZnQnKTt9XG4gICAgICAgICAgICBpZiAobWUubm9kZVRvcFJpZ2h0ICAgICYmICghdG9wICAgIHx8ICFyaWdodCkpIHtoID0gbWUucmVtb3ZlTm9kZSgndG9wLXJpZ2h0Jyk7fVxuXG4gICAgICAgICAgICBpZiAgICAgIChkaXIuaW5jbHVkZXMoJ2JsJykgJiYgYm90dG9tICYmIGxlZnQpICB7aWYgKCFtZS5ub2RlQm90dG9tTGVmdCkgIHtoID0gbWUuYWRkTm9kZSgnYm90dG9tLWxlZnQnKTt9fVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyLmluY2x1ZGVzKCdicicpICYmIGJvdHRvbSAmJiByaWdodCkge2lmICghbWUubm9kZUJvdHRvbVJpZ2h0KSB7aCA9IG1lLmFkZE5vZGUoJ2JvdHRvbS1yaWdodCcpO319XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIuaW5jbHVkZXMoJ3RsJykgJiYgdG9wICAgICYmIGxlZnQpICB7aWYgKCFtZS5ub2RlVG9wTGVmdCkgICAgIHtoID0gbWUuYWRkTm9kZSgndG9wLWxlZnQnKTt9fVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyLmluY2x1ZGVzKCd0cicpICYmIHRvcCAgICAmJiByaWdodCkge2lmICghbWUubm9kZVRvcFJpZ2h0KSAgICB7aCA9IG1lLmFkZE5vZGUoJ3RvcC1yaWdodCcpO319XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIuaW5jbHVkZXMoJ2InKSAgJiYgYm90dG9tKSAgICAgICAgICB7aWYgKCFtZS5ub2RlQm90dG9tKSAgICAgIHtoID0gbWUuYWRkTm9kZSgnYm90dG9tJyk7fX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpci5pbmNsdWRlcygnbCcpICAmJiBsZWZ0KSAgICAgICAgICAgIHtpZiAoIW1lLm5vZGVMZWZ0KSAgICAgICAge2ggPSBtZS5hZGROb2RlKCdsZWZ0Jyk7fX1cbiAgICAgICAgICAgIGVsc2UgaWYgKGRpci5pbmNsdWRlcygncicpICAmJiByaWdodCkgICAgICAgICAgIHtpZiAoIW1lLm5vZGVSaWdodCkgICAgICAge2ggPSBtZS5hZGROb2RlKCdyaWdodCcpO319XG4gICAgICAgICAgICBlbHNlIGlmIChkaXIuaW5jbHVkZXMoJ3QnKSAgJiYgdG9wKSAgICAgICAgICAgICB7aWYgKCFtZS5ub2RlVG9wKSAgICAgICAgIHtoID0gbWUuYWRkTm9kZSgndG9wJyk7fX1cblxuICAgICAgICAgICAgaWYgKGgpIHtcbiAgICAgICAgICAgICAgICBtZS5vd25lci52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdXNlTGVhdmUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgLy8gbGltaXQgdGhlIGV2ZW50IHRvIGRlbGVnYXRpb24gdGFyZ2V0c1xuICAgICAgICAgICAgaWYgKGRhdGEucGF0aFswXS5jbHMuaW5jbHVkZXMobWUuZGVsZWdhdGlvbkNscykpIHtcbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVBbGxOb2RlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlcmUgc2hvdWxkIGJlIG1heCAxIG5vZGUgKHJlc2l6ZSBoYW5kbGUpIGF0IGFueSBnaXZlbiB0aW1lLlxuICAgICAqIHNlZTogL2lzc3Vlcy8xMTM5XG4gICAgICovXG4gICAgcmVtb3ZlQWxsTm9kZXMoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS5vd25lci52ZG9tO1xuXG4gICAgICAgIGlmIChtZS5jdXJyZW50Tm9kZU5hbWUpIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZU5vZGUobWUuY3VycmVudE5vZGVOYW1lKTtcbiAgICAgICAgICAgIG1lLm93bmVyLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufSB0cnVlIGluIGNhc2UgdGhlIG5vZGUgZXhpc3RlZFxuICAgICAqL1xuICAgIHJlbW92ZU5vZGUobmFtZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZU5hbWUgPSAnbm9kZScgKyBOZW8uY2FwaXRhbGl6ZShuYW1lLnJlcGxhY2UoUmVzaXphYmxlLm5hbWVSZWdFeCwgKHN0ciwgbGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSkpO1xuXG4gICAgICAgIGlmIChtZVtub2RlTmFtZV0pIHtcbiAgICAgICAgICAgIG1lLmN1cnJlbnROb2RlTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUub3duZXIuZ2V0VmRvbVJvb3QoKS5jbiwgbWVbbm9kZU5hbWVdKTtcbiAgICAgICAgICAgIG1lW25vZGVOYW1lXSA9IG51bGw7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmVzaXphYmxlKTtcblxuZXhwb3J0IHtSZXNpemFibGUgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==