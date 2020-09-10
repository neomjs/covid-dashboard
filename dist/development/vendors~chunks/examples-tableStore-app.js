self["webpackChunk"](["vendors~chunks/examples-tableStore-app"],{

/***/ "./node_modules/neo.mjs/examples/tableStore/MainContainer.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableStore/MainContainer.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_selection_table_CellColumnModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/selection/table/CellColumnModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellColumnModel.mjs");
/* harmony import */ var _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/selection/table/CellModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellModel.mjs");
/* harmony import */ var _src_selection_table_CellRowModel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/selection/table/CellRowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/CellRowModel.mjs");
/* harmony import */ var _src_selection_table_ColumnModel_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/selection/table/ColumnModel.mjs */ "./node_modules/neo.mjs/src/selection/table/ColumnModel.mjs");
/* harmony import */ var _MainStore_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainStore.mjs */ "./node_modules/neo.mjs/examples/tableStore/MainStore.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_selection_table_RowModel_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/selection/table/RowModel.mjs */ "./node_modules/neo.mjs/src/selection/table/RowModel.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");










/**
 * @class TestApp.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_8__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount: true,
        layout   : {ntype: 'vbox', align: 'stretch'},
        style    : {padding: '20px'},

        items: [{
            ntype: 'toolbar',
            flex : '0 1 auto',
            style: {marginBottom: '5px', padding: 0},

            items: [{
                ntype: 'label',
                style: {margin: '4px 10px 0 5px'},
                text : 'Table & Store (Click or Drag Table Headers)'
            }, {
                ntype: 'component',
                flex : 1
            }, {
                ntype       : 'button',
                iconCls     : 'fa fa-edit',
                style       : {marginRight: '10px'},
                text        : 'Change Cell Value',
                domListeners: {
                    click: {
                        fn: function () {
                            let tabContainer = Neo.getComponent('myTableStoreContainer'),
                                store        = tabContainer.store,
                                record       = store.items[0];

                            record.firstname = record.firstname + '<span style="color:red;"> Foo</span>';
                        }
                    }
                }
            }, {
                ntype       : 'button',
                iconCls     : 'fa fa-edit',
                style       : {marginRight: '10px'},
                text        : 'Update all cells 100x',
                domListeners: {
                    click: {
                        fn: function () {
                            let tabContainer = Neo.getComponent('myTableStoreContainer'),
                                store        = tabContainer.store,
                                countRecords = store.getCount(),
                                j            = 0,
                                repeats      = 100,
                                string1      = '<span style="color:red;">Foo</span> ',
                                string2      = '<span style="color:blue;">Bar</span> ',
                                i, newValue, record;

                            for (; j < repeats; j++) {
                                for (i=0; i < countRecords; i++) {
                                    record = store.items[i];
                                    Object.entries(record).forEach(([field, value]) => {
                                        if (field !== 'githubId') {
                                            if (value.includes(string1)) {
                                                newValue = value.replace(string1, string2);
                                            } else if (value.includes(string2)) {
                                                newValue = value.replace(string2, string1);
                                            } else {
                                                newValue = string1 + value;
                                            }

                                            record[field] = newValue; // triggers the change
                                        }
                                    });
                                }
                            }
                        }
                    }
                }
            }, {
                ntype       : 'button',
                iconCls     : 'fa fa-sync-alt',
                text        : 'Reset Sorting',
                domListeners: {
                    click: {
                        fn: function () {
                            Neo.getComponent('myTableStoreContainer').store.sort();
                        }
                    }
                }
            }]
        }, {
            ntype: 'toolbar',
            flex : '0 1 auto',

            style: {
                marginBottom: '10px',
                padding     : 0
            },

            items: [{
                ntype: 'label',
                text : 'Selection Model:',
                style: {
                    margin: '0 10px 0 5px'
                }
            }, {
                ntype         : 'radiofield',
                checked       : true,
                hideLabel     : true,
                hideValueLabel: false,
                name          : 'selectionModel',
                value         : 'selection-table-cellmodel',
                valueLabelText: 'Cell',
                listeners: {
                    change: function(data) {
                        if (data.value) {
                            Neo.getComponent('myTableStoreContainer').selectionModel = {
                                ntype: this.value
                            };
                        }
                    }
                }
            }, {
                ntype         : 'radiofield',
                hideLabel     : true,
                hideValueLabel: false,
                name          : 'selectionModel',
                style         : {marginLeft: '20px'},
                value         : 'selection-table-columnmodel',
                valueLabelText: 'Column',
                listeners: {
                    change: function(data) {
                        if (data.value) {
                            Neo.getComponent('myTableStoreContainer').selectionModel = {
                                ntype: this.value
                            };
                        }
                    }
                }
            }, {
                ntype         : 'radiofield',
                hideLabel     : true,
                hideValueLabel: false,
                name          : 'selectionModel',
                style         : {marginLeft: '20px'},
                value         : 'selection-table-rowmodel',
                valueLabelText: 'Row',
                listeners: {
                    change: function(data) {
                        if (data.value) {
                            Neo.getComponent('myTableStoreContainer').selectionModel = {
                                ntype: this.value
                            };
                        }
                    }
                }
            }, {
                ntype         : 'radiofield',
                hideLabel     : true,
                hideValueLabel: false,
                name          : 'selectionModel',
                style         : {marginLeft: '20px'},
                value         : 'selection-table-cellcolumnmodel',
                valueLabelText: 'Cell & Column',
                listeners: {
                    change: function(data) {
                        if (data.value) {
                            Neo.getComponent('myTableStoreContainer').selectionModel = {
                                ntype: this.value
                            };
                        }
                    }
                }
            }, {
                ntype         : 'radiofield',
                hideLabel     : true,
                hideValueLabel: false,
                name          : 'selectionModel',
                style         : {marginLeft: '20px'},
                value         : 'selection-table-cellrowmodel',
                valueLabelText: 'Cell & Row',
                listeners: {
                    change: function(data) {
                        if (data.value) {
                            Neo.getComponent('myTableStoreContainer').selectionModel = {
                                ntype: this.value
                            };
                        }
                    }
                }
            }]
        }, {
            ntype         : 'table-container',
            id            : 'myTableStoreContainer',
            selectionModel: _src_selection_table_CellModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            store         : _MainStore_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            width         : '100%',
            wrapperStyle  : {height: '300px'},

            columns: [{
                text     : 'Firstname',
                dataField: 'firstname'
            }, {
                text     : 'Lastname',
                dataField: 'lastname'
            }, {
                text     : 'Github Id',
                dataField: 'githubId'
            }, {
                text     : 'Country',
                dataField: 'country'
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tableStore/MainModel.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableStore/MainModel.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainModel; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


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

/***/ "./node_modules/neo.mjs/examples/tableStore/MainStore.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableStore/MainStore.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStore; });
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainModel.mjs */ "./node_modules/neo.mjs/examples/tableStore/MainModel.mjs");



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
        }]
    }}
}

