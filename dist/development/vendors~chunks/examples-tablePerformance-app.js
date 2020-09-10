self["webpackChunk"](["vendors~chunks/examples-tablePerformance-app"],{

/***/ "./node_modules/neo.mjs/examples/tablePerformance/MainContainer.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tablePerformance/MainContainer.mjs ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");




/**
 * @class TestApp.MainContainer
 * @extends Neo.container.Base
 */
class MainContainer extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount: true,

        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                ntype: 'toolbar',
                flex : '0 1 auto',

                itemDefaults: {
                    ntype: 'button',
                    style: {
                        margin: '0 10px 0 0'
                    }
                },

                style: {
                    marginBottom: '10px',
                    padding     : 0
                },

                items: [
                    {
                        ntype: 'label',
                        text : 'TableContainer App1',
                        style: {
                            margin: '4px 10px 0 5px'
                        }
                    },
                    {
                        ntype: 'component',
                        flex : 5
                    },
                    {
                        ntype     : 'numberfield',
                        clearable : false,
                        id        : 'amountRows',
                        labelText : 'Rows:',
                        labelWidth: 50,
                        maxValue  : 1500,
                        minValue  : 1,
                        value     : 20,
                        width     : 120
                    },
                    {
                        ntype     : 'numberfield',
                        clearable : false,
                        id        : 'interval',
                        labelText : 'Interval:',
                        labelWidth: 62,
                        maxValue  : 5000,
                        minValue  : 10,
                        value     : 20,
                        width     : 130
                    },
                    {
                        iconCls     : 'fa fa-sync-alt',
                        text        : 'Refresh Data',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let rows = Neo.getComponent('amountRows').value;
                                    Neo.getComponent('myTableContainer').createRandomViewData(rows);
                                }
                            }
                        }
                    },
                    {
                        iconCls     : 'fa fa-sync-alt',
                        style       : {margin:0},
                        text        : 'Refresh 100x',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let interval    = Neo.getComponent('interval').value,
                                        rows        = Neo.getComponent('amountRows').value,
                                        maxRefreshs = 100,
                                        intervalId  = setInterval(function () {
                                            if (maxRefreshs < 1) {
                                                clearInterval(intervalId);
                                            }

                                            Neo.getComponent('myTableContainer').createRandomViewData(rows);
                                            maxRefreshs--;
                                        }, interval);
                                }
                            }
                        }
                    }
                ]
            },
            {
                ntype           : 'table-container',
                id              : 'myTableContainer',
                amountRows      : 20, // testing var
                createRandomData: true,
                width           : '100%',

                wrapperStyle: {
                    height: '300px'
                },

                columnDefaults: {
                    renderer: function(data) {
                        return {
                            html : data.value,
                            style: {
                                backgroundColor: data.record[data.dataField + 'style']
                            }
                        }
                    }
                },

                columns: [
                    {
                        text     : 'Dock Left 1',
                        dataField: 'column0',
                        dock     : 'left',
                        width    : 200
                    },
                    {
                        text     : 'Header 2',
                        dataField: 'column1'
                    },
                    {
                        text     : 'Header 3',
                        dataField: 'column2'
                    },
                    {
                        text     : 'Header 4',
                        dataField: 'column3'
                    },
                    {
                        text     : 'Header 5',
                        dataField: 'column4'
                    },
                    {
                        text     : 'Header 6',
                        dataField: 'column5'
                    },
                    {
                        text     : 'Header 7',
                        dataField: 'column6'
                    },
                    {
                        text     : 'Header 8',
                        dataField: 'column7'
                    },
                    {
                        text     : 'Header 9',
                        dataField: 'column8'
                    },
                    {
                        text     : 'Dock Right 1',
                        dataField: 'column9',
                        dock     : 'right',
                        width    : 200
                    }
                ]
            }
        ]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tablePerformance/MainContainer2.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tablePerformance/MainContainer2.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer2; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");



/**
 * @class TestApp2.MainContainer2
 * @extends Neo.container.Base
 */
