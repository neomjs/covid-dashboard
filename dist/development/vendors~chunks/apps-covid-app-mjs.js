self["webpackChunk"](["vendors~chunks/apps-covid-app-mjs"],{

/***/ "./node_modules/neo.mjs/src/component/BoxLabel.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/BoxLabel.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxLabel; });
/* harmony import */ var _Label_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Label.mjs */ "./node_modules/neo.mjs/src/component/Label.mjs");


/**
 * Convenience class to render a bordered label with a text
 * @class Neo.component.BoxLabel
 * @extends Neo.component.Label
 */
class BoxLabel extends _Label_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.BoxLabel'
         * @protected
         */
        className: 'Neo.component.BoxLabel',
        /**
         * @member {String} ntype='box-label'
         * @protected
         */
        ntype: 'box-label',
        /**
         * @member {String[]} cls=['neo-label']
         */
        cls: ['neo-box-label', 'neo-label']
    }}
}

Neo.applyClassConfig(BoxLabel);



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

/***/ "./node_modules/neo.mjs/src/component/Helix.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Helix.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helix; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _selection_HelixModel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../selection/HelixModel.mjs */ "./node_modules/neo.mjs/src/selection/HelixModel.mjs");
/* harmony import */ var _util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Matrix.mjs */ "./node_modules/neo.mjs/src/util/Matrix.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");








const itemsMounted = Symbol.for('itemsMounted');
const lockWheel    = Symbol.for('lockWheel'); // we can not use itemsMounted, since it is connected to onSort()

/**
 * @class Neo.component.Helix
 * @extends Neo.component.Base
 */
class Helix extends _Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Helix'
         * @protected
         */
        className: 'Neo.component.Helix',
        /**
         * @member {String} ntype='helix'
         * @protected
         */
        ntype: 'helix',
        /**
         * The background color of the helix container
         * @member {String} backgroundColor_='#000000'
         */
        backgroundColor_: '#000000',
        /**
         * The background image of the helix container
         * @member {String} backgroundImage_=''
         */
        backgroundImage_: '',
        /**
         * The ids of expanded items will get stored here
         * @member {Array} clonedItems=[]
         * @protected
         */
        clonedItems: [],
        /**
         * @member {String[]} cls=['neo-helix']
         */
        cls: ['neo-helix'],
        /**
         * The vertical delta between each helix item (increasing this value will create a spiral)
         * @member {Number} deltaY_=1.5
         */
        deltaY_: 1.5,
        /**
         * Multiselections will reduce the opacity and set this flag to true
         * @member {Boolean} dimmed_=false
         */
        dimmed_: false,
        /**
         * Multiselections will reduce the opacity and set this flag to true
         * @member {Number} dimmedMaxOpacity_=0.3
         */
        dimmedMaxOpacity_: 0.3,
        /**
         * Multiselections will reduce the opacity and set this flag to true
         * @member {Number} dimmedMinOpacity_=0.2
         */
        dimmedMinOpacity_: 0.2,
        disableSelection : false,
        /**
         * Flip images by 180° for a not mirrored inner view
         * @member {Boolean} flipped_=false
         */
        flipped_: false,
        /**
         * True to rotate the helix when using keynav, so that the selected items stays in front
         * @member {Boolean} followSelection_=false
         */
        followSelection_: false,
        /**
         * The record field containing the image data.
         * Nested fields are supported (e.g. author.image)
         * @member {String} imageField='image'
         */
        imageField: 'image',
        /**
         * The path to the images folder
         * Will get set inside the ctor to avoid issues inside the webpack builds
         * @member {String|null} imageSource=Neo.config.resourcesPath + 'examples/'
         */
        imageSource: null,
        /**
         * Amount of items per row (circle) -> 360° / 10 = 36
         * @member {Number} itemAngle_=8
         */
        itemAngle_: 8,
        /**
         * @member {Object} itemTpl_
         */
        itemTpl_: {
            cls     : ['surface', 'neo-helix-item'],
            style   : {},
            tabIndex: '-1',
            cn: [{
                tag: 'img',
                cls: ['contact-item']
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
        keys: {
            'Enter': 'onKeyDownEnter',
            'Space': 'onKeyDownSpace'
        },
        /**
         * We store one instance of the matrix here to avoid creating new ones on each refresh operation
         * @member {Neo.util.Matrix|null} matrix=null
         * @protected
         */
        matrix: null,
        /**
         * The max amount of store items to show
         * @member {Number} maxItems_=300
         */
        maxItems_: 300,
        /**
         * The max opacity for items inside the foreground
         * @member {Number} maxOpacity_=0.8
         */
        maxOpacity_: 0.8,
        /**
         * The max opacity for items inside the background
         * @member {Number} minOpacity_=0.3
         */
        minOpacity_: 0.3,
        /**
         * The zooming factor which replaces the default wheelDelta.
         * @member {Number} mouseWheelDeltaX=5
         */
        mouseWheelDeltaX: 5,
        /**
         * The zooming factor which replaces the default wheelDelta.
         * @member {Number} mouseWheelDeltaY=50
         */
        mouseWheelDeltaY: 50,
        /**
         * Specifies whether the mouse wheel should change the translateZ value for zooming
         * @member {Boolean} mouseWheelEnabled_=true
         */
        mouseWheelEnabled_: true,
        /**
         * The DOM element offsetHeight of the top level div.
         * Gets fetched after the helix got mounted.
         * @member {Boolean} mouseWheelEnabled=true
         * @protected
         */
        offsetHeight: null,
        /**
         * The DOM element offsetWidth of the top level div.
         * Gets fetched after the helix got mounted.
         * @member {Boolean} mouseWheelEnabled=true
         * @protected
         */
        offsetWidth: null,
        /**
         * The perspective of the Helix view in px
         * @member {Number} perspective_=800
         */
        perspective_: 800,
        /**
         * The radius of the Helix in px
         * @member {Number} radius_=1500
         */
        radius_: 1500,
        /**
         * The rotationAngle of the Helix in degrees
         * @member {Number} rotationAngle_=780
         */
        rotationAngle_: 780,
        /**
         * We store one instance of the rotation matrix here to avoid creating new ones on each refresh operation
         * @member {Neo.util.Matrix|null} rotationMatrix=null
         * @protected
         */
        rotationMatrix: null,
        /**
         * True displays the first & last name record fields below an expanded item
         * @member {Boolean} showCloneInfo=true
         */
        showCloneInfo: true,
        /**
         * The name of the CSS rule for selected items
         * @member {String} selectedItemCls='neo-selected'
         */
        selectedItemCls: 'neo-selected',
        /**
         * uses the selection.HelixModel by default
         * @member {Neo.selection.HelixModel|null} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * The store instance or class containing the data for the gallery items
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null, // todo: use a store once collections are integrated
        /**
         * The setTimeout() ids for calls which can get cancelled
         * @member {Array} transitionTimeouts=[]
         * @protected
         */
        transitionTimeouts: [],
        /**
         * The translateX gets included into each helix item
         * @member {Number} translateX_=400
         */
        translateX_: 400,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateY_=-350
         */
        translateY_: -350,
        /**
         * The translateX value gets included into each helix item
         * @member {Number} translateZ_=-5000
         */
        translateZ_: -5000,
        /**
         * The url for the store to load the data
         * @member {String} url_='../resources/examples/data/ai_contacts.json'
         */
        url_: '../../resources/examples/data/ai_contacts.json',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style   : {},
            tabIndex: '-1',
            cn: [{
                cls  : ['container'],
                style: {},
                cn: [{
                    cls  : ['group'],
                    cn   : [],
                    style: {
                        opacity  : 1,
                        transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 461, 452.5, -100700, 1)'
                    }
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
            domListeners = Neo.clone(me.domListeners, true);

        me[itemsMounted] = false;
        me[lockWheel]    = false;

        if (me.imageSource === null) {
            me.imageSource = Neo.config.resourcesPath + 'examples/';
        }

        domListeners.push({
            click: me.onClick,
            wheel: me.onMouseWheel,
            scope: me
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
        if (!(me.store instanceof _data_Store_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])) {
            me.loadData();
        }
    }

    /**
     * Triggered after the flipped config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetFlipped(value, oldValue) {
        this.applyItemTransitions(this.refresh, 1000);
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
        super.afterSetMounted(value, oldValue);

        if (value) {
            this.getOffsetValues();
        }
    }

    /**
     * Triggered after the perspective config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetPerspective(value, oldValue) {
        let me = this;

        if (me.mounted) {
            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : {
                    id   : me.vdom.id,
                    style: {
                        perspective: value + 'px'
                    }
                }
            });

            me.updateCloneTranslate();
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
     * Triggered after the url config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetUrl(value, oldValue) {
        let me = this;

        if (me.rendered) {
            me.destroyItems();
            me.loadData();
        }
    }

    /**
     *
     * @param callback
     * @param animationTime
     * @param callbackParam
     * @protected
     */
    applyItemTransitions(callback, animationTime, callbackParam) {
        let me  = this,
            cls = 'neo-transition-' + animationTime,
            timeoutId;

        me.transitionTimeouts.forEach(item => {
            clearTimeout(item);
        });

        me.transitionTimeouts.splice(0, me.transitionTimeouts.length);

        if (me.mounted) {
            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : {
                    id : me.id,
                    cls: {
                        add   : [cls],
                        remove: []
                    }
                }
            }).then(() => {
                callback.apply(me, [callbackParam]);

                timeoutId = setTimeout(() => {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].remove(me.transitionTimeouts, timeoutId);

                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : {
                            id : me.id,
                            cls: {
                                add   : [],
                                remove: [cls]
                            }
                        }
                    });
                }, animationTime + 200);

                me.transitionTimeouts.push(timeoutId);
            });
        }
    }

    /**
     *
     * @returns {Object}
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

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_HelixModel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"], {
            listeners: {
                selectionChange: this.onSelectionChange,
                scope          : this
            }
        });
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
            return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_6__["default"], {
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

    /**
     * Calculate an opacity gradient based on the item rotation angle
     * @param {Object} item
     * @returns {Number}
     */
    calculateOpacity(item) {
        let me           = this,
            maxOpacity   = me.maxOpacity,
            minOpacity   = me.minOpacity,
            deltaOpacity = maxOpacity - minOpacity,
            angle, opacity, opacityFactor;

        if (deltaOpacity === 0) {
            opacity = maxOpacity;
        } else {
            angle = item.rotationAngle % 360;

            while (angle < 0) {
                angle += 360;
            }

            while (angle > 180) {
                angle = 360 - angle;
            }

            // non linear distribution, since the angle does not match delta translateZ
            opacityFactor = 1 - Math.sin(angle * Math.PI / 360);

            opacity = minOpacity + deltaOpacity * opacityFactor;
        }

        return opacity;
    }

    /**
     * Override this method to get different item-markups
     * @param {Object} vdomItem
     * @param {Object} record
     * @param {Number} index
     * @returns {Object} vdomItem
     */
    createItem(vdomItem, record, index) {
        let me = this;

        vdomItem.id = me.getItemVnodeId(record[me.keyProperty]);

        vdomItem.cn[0].id  = me.getItemVnodeId(record[me.keyProperty]) + '_img';
        vdomItem.cn[0].src = me.imageSource + Neo.ns(me.imageField, false, record);

        return vdomItem;
    }

    /**
     * @param {Number} [startIndex] the start index for creating items,
     * e.g. increasing maxItems only needs to create the new ones
     * @protected
     */
    createItems(startIndex) {
        let me            = this,
            deltaY        = me.deltaY,
            group         = me.getItemsRoot(),
            itemAngle     = me.itemAngle,
            matrix        = me.matrix,
            radius        = me.radius,
            rotationAngle = me.rotationAngle,
            translateX    = me.translateX,
            translateY    = me.translateY,
            translateZ    = me.translateZ,
            vdom          = me.vdom,
            i             = startIndex || 0,
            len           = Math.min(me.maxItems, me.store.items.length),
            angle, item, matrixItems, transformStyle, vdomItem, c, s, x, y, z;

        if (!me.mounted) {
            const listenerId = me.on('mounted', () => {
                me.un('mounted', listenerId);
                setTimeout(() => {
                    me.createItems(startIndex);
                }, 100);
            });
        } else {
            // console.log('createItems', me.id, me.store);

            for (; i < len; i++) {
                item = me.store.items[i];

                angle = -rotationAngle + i * itemAngle;

                s = Math.sin(angle * Math.PI / 180);
                c = Math.cos(angle * Math.PI / 180);

                x = radius * s - 300 + translateX;
                y = -400 + angle * deltaY + translateY;
                z = 99800 + radius * c + translateZ;

                matrixItems = [
                    [c, 0, -s, 0],
                    [0, 1,  0, 0],
                    [s, 0,  c, 0],
                    [x, y,  z, 1]
                ];

                if (!matrix) {
                    me.matrix = matrix = Neo.create(_util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        items: matrixItems
                    });
                } else {
                    matrix.items = matrixItems;
                }

                transformStyle = matrix.getTransformStyle();

                vdomItem = me.createItem(me.itemTpl, item, i);

                item.rotationAngle  = angle;
                item.transformStyle = transformStyle;

                vdomItem. style = vdomItem.style || {};

                vdomItem.style.opacity   = me.calculateOpacity(item);
                vdomItem.style.transform = transformStyle;

                group.cn.push(vdomItem);
            }

            me[lockWheel] = false;

            me.promiseVdomUpdate(vdom).then(() => {
                me[itemsMounted] = true;

                setTimeout(() => {
                    me[lockWheel] = true;
                }, 500);
            });
        }
    }

    /**
     * @protected
     */
    destroyClones() {
        let me           = this,
            store        = me.store,
            deltas       = [],
            removeDeltas = [],
            id, record;

        if (me.clonedItems.length > 0) {
            me.clonedItems.forEach(item => {
                id     = me.getItemId(item.id);
                record = store.get(id);

                record.expanded = false;

                deltas.push({
                    id   : item.id,
                    style: {
                        opacity  : record.opacity,
                        transform: record.transformStyle
                    }
                });

                removeDeltas.push({
                    id    : item.id,
                    action: 'removeNode'
                })
            });

            me.clonedItems = [];

            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : deltas
            }).then(data => {
                setTimeout(() => {
                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : removeDeltas
                    });
                }, 650);
            });
        }
    }

    /**
     *
     * @param {Number} [startIndex]
     * @param {Number} [amountItems]
     */
    destroyItems(startIndex, amountItems) {
        let me   = this,
            vdom = me.vdom;

        me.getItemsRoot().cn.splice(startIndex || 0, amountItems || me.store.getCount());
        me.vdom = vdom;
    }

    /**
     * Moves a clone of an item to the top left corner
     * @param {String} itemId
     */
    expandItem(itemId) {
        let me         = this,
            store      = me.store,
            record     = store.get(itemId),
            index      = store.indexOf(itemId),
            isExpanded = !!record.expanded,
            group      = me.getItemsRoot(),
            itemVdom   = Neo.clone(group.cn[index], true);

        me.destroyClones();

        if (isExpanded !== true) {
            record.expanded = true;

            itemVdom.id = itemVdom.id + '__clone';
            itemVdom.style.transform = record.transformStyle;
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].add(itemVdom.cls, 'neo-transition-600');
            delete itemVdom.tabIndex;

            itemVdom.cn[0].id = itemVdom.cn[0].id + '__clone';

            if (me.showCloneInfo) {
                itemVdom.cn.push({
                    cls      : ['contact-name'],
                    innerHTML: record.firstname + ' ' + record.lastname
                });
            }

            Neo.vdom.Helper.create({
                autoMount  : true,
                parentId   : group.id,
                parentIndex: store.getCount(),
                ...itemVdom
            }).then(data => {
                me.clonedItems.push(itemVdom);

                setTimeout(() => {
                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : [{
                            id   : itemVdom.id,
                            style: {
                                opacity  : 1,
                                transform: me.getCloneTransform()
                            }
                        }]
                    });
                }, 50);
            });
        }
    }

    /**
     *
     * @returns {String}
     */
    getCloneTransform() {
        let me         = this,
            translateX = (me.offsetWidth  - 1350) / 3,
            translateY = (me.offsetHeight - 1320) / 3,
            translateZ = 100700 + me.perspective / 1.5;

        return 'matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,'+translateX+','+translateY+','+translateZ+',1)';
    }

    /**
     *
     * @param {String} vnodeId
     * @returns {Number}
     */
    getItemId(vnodeId) {
        return parseInt(vnodeId.split('__')[1]);
    }

    /**
     * Returns the vdom node containing the helix items
     * @returns {Object} vdom
     */
    getItemsRoot() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     * @param {Number|String} id
     * @returns {String}
     */
    getItemVnodeId(id) {
        return this.id + '__' + id;
    }

    /**
     * @param {Number} [delay=100]
     */
    getOffsetValues(delay=100) {
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
            });
        }, delay);
    }

    /**
     *
     */
    loadData() {
        let me = this;

        Neo.Xhr.promiseJson({
            insideNeo: true,
            url      : me.url
        }).then(data => {
            me.store.items = data.json.data;
            me.createItems();
        }).catch(err => {
            console.log('Error for Neo.Xhr.request', err, me.id);
        });
    }

    /**
     *
     * @param {String} itemId
     */
    moveToSelectedItem(itemId) {
        let me = this;
        me.rotationAngle = me.store.get(itemId).rotationAngle + me.rotationAngle;
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
    onKeyDownEnter(data) {
        let item = this.selectionModel.items[0];

        if (item) {
            this.expandItem(item);
        }
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownSpace(data) {
        this.applyItemTransitions(this.moveToSelectedItem, 1000, this.selectionModel.items[0] || 0);
    }

    /**
     *
     * @param {Object} data
     */
    onMouseWheel(data) {
        let me            = this,
            deltaX        = data.deltaX,
            deltaY        = data.deltaY,
            rotationAngle = me.rotationAngle,
            translateZ    = me.translateZ;

        if (me.mouseWheelEnabled && me[lockWheel]) {
            me._rotationAngle = rotationAngle + (deltaX * me.mouseWheelDeltaX); // silent update
            me._translateZ    = translateZ    + (deltaY * me.mouseWheelDeltaY); // silent update

            me.refresh();

            me.fire('changeRotation',   me._rotationAngle);
            me.fire('changeTranslateZ', me._translateZ);
        }
    }

    /**
     *
     * @param {String[]} value
     * @param {String[]} oldValue
     */
    onSelectionChange(value, oldValue) {
        let me = this;

        if (me.followSelection && value && value[0]) {
            me.applyItemTransitions(me.moveToSelectedItem, 100, value[0]);
        }
    }

    /**
     * @protected
     */
    onSort() {
        const me = this;

        if (me[itemsMounted] === true) {console.log('sort');
            me.applyItemTransitions(me.sortItems, 1000);
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
     * @protected
     */
    refresh() {
        let me             = this,
            deltas         = [],
            deltaY         = me.deltaY,
            flipped        = me.flipped,
            index          = 0,
            itemAngle      = me.itemAngle,
            len            = Math.min(me.maxItems, me.store.getCount()),
            matrix         = me.matrix,
            radius         = me.radius,
            rotationAngle  = me.rotationAngle,
            rotationMatrix = me.rotationMatrix,
            translateX     = me.translateX,
            translateY     = me.translateY,
            translateZ     = me.translateZ,
            vdom           = me.vdom,
            angle, item, opacity, rotateY, transformStyle, vdomItem, c, s, x, y, z;

        if (flipped) {
            rotateY = _util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].rotateY(180 * Math.PI / 180);

            if (!rotationMatrix) {
                me.rotationMatrix = rotationMatrix = Neo.create(_util_Matrix_mjs__WEBPACK_IMPORTED_MODULE_4__["default"], {
                    items: rotateY
                });
            } else {
                rotationMatrix.items = rotateY;
            }
        }

        for (; index < len; index++) {
            item     = me.store.items[index];
            vdomItem = vdom.cn[0].cn[0].cn[index];

            angle = -rotationAngle + index * itemAngle;

            s = Math.sin(angle * Math.PI / 180);
            c = Math.cos(angle * Math.PI / 180);

            x =  -300 + radius * s     + translateX;
            y =  -400 + angle * deltaY + translateY;
            z = 99800 + radius * c     + translateZ;

            matrix.items = [
                [c, 0, -s, 0],
                [0, 1,  0, 0],
                [s, 0,  c, 0],
                [x, y,  z, 1]
            ];

            if (flipped) {
                matrix = rotationMatrix.x(matrix);
            }

            transformStyle = matrix.getTransformStyle();
            matrix.destroy();

            Object.assign(item, {
                rotationAngle : angle,
                transformStyle: transformStyle
            });

            opacity = me.calculateOpacity(item);
            item.opacity = opacity;

            Object.assign(item, {
                opacity       : opacity,
                rotationAngle : angle,
                transformStyle: transformStyle
            });

            deltas.push({
                id   : me.getItemVnodeId(item[me.keyProperty]),
                style: {
                    opacity  : opacity,
                    transform: transformStyle
                }
            });
        }

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: me.appName,
            deltas : deltas
        });
    }

    /**
     * @protected
     */
    refreshIfMounted() {
        if (this.mounted) {
            this.refresh();
        }
    }

    /**
     *
     */
    sortItems() {
        let me       = this,
            deltas   = [],
            parentId = me.vdom.cn[0].cn[0].id,
            i        = 0,
            len      = Math.min(me.maxItems, me.store.getCount());

        for (; i < len; i++) {
            deltas.push({
                action  : 'moveNode',
                id      : me.getItemVnodeId(me.store.items[i][me.keyProperty]),
                index   : i,
                parentId: parentId
            });
        }

        Neo.currentWorker.promiseMessage('main', {
            action : 'updateDom',
            appName: me.appName,
            deltas : deltas
        }).then(() => {
            me.refresh();
        });
    }

    /**
     * @protected
     */
    updateCloneTranslate() {
        let me           = this,
            afterDeltas  = [],
            deltas       = [],
            timeoutId, transform;

        if (me.clonedItems.length > 0) {
            transform = me.getCloneTransform(true);

            me.transitionTimeouts.forEach(item => {
                clearTimeout(item);
            });

            me.clonedItems.forEach(item => {
                deltas.push({
                    id : item.id,
                    cls: {
                        add   : [],
                        remove: ['neo-transition-600']
                    },
                    style: {
                        transform: transform
                    }
                });

                afterDeltas.push({
                    id : item.id,
                    cls: {
                        add   : ['neo-transition-600'],
                        remove: []
                    }
                });
            });

            Neo.currentWorker.promiseMessage('main', {
                action : 'updateDom',
                appName: me.appName,
                deltas : deltas
            }).then(() => {
                timeoutId = setTimeout(() => {
                    _util_Array_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].remove(me.transitionTimeouts, timeoutId);

                    Neo.currentWorker.promiseMessage('main', {
                        action : 'updateDom',
                        appName: me.appName,
                        deltas : afterDeltas
                    });
                }, 200);

                me.transitionTimeouts.push(timeoutId);
            });
        }
    }
}

const cfg = {enumerable: false, value: Helix.prototype.refreshIfMounted};

Object.defineProperties(Helix.prototype, {
    afterSetDeltaY       : cfg,
    afterSetItemAngle    : cfg,
    afterSetMaxOpacity   : cfg,
    afterSetMinOpacity   : cfg,
    afterSetRadius       : cfg,
    afterSetRotationAngle: cfg,
    afterSetTranslateX   : cfg,
    afterSetTranslateY   : cfg,
    afterSetTranslateZ   : cfg
});

Neo.applyClassConfig(Helix);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/wrapper/AmChart.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AmChart; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/Logger.mjs */ "./node_modules/neo.mjs/src/core/Logger.mjs");



/**
 * Convenience class to render an amChart
 * Requires setting Neo.config.useAmCharts to true (or manually include the lib)
 * @class Neo.component.wrapper.AmChart
 * @extends Neo.component.Base
 */
