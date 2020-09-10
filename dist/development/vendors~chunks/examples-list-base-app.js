self["webpackChunk"](["vendors~chunks/examples-list-base-app"],{

/***/ "./node_modules/neo.mjs/examples/list/base/MainContainer.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/base/MainContainer.mjs ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../src/list/Base.mjs */ "./node_modules/neo.mjs/src/list/Base.mjs");
/* harmony import */ var _MainStore_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainStore.mjs */ "./node_modules/neo.mjs/examples/list/base/MainStore.mjs");
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
            maxValue  : 300,
            minValue  : 30,
            stepSize  : 5,
            value     : me.exampleComponent.height,
            style     : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.useCheckBoxes,
            labelText: 'useCheckBoxes',
            listeners: {change: me.onConfigChange.bind(me, 'useCheckBoxes')},
            style    : {marginTop: '10px'}
        }, {
            module    :  _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable : true,
            labelText : 'width',
            listeners : {change: me.onConfigChange.bind(me, 'width')},
            maxValue  : 300,
            minValue  : 100,
            stepSize  : 5,
            style     : {marginTop: '10px'},
            value     : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create({
            module      : _src_list_Base_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            displayField: 'firstname',
            store       : _MainStore_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            width       : 100
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/list/base/MainModel.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/base/MainModel.mjs ***!
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

/***/ "./node_modules/neo.mjs/examples/list/base/MainStore.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/base/MainStore.mjs ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStore; });
/* harmony import */ var _MainModel_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainModel.mjs */ "./node_modules/neo.mjs/examples/list/base/MainModel.mjs");
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

/***/ "./node_modules/neo.mjs/examples/list/base/app.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/neo.mjs/examples/list/base/app.mjs ***!
  \*********************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/list/base/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/list/base/',
    mainView: _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
    name    : 'TestApp'
});



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/CheckBox.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckBox; });
/* harmony import */ var _Base_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base.mjs */ "./node_modules/neo.mjs/src/form/field/Base.mjs");


/**
 * @class Neo.form.field.CheckBox
 * @extends Neo.form.field.Base
 */
