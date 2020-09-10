self["webpackChunk"](["vendors~chunks/examples-table-container-app"],{

/***/ "./node_modules/neo.mjs/examples/table/container/MainContainer.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/table/container/MainContainer.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_selection_table_CellColumnModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/selection/table/CellColumnModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellColumnModel.mjs");
/* harmony import */ var _src_selection_table_CellColumnRowModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/selection/table/CellColumnRowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellColumnRowModel.mjs");
/* harmony import */ var _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/selection/table/CellModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs");
/* harmony import */ var _src_selection_table_CellRowModel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/selection/table/CellRowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellRowModel.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_selection_table_ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/selection/table/ColumnModel.mjs */ "./node_modules/neo.mjs/src/selection/table/ColumnModel.mjs");
/* harmony import */ var _MainStore_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainStore.mjs */ "./node_modules/neo.mjs/examples/table/container/MainStore.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../src/selection/table/RowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");












/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 130,
        configPanelFlex     : 1.5,
        exampleComponentFlex: 3,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        const selectionModelRadioDefaults = {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_8__["default"],
            hideValueLabel: false,
            labelText     : '',
            name          : 'selectionModel',
            width         : 350
        };

        return [{
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_7__["default"],
            labelText: 'height',
            listeners: {change: me.onConfigChange.bind(me, 'height')},
            maxValue : 800,
            minValue : 225,
            stepSize : 5,
            value    : me.exampleComponent.height
        }, {
            ...selectionModelRadioDefaults,
            checked       : me.exampleComponent.selectionModel.ntype === 'selection-table-cellmodel',
            labelText     : 'selectionModel',
            listeners     : {change: me.onRadioChange.bind(me, 'selectionModel', _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])},
            style         : {marginTop: '10px'},
            valueLabelText: 'Cell'
        }, {
            ...selectionModelRadioDefaults,
            checked       : me.exampleComponent.selectionModel.ntype === 'selection-table-columnmodel',
            listeners     : {change: me.onRadioChange.bind(me, 'selectionModel', _src_selection_table_ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])},
            valueLabelText: 'Column'
        }, {
            ...selectionModelRadioDefaults,
            checked       : me.exampleComponent.selectionModel.ntype === 'selection-table-rowmodel',
            listeners     : {change: me.onRadioChange.bind(me, 'selectionModel', _src_selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])},
            valueLabelText: 'Row'
        }, {
            ...selectionModelRadioDefaults,
            checked       : me.exampleComponent.selectionModel.ntype === 'selection-table-cellcolumnmodel',
            listeners     : {change: me.onRadioChange.bind(me, 'selectionModel', _src_selection_table_CellColumnModel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])},
            valueLabelText: 'Cell & Column'
        }, {
            ...selectionModelRadioDefaults,
            checked       : me.exampleComponent.selectionModel.ntype === 'selection-table-cellrowmodel',
            listeners     : {change: me.onRadioChange.bind(me, 'selectionModel', _src_selection_table_CellRowModel_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])},
            valueLabelText: 'Cell & Row'
        }, {
            ...selectionModelRadioDefaults,
            checked       : me.exampleComponent.selectionModel.ntype === 'selection-table-cellcolumnrowmodel',
            listeners     : {change: me.onRadioChange.bind(me, 'selectionModel', _src_selection_table_CellColumnRowModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])},
            valueLabelText: 'Cell & Column & Row'
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_10__["default"], {
            autoRender    : false,
            id            : 'myTableStoreContainer',
            selectionModel: _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            store         : _MainStore_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],

            columns: [
                {dataField: 'firstname', text: 'Firstname'},
                {dataField: 'lastname',  text: 'Lastname'},
                {dataField: 'githubId',  text: 'Github Id'},
                {dataField: 'country',   text: 'Country'}
            ]
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/table/container/MainModel.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/table/container/MainModel.mjs ***!
  \*********************************************************************/
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

        fields: [{
            name: 'country',
            type: 'string'
        }, {
            name: 'firstname',
            type: 'string'
        }, {
            name: 'githubId',
            type: 'string'
        }, {
            name: 'lastname',
            type: 'string'
        }]
    }}
}