class AmChart extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.wrapper.AmChart'
         * @protected
         */
        className: 'Neo.component.wrapper.AmChart',
        /**
         * @member {String} ntype='am-chart'
         * @protected
         */
        ntype: 'am-chart',
        /**
         * See: https://www.amcharts.com/docs/v4/
         * @member {Object} chartConfig=null
         */
        chartConfig: null,
        /**
         * @member {String} chartType='XYChart'
         */
        chartType: 'XYChart',
        /**
         * It is not possible to define adapters via json, so we pass a flag to main instead
         * @member {Boolean} combineSeriesTooltip=false
         */
        combineSeriesTooltip: false,
        /**
         * Stores the chart data
         * @member {Array|null} data_=null
         */
        data_: null,
        /**
         * Charts & maps can have different targets to apply the data to. E.g.:
         * myChart.data = data; // => ''
         * myChart.series.values[0].data = data; // => 'series.values.0'
         * Use a Neo.ns() conform syntax with dots between props
         * @member {String} dataPath=''
         */
        dataPath: '',
        /**
         * am4charts, am4maps
         * @member {String} package='am4charts'
         */
        package: 'am4charts',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style: {position: 'relative', height: '100%', width: '100%'},
            cn: [{
                style: {position: 'absolute', height: '100%', width: '100%'},
                cn: [{
                    style: {height: '100%'}
                }]
            }]
        }
    }}

    /**
     *
     */
    getVdomRoot() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0].childNodes[0];
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        if (!me.chartConfig) {
            _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].logError('wrapper.AmChart defined without a chartConfig', me.id);
        }

        me.parseChartConfig(me.chartConfig);
    }

    /**
     * Triggered after the data config got changed
     * @param {Array|null} value
     * @param {Array|null} oldValue
     * @protected
     */
    afterSetData(value, oldValue) {
        let me = this;

        if (value) {
            Neo.main.addon.AmCharts.updateData({
                appName : me.appName,
                data    : value,
                dataPath: me.dataPath,
                id      : me.id
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
        let me = this;

        if (value === false && oldValue !== undefined) {
            Neo.main.addon.AmCharts.destroy({
                appName: me.appName,
                id     : me.id
            });
        }

        super.afterSetMounted(value, oldValue);

        if (value) {
            const opts = {
                appName             : me.appName,
                combineSeriesTooltip: me.combineSeriesTooltip,
                config              : me.chartConfig,
                data                : me.data,
                id                  : me.id,
                package             : me.package,
                type                : me.chartType
            };

            if (me.data) {
                opts.data     = me.data;
                opts.dataPath = me.dataPath;
            }

            setTimeout(() => {
                Neo.main.addon.AmCharts.create(opts).then(me.onChartMounted);
            }, 50);
        }
    }

    /**
     * Override this method to trigger logic after the chart got mounted into the dom
     */
    onChartMounted() {

    }

    /**
     *
     * @param {Array|Object} config
     */
    parseChartConfig(config) {
        const me = this;

        if (Neo.isArray(config)) {
            config.forEach(item => {
                me.parseChartConfig(item);
            });
        } else {
            Object.entries(config).forEach(([key, value]) => {
                if (Neo.isArray(value) || Neo.isObject(value)) {
                    me.parseChartConfig(value);
                } else if (Neo.isString(value) && value.startsWith('@config:')) {
                    value = value.substr(8);

                    if (!me[value]) {
                        _core_Logger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].logError('The used @config does not exist:', value, me);
                    } else {
                        config[key] = me[value];
                    }
                }
            });
        }
    }
}

Neo.applyClassConfig(AmChart);



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/wrapper/MapboxGL.mjs ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapboxGL; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * Convenience class to render Mapbox GL maps
 * Requires setting Neo.config.useMapboxGL to true (or manually include the lib)
 * @class Neo.component.wrapper.MapboxGL
 * @extends Neo.component.Base
 */
class MapboxGL extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.wrapper.MapboxGL'
         * @protected
         */
        className: 'Neo.component.wrapper.MapboxGL',
        /**
         * @member {String} ntype='mapboxgl'
         * @protected
         */
        ntype: 'mapboxgl',
        /**
         *
         * @member {String|null} accessToken=null
         */
        accessToken: null,
        /**
         * @member {Object} center_={lat: 0, lng: 0}
         */
        center_: {lat: 0, lng: 0},
        /**
         * @member {Boolean} convertDataToGeoJson=true
         * @protected
         */
        convertDataToGeoJson: true,
        /**
         * @member {Array|null} data_=null
         */
        data_: null,
        /**
         * Assuming there is just 1 source for data changes.
         * Create a ticket in case it needs to get enhanced.
         * @member {String|null} dataSourceId=null
         */
        dataSourceId: null,
        /**
         * Additional layers to add to the map style.
         * beforeId is a custom property which will get passed as the second param for:
         * https://docs.mapbox.com/mapbox-gl-js/api/#map#addlayer
         * @member {Object[]|null} layers_=null
         */
        layers_: null,
        /**
         * https://docs.mapbox.com/mapbox-gl-js/style-spec/
         * @member {Object|String} mapboxStyle=null
         */
        mapboxStyle_: null,
        /**
         * Data sources for the map.
         * id is a custom property which will get passed as the first param for:
         * https://docs.mapbox.com/mapbox-gl-js/api/#map#addsource
         * @member {Object[]|null} sources_=null
         */
        sources_: null,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style: {position: 'relative', height: '100%', width: '100%'},
            cn: [{
                style: {position: 'absolute', height: '100%', width: '100%'},
                cn: [{
                    style: { height: '100%'}
                }]
            }]
        },
        /**
         *
         * @member {Number} zoom_=3
         */
        zoom_: 3
    }}

    /**
     *
     */
    getVdomRoot() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0].childNodes[0];
    }

    /**
     * Triggered after the center config got changed
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    afterSetCenter(value, oldValue) {
        this.centerMap(value);
    }

    /**
     * Triggered after the data config got changed
     * @param {Array|null} value
     * @param {Array|null} oldValue
     * @protected
     */
    afterSetData(value, oldValue) {
        let me = this;

        if (value) {
            Neo.main.addon.MapboxGL.updateData({
                appName     : me.appName,
                data        : value,
                dataSourceId: me.dataSourceId,
                id          : me.id
            });
        }
    }

    /**
     * Triggered after the layers config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    afterSetLayers(value, oldValue) {
        if (value) {
            Neo.main.addon.MapboxGL.addLayers({
                appName: this.appName,
                id     : this.id,
                layers : value
            });
        }
    }

    /**
     * Triggered after the mapboxStyle config got changed
     * @param {Object|String} value
     * @param {Object|String} oldValue
     * @protected
     */
    afterSetMapboxStyle(value, oldValue) {
        let me = this;

        if (this.mounted) {
            Neo.main.addon.MapboxGL.setStyle({
                accessToken: me.accessToken,
                appName    : me.appName,
                id         : me.id,
                style      : value
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
        let me = this;

        if (value === false && oldValue !== undefined) {
            Neo.main.addon.MapboxGL.destroy({
                appName: me.appName,
                id     : me.id
            });
        }

        super.afterSetMounted(value, oldValue);

        if (value) {
            const opts = {
                accessToken: me.accessToken,
                appName    : me.appName,
                center     : me.center,
                id         : me.id,
                mapboxStyle: me.mapboxStyle,
                zoom       : me.zoom
            };

            if (me.data) {
                opts.data         = me.data;
                opts.dataSourceId = me.dataSourceId;
            }

            if (me.layers) {
                opts.layers = me.layers;
            }

            if (me.sources) {
                opts.sources = me.sources;
            }

            Neo.main.addon.MapboxGL.create(opts).then(me.onMapMounted);
        }
    }

    /**
     * Triggered after the sources config got changed
     * @param {Object[]|null} value
     * @param {Object[]|null} oldValue
     * @protected
     */
    afterSetSources(value, oldValue) {
        if (value) {
            Neo.main.addon.MapboxGL.addSources({
                appName: this.appName,
                id     : this.id,
                sources: value
            });
        }
    }

    /**
     * Triggered after the zoom config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetZoom(value, oldValue) {
        let me = this;

        if (me.mounted) {
            Neo.main.addon.MapboxGL.zoom({
                appName: me.appName,
                id     : me.id,
                zoom   : value
            });
        }
    }

    /**
     *
     */
    autoResize() {
        Neo.main.addon.MapboxGL.autoResize({
            appName: this.appName,
            id     : this.id
        });
    }

    /**
     * Triggered before the center config gets changed.
     * @param {Object} value
     * @param {Object} oldValue
     * @protected
     */
    beforeSetCenter(value, oldValue) {
        if (value && value.long) {
            value.lng = value.long;
            delete value.long;
        }

        return value;
    }

    /**
     * Triggered before the data config gets changed.
     * @param {Array|null} value
     * @param {Array|null} oldValue
     * @protected
     */
    beforeSetData(value, oldValue) {
        if (value && this.convertDataToGeoJson) {
            value = this.convertToGeoJson(value);
        }

        return value;
    }

    /**
     * Use component.center = {} or component.flyTo() instead
     * @param {Object} value
     * @param {Number} value.lat
     * @param {Number} value.lng
     * @param {Boolean} animate=false
     * @protected
     */
    centerMap(value, animate=false) {
        Neo.main.addon.MapboxGL.center({
            animate: animate,
            appName: this.appName,
            id     : this.id,
            lat    : value.lat,
            lng    : value.lng
        });
    }

    /**
     *
     * @param {Object[]} data
     * @returns {Object} Object matching the geojson format
     */
    convertToGeoJson(data) {
        const geoJson = {
            type    : 'FeatureCollection',
            features: []
        };

        data.forEach(item => {
            // todo: this needs to get more generic
            geoJson.features.push({
                type: 'Feature',

                properties: {
                    active   : item.active,
                    cases    : item.cases,
                    deaths   : item.deaths,
                    id       : item.countryInfo.iso2,
                    recovered: item.recovered,
                    time     : item.updated
                },

                geometry: {
                    type       : 'Point',
                    coordinates: [item.countryInfo.long, item.countryInfo.lat]
                }
            })
        });

        return geoJson;
    }

    /**
     *
     * @param {Object} value
     * @param {Number} value.lat
     * @param {Number} value.lng
     */
    flyTo(value) {
        const me = this;

        value = me.beforeSetCenter(value, null); // long => lng if needed

        me._center = {lat: value.lat, lng: value.lng}; // silent update

        me.centerMap(value, true);
    }

    /**
     * Override this method to trigger logic after the map got mounted into the dom
     */
    onMapMounted() {

    }

    /**
     *
     * @param {Object} data
     * @param {String} data.layerId
     * @param {Object} data.options
     * @param {Boolean} data.options.validate = true
     * @param {Array} data.value
     */
    setFilter(data) {
        Neo.main.addon.MapboxGL.setFilter({
            appName: this.appName,
            id     : this.id,
            layerId: data.layerId,
            options: data.options,
            value  : data.value
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.layerId
     * @param {String} data.key
     * @param {Object} data.options
     * @param {Boolean} data.options.validate = true
     * @param {String} data.value
     */
    setLayoutProperty(data) {
        Neo.main.addon.MapboxGL.setLayoutProperty({
            appName: this.appName,
            id     : this.id,
            key    : data.key,
            layerId: data.layerId,
            options: data.options,
            value  : data.value
        });
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.layerId
     * @param {String} data.key
     * @param {Object} data.options
     * @param {Boolean} data.options.validate = true
     * @param {String} data.value
     */
    setPaintProperty(data) {
        Neo.main.addon.MapboxGL.setPaintProperty({
            appName: this.appName,
            id     : this.id,
            key    : data.key,
            layerId: data.layerId,
            options: data.options,
            value  : data.value
        });
    }
}

Neo.applyClassConfig(MapboxGL);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/CheckBox.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");


/**
 * @class Neo.form.field.CheckBox
 * @extends Neo.form.field.Base
 */
class CheckBox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.CheckBox'
         * @protected
         */
        className: 'Neo.form.field.CheckBox',
        /**
         * @member {String} ntype='checkboxfield'
         * @protected
         */
        ntype: 'checkboxfield',
        /**
         * @member {Boolean} checked_=false
         */
        checked_: false,
        /**
         * @member {Array} cls=['neo-checkboxfield']
         */
        cls: ['neo-checkboxfield'],
        /**
         * @member {Boolean} hideLabel_=false
         */
        hideLabel_: false,
        /**
         * @member {Boolean} hideValueLabel_=false
         */
        hideValueLabel_: true,
        /**
         * @member {String} inputType_='checkbox'
         */
        inputType_: 'checkbox',
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
         * @member {String} The name (group) of the input dom node
         */
        name_: '',
        /**
         * @member {String} valueLabelText_='ValueLabel'
         */
        valueLabelText_: 'ValueLabel',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-checkbox-label']
            }, {
                tag: 'input',
                cls: ['neo-checkbox-input']
            }, {
                tag: 'label',
                cls: ['neo-checkbox-value-label']
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
            inputEl      = vdom.cn[1],
            valueLabel   = vdom.cn[2];

        inputEl.id = valueLabel.for = me.id + '-input';
        me.vdom = vdom;

        domListeners.push({
            change: {
                fn   : me.onInputValueChange,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[1].checked = value;
        me.vdom = vdom;

        if (oldValue !== undefined) {
            me.fire('change', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the hideLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the hideLabelValue config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideValueLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[2].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the inputType config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputType(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].type = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelText(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].innerHTML = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelWidth config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetLabelWidth(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideLabel) {
            vdom.cn[0].width = value;
            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the name config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetName(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].name = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the value config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[1].value = value;
            this.vdom = vdom;
        }

        super.afterSetValue(value, oldValue);
    }

    /**
     * Triggered after the valueLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValueLabelText(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideValueLabel) {
            vdom.cn[2].innerHTML = value;
            me.vdom = vdom;
        }
    }

    /**
     * Gets triggered when a user checks a checkbox input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        let me      = this,
            checked = data.target.checked;

        me._checked = checked; // silent update

        // keep the vdom & vnode in sync for future updates
        me.vdom.cn[1].checked = checked;
        me.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = checked + '';

        me.fire('change', {
            component: me,
            oldValue : !checked,
            value    : checked
        });
    }
}

Neo.applyClassConfig(CheckBox);



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

/***/ "./node_modules/neo.mjs/src/form/field/Picker.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Picker.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _trigger_Picker_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trigger/Picker.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs");
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");





/**
 * The abstract picker field provides an arrow down trigger which opens a floating container to provide
 * more data selection options
 * @class Neo.form.field.Picker
 * @extends Neo.form.field.Text
 * @abstract
 */
class Picker extends _Text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Picker'
         * @protected
         */
        className: 'Neo.form.field.Picker',
        /**
         * @member {String} ntype='pickerfield'
         * @protected
         */
        ntype: 'pickerfield',
        /**
         * Stores the data from the getBoundingClientRect() call (picker & body DomRects)
         * @member {Array} clientRects=null
         * @protected
         */
        clientRects: null,
        /**
         * @member {String[]} cls=['neo-pickerfield', 'neo-textfield']
         */
        cls: ['neo-pickerfield', 'neo-textfield'],
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {
            'Enter' : 'onKeyDownEnter',
            'Escape': 'onKeyDownEscape'
        },
        /**
         * @member {Boolean} matchPickerWidth=true
         */
        matchPickerWidth: true,
        /**
         * @member {Object|null} picker=null
         * @protected
         */
        picker: null,
        /**
         * Configs to pass to the picker container
         * @member {Object|null} pickerConfig=null
         */
        pickerConfig: null,
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerHeight=100
         */
        pickerHeight: 100,
        /**
         * @member {Boolean} pickerIsMounted=false
         * @protected
         */
        pickerIsMounted: false,
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerMaxHeight=200
         */
        pickerMaxHeight: 200,
        /**
         * The width of the picker container. Defaults to px.
         * @member {Number|null} pickerWidth=100
         */
        pickerWidth: 100,
        /**
         * @member {Object|Object[]} triggers=[]
         * @protected
         */
        triggers: [{
            module: _trigger_Picker_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]
        }]
    }}

    /**
     *
     * @returns {Neo.container.Base}
     */
    createPicker() {
        let me              = this,
            pickerComponent = me.createPickerComponent();

        return Neo.create(_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"], {
            appName  : me.appName,
            cls      : ['neo-picker-container', 'neo-container'],
            height   : me.pickerHeight,
            id       : me.getPickerId(),
            items    : pickerComponent ? [pickerComponent] : [],
            maxHeight: me.pickerMaxHeight,
            vdom     : {cn: [], tabIndex: -1},
            width    : me.pickerWidth,
            ...me.pickerConfig || {}
        });
    }

    /**
     *
     * @param {Boolean} silent
     */
    applyClientRects(silent) {
        let me          = this,
            bodyRect    = me.clientRects[2],
            inputRect   = me.clientRects[1],
            triggerRect = me.clientRects[0],
            vdom        = me.picker.vdom,
            width       = me.matchPickerWidth ? (inputRect.width - 1) : me.pickerWidth;

        me.pickerWidth = width;

        Object.assign(vdom.style, {
            left : `${triggerRect.left + triggerRect.width - width}px`,
            top  : `${triggerRect.top + triggerRect.height + 1}px`,
            width: `${width}px`
        });

        me.picker[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @returns {null}
     */
    createPickerComponent() {
        return null;
    }

    /**
     *
     * @param {Function} [callback]
     * @param {Function} [callbackScope]
     */
    getClientRectsThenShow(callback, callbackScope) {
        let me = this;

        Neo.main.DomAccess.getBoundingClientRect({
            id: [me.id, me.id + '-input-wrapper', 'body']
        }).then(data => {
            me.clientRects = data;
            me.showPicker(callback, callbackScope);
        });
    }

    /**
     * Returns the picker instance and creates it in case it does not exist yet
     * @returns {Neo.container.Base}
     */
    getPicker() {
        let me = this;

        if (!me.picker) {
            me.picker = me.createPicker();
        }

        return me.picker;
    }

    /**
     *
     * @returns {String}
     */
    getPickerId() {
        return this.id + '__picker';
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    hidePicker(silent=false) {
        let me     = this,
            picker = me.getPicker(),
            vdom   = me.vdom;

        if (me.pickerIsMounted) {
            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].removeVdomChild(vdom, me.getPickerId());
        }

        me.pickerIsMounted = false;

        if (silent) {
            me._vdom = vdom;
            picker.mounted = false;
        } else {
            me.promiseVdomUpdate().then(data => {
                picker.mounted = me.pickerIsMounted;
            });
        }
    }

    /**
     *
     * @param {Array} data
     * @protected
     */
    onFocusLeave(data) {
        let me = this;

        // inline will trigger an vdom update, so hide picker should be silent
        if (me.labelPosition === 'inline' && (me.value === '' || me.value === null)) {
            me.hidePicker(true);
        } else {
            me.hidePicker();
        }

        super.onFocusLeave(data);
    }

    /**
     *
     * @param {Object} data
     * @param {Function} [callback]
     * @param {Function} [callbackScope]
     * @protected
     */
    onKeyDownEnter(data, callback, callbackScope) {
        if (!this.pickerIsMounted) {
            this.getClientRectsThenShow(callback, callbackScope);
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownEscape(data) {
        if (this.pickerIsMounted) {
            this.hidePicker();
        }
    }

    /**
     * Called by form.field.trigger.Picker
     * @protected
     */
    onPickerTriggerClick() {
        let me = this;

        if (me.pickerIsMounted) {
            me.hidePicker();
        } else {
            me.getClientRectsThenShow();
        }
    }

    /**
     *
     * @param {Function} [callback]
     * @param {Function} [callbackScope]
     */
    showPicker(callback, callbackScope) {
        let me     = this,
            picker = me.getPicker(),
            vdom   = me.vdom;

        me.applyClientRects(true);
        vdom.cn.push(picker.vdom);

        me.pickerIsMounted = true;

        me.promiseVdomUpdate().then(data => {
            picker.mounted = me.pickerIsMounted;

            if (callback) {
                callback.apply(callbackScope || me);
            }
        });
    }
}

Neo.applyClassConfig(Picker);



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

/***/ "./node_modules/neo.mjs/src/form/field/Select.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Select.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _Picker_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Picker.mjs */ "./node_modules/neo.mjs/src/form/field/Picker.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");






/**
 * Provides a drop down list to select one or multiple items
 * @class Neo.form.field.Select
 * @extends Neo.form.field.Picker
 */
class Select extends _Picker_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Select'
         * @protected
         */
        className: 'Neo.form.field.Select',
        /**
         * @member {String} ntype='selectfield'
         * @protected
         */
        ntype: 'selectfield',
        /**
         * @member {String[]} cls=['neo-selectfield', 'neo-pickerfield', 'neo-textfield']
         */
        cls: ['neo-selectfield', 'neo-pickerfield', 'neo-textfield'],
        /**
         * @member {String} displayField='name'
         */
        displayField: 'name',
        /**
         * @member {String|Number|null} hintRecordId=null
         */
        hintRecordId: null,
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {
            'Down'  : 'onKeyDownDown',
            'Enter' : 'onKeyDownEnter',
            'Escape': 'onKeyDownEscape',
            'Right' : 'onKeyDownRight',
            'Up'    : 'onKeyDownUp'
        },
        /**
         * @member {String|null} lastManualInput=null
         * @protected
         */
        lastManualInput: null,
        /**
         * @member {Neo.list.Base} list=null
         * @protected
         */
        list: null,
        /**
         * @member {Object|null} listConfig=null
         */
        listConfig: null,
        /**
         * The height of the picker container. Defaults to px.
         * @member {Number|null} pickerHeight=null
         */
        pickerHeight: null,
        /**
         * @member {Neo.data.Store|null} store_=null
         */
        store_: null,
        /**
         * Display the first matching result while typing
         * @member {Boolean} typeAhead_=true
         */
        typeAhead_: true
    }}

    /**
     *
     * @param config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.list = Neo.create({
            module        : _list_Base_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            displayField  : me.displayField,
            selectionModel: {stayInList: false},
            silentSelect  : true,
            store         : me.store,
            ...me.listConfig || {}
        });

        me.list.keys._keys.push(
            {fn: 'onContainerKeyDownEnter',  key: 'Enter',  scope: me.id},
            {fn: 'onContainerKeyDownEscape', key: 'Escape', scope: me.id}
        );

        me.list.on({
            createItems       : me.onListCreateItems,
            itemClick         : me.onListItemClick,
            itemNavigate      : me.onListItemNavigate,
            selectPostLastItem: me.focusInputEl,
            selectPreFirstItem: me.focusInputEl,
            scope             : me
        });

        if (me.typeAhead) {
            me.updateTypeAhead();
        }
    }

    /**
     * Triggered after the store config got changed
     * @param {Neo.data.Store} value
     * @param {Neo.data.Store} oldValue
     * @protected
     */
    afterSetStore(value, oldValue) {
        let me = this,
            filters;

        if (value) {
            filters = value.filters || [];

            filters.push({
                includeEmptyValues: true,
                operator          : 'like',
                property          : me.displayField,
                value             : me.value
            });

            value.filters = filters;
        }
    }

    /**
     * Triggered after the typeAhead config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetTypeAhead(value, oldValue) {
        if (this.rendered) {
            this.updateTypeAhead();
        }
    }

    /**
     * Triggered after the value config got changed
     * @param {String|null} value
     * @param {String|null} oldValue
     * @param {Boolean} [preventFilter=false]
     * @protected
     */
    afterSetValue(value, oldValue, preventFilter=false) {console.log('afterSetValue', value);
        super.afterSetValue(value, oldValue);

        if (!preventFilter) {
            this.updateValue();
        }
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Object|Neo.data.Store|null} value
     * @param {Neo.data.Store} oldValue
     * @returns {Neo.data.Store}
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]);
    }

    /**
     *
     * @returns {Neo.list.Base}
     */
    createPickerComponent() {
        return this.list;
    }

    /**
     *
     * @param {Function} [callback]
     */
    focusInputEl(callback) {
        let me = this;

        me.updateTypeAheadValue(me.lastManualInput, true);
        me.value = me.lastManualInput;

        Neo.main.DomAccess.focus({
            id: me.getInputElId()
        }).then(() => {
            if (callback) {
                callback.apply(me);
            }
        });
    }

    /**
     *
     * @returns {Object}
     */
    getInputHintEl() {
        let el = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(this.vdom, this.getInputHintId());
        return el && el.vdom;
    }

    /**
     *
     * @returns {String}
     */
    getInputHintId() {
        return this.id + '__input-hint'
    }

    /**
     * Returns the first selected record or null
     * returns {Object}
     */
    getRecord() {
        const list      = this.list,
              recordKey = list.selectionModel.getSelection()[0];

        return recordKey && this.store.get(list.getItemRecordId(recordKey)) || null;
    }

    /**
     * @param {Object} data
     * @protected
     */
    onContainerKeyDownEnter(data) {
        this.hidePicker();
    }

    /**
     * @param {Object} data
     * @protected
     */
    onContainerKeyDownEscape(data) {
        this.focusInputEl(this.hidePicker);
    }

    /**
     * @param {Object} data
     * @protected
     */
    onInputValueChange(data) {
        super.onInputValueChange(data);
        this.lastManualInput = data.value;
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownDown(data) {
        this.onKeyDownEnter(data);
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownEnter(data) {
        let me    = this;

        if (me.pickerIsMounted) {
            me.selectListItem();
            super.onKeyDownEnter(data);
        } else {
            super.onKeyDownEnter(data, me.selectListItem);
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownRight(data) {
        let me = this;

        if (me.hintRecordId) {
            me.value = me.store.get(me.hintRecordId)[me.displayField];
        }
    }

    /**
     *
     * @param {Object} data
     * @protected
     */
    onKeyDownUp(data) {
        let me = this;

        if (me.pickerIsMounted) {
            me.selectLastListItem();
            super.onKeyDownEnter(data);
        } else {
            super.onKeyDownEnter(data, me.selectLastListItem);
        }
    }

    /**
     * List items got created or updated
     * Since the list & inputHint update would run in parallel => before getting the new vnode back
     * this could cause invalid states, so we delay updateTypeAheadValue() until the list is done.
     * @protected
     */
    onListCreateItems() {
        let me = this;

        if (me.typeAhead) {
            if (me.picker && me.picker.mounted) {
                me.updateTypeAheadValue();
            }
        }
    }

    /**
     *
     * @param {Object} record
     */
    onListItemClick(record) {
        let me       = this,
            oldValue = me.value,
            value    = record[me.displayField];

        if (me.value !== value) {
            me.hintRecordId = null;
            me._value       = value;
            me.getInputHintEl().value = null;

            me.afterSetValue(value, oldValue, true); // prevent the list from getting filtered

            me.fire('select', {
                record: record,
                value : record[me.store.keyProperty]
            });
        }
    }

    /**
     *
     * @param {Object} record
     */
    onListItemNavigate(record) {
        this.onListItemClick(record);
    }

    /**
     *
     */
    selectFirstListItem() {
        this.selectListItem(0);
    }

    /**
     *
     */
    selectLastListItem() {
        this.selectListItem(this.store.getCount() -1);
    }

    /**
     * If no index is passed, the index matching to the field input will get used (0 if none)
     * @param {Number} [index]
     */
    selectListItem(index) {
        let me = this;

        if (!Neo.isNumber(index)) {
            if (me.hintRecordId) {
                index = me.store.indexOfKey(me.hintRecordId);
            } else {
                index = 0;
            }
        }

        me.onListItemNavigate(me.store.getAt(index));
        me.list.selectItem(index);
    }

    /**
     *
     * @param {Boolean} [silent=false]
     * @protected
     */
    updateTypeAhead(silent=false) {
        let me      = this,
            inputEl = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].findVdomChild(me.vdom, me.id + '-input'),
            vdom    = me.vdom;

        if (me.typeAhead) {
            inputEl.parentNode.cn[inputEl.index] = {
                tag: 'span',
                cls: ['neo-input-field-wrapper'],
                cn : [{
                    tag         : 'input',
                    autocomplete: 'off',
                    autocorrect : 'off',
                    cls         : ['neo-textfield-input', 'neo-typeahead-input'],
                    id          : me.getInputHintId(),
                    spellcheck  : 'false'
                }, inputEl.vdom]
            }
        } else {
            _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].replaceVdomChild(vdom, inputEl.parentNode.id, inputEl.vdom);
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {String|null} [value]
     * @param {Boolean} [silent=false]
     * @protected
     */
    updateTypeAheadValue(value, silent=false) {
        let me          = this,
            hasMatch    = false,
            store       = me.store,
            i           = 0,
            len         = store.getCount(),
            vdom        = me.vdom,
            inputHintEl = me.getInputHintEl(),
            storeValue;

        if (value === undefined) {
            value = me.value;
        }

        if (value && value.length > 0) {
            for (; i < len; i++) {
                storeValue = store.items[i][me.displayField];

                if (storeValue.toLowerCase().indexOf(value.toLowerCase()) === 0) {
                    hasMatch = true;
                    break;
                }
            }

            if (hasMatch) {
                inputHintEl.value = value + storeValue.substr(value.length);
                me.hintRecordId = store.items[i][store.keyProperty || store.model.keyProperty];
            }
        }

        if (!hasMatch && inputHintEl) {
            inputHintEl.value = '';
            me.hintRecordId = null;
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @protected
     */
    updateValue() {
        let me    = this,
            store = me.store,
            filter;

        if (store && !Neo.isEmpty(store.filters)) {
            filter = store.getFilter(me.displayField);

            if (filter) {
                filter.value = me.value;
            }
        }

        if (me.typeAhead) {
            if (!(me.picker && me.picker.containsFocus)) {
                me.updateTypeAheadValue();
            }
        }
    }
}

/**
 * The select event fires when a list item gets selected
 * @event select
 * @param {Object} record
 * @param {value} record[store.keyProperty]
 * @returns {Object}
 */

Neo.applyClassConfig(Select);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/trigger/Picker.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Picker; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/trigger/Base.mjs");


/**
 * Used by form.field.Picker
 * @class Neo.form.field.trigger.Picker
 * @extends Neo.form.field.trigger.Base
 */
class Picker extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.trigger.Picker'
         * @protected
         */
        className: 'Neo.form.field.trigger.Picker',
        /**
         * @member {String} ntype='trigger-picker'
         * @protected
         */
        ntype: 'trigger-picker',
        /**
         * @member {String|null} iconCls='fa fa-caret-down'
         */
        iconCls: 'fa fa-caret-down',
        /**
         * Internal flag used by field.getTrigger()
         * @member {String} type='picker'
         * @protected
         */
        type: 'picker'
    }}

    onTriggerClick(data) {
        this.field.onPickerTriggerClick();
    }
}

Neo.applyClassConfig(Picker);



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

/***/ "./node_modules/neo.mjs/src/selection/HelixModel.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/HelixModel.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");



/**
 * A selection model intended to use for Neo.component.Helix
 * @class Neo.selection.HelixModel
 * @extends Neo.selection.Model
 */
class HelixModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.HelixModel'
         * @protected
         */
        className: 'Neo.selection.HelixModel',
        /**
         * @member {String} ntype='selection-helixmodel'
         * @protected
         */
        ntype: 'selection-helixmodel',
        /**
         * True to stay in the same column when navigating with the up and down keys,
         * otherwise you will navigate to the next / prev column when moving out
         * @member {boolean} stayInColumn=false
         */
        stayInColumn: false
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
            if (data.path[i].cls.includes('neo-helix-item')) {
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
        this.onNavKeyColumn(1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onNavKeyRow(-1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onNavKeyRow(1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        this.onNavKeyColumn(-1);
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
            itemsPerRow  = parseInt(360 / view.itemAngle),
            stayInColumn = me.stayInColumn,
            index, record;

        step *= itemsPerRow;

        if (selected) {
            index = store.indexOf(selected) + step;
        } else {
            index = 0;
        }

        if (index < 0) {
            if (!stayInColumn) {
                index++;
            }
            while (index < (countRecords - itemsPerRow)) {
                index += itemsPerRow;
            }
        } else if (index >= countRecords) {
            if (!stayInColumn) {
                index--;
            }
            while (index >= itemsPerRow) {
                index -= itemsPerRow;
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
     * @param {Number} step=1
     */
    onNavKeyRow(step=1) {
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
     * @param {Boolean} [toggleSelection=true]
     */
    select(itemId, toggleSelection=true) {
        let me         = this,
            view       = me.view,
            isSelected = toggleSelection === false ? false : me.items.includes(itemId),
            oldItems   = [...me.items],
            deltas     = [];

        if (me.singleSelect) {
            me.items.forEach(item => {
                if (item.id !== itemId) {
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
            id : view.getItemVnodeId(itemId),
            cls: {
                add   : isSelected ? [] : ['neo-selected'],
                remove: isSelected ? ['neo-selected'] : []
            }
        });

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"][isSelected ? 'remove' : 'add'](me.items, itemId);

        // console.log('select', itemId, isSelected, me.items);

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

Neo.applyClassConfig(HelixModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/RowModel.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RowModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");



/**
 * @class Neo.selection.table.RowModel
 * @extends Neo.selection.Model
 */
class RowModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.RowModel'
         * @protected
         */
        className: 'Neo.selection.table.RowModel',
        /**
         * @member {String} ntype='selection-table-rowmodel'
         * @protected
         */
        ntype: 'selection-table-rowmodel',
        /**
         * @member {String} cls='selection-rowmodel'
         * @protected
         */
        cls: 'neo-selection-rowmodel'
    }}

    /**
     *
     */
    addDomListener() {
        let me           = this,
            view         = me.view,
            domListeners = view.domListeners;

        domListeners.push({
            click   : me.onRowClick,
            delegate: '.neo-table-row',
            scope   : me
        });

        view.domListeners = domListeners;
    }

    /**
     * Finds the matching table row for a given row index
     * @param {Number} index row index
     * @returns {String|null} The table row node id
     */
    getRowId(index) {
        if (index < 0 || this.view.store.getCount() < index) {
            return null;
        }

        return this.view.vdom.cn[0].cn[1].cn[index].id;
    }

    /**
     * Finds the matching table row for a given event path
     * @param {Object} path The event path
     * @returns {Object|null} The node containing the table row class or null
     * @protected
     */
    static getRowNode(path) {
        let i    = 0,
            len  = path.length,
            node = null;

        for (; i < len; i++) {
            if (path[i].cls.includes('neo-table-row')) {
                node = path[i];
            }
        }

        return node;
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownDown(data) {
        this.onNavKeyRow(data, 1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownUp(data) {
        this.onNavKeyRow(data, -1);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyRow(data, step) {
        let me         = this,
            node       = RowModel.getRowNode(data.path),
            view       = me.view,
            store      = view.store,
            vdomNode   = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(view.vdom, node.id),
            newIndex   = (vdomNode.index + step) % store.getCount(),
            parentNode = vdomNode.parentNode,
            id;

        while (newIndex < 0) {
            newIndex += store.getCount();
        }

        id = parentNode.cn[newIndex].id;

        if (id) {
            me.select(id);
            view.focus(id);

            view.fire('select', {
                record: store.getAt(newIndex)
            });
        }
    }

    /**
     *
     * @param {Object} data
     */
    onRowClick(data) {
        let me   = this,
            node = RowModel.getRowNode(data.path),
            id   = node && node.id,
            view = me.view;

        if (id) {
            me.toggleSelection(id);

            view.fire(me.isSelected(id) ? 'select' : 'deselect', {
                record: view.store.getAt(_util_VDom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].findVdomChild(view.vdom, id).index)
            });
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
            view.keys._keys.push({
                fn   : 'onKeyDownDown',
                key  : 'Down',
                scope: id
            }, {
                fn   : 'onKeyDownUp',
                key  : 'Up',
                scope: id
            });
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
            view.keys.removeKeys([{
                fn   : 'onKeyDownDown',
                key  : 'Down',
                scope: id
            }, {
                fn   : 'onKeyDownUp',
                key  : 'Up',
                scope: id
            }]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(RowModel);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/Container.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/Container.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _util_Css_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Css.mjs */ "./node_modules/neo.mjs/src/util/Css.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selection/table/RowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs");
/* harmony import */ var _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _View_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View.mjs */ "./node_modules/neo.mjs/src/table/View.mjs");
/* harmony import */ var _header_export_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/_export.mjs */ "./node_modules/neo.mjs/src/table/header/_export.mjs");









/**
 * @class Neo.table.Container
 * @extends Neo.container.Base
 */
class Container extends _container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.Container'
         * @protected
         */
        className: 'Neo.table.Container',
        /**
         * @member {String} ntype='table-container'
         * @protected
         */
        ntype: 'table-container',
        /**
         * todo: testing config, remove when Stores are ready
         * @member {Number} amountRows=20
         */
        amountRows: 20,
        /**
         * Default configs for each column
         * @member {Object} columnDefaults=null
         */
        columnDefaults: null,
        /**
         * todo: testing config, remove when Stores are ready
         * @member {Boolean} createRandomData=false
         */
        createRandomData: false,
        /**
         * @member {Array} cls=['neo-table-container']
         */
        cls: ['neo-table-container'],
        /**
         * @member {Array} columns_=[]
         */
        columns_: [],
        /**
         * Configs for Neo.table.header.Toolbar
         * @member {Object|null} [headerToolbarConfig=null]
         */
        headerToolbarConfig: null,
        /**
         * @member {String|null} headerToolbarId_=null
         */
        headerToolbarId_: null,
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * @member {String} layout='base'
         */
        layout: 'base',
        /**
         * @member {Boolean} scrollbarsCssApplied=false
         * @protected
         */
        scrollbarsCssApplied: false,
        /**
         * @member {Neo.selection.Model} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * @member {Boolean} showHeaderFilters_=false
         */
        showHeaderFilters_: false,
        /**
         * @member {Neo.data.Store} store_=null
         */
        store_: null,
        /**
         * todo: only works for chrome & safari -> add a check
         * @member {Boolean} useCustomScrollbars_=true
         */
        useCustomScrollbars_: true,
        /**
         * Configs for Neo.table.View
         * @member {Object|null} [viewConfig=null]
         */
        viewConfig: null,
        /**
         * @member {String|null} viewId_=null
         * @protected
         */
        viewId_: null,
        /**
         * @member {Array|null} items=null
         * @protected
         */
        items: null,
        /**
         * @member {Object} _vdom={cls: ['neo-table-wrapper'],cn : [{tag: 'table',cn : []}]}
         */
        _vdom: {
            cls: ['neo-table-wrapper'],
            cn : [{
                tag: 'table',
                cn : []
            }]
        }
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.headerToolbarId = Neo.getId('table-header-toolbar');
        me.viewId          = Neo.getId('table-view');

        me.items = [{
            module           : _header_export_mjs__WEBPACK_IMPORTED_MODULE_7__["Toolbar"],
            id               : me.headerToolbarId,
            showHeaderFilters: me.showHeaderFilters,
            ...me.headerToolbarConfig || {}
        }, {
            module     : _View_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            containerId: me.id,
            id         : me.viewId,
            store      : me.store,
            ...me.viewConfig || {}
        }];

        me.vdom.id = me.id + 'wrapper';

        me.createColumns(me.columns);
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

        if (me.createRandomData) {
            // todo: if mounting apply after mount
            setTimeout(() => {
                me.createRandomViewData(me.amountRows);
            }, 50);
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
     * Triggered after the showHeaderFilters config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowHeaderFilters(value, oldValue) {
        if (oldValue !== undefined) {
            Neo.getComponent(this.headerToolbarId).showHeaderFilters = value;
        }
    }

    /**
     * Triggered after the useCustomScrollbars config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetUseCustomScrollbars(value, oldValue) {
        if (value === true) {
            this.vdom.cls = _util_Array_mjs__WEBPACK_IMPORTED_MODULE_3__["default"].union(this.vdom.cls, ['neo-use-custom-scrollbar']);
        }
    }

    /**
     * @protected
     */
    applyCustomScrollbarsCss() {
        let me       = this,
            cssRules = [];

        if (me.dockLeftMargin) {
            cssRules.push('#' + me.id + 'wrapper' + '::-webkit-scrollbar-track:horizontal {margin-left: ' + me.dockLeftMargin + 'px;}');
        }

        if (me.dockRightMargin) {
            cssRules.push('#' + me.id + 'wrapper' + '::-webkit-scrollbar-track:horizontal {margin-right: ' + me.dockRightMargin + 'px;}');
        }
        if (cssRules.length > 0) {
            _util_Css_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].insertRules(cssRules);
        }

        me.scrollbarsCssApplied = true;
    }

    /**
     * Triggered before the columns config gets changed.
     * @param {Array} value
     * @param {Array} oldValue
     * @protected
     */
    beforeSetColumns(value, oldValue) {
        if (this.configsApplied) {
            return this.createColumns(value);
        }

        return value;
    }

    /**
     * Triggered before the headerToolbarId config gets changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetHeaderToolbarId(value, oldValue) {
        return value ? value : oldValue;
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

        return _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].beforeSetInstance(value, _selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_4__["default"]);
    }

    /**
     * Triggered before the store config gets changed.
     * @param {Neo.data.Store} value
     * @param {Neo.data.Store} oldValue
     * @protected
     */
    beforeSetStore(value, oldValue) {
        if (oldValue) {
            oldValue.destroy();
        }

        let me = this;

        value = _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].beforeSetInstance(value, _data_Store_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            listeners: {
                filter      : me.onStoreFilter,
                load        : me.onStoreLoad,
                recordChange: me.onStoreRecordChange,
                scope       : me
            }
        });

        // in case we dynamically change the store, the new needs to get the new reference
        if (me.view) {
            me.view.store = value;
        }

        return value;
    }

    /**
     * Triggered before the viewId config gets changed.
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    beforeSetViewId(value, oldValue) {
        return value ? value : oldValue;
    }

    /**
     *
     * @param columns
     * @returns {*}
     */
    createColumns(columns) {
        let me             = this,
            columnDefaults = me.columnDefaults,
            sorters        = me.store.sorters;

        if (!columns || !columns.length) {
            Neo.logError('Attempting to create a table.Container without defined columns', me.id);
        }

        columns.forEach(column => {
            if (column.dock && !column.width) {
                Neo.logError('Attempting to create a docked column without a defined width', column, me.id);
            }

            if (columnDefaults) {
                Neo.assignDefaults(column, columnDefaults);
            }

            if (sorters && sorters[0]) {
                if (column.dataField === sorters[0].property) {
                    column.isSorted = sorters[0].direction;
                }
            }

            column.listeners = {
                sort : me.onSortColumn,
                scope: me
            };
        });

        me.items[0].items = columns;

        return columns;
    }

    /**
     *
     * @param {Number} countRows
     */
    createRandomViewData(countRows) {
        this.loadData(countRows);
    }

    /**
     * @param {Array} inputData
     */
    createViewData(inputData) {
        let me    = this,
            items = me.items;

        items[1].createViewData(inputData); // todo: save a reference to the view & headerContainer

        if (me.useCustomScrollbars && me.scrollbarsCssApplied === false) {
            me.applyCustomScrollbarsCss();
        }

        me.items = items;
    }

    /**
     * @override
     * @returns {*}
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     * @override
     * @returns {Neo.vdom.VNode}
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     * @param {Number} countRows
     */
    loadData(countRows) {
        let me           = this,
            columns      = me.items[0].items,
            countColumns = columns.length;

        Neo.manager.Store.createRandomData([countColumns, countRows]).then(data => {
            me.createViewData(data);
        }).catch(err => {
            console.log('Error attempting to call createRandomViewData', err, me);
        });
    }

    /**
     *
     * @param {Object} opts
     * @param {String} opts.direction
     * @param {String} opts.property
     * @protected
     */
    onSortColumn(opts) {
        let me = this;

        me.store.sort(opts);
        me.removeSortingCss(opts.property);
        me.onStoreLoad(me.store.items);
    }

    /**
     *
     */
    onStoreFilter() {
        this.onStoreLoad(this.store.items);
    }

    /**
     *
     * @param {Array} data
     * @protected
     */
    onStoreLoad(data) {
        let me = this,
            listenerId;

        if (me.rendered) {
            me.createViewData(data);

            if (me.store.sorters.length < 1) {
                me.removeSortingCss();
            }
        } else {
            listenerId = me.on('rendered', () => {
                me.un('rendered', listenerId);
                setTimeout(() => {
                    me.createViewData(data);
                }, 50);
            });
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
    onStoreRecordChange(opts) {
        Neo.getComponent(this.viewId).onStoreRecordChange(opts);
    }

    /**
     *
     * @param {String} dataField
     * @protected
     */
    removeSortingCss(dataField) {
        this.items[0].items.forEach(column => {
            if (column.dataField !== dataField) {
                column.removeSortingCss();
            }
        });
    }
}

Neo.applyClassConfig(Container);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/View.mjs":
/*!*************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/View.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");


/**
 * @class Neo.table.View
 * @extends Neo.component.Base
 */
class View extends _component_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.View'
         * @protected
         */
        className: 'Neo.table.View',
        /**
         * @member {String} ntype='table-view'
         * @protected
         */
        ntype: 'table-view',
        /**
         * @member {Array} cls=['neo-table-view']
         */
        cls: ['neo-table-view'],
        /**
         * @member {String|null} containerId=null
         * @protected
         */
        containerId: null,
        /**
         * @member {Object} recordVnodeMap={}
         */
        recordVnodeMap: {},
        /**
         * @member {Neo.data.Store|null} store=null
         */
        store: null,
        /**
         * @member {Boolean} useRowRecordIds=true
         */
        useRowRecordIds: true,
        /**
         * @member {Object} _vdom={tag: 'tbody', cn : []}
         */
        _vdom: {
            tag: 'tbody',
            cn : []
        }
    }}

    /**
     * @param {Array} inputData
     */
    createViewData(inputData) {
        let me         = this,
            amountRows = inputData.length,
            container  = Neo.getComponent(me.parentId),
            hasStore   = container.store.model, // todo: remove as soon as all tables use stores (examples table)
            columns    = container.items[0].items,
            colCount   = columns.length,
            data       = [],
            i          = 0,
            vdom       = me.vdom,
            cellCls, cellId, config, column, dockLeftMargin, dockRightMargin, id, index, j, rendererOutput, rendererValue, selectedRows, trCls;

        me.recordVnodeMap = {}; // remove old data

        // console.log('createViewData', me.id, inputData);

        if (container.selectionModel.ntype === 'selection-table-rowmodel') {
            selectedRows = container.selectionModel.items || [];
        }

        for (; i < amountRows; i++) {
            if (me.useRowRecordIds) {
                id = me.id + '-tr-' + inputData[i][me.store.keyProperty];
            } else {
                id = vdom.cn[i] && vdom.cn[i].id || Neo.getId('tr');
            }

            me.recordVnodeMap[id] = i;

            trCls = me.getTrClass(inputData[i], i);

            if (selectedRows && selectedRows.includes(id)) {
                trCls.push('neo-selected');
            }

            data.push({
                tag     : 'tr',
                id      : id,
                cls     : trCls,
                cn      : [],
                tabIndex: '-1'
            });

            dockLeftMargin  = 0;
            dockRightMargin = 0;

            j = 0;

            for (; j < colCount; j++) {
                column         = columns[j];
                rendererValue  = inputData[i][column.dataField];

                if (rendererValue === undefined) {
                    rendererValue = '';
                }

                rendererOutput = column.renderer.call(column.rendererScope || container, {
                    dataField: column.dataField,
                    index    : i,
                    record   : inputData[i],
                    value    : rendererValue
                });

                cellCls = rendererOutput.cls || ['neo-table-cell'];

                if (column.align !== 'left') {
                    cellCls.push('neo-' + column.align);
                }

                if (!Neo.isObject(rendererOutput)) {
                    rendererOutput = {
                        cls : cellCls,
                        html: rendererOutput.toString()
                    };
                }

                // todo: remove the if part as soon as all tables use stores (examples table)
                if (hasStore) {
                    cellId = me.getCellId(inputData[i], column.dataField);
                } else {
                    cellId = vdom.cn[i] && vdom.cn[i].cn[j] && vdom.cn[i].cn[j].id || Neo.getId('td');
                }

                config = {
                    tag      : 'td',
                    id       : cellId,
                    cls      : rendererOutput.cls   || ['neo-table-cell'],
                    innerHTML: rendererOutput.html  || '',
                    style    : rendererOutput.style || {},
                    tabIndex : '-1'
                };

                if (column.dock) {
                    config.cls = ['neo-locked', ...config.cls || []];

                    if (column.dock === 'left') {
                        config.style.left = dockLeftMargin + 'px';
                        dockLeftMargin += (column.width + 1); // todo: borders fix
                    }
                }

                data[i].cn.push(config);
            }

            j = 0;

            for (; j < colCount; j++) {
                index  = colCount - j -1;
                column = columns[index];

                if (column.dock === 'right') {
                    data[i].cn[index].style.right = dockRightMargin + 'px';
                    dockRightMargin += (column.width + 1); // todo: borders fix
                }
            }
        }

        vdom.cn = data;

        container.dockLeftMargin  = dockLeftMargin;
        container.dockRightMargin = dockRightMargin;

        me.vdom = vdom;
    }

    /**
     *
     * @param {Boolean} updateParentVdom
     * @param {Boolean} silent
     */
    destroy(updateParentVdom, silent) {
        this.store = null;
        super.destroy(updateParentVdom, silent);
    }

    /**
     *
     * @param {Object} record
     * @param {String} dataField
     * @returns {String}
     */
    getCellId(record, dataField) {
        return this.id + '__' + record[this.store.keyProperty] + '__' + dataField;
    }

    /**
     * Override this method to apply custom CSS rules to table rows
     * @param {Object} record
     * @param {Number} rowIndex
     * @returns {String[]}
     */
    getTrClass(record, rowIndex) {
        return ['neo-table-row'];
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
    onStoreRecordChange(opts) {
        let me       = this,
            cellId   = me.getCellId(opts.record, opts.field),
            cellNode = me.getVdomChild(cellId);

        cellNode.innerHTML = opts.value; // keep the vdom in sync

        Neo.currentWorker.promiseMessage('main', {
            action: 'updateDom',
            deltas: [{
                id       : cellId,
                innerHTML: opts.value
            }]
        });
    }
}

Neo.applyClassConfig(View);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/header/Button.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/header/Button.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");




/**
 * @class Neo.table.header.Button
 * @extends Neo.button.Base
 */
class Button extends _button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getStaticConfig() {return {
        /**
         * Valid values for align
         * @member {String[]} alignValues: ['left', 'center', 'right']
         * @protected
         * @static
         */
        alignValues: ['left', 'center', 'right']
    }}

    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.header.Button'
         * @protected
         */
        className: 'Neo.table.header.Button',
        /**
         * @member {String} ntype='table-header-button'
         * @protected
         */
        ntype: 'table-header-button',
        /**
         * Alignment of the matching table cells. Valid values are left, center, right
         * @member {String} align_='left'
         */
        align_: 'left',
        /**
         * @member {Array} cls=['neo-table-header-button']
         */
        cls: ['neo-table-header-button'],
        /**
         * @member {String|null} dataField=null
         */
        dataField: null,
        /**
         * Sort direction when clicking on an unsorted button
         * @member {String} defaultSortDirection='ASC'
         */
        defaultSortDirection: 'ASC',
        /**
         * @member {Boolean} draggable_=true
         */
        draggable_: true,
        /**
         * @member {Object} editorConfig=null
         */
        editorConfig: null,
        /**
         * @member {Object} filterConfig=null
         */
        filterConfig: null,
        /**
         * @member {Neo.form.field.Base|null} filterField=null
         * @protected
         */
        filterField: null,
        /**
         * @member {String} iconCls='fa fa-arrow-circle-up'
         */
        iconCls: 'fa fa-arrow-circle-up',
        /**
         * @member {String} iconPosition='right'
         */
        iconPosition: 'right',
        /**
         * 'ASC', 'DESC' or null
         * @member {String|null} isSorted_=null
         * @protected
         */
        isSorted_: null,
        /**
         * Scope to execute the column renderer.
         * Defaults to the matching table.Container
         * @member {Neo.core.Base|null} rendererScope=null
         */
        rendererScope: null,
        /**
         * @member {Boolean} showHeaderFilter_=false
         */
        showHeaderFilter_: false,
        /**
         * @member {String} _vdom
         */
        _vdom: {
            tag: 'th',
            cn : [{
                tag: 'button',
                cn : [{
                    tag: 'span',
                    cls: ['neo-button-glyph']
                },{
                    tag: 'span',
                    cls: ['neo-button-text']
                }]
            }]
        }
    }}

    /**
     * Specify a different vdom root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVnodeRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     * Specify a different vnode root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVdomRoot() as well, to keep the vdom & vnode trees in sync.
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

        let me        = this,
            listeners = {
                click: me.onButtonClick,
                scope: me
            };

        if (me.draggable) {
            Object.assign(listeners, {
                dragend  : me.onDragEnd,
                dragenter: me.onDragEnter,
                dragleave: me.onDragLeave,
                dragover : me.onDragOver,
                dragstart: me.onDragStart,
                drop     : me.onDrop,
            });
        }

        me.domListeners = listeners;
    }

    /**
     * Triggered after the draggable config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetDraggable(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (value === true) {
            me.getVdomRoot().draggable = true;
        } else {
            delete me.getVdomRoot().draggable;
        }

        me.vdom = vdom;
    }

    /**
     * Triggered after the isSorted config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetIsSorted(value, oldValue) {
        let me        = this,
            cls       = me.cls,
            container = me.up('table-container');

        switch(value) {
            case null:
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-hidden');
                break;
            case 'ASC':
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-desc');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-hidden');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-asc');
                break;
            case 'DESC':
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-asc');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-sort-hidden');
                _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-desc');
                break;
        }

        me.cls = cls;

        // testing check until all example tables have a store
        if (!container || !container.store) {
            return;
        }

        if (me.mounted) {
            me.fire('sort', {
                direction: value,
                property : me.dataField
            });
        }
    }

    /**
     * Triggered after the showHeaderFilter config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowHeaderFilter(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (value) {
            if (!me.filterField) {
                me.filterField = Neo.create({
                    module   : _form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
                    flag     : 'filter-field',
                    hideLabel: true,
                    parentId : me.id,

                    listeners: {
                        change        : me.changeFilterValue,
                        operatorChange: me.changeFilterOperator,
                        scope         : me
                    },

                    style: {
                        marginLeft : '.5em',
                        marginRight: '.5em'
                    },
                    ...me.editorConfig || {}
                });

                me.vdom.cn.push(me.filterField.vdom);
            } else {
                delete me.filterField.vdom.removeDom;
            }
        } else if (me.filterField) {
            me.filterField.vdom.removeDom = true;
        }

        me.vdom = vdom;
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
    destroy(...args) {
        if (this.filterField) {
            this.filterField.destroy();
        }

        super.destroy(...args);
    }

    /**
     * @protected
     */
    onButtonClick() {
        let me = this,
            map;

        if (me.defaultSortDirection === 'DESC') {
            map = {
                ASC : null,
                DESC: 'ASC',
                null: 'DESC'
            };
        } else {
            map = {
                ASC : 'DESC',
                DESC: null,
                null: 'ASC'
            };
        }

        me.isSorted = map[me.isSorted + ''];
    }

    /**
     * @protected
     */
    onDragEnd() {
        let me    = this,
            style = me.style;

        delete style.opacity;
        me.style = style;
    }

    /**
     * @protected
     */
    onDragEnter() {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-drag-over');
        me.cls = cls;
    }

    /**
     * @protected
     */
    onDragLeave() {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].remove(cls, 'neo-drag-over');
        me.cls = cls;
    }

    /**
     *
     * @param {Object} event
     */
    onDragOver(event) {
        //console.log('onDragOver', event);
    }

    /**
     * @protected
     */
    onDragStart() {
        let me    = this,
            style = me.style;

        style.opacity = 0.4;
        me.style = style;
    }

    /**
     *
     * @param {Object} data
     */
    onDrop(data) {
        let me             = this,
            headerToolbar  = Neo.getComponent(me.parentId),
            tableContainer = Neo.getComponent(headerToolbar.parentId);

        delete Neo.getComponent(data.srcId).getVdomRoot().style.opacity;

        me.onDragLeave();
        headerToolbar.switchItems(me.id, data.srcId);
        tableContainer.createViewData(tableContainer.store.data);
    }

    /**
     *
     * @param {Object} data
     */
    changeFilterOperator(data) {
        let me             = this,
            tableContainer = me.up('table-container'),
            store          = tableContainer && tableContainer.store,
            operator       = data.value,
            filter, filters;

        if (store) {
            filter = store.getFilter(me.dataField);

            if (!filter) {
                filters = store.filters;

                filters.push({
                    property: me.dataField,
                    operator: operator,
                    value   : null,
                    ...me.filterConfig || {}
                });

                store.filters = filters;
            } else {
                filter.operator = operator;
            }
        }
    }

    /**
     *
     * @param {Object} data
     */
    changeFilterValue(data) {
        let me             = this,
            tableContainer = me.up('table-container'),
            store          = tableContainer && tableContainer.store,
            value          = data.value,
            field, filter, filters, model;

        if (store) {
            filter = store.getFilter(me.dataField);
            model  = store.model;
            field  = model && model.getField(me.dataField);

            if (value && field.type.toLowerCase() === 'date') {
                value = new Date(value);
            }

            if (!filter) {
                filters = store.filters;

                filters.push({
                    property: me.dataField,
                    operator: 'like',
                    value   : value,
                    ...me.filterConfig || {}
                });

                store.filters = filters;
            } else {
                filter.value = value;
            }
        }
    }

    /**
     * @protected
     */
    removeSortingCss() {
        let me  = this,
            cls = me.cls;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].add(cls, 'neo-sort-hidden');

        me.cls       = cls;
        me._isSorted = null;
    }

    /**
     *
     * @param {Object} data
     * @param {String} data.dataField
     * @param {Number} data.index
     * @param {Object} data.record
     * @param {Number|String} data.value
     * @returns {*}
     */
    renderer(data) {
        return data.value;
    }
}

Neo.applyClassConfig(Button);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/header/Toolbar.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/header/Toolbar.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbar; });
/* harmony import */ var _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../container/Toolbar.mjs */ "./node_modules/neo.mjs/src/container/Toolbar.mjs");


/**
 * @class Neo.table.header.Toolbar
 * @extends Neo.container.Toolbar
 */
class Toolbar extends _container_Toolbar_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.table.header.Toolbar'
         * @protected
         */
        className: 'Neo.table.header.Toolbar',
        /**
         * @member {String} ntype='table-header-toolbar'
         * @protected
         */
        ntype: 'table-header-toolbar',
        /**
         * @member {Array} cls=['table-header-toolbar']
         */
        cls: ['table-header-toolbar'],
        /**
         * @member {String} layout='base'
         */
        layout: 'base',
        /**
         * @member {Object} itemDefaults={ntype : 'table-header-button'}
         */
        itemDefaults: {
            ntype : 'table-header-button'
        },
        /**
         * @member {Boolean} showHeaderFilters_=false
         */
        showHeaderFilters_: false,
        /**
         * @member {Object} _vdom={tag: 'thead',cn : [{tag: 'tr',cn : []}]}
         */
        _vdom: {
            tag: 'thead',
            cn : [{
                tag: 'tr',
                cn : []
            }]
        }
    }}

    /**
     * Triggered after the showHeaderFilters config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetShowHeaderFilters(value, oldValue) {
        if (oldValue !== undefined) {
            let me   = this,
                vdom = me.vdom;

            me.items.forEach(item => {
                item.setSilent({
                    showHeaderFilter: value
                });
            });

            me.vdom = vdom;
        }
    }

    /**
     *
     * @param {String} dock
     * @returns {String} layoutConfig
     * @override
     */
    getLayoutConfig(dock) {
        return 'base';
    }

    /**
     * Specify a different vdom items root if needed (useful in case this container uses a wrapper node).
     * @returns {Object} The new vdom items root
     */
    getVdomItemsRoot() {
        return this.vdom.cn[0].cn;
    }

    /**
     * Specify a different vdom root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVnodeRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vdom root
     */
    getVdomRoot() {
        return this.vdom.cn[0];
    }

    /**
     * Specify a different vnode root if needed to apply the top level style attributes on a different level.
     * Make sure to use getVdomRoot() as well, to keep the vdom & vnode trees in sync.
     * @returns {Object} The new vnode root
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0];
    }

    /**
     *
     */
    createItems() {
        let me = this;

        me.itemDefaults.showHeaderFilter = me.showHeaderFilters;

        super.createItems();

        let dockLeftWidth  = 0,
            dockRightWidth = 0,
            items          = me.items,
            len            = items.length,
            vdom           = me.vdom,
            style;

        items.forEach((item, index) => {
            style = item.wrapperStyle;

            // todo: only add px if number
            if (item.maxWidth) {style.maxWidth = item.maxWidth + 'px'}
            if (item.minWidth) {style.minWidth = item.minWidth + 'px'}
            if (item.width)    {style.width    = item.width + 'px'}

            if (item.dock) {
                item.vdom.cls = ['neo-locked'];

                if (item.dock === 'left') {
                    style.left = dockLeftWidth + 'px';
                }

                dockLeftWidth += (item.width + 1); // todo: borders fix
            } else {
                item.vdom.cls = []; // remove the button cls from the th tag
            }

            item.wrapperStyle = style;

            // inverse loop direction
            item = items[len - index -1];

            if (item.dock === 'right') {
                style = item.wrapperStyle;
                style.right = dockRightWidth + 'px';

                item.wrapperStyle = style;

                dockRightWidth += (item.width + 1); // todo: borders fix
            }
        });

        me.vdom = vdom;
    }
}

Neo.applyClassConfig(Toolbar);



/***/ }),