Neo.applyClassConfig(MainStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tableStore/app.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tableStore/app.mjs ***!
  \**********************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/tableStore/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/tableStore/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZVN0b3JlL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYmxlU3RvcmUvTWFpbk1vZGVsLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZVN0b3JlL01haW5TdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvdGFibGVTdG9yZS9hcHAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRFO0FBQ047QUFDRztBQUNEO0FBQzFCO0FBQ2U7QUFDUTtBQUNUO0FBQ0c7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1FQUFRO0FBQ3BDLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGdDQUFnQztBQUNwRCxvQkFBb0IsZ0JBQWdCOztBQUVwQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0NBQWdDOztBQUVwRDtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSwrQkFBK0Isb0JBQW9CO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLCtCQUErQixvQkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVB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QkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLXRhYmxlU3RvcmUtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENlbGxDb2x1bW5Nb2RlbCBmcm9tICcuLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxDb2x1bW5Nb2RlbC5tanMnO1xuaW1wb3J0IENlbGxNb2RlbCAgICAgICBmcm9tICcuLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxNb2RlbC5tanMnO1xuaW1wb3J0IENlbGxSb3dNb2RlbCAgICBmcm9tICcuLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NlbGxSb3dNb2RlbC5tanMnO1xuaW1wb3J0IENvbHVtbk1vZGVsICAgICBmcm9tICcuLi8uLi9zcmMvc2VsZWN0aW9uL3RhYmxlL0NvbHVtbk1vZGVsLm1qcyc7XG5pbXBvcnQgTWFpblN0b3JlICAgICAgIGZyb20gJy4vTWFpblN0b3JlLm1qcyc7XG5pbXBvcnQgUmFkaW8gICAgICAgICAgIGZyb20gJy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyc7XG5pbXBvcnQgUm93TW9kZWwgICAgICAgIGZyb20gJy4uLy4uL3NyYy9zZWxlY3Rpb24vdGFibGUvUm93TW9kZWwubWpzJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciAgZnJvbSAnLi4vLi4vc3JjL3RhYmxlL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IFZpZXdwb3J0ICAgICAgICBmcm9tICcuLi8uLi9zcmMvY29udGFpbmVyL1ZpZXdwb3J0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcbiAgICAgICAgbGF5b3V0ICAgOiB7bnR5cGU6ICd2Ym94JywgYWxpZ246ICdzdHJldGNoJ30sXG4gICAgICAgIHN0eWxlICAgIDoge3BhZGRpbmc6ICcyMHB4J30sXG5cbiAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgZmxleCA6ICcwIDEgYXV0bycsXG4gICAgICAgICAgICBzdHlsZToge21hcmdpbkJvdHRvbTogJzVweCcsIHBhZGRpbmc6IDB9LFxuXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZToge21hcmdpbjogJzRweCAxMHB4IDAgNXB4J30sXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdUYWJsZSAmIFN0b3JlIChDbGljayBvciBEcmFnIFRhYmxlIEhlYWRlcnMpJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICBmbGV4IDogMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgIDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgaWNvbkNscyAgICAgOiAnZmEgZmEtZWRpdCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgOiB7bWFyZ2luUmlnaHQ6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnQ2hhbmdlIENlbGwgVmFsdWUnLFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFiQ29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZVN0b3JlQ29udGFpbmVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlICAgICAgICA9IHRhYkNvbnRhaW5lci5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkICAgICAgID0gc3RvcmUuaXRlbXNbMF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmQuZmlyc3RuYW1lID0gcmVjb3JkLmZpcnN0bmFtZSArICc8c3BhbiBzdHlsZT1cImNvbG9yOnJlZDtcIj4gRm9vPC9zcGFuPic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBpY29uQ2xzICAgICA6ICdmYSBmYS1lZGl0JyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICA6IHttYXJnaW5SaWdodDogJzEwcHgnfSxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdVcGRhdGUgYWxsIGNlbGxzIDEwMHgnLFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFiQ29udGFpbmVyID0gTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZVN0b3JlQ29udGFpbmVyJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlICAgICAgICA9IHRhYkNvbnRhaW5lci5zdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnRSZWNvcmRzID0gc3RvcmUuZ2V0Q291bnQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiAgICAgICAgICAgID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0cyAgICAgID0gMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcxICAgICAgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjpyZWQ7XCI+Rm9vPC9zcGFuPiAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcyICAgICAgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjpibHVlO1wiPkJhcjwvc3Bhbj4gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSwgbmV3VmFsdWUsIHJlY29yZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgcmVwZWF0czsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaT0wOyBpIDwgY291bnRSZWNvcmRzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY29yZCA9IHN0b3JlLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMocmVjb3JkKS5mb3JFYWNoKChbZmllbGQsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCAhPT0gJ2dpdGh1YklkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoc3RyaW5nMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWUucmVwbGFjZShzdHJpbmcxLCBzdHJpbmcyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5pbmNsdWRlcyhzdHJpbmcyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHN0cmluZzIsIHN0cmluZzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBzdHJpbmcxICsgdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRbZmllbGRdID0gbmV3VmFsdWU7IC8vIHRyaWdnZXJzIHRoZSBjaGFuZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGljb25DbHMgICAgIDogJ2ZhIGZhLXN5bmMtYWx0JyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdSZXNldCBTb3J0aW5nJyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZVN0b3JlQ29udGFpbmVyJykuc3RvcmUuc29ydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nLFxuXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgIDogMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgdGV4dCA6ICdTZWxlY3Rpb24gTW9kZWw6JyxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDEwcHggMCA1cHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgOiAncmFkaW9maWVsZCcsXG4gICAgICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgaGlkZUxhYmVsICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnc2VsZWN0aW9uTW9kZWwnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgOiAnc2VsZWN0aW9uLXRhYmxlLWNlbGxtb2RlbCcsXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdDZWxsJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXRDb21wb25lbnQoJ215VGFibGVTdG9yZUNvbnRhaW5lcicpLnNlbGVjdGlvbk1vZGVsID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogdGhpcy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgICA6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgICAgICAgICBoaWRlTGFiZWwgICAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdzZWxlY3Rpb25Nb2RlbCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5MZWZ0OiAnMjBweCd9LFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICAgICAgOiAnc2VsZWN0aW9uLXRhYmxlLWNvbHVtbm1vZGVsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0NvbHVtbicsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0Q29tcG9uZW50KCdteVRhYmxlU3RvcmVDb250YWluZXInKS5zZWxlY3Rpb25Nb2RlbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6IHRoaXMudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgOiAncmFkaW9maWVsZCcsXG4gICAgICAgICAgICAgICAgaGlkZUxhYmVsICAgICA6IHRydWUsXG4gICAgICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICAgICAgOiAnc2VsZWN0aW9uTW9kZWwnLFxuICAgICAgICAgICAgICAgIHN0eWxlICAgICAgICAgOiB7bWFyZ2luTGVmdDogJzIwcHgnfSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICAgICAgIDogJ3NlbGVjdGlvbi10YWJsZS1yb3dtb2RlbCcsXG4gICAgICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdSb3cnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZVN0b3JlQ29udGFpbmVyJykuc2VsZWN0aW9uTW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgIDogJ3JhZGlvZmllbGQnLFxuICAgICAgICAgICAgICAgIGhpZGVMYWJlbCAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ3NlbGVjdGlvbk1vZGVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpbkxlZnQ6ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgICA6ICdzZWxlY3Rpb24tdGFibGUtY2VsbGNvbHVtbm1vZGVsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0NlbGwgJiBDb2x1bW4nLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZVN0b3JlQ29udGFpbmVyJykuc2VsZWN0aW9uTW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICAgIDogJ3JhZGlvZmllbGQnLFxuICAgICAgICAgICAgICAgIGhpZGVMYWJlbCAgICAgOiB0cnVlLFxuICAgICAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ3NlbGVjdGlvbk1vZGVsJyxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICAgICAgIDoge21hcmdpbkxlZnQ6ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgICAgICA6ICdzZWxlY3Rpb24tdGFibGUtY2VsbHJvd21vZGVsJyxcbiAgICAgICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ0NlbGwgJiBSb3cnLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZVN0b3JlQ29udGFpbmVyJykuc2VsZWN0aW9uTW9kZWwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiB0aGlzLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG50eXBlICAgICAgICAgOiAndGFibGUtY29udGFpbmVyJyxcbiAgICAgICAgICAgIGlkICAgICAgICAgICAgOiAnbXlUYWJsZVN0b3JlQ29udGFpbmVyJyxcbiAgICAgICAgICAgIHNlbGVjdGlvbk1vZGVsOiBDZWxsTW9kZWwsXG4gICAgICAgICAgICBzdG9yZSAgICAgICAgIDogTWFpblN0b3JlLFxuICAgICAgICAgICAgd2lkdGggICAgICAgICA6ICcxMDAlJyxcbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSAgOiB7aGVpZ2h0OiAnMzAwcHgnfSxcblxuICAgICAgICAgICAgY29sdW1uczogW3tcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdGaXJzdG5hbWUnLFxuICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2ZpcnN0bmFtZSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdMYXN0bmFtZScsXG4gICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnbGFzdG5hbWUnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnR2l0aHViIElkJyxcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdnaXRodWJJZCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdDb3VudHJ5JyxcbiAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb3VudHJ5J1xuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluTW9kZWxcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIE1haW5Nb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbk1vZGVsJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1tb2RlbCcsXG5cbiAgICAgICAgZmllbGRzOiBbe1xuICAgICAgICAgICAgbmFtZTogJ2NvdW50cnknLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBuYW1lOiAnZ2l0aHViSWQnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2xhc3RuYW1lJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbk1vZGVsKTtcblxuZXhwb3J0IHtNYWluTW9kZWwgYXMgZGVmYXVsdH07IiwiaW1wb3J0IFN0b3JlIGZyb20gJy4uLy4uL3NyYy9kYXRhL1N0b3JlLm1qcyc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnLi9NYWluTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluU3RvcmVcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIE1haW5TdG9yZSBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpblN0b3JlJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1zdG9yZScsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdnaXRodWJJZCcsXG4gICAgICAgIG1vZGVsICAgICAgOiBNb2RlbCxcblxuICAgICAgICBkYXRhOiBbe1xuICAgICAgICAgICAgY291bnRyeSAgOiAnR2VybWFueScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdUb2JpYXMnLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAndG9iaXUnLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnVWhsaWcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ1VTQScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdSaWNoJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ3J3YXRlcnMnLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnV2F0ZXJzJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdHZXJtYW55JyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ05pbHMnLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAnbXJzdW5zaGluZScsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdEZWhsJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdVU0EnLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnR2VyYXJkJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ2NhbXRuYmlrZXJyd2MnLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnSG9yYW4nXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ1Nsb3Zha2lhJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ0pvemVmJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ2pzYWthbG9zJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ1Nha2Fsb3MnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ0dlcm1hbnknLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnQmFzdGlhbicsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdiaGF1c3RlaW4nLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnSGF1c3RlaW4nXG4gICAgICAgIH1dXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpblN0b3JlKTtcblxuZXhwb3J0IHtNYWluU3RvcmUgYXMgZGVmYXVsdH07IiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL3RhYmxlU3RvcmUvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1Rlc3RBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi9CYXNlLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5jb250YWluZXIuVmlld3BvcnRcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBWaWV3cG9ydCBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBjbGFzc05hbWU9J05lby5jb250YWluZXIuVmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5jb250YWluZXIuVmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ndmlld3BvcnQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAndmlld3BvcnQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogdHJ1ZSBhcHBsaWVzICduZW8tYm9keS12aWV3cG9ydCcgdG8gdGhlIGRvY3VtZW50LmJvZHlcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gYXBwbHlCb2R5Q2xzPXRydWVcbiAgICAgICAgICovXG4gICAgICAgIGFwcGx5Qm9keUNsczogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ1tdfSBjbHM9WyduZW8tdmlld3BvcnQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby12aWV3cG9ydCddXG4gICAgfX1cblxuICAgIG9uQ29uc3RydWN0ZWQoKSB7XG4gICAgICAgIHN1cGVyLm9uQ29uc3RydWN0ZWQoKTtcblxuICAgICAgICBpZiAodGhpcy5hcHBseUJvZHlDbHMpIHtcbiAgICAgICAgICAgIE5lby5tYWluLkRvbUFjY2Vzcy5hcHBseUJvZHlDbHMoe1xuICAgICAgICAgICAgICAgIGFwcE5hbWU6IHRoaXMuYXBwTmFtZSxcbiAgICAgICAgICAgICAgICBjbHMgICAgOiBbJ25lby1ib2R5LXZpZXdwb3J0J11cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhWaWV3cG9ydCk7XG5cbmV4cG9ydCB7Vmlld3BvcnQgYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==