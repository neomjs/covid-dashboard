self["webpackChunk"](["vendors~chunks/examples-tabs-app"],{

/***/ "./node_modules/neo.mjs/examples/tabs/MainContainer.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tabs/MainContainer.mjs ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Password_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/form/field/Password.mjs */ "./node_modules/neo.mjs/src/form/field/Password.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");





/**
 * @class TestApp.MainContainer
 * @extends Neo.tab.Container
 */
class MainContainer extends _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        activeIndex: 0,
        autoMount  : true,
        height     : 500,

        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },

        itemDefaults: {
            ntype: 'component',
            style: {
                padding: '10px'
            }
        },

        items: [
            {
                ntype: 'container',

                itemDefaults: {
                    ntype     : 'textfield',
                    flex      : '0 1 auto',
                    labelWidth: '120px'
                },

                layout: {
                    ntype: 'vbox'
                },

                items: [
                    {
                        id       : 'firstNameField',
                        labelText: 'First Name'
                    },
                    {
                        labelText: 'Last Name'
                    },
                    {
                        ntype    : 'numberfield',
                        labelText: 'Number | 10-20',
                        maxValue : 20,
                        minValue : 10,
                        value    : 10
                    },
                    {
                        ntype    : 'passwordfield',
                        labelText: 'Password'
                    },
                    {
                        ntype: 'component',
                        flex : 1
                    },
                    {
                        ntype : 'toolbar',
                        layout: {
                            ntype: 'hbox'
                        },
                        itemDefaults: {
                            ntype: 'button',
                            style: {
                                margin: '0 10px 0 0'
                            }
                        },
                        items: [
                            {
                                text: 'Change Label Text',
                                domListeners: {
                                    click: {
                                        fn: function () {
                                            let field = Neo.getComponent('firstNameField');

                                            field.labelText = 'New Label' + Math.round(Math.random() * 100);
                                        }
                                    }
                                }
                            },
                            {
                                text: 'Change Label Color',
                                domListeners: {
                                    click: {
                                        fn: function () {
                                            let field = Neo.getComponent('firstNameField'),
                                                label = field.getLabelEl(),
                                                style = label.style,
                                                vdom  = field.vdom;

                                            if (!style) {
                                                style = {};
                                            }

                                            if (style.color && style.color === 'red') {
                                                delete style.color;
                                            } else {
                                                style.color = 'red';
                                            }

                                            label.style = style;
                                            field.vdom = vdom;
                                        }
                                    }
                                }
                            },
                            {
                                text: 'Move Fields',
                                domListeners: {
                                    click: {
                                        fn: function () {
                                            let field  = Neo.getComponent('firstNameField'),
                                                parent = Neo.getComponent(field.parentId),
                                                vdom   = parent.vdom,
                                                cn     = vdom.cn,
                                                tmp    = cn[1];

                                            cn[1] = cn[3];
                                            cn[3] = tmp;

                                            cn[1].cn[0].style.color = 'steelblue';
                                            cn[3].cn[0].style.color = 'green';

                                            parent.vdom = vdom;
                                        }
                                    }
                                }
                            },
                            {
                                iconCls: 'fa fa-plus',
                                text   : 'Insert Textfield',
                                domListeners: {
                                    click: {
                                        fn: function () {
                                            let button = Neo.getComponent('firstNameField'),
                                                parent = Neo.getComponent(button.parentId);

                                            // global variable for testing
                                            if (!this.fieldCount) {
                                                this.fieldCount = 0;
                                            }

                                            this.fieldCount++;

                                            parent.insert(4, {
                                                labelText: 'Dynamic Field ' + this.fieldCount
                                            });
                                        }
                                    }
                                }
                            },
                            {
                                iconCls: 'fa fa-minus',
                                text   : 'Remove Textfield',
                                style: {
                                    margin: 0
                                },
                                domListeners: {
                                    click: {
                                        fn: function (data) {
                                            let button    = Neo.getComponent(data.target.id),
                                                container = button.up('container');

                                            if (container.items[4].ntype === 'textfield') {
                                                container.removeAt(4);
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],

                tabButtonConfig: {
                    iconCls: 'fa fa-home',
                    text   : 'Tab 1'
                }
            },
            {
                tabButtonConfig: {
                    iconCls: 'fa fa-play-circle',
                    text   : 'Tab 2'
                },
                vdom: {
                    innerHTML: 'Test 2'
                }
            },
            {
                tabButtonConfig: {
                    iconCls: 'fa fa-user',
                    text   : 'Tab 3'
                },
                vdom: {
                    innerHTML: 'Test 3'
                }
            }
        ]
    }}
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./node_modules/neo.mjs/examples/tabs/MainContainer2.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tabs/MainContainer2.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer2; });
/* harmony import */ var _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/container/Base.mjs */ "./node_modules/neo.mjs/src/container/Base.mjs");
/* harmony import */ var _src_table_Container_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/table/Container.mjs */ "./node_modules/neo.mjs/src/table/Container.mjs");
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");




/**
 * @class TestApp2.MainContainer2
 * @extends Neo.container.Base
 */
class MainContainer2 extends _src_container_Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp2.MainContainer2',
        ntype    : 'main-container2',

        autoMount: true,
        height   : 400,

        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                ntype      : 'tab-container',
                activeIndex: 2,
                id         : 'myTabContainer',
                flex       : 10,

                itemDefaults: {
                    ntype: 'component',
                    flex : 10,
                    style: {
                        padding: '10px'
                    }
                },

                items: [
                    {
                        tabButtonConfig: {
                            iconCls: 'fa fa-home',
                            text   : 'Tab 1'
                        },
                        vdom: {
                            innerHTML: 'Tab Content 1'
                        }
                    },
                    {
                        tabButtonConfig: {
                            iconCls: 'fa fa-play-circle',
                            text   : 'Tab 2'
                        },
                        vdom: {
                            innerHTML: 'Tab Content 2'
                        }
                    },
                    {
                        ntype : 'container',
                        layout: 'fit',

                        style: {
                            padding: '0px'
                        },

                        items: [{
                            ntype     : 'table-container',
                            amountRows: 20,

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
                                    text     : 'Docked 1',
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
                                }
                            ]
                        }],

                        tabButtonConfig: {
                            iconCls: 'fa fa-user',
                            text   : 'Tab 3'
                        }
                    }
                ]
            },
            {
                ntype: 'toolbar',
                flex : '0 1 auto',

                itemDefaults: {
                    ntype: 'button',
                    style: {
                        margin: '0 10px 0 0'
                    }
                },

                layout: {
                    ntype: 'hbox'
                },

                style: {
                    marginTop: '10px',
                    padding  : 0
                },

                items: [
                    {
                        iconCls: 'fa fa-plus',
                        text   : 'Insert Tab',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let tabContainer = Neo.getComponent('myTabContainer');

                                    // global let for testing
                                    if (!this.tabCount) {
                                        this.tabCount = 0;
                                    }

                                    this.tabCount++;

                                    tabContainer.insert(3, {
                                        tabButtonConfig: {
                                            iconCls: 'fa fa-user',
                                            text   : 'Dynamic Tab ' + this.tabCount
                                        },
                                        vdom: {
                                            innerHTML: 'Dynamic Tab ' + this.tabCount
                                        }
                                    });
                                }
                            }
                        }
                    },
                    {
                        iconCls: 'fa fa-minus',
                        text   : 'Remove Tab',
                        domListeners: {
                            click: {
                                fn: function () {
                                    let tabContainer = Neo.getComponent('myTabContainer');

                                    if (tabContainer.getCount() > 3) {
                                        tabContainer.removeAt(3);
                                    }
                                }
                            }
                        }
                    },
                    {
                        ntype: 'component',
                        flex : 10
                    }
                ]
            }
        ]
    }}
}