class MainContainer2 extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp2.MainContainer2',
        ntype    : 'main-container2',

        autoMount: true,

        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                ntype: 'toolbar',
                flex : '0 1 auto',

                itemDefaults: {
                    ntype: 'button',
                    style: {
                        margin: '0 10px 0 0'
                    }
                },

                style: {
                    marginBottom: '10px',
                    padding     : 0
                },

                items: [
                    {
                        ntype: 'label',
                        text : 'TableContainer App2',
                        style: {
                            margin: '4px 10px 0 5px'
                        }
                    },
                    {
                        ntype: 'component',
                        flex : 5
                    },
                    {
                        ntype     : 'numberfield',
                        clearable : false,
                        id        : 'amountRows2',
                        labelText : 'Rows:',
                        labelWidth: 50,
                        maxValue  : 1500,
                        minValue  : 1,
                        value     : 50,
                        width     : 120
                    },
                    {
                        ntype     : 'numberfield',
                        clearable : false,
                        id        : 'interval2',
                        labelText : 'Interval:',
                        labelWidth: 62,
                        maxValue  : 5000,
                        minValue  : 10,
                        value     : 30,
                        width     : 130
                    },
                    {
                        iconCls     : 'fa fa-sync-alt',
                        text        : 'Refresh Data',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let rows = Neo.getComponent('amountRows2').value;
                                    Neo.getComponent('myTableContainer2').createRandomViewData(rows);
                                }
                            }
                        }
                    },
                    {
                        iconCls     : 'fa fa-sync-alt',
                        style       : {margin:0},
                        text        : 'Refresh 100x',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let interval = Neo.getComponent('interval2').value,
                                        rows     = Neo.getComponent('amountRows2').value,
                                        maxRefreshs = 100,
                                        intervalId = setInterval(function(){
                                            if (maxRefreshs < 1) {
                                                clearInterval(intervalId);
                                            }

                                            Neo.getComponent('myTableContainer2').createRandomViewData(rows);
                                            maxRefreshs--;
                                        }, interval);
                                }
                            }
                        }
                    }
                ]
            },
            {
                ntype           : 'table-container',
                id              : 'myTableContainer2',
                amountRows      : 50, // testing var
                createRandomData: true,
                width           : '100%',

                columnDefaults: {
                    renderer: function(data) {
                        return {
                            html : data.value,
                            style: {
                                backgroundColor: data.record[data.dataField + 'style']
                            }
                        }
                    }
                },

                wrapperStyle: {
                    height: '300px'
                },

                columns: [
                    {
                        text     : 'Dock Left 1',
                        dataField: 'column0',
                        dock     : 'left',
                        width    : 200
                    },
                    {
                        text     : 'Dock Left 2',
                        dataField: 'column1',
                        dock     : 'left',
                        width    : 200
                    },
                    {
                        text     : 'Header 3',
                        dataField: 'column2'
                    },
                    {
                        text     : 'Header 4',
                        dataField: 'column3'
                    },
                    {
                        text     : 'Header 5',
                        dataField: 'column4'
                    },
                    {
                        text     : 'Header 6',
                        dataField: 'column5'
                    },
                    {
                        text     : 'Header 7',
                        dataField: 'column6'
                    },
                    {
                        text     : 'Header 8',
                        dataField: 'column7'
                    },
                    {
                        text     : 'Header 9',
                        dataField: 'column8'
                    },
                    {
                        text     : 'Header 10',
                        dataField: 'column9'
                    }
                ]
            }
        ]
    }}
}

Neo.applyClassConfig(MainContainer2);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tablePerformance/MainContainer3.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tablePerformance/MainContainer3.mjs ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer3; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");



/**
 * @class TestApp3.MainContainer3
 * @extends Neo.container.Base
 */