class CheckBox extends _Base_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.CheckBox'
         * @protected
         */
        className: 'Neo.form.field.CheckBox',
        /**
         * @member {String} ntype='checkboxfield'
         * @protected
         */
        ntype: 'checkboxfield',
        /**
         * @member {Boolean} checked_=false
         */
        checked_: false,
        /**
         * @member {Array} cls=['neo-checkboxfield']
         */
        cls: ['neo-checkboxfield'],
        /**
         * @member {Boolean} hideLabel_=false
         */
        hideLabel_: false,
        /**
         * @member {Boolean} hideValueLabel_=false
         */
        hideValueLabel_: true,
        /**
         * @member {String} inputType_='checkbox'
         */
        inputType_: 'checkbox',
        /**
         * @member {String} labelText_='LabelText'
         */
        labelText_: 'LabelText',
        /**
         * defaults to px
         * @member {Number|String} labelWidth_=150
         */
        labelWidth_: 150,
        /**
         * @member {String} The name (group) of the input dom node
         */
        name_: '',
        /**
         * @member {String} valueLabelText_='ValueLabel'
         */
        valueLabelText_: 'ValueLabel',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-checkbox-label']
            }, {
                tag: 'input',
                cls: ['neo-checkbox-input']
            }, {
                tag: 'label',
                cls: ['neo-checkbox-value-label']
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
            domListeners = Neo.clone(me.domListeners, true),
            vdom         = me.vdom,
            inputEl      = vdom.cn[1],
            valueLabel   = vdom.cn[2];

        inputEl.id = valueLabel.for = me.id + '-input';
        me.vdom = vdom;

        domListeners.push({
            change: {
                fn   : me.onInputValueChange,
                scope: me
            }
        });

        me.domListeners = domListeners;
    }

    /**
     *
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        vdom.cn[1].checked = value;
        me.vdom = vdom;

        if (oldValue !== undefined) {
            me.fire('change', {
                component: me,
                oldValue : oldValue,
                value    : value
            });
        }
    }

    /**
     * Triggered after the hideLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the hideLabelValue config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetHideValueLabel(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[2].removeDom = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the inputType config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetInputType(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].type = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelText config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetLabelText(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[0].innerHTML = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the labelWidth config got changed
     * @param {Number|String} value
     * @param {Number|String} oldValue
     * @protected
     */
    afterSetLabelWidth(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideLabel) {
            vdom.cn[0].width = value;
            me.vdom = vdom;
        }
    }

    /**
     * Triggered after the name config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetName(value, oldValue) {
        let vdom = this.vdom;

        vdom.cn[1].name = value;
        this.vdom = vdom;
    }

    /**
     * Triggered after the value config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValue(value, oldValue) {
        if (value) {
            let vdom = this.vdom;

            vdom.cn[1].value = value;
            this.vdom = vdom;
        }

        super.afterSetValue(value, oldValue);
    }

    /**
     * Triggered after the valueLabel config got changed
     * @param {String} value
     * @param {String} oldValue
     * @protected
     */
    afterSetValueLabelText(value, oldValue) {
        let me   = this,
            vdom = me.vdom;

        if (!me.hideValueLabel) {
            vdom.cn[2].innerHTML = value;
            me.vdom = vdom;
        }
    }

    /**
     * Gets triggered when a user checks a checkbox input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        let me      = this,
            checked = data.target.checked;

        me._checked = checked; // silent update

        // keep the vdom & vnode in sync for future updates
        me.vdom.cn[1].checked = checked;
        me.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = checked + '';

        me.fire('change', {
            component: me,
            oldValue : !checked,
            value    : checked
        });
    }
}

Neo.applyClassConfig(CheckBox);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9saXN0L2Jhc2UvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9iYXNlL01haW5Nb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9iYXNlL01haW5TdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvbGlzdC9iYXNlL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF5RTtBQUNMO0FBQ0w7QUFDWDtBQUNtQjs7QUFFdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0VBQXFCO0FBQ2pELHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsU0FBUztBQUNULHlCQUF5QixrRUFBVztBQUNwQztBQUNBO0FBQ0EseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQW9EO0FBQzVFLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QseUJBQXlCLGtFQUFXO0FBQ3BDO0FBQ0E7QUFDQSx5QkFBeUIsNENBQTRDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQkFBa0I7QUFDM0M7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwwREFBSTtBQUM5QjtBQUNBLDBCQUEwQixzREFBUztBQUNuQztBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBaUQ7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJEQUFLO0FBQzdCLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNZOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyREFBSztBQUM3Qix3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixzREFBUzs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQUE7QUFBQTtBQUFnRDs7QUFFaEQ7QUFDQTtBQUNBLGNBQWMsMERBQWE7QUFDM0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ05EO0FBQUE7QUFBQTtBQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsaURBQUk7QUFDM0Isd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1saXN0LWJhc2UtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25WaWV3cG9ydCBmcm9tICcuLi8uLi9Db25maWd1cmF0aW9uVmlld3BvcnQubWpzJztcbmltcG9ydCBMaXN0ICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2xpc3QvQmFzZS5tanMnO1xuaW1wb3J0IE1haW5TdG9yZSAgICAgICAgICAgICBmcm9tICcuL01haW5TdG9yZS5tanMnO1xuaW1wb3J0IE51bWJlckZpZWxkICAgICAgICAgICBmcm9tICcuLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9OdW1iZXIubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluQ29udGFpbmVyXG4gKiBAZXh0ZW5kcyBOZW8uZXhhbXBsZXMuQ29uZmlndXJhdGlvblZpZXdwb3J0XG4gKi9cbmNsYXNzIE1haW5Db250YWluZXIgZXh0ZW5kcyBDb25maWd1cmF0aW9uVmlld3BvcnQge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluQ29udGFpbmVyJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1jb250YWluZXInLFxuXG4gICAgICAgIGF1dG9Nb3VudCAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBjb25maWdJdGVtTGFiZWxXaWR0aDogMTMwLFxuICAgICAgICBjb25maWdJdGVtV2lkdGggICAgIDogMjMwLFxuICAgICAgICBsYXlvdXQgICAgICAgICAgICAgIDoge250eXBlOiAnaGJveCcsIGFsaWduOiAnc3RyZXRjaCd9XG4gICAgfX1cblxuICAgIGNyZWF0ZUNvbmZpZ3VyYXRpb25Db21wb25lbnRzKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuXG4gICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5kaXNhYmxlU2VsZWN0aW9uLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnZGlzYWJsZVNlbGVjdGlvbicsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdkaXNhYmxlU2VsZWN0aW9uJyl9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnaGVpZ2h0JyxcbiAgICAgICAgICAgIGxpc3RlbmVycyA6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdoZWlnaHQnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSAgOiAzMDAsXG4gICAgICAgICAgICBtaW5WYWx1ZSAgOiAzMCxcbiAgICAgICAgICAgIHN0ZXBTaXplICA6IDUsXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmhlaWdodCxcbiAgICAgICAgICAgIHN0eWxlICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC51c2VDaGVja0JveGVzLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAndXNlQ2hlY2tCb3hlcycsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd1c2VDaGVja0JveGVzJyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICA6ICBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZSA6IHRydWUsXG4gICAgICAgICAgICBsYWJlbFRleHQgOiAnd2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzIDoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3dpZHRoJyl9LFxuICAgICAgICAgICAgbWF4VmFsdWUgIDogMzAwLFxuICAgICAgICAgICAgbWluVmFsdWUgIDogMTAwLFxuICAgICAgICAgICAgc3RlcFNpemUgIDogNSxcbiAgICAgICAgICAgIHN0eWxlICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZSAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LndpZHRoXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4YW1wbGVDb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiBOZW8uY3JlYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgIDogTGlzdCxcbiAgICAgICAgICAgIGRpc3BsYXlGaWVsZDogJ2ZpcnN0bmFtZScsXG4gICAgICAgICAgICBzdG9yZSAgICAgICA6IE1haW5TdG9yZSxcbiAgICAgICAgICAgIHdpZHRoICAgICAgIDogMTAwXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoTWFpbkNvbnRhaW5lcik7XG5cbmV4cG9ydCB7TWFpbkNvbnRhaW5lciBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTW9kZWwgIGZyb20gJy4uLy4uLy4uL3NyYy9kYXRhL01vZGVsLm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbk1vZGVsXG4gKiBAZXh0ZW5kcyBOZW8uZGF0YS5Nb2RlbFxuICovXG5jbGFzcyBNYWluTW9kZWwgZXh0ZW5kcyBNb2RlbCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Nb2RlbCcsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tbW9kZWwnLFxuXG4gICAgICAgIGtleVByb3BlcnR5OiAnZ2l0aHViSWQnLFxuXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdjb3VudHJ5JyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdmaXJzdG5hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ1N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ2dpdGh1YklkJyxcbiAgICAgICAgICAgIHR5cGU6ICdTdHJpbmcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG5hbWU6ICdsYXN0bmFtZScsXG4gICAgICAgICAgICB0eXBlOiAnU3RyaW5nJ1xuICAgICAgICB9XVxuICAgIH19XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKE1haW5Nb2RlbCk7XG5cbmV4cG9ydCB7TWFpbk1vZGVsIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluTW9kZWwgZnJvbSAnLi9NYWluTW9kZWwubWpzJztcbmltcG9ydCBTdG9yZSAgICAgZnJvbSAnLi4vLi4vLi4vc3JjL2RhdGEvU3RvcmUubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluU3RvcmVcbiAqIEBleHRlbmRzIE5lby5kYXRhLlN0b3JlXG4gKi9cbmNsYXNzIE1haW5TdG9yZSBleHRlbmRzIFN0b3JlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpblN0b3JlJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1zdG9yZScsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdnaXRodWJJZCcsXG4gICAgICAgIG1vZGVsICAgICAgOiBNYWluTW9kZWwsXG5cbiAgICAgICAgZGF0YTogW3tcbiAgICAgICAgICAgIGNvdW50cnkgIDogJ0dlcm1hbnknLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnVG9iaWFzJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ3RvYml1JyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ1VobGlnJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdVU0EnLFxuICAgICAgICAgICAgZmlyc3RuYW1lOiAnUmljaCcsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdyd2F0ZXJzJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ1dhdGVycydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnR2VybWFueScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdOaWxzJyxcbiAgICAgICAgICAgIGdpdGh1YklkIDogJ21yc3Vuc2hpbmUnLFxuICAgICAgICAgICAgbGFzdG5hbWUgOiAnRGVobCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgY291bnRyeSAgOiAnVVNBJyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ0dlcmFyZCcsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdjYW10bmJpa2VycndjJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ0hvcmFuJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdTbG92YWtpYScsXG4gICAgICAgICAgICBmaXJzdG5hbWU6ICdKb3plZicsXG4gICAgICAgICAgICBnaXRodWJJZCA6ICdqc2FrYWxvcycsXG4gICAgICAgICAgICBsYXN0bmFtZSA6ICdTYWthbG9zJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBjb3VudHJ5ICA6ICdHZXJtYW55JyxcbiAgICAgICAgICAgIGZpcnN0bmFtZTogJ0Jhc3RpYW4nLFxuICAgICAgICAgICAgZ2l0aHViSWQgOiAnYmhhdXN0ZWluJyxcbiAgICAgICAgICAgIGxhc3RuYW1lIDogJ0hhdXN0ZWluJ1xuICAgICAgICB9XSxcblxuICAgICAgICBzb3J0ZXJzOiBbe1xuICAgICAgICAgICAgcHJvcGVydHkgOiAnZmlyc3RuYW1lJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluU3RvcmUpO1xuXG5leHBvcnQge01haW5TdG9yZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZXhhbXBsZXMvbGlzdC9iYXNlLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqL1xuY2xhc3MgQ2hlY2tCb3ggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLkNoZWNrQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NoZWNrYm94ZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2hlY2tib3hmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjaGVja2VkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1jaGVja2JveGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2hlY2tib3hmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlVmFsdWVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVWYWx1ZUxhYmVsXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlXz0nY2hlY2tib3gnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGVfOiAnY2hlY2tib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbFRleHRfPSdMYWJlbFRleHQnXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFRleHRfOiAnTGFiZWxUZXh0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGxhYmVsV2lkdGhfPTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxXaWR0aF86IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gVGhlIG5hbWUgKGdyb3VwKSBvZiB0aGUgaW5wdXQgZG9tIG5vZGVcbiAgICAgICAgICovXG4gICAgICAgIG5hbWVfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdmFsdWVMYWJlbFRleHRfPSdWYWx1ZUxhYmVsJ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVMYWJlbFRleHRfOiAnVmFsdWVMYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtbGFiZWwnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWlucHV0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC12YWx1ZS1sYWJlbCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gdmRvbS5jblsxXSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWwgICA9IHZkb20uY25bMl07XG5cbiAgICAgICAgaW5wdXRFbC5pZCA9IHZhbHVlTGFiZWwuZm9yID0gbWUuaWQgKyAnLWlucHV0JztcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2hhbmdlOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uSW5wdXRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWxWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlVmFsdWVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlucHV0VHlwZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbnB1dFR5cGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0udHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxUZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblswXS53aWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWVMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZVZhbHVlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMl0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGNoZWNrcyBhIGNoZWNrYm94IGlucHV0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2hlY2tlZCA9IGRhdGEudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgbWUuX2NoZWNrZWQgPSBjaGVja2VkOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgLy8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIGluIHN5bmMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgIG1lLnZkb20uY25bMV0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIG1lLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQgKyAnJztcblxuICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgb2xkVmFsdWUgOiAhY2hlY2tlZCxcbiAgICAgICAgICAgIHZhbHVlICAgIDogY2hlY2tlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENoZWNrQm94KTtcblxuZXhwb3J0IHtDaGVja0JveCBhcyBkZWZhdWx0fTsiXSwic291cmNlUm9vdCI6IiJ9