Neo.applyClassConfig(MainContainer2);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/tabs/app.mjs":
/*!****************************************************!*\
  !*** ./node_modules/neo.mjs/examples/tabs/app.mjs ***!
  \****************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/tabs/MainContainer.mjs");
/* harmony import */ var _MainContainer2_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainContainer2.mjs */ "./node_modules/neo.mjs/examples/tabs/MainContainer2.mjs");



const onStart = () => {
    Neo.app({
        appPath : 'examples/tabs/',
        mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
        name    : 'TestApp',
        parentId: 'main-container'
    });

    Neo.app({
        appPath : 'examples/tabs/',
        mainView: _MainContainer2_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        name    : 'TestApp2',
        parentId: 'main-container2'
    });
};



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Password.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Password.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Password; });
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");


/**
 * @class Neo.form.field.Password
 * @extends Neo.form.field.Text
 */
class Password extends _Text_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Password'
         * @protected
         */
        className: 'Neo.form.field.Password',
        /**
         * @member {String} ntype='passwordfield'
         * @protected
         */
        ntype: 'passwordfield',
        /**
         * Value for the inputType_ textfield config
         * @member {String} inputType='password'
         */
        inputType: 'password'
    }}
}

Neo.applyClassConfig(Password);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy90YWJzL01haW5Db250YWluZXIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYnMvTWFpbkNvbnRhaW5lcjIubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL2V4YW1wbGVzL3RhYnMvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvZm9ybS9maWVsZC9QYXNzd29yZC5tanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RDtBQUNJO0FBQ0U7QUFDSjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOERBQVk7QUFDeEMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7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QUFFTDtBQUNBO0FBQ0Esa0JBQWtCLDJEQUFjO0FBQ2hDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtdGFicy1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFiQ29udGFpbmVyICBmcm9tICcuLi8uLi9zcmMvdGFiL0NvbnRhaW5lci5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgZnJvbSAnLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUGFzc3dvcmRGaWVsZCBmcm9tICcuLi8uLi9zcmMvZm9ybS9maWVsZC9QYXNzd29yZC5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgICAgZnJvbSAnLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby50YWIuQ29udGFpbmVyXG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBUYWJDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuICAgICAgICBhdXRvTW91bnQgIDogdHJ1ZSxcbiAgICAgICAgaGVpZ2h0ICAgICA6IDUwMCxcblxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdjb250YWluZXInLFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlICAgICA6ICd0ZXh0ZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICBmbGV4ICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbFdpZHRoOiAnMTIwcHgnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ3Zib3gnXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkICAgICAgIDogJ2ZpcnN0TmFtZUZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0ZpcnN0IE5hbWUnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0xhc3QgTmFtZSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgOiAnbnVtYmVyZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTnVtYmVyIHwgMTAtMjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAyMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDEwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlICAgIDogJ3Bhc3N3b3JkZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUGFzc3dvcmQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlIDogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICcwIDEwcHggMCAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NoYW5nZSBMYWJlbCBUZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXRDb21wb25lbnQoJ2ZpcnN0TmFtZUZpZWxkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubGFiZWxUZXh0ID0gJ05ldyBMYWJlbCcgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ2hhbmdlIExhYmVsIENvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXRDb21wb25lbnQoJ2ZpcnN0TmFtZUZpZWxkJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IGZpZWxkLmdldExhYmVsRWwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0gbGFiZWwuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZG9tICA9IGZpZWxkLnZkb207XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdHlsZS5jb2xvciAmJiBzdHlsZS5jb2xvciA9PT0gJ3JlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzdHlsZS5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHlsZSA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC52ZG9tID0gdmRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ01vdmUgRmllbGRzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCAgPSBOZW8uZ2V0Q29tcG9uZW50KCdmaXJzdE5hbWVGaWVsZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gTmVvLmdldENvbXBvbmVudChmaWVsZC5wYXJlbnRJZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZG9tICAgPSBwYXJlbnQudmRvbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNuICAgICA9IHZkb20uY24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgICAgPSBjblsxXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjblsxXSA9IGNuWzNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjblszXSA9IHRtcDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjblsxXS5jblswXS5zdHlsZS5jb2xvciA9ICdzdGVlbGJsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjblszXS5jblswXS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnZkb20gPSB2ZG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtcGx1cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdJbnNlcnQgVGV4dGZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBOZW8uZ2V0Q29tcG9uZW50KCdmaXJzdE5hbWVGaWVsZCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gTmVvLmdldENvbXBvbmVudChidXR0b24ucGFyZW50SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGVzdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZENvdW50ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnQoNCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnRHluYW1pYyBGaWVsZCAnICsgdGhpcy5maWVsZENvdW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtbWludXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnUmVtb3ZlIFRleHRmaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnV0dG9uICAgID0gTmVvLmdldENvbXBvbmVudChkYXRhLnRhcmdldC5pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBidXR0b24udXAoJ2NvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaXRlbXNbNF0ubnR5cGUgPT09ICd0ZXh0ZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQXQoNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYiAxJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1wbGF5LWNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdUYWIgMidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiAnVGVzdCAyJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS11c2VyJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYiAzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdUZXN0IDMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTtcbiIsImltcG9ydCBDb250YWluZXIgICAgICBmcm9tICcuLi8uLi9zcmMvY29udGFpbmVyL0Jhc2UubWpzJztcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9zcmMvdGFibGUvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVGFiQ29udGFpbmVyICAgZnJvbSAnLi4vLi4vc3JjL3RhYi9Db250YWluZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcDIuTWFpbkNvbnRhaW5lcjJcbiAqIEBleHRlbmRzIE5lby5jb250YWluZXIuQmFzZVxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyMiBleHRlbmRzIENvbnRhaW5lciB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwMi5NYWluQ29udGFpbmVyMicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyMicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuICAgICAgICBoZWlnaHQgICA6IDQwMCxcblxuICAgICAgICBsYXlvdXQ6IHtcbiAgICAgICAgICAgIG50eXBlOiAndmJveCcsXG4gICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgIDogJ3RhYi1jb250YWluZXInLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAyLFxuICAgICAgICAgICAgICAgIGlkICAgICAgICAgOiAnbXlUYWJDb250YWluZXInLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgOiAxMCxcblxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFiIDEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1RhYiBDb250ZW50IDEnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1wbGF5LWNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYiAyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdUYWIgQ29udGVudCAyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0OiAnZml0JyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMHB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGUgICAgIDogJ3RhYmxlLWNvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50Um93czogMjAsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJlcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIDogZGF0YS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGRhdGEucmVjb3JkW2RhdGEuZGF0YUZpZWxkICsgJ3N0eWxlJ11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgICA6ICdEb2NrZWQgMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhRmllbGQ6ICdjb2x1bW4wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY2sgICAgIDogJ2xlZnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggICAgOiAyMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uMSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uMydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnSGVhZGVyIDUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUZpZWxkOiAnY29sdW1uNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYiAzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgICAgIGZsZXggOiAnMCAxIGF1dG8nLFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgMTBweCAwIDAnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnaGJveCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgIDogMFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtcGx1cycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnSW5zZXJ0IFRhYicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhYkNvbnRhaW5lciA9IE5lby5nZXRDb21wb25lbnQoJ215VGFiQ29udGFpbmVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdsb2JhbCBsZXQgZm9yIHRlc3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50YWJDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiQ291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lci5pbnNlcnQoMywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdEeW5hbWljIFRhYiAnICsgdGhpcy50YWJDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmRvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdEeW5hbWljIFRhYiAnICsgdGhpcy50YWJDb3VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtbWludXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1JlbW92ZSBUYWInLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YWJDb250YWluZXIgPSBOZW8uZ2V0Q29tcG9uZW50KCdteVRhYkNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFiQ29udGFpbmVyLmdldENvdW50KCkgPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiQ29udGFpbmVyLnJlbW92ZUF0KDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4IDogMTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyMiBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciAgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgTWFpbkNvbnRhaW5lcjIgZnJvbSAnLi9NYWluQ29udGFpbmVyMi5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4ge1xuICAgIE5lby5hcHAoe1xuICAgICAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL3RhYnMvJyxcbiAgICAgICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgICAgIG5hbWUgICAgOiAnVGVzdEFwcCcsXG4gICAgICAgIHBhcmVudElkOiAnbWFpbi1jb250YWluZXInXG4gICAgfSk7XG5cbiAgICBOZW8uYXBwKHtcbiAgICAgICAgYXBwUGF0aCA6ICdleGFtcGxlcy90YWJzLycsXG4gICAgICAgIG1haW5WaWV3OiBNYWluQ29udGFpbmVyMixcbiAgICAgICAgbmFtZSAgICA6ICdUZXN0QXBwMicsXG4gICAgICAgIHBhcmVudElkOiAnbWFpbi1jb250YWluZXIyJ1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBUZXh0IGZyb20gJy4vVGV4dC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5QYXNzd29yZFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuVGV4dFxuICovXG5jbGFzcyBQYXNzd29yZCBleHRlbmRzIFRleHQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5QYXNzd29yZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUGFzc3dvcmQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncGFzc3dvcmRmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdwYXNzd29yZGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlIGZvciB0aGUgaW5wdXRUeXBlXyB0ZXh0ZmllbGQgY29uZmlnXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdwYXNzd29yZCdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3Bhc3N3b3JkJ1xuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBhc3N3b3JkKTtcblxuZXhwb3J0IHtQYXNzd29yZCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9