/***/ "./node_modules/neo.mjs/src/table/header/_export.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/neo.mjs/src/table/header/_export.mjs ***!
  \***********************************************************/
/*! exports provided: Button, Toolbar */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.mjs */ "./node_modules/neo.mjs/src/table/header/Button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_mjs__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.mjs */ "./node_modules/neo.mjs/src/table/header/Toolbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _Toolbar_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Css.mjs":
/*!***********************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Css.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * @class Neo.util.Css
 * @extends Neo.core.Base
 */
class Css extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Css'
         * @protected
         */
        className: 'Neo.util.Css'
    }}

    /**
     *
     * @param {Array} rules
     */
    static insertRules(rules) {
        Neo.main.addon.Stylesheet.insertCssRules({
            rules: rules
        }).then(function(data) {
            // console.log('inserted CSS rules', data);
        }).catch(function(err) {
            console.log('App: Got error attempting to insert CSS rules', err, rules);
        });
    }
}

Neo.applyClassConfig(Css);

/* harmony default export */ __webpack_exports__["default"] = (Css);

/***/ }),

/***/ "./node_modules/neo.mjs/src/util/Matrix.mjs":
/*!**************************************************!*\
  !*** ./node_modules/neo.mjs/src/util/Matrix.mjs ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Base.mjs */ "./node_modules/neo.mjs/src/core/Base.mjs");


/**
 * Utility class for Matrix based calculations
 * @class Neo.util.Matrix
 * @extends Neo.core.Base
 */
class Matrix extends _core_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.util.Matrix'
         * @protected
         */
        className: 'Neo.util.Matrix',
        /**
         * @member {Array|null} items_=null
         * @protected
         */
        items_: null
    }}

    /**
     * Returns the element (i,j) of the matrix
     * @param i
     * @param j
     * @returns {*}
     */
    getElement(i, j) {
        let items = this.items;

        if (i < 1 || i > items.length || j < 1 || j > items[0].length) {
            return null;
        }

        return items[i - 1][j - 1];
    }

    /**
     * shortcut for getElement
     */
    e(i, j) {
        return this.getElement(i, j);
    }

    /**
     * Returns the result of multiplying the matrix from the right by the argument.
     * @param matrix
     * @returns {*}
     */
    multiply(matrix) {
        let me    = this,
            M     = matrix.items || matrix,
            items = me.items,
            ni    = items.length,
            ki    = ni,
            kj    = M[0].length,
            cols  = items[0].length,
            els   = [],
            c, i, j, nc, nj, sum;

        do {
            i      = ki - ni;
            els[i] = [];
            nj     = kj;

            do { j = kj - nj;
                sum = 0;
                nc  = cols;

                do {
                    c = cols - nc;
                    sum += items[i][c] * M[c][j];
                } while (--nc);
                els[i][j] = sum;
            } while (--nj);
        } while (--ni);

        matrix.items = els;

        return matrix;
    }

    /**
     * shortcut for multiply
     */
    x(matrix) {
        return this.multiply(matrix);
    }

    /**
     *
     * @param t
     * @returns {*}
     */
    static rotateX(t) {
        let c = Math.cos(t),
            s = Math.sin(t);

        return [
            [1, 0,  0, 0],
            [0, c, -s, 0],
            [0, s,  c, 0],
            [0, 0,  0, 1]
        ];
    }

    /**
     *
     * @param t
     * @returns {*}
     */
    static rotateY(t) {
        let c = Math.cos(t),
            s = Math.sin(t);

        return [
            [c, 0, -s, 0],
            [0, 1,  0, 0],
            [s, 0,  c, 0],
            [0, 0,  0, 1]
        ];
    }

    /**
     *
     * @param t
     * @returns {*}
     */
    static rotateZ(t) {
        let c = Math.cos(t),
            s = Math.sin(t);

        return [
            [c, -s, 0, 0],
            [s,  c, 0, 0],
            [0,  0, 1, 0],
            [0,  0, 0, 1]
        ];
    }

    /**
     *
     */
    getTransformStyle() {
        let me = this,
            p  = 10, // precision
            s;

        s  = 'matrix3d(';
        s += me.e(1,1).toFixed(p) + ',' + me.e(1,2).toFixed(p) + ',' + me.e(1,3).toFixed(p) + ',' + me.e(1,4).toFixed(p) + ',';
        s += me.e(2,1).toFixed(p) + ',' + me.e(2,2).toFixed(p) + ',' + me.e(2,3).toFixed(p) + ',' + me.e(2,4).toFixed(p) + ',';
        s += me.e(3,1).toFixed(p) + ',' + me.e(3,2).toFixed(p) + ',' + me.e(3,3).toFixed(p) + ',' + me.e(3,4).toFixed(p) + ',';
        s += me.e(4,1).toFixed(p) + ',' + me.e(4,2).toFixed(p) + ',' + me.e(4,3).toFixed(p) + ',' + me.e(4,4).toFixed(p);
        s += ')';

        return s;
    }
}

Neo.applyClassConfig(Matrix);

