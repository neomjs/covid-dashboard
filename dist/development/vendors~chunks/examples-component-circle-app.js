self["webpackChunk"](["vendors~chunks/examples-component-circle-app"],{

/***/ "./node_modules/neo.mjs/examples/component/circle/MainContainer.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/circle/MainContainer.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/button/Base.mjs */ "./node_modules/neo.mjs/src/button/Base.mjs");
/* harmony import */ var _src_component_Circle_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/component/Circle.mjs */ "./node_modules/neo.mjs/src/component/Circle.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");





/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        layout   : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module    :  _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText : 'height',
            listeners : {change: me.onConfigChange.bind(me, 'height')},
            maxValue  : 800,
            minValue  : 200,
            stepSize  : 1,
            value     : me.exampleComponent.height
        }, {
            module    :  _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText : 'innerRadius',
            listeners : {change: me.onConfigChange.bind(me, 'innerRadius')},
            maxValue  : 150,
            minValue  : 30,
            stepSize  : 1,
            value     : me.exampleComponent.innerRadius
        }, {
            module   : _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText: 'itemSize',
            listeners: {change: me.onConfigChange.bind(me, 'itemSize')},
            maxValue : 70,
            minValue : 20,
            stepSize : 1,
            value    : me.exampleComponent.itemSize
        }, {
            module   : _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText: 'maxItems',
            listeners: {change: me.onConfigChange.bind(me, 'maxItems')},
            maxValue : 15,
            minValue : 1,
            stepSize : 1,
            value    : me.exampleComponent.maxItems
        }, {
            module    :  _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            id        : me.id + '__' + 'rotateX',
            labelText : 'rotateX',
            listeners : {change: me.onConfigChange.bind(me, 'rotateX')},
            maxValue  : 180,
            minValue  : -180,
            stepSize  : 1,
            value     : me.exampleComponent.rotateX
        }, {
            module    :  _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            id        : me.id + '__' + 'rotateY',
            labelText : 'rotateY',
            listeners : {change: me.onConfigChange.bind(me, 'rotateY')},
            maxValue  : 180,
            minValue  : -180,
            stepSize  : 1,
            value     : me.exampleComponent.rotateY
        }, {
            module    :  _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            id        : me.id + '__' + 'rotateZ',
            labelText : 'rotateZ',
            listeners : {change: me.onConfigChange.bind(me, 'rotateZ')},
            maxValue  : 360,
            minValue  : 0,
            stepSize  : 1,
            value     : me.exampleComponent.rotateY
        }, {
            module    :  _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            labelText : 'width',
            listeners : {change: me.onConfigChange.bind(me, 'width')},
            maxValue  : 800,
            minValue  : 200,
            stepSize  : 1,
            value     : me.exampleComponent.width
        }, {
            module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            handler: (() => {me.exampleComponent.expand()}),
            style  : {marginTop: '10px'},
            text   : 'Expand',
            width  : 110
        }, {
            module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            handler: (() => {me.exampleComponent.collapse()}),
            text   : 'Collapse',
            width  : 110
        }, {
            module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            text   : 'Reset Rotation',
            width  : 110,
            handler: me.onResetRotation.bind(me)
        }, {
            module : _src_button_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            handler: (() => {me.exampleComponent.flipCircle()}),
            text   : 'Flip',
            width  : 110
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_component_Circle_mjs__WEBPACK_IMPORTED_MODULE_1__["default"], {
            height: 500,
            width : 500
        });
    }

    onResetRotation() {
        let pre = this.id + '__';

        Neo.getComponent(pre + 'rotateX').value = 0;
        Neo.getComponent(pre + 'rotateY').value = 0;
        Neo.getComponent(pre + 'rotateZ').value = 0;
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/circle/app.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/circle/app.mjs ***!
  \****************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/component/circle/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/component/circle/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/component/Circle.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/component/Circle.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circle; });
/* harmony import */ var _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ClassSystem.mjs */ "./node_modules/neo.mjs/src/util/ClassSystem.mjs");
/* harmony import */ var _selection_CircleModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selection/CircleModel.mjs */ "./node_modules/neo.mjs/src/selection/CircleModel.mjs");
/* harmony import */ var _collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../collection/Base.mjs */ "./node_modules/neo.mjs/src/collection/Base.mjs");
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/component/Base.mjs");
/* harmony import */ var _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/Array.mjs */ "./node_modules/neo.mjs/src/util/Array.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");







/**
 * @class Neo.component.Circle
 * @extends Neo.component.Base
 */
