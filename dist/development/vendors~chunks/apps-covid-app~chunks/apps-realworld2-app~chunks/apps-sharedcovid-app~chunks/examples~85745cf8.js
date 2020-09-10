self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~85745cf8"],{

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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0dhbGxlcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vR2FsbGVyeU1vZGVsLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNGO0FBQ1g7QUFDbUI7QUFDWjtBQUNBOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUztBQUMvQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxv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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvYXBwcy1jb3ZpZC1hcHB+Y2h1bmtzL2FwcHMtcmVhbHdvcmxkMi1hcHB+Y2h1bmtzL2FwcHMtc2hhcmVkY292aWQtYXBwfmNodW5rcy9leGFtcGxlc344NTc0NWNmOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gICAgICBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJ1xuaW1wb3J0IENvbXBvbmVudCAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBHYWxsZXJ5TW9kZWwgICAgZnJvbSAnLi4vc2VsZWN0aW9uL0dhbGxlcnlNb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgICAgICAgIGZyb20gJy4uL2RhdGEvU3RvcmUubWpzJztcblxuY29uc3QgaXRlbXNNb3VudGVkID0gU3ltYm9sLmZvcignaXRlbXNNb3VudGVkJyk7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb21wb25lbnQuR2FsbGVyeVxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LkdhbGxlcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuR2FsbGVyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdnYWxsZXJ5J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2dhbGxlcnknLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFtb3VudCBvZiB2aXNpYmxlIHJvd3MgaW5zaWRlIHRoZSBnYWxsZXJ5XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gYW1vdW50Um93c189M1xuICAgICAgICAgKi9cbiAgICAgICAgYW1vdW50Um93c186IDMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgZ2FsbGVyeSBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYWNrZ3JvdW5kQ29sb3JfPScjMDAwMDAwJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFja2dyb3VuZENvbG9yXzogJyMwMDAwMDAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1nYWxsZXJ5JywgJ3BhZ2UnLCAndmlldyddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGRpc2FibGVzIHNlbGVjdGlvbiBvZiAgZ2FsbGVyeSBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaXNhYmxlU2VsZWN0aW9uPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlU2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSBoZWlnaHQgb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZUhlaWdodD0xNjBcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlSGVpZ2h0OiAxNjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1hZ2Ugd2lkdGggb2YgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbWFnZVdpZHRoPTEyMFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VXaWR0aDogMTIwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBpdGVtVHBsX1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbVRwbF86IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ25lby1nYWxsZXJ5LWl0ZW0nLCAnaW1hZ2Utd3JhcCcsICd2aWV3JywgJ25lby10cmFuc2l0aW9uLTEwMDAnXSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1pdGVtLXdyYXBwZXInXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7fSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggYW1vdW50IG9mIHN0b3JlIGl0ZW1zIHRvIHNob3dcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhJdGVtc189MzAwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhJdGVtc186IDMwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB6b29taW5nIGZhY3RvciB3aGljaCByZXBsYWNlcyB0aGUgZGVmYXVsdCB3aGVlbERlbHRhLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1vdXNlV2hlZWxEZWx0YVg9MTBcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YVg6IDEwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHpvb21pbmcgZmFjdG9yIHdoaWNoIHJlcGxhY2VzIHRoZSBkZWZhdWx0IHdoZWVsRGVsdGEuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VXaGVlbERlbHRhWT0xMFxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbERlbHRhWTogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgbW91c2Ugd2hlZWwgc2hvdWxkIGNoYW5nZSB0aGUgdHJhbnNsYXRlWiB2YWx1ZSBmb3Igem9vbWluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3VzZVdoZWVsRW5hYmxlZF89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbEVuYWJsZWRfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTSBlbGVtZW50IG9mZnNldEhlaWdodCBvZiB0aGUgdG9wIGxldmVsIGRpdi5cbiAgICAgICAgICogR2V0cyBmZXRjaGVkIGFmdGVyIHRoZSBnYWxsZXJ5IGdvdCBtb3VudGVkLlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ8bnVsbH0gb2Zmc2V0SGVpZ2h0PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0SGVpZ2h0OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTSBlbGVtZW50IG9mZnNldFdpZHRoIG9mIHRoZSB0b3AgbGV2ZWwgZGl2LlxuICAgICAgICAgKiBHZXRzIGZldGNoZWQgYWZ0ZXIgdGhlIGdhbGxlcnkgZ290IG1vdW50ZWQuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBvZmZzZXRXaWR0aD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldFdpZHRoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2V0IHRoaXMgb25lIHRvIHRydWUgdG8gb3JkZXIgdGhlIGl0ZW1zIGJ5IHJvdyBpbnN0ZWFkIG9mIGJ5IGNvbHVtblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvcmRlckJ5Um93Xz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgb3JkZXJCeVJvd186IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIENTUyBydWxlIGZvciBzZWxlY3RlZCBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHNlbGVjdGVkSXRlbUNscz0nbmVvLXNlbGVjdGVkJ1xuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRJdGVtQ2xzOiAnbmVvLXNlbGVjdGVkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHVzZXMgdGhlIHNlbGVjdGlvbi5HYWxsZXJ5TW9kZWwgYnkgZGVmYXVsdFxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uc2VsZWN0aW9uLkdhbGxlcnlNb2RlbHxudWxsfSBzZWxlY3Rpb25Nb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uTW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzZWxlY3QgdGhlIGl0ZW0gaW5zaWRlIHRoZSBtaWRkbGUgb2YgdGhlIHN0b3JlIGl0ZW1zIG9uIG1vdW50XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNlbGVjdE9uTW91bnQ9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0T25Nb3VudDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdG9yZSBpbnN0YW5jZSBvciBjbGFzcyBjb250YWluaW5nIHRoZSBkYXRhIGZvciB0aGUgZ2FsbGVyeSBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLCAvLyB0b2RvOiB1c2UgYSBzdG9yZSBvbmNlIGNvbGxlY2l0b25zIGFyZSBpbnRlZ3JhdGVkXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2V0VGltZW91dCgpIGlkcyBmb3IgY2FsbHMgd2hpY2ggY2FuIGdldCBjYW5jZWxsZWRcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHRyYW5zaXRpb25UaW1lb3V0cz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2l0aW9uVGltZW91dHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgb2YgdGhlIHZpZXcgb3JpZ2luXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWF89MFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWF86IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBvZiB0aGUgdmlldyBvcmlnaW5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZXz0wXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVZXzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIG9mIHRoZSB2aWV3IG9yaWdpblxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVpfPTBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVpfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNscyAgICAgOiBbJ3BhZ2UnLCAndmlldyddLFxuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWydvcmlnaW4nLCAndmlldyddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbiAgIDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnY2FtZXJhJywgJ3ZpZXcnXSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICBjbiAgIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ2RvbGx5JywgJ3ZpZXcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNscyAgOiBbJ3ZpZXcnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY24gICA6IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgb3JpZ2luICAgICAgID0gdmRvbS5jblswXSxcbiAgICAgICAgICAgIGNhbWVyYSAgICAgICA9IG9yaWdpbi5jblswXSxcbiAgICAgICAgICAgIGRvbGx5ICAgICAgICA9IGNhbWVyYS5jblswXSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IGRvbGx5LmNuWzBdO1xuXG4gICAgICAgIG1lW2l0ZW1zTW91bnRlZF0gPSBmYWxzZTtcblxuICAgICAgICBjYW1lcmEuaWQgPSBtZS5pZCArICdfXycgKyAnY2FtZXJhJztcbiAgICAgICAgZG9sbHkgLmlkID0gbWUuaWQgKyAnX18nICsgJ2RvbGx5JztcbiAgICAgICAgb3JpZ2luLmlkID0gbWUuaWQgKyAnX18nICsgJ29yaWdpbic7XG4gICAgICAgIHZpZXcgIC5pZCA9IG1lLmlkICsgJ19fJyArICd2aWV3JztcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgIGZuICAgOiBtZS5vbkNsaWNrLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdoZWVsOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uTW91c2VXaGVlbCxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnNlbGVjdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3Rpb25Nb2RlbC5yZWdpc3RlcihtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkIGRhdGEgZm9yIHRoZSBleGFtcGxlIGNvbGxlY3Rpb25cbiAgICAgICAgaWYgKCEobWUuc3RvcmUgaW5zdGFuY2VvZiBTdG9yZSkpIHtcbiAgICAgICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgICAgIGluc2lkZU5lbzogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cmwgICAgICA6ICcuLi8uLi9yZXNvdXJjZXMvZXhhbXBsZXMvZGF0YS9haV9jb250YWN0cy5qc29uJ1xuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IGRhdGEuanNvbi5kYXRhO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAvLyB0b2RvOiByZW5kZXJpbmcgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuc2VsZWN0T25Nb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWUuYWZ0ZXJTZXRNb3VudGVkKHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmb3IgTmVvLlhoci5yZXF1ZXN0JywgZXJyLCBtZS5pZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgYW1vdW50Um93cyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRBbW91bnRSb3dzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoTmVvLmlzTnVtYmVyKG9sZFZhbHVlKSkge1xuICAgICAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAgICAgbWUuYWZ0ZXJTZXRPcmRlckJ5Um93KG1lLm9yZGVyQnlSb3csICFtZS5vcmRlckJ5Um93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWF4SXRlbSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUgJiYgbWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWUuZGVzdHJveUl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSAtIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMob2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uICAgIDogJ3JlYWREb20nLFxuICAgICAgICAgICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICB2bm9kZUlkICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ29mZnNldEhlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0V2lkdGgnXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5vZmZzZXRIZWlnaHQgPSBkYXRhLmF0dHJpYnV0ZXMub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtZS5vZmZzZXRXaWR0aCAgPSBkYXRhLmF0dHJpYnV0ZXMub2Zmc2V0V2lkdGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lLnNlbGVjdE9uTW91bnQgfHwgbWUuc2VsZWN0aW9uTW9kZWwuaGFzU2VsZWN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3Rpb24gPSBtZS5zZWxlY3Rpb25Nb2RlbC5nZXRTZWxlY3Rpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgICAgICAgPSBzZWxlY3Rpb24ubGVuZ3RoID4gMCAmJiBzZWxlY3Rpb25bMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgha2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gcGFyc2VJbnQoTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpIC8gbWUuYW1vdW50Um93cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSBtZS5zdG9yZS5nZXRLZXlBdChpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnNlbGVjdChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25Nb2RlbC5pdGVtcyA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBvcmRlckJ5Um93IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0T3JkZXJCeVJvdyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKE5lby5pc0Jvb2xlYW4ob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaSAgICA9IDAsXG4gICAgICAgICAgICAgICAgbGVuICA9IE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5pdGVtcy5sZW5ndGgpLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgICAgIHZpZXcgPSBtZS5nZXRJdGVtc1Jvb3QoKTtcblxuICAgICAgICAgICAgaWYgKG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICAgICAgbWUucmVmcmVzaEltYWdlUmVmbGVjdGlvbigpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcuY25baV0uc3R5bGUudHJhbnNmb3JtID0gbWUuZ2V0SXRlbVRyYW5zZm9ybShpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNtID0gbWUuc2VsZWN0aW9uTW9kZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbS5oYXNTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lLm9uU2VsZWN0aW9uQ2hhbmdlKHNtLml0ZW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICB2YWx1ZS5yZWdpc3Rlcih0aGlzKTtcblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc3RvcmUgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IHJlbW92ZSB0aGUgaWYgY2hlY2sgb25jZSBhbGwgZGVtb3MgdXNlIHN0b3JlcyAoaW5zdGVhZCBvZiBjb2xsZWN0aW9ucylcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBTdG9yZSwge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQgOiBtZS5vblN0b3JlTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgOiB7XG4gICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydCxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVYKCkge3RoaXMubW92ZU9yaWdpbigpO31cbiAgICBhZnRlclNldFRyYW5zbGF0ZVkoKSB7dGhpcy5tb3ZlT3JpZ2luKCk7fVxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWigpIHt0aGlzLm1vdmVPcmlnaW4oKTt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGJlZm9yZUdldEl0ZW1UcGwoKSB7XG4gICAgICAgIHJldHVybiBOZW8uY2xvbmUodGhpcy5faXRlbVRwbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBHYWxsZXJ5TW9kZWwsIHtcbiAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5vblNlbGVjdGlvbkNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgICA6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gZ2V0IGRpZmZlcmVudCBpdGVtLW1hcmt1cHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHZkb21JdGVtLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaW1hZ2VWZG9tID0gdmRvbUl0ZW0uY25bMF0uY25bMF07XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICBpbWFnZVZkb20uc3JjID0gTmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoICsgJ2V4YW1wbGVzLycgKyByZWNvcmQuaW1hZ2U7XG5cbiAgICAgICAgaW1hZ2VWZG9tLnN0eWxlLmhlaWdodCA9IG1lLmltYWdlSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgaW1hZ2VWZG9tLnN0eWxlLndpZHRoICA9IG1lLmltYWdlV2lkdGggICsgJ3B4JztcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydEluZGV4XSB0aGUgc3RhcnQgaW5kZXggZm9yIGNyZWF0aW5nIGl0ZW1zLFxuICAgICAqIGUuZy4gaW5jcmVhc2luZyBtYXhJdGVtcyBvbmx5IG5lZWRzIHRvIGNyZWF0ZSB0aGUgbmV3IG9uZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoc3RhcnRJbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbW91bnRSb3dzICAgICAgID0gbWUuYW1vdW50Um93cyxcbiAgICAgICAgICAgIG9yZGVyQnlSb3cgICAgICAgPSBtZS5vcmRlckJ5Um93LFxuICAgICAgICAgICAgc2Vjb25kTGFzdENvbHVtbiA9IGFtb3VudFJvd3MgLSAxLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpdGVtc1Jvb3QgICAgICAgID0gbWUuZ2V0SXRlbXNSb290KCksXG4gICAgICAgICAgICBpICAgICAgICAgICAgICAgID0gc3RhcnRJbmRleCB8fCAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgICA9IE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5pdGVtcy5sZW5ndGgpLFxuICAgICAgICAgICAgYW1vdW50Q29sdW1ucywgaXRlbSwgdmRvbUl0ZW07XG5cbiAgICAgICAgaWYgKG9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGFtb3VudENvbHVtbnMgPSBNYXRoLmNlaWwobWUuc3RvcmUuZ2V0Q291bnQoKSAvIGFtb3VudFJvd3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaXRlbSAgICAgID0gbWUuc3RvcmUuaXRlbXNbaV07XG4gICAgICAgICAgICB2ZG9tSXRlbSAgPSBtZS5jcmVhdGVJdGVtKG1lLml0ZW1UcGwsIGl0ZW0sIGkpO1xuXG4gICAgICAgICAgICB2ZG9tSXRlbS4gc3R5bGUgPSB2ZG9tSXRlbS5zdHlsZSB8fCB7fTtcblxuICAgICAgICAgICAgdmRvbUl0ZW0uc3R5bGVbJ3RyYW5zZm9ybSddID0gbWUuZ2V0SXRlbVRyYW5zZm9ybShpKTtcblxuICAgICAgICAgICAgaWYgKG9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSBzZWNvbmRMYXN0Q29sdW1uICogYW1vdW50Q29sdW1ucykge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQodmRvbUl0ZW0uY2xzLCAnbmVvLXJlZmxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChpICUgYW1vdW50Um93cyA9PT0gc2Vjb25kTGFzdENvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQodmRvbUl0ZW0uY2xzLCAnbmVvLXJlZmxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGl0ZW1zUm9vdC5jbi5wdXNoKHZkb21JdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKHZkb20pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWVbaXRlbXNNb3VudGVkXSA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydEluZGV4XVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbYW1vdW50SXRlbXNdXG4gICAgICovXG4gICAgZGVzdHJveUl0ZW1zKHN0YXJ0SW5kZXgsIGFtb3VudEl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNvdW50SXRlbXMgICA9IGFtb3VudEl0ZW1zIHx8IG1lLnN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBtZS5zZWxlY3Rpb25Nb2RlbC5pdGVtc1swXTtcblxuICAgICAgICBtZS5nZXRJdGVtc1Jvb3QoKS5jbi5zcGxpY2Uoc3RhcnRJbmRleCB8fCAwLCBjb3VudEl0ZW1zKTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgaWYgKG1lLnNlbGVjdGlvbk1vZGVsLmhhc1NlbGVjdGlvbigpICYmIHNlbGVjdGVkSXRlbSA+IHN0YXJ0SW5kZXggJiYgc2VsZWN0ZWRJdGVtIDwgc3RhcnRJbmRleCArIGNvdW50SXRlbXMpIHtcbiAgICAgICAgICAgIG1lLmFmdGVyU2V0TW91bnRlZCh0cnVlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJbXX1cbiAgICAgKi9cbiAgICBnZXRDYW1lcmFUcmFuc2Zvcm1Gb3JDZWxsKGluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbW91bnRSb3dzICA9IG1lLmFtb3VudFJvd3MsXG4gICAgICAgICAgICBpbWFnZVdpZHRoICA9IG1lLmltYWdlV2lkdGgsXG4gICAgICAgICAgICBnYXAgICAgICAgICA9IDEwLFxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgPSBtZS5vZmZzZXRIZWlnaHQgLyAoYW1vdW50Um93cyArIDIpLFxuICAgICAgICAgICAgc3BhY2luZyAgICAgPSBoZWlnaHQgKyBnYXAsXG4gICAgICAgICAgICB4ICAgICAgICAgICA9IE1hdGguZmxvb3IoaW5kZXggLyBhbW91bnRSb3dzKSxcbiAgICAgICAgICAgIHkgICAgICAgICAgID0gaW5kZXggLSB4ICogYW1vdW50Um93cztcblxuICAgICAgICBpZiAobWUub3JkZXJCeVJvdykge1xuICAgICAgICAgICAgbGV0IGFtb3VudENvbHVtbnMgPSBNYXRoLmNlaWwoTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpIC8gYW1vdW50Um93cyk7XG5cbiAgICAgICAgICAgIHggPSBpbmRleCAlIGFtb3VudENvbHVtbnM7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihpbmRleCAvIGFtb3VudENvbHVtbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGN4ID0geCAqIChpbWFnZVdpZHRoICsgMTApLFxuICAgICAgICAgICAgY3kgPSAoeSArIDAuNSkgKiBzcGFjaW5nICogMS4xICsgNTA7XG5cbiAgICAgICAgcmV0dXJuIFstY3gsIC1jeSwgMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldEl0ZW1JZCh2bm9kZUlkKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh2bm9kZUlkLnNwbGl0KCdfXycpWzFdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2ZG9tIG5vZGUgY29udGFpbmluZyB0aGUgZ2FsbGVyeSBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRJdGVtc1Jvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMF0uY25bMF0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1UcmFuc2Zvcm0oaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYW1vdW50Um93cyA9IG1lLmFtb3VudFJvd3MsXG4gICAgICAgICAgICB4LCB5O1xuXG4gICAgICAgIGlmIChtZS5vcmRlckJ5Um93KSB7XG4gICAgICAgICAgICBhbW91bnRSb3dzID0gTWF0aC5jZWlsKE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKSAvIGFtb3VudFJvd3MpO1xuXG4gICAgICAgICAgICB4ID0gaW5kZXggJSBhbW91bnRSb3dzO1xuICAgICAgICAgICAgeSA9IE1hdGguZmxvb3IoaW5kZXggLyBhbW91bnRSb3dzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBNYXRoLmZsb29yKGluZGV4IC8gYW1vdW50Um93cyk7XG4gICAgICAgICAgICB5ID0gaW5kZXggJSBhbW91bnRSb3dzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlM2QoXG4gICAgICAgICAgICB4ICogKG1lLmltYWdlV2lkdGggICsgMTApLFxuICAgICAgICAgICAgeSAqIChtZS5pbWFnZUhlaWdodCArIDEwKSArIDEwMCxcbiAgICAgICAgICAgIDBcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbVZub2RlSWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBtb3ZlT3JpZ2luKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLnN0eWxlLnRyYW5zZm9ybSA9IG1lLnRyYW5zbGF0ZTNkKG1lLnRyYW5zbGF0ZVgsIG1lLnRyYW5zbGF0ZVksIG1lLnRyYW5zbGF0ZVopO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maXJlKGRhdGEuaWQgPT09IHRoaXMuaWQgPyAnY29udGFpbmVyQ2xpY2snIDogJ2l0ZW1DbGljaycsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbk1vdXNlV2hlZWwoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YVggICAgID0gZGF0YS5kZWx0YVgsXG4gICAgICAgICAgICBkZWx0YVkgICAgID0gZGF0YS5kZWx0YVksXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gbWUudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSBtZS50cmFuc2xhdGVaO1xuXG4gICAgICAgIGlmIChtZS5tb3VzZVdoZWVsRW5hYmxlZCkge1xuICAgICAgICAgICAgbWUuX3RyYW5zbGF0ZVggPSB0cmFuc2xhdGVYIC0gKGRlbHRhWCAqIG1lLm1vdXNlV2hlZWxEZWx0YVgpOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICBtZS5fdHJhbnNsYXRlWiA9IHRyYW5zbGF0ZVogKyAoZGVsdGFZICogbWUubW91c2VXaGVlbERlbHRhWSk7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgbWUubW92ZU9yaWdpbigpO1xuXG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2VUcmFuc2xhdGVYJywgbWUuX3RyYW5zbGF0ZVgpO1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlVHJhbnNsYXRlWicsIG1lLl90cmFuc2xhdGVaKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKi9cbiAgICBvblNlbGVjdGlvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaW5kZXggICAgICAgICAgPSBtZS5zdG9yZS5pbmRleE9mKHZhbHVlICYmIHZhbHVlWzBdIHx8IDApLFxuICAgICAgICAgICAgaW1hZ2VIZWlnaHQgICAgPSBtZS5pbWFnZUhlaWdodCxcbiAgICAgICAgICAgIGltYWdlV2lkdGggICAgID0gbWUuaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGNhbWVyYSAgICAgICAgID0gdmRvbS5jblswXS5jblswXSxcbiAgICAgICAgICAgIGRvbGx5VHJhbnNmb3JtID0gbWUuZ2V0Q2FtZXJhVHJhbnNmb3JtRm9yQ2VsbChpbmRleCksXG4gICAgICAgICAgICBoZWlnaHQgICAgICAgICA9IG1lLm9mZnNldEhlaWdodCAvIChtZS5hbW91bnRSb3dzICsgMiksXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgICA9IE1hdGgucm91bmQoaGVpZ2h0ICogaW1hZ2VXaWR0aCAvIGltYWdlSGVpZ2h0KSxcbiAgICAgICAgICAgIHNwYWNpbmcgICAgICAgID0gd2lkdGggKyAxMCxcbiAgICAgICAgICAgIHRpbWVvdXRJZDtcblxuICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLnNwbGljZSgwLCBtZS50cmFuc2l0aW9uVGltZW91dHMubGVuZ3RoKTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGRlbHRhcyA6IHtcbiAgICAgICAgICAgICAgICBpZCAgIDogbWUuaWQgKyAnX18nICsgJ2RvbGx5JyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG1lLnRyYW5zbGF0ZTNkKC4uLmRvbGx5VHJhbnNmb3JtKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgOiAncmVhZERvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICB2bm9kZUlkICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnMgOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuICAgICAgICAgICAgOiAnZ2V0Q29tcHV0ZWRTdHlsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXMgICAgICAgIDogW21lLmlkICsgJ19fJyArICdkb2xseScsIG51bGxdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1Jc0RvbU5vZGU6IFt0cnVlLCBmYWxzZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgIDogJ2RlZmF1bHRWaWV3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybkZuTmFtZSAgOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlICAgOiAndHJhbnNmb3JtJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdHJhbnNmb3JtID0gZGF0YS5mdW5jdGlvbnMudHJhbnNmb3JtLFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYLCBhbmdsZTtcblxuICAgICAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaW5kZXhPZignbWF0cml4M2QnKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uc3Vic3RyaW5nKDksIHRyYW5zZm9ybS5sZW5ndGggLSAxKTsgLy8gcmVtb3ZlIG1hdHJpeDNkKCAuLi4gKVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uc3BsaXQoJywnKS5tYXAoZSA9PiBwYXJzZUZsb2F0KGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zZm9ybVsxMl07IC8vIGJvdHRvbSBsZWZ0IGVsZW1lbnQgb2YgdGhlIDR4NCBtYXRyaXhcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uc3Vic3RyaW5nKDcsIHRyYW5zZm9ybS5sZW5ndGggLSAxKTsgLy8gcmVtb3ZlIG1hdHJpeCggLi4uIClcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtID0gdHJhbnNmb3JtLnNwbGl0KCcsJykubWFwKGUgPT4gcGFyc2VGbG9hdChlKSk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2Zvcm1bNF07IC8vIGJvdHRvbSBsZWZ0IGVsZW1lbnQgb2YgdGhlIDJ4MyBtYXRyaXhcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNsYXRlWCAtIGRvbGx5VHJhbnNmb3JtWzBdO1xuICAgICAgICAgICAgICAgIGFuZ2xlICAgICAgPSBNYXRoLm1pbihNYXRoLm1heCh0cmFuc2xhdGVYIC8gKHNwYWNpbmcgKiAzKSwgLTEpLCAxKSAqIDQ1O1xuXG4gICAgICAgICAgICAgICAgY2FtZXJhLnN0eWxlLnRyYW5zZm9ybSAgICAgICAgICA9ICdyb3RhdGVZKCcgKyBhbmdsZSArICdkZWcpJztcbiAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzMzMG1zJztcblxuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS50cmFuc2l0aW9uVGltZW91dHMsIHRpbWVvdXRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnN0eWxlLnRyYW5zZm9ybSAgICAgICAgICA9ICdyb3RhdGVZKDBkZWcpJztcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc1MDAwbXMnO1xuXG4gICAgICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgICAgIH0sIDMzMCk7XG5cbiAgICAgICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Tb3J0KCkge1xuICAgICAgICBpZiAodGhpc1tpdGVtc01vdW50ZWRdID09PSB0cnVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2UgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICBpdGVtcyAgICAgPSBbLi4ubWUuc3RvcmUuaXRlbXMgfHwgW11dLFxuICAgICAgICAgICAgICAgIG5ld0NuICAgICA9IFtdLFxuICAgICAgICAgICAgICAgIHZkb20gICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgdmlldyAgICAgID0gbWUuZ2V0SXRlbXNSb290KCksXG4gICAgICAgICAgICAgICAgdmRvbU1hcCAgID0gdmlldy5jbi5tYXAoZSA9PiBlLmlkKSxcbiAgICAgICAgICAgICAgICBmcm9tSW5kZXgsIHZkb21JZDtcblxuICAgICAgICAgICAgaXRlbXMubGVuZ3RoID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpO1xuXG4gICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZkb21JZCAgICA9IG1lLmdldEl0ZW1Wbm9kZUlkKGl0ZW1bbWUua2V5UHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUluZGV4ID0gdmRvbU1hcC5pbmRleE9mKHZkb21JZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3Q24ucHVzaCh2aWV3LmNuW2Zyb21JbmRleF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gZnJvbUluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGFuZ2UgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZXcuY24gPSBuZXdDbjtcbiAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldE9yZGVyQnlSb3cobWUub3JkZXJCeVJvdywgIW1lLm9yZGVyQnlSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpdGVtc1xuICAgICAqL1xuICAgIG9uU3RvcmVMb2FkKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuZ2V0SXRlbXNSb290KCkuY24gPSBbXTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICB0aGlzLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZWZyZXNoSW1hZ2VSZWZsZWN0aW9uKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbW91bnRSb3dzICAgICAgID0gbWUuYW1vdW50Um93cyxcbiAgICAgICAgICAgIG9yZGVyQnlSb3cgICAgICAgPSBtZS5vcmRlckJ5Um93LFxuICAgICAgICAgICAgc2Vjb25kTGFzdENvbHVtbiA9IGFtb3VudFJvd3MgLSAxLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgICAgID0gbWUuZ2V0SXRlbXNSb290KCksXG4gICAgICAgICAgICBhbW91bnRDb2x1bW5zO1xuXG4gICAgICAgIGlmIChvcmRlckJ5Um93KSB7XG4gICAgICAgICAgICBhbW91bnRDb2x1bW5zID0gTWF0aC5jZWlsKE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKSAvIGFtb3VudFJvd3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlldy5jbi5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheVtpbmRleCA+PSBzZWNvbmRMYXN0Q29sdW1uICogYW1vdW50Q29sdW1ucyA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY2xzLCAnbmVvLXJlZmxlY3Rpb24nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXlbaW5kZXggJSBhbW91bnRSb3dzID09PSBzZWNvbmRMYXN0Q29sdW1uICAgPyAnYWRkJyA6ICdyZW1vdmUnXShpdGVtLmNscywgJ25lby1yZWZsZWN0aW9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB6XG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICB0cmFuc2xhdGUzZCh4LCB5LCB6KSB7XG4gICAgICAgIHJldHVybiAndHJhbnNsYXRlM2QoJyArIHggKyAncHgsICcgKyB5ICsgJ3B4LCAnICsgeiArICdweCknO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeSk7XG5cbmV4cG9ydCB7R2FsbGVyeSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgICAgZnJvbSAnLi9Nb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBBIHNlbGVjdGlvbiBtb2RlbCBpbnRlbmRlZCB0byB1c2UgZm9yIE5lby5jb21wb25lbnQuR2FsbGVyeVxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uc2VsZWN0aW9uLk1vZGVsXG4gKi9cbmNsYXNzIEdhbGxlcnlNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5HYWxsZXJ5TW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3NlbGVjdGlvbi1nYWxsZXJ5bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLWdhbGxlcnltb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHN0YXkgaW4gdGhlIHNhbWUgY29sdW1uIHdoZW4gbmF2aWdhdGluZyB3aXRoIHRoZSB1cCBhbmQgZG93biBrZXlzLFxuICAgICAgICAgKiBvdGhlcndpc2UgeW91IHdpbGwgbmF2aWdhdGUgdG8gdGhlIG5leHQgLyBwcmV2IGNvbHVtbiB3aGVuIG1vdmluZyBvdXRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc3RheUluUm93PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzdGF5SW5Sb3c6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRvIG5vdCBhcHBseSBhIGRvbUxpc3RlbmVyXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoKSB7fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgb2xkSXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXTtcblxuICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkIDogdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtKSxcbiAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5pdGVtcy5sZW5ndGgpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JdGVtQ2xpY2soZGF0YSkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gZGF0YS5wYXRoLmxlbmd0aCxcbiAgICAgICAgICAgIHZpZXcgPSB0aGlzLnZpZXcsXG4gICAgICAgICAgICBrZXk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGEucGF0aFtpXS5jbHMuaW5jbHVkZXMoJ25lby1nYWxsZXJ5LWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgIGtleSA9IHZpZXcuZ2V0SXRlbUlkKGRhdGEucGF0aFtpXS5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3Qoa2V5KTtcblxuICAgICAgICAgICAgICAgIHZpZXcuZmlyZSgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgICAgICByZWNvcmQ6IHZpZXcuc3RvcmUuZ2V0KGtleSlcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkRvd24oZGF0YSkge1xuICAgICAgICB0aGlzW3RoaXMudmlldy5vcmRlckJ5Um93ID8gJ29uTmF2S2V5Um93JyA6ICdvbk5hdktleUNvbHVtbiddKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25MZWZ0KGRhdGEpIHtcbiAgICAgICAgdGhpc1t0aGlzLnZpZXcub3JkZXJCeVJvdyA/ICdvbk5hdktleUNvbHVtbicgOiAnb25OYXZLZXlSb3cnXSgtMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blJpZ2h0KGRhdGEpIHtcbiAgICAgICAgdGhpc1t0aGlzLnZpZXcub3JkZXJCeVJvdyA/ICdvbk5hdktleUNvbHVtbicgOiAnb25OYXZLZXlSb3cnXSgxKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duVXAoZGF0YSkge1xuICAgICAgICB0aGlzW3RoaXMudmlldy5vcmRlckJ5Um93ID8gJ29uTmF2S2V5Um93JyA6ICdvbk5hdktleUNvbHVtbiddKC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwPTFcbiAgICAgKi9cbiAgICBvbk5hdktleUNvbHVtbihzdGVwPTEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHNlbGVjdGVkICAgICA9IG1lLml0ZW1zWzBdLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIGluZGV4LCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gY291bnRSZWNvcmRzIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwPTFcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhzdGVwPTEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHNlbGVjdGVkICAgICA9IG1lLml0ZW1zWzBdLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgICA9IHZpZXcuYW1vdW50Um93cyxcbiAgICAgICAgICAgIHN0YXlJblJvdyAgICA9IG1lLnN0YXlJblJvdyxcbiAgICAgICAgICAgIGluZGV4LCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKHZpZXcub3JkZXJCeVJvdykge1xuICAgICAgICAgICAgYW1vdW50Um93cyA9IE1hdGguY2VpbCh2aWV3LnN0b3JlLmdldENvdW50KCkgLyBhbW91bnRSb3dzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0ZXAgKj0gYW1vdW50Um93cztcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gc3RvcmUuaW5kZXhPZihzZWxlY3RlZCkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKCFzdGF5SW5Sb3cpIHtcbiAgICAgICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgKGNvdW50UmVjb3JkcyAtIGFtb3VudFJvd3MpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gYW1vdW50Um93cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGlmICghc3RheUluUm93KSB7XG4gICAgICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA+PSBhbW91bnRSb3dzKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggLT0gYW1vdW50Um93cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICB2aWV3Lm9uKHtcbiAgICAgICAgICAgIGNvbnRhaW5lckNsaWNrOiBtZS5vbkNvbnRhaW5lckNsaWNrLFxuICAgICAgICAgICAgaXRlbUNsaWNrICAgICA6IG1lLm9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgb2xkSXRlbXMgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXSxcbiAgICAgICAgICAgIHZub2RlSWQgID0gdmlldy5nZXRJdGVtVm5vZGVJZChpdGVtSWQpO1xuXG4gICAgICAgIGlmIChtZS5zaW5nbGVTZWxlY3QpIHtcbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0gIT09IGl0ZW1JZCkge2NvbnNvbGUubG9nKGl0ZW0sIGl0ZW1JZClcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiB2aWV3LmdldEl0ZW1Wbm9kZUlkKGl0ZW0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFsnbmVvLXNlbGVjdGVkJ11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLml0ZW1zLnNwbGljZSgwLCBtZS5pdGVtcy5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgaWQgOiB2bm9kZUlkLFxuICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgYWRkOiBbJ25lby1zZWxlY3RlZCddXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIE5lb0FycmF5WydhZGQnXShtZS5pdGVtcywgaXRlbUlkKTtcblxuICAgICAgICBpZiAoZGVsdGFzLmxlbmd0aCA+IDAgJiYgdmlldy5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiB2aWV3LmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmlldy5tb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5maXJlKCdzZWxlY3Rpb25DaGFuZ2UnLCBtZS5pdGVtcywgb2xkSXRlbXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoR2FsbGVyeU1vZGVsKTtcblxuZXhwb3J0IHtHYWxsZXJ5TW9kZWwgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==