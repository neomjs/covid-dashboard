self["webpackChunk"](["chunks/examples-viewport-app"],{

/***/ "./node_modules/neo.mjs/examples/viewport/MainContainer.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/viewport/MainContainer.mjs ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/tab/Container.mjs */ "./node_modules/neo.mjs/src/tab/Container.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");



/**
 * @class TestApp.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount: true,

        layout: {
            ntype: 'vbox',
            align: 'stretch'
        },

        style: {
            padding: '50px'
        },

        itemDefaults: {
            ntype : 'container',
            layout: {
                ntype: 'hbox',
                align: 'stretch'
            },

            itemDefaults: {
                module: _src_tab_Container_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
                style : {
                    margin: '50px'
                },

                itemDefaults: {
                    ntype: 'component',
                    style: {
                        padding: '20px'
                    }
                },

                items: [{
                    ntype: 'toolbar',

                    itemDefaults: {
                        domListeners: {
                            click: {
                                fn: data => {
                                    let button       = Neo.getComponent(data.target.id),
                                        tabContainer = button.up('tab-container');

                                    tabContainer.tabBarPosition = button.text.toLowerCase();
                                }
                            }
                        }
                    },

                    items: [{
                        ntype: 'button',
                        text : 'Top'
                    }, {
                        ntype: 'button',
                        text : 'Right'
                    }, {
                        ntype: 'button',
                        text : 'Bottom'
                    }, {
                        ntype: 'button',
                        text : 'Left'
                    }],

                    tabButtonConfig: {
                        iconCls: 'fa fa-home',
                        text   : 'Tab 1'
                    }
                }, {
                    tabButtonConfig: {
                        iconCls: 'fa fa-play-circle',
                        text   : 'Tab 2'
                    },
                    vdom: {
                        innerHTML: 'Test 2'
                    }
                }, {
                    tabButtonConfig: {
                        iconCls: 'fa fa-user',
                        text   : 'Tab 3'
                    },
                    vdom: {
                        innerHTML: 'Test 3'
                    }
                }]
            },
        },

        items: [{
            items: [{

                }, {
                    tabBarPosition: 'right'
                }
            ]
        }, {
            items: [{
                tabBarPosition: 'bottom'
            }, {
                tabBarPosition: 'left'
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);




/***/ }),