Neo.applyClassConfig(MainModel);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/table/container/MainStore.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/table/container/MainStore.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStore; });
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainModel.mjs */ "./node_modules/neo.mjs/examples/table/container/MainModel.mjs");



/**
 * @class TestApp.MainStore
 * @extends Neo.data.Store
 */
class MainStore extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainStore',
        ntype    : 'main-store',

        keyProperty: 'githubId',
        model      : _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],

        data: [{
            country  : 'Germany',
            firstname: 'Tobias',
            githubId : 'tobiu',
            lastname : 'Uhlig'
        },
        {
            country  : 'USA',
            firstname: 'Rich',
            githubId : 'rwaters',
            lastname : 'Waters'
        },
        {
            country  : 'Germany',
            firstname: 'Nils',
            githubId : 'mrsunshine',
            lastname : 'Dehl'
        },
        {
            country  : 'USA',
            firstname: 'Gerard',
            githubId : 'camtnbikerrwc',
            lastname : 'Horan'
        },
        {
            country  : 'Slovakia',
            firstname: 'Jozef',
            githubId : 'jsakalos',
            lastname : 'Sakalos'
        },
        {
            country  : 'Germany',
            firstname: 'Bastian',
            githubId : 'bhaustein',
            lastname : 'Haustein'
        }]
    }}
}

Neo.applyClassConfig(MainStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/table/container/app.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/table/container/app.mjs ***!
  \***************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/table/container/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/table/container/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/selection/table/CellColumnRowModel.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/src/selection/table/CellColumnRowModel.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CellColumnRowModel; });
/* harmony import */ var _CellRowModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellRowModel.mjs");
/* harmony import */ var _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnModel.mjs */ "./node_modules/neo.mjs/src/selection/table/ColumnModel.mjs");
/* harmony import */ var _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/VDom.mjs */ "./node_modules/neo.mjs/src/util/VDom.mjs");




/**
 * @class Neo.selection.table.CellColumnRowModel
 * @extends Neo.selection.table.CellRowModel
 */
class CellColumnRowModel extends _CellRowModel_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.selection.table.CellColumnRowModel'
         * @protected
         */
        className: 'Neo.selection.table.CellColumnRowModel',
        /**
         * @member {String} ntype='selection-table-cellcolumnrowmodel'
         * @protected
         */
        ntype: 'selection-table-cellcolumnrowmodel',
        /**
         * @member {String} cls='neo-selection-cellcolumnrowmodel'
         * @protected
         */
        cls: 'neo-selection-cellcolumnrowmodel',
        /**
         * @member {String} selectedColumnCellCls='selected-column-cell'
         * @protected
         */
        selectedColumnCellCls: 'selected-column-cell',
        /**
         * @member {Array|null} selectedColumnCellIds=null
         * @protected
         */
        selectedColumnCellIds: null
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        this.selectedColumnCellIds = [];
    }

    /**
     *
     * @param {Boolean} [silent] true to prevent a vdom update
     */
    deselectAllCells(silent) {
        let me      = this,
            cellIds = [...me.selectedColumnCellIds],
            view    = me.view,
            vdom    = view.vdom;

        cellIds.forEach(cellId => {
            me.deselect(cellId, true, me.selectedColumnCellIds, me.selectedColumnCellCls);
        });

        if (!silent) {
            view.vdom = vdom;
        }
    }

    /**
     *
     * @param {Object} data
     */
    onCellClick(data) {
        let me   = this,
            id   = _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getCellId(data.path),
            columnNodeIds, index, tbodyNode;

        if (id) {
            index         = _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getColumnIndex(id, me.view.items[0].items);
            tbodyNode     = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findVdomChild(me.view.vdom, {tag: 'tbody'}).vdom;
            columnNodeIds = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getColumnNodesIds(tbodyNode, index);

            me.deselectAllCells(true);
            me.select(columnNodeIds, me.selectedColumnCellIds, me.selectedColumnCellCls);
        }

        super.onCellClick(data);
    }

    /**
     *
     * @param {Object} data
     * @param {Number} step
     */
    onNavKeyColumn(data, step) {
        let me            = this,
            idArray       = _ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].getCellId(data.path).split('__'),
            currentColumn = idArray[2],
            view          = me.view,
            dataFields    = view.columns.map(c => c.dataField),
            newIndex      = (dataFields.indexOf(currentColumn) + step) % dataFields.length,
            columnNodeIds, tbodyNode;

        while (newIndex < 0) {
            newIndex += dataFields.length;
        }

        tbodyNode     = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].findVdomChild(me.view.vdom, {tag: 'tbody'}).vdom;
        columnNodeIds = _util_VDom_mjs__WEBPACK_IMPORTED_MODULE_2__["default"].getColumnNodesIds(tbodyNode, newIndex);

        me.deselectAllCells(true);
        me.select(columnNodeIds, me.selectedColumnCellIds, me.selectedColumnCellCls);

        super.onNavKeyColumn(data, step);
    }

    /**
     *
     */
    unregister() {
        this.deselectAllCells();
        super.unregister();
    }
}