class MainContainer3 extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp3.MainContainer3',
        ntype    : 'main-container3',

        autoMount: true,

        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                ntype: 'toolbar',
                flex : '0 1 auto',

                itemDefaults: {
                    ntype: 'button',
                    style: {
                        margin: '0 10px 0 0'
                    }
                },

                style: {
                    marginBottom: '10px',
                    padding     : 0
                },

                items: [
                    {
                        ntype: 'label',
                        text : 'TableContainer App3 (Default Scollbars)',
                        style: {
                            margin: '4px 10px 0 5px'
                        }
                    },
                    {
                        ntype: 'component',
                        flex : 5
                    },
                    {
                        ntype     : 'numberfield',
                        clearable : false,
                        id        : 'amountRows3',
                        labelText : 'Rows:',
                        labelWidth: 50,
                        maxValue  : 1500,
                        minValue  : 1,
                        value     : 100,
                        width     : 120
                    },
                    {
                        ntype     : 'numberfield',
                        clearable : false,
                        id        : 'interval3',
                        labelText : 'Interval:',
                        labelWidth: 62,
                        maxValue  : 5000,
                        minValue  : 10,
                        value     : 50,
                        width     : 130
                    },
                    {
                        iconCls     : 'fa fa-sync-alt',
                        text        : 'Refresh Data',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let rows = Neo.getComponent('amountRows3').value;
                                    Neo.getComponent('myTableContainer3').createRandomViewData(rows);
                                }
                            }
                        }
                    },
                    {
                        iconCls     : 'fa fa-sync-alt',
                        text        : 'Refresh 100x',
                        style       : {margin:0},
                        domListeners: {
                            click: {
                                fn: function () {
                                    let interval = Neo.getComponent('interval3').value,
                                        rows     = Neo.getComponent('amountRows3').value,
                                        maxRefreshs = 100,
                                        intervalId = setInterval(function(){
                                            if (maxRefreshs < 1) {
                                                clearInterval(intervalId);
                                            }

                                            Neo.getComponent('myTableContainer3').createRandomViewData(rows);
                                            maxRefreshs--;
                                        }, interval);
                                }
                            }
                        }
                    }
                ]
            },
            {
                ntype              : 'table-container',
                id                 : 'myTableContainer3',
                amountRows         : 100, // testing var
                createRandomData   : true,
                useCustomScrollbars: false,
                width              : '100%',

                columnDefaults: {
                    renderer: function(data) {
                        return {
                            html : data.value,
                            style: {
                                backgroundColor: data.record[data.dataField + 'style']
                            }
                        }
                    }
                },

                wrapperStyle: {
                    height: '300px'
                },

                columns: [
                    {
                        text     : 'Dock Left 1',
                        dataField: 'column0',
                        dock     : 'left',
                        width    : 200
                    },
                    {
                        text     : 'Header 2',
                        dataField: 'column1'
                    },
                    {
                        text     : 'Header 3',
                        dataField: 'column2'
                    },
                    {
                        text     : 'Header 4',
                        dataField: 'column3'
                    },
                    {
                        text     : 'Header 5',
                        dataField: 'column4'
                    },
                    {
                        text     : 'Header 6',
                        dataField: 'column5'
                    },
                    {
                        text     : 'Header 7',
                        dataField: 'column6'
                    },
                    {
                        text     : 'Header 8',
                        dataField: 'column7'
                    },
                    {
                        text     : 'Dock Right 1',
                        dataField: 'column8',
                        dock     : 'right',
                        width    : 200
                    },
                    {
                        text     : 'Dock Right 2',
                        dataField: 'column9',
                        dock     : 'right',
                        width    : 200
                    }
                ]
            }
        ]
    }}
}

Neo.applyClassConfig(MainContainer3);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tablePerformance/app.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tablePerformance/app.mjs ***!
  \****************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/tablePerformance/MainContainer.mjs");
/* harmony import */ var _MainContainer2_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainer2.mjs */ "./node_modules/neo.mjs/examples/tablePerformance/MainContainer2.mjs");
/* harmony import */ var _MainContainer3_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainContainer3.mjs */ "./node_modules/neo.mjs/examples/tablePerformance/MainContainer3.mjs");




