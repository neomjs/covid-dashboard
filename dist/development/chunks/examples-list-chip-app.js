self["webpackChunk"](["chunks/examples-list-chip-app"],{

/***/ "./node_modules/neo.mjs/examples/list/chip/MainContainer.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/chip/MainContainer.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_list_Chip_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/list/Chip.mjs */ "./node_modules/neo.mjs/src/list/Chip.mjs");
/* harmony import */ var _MainStore_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainStore.mjs */ "./node_modules/neo.mjs/examples/list/chip/MainStore.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");






/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 130,
        configItemWidth     : 230,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.disableSelection,
            labelText: 'disableSelection',
            listeners: {change: me.onConfigChange.bind(me, 'disableSelection')}
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'height',
            listeners : {change: me.onConfigChange.bind(me, 'height')},
            maxValue  : 800,
            minValue  : 30,
            stepSize  : 5,
            value     : me.exampleComponent.height,
            style     : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.stacked,
            labelText: 'stacked',
            listeners: {change: me.onConfigChange.bind(me, 'stacked')},
            style    : {marginTop: '10px'}
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'width',
            listeners : {change: me.onConfigChange.bind(me, 'width')},
            maxValue  : 800,
            minValue  : 100,
            stepSize  : 5,
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create({
            module      : _src_list_Chip_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            displayField: 'firstname',
            store       : _MainStore_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/list/chip/MainModel.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/chip/MainModel.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainModel; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class TestApp.MainModel
 * @extends Neo.data.Model
 */
class MainModel extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainModel',
        ntype    : 'main-model',

        keyProperty: 'githubId',

        fields: [{
            name: 'country',
            type: 'String'
        }, {
            name: 'firstname',
            type: 'String'
        }, {
            name: 'githubId',
            type: 'String'
        }, {
            name: 'lastname',
            type: 'String'
        }]
    }}
}

Neo.applyClassConfig(MainModel);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/list/chip/MainStore.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/chip/MainStore.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStore; });
/* harmony import */ var _MainModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainModel.mjs */ "./node_modules/neo.mjs/examples/list/chip/MainModel.mjs");
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");



/**
 * @class TestApp.MainStore
 * @extends Neo.data.Store
 */
class MainStore extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainStore',
        ntype    : 'main-store',

        keyProperty: 'githubId',
        model      : _MainModel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],

        data: [{
            country  : 'Germany',
            firstname: 'Tobias',
            githubId : 'tobiu',
            lastname : 'Uhlig'
        }, {
            country  : 'USA',
            firstname: 'Rich',
            githubId : 'rwaters',
            lastname : 'Waters'
        }, {
            country  : 'Germany',
            firstname: 'Nils',
            githubId : 'mrsunshine',
            lastname : 'Dehl'
        }, {
            country  : 'USA',
            firstname: 'Gerard',
            githubId : 'camtnbikerrwc',
            lastname : 'Horan'
        }, {
            country  : 'Slovakia',
            firstname: 'Jozef',
            githubId : 'jsakalos',
            lastname : 'Sakalos'
        }, {
            country  : 'Germany',
            firstname: 'Bastian',
            githubId : 'bhaustein',
            lastname : 'Haustein'
        }],

        sorters: [{
            property : 'firstname',
            direction: 'ASC'
        }]
    }}
}

Neo.applyClassConfig(MainStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/list/chip/app.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/chip/app.mjs ***!
  \*********************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/list/chip/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/list/chip/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/list/Chip.mjs":
/*!************************************************!*\
  !*** ./node_modules/neo.mjs/src/list/Chip.mjs ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chip; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _component_Chip_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/Chip.mjs */ "./node_modules/neo.mjs/src/component/Chip.mjs");



/**
 * @class Neo.list.Chip
 * @extends Neo.list.Base
 */
