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
            url      : Neo.config.isExperimental ? me.url : me.url
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0JveExhYmVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0dhbGxlcnkubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvSGVsaXgubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb21wb25lbnQvd3JhcHBlci9BbUNoYXJ0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L3dyYXBwZXIvTWFwYm94R0wubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1BpY2tlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1NlbGVjdC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvdHJpZ2dlci9QaWNrZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvU3BpbkRvd24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL3RyaWdnZXIvU3BpblVwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC90cmlnZ2VyL1NwaW5VcERvd24ubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vR2FsbGVyeU1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvc2VsZWN0aW9uL0hlbGl4TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vdGFibGUvUm93TW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWJsZS9Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy90YWJsZS9WaWV3Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvaGVhZGVyL0J1dHRvbi5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3RhYmxlL2hlYWRlci9Ub29sYmFyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdGFibGUvaGVhZGVyL19leHBvcnQubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy91dGlsL0Nzcy5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3V0aWwvTWF0cml4Lm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFLO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzRDtBQUNGO0FBQ1g7QUFDbUI7QUFDWjtBQUNBOztBQUVoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUztBQUMvQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQ0FBZ0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyx1REFBSztBQUN2QztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkMsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQiw2REFBZSwwQkFBMEIsdURBQUs7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQSwwQkFBMEIsNERBQVU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkMsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsNkRBQWUsMEJBQTBCLG1FQUFZO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdURBQVE7QUFDNUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxvQkFBb0IsdURBQVE7QUFDNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUVBQXlFO0FBQ3pFLHlFQUF5RTs7QUFFekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsNkVBQTZFO0FBQzdFO0FBQ0EsK0NBQStDO0FBQy9DLGlCQUFpQjtBQUNqQiw2RUFBNkU7QUFDN0U7QUFDQSw4Q0FBOEM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esb0JBQW9CLHVEQUFROztBQUU1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCLGFBQWE7QUFDYixnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzV6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNEO0FBQ0Y7QUFDWDtBQUNpQjtBQUNUO0FBQ0Q7QUFDQTs7QUFFaEQ7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFTO0FBQzdCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLHVEQUFLO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLG9CQUFvQix1REFBUTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCOztBQUVqQjtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsb0JBQW9CO0FBQ25DLGVBQWUsb0JBQW9CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDZEQUFlLDBCQUEwQixpRUFBVTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxvQkFBb0I7QUFDbkMsZUFBZSxvQkFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQWUsMEJBQTBCLHVEQUFLO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUEsMEJBQTBCLDREQUFVO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELHdEQUFNO0FBQzFEO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtFQUErRTtBQUMvRSwrRUFBK0U7O0FBRS9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQix3REFBTTs7QUFFNUI7QUFDQSxnRUFBZ0Usd0RBQU07QUFDdEU7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLGFBQWE7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0JBQW9CLHVEQUFROztBQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7O0FBRWpCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUM5bUNBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ1U7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUztBQUMvQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsZ0RBQWdEO0FBQ2hEO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFvRDtBQUN4RTtBQUNBLHdCQUF3QixvREFBb0Q7QUFDNUU7QUFDQSw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVksd0RBQU07QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsV0FBVztBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSx3QkFBd0Isd0RBQU07QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7QUFBQTtBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFTO0FBQ2hDLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPLFVBQVU7QUFDckM7QUFDQSxrQkFBa0IsZUFBZTtBQUNqQztBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBLG9CQUFvQixvREFBb0Q7QUFDeEU7QUFDQSx3QkFBd0Isb0RBQW9EO0FBQzVFO0FBQ0EsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxXQUFXO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDs7QUFFaEQsc0JBQXNCLGdDQUFnQzs7QUFFdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzdaQTtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGlEQUFJO0FBQzNCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaFFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNGO0FBQ0k7QUFDZDs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpREFBSTtBQUN6Qiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0Esa0VBQWtFO0FBQ2xFLGtFQUFrRTtBQUNsRSxpQkFBaUI7QUFDakIsa0VBQWtFO0FBQ2xFLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsK0RBQWlCO0FBQ25EOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxrQ0FBa0MsNkRBQWU7QUFDakQ7O0FBRUE7QUFDQSxrQ0FBa0MsMkRBQWE7QUFDL0M7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDOVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRDtBQUNKO0FBQ1Y7QUFDUzs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQUk7QUFDekIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkRBQWE7QUFDakMsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDJEQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsNkNBQTZDO0FBQ25FLHNCQUFzQix5Q0FBeUM7QUFDL0Qsc0JBQXNCLE1BQU07QUFDNUIsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksc0RBQVE7QUFDcEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3pSQTtBQUFBO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1EQUFNO0FBQzFCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBLCtDQUErQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlEO0FBQ1A7QUFDUDtBQUNRO0FBQ0Q7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbURBQU07QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCLHNEQUFJO0FBQ2hDO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsYUFBYSw0REFBNEQ7QUFDekUsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGVBQWUsZUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxZQUFZO0FBQzNCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDJCQUEyQjtBQUMxQyxlQUFlLGVBQWU7QUFDOUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLDZEQUFlLDBCQUEwQix1REFBSztBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFRO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFRO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1QsWUFBWSxzREFBUTtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsYUFBYTtBQUNiOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BmQTtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaURBQUk7QUFDekIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixZQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixpREFBSTtBQUMzQix3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFJO0FBQ3pCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQUk7QUFDN0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw2REFBNkQ7QUFDMUUsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFBQTtBQUFBO0FBQUE7QUFBbUM7QUFDTTs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBSztBQUNoQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQsUUFBUSx1REFBUTs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDNVNBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ007O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQUs7QUFDOUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsU0FBUztBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULFFBQVEsdURBQVE7O0FBRWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsOENBQThDO0FBQy9ELGlCQUFpQiw4Q0FBOEM7QUFDL0QsaUJBQWlCLDhDQUE4QztBQUMvRCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDeFNBO0FBQUE7QUFBQTtBQUFBO0FBQW9DO0FBQ087O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFLO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLFNBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHNEQUFRO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUNBQXlDLHNEQUFRO0FBQ2pELGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzlMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRDtBQUNFO0FBQ1I7QUFDRTtBQUNjO0FBQ2Q7QUFDUDtBQUNNOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBYTtBQUNyQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixXQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sUUFBUSxrQ0FBa0MscUJBQXFCO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsMERBQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHlCQUF5QixpREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1REFBUTtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJGQUEyRiwwQ0FBMEM7QUFDckk7O0FBRUE7QUFDQSwyRkFBMkYsNENBQTRDO0FBQ3ZJO0FBQ0E7QUFDQSxZQUFZLHFEQUFHO0FBQ2Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG9CQUFvQjtBQUNuQyxlQUFlLG9CQUFvQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSw2REFBZSwwQkFBMEIscUVBQVE7QUFDaEU7O0FBRUE7QUFDQTtBQUNBLGVBQWUsZUFBZTtBQUM5QixlQUFlLGVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQiw2REFBZSwwQkFBMEIsdURBQUs7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLGVBQWU7QUFDOUIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsT0FBTztBQUN0QixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3ZkQTtBQUFBO0FBQUE7QUFBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJEQUFTO0FBQzVCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTyxRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxnQkFBZ0I7QUFDOUI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsY0FBYztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLGVBQWU7QUFDOUIsZUFBZSxFQUFFO0FBQ2pCLGVBQWUsT0FBTztBQUN0QixlQUFlLEVBQUU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDek9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBK0M7QUFDRDtBQUNLOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBVTtBQUMvQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBLG9CQUFvQixTQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEIsZ0JBQWdCLHVEQUFRO0FBQ3hCLGdCQUFnQix1REFBUTtBQUN4QjtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCLGdCQUFnQix1REFBUTtBQUN4QixnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDREQUFTO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHVEQUFRO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsdURBQVE7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMvY0E7QUFBQTtBQUFBO0FBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4REFBVztBQUNqQyx3QkFBd0I7QUFDeEI7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU8sZUFBZTtBQUMxQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTyxRQUFRLG9CQUFvQixrQkFBa0I7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xELGFBQWE7QUFDYixtQ0FBbUM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbURBQW1EO0FBQ25EO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDaktBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ0M7Ozs7Ozs7Ozs7Ozs7O0FDRHBDO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFJO0FBQ3RCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFZSxrRUFBRyxFOzs7Ozs7Ozs7Ozs7QUNoQ2xCO0FBQUE7QUFBb0M7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQUk7QUFDekIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUscUVBQU0sRSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9hcHBzLWNvdmlkLWFwcC1tanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFiZWwgZnJvbSAnLi9MYWJlbC5tanMnO1xuXG4vKipcbiAqIENvbnZlbmllbmNlIGNsYXNzIHRvIHJlbmRlciBhIGJvcmRlcmVkIGxhYmVsIHdpdGggYSB0ZXh0XG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5Cb3hMYWJlbFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5MYWJlbFxuICovXG5jbGFzcyBCb3hMYWJlbCBleHRlbmRzIExhYmVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbXBvbmVudC5Cb3hMYWJlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5Cb3hMYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdib3gtbGFiZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYm94LWxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tbGFiZWwnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1ib3gtbGFiZWwnLCAnbmVvLWxhYmVsJ11cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCb3hMYWJlbCk7XG5cbmV4cG9ydCB7Qm94TGFiZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENsYXNzU3lzdGVtVXRpbCBmcm9tICcuLi91dGlsL0NsYXNzU3lzdGVtLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnXG5pbXBvcnQgQ29tcG9uZW50ICAgICAgIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IEdhbGxlcnlNb2RlbCAgICBmcm9tICcuLi9zZWxlY3Rpb24vR2FsbGVyeU1vZGVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vZGF0YS9TdG9yZS5tanMnO1xuXG5jb25zdCBpdGVtc01vdW50ZWQgPSBTeW1ib2wuZm9yKCdpdGVtc01vdW50ZWQnKTtcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5HYWxsZXJ5XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgR2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuR2FsbGVyeSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5HYWxsZXJ5JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2dhbGxlcnknXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnZ2FsbGVyeScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYW1vdW50IG9mIHZpc2libGUgcm93cyBpbnNpZGUgdGhlIGdhbGxlcnlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhbW91bnRSb3dzXz0zXG4gICAgICAgICAqL1xuICAgICAgICBhbW91bnRSb3dzXzogMyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBnYWxsZXJ5IGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhY2tncm91bmRDb2xvcl89JyMwMDAwMDAnXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfOiAnIzAwMDAwMCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWdhbGxlcnknLCAncGFnZScsICd2aWV3J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZ2FsbGVyeScsICdwYWdlJywgJ3ZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgZGlzYWJsZXMgc2VsZWN0aW9uIG9mICBnYWxsZXJ5IGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRpc2FibGVTZWxlY3Rpb249ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVTZWxlY3Rpb246IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltYWdlIGhlaWdodCBvZiB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGltYWdlSGVpZ2h0PTE2MFxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VIZWlnaHQ6IDE2MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbWFnZSB3aWR0aCBvZiB0aGUgZ2FsbGVyeVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGltYWdlV2lkdGg9MTIwXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZVdpZHRoOiAxMjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1UcGxfXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtVHBsXzoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWdhbGxlcnktaXRlbScsICdpbWFnZS13cmFwJywgJ3ZpZXcnLCAnbmVvLXRyYW5zaXRpb24tMTAwMCddLFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWl0ZW0td3JhcHBlciddLFxuICAgICAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICAgICAgdGFnICA6ICdpbWcnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCBhbW91bnQgb2Ygc3RvcmUgaXRlbXMgdG8gc2hvd1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEl0ZW1zXz0zMDBcbiAgICAgICAgICovXG4gICAgICAgIG1heEl0ZW1zXzogMzAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHpvb21pbmcgZmFjdG9yIHdoaWNoIHJlcGxhY2VzIHRoZSBkZWZhdWx0IHdoZWVsRGVsdGEuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VXaGVlbERlbHRhWD0xMFxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbERlbHRhWDogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFZPTEwXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRGVsdGFZOiAxMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtb3VzZSB3aGVlbCBzaG91bGQgY2hhbmdlIHRoZSB0cmFuc2xhdGVaIHZhbHVlIGZvciB6b29taW5nXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdXNlV2hlZWxFbmFibGVkXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRW5hYmxlZF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0SGVpZ2h0IG9mIHRoZSB0b3AgbGV2ZWwgZGl2LlxuICAgICAgICAgKiBHZXRzIGZldGNoZWQgYWZ0ZXIgdGhlIGdhbGxlcnkgZ290IG1vdW50ZWQuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxudWxsfSBvZmZzZXRIZWlnaHQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRIZWlnaHQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0V2lkdGggb2YgdGhlIHRvcCBsZXZlbCBkaXYuXG4gICAgICAgICAqIEdldHMgZmV0Y2hlZCBhZnRlciB0aGUgZ2FsbGVyeSBnb3QgbW91bnRlZC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IG9mZnNldFdpZHRoPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0V2lkdGg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZXQgdGhpcyBvbmUgdG8gdHJ1ZSB0byBvcmRlciB0aGUgaXRlbXMgYnkgcm93IGluc3RlYWQgb2YgYnkgY29sdW1uXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG9yZGVyQnlSb3dfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBvcmRlckJ5Um93XzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIHJ1bGUgZm9yIHNlbGVjdGVkIGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc2VsZWN0ZWRJdGVtQ2xzPSduZW8tc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZEl0ZW1DbHM6ICduZW8tc2VsZWN0ZWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdXNlcyB0aGUgc2VsZWN0aW9uLkdhbGxlcnlNb2RlbCBieSBkZWZhdWx0XG4gICAgICAgICAqIEBtZW1iZXIge05lby5zZWxlY3Rpb24uR2FsbGVyeU1vZGVsfG51bGx9IHNlbGVjdGlvbk1vZGVsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25Nb2RlbF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHNlbGVjdCB0aGUgaXRlbSBpbnNpZGUgdGhlIG1pZGRsZSBvZiB0aGUgc3RvcmUgaXRlbXMgb24gbW91bnRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2VsZWN0T25Nb3VudD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RPbk1vdW50OiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHN0b3JlIGluc3RhbmNlIG9yIGNsYXNzIGNvbnRhaW5pbmcgdGhlIGRhdGEgZm9yIHRoZSBnYWxsZXJ5IGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge05lby5kYXRhLlN0b3JlfG51bGx9IHN0b3JlXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzdG9yZV86IG51bGwsIC8vIHRvZG86IHVzZSBhIHN0b3JlIG9uY2UgY29sbGVjaXRvbnMgYXJlIGludGVncmF0ZWRcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzZXRUaW1lb3V0KCkgaWRzIGZvciBjYWxscyB3aGljaCBjYW4gZ2V0IGNhbmNlbGxlZFxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gdHJhbnNpdGlvblRpbWVvdXRzPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zaXRpb25UaW1lb3V0czogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBvZiB0aGUgdmlldyBvcmlnaW5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVYXz0wXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVYXzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIG9mIHRoZSB2aWV3IG9yaWdpblxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVlfPTBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVlfOiAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggdmFsdWUgb2YgdGhlIHZpZXcgb3JpZ2luXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWl89MFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWl86IDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY2xzICAgICA6IFsncGFnZScsICd2aWV3J10sXG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNscyAgOiBbJ29yaWdpbicsICd2aWV3J10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWydjYW1lcmEnLCAndmlldyddLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge30sXG4gICAgICAgICAgICAgICAgICAgIGNuICAgOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnZG9sbHknLCAndmlldyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY24gICA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsndmlldyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbiAgIDogW11cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBvcmlnaW4gICAgICAgPSB2ZG9tLmNuWzBdLFxuICAgICAgICAgICAgY2FtZXJhICAgICAgID0gb3JpZ2luLmNuWzBdLFxuICAgICAgICAgICAgZG9sbHkgICAgICAgID0gY2FtZXJhLmNuWzBdLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gZG9sbHkuY25bMF07XG5cbiAgICAgICAgbWVbaXRlbXNNb3VudGVkXSA9IGZhbHNlO1xuXG4gICAgICAgIGNhbWVyYS5pZCA9IG1lLmlkICsgJ19fJyArICdjYW1lcmEnO1xuICAgICAgICBkb2xseSAuaWQgPSBtZS5pZCArICdfXycgKyAnZG9sbHknO1xuICAgICAgICBvcmlnaW4uaWQgPSBtZS5pZCArICdfXycgKyAnb3JpZ2luJztcbiAgICAgICAgdmlldyAgLmlkID0gbWUuaWQgKyAnX18nICsgJ3ZpZXcnO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uQ2xpY2ssXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2hlZWw6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25Nb3VzZVdoZWVsLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvYWQgZGF0YSBmb3IgdGhlIGV4YW1wbGUgY29sbGVjdGlvblxuICAgICAgICBpZiAoIShtZS5zdG9yZSBpbnN0YW5jZW9mIFN0b3JlKSkge1xuICAgICAgICAgICAgTmVvLlhoci5wcm9taXNlSnNvbih7XG4gICAgICAgICAgICAgICAgaW5zaWRlTmVvOiB0cnVlLFxuICAgICAgICAgICAgICAgIHVybCAgICAgIDogJy4uLy4uL3Jlc291cmNlcy9leGFtcGxlcy9kYXRhL2FpX2NvbnRhY3RzLmpzb24nXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnN0b3JlLml0ZW1zID0gZGF0YS5qc29uLmRhdGE7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIHRvZG86IHJlbmRlcmluZyBjaGVja1xuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcygpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5zZWxlY3RPbk1vdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5hZnRlclNldE1vdW50ZWQodHJ1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGZvciBOZW8uWGhyLnJlcXVlc3QnLCBlcnIsIG1lLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBhbW91bnRSb3dzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEFtb3VudFJvd3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChOZW8uaXNOdW1iZXIob2xkVmFsdWUpKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS5hZnRlclNldE9yZGVyQnlSb3cobWUub3JkZXJCeVJvdywgIW1lLm9yZGVyQnlSb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtYXhJdGVtIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSAmJiBtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBtZS5kZXN0cm95SXRlbXModmFsdWUsIG9sZFZhbHVlIC0gdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcyhvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1vdW50ZWQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gICAgOiAncmVhZERvbScsXG4gICAgICAgICAgICAgICAgICAgIGFwcE5hbWUgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0SGVpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdvZmZzZXRXaWR0aCdcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9mZnNldEhlaWdodCA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIG1lLm9mZnNldFdpZHRoICA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRXaWR0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWUuc2VsZWN0T25Nb3VudCB8fCBtZS5zZWxlY3Rpb25Nb2RlbC5oYXNTZWxlY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGlvbiA9IG1lLnNlbGVjdGlvbk1vZGVsLmdldFNlbGVjdGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSAgICAgICA9IHNlbGVjdGlvbi5sZW5ndGggPiAwICYmIHNlbGVjdGlvblswXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBwYXJzZUludChNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSkgLyBtZS5hbW91bnRSb3dzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IG1lLnN0b3JlLmdldEtleUF0KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbk1vZGVsLml0ZW1zID0gW107XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG9yZGVyQnlSb3cgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRPcmRlckJ5Um93KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAoTmVvLmlzQm9vbGVhbihvbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICBpICAgID0gMCxcbiAgICAgICAgICAgICAgICBsZW4gID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLml0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgdmRvbSA9IG1lLnZkb20sXG4gICAgICAgICAgICAgICAgdmlldyA9IG1lLmdldEl0ZW1zUm9vdCgpO1xuXG4gICAgICAgICAgICBpZiAobWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgICAgICBtZS5yZWZyZXNoSW1hZ2VSZWZsZWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlldy5jbltpXS5zdHlsZS50cmFuc2Zvcm0gPSBtZS5nZXRJdGVtVHJhbnNmb3JtKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc20gPSBtZS5zZWxlY3Rpb25Nb2RlbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNtLmhhc1NlbGVjdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUub25TZWxlY3Rpb25DaGFuZ2Uoc20uaXRlbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFN0b3JlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBpZiBjaGVjayBvbmNlIGFsbCBkZW1vcyB1c2Ugc3RvcmVzIChpbnN0ZWFkIG9mIGNvbGxlY3Rpb25zKVxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIFN0b3JlLCB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzICA6IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZCA6IG1lLm9uU3RvcmVMb2FkLFxuICAgICAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0LFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICA6IHtcbiAgICAgICAgICAgICAgICBzb3J0IDogbWUub25Tb3J0LFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZnRlclNldFRyYW5zbGF0ZVgoKSB7dGhpcy5tb3ZlT3JpZ2luKCk7fVxuICAgIGFmdGVyU2V0VHJhbnNsYXRlWSgpIHt0aGlzLm1vdmVPcmlnaW4oKTt9XG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVaKCkge3RoaXMubW92ZU9yaWdpbigpO31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgYmVmb3JlR2V0SXRlbVRwbCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh0aGlzLl9pdGVtVHBsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIEdhbGxlcnlNb2RlbCwge1xuICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uQ2hhbmdlOiB0aGlzLm9uU2VsZWN0aW9uQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgIDogdGhpc1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBnZXQgZGlmZmVyZW50IGl0ZW0tbWFya3Vwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbWFnZVZkb20gPSB2ZG9tSXRlbS5jblswXS5jblswXTtcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIGltYWdlVmRvbS5zcmMgPSBOZW8uY29uZmlnLnJlc291cmNlc1BhdGggKyAnZXhhbXBsZXMvJyArIHJlY29yZC5pbWFnZTtcblxuICAgICAgICBpbWFnZVZkb20uc3R5bGUuaGVpZ2h0ID0gbWUuaW1hZ2VIZWlnaHQgKyAncHgnO1xuICAgICAgICBpbWFnZVZkb20uc3R5bGUud2lkdGggID0gbWUuaW1hZ2VXaWR0aCAgKyAncHgnO1xuXG4gICAgICAgIHJldHVybiB2ZG9tSXRlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXhdIHRoZSBzdGFydCBpbmRleCBmb3IgY3JlYXRpbmcgaXRlbXMsXG4gICAgICogZS5nLiBpbmNyZWFzaW5nIG1heEl0ZW1zIG9ubHkgbmVlZHMgdG8gY3JlYXRlIHRoZSBuZXcgb25lc1xuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcyhzdGFydEluZGV4KSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgICAgICAgPSBtZS5hbW91bnRSb3dzLFxuICAgICAgICAgICAgb3JkZXJCeVJvdyAgICAgICA9IG1lLm9yZGVyQnlSb3csXG4gICAgICAgICAgICBzZWNvbmRMYXN0Q29sdW1uID0gYW1vdW50Um93cyAtIDEsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGl0ZW1zUm9vdCAgICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgICAgPSBzdGFydEluZGV4IHx8IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLml0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICBhbW91bnRDb2x1bW5zLCBpdGVtLCB2ZG9tSXRlbTtcblxuICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgYW1vdW50Q29sdW1ucyA9IE1hdGguY2VpbChtZS5zdG9yZS5nZXRDb3VudCgpIC8gYW1vdW50Um93cyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtICAgICAgPSBtZS5zdG9yZS5pdGVtc1tpXTtcbiAgICAgICAgICAgIHZkb21JdGVtICA9IG1lLmNyZWF0ZUl0ZW0obWUuaXRlbVRwbCwgaXRlbSwgaSk7XG5cbiAgICAgICAgICAgIHZkb21JdGVtLiBzdHlsZSA9IHZkb21JdGVtLnN0eWxlIHx8IHt9O1xuXG4gICAgICAgICAgICB2ZG9tSXRlbS5zdHlsZVsndHJhbnNmb3JtJ10gPSBtZS5nZXRJdGVtVHJhbnNmb3JtKGkpO1xuXG4gICAgICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgICAgIGlmIChpID49IHNlY29uZExhc3RDb2x1bW4gKiBhbW91bnRDb2x1bW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tSXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgJSBhbW91bnRSb3dzID09PSBzZWNvbmRMYXN0Q29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZCh2ZG9tSXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbXNSb290LmNuLnB1c2godmRvbUl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUodmRvbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZVtpdGVtc01vdW50ZWRdID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXhdXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFthbW91bnRJdGVtc11cbiAgICAgKi9cbiAgICBkZXN0cm95SXRlbXMoc3RhcnRJbmRleCwgYW1vdW50SXRlbXMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY291bnRJdGVtcyAgID0gYW1vdW50SXRlbXMgfHwgbWUuc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG1lLnNlbGVjdGlvbk1vZGVsLml0ZW1zWzBdO1xuXG4gICAgICAgIG1lLmdldEl0ZW1zUm9vdCgpLmNuLnNwbGljZShzdGFydEluZGV4IHx8IDAsIGNvdW50SXRlbXMpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwuaGFzU2VsZWN0aW9uKCkgJiYgc2VsZWN0ZWRJdGVtID4gc3RhcnRJbmRleCAmJiBzZWxlY3RlZEl0ZW0gPCBzdGFydEluZGV4ICsgY291bnRJdGVtcykge1xuICAgICAgICAgICAgbWUuYWZ0ZXJTZXRNb3VudGVkKHRydWUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge051bWJlcltdfVxuICAgICAqL1xuICAgIGdldENhbWVyYVRyYW5zZm9ybUZvckNlbGwoaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgID0gbWUuYW1vdW50Um93cyxcbiAgICAgICAgICAgIGltYWdlV2lkdGggID0gbWUuaW1hZ2VXaWR0aCxcbiAgICAgICAgICAgIGdhcCAgICAgICAgID0gMTAsXG4gICAgICAgICAgICBoZWlnaHQgICAgICA9IG1lLm9mZnNldEhlaWdodCAvIChhbW91bnRSb3dzICsgMiksXG4gICAgICAgICAgICBzcGFjaW5nICAgICA9IGhlaWdodCArIGdhcCxcbiAgICAgICAgICAgIHggICAgICAgICAgID0gTWF0aC5mbG9vcihpbmRleCAvIGFtb3VudFJvd3MpLFxuICAgICAgICAgICAgeSAgICAgICAgICAgPSBpbmRleCAtIHggKiBhbW91bnRSb3dzO1xuXG4gICAgICAgIGlmIChtZS5vcmRlckJ5Um93KSB7XG4gICAgICAgICAgICBsZXQgYW1vdW50Q29sdW1ucyA9IE1hdGguY2VpbChNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSkgLyBhbW91bnRSb3dzKTtcblxuICAgICAgICAgICAgeCA9IGluZGV4ICUgYW1vdW50Q29sdW1ucztcbiAgICAgICAgICAgIHkgPSBNYXRoLmZsb29yKGluZGV4IC8gYW1vdW50Q29sdW1ucyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3ggPSB4ICogKGltYWdlV2lkdGggKyAxMCksXG4gICAgICAgICAgICBjeSA9ICh5ICsgMC41KSAqIHNwYWNpbmcgKiAxLjEgKyA1MDtcblxuICAgICAgICByZXR1cm4gWy1jeCwgLWN5LCAwXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge051bWJlcn0gaXRlbUlkXG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZub2RlSWQuc3BsaXQoJ19fJylbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZkb20gbm9kZSBjb250YWluaW5nIHRoZSBnYWxsZXJ5IGl0ZW1zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGdldEl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbVRyYW5zZm9ybShpbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhbW91bnRSb3dzID0gbWUuYW1vdW50Um93cyxcbiAgICAgICAgICAgIHgsIHk7XG5cbiAgICAgICAgaWYgKG1lLm9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGFtb3VudFJvd3MgPSBNYXRoLmNlaWwoTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpIC8gYW1vdW50Um93cyk7XG5cbiAgICAgICAgICAgIHggPSBpbmRleCAlIGFtb3VudFJvd3M7XG4gICAgICAgICAgICB5ID0gTWF0aC5mbG9vcihpbmRleCAvIGFtb3VudFJvd3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgeCA9IE1hdGguZmxvb3IoaW5kZXggLyBhbW91bnRSb3dzKTtcbiAgICAgICAgICAgIHkgPSBpbmRleCAlIGFtb3VudFJvd3M7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGUzZChcbiAgICAgICAgICAgIHggKiAobWUuaW1hZ2VXaWR0aCAgKyAxMCksXG4gICAgICAgICAgICB5ICogKG1lLmltYWdlSGVpZ2h0ICsgMTApICsgMTAwLFxuICAgICAgICAgICAgMFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtVm5vZGVJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG1vdmVPcmlnaW4oKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0uc3R5bGUudHJhbnNmb3JtID0gbWUudHJhbnNsYXRlM2QobWUudHJhbnNsYXRlWCwgbWUudHJhbnNsYXRlWSwgbWUudHJhbnNsYXRlWik7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpcmUoZGF0YS5pZCA9PT0gdGhpcy5pZCA/ICdjb250YWluZXJDbGljaycgOiAnaXRlbUNsaWNrJywgZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTW91c2VXaGVlbChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWCAgICAgPSBkYXRhLmRlbHRhWCxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgPSBkYXRhLmRlbHRhWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSBtZS50cmFuc2xhdGVYLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiA9IG1lLnRyYW5zbGF0ZVo7XG5cbiAgICAgICAgaWYgKG1lLm1vdXNlV2hlZWxFbmFibGVkKSB7XG4gICAgICAgICAgICBtZS5fdHJhbnNsYXRlWCA9IHRyYW5zbGF0ZVggLSAoZGVsdGFYICogbWUubW91c2VXaGVlbERlbHRhWCk7IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgICAgIG1lLl90cmFuc2xhdGVaID0gdHJhbnNsYXRlWiArIChkZWx0YVkgKiBtZS5tb3VzZVdoZWVsRGVsdGFZKTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICBtZS5tb3ZlT3JpZ2luKCk7XG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZVRyYW5zbGF0ZVgnLCBtZS5fdHJhbnNsYXRlWCk7XG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2VUcmFuc2xhdGVaJywgbWUuX3RyYW5zbGF0ZVopO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqL1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbmRleCAgICAgICAgICA9IG1lLnN0b3JlLmluZGV4T2YodmFsdWUgJiYgdmFsdWVbMF0gfHwgMCksXG4gICAgICAgICAgICBpbWFnZUhlaWdodCAgICA9IG1lLmltYWdlSGVpZ2h0LFxuICAgICAgICAgICAgaW1hZ2VXaWR0aCAgICAgPSBtZS5pbWFnZVdpZHRoLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgY2FtZXJhICAgICAgICAgPSB2ZG9tLmNuWzBdLmNuWzBdLFxuICAgICAgICAgICAgZG9sbHlUcmFuc2Zvcm0gPSBtZS5nZXRDYW1lcmFUcmFuc2Zvcm1Gb3JDZWxsKGluZGV4KSxcbiAgICAgICAgICAgIGhlaWdodCAgICAgICAgID0gbWUub2Zmc2V0SGVpZ2h0IC8gKG1lLmFtb3VudFJvd3MgKyAyKSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgID0gTWF0aC5yb3VuZChoZWlnaHQgKiBpbWFnZVdpZHRoIC8gaW1hZ2VIZWlnaHQpLFxuICAgICAgICAgICAgc3BhY2luZyAgICAgICAgPSB3aWR0aCArIDEwLFxuICAgICAgICAgICAgdGltZW91dElkO1xuXG4gICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuc3BsaWNlKDAsIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5sZW5ndGgpO1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDoge1xuICAgICAgICAgICAgICAgIGlkICAgOiBtZS5pZCArICdfXycgKyAnZG9sbHknLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogbWUudHJhbnNsYXRlM2QoLi4uZG9sbHlUcmFuc2Zvcm0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICA6ICdyZWFkRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9ucyA6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm4gICAgICAgICAgICA6ICdnZXRDb21wdXRlZFN0eWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcyAgICAgICAgOiBbbWUuaWQgKyAnX18nICsgJ2RvbGx5JywgbnVsbF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbUlzRG9tTm9kZTogW3RydWUsIGZhbHNlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlICAgICAgICAgOiAnZGVmYXVsdFZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuRm5OYW1lICA6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgICA6ICd0cmFuc2Zvcm0nXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0cmFuc2Zvcm0gPSBkYXRhLmZ1bmN0aW9ucy50cmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVgsIGFuZ2xlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5pbmRleE9mKCdtYXRyaXgzZCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zdWJzdHJpbmcoOSwgdHJhbnNmb3JtLmxlbmd0aCAtIDEpOyAvLyByZW1vdmUgbWF0cml4M2QoIC4uLiApXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zcGxpdCgnLCcpLm1hcChlID0+IHBhcnNlRmxvYXQoZSkpO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2xhdGVYID0gdHJhbnNmb3JtWzEyXTsgLy8gYm90dG9tIGxlZnQgZWxlbWVudCBvZiB0aGUgNHg0IG1hdHJpeFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA9IHRyYW5zZm9ybS5zdWJzdHJpbmcoNywgdHJhbnNmb3JtLmxlbmd0aCAtIDEpOyAvLyByZW1vdmUgbWF0cml4KCAuLi4gKVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gPSB0cmFuc2Zvcm0uc3BsaXQoJywnKS5tYXAoZSA9PiBwYXJzZUZsb2F0KGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlWCA9IHRyYW5zZm9ybVs0XTsgLy8gYm90dG9tIGxlZnQgZWxlbWVudCBvZiB0aGUgMngzIG1hdHJpeFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVggPSB0cmFuc2xhdGVYIC0gZG9sbHlUcmFuc2Zvcm1bMF07XG4gICAgICAgICAgICAgICAgYW5nbGUgICAgICA9IE1hdGgubWluKE1hdGgubWF4KHRyYW5zbGF0ZVggLyAoc3BhY2luZyAqIDMpLCAtMSksIDEpICogNDU7XG5cbiAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNmb3JtICAgICAgICAgID0gJ3JvdGF0ZVkoJyArIGFuZ2xlICsgJ2RlZyknO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMzMwbXMnO1xuXG4gICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLnRyYW5zaXRpb25UaW1lb3V0cywgdGltZW91dElkKTtcblxuICAgICAgICAgICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNmb3JtICAgICAgICAgID0gJ3JvdGF0ZVkoMGRlZyknO1xuICAgICAgICAgICAgICAgICAgICBjYW1lcmEuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMDBtcyc7XG5cbiAgICAgICAgICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgICAgICAgICAgfSwgMzMwKTtcblxuICAgICAgICAgICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5wdXNoKHRpbWVvdXRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblNvcnQoKSB7XG4gICAgICAgIGlmICh0aGlzW2l0ZW1zTW91bnRlZF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGl0ZW1zICAgICA9IFsuLi5tZS5zdG9yZS5pdGVtcyB8fCBbXV0sXG4gICAgICAgICAgICAgICAgbmV3Q24gICAgID0gW10sXG4gICAgICAgICAgICAgICAgdmRvbSAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgICAgICB2aWV3ICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgICAgICB2ZG9tTWFwICAgPSB2aWV3LmNuLm1hcChlID0+IGUuaWQpLFxuICAgICAgICAgICAgICAgIGZyb21JbmRleCwgdmRvbUlkO1xuXG4gICAgICAgICAgICBpdGVtcy5sZW5ndGggPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSk7XG5cbiAgICAgICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmRvbUlkICAgID0gbWUuZ2V0SXRlbVZub2RlSWQoaXRlbVttZS5rZXlQcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgICBmcm9tSW5kZXggPSB2ZG9tTWFwLmluZGV4T2YodmRvbUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdDbi5wdXNoKHZpZXcuY25bZnJvbUluZGV4XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSBmcm9tSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChoYXNDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlldy5jbiA9IG5ld0NuO1xuICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lLmFmdGVyU2V0T3JkZXJCeVJvdyhtZS5vcmRlckJ5Um93LCAhbWUub3JkZXJCeVJvdyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgb25TdG9yZUxvYWQoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtc1Jvb3QoKS5jbiA9IFtdOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHJlZnJlc2hJbWFnZVJlZmxlY3Rpb24oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFtb3VudFJvd3MgICAgICAgPSBtZS5hbW91bnRSb3dzLFxuICAgICAgICAgICAgb3JkZXJCeVJvdyAgICAgICA9IG1lLm9yZGVyQnlSb3csXG4gICAgICAgICAgICBzZWNvbmRMYXN0Q29sdW1uID0gYW1vdW50Um93cyAtIDEsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgIGFtb3VudENvbHVtbnM7XG5cbiAgICAgICAgaWYgKG9yZGVyQnlSb3cpIHtcbiAgICAgICAgICAgIGFtb3VudENvbHVtbnMgPSBNYXRoLmNlaWwoTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpIC8gYW1vdW50Um93cyk7XG4gICAgICAgIH1cblxuICAgICAgICB2aWV3LmNuLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAob3JkZXJCeVJvdykge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5W2luZGV4ID49IHNlY29uZExhc3RDb2x1bW4gKiBhbW91bnRDb2x1bW5zID8gJ2FkZCcgOiAncmVtb3ZlJ10oaXRlbS5jbHMsICduZW8tcmVmbGVjdGlvbicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBOZW9BcnJheVtpbmRleCAlIGFtb3VudFJvd3MgPT09IHNlY29uZExhc3RDb2x1bW4gICA/ICdhZGQnIDogJ3JlbW92ZSddKGl0ZW0uY2xzLCAnbmVvLXJlZmxlY3Rpb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHpcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHRyYW5zbGF0ZTNkKHgsIHksIHopIHtcbiAgICAgICAgcmV0dXJuICd0cmFuc2xhdGUzZCgnICsgeCArICdweCwgJyArIHkgKyAncHgsICcgKyB6ICsgJ3B4KSc7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhHYWxsZXJ5KTtcblxuZXhwb3J0IHtHYWxsZXJ5IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENvbGxlY3Rpb24gICAgICBmcm9tICcuLi9jb2xsZWN0aW9uL0Jhc2UubWpzJ1xuaW1wb3J0IENvbXBvbmVudCAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBIZWxpeE1vZGVsICAgICAgZnJvbSAnLi4vc2VsZWN0aW9uL0hlbGl4TW9kZWwubWpzJztcbmltcG9ydCBNYXRyaXggICAgICAgICAgZnJvbSAnLi4vdXRpbC9NYXRyaXgubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICBmcm9tICcuLi9kYXRhL1N0b3JlLm1qcyc7XG5cbmNvbnN0IGl0ZW1zTW91bnRlZCA9IFN5bWJvbC5mb3IoJ2l0ZW1zTW91bnRlZCcpO1xuY29uc3QgbG9ja1doZWVsICAgID0gU3ltYm9sLmZvcignbG9ja1doZWVsJyk7IC8vIHdlIGNhbiBub3QgdXNlIGl0ZW1zTW91bnRlZCwgc2luY2UgaXQgaXMgY29ubmVjdGVkIHRvIG9uU29ydCgpXG5cbi8qKlxuICogQGNsYXNzIE5lby5jb21wb25lbnQuSGVsaXhcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBIZWxpeCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb21wb25lbnQuSGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQuSGVsaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0naGVsaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnaGVsaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIGhlbGl4IGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhY2tncm91bmRDb2xvcl89JyMwMDAwMDAnXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3JfOiAnIzAwMDAwMCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYmFja2dyb3VuZCBpbWFnZSBvZiB0aGUgaGVsaXggY29udGFpbmVyXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYmFja2dyb3VuZEltYWdlXz0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFja2dyb3VuZEltYWdlXzogJycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWRzIG9mIGV4cGFuZGVkIGl0ZW1zIHdpbGwgZ2V0IHN0b3JlZCBoZXJlXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbG9uZWRJdGVtcz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbG9uZWRJdGVtczogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLWhlbGl4J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8taGVsaXgnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2ZXJ0aWNhbCBkZWx0YSBiZXR3ZWVuIGVhY2ggaGVsaXggaXRlbSAoaW5jcmVhc2luZyB0aGlzIHZhbHVlIHdpbGwgY3JlYXRlIGEgc3BpcmFsKVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRlbHRhWV89MS41XG4gICAgICAgICAqL1xuICAgICAgICBkZWx0YVlfOiAxLjUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXNlbGVjdGlvbnMgd2lsbCByZWR1Y2UgdGhlIG9wYWNpdHkgYW5kIHNldCB0aGlzIGZsYWcgdG8gdHJ1ZVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBkaW1tZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBkaW1tZWRfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpc2VsZWN0aW9ucyB3aWxsIHJlZHVjZSB0aGUgb3BhY2l0eSBhbmQgc2V0IHRoaXMgZmxhZyB0byB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGltbWVkTWF4T3BhY2l0eV89MC4zXG4gICAgICAgICAqL1xuICAgICAgICBkaW1tZWRNYXhPcGFjaXR5XzogMC4zLFxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlzZWxlY3Rpb25zIHdpbGwgcmVkdWNlIHRoZSBvcGFjaXR5IGFuZCBzZXQgdGhpcyBmbGFnIHRvIHRydWVcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkaW1tZWRNaW5PcGFjaXR5Xz0wLjJcbiAgICAgICAgICovXG4gICAgICAgIGRpbW1lZE1pbk9wYWNpdHlfOiAwLjIsXG4gICAgICAgIGRpc2FibGVTZWxlY3Rpb24gOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZsaXAgaW1hZ2VzIGJ5IDE4MMKwIGZvciBhIG5vdCBtaXJyb3JlZCBpbm5lciB2aWV3XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZsaXBwZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmbGlwcGVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIHRvIHJvdGF0ZSB0aGUgaGVsaXggd2hlbiB1c2luZyBrZXluYXYsIHNvIHRoYXQgdGhlIHNlbGVjdGVkIGl0ZW1zIHN0YXlzIGluIGZyb250XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGZvbGxvd1NlbGVjdGlvbl89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGZvbGxvd1NlbGVjdGlvbl86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlY29yZCBmaWVsZCBjb250YWluaW5nIHRoZSBpbWFnZSBkYXRhLlxuICAgICAgICAgKiBOZXN0ZWQgZmllbGRzIGFyZSBzdXBwb3J0ZWQgKGUuZy4gYXV0aG9yLmltYWdlKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGltYWdlRmllbGQ9J2ltYWdlJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VGaWVsZDogJ2ltYWdlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYXRoIHRvIHRoZSBpbWFnZXMgZm9sZGVyXG4gICAgICAgICAqIFdpbGwgZ2V0IHNldCBpbnNpZGUgdGhlIGN0b3IgdG8gYXZvaWQgaXNzdWVzIGluc2lkZSB0aGUgd2VicGFjayBidWlsZHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGltYWdlU291cmNlPU5lby5jb25maWcucmVzb3VyY2VzUGF0aCArICdleGFtcGxlcy8nXG4gICAgICAgICAqL1xuICAgICAgICBpbWFnZVNvdXJjZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFtb3VudCBvZiBpdGVtcyBwZXIgcm93IChjaXJjbGUpIC0+IDM2MMKwIC8gMTAgPSAzNlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGl0ZW1BbmdsZV89OFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbUFuZ2xlXzogOCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbVRwbF9cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1UcGxfOiB7XG4gICAgICAgICAgICBjbHMgICAgIDogWydzdXJmYWNlJywgJ25lby1oZWxpeC1pdGVtJ10sXG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2ltZycsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ2NvbnRhY3QtaXRlbSddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVuaXF1ZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaWQuXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30ga2V5UHJvcGVydHk9J2lkJ1xuICAgICAgICAgKi9cbiAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICdFbnRlcic6ICdvbktleURvd25FbnRlcicsXG4gICAgICAgICAgICAnU3BhY2UnOiAnb25LZXlEb3duU3BhY2UnXG4gICAgICAgIH0sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBzdG9yZSBvbmUgaW5zdGFuY2Ugb2YgdGhlIG1hdHJpeCBoZXJlIHRvIGF2b2lkIGNyZWF0aW5nIG5ldyBvbmVzIG9uIGVhY2ggcmVmcmVzaCBvcGVyYXRpb25cbiAgICAgICAgICogQG1lbWJlciB7TmVvLnV0aWwuTWF0cml4fG51bGx9IG1hdHJpeD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG1hdHJpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggYW1vdW50IG9mIHN0b3JlIGl0ZW1zIHRvIHNob3dcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhJdGVtc189MzAwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhJdGVtc186IDMwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggb3BhY2l0eSBmb3IgaXRlbXMgaW5zaWRlIHRoZSBmb3JlZ3JvdW5kXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4T3BhY2l0eV89MC44XG4gICAgICAgICAqL1xuICAgICAgICBtYXhPcGFjaXR5XzogMC44LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCBvcGFjaXR5IGZvciBpdGVtcyBpbnNpZGUgdGhlIGJhY2tncm91bmRcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtaW5PcGFjaXR5Xz0wLjNcbiAgICAgICAgICovXG4gICAgICAgIG1pbk9wYWNpdHlfOiAwLjMsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFYPTVcbiAgICAgICAgICovXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YVg6IDUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgem9vbWluZyBmYWN0b3Igd2hpY2ggcmVwbGFjZXMgdGhlIGRlZmF1bHQgd2hlZWxEZWx0YS5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtb3VzZVdoZWVsRGVsdGFZPTUwXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRGVsdGFZOiA1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtb3VzZSB3aGVlbCBzaG91bGQgY2hhbmdlIHRoZSB0cmFuc2xhdGVaIHZhbHVlIGZvciB6b29taW5nXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdXNlV2hlZWxFbmFibGVkXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRW5hYmxlZF86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0SGVpZ2h0IG9mIHRoZSB0b3AgbGV2ZWwgZGl2LlxuICAgICAgICAgKiBHZXRzIGZldGNoZWQgYWZ0ZXIgdGhlIGhlbGl4IGdvdCBtb3VudGVkLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3VzZVdoZWVsRW5hYmxlZD10cnVlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG9mZnNldEhlaWdodDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBET00gZWxlbWVudCBvZmZzZXRXaWR0aCBvZiB0aGUgdG9wIGxldmVsIGRpdi5cbiAgICAgICAgICogR2V0cyBmZXRjaGVkIGFmdGVyIHRoZSBoZWxpeCBnb3QgbW91bnRlZC5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91c2VXaGVlbEVuYWJsZWQ9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRXaWR0aDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwZXJzcGVjdGl2ZSBvZiB0aGUgSGVsaXggdmlldyBpbiBweFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHBlcnNwZWN0aXZlXz04MDBcbiAgICAgICAgICovXG4gICAgICAgIHBlcnNwZWN0aXZlXzogODAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJhZGl1cyBvZiB0aGUgSGVsaXggaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByYWRpdXNfPTE1MDBcbiAgICAgICAgICovXG4gICAgICAgIHJhZGl1c186IDE1MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm90YXRpb25BbmdsZSBvZiB0aGUgSGVsaXggaW4gZGVncmVlc1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0aW9uQW5nbGVfPTc4MFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25BbmdsZV86IDc4MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIHN0b3JlIG9uZSBpbnN0YW5jZSBvZiB0aGUgcm90YXRpb24gbWF0cml4IGhlcmUgdG8gYXZvaWQgY3JlYXRpbmcgbmV3IG9uZXMgb24gZWFjaCByZWZyZXNoIG9wZXJhdGlvblxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8udXRpbC5NYXRyaXh8bnVsbH0gcm90YXRpb25NYXRyaXg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICByb3RhdGlvbk1hdHJpeDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgZGlzcGxheXMgdGhlIGZpcnN0ICYgbGFzdCBuYW1lIHJlY29yZCBmaWVsZHMgYmVsb3cgYW4gZXhwYW5kZWQgaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93Q2xvbmVJbmZvPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNob3dDbG9uZUluZm86IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgQ1NTIHJ1bGUgZm9yIHNlbGVjdGVkIGl0ZW1zXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc2VsZWN0ZWRJdGVtQ2xzPSduZW8tc2VsZWN0ZWQnXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3RlZEl0ZW1DbHM6ICduZW8tc2VsZWN0ZWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdXNlcyB0aGUgc2VsZWN0aW9uLkhlbGl4TW9kZWwgYnkgZGVmYXVsdFxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWx8bnVsbH0gc2VsZWN0aW9uTW9kZWxfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGlvbk1vZGVsXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdG9yZSBpbnN0YW5jZSBvciBjbGFzcyBjb250YWluaW5nIHRoZSBkYXRhIGZvciB0aGUgZ2FsbGVyeSBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLCAvLyB0b2RvOiB1c2UgYSBzdG9yZSBvbmNlIGNvbGxlY3Rpb25zIGFyZSBpbnRlZ3JhdGVkXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2V0VGltZW91dCgpIGlkcyBmb3IgY2FsbHMgd2hpY2ggY2FuIGdldCBjYW5jZWxsZWRcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHRyYW5zaXRpb25UaW1lb3V0cz1bXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2l0aW9uVGltZW91dHM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRyYW5zbGF0ZVggZ2V0cyBpbmNsdWRlZCBpbnRvIGVhY2ggaGVsaXggaXRlbVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHRyYW5zbGF0ZVhfPTQwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWF86IDQwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVZXz0tMzUwXG4gICAgICAgICAqL1xuICAgICAgICB0cmFuc2xhdGVZXzogLTM1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIHZhbHVlIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVaXz0tNTAwMFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWl86IC01MDAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHVybCBmb3IgdGhlIHN0b3JlIHRvIGxvYWQgdGhlIGRhdGFcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB1cmxfPScuLi9yZXNvdXJjZXMvZXhhbXBsZXMvZGF0YS9haV9jb250YWN0cy5qc29uJ1xuICAgICAgICAgKi9cbiAgICAgICAgdXJsXzogJy4uLy4uL3Jlc291cmNlcy9leGFtcGxlcy9kYXRhL2FpX2NvbnRhY3RzLmpzb24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHN0eWxlICAgOiB7fSxcbiAgICAgICAgICAgIHRhYkluZGV4OiAnLTEnLFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgY2xzICA6IFsnY29udGFpbmVyJ10sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWydncm91cCddLFxuICAgICAgICAgICAgICAgICAgICBjbiAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdtYXRyaXgzZCgxLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCA0NjEsIDQ1Mi41LCAtMTAwNzAwLCAxKSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSk7XG5cbiAgICAgICAgbWVbaXRlbXNNb3VudGVkXSA9IGZhbHNlO1xuICAgICAgICBtZVtsb2NrV2hlZWxdICAgID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKG1lLmltYWdlU291cmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBtZS5pbWFnZVNvdXJjZSA9IE5lby5jb25maWcucmVzb3VyY2VzUGF0aCArICdleGFtcGxlcy8nO1xuICAgICAgICB9XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2xpY2s6IG1lLm9uQ2xpY2ssXG4gICAgICAgICAgICB3aGVlbDogbWUub25Nb3VzZVdoZWVsLFxuICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9hZCBkYXRhIGZvciB0aGUgZXhhbXBsZSBjb2xsZWN0aW9uXG4gICAgICAgIGlmICghKG1lLnN0b3JlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG4gICAgICAgICAgICBtZS5sb2FkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBmbGlwcGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RmxpcHBlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5hcHBseUl0ZW1UcmFuc2l0aW9ucyh0aGlzLnJlZnJlc2gsIDEwMDApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWF4SXRlbSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRNYXhJdGVtcyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUgJiYgbWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbWUuZGVzdHJveUl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSAtIHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMob2xkVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9mZnNldFZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBwZXJzcGVjdGl2ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRQZXJzcGVjdGl2ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBtZS52ZG9tLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGVyc3BlY3RpdmU6IHZhbHVlICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZUNsb25lVHJhbnNsYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNlbGVjdGlvbk1vZGVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U2VsZWN0aW9uTW9kZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICB2YWx1ZS5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXJsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVybCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIG1lLmRlc3Ryb3lJdGVtcygpO1xuICAgICAgICAgICAgbWUubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIGFuaW1hdGlvblRpbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tQYXJhbVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhcHBseUl0ZW1UcmFuc2l0aW9ucyhjYWxsYmFjaywgYW5pbWF0aW9uVGltZSwgY2FsbGJhY2tQYXJhbSkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9ICduZW8tdHJhbnNpdGlvbi0nICsgYW5pbWF0aW9uVGltZSxcbiAgICAgICAgICAgIHRpbWVvdXRJZDtcblxuICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLnNwbGljZSgwLCBtZS50cmFuc2l0aW9uVGltZW91dHMubGVuZ3RoKTtcblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbY2xzXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KG1lLCBbY2FsbGJhY2tQYXJhbV0pO1xuXG4gICAgICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShtZS50cmFuc2l0aW9uVGltZW91dHMsIHRpbWVvdXRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YXMgOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbY2xzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgYW5pbWF0aW9uVGltZSArIDIwMCk7XG5cbiAgICAgICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgYmVmb3JlR2V0SXRlbVRwbCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jbG9uZSh0aGlzLl9pdGVtVHBsLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIEhlbGl4TW9kZWwsIHtcbiAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgIHNlbGVjdGlvbkNoYW5nZTogdGhpcy5vblNlbGVjdGlvbkNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgICA6IHRoaXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc3RvcmUgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfG51bGx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTdG9yZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRvZG86IHJlbW92ZSB0aGUgaWYgY2hlY2sgb25jZSBhbGwgZGVtb3MgdXNlIHN0b3JlcyAoaW5zdGVhZCBvZiBjb2xsZWN0aW9ucylcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBTdG9yZSwge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVycyAgOiB7XG4gICAgICAgICAgICAgICAgICAgIGxvYWQgOiBtZS5vblN0b3JlTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydCxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb2xsZWN0aW9uLCB7XG4gICAgICAgICAgICBrZXlQcm9wZXJ0eTogJ2lkJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgOiB7XG4gICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydCxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlIGFuIG9wYWNpdHkgZ3JhZGllbnQgYmFzZWQgb24gdGhlIGl0ZW0gcm90YXRpb24gYW5nbGVcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbVxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgY2FsY3VsYXRlT3BhY2l0eShpdGVtKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbWF4T3BhY2l0eSAgID0gbWUubWF4T3BhY2l0eSxcbiAgICAgICAgICAgIG1pbk9wYWNpdHkgICA9IG1lLm1pbk9wYWNpdHksXG4gICAgICAgICAgICBkZWx0YU9wYWNpdHkgPSBtYXhPcGFjaXR5IC0gbWluT3BhY2l0eSxcbiAgICAgICAgICAgIGFuZ2xlLCBvcGFjaXR5LCBvcGFjaXR5RmFjdG9yO1xuXG4gICAgICAgIGlmIChkZWx0YU9wYWNpdHkgPT09IDApIHtcbiAgICAgICAgICAgIG9wYWNpdHkgPSBtYXhPcGFjaXR5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5nbGUgPSBpdGVtLnJvdGF0aW9uQW5nbGUgJSAzNjA7XG5cbiAgICAgICAgICAgIHdoaWxlIChhbmdsZSA8IDApIHtcbiAgICAgICAgICAgICAgICBhbmdsZSArPSAzNjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdoaWxlIChhbmdsZSA+IDE4MCkge1xuICAgICAgICAgICAgICAgIGFuZ2xlID0gMzYwIC0gYW5nbGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIG5vbiBsaW5lYXIgZGlzdHJpYnV0aW9uLCBzaW5jZSB0aGUgYW5nbGUgZG9lcyBub3QgbWF0Y2ggZGVsdGEgdHJhbnNsYXRlWlxuICAgICAgICAgICAgb3BhY2l0eUZhY3RvciA9IDEgLSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAzNjApO1xuXG4gICAgICAgICAgICBvcGFjaXR5ID0gbWluT3BhY2l0eSArIGRlbHRhT3BhY2l0eSAqIG9wYWNpdHlGYWN0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3BhY2l0eTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBnZXQgZGlmZmVyZW50IGl0ZW0tbWFya3Vwc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZWNvcmRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSB2ZG9tSXRlbVxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW0odmRvbUl0ZW0sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2ZG9tSXRlbS5pZCA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pO1xuXG4gICAgICAgIHZkb21JdGVtLmNuWzBdLmlkICA9IG1lLmdldEl0ZW1Wbm9kZUlkKHJlY29yZFttZS5rZXlQcm9wZXJ0eV0pICsgJ19pbWcnO1xuICAgICAgICB2ZG9tSXRlbS5jblswXS5zcmMgPSBtZS5pbWFnZVNvdXJjZSArIE5lby5ucyhtZS5pbWFnZUZpZWxkLCBmYWxzZSwgcmVjb3JkKTtcblxuICAgICAgICByZXR1cm4gdmRvbUl0ZW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydEluZGV4XSB0aGUgc3RhcnQgaW5kZXggZm9yIGNyZWF0aW5nIGl0ZW1zLFxuICAgICAqIGUuZy4gaW5jcmVhc2luZyBtYXhJdGVtcyBvbmx5IG5lZWRzIHRvIGNyZWF0ZSB0aGUgbmV3IG9uZXNcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoc3RhcnRJbmRleCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YVkgICAgICAgID0gbWUuZGVsdGFZLFxuICAgICAgICAgICAgZ3JvdXAgICAgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgaXRlbUFuZ2xlICAgICA9IG1lLml0ZW1BbmdsZSxcbiAgICAgICAgICAgIG1hdHJpeCAgICAgICAgPSBtZS5tYXRyaXgsXG4gICAgICAgICAgICByYWRpdXMgICAgICAgID0gbWUucmFkaXVzLFxuICAgICAgICAgICAgcm90YXRpb25BbmdsZSA9IG1lLnJvdGF0aW9uQW5nbGUsXG4gICAgICAgICAgICB0cmFuc2xhdGVYICAgID0gbWUudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgICAgPSBtZS50cmFuc2xhdGVZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiAgICA9IG1lLnRyYW5zbGF0ZVosXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGkgICAgICAgICAgICAgPSBzdGFydEluZGV4IHx8IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLml0ZW1zLmxlbmd0aCksXG4gICAgICAgICAgICBhbmdsZSwgaXRlbSwgbWF0cml4SXRlbXMsIHRyYW5zZm9ybVN0eWxlLCB2ZG9tSXRlbSwgYywgcywgeCwgeSwgejtcblxuICAgICAgICBpZiAoIW1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVySWQgPSBtZS5vbignbW91bnRlZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS51bignbW91bnRlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcyhzdGFydEluZGV4KTtcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY3JlYXRlSXRlbXMnLCBtZS5pZCwgbWUuc3RvcmUpO1xuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IG1lLnN0b3JlLml0ZW1zW2ldO1xuXG4gICAgICAgICAgICAgICAgYW5nbGUgPSAtcm90YXRpb25BbmdsZSArIGkgKiBpdGVtQW5nbGU7XG5cbiAgICAgICAgICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgICAgICBjID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICAgICAgICAgIHggPSByYWRpdXMgKiBzIC0gMzAwICsgdHJhbnNsYXRlWDtcbiAgICAgICAgICAgICAgICB5ID0gLTQwMCArIGFuZ2xlICogZGVsdGFZICsgdHJhbnNsYXRlWTtcbiAgICAgICAgICAgICAgICB6ID0gOTk4MDAgKyByYWRpdXMgKiBjICsgdHJhbnNsYXRlWjtcblxuICAgICAgICAgICAgICAgIG1hdHJpeEl0ZW1zID0gW1xuICAgICAgICAgICAgICAgICAgICBbYywgMCwgLXMsIDBdLFxuICAgICAgICAgICAgICAgICAgICBbMCwgMSwgIDAsIDBdLFxuICAgICAgICAgICAgICAgICAgICBbcywgMCwgIGMsIDBdLFxuICAgICAgICAgICAgICAgICAgICBbeCwgeSwgIHosIDFdXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIGlmICghbWF0cml4KSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLm1hdHJpeCA9IG1hdHJpeCA9IE5lby5jcmVhdGUoTWF0cml4LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogbWF0cml4SXRlbXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0cml4Lml0ZW1zID0gbWF0cml4SXRlbXM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUgPSBtYXRyaXguZ2V0VHJhbnNmb3JtU3R5bGUoKTtcblxuICAgICAgICAgICAgICAgIHZkb21JdGVtID0gbWUuY3JlYXRlSXRlbShtZS5pdGVtVHBsLCBpdGVtLCBpKTtcblxuICAgICAgICAgICAgICAgIGl0ZW0ucm90YXRpb25BbmdsZSAgPSBhbmdsZTtcbiAgICAgICAgICAgICAgICBpdGVtLnRyYW5zZm9ybVN0eWxlID0gdHJhbnNmb3JtU3R5bGU7XG5cbiAgICAgICAgICAgICAgICB2ZG9tSXRlbS4gc3R5bGUgPSB2ZG9tSXRlbS5zdHlsZSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIHZkb21JdGVtLnN0eWxlLm9wYWNpdHkgICA9IG1lLmNhbGN1bGF0ZU9wYWNpdHkoaXRlbSk7XG4gICAgICAgICAgICAgICAgdmRvbUl0ZW0uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3R5bGU7XG5cbiAgICAgICAgICAgICAgICBncm91cC5jbi5wdXNoKHZkb21JdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWVbbG9ja1doZWVsXSA9IGZhbHNlO1xuXG4gICAgICAgICAgICBtZS5wcm9taXNlVmRvbVVwZGF0ZSh2ZG9tKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZVtpdGVtc01vdW50ZWRdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZVtsb2NrV2hlZWxdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgZGVzdHJveUNsb25lcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSBtZS5zdG9yZSxcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgcmVtb3ZlRGVsdGFzID0gW10sXG4gICAgICAgICAgICBpZCwgcmVjb3JkO1xuXG4gICAgICAgIGlmIChtZS5jbG9uZWRJdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZS5jbG9uZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlkICAgICA9IG1lLmdldEl0ZW1JZChpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICByZWNvcmQgPSBzdG9yZS5nZXQoaWQpO1xuXG4gICAgICAgICAgICAgICAgcmVjb3JkLmV4cGFuZGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkICAgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiByZWNvcmQub3BhY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcmVjb3JkLnRyYW5zZm9ybVN0eWxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJlbW92ZURlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdyZW1vdmVOb2RlJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuY2xvbmVkSXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDogcmVtb3ZlRGVsdGFzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDY1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzdGFydEluZGV4XVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbYW1vdW50SXRlbXNdXG4gICAgICovXG4gICAgZGVzdHJveUl0ZW1zKHN0YXJ0SW5kZXgsIGFtb3VudEl0ZW1zKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIG1lLmdldEl0ZW1zUm9vdCgpLmNuLnNwbGljZShzdGFydEluZGV4IHx8IDAsIGFtb3VudEl0ZW1zIHx8IG1lLnN0b3JlLmdldENvdW50KCkpO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhIGNsb25lIG9mIGFuIGl0ZW0gdG8gdGhlIHRvcCBsZWZ0IGNvcm5lclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKi9cbiAgICBleHBhbmRJdGVtKGl0ZW1JZCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdG9yZSAgICAgID0gbWUuc3RvcmUsXG4gICAgICAgICAgICByZWNvcmQgICAgID0gc3RvcmUuZ2V0KGl0ZW1JZCksXG4gICAgICAgICAgICBpbmRleCAgICAgID0gc3RvcmUuaW5kZXhPZihpdGVtSWQpLFxuICAgICAgICAgICAgaXNFeHBhbmRlZCA9ICEhcmVjb3JkLmV4cGFuZGVkLFxuICAgICAgICAgICAgZ3JvdXAgICAgICA9IG1lLmdldEl0ZW1zUm9vdCgpLFxuICAgICAgICAgICAgaXRlbVZkb20gICA9IE5lby5jbG9uZShncm91cC5jbltpbmRleF0sIHRydWUpO1xuXG4gICAgICAgIG1lLmRlc3Ryb3lDbG9uZXMoKTtcblxuICAgICAgICBpZiAoaXNFeHBhbmRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmVjb3JkLmV4cGFuZGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaXRlbVZkb20uaWQgPSBpdGVtVmRvbS5pZCArICdfX2Nsb25lJztcbiAgICAgICAgICAgIGl0ZW1WZG9tLnN0eWxlLnRyYW5zZm9ybSA9IHJlY29yZC50cmFuc2Zvcm1TdHlsZTtcbiAgICAgICAgICAgIE5lb0FycmF5LmFkZChpdGVtVmRvbS5jbHMsICduZW8tdHJhbnNpdGlvbi02MDAnKTtcbiAgICAgICAgICAgIGRlbGV0ZSBpdGVtVmRvbS50YWJJbmRleDtcblxuICAgICAgICAgICAgaXRlbVZkb20uY25bMF0uaWQgPSBpdGVtVmRvbS5jblswXS5pZCArICdfX2Nsb25lJztcblxuICAgICAgICAgICAgaWYgKG1lLnNob3dDbG9uZUluZm8pIHtcbiAgICAgICAgICAgICAgICBpdGVtVmRvbS5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiBbJ2NvbnRhY3QtbmFtZSddLFxuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IHJlY29yZC5maXJzdG5hbWUgKyAnICcgKyByZWNvcmQubGFzdG5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgTmVvLnZkb20uSGVscGVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgYXV0b01vdW50ICA6IHRydWUsXG4gICAgICAgICAgICAgICAgcGFyZW50SWQgICA6IGdyb3VwLmlkLFxuICAgICAgICAgICAgICAgIHBhcmVudEluZGV4OiBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgICAgIC4uLml0ZW1WZG9tXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmNsb25lZEl0ZW1zLnB1c2goaXRlbVZkb20pO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCAgIDogaXRlbVZkb20uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IG1lLmdldENsb25lVHJhbnNmb3JtKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRDbG9uZVRyYW5zZm9ybSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCA9IChtZS5vZmZzZXRXaWR0aCAgLSAxMzUwKSAvIDMsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gKG1lLm9mZnNldEhlaWdodCAtIDEzMjApIC8gMyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogPSAxMDA3MDAgKyBtZS5wZXJzcGVjdGl2ZSAvIDEuNTtcblxuICAgICAgICByZXR1cm4gJ21hdHJpeDNkKDEsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLCcrdHJhbnNsYXRlWCsnLCcrdHJhbnNsYXRlWSsnLCcrdHJhbnNsYXRlWisnLDEpJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge051bWJlcn1cbiAgICAgKi9cbiAgICBnZXRJdGVtSWQodm5vZGVJZCkge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQodm5vZGVJZC5zcGxpdCgnX18nKVsxXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgdmRvbSBub2RlIGNvbnRhaW5pbmcgdGhlIGhlbGl4IGl0ZW1zXG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbVxuICAgICAqL1xuICAgIGdldEl0ZW1zUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gaWRcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIGdldEl0ZW1Wbm9kZUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIGlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbZGVsYXk9MTAwXVxuICAgICAqL1xuICAgIGdldE9mZnNldFZhbHVlcyhkZWxheT0xMDApIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgICA6ICdyZWFkRG9tJyxcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIHZub2RlSWQgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ29mZnNldEhlaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXRXaWR0aCdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIG1lLm9mZnNldEhlaWdodCA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbWUub2Zmc2V0V2lkdGggID0gZGF0YS5hdHRyaWJ1dGVzLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5YaHIucHJvbWlzZUpzb24oe1xuICAgICAgICAgICAgaW5zaWRlTmVvOiB0cnVlLFxuICAgICAgICAgICAgdXJsICAgICAgOiBOZW8uY29uZmlnLmlzRXhwZXJpbWVudGFsID8gbWUudXJsIDogbWUudXJsXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5zdG9yZS5pdGVtcyA9IGRhdGEuanNvbi5kYXRhO1xuICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMoKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmb3IgTmVvLlhoci5yZXF1ZXN0JywgZXJyLCBtZS5pZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGl0ZW1JZFxuICAgICAqL1xuICAgIG1vdmVUb1NlbGVjdGVkSXRlbShpdGVtSWQpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcbiAgICAgICAgbWUucm90YXRpb25BbmdsZSA9IG1lLnN0b3JlLmdldChpdGVtSWQpLnJvdGF0aW9uQW5nbGUgKyBtZS5yb3RhdGlvbkFuZ2xlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maXJlKGRhdGEuaWQgPT09IHRoaXMuaWQgPyAnY29udGFpbmVyQ2xpY2snIDogJ2l0ZW1DbGljaycsIGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcihkYXRhKSB7XG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5zZWxlY3Rpb25Nb2RlbC5pdGVtc1swXTtcblxuICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5leHBhbmRJdGVtKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93blNwYWNlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5hcHBseUl0ZW1UcmFuc2l0aW9ucyh0aGlzLm1vdmVUb1NlbGVjdGVkSXRlbSwgMTAwMCwgdGhpcy5zZWxlY3Rpb25Nb2RlbC5pdGVtc1swXSB8fCAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25Nb3VzZVdoZWVsKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFYICAgICAgICA9IGRhdGEuZGVsdGFYLFxuICAgICAgICAgICAgZGVsdGFZICAgICAgICA9IGRhdGEuZGVsdGFZLFxuICAgICAgICAgICAgcm90YXRpb25BbmdsZSA9IG1lLnJvdGF0aW9uQW5nbGUsXG4gICAgICAgICAgICB0cmFuc2xhdGVaICAgID0gbWUudHJhbnNsYXRlWjtcblxuICAgICAgICBpZiAobWUubW91c2VXaGVlbEVuYWJsZWQgJiYgbWVbbG9ja1doZWVsXSkge1xuICAgICAgICAgICAgbWUuX3JvdGF0aW9uQW5nbGUgPSByb3RhdGlvbkFuZ2xlICsgKGRlbHRhWCAqIG1lLm1vdXNlV2hlZWxEZWx0YVgpOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgICAgICBtZS5fdHJhbnNsYXRlWiAgICA9IHRyYW5zbGF0ZVogICAgKyAoZGVsdGFZICogbWUubW91c2VXaGVlbERlbHRhWSk7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAgICAgbWUucmVmcmVzaCgpO1xuXG4gICAgICAgICAgICBtZS5maXJlKCdjaGFuZ2VSb3RhdGlvbicsICAgbWUuX3JvdGF0aW9uQW5nbGUpO1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlVHJhbnNsYXRlWicsIG1lLl90cmFuc2xhdGVaKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ1tdfSBvbGRWYWx1ZVxuICAgICAqL1xuICAgIG9uU2VsZWN0aW9uQ2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5mb2xsb3dTZWxlY3Rpb24gJiYgdmFsdWUgJiYgdmFsdWVbMF0pIHtcbiAgICAgICAgICAgIG1lLmFwcGx5SXRlbVRyYW5zaXRpb25zKG1lLm1vdmVUb1NlbGVjdGVkSXRlbSwgMTAwLCB2YWx1ZVswXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Tb3J0KCkge1xuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lW2l0ZW1zTW91bnRlZF0gPT09IHRydWUpIHtjb25zb2xlLmxvZygnc29ydCcpO1xuICAgICAgICAgICAgbWUuYXBwbHlJdGVtVHJhbnNpdGlvbnMobWUuc29ydEl0ZW1zLCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gaXRlbXNcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChpdGVtcykge1xuICAgICAgICB0aGlzLmdldEl0ZW1zUm9vdCgpLmNuID0gW107IC8vIHNpbGVudCB1cGRhdGVcbiAgICAgICAgdGhpcy5jcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZWZyZXNoKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFzICAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgICAgID0gbWUuZGVsdGFZLFxuICAgICAgICAgICAgZmxpcHBlZCAgICAgICAgPSBtZS5mbGlwcGVkLFxuICAgICAgICAgICAgaW5kZXggICAgICAgICAgPSAwLFxuICAgICAgICAgICAgaXRlbUFuZ2xlICAgICAgPSBtZS5pdGVtQW5nbGUsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICA9IE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5nZXRDb3VudCgpKSxcbiAgICAgICAgICAgIG1hdHJpeCAgICAgICAgID0gbWUubWF0cml4LFxuICAgICAgICAgICAgcmFkaXVzICAgICAgICAgPSBtZS5yYWRpdXMsXG4gICAgICAgICAgICByb3RhdGlvbkFuZ2xlICA9IG1lLnJvdGF0aW9uQW5nbGUsXG4gICAgICAgICAgICByb3RhdGlvbk1hdHJpeCA9IG1lLnJvdGF0aW9uTWF0cml4LFxuICAgICAgICAgICAgdHJhbnNsYXRlWCAgICAgPSBtZS50cmFuc2xhdGVYLFxuICAgICAgICAgICAgdHJhbnNsYXRlWSAgICAgPSBtZS50cmFuc2xhdGVZLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiAgICAgPSBtZS50cmFuc2xhdGVaLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgYW5nbGUsIGl0ZW0sIG9wYWNpdHksIHJvdGF0ZVksIHRyYW5zZm9ybVN0eWxlLCB2ZG9tSXRlbSwgYywgcywgeCwgeSwgejtcblxuICAgICAgICBpZiAoZmxpcHBlZCkge1xuICAgICAgICAgICAgcm90YXRlWSA9IE1hdHJpeC5yb3RhdGVZKDE4MCAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgICAgICBpZiAoIXJvdGF0aW9uTWF0cml4KSB7XG4gICAgICAgICAgICAgICAgbWUucm90YXRpb25NYXRyaXggPSByb3RhdGlvbk1hdHJpeCA9IE5lby5jcmVhdGUoTWF0cml4LCB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByb3RhdGVZXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uTWF0cml4Lml0ZW1zID0gcm90YXRlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICAgICAgaXRlbSAgICAgPSBtZS5zdG9yZS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICB2ZG9tSXRlbSA9IHZkb20uY25bMF0uY25bMF0uY25baW5kZXhdO1xuXG4gICAgICAgICAgICBhbmdsZSA9IC1yb3RhdGlvbkFuZ2xlICsgaW5kZXggKiBpdGVtQW5nbGU7XG5cbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuICAgICAgICAgICAgYyA9IE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cbiAgICAgICAgICAgIHggPSAgLTMwMCArIHJhZGl1cyAqIHMgICAgICsgdHJhbnNsYXRlWDtcbiAgICAgICAgICAgIHkgPSAgLTQwMCArIGFuZ2xlICogZGVsdGFZICsgdHJhbnNsYXRlWTtcbiAgICAgICAgICAgIHogPSA5OTgwMCArIHJhZGl1cyAqIGMgICAgICsgdHJhbnNsYXRlWjtcblxuICAgICAgICAgICAgbWF0cml4Lml0ZW1zID0gW1xuICAgICAgICAgICAgICAgIFtjLCAwLCAtcywgMF0sXG4gICAgICAgICAgICAgICAgWzAsIDEsICAwLCAwXSxcbiAgICAgICAgICAgICAgICBbcywgMCwgIGMsIDBdLFxuICAgICAgICAgICAgICAgIFt4LCB5LCAgeiwgMV1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGlmIChmbGlwcGVkKSB7XG4gICAgICAgICAgICAgICAgbWF0cml4ID0gcm90YXRpb25NYXRyaXgueChtYXRyaXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZSA9IG1hdHJpeC5nZXRUcmFuc2Zvcm1TdHlsZSgpO1xuICAgICAgICAgICAgbWF0cml4LmRlc3Ryb3koKTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgcm90YXRpb25BbmdsZSA6IGFuZ2xlLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlOiB0cmFuc2Zvcm1TdHlsZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG9wYWNpdHkgPSBtZS5jYWxjdWxhdGVPcGFjaXR5KGl0ZW0pO1xuICAgICAgICAgICAgaXRlbS5vcGFjaXR5ID0gb3BhY2l0eTtcblxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eSAgICAgICA6IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgcm90YXRpb25BbmdsZSA6IGFuZ2xlLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlOiB0cmFuc2Zvcm1TdHlsZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZCAgIDogbWUuZ2V0SXRlbVZub2RlSWQoaXRlbVttZS5rZXlQcm9wZXJ0eV0pLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgIDogb3BhY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2Zvcm1TdHlsZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlZnJlc2hJZk1vdW50ZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBzb3J0SXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkZWx0YXMgICA9IFtdLFxuICAgICAgICAgICAgcGFyZW50SWQgPSBtZS52ZG9tLmNuWzBdLmNuWzBdLmlkLFxuICAgICAgICAgICAgaSAgICAgICAgPSAwLFxuICAgICAgICAgICAgbGVuICAgICAgPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgIGFjdGlvbiAgOiAnbW92ZU5vZGUnLFxuICAgICAgICAgICAgICAgIGlkICAgICAgOiBtZS5nZXRJdGVtVm5vZGVJZChtZS5zdG9yZS5pdGVtc1tpXVttZS5rZXlQcm9wZXJ0eV0pLFxuICAgICAgICAgICAgICAgIGluZGV4ICAgOiBpLFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRJZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGRlbHRhcyA6IGRlbHRhc1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHVwZGF0ZUNsb25lVHJhbnNsYXRlKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGFmdGVyRGVsdGFzICA9IFtdLFxuICAgICAgICAgICAgZGVsdGFzICAgICAgID0gW10sXG4gICAgICAgICAgICB0aW1lb3V0SWQsIHRyYW5zZm9ybTtcblxuICAgICAgICBpZiAobWUuY2xvbmVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gbWUuZ2V0Q2xvbmVUcmFuc2Zvcm0odHJ1ZSk7XG5cbiAgICAgICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS5jbG9uZWRJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFsnbmVvLXRyYW5zaXRpb24tNjAwJ11cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFmdGVyRGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZCA6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkICAgOiBbJ25lby10cmFuc2l0aW9uLTYwMCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUudHJhbnNpdGlvblRpbWVvdXRzLCB0aW1lb3V0SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDogYWZ0ZXJEZWx0YXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICAgICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5wdXNoKHRpbWVvdXRJZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY2ZnID0ge2VudW1lcmFibGU6IGZhbHNlLCB2YWx1ZTogSGVsaXgucHJvdG90eXBlLnJlZnJlc2hJZk1vdW50ZWR9O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhIZWxpeC5wcm90b3R5cGUsIHtcbiAgICBhZnRlclNldERlbHRhWSAgICAgICA6IGNmZyxcbiAgICBhZnRlclNldEl0ZW1BbmdsZSAgICA6IGNmZyxcbiAgICBhZnRlclNldE1heE9wYWNpdHkgICA6IGNmZyxcbiAgICBhZnRlclNldE1pbk9wYWNpdHkgICA6IGNmZyxcbiAgICBhZnRlclNldFJhZGl1cyAgICAgICA6IGNmZyxcbiAgICBhZnRlclNldFJvdGF0aW9uQW5nbGU6IGNmZyxcbiAgICBhZnRlclNldFRyYW5zbGF0ZVggICA6IGNmZyxcbiAgICBhZnRlclNldFRyYW5zbGF0ZVkgICA6IGNmZyxcbiAgICBhZnRlclNldFRyYW5zbGF0ZVogICA6IGNmZ1xufSk7XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKEhlbGl4KTtcblxuZXhwb3J0IHtIZWxpeCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0Jhc2UubWpzJztcbmltcG9ydCBMb2dnZXIgICAgZnJvbSAnLi4vLi4vY29yZS9Mb2dnZXIubWpzJztcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjbGFzcyB0byByZW5kZXIgYW4gYW1DaGFydFxuICogUmVxdWlyZXMgc2V0dGluZyBOZW8uY29uZmlnLnVzZUFtQ2hhcnRzIHRvIHRydWUgKG9yIG1hbnVhbGx5IGluY2x1ZGUgdGhlIGxpYilcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydFxuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIEFtQ2hhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LndyYXBwZXIuQW1DaGFydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC53cmFwcGVyLkFtQ2hhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nYW0tY2hhcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnYW0tY2hhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogU2VlOiBodHRwczovL3d3dy5hbWNoYXJ0cy5jb20vZG9jcy92NC9cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjaGFydENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjaGFydENvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2hhcnRUeXBlPSdYWUNoYXJ0J1xuICAgICAgICAgKi9cbiAgICAgICAgY2hhcnRUeXBlOiAnWFlDaGFydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJdCBpcyBub3QgcG9zc2libGUgdG8gZGVmaW5lIGFkYXB0ZXJzIHZpYSBqc29uLCBzbyB3ZSBwYXNzIGEgZmxhZyB0byBtYWluIGluc3RlYWRcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY29tYmluZVNlcmllc1Rvb2x0aXA9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNvbWJpbmVTZXJpZXNUb29sdGlwOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyB0aGUgY2hhcnQgZGF0YVxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBkYXRhXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoYXJ0cyAmIG1hcHMgY2FuIGhhdmUgZGlmZmVyZW50IHRhcmdldHMgdG8gYXBwbHkgdGhlIGRhdGEgdG8uIEUuZy46XG4gICAgICAgICAqIG15Q2hhcnQuZGF0YSA9IGRhdGE7IC8vID0+ICcnXG4gICAgICAgICAqIG15Q2hhcnQuc2VyaWVzLnZhbHVlc1swXS5kYXRhID0gZGF0YTsgLy8gPT4gJ3Nlcmllcy52YWx1ZXMuMCdcbiAgICAgICAgICogVXNlIGEgTmVvLm5zKCkgY29uZm9ybSBzeW50YXggd2l0aCBkb3RzIGJldHdlZW4gcHJvcHNcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBkYXRhUGF0aD0nJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGF0YVBhdGg6ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogYW00Y2hhcnRzLCBhbTRtYXBzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gcGFja2FnZT0nYW00Y2hhcnRzJ1xuICAgICAgICAgKi9cbiAgICAgICAgcGFja2FnZTogJ2FtNGNoYXJ0cycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgc3R5bGU6IHtwb3NpdGlvbjogJ2Fic29sdXRlJywgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiAnMTAwJSd9LFxuICAgICAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZToge2hlaWdodDogJzEwMCUnfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBjb25zdCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5jaGFydENvbmZpZykge1xuICAgICAgICAgICAgTG9nZ2VyLmxvZ0Vycm9yKCd3cmFwcGVyLkFtQ2hhcnQgZGVmaW5lZCB3aXRob3V0IGEgY2hhcnRDb25maWcnLCBtZS5pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5wYXJzZUNoYXJ0Q29uZmlnKG1lLmNoYXJ0Q29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRhdGEgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtBcnJheXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXREYXRhKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uQW1DaGFydHMudXBkYXRlRGF0YSh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZSA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGF0YSAgICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGRhdGFQYXRoOiBtZS5kYXRhUGF0aCxcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogbWUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBtb3VudGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlICYmIG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLkFtQ2hhcnRzLmRlc3Ryb3koe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaWQgICAgIDogbWUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRNb3VudGVkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgICAgICAgICAgOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGNvbWJpbmVTZXJpZXNUb29sdGlwOiBtZS5jb21iaW5lU2VyaWVzVG9vbHRpcCxcbiAgICAgICAgICAgICAgICBjb25maWcgICAgICAgICAgICAgIDogbWUuY2hhcnRDb25maWcsXG4gICAgICAgICAgICAgICAgZGF0YSAgICAgICAgICAgICAgICA6IG1lLmRhdGEsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIHBhY2thZ2UgICAgICAgICAgICAgOiBtZS5wYWNrYWdlLFxuICAgICAgICAgICAgICAgIHR5cGUgICAgICAgICAgICAgICAgOiBtZS5jaGFydFR5cGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmIChtZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgb3B0cy5kYXRhICAgICA9IG1lLmRhdGE7XG4gICAgICAgICAgICAgICAgb3B0cy5kYXRhUGF0aCA9IG1lLmRhdGFQYXRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5BbUNoYXJ0cy5jcmVhdGUob3B0cykudGhlbihtZS5vbkNoYXJ0TW91bnRlZCk7XG4gICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byB0cmlnZ2VyIGxvZ2ljIGFmdGVyIHRoZSBjaGFydCBnb3QgbW91bnRlZCBpbnRvIHRoZSBkb21cbiAgICAgKi9cbiAgICBvbkNoYXJ0TW91bnRlZCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIHBhcnNlQ2hhcnRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAoTmVvLmlzQXJyYXkoY29uZmlnKSkge1xuICAgICAgICAgICAgY29uZmlnLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgbWUucGFyc2VDaGFydENvbmZpZyhpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY29uZmlnKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTmVvLmlzQXJyYXkodmFsdWUpIHx8IE5lby5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWUucGFyc2VDaGFydENvbmZpZyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChOZW8uaXNTdHJpbmcodmFsdWUpICYmIHZhbHVlLnN0YXJ0c1dpdGgoJ0Bjb25maWc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zdWJzdHIoOCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtZVt2YWx1ZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2dlci5sb2dFcnJvcignVGhlIHVzZWQgQGNvbmZpZyBkb2VzIG5vdCBleGlzdDonLCB2YWx1ZSwgbWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSBtZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQW1DaGFydCk7XG5cbmV4cG9ydCB7QW1DaGFydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL0Jhc2UubWpzJztcblxuLyoqXG4gKiBDb252ZW5pZW5jZSBjbGFzcyB0byByZW5kZXIgTWFwYm94IEdMIG1hcHNcbiAqIFJlcXVpcmVzIHNldHRpbmcgTmVvLmNvbmZpZy51c2VNYXBib3hHTCB0byB0cnVlIChvciBtYW51YWxseSBpbmNsdWRlIHRoZSBsaWIpXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC53cmFwcGVyLk1hcGJveEdMXG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgTWFwYm94R0wgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LndyYXBwZXIuTWFwYm94R0wnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb21wb25lbnQud3JhcHBlci5NYXBib3hHTCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdtYXBib3hnbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdtYXBib3hnbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gYWNjZXNzVG9rZW49bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgYWNjZXNzVG9rZW46IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNlbnRlcl89e2xhdDogMCwgbG5nOiAwfVxuICAgICAgICAgKi9cbiAgICAgICAgY2VudGVyXzoge2xhdDogMCwgbG5nOiAwfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNvbnZlcnREYXRhVG9HZW9Kc29uPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY29udmVydERhdGFUb0dlb0pzb246IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBkYXRhXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBkYXRhXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFzc3VtaW5nIHRoZXJlIGlzIGp1c3QgMSBzb3VyY2UgZm9yIGRhdGEgY2hhbmdlcy5cbiAgICAgICAgICogQ3JlYXRlIGEgdGlja2V0IGluIGNhc2UgaXQgbmVlZHMgdG8gZ2V0IGVuaGFuY2VkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGF0YVNvdXJjZUlkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFTb3VyY2VJZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgbGF5ZXJzIHRvIGFkZCB0byB0aGUgbWFwIHN0eWxlLlxuICAgICAgICAgKiBiZWZvcmVJZCBpcyBhIGN1c3RvbSBwcm9wZXJ0eSB3aGljaCB3aWxsIGdldCBwYXNzZWQgYXMgdGhlIHNlY29uZCBwYXJhbSBmb3I6XG4gICAgICAgICAqIGh0dHBzOi8vZG9jcy5tYXBib3guY29tL21hcGJveC1nbC1qcy9hcGkvI21hcCNhZGRsYXllclxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBsYXllcnNfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGxheWVyc186IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBodHRwczovL2RvY3MubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvc3R5bGUtc3BlYy9cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fFN0cmluZ30gbWFwYm94U3R5bGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgbWFwYm94U3R5bGVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGF0YSBzb3VyY2VzIGZvciB0aGUgbWFwLlxuICAgICAgICAgKiBpZCBpcyBhIGN1c3RvbSBwcm9wZXJ0eSB3aGljaCB3aWxsIGdldCBwYXNzZWQgYXMgdGhlIGZpcnN0IHBhcmFtIGZvcjpcbiAgICAgICAgICogaHR0cHM6Ly9kb2NzLm1hcGJveC5jb20vbWFwYm94LWdsLWpzL2FwaS8jbWFwI2FkZHNvdXJjZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3RbXXxudWxsfSBzb3VyY2VzXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzb3VyY2VzXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBzdHlsZToge3Bvc2l0aW9uOiAnYWJzb2x1dGUnLCBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6ICcxMDAlJ30sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IGhlaWdodDogJzEwMCUnfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB6b29tXz0zXG4gICAgICAgICAqL1xuICAgICAgICB6b29tXzogM1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0Vm5vZGVSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52bm9kZS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjZW50ZXIgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2VudGVyKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLmNlbnRlck1hcCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBkYXRhIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0RGF0YSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLnVwZGF0ZURhdGEoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWUgICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhICAgICAgICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogbWUuZGF0YVNvdXJjZUlkLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgIDogbWUuaWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYXllcnMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYXllcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuYWRkTGF5ZXJzKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgaWQgICAgIDogdGhpcy5pZCxcbiAgICAgICAgICAgICAgICBsYXllcnMgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1hcGJveFN0eWxlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TWFwYm94U3R5bGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMubW91bnRlZCkge1xuICAgICAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuc2V0U3R5bGUoe1xuICAgICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBtZS5hY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICBhcHBOYW1lICAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSBmYWxzZSAmJiBvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5kZXN0cm95KHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGlkICAgICA6IG1lLmlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogbWUuYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgICA6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY2VudGVyICAgICA6IG1lLmNlbnRlcixcbiAgICAgICAgICAgICAgICBpZCAgICAgICAgIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgbWFwYm94U3R5bGU6IG1lLm1hcGJveFN0eWxlLFxuICAgICAgICAgICAgICAgIHpvb20gICAgICAgOiBtZS56b29tXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAobWUuZGF0YSkge1xuICAgICAgICAgICAgICAgIG9wdHMuZGF0YSAgICAgICAgID0gbWUuZGF0YTtcbiAgICAgICAgICAgICAgICBvcHRzLmRhdGFTb3VyY2VJZCA9IG1lLmRhdGFTb3VyY2VJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1lLmxheWVycykge1xuICAgICAgICAgICAgICAgIG9wdHMubGF5ZXJzID0gbWUubGF5ZXJzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWUuc291cmNlcykge1xuICAgICAgICAgICAgICAgIG9wdHMuc291cmNlcyA9IG1lLnNvdXJjZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLmNyZWF0ZShvcHRzKS50aGVuKG1lLm9uTWFwTW91bnRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHNvdXJjZXMgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtPYmplY3RbXXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0W118bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTb3VyY2VzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLmFkZFNvdXJjZXMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAgICAgIHNvdXJjZXM6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgem9vbSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRab29tKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC56b29tKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGlkICAgICA6IG1lLmlkLFxuICAgICAgICAgICAgICAgIHpvb20gICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYXV0b1Jlc2l6ZSgpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuYXV0b1Jlc2l6ZSh7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIGNlbnRlciBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRDZW50ZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sb25nKSB7XG4gICAgICAgICAgICB2YWx1ZS5sbmcgPSB2YWx1ZS5sb25nO1xuICAgICAgICAgICAgZGVsZXRlIHZhbHVlLmxvbmc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgZGF0YSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7QXJyYXl8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fG51bGx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldERhdGEodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLmNvbnZlcnREYXRhVG9HZW9Kc29uKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuY29udmVydFRvR2VvSnNvbih2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIGNvbXBvbmVudC5jZW50ZXIgPSB7fSBvciBjb21wb25lbnQuZmx5VG8oKSBpbnN0ZWFkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlLmxhdFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZS5sbmdcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGFuaW1hdGU9ZmFsc2VcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgY2VudGVyTWFwKHZhbHVlLCBhbmltYXRlPWZhbHNlKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLmNlbnRlcih7XG4gICAgICAgICAgICBhbmltYXRlOiBhbmltYXRlLFxuICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgIDogdGhpcy5pZCxcbiAgICAgICAgICAgIGxhdCAgICA6IHZhbHVlLmxhdCxcbiAgICAgICAgICAgIGxuZyAgICA6IHZhbHVlLmxuZ1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0W119IGRhdGFcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBPYmplY3QgbWF0Y2hpbmcgdGhlIGdlb2pzb24gZm9ybWF0XG4gICAgICovXG4gICAgY29udmVydFRvR2VvSnNvbihkYXRhKSB7XG4gICAgICAgIGNvbnN0IGdlb0pzb24gPSB7XG4gICAgICAgICAgICB0eXBlICAgIDogJ0ZlYXR1cmVDb2xsZWN0aW9uJyxcbiAgICAgICAgICAgIGZlYXR1cmVzOiBbXVxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG86IHRoaXMgbmVlZHMgdG8gZ2V0IG1vcmUgZ2VuZXJpY1xuICAgICAgICAgICAgZ2VvSnNvbi5mZWF0dXJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnRmVhdHVyZScsXG5cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZSAgIDogaXRlbS5hY3RpdmUsXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzICAgIDogaXRlbS5jYXNlcyxcbiAgICAgICAgICAgICAgICAgICAgZGVhdGhzICAgOiBpdGVtLmRlYXRocyxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgOiBpdGVtLmNvdW50cnlJbmZvLmlzbzIsXG4gICAgICAgICAgICAgICAgICAgIHJlY292ZXJlZDogaXRlbS5yZWNvdmVyZWQsXG4gICAgICAgICAgICAgICAgICAgIHRpbWUgICAgIDogaXRlbS51cGRhdGVkXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGdlb21ldHJ5OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgICAgICAgOiAnUG9pbnQnLFxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlczogW2l0ZW0uY291bnRyeUluZm8ubG9uZywgaXRlbS5jb3VudHJ5SW5mby5sYXRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGdlb0pzb247XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWUubGF0XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlLmxuZ1xuICAgICAqL1xuICAgIGZseVRvKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZSA9IG1lLmJlZm9yZVNldENlbnRlcih2YWx1ZSwgbnVsbCk7IC8vIGxvbmcgPT4gbG5nIGlmIG5lZWRlZFxuXG4gICAgICAgIG1lLl9jZW50ZXIgPSB7bGF0OiB2YWx1ZS5sYXQsIGxuZzogdmFsdWUubG5nfTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgIG1lLmNlbnRlck1hcCh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gdHJpZ2dlciBsb2dpYyBhZnRlciB0aGUgbWFwIGdvdCBtb3VudGVkIGludG8gdGhlIGRvbVxuICAgICAqL1xuICAgIG9uTWFwTW91bnRlZCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5sYXllcklkXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEub3B0aW9uc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gZGF0YS5vcHRpb25zLnZhbGlkYXRlID0gdHJ1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGEudmFsdWVcbiAgICAgKi9cbiAgICBzZXRGaWx0ZXIoZGF0YSkge1xuICAgICAgICBOZW8ubWFpbi5hZGRvbi5NYXBib3hHTC5zZXRGaWx0ZXIoe1xuICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgaWQgICAgIDogdGhpcy5pZCxcbiAgICAgICAgICAgIGxheWVySWQ6IGRhdGEubGF5ZXJJZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGRhdGEub3B0aW9ucyxcbiAgICAgICAgICAgIHZhbHVlICA6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmxheWVySWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5rZXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5vcHRpb25zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLm9wdGlvbnMudmFsaWRhdGUgPSB0cnVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudmFsdWVcbiAgICAgKi9cbiAgICBzZXRMYXlvdXRQcm9wZXJ0eShkYXRhKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLk1hcGJveEdMLnNldExheW91dFByb3BlcnR5KHtcbiAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgIGlkICAgICA6IHRoaXMuaWQsXG4gICAgICAgICAgICBrZXkgICAgOiBkYXRhLmtleSxcbiAgICAgICAgICAgIGxheWVySWQ6IGRhdGEubGF5ZXJJZCxcbiAgICAgICAgICAgIG9wdGlvbnM6IGRhdGEub3B0aW9ucyxcbiAgICAgICAgICAgIHZhbHVlICA6IGRhdGEudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLmxheWVySWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5rZXlcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YS5vcHRpb25zXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBkYXRhLm9wdGlvbnMudmFsaWRhdGUgPSB0cnVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGEudmFsdWVcbiAgICAgKi9cbiAgICBzZXRQYWludFByb3BlcnR5KGRhdGEpIHtcbiAgICAgICAgTmVvLm1haW4uYWRkb24uTWFwYm94R0wuc2V0UGFpbnRQcm9wZXJ0eSh7XG4gICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICBpZCAgICAgOiB0aGlzLmlkLFxuICAgICAgICAgICAga2V5ICAgIDogZGF0YS5rZXksXG4gICAgICAgICAgICBsYXllcklkOiBkYXRhLmxheWVySWQsXG4gICAgICAgICAgICBvcHRpb25zOiBkYXRhLm9wdGlvbnMsXG4gICAgICAgICAgICB2YWx1ZSAgOiBkYXRhLnZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFwYm94R0wpO1xuXG5leHBvcnQge01hcGJveEdMIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5DaGVja0JveFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQmFzZVxuICovXG5jbGFzcyBDaGVja0JveCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5DaGVja0JveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2hlY2tib3hmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjaGVja2JveGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNoZWNrZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja2VkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLWNoZWNrYm94ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWxfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVWYWx1ZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZVZhbHVlTGFiZWxfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGVfPSdjaGVja2JveCdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZV86ICdjaGVja2JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxhYmVsVGV4dF89J0xhYmVsVGV4dCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsVGV4dF86ICdMYWJlbFRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gbGFiZWxXaWR0aF89MTUwXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFdpZHRoXzogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBUaGUgbmFtZSAoZ3JvdXApIG9mIHRoZSBpbnB1dCBkb20gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZUxhYmVsVGV4dF89J1ZhbHVlTGFiZWwnXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZUxhYmVsVGV4dF86ICdWYWx1ZUxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtaW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEVsICAgICAgPSB2ZG9tLmNuWzFdLFxuICAgICAgICAgICAgdmFsdWVMYWJlbCAgID0gdmRvbS5jblsyXTtcblxuICAgICAgICBpbnB1dEVsLmlkID0gdmFsdWVMYWJlbC5mb3IgPSBtZS5pZCArICctaW5wdXQnO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjaGFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0uY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbFZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVWYWx1ZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzJdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaW5wdXRUeXBlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0VHlwZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS50eXBlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxXaWR0aCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsV2lkdGgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzBdLndpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXROYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZUxhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlVmFsdWVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblsyXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgY2hlY2tib3ggaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGVja2VkID0gZGF0YS50YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBtZS5fY2hlY2tlZCA9IGNoZWNrZWQ7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgbWUudmRvbS5jblsxXS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgbWUudm5vZGUuY2hpbGROb2Rlc1ttZS5oaWRlTGFiZWwgPyAwIDogMV0uYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZCArICcnO1xuXG4gICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA6ICFjaGVja2VkLFxuICAgICAgICAgICAgdmFsdWUgICAgOiBjaGVja2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2hlY2tCb3gpO1xuXG5leHBvcnQge0NoZWNrQm94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBTcGluRG93blRyaWdnZXIgICBmcm9tICcuL3RyaWdnZXIvU3BpbkRvd24ubWpzJztcbmltcG9ydCBTcGluVXBUcmlnZ2VyICAgICBmcm9tICcuL3RyaWdnZXIvU3BpblVwLm1qcyc7XG5pbXBvcnQgU3BpblVwRG93blRyaWdnZXIgZnJvbSAnLi90cmlnZ2VyL1NwaW5VcERvd24ubWpzJztcbmltcG9ydCBUZXh0ICAgICAgICAgICAgICBmcm9tICcuL1RleHQubWpzJztcblxuLyoqXG4gKiBVc2VzIGFuIGlucHV0IHR5cGUgbnVtYmVyIGFuZCBvcHRpb25hbGx5IHByb3ZpZGVzIGN1c3RvbSBzcGluIGJ1dHRvbnMgZm9yIHVwIGFuZCBkb3duXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuTnVtYmVyXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5UZXh0XG4gKi9cbmNsYXNzIE51bWJlciBleHRlbmRzIFRleHQge1xuICAgIHN0YXRpYyBnZXRTdGF0aWNDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlcyBmb3IgdHJpZ2dlclBvc2l0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSB0cmlnZ2VyUG9zaXRpb25zPVsncmlnaHQnLCAnc2lkZXMnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXJQb3NpdGlvbnM6IFsncmlnaHQnLCAnc2lkZXMnXVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuTnVtYmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5OdW1iZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nbnVtYmVyZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnbnVtYmVyZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1udW1iZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tbnVtYmVyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyW118bnVsbH0gZXhjbHVkZWQ9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgZXhjbHVkZWRWYWx1ZXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBmYWxzZSBvbmx5IGFsbG93cyBjaGFuZ2luZyB0aGUgZmllbGQgdXNpbmcgdGhlIHNwaW4gYnV0dG9uc1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBpbnB1dEVkaXRhYmxlXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dEVkaXRhYmxlXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgaW5wdXRUeXBlXyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdudW1iZXInXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6ICdudW1iZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBtYXhWYWx1ZV89MTAwXG4gICAgICAgICAqL1xuICAgICAgICBtYXhWYWx1ZV86IDEwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWluVmFsdWVfPTBcbiAgICAgICAgICovXG4gICAgICAgIG1pblZhbHVlXzogMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gc3RlcFNpemVfPTFcbiAgICAgICAgICovXG4gICAgICAgIHN0ZXBTaXplXzogMSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkIHZhbHVlczogJ3JpZ2h0JywgJ3NpZGVzJ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHRyaWdnZXJQb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAqL1xuICAgICAgICB0cmlnZ2VyUG9zaXRpb25fOiAncmlnaHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlU3BpbkJ1dHRvbnNfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHVzZVNwaW5CdXR0b25zXzogdHJ1ZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVHJpZ2dlcnMoKTtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaW5wdXRFZGl0YWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbnB1dEVkaXRhYmxlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGlucHV0RWwgPSBtZS5nZXRJbnB1dEVsKCksXG4gICAgICAgICAgICBzdHlsZSAgID0gaW5wdXRFbC5zdHlsZSB8fCB7fTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzdHlsZS5wb2ludGVyRXZlbnRzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWF4VmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TWF4VmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgnbWF4JywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbWluVmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TWluVmFsdWUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSW5wdXRFbEtleSgnbWluJywgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc3RlcFNpemUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U3RlcFNpemUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgPSB0aGlzLFxuICAgICAgICAgICAgdmFsID0gbWUudmFsdWUsXG4gICAgICAgICAgICBtb2R1bG87XG5cbiAgICAgICAgbWUuY2hhbmdlSW5wdXRFbEtleSgnc3RlcCcsIHZhbHVlKTtcblxuICAgICAgICBpZiAodmFsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtb2R1bG8gPSAodmFsIC0gbWUubWluVmFsdWUpICUgdmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChtb2R1bG8gIT09IDApIHsgLy8gZmluZCB0aGUgY2xvc2VzdCB2YWxpZCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmIChtb2R1bG8gLyB2YWx1ZSA+IDAuNSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAgICAgICh2YWwgKyB2YWx1ZSAtIG1vZHVsbyA8IG1lLm1heFZhbHVlKSB7bWUudmFsdWUgPSB2YWwgKyB2YWx1ZSAtIG1vZHVsbzt9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHZhbCAtIG1vZHVsbyA+IG1lLm1pblZhbHVlKSAgICAgICAgIHttZS52YWx1ZSA9IHZhbCAtIG1vZHVsbzt9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgICAgICAodmFsIC0gbW9kdWxvID4gbWUubWluVmFsdWUpICAgICAgICAge21lLnZhbHVlID0gdmFsIC0gbW9kdWxvO31cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsICsgdmFsdWUgLSBtb2R1bG8gPCBtZS5tYXhWYWx1ZSkge21lLnZhbHVlID0gdmFsICsgdmFsdWUgLSBtb2R1bG87fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdHJpZ2dlclBvc2l0aW9uIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFRyaWdnZXJQb3NpdGlvbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRyaWdnZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVzZVNwaW5CdXR0b25zIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VXNlU3BpbkJ1dHRvbnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2xkVmFsdWUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUcmlnZ2VycygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgdHJpZ2dlclBvc2l0aW9uIGNvbmZpZyBnZXRzIGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0VHJpZ2dlclBvc2l0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5iZWZvcmVTZXRFbnVtVmFsdWUodmFsdWUsIG9sZFZhbHVlLCAndHJpZ2dlclBvc2l0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmFsdWUgICAgPSBkYXRhLnZhbHVlLFxuICAgICAgICAgICAgb2xkVmFsdWUgPSBtZS52YWx1ZTtcblxuICAgICAgICBpZiAoIXZhbHVlICYmICFtZS5yZXF1aXJlZCkge1xuICAgICAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7IC8vIHRvZG86IHN1cHBvcnQgZm9yIG90aGVyIG51bWJlciB0eXBlc1xuXG4gICAgICAgICAgICBpZiAoIU5lby5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBtZS5fdmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZSAtIHZhbHVlICUgbWUuc3RlcFNpemU7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heChtZS5taW5WYWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4obWUubWF4VmFsdWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgIGRhdGEudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgIHN1cGVyLm9uSW5wdXRWYWx1ZUNoYW5nZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblNwaW5CdXR0b25Eb3duQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IG1lLnZhbHVlIHx8IChtZS5tYXhWYWx1ZSArIG1lLnN0ZXBTaXplKSxcbiAgICAgICAgICAgIHZhbHVlICAgID0gTWF0aC5tYXgobWUubWluVmFsdWUsIG9sZFZhbHVlIC0gbWUuc3RlcFNpemUpO1xuXG4gICAgICAgIGlmIChtZS5leGNsdWRlZFZhbHVlcykge1xuICAgICAgICAgICAgd2hpbGUobWUuZXhjbHVkZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heChtZS5taW5WYWx1ZSwgdmFsdWUgLSBtZS5zdGVwU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU3BpbkJ1dHRvblVwQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBvbGRWYWx1ZSA9IG1lLnZhbHVlIHx8IChtZS5taW5WYWx1ZSAtIG1lLnN0ZXBTaXplKSxcbiAgICAgICAgICAgIHZhbHVlICAgID0gTWF0aC5taW4obWUubWF4VmFsdWUsIG9sZFZhbHVlICsgbWUuc3RlcFNpemUpO1xuXG4gICAgICAgIGlmIChtZS5leGNsdWRlZFZhbHVlcykge1xuICAgICAgICAgICAgd2hpbGUobWUuZXhjbHVkZWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1pbihtZS5tYXhWYWx1ZSwgdmFsdWUgKyBtZS5zdGVwU2l6ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1cGRhdGVUcmlnZ2VycygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyaWdnZXJzID0gbWUudHJpZ2dlcnMgfHwgW107XG5cbiAgICAgICAgaWYgKG1lLnVzZVNwaW5CdXR0b25zKSB7XG4gICAgICAgICAgICBpZiAobWUudHJpZ2dlclBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtZS5oYXNUcmlnZ2VyKCdzcGludXBkb3duJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcnMucHVzaChTcGluVXBEb3duVHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbmRvd24nLCB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbnVwJywgICB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghbWUuaGFzVHJpZ2dlcignc3BpbmRvd24nKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vycy5wdXNoKFNwaW5Eb3duVHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFtZS5oYXNUcmlnZ2VyKCdzcGludXAnKSkge1xuICAgICAgICAgICAgICAgICAgICB0cmlnZ2Vycy5wdXNoKFNwaW5VcFRyaWdnZXIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW51cGRvd24nLCB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZS5yZW1vdmVUcmlnZ2VyKCdzcGluZG93bicsICAgdHJ1ZSwgdHJpZ2dlcnMpO1xuICAgICAgICAgICAgbWUucmVtb3ZlVHJpZ2dlcignc3BpbnVwJywgICAgIHRydWUsIHRyaWdnZXJzKTtcbiAgICAgICAgICAgIG1lLnJlbW92ZVRyaWdnZXIoJ3NwaW51cGRvd24nLCB0cnVlLCB0cmlnZ2Vycyk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS50cmlnZ2VycyA9IHRyaWdnZXJzO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTnVtYmVyKTtcblxuZXhwb3J0IHtOdW1iZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgZnJvbSAnLi4vLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXJUcmlnZ2VyIGZyb20gJy4vdHJpZ2dlci9QaWNrZXIubWpzJztcbmltcG9ydCBUZXh0ICAgICAgICAgIGZyb20gJy4vVGV4dC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgZnJvbSAnLi4vLi4vdXRpbC9WRG9tLm1qcyc7XG5cbi8qKlxuICogVGhlIGFic3RyYWN0IHBpY2tlciBmaWVsZCBwcm92aWRlcyBhbiBhcnJvdyBkb3duIHRyaWdnZXIgd2hpY2ggb3BlbnMgYSBmbG9hdGluZyBjb250YWluZXIgdG8gcHJvdmlkZVxuICogbW9yZSBkYXRhIHNlbGVjdGlvbiBvcHRpb25zXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUGlja2VyXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5UZXh0XG4gKiBAYWJzdHJhY3RcbiAqL1xuY2xhc3MgUGlja2VyIGV4dGVuZHMgVGV4dCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlBpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3BpY2tlcmZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3BpY2tlcmZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3JlcyB0aGUgZGF0YSBmcm9tIHRoZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKSBjYWxsIChwaWNrZXIgJiBib2R5IERvbVJlY3RzKVxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xpZW50UmVjdHM9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGllbnRSZWN0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tcGlja2VyZmllbGQnLCAnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgdXNlZCBrZXlzIGZvciB0aGUgc2VsZWN0aW9uIG1vZGVsXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0ga2V5c1xuICAgICAgICAgKi9cbiAgICAgICAga2V5czoge1xuICAgICAgICAgICAgJ0VudGVyJyA6ICdvbktleURvd25FbnRlcicsXG4gICAgICAgICAgICAnRXNjYXBlJzogJ29uS2V5RG93bkVzY2FwZSdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1hdGNoUGlja2VyV2lkdGg9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbWF0Y2hQaWNrZXJXaWR0aDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBwaWNrZXI9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXI6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb25maWdzIHRvIHBhc3MgdG8gdGhlIHBpY2tlciBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IHBpY2tlckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlckhlaWdodD0xMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlckhlaWdodDogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gcGlja2VySXNNb3VudGVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlcklzTW91bnRlZDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlck1heEhlaWdodD0yMDBcbiAgICAgICAgICovXG4gICAgICAgIHBpY2tlck1heEhlaWdodDogMjAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHdpZHRoIG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlcldpZHRoPTEwMFxuICAgICAgICAgKi9cbiAgICAgICAgcGlja2VyV2lkdGg6IDEwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxPYmplY3RbXX0gdHJpZ2dlcnM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcnM6IFt7XG4gICAgICAgICAgICBtb2R1bGU6IFBpY2tlclRyaWdnZXJcbiAgICAgICAgfV1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7TmVvLmNvbnRhaW5lci5CYXNlfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlcigpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBwaWNrZXJDb21wb25lbnQgPSBtZS5jcmVhdGVQaWNrZXJDb21wb25lbnQoKTtcblxuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShDb250YWluZXIsIHtcbiAgICAgICAgICAgIGFwcE5hbWUgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgIGNscyAgICAgIDogWyduZW8tcGlja2VyLWNvbnRhaW5lcicsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgICAgICBoZWlnaHQgICA6IG1lLnBpY2tlckhlaWdodCxcbiAgICAgICAgICAgIGlkICAgICAgIDogbWUuZ2V0UGlja2VySWQoKSxcbiAgICAgICAgICAgIGl0ZW1zICAgIDogcGlja2VyQ29tcG9uZW50ID8gW3BpY2tlckNvbXBvbmVudF0gOiBbXSxcbiAgICAgICAgICAgIG1heEhlaWdodDogbWUucGlja2VyTWF4SGVpZ2h0LFxuICAgICAgICAgICAgdmRvbSAgICAgOiB7Y246IFtdLCB0YWJJbmRleDogLTF9LFxuICAgICAgICAgICAgd2lkdGggICAgOiBtZS5waWNrZXJXaWR0aCxcbiAgICAgICAgICAgIC4uLm1lLnBpY2tlckNvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gc2lsZW50XG4gICAgICovXG4gICAgYXBwbHlDbGllbnRSZWN0cyhzaWxlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGJvZHlSZWN0ICAgID0gbWUuY2xpZW50UmVjdHNbMl0sXG4gICAgICAgICAgICBpbnB1dFJlY3QgICA9IG1lLmNsaWVudFJlY3RzWzFdLFxuICAgICAgICAgICAgdHJpZ2dlclJlY3QgPSBtZS5jbGllbnRSZWN0c1swXSxcbiAgICAgICAgICAgIHZkb20gICAgICAgID0gbWUucGlja2VyLnZkb20sXG4gICAgICAgICAgICB3aWR0aCAgICAgICA9IG1lLm1hdGNoUGlja2VyV2lkdGggPyAoaW5wdXRSZWN0LndpZHRoIC0gMSkgOiBtZS5waWNrZXJXaWR0aDtcblxuICAgICAgICBtZS5waWNrZXJXaWR0aCA9IHdpZHRoO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24odmRvbS5zdHlsZSwge1xuICAgICAgICAgICAgbGVmdCA6IGAke3RyaWdnZXJSZWN0LmxlZnQgKyB0cmlnZ2VyUmVjdC53aWR0aCAtIHdpZHRofXB4YCxcbiAgICAgICAgICAgIHRvcCAgOiBgJHt0cmlnZ2VyUmVjdC50b3AgKyB0cmlnZ2VyUmVjdC5oZWlnaHQgKyAxfXB4YCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUucGlja2VyW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIGNyZWF0ZVBpY2tlckNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdyhjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5nZXRCb3VuZGluZ0NsaWVudFJlY3Qoe1xuICAgICAgICAgICAgaWQ6IFttZS5pZCwgbWUuaWQgKyAnLWlucHV0LXdyYXBwZXInLCAnYm9keSddXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBtZS5jbGllbnRSZWN0cyA9IGRhdGE7XG4gICAgICAgICAgICBtZS5zaG93UGlja2VyKGNhbGxiYWNrLCBjYWxsYmFja1Njb3BlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcGlja2VyIGluc3RhbmNlIGFuZCBjcmVhdGVzIGl0IGluIGNhc2UgaXQgZG9lcyBub3QgZXhpc3QgeWV0XG4gICAgICogQHJldHVybnMge05lby5jb250YWluZXIuQmFzZX1cbiAgICAgKi9cbiAgICBnZXRQaWNrZXIoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFtZS5waWNrZXIpIHtcbiAgICAgICAgICAgIG1lLnBpY2tlciA9IG1lLmNyZWF0ZVBpY2tlcigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lLnBpY2tlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UGlja2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fcGlja2VyJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBoaWRlUGlja2VyKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBWRG9tVXRpbC5yZW1vdmVWZG9tQ2hpbGQodmRvbSwgbWUuZ2V0UGlja2VySWQoKSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5waWNrZXJJc01vdW50ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgICBtZS5fdmRvbSA9IHZkb207XG4gICAgICAgICAgICBwaWNrZXIubW91bnRlZCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHBpY2tlci5tb3VudGVkID0gbWUucGlja2VySXNNb3VudGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Gb2N1c0xlYXZlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICAvLyBpbmxpbmUgd2lsbCB0cmlnZ2VyIGFuIHZkb20gdXBkYXRlLCBzbyBoaWRlIHBpY2tlciBzaG91bGQgYmUgc2lsZW50XG4gICAgICAgIGlmIChtZS5sYWJlbFBvc2l0aW9uID09PSAnaW5saW5lJyAmJiAobWUudmFsdWUgPT09ICcnIHx8IG1lLnZhbHVlID09PSBudWxsKSkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLmhpZGVQaWNrZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLm9uRm9jdXNMZWF2ZShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjYWxsYmFja1Njb3BlXVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25FbnRlcihkYXRhLCBjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBpZiAoIXRoaXMucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLmdldENsaWVudFJlY3RzVGhlblNob3coY2FsbGJhY2ssIGNhbGxiYWNrU2NvcGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25Fc2NhcGUoZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5waWNrZXJJc01vdW50ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IGZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25QaWNrZXJUcmlnZ2VyQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnBpY2tlcklzTW91bnRlZCkge1xuICAgICAgICAgICAgbWUuaGlkZVBpY2tlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUuZ2V0Q2xpZW50UmVjdHNUaGVuU2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY2FsbGJhY2tdXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrU2NvcGVdXG4gICAgICovXG4gICAgc2hvd1BpY2tlcihjYWxsYmFjaywgY2FsbGJhY2tTY29wZSkge1xuICAgICAgICBsZXQgbWUgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHBpY2tlciA9IG1lLmdldFBpY2tlcigpLFxuICAgICAgICAgICAgdmRvbSAgID0gbWUudmRvbTtcblxuICAgICAgICBtZS5hcHBseUNsaWVudFJlY3RzKHRydWUpO1xuICAgICAgICB2ZG9tLmNuLnB1c2gocGlja2VyLnZkb20pO1xuXG4gICAgICAgIG1lLnBpY2tlcklzTW91bnRlZCA9IHRydWU7XG5cbiAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgcGlja2VyLm1vdW50ZWQgPSBtZS5waWNrZXJJc01vdW50ZWQ7XG5cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrU2NvcGUgfHwgbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBpY2tlcik7XG5cbmV4cG9ydCB7UGlja2VyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBOdW1iZXIgZnJvbSAnLi9OdW1iZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUmFuZ2VcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLk51bWJlclxuICovXG5jbGFzcyBSYW5nZSBleHRlbmRzIE51bWJlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlJhbmdlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5SYW5nZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdyYW5nZWZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3JhbmdlZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBzaG93cyBhIGNsZWFyIHRyaWdnZXIgaW4gY2FzZSB0aGUgZmllbGQgaGFzIGEgbm9uIGVtcHR5IHZhbHVlLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjbGVhcmFibGU9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXJhbmdlZmllbGQnLCduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcmFuZ2VmaWVsZCcsICduZW8tdGV4dGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZSBmb3IgdGhlIGlucHV0VHlwZV8gdGV4dGZpZWxkIGNvbmZpZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0ncmFuZ2UnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6ICdyYW5nZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gdGlja21hcmtzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgdGlja21hcmtzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VJbnB1dEV2ZW50PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VJbnB1dEV2ZW50IDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyB0aGUgZmllbGQuTnVtYmVyIGJ1dHRvbnNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlSW5wdXRFdmVudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlU3BpbkJ1dHRvbnM6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gbWUudmRvbS5jblsxXTtcblxuICAgICAgICBpZiAobWUudXNlSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZuICAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICA6IG1lLnZkb20uY25bMV0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRFbC5jbHMgPSBbJ25lby1yYW5nZWZpZWxkLWlucHV0J107IC8vIHJlcGxhY2UgbmVvLXRleHRmaWVsZC1pbnB1dFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGlja21hcmtzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaWNrbWFya3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZVRpY2ttYXJrcycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmFuZ2UpO1xuXG5leHBvcnQge1JhbmdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IExpc3QgICAgICAgICAgICBmcm9tICcuLi8uLi9saXN0L0Jhc2UubWpzJztcbmltcG9ydCBQaWNrZXIgICAgICAgICAgZnJvbSAnLi9QaWNrZXIubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vLi4vZGF0YS9TdG9yZS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBQcm92aWRlcyBhIGRyb3AgZG93biBsaXN0IHRvIHNlbGVjdCBvbmUgb3IgbXVsdGlwbGUgaXRlbXNcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5TZWxlY3RcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlBpY2tlclxuICovXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBQaWNrZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5TZWxlY3QnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlNlbGVjdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3RmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3RmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXNlbGVjdGZpZWxkJywgJ25lby1waWNrZXJmaWVsZCcsICduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tc2VsZWN0ZmllbGQnLCAnbmVvLXBpY2tlcmZpZWxkJywgJ25lby10ZXh0ZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGlzcGxheUZpZWxkPSduYW1lJ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlzcGxheUZpZWxkOiAnbmFtZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8TnVtYmVyfG51bGx9IGhpbnRSZWNvcmRJZD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoaW50UmVjb3JkSWQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICAgICdEb3duJyAgOiAnb25LZXlEb3duRG93bicsXG4gICAgICAgICAgICAnRW50ZXInIDogJ29uS2V5RG93bkVudGVyJyxcbiAgICAgICAgICAgICdFc2NhcGUnOiAnb25LZXlEb3duRXNjYXBlJyxcbiAgICAgICAgICAgICdSaWdodCcgOiAnb25LZXlEb3duUmlnaHQnLFxuICAgICAgICAgICAgJ1VwJyAgICA6ICdvbktleURvd25VcCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBsYXN0TWFudWFsSW5wdXQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0TWFudWFsSW5wdXQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8ubGlzdC5CYXNlfSBsaXN0PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsaXN0Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGxpc3RDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaWNrZXIgY29udGFpbmVyLiBEZWZhdWx0cyB0byBweC5cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfG51bGx9IHBpY2tlckhlaWdodD1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBwaWNrZXJIZWlnaHQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZXxudWxsfSBzdG9yZV89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmVfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZmlyc3QgbWF0Y2hpbmcgcmVzdWx0IHdoaWxlIHR5cGluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB0eXBlQWhlYWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHR5cGVBaGVhZF86IHRydWVcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5saXN0ID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogTGlzdCxcbiAgICAgICAgICAgIGRpc3BsYXlGaWVsZCAgOiBtZS5kaXNwbGF5RmllbGQsXG4gICAgICAgICAgICBzZWxlY3Rpb25Nb2RlbDoge3N0YXlJbkxpc3Q6IGZhbHNlfSxcbiAgICAgICAgICAgIHNpbGVudFNlbGVjdCAgOiB0cnVlLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICA6IG1lLnN0b3JlLFxuICAgICAgICAgICAgLi4ubWUubGlzdENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5saXN0LmtleXMuX2tleXMucHVzaChcbiAgICAgICAgICAgIHtmbjogJ29uQ29udGFpbmVyS2V5RG93bkVudGVyJywgIGtleTogJ0VudGVyJywgIHNjb3BlOiBtZS5pZH0sXG4gICAgICAgICAgICB7Zm46ICdvbkNvbnRhaW5lcktleURvd25Fc2NhcGUnLCBrZXk6ICdFc2NhcGUnLCBzY29wZTogbWUuaWR9XG4gICAgICAgICk7XG5cbiAgICAgICAgbWUubGlzdC5vbih7XG4gICAgICAgICAgICBjcmVhdGVJdGVtcyAgICAgICA6IG1lLm9uTGlzdENyZWF0ZUl0ZW1zLFxuICAgICAgICAgICAgaXRlbUNsaWNrICAgICAgICAgOiBtZS5vbkxpc3RJdGVtQ2xpY2ssXG4gICAgICAgICAgICBpdGVtTmF2aWdhdGUgICAgICA6IG1lLm9uTGlzdEl0ZW1OYXZpZ2F0ZSxcbiAgICAgICAgICAgIHNlbGVjdFBvc3RMYXN0SXRlbTogbWUuZm9jdXNJbnB1dEVsLFxuICAgICAgICAgICAgc2VsZWN0UHJlRmlyc3RJdGVtOiBtZS5mb2N1c0lucHV0RWwsXG4gICAgICAgICAgICBzY29wZSAgICAgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtZS50eXBlQWhlYWQpIHtcbiAgICAgICAgICAgIG1lLnVwZGF0ZVR5cGVBaGVhZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzdG9yZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBmaWx0ZXJzO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgZmlsdGVycyA9IHZhbHVlLmZpbHRlcnMgfHwgW107XG5cbiAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgaW5jbHVkZUVtcHR5VmFsdWVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9wZXJhdG9yICAgICAgICAgIDogJ2xpa2UnLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5ICAgICAgICAgIDogbWUuZGlzcGxheUZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgICAgIDogbWUudmFsdWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YWx1ZS5maWx0ZXJzID0gZmlsdGVycztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdHlwZUFoZWFkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VHlwZUFoZWFkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUeXBlQWhlYWQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ3xudWxsfSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3ByZXZlbnRGaWx0ZXI9ZmFsc2VdXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlLCBwcmV2ZW50RmlsdGVyPWZhbHNlKSB7Y29uc29sZS5sb2coJ2FmdGVyU2V0VmFsdWUnLCB2YWx1ZSk7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKTtcblxuICAgICAgICBpZiAoIXByZXZlbnRGaWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmFsdWUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R8TmVvLmRhdGEuU3RvcmV8bnVsbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5kYXRhLlN0b3JlfSBvbGRWYWx1ZVxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5TdG9yZX1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgU3RvcmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge05lby5saXN0LkJhc2V9XG4gICAgICovXG4gICAgY3JlYXRlUGlja2VyQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxiYWNrXVxuICAgICAqL1xuICAgIGZvY3VzSW5wdXRFbChjYWxsYmFjaykge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLnVwZGF0ZVR5cGVBaGVhZFZhbHVlKG1lLmxhc3RNYW51YWxJbnB1dCwgdHJ1ZSk7XG4gICAgICAgIG1lLnZhbHVlID0gbWUubGFzdE1hbnVhbElucHV0O1xuXG4gICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5mb2N1cyh7XG4gICAgICAgICAgICBpZDogbWUuZ2V0SW5wdXRFbElkKClcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBnZXRJbnB1dEhpbnRFbCgpIHtcbiAgICAgICAgbGV0IGVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh0aGlzLnZkb20sIHRoaXMuZ2V0SW5wdXRIaW50SWQoKSk7XG4gICAgICAgIHJldHVybiBlbCAmJiBlbC52ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbnB1dEhpbnRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX19pbnB1dC1oaW50J1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHNlbGVjdGVkIHJlY29yZCBvciBudWxsXG4gICAgICogcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFJlY29yZCgpIHtcbiAgICAgICAgY29uc3QgbGlzdCAgICAgID0gdGhpcy5saXN0LFxuICAgICAgICAgICAgICByZWNvcmRLZXkgPSBsaXN0LnNlbGVjdGlvbk1vZGVsLmdldFNlbGVjdGlvbigpWzBdO1xuXG4gICAgICAgIHJldHVybiByZWNvcmRLZXkgJiYgdGhpcy5zdG9yZS5nZXQobGlzdC5nZXRJdGVtUmVjb3JkSWQocmVjb3JkS2V5KSkgfHwgbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkNvbnRhaW5lcktleURvd25FbnRlcihkYXRhKSB7XG4gICAgICAgIHRoaXMuaGlkZVBpY2tlcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uQ29udGFpbmVyS2V5RG93bkVzY2FwZShkYXRhKSB7XG4gICAgICAgIHRoaXMuZm9jdXNJbnB1dEVsKHRoaXMuaGlkZVBpY2tlcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICB0aGlzLmxhc3RNYW51YWxJbnB1dCA9IGRhdGEudmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbktleURvd25Eb3duKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbktleURvd25FbnRlcihkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93bkVudGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RMaXN0SXRlbSgpO1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlci5vbktleURvd25FbnRlcihkYXRhLCBtZS5zZWxlY3RMaXN0SXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93blJpZ2h0KGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuaGludFJlY29yZElkKSB7XG4gICAgICAgICAgICBtZS52YWx1ZSA9IG1lLnN0b3JlLmdldChtZS5oaW50UmVjb3JkSWQpW21lLmRpc3BsYXlGaWVsZF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uS2V5RG93blVwKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUucGlja2VySXNNb3VudGVkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3RMYXN0TGlzdEl0ZW0oKTtcbiAgICAgICAgICAgIHN1cGVyLm9uS2V5RG93bkVudGVyKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIub25LZXlEb3duRW50ZXIoZGF0YSwgbWUuc2VsZWN0TGFzdExpc3RJdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3QgaXRlbXMgZ290IGNyZWF0ZWQgb3IgdXBkYXRlZFxuICAgICAqIFNpbmNlIHRoZSBsaXN0ICYgaW5wdXRIaW50IHVwZGF0ZSB3b3VsZCBydW4gaW4gcGFyYWxsZWwgPT4gYmVmb3JlIGdldHRpbmcgdGhlIG5ldyB2bm9kZSBiYWNrXG4gICAgICogdGhpcyBjb3VsZCBjYXVzZSBpbnZhbGlkIHN0YXRlcywgc28gd2UgZGVsYXkgdXBkYXRlVHlwZUFoZWFkVmFsdWUoKSB1bnRpbCB0aGUgbGlzdCBpcyBkb25lLlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvbkxpc3RDcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUudHlwZUFoZWFkKSB7XG4gICAgICAgICAgICBpZiAobWUucGlja2VyICYmIG1lLnBpY2tlci5tb3VudGVkKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVHlwZUFoZWFkVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqL1xuICAgIG9uTGlzdEl0ZW1DbGljayhyZWNvcmQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG9sZFZhbHVlID0gbWUudmFsdWUsXG4gICAgICAgICAgICB2YWx1ZSAgICA9IHJlY29yZFttZS5kaXNwbGF5RmllbGRdO1xuXG4gICAgICAgIGlmIChtZS52YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIG1lLmhpbnRSZWNvcmRJZCA9IG51bGw7XG4gICAgICAgICAgICBtZS5fdmFsdWUgICAgICAgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLmdldElucHV0SGludEVsKCkudmFsdWUgPSBudWxsO1xuXG4gICAgICAgICAgICBtZS5hZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgdHJ1ZSk7IC8vIHByZXZlbnQgdGhlIGxpc3QgZnJvbSBnZXR0aW5nIGZpbHRlcmVkXG5cbiAgICAgICAgICAgIG1lLmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgICAgICByZWNvcmQ6IHJlY29yZCxcbiAgICAgICAgICAgICAgICB2YWx1ZSA6IHJlY29yZFttZS5zdG9yZS5rZXlQcm9wZXJ0eV1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICovXG4gICAgb25MaXN0SXRlbU5hdmlnYXRlKHJlY29yZCkge1xuICAgICAgICB0aGlzLm9uTGlzdEl0ZW1DbGljayhyZWNvcmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc2VsZWN0Rmlyc3RMaXN0SXRlbSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMaXN0SXRlbSgwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHNlbGVjdExhc3RMaXN0SXRlbSgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RMaXN0SXRlbSh0aGlzLnN0b3JlLmdldENvdW50KCkgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIG5vIGluZGV4IGlzIHBhc3NlZCwgdGhlIGluZGV4IG1hdGNoaW5nIHRvIHRoZSBmaWVsZCBpbnB1dCB3aWxsIGdldCB1c2VkICgwIGlmIG5vbmUpXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtpbmRleF1cbiAgICAgKi9cbiAgICBzZWxlY3RMaXN0SXRlbShpbmRleCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghTmVvLmlzTnVtYmVyKGluZGV4KSkge1xuICAgICAgICAgICAgaWYgKG1lLmhpbnRSZWNvcmRJZCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gbWUuc3RvcmUuaW5kZXhPZktleShtZS5oaW50UmVjb3JkSWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZS5vbkxpc3RJdGVtTmF2aWdhdGUobWUuc3RvcmUuZ2V0QXQoaW5kZXgpKTtcbiAgICAgICAgbWUubGlzdC5zZWxlY3RJdGVtKGluZGV4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVHlwZUFoZWFkKHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbnB1dEVsID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZChtZS52ZG9tLCBtZS5pZCArICctaW5wdXQnKSxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmIChtZS50eXBlQWhlYWQpIHtcbiAgICAgICAgICAgIGlucHV0RWwucGFyZW50Tm9kZS5jbltpbnB1dEVsLmluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWlucHV0LWZpZWxkLXdyYXBwZXInXSxcbiAgICAgICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgICAgICAgIDogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgYXV0b2NvcnJlY3QgOiAnb2ZmJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgICAgOiBbJ25lby10ZXh0ZmllbGQtaW5wdXQnLCAnbmVvLXR5cGVhaGVhZC1pbnB1dCddLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgICA6IG1lLmdldElucHV0SGludElkKCksXG4gICAgICAgICAgICAgICAgICAgIHNwZWxsY2hlY2sgIDogJ2ZhbHNlJ1xuICAgICAgICAgICAgICAgIH0sIGlucHV0RWwudmRvbV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFZEb21VdGlsLnJlcGxhY2VWZG9tQ2hpbGQodmRvbSwgaW5wdXRFbC5wYXJlbnROb2RlLmlkLCBpbnB1dEVsLnZkb20pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd8bnVsbH0gW3ZhbHVlXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVHlwZUFoZWFkVmFsdWUodmFsdWUsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGFzTWF0Y2ggICAgPSBmYWxzZSxcbiAgICAgICAgICAgIHN0b3JlICAgICAgID0gbWUuc3RvcmUsXG4gICAgICAgICAgICBpICAgICAgICAgICA9IDAsXG4gICAgICAgICAgICBsZW4gICAgICAgICA9IHN0b3JlLmdldENvdW50KCksXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEhpbnRFbCA9IG1lLmdldElucHV0SGludEVsKCksXG4gICAgICAgICAgICBzdG9yZVZhbHVlO1xuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG1lLnZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzdG9yZVZhbHVlID0gc3RvcmUuaXRlbXNbaV1bbWUuZGlzcGxheUZpZWxkXTtcblxuICAgICAgICAgICAgICAgIGlmIChzdG9yZVZhbHVlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBoYXNNYXRjaCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhhc01hdGNoKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRIaW50RWwudmFsdWUgPSB2YWx1ZSArIHN0b3JlVmFsdWUuc3Vic3RyKHZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbWUuaGludFJlY29yZElkID0gc3RvcmUuaXRlbXNbaV1bc3RvcmUua2V5UHJvcGVydHkgfHwgc3RvcmUubW9kZWwua2V5UHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFoYXNNYXRjaCAmJiBpbnB1dEhpbnRFbCkge1xuICAgICAgICAgICAgaW5wdXRIaW50RWwudmFsdWUgPSAnJztcbiAgICAgICAgICAgIG1lLmhpbnRSZWNvcmRJZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgdXBkYXRlVmFsdWUoKSB7XG4gICAgICAgIGxldCBtZSAgICA9IHRoaXMsXG4gICAgICAgICAgICBzdG9yZSA9IG1lLnN0b3JlLFxuICAgICAgICAgICAgZmlsdGVyO1xuXG4gICAgICAgIGlmIChzdG9yZSAmJiAhTmVvLmlzRW1wdHkoc3RvcmUuZmlsdGVycykpIHtcbiAgICAgICAgICAgIGZpbHRlciA9IHN0b3JlLmdldEZpbHRlcihtZS5kaXNwbGF5RmllbGQpO1xuXG4gICAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyLnZhbHVlID0gbWUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUudHlwZUFoZWFkKSB7XG4gICAgICAgICAgICBpZiAoIShtZS5waWNrZXIgJiYgbWUucGlja2VyLmNvbnRhaW5zRm9jdXMpKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVHlwZUFoZWFkVmFsdWUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgc2VsZWN0IGV2ZW50IGZpcmVzIHdoZW4gYSBsaXN0IGl0ZW0gZ2V0cyBzZWxlY3RlZFxuICogQGV2ZW50IHNlbGVjdFxuICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICogQHBhcmFtIHt2YWx1ZX0gcmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XVxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTZWxlY3QpO1xuXG5leHBvcnQge1NlbGVjdCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBVc2VkIGJ5IGZvcm0uZmllbGQuUGlja2VyXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXJcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLnRyaWdnZXIuQmFzZVxuICovXG5jbGFzcyBQaWNrZXIgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5QaWNrZXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuUGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RyaWdnZXItcGlja2VyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RyaWdnZXItcGlja2VyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpY29uQ2xzPSdmYSBmYS1jYXJldC1kb3duJ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWNhcmV0LWRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3BpY2tlcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZTogJ3BpY2tlcidcbiAgICB9fVxuXG4gICAgb25UcmlnZ2VyQ2xpY2soZGF0YSkge1xuICAgICAgICB0aGlzLmZpZWxkLm9uUGlja2VyVHJpZ2dlckNsaWNrKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQaWNrZXIpO1xuXG5leHBvcnQge1BpY2tlciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIHZhbHVlIG9mIGEgTnVtYmVyRmllbGRcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5Eb3duXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgU3BpbkRvd24gZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpbkRvd24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1zcGluZG93bidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0cmlnZ2VyLXNwaW5kb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWxpZ25fPSdzdGFydCdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiAnc3RhcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNoZXZyb24tbGVmdCdcbiAgICAgICAgICovXG4gICAgICAgIGljb25DbHM6ICdmYSBmYS1jaGV2cm9uLWxlZnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogSW50ZXJuYWwgZmxhZyB1c2VkIGJ5IGZpZWxkLmdldFRyaWdnZXIoKVxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHR5cGU9J3NwaW5kb3duJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc3BpbmRvd24nXG4gICAgfX1cblxuICAgIG9uVHJpZ2dlckNsaWNrKGRhdGEpIHtcbiAgICAgICAgdGhpcy5maWVsZC5vblNwaW5CdXR0b25Eb3duQ2xpY2soKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFNwaW5Eb3duKTtcblxuZXhwb3J0IHtTcGluRG93biBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBJbmNyZWFzZXMgdGhlIHZhbHVlIG9mIGEgTnVtYmVyRmllbGRcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5CYXNlXG4gKi9cbmNsYXNzIFNwaW5VcCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndHJpZ2dlci1zcGludXAnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHJpZ2dlci1zcGludXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGljb25DbHM9J2ZhIGZhLWNoZXZyb24tcmlnaHQnXG4gICAgICAgICAqL1xuICAgICAgICBpY29uQ2xzOiAnZmEgZmEtY2hldnJvbi1yaWdodCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbnRlcm5hbCBmbGFnIHVzZWQgYnkgZmllbGQuZ2V0VHJpZ2dlcigpXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdHlwZT0nc3BpbnVwJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc3BpbnVwJ1xuICAgIH19XG5cbiAgICBvblRyaWdnZXJDbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmllbGQub25TcGluQnV0dG9uVXBDbGljaygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoU3BpblVwKTtcblxuZXhwb3J0IHtTcGluVXAgYXMgZGVmYXVsdH07IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQ29tYmluZXMgc3BpbiB1cCAmIGRvd24gaW5zaWRlIG9uZSB0cmlnZ2VyXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQudHJpZ2dlci5TcGluVXBEb3duXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC50cmlnZ2VyLkJhc2VcbiAqL1xuY2xhc3MgU3BpblVwRG93biBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC50cmlnZ2VyLlNwaW5VcERvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLnRyaWdnZXIuU3BpblVwRG93bicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0cmlnZ2VyLXNwaW51cGRvd24nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndHJpZ2dlci1zcGludXBkb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tc3Bpbi1idXR0b25zJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tZmllbGQtdHJpZ2dlcicsICduZW8tc3Bpbi1idXR0b25zJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHNwaW5CdXR0b25Eb3duSWNvbkNscz0nZmEgZmEtY2hldnJvbi1kb3duJ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BpbkJ1dHRvbkRvd25JY29uQ2xzOiAnZmEgZmEtY2hldnJvbi1kb3duJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc3BpbkJ1dHRvblVwSWNvbkNscz0nZmEgZmEtY2hldnJvbi11cCdcbiAgICAgICAgICovXG4gICAgICAgIHNwaW5CdXR0b25VcEljb25DbHM6ICdmYSBmYS1jaGV2cm9uLXVwJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsIGZsYWcgdXNlZCBieSBmaWVsZC5nZXRUcmlnZ2VyKClcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB0eXBlPSdzcGludXBkb3duJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiAnc3BpbnVwZG93bidcbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgdmRvbS5jbiA9IFtcbiAgICAgICAgICAgIHtjbHM6IFsnbmVvLXNwaW4tYnV0dG9uJywgJ25lby11cCcsICAgbWUuc3BpbkJ1dHRvblVwSWNvbkNsc119LFxuICAgICAgICAgICAge2NsczogWyduZW8tc3Bpbi1idXR0b24nLCAnbmVvLWRvd24nLCBtZS5zcGluQnV0dG9uRG93bkljb25DbHNdfVxuICAgICAgICBdO1xuXG4gICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuXG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcbiAgICB9XG5cbiAgICBvblRyaWdnZXJDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdGFyZ2V0ID0gZGF0YS5wYXRoWzBdLFxuICAgICAgICAgICAgY2xzICAgID0gdGFyZ2V0LmNscy5qb2luKCcgJyk7XG5cbiAgICAgICAgaWYgKGNscy5pbmNsdWRlcygnbmVvLWRvd24nKSkge1xuICAgICAgICAgICAgbWUuZmllbGQub25TcGluQnV0dG9uRG93bkNsaWNrKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2xzLmluY2x1ZGVzKCduZW8tdXAnKSkge1xuICAgICAgICAgICAgbWUuZmllbGQub25TcGluQnV0dG9uVXBDbGljaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhTcGluVXBEb3duKTtcblxuZXhwb3J0IHtTcGluVXBEb3duIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgICBmcm9tICcuL01vZGVsLm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuXG4vKipcbiAqIEEgc2VsZWN0aW9uIG1vZGVsIGludGVuZGVkIHRvIHVzZSBmb3IgTmVvLmNvbXBvbmVudC5HYWxsZXJ5XG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi5HYWxsZXJ5TW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgR2FsbGVyeU1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uc2VsZWN0aW9uLkdhbGxlcnlNb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi5HYWxsZXJ5TW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLWdhbGxlcnltb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdzZWxlY3Rpb24tZ2FsbGVyeW1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgdG8gc3RheSBpbiB0aGUgc2FtZSBjb2x1bW4gd2hlbiBuYXZpZ2F0aW5nIHdpdGggdGhlIHVwIGFuZCBkb3duIGtleXMsXG4gICAgICAgICAqIG90aGVyd2lzZSB5b3Ugd2lsbCBuYXZpZ2F0ZSB0byB0aGUgbmV4dCAvIHByZXYgY29sdW1uIHdoZW4gbW92aW5nIG91dFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzdGF5SW5Sb3c9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHN0YXlJblJvdzogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdG8gbm90IGFwcGx5IGEgZG9tTGlzdGVuZXJcbiAgICAgKi9cbiAgICBhZGREb21MaXN0ZW5lcigpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBvbGRJdGVtcyA9IFsuLi5tZS5pdGVtc10sXG4gICAgICAgICAgICBkZWx0YXMgICA9IFtdO1xuXG4gICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQgOiB2aWV3LmdldEl0ZW1Wbm9kZUlkKGl0ZW0pLFxuICAgICAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFsnbmVvLXNlbGVjdGVkJ11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXMuc3BsaWNlKDAsIG1lLml0ZW1zLmxlbmd0aCk7XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGFwcE5hbWU6IHZpZXcuYXBwTmFtZSxcbiAgICAgICAgICAgIGRlbHRhcyA6IGRlbHRhc1xuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3NlbGVjdGlvbkNoYW5nZScsIG1lLml0ZW1zLCBvbGRJdGVtcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkl0ZW1DbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBpICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgPSBkYXRhLnBhdGgubGVuZ3RoLFxuICAgICAgICAgICAgdmlldyA9IHRoaXMudmlldyxcbiAgICAgICAgICAgIGtleTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5wYXRoW2ldLmNscy5pbmNsdWRlcygnbmVvLWdhbGxlcnktaXRlbScpKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gdmlldy5nZXRJdGVtSWQoZGF0YS5wYXRoW2ldLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChrZXkpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogdmlldy5zdG9yZS5nZXQoa2V5KVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRG93bihkYXRhKSB7XG4gICAgICAgIHRoaXNbdGhpcy52aWV3Lm9yZGVyQnlSb3cgPyAnb25OYXZLZXlSb3cnIDogJ29uTmF2S2V5Q29sdW1uJ10oMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkxlZnQoZGF0YSkge1xuICAgICAgICB0aGlzW3RoaXMudmlldy5vcmRlckJ5Um93ID8gJ29uTmF2S2V5Q29sdW1uJyA6ICdvbk5hdktleVJvdyddKC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICB0aGlzW3RoaXMudmlldy5vcmRlckJ5Um93ID8gJ29uTmF2S2V5Q29sdW1uJyA6ICdvbk5hdktleVJvdyddKDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25VcChkYXRhKSB7XG4gICAgICAgIHRoaXNbdGhpcy52aWV3Lm9yZGVyQnlSb3cgPyAnb25OYXZLZXlSb3cnIDogJ29uTmF2S2V5Q29sdW1uJ10oLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXA9MVxuICAgICAqL1xuICAgIG9uTmF2S2V5Q29sdW1uKHN0ZXA9MSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgc2VsZWN0ZWQgICAgID0gbWUuaXRlbXNbMF0sXG4gICAgICAgICAgICBjb3VudFJlY29yZHMgPSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgaW5kZXgsIHJlY29yZDtcblxuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gc3RvcmUuaW5kZXhPZihzZWxlY3RlZCkgKyBzdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBjb3VudFJlY29yZHMgLSAxO1xuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IGNvdW50UmVjb3Jkcykge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuXG4gICAgICAgIG1lLnNlbGVjdChyZWNvcmRbc3RvcmUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXA9MVxuICAgICAqL1xuICAgIG9uTmF2S2V5Um93KHN0ZXA9MSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgc2VsZWN0ZWQgICAgID0gbWUuaXRlbXNbMF0sXG4gICAgICAgICAgICBjb3VudFJlY29yZHMgPSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgYW1vdW50Um93cyAgID0gdmlldy5hbW91bnRSb3dzLFxuICAgICAgICAgICAgc3RheUluUm93ICAgID0gbWUuc3RheUluUm93LFxuICAgICAgICAgICAgaW5kZXgsIHJlY29yZDtcblxuICAgICAgICBpZiAodmlldy5vcmRlckJ5Um93KSB7XG4gICAgICAgICAgICBhbW91bnRSb3dzID0gTWF0aC5jZWlsKHZpZXcuc3RvcmUuZ2V0Q291bnQoKSAvIGFtb3VudFJvd3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RlcCAqPSBhbW91bnRSb3dzO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgaW5kZXggPSBzdG9yZS5pbmRleE9mKHNlbGVjdGVkKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXlJblJvdykge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCAoY291bnRSZWNvcmRzIC0gYW1vdW50Um93cykpIHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSBhbW91bnRSb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID49IGNvdW50UmVjb3Jkcykge1xuICAgICAgICAgICAgaWYgKCFzdGF5SW5Sb3cpIHtcbiAgICAgICAgICAgICAgICBpbmRleC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGluZGV4ID49IGFtb3VudFJvd3MpIHtcbiAgICAgICAgICAgICAgICBpbmRleCAtPSBhbW91bnRSb3dzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0QXQoaW5kZXgpO1xuXG4gICAgICAgIG1lLnNlbGVjdChyZWNvcmRbc3RvcmUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2aWV3LmZpcmUoJ3NlbGVjdCcsIHtcbiAgICAgICAgICAgIHJlY29yZDogcmVjb3JkXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIHZpZXcub24oe1xuICAgICAgICAgICAgY29udGFpbmVyQ2xpY2s6IG1lLm9uQ29udGFpbmVyQ2xpY2ssXG4gICAgICAgICAgICBpdGVtQ2xpY2sgICAgIDogbWUub25JdGVtQ2xpY2ssXG4gICAgICAgICAgICBzY29wZSAgICAgICAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHZpZXcua2V5cykge1xuICAgICAgICAgICAgdmlldy5rZXlzLl9rZXlzLnB1c2goXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKi9cbiAgICBzZWxlY3QoaXRlbUlkKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBvbGRJdGVtcyA9IFsuLi5tZS5pdGVtc10sXG4gICAgICAgICAgICBkZWx0YXMgICA9IFtdLFxuICAgICAgICAgICAgdm5vZGVJZCAgPSB2aWV3LmdldEl0ZW1Wbm9kZUlkKGl0ZW1JZCk7XG5cbiAgICAgICAgaWYgKG1lLnNpbmdsZVNlbGVjdCkge1xuICAgICAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gaXRlbUlkKSB7Y29uc29sZS5sb2coaXRlbSwgaXRlbUlkKVxuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuaXRlbXMuc3BsaWNlKDAsIG1lLml0ZW1zLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICBpZCA6IHZub2RlSWQsXG4gICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICBhZGQ6IFsnbmVvLXNlbGVjdGVkJ11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvQXJyYXlbJ2FkZCddKG1lLml0ZW1zLCBpdGVtSWQpO1xuXG4gICAgICAgIGlmIChkZWx0YXMubGVuZ3RoID4gMCAmJiB2aWV3Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHZpZXcuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLmZpcmUoJ3NlbGVjdGlvbkNoYW5nZScsIG1lLml0ZW1zLCBvbGRJdGVtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh2aWV3Lm1vdW50ZWQpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ3NlbGVjdGlvbkNoYW5nZScsIG1lLml0ZW1zLCBvbGRJdGVtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5yZW1vdmVLZXlzKFtcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25Eb3duJyAgLGtleTogJ0Rvd24nICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25MZWZ0JyAgLGtleTogJ0xlZnQnICAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25SaWdodCcgLGtleTogJ1JpZ2h0JyAsc2NvcGU6IGlkfSxcbiAgICAgICAgICAgICAgICB7Zm46ICdvbktleURvd25VcCcgICAgLGtleTogJ1VwJyAgICAsc2NvcGU6IGlkfVxuICAgICAgICAgICAgXSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci51bnJlZ2lzdGVyKCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhHYWxsZXJ5TW9kZWwpO1xuXG5leHBvcnQge0dhbGxlcnlNb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgICAgZnJvbSAnLi9Nb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBBIHNlbGVjdGlvbiBtb2RlbCBpbnRlbmRlZCB0byB1c2UgZm9yIE5lby5jb21wb25lbnQuSGVsaXhcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgSGVsaXhNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5IZWxpeE1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLWhlbGl4bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLWhlbGl4bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzdGF5IGluIHRoZSBzYW1lIGNvbHVtbiB3aGVuIG5hdmlnYXRpbmcgd2l0aCB0aGUgdXAgYW5kIGRvd24ga2V5cyxcbiAgICAgICAgICogb3RoZXJ3aXNlIHlvdSB3aWxsIG5hdmlnYXRlIHRvIHRoZSBuZXh0IC8gcHJldiBjb2x1bW4gd2hlbiBtb3Zpbmcgb3V0XG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IHN0YXlJbkNvbHVtbj1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RheUluQ29sdW1uOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0byBub3QgYXBwbHkgYSBkb21MaXN0ZW5lclxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db250YWluZXJDbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIG9sZEl0ZW1zID0gWy4uLm1lLml0ZW1zXSxcbiAgICAgICAgICAgIGRlbHRhcyAgID0gW107XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbSksXG4gICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuaXRlbXMubGVuZ3RoKTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSXRlbUNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGRhdGEucGF0aC5sZW5ndGgsXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy52aWV3LFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnBhdGhbaV0uY2xzLmluY2x1ZGVzKCduZW8taGVsaXgtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gdmlldy5nZXRJdGVtSWQoZGF0YS5wYXRoW2ldLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChrZXkpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogdmlldy5zdG9yZS5nZXQoa2V5KVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRG93bihkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkxlZnQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25VcChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXA9MVxuICAgICAqL1xuICAgIG9uTmF2S2V5Q29sdW1uKHN0ZXA9MSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgc2VsZWN0ZWQgICAgID0gbWUuaXRlbXNbMF0sXG4gICAgICAgICAgICBjb3VudFJlY29yZHMgPSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgaXRlbXNQZXJSb3cgID0gcGFyc2VJbnQoMzYwIC8gdmlldy5pdGVtQW5nbGUpLFxuICAgICAgICAgICAgc3RheUluQ29sdW1uID0gbWUuc3RheUluQ29sdW1uLFxuICAgICAgICAgICAgaW5kZXgsIHJlY29yZDtcblxuICAgICAgICBzdGVwICo9IGl0ZW1zUGVyUm93O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgaW5kZXggPSBzdG9yZS5pbmRleE9mKHNlbGVjdGVkKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXlJbkNvbHVtbikge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCAoY291bnRSZWNvcmRzIC0gaXRlbXNQZXJSb3cpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gaXRlbXNQZXJSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gY291bnRSZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXlJbkNvbHVtbikge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPj0gaXRlbXNQZXJSb3cpIHtcbiAgICAgICAgICAgICAgICBpbmRleCAtPSBpdGVtc1BlclJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwPTFcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhzdGVwPTEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHNlbGVjdGVkICAgICA9IG1lLml0ZW1zWzBdLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIGluZGV4LCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gY291bnRSZWNvcmRzIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICB2aWV3Lm9uKHtcbiAgICAgICAgICAgIGNvbnRhaW5lckNsaWNrOiBtZS5vbkNvbnRhaW5lckNsaWNrLFxuICAgICAgICAgICAgaXRlbUNsaWNrICAgICA6IG1lLm9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbdG9nZ2xlU2VsZWN0aW9uPXRydWVdXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1JZCwgdG9nZ2xlU2VsZWN0aW9uPXRydWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gdG9nZ2xlU2VsZWN0aW9uID09PSBmYWxzZSA/IGZhbHNlIDogbWUuaXRlbXMuaW5jbHVkZXMoaXRlbUlkKSxcbiAgICAgICAgICAgIG9sZEl0ZW1zICAgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgICA9IFtdO1xuXG4gICAgICAgIGlmIChtZS5zaW5nbGVTZWxlY3QpIHtcbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuaXRlbXMuc3BsaWNlKDAsIG1lLml0ZW1zLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbUlkKSxcbiAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgIGFkZCAgIDogaXNTZWxlY3RlZCA/IFtdIDogWyduZW8tc2VsZWN0ZWQnXSxcbiAgICAgICAgICAgICAgICByZW1vdmU6IGlzU2VsZWN0ZWQgPyBbJ25lby1zZWxlY3RlZCddIDogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvQXJyYXlbaXNTZWxlY3RlZCA/ICdyZW1vdmUnIDogJ2FkZCddKG1lLml0ZW1zLCBpdGVtSWQpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3QnLCBpdGVtSWQsIGlzU2VsZWN0ZWQsIG1lLml0ZW1zKTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXhNb2RlbCk7XG5cbmV4cG9ydCB7SGVsaXhNb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgICAgZnJvbSAnLi4vTW9kZWwubWpzJztcbmltcG9ydCBWRG9tVXRpbCBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi50YWJsZS5Sb3dNb2RlbFxuICogQGV4dGVuZHMgTmVvLnNlbGVjdGlvbi5Nb2RlbFxuICovXG5jbGFzcyBSb3dNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi50YWJsZS5Sb3dNb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi50YWJsZS5Sb3dNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tdGFibGUtcm93bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLXRhYmxlLXJvd21vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xzPSdzZWxlY3Rpb24tcm93bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsczogJ25lby1zZWxlY3Rpb24tcm93bW9kZWwnXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgYWRkRG9tTGlzdGVuZXIoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IHZpZXcuZG9tTGlzdGVuZXJzO1xuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrICAgOiBtZS5vblJvd0NsaWNrLFxuICAgICAgICAgICAgZGVsZWdhdGU6ICcubmVvLXRhYmxlLXJvdycsXG4gICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmlldy5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZHMgdGhlIG1hdGNoaW5nIHRhYmxlIHJvdyBmb3IgYSBnaXZlbiByb3cgaW5kZXhcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXggcm93IGluZGV4XG4gICAgICogQHJldHVybnMge1N0cmluZ3xudWxsfSBUaGUgdGFibGUgcm93IG5vZGUgaWRcbiAgICAgKi9cbiAgICBnZXRSb3dJZChpbmRleCkge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IHRoaXMudmlldy5zdG9yZS5nZXRDb3VudCgpIDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmlldy52ZG9tLmNuWzBdLmNuWzFdLmNuW2luZGV4XS5pZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgbWF0Y2hpbmcgdGFibGUgcm93IGZvciBhIGdpdmVuIGV2ZW50IHBhdGhcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGF0aCBUaGUgZXZlbnQgcGF0aFxuICAgICAqIEByZXR1cm5zIHtPYmplY3R8bnVsbH0gVGhlIG5vZGUgY29udGFpbmluZyB0aGUgdGFibGUgcm93IGNsYXNzIG9yIG51bGxcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgc3RhdGljIGdldFJvd05vZGUocGF0aCkge1xuICAgICAgICBsZXQgaSAgICA9IDAsXG4gICAgICAgICAgICBsZW4gID0gcGF0aC5sZW5ndGgsXG4gICAgICAgICAgICBub2RlID0gbnVsbDtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocGF0aFtpXS5jbHMuaW5jbHVkZXMoJ25lby10YWJsZS1yb3cnKSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBwYXRoW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkRvd24oZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KGRhdGEsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25VcChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlSb3coZGF0YSwgLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcFxuICAgICAqL1xuICAgIG9uTmF2S2V5Um93KGRhdGEsIHN0ZXApIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSAgICAgICA9IFJvd01vZGVsLmdldFJvd05vZGUoZGF0YS5wYXRoKSxcbiAgICAgICAgICAgIHZpZXcgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICA9IHZpZXcuc3RvcmUsXG4gICAgICAgICAgICB2ZG9tTm9kZSAgID0gVkRvbVV0aWwuZmluZFZkb21DaGlsZCh2aWV3LnZkb20sIG5vZGUuaWQpLFxuICAgICAgICAgICAgbmV3SW5kZXggICA9ICh2ZG9tTm9kZS5pbmRleCArIHN0ZXApICUgc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIHBhcmVudE5vZGUgPSB2ZG9tTm9kZS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgaWQ7XG5cbiAgICAgICAgd2hpbGUgKG5ld0luZGV4IDwgMCkge1xuICAgICAgICAgICAgbmV3SW5kZXggKz0gc3RvcmUuZ2V0Q291bnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlkID0gcGFyZW50Tm9kZS5jbltuZXdJbmRleF0uaWQ7XG5cbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBtZS5zZWxlY3QoaWQpO1xuICAgICAgICAgICAgdmlldy5mb2N1cyhpZCk7XG5cbiAgICAgICAgICAgIHZpZXcuZmlyZSgnc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgIHJlY29yZDogc3RvcmUuZ2V0QXQobmV3SW5kZXgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblJvd0NsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgbm9kZSA9IFJvd01vZGVsLmdldFJvd05vZGUoZGF0YS5wYXRoKSxcbiAgICAgICAgICAgIGlkICAgPSBub2RlICYmIG5vZGUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIG1lLnRvZ2dsZVNlbGVjdGlvbihpZCk7XG5cbiAgICAgICAgICAgIHZpZXcuZmlyZShtZS5pc1NlbGVjdGVkKGlkKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0Jywge1xuICAgICAgICAgICAgICAgIHJlY29yZDogdmlldy5zdG9yZS5nZXRBdChWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHZpZXcudmRvbSwgaWQpLmluZGV4KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMuX2tleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgZm4gICA6ICdvbktleURvd25Eb3duJyxcbiAgICAgICAgICAgICAgICBrZXkgIDogJ0Rvd24nLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBpZFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGZuICAgOiAnb25LZXlEb3duVXAnLFxuICAgICAgICAgICAgICAgIGtleSAgOiAnVXAnLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIHVucmVnaXN0ZXIoKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5yZW1vdmVLZXlzKFt7XG4gICAgICAgICAgICAgICAgZm4gICA6ICdvbktleURvd25Eb3duJyxcbiAgICAgICAgICAgICAgICBrZXkgIDogJ0Rvd24nLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBpZFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGZuICAgOiAnb25LZXlEb3duVXAnLFxuICAgICAgICAgICAgICAgIGtleSAgOiAnVXAnLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBpZFxuICAgICAgICAgICAgfV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUm93TW9kZWwpO1xuXG5leHBvcnQge1Jvd01vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlQ29udGFpbmVyICAgZnJvbSAnLi4vY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBDbGFzc1N5c3RlbVV0aWwgZnJvbSAnLi4vdXRpbC9DbGFzc1N5c3RlbS5tanMnO1xuaW1wb3J0IENzcyAgICAgICAgICAgICBmcm9tICcuLi91dGlsL0Nzcy5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgICAgICBmcm9tICcuLi91dGlsL0FycmF5Lm1qcyc7XG5pbXBvcnQgUm93TW9kZWwgICAgICAgIGZyb20gJy4uL3NlbGVjdGlvbi90YWJsZS9Sb3dNb2RlbC5tanMnO1xuaW1wb3J0IFN0b3JlICAgICAgICAgICBmcm9tICcuLi9kYXRhL1N0b3JlLm1qcyc7XG5pbXBvcnQgVmlldyAgICAgICAgICAgIGZyb20gJy4vVmlldy5tanMnO1xuaW1wb3J0ICogYXMgaGVhZGVyIGZyb20gJy4vaGVhZGVyL19leHBvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnRhYmxlLkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIEJhc2VDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFibGUuQ29udGFpbmVyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFibGUuQ29udGFpbmVyJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3RhYmxlLWNvbnRhaW5lcidcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWJsZS1jb250YWluZXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogdG9kbzogdGVzdGluZyBjb25maWcsIHJlbW92ZSB3aGVuIFN0b3JlcyBhcmUgcmVhZHlcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBhbW91bnRSb3dzPTIwXG4gICAgICAgICAqL1xuICAgICAgICBhbW91bnRSb3dzOiAyMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgY29uZmlncyBmb3IgZWFjaCBjb2x1bW5cbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb2x1bW5EZWZhdWx0cz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb2x1bW5EZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvZG86IHRlc3RpbmcgY29uZmlnLCByZW1vdmUgd2hlbiBTdG9yZXMgYXJlIHJlYWR5XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNyZWF0ZVJhbmRvbURhdGE9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNyZWF0ZVJhbmRvbURhdGE6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby10YWJsZS1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWJsZS1jb250YWluZXInXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjb2x1bW5zXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgY29sdW1uc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQ29uZmlncyBmb3IgTmVvLnRhYmxlLmhlYWRlci5Ub29sYmFyXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBbaGVhZGVyVG9vbGJhckNvbmZpZz1udWxsXVxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyVG9vbGJhckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBoZWFkZXJUb29sYmFySWRfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlclRvb2xiYXJJZF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYXlvdXQ9J2Jhc2UnXG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6ICdiYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNjcm9sbGJhcnNDc3NBcHBsaWVkPWZhbHNlXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNjcm9sbGJhcnNDc3NBcHBsaWVkOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5zZWxlY3Rpb24uTW9kZWx9IHNlbGVjdGlvbk1vZGVsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25Nb2RlbF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBzaG93SGVhZGVyRmlsdGVyc189ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHNob3dIZWFkZXJGaWx0ZXJzXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uZGF0YS5TdG9yZX0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRvZG86IG9ubHkgd29ya3MgZm9yIGNocm9tZSAmIHNhZmFyaSAtPiBhZGQgYSBjaGVja1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VDdXN0b21TY3JvbGxiYXJzXz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VDdXN0b21TY3JvbGxiYXJzXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpZ3MgZm9yIE5lby50YWJsZS5WaWV3XG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBbdmlld0NvbmZpZz1udWxsXVxuICAgICAgICAgKi9cbiAgICAgICAgdmlld0NvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSB2aWV3SWRfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdmlld0lkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IGl0ZW1zPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tPXtjbHM6IFsnbmVvLXRhYmxlLXdyYXBwZXInXSxjbiA6IFt7dGFnOiAndGFibGUnLGNuIDogW119XX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbHM6IFsnbmVvLXRhYmxlLXdyYXBwZXInXSxcbiAgICAgICAgICAgIGNuIDogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICd0YWJsZScsXG4gICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIG1lLmhlYWRlclRvb2xiYXJJZCA9IE5lby5nZXRJZCgndGFibGUtaGVhZGVyLXRvb2xiYXInKTtcbiAgICAgICAgbWUudmlld0lkICAgICAgICAgID0gTmVvLmdldElkKCd0YWJsZS12aWV3Jyk7XG5cbiAgICAgICAgbWUuaXRlbXMgPSBbe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICAgICA6IGhlYWRlci5Ub29sYmFyLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICAgICA6IG1lLmhlYWRlclRvb2xiYXJJZCxcbiAgICAgICAgICAgIHNob3dIZWFkZXJGaWx0ZXJzOiBtZS5zaG93SGVhZGVyRmlsdGVycyxcbiAgICAgICAgICAgIC4uLm1lLmhlYWRlclRvb2xiYXJDb25maWcgfHwge31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICA6IFZpZXcsXG4gICAgICAgICAgICBjb250YWluZXJJZDogbWUuaWQsXG4gICAgICAgICAgICBpZCAgICAgICAgIDogbWUudmlld0lkLFxuICAgICAgICAgICAgc3RvcmUgICAgICA6IG1lLnN0b3JlLFxuICAgICAgICAgICAgLi4ubWUudmlld0NvbmZpZyB8fCB7fVxuICAgICAgICB9XTtcblxuICAgICAgICBtZS52ZG9tLmlkID0gbWUuaWQgKyAnd3JhcHBlcic7XG5cbiAgICAgICAgbWUuY3JlYXRlQ29sdW1ucyhtZS5jb2x1bW5zKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5zZWxlY3Rpb25Nb2RlbCkge1xuICAgICAgICAgICAgbWUuc2VsZWN0aW9uTW9kZWwucmVnaXN0ZXIobWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lLmNyZWF0ZVJhbmRvbURhdGEpIHtcbiAgICAgICAgICAgIC8vIHRvZG86IGlmIG1vdW50aW5nIGFwcGx5IGFmdGVyIG1vdW50XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVSYW5kb21WaWV3RGF0YShtZS5hbW91bnRSb3dzKTtcbiAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93SGVhZGVyRmlsdGVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dIZWFkZXJGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCh0aGlzLmhlYWRlclRvb2xiYXJJZCkuc2hvd0hlYWRlckZpbHRlcnMgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdXNlQ3VzdG9tU2Nyb2xsYmFycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFVzZUN1c3RvbVNjcm9sbGJhcnModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy52ZG9tLmNscyA9IE5lb0FycmF5LnVuaW9uKHRoaXMudmRvbS5jbHMsIFsnbmVvLXVzZS1jdXN0b20tc2Nyb2xsYmFyJ10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFwcGx5Q3VzdG9tU2Nyb2xsYmFyc0NzcygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNzc1J1bGVzID0gW107XG5cbiAgICAgICAgaWYgKG1lLmRvY2tMZWZ0TWFyZ2luKSB7XG4gICAgICAgICAgICBjc3NSdWxlcy5wdXNoKCcjJyArIG1lLmlkICsgJ3dyYXBwZXInICsgJzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG9yaXpvbnRhbCB7bWFyZ2luLWxlZnQ6ICcgKyBtZS5kb2NrTGVmdE1hcmdpbiArICdweDt9Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUuZG9ja1JpZ2h0TWFyZ2luKSB7XG4gICAgICAgICAgICBjc3NSdWxlcy5wdXNoKCcjJyArIG1lLmlkICsgJ3dyYXBwZXInICsgJzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2s6aG9yaXpvbnRhbCB7bWFyZ2luLXJpZ2h0OiAnICsgbWUuZG9ja1JpZ2h0TWFyZ2luICsgJ3B4O30nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3NzUnVsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQ3NzLmluc2VydFJ1bGVzKGNzc1J1bGVzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnNjcm9sbGJhcnNDc3NBcHBsaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBjb2x1bW5zIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtBcnJheX0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRDb2x1bW5zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5jb25maWdzQXBwbGllZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29sdW1ucyh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgaGVhZGVyVG9vbGJhcklkIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldEhlYWRlclRvb2xiYXJJZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiBvbGRWYWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDbGFzc1N5c3RlbVV0aWwuYmVmb3JlU2V0SW5zdGFuY2UodmFsdWUsIFJvd01vZGVsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzdG9yZSBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgb2xkVmFsdWUuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICB2YWx1ZSA9IENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgU3RvcmUsIHtcbiAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgIGZpbHRlciAgICAgIDogbWUub25TdG9yZUZpbHRlcixcbiAgICAgICAgICAgICAgICBsb2FkICAgICAgICA6IG1lLm9uU3RvcmVMb2FkLFxuICAgICAgICAgICAgICAgIHJlY29yZENoYW5nZTogbWUub25TdG9yZVJlY29yZENoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZSAgICAgICA6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGluIGNhc2Ugd2UgZHluYW1pY2FsbHkgY2hhbmdlIHRoZSBzdG9yZSwgdGhlIG5ldyBuZWVkcyB0byBnZXQgdGhlIG5ldyByZWZlcmVuY2VcbiAgICAgICAgaWYgKG1lLnZpZXcpIHtcbiAgICAgICAgICAgIG1lLnZpZXcuc3RvcmUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSB2aWV3SWQgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0Vmlld0lkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IG9sZFZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbHVtbnNcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjcmVhdGVDb2x1bW5zKGNvbHVtbnMpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNvbHVtbkRlZmF1bHRzID0gbWUuY29sdW1uRGVmYXVsdHMsXG4gICAgICAgICAgICBzb3J0ZXJzICAgICAgICA9IG1lLnN0b3JlLnNvcnRlcnM7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgTmVvLmxvZ0Vycm9yKCdBdHRlbXB0aW5nIHRvIGNyZWF0ZSBhIHRhYmxlLkNvbnRhaW5lciB3aXRob3V0IGRlZmluZWQgY29sdW1ucycsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5kb2NrICYmICFjb2x1bW4ud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBOZW8ubG9nRXJyb3IoJ0F0dGVtcHRpbmcgdG8gY3JlYXRlIGEgZG9ja2VkIGNvbHVtbiB3aXRob3V0IGEgZGVmaW5lZCB3aWR0aCcsIGNvbHVtbiwgbWUuaWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29sdW1uRGVmYXVsdHMpIHtcbiAgICAgICAgICAgICAgICBOZW8uYXNzaWduRGVmYXVsdHMoY29sdW1uLCBjb2x1bW5EZWZhdWx0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzb3J0ZXJzICYmIHNvcnRlcnNbMF0pIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmRhdGFGaWVsZCA9PT0gc29ydGVyc1swXS5wcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4uaXNTb3J0ZWQgPSBzb3J0ZXJzWzBdLmRpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbHVtbi5saXN0ZW5lcnMgPSB7XG4gICAgICAgICAgICAgICAgc29ydCA6IG1lLm9uU29ydENvbHVtbixcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zWzBdLml0ZW1zID0gY29sdW1ucztcblxuICAgICAgICByZXR1cm4gY29sdW1ucztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFJvd3NcbiAgICAgKi9cbiAgICBjcmVhdGVSYW5kb21WaWV3RGF0YShjb3VudFJvd3MpIHtcbiAgICAgICAgdGhpcy5sb2FkRGF0YShjb3VudFJvd3MpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGlucHV0RGF0YVxuICAgICAqL1xuICAgIGNyZWF0ZVZpZXdEYXRhKGlucHV0RGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcztcblxuICAgICAgICBpdGVtc1sxXS5jcmVhdGVWaWV3RGF0YShpbnB1dERhdGEpOyAvLyB0b2RvOiBzYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSB2aWV3ICYgaGVhZGVyQ29udGFpbmVyXG5cbiAgICAgICAgaWYgKG1lLnVzZUN1c3RvbVNjcm9sbGJhcnMgJiYgbWUuc2Nyb2xsYmFyc0Nzc0FwcGxpZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBtZS5hcHBseUN1c3RvbVNjcm9sbGJhcnNDc3MoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLml0ZW1zID0gaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybnMge05lby52ZG9tLlZOb2RlfVxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudFJvd3NcbiAgICAgKi9cbiAgICBsb2FkRGF0YShjb3VudFJvd3MpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjb2x1bW5zICAgICAgPSBtZS5pdGVtc1swXS5pdGVtcyxcbiAgICAgICAgICAgIGNvdW50Q29sdW1ucyA9IGNvbHVtbnMubGVuZ3RoO1xuXG4gICAgICAgIE5lby5tYW5hZ2VyLlN0b3JlLmNyZWF0ZVJhbmRvbURhdGEoW2NvdW50Q29sdW1ucywgY291bnRSb3dzXSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIG1lLmNyZWF0ZVZpZXdEYXRhKGRhdGEpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yIGF0dGVtcHRpbmcgdG8gY2FsbCBjcmVhdGVSYW5kb21WaWV3RGF0YScsIGVyciwgbWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMuZGlyZWN0aW9uXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMucHJvcGVydHlcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25Tb3J0Q29sdW1uKG9wdHMpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5zdG9yZS5zb3J0KG9wdHMpO1xuICAgICAgICBtZS5yZW1vdmVTb3J0aW5nQ3NzKG9wdHMucHJvcGVydHkpO1xuICAgICAgICBtZS5vblN0b3JlTG9hZChtZS5zdG9yZS5pdGVtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvblN0b3JlRmlsdGVyKCkge1xuICAgICAgICB0aGlzLm9uU3RvcmVMb2FkKHRoaXMuc3RvcmUuaXRlbXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gZGF0YVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBvblN0b3JlTG9hZChkYXRhKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBsaXN0ZW5lcklkO1xuXG4gICAgICAgIGlmIChtZS5yZW5kZXJlZCkge1xuICAgICAgICAgICAgbWUuY3JlYXRlVmlld0RhdGEoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmIChtZS5zdG9yZS5zb3J0ZXJzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgICAgICBtZS5yZW1vdmVTb3J0aW5nQ3NzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lcklkID0gbWUub24oJ3JlbmRlcmVkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lLnVuKCdyZW5kZXJlZCcsIGxpc3RlbmVySWQpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtZS5jcmVhdGVWaWV3RGF0YShkYXRhKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiBhIHJlY29yZCBmaWVsZC5cbiAgICAgKiBFLmcuIG15UmVjb3JkLmZvbyA9ICdiYXInO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMuZmllbGQgVGhlIG5hbWUgb2YgdGhlIGZpZWxkIHdoaWNoIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5Nb2RlbH0gb3B0cy5tb2RlbCBUaGUgbW9kZWwgaW5zdGFuY2Ugb2YgdGhlIGNoYW5nZWQgcmVjb3JkXG4gICAgICogQHBhcmFtIHsqfSBvcHRzLm9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMucmVjb3JkXG4gICAgICogQHBhcmFtIHsqfSBvcHRzLnZhbHVlXG4gICAgICovXG4gICAgb25TdG9yZVJlY29yZENoYW5nZShvcHRzKSB7XG4gICAgICAgIE5lby5nZXRDb21wb25lbnQodGhpcy52aWV3SWQpLm9uU3RvcmVSZWNvcmRDaGFuZ2Uob3B0cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YUZpZWxkXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIHJlbW92ZVNvcnRpbmdDc3MoZGF0YUZpZWxkKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbMF0uaXRlbXMuZm9yRWFjaChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgaWYgKGNvbHVtbi5kYXRhRmllbGQgIT09IGRhdGFGaWVsZCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5yZW1vdmVTb3J0aW5nQ3NzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ29udGFpbmVyKTtcblxuZXhwb3J0IHtDb250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udGFibGUuVmlld1xuICogQGV4dGVuZHMgTmVvLmNvbXBvbmVudC5CYXNlXG4gKi9cbmNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udGFibGUuVmlldydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnRhYmxlLlZpZXcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFibGUtdmlldydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd0YWJsZS12aWV3JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tdGFibGUtdmlldyddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXRhYmxlLXZpZXcnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBjb250YWluZXJJZD1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNvbnRhaW5lcklkOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSByZWNvcmRWbm9kZU1hcD17fVxuICAgICAgICAgKi9cbiAgICAgICAgcmVjb3JkVm5vZGVNYXA6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gc3RvcmU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc3RvcmU6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VSb3dSZWNvcmRJZHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlUm93UmVjb3JkSWRzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbT17dGFnOiAndGJvZHknLCBjbiA6IFtdfVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIHRhZzogJ3Rib2R5JyxcbiAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBpbnB1dERhdGFcbiAgICAgKi9cbiAgICBjcmVhdGVWaWV3RGF0YShpbnB1dERhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYW1vdW50Um93cyA9IGlucHV0RGF0YS5sZW5ndGgsXG4gICAgICAgICAgICBjb250YWluZXIgID0gTmVvLmdldENvbXBvbmVudChtZS5wYXJlbnRJZCksXG4gICAgICAgICAgICBoYXNTdG9yZSAgID0gY29udGFpbmVyLnN0b3JlLm1vZGVsLCAvLyB0b2RvOiByZW1vdmUgYXMgc29vbiBhcyBhbGwgdGFibGVzIHVzZSBzdG9yZXMgKGV4YW1wbGVzIHRhYmxlKVxuICAgICAgICAgICAgY29sdW1ucyAgICA9IGNvbnRhaW5lci5pdGVtc1swXS5pdGVtcyxcbiAgICAgICAgICAgIGNvbENvdW50ICAgPSBjb2x1bW5zLmxlbmd0aCxcbiAgICAgICAgICAgIGRhdGEgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjZWxsQ2xzLCBjZWxsSWQsIGNvbmZpZywgY29sdW1uLCBkb2NrTGVmdE1hcmdpbiwgZG9ja1JpZ2h0TWFyZ2luLCBpZCwgaW5kZXgsIGosIHJlbmRlcmVyT3V0cHV0LCByZW5kZXJlclZhbHVlLCBzZWxlY3RlZFJvd3MsIHRyQ2xzO1xuXG4gICAgICAgIG1lLnJlY29yZFZub2RlTWFwID0ge307IC8vIHJlbW92ZSBvbGQgZGF0YVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjcmVhdGVWaWV3RGF0YScsIG1lLmlkLCBpbnB1dERhdGEpO1xuXG4gICAgICAgIGlmIChjb250YWluZXIuc2VsZWN0aW9uTW9kZWwubnR5cGUgPT09ICdzZWxlY3Rpb24tdGFibGUtcm93bW9kZWwnKSB7XG4gICAgICAgICAgICBzZWxlY3RlZFJvd3MgPSBjb250YWluZXIuc2VsZWN0aW9uTW9kZWwuaXRlbXMgfHwgW107XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGFtb3VudFJvd3M7IGkrKykge1xuICAgICAgICAgICAgaWYgKG1lLnVzZVJvd1JlY29yZElkcykge1xuICAgICAgICAgICAgICAgIGlkID0gbWUuaWQgKyAnLXRyLScgKyBpbnB1dERhdGFbaV1bbWUuc3RvcmUua2V5UHJvcGVydHldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZCA9IHZkb20uY25baV0gJiYgdmRvbS5jbltpXS5pZCB8fCBOZW8uZ2V0SWQoJ3RyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnJlY29yZFZub2RlTWFwW2lkXSA9IGk7XG5cbiAgICAgICAgICAgIHRyQ2xzID0gbWUuZ2V0VHJDbGFzcyhpbnB1dERhdGFbaV0sIGkpO1xuXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRSb3dzICYmIHNlbGVjdGVkUm93cy5pbmNsdWRlcyhpZCkpIHtcbiAgICAgICAgICAgICAgICB0ckNscy5wdXNoKCduZW8tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF0YS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWcgICAgIDogJ3RyJyxcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogaWQsXG4gICAgICAgICAgICAgICAgY2xzICAgICA6IHRyQ2xzLFxuICAgICAgICAgICAgICAgIGNuICAgICAgOiBbXSxcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogJy0xJ1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRvY2tMZWZ0TWFyZ2luICA9IDA7XG4gICAgICAgICAgICBkb2NrUmlnaHRNYXJnaW4gPSAwO1xuXG4gICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBjb2xDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29sdW1uICAgICAgICAgPSBjb2x1bW5zW2pdO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyVmFsdWUgID0gaW5wdXREYXRhW2ldW2NvbHVtbi5kYXRhRmllbGRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJlbmRlcmVyVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlclZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJPdXRwdXQgPSBjb2x1bW4ucmVuZGVyZXIuY2FsbChjb2x1bW4ucmVuZGVyZXJTY29wZSB8fCBjb250YWluZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiBjb2x1bW4uZGF0YUZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCAgICA6IGksXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZCAgIDogaW5wdXREYXRhW2ldLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHJlbmRlcmVyVmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNlbGxDbHMgPSByZW5kZXJlck91dHB1dC5jbHMgfHwgWyduZW8tdGFibGUtY2VsbCddO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5hbGlnbiAhPT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxDbHMucHVzaCgnbmVvLScgKyBjb2x1bW4uYWxpZ24pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghTmVvLmlzT2JqZWN0KHJlbmRlcmVyT3V0cHV0KSkge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlck91dHB1dCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNscyA6IGNlbGxDbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiByZW5kZXJlck91dHB1dC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gdG9kbzogcmVtb3ZlIHRoZSBpZiBwYXJ0IGFzIHNvb24gYXMgYWxsIHRhYmxlcyB1c2Ugc3RvcmVzIChleGFtcGxlcyB0YWJsZSlcbiAgICAgICAgICAgICAgICBpZiAoaGFzU3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbElkID0gbWUuZ2V0Q2VsbElkKGlucHV0RGF0YVtpXSwgY29sdW1uLmRhdGFGaWVsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbElkID0gdmRvbS5jbltpXSAmJiB2ZG9tLmNuW2ldLmNuW2pdICYmIHZkb20uY25baV0uY25bal0uaWQgfHwgTmVvLmdldElkKCd0ZCcpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnICAgICAgOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICAgICA6IGNlbGxJZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzICAgICAgOiByZW5kZXJlck91dHB1dC5jbHMgICB8fCBbJ25lby10YWJsZS1jZWxsJ10sXG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogcmVuZGVyZXJPdXRwdXQuaHRtbCAgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICAgIDogcmVuZGVyZXJPdXRwdXQuc3R5bGUgfHwge30sXG4gICAgICAgICAgICAgICAgICAgIHRhYkluZGV4IDogJy0xJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uLmRvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNscyA9IFsnbmVvLWxvY2tlZCcsIC4uLmNvbmZpZy5jbHMgfHwgW11dO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2x1bW4uZG9jayA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuc3R5bGUubGVmdCA9IGRvY2tMZWZ0TWFyZ2luICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY2tMZWZ0TWFyZ2luICs9IChjb2x1bW4ud2lkdGggKyAxKTsgLy8gdG9kbzogYm9yZGVycyBmaXhcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRhdGFbaV0uY24ucHVzaChjb25maWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBqID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGogPCBjb2xDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggID0gY29sQ291bnQgLSBqIC0xO1xuICAgICAgICAgICAgICAgIGNvbHVtbiA9IGNvbHVtbnNbaW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbi5kb2NrID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY25baW5kZXhdLnN0eWxlLnJpZ2h0ID0gZG9ja1JpZ2h0TWFyZ2luICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgZG9ja1JpZ2h0TWFyZ2luICs9IChjb2x1bW4ud2lkdGggKyAxKTsgLy8gdG9kbzogYm9yZGVycyBmaXhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2ZG9tLmNuID0gZGF0YTtcblxuICAgICAgICBjb250YWluZXIuZG9ja0xlZnRNYXJnaW4gID0gZG9ja0xlZnRNYXJnaW47XG4gICAgICAgIGNvbnRhaW5lci5kb2NrUmlnaHRNYXJnaW4gPSBkb2NrUmlnaHRNYXJnaW47XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHVwZGF0ZVBhcmVudFZkb21cbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHNpbGVudFxuICAgICAqL1xuICAgIGRlc3Ryb3kodXBkYXRlUGFyZW50VmRvbSwgc2lsZW50KSB7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICBzdXBlci5kZXN0cm95KHVwZGF0ZVBhcmVudFZkb20sIHNpbGVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRhdGFGaWVsZFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2VsbElkKHJlY29yZCwgZGF0YUZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkICsgJ19fJyArIHJlY29yZFt0aGlzLnN0b3JlLmtleVByb3BlcnR5XSArICdfXycgKyBkYXRhRmllbGQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gYXBwbHkgY3VzdG9tIENTUyBydWxlcyB0byB0YWJsZSByb3dzXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSByb3dJbmRleFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXRUckNsYXNzKHJlY29yZCwgcm93SW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFsnbmVvLXRhYmxlLXJvdyddO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIGFmdGVyIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiBhIHJlY29yZCBmaWVsZC5cbiAgICAgKiBFLmcuIG15UmVjb3JkLmZvbyA9ICdiYXInO1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9wdHMuZmllbGQgVGhlIG5hbWUgb2YgdGhlIGZpZWxkIHdoaWNoIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5Nb2RlbH0gb3B0cy5tb2RlbCBUaGUgbW9kZWwgaW5zdGFuY2Ugb2YgdGhlIGNoYW5nZWQgcmVjb3JkXG4gICAgICogQHBhcmFtIHsqfSBvcHRzLm9sZFZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdHMucmVjb3JkXG4gICAgICogQHBhcmFtIHsqfSBvcHRzLnZhbHVlXG4gICAgICovXG4gICAgb25TdG9yZVJlY29yZENoYW5nZShvcHRzKSB7XG4gICAgICAgIGxldCBtZSAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjZWxsSWQgICA9IG1lLmdldENlbGxJZChvcHRzLnJlY29yZCwgb3B0cy5maWVsZCksXG4gICAgICAgICAgICBjZWxsTm9kZSA9IG1lLmdldFZkb21DaGlsZChjZWxsSWQpO1xuXG4gICAgICAgIGNlbGxOb2RlLmlubmVySFRNTCA9IG9wdHMudmFsdWU7IC8vIGtlZXAgdGhlIHZkb20gaW4gc3luY1xuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGRlbHRhczogW3tcbiAgICAgICAgICAgICAgICBpZCAgICAgICA6IGNlbGxJZCxcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IG9wdHMudmFsdWVcbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVmlldyk7XG5cbmV4cG9ydCB7VmlldyBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZUJ1dHRvbiBmcm9tICcuLi8uLi9idXR0b24vQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgZnJvbSAnLi4vLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgZnJvbSAnLi4vLi4vZm9ybS9maWVsZC9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby50YWJsZS5oZWFkZXIuQnV0dG9uXG4gKiBAZXh0ZW5kcyBOZW8uYnV0dG9uLkJhc2VcbiAqL1xuY2xhc3MgQnV0dG9uIGV4dGVuZHMgQmFzZUJ1dHRvbiB7XG4gICAgc3RhdGljIGdldFN0YXRpY0NvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogVmFsaWQgdmFsdWVzIGZvciBhbGlnblxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gYWxpZ25WYWx1ZXM6IFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqIEBzdGF0aWNcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduVmFsdWVzOiBbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J11cbiAgICB9fVxuXG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby50YWJsZS5oZWFkZXIuQnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFibGUuaGVhZGVyLkJ1dHRvbicsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd0YWJsZS1oZWFkZXItYnV0dG9uJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3RhYmxlLWhlYWRlci1idXR0b24nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWxpZ25tZW50IG9mIHRoZSBtYXRjaGluZyB0YWJsZSBjZWxscy4gVmFsaWQgdmFsdWVzIGFyZSBsZWZ0LCBjZW50ZXIsIHJpZ2h0XG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gYWxpZ25fPSdsZWZ0J1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ25fOiAnbGVmdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXRhYmxlLWhlYWRlci1idXR0b24nXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby10YWJsZS1oZWFkZXItYnV0dG9uJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gZGF0YUZpZWxkPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGRhdGFGaWVsZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvcnQgZGlyZWN0aW9uIHdoZW4gY2xpY2tpbmcgb24gYW4gdW5zb3J0ZWQgYnV0dG9uXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gZGVmYXVsdFNvcnREaXJlY3Rpb249J0FTQydcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRTb3J0RGlyZWN0aW9uOiAnQVNDJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGRyYWdnYWJsZV89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgZHJhZ2dhYmxlXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZWRpdG9yQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGVkaXRvckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gZmlsdGVyQ29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGZpbHRlckNvbmZpZzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge05lby5mb3JtLmZpZWxkLkJhc2V8bnVsbH0gZmlsdGVyRmllbGQ9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBmaWx0ZXJGaWVsZDogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaWNvbkNscz0nZmEgZmEtYXJyb3ctY2lyY2xlLXVwJ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWFycm93LWNpcmNsZS11cCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGljb25Qb3NpdGlvbj0ncmlnaHQnXG4gICAgICAgICAqL1xuICAgICAgICBpY29uUG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAnQVNDJywgJ0RFU0MnIG9yIG51bGxcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfG51bGx9IGlzU29ydGVkXz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGlzU29ydGVkXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNjb3BlIHRvIGV4ZWN1dGUgdGhlIGNvbHVtbiByZW5kZXJlci5cbiAgICAgICAgICogRGVmYXVsdHMgdG8gdGhlIG1hdGNoaW5nIHRhYmxlLkNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29yZS5CYXNlfG51bGx9IHJlbmRlcmVyU2NvcGU9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXJTY29wZTogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dIZWFkZXJGaWx0ZXJfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93SGVhZGVyRmlsdGVyXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgdGFnOiAndGgnLFxuICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgIHRhZzogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1idXR0b24tZ2x5cGgnXVxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1idXR0b24tdGV4dCddXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2ZG9tIHJvb3QgaWYgbmVlZGVkIHRvIGFwcGx5IHRoZSB0b3AgbGV2ZWwgc3R5bGUgYXR0cmlidXRlcyBvbiBhIGRpZmZlcmVudCBsZXZlbC5cbiAgICAgKiBNYWtlIHN1cmUgdG8gdXNlIGdldFZub2RlUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdmRvbSByb290XG4gICAgICovXG4gICAgZ2V0VmRvbVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmeSBhIGRpZmZlcmVudCB2bm9kZSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWZG9tUm9vdCgpIGFzIHdlbGwsIHRvIGtlZXAgdGhlIHZkb20gJiB2bm9kZSB0cmVlcyBpbiBzeW5jLlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBuZXcgdm5vZGUgcm9vdFxuICAgICAqL1xuICAgIGdldFZub2RlUm9vdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudm5vZGUuY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGxpc3RlbmVycyA9IHtcbiAgICAgICAgICAgICAgICBjbGljazogbWUub25CdXR0b25DbGljayxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1lLmRyYWdnYWJsZSkge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihsaXN0ZW5lcnMsIHtcbiAgICAgICAgICAgICAgICBkcmFnZW5kICA6IG1lLm9uRHJhZ0VuZCxcbiAgICAgICAgICAgICAgICBkcmFnZW50ZXI6IG1lLm9uRHJhZ0VudGVyLFxuICAgICAgICAgICAgICAgIGRyYWdsZWF2ZTogbWUub25EcmFnTGVhdmUsXG4gICAgICAgICAgICAgICAgZHJhZ292ZXIgOiBtZS5vbkRyYWdPdmVyLFxuICAgICAgICAgICAgICAgIGRyYWdzdGFydDogbWUub25EcmFnU3RhcnQsXG4gICAgICAgICAgICAgICAgZHJvcCAgICAgOiBtZS5vbkRyb3AsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGRyYWdnYWJsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldERyYWdnYWJsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBtZS5nZXRWZG9tUm9vdCgpLmRyYWdnYWJsZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgbWUuZ2V0VmRvbVJvb3QoKS5kcmFnZ2FibGU7XG4gICAgICAgIH1cblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlzU29ydGVkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0SXNTb3J0ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2xzICAgICAgID0gbWUuY2xzLFxuICAgICAgICAgICAgY29udGFpbmVyID0gbWUudXAoJ3RhYmxlLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIHN3aXRjaCh2YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgICAgICAgIE5lb0FycmF5LmFkZChjbHMsICduZW8tc29ydC1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FTQyc6XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1zb3J0LWRlc2MnKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLXNvcnQtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgJ25lby1zb3J0LWFzYycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnREVTQyc6XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKGNscywgJ25lby1zb3J0LWFzYycpO1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShjbHMsICduZW8tc29ydC1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLXNvcnQtZGVzYycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuY2xzID0gY2xzO1xuXG4gICAgICAgIC8vIHRlc3RpbmcgY2hlY2sgdW50aWwgYWxsIGV4YW1wbGUgdGFibGVzIGhhdmUgYSBzdG9yZVxuICAgICAgICBpZiAoIWNvbnRhaW5lciB8fCAhY29udGFpbmVyLnN0b3JlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWUubW91bnRlZCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnc29ydCcsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHZhbHVlLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5IDogbWUuZGF0YUZpZWxkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2hvd0hlYWRlckZpbHRlciBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dIZWFkZXJGaWx0ZXIodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFtZS5maWx0ZXJGaWVsZCkge1xuICAgICAgICAgICAgICAgIG1lLmZpbHRlckZpZWxkID0gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgICAgICAgICBmbGFnICAgICA6ICdmaWx0ZXItZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICBoaWRlTGFiZWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudElkIDogbWUuaWQsXG5cbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgICAgICAgIDogbWUuY2hhbmdlRmlsdGVyVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGVyYXRvckNoYW5nZTogbWUuY2hhbmdlRmlsdGVyT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZSAgICAgICAgIDogbWVcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdCA6ICcuNWVtJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAnLjVlbSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLi4ubWUuZWRpdG9yQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtZS52ZG9tLmNuLnB1c2gobWUuZmlsdGVyRmllbGQudmRvbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBtZS5maWx0ZXJGaWVsZC52ZG9tLnJlbW92ZURvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZS5maWx0ZXJGaWVsZCkge1xuICAgICAgICAgICAgbWUuZmlsdGVyRmllbGQudmRvbS5yZW1vdmVEb20gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgYWxpZ24gY29uZmlnIGdldHMgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRBbGlnbih2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVmb3JlU2V0RW51bVZhbHVlKHZhbHVlLCBvbGRWYWx1ZSwgJ2FsaWduJywgJ2FsaWduVmFsdWVzJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBkZXN0cm95KC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlsdGVyRmllbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRmllbGQuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuZGVzdHJveSguLi5hcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgb25CdXR0b25DbGljaygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIG1hcDtcblxuICAgICAgICBpZiAobWUuZGVmYXVsdFNvcnREaXJlY3Rpb24gPT09ICdERVNDJykge1xuICAgICAgICAgICAgbWFwID0ge1xuICAgICAgICAgICAgICAgIEFTQyA6IG51bGwsXG4gICAgICAgICAgICAgICAgREVTQzogJ0FTQycsXG4gICAgICAgICAgICAgICAgbnVsbDogJ0RFU0MnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWFwID0ge1xuICAgICAgICAgICAgICAgIEFTQyA6ICdERVNDJyxcbiAgICAgICAgICAgICAgICBERVNDOiBudWxsLFxuICAgICAgICAgICAgICAgIG51bGw6ICdBU0MnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgbWUuaXNTb3J0ZWQgPSBtYXBbbWUuaXNTb3J0ZWQgKyAnJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRHJhZ0VuZCgpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIHN0eWxlID0gbWUuc3R5bGU7XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlLm9wYWNpdHk7XG4gICAgICAgIG1lLnN0eWxlID0gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRHJhZ0VudGVyKCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLWRyYWctb3ZlcicpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRHJhZ0xlYXZlKCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCAnbmVvLWRyYWctb3ZlcicpO1xuICAgICAgICBtZS5jbHMgPSBjbHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnRcbiAgICAgKi9cbiAgICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ29uRHJhZ092ZXInLCBldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uRHJhZ1N0YXJ0KCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgc3R5bGUgPSBtZS5zdHlsZTtcblxuICAgICAgICBzdHlsZS5vcGFjaXR5ID0gMC40O1xuICAgICAgICBtZS5zdHlsZSA9IHN0eWxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkRyb3AoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGVhZGVyVG9vbGJhciAgPSBOZW8uZ2V0Q29tcG9uZW50KG1lLnBhcmVudElkKSxcbiAgICAgICAgICAgIHRhYmxlQ29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudChoZWFkZXJUb29sYmFyLnBhcmVudElkKTtcblxuICAgICAgICBkZWxldGUgTmVvLmdldENvbXBvbmVudChkYXRhLnNyY0lkKS5nZXRWZG9tUm9vdCgpLnN0eWxlLm9wYWNpdHk7XG5cbiAgICAgICAgbWUub25EcmFnTGVhdmUoKTtcbiAgICAgICAgaGVhZGVyVG9vbGJhci5zd2l0Y2hJdGVtcyhtZS5pZCwgZGF0YS5zcmNJZCk7XG4gICAgICAgIHRhYmxlQ29udGFpbmVyLmNyZWF0ZVZpZXdEYXRhKHRhYmxlQ29udGFpbmVyLnN0b3JlLmRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjaGFuZ2VGaWx0ZXJPcGVyYXRvcihkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB0YWJsZUNvbnRhaW5lciA9IG1lLnVwKCd0YWJsZS1jb250YWluZXInKSxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICAgID0gdGFibGVDb250YWluZXIgJiYgdGFibGVDb250YWluZXIuc3RvcmUsXG4gICAgICAgICAgICBvcGVyYXRvciAgICAgICA9IGRhdGEudmFsdWUsXG4gICAgICAgICAgICBmaWx0ZXIsIGZpbHRlcnM7XG5cbiAgICAgICAgaWYgKHN0b3JlKSB7XG4gICAgICAgICAgICBmaWx0ZXIgPSBzdG9yZS5nZXRGaWx0ZXIobWUuZGF0YUZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKCFmaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzID0gc3RvcmUuZmlsdGVycztcblxuICAgICAgICAgICAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBtZS5kYXRhRmllbGQsXG4gICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBvcGVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIC4uLm1lLmZpbHRlckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc3RvcmUuZmlsdGVycyA9IGZpbHRlcnM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlci5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNoYW5nZUZpbHRlclZhbHVlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRhYmxlQ29udGFpbmVyID0gbWUudXAoJ3RhYmxlLWNvbnRhaW5lcicpLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgICAgPSB0YWJsZUNvbnRhaW5lciAmJiB0YWJsZUNvbnRhaW5lci5zdG9yZSxcbiAgICAgICAgICAgIHZhbHVlICAgICAgICAgID0gZGF0YS52YWx1ZSxcbiAgICAgICAgICAgIGZpZWxkLCBmaWx0ZXIsIGZpbHRlcnMsIG1vZGVsO1xuXG4gICAgICAgIGlmIChzdG9yZSkge1xuICAgICAgICAgICAgZmlsdGVyID0gc3RvcmUuZ2V0RmlsdGVyKG1lLmRhdGFGaWVsZCk7XG4gICAgICAgICAgICBtb2RlbCAgPSBzdG9yZS5tb2RlbDtcbiAgICAgICAgICAgIGZpZWxkICA9IG1vZGVsICYmIG1vZGVsLmdldEZpZWxkKG1lLmRhdGFGaWVsZCk7XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBmaWVsZC50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWZpbHRlcikge1xuICAgICAgICAgICAgICAgIGZpbHRlcnMgPSBzdG9yZS5maWx0ZXJzO1xuXG4gICAgICAgICAgICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHk6IG1lLmRhdGFGaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgICA6IHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAuLi5tZS5maWx0ZXJDb25maWcgfHwge31cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN0b3JlLmZpbHRlcnMgPSBmaWx0ZXJzO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXIudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZW1vdmVTb3J0aW5nQ3NzKCkge1xuICAgICAgICBsZXQgbWUgID0gdGhpcyxcbiAgICAgICAgICAgIGNscyA9IG1lLmNscztcblxuICAgICAgICBOZW9BcnJheS5hZGQoY2xzLCAnbmVvLXNvcnQtaGlkZGVuJyk7XG5cbiAgICAgICAgbWUuY2xzICAgICAgID0gY2xzO1xuICAgICAgICBtZS5faXNTb3J0ZWQgPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5kYXRhRmllbGRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZGF0YS5pbmRleFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhLnJlY29yZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gZGF0YS52YWx1ZVxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHJlbmRlcmVyKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEudmFsdWU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhCdXR0b24pO1xuXG5leHBvcnQge0J1dHRvbiBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZVRvb2xiYXIgZnJvbSAnLi4vLi4vY29udGFpbmVyL1Rvb2xiYXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnRhYmxlLmhlYWRlci5Ub29sYmFyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlRvb2xiYXJcbiAqL1xuY2xhc3MgVG9vbGJhciBleHRlbmRzIEJhc2VUb29sYmFyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnRhYmxlLmhlYWRlci5Ub29sYmFyJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udGFibGUuaGVhZGVyLlRvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndGFibGUtaGVhZGVyLXRvb2xiYXInXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndGFibGUtaGVhZGVyLXRvb2xiYXInLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ3RhYmxlLWhlYWRlci10b29sYmFyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyd0YWJsZS1oZWFkZXItdG9vbGJhciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYXlvdXQ9J2Jhc2UnXG4gICAgICAgICAqL1xuICAgICAgICBsYXlvdXQ6ICdiYXNlJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbURlZmF1bHRzPXtudHlwZSA6ICd0YWJsZS1oZWFkZXItYnV0dG9uJ31cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgbnR5cGUgOiAndGFibGUtaGVhZGVyLWJ1dHRvbidcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHNob3dIZWFkZXJGaWx0ZXJzXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0hlYWRlckZpbHRlcnNfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb209e3RhZzogJ3RoZWFkJyxjbiA6IFt7dGFnOiAndHInLGNuIDogW119XX1cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWc6ICd0aGVhZCcsXG4gICAgICAgICAgICBjbiA6IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAndHInLFxuICAgICAgICAgICAgICAgIGNuIDogW11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzaG93SGVhZGVyRmlsdGVycyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNob3dIZWFkZXJGaWx0ZXJzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgICAgICBtZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0U2lsZW50KHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0hlYWRlckZpbHRlcjogdmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGRvY2tcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfSBsYXlvdXRDb25maWdcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKi9cbiAgICBnZXRMYXlvdXRDb25maWcoZG9jaykge1xuICAgICAgICByZXR1cm4gJ2Jhc2UnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdmRvbSBpdGVtcyByb290IGlmIG5lZWRlZCAodXNlZnVsIGluIGNhc2UgdGhpcyBjb250YWluZXIgdXNlcyBhIHdyYXBwZXIgbm9kZSkuXG4gICAgICogQHJldHVybnMge09iamVjdH0gVGhlIG5ldyB2ZG9tIGl0ZW1zIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWZG9tSXRlbXNSb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdLmNuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdmRvbSByb290IGlmIG5lZWRlZCB0byBhcHBseSB0aGUgdG9wIGxldmVsIHN0eWxlIGF0dHJpYnV0ZXMgb24gYSBkaWZmZXJlbnQgbGV2ZWwuXG4gICAgICogTWFrZSBzdXJlIHRvIHVzZSBnZXRWbm9kZVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZkb20gcm9vdFxuICAgICAqL1xuICAgIGdldFZkb21Sb290KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZG9tLmNuWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNwZWNpZnkgYSBkaWZmZXJlbnQgdm5vZGUgcm9vdCBpZiBuZWVkZWQgdG8gYXBwbHkgdGhlIHRvcCBsZXZlbCBzdHlsZSBhdHRyaWJ1dGVzIG9uIGEgZGlmZmVyZW50IGxldmVsLlxuICAgICAqIE1ha2Ugc3VyZSB0byB1c2UgZ2V0VmRvbVJvb3QoKSBhcyB3ZWxsLCB0byBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgdHJlZXMgaW4gc3luYy5cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgbmV3IHZub2RlIHJvb3RcbiAgICAgKi9cbiAgICBnZXRWbm9kZVJvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZub2RlLmNoaWxkTm9kZXNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBtZS5pdGVtRGVmYXVsdHMuc2hvd0hlYWRlckZpbHRlciA9IG1lLnNob3dIZWFkZXJGaWx0ZXJzO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG5cbiAgICAgICAgbGV0IGRvY2tMZWZ0V2lkdGggID0gMCxcbiAgICAgICAgICAgIGRvY2tSaWdodFdpZHRoID0gMCxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgID0gbWUuaXRlbXMsXG4gICAgICAgICAgICBsZW4gICAgICAgICAgICA9IGl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIHN0eWxlO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBzdHlsZSA9IGl0ZW0ud3JhcHBlclN0eWxlO1xuXG4gICAgICAgICAgICAvLyB0b2RvOiBvbmx5IGFkZCBweCBpZiBudW1iZXJcbiAgICAgICAgICAgIGlmIChpdGVtLm1heFdpZHRoKSB7c3R5bGUubWF4V2lkdGggPSBpdGVtLm1heFdpZHRoICsgJ3B4J31cbiAgICAgICAgICAgIGlmIChpdGVtLm1pbldpZHRoKSB7c3R5bGUubWluV2lkdGggPSBpdGVtLm1pbldpZHRoICsgJ3B4J31cbiAgICAgICAgICAgIGlmIChpdGVtLndpZHRoKSAgICB7c3R5bGUud2lkdGggICAgPSBpdGVtLndpZHRoICsgJ3B4J31cblxuICAgICAgICAgICAgaWYgKGl0ZW0uZG9jaykge1xuICAgICAgICAgICAgICAgIGl0ZW0udmRvbS5jbHMgPSBbJ25lby1sb2NrZWQnXTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRvY2sgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5sZWZ0ID0gZG9ja0xlZnRXaWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG9ja0xlZnRXaWR0aCArPSAoaXRlbS53aWR0aCArIDEpOyAvLyB0b2RvOiBib3JkZXJzIGZpeFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtLnZkb20uY2xzID0gW107IC8vIHJlbW92ZSB0aGUgYnV0dG9uIGNscyBmcm9tIHRoZSB0aCB0YWdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS53cmFwcGVyU3R5bGUgPSBzdHlsZTtcblxuICAgICAgICAgICAgLy8gaW52ZXJzZSBsb29wIGRpcmVjdGlvblxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2xlbiAtIGluZGV4IC0xXTtcblxuICAgICAgICAgICAgaWYgKGl0ZW0uZG9jayA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gaXRlbS53cmFwcGVyU3R5bGU7XG4gICAgICAgICAgICAgICAgc3R5bGUucmlnaHQgPSBkb2NrUmlnaHRXaWR0aCArICdweCc7XG5cbiAgICAgICAgICAgICAgICBpdGVtLndyYXBwZXJTdHlsZSA9IHN0eWxlO1xuXG4gICAgICAgICAgICAgICAgZG9ja1JpZ2h0V2lkdGggKz0gKGl0ZW0ud2lkdGggKyAxKTsgLy8gdG9kbzogYm9yZGVycyBmaXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhUb29sYmFyKTtcblxuZXhwb3J0IHtUb29sYmFyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCdXR0b24gIGZyb20gJy4vQnV0dG9uLm1qcyc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICcuL1Rvb2xiYXIubWpzJztcblxuZXhwb3J0IHtCdXR0b24sIFRvb2xiYXJ9OyIsImltcG9ydCBCYXNlIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8udXRpbC5Dc3NcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgQ3NzIGV4dGVuZHMgQmFzZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby51dGlsLkNzcydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnV0aWwuQ3NzJ1xuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHJ1bGVzXG4gICAgICovXG4gICAgc3RhdGljIGluc2VydFJ1bGVzKHJ1bGVzKSB7XG4gICAgICAgIE5lby5tYWluLmFkZG9uLlN0eWxlc2hlZXQuaW5zZXJ0Q3NzUnVsZXMoe1xuICAgICAgICAgICAgcnVsZXM6IHJ1bGVzXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luc2VydGVkIENTUyBydWxlcycsIGRhdGEpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBcHA6IEdvdCBlcnJvciBhdHRlbXB0aW5nIHRvIGluc2VydCBDU1MgcnVsZXMnLCBlcnIsIHJ1bGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDc3MpO1xuXG5leHBvcnQgZGVmYXVsdCBDc3M7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vY29yZS9CYXNlLm1qcyc7XG5cbi8qKlxuICogVXRpbGl0eSBjbGFzcyBmb3IgTWF0cml4IGJhc2VkIGNhbGN1bGF0aW9uc1xuICogQGNsYXNzIE5lby51dGlsLk1hdHJpeFxuICogQGV4dGVuZHMgTmVvLmNvcmUuQmFzZVxuICovXG5jbGFzcyBNYXRyaXggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnV0aWwuTWF0cml4J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8udXRpbC5NYXRyaXgnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl8bnVsbH0gaXRlbXNfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXNfOiBudWxsXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgKGksaikgb2YgdGhlIG1hdHJpeFxuICAgICAqIEBwYXJhbSBpXG4gICAgICogQHBhcmFtIGpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRFbGVtZW50KGksIGopIHtcbiAgICAgICAgbGV0IGl0ZW1zID0gdGhpcy5pdGVtcztcblxuICAgICAgICBpZiAoaSA8IDEgfHwgaSA+IGl0ZW1zLmxlbmd0aCB8fCBqIDwgMSB8fCBqID4gaXRlbXNbMF0ubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtc1tpIC0gMV1baiAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNob3J0Y3V0IGZvciBnZXRFbGVtZW50XG4gICAgICovXG4gICAgZShpLCBqKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnQoaSwgaik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIG11bHRpcGx5aW5nIHRoZSBtYXRyaXggZnJvbSB0aGUgcmlnaHQgYnkgdGhlIGFyZ3VtZW50LlxuICAgICAqIEBwYXJhbSBtYXRyaXhcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBtdWx0aXBseShtYXRyaXgpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIE0gICAgID0gbWF0cml4Lml0ZW1zIHx8IG1hdHJpeCxcbiAgICAgICAgICAgIGl0ZW1zID0gbWUuaXRlbXMsXG4gICAgICAgICAgICBuaSAgICA9IGl0ZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGtpICAgID0gbmksXG4gICAgICAgICAgICBraiAgICA9IE1bMF0ubGVuZ3RoLFxuICAgICAgICAgICAgY29scyAgPSBpdGVtc1swXS5sZW5ndGgsXG4gICAgICAgICAgICBlbHMgICA9IFtdLFxuICAgICAgICAgICAgYywgaSwgaiwgbmMsIG5qLCBzdW07XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgaSAgICAgID0ga2kgLSBuaTtcbiAgICAgICAgICAgIGVsc1tpXSA9IFtdO1xuICAgICAgICAgICAgbmogICAgID0ga2o7XG5cbiAgICAgICAgICAgIGRvIHsgaiA9IGtqIC0gbmo7XG4gICAgICAgICAgICAgICAgc3VtID0gMDtcbiAgICAgICAgICAgICAgICBuYyAgPSBjb2xzO1xuXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBjID0gY29scyAtIG5jO1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gaXRlbXNbaV1bY10gKiBNW2NdW2pdO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKC0tbmMpO1xuICAgICAgICAgICAgICAgIGVsc1tpXVtqXSA9IHN1bTtcbiAgICAgICAgICAgIH0gd2hpbGUgKC0tbmopO1xuICAgICAgICB9IHdoaWxlICgtLW5pKTtcblxuICAgICAgICBtYXRyaXguaXRlbXMgPSBlbHM7XG5cbiAgICAgICAgcmV0dXJuIG1hdHJpeDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzaG9ydGN1dCBmb3IgbXVsdGlwbHlcbiAgICAgKi9cbiAgICB4KG1hdHJpeCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tdWx0aXBseShtYXRyaXgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcm90YXRlWCh0KSB7XG4gICAgICAgIGxldCBjID0gTWF0aC5jb3ModCksXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4odCk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFsxLCAwLCAgMCwgMF0sXG4gICAgICAgICAgICBbMCwgYywgLXMsIDBdLFxuICAgICAgICAgICAgWzAsIHMsICBjLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAgMCwgMV1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIHJvdGF0ZVkodCkge1xuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHQpLFxuICAgICAgICAgICAgcyA9IE1hdGguc2luKHQpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbYywgMCwgLXMsIDBdLFxuICAgICAgICAgICAgWzAsIDEsICAwLCAwXSxcbiAgICAgICAgICAgIFtzLCAwLCAgYywgMF0sXG4gICAgICAgICAgICBbMCwgMCwgIDAsIDFdXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVaKHQpIHtcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyh0KSxcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbih0KTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgW2MsIC1zLCAwLCAwXSxcbiAgICAgICAgICAgIFtzLCAgYywgMCwgMF0sXG4gICAgICAgICAgICBbMCwgIDAsIDEsIDBdLFxuICAgICAgICAgICAgWzAsICAwLCAwLCAxXVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZ2V0VHJhbnNmb3JtU3R5bGUoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBwICA9IDEwLCAvLyBwcmVjaXNpb25cbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgcyAgPSAnbWF0cml4M2QoJztcbiAgICAgICAgcyArPSBtZS5lKDEsMSkudG9GaXhlZChwKSArICcsJyArIG1lLmUoMSwyKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgxLDMpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDEsNCkudG9GaXhlZChwKSArICcsJztcbiAgICAgICAgcyArPSBtZS5lKDIsMSkudG9GaXhlZChwKSArICcsJyArIG1lLmUoMiwyKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgyLDMpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDIsNCkudG9GaXhlZChwKSArICcsJztcbiAgICAgICAgcyArPSBtZS5lKDMsMSkudG9GaXhlZChwKSArICcsJyArIG1lLmUoMywyKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgzLDMpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDMsNCkudG9GaXhlZChwKSArICcsJztcbiAgICAgICAgcyArPSBtZS5lKDQsMSkudG9GaXhlZChwKSArICcsJyArIG1lLmUoNCwyKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSg0LDMpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDQsNCkudG9GaXhlZChwKTtcbiAgICAgICAgcyArPSAnKSc7XG5cbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYXRyaXgpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXRyaXg7Il0sInNvdXJjZVJvb3QiOiIifQ==