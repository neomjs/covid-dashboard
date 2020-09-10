self["webpackChunk"](["vendors~chunks/examples-panel-app"],{

/***/ "./node_modules/neo.mjs/examples/panel/MainContainer.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/panel/MainContainer.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainerController.mjs */ "./node_modules/neo.mjs/examples/panel/MainContainerController.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");



/**
 * @class TestApp.MainContainer
 * @extends Neo.container.Panel
 */
class MainContainer extends _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount : true,
        controller: _MainContainerController_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],

        itemDefaults: {
            style: {
                padding: '10px'
            }
        },

        style: {
            backgroundColor: '#2b2b2b'
        },

        headers: [{
            dock : 'top',
            items: [{
                ntype: 'label',
                text : 'Title Top'
            }, {
                iconCls: 'fa fa-home',
                text   : 'Button 1',
                domListeners: {
                    click: {
                        fn: 'onButton1Click'
                    }
                }
            }, {
                ntype: 'component',
                flex : 1
            }, {
                iconCls: 'fa fa-user',
                text   : 'Button 2',
                domListeners: {
                    click: 'onButton2Click'
                }
            }]
        }, {
            dock : 'left',
            items: [{
                ntype: 'label',
                text : 'Title Left'
            }, {
                iconCls: 'fa fa-home',
                text   : 'Button 3'
            }, {
                ntype: 'component',
                flex : 1
            }, {
                iconCls: 'fa fa-user',
                text   : 'Button 4'
            }]
        }, {
            text: 'Title Bottom',
            dock: 'bottom'
        }],

        items: [{
            ntype : 'panel',

            itemDefaults: {
                style: {
                    padding: '10px'
                }
            },

            headers: [{
                text: 'Title Top',
                dock: 'top'
            }, {
                dock : 'right',
                items: [{
                    ntype: 'label',
                    text : 'Title Right 2'
                }, {
                    ntype: 'component',
                    flex : 1
                }, {
                    iconCls: 'fa fa-user',
                    text   : 'Button 5'
                }]
            }, {
                dock : 'right',
                items: [{
                    ntype: 'label',
                    text : 'Title Right'
                }, {
                    iconCls: 'fa fa-home',
                    text   : 'Button 6'
                }]
            }],

            items: [{
                ntype: 'component',
                vdom : {
                    innerHTML: 'item 1'
                }
            }]
        }, {
            ntype               : 'panel',
            verticalHeadersFirst: true,

            itemDefaults: {
                style: {
                    padding: '10px'
                }
            },

            headers: [{
                dock : 'top',
                items: [{
                    iconCls: 'fa fa-home',
                    text   : 'Button 7'
                }, {
                    ntype: 'component',
                    flex : 1
                }, {
                    ntype: 'label',
                    text : 'Title Top'
                }]
            }, {
                dock : 'right',
                items: [{
                    iconCls: 'fa fa-home',
                    text   : 'Button 8'
                }, {
                    ntype: 'component',
                    flex : 1
                }, {
                    ntype: 'label',
                    text : 'Title Right'
                }]
            }],

            items: [{
                ntype: 'component',
                vdom : {
                    innerHTML: 'item 2'
                }
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/panel/MainContainerController.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/panel/MainContainerController.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainerController; });
/* harmony import */ var _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/controller/Component.mjs */ "./node_modules/neo.mjs/src/controller/Component.mjs");


/**
 * @class TestApp.MainContainerController
 * @extends Neo.controller.Component
 */
class MainContainerController extends _src_controller_Component_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainerController',
        ntype    : 'main-container-controller'
    }}

    onButton1Click(data) {
        console.log('onButton1Click', data, this);
    }

    onButton2Click(data) {
        console.log('onButton2Click', data, this);
    }
}

Neo.applyClassConfig(MainContainerController);




/***/ }),

