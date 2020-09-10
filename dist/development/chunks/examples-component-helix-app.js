self["webpackChunk"](["chunks/examples-component-helix-app"],{

/***/ "./node_modules/neo.mjs/examples/component/helix/HelixMainContainer.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/helix/HelixMainContainer.mjs ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelixMainContainer; });
/* harmony import */ var _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/component/Helix.mjs */ "./node_modules/neo.mjs/src/component/Helix.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_container_Panel_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/container/Panel.mjs */ "./node_modules/neo.mjs/src/container/Panel.mjs");
/* harmony import */ var _src_form_field_Range_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/form/field/Range.mjs */ "./node_modules/neo.mjs/src/form/field/Range.mjs");
/* harmony import */ var _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/container/Viewport.mjs */ "./node_modules/neo.mjs/src/container/Viewport.mjs");






/**
 * @class TestApp.HelixMainContainer
 * @extends Neo.container.Viewport
 */
class HelixMainContainer extends _src_container_Viewport_mjs__WEBPACK_IMPORTED_MODULE_4__["default"] {
    static getConfig() {return {
        className: 'TestApp.HelixMainContainer',
        ntype    : 'main-container',

        autoMount: true,
        /**
         * @member {Neo.component.Helix|null} helix=null
         */
        helix: null,
        /**
         * @member {Object|null} helixConfig=null
         */
        helixConfig: null,
        layout: {ntype: 'hbox', align: 'stretch'},

        items: [{
            ntype : 'container',
            flex  : 1,
            layout: 'fit',
            items : []
        }, {
            ntype : 'panel',
            layout: {ntype: 'vbox',align: 'stretch'},
            style : {backgroundColor: '#2b2b2b'},
            width : 250,

            containerConfig: {
                flex : null,
                style: {overflowY: 'scroll'}
            },

            itemDefaults: {
                ntype        : 'rangefield',
                flex         : '0 1 auto',
                labelWidth   : '100px',
                style        : {padding: '10px'},
                useInputEvent: true,

                listeners: {
                    change: function(data) {
                        if (['deltaY', 'maxOpacity', 'minOpacity'].includes(this.name)) {
                            data.value /= 100;
                        }
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    }
                }
            },

            headers: [{
                dock: 'top',
                text: 'Helix Controls'
            }],

            items: [{
                labelText: 'Translate X',
                maxValue : 2000,
                minValue : -2000,
                name     : 'translateX',
                value    : 400
            }, {
                labelText: 'Translate Y',
                maxValue : 2500,
                minValue : -2500,
                name     : 'translateY',
                value    : -350
            }, {
                labelText: 'Translate Z',
                maxValue : 4500,
                minValue : -4500,
                name     : 'translateZ',
                value    : -1500,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-helix-1').on('changeTranslateZ', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText : 'Delta Y',
                labelAlign: 'top',
                maxValue  : 600,
                minValue  : -600,
                name      : 'deltaY',
                value     : 70
            }, {
                labelText: 'Rotate',
                minValue : -720,
                maxValue : 720,
                name     : 'rotationAngle',
                value    : 0,
                listeners: {
                    change: function(data) {
                        Neo.get('neo-helix-1')[this.name] = data.value;
                    },
                    mounted: function(fieldId) {
                        let field = Neo.get(fieldId);

                        Neo.get('neo-helix-1').on('changeRotation', function(value) {
                            value = Math.min(Math.max(value, this.minValue), this.maxValue);
                            this.value = value;
                        }, field);
                    }
                }
            }, {
                labelText: 'Radius',
                maxValue : 3500,
                minValue : 900,
                name     : 'radius',
                value    : 1500
            }, {
                labelText: 'Perspective',
                minValue : 50,
                maxValue : 3000,
                name     : 'perspective',
                value    : 800
            }, {
                labelText: 'Item Angle',
                minValue : 1,
                maxValue : 36,
                name     : 'itemAngle',
                value    : 8
            }, {
                labelText: 'Max Opacity',
                name     : 'maxOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 80 // todo [30, 80]
            }, {
                labelText: 'Min Opacity',
                name     : 'minOpacity',
                minValue : 0,
                maxValue : 100,
                value    : 30
            }, {
                module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
                clearable: false,
                labelText: 'Max Items',
                maxValue : 600,
                minValue : 100,
                name     : 'maxItems',
                stepSize : 100,
                value    : 300
            }, {
                ntype     : 'button',
                text      : 'Flip Items',
                listeners: {},
                style    : {margin: '20px'},
                domListeners: {
                    click: data => {
                        const helix = Neo.get('neo-helix-1');
                        helix.flipped = !helix.flipped;
                    }
                }
            }, {
                ntype     : 'button',
                disabled  : true, // component.Helix: buffered sorting #105
                text      : 'Sort by Lastname',
                listeners: {},
                domListeners: {
                    click: data => {
                        Neo.get('neo-helix-1').store.sorters = [{
                            property : 'lastname',
                            direction: 'ASC'
                        }, {
                            property : 'firstname',
                            direction: 'ASC'
                        }];
                    }
                },
                style: {
                    margin      : '20px',
                    marginBottom: '10px'
                }
            }, {
                ntype     : 'button',
                disabled  : true, // component.Helix: buffered sorting #105
                text      : 'Sort by Firstname',
                listeners: {},
                domListeners: {
                    click: data => {
                        Neo.get('neo-helix-1').store.sorters = [{
                            property : 'firstname',
                            direction: 'ASC'
                        }, {
                            property : 'lastname',
                            direction: 'ASC'
                        }];
                    }
                },
                style: {
                    margin   : '20px',
                    marginTop: 0
                }
            }, {
                ntype    : 'button',
                iconCls  : 'fa fa-square',
                text     : 'Follow Selection',
                listeners: {},
                domListeners: {
                    click: function(data) {
                        let me   = this,
                            helix = Neo.get('neo-helix-1');

                        if (me.iconCls === 'fa fa-square') {
                            helix.followSelection = true;
                            me.iconCls = 'fa fa-check-square';
                        } else {
                            helix.followSelection = false;
                            me.iconCls = 'fa fa-square';
                        }
                    }
                },
                style: {
                    margin      : '20px',
                    marginBottom: '10px'
                }
            }, {
                ntype: 'label',
                text : [
                    '<b>Navigation Concept</b>',
                    '<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>',
                    '<p>Hit the Space Key to rotate the currently selected item to the front.</p>',
                    '<p>Hit the Enter Key to expand the currently selected item.</p>'
                ].join(''),

                style: {
                    backgroundColor: '#323232',
                    color          : '#ddd',
                    fontSize       : '13px',
                    margin         : '10px',
                    padding        : '10px',
                    whiteSpace     : 'normal'
                }
            }]
        }]
    }}