Neo.applyClassConfig(CellColumnRowModel);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZS9jb250YWluZXIvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGUvY29udGFpbmVyL01haW5Nb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGUvY29udGFpbmVyL01haW5TdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGUvY29udGFpbmVyL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL3NlbGVjdGlvbi90YWJsZS9DZWxsQ29sdW1uUm93TW9kZWwubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUNHO0FBQ1Q7QUFDRztBQUNkO0FBQ2E7QUFDN0I7QUFDbUI7QUFDRDtBQUNRO0FBQ1Q7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFxQjtBQUNqRCx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsa0VBQVc7QUFDbEM7QUFDQSx3QkFBd0IsNkNBQTZDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvREFBb0QsMEVBQVMsRUFBRTtBQUM1Riw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSw2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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0RBQVEsOEJBQThCLGFBQWE7QUFDM0Usd0JBQXdCLHNEQUFROztBQUVoQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy10YWJsZS1jb250YWluZXItYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGxDb2x1bW5Nb2RlbCAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxDb2x1bW5Nb2RlbC5tanMnO1xuaW1wb3J0IENlbGxDb2x1bW5Sb3dNb2RlbCAgICBmcm9tICcuLi8uLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxDb2x1bW5Sb3dNb2RlbC5tanMnO1xuaW1wb3J0IENlbGxNb2RlbCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxNb2RlbC5tanMnO1xuaW1wb3J0IENlbGxSb3dNb2RlbCAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxSb3dNb2RlbC5tanMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25WaWV3cG9ydCBmcm9tICcuLi8uLi9Db25maWd1cmF0aW9uVmlld3BvcnQubWpzJztcbmltcG9ydCBDb2x1bW5Nb2RlbCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3NlbGVjdGlvbi90YWJsZS9Db2x1bW5Nb2RlbC5tanMnO1xuaW1wb3J0IE1haW5TdG9yZSAgICAgICAgICAgICBmcm9tICcuL01haW5TdG9yZS5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzJztcbmltcG9ydCBSYWRpbyAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvUmFkaW8ubWpzJztcbmltcG9ydCBSb3dNb2RlbCAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL3NlbGVjdGlvbi90YWJsZS9Sb3dNb2RlbC5tanMnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29uZmlndXJhdGlvblZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgY29uZmlnSXRlbUxhYmVsV2lkdGg6IDEzMCxcbiAgICAgICAgY29uZmlnUGFuZWxGbGV4ICAgICA6IDEuNSxcbiAgICAgICAgZXhhbXBsZUNvbXBvbmVudEZsZXg6IDMsXG4gICAgICAgIGxheW91dCAgICAgICAgICAgICAgOiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uTW9kZWxSYWRpb0RlZmF1bHRzID0ge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdzZWxlY3Rpb25Nb2RlbCcsXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgIDogMzUwXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnaGVpZ2h0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hlaWdodCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogODAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiAyMjUsXG4gICAgICAgICAgICBzdGVwU2l6ZSA6IDUsXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGVpZ2h0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGlvbk1vZGVsUmFkaW9EZWZhdWx0cyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnNlbGVjdGlvbk1vZGVsLm50eXBlID09PSAnc2VsZWN0aW9uLXRhYmxlLWNlbGxtb2RlbCcsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJ3NlbGVjdGlvbk1vZGVsJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdzZWxlY3Rpb25Nb2RlbCcsIENlbGxNb2RlbCl9LFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0NlbGwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGlvbk1vZGVsUmFkaW9EZWZhdWx0cyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnNlbGVjdGlvbk1vZGVsLm50eXBlID09PSAnc2VsZWN0aW9uLXRhYmxlLWNvbHVtbm1vZGVsJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdzZWxlY3Rpb25Nb2RlbCcsIENvbHVtbk1vZGVsKX0sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0NvbHVtbidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLi4uc2VsZWN0aW9uTW9kZWxSYWRpb0RlZmF1bHRzLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuc2VsZWN0aW9uTW9kZWwubnR5cGUgPT09ICdzZWxlY3Rpb24tdGFibGUtcm93bW9kZWwnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ3NlbGVjdGlvbk1vZGVsJywgUm93TW9kZWwpfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnUm93J1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAuLi5zZWxlY3Rpb25Nb2RlbFJhZGlvRGVmYXVsdHMsXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5zZWxlY3Rpb25Nb2RlbC5udHlwZSA9PT0gJ3NlbGVjdGlvbi10YWJsZS1jZWxsY29sdW1ubW9kZWwnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ3NlbGVjdGlvbk1vZGVsJywgQ2VsbENvbHVtbk1vZGVsKX0sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0NlbGwgJiBDb2x1bW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC4uLnNlbGVjdGlvbk1vZGVsUmFkaW9EZWZhdWx0cyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnNlbGVjdGlvbk1vZGVsLm50eXBlID09PSAnc2VsZWN0aW9uLXRhYmxlLWNlbGxyb3dtb2RlbCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnc2VsZWN0aW9uTW9kZWwnLCBDZWxsUm93TW9kZWwpfSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnQ2VsbCAmIFJvdydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLi4uc2VsZWN0aW9uTW9kZWxSYWRpb0RlZmF1bHRzLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQuc2VsZWN0aW9uTW9kZWwubnR5cGUgPT09ICdzZWxlY3Rpb24tdGFibGUtY2VsbGNvbHVtbnJvd21vZGVsJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdzZWxlY3Rpb25Nb2RlbCcsIENlbGxDb2x1bW5Sb3dNb2RlbCl9LFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdDZWxsICYgQ29sdW1uICYgUm93J1xuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeGFtcGxlQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShUYWJsZUNvbnRhaW5lciwge1xuICAgICAgICAgICAgYXV0b1JlbmRlciAgICA6IGZhbHNlLFxuICAgICAgICAgICAgaWQgICAgICAgICAgICA6ICdteVRhYmxlU3RvcmVDb250YWluZXInLFxuICAgICAgICAgICAgc2VsZWN0aW9uTW9kZWw6IENlbGxNb2RlbCxcbiAgICAgICAgICAgIHN0b3JlICAgICAgICAgOiBNYWluU3RvcmUsXG5cbiAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICB7ZGF0YUZpZWxkOiAnZmlyc3RuYW1lJywgdGV4dDogJ0ZpcnN0bmFtZSd9LFxuICAgICAgICAgICAgICAgIHtkYXRhRmllbGQ6ICdsYXN0bmFtZScsICB0ZXh0OiAnTGFzdG5hbWUnfSxcbiAgICAgICAgICAgICAgICB7ZGF0YUZpZWxkOiAnZ2l0aHViSWQnLCAgdGV4dDogJ0dpdGh1YiBJZCd9LFxuICAgICAgICAgICAgICAgIHtkYXRhRmllbGQ6ICdjb3VudHJ5JywgICB0ZXh0OiAnQ291bnRyeSd9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbk1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBNYWluTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Nb2RlbCcsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tbW9kZWwnLFxuXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaXJzdG5hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2dpdGh1YklkJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Nb2RlbCk7XG5cbmV4cG9ydCB7TWFpbk1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBTdG9yZSBmcm9tICcuLi8uLi8uLi9zcmMvZGF0YS9TdG9yZS5tanMnO1xuaW1wb3J0IE1vZGVsIGZyb20gJy4vTWFpbk1vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpblN0b3JlXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5TdG9yZVxuICovXG5jbGFzcyBNYWluU3RvcmUgZXh0ZW5kcyBTdG9yZSB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5TdG9yZScsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tc3RvcmUnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnZ2l0aHViSWQnLFxuICAgICAgICBtb2RlbCAgICAgIDogTW9kZWwsXG5cbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ0dlcm1hbnknLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnVG9iaWFzJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ3RvYml1JyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ1VobGlnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdVU0EnLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnUmljaCcsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdyd2F0ZXJzJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ1dhdGVycydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnR2VybWFueScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdOaWxzJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ21yc3Vuc2hpbmUnLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnRGVobCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnVVNBJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ0dlcmFyZCcsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdjYW10bmJpa2VycndjJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ0hvcmFuJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdTbG92YWtpYScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdKb3plZicsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdqc2FrYWxvcycsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdTYWthbG9zJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdHZXJtYW55JyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ0Jhc3RpYW4nLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAnYmhhdXN0ZWluJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ0hhdXN0ZWluJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5TdG9yZSk7XG5cbmV4cG9ydCB7TWFpblN0b3JlIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy90YWJsZS9jb250YWluZXIvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1Rlc3RBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBDZWxsUm93TW9kZWwgZnJvbSAnLi9DZWxsUm93TW9kZWwubWpzJztcbmltcG9ydCBDb2x1bW5Nb2RlbCAgZnJvbSAnLi9Db2x1bW5Nb2RlbC5tanMnO1xuaW1wb3J0IFZEb21VdGlsICAgICBmcm9tICcuLi8uLi91dGlsL1ZEb20ubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLnNlbGVjdGlvbi50YWJsZS5DZWxsQ29sdW1uUm93TW9kZWxcbiAqIEBleHRlbmRzIE5lby5zZWxlY3Rpb24udGFibGUuQ2VsbFJvd01vZGVsXG4gKi9cbmNsYXNzIENlbGxDb2x1bW5Sb3dNb2RlbCBleHRlbmRzIENlbGxSb3dNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5zZWxlY3Rpb24udGFibGUuQ2VsbENvbHVtblJvd01vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uc2VsZWN0aW9uLnRhYmxlLkNlbGxDb2x1bW5Sb3dNb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdzZWxlY3Rpb24tdGFibGUtY2VsbGNvbHVtbnJvd21vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3NlbGVjdGlvbi10YWJsZS1jZWxsY29sdW1ucm93bW9kZWwnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbHM9J25lby1zZWxlY3Rpb24tY2VsbGNvbHVtbnJvd21vZGVsJ1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6ICduZW8tc2VsZWN0aW9uLWNlbGxjb2x1bW5yb3dtb2RlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IHNlbGVjdGVkQ29sdW1uQ2VsbENscz0nc2VsZWN0ZWQtY29sdW1uLWNlbGwnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkQ29sdW1uQ2VsbENsczogJ3NlbGVjdGVkLWNvbHVtbi1jZWxsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fG51bGx9IHNlbGVjdGVkQ29sdW1uQ2VsbElkcz1udWxsXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGVjdGVkQ29sdW1uQ2VsbElkczogbnVsbFxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICB0aGlzLnNlbGVjdGVkQ29sdW1uQ2VsbElkcyA9IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbc2lsZW50XSB0cnVlIHRvIHByZXZlbnQgYSB2ZG9tIHVwZGF0ZVxuICAgICAqL1xuICAgIGRlc2VsZWN0QWxsQ2VsbHMoc2lsZW50KSB7XG4gICAgICAgIGxldCBtZSAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGNlbGxJZHMgPSBbLi4ubWUuc2VsZWN0ZWRDb2x1bW5DZWxsSWRzXSxcbiAgICAgICAgICAgIHZpZXcgICAgPSBtZS52aWV3LFxuICAgICAgICAgICAgdmRvbSAgICA9IHZpZXcudmRvbTtcblxuICAgICAgICBjZWxsSWRzLmZvckVhY2goY2VsbElkID0+IHtcbiAgICAgICAgICAgIG1lLmRlc2VsZWN0KGNlbGxJZCwgdHJ1ZSwgbWUuc2VsZWN0ZWRDb2x1bW5DZWxsSWRzLCBtZS5zZWxlY3RlZENvbHVtbkNlbGxDbHMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXNpbGVudCkge1xuICAgICAgICAgICAgdmlldy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkNlbGxDbGljayhkYXRhKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkICAgPSBDb2x1bW5Nb2RlbC5nZXRDZWxsSWQoZGF0YS5wYXRoKSxcbiAgICAgICAgICAgIGNvbHVtbk5vZGVJZHMsIGluZGV4LCB0Ym9keU5vZGU7XG5cbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICBpbmRleCAgICAgICAgID0gQ29sdW1uTW9kZWwuZ2V0Q29sdW1uSW5kZXgoaWQsIG1lLnZpZXcuaXRlbXNbMF0uaXRlbXMpO1xuICAgICAgICAgICAgdGJvZHlOb2RlICAgICA9IFZEb21VdGlsLmZpbmRWZG9tQ2hpbGQobWUudmlldy52ZG9tLCB7dGFnOiAndGJvZHknfSkudmRvbTtcbiAgICAgICAgICAgIGNvbHVtbk5vZGVJZHMgPSBWRG9tVXRpbC5nZXRDb2x1bW5Ob2Rlc0lkcyh0Ym9keU5vZGUsIGluZGV4KTtcblxuICAgICAgICAgICAgbWUuZGVzZWxlY3RBbGxDZWxscyh0cnVlKTtcbiAgICAgICAgICAgIG1lLnNlbGVjdChjb2x1bW5Ob2RlSWRzLCBtZS5zZWxlY3RlZENvbHVtbkNlbGxJZHMsIG1lLnNlbGVjdGVkQ29sdW1uQ2VsbENscyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdXBlci5vbkNlbGxDbGljayhkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHN0ZXBcbiAgICAgKi9cbiAgICBvbk5hdktleUNvbHVtbihkYXRhLCBzdGVwKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgID0gdGhpcyxcbiAgICAgICAgICAgIGlkQXJyYXkgICAgICAgPSBDb2x1bW5Nb2RlbC5nZXRDZWxsSWQoZGF0YS5wYXRoKS5zcGxpdCgnX18nKSxcbiAgICAgICAgICAgIGN1cnJlbnRDb2x1bW4gPSBpZEFycmF5WzJdLFxuICAgICAgICAgICAgdmlldyAgICAgICAgICA9IG1lLnZpZXcsXG4gICAgICAgICAgICBkYXRhRmllbGRzICAgID0gdmlldy5jb2x1bW5zLm1hcChjID0+IGMuZGF0YUZpZWxkKSxcbiAgICAgICAgICAgIG5ld0luZGV4ICAgICAgPSAoZGF0YUZpZWxkcy5pbmRleE9mKGN1cnJlbnRDb2x1bW4pICsgc3RlcCkgJSBkYXRhRmllbGRzLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbHVtbk5vZGVJZHMsIHRib2R5Tm9kZTtcblxuICAgICAgICB3aGlsZSAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgICAgICBuZXdJbmRleCArPSBkYXRhRmllbGRzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRib2R5Tm9kZSAgICAgPSBWRG9tVXRpbC5maW5kVmRvbUNoaWxkKG1lLnZpZXcudmRvbSwge3RhZzogJ3Rib2R5J30pLnZkb207XG4gICAgICAgIGNvbHVtbk5vZGVJZHMgPSBWRG9tVXRpbC5nZXRDb2x1bW5Ob2Rlc0lkcyh0Ym9keU5vZGUsIG5ld0luZGV4KTtcblxuICAgICAgICBtZS5kZXNlbGVjdEFsbENlbGxzKHRydWUpO1xuICAgICAgICBtZS5zZWxlY3QoY29sdW1uTm9kZUlkcywgbWUuc2VsZWN0ZWRDb2x1bW5DZWxsSWRzLCBtZS5zZWxlY3RlZENvbHVtbkNlbGxDbHMpO1xuXG4gICAgICAgIHN1cGVyLm9uTmF2S2V5Q29sdW1uKGRhdGEsIHN0ZXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgdW5yZWdpc3RlcigpIHtcbiAgICAgICAgdGhpcy5kZXNlbGVjdEFsbENlbGxzKCk7XG4gICAgICAgIHN1cGVyLnVucmVnaXN0ZXIoKTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENlbGxDb2x1bW5Sb3dNb2RlbCk7XG5cbmV4cG9ydCB7Q2VsbENvbHVtblJvd01vZGVsIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=