class Circle extends _Base_mjs__WEBPACK_IMPORTED_MODULE_3__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.Circle'
         * @protected
         */
        className: 'Neo.component.Circle',
        /**
         * @member {String} ntype='circle'
         * @protected
         */
        ntype: 'circle',
        /**
         * Will get set inside the ctor to avoid issues inside the webpack builds
         * @member {String|null} backsideIconPath=Neo.config.resourcesPath + 'images/circle/'
         */
        backsideIconPath: null,
        /**
         * @member {Boolean} circleCenterHasTransitionCls=true
         * @protected
         */
        circleCenterHasTransitionCls: true,
        /**
         * @member {String[]} cls=['neo-circle-component']
         */
        cls: ['neo-circle-component'],
        /**
         * @member {Boolean} collapsed=true
         */
        collapsed: true,
        /**
         * Additional used keys for the selection model
         * @member {Object} keys
         */
        keys: {},
        /**
         * @member {Number} innerRadius_=60
         */
        innerRadius_: 100,
        /**
         * @member {Boolean} isFlipped=false
         */
        isFlipped: false,
        /**
         * Will get set inside the ctor to avoid issues inside the webpack builds
         * @member {String} itemImagePath=Neo.config.resourcesPath + 'examples/images/'
         */
        itemImagePath: null,
        /**
         * @member {Number} itemSize_=30
         */
        itemSize_: 60,
        /**
         * @member {Number} maxItems_=12
         */
        maxItems_: 12,
        /**
         * The amount in px which the outerRadius is bigger than the innerRadius
         * @member {Number} outerRadiusDelta_=10
         */
        outerRadiusDelta_: 10,
        /**
         * @member {Number} rotateX_=0
         */
        rotateX_:0,
        /**
         * @member {Number} rotateY_=0
         */
        rotateY_:0,
        /**
         * @member {Number} rotateZ_=0
         */
        rotateZ_:0,
        /**
         * @member {Neo.selection.Model} selectionModel_=null
         */
        selectionModel_: null,
        /**
         * @member {Neo.collection.Base} store_=null
         */
        store_: null,
        /**
         * @member {String} title_='Circle 1'
         */
        title_: 'Circle 1',
        /**
         * The url for the store to load the data
         * @member {String} url_='../resources/examples/data/ai_contacts.json'
         */
        url_: '../../resources/examples/data/circleContacts.json',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            tabIndex: -1,
            cn: [{
                cls  : ['neo-circle-center'],
                style: {},
                cn: [{
                    cls: ['neo-circle-front'],
                    cn : [{
                        cls  : ['neo-circle'],
                        style: {},
                        cn: [
                            {cls: ['neo-count-items']},
                            {cls: ['neo-circle-name']}
                        ]
                    }, {
                        cls  : ['neo-outer-circle'],
                        style: {}
                    }]
                }, {
                    cls: ['neo-circle-back'],
                    cn : []
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

        Neo.main.DomEvents.registerPreventDefaultTargets({
            name: 'contextmenu',
            cls : ['neo-circle', 'neo-circle-back']
        });

        let me           = this,
            domListeners = me.domListeners,
            vdom         = me.vdom;

        if (!me.backsideIconPath) {
            me.backsideIconPath = Neo.config.resourcesPath + 'images/circle/';
        }

        if (!me.itemImagePath) {
            me.itemImagePath = Neo.config.resourcesPath + 'examples/';
        }

        domListeners.push({
            mouseenter: me.expand,
            mouseleave: me.collapse,
            scope     : me
        }, {
            contextmenu: me.onContextMenu,
            delegate   : 'neo-circle-back',
            scope      : me
        }, {
            click   : me.onBacksideIconClick,
            delegate: 'neo-backside-icon',
            scope   : me
        }, {
            mouseenter: me.expandItem,
            mouseleave: me.collapseItem,
            delegate  : 'neo-circle-item',
            scope     : me
        }, {
            contextmenu: me.onContextMenu,
            wheel      : me.onMouseWheel,
            delegate   : 'neo-circle',
            scope      : me
        });

        me.domListeners = domListeners;

        me.store = Neo.create(_collection_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"], {
            keyProperty: 'id'
        });

        // silent updates
        me.createBacksideItems(true);
        me.updateInnerCircle(true);
        me.updateOuterCircle(true);
        me.updateTitle(true);

        me.vdom = vdom;
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

        me.loadData();
    }

    /**
     * Triggered after the innerRadius config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetInnerRadius(value, oldValue) {
        if (oldValue) {
            let me = this;

            me.updateItemPositions(true);
            me.updateInnerCircle(true);
            me.updateOuterCircle(false);
        }
    }

    /**
     * Triggered after the maxItems config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetMaxItems(value, oldValue) {
        if (oldValue && this.rendered) {
            let me      = this,
                frontEl = me.getFrontEl(),
                vdom    = me.vdom;

            if (value < oldValue) {
                if (me.collapsed) {
                    frontEl.cn.splice(value + 2);
                } else {
                    me.updateItemOpacity(0, true, value);

                    setTimeout(() => {
                        frontEl.cn.splice(value + 2);
                        me.vdom = vdom;
                    }, 300);
                }

                me.updateItemPositions(true);
                me.vdom = vdom;
            } else {
                me.createItems(oldValue, true);
                me.updateItemPositions(true);

                me.promiseVdomUpdate().then(() => {
                    if (!me.collapsed) {
                        me.updateItemOpacity(1, true, oldValue);
                        me.vdom = vdom;
                    }
                });
            }
        }
    }

    /**
     * Triggered after the itemSize config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetItemSize(value, oldValue) {
        let me = this;

        if (oldValue && me.rendered) {
            if (!me.collapsed) {
                me.updateOuterCircle(true);
            }

            me.updateItemPositions();
        }
    }

    /**
     * Triggered after the rotateX config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetRotateX(value, oldValue) {
        if (oldValue && this.rendered) {
            this.rotate();
        }
    }

    /**
     * Triggered after the rotateY config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetRotateY(value, oldValue) {
        if (oldValue && this.rendered) {
            this.rotate();
        }
    }

    /**
     * Triggered after the rotateZ config got changed
     * @param {Number} value
     * @param {Number} oldValue
     * @protected
     */
    afterSetRotateZ(value, oldValue) {
        if (oldValue && this.rendered) {
            this.rotate();
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
     * Triggered after the title config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetTitle(value, oldValue) {
        if (oldValue) {
            this.updateTitle();
        }
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

        value = _util_ClassSystem_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].beforeSetInstance(value, _selection_CircleModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);

        return value;
    }

    /**
     *
     * @returns {Object[]}
     */
    calculateItemPositions() {
        let me        = this,
            angle     = 360 / me.maxItems,
            circlePos = [],
            itemSize  = me.itemSize,
            radius    = me.innerRadius + itemSize / 2 + 4,
            i         = 0,
            len       = me.maxItems,
            nr;

        for (; i < len; i++) {
            nr = (angle * i + 180) * Math.PI / 180;

            circlePos.push({
                left: -Math.round(radius * Math.sin(nr)) - itemSize / 2,
                top :  Math.round(radius * Math.cos(nr)) - itemSize / 2
            });
        }

        return circlePos;
    }

    /**
     *
     */
    collapse() {
        let me = this;

        if (!me.collapsed) {
            me.collapsed = true;
            me.updateOuterCircle(true);
            me.updateItemOpacity(0, false);
        }
    }

    /**
     *
     * @param data
     */
    collapseItem(data) {
        let me    = this,
            item  = me.getItemEl(data.path[0].id),
            style = item.cn[0].style,
            vdom  = me.vdom;

        delete style.marginLeft;
        delete style.marginTop;
        delete style.zIndex;

        style.height = me.itemSize + 'px';
        style.width  = me.itemSize + 'px';

        me.vdom = vdom;
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    createBacksideItems(silent=false) {
        let me         = this,
            backEl     = me.getBackEl(),
            itemCls    = ['neo-flip', 'neo-pencil', 'neo-trash'],
            itemFile   = ['flip.png', 'pencil.png', 'trash.png'],
            countItems = 3,
            i          = 0,
            vdom       = me.vdom;

        backEl.cn.push(
            {cls: ['neo-count-items']},
            {cls: ['neo-circle-name']}
        );

        for (; i < countItems; i++) {
            backEl.cn.push({
                tag: 'img',
                cls: ['neo-backside-icon', itemCls[i]],
                src: me.backsideIconPath + itemFile[i]
            });
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Number} [startIndex=0]
     * @param {Boolean} [silent=false]
     */
    createItems(startIndex=0, silent=false) {
        let me            = this,
            frontEl       = me.getFrontEl(),
            itemPositions = me.calculateItemPositions(),
            countItems    = Math.min(me.store.getCount(), me.maxItems),
            i             = startIndex,
            vdom          = me.vdom;

        for (; i < countItems; i++) {
            frontEl.cn.push({
                id      : me.getItemId(i),
                cls     : ['neo-circle-item'],
                tabIndex: -1,
                style: {
                    height: me.itemSize           + 'px',
                    left  : itemPositions[i].left + 'px',
                    top   : itemPositions[i].top  + 'px',
                    width : me.itemSize           + 'px'
                },
                cn: [{
                    tag  : 'img',
                    cls  : ['neo-circle-item-image'],
                    src  : me.itemImagePath + me.store.getAt(i).image,
                    style: {
                        height: me.itemSize + 'px',
                        width : me.itemSize + 'px'
                    }
                }]
            });
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     */
    expand(data) {
        let me = this;

        if (me.collapsed) {
            me.collapsed = false;
            me.updateOuterCircle(true);
            me.updateItemOpacity(1, false);
        }
    }

    /**
     *
     * @param data
     */
    expandItem(data) {
        let me   = this,
            item = me.getItemEl(data.path[0].id),
            vdom = me.vdom;

        item.cn[0].style = {
            height    : (me.itemSize + 20) + 'px',
            marginLeft: -10 + 'px',
            marginTop : -10 + 'px',
            width     : (me.itemSize + 20) + 'px',
            zIndex    : 40
        };

        me.vdom = vdom;
    }

    flipCircle() {
        let me   = this,
            vdom = me.vdom;

        _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"][me.isFlipped ? 'remove': 'add'](vdom.cn[0].cls, 'neo-flipped');

        me.isFlipped = !me.isFlipped;
        me.vdom = vdom;
    }

    /**
     *
     */
    getBackEl() {
        return this.vdom.cn[0].cn[1];
    }

    /**
     *
     */
    getFrontEl() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     */
    getInnerCircle() {
        return this.vdom.cn[0].cn[0].cn[0];
    }

    /**
     *
     * @param {String} itemId
     * @returns {Object}
     */
    getItemEl(itemId) {
        let item = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_5__["default"].findVdomChild(this.getFrontEl(), itemId);

        return item && item.vdom;
    }

    /**
     *
     * @param {Number} index
     * @returns {String}
     */
    getItemId(index) {
        let store = this.store;

        return this.id + '__' + store.getAt(index)[store.keyProperty];
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

        if (keyField && keyField.type.toLowerCase() === 'number') {
            itemId = parseInt(itemId);
        }

        return itemId;
    }

    /**
     *
     */
    getOuterCircle() {
        return this.vdom.cn[0].cn[0].cn[1];
    }

    /**
     *
     */
    loadData() {
        let me = this;

        // todo: use a real store, not defined here for the examples
        Neo.Xhr.promiseJson({
            insideNeo: true,
            url      : Neo.config.isExperimental ? me.url : me.url
        }).then(data => {
            me.store.items = data.json.data;

            setTimeout(() => {
                me.updateTitle();
                me.createItems();
            }, 100);
        }).catch(err => {
            console.log('Error for Neo.Xhr.request', err, me.id);
        });
    }

    /**
     *
     * @param {Object} data
     */
    onBacksideIconClick(data) {
        let me   = this,
            path = data.path;

             if (path[0].cls.includes('neo-flip'))   {me.flipCircle();}
        else if (path[0].cls.includes('neo-pencil')) {console.log('edit circle');}
        else if (path[0].cls.includes('neo-trash'))  {console.log('delete circle');}
    }

    /**
     *
     * @param {Object} data
     */
    onContextMenu(data) {
        this.flipCircle();
    }

    /**
     *
     * @param {Object} data
     */
    onMouseWheel(data) {
        let me      = this,
            deltaY  = data.deltaY,
            rotateZ = me.rotateZ;

        if (deltaY >  1 || deltaY < -1) {rotateZ += deltaY;}

        if (rotateZ < 0) {
            rotateZ = 0;
        }

        if (!(me.rotateZ === 0 && rotateZ === 0)) {
            me.rotateZ = rotateZ;

            me.rotate();
        }
    }

    /**
     *
     */
    rotate() {
        let me             = this,
            vdom           = me.vdom,
            circleCenterEl = vdom.cn[0],
            transform = [
                'rotateX(' + me.rotateX + 'deg)',
                'rotateY(' + me.rotateY + 'deg)',
                'rotateZ(' + me.rotateZ + 'deg)'
            ].join(' ');

        if (me.circleCenterHasTransitionCls) {
            _util_Array_mjs__WEBPACK_IMPORTED_MODULE_4__["default"].add(circleCenterEl.cls, 'no-transition');

            me.circleCenterHasTransitionCls = false;

            me.promiseVdomUpdate().then(() => {
                me.updateItemAngle(true);
                circleCenterEl.style.transform = transform;
                me.vdom = vdom;
            });
        } else {
            me.updateItemAngle(true);
            circleCenterEl.style.transform = transform;
            me.vdom = vdom;
        }
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateInnerCircle(silent=false) {
        let me           = this,
            innerCircle  = me.getInnerCircle(),
            innerRadius  = me.innerRadius,
            innerSize    = innerRadius * 2,
            vdom         = me.vdom;

        Object.assign(innerCircle.style, {
            height: innerSize + 'px',
            left  : '-' + innerRadius + 'px',
            top   : '-' + innerRadius + 'px',
            width : innerSize + 'px'
        });

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateItemAngle(silent=false) {
        let me      = this,
            frontEl = me.getFrontEl(),
            vdom    = me.vdom,
            i       = 2,
            len     = frontEl.cn.length;

        for (; i < len; i++) {
            frontEl.cn[i].style.transform = 'rotateZ(' + (-me.rotateZ) + 'deg)';
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Number} value
     * @param {Boolean} [silent=false]
     * @param {Number} [startIndex=0]
     */
    updateItemOpacity(value, silent=false, startIndex=0) {
        let me      = this,
            i       = startIndex + 2,
            frontEl = me.getFrontEl(),
            len     = frontEl.cn.length,
            vdom    = me.vdom;

        for (; i < len; i++) {
            frontEl.cn[i].style.opacity = value;
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateItemPositions(silent=false) {
        let me            = this,
            frontEl       = me.getFrontEl(),
            itemPositions = me.calculateItemPositions(),
            itemSize      = me.itemSize,
            vdom          = me.vdom,
            i             = 2,
            len           = Math.min(frontEl.cn.length, itemPositions.length + 2);

        for (; i < len; i++) {
            Object.assign(frontEl.cn[i].style, {
                height: itemSize                + 'px',
                left  : itemPositions[i-2].left + 'px',
                top   : itemPositions[i-2].top  + 'px',
                width : itemSize                + 'px'
            });

            Object.assign(frontEl.cn[i].cn[0].style, {
                height: itemSize + 'px',
                width : itemSize + 'px'
            });
        }

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }

    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateOuterCircle(silent=false) {
        let me           = this,
            itemSize = me.itemSize,
            outerCircle  = me.getOuterCircle(),
            outerRadius  = me.innerRadius + me.outerRadiusDelta,
            outerSize    = me.collapsed ? outerRadius * 2 : (outerRadius + itemSize) * 2,
            vdom         = me.vdom,
            opts;

        if (me.collapsed) {
            opts = {
                height: outerSize + 'px',
                left  : '-' + outerRadius + 'px',
                top   : '-' + outerRadius + 'px',
                width : outerSize + 'px'
            };
        } else {
            opts = {
                height: outerSize + 'px',
                left  : '-' + (outerRadius + itemSize) + 'px',
                top   : '-' + (outerRadius + itemSize) + 'px',
                width : outerSize + 'px'
            };
        }

        Object.assign(outerCircle.style, opts);

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
    
    /**
     *
     * @param {Boolean} [silent=false]
     */
    updateTitle(silent=false) {
        let me          = this,
            innerCircle = me.getInnerCircle(),
            vdom        = me.vdom;

        innerCircle.cn[0].html = me.store && me.store.getCount() || 0;
        innerCircle.cn[1].html = me.title;

        me[silent ? '_vdom' : 'vdom'] = vdom;
    }
}

Neo.applyClassConfig(Circle);



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

/***/ "./node_modules/neo.mjs/src/selection/CircleModel.mjs":
/*!************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/CircleModel.mjs ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CircleModel; });
/* harmony import */ var _Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Model.mjs */ "./node_modules/neo.mjs/src/selection/Model.mjs");


/**
 * @class Neo.selection.CircleModel
 * @extends Neo.selection.Model
 */
class CircleModel extends _Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.CircleModel'
         * @protected
         */
        className: 'Neo.selection.CircleModel',
        /**
         * @member {String} ntype='selection-circlemodel'
         * @protected
         */
        ntype: 'selection-circlemodel'
    }}

    /**
     *
     * @param {Object} data
     */
    onKeyDownLeft(data) {
        this.onNavKey(data, -1);
    }

    /**
     *
     * @param {Object} data
     */
    onKeyDownRight(data) {
        this.onNavKey(data, 1);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKey(data, step) {
        let me       = this,
            item     = data.path[0],
            view     = me.view,
            store    = view.store,
            maxItems = Math.min(store.getCount(), view.maxItems - 1),
            index, itemId, recordId;

        if (item.cls.includes('neo-circle-item')) {
            recordId = parseInt(view.getItemRecordId(item.id));
            index    = store.indexOf(recordId) + step;

                 if (index < 0)        {index = maxItems;}
            else if (index > maxItems) {index = 0;}
        } else {
            index = 0;
        }

        itemId = view.getItemId(index);

        me.select(itemId);
        view.focus(itemId);
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
                {fn: 'onKeyDownLeft'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Up'    ,scope: id}
            );
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
                {fn: 'onKeyDownLeft'  ,key: 'Down'  ,scope: id},
                {fn: 'onKeyDownLeft'  ,key: 'Left'  ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Right' ,scope: id},
                {fn: 'onKeyDownRight' ,key: 'Up'    ,scope: id}
            ]);
        }

        super.unregister();
    }
}

Neo.applyClassConfig(CircleModel);



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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvY2lyY2xlL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL2NvbXBvbmVudC9jaXJjbGUvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29tcG9uZW50L0NpcmNsZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvUmFuZ2UubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vQ2lyY2xlTW9kZWwubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9zZWxlY3Rpb24vTW9kZWwubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUU7QUFDSztBQUNGO0FBQ0U7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFxQjtBQUNqRCx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLGlFQUFVO0FBQ25DO0FBQ0EseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx5QkFBeUIsaUVBQVU7QUFDbkM7QUFDQSx5QkFBeUIsa0RBQWtEO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHVCQUF1QixpRUFBVTtBQUNqQztBQUNBLHdCQUF3QiwrQ0FBK0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCLGlFQUFVO0FBQ2pDO0FBQ0Esd0JBQXdCLCtDQUErQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTtB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QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsdURBQVE7QUFDeEI7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUseUJBQXlCO0FBQ3hDLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHVEQUFRO0FBQ3hCO0FBQ0E7QUFDQSxTQUFTOztBQUVULFFBQVEsdURBQVE7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSx1REFBUTtBQUNwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1jb21wb25lbnQtY2lyY2xlLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2J1dHRvbi9CYXNlLm1qcyc7XG5pbXBvcnQgQ2lyY2xlICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9jb21wb25lbnQvQ2lyY2xlLm1qcyc7XG5pbXBvcnQgQ29uZmlndXJhdGlvblZpZXdwb3J0IGZyb20gJy4uLy4uL0NvbmZpZ3VyYXRpb25WaWV3cG9ydC5tanMnO1xuaW1wb3J0IFJhbmdlRmllbGQgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYW5nZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5Db25maWd1cmF0aW9uVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbmZpZ3VyYXRpb25WaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICBsYXlvdXQgICA6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG5cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uQ29tcG9uZW50cygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ2hlaWdodCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaGVpZ2h0Jyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogODAwLFxuICAgICAgICAgICAgbWluVmFsdWUgIDogMjAwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogMSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ2lubmVyUmFkaXVzJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdpbm5lclJhZGl1cycpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDE1MCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IDMwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogMSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaW5uZXJSYWRpdXNcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnaXRlbVNpemUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaXRlbVNpemUnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDcwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiAyMCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogMSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5pdGVtU2l6ZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFJhbmdlRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdtYXhJdGVtcycsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdtYXhJdGVtcycpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMTUsXG4gICAgICAgICAgICBtaW5WYWx1ZSA6IDEsXG4gICAgICAgICAgICBzdGVwU2l6ZSA6IDEsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubWF4SXRlbXNcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIFJhbmdlRmllbGQsXG4gICAgICAgICAgICBpZCAgICAgICAgOiBtZS5pZCArICdfXycgKyAncm90YXRlWCcsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAncm90YXRlWCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAncm90YXRlWCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDE4MCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IC0xODAsXG4gICAgICAgICAgICBzdGVwU2l6ZSAgOiAxLFxuICAgICAgICAgICAgdmFsdWUgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5yb3RhdGVYXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBSYW5nZUZpZWxkLFxuICAgICAgICAgICAgaWQgICAgICAgIDogbWUuaWQgKyAnX18nICsgJ3JvdGF0ZVknLFxuICAgICAgICAgICAgbGFiZWxUZXh0IDogJ3JvdGF0ZVknLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3JvdGF0ZVknKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSAgOiAxODAsXG4gICAgICAgICAgICBtaW5WYWx1ZSAgOiAtMTgwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogMSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQucm90YXRlWVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgOiAgUmFuZ2VGaWVsZCxcbiAgICAgICAgICAgIGlkICAgICAgICA6IG1lLmlkICsgJ19fJyArICdyb3RhdGVaJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdyb3RhdGVaJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdyb3RhdGVaJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogMzYwLFxuICAgICAgICAgICAgbWluVmFsdWUgIDogMCxcbiAgICAgICAgICAgIHN0ZXBTaXplICA6IDEsXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnJvdGF0ZVlcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIFJhbmdlRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3dpZHRoJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogODAwLFxuICAgICAgICAgICAgbWluVmFsdWUgIDogMjAwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogMSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgaGFuZGxlcjogKCgpID0+IHttZS5leGFtcGxlQ29tcG9uZW50LmV4cGFuZCgpfSksXG4gICAgICAgICAgICBzdHlsZSAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdGV4dCAgIDogJ0V4cGFuZCcsXG4gICAgICAgICAgICB3aWR0aCAgOiAxMTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgaGFuZGxlcjogKCgpID0+IHttZS5leGFtcGxlQ29tcG9uZW50LmNvbGxhcHNlKCl9KSxcbiAgICAgICAgICAgIHRleHQgICA6ICdDb2xsYXBzZScsXG4gICAgICAgICAgICB3aWR0aCAgOiAxMTBcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlIDogQnV0dG9uLFxuICAgICAgICAgICAgdGV4dCAgIDogJ1Jlc2V0IFJvdGF0aW9uJyxcbiAgICAgICAgICAgIHdpZHRoICA6IDExMCxcbiAgICAgICAgICAgIGhhbmRsZXI6IG1lLm9uUmVzZXRSb3RhdGlvbi5iaW5kKG1lKVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgOiBCdXR0b24sXG4gICAgICAgICAgICBoYW5kbGVyOiAoKCkgPT4ge21lLmV4YW1wbGVDb21wb25lbnQuZmxpcENpcmNsZSgpfSksXG4gICAgICAgICAgICB0ZXh0ICAgOiAnRmxpcCcsXG4gICAgICAgICAgICB3aWR0aCAgOiAxMTBcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoQ2lyY2xlLCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgIHdpZHRoIDogNTAwXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVzZXRSb3RhdGlvbigpIHtcbiAgICAgICAgbGV0IHByZSA9IHRoaXMuaWQgKyAnX18nO1xuXG4gICAgICAgIE5lby5nZXRDb21wb25lbnQocHJlICsgJ3JvdGF0ZVgnKS52YWx1ZSA9IDA7XG4gICAgICAgIE5lby5nZXRDb21wb25lbnQocHJlICsgJ3JvdGF0ZVknKS52YWx1ZSA9IDA7XG4gICAgICAgIE5lby5nZXRDb21wb25lbnQocHJlICsgJ3JvdGF0ZVonKS52YWx1ZSA9IDA7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9jb21wb25lbnQvY2lyY2xlLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQ2xhc3NTeXN0ZW1VdGlsIGZyb20gJy4uL3V0aWwvQ2xhc3NTeXN0ZW0ubWpzJztcbmltcG9ydCBDaXJjbGVNb2RlbCAgICAgZnJvbSAnLi4vc2VsZWN0aW9uL0NpcmNsZU1vZGVsLm1qcyc7XG5pbXBvcnQgQ29sbGVjdGlvbiAgICAgIGZyb20gJy4uL2NvbGxlY3Rpb24vQmFzZS5tanMnO1xuaW1wb3J0IENvbXBvbmVudCAgICAgICBmcm9tICcuL0Jhc2UubWpzJztcbmltcG9ydCBOZW9BcnJheSAgICAgICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICAgICBmcm9tICcuLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmNvbXBvbmVudC5DaXJjbGVcbiAqIEBleHRlbmRzIE5lby5jb21wb25lbnQuQmFzZVxuICovXG5jbGFzcyBDaXJjbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29tcG9uZW50LkNpcmNsZSdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbXBvbmVudC5DaXJjbGUnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2lyY2xlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ2NpcmNsZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXaWxsIGdldCBzZXQgaW5zaWRlIHRoZSBjdG9yIHRvIGF2b2lkIGlzc3VlcyBpbnNpZGUgdGhlIHdlYnBhY2sgYnVpbGRzXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ3xudWxsfSBiYWNrc2lkZUljb25QYXRoPU5lby5jb25maWcucmVzb3VyY2VzUGF0aCArICdpbWFnZXMvY2lyY2xlLydcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tzaWRlSWNvblBhdGg6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjaXJjbGVDZW50ZXJIYXNUcmFuc2l0aW9uQ2xzPXRydWVcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2lyY2xlQ2VudGVySGFzVHJhbnNpdGlvbkNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tY2lyY2xlLWNvbXBvbmVudCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLWNpcmNsZS1jb21wb25lbnQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNvbGxhcHNlZD10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIHVzZWQga2V5cyBmb3IgdGhlIHNlbGVjdGlvbiBtb2RlbFxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGtleXNcbiAgICAgICAgICovXG4gICAgICAgIGtleXM6IHt9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpbm5lclJhZGl1c189NjBcbiAgICAgICAgICovXG4gICAgICAgIGlubmVyUmFkaXVzXzogMTAwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaXNGbGlwcGVkPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBpc0ZsaXBwZWQ6IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogV2lsbCBnZXQgc2V0IGluc2lkZSB0aGUgY3RvciB0byBhdm9pZCBpc3N1ZXMgaW5zaWRlIHRoZSB3ZWJwYWNrIGJ1aWxkc1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGl0ZW1JbWFnZVBhdGg9TmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoICsgJ2V4YW1wbGVzL2ltYWdlcy8nXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtSW1hZ2VQYXRoOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfSBpdGVtU2l6ZV89MzBcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1TaXplXzogNjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG1heEl0ZW1zXz0xMlxuICAgICAgICAgKi9cbiAgICAgICAgbWF4SXRlbXNfOiAxMixcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbW91bnQgaW4gcHggd2hpY2ggdGhlIG91dGVyUmFkaXVzIGlzIGJpZ2dlciB0aGFuIHRoZSBpbm5lclJhZGl1c1xuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IG91dGVyUmFkaXVzRGVsdGFfPTEwXG4gICAgICAgICAqL1xuICAgICAgICBvdXRlclJhZGl1c0RlbHRhXzogMTAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0ZVhfPTBcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0ZVhfOjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0ZVlfPTBcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0ZVlfOjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOdW1iZXJ9IHJvdGF0ZVpfPTBcbiAgICAgICAgICovXG4gICAgICAgIHJvdGF0ZVpfOjAsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSBzZWxlY3Rpb25Nb2RlbF89bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0aW9uTW9kZWxfOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7TmVvLmNvbGxlY3Rpb24uQmFzZX0gc3RvcmVfPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIHN0b3JlXzogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdGl0bGVfPSdDaXJjbGUgMSdcbiAgICAgICAgICovXG4gICAgICAgIHRpdGxlXzogJ0NpcmNsZSAxJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB1cmwgZm9yIHRoZSBzdG9yZSB0byBsb2FkIHRoZSBkYXRhXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdXJsXz0nLi4vcmVzb3VyY2VzL2V4YW1wbGVzL2RhdGEvYWlfY29udGFjdHMuanNvbidcbiAgICAgICAgICovXG4gICAgICAgIHVybF86ICcuLi8uLi9yZXNvdXJjZXMvZXhhbXBsZXMvZGF0YS9jaXJjbGVDb250YWN0cy5qc29uJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tY2lyY2xlLWNlbnRlciddLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fSxcbiAgICAgICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaXJjbGUtZnJvbnQnXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWNpcmNsZSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY246IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ25lby1jb3VudC1pdGVtcyddfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2xzOiBbJ25lby1jaXJjbGUtbmFtZSddfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tb3V0ZXItY2lyY2xlJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge31cbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2lyY2xlLWJhY2snXSxcbiAgICAgICAgICAgICAgICAgICAgY24gOiBbXVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIE5lby5tYWluLkRvbUV2ZW50cy5yZWdpc3RlclByZXZlbnREZWZhdWx0VGFyZ2V0cyh7XG4gICAgICAgICAgICBuYW1lOiAnY29udGV4dG1lbnUnLFxuICAgICAgICAgICAgY2xzIDogWyduZW8tY2lyY2xlJywgJ25lby1jaXJjbGUtYmFjayddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmJhY2tzaWRlSWNvblBhdGgpIHtcbiAgICAgICAgICAgIG1lLmJhY2tzaWRlSWNvblBhdGggPSBOZW8uY29uZmlnLnJlc291cmNlc1BhdGggKyAnaW1hZ2VzL2NpcmNsZS8nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFtZS5pdGVtSW1hZ2VQYXRoKSB7XG4gICAgICAgICAgICBtZS5pdGVtSW1hZ2VQYXRoID0gTmVvLmNvbmZpZy5yZXNvdXJjZXNQYXRoICsgJ2V4YW1wbGVzLyc7XG4gICAgICAgIH1cblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiBtZS5leHBhbmQsXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiBtZS5jb2xsYXBzZSxcbiAgICAgICAgICAgIHNjb3BlICAgICA6IG1lXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvbnRleHRtZW51OiBtZS5vbkNvbnRleHRNZW51LFxuICAgICAgICAgICAgZGVsZWdhdGUgICA6ICduZW8tY2lyY2xlLWJhY2snLFxuICAgICAgICAgICAgc2NvcGUgICAgICA6IG1lXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNsaWNrICAgOiBtZS5vbkJhY2tzaWRlSWNvbkNsaWNrLFxuICAgICAgICAgICAgZGVsZWdhdGU6ICduZW8tYmFja3NpZGUtaWNvbicsXG4gICAgICAgICAgICBzY29wZSAgIDogbWVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogbWUuZXhwYW5kSXRlbSxcbiAgICAgICAgICAgIG1vdXNlbGVhdmU6IG1lLmNvbGxhcHNlSXRlbSxcbiAgICAgICAgICAgIGRlbGVnYXRlICA6ICduZW8tY2lyY2xlLWl0ZW0nLFxuICAgICAgICAgICAgc2NvcGUgICAgIDogbWVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY29udGV4dG1lbnU6IG1lLm9uQ29udGV4dE1lbnUsXG4gICAgICAgICAgICB3aGVlbCAgICAgIDogbWUub25Nb3VzZVdoZWVsLFxuICAgICAgICAgICAgZGVsZWdhdGUgICA6ICduZW8tY2lyY2xlJyxcbiAgICAgICAgICAgIHNjb3BlICAgICAgOiBtZVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG5cbiAgICAgICAgbWUuc3RvcmUgPSBOZW8uY3JlYXRlKENvbGxlY3Rpb24sIHtcbiAgICAgICAgICAgIGtleVByb3BlcnR5OiAnaWQnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNpbGVudCB1cGRhdGVzXG4gICAgICAgIG1lLmNyZWF0ZUJhY2tzaWRlSXRlbXModHJ1ZSk7XG4gICAgICAgIG1lLnVwZGF0ZUlubmVyQ2lyY2xlKHRydWUpO1xuICAgICAgICBtZS51cGRhdGVPdXRlckNpcmNsZSh0cnVlKTtcbiAgICAgICAgbWUudXBkYXRlVGl0bGUodHJ1ZSk7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAobWUuc2VsZWN0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdGlvbk1vZGVsLnJlZ2lzdGVyKG1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLmxvYWREYXRhKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpbm5lclJhZGl1cyBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbm5lclJhZGl1cyh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgICAgICBtZS51cGRhdGVJdGVtUG9zaXRpb25zKHRydWUpO1xuICAgICAgICAgICAgbWUudXBkYXRlSW5uZXJDaXJjbGUodHJ1ZSk7XG4gICAgICAgICAgICBtZS51cGRhdGVPdXRlckNpcmNsZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG1heEl0ZW1zIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldE1heEl0ZW1zKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgJiYgdGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGZyb250RWwgPSBtZS5nZXRGcm9udEVsKCksXG4gICAgICAgICAgICAgICAgdmRvbSAgICA9IG1lLnZkb207XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lLmNvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgICAgICBmcm9udEVsLmNuLnNwbGljZSh2YWx1ZSArIDIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1lLnVwZGF0ZUl0ZW1PcGFjaXR5KDAsIHRydWUsIHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb250RWwuY24uc3BsaWNlKHZhbHVlICsgMik7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBtZS51cGRhdGVJdGVtUG9zaXRpb25zKHRydWUpO1xuICAgICAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcyhvbGRWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlSXRlbVBvc2l0aW9ucyh0cnVlKTtcblxuICAgICAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWUuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS51cGRhdGVJdGVtT3BhY2l0eSgxLCB0cnVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBpdGVtU2l6ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJdGVtU2l6ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICBpZiAob2xkVmFsdWUgJiYgbWUucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGlmICghbWUuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlT3V0ZXJDaXJjbGUodHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1lLnVwZGF0ZUl0ZW1Qb3NpdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcm90YXRlWCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRSb3RhdGVYKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgJiYgdGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcm90YXRlWSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRSb3RhdGVZKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgJiYgdGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgcm90YXRlWiBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRSb3RhdGVaKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUgJiYgdGhpcy5yZW5kZXJlZCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc2VsZWN0aW9uTW9kZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOZW8uc2VsZWN0aW9uLk1vZGVsfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRTZWxlY3Rpb25Nb2RlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyZWQpIHtcbiAgICAgICAgICAgIHZhbHVlLnJlZ2lzdGVyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB0aXRsZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaXRsZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpdGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYmVmb3JlIHRoZSBzZWxlY3Rpb25Nb2RlbCBjb25maWcgZ2V0cyBjaGFuZ2VkLlxuICAgICAqIEBwYXJhbSB7TmVvLnNlbGVjdGlvbi5Nb2RlbH0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge05lby5zZWxlY3Rpb24uTW9kZWx9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGJlZm9yZVNldFNlbGVjdGlvbk1vZGVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgIG9sZFZhbHVlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhbHVlID0gQ2xhc3NTeXN0ZW1VdGlsLmJlZm9yZVNldEluc3RhbmNlKHZhbHVlLCBDaXJjbGVNb2RlbCk7XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdFtdfVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbnMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYW5nbGUgICAgID0gMzYwIC8gbWUubWF4SXRlbXMsXG4gICAgICAgICAgICBjaXJjbGVQb3MgPSBbXSxcbiAgICAgICAgICAgIGl0ZW1TaXplICA9IG1lLml0ZW1TaXplLFxuICAgICAgICAgICAgcmFkaXVzICAgID0gbWUuaW5uZXJSYWRpdXMgKyBpdGVtU2l6ZSAvIDIgKyA0LFxuICAgICAgICAgICAgaSAgICAgICAgID0gMCxcbiAgICAgICAgICAgIGxlbiAgICAgICA9IG1lLm1heEl0ZW1zLFxuICAgICAgICAgICAgbnI7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbnIgPSAoYW5nbGUgKiBpICsgMTgwKSAqIE1hdGguUEkgLyAxODA7XG5cbiAgICAgICAgICAgIGNpcmNsZVBvcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtTWF0aC5yb3VuZChyYWRpdXMgKiBNYXRoLnNpbihucikpIC0gaXRlbVNpemUgLyAyLFxuICAgICAgICAgICAgICAgIHRvcCA6ICBNYXRoLnJvdW5kKHJhZGl1cyAqIE1hdGguY29zKG5yKSkgLSBpdGVtU2l6ZSAvIDJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNpcmNsZVBvcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGNvbGxhcHNlKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmICghbWUuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBtZS5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICAgICAgbWUudXBkYXRlT3V0ZXJDaXJjbGUodHJ1ZSk7XG4gICAgICAgICAgICBtZS51cGRhdGVJdGVtT3BhY2l0eSgwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgY29sbGFwc2VJdGVtKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW0gID0gbWUuZ2V0SXRlbUVsKGRhdGEucGF0aFswXS5pZCksXG4gICAgICAgICAgICBzdHlsZSA9IGl0ZW0uY25bMF0uc3R5bGUsXG4gICAgICAgICAgICB2ZG9tICA9IG1lLnZkb207XG5cbiAgICAgICAgZGVsZXRlIHN0eWxlLm1hcmdpbkxlZnQ7XG4gICAgICAgIGRlbGV0ZSBzdHlsZS5tYXJnaW5Ub3A7XG4gICAgICAgIGRlbGV0ZSBzdHlsZS56SW5kZXg7XG5cbiAgICAgICAgc3R5bGUuaGVpZ2h0ID0gbWUuaXRlbVNpemUgKyAncHgnO1xuICAgICAgICBzdHlsZS53aWR0aCAgPSBtZS5pdGVtU2l6ZSArICdweCc7XG5cbiAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgY3JlYXRlQmFja3NpZGVJdGVtcyhzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgYmFja0VsICAgICA9IG1lLmdldEJhY2tFbCgpLFxuICAgICAgICAgICAgaXRlbUNscyAgICA9IFsnbmVvLWZsaXAnLCAnbmVvLXBlbmNpbCcsICduZW8tdHJhc2gnXSxcbiAgICAgICAgICAgIGl0ZW1GaWxlICAgPSBbJ2ZsaXAucG5nJywgJ3BlbmNpbC5wbmcnLCAndHJhc2gucG5nJ10sXG4gICAgICAgICAgICBjb3VudEl0ZW1zID0gMyxcbiAgICAgICAgICAgIGkgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgdmRvbSAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgYmFja0VsLmNuLnB1c2goXG4gICAgICAgICAgICB7Y2xzOiBbJ25lby1jb3VudC1pdGVtcyddfSxcbiAgICAgICAgICAgIHtjbHM6IFsnbmVvLWNpcmNsZS1uYW1lJ119XG4gICAgICAgICk7XG5cbiAgICAgICAgZm9yICg7IGkgPCBjb3VudEl0ZW1zOyBpKyspIHtcbiAgICAgICAgICAgIGJhY2tFbC5jbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0YWc6ICdpbWcnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tYmFja3NpZGUtaWNvbicsIGl0ZW1DbHNbaV1dLFxuICAgICAgICAgICAgICAgIHNyYzogbWUuYmFja3NpZGVJY29uUGF0aCArIGl0ZW1GaWxlW2ldXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbc3RhcnRJbmRleD0wXVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICBjcmVhdGVJdGVtcyhzdGFydEluZGV4PTAsIHNpbGVudD1mYWxzZSkge1xuICAgICAgICBsZXQgbWUgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBmcm9udEVsICAgICAgID0gbWUuZ2V0RnJvbnRFbCgpLFxuICAgICAgICAgICAgaXRlbVBvc2l0aW9ucyA9IG1lLmNhbGN1bGF0ZUl0ZW1Qb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIGNvdW50SXRlbXMgICAgPSBNYXRoLm1pbihtZS5zdG9yZS5nZXRDb3VudCgpLCBtZS5tYXhJdGVtcyksXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gc3RhcnRJbmRleCxcbiAgICAgICAgICAgIHZkb20gICAgICAgICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGZvciAoOyBpIDwgY291bnRJdGVtczsgaSsrKSB7XG4gICAgICAgICAgICBmcm9udEVsLmNuLnB1c2goe1xuICAgICAgICAgICAgICAgIGlkICAgICAgOiBtZS5nZXRJdGVtSWQoaSksXG4gICAgICAgICAgICAgICAgY2xzICAgICA6IFsnbmVvLWNpcmNsZS1pdGVtJ10sXG4gICAgICAgICAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogbWUuaXRlbVNpemUgICAgICAgICAgICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgbGVmdCAgOiBpdGVtUG9zaXRpb25zW2ldLmxlZnQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICB0b3AgICA6IGl0ZW1Qb3NpdGlvbnNbaV0udG9wICArICdweCcsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoIDogbWUuaXRlbVNpemUgICAgICAgICAgICsgJ3B4J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgICAgIHRhZyAgOiAnaW1nJyxcbiAgICAgICAgICAgICAgICAgICAgY2xzICA6IFsnbmVvLWNpcmNsZS1pdGVtLWltYWdlJ10sXG4gICAgICAgICAgICAgICAgICAgIHNyYyAgOiBtZS5pdGVtSW1hZ2VQYXRoICsgbWUuc3RvcmUuZ2V0QXQoaSkuaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IG1lLml0ZW1TaXplICsgJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogbWUuaXRlbVNpemUgKyAncHgnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBtZVtzaWxlbnQgPyAnX3Zkb20nIDogJ3Zkb20nXSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBleHBhbmQoZGF0YSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIG1lLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbWUudXBkYXRlT3V0ZXJDaXJjbGUodHJ1ZSk7XG4gICAgICAgICAgICBtZS51cGRhdGVJdGVtT3BhY2l0eSgxLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgZXhwYW5kSXRlbShkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW0gPSBtZS5nZXRJdGVtRWwoZGF0YS5wYXRoWzBdLmlkKSxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGl0ZW0uY25bMF0uc3R5bGUgPSB7XG4gICAgICAgICAgICBoZWlnaHQgICAgOiAobWUuaXRlbVNpemUgKyAyMCkgKyAncHgnLFxuICAgICAgICAgICAgbWFyZ2luTGVmdDogLTEwICsgJ3B4JyxcbiAgICAgICAgICAgIG1hcmdpblRvcCA6IC0xMCArICdweCcsXG4gICAgICAgICAgICB3aWR0aCAgICAgOiAobWUuaXRlbVNpemUgKyAyMCkgKyAncHgnLFxuICAgICAgICAgICAgekluZGV4ICAgIDogNDBcbiAgICAgICAgfTtcblxuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICBmbGlwQ2lyY2xlKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBOZW9BcnJheVttZS5pc0ZsaXBwZWQgPyAncmVtb3ZlJzogJ2FkZCddKHZkb20uY25bMF0uY2xzLCAnbmVvLWZsaXBwZWQnKTtcblxuICAgICAgICBtZS5pc0ZsaXBwZWQgPSAhbWUuaXNGbGlwcGVkO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldEJhY2tFbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblsxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGdldEZyb250RWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZkb20uY25bMF0uY25bMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRJbm5lckNpcmNsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXS5jblswXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBpdGVtSWRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldEl0ZW1FbChpdGVtSWQpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKHRoaXMuZ2V0RnJvbnRFbCgpLCBpdGVtSWQpO1xuXG4gICAgICAgIHJldHVybiBpdGVtICYmIGl0ZW0udmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SXRlbUlkKGluZGV4KSB7XG4gICAgICAgIGxldCBzdG9yZSA9IHRoaXMuc3RvcmU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaWQgKyAnX18nICsgc3RvcmUuZ2V0QXQoaW5kZXgpW3N0b3JlLmtleVByb3BlcnR5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2bm9kZUlkXG4gICAgICogQHJldHVybnMge1N0cmluZ3xOdW1iZXJ9IGl0ZW1JZFxuICAgICAqL1xuICAgIGdldEl0ZW1SZWNvcmRJZCh2bm9kZUlkKSB7XG4gICAgICAgIGxldCBpdGVtSWQgICA9IHZub2RlSWQuc3BsaXQoJ19fJylbMV0sXG4gICAgICAgICAgICBtb2RlbCAgICA9IHRoaXMuc3RvcmUubW9kZWwsXG4gICAgICAgICAgICBrZXlGaWVsZCA9IG1vZGVsICYmIG1vZGVsLmdldEZpZWxkKG1vZGVsLmtleVByb3BlcnR5KTtcblxuICAgICAgICBpZiAoa2V5RmllbGQgJiYga2V5RmllbGQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaXRlbUlkID0gcGFyc2VJbnQoaXRlbUlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVtSWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRPdXRlckNpcmNsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmRvbS5jblswXS5jblswXS5jblsxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIC8vIHRvZG86IHVzZSBhIHJlYWwgc3RvcmUsIG5vdCBkZWZpbmVkIGhlcmUgZm9yIHRoZSBleGFtcGxlc1xuICAgICAgICBOZW8uWGhyLnByb21pc2VKc29uKHtcbiAgICAgICAgICAgIGluc2lkZU5lbzogdHJ1ZSxcbiAgICAgICAgICAgIHVybCAgICAgIDogTmVvLmNvbmZpZy5pc0V4cGVyaW1lbnRhbCA/IG1lLnVybCA6IG1lLnVybFxuICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMgPSBkYXRhLmpzb24uZGF0YTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlVGl0bGUoKTtcbiAgICAgICAgICAgICAgICBtZS5jcmVhdGVJdGVtcygpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmb3IgTmVvLlhoci5yZXF1ZXN0JywgZXJyLCBtZS5pZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkJhY2tzaWRlSWNvbkNsaWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgcGF0aCA9IGRhdGEucGF0aDtcblxuICAgICAgICAgICAgIGlmIChwYXRoWzBdLmNscy5pbmNsdWRlcygnbmVvLWZsaXAnKSkgICB7bWUuZmxpcENpcmNsZSgpO31cbiAgICAgICAgZWxzZSBpZiAocGF0aFswXS5jbHMuaW5jbHVkZXMoJ25lby1wZW5jaWwnKSkge2NvbnNvbGUubG9nKCdlZGl0IGNpcmNsZScpO31cbiAgICAgICAgZWxzZSBpZiAocGF0aFswXS5jbHMuaW5jbHVkZXMoJ25lby10cmFzaCcpKSAge2NvbnNvbGUubG9nKCdkZWxldGUgY2lyY2xlJyk7fVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNvbnRleHRNZW51KGRhdGEpIHtcbiAgICAgICAgdGhpcy5mbGlwQ2lyY2xlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uTW91c2VXaGVlbChkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGRlbHRhWSAgPSBkYXRhLmRlbHRhWSxcbiAgICAgICAgICAgIHJvdGF0ZVogPSBtZS5yb3RhdGVaO1xuXG4gICAgICAgIGlmIChkZWx0YVkgPiAgMSB8fCBkZWx0YVkgPCAtMSkge3JvdGF0ZVogKz0gZGVsdGFZO31cblxuICAgICAgICBpZiAocm90YXRlWiA8IDApIHtcbiAgICAgICAgICAgIHJvdGF0ZVogPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEobWUucm90YXRlWiA9PT0gMCAmJiByb3RhdGVaID09PSAwKSkge1xuICAgICAgICAgICAgbWUucm90YXRlWiA9IHJvdGF0ZVo7XG5cbiAgICAgICAgICAgIG1lLnJvdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByb3RhdGUoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBjaXJjbGVDZW50ZXJFbCA9IHZkb20uY25bMF0sXG4gICAgICAgICAgICB0cmFuc2Zvcm0gPSBbXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVgoJyArIG1lLnJvdGF0ZVggKyAnZGVnKScsXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVkoJyArIG1lLnJvdGF0ZVkgKyAnZGVnKScsXG4gICAgICAgICAgICAgICAgJ3JvdGF0ZVooJyArIG1lLnJvdGF0ZVogKyAnZGVnKSdcbiAgICAgICAgICAgIF0uam9pbignICcpO1xuXG4gICAgICAgIGlmIChtZS5jaXJjbGVDZW50ZXJIYXNUcmFuc2l0aW9uQ2xzKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5hZGQoY2lyY2xlQ2VudGVyRWwuY2xzLCAnbm8tdHJhbnNpdGlvbicpO1xuXG4gICAgICAgICAgICBtZS5jaXJjbGVDZW50ZXJIYXNUcmFuc2l0aW9uQ2xzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIG1lLnByb21pc2VWZG9tVXBkYXRlKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWUudXBkYXRlSXRlbUFuZ2xlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNpcmNsZUNlbnRlckVsLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcbiAgICAgICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUudXBkYXRlSXRlbUFuZ2xlKHRydWUpO1xuICAgICAgICAgICAgY2lyY2xlQ2VudGVyRWwuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICB1cGRhdGVJbm5lckNpcmNsZShzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbm5lckNpcmNsZSAgPSBtZS5nZXRJbm5lckNpcmNsZSgpLFxuICAgICAgICAgICAgaW5uZXJSYWRpdXMgID0gbWUuaW5uZXJSYWRpdXMsXG4gICAgICAgICAgICBpbm5lclNpemUgICAgPSBpbm5lclJhZGl1cyAqIDIsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIE9iamVjdC5hc3NpZ24oaW5uZXJDaXJjbGUuc3R5bGUsIHtcbiAgICAgICAgICAgIGhlaWdodDogaW5uZXJTaXplICsgJ3B4JyxcbiAgICAgICAgICAgIGxlZnQgIDogJy0nICsgaW5uZXJSYWRpdXMgKyAncHgnLFxuICAgICAgICAgICAgdG9wICAgOiAnLScgKyBpbm5lclJhZGl1cyArICdweCcsXG4gICAgICAgICAgICB3aWR0aCA6IGlubmVyU2l6ZSArICdweCdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW1BbmdsZShzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZnJvbnRFbCA9IG1lLmdldEZyb250RWwoKSxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaSAgICAgICA9IDIsXG4gICAgICAgICAgICBsZW4gICAgID0gZnJvbnRFbC5jbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgZnJvbnRFbC5jbltpXS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWignICsgKC1tZS5yb3RhdGVaKSArICdkZWcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3N0YXJ0SW5kZXg9MF1cbiAgICAgKi9cbiAgICB1cGRhdGVJdGVtT3BhY2l0eSh2YWx1ZSwgc2lsZW50PWZhbHNlLCBzdGFydEluZGV4PTApIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgaSAgICAgICA9IHN0YXJ0SW5kZXggKyAyLFxuICAgICAgICAgICAgZnJvbnRFbCA9IG1lLmdldEZyb250RWwoKSxcbiAgICAgICAgICAgIGxlbiAgICAgPSBmcm9udEVsLmNuLmxlbmd0aCxcbiAgICAgICAgICAgIHZkb20gICAgPSBtZS52ZG9tO1xuXG4gICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGZyb250RWwuY25baV0uc3R5bGUub3BhY2l0eSA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVbc2lsZW50ID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50PWZhbHNlXVxuICAgICAqL1xuICAgIHVwZGF0ZUl0ZW1Qb3NpdGlvbnMoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGZyb250RWwgICAgICAgPSBtZS5nZXRGcm9udEVsKCksXG4gICAgICAgICAgICBpdGVtUG9zaXRpb25zID0gbWUuY2FsY3VsYXRlSXRlbVBvc2l0aW9ucygpLFxuICAgICAgICAgICAgaXRlbVNpemUgICAgICA9IG1lLml0ZW1TaXplLFxuICAgICAgICAgICAgdmRvbSAgICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpICAgICAgICAgICAgID0gMixcbiAgICAgICAgICAgIGxlbiAgICAgICAgICAgPSBNYXRoLm1pbihmcm9udEVsLmNuLmxlbmd0aCwgaXRlbVBvc2l0aW9ucy5sZW5ndGggKyAyKTtcblxuICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKGZyb250RWwuY25baV0uc3R5bGUsIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGl0ZW1TaXplICAgICAgICAgICAgICAgICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0ICA6IGl0ZW1Qb3NpdGlvbnNbaS0yXS5sZWZ0ICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB0b3AgICA6IGl0ZW1Qb3NpdGlvbnNbaS0yXS50b3AgICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IGl0ZW1TaXplICAgICAgICAgICAgICAgICsgJ3B4J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZnJvbnRFbC5jbltpXS5jblswXS5zdHlsZSwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogaXRlbVNpemUgKyAncHgnLFxuICAgICAgICAgICAgICAgIHdpZHRoIDogaXRlbVNpemUgKyAncHgnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudD1mYWxzZV1cbiAgICAgKi9cbiAgICB1cGRhdGVPdXRlckNpcmNsZShzaWxlbnQ9ZmFsc2UpIHtcbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtU2l6ZSA9IG1lLml0ZW1TaXplLFxuICAgICAgICAgICAgb3V0ZXJDaXJjbGUgID0gbWUuZ2V0T3V0ZXJDaXJjbGUoKSxcbiAgICAgICAgICAgIG91dGVyUmFkaXVzICA9IG1lLmlubmVyUmFkaXVzICsgbWUub3V0ZXJSYWRpdXNEZWx0YSxcbiAgICAgICAgICAgIG91dGVyU2l6ZSAgICA9IG1lLmNvbGxhcHNlZCA/IG91dGVyUmFkaXVzICogMiA6IChvdXRlclJhZGl1cyArIGl0ZW1TaXplKSAqIDIsXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgb3B0cztcblxuICAgICAgICBpZiAobWUuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogb3V0ZXJTaXplICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0ICA6ICctJyArIG91dGVyUmFkaXVzICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB0b3AgICA6ICctJyArIG91dGVyUmFkaXVzICsgJ3B4JyxcbiAgICAgICAgICAgICAgICB3aWR0aCA6IG91dGVyU2l6ZSArICdweCdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRzID0ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogb3V0ZXJTaXplICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0ICA6ICctJyArIChvdXRlclJhZGl1cyArIGl0ZW1TaXplKSArICdweCcsXG4gICAgICAgICAgICAgICAgdG9wICAgOiAnLScgKyAob3V0ZXJSYWRpdXMgKyBpdGVtU2l6ZSkgKyAncHgnLFxuICAgICAgICAgICAgICAgIHdpZHRoIDogb3V0ZXJTaXplICsgJ3B4J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5hc3NpZ24ob3V0ZXJDaXJjbGUuc3R5bGUsIG9wdHMpO1xuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgdXBkYXRlVGl0bGUoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBpbm5lckNpcmNsZSA9IG1lLmdldElubmVyQ2lyY2xlKCksXG4gICAgICAgICAgICB2ZG9tICAgICAgICA9IG1lLnZkb207XG5cbiAgICAgICAgaW5uZXJDaXJjbGUuY25bMF0uaHRtbCA9IG1lLnN0b3JlICYmIG1lLnN0b3JlLmdldENvdW50KCkgfHwgMDtcbiAgICAgICAgaW5uZXJDaXJjbGUuY25bMV0uaHRtbCA9IG1lLnRpdGxlO1xuXG4gICAgICAgIG1lW3NpbGVudCA/ICdfdmRvbScgOiAndmRvbSddID0gdmRvbTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENpcmNsZSk7XG5cbmV4cG9ydCB7Q2lyY2xlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBOdW1iZXIgZnJvbSAnLi9OdW1iZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUmFuZ2VcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLk51bWJlclxuICovXG5jbGFzcyBSYW5nZSBleHRlbmRzIE51bWJlciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5mb3JtLmZpZWxkLlJhbmdlJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uZm9ybS5maWVsZC5SYW5nZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdyYW5nZWZpZWxkJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3JhbmdlZmllbGQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSBzaG93cyBhIGNsZWFyIHRyaWdnZXIgaW4gY2FzZSB0aGUgZmllbGQgaGFzIGEgbm9uIGVtcHR5IHZhbHVlLlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjbGVhcmFibGU9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXJhbmdlZmllbGQnLCduZW8tdGV4dGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tcmFuZ2VmaWVsZCcsICduZW8tdGV4dGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZSBmb3IgdGhlIGlucHV0VHlwZV8gdGV4dGZpZWxkIGNvbmZpZ1xuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0ncmFuZ2UnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6ICdyYW5nZScsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gdGlja21hcmtzXz1bXVxuICAgICAgICAgKi9cbiAgICAgICAgdGlja21hcmtzXzogW10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSB1c2VJbnB1dEV2ZW50PWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICB1c2VJbnB1dEV2ZW50IDogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNhYmxlcyB0aGUgZmllbGQuTnVtYmVyIGJ1dHRvbnNcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdXNlSW5wdXRFdmVudD1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgdXNlU3BpbkJ1dHRvbnM6IGZhbHNlXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gbWUuZG9tTGlzdGVuZXJzLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gbWUudmRvbS5jblsxXTtcblxuICAgICAgICBpZiAobWUudXNlSW5wdXRFdmVudCkge1xuICAgICAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIGZuICAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICBpZCAgICA6IG1lLnZkb20uY25bMV0uaWQsXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlIDogbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXRFbC5jbHMgPSBbJ25lby1yYW5nZWZpZWxkLWlucHV0J107IC8vIHJlcGxhY2UgbmVvLXRleHRmaWVsZC1pbnB1dFxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdGlja21hcmtzIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlXG4gICAgICogQHBhcmFtIHtBcnJheX0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRUaWNrbWFya3ModmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3VwZGF0ZVRpY2ttYXJrcycpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmFuZ2UpO1xuXG5leHBvcnQge1JhbmdlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCBmcm9tICcuL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uQ2lyY2xlTW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqL1xuY2xhc3MgQ2lyY2xlTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24uQ2lyY2xlTW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5zZWxlY3Rpb24uQ2lyY2xlTW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nc2VsZWN0aW9uLWNpcmNsZW1vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi1jaXJjbGVtb2RlbCdcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uS2V5RG93bkxlZnQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5KGRhdGEsIC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25LZXlEb3duUmlnaHQoZGF0YSkge1xuICAgICAgICB0aGlzLm9uTmF2S2V5KGRhdGEsIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RlcFxuICAgICAqL1xuICAgIG9uTmF2S2V5KGRhdGEsIHN0ZXApIHtcbiAgICAgICAgbGV0IG1lICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW0gICAgID0gZGF0YS5wYXRoWzBdLFxuICAgICAgICAgICAgdmlldyAgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgc3RvcmUgICAgPSB2aWV3LnN0b3JlLFxuICAgICAgICAgICAgbWF4SXRlbXMgPSBNYXRoLm1pbihzdG9yZS5nZXRDb3VudCgpLCB2aWV3Lm1heEl0ZW1zIC0gMSksXG4gICAgICAgICAgICBpbmRleCwgaXRlbUlkLCByZWNvcmRJZDtcblxuICAgICAgICBpZiAoaXRlbS5jbHMuaW5jbHVkZXMoJ25lby1jaXJjbGUtaXRlbScpKSB7XG4gICAgICAgICAgICByZWNvcmRJZCA9IHBhcnNlSW50KHZpZXcuZ2V0SXRlbVJlY29yZElkKGl0ZW0uaWQpKTtcbiAgICAgICAgICAgIGluZGV4ICAgID0gc3RvcmUuaW5kZXhPZihyZWNvcmRJZCkgKyBzdGVwO1xuXG4gICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApICAgICAgICB7aW5kZXggPSBtYXhJdGVtczt9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IG1heEl0ZW1zKSB7aW5kZXggPSAwO31cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGl0ZW1JZCA9IHZpZXcuZ2V0SXRlbUlkKGluZGV4KTtcblxuICAgICAgICBtZS5zZWxlY3QoaXRlbUlkKTtcbiAgICAgICAgdmlldy5mb2N1cyhpdGVtSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtOZW8uY29tcG9uZW50LkJhc2V9IGNvbXBvbmVudFxuICAgICAqL1xuICAgIHJlZ2lzdGVyKGNvbXBvbmVudCkge1xuICAgICAgICBzdXBlci5yZWdpc3Rlcihjb21wb25lbnQpO1xuXG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBtZS5pZCxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3O1xuXG4gICAgICAgIGlmICh2aWV3LmtleXMpIHtcbiAgICAgICAgICAgIHZpZXcua2V5cy5fa2V5cy5wdXNoKFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnRG93bicgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93bkxlZnQnICAsa2V5OiAnTGVmdCcgICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnUmlnaHQnICxzY29wZTogaWR9LFxuICAgICAgICAgICAgICAgIHtmbjogJ29uS2V5RG93blJpZ2h0JyAsa2V5OiAnVXAnICAgICxzY29wZTogaWR9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICB1bnJlZ2lzdGVyKCkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICBpZCAgID0gbWUuaWQsXG4gICAgICAgICAgICB2aWV3ID0gbWUudmlldztcblxuICAgICAgICBpZiAodmlldy5rZXlzKSB7XG4gICAgICAgICAgICB2aWV3LmtleXMucmVtb3ZlS2V5cyhbXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdEb3duJyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duTGVmdCcgICxrZXk6ICdMZWZ0JyAgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdSaWdodCcgLHNjb3BlOiBpZH0sXG4gICAgICAgICAgICAgICAge2ZuOiAnb25LZXlEb3duUmlnaHQnICxrZXk6ICdVcCcgICAgLHNjb3BlOiBpZH1cbiAgICAgICAgICAgIF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIudW5yZWdpc3RlcigpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2lyY2xlTW9kZWwpO1xuXG5leHBvcnQge0NpcmNsZU1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBCYXNlICAgICAgIGZyb20gJy4uL2NvcmUvQmFzZS5tanMnO1xuaW1wb3J0IE5lb0FycmF5ICAgZnJvbSAnLi4vdXRpbC9BcnJheS5tanMnO1xuaW1wb3J0IE9ic2VydmFibGUgZnJvbSAnLi4vY29yZS9PYnNlcnZhYmxlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5zZWxlY3Rpb24uTW9kZWxcbiAqIEBleHRlbmRzIE5lby5jb3JlLkJhc2VcbiAqL1xuY2xhc3MgTW9kZWwgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0U3RhdGljQ29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUcnVlIGF1dG9tYXRpY2FsbHkgYXBwbGllcyB0aGUgY29yZS9PYnNlcnZhYmxlLm1qcyBtaXhpblxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBvYnNlcnZhYmxlPXRydWVcbiAgICAgICAgICogQHN0YXRpY1xuICAgICAgICAgKi9cbiAgICAgICAgb2JzZXJ2YWJsZTogdHJ1ZVxuICAgIH19XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLnNlbGVjdGlvbi5Nb2RlbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLnNlbGVjdGlvbi5Nb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tbW9kZWwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnc2VsZWN0aW9uLW1vZGVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBsYWNlaG9sZGVyIGZvciBleHRlbmRlZCBjbGFzc2VzIHRvIGFkZCBhIGN1c3RvbSBjc3MgcnVsZSB0byB0aGlzIG93bmVyIGNvbXBvbmVudFxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd8bnVsbH0gY2xzPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGl0ZW1zPVtdXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gc2VsZWN0ZWRDbHM9J3NlbGVjdGVkJ1xuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0ZWRDbHM6ICduZW8tc2VsZWN0ZWQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gc2luZ2xlU2VsZWN0PXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHNpbmdsZVNlbGVjdDogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEludGVybmFsbHkgc2F2ZXMgdGhlIHZpZXcgaWQsIGJ1dCB0aGUgZ2V0dGVyIHdpbGwgcmV0dXJuIHRoZSBtYXRjaGluZyBpbnN0YW5jZVxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IHZpZXdfPW51bGxcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgdmlld186IG51bGxcbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYmVmb3JlIGdldHRpbmcgdGhlIHZhbHVlIG9mIHRoZSB2aWV3IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtOZW8uY29tcG9uZW50LkJhc2V9XG4gICAgICovXG4gICAgYmVmb3JlR2V0VmlldygpIHtcbiAgICAgICAgcmV0dXJuIE5lby5nZXRDb21wb25lbnQodGhpcy5fdmlldyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgYmVmb3JlIHNldHRpbmcgdGhlIHZhbHVlIG9mIHRoZSB2aWV3IGNvbmZpZ1xuICAgICAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSB2aWV3IGlkXG4gICAgICovXG4gICAgYmVmb3JlU2V0Vmlldyh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICBhZGREb21MaXN0ZW5lcigpIHt9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50XSB0cnVlIHRvIHByZXZlbnQgYSB2ZG9tIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IFtpdGVtQ29sbGVjdGlvbl1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdGVkQ2xzXVxuICAgICAqL1xuICAgIGRlc2VsZWN0KGl0ZW0sIHNpbGVudCwgaXRlbUNvbGxlY3Rpb24sIHNlbGVjdGVkQ2xzKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZpZXcgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSA9IHZpZXcudmRvbSxcbiAgICAgICAgICAgIG5vZGUgPSB2aWV3LmdldFZkb21DaGlsZChpdGVtKSwgLy8gdG9kbzogc3VwcG9ydCBmb3Igbm9kZXMgKHJpZ2h0IG5vdyBsaW1pdGVkIHRvIGlkcylcbiAgICAgICAgICAgIGNscztcblxuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgY2xzID0gbm9kZS5jbHMgfHwgW107XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBzZWxlY3RlZENscyB8fCBtZS5zZWxlY3RlZENscyk7XG4gICAgICAgICAgICBub2RlLmNscyA9IGNscztcbiAgICAgICAgfVxuXG4gICAgICAgIE5lb0FycmF5LnJlbW92ZShpdGVtQ29sbGVjdGlvbiB8fCBtZS5pdGVtcywgaXRlbSk7XG5cbiAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICAgIHZpZXcudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gW3NpbGVudF0gdHJ1ZSB0byBwcmV2ZW50IGEgdmRvbSB1cGRhdGVcbiAgICAgKi9cbiAgICBkZXNlbGVjdEFsbChzaWxlbnQpIHtcbiAgICAgICAgbGV0IG1lICAgID0gdGhpcyxcbiAgICAgICAgICAgIGl0ZW1zID0gWy4uLm1lLml0ZW1zXSxcbiAgICAgICAgICAgIHZpZXcgID0gbWUudmlldyxcbiAgICAgICAgICAgIHZkb20gID0gdmlldy52ZG9tO1xuXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBtZS5kZXNlbGVjdChpdGVtLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzaWxlbnQgJiYgaXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bnJlZ2lzdGVyKCk7XG4gICAgICAgIHN1cGVyLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gdGhpcy5pdGVtc1xuICAgICAqL1xuICAgIGdldFNlbGVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn0gdHJ1ZSBpbiBjYXNlIHRoZXJlIGlzIGEgc2VsZWN0aW9uXG4gICAgICovXG4gICAgaGFzU2VsZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGlkXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IHRydWUgaW4gY2FzZSB0aGUgaXRlbSBpcyBzZWxlY3RlZFxuICAgICAqL1xuICAgIGlzU2VsZWN0ZWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXMuaW5kZXhPZihpZCkgPiAtMTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7TmVvLmNvbXBvbmVudC5CYXNlfSBjb21wb25lbnRcbiAgICAgKi9cbiAgICByZWdpc3Rlcihjb21wb25lbnQpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBjb21wb25lbnQuY2xzIHx8IFtdO1xuXG4gICAgICAgIGlmIChtZS5jbHMgJiYgIWNscy5pbmNsdWRlcyhtZS5jbHMpKSB7XG4gICAgICAgICAgICBjbHMucHVzaChtZS5jbHMpO1xuICAgICAgICAgICAgY29tcG9uZW50LmNscyA9IGNscztcbiAgICAgICAgfVxuXG4gICAgICAgIG1lLnZpZXcgPSBjb21wb25lbnQ7XG4gICAgICAgIG1lLmFkZERvbUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKi9cbiAgICByZW1vdmVEb21MaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY29tcG9uZW50ICAgID0gbWUudmlldyxcbiAgICAgICAgICAgIGRvbUxpc3RlbmVycyA9IFsuLi5jb21wb25lbnQuZG9tTGlzdGVuZXJzXTtcblxuICAgICAgICBjb21wb25lbnQuZG9tTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyLnNjb3BlID09PSBtZSkge1xuICAgICAgICAgICAgICAgIE5lb0FycmF5LnJlbW92ZShkb21MaXN0ZW5lcnMsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29tcG9uZW50LmRvbUxpc3RlbmVycyA9IGRvbUxpc3RlbmVycztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fE9iamVjdFtdfFN0cmluZ1tdfSBpdGVtc1xuICAgICAqIEBwYXJhbSB7QXJyYXl9IFtpdGVtQ29sbGVjdGlvbl1cbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gW3NlbGVjdGVkQ2xzXVxuICAgICAqL1xuICAgIHNlbGVjdChpdGVtcywgaXRlbUNvbGxlY3Rpb24sIHNlbGVjdGVkQ2xzKSB7XG4gICAgICAgIGl0ZW1zID0gQXJyYXkuaXNBcnJheShpdGVtcykgPyBpdGVtcyA6IFtpdGVtc107XG5cbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmlldyA9IG1lLnZpZXcsXG4gICAgICAgICAgICB2ZG9tID0gdmlldy52ZG9tLFxuICAgICAgICAgICAgY2xzO1xuXG4gICAgICAgIGlmIChtZS5zaW5nbGVTZWxlY3QpIHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0QWxsKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gdmlldy5nZXRWZG9tQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgY2xzID0gbm9kZS5jbHMgfHwgW107XG4gICAgICAgICAgICAgICAgTmVvQXJyYXkuYWRkKGNscywgc2VsZWN0ZWRDbHMgfHwgbWUuc2VsZWN0ZWRDbHMpO1xuICAgICAgICAgICAgICAgIG5vZGUuY2xzID0gY2xzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBOZW9BcnJheS5hZGQoaXRlbUNvbGxlY3Rpb24gfHwgbWUuaXRlbXMsIGl0ZW1zKTtcblxuICAgICAgICB2aWV3W3ZpZXcuaGFzT3duUHJvcGVydHkoJ3NpbGVudFNlbGVjdCcpICYmIHZpZXcuc2lsZW50U2VsZWN0ID09PSB0cnVlID8gJ192ZG9tJyA6ICd2ZG9tJ10gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICAgKi9cbiAgICB0b2dnbGVTZWxlY3Rpb24oaXRlbSkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZS5pc1NlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICAgICAgICBtZS5kZXNlbGVjdChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1lLnNlbGVjdChpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgbGV0IG1lICA9IHRoaXMsXG4gICAgICAgICAgICBjbHMgPSBtZS52aWV3LmNscyB8fCBbXTtcblxuICAgICAgICBpZiAobWUuY2xzICYmIGNscy5pbmNsdWRlcyhtZS5jbHMpKSB7XG4gICAgICAgICAgICBOZW9BcnJheS5yZW1vdmUoY2xzLCBtZS5jbHMpO1xuICAgICAgICAgICAgbWUudmlldy5jbHMgPSBjbHM7XG4gICAgICAgIH1cblxuICAgICAgICBtZS5kZXNlbGVjdEFsbCgpO1xuXG4gICAgICAgIG1lLnJlbW92ZURvbUxpc3RlbmVycygpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTW9kZWwpO1xuXG5leHBvcnQge01vZGVsIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=