const onStart = () => {
    Neo.app({
        appPath : 'examples/tablePerformance/',
        mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        name    : 'TestApp',
        parentId: 'main-container'
    });

    Neo.app({
        appPath : 'examples/tablePerformance/',
        mainView: _MainContainer2_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        name    : 'TestApp2',
        parentId: 'main-container2'
    });

    Neo.app({
        appPath : 'examples/tablePerformance/',
        mainView: _MainContainer3_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
        name    : 'TestApp3',
        parentId: 'main-container3'
    });
};



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJsZVBlcmZvcm1hbmNlL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYmxlUGVyZm9ybWFuY2UvTWFpbkNvbnRhaW5lcjIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYmxlUGVyZm9ybWFuY2UvTWFpbkNvbnRhaW5lcjMubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYmxlUGVyZm9ybWFuY2UvYXBwLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNHO0FBQ0Y7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLCtEQUFTO0FBQ3JDLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUQ7QUFDQztBQUNBOztBQUVsRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMERBQWE7QUFDL0I7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLGtCQUFrQiwyREFBYztBQUNoQztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esa0JBQWtCLDJEQUFjO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFibGVQZXJmb3JtYW5jZS1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyICAgICAgZnJvbSAnLi4vLi4vc3JjL2NvbnRhaW5lci9CYXNlLm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgICAgZnJvbSAnLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSAnLi4vLi4vc3JjL3RhYmxlL0NvbnRhaW5lci5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG5cbiAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICBudHlwZTogJ3Zib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICd0b29sYmFyJyxcbiAgICAgICAgICAgICAgICBmbGV4IDogJzAgMSBhdXRvJyxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDEwcHggMCAwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICAgICA6IDBcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ1RhYmxlQ29udGFpbmVyIEFwcDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc0cHggMTBweCAwIDVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCA6IDVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ251bWJlcmZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgIDogJ2Ftb3VudFJvd3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ1Jvd3M6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWUgIDogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgICA6IDEyMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnbnVtYmVyZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgOiAnaW50ZXJ2YWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0ludGVydmFsOicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlICA6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IDIwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgIDogMTMwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgICAgIDogJ2ZhIGZhLXN5bmMtYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1JlZnJlc2ggRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBOZW8uZ2V0Q29tcG9uZW50KCdhbW91bnRSb3dzJykudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0Q29tcG9uZW50KCdteVRhYmxlQ29udGFpbmVyJykuY3JlYXRlUmFuZG9tVmlld0RhdGEocm93cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgICAgIDogJ2ZhIGZhLXN5bmMtYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICAgIDoge21hcmdpbjowfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1JlZnJlc2ggMTAweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsICAgID0gTmVvLmdldENvbXBvbmVudCgnaW50ZXJ2YWwnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzICAgICAgICA9IE5lby5nZXRDb21wb25lbnQoJ2Ftb3VudFJvd3MnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSZWZyZXNocyA9IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbElkICA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heFJlZnJlc2hzIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXRDb21wb25lbnQoJ215VGFibGVDb250YWluZXInKS5jcmVhdGVSYW5kb21WaWV3RGF0YShyb3dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVmcmVzaHMtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgICA6ICd0YWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgICA6ICdteVRhYmxlQ29udGFpbmVyJyxcbiAgICAgICAgICAgICAgICBhbW91bnRSb3dzICAgICAgOiAyMCwgLy8gdGVzdGluZyB2YXJcbiAgICAgICAgICAgICAgICBjcmVhdGVSYW5kb21EYXRhOiB0cnVlLFxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICAgICA6ICcxMDAlJyxcblxuICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICczMDBweCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgY29sdW1uRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCA6IGRhdGEudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBkYXRhLnJlY29yZFtkYXRhLmRhdGFGaWVsZCArICdzdHlsZSddXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRG9jayBMZWZ0IDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NrICAgICA6ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgIDogMjAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciAyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjEnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciAzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciA0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjMnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciA1JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciA2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciA3JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjYnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciA4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjcnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0hlYWRlciA5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjgnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0RvY2sgUmlnaHQgMScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW45JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY2sgICAgIDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgIDogMjAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb250YWluZXIgICAgICBmcm9tICcuLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAyLk1haW5Db250YWluZXIyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lcjIgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcDIuTWFpbkNvbnRhaW5lcjInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcjInLFxuXG4gICAgICAgIGF1dG9Nb3VudDogdHJ1ZSxcblxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nLFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMTBweCAwIDAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgIDogMFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnVGFibGVDb250YWluZXIgQXBwMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzRweCAxMHB4IDAgNXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4IDogNVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnbnVtYmVyZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgOiAnYW1vdW50Um93czInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ1Jvd3M6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsV2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWUgIDogMTUwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlICA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgICA6IDEyMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnbnVtYmVyZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJhYmxlIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCAgICAgICAgOiAnaW50ZXJ2YWwyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdJbnRlcnZhbDonLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxXaWR0aDogNjIsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZSAgOiA1MDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluVmFsdWUgIDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICAgOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoICAgICA6IDEzMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzICAgICA6ICdmYSBmYS1zeW5jLWFsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICAgICA6ICdSZWZyZXNoIERhdGEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb3dzID0gTmVvLmdldENvbXBvbmVudCgnYW1vdW50Um93czInKS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXRDb21wb25lbnQoJ215VGFibGVDb250YWluZXIyJykuY3JlYXRlUmFuZG9tVmlld0RhdGEocm93cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgICAgIDogJ2ZhIGZhLXN5bmMtYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICAgIDoge21hcmdpbjowfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1JlZnJlc2ggMTAweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gTmVvLmdldENvbXBvbmVudCgnaW50ZXJ2YWwyJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93cyAgICAgPSBOZW8uZ2V0Q29tcG9uZW50KCdhbW91bnRSb3dzMicpLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFJlZnJlc2hzID0gMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF4UmVmcmVzaHMgPCAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZUNvbnRhaW5lcjInKS5jcmVhdGVSYW5kb21WaWV3RGF0YShyb3dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVmcmVzaHMtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICAgICA6ICd0YWJsZS1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgICAgICA6ICdteVRhYmxlQ29udGFpbmVyMicsXG4gICAgICAgICAgICAgICAgYW1vdW50Um93cyAgICAgIDogNTAsIC8vIHRlc3RpbmcgdmFyXG4gICAgICAgICAgICAgICAgY3JlYXRlUmFuZG9tRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgICAgOiAnMTAwJScsXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIDogZGF0YS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEucmVjb3JkW2RhdGEuZGF0YUZpZWxkICsgJ3N0eWxlJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMHB4J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0RvY2sgTGVmdCAxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jayAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICA6IDIwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdEb2NrIExlZnQgMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW4xJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY2sgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uMidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uMydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uNCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uNSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uNidcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uNydcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uOCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDEwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjknXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyMik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lcjIgYXMgZGVmYXVsdH07IiwiaW1wb3J0IENvbnRhaW5lciAgICAgIGZyb20gJy4uLy4uL3NyYy9jb250YWluZXIvQmFzZS5tanMnO1xuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gJy4uLy4uL3NyYy90YWJsZS9Db250YWluZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcDMuTWFpbkNvbnRhaW5lcjNcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyMyBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwMy5NYWluQ29udGFpbmVyMycsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyMycsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcblxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG50eXBlOiAndG9vbGJhcicsXG4gICAgICAgICAgICAgICAgZmxleCA6ICcwIDEgYXV0bycsXG5cbiAgICAgICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMCAxMHB4IDAgMCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyAgICAgOiAwXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdUYWJsZUNvbnRhaW5lciBBcHAzIChEZWZhdWx0IFNjb2xsYmFycyknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc0cHggMTBweCAwIDVweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleCA6IDVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ251bWJlcmZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyYWJsZSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQgICAgICAgIDogJ2Ftb3VudFJvd3MzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dCA6ICdSb3dzOicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlICA6IDE1MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgICAgIDogMTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgIDogMTIwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgICA6ICdudW1iZXJmaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcmFibGUgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgICA6ICdpbnRlcnZhbDMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0ludGVydmFsOicsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFZhbHVlICA6IDUwMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgIDogMTMwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHMgICAgIDogJ2ZhIGZhLXN5bmMtYWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgICAgIDogJ1JlZnJlc2ggRGF0YScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvd3MgPSBOZW8uZ2V0Q29tcG9uZW50KCdhbW91bnRSb3dzMycpLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmVvLmdldENvbXBvbmVudCgnbXlUYWJsZUNvbnRhaW5lcjMnKS5jcmVhdGVSYW5kb21WaWV3RGF0YShyb3dzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNscyAgICAgOiAnZmEgZmEtc3luYy1hbHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgICAgOiAnUmVmcmVzaCAxMDB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICAgICAgIDoge21hcmdpbjowfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBOZW8uZ2V0Q29tcG9uZW50KCdpbnRlcnZhbDMnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dzICAgICA9IE5lby5nZXRDb21wb25lbnQoJ2Ftb3VudFJvd3MzJykudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4UmVmcmVzaHMgPSAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXhSZWZyZXNocyA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0Q29tcG9uZW50KCdteVRhYmxlQ29udGFpbmVyMycpLmNyZWF0ZVJhbmRvbVZpZXdEYXRhKHJvd3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhSZWZyZXNocy0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbnR5cGUgICAgICAgICAgICAgIDogJ3RhYmxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgaWQgICAgICAgICAgICAgICAgIDogJ215VGFibGVDb250YWluZXIzJyxcbiAgICAgICAgICAgICAgICBhbW91bnRSb3dzICAgICAgICAgOiAxMDAsIC8vIHRlc3RpbmcgdmFyXG4gICAgICAgICAgICAgICAgY3JlYXRlUmFuZG9tRGF0YSAgIDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1c2VDdXN0b21TY3JvbGxiYXJzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgICAgICAgOiAnMTAwJScsXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIDogZGF0YS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEucmVjb3JkW2RhdGEuZGF0YUZpZWxkICsgJ3N0eWxlJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzMwMHB4J1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICAgIDogJ0RvY2sgTGVmdCAxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFGaWVsZDogJ2NvbHVtbjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jayAgICAgOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICA6IDIwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgMicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW4xJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgMycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW4yJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgNCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW4zJ1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgNScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW40J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgNicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW41J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgNycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW42J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdIZWFkZXIgOCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW43J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdEb2NrIFJpZ2h0IDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uOCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NrICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICA6IDIwMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdEb2NrIFJpZ2h0IDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uOScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NrICAgICA6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCAgICA6IDIwMFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcjMpO1xuXG5leHBvcnQge01haW5Db250YWluZXIzIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyICBmcm9tICcuL01haW5Db250YWluZXIubWpzJztcbmltcG9ydCBNYWluQ29udGFpbmVyMiBmcm9tICcuL01haW5Db250YWluZXIyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lcjMgZnJvbSAnLi9NYWluQ29udGFpbmVyMy5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgIE5lby5hcHAoe1xuICAgICAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL3RhYmxlUGVyZm9ybWFuY2UvJyxcbiAgICAgICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgICAgIG5hbWUgICAgOiAnVGVzdEFwcCcsXG4gICAgICAgIHBhcmVudElkOiAnbWFpbi1jb250YWluZXInXG4gICAgfSk7XG5cbiAgICBOZW8uYXBwKHtcbiAgICAgICAgYXBwUGF0aCA6ICdleGFtcGxlcy90YWJsZVBlcmZvcm1hbmNlLycsXG4gICAgICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyMixcbiAgICAgICAgbmFtZSAgICA6ICdUZXN0QXBwMicsXG4gICAgICAgIHBhcmVudElkOiAnbWFpbi1jb250YWluZXIyJ1xuICAgIH0pO1xuXG4gICAgTmVvLmFwcCh7XG4gICAgICAgIGFwcFBhdGggOiAnZXhhbXBsZXMvdGFibGVQZXJmb3JtYW5jZS8nLFxuICAgICAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcjMsXG4gICAgICAgIG5hbWUgICAgOiAnVGVzdEFwcDMnLFxuICAgICAgICBwYXJlbnRJZDogJ21haW4tY29udGFpbmVyMydcbiAgICB9KTtcbn07XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiXSwic291cmNlUm9vdCI6IiJ9