class Chip extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.list.Chip'
         * @protected
         */
        className: 'Neo.list.Chip',
        /**
         * @member {String} ntype='chiplist'
         * @protected
         */
        ntype: 'chiplist',
        /**
         * @member {Object|null} chipConfig=null
         */
        chipConfig: null,
        /**
         * @member {String[]} cls=['neo-chip-list', 'neo-list']
         */
        cls: ['neo-chip-list', 'neo-list'],
        /**
         * @member {String} itemCls='neo-chip'
         */
        itemCls: 'neo-chip',
        /**
         * True will flex each list item horizontally
         * @member {Boolean} stacked_=true
         */
        stacked_: true,
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: []
        }
    }}

    /**
     * Triggered after the stacked config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetStacked(value, oldValue) {
        if (oldValue !== undefined) {
            let me = this,
                itemId;

            me.store.items.forEach(record => {
                itemId = me.getItemId(record[me.getKeyProperty()]);
                Neo.getComponent(itemId).display = value ? 'flex' : 'inline-flex';
            });
        }
    }

    /**
     * @param {Boolean} [silent=false]
     */
    createItems(silent=false) {
        let me   = this,
            vdom = me.vdom,
            listItem;

        vdom.cn = [];

        me.store.items.forEach(item => {
            listItem = Neo.create({
                module  : _component_Chip_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                display : me.stacked ? 'flex' : 'inline-flex',
                iconCls : 'fa fa-home',
                id      : me.getItemId(item[me.getKeyProperty()]),
                parentId: me.id,
                text    : item[me.displayField],
                ...me.chipConfig || {}
            });

            vdom.cn.push(listItem.vdom);
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
        let me = this,
            itemId;

        me.store.items.forEach(record => {
            itemId = me.getItemId(record[me.getKeyProperty()]);
            Neo.getComponent(itemId).destroy();
        });

        super.destroy();
    }
}

Neo.applyClassConfig(Chip);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9saXN0L2NoaXAvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9jaGlwL01haW5Nb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9jaGlwL01haW5TdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9jaGlwL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2xpc3QvQ2hpcC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlFO0FBQ0w7QUFDTDtBQUNYO0FBQ21COztBQUV2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrRUFBcUI7QUFDakQsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QseUJBQXlCLGtFQUFXO0FBQ3BDO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQTZDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLFNBQVM7QUFDVCx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBOEM7QUFDdEUsd0JBQXdCO0FBQ3hCLFNBQVM7QUFDVCx5QkFBeUIsa0VBQVc7QUFDcEM7QUFDQTtBQUNBLHlCQUF5Qiw0Q0FBNEM7QUFDckU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQztBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFRO0FBQ2xDO0FBQ0EsMEJBQTBCLHNEQUFTO0FBQ25DLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUFBO0FBQUE7QUFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFLO0FBQzdCLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNZOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBSztBQUM3Qix3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBLGNBQWMsMERBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFBO0FBQXVDO0FBQ1c7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlEQUFJO0FBQ3ZCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwyREFBYTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiY2h1bmtzL2V4YW1wbGVzLWxpc3QtY2hpcC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29uZmlndXJhdGlvblZpZXdwb3J0IGZyb20gJy4uLy4uL0NvbmZpZ3VyYXRpb25WaWV3cG9ydC5tanMnO1xuaW1wb3J0IENoaXBMaXN0ICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvbGlzdC9DaGlwLm1qcyc7XG5pbXBvcnQgTWFpblN0b3JlICAgICAgICAgICAgIGZyb20gJy4vTWFpblN0b3JlLm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5Db25maWd1cmF0aW9uVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbmZpZ3VyYXRpb25WaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50ICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIGNvbmZpZ0l0ZW1MYWJlbFdpZHRoOiAxMzAsXG4gICAgICAgIGNvbmZpZ0l0ZW1XaWR0aCAgICAgOiAyMzAsXG4gICAgICAgIGxheW91dCAgICAgICAgICAgICAgOiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmRpc2FibGVTZWxlY3Rpb24sXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdkaXNhYmxlU2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2Rpc2FibGVTZWxlY3Rpb24nKX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIE51bWJlckZpZWxkLFxuICAgICAgICAgICAgY2xlYXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdoZWlnaHQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hlaWdodCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlICA6IDgwMCxcbiAgICAgICAgICAgIG1pblZhbHVlICA6IDMwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGVpZ2h0LFxuICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnN0YWNrZWQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdzdGFja2VkJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3N0YWNrZWQnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgIDogIE51bWJlckZpZWxkLFxuICAgICAgICAgICAgY2xlYXJhYmxlIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCA6ICd3aWR0aCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnd2lkdGgnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSAgOiA4MDAsXG4gICAgICAgICAgICBtaW5WYWx1ZSAgOiAxMDAsXG4gICAgICAgICAgICBzdGVwU2l6ZSAgOiA1LFxuICAgICAgICAgICAgc3R5bGUgICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQud2lkdGhcbiAgICAgICAgfV07XG4gICAgfVxuXG4gICAgY3JlYXRlRXhhbXBsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kdWxlICAgICAgOiBDaGlwTGlzdCxcbiAgICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICBzdG9yZSAgICAgICA6IE1haW5TdG9yZVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1vZGVsICBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Nb2RlbFxuICogQGV4dGVuZHMgTmVvLmRhdGEuTW9kZWxcbiAqL1xuY2xhc3MgTWFpbk1vZGVsIGV4dGVuZHMgTW9kZWwge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluTW9kZWwnLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLW1vZGVsJyxcblxuICAgICAgICBrZXlQcm9wZXJ0eTogJ2dpdGh1YklkJyxcblxuICAgICAgICBmaWVsZHM6IFt7XG4gICAgICAgICAgICBuYW1lOiAnY291bnRyeScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZmlyc3RuYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdnaXRodWJJZCcsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnbGFzdG5hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluTW9kZWwpO1xuXG5leHBvcnQge01haW5Nb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbk1vZGVsIGZyb20gJy4vTWFpbk1vZGVsLm1qcyc7XG5pbXBvcnQgU3RvcmUgICAgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpblN0b3JlXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBNYWluU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5TdG9yZScsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tc3RvcmUnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnZ2l0aHViSWQnLFxuICAgICAgICBtb2RlbCAgICAgIDogTWFpbk1vZGVsLFxuXG4gICAgICAgIGRhdGE6IFt7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdHZXJtYW55JyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ1RvYmlhcycsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICd0b2JpdScsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdVaGxpZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnVVNBJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ1JpY2gnLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAncndhdGVycycsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdXYXRlcnMnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ0dlcm1hbnknLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnTmlscycsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdtcnN1bnNoaW5lJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ0RlaGwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ1VTQScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdHZXJhcmQnLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAnY2FtdG5iaWtlcnJ3YycsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdIb3JhbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnU2xvdmFraWEnLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnSm96ZWYnLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAnanNha2Fsb3MnLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnU2FrYWxvcydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnR2VybWFueScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdCYXN0aWFuJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ2JoYXVzdGVpbicsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdIYXVzdGVpbidcbiAgICAgICAgfV0sXG5cbiAgICAgICAgc29ydGVyczogW3tcbiAgICAgICAgICAgIHByb3BlcnR5IDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpblN0b3JlKTtcblxuZXhwb3J0IHtNYWluU3RvcmUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL2xpc3QvY2hpcC8nLFxuICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnVGVzdEFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07IiwiaW1wb3J0IEJhc2UgICAgICAgICAgZnJvbSAnLi9CYXNlLm1qcyc7XG5pbXBvcnQgQ2hpcENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnQvQ2hpcC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8ubGlzdC5DaGlwXG4gKiBAZXh0ZW5kcyBOZW8ubGlzdC5CYXNlXG4gKi9cbmNsYXNzIENoaXAgZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmxpc3QuQ2hpcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmxpc3QuQ2hpcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjaGlwbGlzdCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjaGlwbGlzdCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R8bnVsbH0gY2hpcENvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjaGlwQ29uZmlnOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nW119IGNscz1bJ25lby1jaGlwLWxpc3QnLCAnbmVvLWxpc3QnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jaGlwLWxpc3QnLCAnbmVvLWxpc3QnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaXRlbUNscz0nbmVvLWNoaXAnXG4gICAgICAgICAqL1xuICAgICAgICBpdGVtQ2xzOiAnbmVvLWNoaXAnLFxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1ZSB3aWxsIGZsZXggZWFjaCBsaXN0IGl0ZW0gaG9yaXpvbnRhbGx5XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IHN0YWNrZWRfPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHN0YWNrZWRfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fSBfdmRvbVxuICAgICAgICAgKi9cbiAgICAgICAgX3Zkb206IHtcbiAgICAgICAgICAgIGNuOiBbXVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgc3RhY2tlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFN0YWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgICAgIGl0ZW1JZDtcblxuICAgICAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW1JZCA9IG1lLmdldEl0ZW1JZChyZWNvcmRbbWUuZ2V0S2V5UHJvcGVydHkoKV0pO1xuICAgICAgICAgICAgICAgIE5lby5nZXRDb21wb25lbnQoaXRlbUlkKS5kaXNwbGF5ID0gdmFsdWUgPyAnZmxleCcgOiAnaW5saW5lLWZsZXgnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IFtzaWxlbnQ9ZmFsc2VdXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoc2lsZW50PWZhbHNlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tLFxuICAgICAgICAgICAgbGlzdEl0ZW07XG5cbiAgICAgICAgdmRvbS5jbiA9IFtdO1xuXG4gICAgICAgIG1lLnN0b3JlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsaXN0SXRlbSA9IE5lby5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG1vZHVsZSAgOiBDaGlwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGRpc3BsYXkgOiBtZS5zdGFja2VkID8gJ2ZsZXgnIDogJ2lubGluZS1mbGV4JyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzIDogJ2ZhIGZhLWhvbWUnLFxuICAgICAgICAgICAgICAgIGlkICAgICAgOiBtZS5nZXRJdGVtSWQoaXRlbVttZS5nZXRLZXlQcm9wZXJ0eSgpXSksXG4gICAgICAgICAgICAgICAgcGFyZW50SWQ6IG1lLmlkLFxuICAgICAgICAgICAgICAgIHRleHQgICAgOiBpdGVtW21lLmRpc3BsYXlGaWVsZF0sXG4gICAgICAgICAgICAgICAgLi4ubWUuY2hpcENvbmZpZyB8fCB7fVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZkb20uY24ucHVzaChsaXN0SXRlbS52ZG9tKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICAgICAgbWUuX3Zkb20gPSB2ZG9tO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWUucHJvbWlzZVZkb21VcGRhdGUoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtZS5maXJlKCdjcmVhdGVJdGVtcycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXMsXG4gICAgICAgICAgICBpdGVtSWQ7XG5cbiAgICAgICAgbWUuc3RvcmUuaXRlbXMuZm9yRWFjaChyZWNvcmQgPT4ge1xuICAgICAgICAgICAgaXRlbUlkID0gbWUuZ2V0SXRlbUlkKHJlY29yZFttZS5nZXRLZXlQcm9wZXJ0eSgpXSk7XG4gICAgICAgICAgICBOZW8uZ2V0Q29tcG9uZW50KGl0ZW1JZCkuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhDaGlwKTtcblxuZXhwb3J0IHtDaGlwIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=