/***/ "./node_modules/neo.mjs/examples/panel/app.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/neo.mjs/examples/panel/app.mjs ***!
  \*****************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/panel/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/panel/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp',
    parentId: 'main-container'
});



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



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9wYW5lbC9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9wYW5lbC9NYWluQ29udGFpbmVyQ29udHJvbGxlci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvcGFuZWwvYXBwLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9zcmMvY29udGFpbmVyL1BhbmVsLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUU7QUFDQzs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQUs7QUFDakMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0VBQXVCOztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FB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LCJmaWxlIjoidmVuZG9yc35jaHVua3MvZXhhbXBsZXMtcGFuZWwtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1haW5Db250YWluZXJDb250cm9sbGVyIGZyb20gJy4vTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIubWpzJ1xuaW1wb3J0IFBhbmVsICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL3NyYy9jb250YWluZXIvUGFuZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlBhbmVsXG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBQYW5lbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50IDogdHJ1ZSxcbiAgICAgICAgY29udHJvbGxlcjogTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIsXG5cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmIyYjJiJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGhlYWRlcnM6IFt7XG4gICAgICAgICAgICBkb2NrIDogJ3RvcCcsXG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogJ1RpdGxlIFRvcCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ0J1dHRvbiAxJyxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiAnb25CdXR0b24xQ2xpY2snXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLXVzZXInLFxuICAgICAgICAgICAgICAgIHRleHQgICA6ICdCdXR0b24gMicsXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAnb25CdXR0b24yQ2xpY2snXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZG9jayA6ICdsZWZ0JyxcbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIHRleHQgOiAnVGl0bGUgTGVmdCdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtaG9tZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgIDogJ0J1dHRvbiAzJ1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICBmbGV4IDogMVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS11c2VyJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQnV0dG9uIDQnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICB0ZXh0OiAnVGl0bGUgQm90dG9tJyxcbiAgICAgICAgICAgIGRvY2s6ICdib3R0b20nXG4gICAgICAgIH1dLFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgbnR5cGUgOiAncGFuZWwnLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIHRleHQ6ICdUaXRsZSBUb3AnLFxuICAgICAgICAgICAgICAgIGRvY2s6ICd0b3AnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgZG9jayA6ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ1RpdGxlIFJpZ2h0IDInXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdXNlcicsXG4gICAgICAgICAgICAgICAgICAgIHRleHQgICA6ICdCdXR0b24gNSdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRvY2sgOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdUaXRsZSBSaWdodCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1ob21lJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ0J1dHRvbiA2J1xuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdjb21wb25lbnQnLFxuICAgICAgICAgICAgICAgIHZkb20gOiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ2l0ZW0gMSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSAgICAgICAgICAgICAgIDogJ3BhbmVsJyxcbiAgICAgICAgICAgIHZlcnRpY2FsSGVhZGVyc0ZpcnN0OiB0cnVlLFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZWFkZXJzOiBbe1xuICAgICAgICAgICAgICAgIGRvY2sgOiAndG9wJyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQnV0dG9uIDcnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdUaXRsZSBUb3AnXG4gICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkb2NrIDogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnQnV0dG9uIDgnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2NvbXBvbmVudCcsXG4gICAgICAgICAgICAgICAgICAgIGZsZXggOiAxXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdUaXRsZSBSaWdodCdcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfV0sXG5cbiAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICB2ZG9tIDoge1xuICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6ICdpdGVtIDInXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vLi4vc3JjL2NvbnRyb2xsZXIvQ29tcG9uZW50Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lckNvbnRyb2xsZXJcbiAqIEBleHRlbmRzIE5lby5jb250cm9sbGVyLkNvbXBvbmVudFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyQ29udHJvbGxlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXJDb250cm9sbGVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXItY29udHJvbGxlcidcbiAgICB9fVxuXG4gICAgb25CdXR0b24xQ2xpY2soZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25CdXR0b24xQ2xpY2snLCBkYXRhLCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbkJ1dHRvbjJDbGljayhkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkJ1dHRvbjJDbGljaycsIGRhdGEsIHRoaXMpO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lckNvbnRyb2xsZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXJDb250cm9sbGVyIGFzIGRlZmF1bHR9O1xuIiwiaW1wb3J0IE1haW5Db250YWluZXIgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL3BhbmVsLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJyxcbiAgICBwYXJlbnRJZDogJ21haW4tY29udGFpbmVyJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQmFzZS5tanMnO1xuaW1wb3J0IFRvb2xiYXIgICBmcm9tICcuL1Rvb2xiYXIubWpzJztcblxuLyoqXG4gKiBBbiBleHRlbmRlZCBDb250YWluZXIgc3VwcG9ydGluZyBtdWx0aXBsZSBkb2NrZWQgaGVhZGVyIHRvb2xiYXJzXG4gKiBAY2xhc3MgTmVvLmNvbnRhaW5lci5QYW5lbFxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5CYXNlXG4gKi9cbmNsYXNzIFBhbmVsIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmNvbnRhaW5lci5QYW5lbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmNvbnRhaW5lci5QYW5lbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdwYW5lbCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdwYW5lbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXBhbmVsJywgJ25lby1jb250YWluZXInXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1wYW5lbCcsICduZW8tY29udGFpbmVyJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGNvbnRhaW5lckNvbmZpZz1udWxsXG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXJDb25maWc6IG51bGwsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IGhlYWRlckRlZmF1bHRzPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlckRlZmF1bHRzOiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGhlYWRlcnM9bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyczogbnVsbCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gaXRlbXM9e250eXBlOiAndmJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgICAgICAqL1xuICAgICAgICBfbGF5b3V0OiB7XG4gICAgICAgICAgICBudHlwZTogJ3Zib3gnLFxuICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICB9LFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gdmVydGljYWxIZWFkZXJzRmlyc3Q9ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIHZlcnRpY2FsSGVhZGVyc0ZpcnN0OiBmYWxzZVxuICAgIH19XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICAgICAgc3VwZXIoY29uZmlnKTtcblxuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgaGYgPSBjb25maWcgJiYgY29uZmlnLnZlcnRpY2FsSGVhZGVyc0ZpcnN0ID09PSB0cnVlIHx8IG1lLnZlcnRpY2FsSGVhZGVyc0ZpcnN0ID09PSB0cnVlO1xuXG4gICAgICAgIGlmIChoZikge1xuICAgICAgICAgICAgbWUubGF5b3V0ID0ge1xuICAgICAgICAgICAgICAgIG50eXBlOiAnaGJveCcsXG4gICAgICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICovXG4gICAgY3JlYXRlSXRlbXMoKSB7XG4gICAgICAgIGxldCBtZSAgICAgICAgICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBoZiAgICAgICAgICAgICAgICAgICA9IG1lLnZlcnRpY2FsSGVhZGVyc0ZpcnN0ID09PSBmYWxzZSxcbiAgICAgICAgICAgIGhlYWRlcnMgICAgICAgICAgICAgID0gbWUuaGVhZGVycyB8fCBbXSxcbiAgICAgICAgICAgIGJvdHRvbUhlYWRlcnMgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J2JvdHRvbSc6ICdyaWdodCcpfSksXG4gICAgICAgICAgICBsZWZ0SGVhZGVycyAgICAgICAgICA9IGhlYWRlcnMuZmlsdGVyKGhlYWRlciA9PiB7cmV0dXJuIGhlYWRlci5kb2NrID09PSAoaGYgPydsZWZ0JyAgOiAndG9wJyl9KSxcbiAgICAgICAgICAgIHJpZ2h0SGVhZGVycyAgICAgICAgID0gaGVhZGVycy5maWx0ZXIoaGVhZGVyID0+IHtyZXR1cm4gaGVhZGVyLmRvY2sgPT09IChoZiA/J3JpZ2h0JyA6ICdib3R0b20nKX0pLFxuICAgICAgICAgICAgdG9wSGVhZGVycyAgICAgICAgICAgPSBoZWFkZXJzLmZpbHRlcihoZWFkZXIgPT4ge3JldHVybiBoZWFkZXIuZG9jayA9PT0gKGhmID8ndG9wJyAgIDogJ2xlZnQnKX0pLFxuICAgICAgICAgICAgaGFzSG9yaXpvbnRhbEhlYWRlcnMgPSBib3R0b21IZWFkZXJzLmxlbmd0aCA+IDAgfHwgdG9wSGVhZGVycyAgLmxlbmd0aCA+IDAsXG4gICAgICAgICAgICBoYXNWZXJ0aWNhbEhlYWRlcnMgICA9IGxlZnRIZWFkZXJzICAubGVuZ3RoID4gMCB8fCByaWdodEhlYWRlcnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgIGl0ZW1zICAgICAgICAgICAgICAgID0gbWUuaXRlbXMsXG4gICAgICAgICAgICBob3Jpem9udGFsSXRlbXMgICAgICA9IFtdLFxuICAgICAgICAgICAgdmVydGljYWxJdGVtcyAgICAgICAgPSBbXSxcbiAgICAgICAgICAgIGNvbmZpZztcblxuICAgICAgICBpZiAoaGVhZGVycy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBOZW8uZXJyb3IoJ1BhbmVsIHdpdGhvdXQgaGVhZGVycywgcGxlYXNlIHVzZSBhIENvbnRhaW5lciBpbnN0ZWFkJywgbWUuaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9wSGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoaGFzVmVydGljYWxIZWFkZXJzICYmIChoZiAmJiBoYXNIb3Jpem9udGFsSGVhZGVycyB8fCAhaGYgJiYgaGFzSG9yaXpvbnRhbEhlYWRlcnMpKSB7XG4gICAgICAgICAgICBsZWZ0SGVhZGVycy5mb3JFYWNoKGhlYWRlciA9PiB7XG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zLnB1c2goUGFuZWwuY3JlYXRlSGVhZGVyQ29uZmlnKGhlYWRlcikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgICA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGZsZXggICAgICAgIDogMSxcbiAgICAgICAgICAgICAgICBpdGVtcyAgICAgICA6IGl0ZW1zLFxuICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czogbWUuaXRlbURlZmF1bHRzLFxuICAgICAgICAgICAgICAgIC4uLm1lLmNvbnRhaW5lckNvbmZpZyB8fCB7fVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaG9yaXpvbnRhbEl0ZW1zLnB1c2goey4uLm1lLmhlYWRlckRlZmF1bHRzLCAuLi5jb25maWd9KTtcblxuICAgICAgICAgICAgcmlnaHRIZWFkZXJzLmZvckVhY2goaGVhZGVyID0+IHtcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsSXRlbXMucHVzaChQYW5lbC5jcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgICAgIGl0ZW1zIDogaG9yaXpvbnRhbEl0ZW1zLFxuICAgICAgICAgICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogKGhmID8gJ2hib3gnIDogJ3Zib3gnKSxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246ICdzdHJldGNoJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICAgICAgZmxleCAgICAgICAgOiAxLFxuICAgICAgICAgICAgICAgIGl0ZW1zICAgICAgIDogaXRlbXMsXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiBtZS5pdGVtRGVmYXVsdHMsXG4gICAgICAgICAgICAgICAgLi4ubWUuY29udGFpbmVyQ29uZmlnIHx8IHt9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2ZXJ0aWNhbEl0ZW1zLnB1c2goey4uLm1lLmhlYWRlckRlZmF1bHRzLCAuLi5jb25maWd9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvdHRvbUhlYWRlcnMuZm9yRWFjaChoZWFkZXIgPT4ge1xuICAgICAgICAgICAgdmVydGljYWxJdGVtcy5wdXNoKFBhbmVsLmNyZWF0ZUhlYWRlckNvbmZpZyhoZWFkZXIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuaXRlbXMgPSB2ZXJ0aWNhbEl0ZW1zO1xuXG4gICAgICAgIG1lLml0ZW1EZWZhdWx0cyA9IG51bGw7XG5cbiAgICAgICAgc3VwZXIuY3JlYXRlSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBoZWFkZXIgdGhlIGhlYWRlciBjb25maWdcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGVIZWFkZXJDb25maWcoaGVhZGVyKSB7XG4gICAgICAgIGxldCBjb25maWcgPSB7XG4gICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuICAgICAgICAgICAgZmxleCA6ICcwIDEgYXV0bydcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaGVhZGVyLnRleHQpIHtcbiAgICAgICAgICAgIGNvbmZpZy5pdGVtcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgICAgICBjbHMgIDogWyduZW8tcGFuZWwtaGVhZGVyLXRleHQnLCAnbmVvLWxhYmVsJ10sXG4gICAgICAgICAgICAgICAgICAgIHRleHQgOiBoZWFkZXIudGV4dFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIGRlbGV0ZSBoZWFkZXIudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc3VtaW5nIGFsbCBsYWJlbHMgaW5zaWRlIGEgUGFuZWwgSGVhZGVyIGFyZSBtZWFudCB0byBiZSB0aXRsZXMgLT4gbG9vayB0aGUgc2FtZSB3YXlcbiAgICAgICAgaWYgKE5lby5pc0FycmF5KGhlYWRlci5pdGVtcykpIHtcbiAgICAgICAgICAgIGhlYWRlci5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLm50eXBlID09PSAnbGFiZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xzID0gWyduZW8tcGFuZWwtaGVhZGVyLXRleHQnLCAnbmVvLWxhYmVsJ107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gey4uLmNvbmZpZywgLi4uaGVhZGVyfTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKFBhbmVsKTtcblxuZXhwb3J0IHtQYW5lbCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9