/***/ "./node_modules/neo.mjs/examples/viewport/app.mjs":
/*!********************************************************!*\
  !*** ./node_modules/neo.mjs/examples/viewport/app.mjs ***!
  \********************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/viewport/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/viewport/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy92aWV3cG9ydC9NYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy92aWV3cG9ydC9hcHAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNLOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtRUFBUTtBQUNwQyx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0Esd0JBQXdCLDhEQUFZO0FBQ3BDO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7QUNwSGxDO0FBQUE7QUFBQTtBQUFpRDs7QUFFakQ7QUFDQTtBQUNBLGNBQWMsMERBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQVM7QUFDaEMsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6ImNodW5rcy9leGFtcGxlcy12aWV3cG9ydC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFiQ29udGFpbmVyIGZyb20gJy4uLy4uL3NyYy90YWIvQ29udGFpbmVyLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgIGZyb20gJy4uLy4uL3NyYy9jb250YWluZXIvVmlld3BvcnQubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50OiB0cnVlLFxuXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgICAgbnR5cGU6ICd2Ym94JyxcbiAgICAgICAgICAgIGFsaWduOiAnc3RyZXRjaCdcbiAgICAgICAgfSxcblxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgcGFkZGluZzogJzUwcHgnXG4gICAgICAgIH0sXG5cbiAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICBudHlwZSA6ICdjb250YWluZXInLFxuICAgICAgICAgICAgbGF5b3V0OiB7XG4gICAgICAgICAgICAgICAgbnR5cGU6ICdoYm94JyxcbiAgICAgICAgICAgICAgICBhbGlnbjogJ3N0cmV0Y2gnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpdGVtRGVmYXVsdHM6IHtcbiAgICAgICAgICAgICAgICBtb2R1bGU6IFRhYkNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNTBweCdcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgaXRlbURlZmF1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIG50eXBlOiAnY29tcG9uZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcyMHB4J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICBudHlwZTogJ3Rvb2xiYXInLFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ1dHRvbiAgICAgICA9IE5lby5nZXRDb21wb25lbnQoZGF0YS50YXJnZXQuaWQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkNvbnRhaW5lciA9IGJ1dHRvbi51cCgndGFiLWNvbnRhaW5lcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJDb250YWluZXIudGFiQmFyUG9zaXRpb24gPSBidXR0b24udGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnR5cGU6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA6ICdUb3AnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnUmlnaHQnXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG50eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgOiAnQm90dG9tJ1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudHlwZTogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0IDogJ0xlZnQnXG4gICAgICAgICAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICAgICAgICAgIHRhYkJ1dHRvbkNvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbkNsczogJ2ZhIGZhLWhvbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCAgIDogJ1RhYiAxJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICB0YWJCdXR0b25Db25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25DbHM6ICdmYSBmYS1wbGF5LWNpcmNsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFiIDInXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1Rlc3QgMidcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgdGFiQnV0dG9uQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uQ2xzOiAnZmEgZmEtdXNlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICAgOiAnVGFiIDMnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZkb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogJ1Rlc3QgMydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1zOiBbe1xuICAgICAgICAgICAgaXRlbXM6IFt7XG5cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIHRhYkJhclBvc2l0aW9uOiAncmlnaHQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgICAgICB0YWJCYXJQb3NpdGlvbjogJ2JvdHRvbSdcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWJCYXJQb3NpdGlvbjogJ2xlZnQnXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge01haW5Db250YWluZXIgYXMgZGVmYXVsdH07XG4iLCJpbXBvcnQgTWFpbkNvbnRhaW5lciAgZnJvbSAnLi9NYWluQ29udGFpbmVyLm1qcyc7XG5cbmNvbnN0IG9uU3RhcnQgPSAoKSA9PiBOZW8uYXBwKHtcbiAgICBhcHBQYXRoIDogJ2V4YW1wbGVzL3ZpZXdwb3J0LycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uY29udGFpbmVyLlZpZXdwb3J0XG4gKiBAZXh0ZW5kcyBOZW8uY29udGFpbmVyLkJhc2VcbiAqL1xuY2xhc3MgVmlld3BvcnQgZXh0ZW5kcyBDb250YWluZXIge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uY29udGFpbmVyLlZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc05hbWU6ICdOZW8uY29udGFpbmVyLlZpZXdwb3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3ZpZXdwb3J0J1xuICAgICAgICAgKiBAcHJvdGVjdGVkXG4gICAgICAgICAqL1xuICAgICAgICBudHlwZTogJ3ZpZXdwb3J0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRydWUgYXBwbGllcyAnbmVvLWJvZHktdmlld3BvcnQnIHRvIHRoZSBkb2N1bWVudC5ib2R5XG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGFwcGx5Qm9keUNscz10cnVlXG4gICAgICAgICAqL1xuICAgICAgICBhcHBseUJvZHlDbHM6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmdbXX0gY2xzPVsnbmVvLXZpZXdwb3J0J11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tdmlld3BvcnQnXVxuICAgIH19XG5cbiAgICBvbkNvbnN0cnVjdGVkKCkge1xuICAgICAgICBzdXBlci5vbkNvbnN0cnVjdGVkKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYXBwbHlCb2R5Q2xzKSB7XG4gICAgICAgICAgICBOZW8ubWFpbi5Eb21BY2Nlc3MuYXBwbHlCb2R5Q2xzKHtcbiAgICAgICAgICAgICAgICBhcHBOYW1lOiB0aGlzLmFwcE5hbWUsXG4gICAgICAgICAgICAgICAgY2xzICAgIDogWyduZW8tYm9keS12aWV3cG9ydCddXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoVmlld3BvcnQpO1xuXG5leHBvcnQge1ZpZXdwb3J0IGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=