    /**
     *
     * @param {Object} config
     */
    constructor(config) {
        super(config);

        let me = this;

        me.helix = Neo.create({
            module: _src_component_Helix_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            id    : 'neo-helix-1',
            ...me.helixConfig || {}
        });

        me.items[0].items.push(me.helix);
    }

    /**
     *
     * @returns {Neo.data.Store}
     */
    getStore() {
        return this.items[0].items[0].store;
    }
}

Neo.applyClassConfig(HelixMainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/component/helix/app.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/component/helix/app.mjs ***!
  \***************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _HelixMainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HelixMainContainer.mjs */ "./node_modules/neo.mjs/examples/component/helix/HelixMainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/component/helix/',
    mainView: _HelixMainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvaGVsaXgvSGVsaXhNYWluQ29udGFpbmVyLm1qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9jb21wb25lbnQvaGVsaXgvYXBwLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkQ7QUFDRTtBQUNGO0FBQ0M7QUFDRTs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUVBQVE7QUFDekMsd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsK0JBQStCO0FBQ3BELHFCQUFxQiwyQkFBMkI7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdCQUFnQjtBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiwyQkFBMkIsa0VBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw0QkFBNEIsZUFBZTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxvQkFBb0IsZ0VBQUs7QUFDekI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDMVJBO0FBQUE7QUFBQTtBQUEyRDs7QUFFM0Q7QUFDQTtBQUNBLGNBQWMsK0RBQWtCO0FBQ2hDO0FBQ0EsQ0FBQyIsImZpbGUiOiJjaHVua3MvZXhhbXBsZXMtY29tcG9uZW50LWhlbGl4LWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxpeCAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvY29tcG9uZW50L0hlbGl4Lm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgZnJvbSAnLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUGFuZWwgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9QYW5lbC5tanMnO1xuaW1wb3J0IFJhbmdlRmllbGQgIGZyb20gJy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1JhbmdlLm1qcyc7XG5pbXBvcnQgVmlld3BvcnQgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2NvbnRhaW5lci9WaWV3cG9ydC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLkhlbGl4TWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmNvbnRhaW5lci5WaWV3cG9ydFxuICovXG5jbGFzcyBIZWxpeE1haW5Db250YWluZXIgZXh0ZW5kcyBWaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLkhlbGl4TWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQ6IHRydWUsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtOZW8uY29tcG9uZW50LkhlbGl4fG51bGx9IGhlbGl4PW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4OiBudWxsLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7T2JqZWN0fG51bGx9IGhlbGl4Q29uZmlnPW51bGxcbiAgICAgICAgICovXG4gICAgICAgIGhlbGl4Q29uZmlnOiBudWxsLFxuICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfSxcblxuICAgICAgICBpdGVtczogW3tcbiAgICAgICAgICAgIG50eXBlIDogJ2NvbnRhaW5lcicsXG4gICAgICAgICAgICBmbGV4ICA6IDEsXG4gICAgICAgICAgICBsYXlvdXQ6ICdmaXQnLFxuICAgICAgICAgICAgaXRlbXMgOiBbXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBudHlwZSA6ICdwYW5lbCcsXG4gICAgICAgICAgICBsYXlvdXQ6IHtudHlwZTogJ3Zib3gnLGFsaWduOiAnc3RyZXRjaCd9LFxuICAgICAgICAgICAgc3R5bGUgOiB7YmFja2dyb3VuZENvbG9yOiAnIzJiMmIyYid9LFxuICAgICAgICAgICAgd2lkdGggOiAyNTAsXG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGZsZXggOiBudWxsLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dZOiAnc2Nyb2xsJ31cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGl0ZW1EZWZhdWx0czoge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICAgICA6ICdyYW5nZWZpZWxkJyxcbiAgICAgICAgICAgICAgICBmbGV4ICAgICAgICAgOiAnMCAxIGF1dG8nLFxuICAgICAgICAgICAgICAgIGxhYmVsV2lkdGggICA6ICcxMDBweCcsXG4gICAgICAgICAgICAgICAgc3R5bGUgICAgICAgIDoge3BhZGRpbmc6ICcxMHB4J30sXG4gICAgICAgICAgICAgICAgdXNlSW5wdXRFdmVudDogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChbJ2RlbHRhWScsICdtYXhPcGFjaXR5JywgJ21pbk9wYWNpdHknXS5pbmNsdWRlcyh0aGlzLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS52YWx1ZSAvPSAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpW3RoaXMubmFtZV0gPSBkYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGVhZGVyczogW3tcbiAgICAgICAgICAgICAgICBkb2NrOiAndG9wJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSGVsaXggQ29udHJvbHMnXG4gICAgICAgICAgICB9XSxcblxuICAgICAgICAgICAgaXRlbXM6IFt7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFgnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjAwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVgnLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogNDAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnVHJhbnNsYXRlIFknLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMjUwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC0yNTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3RyYW5zbGF0ZVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogLTM1MFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1RyYW5zbGF0ZSBaJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDQ1MDAsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAtNDUwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICd0cmFuc2xhdGVaJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IC0xNTAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGZpZWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXQoZmllbGRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykub24oJ2NoYW5nZVRyYW5zbGF0ZVonLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIHRoaXMubWluVmFsdWUpLCB0aGlzLm1heFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0IDogJ0RlbHRhIFknLFxuICAgICAgICAgICAgICAgIGxhYmVsQWxpZ246ICd0b3AnLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlICA6IDYwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSAgOiAtNjAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgICA6ICdkZWx0YVknLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgICA6IDcwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUm90YXRlJyxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IC03MjAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiA3MjAsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAncm90YXRpb25BbmdsZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAwLFxuICAgICAgICAgICAgICAgIGxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJylbdGhpcy5uYW1lXSA9IGRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKGZpZWxkSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCA9IE5lby5nZXQoZmllbGRJZCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5lby5nZXQoJ25lby1oZWxpeC0xJykub24oJ2NoYW5nZVJvdGF0aW9uJywgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pblZhbHVlKSwgdGhpcy5tYXhWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ1JhZGl1cycsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzNTAwLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogOTAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3JhZGl1cycsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAxNTAwXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnUGVyc3BlY3RpdmUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogNTAsXG4gICAgICAgICAgICAgICAgbWF4VmFsdWUgOiAzMDAwLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ3BlcnNwZWN0aXZlJyxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDgwMFxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGxhYmVsVGV4dDogJ0l0ZW0gQW5nbGUnLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMSxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDM2LFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ2l0ZW1BbmdsZScsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiA4XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWF4IE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG5hbWUgICAgIDogJ21heE9wYWNpdHknLFxuICAgICAgICAgICAgICAgIG1pblZhbHVlIDogMCxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IDgwIC8vIHRvZG8gWzMwLCA4MF1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBsYWJlbFRleHQ6ICdNaW4gT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbmFtZSAgICAgOiAnbWluT3BhY2l0eScsXG4gICAgICAgICAgICAgICAgbWluVmFsdWUgOiAwLFxuICAgICAgICAgICAgICAgIG1heFZhbHVlIDogMTAwLFxuICAgICAgICAgICAgICAgIHZhbHVlICAgIDogMzBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgICAgIGNsZWFyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxUZXh0OiAnTWF4IEl0ZW1zJyxcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZSA6IDYwMCxcbiAgICAgICAgICAgICAgICBtaW5WYWx1ZSA6IDEwMCxcbiAgICAgICAgICAgICAgICBuYW1lICAgICA6ICdtYXhJdGVtcycsXG4gICAgICAgICAgICAgICAgc3RlcFNpemUgOiAxMDAsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiAzMDBcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICB0ZXh0ICAgICAgOiAnRmxpcCBJdGVtcycsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW46ICcyMHB4J30sXG4gICAgICAgICAgICAgICAgZG9tTGlzdGVuZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhlbGl4ID0gTmVvLmdldCgnbmVvLWhlbGl4LTEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbGl4LmZsaXBwZWQgPSAhaGVsaXguZmxpcHBlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICAgOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZCAgOiB0cnVlLCAvLyBjb21wb25lbnQuSGVsaXg6IGJ1ZmZlcmVkIHNvcnRpbmcgIzEwNVxuICAgICAgICAgICAgICAgIHRleHQgICAgICA6ICdTb3J0IGJ5IExhc3RuYW1lJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2xhc3RuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkgOiAnZmlyc3RuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgICAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIG50eXBlICAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkICA6IHRydWUsIC8vIGNvbXBvbmVudC5IZWxpeDogYnVmZmVyZWQgc29ydGluZyAjMTA1XG4gICAgICAgICAgICAgICAgdGV4dCAgICAgIDogJ1NvcnQgYnkgRmlyc3RuYW1lJyxcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnM6IHt9LFxuICAgICAgICAgICAgICAgIGRvbUxpc3RlbmVyczoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBOZW8uZ2V0KCduZW8taGVsaXgtMScpLnN0b3JlLnNvcnRlcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnQVNDJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5IDogJ2xhc3RuYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdBU0MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luICAgOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZSAgICA6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIGljb25DbHMgIDogJ2ZhIGZhLXNxdWFyZScsXG4gICAgICAgICAgICAgICAgdGV4dCAgICAgOiAnRm9sbG93IFNlbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzOiB7fSxcbiAgICAgICAgICAgICAgICBkb21MaXN0ZW5lcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxpeCA9IE5lby5nZXQoJ25lby1oZWxpeC0xJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZS5pY29uQ2xzID09PSAnZmEgZmEtc3F1YXJlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbGl4LmZvbGxvd1NlbGVjdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWUuaWNvbkNscyA9ICdmYSBmYS1jaGVjay1zcXVhcmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxpeC5mb2xsb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZS5pY29uQ2xzID0gJ2ZhIGZhLXNxdWFyZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgIDogJzIwcHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBudHlwZTogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICB0ZXh0IDogW1xuICAgICAgICAgICAgICAgICAgICAnPGI+TmF2aWdhdGlvbiBDb25jZXB0PC9iPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5DbGljayBvbiBhbiBpdGVtIHRvIHNlbGVjdCBpdC4gQWZ0ZXJ3YXJkcyB5b3UgY2FuIHVzZSB0aGUgQXJyb3cgS2V5cyB0byB3YWxrIHRocm91Z2ggdGhlIGl0ZW1zLjwvcD4nLFxuICAgICAgICAgICAgICAgICAgICAnPHA+SGl0IHRoZSBTcGFjZSBLZXkgdG8gcm90YXRlIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbSB0byB0aGUgZnJvbnQuPC9wPicsXG4gICAgICAgICAgICAgICAgICAgICc8cD5IaXQgdGhlIEVudGVyIEtleSB0byBleHBhbmQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLjwvcD4nXG4gICAgICAgICAgICAgICAgXS5qb2luKCcnKSxcblxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMzMjMyMzInLFxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgICA6ICcjZGRkJyxcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemUgICAgICAgOiAnMTNweCcsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgICAgIDogJzEwcHgnLFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nICAgICAgICA6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZSAgICAgOiAnbm9ybWFsJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1dXG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgbWUuaGVsaXggPSBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZTogSGVsaXgsXG4gICAgICAgICAgICBpZCAgICA6ICduZW8taGVsaXgtMScsXG4gICAgICAgICAgICAuLi5tZS5oZWxpeENvbmZpZyB8fCB7fVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5pdGVtc1swXS5pdGVtcy5wdXNoKG1lLmhlbGl4KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtOZW8uZGF0YS5TdG9yZX1cbiAgICAgKi9cbiAgICBnZXRTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbMF0uaXRlbXNbMF0uc3RvcmU7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhIZWxpeE1haW5Db250YWluZXIpO1xuXG5leHBvcnQge0hlbGl4TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgSGVsaXhNYWluQ29udGFpbmVyICBmcm9tICcuL0hlbGl4TWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9jb21wb25lbnQvaGVsaXgvJyxcbiAgICBtYWluVmlldzogSGVsaXhNYWluQ29udGFpbmVyLFxuICAgIG5hbWUgICAgOiAnVGVzdEFwcCdcbn0pO1xuXG5leHBvcnQge29uU3RhcnQgYXMgb25TdGFydH07Il0sInNvdXJjZVJvb3QiOiIifQ==