/* harmony default export */ __webpack_exports__["default"] = (Matrix);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0JveExhYmVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0dhbGxlcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvSGVsaXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L3dyYXBwZXIvTWFwYm94R0wubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1BpY2tlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlbGVjdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9QaWNrZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvU3BpbkRvd24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvU3BpblVwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL1NwaW5VcERvd24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vR2FsbGVyeU1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL0hlbGl4TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vdGFibGUvUm93TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWJsZS9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWJsZS9WaWV3Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvaGVhZGVyL0J1dHRvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYmxlL2hlYWRlci9Ub29sYmFyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvaGVhZGVyL19leHBvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0Nzcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvTWF0cml4Lm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFLO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUscUVBQU0sRSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcC1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbC5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhIGJvcmRlcmVkIGxhYmVsIHdpdGggYSB0ZXh0XG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5Cb3hMYWJlbFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5MYWJlbFxuICovXG5jbGFzcyBCb3hMYWJlbCBleHRlbmRzIExhYmVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5Cb3hMYWJlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5Cb3hMYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdib3gtbGFiZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYm94LWxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tbGFiZWwnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1ib3gtbGFiZWwnLCAnbmVvLWxhYmVsJ11cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCb3hMYWJlbCk7XG5cbmV4cG9ydCB7Qm94TGFiZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnXG5pbXBvcnQgQ29tcG9uZW50ICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IEdhbGxlcnlNb2RlbCAgICBmcm9tICcuLi9zZWxlY3Rpb24vR2FsbGVyeU1vZGVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vZGF0YS9TdG9yZS5tanMnO1xuXG5jb25zdCBpdGVtc01vdW50ZWQgPSBTeW1ib2wuZm9yKCdpdGVtc01vdW50ZWQnKTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5HYWxsZXJ5XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgR2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuR2FsbGVyeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5HYWxsZXJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2dhbGxlcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZ2FsbGVyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYW1vdW50IG9mIHZpc2libGUgcm93cyBpbnNpZGUgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhbW91bnRSb3dzXz0zXG4gICAgICAgICAqL1xuICAgICAgICBhbW91bnRSb3dzXzogMyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBnYWxsZXJ5IGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhY2tncm91bmRDb2xvcl89JyMwMDAwMDAnXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfOiAnIzAwMDAwMCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgZGlzYWJsZXMgc2VsZWN0aW9uIG9mICBnYWxsZXJ5IGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpc2FibGVTZWxlY3Rpb249ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltYWdlIGhlaWdodCBvZiB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGltYWdlSGVpZ2h0PTE2MFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VIZWlnaHQ6IDE2MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSB3aWR0aCBvZiB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGltYWdlV2lkdGg9MTIwXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZVdpZHRoOiAxMjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1UcGxfXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtVHBsXzoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWdhbGxlcnktaXRlbScsICdpbWFnZS13cmFwJywgJ3ZpZXcnLCAnbmVvLXRyYW5zaXRpb24tMTAwMCddLFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0td3JhcHBlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCBhbW91bnQgb2Ygc3RvcmUgaXRlbXMgdG8gc2hvd1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEl0ZW1zXz0zMDBcbiAgICAgICAgICovXG4gICAgICAgIG1heEl0ZW1zXzogMzAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHpvb21pbmcgZmFjdG9yIHdoaWNoIHJlcGxhY2VzIHRoZSBkZWZhdWx0IHdoZWVsRGVsdGEuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VXaGVlbERlbHRhWD0xMFxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbERlbHRhWDogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFZPTEwXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRGVsdGFZOiAxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtb3VzZSB3aGVlbCBzaG91bGQgY2hhbmdlIHRoZSB0cmFuc2xhdGVaIHZhbHVlIGZvciB6b29taW5nXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdXNlV2hlZWxFbmFibGVkXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRW5hYmxlZF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0SGVpZ2h0IG9mIHRoZSB0b3AgbGV2ZWwgZGl2LlxuICAgICAgICAgKiBHZXRzIGZldGNoZWQgYWZ0ZXIgdGhlIGdhbGxlcnkgZ290IG1vdW50ZWQuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBvZmZzZXRIZWlnaHQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRIZWlnaHQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0V2lkdGggb2YgdGhlIHRvcCBsZXZlbCBkaXYuXG4gICAgICAgICAqIEdldHMgZmV0Y2hlZCBhZnRlciB0aGUgZ2FsbGVyeSBnb3QgbW91bnRlZC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IG9mZnNldFdpZHRoPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0V2lkdGg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSB0byBvcmRlciB0aGUgaXRlbXMgYnkgcm93IGluc3RlYWQgb2YgYnkgY29sdW1uXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9yZGVyQnlSb3dfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBvcmRlckJ5Um93XzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIHJ1bGUgZm9yIHNlbGVjdGVkIGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc2VsZWN0ZWRJdGVtQ2xzPSduZW8tc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZEl0ZW1DbHM6ICduZW8tc2VsZWN0ZWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdXNlcyB0aGUgc2VsZWN0aW9uLkdhbGxlcnlNb2RlbCBieSBkZWZhdWx0XG4gICAgICAgICAqIEBtZW1iZXIge05lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsfG51bGx9IHNlbGVjdGlvbk1vZGVsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25Nb2RlbF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSBpbnNpZGUgdGhlIG1pZGRsZSBvZiB0aGUgc3RvcmUgaXRlbXMgb24gbW91bnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2VsZWN0T25Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RPbk1vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0b3JlIGluc3RhbmNlIG9yIGNsYXNzIGNvbnRhaW5pbmcgdGhlIGRhdGEgZm9yIHRoZSBnYWxsZXJ5IGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsIC8vIHRvZG86IHVzZSBhIHN0b3JlIG9uY2UgY29sbGVjaXRvbnMgYXJlIGludGVncmF0ZWRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzZXRUaW1lb3V0KCkgaWRzIGZvciBjYWxscyB3aGljaCBjYW4gZ2V0IGNhbmNlbGxlZFxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gdHJhbnNpdGlvblRpbWVvdXRzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zaXRpb25UaW1lb3V0czogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBvZiB0aGUgdmlldyBvcmlnaW5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVYXz0wXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVYXzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIG9mIHRoZSB2aWV3IG9yaWdpblxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVlfPTBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVlfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgb2YgdGhlIHZpZXcgb3JpZ2luXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWl89MFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWl86IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY2xzICAgICA6IFsncGFnZScsICd2aWV3J10sXG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNscyAgOiBbJ29yaWdpbicsICd2aWV3J10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWydjYW1lcmEnLCAndmlldyddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnZG9sbHknLCAndmlldyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gICA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsndmlldyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiAgIDogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBvcmlnaW4gICAgICAgPSB2ZG9tLmNuWzBdLFxuICAgICAgICAgICAgY2FtZXJhICAgICAgID0gb3JpZ2luLmNuWzBdLFxuICAgICAgICAgICAgZG9sbHkgICAgICAgID0gY2FtZXJhLmNuWzBdLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gZG9sbHkuY25bMF07XG5cbiAgICAgICAgbWVbaXRlbXNNb3VudGVkXSA9IGZhbHNlO1xuXG4gICAgICAgIGNhbWVyYS5pZCA9IG1lLmlkICsgJ19fJyArICdjYW1lcmEnO1xuICAgICAgICBkb2xseSAuaWQgPSBtZS5pZCArICdfXycgKyAnZG9sbHknO1xuICAgICAgICBvcmlnaW4uaWQgPSBtZS5pZCArICdfXycgKyAnb3JpZ2luJztcbiAgICAgICAgdmlldyAgLmlkID0gbWUuaWQgKyAnX18nICsgJ3ZpZXcnO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2hlZWw6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25Nb3VzZVdoZWVsLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvYWQgZGF0YSBmb3IgdGhlIGV4YW1wbGUgY29sbGVjdGlvblxuICAgICAgICBpZiAoIShtZS5zdG9yZSBpbnN0YW5jZW9mIFN0b3JlKSkge1xuICAgICAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICAgICAgaW5zaWRlTmVvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybCAgICAgIDogJy4uLy4uL3Jlc291cmNlcy9leGFtcGxlcy9kYXRhL2FpX2NvbnRhY3RzLmpzb24nXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uLmRhdGE7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIHRvZG86IHJlbmRlcmluZyBjaGVja1xuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5zZWxlY3RPbk1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldE1vdW50ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZvciBOZW8uWGhyLnJlcXVlc3QnLCBlcnIsIG1lLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhbW91bnRSb3dzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFtb3VudFJvd3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNOdW1iZXIob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5hZnRlclNldE9yZGVyQnlSb3cobWUub3JkZXJCeVJvdywgIW1lLm9yZGVyQnlSb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhJdGVtIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5kZXN0cm95SXRlbXModmFsdWUsIG9sZFZhbHVlIC0gdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcyhvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICAgOiAncmVhZERvbScsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0SGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdvZmZzZXRXaWR0aCdcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9mZnNldEhlaWdodCA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9mZnNldFdpZHRoICA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuc2VsZWN0T25Nb3VudCB8fCBtZS5zZWxlY3Rpb25Nb2RlbC5oYXNTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IG1lLnNlbGVjdGlvbk1vZGVsLmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgICAgICA9IHNlbGVjdGlvbi5sZW5ndGggPiAwICYmIHNlbGVjdGlvblswXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludChNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSkgLyBtZS5hbW91bnRSb3dzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IG1lLnN0b3JlLmdldEtleUF0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLml0ZW1zID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG9yZGVyQnlSb3cgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRPcmRlckJ5Um93KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLml0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgdmlldyA9IG1lLmdldEl0ZW1zUm9vdCgpO1xuXG4gICAgICAgICAgICBpZiAobWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICBtZS5yZWZyZXNoSW1hZ2VSZWZsZWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5jbltpXS5zdHlsZS50cmFuc2Zvcm0gPSBtZS5nZXRJdGVtVHJhbnNmb3JtKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc20gPSBtZS5zZWxlY3Rpb25Nb2RlbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNtLmhhc1NlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUub25TZWxlY3Rpb25DaGFuZ2Uoc20uaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFN0b3JlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBpZiBjaGVjayBvbmNlIGFsbCBkZW1vcyB1c2Ugc3RvcmVzIChpbnN0ZWFkIG9mIGNvbGxlY3Rpb25zKVxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIFN0b3JlLCB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICA6IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA6IG1lLm9uU3RvcmVMb2FkLFxuICAgICAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0LFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICA6IHtcbiAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0LFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZnRlclNldFRyYW5zbGF0ZVgoKSB7dGhpcy5tb3ZlT3JpZ2luKCk7fVxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWSgpIHt0aGlzLm1vdmVPcmlnaW4oKTt9XG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVaKCkge3RoaXMubW92ZU9yaWdpbigpO31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYmVmb3JlR2V0SXRlbVRwbCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh0aGlzLl9pdGVtVHBsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIEdhbGxlcnlNb2RlbCwge1xuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLm9uU2VsZWN0aW9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgIDogdGhpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBnZXQgZGlmZmVyZW50IGl0ZW0tbWFya3Vwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbWFnZVZkb20gPSB2ZG9tSXRlbS5jblswXS5jblswXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIGltYWdlVmRvbS5zcmMgPSBOZW8uY29uZmlnLnJlc291cmNlc1BhdGggKyAnZXhhbXBsZXMvJyArIHJlY29yZC5pbWFnZTtcblxuICAgICAgICBpbWFnZVZkb20uc3R5bGUuaGVpZ2h0ID0gbWUuaW1hZ2VIZWlnaHQgKyAncHgnO1xuICAgICAgICBpbWFnZVZkb20uc3R5bGUud2lkdGggID0gbWUuaW1hZ2VXaWR0aCAgKyAncHgnO1xuXG4gICAgICAgIHJldHVybiB2ZG9tSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXhdIHRoZSBzdGFydCBpbmRleCBmb3IgY3JlYXRpbmcgaXRlbXMsXG4gICAgICogZS5nLiBpbmNyZWFzaW5nIG1heEl0ZW1zIG9ubHkgbmVlZHMgdG8gY3JlYXRlIHRoZSBuZXcgb25lc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcyhzdGFydEluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgICAgICAgPSBtZS5hbW91bnRSb3dzLFxuICAgICAgICAgICAgb3JkZXJCeVJvdyAgICAgICA9IG1lLm9yZGVyQnlSb3csXG4gICAgICAgICAgICBzZWNvbmRMYXN0Q29sdW1uID0gYW1vdW50Um93cyAtIDEsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGl0ZW1zUm9vdCAgICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICAgPSBzdGFydEluZGV4IHx8IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLml0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICBhbW91bnRDb2x1bW5zLCBpdGVtLCB2ZG9tSXRlbTtcblxuICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgYW1vdW50Q29sdW1ucyA9IE1hdGguY2VpbChtZS5zdG9yZS5nZXRDb3VudCgpIC8gYW1vdW50Um93cyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtICAgICAgPSBtZS5zdG9yZS5pdGVtc1tpXTtcbiAgICAgICAgICAgIHZkb21JdGVtICA9IG1lLmNyZWF0ZUl0ZW0obWUuaXRlbVRwbCwgaXRlbSwgaSk7XG5cbiAgICAgICAgICAgIHZkb21JdGVtLiBzdHlsZSA9IHZkb21JdGVtLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgICAgICB2ZG9tSXRlbS5zdHlsZVsndHJhbnNmb3JtJ10gPSBtZS5nZXRJdGVtVHJhbnNmb3JtKGkpO1xuXG4gICAgICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgICAgIGlmIChpID49IHNlY29uZExhc3RDb2x1bW4gKiBhbW91bnRDb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tSXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBhbW91bnRSb3dzID09PSBzZWNvbmRMYXN0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tSXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXNSb290LmNuLnB1c2godmRvbUl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUodmRvbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZVtpdGVtc01vdW50ZWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXhdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFthbW91bnRJdGVtc11cbiAgICAgKi9cbiAgICBkZXN0cm95SXRlbXMoc3RhcnRJbmRleCwgYW1vdW50SXRlbXMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY291bnRJdGVtcyAgID0gYW1vdW50SXRlbXMgfHwgbWUuc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG1lLnNlbGVjdGlvbk1vZGVsLml0ZW1zWzBdO1xuXG4gICAgICAgIG1lLmdldEl0ZW1zUm9vdCgpLmNuLnNwbGljZShzdGFydEluZGV4IHx8IDAsIGNvdW50SXRlbXMpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwuaGFzU2VsZWN0aW9uKCkgJiYgc2VsZWN0ZWRJdGVtID4gc3RhcnRJbmRleCAmJiBzZWxlY3RlZEl0ZW0gPCBzdGFydEluZGV4ICsgY291bnRJdGVtcykge1xuICAgICAgICAgICAgbWUuYWZ0ZXJTZXRNb3VudGVkKHRydWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcltdfVxuICAgICAqL1xuICAgIGdldENhbWVyYVRyYW5zZm9ybUZvckNlbGwoaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgID0gbWUuYW1vdW50Um93cyxcbiAgICAgICAgICAgIGltYWdlV2lkdGggID0gbWUuaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgIGdhcCAgICAgICAgID0gMTAsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA9IG1lLm9mZnNldEhlaWdodCAvIChhbW91bnRSb3dzICsgMiksXG4gICAgICAgICAgICBzcGFjaW5nICAgICA9IGhlaWdodCArIGdhcCxcbiAgICAgICAgICAgIHggICAgICAgICAgID0gTWF0aC5mbG9vcihpbmRleCAvIGFtb3VudFJvd3MpLFxuICAgICAgICAgICAgeSAgICAgICAgICAgPSBpbmRleCAtIHggKiBhbW91bnRSb3dzO1xuXG4gICAgICAgIGlmIChtZS5vcmRlckJ5Um93KSB7XG4gICAgICAgICAgICBsZXQgYW1vdW50Q29sdW1ucyA9IE1hdGguY2VpbChNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSkgLyBhbW91bnRSb3dzKTtcblxuICAgICAgICAgICAgeCA9IGluZGV4ICUgYW1vdW50Q29sdW1ucztcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKGluZGV4IC8gYW1vdW50Q29sdW1ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3ggPSB4ICogKGltYWdlV2lkdGggKyAxMCksXG4gICAgICAgICAgICBjeSA9ICh5ICsgMC41KSAqIHNwYWNpbmcgKiAxLjEgKyA1MDtcblxuICAgICAgICByZXR1cm4gWy1jeCwgLWN5LCAwXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge051bWJlcn0gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZub2RlSWQuc3BsaXQoJ19fJylbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZkb20gbm9kZSBjb250YWluaW5nIHRoZSBnYWxsZXJ5IGl0ZW1zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGdldEl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbVRyYW5zZm9ybShpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbW91bnRSb3dzID0gbWUuYW1vdW50Um93cyxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKG1lLm9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGFtb3VudFJvd3MgPSBNYXRoLmNlaWwoTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpIC8gYW1vdW50Um93cyk7XG5cbiAgICAgICAgICAgIHggPSBpbmRleCAlIGFtb3VudFJvd3M7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihpbmRleCAvIGFtb3VudFJvd3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoaW5kZXggLyBhbW91bnRSb3dzKTtcbiAgICAgICAgICAgIHkgPSBpbmRleCAlIGFtb3VudFJvd3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUzZChcbiAgICAgICAgICAgIHggKiAobWUuaW1hZ2VXaWR0aCAgKyAxMCksXG4gICAgICAgICAgICB5ICogKG1lLmltYWdlSGVpZ2h0ICsgMTApICsgMTAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtVm5vZGVJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vdmVPcmlnaW4oKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uc3R5bGUudHJhbnNmb3JtID0gbWUudHJhbnNsYXRlM2QobWUudHJhbnNsYXRlWCwgbWUudHJhbnNsYXRlWSwgbWUudHJhbnNsYXRlWik7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmUoZGF0YS5pZCA9PT0gdGhpcy5pZCA/ICdjb250YWluZXJDbGljaycgOiAnaXRlbUNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTW91c2VXaGVlbChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWCAgICAgPSBkYXRhLmRlbHRhWCxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgPSBkYXRhLmRlbHRhWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSBtZS50cmFuc2xhdGVYLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiA9IG1lLnRyYW5zbGF0ZVo7XG5cbiAgICAgICAgaWYgKG1lLm1vdXNlV2hlZWxFbmFibGVkKSB7XG4gICAgICAgICAgICBtZS5fdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVggLSAoZGVsdGFYICogbWUubW91c2VXaGVlbERlbHRhWCk7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLl90cmFuc2xhdGVaID0gdHJhbnNsYXRlWiArIChkZWx0YVkgKiBtZS5tb3VzZVdoZWVsRGVsdGFZKTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICBtZS5tb3ZlT3JpZ2luKCk7XG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZVRyYW5zbGF0ZVgnLCBtZS5fdHJhbnNsYXRlWCk7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2VUcmFuc2xhdGVaJywgbWUuX3RyYW5zbGF0ZVopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbmRleCAgICAgICAgICA9IG1lLnN0b3JlLmluZGV4T2YodmFsdWUgJiYgdmFsdWVbMF0gfHwgMCksXG4gICAgICAgICAgICBpbWFnZUhlaWdodCAgICA9IG1lLmltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgaW1hZ2VXaWR0aCAgICAgPSBtZS5pbWFnZVdpZHRoLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY2FtZXJhICAgICAgICAgPSB2ZG9tLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZG9sbHlUcmFuc2Zvcm0gPSBtZS5nZXRDYW1lcmFUcmFuc2Zvcm1Gb3JDZWxsKGluZGV4KSxcbiAgICAgICAgICAgIGhlaWdodCAgICAgICAgID0gbWUub2Zmc2V0SGVpZ2h0IC8gKG1lLmFtb3VudFJvd3MgKyAyKSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgID0gTWF0aC5yb3VuZChoZWlnaHQgKiBpbWFnZVdpZHRoIC8gaW1hZ2VIZWlnaHQpLFxuICAgICAgICAgICAgc3BhY2luZyAgICAgICAgPSB3aWR0aCArIDEwLFxuICAgICAgICAgICAgdGltZW91dElkO1xuXG4gICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuc3BsaWNlKDAsIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5sZW5ndGgpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDoge1xuICAgICAgICAgICAgICAgIGlkICAgOiBtZS5pZCArICdfXycgKyAnZG9sbHknLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbWUudHJhbnNsYXRlM2QoLi4uZG9sbHlUcmFuc2Zvcm0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICA6ICdyZWFkRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9ucyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4gICAgICAgICAgICA6ICdnZXRDb21wdXRlZFN0eWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyAgICAgICAgOiBbbWUuaWQgKyAnX18nICsgJ2RvbGx5JywgbnVsbF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUlzRG9tTm9kZTogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiAnZGVmYXVsdFZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRm5OYW1lICA6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgICA6ICd0cmFuc2Zvcm0nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm0gPSBkYXRhLmZ1bmN0aW9ucy50cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVgsIGFuZ2xlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5pbmRleE9mKCdtYXRyaXgzZCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zdWJzdHJpbmcoOSwgdHJhbnNmb3JtLmxlbmd0aCAtIDEpOyAvLyByZW1vdmUgbWF0cml4M2QoIC4uLiApXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zcGxpdCgnLCcpLm1hcChlID0+IHBhcnNlRmxvYXQoZSkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNmb3JtWzEyXTsgLy8gYm90dG9tIGxlZnQgZWxlbWVudCBvZiB0aGUgNHg0IG1hdHJpeFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zdWJzdHJpbmcoNywgdHJhbnNmb3JtLmxlbmd0aCAtIDEpOyAvLyByZW1vdmUgbWF0cml4KCAuLi4gKVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uc3BsaXQoJywnKS5tYXAoZSA9PiBwYXJzZUZsb2F0KGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zZm9ybVs0XTsgLy8gYm90dG9tIGxlZnQgZWxlbWVudCBvZiB0aGUgMngzIG1hdHJpeFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVYIC0gZG9sbHlUcmFuc2Zvcm1bMF07XG4gICAgICAgICAgICAgICAgYW5nbGUgICAgICA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVggLyAoc3BhY2luZyAqIDMpLCAtMSksIDEpICogNDU7XG5cbiAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNmb3JtICAgICAgICAgID0gJ3JvdGF0ZVkoJyArIGFuZ2xlICsgJ2RlZyknO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMzMwbXMnO1xuXG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLnRyYW5zaXRpb25UaW1lb3V0cywgdGltZW91dElkKTtcblxuICAgICAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNmb3JtICAgICAgICAgID0gJ3JvdGF0ZVkoMGRlZyknO1xuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMDBtcyc7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICAgICAgfSwgMzMwKTtcblxuICAgICAgICAgICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5wdXNoKHRpbWVvdXRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblNvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzW2l0ZW1zTW91bnRlZF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zICAgICA9IFsuLi5tZS5zdG9yZS5pdGVtcyB8fCBbXV0sXG4gICAgICAgICAgICAgICAgbmV3Q24gICAgID0gW10sXG4gICAgICAgICAgICAgICAgdmRvbSAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICB2aWV3ICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgICAgICB2ZG9tTWFwICAgPSB2aWV3LmNuLm1hcChlID0+IGUuaWQpLFxuICAgICAgICAgICAgICAgIGZyb21JbmRleCwgdmRvbUlkO1xuXG4gICAgICAgICAgICBpdGVtcy5sZW5ndGggPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmRvbUlkICAgID0gbWUuZ2V0SXRlbVZub2RlSWQoaXRlbVttZS5rZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICBmcm9tSW5kZXggPSB2ZG9tTWFwLmluZGV4T2YodmRvbUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdDbi5wdXNoKHZpZXcuY25bZnJvbUluZGV4XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5jbiA9IG5ld0NuO1xuICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0T3JkZXJCeVJvdyhtZS5vcmRlckJ5Um93LCAhbWUub3JkZXJCeVJvdyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgb25TdG9yZUxvYWQoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtc1Jvb3QoKS5jbiA9IFtdOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlZnJlc2hJbWFnZVJlZmxlY3Rpb24oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgICAgICAgPSBtZS5hbW91bnRSb3dzLFxuICAgICAgICAgICAgb3JkZXJCeVJvdyAgICAgICA9IG1lLm9yZGVyQnlSb3csXG4gICAgICAgICAgICBzZWNvbmRMYXN0Q29sdW1uID0gYW1vdW50Um93cyAtIDEsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgIGFtb3VudENvbHVtbnM7XG5cbiAgICAgICAgaWYgKG9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGFtb3VudENvbHVtbnMgPSBNYXRoLmNlaWwoTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpIC8gYW1vdW50Um93cyk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LmNuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5W2luZGV4ID49IHNlY29uZExhc3RDb2x1bW4gKiBhbW91bnRDb2x1bW5zID8gJ2FkZCcgOiAncmVtb3ZlJ10oaXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheVtpbmRleCAlIGFtb3VudFJvd3MgPT09IHNlY29uZExhc3RDb2x1bW4gICA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY2xzLCAnbmVvLXJlZmxlY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHpcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRyYW5zbGF0ZTNkKHgsIHksIHopIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsICcgKyB6ICsgJ3B4KSc7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhHYWxsZXJ5KTtcblxuZXhwb3J0IHtHYWxsZXJ5IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gICAgICBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJ1xuaW1wb3J0IENvbXBvbmVudCAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBIZWxpeE1vZGVsICAgICAgZnJvbSAnLi4vc2VsZWN0aW9uL0hlbGl4TW9kZWwubWpzJztcbmltcG9ydCBNYXRyaXggICAgICAgICAgZnJvbSAnLi4vdXRpbC9NYXRyaXgubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICBmcm9tICcuLi9kYXRhL1N0b3JlLm1qcyc7XG5cbmNvbnN0IGl0ZW1zTW91bnRlZCA9IFN5bWJvbC5mb3IoJ2l0ZW1zTW91bnRlZCcpO1xuY29uc3QgbG9ja1doZWVsICAgID0gU3ltYm9sLmZvcignbG9ja1doZWVsJyk7IC8vIHdlIGNhbiBub3QgdXNlIGl0ZW1zTW91bnRlZCwgc2luY2UgaXQgaXMgY29ubmVjdGVkIHRvIG9uU29ydCgpXG5cbi8qKlxuICogQGNsYXNzIE5lby5jb21wb25lbnQuSGVsaXhcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBIZWxpeCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuSGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuSGVsaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaGVsaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGhlbGl4IGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhY2tncm91bmRDb2xvcl89JyMwMDAwMDAnXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfOiAnIzAwMDAwMCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgaGVsaXggY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFja2dyb3VuZEltYWdlXz0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFja2dyb3VuZEltYWdlXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWRzIG9mIGV4cGFuZGVkIGl0ZW1zIHdpbGwgZ2V0IHN0b3JlZCBoZXJlXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbG9uZWRJdGVtcz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbG9uZWRJdGVtczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWhlbGl4J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8taGVsaXgnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0aWNhbCBkZWx0YSBiZXR3ZWVuIGVhY2ggaGVsaXggaXRlbSAoaW5jcmVhc2luZyB0aGlzIHZhbHVlIHdpbGwgY3JlYXRlIGEgc3BpcmFsKVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbHRhWV89MS41XG4gICAgICAgICAqL1xuICAgICAgICBkZWx0YVlfOiAxLjUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXNlbGVjdGlvbnMgd2lsbCByZWR1Y2UgdGhlIG9wYWNpdHkgYW5kIHNldCB0aGlzIGZsYWcgdG8gdHJ1ZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaW1tZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaW1tZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpc2VsZWN0aW9ucyB3aWxsIHJlZHVjZSB0aGUgb3BhY2l0eSBhbmQgc2V0IHRoaXMgZmxhZyB0byB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGltbWVkTWF4T3BhY2l0eV89MC4zXG4gICAgICAgICAqL1xuICAgICAgICBkaW1tZWRNYXhPcGFjaXR5XzogMC4zLFxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlzZWxlY3Rpb25zIHdpbGwgcmVkdWNlIHRoZSBvcGFjaXR5IGFuZCBzZXQgdGhpcyBmbGFnIHRvIHRydWVcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaW1tZWRNaW5PcGFjaXR5Xz0wLjJcbiAgICAgICAgICovXG4gICAgICAgIGRpbW1lZE1pbk9wYWNpdHlfOiAwLjIsXG4gICAgICAgIGRpc2FibGVTZWxlY3Rpb24gOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsaXAgaW1hZ2VzIGJ5IDE4MMKwIGZvciBhIG5vdCBtaXJyb3JlZCBpbm5lciB2aWV3XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZsaXBwZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmbGlwcGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHJvdGF0ZSB0aGUgaGVsaXggd2hlbiB1c2luZyBrZXluYXYsIHNvIHRoYXQgdGhlIHNlbGVjdGVkIGl0ZW1zIHN0YXlzIGluIGZyb250XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZvbGxvd1NlbGVjdGlvbl89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGZvbGxvd1NlbGVjdGlvbl86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpbWFnZSBkYXRhLlxuICAgICAgICAgKiBOZXN0ZWQgZmllbGRzIGFyZSBzdXBwb3J0ZWQgKGUuZy4gYXV0aG9yLmltYWdlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGltYWdlRmllbGQ9J2ltYWdlJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VGaWVsZDogJ2ltYWdlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYXRoIHRvIHRoZSBpbWFnZXMgZm9sZGVyXG4gICAgICAgICAqIFdpbGwgZ2V0IHNldCBpbnNpZGUgdGhlIGN0b3IgdG8gYXZvaWQgaXNzdWVzIGluc2lkZSB0aGUgd2VicGFjayBidWlsZHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGltYWdlU291cmNlPU5lby5jb25maWcucmVzb3VyY2VzUGF0aCArICdleGFtcGxlcy8nXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZVNvdXJjZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFtb3VudCBvZiBpdGVtcyBwZXIgcm93IChjaXJjbGUpIC0+IDM2MMKwIC8gMTAgPSAzNlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGl0ZW1BbmdsZV89OFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbUFuZ2xlXzogOCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGxfOiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWydzdXJmYWNlJywgJ25lby1oZWxpeC1pdGVtJ10sXG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ2NvbnRhY3QtaXRlbSddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICdFbnRlcic6ICdvbktleURvd25FbnRlcicsXG4gICAgICAgICAgICAnU3BhY2UnOiAnb25LZXlEb3duU3BhY2UnXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBzdG9yZSBvbmUgaW5zdGFuY2Ugb2YgdGhlIG1hdHJpeCBoZXJlIHRvIGF2b2lkIGNyZWF0aW5nIG5ldyBvbmVzIG9uIGVhY2ggcmVmcmVzaCBvcGVyYXRpb25cbiAgICAgICAgICogQG1lbWJlciB7TmVvLnV0aWwuTWF0cml4fG51bGx9IG1hdHJpeD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1hdHJpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggYW1vdW50IG9mIHN0b3JlIGl0ZW1zIHRvIHNob3dcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhJdGVtc189MzAwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhJdGVtc186IDMwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggb3BhY2l0eSBmb3IgaXRlbXMgaW5zaWRlIHRoZSBmb3JlZ3JvdW5kXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4T3BhY2l0eV89MC44XG4gICAgICAgICAqL1xuICAgICAgICBtYXhPcGFjaXR5XzogMC44LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCBvcGFjaXR5IGZvciBpdGVtcyBpbnNpZGUgdGhlIGJhY2tncm91bmRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtaW5PcGFjaXR5Xz0wLjNcbiAgICAgICAgICovXG4gICAgICAgIG1pbk9wYWNpdHlfOiAwLjMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFYPTVcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YVg6IDUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFZPTUwXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRGVsdGFZOiA1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtb3VzZSB3aGVlbCBzaG91bGQgY2hhbmdlIHRoZSB0cmFuc2xhdGVaIHZhbHVlIGZvciB6b29taW5nXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdXNlV2hlZWxFbmFibGVkXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRW5hYmxlZF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0SGVpZ2h0IG9mIHRoZSB0b3AgbGV2ZWwgZGl2LlxuICAgICAgICAgKiBHZXRzIGZldGNoZWQgYWZ0ZXIgdGhlIGhlbGl4IGdvdCBtb3VudGVkLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3VzZVdoZWVsRW5hYmxlZD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldEhlaWdodDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBET00gZWxlbWVudCBvZmZzZXRXaWR0aCBvZiB0aGUgdG9wIGxldmVsIGRpdi5cbiAgICAgICAgICogR2V0cyBmZXRjaGVkIGFmdGVyIHRoZSBoZWxpeCBnb3QgbW91bnRlZC5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91c2VXaGVlbEVuYWJsZWQ9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRXaWR0aDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwZXJzcGVjdGl2ZSBvZiB0aGUgSGVsaXggdmlldyBpbiBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHBlcnNwZWN0aXZlXz04MDBcbiAgICAgICAgICovXG4gICAgICAgIHBlcnNwZWN0aXZlXzogODAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXNfPTE1MDBcbiAgICAgICAgICovXG4gICAgICAgIHJhZGl1c186IDE1MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm90YXRpb25BbmdsZSBvZiB0aGUgSGVsaXggaW4gZGVncmVlc1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0aW9uQW5nbGVfPTc4MFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25BbmdsZV86IDc4MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHN0b3JlIG9uZSBpbnN0YW5jZSBvZiB0aGUgcm90YXRpb24gbWF0cml4IGhlcmUgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IG9uZXMgb24gZWFjaCByZWZyZXNoIG9wZXJhdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8udXRpbC5NYXRyaXh8bnVsbH0gcm90YXRpb25NYXRyaXg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByb3RhdGlvbk1hdHJpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgZGlzcGxheXMgdGhlIGZpcnN0ICYgbGFzdCBuYW1lIHJlY29yZCBmaWVsZHMgYmVsb3cgYW4gZXhwYW5kZWQgaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q2xvbmVJbmZvPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIHJ1bGUgZm9yIHNlbGVjdGVkIGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc2VsZWN0ZWRJdGVtQ2xzPSduZW8tc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZEl0ZW1DbHM6ICduZW8tc2VsZWN0ZWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdXNlcyB0aGUgc2VsZWN0aW9uLkhlbGl4TW9kZWwgYnkgZGVmYXVsdFxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWx8bnVsbH0gc2VsZWN0aW9uTW9kZWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGlvbk1vZGVsXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdG9yZSBpbnN0YW5jZSBvciBjbGFzcyBjb250YWluaW5nIHRoZSBkYXRhIGZvciB0aGUgZ2FsbGVyeSBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLCAvLyB0b2RvOiB1c2UgYSBzdG9yZSBvbmNlIGNvbGxlY3Rpb25zIGFyZSBpbnRlZ3JhdGVkXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2V0VGltZW91dCgpIGlkcyBmb3IgY2FsbHMgd2hpY2ggY2FuIGdldCBjYW5jZWxsZWRcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHRyYW5zaXRpb25UaW1lb3V0cz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2l0aW9uVGltZW91dHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVhfPTQwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWF86IDQwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZXz0tMzUwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVZXzogLTM1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVaXz0tNTAwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWl86IC01MDAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVybCBmb3IgdGhlIHN0b3JlIHRvIGxvYWQgdGhlIGRhdGFcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB1cmxfPScuLi9yZXNvdXJjZXMvZXhhbXBsZXMvZGF0YS9haV9jb250YWN0cy5qc29uJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXJsXzogJy4uLy4uL3Jlc291cmNlcy9leGFtcGxlcy9kYXRhL2FpX2NvbnRhY3RzLmpzb24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHN0eWxlICAgOiB7fSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWydncm91cCddLFxuICAgICAgICAgICAgICAgICAgICBjbiAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0NjEsIDQ1Mi41LCAtMTAwNzAwLCAxKSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSk7XG5cbiAgICAgICAgbWVbaXRlbXNNb3VudGVkXSA9IGZhbHNlO1xuICAgICAgICBtZVtsb2NrV2hlZWxdICAgID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG1lLmltYWdlU291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBtZS5pbWFnZVNvdXJjZSA9IE5lby5jb25maWcucmVzb3VyY2VzUGF0aCArICdleGFtcGxlcy8nO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IG1lLm9uQ2xpY2ssXG4gICAgICAgICAgICB3aGVlbDogbWUub25Nb3VzZVdoZWVsLFxuICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9hZCBkYXRhIGZvciB0aGUgZXhhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgIGlmICghKG1lLnN0b3JlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG4gICAgICAgICAgICBtZS5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmbGlwcGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmxpcHBlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hcHBseUl0ZW1UcmFuc2l0aW9ucyh0aGlzLnJlZnJlc2gsIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWF4SXRlbSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUgJiYgbWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWUuZGVzdHJveUl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSAtIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMob2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwZXJzcGVjdGl2ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQZXJzcGVjdGl2ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBtZS52ZG9tLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IHZhbHVlICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZUNsb25lVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICB2YWx1ZS5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXJsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVybCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIG1lLmRlc3Ryb3lJdGVtcygpO1xuICAgICAgICAgICAgbWUubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblRpbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhcHBseUl0ZW1UcmFuc2l0aW9ucyhjYWxsYmFjaywgYW5pbWF0aW9uVGltZSwgY2FsbGJhY2tQYXJhbSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9ICduZW8tdHJhbnNpdGlvbi0nICsgYW5pbWF0aW9uVGltZSxcbiAgICAgICAgICAgIHRpbWVvdXRJZDtcblxuICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLnNwbGljZSgwLCBtZS50cmFuc2l0aW9uVGltZW91dHMubGVuZ3RoKTtcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbY2xzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG1lLCBbY2FsbGJhY2tQYXJhbV0pO1xuXG4gICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS50cmFuc2l0aW9uVGltZW91dHMsIHRpbWVvdXRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbY2xzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgYW5pbWF0aW9uVGltZSArIDIwMCk7XG5cbiAgICAgICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgYmVmb3JlR2V0SXRlbVRwbCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh0aGlzLl9pdGVtVHBsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIEhlbGl4TW9kZWwsIHtcbiAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5vblNlbGVjdGlvbkNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgICA6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc3RvcmUgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IHJlbW92ZSB0aGUgaWYgY2hlY2sgb25jZSBhbGwgZGVtb3MgdXNlIHN0b3JlcyAoaW5zdGVhZCBvZiBjb2xsZWN0aW9ucylcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBTdG9yZSwge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQgOiBtZS5vblN0b3JlTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgOiB7XG4gICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydCxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGFuIG9wYWNpdHkgZ3JhZGllbnQgYmFzZWQgb24gdGhlIGl0ZW0gcm90YXRpb24gYW5nbGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgY2FsY3VsYXRlT3BhY2l0eShpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbWF4T3BhY2l0eSAgID0gbWUubWF4T3BhY2l0eSxcbiAgICAgICAgICAgIG1pbk9wYWNpdHkgICA9IG1lLm1pbk9wYWNpdHksXG4gICAgICAgICAgICBkZWx0YU9wYWNpdHkgPSBtYXhPcGFjaXR5IC0gbWluT3BhY2l0eSxcbiAgICAgICAgICAgIGFuZ2xlLCBvcGFjaXR5LCBvcGFjaXR5RmFjdG9yO1xuXG4gICAgICAgIGlmIChkZWx0YU9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgICAgIG9wYWNpdHkgPSBtYXhPcGFjaXR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5nbGUgPSBpdGVtLnJvdGF0aW9uQW5nbGUgJSAzNjA7XG5cbiAgICAgICAgICAgIHdoaWxlIChhbmdsZSA8IDApIHtcbiAgICAgICAgICAgICAgICBhbmdsZSArPSAzNjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChhbmdsZSA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGFuZ2xlID0gMzYwIC0gYW5nbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vbiBsaW5lYXIgZGlzdHJpYnV0aW9uLCBzaW5jZSB0aGUgYW5nbGUgZG9lcyBub3QgbWF0Y2ggZGVsdGEgdHJhbnNsYXRlWlxuICAgICAgICAgICAgb3BhY2l0eUZhY3RvciA9IDEgLSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAzNjApO1xuXG4gICAgICAgICAgICBvcGFjaXR5ID0gbWluT3BhY2l0eSArIGRlbHRhT3BhY2l0eSAqIG9wYWNpdHlGYWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3BhY2l0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBnZXQgZGlmZmVyZW50IGl0ZW0tbWFya3Vwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZkb21JdGVtLmNuWzBdLmlkICA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pICsgJ19pbWcnO1xuICAgICAgICB2ZG9tSXRlbS5jblswXS5zcmMgPSBtZS5pbWFnZVNvdXJjZSArIE5lby5ucyhtZS5pbWFnZUZpZWxkLCBmYWxzZSwgcmVjb3JkKTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydEluZGV4XSB0aGUgc3RhcnQgaW5kZXggZm9yIGNyZWF0aW5nIGl0ZW1zLFxuICAgICAqIGUuZy4gaW5jcmVhc2luZyBtYXhJdGVtcyBvbmx5IG5lZWRzIHRvIGNyZWF0ZSB0aGUgbmV3IG9uZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoc3RhcnRJbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YVkgICAgICAgID0gbWUuZGVsdGFZLFxuICAgICAgICAgICAgZ3JvdXAgICAgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgaXRlbUFuZ2xlICAgICA9IG1lLml0ZW1BbmdsZSxcbiAgICAgICAgICAgIG1hdHJpeCAgICAgICAgPSBtZS5tYXRyaXgsXG4gICAgICAgICAgICByYWRpdXMgICAgICAgID0gbWUucmFkaXVzLFxuICAgICAgICAgICAgcm90YXRpb25BbmdsZSA9IG1lLnJvdGF0aW9uQW5nbGUsXG4gICAgICAgICAgICB0cmFuc2xhdGVYICAgID0gbWUudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgICAgPSBtZS50cmFuc2xhdGVZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiAgICA9IG1lLnRyYW5zbGF0ZVosXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgPSBzdGFydEluZGV4IHx8IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLml0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICBhbmdsZSwgaXRlbSwgbWF0cml4SXRlbXMsIHRyYW5zZm9ybVN0eWxlLCB2ZG9tSXRlbSwgYywgcywgeCwgeSwgejtcblxuICAgICAgICBpZiAoIW1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVySWQgPSBtZS5vbignbW91bnRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS51bignbW91bnRlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcyhzdGFydEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlSXRlbXMnLCBtZS5pZCwgbWUuc3RvcmUpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IG1lLnN0b3JlLml0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgPSAtcm90YXRpb25BbmdsZSArIGkgKiBpdGVtQW5nbGU7XG5cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICAgICAgICAgIHggPSByYWRpdXMgKiBzIC0gMzAwICsgdHJhbnNsYXRlWDtcbiAgICAgICAgICAgICAgICB5ID0gLTQwMCArIGFuZ2xlICogZGVsdGFZICsgdHJhbnNsYXRlWTtcbiAgICAgICAgICAgICAgICB6ID0gOTk4MDAgKyByYWRpdXMgKiBjICsgdHJhbnNsYXRlWjtcblxuICAgICAgICAgICAgICAgIG1hdHJpeEl0ZW1zID0gW1xuICAgICAgICAgICAgICAgICAgICBbYywgMCwgLXMsIDBdLFxuICAgICAgICAgICAgICAgICAgICBbMCwgMSwgIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICBbcywgMCwgIGMsIDBdLFxuICAgICAgICAgICAgICAgICAgICBbeCwgeSwgIHosIDFdXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIGlmICghbWF0cml4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm1hdHJpeCA9IG1hdHJpeCA9IE5lby5jcmVhdGUoTWF0cml4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogbWF0cml4SXRlbXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4Lml0ZW1zID0gbWF0cml4SXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUgPSBtYXRyaXguZ2V0VHJhbnNmb3JtU3R5bGUoKTtcblxuICAgICAgICAgICAgICAgIHZkb21JdGVtID0gbWUuY3JlYXRlSXRlbShtZS5pdGVtVHBsLCBpdGVtLCBpKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0ucm90YXRpb25BbmdsZSAgPSBhbmdsZTtcbiAgICAgICAgICAgICAgICBpdGVtLnRyYW5zZm9ybVN0eWxlID0gdHJhbnNmb3JtU3R5bGU7XG5cbiAgICAgICAgICAgICAgICB2ZG9tSXRlbS4gc3R5bGUgPSB2ZG9tSXRlbS5zdHlsZSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHZkb21JdGVtLnN0eWxlLm9wYWNpdHkgICA9IG1lLmNhbGN1bGF0ZU9wYWNpdHkoaXRlbSk7XG4gICAgICAgICAgICAgICAgdmRvbUl0ZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3R5bGU7XG5cbiAgICAgICAgICAgICAgICBncm91cC5jbi5wdXNoKHZkb21JdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVbbG9ja1doZWVsXSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSh2ZG9tKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZVtpdGVtc01vdW50ZWRdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZVtsb2NrV2hlZWxdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZGVzdHJveUNsb25lcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSBtZS5zdG9yZSxcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlRGVsdGFzID0gW10sXG4gICAgICAgICAgICBpZCwgcmVjb3JkO1xuXG4gICAgICAgIGlmIChtZS5jbG9uZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5jbG9uZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlkICAgICA9IG1lLmdldEl0ZW1JZChpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICByZWNvcmQgPSBzdG9yZS5nZXQoaWQpO1xuXG4gICAgICAgICAgICAgICAgcmVjb3JkLmV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiByZWNvcmQub3BhY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcmVjb3JkLnRyYW5zZm9ybVN0eWxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlbW92ZURlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuY2xvbmVkSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDogcmVtb3ZlRGVsdGFzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDY1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydEluZGV4XVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbYW1vdW50SXRlbXNdXG4gICAgICovXG4gICAgZGVzdHJveUl0ZW1zKHN0YXJ0SW5kZXgsIGFtb3VudEl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmdldEl0ZW1zUm9vdCgpLmNuLnNwbGljZShzdGFydEluZGV4IHx8IDAsIGFtb3VudEl0ZW1zIHx8IG1lLnN0b3JlLmdldENvdW50KCkpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhIGNsb25lIG9mIGFuIGl0ZW0gdG8gdGhlIHRvcCBsZWZ0IGNvcm5lclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKi9cbiAgICBleHBhbmRJdGVtKGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdG9yZSAgICAgID0gbWUuc3RvcmUsXG4gICAgICAgICAgICByZWNvcmQgICAgID0gc3RvcmUuZ2V0KGl0ZW1JZCksXG4gICAgICAgICAgICBpbmRleCAgICAgID0gc3RvcmUuaW5kZXhPZihpdGVtSWQpLFxuICAgICAgICAgICAgaXNFeHBhbmRlZCA9ICEhcmVjb3JkLmV4cGFuZGVkLFxuICAgICAgICAgICAgZ3JvdXAgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgaXRlbVZkb20gICA9IE5lby5jbG9uZShncm91cC5jbltpbmRleF0sIHRydWUpO1xuXG4gICAgICAgIG1lLmRlc3Ryb3lDbG9uZXMoKTtcblxuICAgICAgICBpZiAoaXNFeHBhbmRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmVjb3JkLmV4cGFuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaXRlbVZkb20uaWQgPSBpdGVtVmRvbS5pZCArICdfX2Nsb25lJztcbiAgICAgICAgICAgIGl0ZW1WZG9tLnN0eWxlLnRyYW5zZm9ybSA9IHJlY29yZC50cmFuc2Zvcm1TdHlsZTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChpdGVtVmRvbS5jbHMsICduZW8tdHJhbnNpdGlvbi02MDAnKTtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtVmRvbS50YWJJbmRleDtcblxuICAgICAgICAgICAgaXRlbVZkb20uY25bMF0uaWQgPSBpdGVtVmRvbS5jblswXS5pZCArICdfX2Nsb25lJztcblxuICAgICAgICAgICAgaWYgKG1lLnNob3dDbG9uZUluZm8pIHtcbiAgICAgICAgICAgICAgICBpdGVtVmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ2NvbnRhY3QtbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHJlY29yZC5maXJzdG5hbWUgKyAnICcgKyByZWNvcmQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLnZkb20uSGVscGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgYXV0b01vdW50ICA6IHRydWUsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IGdyb3VwLmlkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgICAgIC4uLml0ZW1WZG9tXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmNsb25lZEl0ZW1zLnB1c2goaXRlbVZkb20pO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgIDogaXRlbVZkb20uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG1lLmdldENsb25lVHJhbnNmb3JtKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbG9uZVRyYW5zZm9ybSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChtZS5vZmZzZXRXaWR0aCAgLSAxMzUwKSAvIDMsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gKG1lLm9mZnNldEhlaWdodCAtIDEzMjApIC8gMyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSAxMDA3MDAgKyBtZS5wZXJzcGVjdGl2ZSAvIDEuNTtcblxuICAgICAgICByZXR1cm4gJ21hdHJpeDNkKDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLCcrdHJhbnNsYXRlWCsnLCcrdHJhbnNsYXRlWSsnLCcrdHJhbnNsYXRlWisnLDEpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodm5vZGVJZC5zcGxpdCgnX18nKVsxXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmRvbSBub2RlIGNvbnRhaW5pbmcgdGhlIGhlbGl4IGl0ZW1zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGdldEl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1Wbm9kZUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGVsYXk9MTAwXVxuICAgICAqL1xuICAgIGdldE9mZnNldFZhbHVlcyhkZWxheT0xMDApIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICA6ICdyZWFkRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldEhlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXRXaWR0aCdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLm9mZnNldEhlaWdodCA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbWUub2Zmc2V0V2lkdGggID0gZGF0YS5hdHRyaWJ1dGVzLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgaW5zaWRlTmVvOiB0cnVlLFxuICAgICAgICAgICAgdXJsICAgICAgOiBtZS51cmxcbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uLmRhdGE7XG4gICAgICAgICAgICBtZS5jcmVhdGVJdGVtcygpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZvciBOZW8uWGhyLnJlcXVlc3QnLCBlcnIsIG1lLmlkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgbW92ZVRvU2VsZWN0ZWRJdGVtKGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICBtZS5yb3RhdGlvbkFuZ2xlID0gbWUuc3RvcmUuZ2V0KGl0ZW1JZCkucm90YXRpb25BbmdsZSArIG1lLnJvdGF0aW9uQW5nbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmUoZGF0YS5pZCA9PT0gdGhpcy5pZCA/ICdjb250YWluZXJDbGljaycgOiAnaXRlbUNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNlbGVjdGlvbk1vZGVsLml0ZW1zWzBdO1xuXG4gICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZEl0ZW0oaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duU3BhY2UoZGF0YSkge1xuICAgICAgICB0aGlzLmFwcGx5SXRlbVRyYW5zaXRpb25zKHRoaXMubW92ZVRvU2VsZWN0ZWRJdGVtLCAxMDAwLCB0aGlzLnNlbGVjdGlvbk1vZGVsLml0ZW1zWzBdIHx8IDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdXNlV2hlZWwoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YVggICAgICAgID0gZGF0YS5kZWx0YVgsXG4gICAgICAgICAgICBkZWx0YVkgICAgICAgID0gZGF0YS5kZWx0YVksXG4gICAgICAgICAgICByb3RhdGlvbkFuZ2xlID0gbWUucm90YXRpb25BbmdsZSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogICAgPSBtZS50cmFuc2xhdGVaO1xuXG4gICAgICAgIGlmIChtZS5tb3VzZVdoZWVsRW5hYmxlZCAmJiBtZVtsb2NrV2hlZWxdKSB7XG4gICAgICAgICAgICBtZS5fcm90YXRpb25BbmdsZSA9IHJvdGF0aW9uQW5nbGUgKyAoZGVsdGFYICogbWUubW91c2VXaGVlbERlbHRhWCk7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLl90cmFuc2xhdGVaICAgID0gdHJhbnNsYXRlWiAgICArIChkZWx0YVkgKiBtZS5tb3VzZVdoZWVsRGVsdGFZKTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICBtZS5yZWZyZXNoKCk7XG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZVJvdGF0aW9uJywgICBtZS5fcm90YXRpb25BbmdsZSk7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2VUcmFuc2xhdGVaJywgbWUuX3RyYW5zbGF0ZVopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IG9sZFZhbHVlXG4gICAgICovXG4gICAgb25TZWxlY3Rpb25DaGFuZ2UodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLmZvbGxvd1NlbGVjdGlvbiAmJiB2YWx1ZSAmJiB2YWx1ZVswXSkge1xuICAgICAgICAgICAgbWUuYXBwbHlJdGVtVHJhbnNpdGlvbnMobWUubW92ZVRvU2VsZWN0ZWRJdGVtLCAxMDAsIHZhbHVlWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNvcnQoKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWVbaXRlbXNNb3VudGVkXSA9PT0gdHJ1ZSkge2NvbnNvbGUubG9nKCdzb3J0Jyk7XG4gICAgICAgICAgICBtZS5hcHBseUl0ZW1UcmFuc2l0aW9ucyhtZS5zb3J0SXRlbXMsIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXNSb290KCkuY24gPSBbXTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlZnJlc2goKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YXMgICAgICAgICA9IFtdLFxuICAgICAgICAgICAgZGVsdGFZICAgICAgICAgPSBtZS5kZWx0YVksXG4gICAgICAgICAgICBmbGlwcGVkICAgICAgICA9IG1lLmZsaXBwZWQsXG4gICAgICAgICAgICBpbmRleCAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBpdGVtQW5nbGUgICAgICA9IG1lLml0ZW1BbmdsZSxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpLFxuICAgICAgICAgICAgbWF0cml4ICAgICAgICAgPSBtZS5tYXRyaXgsXG4gICAgICAgICAgICByYWRpdXMgICAgICAgICA9IG1lLnJhZGl1cyxcbiAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgID0gbWUucm90YXRpb25BbmdsZSxcbiAgICAgICAgICAgIHJvdGF0aW9uTWF0cml4ID0gbWUucm90YXRpb25NYXRyaXgsXG4gICAgICAgICAgICB0cmFuc2xhdGVYICAgICA9IG1lLnRyYW5zbGF0ZVgsXG4gICAgICAgICAgICB0cmFuc2xhdGVZICAgICA9IG1lLnRyYW5zbGF0ZVksXG4gICAgICAgICAgICB0cmFuc2xhdGVaICAgICA9IG1lLnRyYW5zbGF0ZVosXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBhbmdsZSwgaXRlbSwgb3BhY2l0eSwgcm90YXRlWSwgdHJhbnNmb3JtU3R5bGUsIHZkb21JdGVtLCBjLCBzLCB4LCB5LCB6O1xuXG4gICAgICAgIGlmIChmbGlwcGVkKSB7XG4gICAgICAgICAgICByb3RhdGVZID0gTWF0cml4LnJvdGF0ZVkoMTgwICogTWF0aC5QSSAvIDE4MCk7XG5cbiAgICAgICAgICAgIGlmICghcm90YXRpb25NYXRyaXgpIHtcbiAgICAgICAgICAgICAgICBtZS5yb3RhdGlvbk1hdHJpeCA9IHJvdGF0aW9uTWF0cml4ID0gTmVvLmNyZWF0ZShNYXRyaXgsIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IHJvdGF0ZVlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25NYXRyaXguaXRlbXMgPSByb3RhdGVZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpdGVtICAgICA9IG1lLnN0b3JlLml0ZW1zW2luZGV4XTtcbiAgICAgICAgICAgIHZkb21JdGVtID0gdmRvbS5jblswXS5jblswXS5jbltpbmRleF07XG5cbiAgICAgICAgICAgIGFuZ2xlID0gLXJvdGF0aW9uQW5nbGUgKyBpbmRleCAqIGl0ZW1BbmdsZTtcblxuICAgICAgICAgICAgcyA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICAgICAgeCA9ICAtMzAwICsgcmFkaXVzICogcyAgICAgKyB0cmFuc2xhdGVYO1xuICAgICAgICAgICAgeSA9ICAtNDAwICsgYW5nbGUgKiBkZWx0YVkgKyB0cmFuc2xhdGVZO1xuICAgICAgICAgICAgeiA9IDk5ODAwICsgcmFkaXVzICogYyAgICAgKyB0cmFuc2xhdGVaO1xuXG4gICAgICAgICAgICBtYXRyaXguaXRlbXMgPSBbXG4gICAgICAgICAgICAgICAgW2MsIDAsIC1zLCAwXSxcbiAgICAgICAgICAgICAgICBbMCwgMSwgIDAsIDBdLFxuICAgICAgICAgICAgICAgIFtzLCAwLCAgYywgMF0sXG4gICAgICAgICAgICAgICAgW3gsIHksICB6LCAxXVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgaWYgKGZsaXBwZWQpIHtcbiAgICAgICAgICAgICAgICBtYXRyaXggPSByb3RhdGlvbk1hdHJpeC54KG1hdHJpeCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlID0gbWF0cml4LmdldFRyYW5zZm9ybVN0eWxlKCk7XG4gICAgICAgICAgICBtYXRyaXguZGVzdHJveSgpO1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICByb3RhdGlvbkFuZ2xlIDogYW5nbGUsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGU6IHRyYW5zZm9ybVN0eWxlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgb3BhY2l0eSA9IG1lLmNhbGN1bGF0ZU9wYWNpdHkoaXRlbSk7XG4gICAgICAgICAgICBpdGVtLm9wYWNpdHkgPSBvcGFjaXR5O1xuXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGl0ZW0sIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5ICAgICAgIDogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICByb3RhdGlvbkFuZ2xlIDogYW5nbGUsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGU6IHRyYW5zZm9ybVN0eWxlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkICAgOiBtZS5nZXRJdGVtVm5vZGVJZChpdGVtW21lLmtleVByb3BlcnR5XSksXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVN0eWxlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGRlbHRhcyA6IGRlbHRhc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVmcmVzaElmTW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHNvcnRJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhcyAgID0gW10sXG4gICAgICAgICAgICBwYXJlbnRJZCA9IG1lLnZkb20uY25bMF0uY25bMF0uaWQsXG4gICAgICAgICAgICBpICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICA9IE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uICA6ICdtb3ZlTm9kZScsXG4gICAgICAgICAgICAgICAgaWQgICAgICA6IG1lLmdldEl0ZW1Wbm9kZUlkKG1lLnN0b3JlLml0ZW1zW2ldW21lLmtleVByb3BlcnR5XSksXG4gICAgICAgICAgICAgICAgaW5kZXggICA6IGksXG4gICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlQ2xvbmVUcmFuc2xhdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYWZ0ZXJEZWx0YXMgID0gW10sXG4gICAgICAgICAgICBkZWx0YXMgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHRpbWVvdXRJZCwgdHJhbnNmb3JtO1xuXG4gICAgICAgIGlmIChtZS5jbG9uZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBtZS5nZXRDbG9uZVRyYW5zZm9ybSh0cnVlKTtcblxuICAgICAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmNsb25lZEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZCA6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tdHJhbnNpdGlvbi02MDAnXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYWZ0ZXJEZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFsnbmVvLXRyYW5zaXRpb24tNjAwJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRlbHRhcyA6IGRlbHRhc1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS50cmFuc2l0aW9uVGltZW91dHMsIHRpbWVvdXRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgOiBhZnRlckRlbHRhc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuXG4gICAgICAgICAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLnB1c2godGltZW91dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjZmcgPSB7ZW51bWVyYWJsZTogZmFsc2UsIHZhbHVlOiBIZWxpeC5wcm90b3R5cGUucmVmcmVzaElmTW91bnRlZH07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKEhlbGl4LnByb3RvdHlwZSwge1xuICAgIGFmdGVyU2V0RGVsdGFZICAgICAgIDogY2ZnLFxuICAgIGFmdGVyU2V0SXRlbUFuZ2xlICAgIDogY2ZnLFxuICAgIGFmdGVyU2V0TWF4T3BhY2l0eSAgIDogY2ZnLFxuICAgIGFmdGVyU2V0TWluT3BhY2l0eSAgIDogY2ZnLFxuICAgIGFmdGVyU2V0UmFkaXVzICAgICAgIDogY2ZnLFxuICAgIGFmdGVyU2V0Um90YXRpb25BbmdsZTogY2ZnLFxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWCAgIDogY2ZnLFxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWSAgIDogY2ZnLFxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWiAgIDogY2ZnXG59KTtcblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXgpO1xuXG5leHBvcnQge0hlbGl4IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQmFzZS5tanMnO1xuaW1wb3J0IExvZ2dlciAgICBmcm9tICcuLi8uLi9jb3JlL0xvZ2dlci5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhbiBhbUNoYXJ0XG4gKiBSZXF1aXJlcyBzZXR0aW5nIE5lby5jb25maWcudXNlQW1DaGFydHMgdG8gdHJ1ZSAob3IgbWFudWFsbHkgaW5jbHVkZSB0aGUgbGliKVxuICogQGNsYXNzIE5lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgQW1DaGFydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQud3JhcHBlci5BbUNoYXJ0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdhbS1jaGFydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdhbS1jaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWU6IGh0dHBzOi8vd3d3LmFtY2hhcnRzLmNvbS9kb2NzL3Y0L1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNoYXJ0Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNoYXJ0Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjaGFydFR5cGU9J1hZQ2hhcnQnXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydFR5cGU6ICdYWUNoYXJ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEl0IGlzIG5vdCBwb3NzaWJsZSB0byBkZWZpbmUgYWRhcHRlcnMgdmlhIGpzb24sIHNvIHdlIHBhc3MgYSBmbGFnIHRvIG1haW4gaW5zdGVhZFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjb21iaW5lU2VyaWVzVG9vbHRpcD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBjaGFydCBkYXRhXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGRhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hhcnRzICYgbWFwcyBjYW4gaGF2ZSBkaWZmZXJlbnQgdGFyZ2V0cyB0byBhcHBseSB0aGUgZGF0YSB0by4gRS5nLjpcbiAgICAgICAgICogbXlDaGFydC5kYXRhID0gZGF0YTsgLy8gPT4gJydcbiAgICAgICAgICogbXlDaGFydC5zZXJpZXMudmFsdWVzWzBdLmRhdGEgPSBkYXRhOyAvLyA9PiAnc2VyaWVzLnZhbHVlcy4wJ1xuICAgICAgICAgKiBVc2UgYSBOZW8ubnMoKSBjb25mb3JtIHN5bnRheCB3aXRoIGRvdHMgYmV0d2VlbiBwcm9wc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGRhdGFQYXRoPScnXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhUGF0aDogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhbTRjaGFydHMsIGFtNG1hcHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBwYWNrYWdlPSdhbTRjaGFydHMnXG4gICAgICAgICAqL1xuICAgICAgICBwYWNrYWdlOiAnYW00Y2hhcnRzJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7aGVpZ2h0OiAnMTAwJSd9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLmNoYXJ0Q29uZmlnKSB7XG4gICAgICAgICAgICBMb2dnZXIubG9nRXJyb3IoJ3dyYXBwZXIuQW1DaGFydCBkZWZpbmVkIHdpdGhvdXQgYSBjaGFydENvbmZpZycsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnBhcnNlQ2hhcnRDb25maWcobWUuY2hhcnRDb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZGF0YSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy51cGRhdGVEYXRhKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YVBhdGg6IG1lLmRhdGFQYXRoLFxuICAgICAgICAgICAgICAgIGlkICAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZmFsc2UgJiYgb2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMuZGVzdHJveSh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICAgICAgICAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY29tYmluZVNlcmllc1Rvb2x0aXA6IG1lLmNvbWJpbmVTZXJpZXNUb29sdGlwLFxuICAgICAgICAgICAgICAgIGNvbmZpZyAgICAgICAgICAgICAgOiBtZS5jaGFydENvbmZpZyxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICAgICAgICAgIDogbWUuZGF0YSxcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgICAgICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgcGFja2FnZSAgICAgICAgICAgICA6IG1lLnBhY2thZ2UsXG4gICAgICAgICAgICAgICAgdHlwZSAgICAgICAgICAgICAgICA6IG1lLmNoYXJ0VHlwZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG1lLmRhdGEpIHtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGEgICAgID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGFQYXRoID0gbWUuZGF0YVBhdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmNyZWF0ZShvcHRzKS50aGVuKG1lLm9uQ2hhcnRNb3VudGVkKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHRyaWdnZXIgbG9naWMgYWZ0ZXIgdGhlIGNoYXJ0IGdvdCBtb3VudGVkIGludG8gdGhlIGRvbVxuICAgICAqL1xuICAgIG9uQ2hhcnRNb3VudGVkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgcGFyc2VDaGFydENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChOZW8uaXNBcnJheShjb25maWcpKSB7XG4gICAgICAgICAgICBjb25maWcuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhjb25maWcpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChOZW8uaXNBcnJheSh2YWx1ZSkgfHwgTmVvLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE5lby5pc1N0cmluZyh2YWx1ZSkgJiYgdmFsdWUuc3RhcnRzV2l0aCgnQGNvbmZpZzonKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cig4KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1lW3ZhbHVlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCdUaGUgdXNlZCBAY29uZmlnIGRvZXMgbm90IGV4aXN0OicsIHZhbHVlLCBtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IG1lW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhBbUNoYXJ0KTtcblxuZXhwb3J0IHtBbUNoYXJ0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vQmFzZS5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBNYXBib3ggR0wgbWFwc1xuICogUmVxdWlyZXMgc2V0dGluZyBOZW8uY29uZmlnLnVzZU1hcGJveEdMIHRvIHRydWUgKG9yIG1hbnVhbGx5IGluY2x1ZGUgdGhlIGxpYilcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LndyYXBwZXIuTWFwYm94R0xcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBNYXBib3hHTCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQud3JhcHBlci5NYXBib3hHTCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC53cmFwcGVyLk1hcGJveEdMJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J21hcGJveGdsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ21hcGJveGdsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBhY2Nlc3NUb2tlbj1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBhY2Nlc3NUb2tlbjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gY2VudGVyXz17bGF0OiAwLCBsbmc6IDB9XG4gICAgICAgICAqL1xuICAgICAgICBjZW50ZXJfOiB7bGF0OiAwLCBsbmc6IDB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29udmVydERhdGFUb0dlb0pzb249dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjb252ZXJ0RGF0YVRvR2VvSnNvbjogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGRhdGFfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQXNzdW1pbmcgdGhlcmUgaXMganVzdCAxIHNvdXJjZSBmb3IgZGF0YSBjaGFuZ2VzLlxuICAgICAgICAgKiBDcmVhdGUgYSB0aWNrZXQgaW4gY2FzZSBpdCBuZWVkcyB0byBnZXQgZW5oYW5jZWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkYXRhU291cmNlSWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YVNvdXJjZUlkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCBsYXllcnMgdG8gYWRkIHRvIHRoZSBtYXAgc3R5bGUuXG4gICAgICAgICAqIGJlZm9yZUlkIGlzIGEgY3VzdG9tIHByb3BlcnR5IHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCBhcyB0aGUgc2Vjb25kIHBhcmFtIGZvcjpcbiAgICAgICAgICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL2FwaS8jbWFwI2FkZGxheWVyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IGxheWVyc189bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbGF5ZXJzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9zdHlsZS1zcGVjL1xuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8U3RyaW5nfSBtYXBib3hTdHlsZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBtYXBib3hTdHlsZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEYXRhIHNvdXJjZXMgZm9yIHRoZSBtYXAuXG4gICAgICAgICAqIGlkIGlzIGEgY3VzdG9tIHByb3BlcnR5IHdoaWNoIHdpbGwgZ2V0IHBhc3NlZCBhcyB0aGUgZmlyc3QgcGFyYW0gZm9yOlxuICAgICAgICAgKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvYXBpLyNtYXAjYWRkc291cmNlXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdFtdfG51bGx9IHNvdXJjZXNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNvdXJjZXNfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHN0eWxlOiB7cG9zaXRpb246ICdyZWxhdGl2ZScsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnfSxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHN0eWxlOiB7cG9zaXRpb246ICdhYnNvbHV0ZScsIGhlaWdodDogJzEwMCUnLCB3aWR0aDogJzEwMCUnfSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwJSd9XG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHpvb21fPTNcbiAgICAgICAgICovXG4gICAgICAgIHpvb21fOiAzXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGNlbnRlciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDZW50ZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2VudGVyTWFwKHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRhdGEgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREYXRhKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wudXBkYXRlRGF0YSh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRhdGEgICAgICAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZUlkOiBtZS5kYXRhU291cmNlSWQsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgOiBtZS5pZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxheWVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExheWVycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5hZGRMYXllcnMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIGxheWVycyA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWFwYm94U3R5bGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXBib3hTdHlsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5zZXRTdHlsZSh7XG4gICAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IG1lLmFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLmRlc3Ryb3koe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaWQgICAgIDogbWUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBtZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjZW50ZXIgICAgIDogbWUuY2VudGVyLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBtYXBib3hTdHlsZTogbWUubWFwYm94U3R5bGUsXG4gICAgICAgICAgICAgICAgem9vbSAgICAgICA6IG1lLnpvb21cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5kYXRhICAgICAgICAgPSBtZS5kYXRhO1xuICAgICAgICAgICAgICAgIG9wdHMuZGF0YVNvdXJjZUlkID0gbWUuZGF0YVNvdXJjZUlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWUubGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5sYXllcnMgPSBtZS5sYXllcnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZS5zb3VyY2VzKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5zb3VyY2VzID0gbWUuc291cmNlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuY3JlYXRlKG9wdHMpLnRoZW4obWUub25NYXBNb3VudGVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc291cmNlcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge09iamVjdFtdfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNvdXJjZXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuYWRkU291cmNlcyh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWQsXG4gICAgICAgICAgICAgICAgc291cmNlczogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB6b29tIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFpvb20odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLnpvb20oe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaWQgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgem9vbSAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhdXRvUmVzaXplKCkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5hdXRvUmVzaXplKHtcbiAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgY2VudGVyIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENlbnRlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxvbmcpIHtcbiAgICAgICAgICAgIHZhbHVlLmxuZyA9IHZhbHVlLmxvbmc7XG4gICAgICAgICAgICBkZWxldGUgdmFsdWUubG9uZztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBkYXRhIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0RGF0YSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuY29udmVydERhdGFUb0dlb0pzb24pIHtcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5jb252ZXJ0VG9HZW9Kc29uKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgY29tcG9uZW50LmNlbnRlciA9IHt9IG9yIGNvbXBvbmVudC5mbHlUbygpIGluc3RlYWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUubGF0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlLmxuZ1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gYW5pbWF0ZT1mYWxzZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjZW50ZXJNYXAodmFsdWUsIGFuaW1hdGU9ZmFsc2UpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuY2VudGVyKHtcbiAgICAgICAgICAgIGFuaW1hdGU6IGFuaW1hdGUsXG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgbGF0ICAgIDogdmFsdWUubGF0LFxuICAgICAgICAgICAgbG5nICAgIDogdmFsdWUubG5nXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3RbXX0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IE9iamVjdCBtYXRjaGluZyB0aGUgZ2VvanNvbiBmb3JtYXRcbiAgICAgKi9cbiAgICBjb252ZXJ0VG9HZW9Kc29uKGRhdGEpIHtcbiAgICAgICAgY29uc3QgZ2VvSnNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUgICAgOiAnRmVhdHVyZUNvbGxlY3Rpb24nLFxuICAgICAgICAgICAgZmVhdHVyZXM6IFtdXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy8gdG9kbzogdGhpcyBuZWVkcyB0byBnZXQgbW9yZSBnZW5lcmljXG4gICAgICAgICAgICBnZW9Kc29uLmZlYXR1cmVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGZWF0dXJlJyxcblxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlICAgOiBpdGVtLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzZXMgICAgOiBpdGVtLmNhc2VzLFxuICAgICAgICAgICAgICAgICAgICBkZWF0aHMgICA6IGl0ZW0uZGVhdGhzLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICA6IGl0ZW0uY291bnRyeUluZm8uaXNvMixcbiAgICAgICAgICAgICAgICAgICAgcmVjb3ZlcmVkOiBpdGVtLnJlY292ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgdGltZSAgICAgOiBpdGVtLnVwZGF0ZWRcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSAgICAgICA6ICdQb2ludCcsXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiBbaXRlbS5jb3VudHJ5SW5mby5sb25nLCBpdGVtLmNvdW50cnlJbmZvLmxhdF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZ2VvSnNvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZS5sYXRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUubG5nXG4gICAgICovXG4gICAgZmx5VG8odmFsdWUpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIHZhbHVlID0gbWUuYmVmb3JlU2V0Q2VudGVyKHZhbHVlLCBudWxsKTsgLy8gbG9uZyA9PiBsbmcgaWYgbmVlZGVkXG5cbiAgICAgICAgbWUuX2NlbnRlciA9IHtsYXQ6IHZhbHVlLmxhdCwgbG5nOiB2YWx1ZS5sbmd9OyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgbWUuY2VudGVyTWFwKHZhbHVlLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byB0cmlnZ2VyIGxvZ2ljIGFmdGVyIHRoZSBtYXAgZ290IG1vdW50ZWQgaW50byB0aGUgZG9tXG4gICAgICovXG4gICAgb25NYXBNb3VudGVkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmxheWVySWRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5vcHRpb25zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLm9wdGlvbnMudmFsaWRhdGUgPSB0cnVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldEZpbHRlcihkYXRhKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLnNldEZpbHRlcih7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgbGF5ZXJJZDogZGF0YS5sYXllcklkLFxuICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zLFxuICAgICAgICAgICAgdmFsdWUgIDogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLm9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy52YWxpZGF0ZSA9IHRydWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldExheW91dFByb3BlcnR5KGRhdGEpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuc2V0TGF5b3V0UHJvcGVydHkoe1xuICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgIDogdGhpcy5pZCxcbiAgICAgICAgICAgIGtleSAgICA6IGRhdGEua2V5LFxuICAgICAgICAgICAgbGF5ZXJJZDogZGF0YS5sYXllcklkLFxuICAgICAgICAgICAgb3B0aW9uczogZGF0YS5vcHRpb25zLFxuICAgICAgICAgICAgdmFsdWUgIDogZGF0YS52YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEubGF5ZXJJZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmtleVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLm9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRhdGEub3B0aW9ucy52YWxpZGF0ZSA9IHRydWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqL1xuICAgIHNldFBhaW50UHJvcGVydHkoZGF0YSkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5zZXRQYWludFByb3BlcnR5KHtcbiAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWQsXG4gICAgICAgICAgICBrZXkgICAgOiBkYXRhLmtleSxcbiAgICAgICAgICAgIGxheWVySWQ6IGRhdGEubGF5ZXJJZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGRhdGEub3B0aW9ucyxcbiAgICAgICAgICAgIHZhbHVlICA6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYXBib3hHTCk7XG5cbmV4cG9ydCB7TWFwYm94R0wgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5CYXNlXG4gKi9cbmNsYXNzIENoZWNrQm94IGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLkNoZWNrQm94J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5DaGVja0JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjaGVja2JveGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NoZWNrYm94ZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY2hlY2tlZF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tY2hlY2tib3hmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVMYWJlbF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZVZhbHVlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlVmFsdWVMYWJlbF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZV89J2NoZWNrYm94J1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlXzogJ2NoZWNrYm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbGFiZWxUZXh0Xz0nTGFiZWxUZXh0J1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxUZXh0XzogJ0xhYmVsVGV4dCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkZWZhdWx0cyB0byBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8U3RyaW5nfSBsYWJlbFdpZHRoXz0xNTBcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsV2lkdGhfOiAxNTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IFRoZSBuYW1lIChncm91cCkgb2YgdGhlIGlucHV0IGRvbSBub2RlXG4gICAgICAgICAqL1xuICAgICAgICBuYW1lXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHZhbHVlTGFiZWxUZXh0Xz0nVmFsdWVMYWJlbCdcbiAgICAgICAgICovXG4gICAgICAgIHZhbHVlTGFiZWxUZXh0XzogJ1ZhbHVlTGFiZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWxhYmVsJ11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1pbnB1dCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtdmFsdWUtbGFiZWwnXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUpLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IHZkb20uY25bMV0sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsICAgPSB2ZG9tLmNuWzJdO1xuXG4gICAgICAgIGlucHV0RWwuaWQgPSB2YWx1ZUxhYmVsLmZvciA9IG1lLmlkICsgJy1pbnB1dCc7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNoYW5nZToge1xuICAgICAgICAgICAgICAgIGZuICAgOiBtZS5vbklucHV0VmFsdWVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsVmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SGlkZVZhbHVlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMl0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dFR5cGUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SW5wdXRUeXBlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLnR5cGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsVGV4dCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFdpZHRoIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxXaWR0aCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMF0ud2lkdGggPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBuYW1lIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE5hbWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0ubmFtZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgICAgIHZkb20uY25bMV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlTGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVWYWx1ZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzJdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRyaWdnZXJlZCB3aGVuIGEgdXNlciBjaGVja3MgYSBjaGVja2JveCBpbnB1dC5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNoZWNrZWQgPSBkYXRhLnRhcmdldC5jaGVja2VkO1xuXG4gICAgICAgIG1lLl9jaGVja2VkID0gY2hlY2tlZDsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIC8vIGtlZXAgdGhlIHZkb20gJiB2bm9kZSBpbiBzeW5jIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgICAgICBtZS52ZG9tLmNuWzFdLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICBtZS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSBjaGVja2VkICsgJyc7XG5cbiAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgIG9sZFZhbHVlIDogIWNoZWNrZWQsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IGNoZWNrZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDaGVja0JveCk7XG5cbmV4cG9ydCB7Q2hlY2tCb3ggYXMgZGVmYXVsdH07IiwiaW1wb3J0IFNwaW5Eb3duVHJpZ2dlciAgIGZyb20gJy4vdHJpZ2dlci9TcGluRG93bi5tanMnO1xuaW1wb3J0IFNwaW5VcFRyaWdnZXIgICAgIGZyb20gJy4vdHJpZ2dlci9TcGluVXAubWpzJztcbmltcG9ydCBTcGluVXBEb3duVHJpZ2dlciBmcm9tICcuL3RyaWdnZXIvU3BpblVwRG93bi5tanMnO1xuaW1wb3J0IFRleHQgICAgICAgICAgICAgIGZyb20gJy4vVGV4dC5tanMnO1xuXG4vKipcbiAqIFVzZXMgYW4gaW5wdXQgdHlwZSBudW1iZXIgYW5kIG9wdGlvbmFsbHkgcHJvdmlkZXMgY3VzdG9tIHNwaW4gYnV0dG9ucyBmb3IgdXAgYW5kIGRvd25cbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5OdW1iZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlRleHRcbiAqL1xuY2xhc3MgTnVtYmVyIGV4dGVuZHMgVGV4dCB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciB0cmlnZ2VyUG9zaXRpb25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IHRyaWdnZXJQb3NpdGlvbnM9WydyaWdodCcsICdzaWRlcyddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlclBvc2l0aW9uczogWydyaWdodCcsICdzaWRlcyddXG4gICAgfX1cblxuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5OdW1iZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLk51bWJlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdudW1iZXJmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdudW1iZXJmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLW51bWJlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1udW1iZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJbXXxudWxsfSBleGNsdWRlZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBleGNsdWRlZFZhbHVlczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZhbHNlIG9ubHkgYWxsb3dzIGNoYW5naW5nIHRoZSBmaWVsZCB1c2luZyB0aGUgc3BpbiBidXR0b25zXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGlucHV0RWRpdGFibGVfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0RWRpdGFibGVfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBpbnB1dFR5cGVfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J251bWJlcidcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ251bWJlcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heFZhbHVlXz0xMDBcbiAgICAgICAgICovXG4gICAgICAgIG1heFZhbHVlXzogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtaW5WYWx1ZV89MFxuICAgICAgICAgKi9cbiAgICAgICAgbWluVmFsdWVfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBzdGVwU2l6ZV89MVxuICAgICAgICAgKi9cbiAgICAgICAgc3RlcFNpemVfOiAxLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzOiAncmlnaHQnLCAnc2lkZXMnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHJpZ2dlclBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJQb3NpdGlvbl86ICdyaWdodCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VTcGluQnV0dG9uc189dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlU3BpbkJ1dHRvbnNfOiB0cnVlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VycygpO1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbnB1dEVkaXRhYmxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0RWRpdGFibGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCA9IG1lLmdldElucHV0RWwoKSxcbiAgICAgICAgICAgIHN0eWxlICAgPSBpbnB1dEVsLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZGVsZXRlIHN0eWxlLnBvaW50ZXJFdmVudHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEVsS2V5KCdtYXgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtaW5WYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNaW5WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VJbnB1dEVsS2V5KCdtaW4nLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdGVwU2l6ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTdGVwU2l6ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICB2YWwgPSBtZS52YWx1ZSxcbiAgICAgICAgICAgIG1vZHVsbztcblxuICAgICAgICBtZS5jaGFuZ2VJbnB1dEVsS2V5KCdzdGVwJywgdmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgICAgICAgIG1vZHVsbyA9ICh2YWwgLSBtZS5taW5WYWx1ZSkgJSB2YWx1ZTtcblxuICAgICAgICAgICAgaWYgKG1vZHVsbyAhPT0gMCkgeyAvLyBmaW5kIHRoZSBjbG9zZXN0IHZhbGlkIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsbyAvIHZhbHVlID4gMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICAgICAgKHZhbCArIHZhbHVlIC0gbW9kdWxvIDwgbWUubWF4VmFsdWUpIHttZS52YWx1ZSA9IHZhbCArIHZhbHVlIC0gbW9kdWxvO31cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsIC0gbW9kdWxvID4gbWUubWluVmFsdWUpICAgICAgICAge21lLnZhbHVlID0gdmFsIC0gbW9kdWxvO31cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAgICAgICh2YWwgLSBtb2R1bG8gPiBtZS5taW5WYWx1ZSkgICAgICAgICB7bWUudmFsdWUgPSB2YWwgLSBtb2R1bG87fVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2YWwgKyB2YWx1ZSAtIG1vZHVsbyA8IG1lLm1heFZhbHVlKSB7bWUudmFsdWUgPSB2YWwgKyB2YWx1ZSAtIG1vZHVsbzt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0cmlnZ2VyUG9zaXRpb24gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VHJpZ2dlclBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlU3BpbkJ1dHRvbnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVc2VTcGluQnV0dG9ucyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvbGRWYWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSB0cmlnZ2VyUG9zaXRpb24gY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRUcmlnZ2VyUG9zaXRpb24odmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJlZm9yZVNldEVudW1WYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsICd0cmlnZ2VyUG9zaXRpb24nKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IG1lLnZhbHVlO1xuXG4gICAgICAgIGlmICghdmFsdWUgJiYgIW1lLnJlcXVpcmVkKSB7XG4gICAgICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHBhcnNlSW50KHZhbHVlKTsgLy8gdG9kbzogc3VwcG9ydCBmb3Igb3RoZXIgbnVtYmVyIHR5cGVzXG5cbiAgICAgICAgICAgIGlmICghTmVvLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG1lLl92YWx1ZSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlIC0gdmFsdWUgJSBtZS5zdGVwU2l6ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KG1lLm1pblZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihtZS5tYXhWYWx1ZSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgZGF0YS52YWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU3BpbkJ1dHRvbkRvd25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUgfHwgKG1lLm1heFZhbHVlICsgbWUuc3RlcFNpemUpLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBNYXRoLm1heChtZS5taW5WYWx1ZSwgb2xkVmFsdWUgLSBtZS5zdGVwU2l6ZSk7XG5cbiAgICAgICAgaWYgKG1lLmV4Y2x1ZGVkVmFsdWVzKSB7XG4gICAgICAgICAgICB3aGlsZShtZS5leGNsdWRlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWF4KG1lLm1pblZhbHVlLCB2YWx1ZSAtIG1lLnN0ZXBTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25TcGluQnV0dG9uVXBDbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUgfHwgKG1lLm1pblZhbHVlIC0gbWUuc3RlcFNpemUpLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBNYXRoLm1pbihtZS5tYXhWYWx1ZSwgb2xkVmFsdWUgKyBtZS5zdGVwU2l6ZSk7XG5cbiAgICAgICAgaWYgKG1lLmV4Y2x1ZGVkVmFsdWVzKSB7XG4gICAgICAgICAgICB3aGlsZShtZS5leGNsdWRlZFZhbHVlcy5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKG1lLm1heFZhbHVlLCB2YWx1ZSArIG1lLnN0ZXBTaXplKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVwZGF0ZVRyaWdnZXJzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJpZ2dlcnMgPSBtZS50cmlnZ2VycyB8fCBbXTtcblxuICAgICAgICBpZiAobWUudXNlU3BpbkJ1dHRvbnMpIHtcbiAgICAgICAgICAgIGlmIChtZS50cmlnZ2VyUG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1RyaWdnZXIoJ3NwaW51cGRvd24nKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vycy5wdXNoKFNwaW5VcERvd25UcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGluZG93bicsIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGludXAnLCAgIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5oYXNUcmlnZ2VyKCdzcGluZG93bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzLnB1c2goU3BpbkRvd25UcmlnZ2VyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1lLmhhc1RyaWdnZXIoJ3NwaW51cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJzLnB1c2goU3BpblVwVHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbnVwZG93bicsIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW5kb3duJywgICB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGludXAnLCAgICAgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbnVwZG93bicsIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnRyaWdnZXJzID0gdHJpZ2dlcnM7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhOdW1iZXIpO1xuXG5leHBvcnQge051bWJlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29udGFpbmVyICAgICBmcm9tICcuLi8uLi9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IFBpY2tlclRyaWdnZXIgZnJvbSAnLi90cmlnZ2VyL1BpY2tlci5tanMnO1xuaW1wb3J0IFRleHQgICAgICAgICAgZnJvbSAnLi9UZXh0Lm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBUaGUgYWJzdHJhY3QgcGlja2VyIGZpZWxkIHByb3ZpZGVzIGFuIGFycm93IGRvd24gdHJpZ2dlciB3aGljaCBvcGVucyBhIGZsb2F0aW5nIGNvbnRhaW5lciB0byBwcm92aWRlXG4gKiBtb3JlIGRhdGEgc2VsZWN0aW9uIG9wdGlvbnNcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5QaWNrZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlRleHRcbiAqIEBhYnN0cmFjdFxuICovXG5jbGFzcyBQaWNrZXIgZXh0ZW5kcyBUZXh0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuUGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5QaWNrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGlja2VyZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncGlja2VyZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcmVzIHRoZSBkYXRhIGZyb20gdGhlIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIGNhbGwgKHBpY2tlciAmIGJvZHkgRG9tUmVjdHMpXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbGllbnRSZWN0cz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsaWVudFJlY3RzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1waWNrZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAnRW50ZXInIDogJ29uS2V5RG93bkVudGVyJyxcbiAgICAgICAgICAgICdFc2NhcGUnOiAnb25LZXlEb3duRXNjYXBlJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbWF0Y2hQaWNrZXJXaWR0aD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtYXRjaFBpY2tlcldpZHRoOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHBpY2tlcj1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlcjogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3MgdG8gcGFzcyB0byB0aGUgcGlja2VyIGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gcGlja2VyQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VySGVpZ2h0PTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VySGVpZ2h0OiAxMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBwaWNrZXJJc01vdW50ZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VySXNNb3VudGVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VyTWF4SGVpZ2h0PTIwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VyTWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgd2lkdGggb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VyV2lkdGg9MTAwXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJXaWR0aDogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fE9iamVjdFtdfSB0cmlnZ2Vycz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyczogW3tcbiAgICAgICAgICAgIG1vZHVsZTogUGlja2VyVHJpZ2dlclxuICAgICAgICB9XVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uY29udGFpbmVyLkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlckNvbXBvbmVudCA9IG1lLmNyZWF0ZVBpY2tlckNvbXBvbmVudCgpO1xuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKENvbnRhaW5lciwge1xuICAgICAgICAgICAgYXBwTmFtZSAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgY2xzICAgICAgOiBbJ25lby1waWNrZXItY29udGFpbmVyJywgJ25lby1jb250YWluZXInXSxcbiAgICAgICAgICAgIGhlaWdodCAgIDogbWUucGlja2VySGVpZ2h0LFxuICAgICAgICAgICAgaWQgICAgICAgOiBtZS5nZXRQaWNrZXJJZCgpLFxuICAgICAgICAgICAgaXRlbXMgICAgOiBwaWNrZXJDb21wb25lbnQgPyBbcGlja2VyQ29tcG9uZW50XSA6IFtdLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiBtZS5waWNrZXJNYXhIZWlnaHQsXG4gICAgICAgICAgICB2ZG9tICAgICA6IHtjbjogW10sIHRhYkluZGV4OiAtMX0sXG4gICAgICAgICAgICB3aWR0aCAgICA6IG1lLnBpY2tlcldpZHRoLFxuICAgICAgICAgICAgLi4ubWUucGlja2VyQ29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBzaWxlbnRcbiAgICAgKi9cbiAgICBhcHBseUNsaWVudFJlY3RzKHNpbGVudCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYm9keVJlY3QgICAgPSBtZS5jbGllbnRSZWN0c1syXSxcbiAgICAgICAgICAgIGlucHV0UmVjdCAgID0gbWUuY2xpZW50UmVjdHNbMV0sXG4gICAgICAgICAgICB0cmlnZ2VyUmVjdCA9IG1lLmNsaWVudFJlY3RzWzBdLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgPSBtZS5waWNrZXIudmRvbSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgID0gbWUubWF0Y2hQaWNrZXJXaWR0aCA/IChpbnB1dFJlY3Qud2lkdGggLSAxKSA6IG1lLnBpY2tlcldpZHRoO1xuXG4gICAgICAgIG1lLnBpY2tlcldpZHRoID0gd2lkdGg7XG5cbiAgICAgICAgT2JqZWN0LmFzc2lnbih2ZG9tLnN0eWxlLCB7XG4gICAgICAgICAgICBsZWZ0IDogYCR7dHJpZ2dlclJlY3QubGVmdCArIHRyaWdnZXJSZWN0LndpZHRoIC0gd2lkdGh9cHhgLFxuICAgICAgICAgICAgdG9wICA6IGAke3RyaWdnZXJSZWN0LnRvcCArIHRyaWdnZXJSZWN0LmhlaWdodCArIDF9cHhgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YFxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5waWNrZXJbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja11cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tTY29wZV1cbiAgICAgKi9cbiAgICBnZXRDbGllbnRSZWN0c1RoZW5TaG93KGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCh7XG4gICAgICAgICAgICBpZDogW21lLmlkLCBtZS5pZCArICctaW5wdXQtd3JhcHBlcicsICdib2R5J11cbiAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmNsaWVudFJlY3RzID0gZGF0YTtcbiAgICAgICAgICAgIG1lLnNob3dQaWNrZXIoY2FsbGJhY2ssIGNhbGxiYWNrU2NvcGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwaWNrZXIgaW5zdGFuY2UgYW5kIGNyZWF0ZXMgaXQgaW4gY2FzZSBpdCBkb2VzIG5vdCBleGlzdCB5ZXRcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5CYXNlfVxuICAgICAqL1xuICAgIGdldFBpY2tlcigpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoIW1lLnBpY2tlcikge1xuICAgICAgICAgICAgbWUucGlja2VyID0gbWUuY3JlYXRlUGlja2VyKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWUucGlja2VyO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRQaWNrZXJJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX19waWNrZXInO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIGhpZGVQaWNrZXIoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcGlja2VyID0gbWUuZ2V0UGlja2VyKCksXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmIChtZS5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIFZEb21VdGlsLnJlbW92ZVZkb21DaGlsZCh2ZG9tLCBtZS5nZXRQaWNrZXJJZCgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnBpY2tlcklzTW91bnRlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICAgIG1lLl92ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIHBpY2tlci5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgcGlja2VyLm1vdW50ZWQgPSBtZS5waWNrZXJJc01vdW50ZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkZvY3VzTGVhdmUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIGlubGluZSB3aWxsIHRyaWdnZXIgYW4gdmRvbSB1cGRhdGUsIHNvIGhpZGUgcGlja2VyIHNob3VsZCBiZSBzaWxlbnRcbiAgICAgICAgaWYgKG1lLmxhYmVsUG9zaXRpb24gPT09ICdpbmxpbmUnICYmIChtZS52YWx1ZSA9PT0gJycgfHwgbWUudmFsdWUgPT09IG51bGwpKSB7XG4gICAgICAgICAgICBtZS5oaWRlUGlja2VyKHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIub25Gb2N1c0xlYXZlKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEsIGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgIGlmICghdGhpcy5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdyhjYWxsYmFjaywgY2FsbGJhY2tTY29wZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVzY2FwZShkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLnBpY2tlcklzTW91bnRlZCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlclxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblBpY2tlclRyaWdnZXJDbGljaygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5oaWRlUGlja2VyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5nZXRDbGllbnRSZWN0c1RoZW5TaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja11cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tTY29wZV1cbiAgICAgKi9cbiAgICBzaG93UGlja2VyKGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgcGlja2VyID0gbWUuZ2V0UGlja2VyKCksXG4gICAgICAgICAgICB2ZG9tICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmFwcGx5Q2xpZW50UmVjdHModHJ1ZSk7XG4gICAgICAgIHZkb20uY24ucHVzaChwaWNrZXIudmRvbSk7XG5cbiAgICAgICAgbWUucGlja2VySXNNb3VudGVkID0gdHJ1ZTtcblxuICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBwaWNrZXIubW91bnRlZCA9IG1lLnBpY2tlcklzTW91bnRlZDtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoY2FsbGJhY2tTY29wZSB8fCBtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUGlja2VyKTtcblxuZXhwb3J0IHtQaWNrZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE51bWJlciBmcm9tICcuL051bWJlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5SYW5nZVxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuTnVtYmVyXG4gKi9cbmNsYXNzIFJhbmdlIGV4dGVuZHMgTnVtYmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuUmFuZ2UnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlJhbmdlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3JhbmdlZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncmFuZ2VmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHNob3dzIGEgY2xlYXIgdHJpZ2dlciBpbiBjYXNlIHRoZSBmaWVsZCBoYXMgYSBub24gZW1wdHkgdmFsdWUuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNsZWFyYWJsZT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY2xlYXJhYmxlOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcmFuZ2VmaWVsZCcsJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1yYW5nZWZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgaW5wdXRUeXBlXyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdyYW5nZSdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3JhbmdlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB0aWNrbWFya3NfPVtdXG4gICAgICAgICAqL1xuICAgICAgICB0aWNrbWFya3NfOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUlucHV0RXZlbnQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHVzZUlucHV0RXZlbnQgOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc2FibGVzIHRoZSBmaWVsZC5OdW1iZXIgYnV0dG9uc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VJbnB1dEV2ZW50PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VTcGluQnV0dG9uczogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBtZS5kb21MaXN0ZW5lcnMsXG4gICAgICAgICAgICBpbnB1dEVsICAgICAgPSBtZS52ZG9tLmNuWzFdO1xuXG4gICAgICAgIGlmIChtZS51c2VJbnB1dEV2ZW50KSB7XG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgZm4gICAgOiBtZS5vbklucHV0VmFsdWVDaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgIDogbWUudmRvbS5jblsxXS5pZCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUgOiBtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dEVsLmNscyA9IFsnbmVvLXJhbmdlZmllbGQtaW5wdXQnXTsgLy8gcmVwbGFjZSBuZW8tdGV4dGZpZWxkLWlucHV0XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aWNrbWFya3MgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRpY2ttYXJrcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygndXBkYXRlVGlja21hcmtzJyk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSYW5nZSk7XG5cbmV4cG9ydCB7UmFuZ2UgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi8uLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgTGlzdCAgICAgICAgICAgIGZyb20gJy4uLy4uL2xpc3QvQmFzZS5tanMnO1xuaW1wb3J0IFBpY2tlciAgICAgICAgICBmcm9tICcuL1BpY2tlci5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICBmcm9tICcuLi8uLi9kYXRhL1N0b3JlLm1qcyc7XG5pbXBvcnQgVkRvbVV0aWwgICAgICAgIGZyb20gJy4uLy4uL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGEgZHJvcCBkb3duIGxpc3QgdG8gc2VsZWN0IG9uZSBvciBtdWx0aXBsZSBpdGVtc1xuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlNlbGVjdFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuUGlja2VyXG4gKi9cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFBpY2tlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlNlbGVjdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuU2VsZWN0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tc2VsZWN0ZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1zZWxlY3RmaWVsZCcsICduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkaXNwbGF5RmllbGQ9J25hbWUnXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwbGF5RmllbGQ6ICduYW1lJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xOdW1iZXJ8bnVsbH0gaGludFJlY29yZElkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhpbnRSZWNvcmRJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0Rvd24nICA6ICdvbktleURvd25Eb3duJyxcbiAgICAgICAgICAgICdFbnRlcicgOiAnb25LZXlEb3duRW50ZXInLFxuICAgICAgICAgICAgJ0VzY2FwZSc6ICdvbktleURvd25Fc2NhcGUnLFxuICAgICAgICAgICAgJ1JpZ2h0JyA6ICdvbktleURvd25SaWdodCcsXG4gICAgICAgICAgICAnVXAnICAgIDogJ29uS2V5RG93blVwJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGxhc3RNYW51YWxJbnB1dD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGxhc3RNYW51YWxJbnB1dDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5saXN0LkJhc2V9IGxpc3Q9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsaXN0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGxpc3RDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdENvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHBpY2tlciBjb250YWluZXIuIERlZmF1bHRzIHRvIHB4LlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gcGlja2VySGVpZ2h0PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckhlaWdodDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBmaXJzdCBtYXRjaGluZyByZXN1bHQgd2hpbGUgdHlwaW5nXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHR5cGVBaGVhZF89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZUFoZWFkXzogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmxpc3QgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBMaXN0LFxuICAgICAgICAgICAgZGlzcGxheUZpZWxkICA6IG1lLmRpc3BsYXlGaWVsZCxcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsOiB7c3RheUluTGlzdDogZmFsc2V9LFxuICAgICAgICAgICAgc2lsZW50U2VsZWN0ICA6IHRydWUsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgIDogbWUuc3RvcmUsXG4gICAgICAgICAgICAuLi5tZS5saXN0Q29uZmlnIHx8IHt9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmxpc3Qua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAge2ZuOiAnb25Db250YWluZXJLZXlEb3duRW50ZXInLCAga2V5OiAnRW50ZXInLCAgc2NvcGU6IG1lLmlkfSxcbiAgICAgICAgICAgIHtmbjogJ29uQ29udGFpbmVyS2V5RG93bkVzY2FwZScsIGtleTogJ0VzY2FwZScsIHNjb3BlOiBtZS5pZH1cbiAgICAgICAgKTtcblxuICAgICAgICBtZS5saXN0Lm9uKHtcbiAgICAgICAgICAgIGNyZWF0ZUl0ZW1zICAgICAgIDogbWUub25MaXN0Q3JlYXRlSXRlbXMsXG4gICAgICAgICAgICBpdGVtQ2xpY2sgICAgICAgICA6IG1lLm9uTGlzdEl0ZW1DbGljayxcbiAgICAgICAgICAgIGl0ZW1OYXZpZ2F0ZSAgICAgIDogbWUub25MaXN0SXRlbU5hdmlnYXRlLFxuICAgICAgICAgICAgc2VsZWN0UG9zdExhc3RJdGVtOiBtZS5mb2N1c0lucHV0RWwsXG4gICAgICAgICAgICBzZWxlY3RQcmVGaXJzdEl0ZW06IG1lLmZvY3VzSW5wdXRFbCxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1lLnR5cGVBaGVhZCkge1xuICAgICAgICAgICAgbWUudXBkYXRlVHlwZUFoZWFkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHN0b3JlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGZpbHRlcnM7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBmaWx0ZXJzID0gdmFsdWUuZmlsdGVycyB8fCBbXTtcblxuICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbmNsdWRlRW1wdHlWYWx1ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BlcmF0b3IgICAgICAgICAgOiAnbGlrZScsXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgICAgICAgICAgOiBtZS5kaXNwbGF5RmllbGQsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgICAgICAgOiBtZS52YWx1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhbHVlLmZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0eXBlQWhlYWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUeXBlQWhlYWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVR5cGVBaGVhZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbcHJldmVudEZpbHRlcj1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUsIHByZXZlbnRGaWx0ZXI9ZmFsc2UpIHtjb25zb2xlLmxvZygnYWZ0ZXJTZXRWYWx1ZScsIHZhbHVlKTtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICghcHJldmVudEZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc3RvcmUgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge09iamVjdHxOZW8uZGF0YS5TdG9yZXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHJldHVybnMge05lby5kYXRhLlN0b3JlfVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBTdG9yZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmxpc3QuQmFzZX1cbiAgICAgKi9cbiAgICBjcmVhdGVQaWNrZXJDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxpc3Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICovXG4gICAgZm9jdXNJbnB1dEVsKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUudXBkYXRlVHlwZUFoZWFkVmFsdWUobWUubGFzdE1hbnVhbElucHV0LCB0cnVlKTtcbiAgICAgICAgbWUudmFsdWUgPSBtZS5sYXN0TWFudWFsSW5wdXQ7XG5cbiAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmZvY3VzKHtcbiAgICAgICAgICAgIGlkOiBtZS5nZXRJbnB1dEVsSWQoKVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldElucHV0SGludEVsKCkge1xuICAgICAgICBsZXQgZWwgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHRoaXMudmRvbSwgdGhpcy5nZXRJbnB1dEhpbnRJZCgpKTtcbiAgICAgICAgcmV0dXJuIGVsICYmIGVsLnZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldElucHV0SGludElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfX2lucHV0LWhpbnQnXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3Qgc2VsZWN0ZWQgcmVjb3JkIG9yIG51bGxcbiAgICAgKiByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0UmVjb3JkKCkge1xuICAgICAgICBjb25zdCBsaXN0ICAgICAgPSB0aGlzLmxpc3QsXG4gICAgICAgICAgICAgIHJlY29yZEtleSA9IGxpc3Quc2VsZWN0aW9uTW9kZWwuZ2V0U2VsZWN0aW9uKClbMF07XG5cbiAgICAgICAgcmV0dXJuIHJlY29yZEtleSAmJiB0aGlzLnN0b3JlLmdldChsaXN0LmdldEl0ZW1SZWNvcmRJZChyZWNvcmRLZXkpKSB8fCBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uQ29udGFpbmVyS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oaWRlUGlja2VyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Db250YWluZXJLZXlEb3duRXNjYXBlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5mb2N1c0lucHV0RWwodGhpcy5oaWRlUGlja2VyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgIHRoaXMubGFzdE1hbnVhbElucHV0ID0gZGF0YS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkRvd24oZGF0YSkge1xuICAgICAgICB0aGlzLm9uS2V5RG93bkVudGVyKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25LZXlEb3duRW50ZXIoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdExpc3RJdGVtKCk7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1cGVyLm9uS2V5RG93bkVudGVyKGRhdGEsIG1lLnNlbGVjdExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5oaW50UmVjb3JkSWQpIHtcbiAgICAgICAgICAgIG1lLnZhbHVlID0gbWUuc3RvcmUuZ2V0KG1lLmhpbnRSZWNvcmRJZClbbWUuZGlzcGxheUZpZWxkXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25LZXlEb3duVXAoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdExhc3RMaXN0SXRlbSgpO1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhLCBtZS5zZWxlY3RMYXN0TGlzdEl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdCBpdGVtcyBnb3QgY3JlYXRlZCBvciB1cGRhdGVkXG4gICAgICogU2luY2UgdGhlIGxpc3QgJiBpbnB1dEhpbnQgdXBkYXRlIHdvdWxkIHJ1biBpbiBwYXJhbGxlbCA9PiBiZWZvcmUgZ2V0dGluZyB0aGUgbmV3IHZub2RlIGJhY2tcbiAgICAgKiB0aGlzIGNvdWxkIGNhdXNlIGludmFsaWQgc3RhdGVzLCBzbyB3ZSBkZWxheSB1cGRhdGVUeXBlQWhlYWRWYWx1ZSgpIHVudGlsIHRoZSBsaXN0IGlzIGRvbmUuXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uTGlzdENyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS50eXBlQWhlYWQpIHtcbiAgICAgICAgICAgIGlmIChtZS5waWNrZXIgJiYgbWUucGlja2VyLm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVUeXBlQWhlYWRWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MaXN0SXRlbUNsaWNrKHJlY29yZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgb2xkVmFsdWUgPSBtZS52YWx1ZSxcbiAgICAgICAgICAgIHZhbHVlICAgID0gcmVjb3JkW21lLmRpc3BsYXlGaWVsZF07XG5cbiAgICAgICAgaWYgKG1lLnZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgbWUuaGludFJlY29yZElkID0gbnVsbDtcbiAgICAgICAgICAgIG1lLl92YWx1ZSAgICAgICA9IHZhbHVlO1xuICAgICAgICAgICAgbWUuZ2V0SW5wdXRIaW50RWwoKS52YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIG1lLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCB0cnVlKTsgLy8gcHJldmVudCB0aGUgbGlzdCBmcm9tIGdldHRpbmcgZmlsdGVyZWRcblxuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgIHJlY29yZDogcmVjb3JkLFxuICAgICAgICAgICAgICAgIHZhbHVlIDogcmVjb3JkW21lLnN0b3JlLmtleVByb3BlcnR5XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKi9cbiAgICBvbkxpc3RJdGVtTmF2aWdhdGUocmVjb3JkKSB7XG4gICAgICAgIHRoaXMub25MaXN0SXRlbUNsaWNrKHJlY29yZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzZWxlY3RGaXJzdExpc3RJdGVtKCkge1xuICAgICAgICB0aGlzLnNlbGVjdExpc3RJdGVtKDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc2VsZWN0TGFzdExpc3RJdGVtKCkge1xuICAgICAgICB0aGlzLnNlbGVjdExpc3RJdGVtKHRoaXMuc3RvcmUuZ2V0Q291bnQoKSAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgbm8gaW5kZXggaXMgcGFzc2VkLCB0aGUgaW5kZXggbWF0Y2hpbmcgdG8gdGhlIGZpZWxkIGlucHV0IHdpbGwgZ2V0IHVzZWQgKDAgaWYgbm9uZSlcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2luZGV4XVxuICAgICAqL1xuICAgIHNlbGVjdExpc3RJdGVtKGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFOZW8uaXNOdW1iZXIoaW5kZXgpKSB7XG4gICAgICAgICAgICBpZiAobWUuaGludFJlY29yZElkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBtZS5zdG9yZS5pbmRleE9mS2V5KG1lLmhpbnRSZWNvcmRJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1lLm9uTGlzdEl0ZW1OYXZpZ2F0ZShtZS5zdG9yZS5nZXRBdChpbmRleCkpO1xuICAgICAgICBtZS5saXN0LnNlbGVjdEl0ZW0oaW5kZXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVUeXBlQWhlYWQoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlucHV0RWwgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLnZkb20sIG1lLmlkICsgJy1pbnB1dCcpLFxuICAgICAgICAgICAgdmRvbSAgICA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKG1lLnR5cGVBaGVhZCkge1xuICAgICAgICAgICAgaW5wdXRFbC5wYXJlbnROb2RlLmNuW2lucHV0RWwuaW5kZXhdID0ge1xuICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8taW5wdXQtZmllbGQtd3JhcHBlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgICAgOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxuICAgICAgICAgICAgICAgICAgICBhdXRvY29ycmVjdCA6ICdvZmYnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgICAgICAgICA6IFsnbmVvLXRleHRmaWVsZC1pbnB1dCcsICduZW8tdHlwZWFoZWFkLWlucHV0J10sXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgICAgIDogbWUuZ2V0SW5wdXRIaW50SWQoKSxcbiAgICAgICAgICAgICAgICAgICAgc3BlbGxjaGVjayAgOiAnZmFsc2UnXG4gICAgICAgICAgICAgICAgfSwgaW5wdXRFbC52ZG9tXVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVkRvbVV0aWwucmVwbGFjZVZkb21DaGlsZCh2ZG9tLCBpbnB1dEVsLnBhcmVudE5vZGUuaWQsIGlucHV0RWwudmRvbSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBbdmFsdWVdXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVUeXBlQWhlYWRWYWx1ZSh2YWx1ZSwgc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoYXNNYXRjaCAgICA9IGZhbHNlLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgPSBtZS5zdG9yZSxcbiAgICAgICAgICAgIGkgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICAgID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0SGludEVsID0gbWUuZ2V0SW5wdXRIaW50RWwoKSxcbiAgICAgICAgICAgIHN0b3JlVmFsdWU7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbHVlID0gbWUudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIHN0b3JlVmFsdWUgPSBzdG9yZS5pdGVtc1tpXVttZS5kaXNwbGF5RmllbGRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0b3JlVmFsdWUudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhc01hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaGFzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpbnB1dEhpbnRFbC52YWx1ZSA9IHZhbHVlICsgc3RvcmVWYWx1ZS5zdWJzdHIodmFsdWUubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBtZS5oaW50UmVjb3JkSWQgPSBzdG9yZS5pdGVtc1tpXVtzdG9yZS5rZXlQcm9wZXJ0eSB8fCBzdG9yZS5tb2RlbC5rZXlQcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWhhc01hdGNoICYmIGlucHV0SGludEVsKSB7XG4gICAgICAgICAgICBpbnB1dEhpbnRFbC52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgbWUuaGludFJlY29yZElkID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0b3JlID0gbWUuc3RvcmUsXG4gICAgICAgICAgICBmaWx0ZXI7XG5cbiAgICAgICAgaWYgKHN0b3JlICYmICFOZW8uaXNFbXB0eShzdG9yZS5maWx0ZXJzKSkge1xuICAgICAgICAgICAgZmlsdGVyID0gc3RvcmUuZ2V0RmlsdGVyKG1lLmRpc3BsYXlGaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIudmFsdWUgPSBtZS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS50eXBlQWhlYWQpIHtcbiAgICAgICAgICAgIGlmICghKG1lLnBpY2tlciAmJiBtZS5waWNrZXIuY29udGFpbnNGb2N1cykpIHtcbiAgICAgICAgICAgICAgICBtZS51cGRhdGVUeXBlQWhlYWRWYWx1ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIFRoZSBzZWxlY3QgZXZlbnQgZmlyZXMgd2hlbiBhIGxpc3QgaXRlbSBnZXRzIHNlbGVjdGVkXG4gKiBAZXZlbnQgc2VsZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gKiBAcGFyYW0ge3ZhbHVlfSByZWNvcmRbc3RvcmUua2V5UHJvcGVydHldXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNlbGVjdCk7XG5cbmV4cG9ydCB7U2VsZWN0IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIFVzZWQgYnkgZm9ybS5maWVsZC5QaWNrZXJcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlclxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKi9cbmNsYXNzIFBpY2tlciBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlBpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1waWNrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHJpZ2dlci1waWNrZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNhcmV0LWRvd24nXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2FyZXQtZG93bicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0ncGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAncGlja2VyJ1xuICAgIH19XG5cbiAgICBvblRyaWdnZXJDbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmllbGQub25QaWNrZXJUcmlnZ2VyQ2xpY2soKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBpY2tlcik7XG5cbmV4cG9ydCB7UGlja2VyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgdmFsdWUgb2YgYSBOdW1iZXJGaWVsZFxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpbkRvd25cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBTcGluRG93biBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluRG93bicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXNwaW5kb3duJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItc3BpbmRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhbGlnbl89J3N0YXJ0J1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246ICdzdGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2hldnJvbi1sZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNoZXZyb24tbGVmdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nc3BpbmRvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdzcGluZG93bidcbiAgICB9fVxuXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpZWxkLm9uU3BpbkJ1dHRvbkRvd25DbGljaygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3BpbkRvd24pO1xuXG5leHBvcnQge1NwaW5Eb3duIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgdmFsdWUgb2YgYSBOdW1iZXJGaWVsZFxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgU3BpblVwIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXNwaW51cCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXNwaW51cCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaWNvbkNscz0nZmEgZmEtY2hldnJvbi1yaWdodCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGV2cm9uLXJpZ2h0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdzcGludXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdzcGludXAnXG4gICAgfX1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5vblNwaW5CdXR0b25VcENsaWNrKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTcGluVXApO1xuXG5leHBvcnQge1NwaW5VcCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBDb21iaW5lcyBzcGluIHVwICYgZG93biBpbnNpZGUgb25lIHRyaWdnZXJcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcERvd25cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBTcGluVXBEb3duIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwRG93bidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXBEb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItc3BpbnVwZG93bidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXNwaW51cGRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1maWVsZC10cmlnZ2VyJywgJ25lby1zcGluLWJ1dHRvbnMnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1maWVsZC10cmlnZ2VyJywgJ25lby1zcGluLWJ1dHRvbnMnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc3BpbkJ1dHRvbkRvd25JY29uQ2xzPSdmYSBmYS1jaGV2cm9uLWRvd24nXG4gICAgICAgICAqL1xuICAgICAgICBzcGluQnV0dG9uRG93bkljb25DbHM6ICdmYSBmYS1jaGV2cm9uLWRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBzcGluQnV0dG9uVXBJY29uQ2xzPSdmYSBmYS1jaGV2cm9uLXVwJ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BpbkJ1dHRvblVwSWNvbkNsczogJ2ZhIGZhLWNoZXZyb24tdXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3NwaW51cGRvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6ICdzcGludXBkb3duJ1xuICAgIH19XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuID0gW1xuICAgICAgICAgICAge2NsczogWyduZW8tc3Bpbi1idXR0b24nLCAnbmVvLXVwJywgICBtZS5zcGluQnV0dG9uVXBJY29uQ2xzXX0sXG4gICAgICAgICAgICB7Y2xzOiBbJ25lby1zcGluLWJ1dHRvbicsICduZW8tZG93bicsIG1lLnNwaW5CdXR0b25Eb3duSWNvbkNsc119XG4gICAgICAgIF07XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgIH1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0YXJnZXQgPSBkYXRhLnBhdGhbMF0sXG4gICAgICAgICAgICBjbHMgICAgPSB0YXJnZXQuY2xzLmpvaW4oJyAnKTtcblxuICAgICAgICBpZiAoY2xzLmluY2x1ZGVzKCduZW8tZG93bicpKSB7XG4gICAgICAgICAgICBtZS5maWVsZC5vblNwaW5CdXR0b25Eb3duQ2xpY2soKTtcbiAgICAgICAgfSBlbHNlIGlmIChjbHMuaW5jbHVkZXMoJ25lby11cCcpKSB7XG4gICAgICAgICAgICBtZS5maWVsZC5vblNwaW5CdXR0b25VcENsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNwaW5VcERvd24pO1xuXG5leHBvcnQge1NwaW5VcERvd24gYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICAgIGZyb20gJy4vTW9kZWwubWpzJztcbmltcG9ydCBOZW9BcnJheSBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5cbi8qKlxuICogQSBzZWxlY3Rpb24gbW9kZWwgaW50ZW5kZWQgdG8gdXNlIGZvciBOZW8uY29tcG9uZW50LkdhbGxlcnlcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLkdhbGxlcnlNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBHYWxsZXJ5TW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLkdhbGxlcnlNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tZ2FsbGVyeW1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi1nYWxsZXJ5bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzdGF5IGluIHRoZSBzYW1lIGNvbHVtbiB3aGVuIG5hdmlnYXRpbmcgd2l0aCB0aGUgdXAgYW5kIGRvd24ga2V5cyxcbiAgICAgICAgICogb3RoZXJ3aXNlIHlvdSB3aWxsIG5hdmlnYXRlIHRvIHRoZSBuZXh0IC8gcHJldiBjb2x1bW4gd2hlbiBtb3Zpbmcgb3V0XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0YXlJblJvdz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RheUluUm93OiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0byBub3QgYXBwbHkgYSBkb21MaXN0ZW5lclxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db250YWluZXJDbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIG9sZEl0ZW1zID0gWy4uLm1lLml0ZW1zXSxcbiAgICAgICAgICAgIGRlbHRhcyAgID0gW107XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbSksXG4gICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuaXRlbXMubGVuZ3RoKTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSXRlbUNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGRhdGEucGF0aC5sZW5ndGgsXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy52aWV3LFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnBhdGhbaV0uY2xzLmluY2x1ZGVzKCduZW8tZ2FsbGVyeS1pdGVtJykpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSB2aWV3LmdldEl0ZW1JZChkYXRhLnBhdGhbaV0uaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGtleSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiB2aWV3LnN0b3JlLmdldChrZXkpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpc1t0aGlzLnZpZXcub3JkZXJCeVJvdyA/ICdvbk5hdktleVJvdycgOiAnb25OYXZLZXlDb2x1bW4nXSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duTGVmdChkYXRhKSB7XG4gICAgICAgIHRoaXNbdGhpcy52aWV3Lm9yZGVyQnlSb3cgPyAnb25OYXZLZXlDb2x1bW4nIDogJ29uTmF2S2V5Um93J10oLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25SaWdodChkYXRhKSB7XG4gICAgICAgIHRoaXNbdGhpcy52aWV3Lm9yZGVyQnlSb3cgPyAnb25OYXZLZXlDb2x1bW4nIDogJ29uTmF2S2V5Um93J10oMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgdGhpc1t0aGlzLnZpZXcub3JkZXJCeVJvdyA/ICdvbk5hdktleVJvdycgOiAnb25OYXZLZXlDb2x1bW4nXSgtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcD0xXG4gICAgICovXG4gICAgb25OYXZLZXlDb2x1bW4oc3RlcD0xKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICBzZWxlY3RlZCAgICAgPSBtZS5pdGVtc1swXSxcbiAgICAgICAgICAgIGNvdW50UmVjb3JkcyA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBpbmRleCwgcmVjb3JkO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgaW5kZXggPSBzdG9yZS5pbmRleE9mKHNlbGVjdGVkKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpbmRleCA9IGNvdW50UmVjb3JkcyAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gY291bnRSZWNvcmRzKSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQgPSBzdG9yZS5nZXRBdChpbmRleCk7XG5cbiAgICAgICAgbWUuc2VsZWN0KHJlY29yZFtzdG9yZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZpZXcuZmlyZSgnc2VsZWN0Jywge1xuICAgICAgICAgICAgcmVjb3JkOiByZWNvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcD0xXG4gICAgICovXG4gICAgb25OYXZLZXlSb3coc3RlcD0xKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICBzZWxlY3RlZCAgICAgPSBtZS5pdGVtc1swXSxcbiAgICAgICAgICAgIGNvdW50UmVjb3JkcyA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBhbW91bnRSb3dzICAgPSB2aWV3LmFtb3VudFJvd3MsXG4gICAgICAgICAgICBzdGF5SW5Sb3cgICAgPSBtZS5zdGF5SW5Sb3csXG4gICAgICAgICAgICBpbmRleCwgcmVjb3JkO1xuXG4gICAgICAgIGlmICh2aWV3Lm9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGFtb3VudFJvd3MgPSBNYXRoLmNlaWwodmlldy5zdG9yZS5nZXRDb3VudCgpIC8gYW1vdW50Um93cyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGVwICo9IGFtb3VudFJvd3M7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGlmICghc3RheUluUm93KSB7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IChjb3VudFJlY29yZHMgLSBhbW91bnRSb3dzKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ICs9IGFtb3VudFJvd3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gY291bnRSZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXlJblJvdykge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPj0gYW1vdW50Um93cykge1xuICAgICAgICAgICAgICAgIGluZGV4IC09IGFtb3VudFJvd3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWNvcmQgPSBzdG9yZS5nZXRBdChpbmRleCk7XG5cbiAgICAgICAgbWUuc2VsZWN0KHJlY29yZFtzdG9yZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZpZXcuZmlyZSgnc2VsZWN0Jywge1xuICAgICAgICAgICAgcmVjb3JkOiByZWNvcmRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge05lby5jb21wb25lbnQuQmFzZX0gY29tcG9uZW50XG4gICAgICovXG4gICAgcmVnaXN0ZXIoY29tcG9uZW50KSB7XG4gICAgICAgIHN1cGVyLnJlZ2lzdGVyKGNvbXBvbmVudCk7XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgdmlldy5vbih7XG4gICAgICAgICAgICBjb250YWluZXJDbGljazogbWUub25Db250YWluZXJDbGljayxcbiAgICAgICAgICAgIGl0ZW1DbGljayAgICAgOiBtZS5vbkl0ZW1DbGljayxcbiAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMuX2tleXMucHVzaChcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIHNlbGVjdChpdGVtSWQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIG9sZEl0ZW1zID0gWy4uLm1lLml0ZW1zXSxcbiAgICAgICAgICAgIGRlbHRhcyAgID0gW10sXG4gICAgICAgICAgICB2bm9kZUlkICA9IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbUlkKTtcblxuICAgICAgICBpZiAobWUuc2luZ2xlU2VsZWN0KSB7XG4gICAgICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtICE9PSBpdGVtSWQpIHtjb25zb2xlLmxvZyhpdGVtLCBpdGVtSWQpXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuaXRlbXMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgIGlkIDogdm5vZGVJZCxcbiAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgIGFkZDogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW9BcnJheVsnYWRkJ10obWUuaXRlbXMsIGl0ZW1JZCk7XG5cbiAgICAgICAgaWYgKGRlbHRhcy5sZW5ndGggPiAwICYmIHZpZXcubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGRlbHRhcyA6IGRlbHRhc1xuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHZpZXcubW91bnRlZCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLnJlbW92ZUtleXMoW1xuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLnVucmVnaXN0ZXIoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEdhbGxlcnlNb2RlbCk7XG5cbmV4cG9ydCB7R2FsbGVyeU1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgICBmcm9tICcuL01vZGVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEEgc2VsZWN0aW9uIG1vZGVsIGludGVuZGVkIHRvIHVzZSBmb3IgTmVvLmNvbXBvbmVudC5IZWxpeFxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uSGVsaXhNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBIZWxpeE1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uSGVsaXhNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24taGVsaXhtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24taGVsaXhtb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHN0YXkgaW4gdGhlIHNhbWUgY29sdW1uIHdoZW4gbmF2aWdhdGluZyB3aXRoIHRoZSB1cCBhbmQgZG93biBrZXlzLFxuICAgICAgICAgKiBvdGhlcndpc2UgeW91IHdpbGwgbmF2aWdhdGUgdG8gdGhlIG5leHQgLyBwcmV2IGNvbHVtbiB3aGVuIG1vdmluZyBvdXRcbiAgICAgICAgICogQG1lbWJlciB7Ym9vbGVhbn0gc3RheUluQ29sdW1uPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF5SW5Db2x1bW46IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRvIG5vdCBhcHBseSBhIGRvbUxpc3RlbmVyXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgb2xkSXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXTtcblxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5pdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gZGF0YS5wYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGEucGF0aFtpXS5jbHMuaW5jbHVkZXMoJ25lby1oZWxpeC1pdGVtJykpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSB2aWV3LmdldEl0ZW1JZChkYXRhLnBhdGhbaV0uaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGtleSk7XG5cbiAgICAgICAgICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiB2aWV3LnN0b3JlLmdldChrZXkpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleUNvbHVtbigxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duTGVmdChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25SaWdodChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleUNvbHVtbigtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcD0xXG4gICAgICovXG4gICAgb25OYXZLZXlDb2x1bW4oc3RlcD0xKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICBzZWxlY3RlZCAgICAgPSBtZS5pdGVtc1swXSxcbiAgICAgICAgICAgIGNvdW50UmVjb3JkcyA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBpdGVtc1BlclJvdyAgPSBwYXJzZUludCgzNjAgLyB2aWV3Lml0ZW1BbmdsZSksXG4gICAgICAgICAgICBzdGF5SW5Db2x1bW4gPSBtZS5zdGF5SW5Db2x1bW4sXG4gICAgICAgICAgICBpbmRleCwgcmVjb3JkO1xuXG4gICAgICAgIHN0ZXAgKj0gaXRlbXNQZXJSb3c7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGlmICghc3RheUluQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IChjb3VudFJlY29yZHMgLSBpdGVtc1BlclJvdykpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSBpdGVtc1BlclJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmICghc3RheUluQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+PSBpdGVtc1BlclJvdykge1xuICAgICAgICAgICAgICAgIGluZGV4IC09IGl0ZW1zUGVyUm93O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuXG4gICAgICAgIG1lLnNlbGVjdChyZWNvcmRbc3RvcmUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXA9MVxuICAgICAqL1xuICAgIG9uTmF2S2V5Um93KHN0ZXA9MSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgc2VsZWN0ZWQgICAgID0gbWUuaXRlbXNbMF0sXG4gICAgICAgICAgICBjb3VudFJlY29yZHMgPSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgaW5kZXgsIHJlY29yZDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gc3RvcmUuaW5kZXhPZihzZWxlY3RlZCkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBjb3VudFJlY29yZHMgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IGNvdW50UmVjb3Jkcykge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuXG4gICAgICAgIG1lLnNlbGVjdChyZWNvcmRbc3RvcmUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIHZpZXcub24oe1xuICAgICAgICAgICAgY29udGFpbmVyQ2xpY2s6IG1lLm9uQ29udGFpbmVyQ2xpY2ssXG4gICAgICAgICAgICBpdGVtQ2xpY2sgICAgIDogbWUub25JdGVtQ2xpY2ssXG4gICAgICAgICAgICBzY29wZSAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLl9rZXlzLnB1c2goXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFt0b2dnbGVTZWxlY3Rpb249dHJ1ZV1cbiAgICAgKi9cbiAgICBzZWxlY3QoaXRlbUlkLCB0b2dnbGVTZWxlY3Rpb249dHJ1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQgPSB0b2dnbGVTZWxlY3Rpb24gPT09IGZhbHNlID8gZmFsc2UgOiBtZS5pdGVtcy5pbmNsdWRlcyhpdGVtSWQpLFxuICAgICAgICAgICAgb2xkSXRlbXMgICA9IFsuLi5tZS5pdGVtc10sXG4gICAgICAgICAgICBkZWx0YXMgICAgID0gW107XG5cbiAgICAgICAgaWYgKG1lLnNpbmdsZVNlbGVjdCkge1xuICAgICAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gaXRlbUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuaXRlbXMubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtSWQpLFxuICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgYWRkICAgOiBpc1NlbGVjdGVkID8gW10gOiBbJ25lby1zZWxlY3RlZCddLFxuICAgICAgICAgICAgICAgIHJlbW92ZTogaXNTZWxlY3RlZCA/IFsnbmVvLXNlbGVjdGVkJ10gOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW9BcnJheVtpc1NlbGVjdGVkID8gJ3JlbW92ZScgOiAnYWRkJ10obWUuaXRlbXMsIGl0ZW1JZCk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdCcsIGl0ZW1JZCwgaXNTZWxlY3RlZCwgbWUuaXRlbXMpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5yZW1vdmVLZXlzKFtcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeE1vZGVsKTtcblxuZXhwb3J0IHtIZWxpeE1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgICBmcm9tICcuLi9Nb2RlbC5tanMnO1xuaW1wb3J0IFZEb21VdGlsIGZyb20gJy4uLy4uL3V0aWwvVkRvbS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLnRhYmxlLlJvd01vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uc2VsZWN0aW9uLk1vZGVsXG4gKi9cbmNsYXNzIFJvd01vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLnRhYmxlLlJvd01vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLnRhYmxlLlJvd01vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi10YWJsZS1yb3dtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tdGFibGUtcm93bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbHM9J3NlbGVjdGlvbi1yb3dtb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiAnbmVvLXNlbGVjdGlvbi1yb3dtb2RlbCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhZGREb21MaXN0ZW5lcigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gdmlldy5kb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2sgICA6IG1lLm9uUm93Q2xpY2ssXG4gICAgICAgICAgICBkZWxlZ2F0ZTogJy5uZW8tdGFibGUtcm93JyxcbiAgICAgICAgICAgIHNjb3BlICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICB2aWV3LmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgbWF0Y2hpbmcgdGFibGUgcm93IGZvciBhIGdpdmVuIHJvdyBpbmRleFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCByb3cgaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfG51bGx9IFRoZSB0YWJsZSByb3cgbm9kZSBpZFxuICAgICAqL1xuICAgIGdldFJvd0lkKGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgdGhpcy52aWV3LnN0b3JlLmdldENvdW50KCkgPCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy52aWV3LnZkb20uY25bMF0uY25bMV0uY25baW5kZXhdLmlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIHRoZSBtYXRjaGluZyB0YWJsZSByb3cgZm9yIGEgZ2l2ZW4gZXZlbnQgcGF0aFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXRoIFRoZSBldmVudCBwYXRoXG4gICAgICogQHJldHVybnMge09iamVjdHxudWxsfSBUaGUgbm9kZSBjb250YWluaW5nIHRoZSB0YWJsZSByb3cgY2xhc3Mgb3IgbnVsbFxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0Um93Tm9kZShwYXRoKSB7XG4gICAgICAgIGxldCBpICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgPSBwYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIG5vZGUgPSBudWxsO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYXRoW2ldLmNscy5pbmNsdWRlcygnbmVvLXRhYmxlLXJvdycpKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IHBhdGhbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRG93bihkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coZGF0YSwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbk5hdktleVJvdyhkYXRhLCAtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwXG4gICAgICovXG4gICAgb25OYXZLZXlSb3coZGF0YSwgc3RlcCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlICAgICAgID0gUm93TW9kZWwuZ2V0Um93Tm9kZShkYXRhLnBhdGgpLFxuICAgICAgICAgICAgdmlldyAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHZkb21Ob2RlICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHZpZXcudmRvbSwgbm9kZS5pZCksXG4gICAgICAgICAgICBuZXdJbmRleCAgID0gKHZkb21Ob2RlLmluZGV4ICsgc3RlcCkgJSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHZkb21Ob2RlLnBhcmVudE5vZGUsXG4gICAgICAgICAgICBpZDtcblxuICAgICAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCArPSBzdG9yZS5nZXRDb3VudCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWQgPSBwYXJlbnROb2RlLmNuW25ld0luZGV4XS5pZDtcblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdChpZCk7XG4gICAgICAgICAgICB2aWV3LmZvY3VzKGlkKTtcblxuICAgICAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgcmVjb3JkOiBzdG9yZS5nZXRBdChuZXdJbmRleClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uUm93Q2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBub2RlID0gUm93TW9kZWwuZ2V0Um93Tm9kZShkYXRhLnBhdGgpLFxuICAgICAgICAgICAgaWQgICA9IG5vZGUgJiYgbm9kZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgbWUudG9nZ2xlU2VsZWN0aW9uKGlkKTtcblxuICAgICAgICAgICAgdmlldy5maXJlKG1lLmlzU2VsZWN0ZWQoaWQpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgcmVjb3JkOiB2aWV3LnN0b3JlLmdldEF0KFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQodmlldy52ZG9tLCBpZCkuaW5kZXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBmbiAgIDogJ29uS2V5RG93bkRvd24nLFxuICAgICAgICAgICAgICAgIGtleSAgOiAnRG93bicsXG4gICAgICAgICAgICAgICAgc2NvcGU6IGlkXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZm4gICA6ICdvbktleURvd25VcCcsXG4gICAgICAgICAgICAgICAga2V5ICA6ICdVcCcsXG4gICAgICAgICAgICAgICAgc2NvcGU6IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgaWQgICA9IG1lLmlkLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXc7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLnJlbW92ZUtleXMoW3tcbiAgICAgICAgICAgICAgICBmbiAgIDogJ29uS2V5RG93bkRvd24nLFxuICAgICAgICAgICAgICAgIGtleSAgOiAnRG93bicsXG4gICAgICAgICAgICAgICAgc2NvcGU6IGlkXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZm4gICA6ICdvbktleURvd25VcCcsXG4gICAgICAgICAgICAgICAga2V5ICA6ICdVcCcsXG4gICAgICAgICAgICAgICAgc2NvcGU6IGlkXG4gICAgICAgICAgICB9XSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSb3dNb2RlbCk7XG5cbmV4cG9ydCB7Um93TW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2VDb250YWluZXIgICBmcm9tICcuLi9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgQ3NzICAgICAgICAgICAgIGZyb20gJy4uL3V0aWwvQ3NzLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBSb3dNb2RlbCAgICAgICAgZnJvbSAnLi4vc2VsZWN0aW9uL3RhYmxlL1Jvd01vZGVsLm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgIGZyb20gJy4uL2RhdGEvU3RvcmUubWpzJztcbmltcG9ydCBWaWV3ICAgICAgICAgICAgZnJvbSAnLi9WaWV3Lm1qcyc7XG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9oZWFkZXIvX2V4cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFibGUuQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgQ29udGFpbmVyIGV4dGVuZHMgQmFzZUNvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby50YWJsZS5Db250YWluZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWJsZS5Db250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFibGUtY29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYmxlLWNvbnRhaW5lcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b2RvOiB0ZXN0aW5nIGNvbmZpZywgcmVtb3ZlIHdoZW4gU3RvcmVzIGFyZSByZWFkeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGFtb3VudFJvd3M9MjBcbiAgICAgICAgICovXG4gICAgICAgIGFtb3VudFJvd3M6IDIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBjb25maWdzIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbHVtbkRlZmF1bHRzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGNvbHVtbkRlZmF1bHRzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogdGVzdGluZyBjb25maWcsIHJlbW92ZSB3aGVuIFN0b3JlcyBhcmUgcmVhZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY3JlYXRlUmFuZG9tRGF0YT1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY3JlYXRlUmFuZG9tRGF0YTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXRhYmxlLWNvbnRhaW5lciddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYmxlLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNvbHVtbnNfPVtdXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5zXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIGZvciBOZW8udGFibGUuaGVhZGVyLlRvb2xiYXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IFtoZWFkZXJUb29sYmFyQ29uZmlnPW51bGxdXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJUb29sYmFyQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGhlYWRlclRvb2xiYXJJZF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyVG9vbGJhcklkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxheW91dD0nYmFzZSdcbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDogJ2Jhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2Nyb2xsYmFyc0Nzc0FwcGxpZWQ9ZmFsc2VcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgc2Nyb2xsYmFyc0Nzc0FwcGxpZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gc2VsZWN0aW9uTW9kZWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGlvbk1vZGVsXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dIZWFkZXJGaWx0ZXJzXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0hlYWRlckZpbHRlcnNfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogb25seSB3b3JrcyBmb3IgY2hyb21lICYgc2FmYXJpIC0+IGFkZCBhIGNoZWNrXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUN1c3RvbVNjcm9sbGJhcnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZUN1c3RvbVNjcm9sbGJhcnNfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uZmlncyBmb3IgTmVvLnRhYmxlLlZpZXdcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IFt2aWV3Q29uZmlnPW51bGxdXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3Q29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IHZpZXdJZF89bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB2aWV3SWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gaXRlbXM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e2NsczogWyduZW8tdGFibGUtd3JhcHBlciddLGNuIDogW3t0YWc6ICd0YWJsZScsY24gOiBbXX1dfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNsczogWyduZW8tdGFibGUtd3JhcHBlciddLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICBjbiA6IFtdXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGVhZGVyVG9vbGJhcklkID0gTmVvLmdldElkKCd0YWJsZS1oZWFkZXItdG9vbGJhcicpO1xuICAgICAgICBtZS52aWV3SWQgICAgICAgICAgPSBOZW8uZ2V0SWQoJ3RhYmxlLXZpZXcnKTtcblxuICAgICAgICBtZS5pdGVtcyA9IFt7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgICAgIDogaGVhZGVyLlRvb2xiYXIsXG4gICAgICAgICAgICBpZCAgICAgICAgICAgICAgIDogbWUuaGVhZGVyVG9vbGJhcklkLFxuICAgICAgICAgICAgc2hvd0hlYWRlckZpbHRlcnM6IG1lLnNob3dIZWFkZXJGaWx0ZXJzLFxuICAgICAgICAgICAgLi4ubWUuaGVhZGVyVG9vbGJhckNvbmZpZyB8fCB7fVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgIDogVmlldyxcbiAgICAgICAgICAgIGNvbnRhaW5lcklkOiBtZS5pZCxcbiAgICAgICAgICAgIGlkICAgICAgICAgOiBtZS52aWV3SWQsXG4gICAgICAgICAgICBzdG9yZSAgICAgIDogbWUuc3RvcmUsXG4gICAgICAgICAgICAuLi5tZS52aWV3Q29uZmlnIHx8IHt9XG4gICAgICAgIH1dO1xuXG4gICAgICAgIG1lLnZkb20uaWQgPSBtZS5pZCArICd3cmFwcGVyJztcblxuICAgICAgICBtZS5jcmVhdGVDb2x1bW5zKG1lLmNvbHVtbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5yZWdpc3RlcihtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuY3JlYXRlUmFuZG9tRGF0YSkge1xuICAgICAgICAgICAgLy8gdG9kbzogaWYgbW91bnRpbmcgYXBwbHkgYWZ0ZXIgbW91bnRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVJhbmRvbVZpZXdEYXRhKG1lLmFtb3VudFJvd3MpO1xuICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdmFsdWUucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dIZWFkZXJGaWx0ZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd0hlYWRlckZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBOZW8uZ2V0Q29tcG9uZW50KHRoaXMuaGVhZGVyVG9vbGJhcklkKS5zaG93SGVhZGVyRmlsdGVycyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB1c2VDdXN0b21TY3JvbGxiYXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlQ3VzdG9tU2Nyb2xsYmFycyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnZkb20uY2xzID0gTmVvQXJyYXkudW5pb24odGhpcy52ZG9tLmNscywgWyduZW8tdXNlLWN1c3RvbS1zY3JvbGxiYXInXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlDdXN0b21TY3JvbGxiYXJzQ3NzKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY3NzUnVsZXMgPSBbXTtcblxuICAgICAgICBpZiAobWUuZG9ja0xlZnRNYXJnaW4pIHtcbiAgICAgICAgICAgIGNzc1J1bGVzLnB1c2goJyMnICsgbWUuaWQgKyAnd3JhcHBlcicgKyAnOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3Jpem9udGFsIHttYXJnaW4tbGVmdDogJyArIG1lLmRvY2tMZWZ0TWFyZ2luICsgJ3B4O30nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5kb2NrUmlnaHRNYXJnaW4pIHtcbiAgICAgICAgICAgIGNzc1J1bGVzLnB1c2goJyMnICsgbWUuaWQgKyAnd3JhcHBlcicgKyAnOjotd2Via2l0LXNjcm9sbGJhci10cmFjazpob3Jpem9udGFsIHttYXJnaW4tcmlnaHQ6ICcgKyBtZS5kb2NrUmlnaHRNYXJnaW4gKyAncHg7fScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjc3NSdWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBDc3MuaW5zZXJ0UnVsZXMoY3NzUnVsZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuc2Nyb2xsYmFyc0Nzc0FwcGxpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGNvbHVtbnMgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldENvbHVtbnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbmZpZ3NBcHBsaWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVDb2x1bW5zKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBoZWFkZXJUb29sYmFySWQgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0SGVhZGVyVG9vbGJhcklkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG9sZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgUm93TW9kZWwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHZhbHVlID0gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBTdG9yZSwge1xuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgZmlsdGVyICAgICAgOiBtZS5vblN0b3JlRmlsdGVyLFxuICAgICAgICAgICAgICAgIGxvYWQgICAgICAgIDogbWUub25TdG9yZUxvYWQsXG4gICAgICAgICAgICAgICAgcmVjb3JkQ2hhbmdlOiBtZS5vblN0b3JlUmVjb3JkQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgICAgIDogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW4gY2FzZSB3ZSBkeW5hbWljYWxseSBjaGFuZ2UgdGhlIHN0b3JlLCB0aGUgbmV3IG5lZWRzIHRvIGdldCB0aGUgbmV3IHJlZmVyZW5jZVxuICAgICAgICBpZiAobWUudmlldykge1xuICAgICAgICAgICAgbWUudmlldy5zdG9yZSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHZpZXdJZCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRWaWV3SWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogb2xkVmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29sdW1uc1xuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGNyZWF0ZUNvbHVtbnMoY29sdW1ucykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29sdW1uRGVmYXVsdHMgPSBtZS5jb2x1bW5EZWZhdWx0cyxcbiAgICAgICAgICAgIHNvcnRlcnMgICAgICAgID0gbWUuc3RvcmUuc29ydGVycztcblxuICAgICAgICBpZiAoIWNvbHVtbnMgfHwgIWNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ0F0dGVtcHRpbmcgdG8gY3JlYXRlIGEgdGFibGUuQ29udGFpbmVyIHdpdGhvdXQgZGVmaW5lZCBjb2x1bW5zJywgbWUuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmRvY2sgJiYgIWNvbHVtbi53aWR0aCkge1xuICAgICAgICAgICAgICAgIE5lby5sb2dFcnJvcignQXR0ZW1wdGluZyB0byBjcmVhdGUgYSBkb2NrZWQgY29sdW1uIHdpdGhvdXQgYSBkZWZpbmVkIHdpZHRoJywgY29sdW1uLCBtZS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW5EZWZhdWx0cykge1xuICAgICAgICAgICAgICAgIE5lby5hc3NpZ25EZWZhdWx0cyhjb2x1bW4sIGNvbHVtbkRlZmF1bHRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNvcnRlcnMgJiYgc29ydGVyc1swXSkge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uZGF0YUZpZWxkID09PSBzb3J0ZXJzWzBdLnByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5pc1NvcnRlZCA9IHNvcnRlcnNbMF0uZGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29sdW1uLmxpc3RlbmVycyA9IHtcbiAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0Q29sdW1uLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXNbMF0uaXRlbXMgPSBjb2x1bW5zO1xuXG4gICAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50Um93c1xuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRvbVZpZXdEYXRhKGNvdW50Um93cykge1xuICAgICAgICB0aGlzLmxvYWREYXRhKGNvdW50Um93cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaW5wdXREYXRhXG4gICAgICovXG4gICAgY3JlYXRlVmlld0RhdGEoaW5wdXREYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtcyA9IG1lLml0ZW1zO1xuXG4gICAgICAgIGl0ZW1zWzFdLmNyZWF0ZVZpZXdEYXRhKGlucHV0RGF0YSk7IC8vIHRvZG86IHNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIHZpZXcgJiBoZWFkZXJDb250YWluZXJcblxuICAgICAgICBpZiAobWUudXNlQ3VzdG9tU2Nyb2xsYmFycyAmJiBtZS5zY3JvbGxiYXJzQ3NzQXBwbGllZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG1lLmFwcGx5Q3VzdG9tU2Nyb2xsYmFyc0NzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcmV0dXJucyB7TmVvLnZkb20uVk5vZGV9XG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50Um93c1xuICAgICAqL1xuICAgIGxvYWREYXRhKGNvdW50Um93cykge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbHVtbnMgICAgICA9IG1lLml0ZW1zWzBdLml0ZW1zLFxuICAgICAgICAgICAgY291bnRDb2x1bW5zID0gY29sdW1ucy5sZW5ndGg7XG5cbiAgICAgICAgTmVvLm1hbmFnZXIuU3RvcmUuY3JlYXRlUmFuZG9tRGF0YShbY291bnRDb2x1bW5zLCBjb3VudFJvd3NdKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuY3JlYXRlVmlld0RhdGEoZGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgYXR0ZW1wdGluZyB0byBjYWxsIGNyZWF0ZVJhbmRvbVZpZXdEYXRhJywgZXJyLCBtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5kaXJlY3Rpb25cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5wcm9wZXJ0eVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNvcnRDb2x1bW4ob3B0cykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnN0b3JlLnNvcnQob3B0cyk7XG4gICAgICAgIG1lLnJlbW92ZVNvcnRpbmdDc3Mob3B0cy5wcm9wZXJ0eSk7XG4gICAgICAgIG1lLm9uU3RvcmVMb2FkKG1lLnN0b3JlLml0ZW1zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uU3RvcmVGaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMub25TdG9yZUxvYWQodGhpcy5zdG9yZS5pdGVtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGxpc3RlbmVySWQ7XG5cbiAgICAgICAgaWYgKG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBtZS5jcmVhdGVWaWV3RGF0YShkYXRhKTtcblxuICAgICAgICAgICAgaWYgKG1lLnN0b3JlLnNvcnRlcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgICAgIG1lLnJlbW92ZVNvcnRpbmdDc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVySWQgPSBtZS5vbigncmVuZGVyZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudW4oJ3JlbmRlcmVkJywgbGlzdGVuZXJJZCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLmNyZWF0ZVZpZXdEYXRhKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIGEgcmVjb3JkIGZpZWxkLlxuICAgICAqIEUuZy4gbXlSZWNvcmQuZm9vID0gJ2Jhcic7XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5maWVsZCBUaGUgbmFtZSBvZiB0aGUgZmllbGQgd2hpY2ggZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLk1vZGVsfSBvcHRzLm1vZGVsIFRoZSBtb2RlbCBpbnN0YW5jZSBvZiB0aGUgY2hhbmdlZCByZWNvcmRcbiAgICAgKiBAcGFyYW0geyp9IG9wdHMub2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5yZWNvcmRcbiAgICAgKiBAcGFyYW0geyp9IG9wdHMudmFsdWVcbiAgICAgKi9cbiAgICBvblN0b3JlUmVjb3JkQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgTmVvLmdldENvbXBvbmVudCh0aGlzLnZpZXdJZCkub25TdG9yZVJlY29yZENoYW5nZShvcHRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhRmllbGRcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVtb3ZlU29ydGluZ0NzcyhkYXRhRmllbGQpIHtcbiAgICAgICAgdGhpcy5pdGVtc1swXS5pdGVtcy5mb3JFYWNoKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICBpZiAoY29sdW1uLmRhdGFGaWVsZCAhPT0gZGF0YUZpZWxkKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLnJlbW92ZVNvcnRpbmdDc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDb250YWluZXIpO1xuXG5leHBvcnQge0NvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudC9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWJsZS5WaWV3XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgVmlldyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby50YWJsZS5WaWV3J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFibGUuVmlldycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWJsZS12aWV3J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYmxlLXZpZXcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby10YWJsZS12aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdGFibGUtdmlldyddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGNvbnRhaW5lcklkPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbmVySWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHJlY29yZFZub2RlTWFwPXt9XG4gICAgICAgICAqL1xuICAgICAgICByZWNvcmRWbm9kZU1hcDoge30sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZVJvd1JlY29yZElkcz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VSb3dSZWNvcmRJZHM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXt0YWc6ICd0Ym9keScsIGNuIDogW119XG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAndGJvZHknLFxuICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGlucHV0RGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZVZpZXdEYXRhKGlucHV0RGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbW91bnRSb3dzID0gaW5wdXREYXRhLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbnRhaW5lciAgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLnBhcmVudElkKSxcbiAgICAgICAgICAgIGhhc1N0b3JlICAgPSBjb250YWluZXIuc3RvcmUubW9kZWwsIC8vIHRvZG86IHJlbW92ZSBhcyBzb29uIGFzIGFsbCB0YWJsZXMgdXNlIHN0b3JlcyAoZXhhbXBsZXMgdGFibGUpXG4gICAgICAgICAgICBjb2x1bW5zICAgID0gY29udGFpbmVyLml0ZW1zWzBdLml0ZW1zLFxuICAgICAgICAgICAgY29sQ291bnQgICA9IGNvbHVtbnMubGVuZ3RoLFxuICAgICAgICAgICAgZGF0YSAgICAgICA9IFtdLFxuICAgICAgICAgICAgaSAgICAgICAgICA9IDAsXG4gICAgICAgICAgICB2ZG9tICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNlbGxDbHMsIGNlbGxJZCwgY29uZmlnLCBjb2x1bW4sIGRvY2tMZWZ0TWFyZ2luLCBkb2NrUmlnaHRNYXJnaW4sIGlkLCBpbmRleCwgaiwgcmVuZGVyZXJPdXRwdXQsIHJlbmRlcmVyVmFsdWUsIHNlbGVjdGVkUm93cywgdHJDbHM7XG5cbiAgICAgICAgbWUucmVjb3JkVm5vZGVNYXAgPSB7fTsgLy8gcmVtb3ZlIG9sZCBkYXRhXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZVZpZXdEYXRhJywgbWUuaWQsIGlucHV0RGF0YSk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lci5zZWxlY3Rpb25Nb2RlbC5udHlwZSA9PT0gJ3NlbGVjdGlvbi10YWJsZS1yb3dtb2RlbCcpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkUm93cyA9IGNvbnRhaW5lci5zZWxlY3Rpb25Nb2RlbC5pdGVtcyB8fCBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgYW1vdW50Um93czsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobWUudXNlUm93UmVjb3JkSWRzKSB7XG4gICAgICAgICAgICAgICAgaWQgPSBtZS5pZCArICctdHItJyArIGlucHV0RGF0YVtpXVttZS5zdG9yZS5rZXlQcm9wZXJ0eV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gdmRvbS5jbltpXSAmJiB2ZG9tLmNuW2ldLmlkIHx8IE5lby5nZXRJZCgndHInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWUucmVjb3JkVm5vZGVNYXBbaWRdID0gaTtcblxuICAgICAgICAgICAgdHJDbHMgPSBtZS5nZXRUckNsYXNzKGlucHV0RGF0YVtpXSwgaSk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZFJvd3MgJiYgc2VsZWN0ZWRSb3dzLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgICAgIHRyQ2xzLnB1c2goJ25lby1zZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgICAgICAgIHRhZyAgICAgOiAndHInLFxuICAgICAgICAgICAgICAgIGlkICAgICAgOiBpZCxcbiAgICAgICAgICAgICAgICBjbHMgICAgIDogdHJDbHMsXG4gICAgICAgICAgICAgICAgY24gICAgICA6IFtdLFxuICAgICAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZG9ja0xlZnRNYXJnaW4gID0gMDtcbiAgICAgICAgICAgIGRvY2tSaWdodE1hcmdpbiA9IDA7XG5cbiAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IGNvbENvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4gICAgICAgICA9IGNvbHVtbnNbal07XG4gICAgICAgICAgICAgICAgcmVuZGVyZXJWYWx1ZSAgPSBpbnB1dERhdGFbaV1bY29sdW1uLmRhdGFGaWVsZF07XG5cbiAgICAgICAgICAgICAgICBpZiAocmVuZGVyZXJWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZW5kZXJlck91dHB1dCA9IGNvbHVtbi5yZW5kZXJlci5jYWxsKGNvbHVtbi5yZW5kZXJlclNjb3BlIHx8IGNvbnRhaW5lciwge1xuICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6IGNvbHVtbi5kYXRhRmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ICAgIDogaSxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkICAgOiBpbnB1dERhdGFbaV0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogcmVuZGVyZXJWYWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY2VsbENscyA9IHJlbmRlcmVyT3V0cHV0LmNscyB8fCBbJ25lby10YWJsZS1jZWxsJ107XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmFsaWduICE9PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbENscy5wdXNoKCduZW8tJyArIGNvbHVtbi5hbGlnbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFOZW8uaXNPYmplY3QocmVuZGVyZXJPdXRwdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVyT3V0cHV0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzIDogY2VsbENscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHJlbmRlcmVyT3V0cHV0LnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0b2RvOiByZW1vdmUgdGhlIGlmIHBhcnQgYXMgc29vbiBhcyBhbGwgdGFibGVzIHVzZSBzdG9yZXMgKGV4YW1wbGVzIHRhYmxlKVxuICAgICAgICAgICAgICAgIGlmIChoYXNTdG9yZSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSWQgPSBtZS5nZXRDZWxsSWQoaW5wdXREYXRhW2ldLCBjb2x1bW4uZGF0YUZpZWxkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjZWxsSWQgPSB2ZG9tLmNuW2ldICYmIHZkb20uY25baV0uY25bal0gJiYgdmRvbS5jbltpXS5jbltqXS5pZCB8fCBOZW8uZ2V0SWQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgICB0YWcgICAgICA6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgIGlkICAgICAgIDogY2VsbElkLFxuICAgICAgICAgICAgICAgICAgICBjbHMgICAgICA6IHJlbmRlcmVyT3V0cHV0LmNscyAgIHx8IFsnbmVvLXRhYmxlLWNlbGwnXSxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiByZW5kZXJlck91dHB1dC5odG1sICB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgICAgOiByZW5kZXJlck91dHB1dC5zdHlsZSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggOiAnLTEnXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uZG9jaykge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY2xzID0gWyduZW8tbG9ja2VkJywgLi4uY29uZmlnLmNscyB8fCBbXV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5kb2NrID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5zdHlsZS5sZWZ0ID0gZG9ja0xlZnRNYXJnaW4gKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9ja0xlZnRNYXJnaW4gKz0gKGNvbHVtbi53aWR0aCArIDEpOyAvLyB0b2RvOiBib3JkZXJzIGZpeFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGF0YVtpXS5jbi5wdXNoKGNvbmZpZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGogPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgaiA8IGNvbENvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBpbmRleCAgPSBjb2xDb3VudCAtIGogLTE7XG4gICAgICAgICAgICAgICAgY29sdW1uID0gY29sdW1uc1tpbmRleF07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmRvY2sgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jbltpbmRleF0uc3R5bGUucmlnaHQgPSBkb2NrUmlnaHRNYXJnaW4gKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBkb2NrUmlnaHRNYXJnaW4gKz0gKGNvbHVtbi53aWR0aCArIDEpOyAvLyB0b2RvOiBib3JkZXJzIGZpeFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZkb20uY24gPSBkYXRhO1xuXG4gICAgICAgIGNvbnRhaW5lci5kb2NrTGVmdE1hcmdpbiAgPSBkb2NrTGVmdE1hcmdpbjtcbiAgICAgICAgY29udGFpbmVyLmRvY2tSaWdodE1hcmdpbiA9IGRvY2tSaWdodE1hcmdpbjtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdXBkYXRlUGFyZW50VmRvbVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50XG4gICAgICovXG4gICAgZGVzdHJveSh1cGRhdGVQYXJlbnRWZG9tLCBzaWxlbnQpIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IG51bGw7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbSwgc2lsZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YUZpZWxkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDZWxsSWQocmVjb3JkLCBkYXRhRmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgcmVjb3JkW3RoaXMuc3RvcmUua2V5UHJvcGVydHldICsgJ19fJyArIGRhdGFGaWVsZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhcHBseSBjdXN0b20gQ1NTIHJ1bGVzIHRvIHRhYmxlIHJvd3NcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHJvd0luZGV4XG4gICAgICogQHJldHVybnMge1N0cmluZ1tdfVxuICAgICAqL1xuICAgIGdldFRyQ2xhc3MocmVjb3JkLCByb3dJbmRleCkge1xuICAgICAgICByZXR1cm4gWyduZW8tdGFibGUtcm93J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYWZ0ZXIgY2hhbmdpbmcgdGhlIHZhbHVlIG9mIGEgcmVjb3JkIGZpZWxkLlxuICAgICAqIEUuZy4gbXlSZWNvcmQuZm9vID0gJ2Jhcic7XG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb3B0cy5maWVsZCBUaGUgbmFtZSBvZiB0aGUgZmllbGQgd2hpY2ggZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLk1vZGVsfSBvcHRzLm1vZGVsIFRoZSBtb2RlbCBpbnN0YW5jZSBvZiB0aGUgY2hhbmdlZCByZWNvcmRcbiAgICAgKiBAcGFyYW0geyp9IG9wdHMub2xkVmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0cy5yZWNvcmRcbiAgICAgKiBAcGFyYW0geyp9IG9wdHMudmFsdWVcbiAgICAgKi9cbiAgICBvblN0b3JlUmVjb3JkQ2hhbmdlKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNlbGxJZCAgID0gbWUuZ2V0Q2VsbElkKG9wdHMucmVjb3JkLCBvcHRzLmZpZWxkKSxcbiAgICAgICAgICAgIGNlbGxOb2RlID0gbWUuZ2V0VmRvbUNoaWxkKGNlbGxJZCk7XG5cbiAgICAgICAgY2VsbE5vZGUuaW5uZXJIVE1MID0gb3B0cy52YWx1ZTsgLy8ga2VlcCB0aGUgdmRvbSBpbiBzeW5jXG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgZGVsdGFzOiBbe1xuICAgICAgICAgICAgICAgIGlkICAgICAgIDogY2VsbElkLFxuICAgICAgICAgICAgICAgIGlubmVySFRNTDogb3B0cy52YWx1ZVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3KTtcblxuZXhwb3J0IHtWaWV3IGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlQnV0dG9uIGZyb20gJy4uLy4uL2J1dHRvbi9CYXNlLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICBmcm9tICcuLi8uLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgVGV4dEZpZWxkICBmcm9tICcuLi8uLi9mb3JtL2ZpZWxkL1RleHQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnRhYmxlLmhlYWRlci5CdXR0b25cbiAqIEBleHRlbmRzIE5lby5idXR0b24uQmFzZVxuICovXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBCYXNlQnV0dG9uIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZCB2YWx1ZXMgZm9yIGFsaWduXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBhbGlnblZhbHVlczogWydsZWZ0JywgJ2NlbnRlcicsICdyaWdodCddXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ25WYWx1ZXM6IFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYmxlLmhlYWRlci5CdXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWJsZS5oZWFkZXIuQnV0dG9uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYmxlLWhlYWRlci1idXR0b24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFibGUtaGVhZGVyLWJ1dHRvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGlnbm1lbnQgb2YgdGhlIG1hdGNoaW5nIHRhYmxlIGNlbGxzLiBWYWxpZCB2YWx1ZXMgYXJlIGxlZnQsIGNlbnRlciwgcmlnaHRcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBhbGlnbl89J2xlZnQnXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbl86ICdsZWZ0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tdGFibGUtaGVhZGVyLWJ1dHRvbiddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYmxlLWhlYWRlci1idXR0b24nXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBkYXRhRmllbGQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YUZpZWxkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU29ydCBkaXJlY3Rpb24gd2hlbiBjbGlja2luZyBvbiBhbiB1bnNvcnRlZCBidXR0b25cbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkZWZhdWx0U29ydERpcmVjdGlvbj0nQVNDJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdFNvcnREaXJlY3Rpb246ICdBU0MnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZHJhZ2dhYmxlXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnZ2FibGVfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBlZGl0b3JDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZWRpdG9yQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBmaWx0ZXJDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsdGVyQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmZvcm0uZmllbGQuQmFzZXxudWxsfSBmaWx0ZXJGaWVsZD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlckZpZWxkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpY29uQ2xzPSdmYSBmYS1hcnJvdy1jaXJjbGUtdXAnXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzOiAnZmEgZmEtYXJyb3ctY2lyY2xlLXVwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWNvblBvc2l0aW9uPSdyaWdodCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25Qb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqICdBU0MnLCAnREVTQycgb3IgbnVsbFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gaXNTb3J0ZWRfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXNTb3J0ZWRfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2NvcGUgdG8gZXhlY3V0ZSB0aGUgY29sdW1uIHJlbmRlcmVyLlxuICAgICAgICAgKiBEZWZhdWx0cyB0byB0aGUgbWF0Y2hpbmcgdGFibGUuQ29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge05lby5jb3JlLkJhc2V8bnVsbH0gcmVuZGVyZXJTY29wZT1udWxsXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXJlclNjb3BlOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0hlYWRlckZpbHRlcl89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dIZWFkZXJGaWx0ZXJfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICd0aCcsXG4gICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbi1nbHlwaCddXG4gICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWJ1dHRvbi10ZXh0J11cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IGEgZGlmZmVyZW50IHZkb20gcm9vdCBpZiBuZWVkZWQgdG8gYXBwbHkgdGhlIHRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzIG9uIGEgZGlmZmVyZW50IGxldmVsLlxuICAgICAqIE1ha2Ugc3VyZSB0byB1c2UgZ2V0Vm5vZGVSb290KCkgYXMgd2VsbCwgdG8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIHRyZWVzIGluIHN5bmMuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2ZG9tIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWZG9tUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZ5IGEgZGlmZmVyZW50IHZub2RlIHJvb3QgaWYgbmVlZGVkIHRvIGFwcGx5IHRoZSB0b3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcyBvbiBhIGRpZmZlcmVudCBsZXZlbC5cbiAgICAgKiBNYWtlIHN1cmUgdG8gdXNlIGdldFZkb21Sb290KCkgYXMgd2VsbCwgdG8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIHRyZWVzIGluIHN5bmMuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2bm9kZSByb290XG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbGlzdGVuZXJzID0ge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBtZS5vbkJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBpZiAobWUuZHJhZ2dhYmxlKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGxpc3RlbmVycywge1xuICAgICAgICAgICAgICAgIGRyYWdlbmQgIDogbWUub25EcmFnRW5kLFxuICAgICAgICAgICAgICAgIGRyYWdlbnRlcjogbWUub25EcmFnRW50ZXIsXG4gICAgICAgICAgICAgICAgZHJhZ2xlYXZlOiBtZS5vbkRyYWdMZWF2ZSxcbiAgICAgICAgICAgICAgICBkcmFnb3ZlciA6IG1lLm9uRHJhZ092ZXIsXG4gICAgICAgICAgICAgICAgZHJhZ3N0YXJ0OiBtZS5vbkRyYWdTdGFydCxcbiAgICAgICAgICAgICAgICBkcm9wICAgICA6IG1lLm9uRHJvcCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gbGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZHJhZ2dhYmxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RHJhZ2dhYmxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIG1lLmdldFZkb21Sb290KCkuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBtZS5nZXRWZG9tUm9vdCgpLmRyYWdnYWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaXNTb3J0ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJc1NvcnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgICAgICAgPSBtZS5jbHMsXG4gICAgICAgICAgICBjb250YWluZXIgPSBtZS51cCgndGFibGUtY29udGFpbmVyJyk7XG5cbiAgICAgICAgc3dpdGNoKHZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby1zb3J0LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQVNDJzpcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLXNvcnQtZGVzYycpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tc29ydC1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLXNvcnQtYXNjJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdERVNDJzpcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLXNvcnQtYXNjJyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1zb3J0LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tc29ydC1kZXNjJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5jbHMgPSBjbHM7XG5cbiAgICAgICAgLy8gdGVzdGluZyBjaGVjayB1bnRpbCBhbGwgZXhhbXBsZSB0YWJsZXMgaGF2ZSBhIHN0b3JlXG4gICAgICAgIGlmICghY29udGFpbmVyIHx8ICFjb250YWluZXIuc3RvcmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdzb3J0Jywge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdmFsdWUsXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgOiBtZS5kYXRhRmllbGRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93SGVhZGVyRmlsdGVyIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd0hlYWRlckZpbHRlcih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIW1lLmZpbHRlckZpZWxkKSB7XG4gICAgICAgICAgICAgICAgbWUuZmlsdGVyRmllbGQgPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlICAgOiBUZXh0RmllbGQsXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgICAgIDogJ2ZpbHRlci1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVMYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQgOiBtZS5pZCxcblxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSAgICAgICAgOiBtZS5jaGFuZ2VGaWx0ZXJWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yQ2hhbmdlOiBtZS5jaGFuZ2VGaWx0ZXJPcGVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiBtZVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0IDogJy41ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6ICcuNWVtJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAuLi5tZS5lZGl0b3JDb25maWcgfHwge31cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1lLnZkb20uY24ucHVzaChtZS5maWx0ZXJGaWVsZC52ZG9tKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lLmZpbHRlckZpZWxkLnZkb20ucmVtb3ZlRG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1lLmZpbHRlckZpZWxkKSB7XG4gICAgICAgICAgICBtZS5maWx0ZXJGaWVsZC52ZG9tLnJlbW92ZURvbSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBhbGlnbiBjb25maWcgZ2V0cyBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldEFsaWduKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAnYWxpZ24nLCAnYWxpZ25WYWx1ZXMnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koLi4uYXJncykge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJGaWVsZCkge1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJGaWVsZC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5kZXN0cm95KC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkJ1dHRvbkNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgbWFwO1xuXG4gICAgICAgIGlmIChtZS5kZWZhdWx0U29ydERpcmVjdGlvbiA9PT0gJ0RFU0MnKSB7XG4gICAgICAgICAgICBtYXAgPSB7XG4gICAgICAgICAgICAgICAgQVNDIDogbnVsbCxcbiAgICAgICAgICAgICAgICBERVNDOiAnQVNDJyxcbiAgICAgICAgICAgICAgICBudWxsOiAnREVTQydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtYXAgPSB7XG4gICAgICAgICAgICAgICAgQVNDIDogJ0RFU0MnLFxuICAgICAgICAgICAgICAgIERFU0M6IG51bGwsXG4gICAgICAgICAgICAgICAgbnVsbDogJ0FTQydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBtZS5pc1NvcnRlZCA9IG1hcFttZS5pc1NvcnRlZCArICcnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25EcmFnRW5kKCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgc3R5bGUgPSBtZS5zdHlsZTtcblxuICAgICAgICBkZWxldGUgc3R5bGUub3BhY2l0eTtcbiAgICAgICAgbWUuc3R5bGUgPSBzdHlsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25EcmFnRW50ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tZHJhZy1vdmVyJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25EcmFnTGVhdmUoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tZHJhZy1vdmVyJyk7XG4gICAgICAgIG1lLmNscyA9IGNscztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBldmVudFxuICAgICAqL1xuICAgIG9uRHJhZ092ZXIoZXZlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnb25EcmFnT3ZlcicsIGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25EcmFnU3RhcnQoKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdHlsZSA9IG1lLnN0eWxlO1xuXG4gICAgICAgIHN0eWxlLm9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIG1lLnN0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRHJvcChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoZWFkZXJUb29sYmFyICA9IE5lby5nZXRDb21wb25lbnQobWUucGFyZW50SWQpLFxuICAgICAgICAgICAgdGFibGVDb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KGhlYWRlclRvb2xiYXIucGFyZW50SWQpO1xuXG4gICAgICAgIGRlbGV0ZSBOZW8uZ2V0Q29tcG9uZW50KGRhdGEuc3JjSWQpLmdldFZkb21Sb290KCkuc3R5bGUub3BhY2l0eTtcblxuICAgICAgICBtZS5vbkRyYWdMZWF2ZSgpO1xuICAgICAgICBoZWFkZXJUb29sYmFyLnN3aXRjaEl0ZW1zKG1lLmlkLCBkYXRhLnNyY0lkKTtcbiAgICAgICAgdGFibGVDb250YWluZXIuY3JlYXRlVmlld0RhdGEodGFibGVDb250YWluZXIuc3RvcmUuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNoYW5nZUZpbHRlck9wZXJhdG9yKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRhYmxlQ29udGFpbmVyID0gbWUudXAoJ3RhYmxlLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgPSB0YWJsZUNvbnRhaW5lciAmJiB0YWJsZUNvbnRhaW5lci5zdG9yZSxcbiAgICAgICAgICAgIG9wZXJhdG9yICAgICAgID0gZGF0YS52YWx1ZSxcbiAgICAgICAgICAgIGZpbHRlciwgZmlsdGVycztcblxuICAgICAgICBpZiAoc3RvcmUpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHN0b3JlLmdldEZpbHRlcihtZS5kYXRhRmllbGQpO1xuXG4gICAgICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBzdG9yZS5maWx0ZXJzO1xuXG4gICAgICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLmRhdGFGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IG9wZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgLi4ubWUuZmlsdGVyQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdG9yZS5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY2hhbmdlRmlsdGVyVmFsdWUoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFibGVDb250YWluZXIgPSBtZS51cCgndGFibGUtY29udGFpbmVyJyksXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgICA9IHRhYmxlQ29udGFpbmVyICYmIHRhYmxlQ29udGFpbmVyLnN0b3JlLFxuICAgICAgICAgICAgdmFsdWUgICAgICAgICAgPSBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgZmllbGQsIGZpbHRlciwgZmlsdGVycywgbW9kZWw7XG5cbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgICBmaWx0ZXIgPSBzdG9yZS5nZXRGaWx0ZXIobWUuZGF0YUZpZWxkKTtcbiAgICAgICAgICAgIG1vZGVsICA9IHN0b3JlLm1vZGVsO1xuICAgICAgICAgICAgZmllbGQgID0gbW9kZWwgJiYgbW9kZWwuZ2V0RmllbGQobWUuZGF0YUZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIGZpZWxkLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVycyA9IHN0b3JlLmZpbHRlcnM7XG5cbiAgICAgICAgICAgICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogbWUuZGF0YUZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJ2xpa2UnLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgIDogdmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmZpbHRlckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZmlsdGVycyA9IGZpbHRlcnM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlci52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZVNvcnRpbmdDc3MoKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzID0gbWUuY2xzO1xuXG4gICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tc29ydC1oaWRkZW4nKTtcblxuICAgICAgICBtZS5jbHMgICAgICAgPSBjbHM7XG4gICAgICAgIG1lLl9pc1NvcnRlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmRhdGFGaWVsZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBkYXRhLmluZGV4XG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEucmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBkYXRhLnZhbHVlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgcmVuZGVyZXIoZGF0YSkge1xuICAgICAgICByZXR1cm4gZGF0YS52YWx1ZTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEJ1dHRvbik7XG5cbmV4cG9ydCB7QnV0dG9uIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlVG9vbGJhciBmcm9tICcuLi8uLi9jb250YWluZXIvVG9vbGJhci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFibGUuaGVhZGVyLlRvb2xiYXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuVG9vbGJhclxuICovXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgQmFzZVRvb2xiYXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFibGUuaGVhZGVyLlRvb2xiYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby50YWJsZS5oZWFkZXIuVG9vbGJhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWJsZS1oZWFkZXItdG9vbGJhcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWJsZS1oZWFkZXItdG9vbGJhcicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsndGFibGUtaGVhZGVyLXRvb2xiYXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ3RhYmxlLWhlYWRlci10b29sYmFyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxheW91dD0nYmFzZSdcbiAgICAgICAgICovXG4gICAgICAgIGxheW91dDogJ2Jhc2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtRGVmYXVsdHM9e250eXBlIDogJ3RhYmxlLWhlYWRlci1idXR0b24nfVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZSA6ICd0YWJsZS1oZWFkZXItYnV0dG9uJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0hlYWRlckZpbHRlcnNfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93SGVhZGVyRmlsdGVyc186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17dGFnOiAndGhlYWQnLGNuIDogW3t0YWc6ICd0cicsY24gOiBbXX1dfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhZzogJ3RoZWFkJyxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICd0cicsXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNob3dIZWFkZXJGaWx0ZXJzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2hvd0hlYWRlckZpbHRlcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5zZXRTaWxlbnQoe1xuICAgICAgICAgICAgICAgICAgICBzaG93SGVhZGVyRmlsdGVyOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZG9ja1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IGxheW91dENvbmZpZ1xuICAgICAqIEBvdmVycmlkZVxuICAgICAqL1xuICAgIGdldExheW91dENvbmZpZyhkb2NrKSB7XG4gICAgICAgIHJldHVybiAnYmFzZSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2ZG9tIGl0ZW1zIHJvb3QgaWYgbmVlZGVkICh1c2VmdWwgaW4gY2FzZSB0aGlzIGNvbnRhaW5lciB1c2VzIGEgd3JhcHBlciBub2RlKS5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gaXRlbXMgcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21JdGVtc1Jvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2ZG9tIHJvb3QgaWYgbmVlZGVkIHRvIGFwcGx5IHRoZSB0b3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcyBvbiBhIGRpZmZlcmVudCBsZXZlbC5cbiAgICAgKiBNYWtlIHN1cmUgdG8gdXNlIGdldFZub2RlUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdmRvbSByb290XG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2bm9kZSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWZG9tUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdm5vZGUgcm9vdFxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLml0ZW1EZWZhdWx0cy5zaG93SGVhZGVyRmlsdGVyID0gbWUuc2hvd0hlYWRlckZpbHRlcnM7XG5cbiAgICAgICAgc3VwZXIuY3JlYXRlSXRlbXMoKTtcblxuICAgICAgICBsZXQgZG9ja0xlZnRXaWR0aCAgPSAwLFxuICAgICAgICAgICAgZG9ja1JpZ2h0V2lkdGggPSAwLFxuICAgICAgICAgICAgaXRlbXMgICAgICAgICAgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgc3R5bGU7XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHN0eWxlID0gaXRlbS53cmFwcGVyU3R5bGU7XG5cbiAgICAgICAgICAgIC8vIHRvZG86IG9ubHkgYWRkIHB4IGlmIG51bWJlclxuICAgICAgICAgICAgaWYgKGl0ZW0ubWF4V2lkdGgpIHtzdHlsZS5tYXhXaWR0aCA9IGl0ZW0ubWF4V2lkdGggKyAncHgnfVxuICAgICAgICAgICAgaWYgKGl0ZW0ubWluV2lkdGgpIHtzdHlsZS5taW5XaWR0aCA9IGl0ZW0ubWluV2lkdGggKyAncHgnfVxuICAgICAgICAgICAgaWYgKGl0ZW0ud2lkdGgpICAgIHtzdHlsZS53aWR0aCAgICA9IGl0ZW0ud2lkdGggKyAncHgnfVxuXG4gICAgICAgICAgICBpZiAoaXRlbS5kb2NrKSB7XG4gICAgICAgICAgICAgICAgaXRlbS52ZG9tLmNscyA9IFsnbmVvLWxvY2tlZCddO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZG9jayA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmxlZnQgPSBkb2NrTGVmdFdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkb2NrTGVmdFdpZHRoICs9IChpdGVtLndpZHRoICsgMSk7IC8vIHRvZG86IGJvcmRlcnMgZml4XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5jbHMgPSBbXTsgLy8gcmVtb3ZlIHRoZSBidXR0b24gY2xzIGZyb20gdGhlIHRoIHRhZ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpdGVtLndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuXG4gICAgICAgICAgICAvLyBpbnZlcnNlIGxvb3AgZGlyZWN0aW9uXG4gICAgICAgICAgICBpdGVtID0gaXRlbXNbbGVuIC0gaW5kZXggLTFdO1xuXG4gICAgICAgICAgICBpZiAoaXRlbS5kb2NrID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBpdGVtLndyYXBwZXJTdHlsZTtcbiAgICAgICAgICAgICAgICBzdHlsZS5yaWdodCA9IGRvY2tSaWdodFdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIGl0ZW0ud3JhcHBlclN0eWxlID0gc3R5bGU7XG5cbiAgICAgICAgICAgICAgICBkb2NrUmlnaHRXaWR0aCArPSAoaXRlbS53aWR0aCArIDEpOyAvLyB0b2RvOiBib3JkZXJzIGZpeFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFRvb2xiYXIpO1xuXG5leHBvcnQge1Rvb2xiYXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJ1dHRvbiAgZnJvbSAnLi9CdXR0b24ubWpzJztcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vVG9vbGJhci5tanMnO1xuXG5leHBvcnQge0J1dHRvbiwgVG9vbGJhcn07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby51dGlsLkNzc1xuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBDc3MgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuQ3NzJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5Dc3MnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gcnVsZXNcbiAgICAgKi9cbiAgICBzdGF0aWMgaW5zZXJ0UnVsZXMocnVsZXMpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uU3R5bGVzaGVldC5pbnNlcnRDc3NSdWxlcyh7XG4gICAgICAgICAgICBydWxlczogcnVsZXNcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5zZXJ0ZWQgQ1NTIHJ1bGVzJywgZGF0YSk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FwcDogR290IGVycm9yIGF0dGVtcHRpbmcgdG8gaW5zZXJ0IENTUyBydWxlcycsIGVyciwgcnVsZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENzcyk7XG5cbmV4cG9ydCBkZWZhdWx0IENzczsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBNYXRyaXggYmFzZWQgY2FsY3VsYXRpb25zXG4gKiBAY2xhc3MgTmVvLnV0aWwuTWF0cml4XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE1hdHJpeCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5NYXRyaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLk1hdHJpeCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBpdGVtc189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc186IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCAoaSxqKSBvZiB0aGUgbWF0cml4XG4gICAgICogQHBhcmFtIGlcbiAgICAgKiBAcGFyYW0galxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEVsZW1lbnQoaSwgaikge1xuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG4gICAgICAgIGlmIChpIDwgMSB8fCBpID4gaXRlbXMubGVuZ3RoIHx8IGogPCAxIHx8IGogPiBpdGVtc1swXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zW2kgLSAxXVtqIC0gMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2hvcnRjdXQgZm9yIGdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBlKGksIGopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudChpLCBqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgbXVsdGlwbHlpbmcgdGhlIG1hdHJpeCBmcm9tIHRoZSByaWdodCBieSB0aGUgYXJndW1lbnQuXG4gICAgICogQHBhcmFtIG1hdHJpeFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG11bHRpcGx5KG1hdHJpeCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgTSAgICAgPSBtYXRyaXguaXRlbXMgfHwgbWF0cml4LFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIG5pICAgID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAga2kgICAgPSBuaSxcbiAgICAgICAgICAgIGtqICAgID0gTVswXS5sZW5ndGgsXG4gICAgICAgICAgICBjb2xzICA9IGl0ZW1zWzBdLmxlbmd0aCxcbiAgICAgICAgICAgIGVscyAgID0gW10sXG4gICAgICAgICAgICBjLCBpLCBqLCBuYywgbmosIHN1bTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpICAgICAgPSBraSAtIG5pO1xuICAgICAgICAgICAgZWxzW2ldID0gW107XG4gICAgICAgICAgICBuaiAgICAgPSBrajtcblxuICAgICAgICAgICAgZG8geyBqID0ga2ogLSBuajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIG5jICA9IGNvbHM7XG5cbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBjb2xzIC0gbmM7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBpdGVtc1tpXVtjXSAqIE1bY11bal07XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1uYyk7XG4gICAgICAgICAgICAgICAgZWxzW2ldW2pdID0gc3VtO1xuICAgICAgICAgICAgfSB3aGlsZSAoLS1uaik7XG4gICAgICAgIH0gd2hpbGUgKC0tbmkpO1xuXG4gICAgICAgIG1hdHJpeC5pdGVtcyA9IGVscztcblxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNob3J0Y3V0IGZvciBtdWx0aXBseVxuICAgICAqL1xuICAgIHgobWF0cml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVYKHQpIHtcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyh0KSxcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbih0KTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgWzEsIDAsICAwLCAwXSxcbiAgICAgICAgICAgIFswLCBjLCAtcywgMF0sXG4gICAgICAgICAgICBbMCwgcywgIGMsIDBdLFxuICAgICAgICAgICAgWzAsIDAsICAwLCAxXVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcm90YXRlWSh0KSB7XG4gICAgICAgIGxldCBjID0gTWF0aC5jb3ModCksXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4odCk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFtjLCAwLCAtcywgMF0sXG4gICAgICAgICAgICBbMCwgMSwgIDAsIDBdLFxuICAgICAgICAgICAgW3MsIDAsICBjLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAgMCwgMV1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIHJvdGF0ZVoodCkge1xuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHQpLFxuICAgICAgICAgICAgcyA9IE1hdGguc2luKHQpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbYywgLXMsIDAsIDBdLFxuICAgICAgICAgICAgW3MsICBjLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAgMCwgMSwgMF0sXG4gICAgICAgICAgICBbMCwgIDAsIDAsIDFdXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRUcmFuc2Zvcm1TdHlsZSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHAgID0gMTAsIC8vIHByZWNpc2lvblxuICAgICAgICAgICAgcztcblxuICAgICAgICBzICA9ICdtYXRyaXgzZCgnO1xuICAgICAgICBzICs9IG1lLmUoMSwxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgxLDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDEsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoMSw0KS50b0ZpeGVkKHApICsgJywnO1xuICAgICAgICBzICs9IG1lLmUoMiwxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgyLDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDIsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoMiw0KS50b0ZpeGVkKHApICsgJywnO1xuICAgICAgICBzICs9IG1lLmUoMywxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgzLDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDMsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoMyw0KS50b0ZpeGVkKHApICsgJywnO1xuICAgICAgICBzICs9IG1lLmUoNCwxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSg0LDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDQsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoNCw0KS50b0ZpeGVkKHApO1xuICAgICAgICBzICs9ICcpJztcblxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1hdHJpeCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDsiXSwic291cmNlUm9vdCI6IiJ9