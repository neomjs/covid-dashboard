self["webpackChunk"](["vendors~chunks/apps-covid-app~chunks/apps-realworld2-app~chunks/apps-sharedcovid-app~chunks/examples~829399ca"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0hlbGl4Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3NlbGVjdGlvbi9IZWxpeE1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvdXRpbC9NYXRyaXgubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDRjtBQUNYO0FBQ2lCO0FBQ1Q7QUFDRDtBQUNBOztBQUVoRDtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQVM7QUFDN0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFZSxxRUFBTSxFIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2FwcHMtY292aWQtYXBwfmNodW5rcy9hcHBzLXJlYWx3b3JsZDItYXBwfmNodW5rcy9hcHBzLXNoYXJlZGNvdmlkLWFwcH5jaHVua3MvZXhhbXBsZXN+ODI5Mzk5Y2EuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBDb2xsZWN0aW9uICAgICAgZnJvbSAnLi4vY29sbGVjdGlvbi9CYXNlLm1qcydcbmltcG9ydCBDb21wb25lbnQgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgSGVsaXhNb2RlbCAgICAgIGZyb20gJy4uL3NlbGVjdGlvbi9IZWxpeE1vZGVsLm1qcyc7XG5pbXBvcnQgTWF0cml4ICAgICAgICAgIGZyb20gJy4uL3V0aWwvTWF0cml4Lm1qcyc7XG5pbXBvcnQgTmVvQXJyYXkgICAgICAgIGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcbmltcG9ydCBTdG9yZSAgICAgICAgICAgZnJvbSAnLi4vZGF0YS9TdG9yZS5tanMnO1xuXG5jb25zdCBpdGVtc01vdW50ZWQgPSBTeW1ib2wuZm9yKCdpdGVtc01vdW50ZWQnKTtcbmNvbnN0IGxvY2tXaGVlbCAgICA9IFN5bWJvbC5mb3IoJ2xvY2tXaGVlbCcpOyAvLyB3ZSBjYW4gbm90IHVzZSBpdGVtc01vdW50ZWQsIHNpbmNlIGl0IGlzIGNvbm5lY3RlZCB0byBvblNvcnQoKVxuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29tcG9uZW50LkhlbGl4XG4gKiBAZXh0ZW5kcyBOZW8uY29tcG9uZW50LkJhc2VcbiAqL1xuY2xhc3MgSGVsaXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LkhlbGl4J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29tcG9uZW50LkhlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2hlbGl4J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2hlbGl4JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBoZWxpeCBjb250YWluZXJcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBiYWNrZ3JvdW5kQ29sb3JfPScjMDAwMDAwJ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFja2dyb3VuZENvbG9yXzogJyMwMDAwMDAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhY2tncm91bmQgaW1hZ2Ugb2YgdGhlIGhlbGl4IGNvbnRhaW5lclxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGJhY2tncm91bmRJbWFnZV89JydcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmRJbWFnZV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkcyBvZiBleHBhbmRlZCBpdGVtcyB3aWxsIGdldCBzdG9yZWQgaGVyZVxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xvbmVkSXRlbXM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xvbmVkSXRlbXM6IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1oZWxpeCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWhlbGl4J10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmVydGljYWwgZGVsdGEgYmV0d2VlbiBlYWNoIGhlbGl4IGl0ZW0gKGluY3JlYXNpbmcgdGhpcyB2YWx1ZSB3aWxsIGNyZWF0ZSBhIHNwaXJhbClcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBkZWx0YVlfPTEuNVxuICAgICAgICAgKi9cbiAgICAgICAgZGVsdGFZXzogMS41LFxuICAgICAgICAvKipcbiAgICAgICAgICogTXVsdGlzZWxlY3Rpb25zIHdpbGwgcmVkdWNlIHRoZSBvcGFjaXR5IGFuZCBzZXQgdGhpcyBmbGFnIHRvIHRydWVcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gZGltbWVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZGltbWVkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNdWx0aXNlbGVjdGlvbnMgd2lsbCByZWR1Y2UgdGhlIG9wYWNpdHkgYW5kIHNldCB0aGlzIGZsYWcgdG8gdHJ1ZVxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IGRpbW1lZE1heE9wYWNpdHlfPTAuM1xuICAgICAgICAgKi9cbiAgICAgICAgZGltbWVkTWF4T3BhY2l0eV86IDAuMyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIE11bHRpc2VsZWN0aW9ucyB3aWxsIHJlZHVjZSB0aGUgb3BhY2l0eSBhbmQgc2V0IHRoaXMgZmxhZyB0byB0cnVlXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gZGltbWVkTWluT3BhY2l0eV89MC4yXG4gICAgICAgICAqL1xuICAgICAgICBkaW1tZWRNaW5PcGFjaXR5XzogMC4yLFxuICAgICAgICBkaXNhYmxlU2VsZWN0aW9uIDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGlwIGltYWdlcyBieSAxODDCsCBmb3IgYSBub3QgbWlycm9yZWQgaW5uZXIgdmlld1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmbGlwcGVkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgZmxpcHBlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byByb3RhdGUgdGhlIGhlbGl4IHdoZW4gdXNpbmcga2V5bmF2LCBzbyB0aGF0IHRoZSBzZWxlY3RlZCBpdGVtcyBzdGF5cyBpbiBmcm9udFxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBmb2xsb3dTZWxlY3Rpb25fPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBmb2xsb3dTZWxlY3Rpb25fOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByZWNvcmQgZmllbGQgY29udGFpbmluZyB0aGUgaW1hZ2UgZGF0YS5cbiAgICAgICAgICogTmVzdGVkIGZpZWxkcyBhcmUgc3VwcG9ydGVkIChlLmcuIGF1dGhvci5pbWFnZSlcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbWFnZUZpZWxkPSdpbWFnZSdcbiAgICAgICAgICovXG4gICAgICAgIGltYWdlRmllbGQ6ICdpbWFnZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGF0aCB0byB0aGUgaW1hZ2VzIGZvbGRlclxuICAgICAgICAgKiBXaWxsIGdldCBzZXQgaW5zaWRlIHRoZSBjdG9yIHRvIGF2b2lkIGlzc3VlcyBpbnNpZGUgdGhlIHdlYnBhY2sgYnVpbGRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBpbWFnZVNvdXJjZT1OZW8uY29uZmlnLnJlc291cmNlc1BhdGggKyAnZXhhbXBsZXMvJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VTb3VyY2U6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbW91bnQgb2YgaXRlbXMgcGVyIHJvdyAoY2lyY2xlKSAtPiAzNjDCsCAvIDEwID0gMzZcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpdGVtQW5nbGVfPThcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1BbmdsZV86IDgsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1UcGxfXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtVHBsXzoge1xuICAgICAgICAgICAgY2xzICAgICA6IFsnc3VyZmFjZScsICduZW8taGVsaXgtaXRlbSddLFxuICAgICAgICAgICAgc3R5bGUgICA6IHt9LFxuICAgICAgICAgICAgdGFiSW5kZXg6ICctMScsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgIGNsczogWydjb250YWN0LWl0ZW0nXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1bmlxdWUgcmVjb3JkIGZpZWxkIGNvbnRhaW5pbmcgdGhlIGlkLlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGtleVByb3BlcnR5PSdpZCdcbiAgICAgICAgICovXG4gICAgICAgIGtleVByb3BlcnR5OiAnaWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkaXRpb25hbCB1c2VkIGtleXMgZm9yIHRoZSBzZWxlY3Rpb24gbW9kZWxcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBrZXlzXG4gICAgICAgICAqL1xuICAgICAgICBrZXlzOiB7XG4gICAgICAgICAgICAnRW50ZXInOiAnb25LZXlEb3duRW50ZXInLFxuICAgICAgICAgICAgJ1NwYWNlJzogJ29uS2V5RG93blNwYWNlJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogV2Ugc3RvcmUgb25lIGluc3RhbmNlIG9mIHRoZSBtYXRyaXggaGVyZSB0byBhdm9pZCBjcmVhdGluZyBuZXcgb25lcyBvbiBlYWNoIHJlZnJlc2ggb3BlcmF0aW9uXG4gICAgICAgICAqIEBtZW1iZXIge05lby51dGlsLk1hdHJpeHxudWxsfSBtYXRyaXg9bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBtYXRyaXg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4IGFtb3VudCBvZiBzdG9yZSBpdGVtcyB0byBzaG93XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWF4SXRlbXNfPTMwMFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SXRlbXNfOiAzMDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWF4IG9wYWNpdHkgZm9yIGl0ZW1zIGluc2lkZSB0aGUgZm9yZWdyb3VuZFxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heE9wYWNpdHlfPTAuOFxuICAgICAgICAgKi9cbiAgICAgICAgbWF4T3BhY2l0eV86IDAuOCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXggb3BhY2l0eSBmb3IgaXRlbXMgaW5zaWRlIHRoZSBiYWNrZ3JvdW5kXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbWluT3BhY2l0eV89MC4zXG4gICAgICAgICAqL1xuICAgICAgICBtaW5PcGFjaXR5XzogMC4zLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHpvb21pbmcgZmFjdG9yIHdoaWNoIHJlcGxhY2VzIHRoZSBkZWZhdWx0IHdoZWVsRGVsdGEuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VXaGVlbERlbHRhWD01XG4gICAgICAgICAqL1xuICAgICAgICBtb3VzZVdoZWVsRGVsdGFYOiA1LFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHpvb21pbmcgZmFjdG9yIHdoaWNoIHJlcGxhY2VzIHRoZSBkZWZhdWx0IHdoZWVsRGVsdGEuXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gbW91c2VXaGVlbERlbHRhWT01MFxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbERlbHRhWTogNTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgbW91c2Ugd2hlZWwgc2hvdWxkIGNoYW5nZSB0aGUgdHJhbnNsYXRlWiB2YWx1ZSBmb3Igem9vbWluZ1xuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBtb3VzZVdoZWVsRW5hYmxlZF89dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgbW91c2VXaGVlbEVuYWJsZWRfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIERPTSBlbGVtZW50IG9mZnNldEhlaWdodCBvZiB0aGUgdG9wIGxldmVsIGRpdi5cbiAgICAgICAgICogR2V0cyBmZXRjaGVkIGFmdGVyIHRoZSBoZWxpeCBnb3QgbW91bnRlZC5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gbW91c2VXaGVlbEVuYWJsZWQ9dHJ1ZVxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBvZmZzZXRIZWlnaHQ6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgRE9NIGVsZW1lbnQgb2Zmc2V0V2lkdGggb2YgdGhlIHRvcCBsZXZlbCBkaXYuXG4gICAgICAgICAqIEdldHMgZmV0Y2hlZCBhZnRlciB0aGUgaGVsaXggZ290IG1vdW50ZWQuXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IG1vdXNlV2hlZWxFbmFibGVkPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0V2lkdGg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGVyc3BlY3RpdmUgb2YgdGhlIEhlbGl4IHZpZXcgaW4gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBwZXJzcGVjdGl2ZV89ODAwXG4gICAgICAgICAqL1xuICAgICAgICBwZXJzcGVjdGl2ZV86IDgwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSByYWRpdXMgb2YgdGhlIEhlbGl4IGluIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gcmFkaXVzXz0xNTAwXG4gICAgICAgICAqL1xuICAgICAgICByYWRpdXNfOiAxNTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJvdGF0aW9uQW5nbGUgb2YgdGhlIEhlbGl4IGluIGRlZ3JlZXNcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSByb3RhdGlvbkFuZ2xlXz03ODBcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0aW9uQW5nbGVfOiA3ODAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXZSBzdG9yZSBvbmUgaW5zdGFuY2Ugb2YgdGhlIHJvdGF0aW9uIG1hdHJpeCBoZXJlIHRvIGF2b2lkIGNyZWF0aW5nIG5ldyBvbmVzIG9uIGVhY2ggcmVmcmVzaCBvcGVyYXRpb25cbiAgICAgICAgICogQG1lbWJlciB7TmVvLnV0aWwuTWF0cml4fG51bGx9IHJvdGF0aW9uTWF0cml4PW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgcm90YXRpb25NYXRyaXg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGRpc3BsYXlzIHRoZSBmaXJzdCAmIGxhc3QgbmFtZSByZWNvcmQgZmllbGRzIGJlbG93IGFuIGV4cGFuZGVkIGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2hvd0Nsb25lSW5mbz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBzaG93Q2xvbmVJbmZvOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hbWUgb2YgdGhlIENTUyBydWxlIGZvciBzZWxlY3RlZCBpdGVtc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHNlbGVjdGVkSXRlbUNscz0nbmVvLXNlbGVjdGVkJ1xuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRJdGVtQ2xzOiAnbmVvLXNlbGVjdGVkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHVzZXMgdGhlIHNlbGVjdGlvbi5IZWxpeE1vZGVsIGJ5IGRlZmF1bHRcbiAgICAgICAgICogQG1lbWJlciB7TmVvLnNlbGVjdGlvbi5IZWxpeE1vZGVsfG51bGx9IHNlbGVjdGlvbk1vZGVsXz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBzZWxlY3Rpb25Nb2RlbF86IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3RvcmUgaW5zdGFuY2Ugb3IgY2xhc3MgY29udGFpbmluZyB0aGUgZGF0YSBmb3IgdGhlIGdhbGxlcnkgaXRlbXNcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCwgLy8gdG9kbzogdXNlIGEgc3RvcmUgb25jZSBjb2xsZWN0aW9ucyBhcmUgaW50ZWdyYXRlZFxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNldFRpbWVvdXQoKSBpZHMgZm9yIGNhbGxzIHdoaWNoIGNhbiBnZXQgY2FuY2VsbGVkXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSB0cmFuc2l0aW9uVGltZW91dHM9W11cbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNpdGlvblRpbWVvdXRzOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0cmFuc2xhdGVYIGdldHMgaW5jbHVkZWQgaW50byBlYWNoIGhlbGl4IGl0ZW1cbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSB0cmFuc2xhdGVYXz00MDBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVhfOiA0MDAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWV89LTM1MFxuICAgICAgICAgKi9cbiAgICAgICAgdHJhbnNsYXRlWV86IC0zNTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHJhbnNsYXRlWCB2YWx1ZSBnZXRzIGluY2x1ZGVkIGludG8gZWFjaCBoZWxpeCBpdGVtXG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcn0gdHJhbnNsYXRlWl89LTUwMDBcbiAgICAgICAgICovXG4gICAgICAgIHRyYW5zbGF0ZVpfOiAtNTAwMCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1cmwgZm9yIHRoZSBzdG9yZSB0byBsb2FkIHRoZSBkYXRhXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdXJsXz0nLi4vcmVzb3VyY2VzL2V4YW1wbGVzL2RhdGEvYWlfY29udGFjdHMuanNvbidcbiAgICAgICAgICovXG4gICAgICAgIHVybF86ICcuLi8uLi9yZXNvdXJjZXMvZXhhbXBsZXMvZGF0YS9haV9jb250YWN0cy5qc29uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBzdHlsZSAgIDoge30sXG4gICAgICAgICAgICB0YWJJbmRleDogJy0xJyxcbiAgICAgICAgICAgIGNuOiBbe1xuICAgICAgICAgICAgICAgIGNscyAgOiBbJ2NvbnRhaW5lciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnZ3JvdXAnXSxcbiAgICAgICAgICAgICAgICAgICAgY24gICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAnbWF0cml4M2QoMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgNDYxLCA0NTIuNSwgLTEwMDcwMCwgMSknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IE5lby5jbG9uZShtZS5kb21MaXN0ZW5lcnMsIHRydWUpO1xuXG4gICAgICAgIG1lW2l0ZW1zTW91bnRlZF0gPSBmYWxzZTtcbiAgICAgICAgbWVbbG9ja1doZWVsXSAgICA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChtZS5pbWFnZVNvdXJjZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgbWUuaW1hZ2VTb3VyY2UgPSBOZW8uY29uZmlnLnJlc291cmNlc1BhdGggKyAnZXhhbXBsZXMvJztcbiAgICAgICAgfVxuXG4gICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgIGNsaWNrOiBtZS5vbkNsaWNrLFxuICAgICAgICAgICAgd2hlZWw6IG1lLm9uTW91c2VXaGVlbCxcbiAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvYWQgZGF0YSBmb3IgdGhlIGV4YW1wbGUgY29sbGVjdGlvblxuICAgICAgICBpZiAoIShtZS5zdG9yZSBpbnN0YW5jZW9mIFN0b3JlKSkge1xuICAgICAgICAgICAgbWUubG9hZERhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgZmxpcHBlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEZsaXBwZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMuYXBwbHlJdGVtVHJhbnNpdGlvbnModGhpcy5yZWZyZXNoLCAxMDAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heEl0ZW0gY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TWF4SXRlbXModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHZhbHVlICYmIG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIG1lLmRlc3Ryb3lJdGVtcyh2YWx1ZSwgb2xkVmFsdWUgLSB2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKG9sZFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbW91bnRlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1vdW50ZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0TW91bnRlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5nZXRPZmZzZXRWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcGVyc3BlY3RpdmUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0UGVyc3BlY3RpdmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDoge1xuICAgICAgICAgICAgICAgICAgICBpZCAgIDogbWUudmRvbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiB2YWx1ZSArICdweCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZS51cGRhdGVDbG9uZVRyYW5zbGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdmFsdWUucmVnaXN0ZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHVybCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRVcmwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1lLnJlbmRlcmVkKSB7XG4gICAgICAgICAgICBtZS5kZXN0cm95SXRlbXMoKTtcbiAgICAgICAgICAgIG1lLmxvYWREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBhbmltYXRpb25UaW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrUGFyYW1cbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYXBwbHlJdGVtVHJhbnNpdGlvbnMoY2FsbGJhY2ssIGFuaW1hdGlvblRpbWUsIGNhbGxiYWNrUGFyYW0pIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSAnbmVvLXRyYW5zaXRpb24tJyArIGFuaW1hdGlvblRpbWUsXG4gICAgICAgICAgICB0aW1lb3V0SWQ7XG5cbiAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLnRyYW5zaXRpb25UaW1lb3V0cy5zcGxpY2UoMCwgbWUudHJhbnNpdGlvblRpbWVvdXRzLmxlbmd0aCk7XG5cbiAgICAgICAgaWYgKG1lLm1vdW50ZWQpIHtcbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDoge1xuICAgICAgICAgICAgICAgICAgICBpZCA6IG1lLmlkLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW2Nsc10sXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmU6IFtdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseShtZSwgW2NhbGxiYWNrUGFyYW1dKTtcblxuICAgICAgICAgICAgICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUobWUudHJhbnNpdGlvblRpbWVvdXRzLCB0aW1lb3V0SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGFzIDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkIDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogW2Nsc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGFuaW1hdGlvblRpbWUgKyAyMDApO1xuXG4gICAgICAgICAgICAgICAgbWUudHJhbnNpdGlvblRpbWVvdXRzLnB1c2godGltZW91dElkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGJlZm9yZUdldEl0ZW1UcGwoKSB7XG4gICAgICAgIHJldHVybiBOZW8uY2xvbmUodGhpcy5faXRlbVRwbCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGJlZm9yZSB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdldHMgY2hhbmdlZC5cbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBIZWxpeE1vZGVsLCB7XG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25DaGFuZ2U6IHRoaXMub25TZWxlY3Rpb25DaGFuZ2UsXG4gICAgICAgICAgICAgICAgc2NvcGUgICAgICAgICAgOiB0aGlzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBiZWZvcmUgdGhlIHN0b3JlIGNvbmZpZyBnZXRzIGNoYW5nZWQuXG4gICAgICogQHBhcmFtIHtOZW8uZGF0YS5TdG9yZXxudWxsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLmRhdGEuU3RvcmV8bnVsbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYmVmb3JlU2V0U3RvcmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZS5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvOiByZW1vdmUgdGhlIGlmIGNoZWNrIG9uY2UgYWxsIGRlbW9zIHVzZSBzdG9yZXMgKGluc3RlYWQgb2YgY29sbGVjdGlvbnMpXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIENsYXNzU3lzdGVtVXRpbC5iZWZvcmVTZXRJbnN0YW5jZSh2YWx1ZSwgU3RvcmUsIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgIDoge1xuICAgICAgICAgICAgICAgICAgICBsb2FkIDogbWUub25TdG9yZUxvYWQsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQgOiBtZS5vblNvcnQsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoQ29sbGVjdGlvbiwge1xuICAgICAgICAgICAga2V5UHJvcGVydHk6ICdpZCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgIDoge1xuICAgICAgICAgICAgICAgIHNvcnQgOiBtZS5vblNvcnQsXG4gICAgICAgICAgICAgICAgc2NvcGU6IG1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZSBhbiBvcGFjaXR5IGdyYWRpZW50IGJhc2VkIG9uIHRoZSBpdGVtIHJvdGF0aW9uIGFuZ2xlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZU9wYWNpdHkoaXRlbSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIG1heE9wYWNpdHkgICA9IG1lLm1heE9wYWNpdHksXG4gICAgICAgICAgICBtaW5PcGFjaXR5ICAgPSBtZS5taW5PcGFjaXR5LFxuICAgICAgICAgICAgZGVsdGFPcGFjaXR5ID0gbWF4T3BhY2l0eSAtIG1pbk9wYWNpdHksXG4gICAgICAgICAgICBhbmdsZSwgb3BhY2l0eSwgb3BhY2l0eUZhY3RvcjtcblxuICAgICAgICBpZiAoZGVsdGFPcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgICBvcGFjaXR5ID0gbWF4T3BhY2l0eTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFuZ2xlID0gaXRlbS5yb3RhdGlvbkFuZ2xlICUgMzYwO1xuXG4gICAgICAgICAgICB3aGlsZSAoYW5nbGUgPCAwKSB7XG4gICAgICAgICAgICAgICAgYW5nbGUgKz0gMzYwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aGlsZSAoYW5nbGUgPiAxODApIHtcbiAgICAgICAgICAgICAgICBhbmdsZSA9IDM2MCAtIGFuZ2xlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBub24gbGluZWFyIGRpc3RyaWJ1dGlvbiwgc2luY2UgdGhlIGFuZ2xlIGRvZXMgbm90IG1hdGNoIGRlbHRhIHRyYW5zbGF0ZVpcbiAgICAgICAgICAgIG9wYWNpdHlGYWN0b3IgPSAxIC0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMzYwKTtcblxuICAgICAgICAgICAgb3BhY2l0eSA9IG1pbk9wYWNpdHkgKyBkZWx0YU9wYWNpdHkgKiBvcGFjaXR5RmFjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9wYWNpdHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gZ2V0IGRpZmZlcmVudCBpdGVtLW1hcmt1cHNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVjb3JkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4XG4gICAgICogQHJldHVybnMge09iamVjdH0gdmRvbUl0ZW1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtKHZkb21JdGVtLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgdmRvbUl0ZW0uaWQgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKTtcblxuICAgICAgICB2ZG9tSXRlbS5jblswXS5pZCAgPSBtZS5nZXRJdGVtVm5vZGVJZChyZWNvcmRbbWUua2V5UHJvcGVydHldKSArICdfaW1nJztcbiAgICAgICAgdmRvbUl0ZW0uY25bMF0uc3JjID0gbWUuaW1hZ2VTb3VyY2UgKyBOZW8ubnMobWUuaW1hZ2VGaWVsZCwgZmFsc2UsIHJlY29yZCk7XG5cbiAgICAgICAgcmV0dXJuIHZkb21JdGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRJbmRleF0gdGhlIHN0YXJ0IGluZGV4IGZvciBjcmVhdGluZyBpdGVtcyxcbiAgICAgKiBlLmcuIGluY3JlYXNpbmcgbWF4SXRlbXMgb25seSBuZWVkcyB0byBjcmVhdGUgdGhlIG5ldyBvbmVzXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFZICAgICAgICA9IG1lLmRlbHRhWSxcbiAgICAgICAgICAgIGdyb3VwICAgICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgIGl0ZW1BbmdsZSAgICAgPSBtZS5pdGVtQW5nbGUsXG4gICAgICAgICAgICBtYXRyaXggICAgICAgID0gbWUubWF0cml4LFxuICAgICAgICAgICAgcmFkaXVzICAgICAgICA9IG1lLnJhZGl1cyxcbiAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgPSBtZS5yb3RhdGlvbkFuZ2xlLFxuICAgICAgICAgICAgdHJhbnNsYXRlWCAgICA9IG1lLnRyYW5zbGF0ZVgsXG4gICAgICAgICAgICB0cmFuc2xhdGVZICAgID0gbWUudHJhbnNsYXRlWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogICAgPSBtZS50cmFuc2xhdGVaLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gc3RhcnRJbmRleCB8fCAwLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICA9IE1hdGgubWluKG1lLm1heEl0ZW1zLCBtZS5zdG9yZS5pdGVtcy5sZW5ndGgpLFxuICAgICAgICAgICAgYW5nbGUsIGl0ZW0sIG1hdHJpeEl0ZW1zLCB0cmFuc2Zvcm1TdHlsZSwgdmRvbUl0ZW0sIGMsIHMsIHgsIHksIHo7XG5cbiAgICAgICAgaWYgKCFtZS5tb3VudGVkKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5lcklkID0gbWUub24oJ21vdW50ZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudW4oJ21vdW50ZWQnLCBsaXN0ZW5lcklkKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWUuY3JlYXRlSXRlbXMoc3RhcnRJbmRleCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NyZWF0ZUl0ZW1zJywgbWUuaWQsIG1lLnN0b3JlKTtcblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBtZS5zdG9yZS5pdGVtc1tpXTtcblxuICAgICAgICAgICAgICAgIGFuZ2xlID0gLXJvdGF0aW9uQW5nbGUgKyBpICogaXRlbUFuZ2xlO1xuXG4gICAgICAgICAgICAgICAgcyA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgICAgICAgICAgYyA9IE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cbiAgICAgICAgICAgICAgICB4ID0gcmFkaXVzICogcyAtIDMwMCArIHRyYW5zbGF0ZVg7XG4gICAgICAgICAgICAgICAgeSA9IC00MDAgKyBhbmdsZSAqIGRlbHRhWSArIHRyYW5zbGF0ZVk7XG4gICAgICAgICAgICAgICAgeiA9IDk5ODAwICsgcmFkaXVzICogYyArIHRyYW5zbGF0ZVo7XG5cbiAgICAgICAgICAgICAgICBtYXRyaXhJdGVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgW2MsIDAsIC1zLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgWzAsIDEsICAwLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3MsIDAsICBjLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgW3gsIHksICB6LCAxXVxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICBpZiAoIW1hdHJpeCkge1xuICAgICAgICAgICAgICAgICAgICBtZS5tYXRyaXggPSBtYXRyaXggPSBOZW8uY3JlYXRlKE1hdHJpeCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IG1hdHJpeEl0ZW1zXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdHJpeC5pdGVtcyA9IG1hdHJpeEl0ZW1zO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0eWxlID0gbWF0cml4LmdldFRyYW5zZm9ybVN0eWxlKCk7XG5cbiAgICAgICAgICAgICAgICB2ZG9tSXRlbSA9IG1lLmNyZWF0ZUl0ZW0obWUuaXRlbVRwbCwgaXRlbSwgaSk7XG5cbiAgICAgICAgICAgICAgICBpdGVtLnJvdGF0aW9uQW5nbGUgID0gYW5nbGU7XG4gICAgICAgICAgICAgICAgaXRlbS50cmFuc2Zvcm1TdHlsZSA9IHRyYW5zZm9ybVN0eWxlO1xuXG4gICAgICAgICAgICAgICAgdmRvbUl0ZW0uIHN0eWxlID0gdmRvbUl0ZW0uc3R5bGUgfHwge307XG5cbiAgICAgICAgICAgICAgICB2ZG9tSXRlbS5zdHlsZS5vcGFjaXR5ICAgPSBtZS5jYWxjdWxhdGVPcGFjaXR5KGl0ZW0pO1xuICAgICAgICAgICAgICAgIHZkb21JdGVtLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0eWxlO1xuXG4gICAgICAgICAgICAgICAgZ3JvdXAuY24ucHVzaCh2ZG9tSXRlbSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lW2xvY2tXaGVlbF0gPSBmYWxzZTtcblxuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUodmRvbSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVbaXRlbXNNb3VudGVkXSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbWVbbG9ja1doZWVsXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGRlc3Ryb3lDbG9uZXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gbWUuc3RvcmUsXG4gICAgICAgICAgICBkZWx0YXMgICAgICAgPSBbXSxcbiAgICAgICAgICAgIHJlbW92ZURlbHRhcyA9IFtdLFxuICAgICAgICAgICAgaWQsIHJlY29yZDtcblxuICAgICAgICBpZiAobWUuY2xvbmVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWUuY2xvbmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZCAgICAgPSBtZS5nZXRJdGVtSWQoaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgcmVjb3JkID0gc3RvcmUuZ2V0KGlkKTtcblxuICAgICAgICAgICAgICAgIHJlY29yZC5leHBhbmRlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgZGVsdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpZCAgIDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgIDogcmVjb3JkLm9wYWNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJlY29yZC50cmFuc2Zvcm1TdHlsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZW1vdmVEZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkICAgIDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAncmVtb3ZlTm9kZSdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmNsb25lZEl0ZW1zID0gW107XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA6IHJlbW92ZURlbHRhc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCA2NTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRJbmRleF1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2Ftb3VudEl0ZW1zXVxuICAgICAqL1xuICAgIGRlc3Ryb3lJdGVtcyhzdGFydEluZGV4LCBhbW91bnRJdGVtcykge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBtZS5nZXRJdGVtc1Jvb3QoKS5jbi5zcGxpY2Uoc3RhcnRJbmRleCB8fCAwLCBhbW91bnRJdGVtcyB8fCBtZS5zdG9yZS5nZXRDb3VudCgpKTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW92ZXMgYSBjbG9uZSBvZiBhbiBpdGVtIHRvIHRoZSB0b3AgbGVmdCBjb3JuZXJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICovXG4gICAgZXhwYW5kSXRlbShpdGVtSWQpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgc3RvcmUgICAgICA9IG1lLnN0b3JlLFxuICAgICAgICAgICAgcmVjb3JkICAgICA9IHN0b3JlLmdldChpdGVtSWQpLFxuICAgICAgICAgICAgaW5kZXggICAgICA9IHN0b3JlLmluZGV4T2YoaXRlbUlkKSxcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgPSAhIXJlY29yZC5leHBhbmRlZCxcbiAgICAgICAgICAgIGdyb3VwICAgICAgPSBtZS5nZXRJdGVtc1Jvb3QoKSxcbiAgICAgICAgICAgIGl0ZW1WZG9tICAgPSBOZW8uY2xvbmUoZ3JvdXAuY25baW5kZXhdLCB0cnVlKTtcblxuICAgICAgICBtZS5kZXN0cm95Q2xvbmVzKCk7XG5cbiAgICAgICAgaWYgKGlzRXhwYW5kZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJlY29yZC5leHBhbmRlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGl0ZW1WZG9tLmlkID0gaXRlbVZkb20uaWQgKyAnX19jbG9uZSc7XG4gICAgICAgICAgICBpdGVtVmRvbS5zdHlsZS50cmFuc2Zvcm0gPSByZWNvcmQudHJhbnNmb3JtU3R5bGU7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoaXRlbVZkb20uY2xzLCAnbmVvLXRyYW5zaXRpb24tNjAwJyk7XG4gICAgICAgICAgICBkZWxldGUgaXRlbVZkb20udGFiSW5kZXg7XG5cbiAgICAgICAgICAgIGl0ZW1WZG9tLmNuWzBdLmlkID0gaXRlbVZkb20uY25bMF0uaWQgKyAnX19jbG9uZSc7XG5cbiAgICAgICAgICAgIGlmIChtZS5zaG93Q2xvbmVJbmZvKSB7XG4gICAgICAgICAgICAgICAgaXRlbVZkb20uY24ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGNscyAgICAgIDogWydjb250YWN0LW5hbWUnXSxcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiByZWNvcmQuZmlyc3RuYW1lICsgJyAnICsgcmVjb3JkLmxhc3RuYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIE5lby52ZG9tLkhlbHBlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGF1dG9Nb3VudCAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIHBhcmVudElkICAgOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICBwYXJlbnRJbmRleDogc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgICAgICAuLi5pdGVtVmRvbVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5jbG9uZWRJdGVtcy5wdXNoKGl0ZW1WZG9tKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgICA6IGl0ZW1WZG9tLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHkgIDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBtZS5nZXRDbG9uZVRyYW5zZm9ybSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0Q2xvbmVUcmFuc2Zvcm0oKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggPSAobWUub2Zmc2V0V2lkdGggIC0gMTM1MCkgLyAzLFxuICAgICAgICAgICAgdHJhbnNsYXRlWSA9IChtZS5vZmZzZXRIZWlnaHQgLSAxMzIwKSAvIDMsXG4gICAgICAgICAgICB0cmFuc2xhdGVaID0gMTAwNzAwICsgbWUucGVyc3BlY3RpdmUgLyAxLjU7XG5cbiAgICAgICAgcmV0dXJuICdtYXRyaXgzZCgxLDAsMCwwLDAsMSwwLDAsMCwwLDEsMCwnK3RyYW5zbGF0ZVgrJywnK3RyYW5zbGF0ZVkrJywnK3RyYW5zbGF0ZVorJywxKSc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdm5vZGVJZFxuICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9XG4gICAgICovXG4gICAgZ2V0SXRlbUlkKHZub2RlSWQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZub2RlSWQuc3BsaXQoJ19fJylbMV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHZkb20gbm9kZSBjb250YWluaW5nIHRoZSBoZWxpeCBpdGVtc1xuICAgICAqIEByZXR1cm5zIHtPYmplY3R9IHZkb21cbiAgICAgKi9cbiAgICBnZXRJdGVtc1Jvb3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJdGVtVm5vZGVJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pZCArICdfXycgKyBpZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW2RlbGF5PTEwMF1cbiAgICAgKi9cbiAgICBnZXRPZmZzZXRWYWx1ZXMoZGVsYXk9MTAwKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gICAgOiAncmVhZERvbScsXG4gICAgICAgICAgICAgICAgYXBwTmFtZSAgIDogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICB2bm9kZUlkICAgOiBtZS5pZCxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICdvZmZzZXRIZWlnaHQnLFxuICAgICAgICAgICAgICAgICAgICAnb2Zmc2V0V2lkdGgnXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBtZS5vZmZzZXRIZWlnaHQgPSBkYXRhLmF0dHJpYnV0ZXMub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIG1lLm9mZnNldFdpZHRoICA9IGRhdGEuYXR0cmlidXRlcy5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBkZWxheSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBsb2FkRGF0YSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGluc2lkZU5lbzogdHJ1ZSxcbiAgICAgICAgICAgIHVybCAgICAgIDogTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCA/IG1lLnVybCA6IG1lLnVybFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb24uZGF0YTtcbiAgICAgICAgICAgIG1lLmNyZWF0ZUl0ZW1zKCk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgZm9yIE5lby5YaHIucmVxdWVzdCcsIGVyciwgbWUuaWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKi9cbiAgICBtb3ZlVG9TZWxlY3RlZEl0ZW0oaXRlbUlkKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG4gICAgICAgIG1lLnJvdGF0aW9uQW5nbGUgPSBtZS5zdG9yZS5nZXQoaXRlbUlkKS5yb3RhdGlvbkFuZ2xlICsgbWUucm90YXRpb25BbmdsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25DbGljayhkYXRhKSB7XG4gICAgICAgIHRoaXMuZmlyZShkYXRhLmlkID09PSB0aGlzLmlkID8gJ2NvbnRhaW5lckNsaWNrJyA6ICdpdGVtQ2xpY2snLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRW50ZXIoZGF0YSkge1xuICAgICAgICBsZXQgaXRlbSA9IHRoaXMuc2VsZWN0aW9uTW9kZWwuaXRlbXNbMF07XG5cbiAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kSXRlbShpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25TcGFjZShkYXRhKSB7XG4gICAgICAgIHRoaXMuYXBwbHlJdGVtVHJhbnNpdGlvbnModGhpcy5tb3ZlVG9TZWxlY3RlZEl0ZW0sIDEwMDAsIHRoaXMuc2VsZWN0aW9uTW9kZWwuaXRlbXNbMF0gfHwgMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTW91c2VXaGVlbChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWCAgICAgICAgPSBkYXRhLmRlbHRhWCxcbiAgICAgICAgICAgIGRlbHRhWSAgICAgICAgPSBkYXRhLmRlbHRhWSxcbiAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgPSBtZS5yb3RhdGlvbkFuZ2xlLFxuICAgICAgICAgICAgdHJhbnNsYXRlWiAgICA9IG1lLnRyYW5zbGF0ZVo7XG5cbiAgICAgICAgaWYgKG1lLm1vdXNlV2hlZWxFbmFibGVkICYmIG1lW2xvY2tXaGVlbF0pIHtcbiAgICAgICAgICAgIG1lLl9yb3RhdGlvbkFuZ2xlID0gcm90YXRpb25BbmdsZSArIChkZWx0YVggKiBtZS5tb3VzZVdoZWVsRGVsdGFYKTsgLy8gc2lsZW50IHVwZGF0ZVxuICAgICAgICAgICAgbWUuX3RyYW5zbGF0ZVogICAgPSB0cmFuc2xhdGVaICAgICsgKGRlbHRhWSAqIG1lLm1vdXNlV2hlZWxEZWx0YVkpOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgIG1lLnJlZnJlc2goKTtcblxuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlUm90YXRpb24nLCAgIG1lLl9yb3RhdGlvbkFuZ2xlKTtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZVRyYW5zbGF0ZVonLCBtZS5fdHJhbnNsYXRlWik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nW119IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmdbXX0gb2xkVmFsdWVcbiAgICAgKi9cbiAgICBvblNlbGVjdGlvbkNoYW5nZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuZm9sbG93U2VsZWN0aW9uICYmIHZhbHVlICYmIHZhbHVlWzBdKSB7XG4gICAgICAgICAgICBtZS5hcHBseUl0ZW1UcmFuc2l0aW9ucyhtZS5tb3ZlVG9TZWxlY3RlZEl0ZW0sIDEwMCwgdmFsdWVbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIG9uU29ydCgpIHtcbiAgICAgICAgY29uc3QgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZVtpdGVtc01vdW50ZWRdID09PSB0cnVlKSB7Y29uc29sZS5sb2coJ3NvcnQnKTtcbiAgICAgICAgICAgIG1lLmFwcGx5SXRlbVRyYW5zaXRpb25zKG1lLnNvcnRJdGVtcywgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7QXJyYXl9IGl0ZW1zXG4gICAgICovXG4gICAgb25TdG9yZUxvYWQoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5nZXRJdGVtc1Jvb3QoKS5jbiA9IFtdOyAvLyBzaWxlbnQgdXBkYXRlXG4gICAgICAgIHRoaXMuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgcmVmcmVzaCgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICAgID0gW10sXG4gICAgICAgICAgICBkZWx0YVkgICAgICAgICA9IG1lLmRlbHRhWSxcbiAgICAgICAgICAgIGZsaXBwZWQgICAgICAgID0gbWUuZmxpcHBlZCxcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGl0ZW1BbmdsZSAgICAgID0gbWUuaXRlbUFuZ2xlLFxuICAgICAgICAgICAgbGVuICAgICAgICAgICAgPSBNYXRoLm1pbihtZS5tYXhJdGVtcywgbWUuc3RvcmUuZ2V0Q291bnQoKSksXG4gICAgICAgICAgICBtYXRyaXggICAgICAgICA9IG1lLm1hdHJpeCxcbiAgICAgICAgICAgIHJhZGl1cyAgICAgICAgID0gbWUucmFkaXVzLFxuICAgICAgICAgICAgcm90YXRpb25BbmdsZSAgPSBtZS5yb3RhdGlvbkFuZ2xlLFxuICAgICAgICAgICAgcm90YXRpb25NYXRyaXggPSBtZS5yb3RhdGlvbk1hdHJpeCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVggICAgID0gbWUudHJhbnNsYXRlWCxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVkgICAgID0gbWUudHJhbnNsYXRlWSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVogICAgID0gbWUudHJhbnNsYXRlWixcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgID0gbWUudmRvbSxcbiAgICAgICAgICAgIGFuZ2xlLCBpdGVtLCBvcGFjaXR5LCByb3RhdGVZLCB0cmFuc2Zvcm1TdHlsZSwgdmRvbUl0ZW0sIGMsIHMsIHgsIHksIHo7XG5cbiAgICAgICAgaWYgKGZsaXBwZWQpIHtcbiAgICAgICAgICAgIHJvdGF0ZVkgPSBNYXRyaXgucm90YXRlWSgxODAgKiBNYXRoLlBJIC8gMTgwKTtcblxuICAgICAgICAgICAgaWYgKCFyb3RhdGlvbk1hdHJpeCkge1xuICAgICAgICAgICAgICAgIG1lLnJvdGF0aW9uTWF0cml4ID0gcm90YXRpb25NYXRyaXggPSBOZW8uY3JlYXRlKE1hdHJpeCwge1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogcm90YXRlWVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3RhdGlvbk1hdHJpeC5pdGVtcyA9IHJvdGF0ZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgICAgIGl0ZW0gICAgID0gbWUuc3RvcmUuaXRlbXNbaW5kZXhdO1xuICAgICAgICAgICAgdmRvbUl0ZW0gPSB2ZG9tLmNuWzBdLmNuWzBdLmNuW2luZGV4XTtcblxuICAgICAgICAgICAgYW5nbGUgPSAtcm90YXRpb25BbmdsZSArIGluZGV4ICogaXRlbUFuZ2xlO1xuXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXG4gICAgICAgICAgICB4ID0gIC0zMDAgKyByYWRpdXMgKiBzICAgICArIHRyYW5zbGF0ZVg7XG4gICAgICAgICAgICB5ID0gIC00MDAgKyBhbmdsZSAqIGRlbHRhWSArIHRyYW5zbGF0ZVk7XG4gICAgICAgICAgICB6ID0gOTk4MDAgKyByYWRpdXMgKiBjICAgICArIHRyYW5zbGF0ZVo7XG5cbiAgICAgICAgICAgIG1hdHJpeC5pdGVtcyA9IFtcbiAgICAgICAgICAgICAgICBbYywgMCwgLXMsIDBdLFxuICAgICAgICAgICAgICAgIFswLCAxLCAgMCwgMF0sXG4gICAgICAgICAgICAgICAgW3MsIDAsICBjLCAwXSxcbiAgICAgICAgICAgICAgICBbeCwgeSwgIHosIDFdXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBpZiAoZmxpcHBlZCkge1xuICAgICAgICAgICAgICAgIG1hdHJpeCA9IHJvdGF0aW9uTWF0cml4LngobWF0cml4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJhbnNmb3JtU3R5bGUgPSBtYXRyaXguZ2V0VHJhbnNmb3JtU3R5bGUoKTtcbiAgICAgICAgICAgIG1hdHJpeC5kZXN0cm95KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgOiBhbmdsZSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBvcGFjaXR5ID0gbWUuY2FsY3VsYXRlT3BhY2l0eShpdGVtKTtcbiAgICAgICAgICAgIGl0ZW0ub3BhY2l0eSA9IG9wYWNpdHk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHkgICAgICAgOiBvcGFjaXR5LFxuICAgICAgICAgICAgICAgIHJvdGF0aW9uQW5nbGUgOiBhbmdsZSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHlsZTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQgICA6IG1lLmdldEl0ZW1Wbm9kZUlkKGl0ZW1bbWUua2V5UHJvcGVydHldKSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5ICA6IG9wYWNpdHksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtU3R5bGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgYWN0aW9uIDogJ3VwZGF0ZURvbScsXG4gICAgICAgICAgICBhcHBOYW1lOiBtZS5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICByZWZyZXNoSWZNb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5tb3VudGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgc29ydEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZGVsdGFzICAgPSBbXSxcbiAgICAgICAgICAgIHBhcmVudElkID0gbWUudmRvbS5jblswXS5jblswXS5pZCxcbiAgICAgICAgICAgIGkgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgID0gTWF0aC5taW4obWUubWF4SXRlbXMsIG1lLnN0b3JlLmdldENvdW50KCkpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBhY3Rpb24gIDogJ21vdmVOb2RlJyxcbiAgICAgICAgICAgICAgICBpZCAgICAgIDogbWUuZ2V0SXRlbVZub2RlSWQobWUuc3RvcmUuaXRlbXNbaV1bbWUua2V5UHJvcGVydHldKSxcbiAgICAgICAgICAgICAgICBpbmRleCAgIDogaSxcbiAgICAgICAgICAgICAgICBwYXJlbnRJZDogcGFyZW50SWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgTmVvLmN1cnJlbnRXb3JrZXIucHJvbWlzZU1lc3NhZ2UoJ21haW4nLCB7XG4gICAgICAgICAgICBhY3Rpb24gOiAndXBkYXRlRG9tJyxcbiAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICBkZWx0YXMgOiBkZWx0YXNcbiAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBtZS5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICB1cGRhdGVDbG9uZVRyYW5zbGF0ZSgpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBhZnRlckRlbHRhcyAgPSBbXSxcbiAgICAgICAgICAgIGRlbHRhcyAgICAgICA9IFtdLFxuICAgICAgICAgICAgdGltZW91dElkLCB0cmFuc2Zvcm07XG5cbiAgICAgICAgaWYgKG1lLmNsb25lZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IG1lLmdldENsb25lVHJhbnNmb3JtKHRydWUpO1xuXG4gICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaXRlbSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuY2xvbmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkIDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlOiBbJ25lby10cmFuc2l0aW9uLTYwMCddXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhZnRlckRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQgOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZCAgIDogWyduZW8tdHJhbnNpdGlvbi02MDAnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogW11cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE5lby5jdXJyZW50V29ya2VyLnByb21pc2VNZXNzYWdlKCdtYWluJywge1xuICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgIGFwcE5hbWU6IG1lLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgTmVvQXJyYXkucmVtb3ZlKG1lLnRyYW5zaXRpb25UaW1lb3V0cywgdGltZW91dElkKTtcblxuICAgICAgICAgICAgICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTmFtZTogbWUuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhcyA6IGFmdGVyRGVsdGFzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG5cbiAgICAgICAgICAgICAgICBtZS50cmFuc2l0aW9uVGltZW91dHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IGNmZyA9IHtlbnVtZXJhYmxlOiBmYWxzZSwgdmFsdWU6IEhlbGl4LnByb3RvdHlwZS5yZWZyZXNoSWZNb3VudGVkfTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSGVsaXgucHJvdG90eXBlLCB7XG4gICAgYWZ0ZXJTZXREZWx0YVkgICAgICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRJdGVtQW5nbGUgICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRNYXhPcGFjaXR5ICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRNaW5PcGFjaXR5ICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRSYWRpdXMgICAgICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRSb3RhdGlvbkFuZ2xlOiBjZmcsXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVYICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVZICAgOiBjZmcsXG4gICAgYWZ0ZXJTZXRUcmFuc2xhdGVaICAgOiBjZmdcbn0pO1xuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeCk7XG5cbmV4cG9ydCB7SGVsaXggYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBUb29sYmFyICAgZnJvbSAnLi9Ub29sYmFyLm1qcyc7XG5cbi8qKlxuICogQW4gZXh0ZW5kZWQgQ29udGFpbmVyIHN1cHBvcnRpbmcgbXVsdGlwbGUgZG9ja2VkIGhlYWRlciB0b29sYmFyc1xuICogQGNsYXNzIE5lby5jb250YWluZXIuUGFuZWxcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBQYW5lbCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuUGFuZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuUGFuZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGFuZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncGFuZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcGFuZWwnLCAnbmVvLWNvbnRhaW5lciddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBjb250YWluZXJDb25maWc9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgY29udGFpbmVyQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBoZWFkZXJEZWZhdWx0cz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXJEZWZhdWx0czogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBoZWFkZXJzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlcnM6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGl0ZW1zPXtudHlwZTogJ3Zib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgICAgICAgKi9cbiAgICAgICAgX2xheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHZlcnRpY2FsSGVhZGVyc0ZpcnN0PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB2ZXJ0aWNhbEhlYWRlcnNGaXJzdDogZmFsc2VcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIGhmID0gY29uZmlnICYmIGNvbmZpZy52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gdHJ1ZSB8fCBtZS52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gdHJ1ZTtcblxuICAgICAgICBpZiAoaGYpIHtcbiAgICAgICAgICAgIG1lLmxheW91dCA9IHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2hib3gnLFxuICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaGYgICAgICAgICAgICAgICAgICAgPSBtZS52ZXJ0aWNhbEhlYWRlcnNGaXJzdCA9PT0gZmFsc2UsXG4gICAgICAgICAgICBoZWFkZXJzICAgICAgICAgICAgICA9IG1lLmhlYWRlcnMgfHwgW10sXG4gICAgICAgICAgICBib3R0b21IZWFkZXJzICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydib3R0b20nOiAncmlnaHQnKX0pLFxuICAgICAgICAgICAgbGVmdEhlYWRlcnMgICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8nbGVmdCcgIDogJ3RvcCcpfSksXG4gICAgICAgICAgICByaWdodEhlYWRlcnMgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydyaWdodCcgOiAnYm90dG9tJyl9KSxcbiAgICAgICAgICAgIHRvcEhlYWRlcnMgICAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J3RvcCcgICA6ICdsZWZ0Jyl9KSxcbiAgICAgICAgICAgIGhhc0hvcml6b250YWxIZWFkZXJzID0gYm90dG9tSGVhZGVycy5sZW5ndGggPiAwIHx8IHRvcEhlYWRlcnMgIC5sZW5ndGggPiAwLFxuICAgICAgICAgICAgaGFzVmVydGljYWxIZWFkZXJzICAgPSBsZWZ0SGVhZGVycyAgLmxlbmd0aCA+IDAgfHwgcmlnaHRIZWFkZXJzLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICBpdGVtcyAgICAgICAgICAgICAgICA9IG1lLml0ZW1zLFxuICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zICAgICAgPSBbXSxcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMgICAgICAgID0gW10sXG4gICAgICAgICAgICBjb25maWc7XG5cbiAgICAgICAgaWYgKGhlYWRlcnMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgTmVvLmVycm9yKCdQYW5lbCB3aXRob3V0IGhlYWRlcnMsIHBsZWFzZSB1c2UgYSBDb250YWluZXIgaW5zdGVhZCcsIG1lLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRvcEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGhhc1ZlcnRpY2FsSGVhZGVycyAmJiAoaGYgJiYgaGFzSG9yaXpvbnRhbEhlYWRlcnMgfHwgIWhmICYmIGhhc0hvcml6b250YWxIZWFkZXJzKSkge1xuICAgICAgICAgICAgbGVmdEhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICA6IDEsXG4gICAgICAgICAgICAgICAgaXRlbXMgICAgICAgOiBpdGVtcyxcbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IG1lLml0ZW1EZWZhdWx0cyxcbiAgICAgICAgICAgICAgICAuLi5tZS5jb250YWluZXJDb25maWcgfHwge31cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGhvcml6b250YWxJdGVtcy5wdXNoKHsuLi5tZS5oZWFkZXJEZWZhdWx0cywgLi4uY29uZmlnfSk7XG5cbiAgICAgICAgICAgIHJpZ2h0SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbnR5cGUgOiAnY29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBpdGVtcyA6IGhvcml6b250YWxJdGVtcyxcbiAgICAgICAgICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6IChoZiA/ICdoYm94JyA6ICd2Ym94JyksXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgIDogMSxcbiAgICAgICAgICAgICAgICBpdGVtcyAgICAgICA6IGl0ZW1zLFxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czogbWUuaXRlbURlZmF1bHRzLFxuICAgICAgICAgICAgICAgIC4uLm1lLmNvbnRhaW5lckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKHsuLi5tZS5oZWFkZXJEZWZhdWx0cywgLi4uY29uZmlnfSk7XG4gICAgICAgIH1cblxuICAgICAgICBib3R0b21IZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgIHZlcnRpY2FsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lLml0ZW1zID0gdmVydGljYWxJdGVtcztcblxuICAgICAgICBtZS5pdGVtRGVmYXVsdHMgPSBudWxsO1xuXG4gICAgICAgIHN1cGVyLmNyZWF0ZUl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaGVhZGVyIHRoZSBoZWFkZXIgY29uZmlnXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikge1xuICAgICAgICBsZXQgY29uZmlnID0ge1xuICAgICAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGhlYWRlci50ZXh0KSB7XG4gICAgICAgICAgICBjb25maWcuaXRlbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLXBhbmVsLWhlYWRlci10ZXh0JywgJ25lby1sYWJlbCddLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogaGVhZGVyLnRleHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBkZWxldGUgaGVhZGVyLnRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3N1bWluZyBhbGwgbGFiZWxzIGluc2lkZSBhIFBhbmVsIEhlYWRlciBhcmUgbWVhbnQgdG8gYmUgdGl0bGVzIC0+IGxvb2sgdGhlIHNhbWUgd2F5XG4gICAgICAgIGlmIChOZW8uaXNBcnJheShoZWFkZXIuaXRlbXMpKSB7XG4gICAgICAgICAgICBoZWFkZXIuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5udHlwZSA9PT0gJ2xhYmVsJykge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNscyA9IFsnbmVvLXBhbmVsLWhlYWRlci10ZXh0JywgJ25lby1sYWJlbCddO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsuLi5jb25maWcsIC4uLmhlYWRlcn07XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhQYW5lbCk7XG5cbmV4cG9ydCB7UGFuZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFZpZXdwb3J0IGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5WaWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5WaWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSd2aWV3cG9ydCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICd2aWV3cG9ydCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0cnVlIGFwcGxpZXMgJ25lby1ib2R5LXZpZXdwb3J0JyB0byB0aGUgZG9jdW1lbnQuYm9keVxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBhcHBseUJvZHlDbHM9dHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgYXBwbHlCb2R5Q2xzOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby12aWV3cG9ydCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXZpZXdwb3J0J11cbiAgICB9fVxuXG4gICAgb25Db25zdHJ1Y3RlZCgpIHtcbiAgICAgICAgc3VwZXIub25Db25zdHJ1Y3RlZCgpO1xuXG4gICAgICAgIGlmICh0aGlzLmFwcGx5Qm9keUNscykge1xuICAgICAgICAgICAgTmVvLm1haW4uRG9tQWNjZXNzLmFwcGx5Qm9keUNscyh7XG4gICAgICAgICAgICAgICAgYXBwTmFtZTogdGhpcy5hcHBOYW1lLFxuICAgICAgICAgICAgICAgIGNscyAgICA6IFsnbmVvLWJvZHktdmlld3BvcnQnXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFZpZXdwb3J0KTtcblxuZXhwb3J0IHtWaWV3cG9ydCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTnVtYmVyIGZyb20gJy4vTnVtYmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlJhbmdlXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5OdW1iZXJcbiAqL1xuY2xhc3MgUmFuZ2UgZXh0ZW5kcyBOdW1iZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5SYW5nZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUmFuZ2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncmFuZ2VmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdyYW5nZWZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRydWUgc2hvd3MgYSBjbGVhciB0cmlnZ2VyIGluIGNhc2UgdGhlIGZpZWxkIGhhcyBhIG5vbiBlbXB0eSB2YWx1ZS5cbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gY2xlYXJhYmxlPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjbGVhcmFibGU6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1yYW5nZWZpZWxkJywnbmVvLXRleHRmaWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXJhbmdlZmllbGQnLCAnbmVvLXRleHRmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWUgZm9yIHRoZSBpbnB1dFR5cGVfIHRleHRmaWVsZCBjb25maWdcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGU9J3JhbmdlJ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5wdXRUeXBlOiAncmFuZ2UnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IHRpY2ttYXJrc189W11cbiAgICAgICAgICovXG4gICAgICAgIHRpY2ttYXJrc186IFtdLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlSW5wdXRFdmVudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlSW5wdXRFdmVudCA6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZXMgdGhlIGZpZWxkLk51bWJlciBidXR0b25zXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHVzZUlucHV0RXZlbnQ9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHVzZVNwaW5CdXR0b25zOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IG1lLmRvbUxpc3RlbmVycyxcbiAgICAgICAgICAgIGlucHV0RWwgICAgICA9IG1lLnZkb20uY25bMV07XG5cbiAgICAgICAgaWYgKG1lLnVzZUlucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICBmbiAgICA6IG1lLm9uSW5wdXRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgaWQgICAgOiBtZS52ZG9tLmNuWzFdLmlkLFxuICAgICAgICAgICAgICAgICAgICBzY29wZSA6IG1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lLmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0RWwuY2xzID0gWyduZW8tcmFuZ2VmaWVsZC1pbnB1dCddOyAvLyByZXBsYWNlIG5lby10ZXh0ZmllbGQtaW5wdXRcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHRpY2ttYXJrcyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VGlja21hcmtzKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCd1cGRhdGVUaWNrbWFya3MnKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFJhbmdlKTtcblxuZXhwb3J0IHtSYW5nZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgICAgZnJvbSAnLi9Nb2RlbC5tanMnO1xuaW1wb3J0IE5lb0FycmF5IGZyb20gJy4uL3V0aWwvQXJyYXkubWpzJztcblxuLyoqXG4gKiBBIHNlbGVjdGlvbiBtb2RlbCBpbnRlbmRlZCB0byB1c2UgZm9yIE5lby5jb21wb25lbnQuSGVsaXhcbiAqIEBjbGFzcyBOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgSGVsaXhNb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5IZWxpeE1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLkhlbGl4TW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLWhlbGl4bW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLWhlbGl4bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB0byBzdGF5IGluIHRoZSBzYW1lIGNvbHVtbiB3aGVuIG5hdmlnYXRpbmcgd2l0aCB0aGUgdXAgYW5kIGRvd24ga2V5cyxcbiAgICAgICAgICogb3RoZXJ3aXNlIHlvdSB3aWxsIG5hdmlnYXRlIHRvIHRoZSBuZXh0IC8gcHJldiBjb2x1bW4gd2hlbiBtb3Zpbmcgb3V0XG4gICAgICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IHN0YXlJbkNvbHVtbj1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgc3RheUluQ29sdW1uOiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0byBub3QgYXBwbHkgYSBkb21MaXN0ZW5lclxuICAgICAqL1xuICAgIGFkZERvbUxpc3RlbmVyKCkge31cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgb25Db250YWluZXJDbGljaygpIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIG9sZEl0ZW1zID0gWy4uLm1lLml0ZW1zXSxcbiAgICAgICAgICAgIGRlbHRhcyAgID0gW107XG5cbiAgICAgICAgbWUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGRlbHRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbSksXG4gICAgICAgICAgICAgICAgY2xzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZCAgIDogW10sXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtcy5zcGxpY2UoMCwgbWUuaXRlbXMubGVuZ3RoKTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uSXRlbUNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGkgICAgPSAwLFxuICAgICAgICAgICAgbGVuICA9IGRhdGEucGF0aC5sZW5ndGgsXG4gICAgICAgICAgICB2aWV3ID0gdGhpcy52aWV3LFxuICAgICAgICAgICAga2V5O1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhLnBhdGhbaV0uY2xzLmluY2x1ZGVzKCduZW8taGVsaXgtaXRlbScpKSB7XG4gICAgICAgICAgICAgICAga2V5ID0gdmlldy5nZXRJdGVtSWQoZGF0YS5wYXRoW2ldLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChrZXkpO1xuXG4gICAgICAgICAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogdmlldy5zdG9yZS5nZXQoa2V5KVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duRG93bihkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkxlZnQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5Um93KDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbktleURvd25VcChkYXRhKSB7XG4gICAgICAgIHRoaXMub25OYXZLZXlDb2x1bW4oLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXA9MVxuICAgICAqL1xuICAgIG9uTmF2S2V5Q29sdW1uKHN0ZXA9MSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgc2VsZWN0ZWQgICAgID0gbWUuaXRlbXNbMF0sXG4gICAgICAgICAgICBjb3VudFJlY29yZHMgPSBzdG9yZS5nZXRDb3VudCgpLFxuICAgICAgICAgICAgaXRlbXNQZXJSb3cgID0gcGFyc2VJbnQoMzYwIC8gdmlldy5pdGVtQW5nbGUpLFxuICAgICAgICAgICAgc3RheUluQ29sdW1uID0gbWUuc3RheUluQ29sdW1uLFxuICAgICAgICAgICAgaW5kZXgsIHJlY29yZDtcblxuICAgICAgICBzdGVwICo9IGl0ZW1zUGVyUm93O1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICAgICAgaW5kZXggPSBzdG9yZS5pbmRleE9mKHNlbGVjdGVkKSArIHN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXlJbkNvbHVtbikge1xuICAgICAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCAoY291bnRSZWNvcmRzIC0gaXRlbXNQZXJSb3cpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggKz0gaXRlbXNQZXJSb3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPj0gY291bnRSZWNvcmRzKSB7XG4gICAgICAgICAgICBpZiAoIXN0YXlJbkNvbHVtbikge1xuICAgICAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPj0gaXRlbXNQZXJSb3cpIHtcbiAgICAgICAgICAgICAgICBpbmRleCAtPSBpdGVtc1BlclJvdztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGVwPTFcbiAgICAgKi9cbiAgICBvbk5hdktleVJvdyhzdGVwPTEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2aWV3ICAgICAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgICAgID0gdmlldy5zdG9yZSxcbiAgICAgICAgICAgIHNlbGVjdGVkICAgICA9IG1lLml0ZW1zWzBdLFxuICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgIGluZGV4LCByZWNvcmQ7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpbmRleCA9IHN0b3JlLmluZGV4T2Yoc2VsZWN0ZWQpICsgc3RlcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gY291bnRSZWNvcmRzIC0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA+PSBjb3VudFJlY29yZHMpIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlY29yZCA9IHN0b3JlLmdldEF0KGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QocmVjb3JkW3N0b3JlLmtleVByb3BlcnR5XSk7XG5cbiAgICAgICAgdmlldy5maXJlKCdzZWxlY3QnLCB7XG4gICAgICAgICAgICByZWNvcmQ6IHJlY29yZFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgc3VwZXIucmVnaXN0ZXIoY29tcG9uZW50KTtcblxuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICB2aWV3Lm9uKHtcbiAgICAgICAgICAgIGNvbnRhaW5lckNsaWNrOiBtZS5vbkNvbnRhaW5lckNsaWNrLFxuICAgICAgICAgICAgaXRlbUNsaWNrICAgICA6IG1lLm9uSXRlbUNsaWNrLFxuICAgICAgICAgICAgc2NvcGUgICAgICAgICA6IG1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkRvd24nICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blVwJyAgICAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaXRlbUlkXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbdG9nZ2xlU2VsZWN0aW9uPXRydWVdXG4gICAgICovXG4gICAgc2VsZWN0KGl0ZW1JZCwgdG9nZ2xlU2VsZWN0aW9uPXRydWUpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBpc1NlbGVjdGVkID0gdG9nZ2xlU2VsZWN0aW9uID09PSBmYWxzZSA/IGZhbHNlIDogbWUuaXRlbXMuaW5jbHVkZXMoaXRlbUlkKSxcbiAgICAgICAgICAgIG9sZEl0ZW1zICAgPSBbLi4ubWUuaXRlbXNdLFxuICAgICAgICAgICAgZGVsdGFzICAgICA9IFtdO1xuXG4gICAgICAgIGlmIChtZS5zaW5nbGVTZWxlY3QpIHtcbiAgICAgICAgICAgIG1lLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgIT09IGl0ZW1JZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbSksXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGQgICA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZTogWyduZW8tc2VsZWN0ZWQnXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuaXRlbXMuc3BsaWNlKDAsIG1lLml0ZW1zLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBkZWx0YXMucHVzaCh7XG4gICAgICAgICAgICBpZCA6IHZpZXcuZ2V0SXRlbVZub2RlSWQoaXRlbUlkKSxcbiAgICAgICAgICAgIGNsczoge1xuICAgICAgICAgICAgICAgIGFkZCAgIDogaXNTZWxlY3RlZCA/IFtdIDogWyduZW8tc2VsZWN0ZWQnXSxcbiAgICAgICAgICAgICAgICByZW1vdmU6IGlzU2VsZWN0ZWQgPyBbJ25lby1zZWxlY3RlZCddIDogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgTmVvQXJyYXlbaXNTZWxlY3RlZCA/ICdyZW1vdmUnIDogJ2FkZCddKG1lLml0ZW1zLCBpdGVtSWQpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3QnLCBpdGVtSWQsIGlzU2VsZWN0ZWQsIG1lLml0ZW1zKTtcblxuICAgICAgICBOZW8uY3VycmVudFdvcmtlci5wcm9taXNlTWVzc2FnZSgnbWFpbicsIHtcbiAgICAgICAgICAgIGFjdGlvbiA6ICd1cGRhdGVEb20nLFxuICAgICAgICAgICAgYXBwTmFtZTogdmlldy5hcHBOYW1lLFxuICAgICAgICAgICAgZGVsdGFzIDogZGVsdGFzXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgbWUuZmlyZSgnc2VsZWN0aW9uQ2hhbmdlJywgbWUuaXRlbXMsIG9sZEl0ZW1zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duRG93bicgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duVXAnICAgICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoSGVsaXhNb2RlbCk7XG5cbmV4cG9ydCB7SGVsaXhNb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi9jb3JlL0Jhc2UubWpzJztcblxuLyoqXG4gKiBVdGlsaXR5IGNsYXNzIGZvciBNYXRyaXggYmFzZWQgY2FsY3VsYXRpb25zXG4gKiBAY2xhc3MgTmVvLnV0aWwuTWF0cml4XG4gKiBAZXh0ZW5kcyBOZW8uY29yZS5CYXNlXG4gKi9cbmNsYXNzIE1hdHJpeCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8udXRpbC5NYXRyaXgnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby51dGlsLk1hdHJpeCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheXxudWxsfSBpdGVtc189bnVsbFxuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtc186IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCAoaSxqKSBvZiB0aGUgbWF0cml4XG4gICAgICogQHBhcmFtIGlcbiAgICAgKiBAcGFyYW0galxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEVsZW1lbnQoaSwgaikge1xuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLml0ZW1zO1xuXG4gICAgICAgIGlmIChpIDwgMSB8fCBpID4gaXRlbXMubGVuZ3RoIHx8IGogPCAxIHx8IGogPiBpdGVtc1swXS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zW2kgLSAxXVtqIC0gMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2hvcnRjdXQgZm9yIGdldEVsZW1lbnRcbiAgICAgKi9cbiAgICBlKGksIGopIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudChpLCBqKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgbXVsdGlwbHlpbmcgdGhlIG1hdHJpeCBmcm9tIHRoZSByaWdodCBieSB0aGUgYXJndW1lbnQuXG4gICAgICogQHBhcmFtIG1hdHJpeFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIG11bHRpcGx5KG1hdHJpeCkge1xuICAgICAgICBsZXQgbWUgICAgPSB0aGlzLFxuICAgICAgICAgICAgTSAgICAgPSBtYXRyaXguaXRlbXMgfHwgbWF0cml4LFxuICAgICAgICAgICAgaXRlbXMgPSBtZS5pdGVtcyxcbiAgICAgICAgICAgIG5pICAgID0gaXRlbXMubGVuZ3RoLFxuICAgICAgICAgICAga2kgICAgPSBuaSxcbiAgICAgICAgICAgIGtqICAgID0gTVswXS5sZW5ndGgsXG4gICAgICAgICAgICBjb2xzICA9IGl0ZW1zWzBdLmxlbmd0aCxcbiAgICAgICAgICAgIGVscyAgID0gW10sXG4gICAgICAgICAgICBjLCBpLCBqLCBuYywgbmosIHN1bTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBpICAgICAgPSBraSAtIG5pO1xuICAgICAgICAgICAgZWxzW2ldID0gW107XG4gICAgICAgICAgICBuaiAgICAgPSBrajtcblxuICAgICAgICAgICAgZG8geyBqID0ga2ogLSBuajtcbiAgICAgICAgICAgICAgICBzdW0gPSAwO1xuICAgICAgICAgICAgICAgIG5jICA9IGNvbHM7XG5cbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBjb2xzIC0gbmM7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBpdGVtc1tpXVtjXSAqIE1bY11bal07XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAoLS1uYyk7XG4gICAgICAgICAgICAgICAgZWxzW2ldW2pdID0gc3VtO1xuICAgICAgICAgICAgfSB3aGlsZSAoLS1uaik7XG4gICAgICAgIH0gd2hpbGUgKC0tbmkpO1xuXG4gICAgICAgIG1hdHJpeC5pdGVtcyA9IGVscztcblxuICAgICAgICByZXR1cm4gbWF0cml4O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNob3J0Y3V0IGZvciBtdWx0aXBseVxuICAgICAqL1xuICAgIHgobWF0cml4KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm11bHRpcGx5KG1hdHJpeCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIHN0YXRpYyByb3RhdGVYKHQpIHtcbiAgICAgICAgbGV0IGMgPSBNYXRoLmNvcyh0KSxcbiAgICAgICAgICAgIHMgPSBNYXRoLnNpbih0KTtcblxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgWzEsIDAsICAwLCAwXSxcbiAgICAgICAgICAgIFswLCBjLCAtcywgMF0sXG4gICAgICAgICAgICBbMCwgcywgIGMsIDBdLFxuICAgICAgICAgICAgWzAsIDAsICAwLCAxXVxuICAgICAgICBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcm90YXRlWSh0KSB7XG4gICAgICAgIGxldCBjID0gTWF0aC5jb3ModCksXG4gICAgICAgICAgICBzID0gTWF0aC5zaW4odCk7XG5cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFtjLCAwLCAtcywgMF0sXG4gICAgICAgICAgICBbMCwgMSwgIDAsIDBdLFxuICAgICAgICAgICAgW3MsIDAsICBjLCAwXSxcbiAgICAgICAgICAgIFswLCAwLCAgMCwgMV1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgc3RhdGljIHJvdGF0ZVoodCkge1xuICAgICAgICBsZXQgYyA9IE1hdGguY29zKHQpLFxuICAgICAgICAgICAgcyA9IE1hdGguc2luKHQpO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbYywgLXMsIDAsIDBdLFxuICAgICAgICAgICAgW3MsICBjLCAwLCAwXSxcbiAgICAgICAgICAgIFswLCAgMCwgMSwgMF0sXG4gICAgICAgICAgICBbMCwgIDAsIDAsIDFdXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRUcmFuc2Zvcm1TdHlsZSgpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHAgID0gMTAsIC8vIHByZWNpc2lvblxuICAgICAgICAgICAgcztcblxuICAgICAgICBzICA9ICdtYXRyaXgzZCgnO1xuICAgICAgICBzICs9IG1lLmUoMSwxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgxLDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDEsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoMSw0KS50b0ZpeGVkKHApICsgJywnO1xuICAgICAgICBzICs9IG1lLmUoMiwxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgyLDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDIsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoMiw0KS50b0ZpeGVkKHApICsgJywnO1xuICAgICAgICBzICs9IG1lLmUoMywxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSgzLDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDMsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoMyw0KS50b0ZpeGVkKHApICsgJywnO1xuICAgICAgICBzICs9IG1lLmUoNCwxKS50b0ZpeGVkKHApICsgJywnICsgbWUuZSg0LDIpLnRvRml4ZWQocCkgKyAnLCcgKyBtZS5lKDQsMykudG9GaXhlZChwKSArICcsJyArIG1lLmUoNCw0KS50b0ZpeGVkKHApO1xuICAgICAgICBzICs9ICcpJztcblxuICAgICAgICByZXR1cm4gcztcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1hdHJpeCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hdHJpeDsiXSwic291cmNlUm9vdCI6IiJ9