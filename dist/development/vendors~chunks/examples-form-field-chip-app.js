self["webpackChunk"](["vendors~chunks/examples-form-field-chip-app"],{

/***/ "./node_modules/neo.mjs/examples/form/field/chip/MainContainer.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/chip/MainContainer.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _src_form_field_Chip_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/form/field/Chip.mjs */ "./node_modules/neo.mjs/src/form/field/Chip.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _MainStore_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainStore.mjs */ "./node_modules/neo.mjs/examples/form/field/chip/MainStore.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");








/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_2__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainContainer',
        ntype    : 'main-container',

        autoMount           : true,
        configItemLabelWidth: 160,
        layout              : {ntype: 'hbox', align: 'stretch'}
    }}

    createConfigurationComponents() {
        let me = this;

        return [{
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.clearable,
            labelText: 'clearable',
            listeners: {change: me.onConfigChange.bind(me, 'clearable')}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.clearToOriginalValue,
            labelText: 'clearToOriginalValue',
            listeners: {change: me.onConfigChange.bind(me, 'clearToOriginalValue')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.hideLabel,
            labelText: 'hideLabel',
            listeners: {change: me.onConfigChange.bind(me, 'hideLabel')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.hidePickerOnSelect,
            labelText: 'hidePickerOnSelect',
            listeners: {change: me.onConfigChange.bind(me, 'hidePickerOnSelect')},
            style    : {marginTop: '10px'}
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'top',
            hideValueLabel: false,
            labelText     : 'labelPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'top')},
            name          : 'labelPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'top'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'right',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'right')},
            name          : 'labelPosition',
            valueLabelText: 'right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'bottom',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'bottom')},
            name          : 'labelPosition',
            valueLabelText: 'bottom'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'left',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'left')},
            name          : 'labelPosition',
            valueLabelText: 'left'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            checked       : me.exampleComponent.labelPosition === 'inline',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'inline')},
            name          : 'labelPosition',
            valueLabelText: 'inline'
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            labelText: 'labelText',
            style    : {marginTop: '10px'},
            listeners: {change: me.onConfigChange.bind(me, 'labelText')},
            value    : me.exampleComponent.labelText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'labelWidth',
            listeners: {change: me.onConfigChange.bind(me, 'labelWidth')},
            maxValue : 200,
            minValue : 50,
            stepSize : 5,
            value    : me.exampleComponent.labelWidth
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_6__["default"],
            labelText: 'placeholderText',
            listeners: {change: me.onConfigChange.bind(me, 'placeholderText')},
            value    : me.exampleComponent.placeholderText
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.typeAhead,
            labelText: 'typeAhead',
            listeners: {change: me.onConfigChange.bind(me, 'typeAhead')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'width',
            listeners: {change: me.onConfigChange.bind(me, 'width')},
            maxValue : 300,
            minValue : 50,
            stepSize : 5,
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create({
            module       : _src_form_field_Chip_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
            displayField : 'name',
            labelPosition: 'inline',
            labelText    : 'US States',
            labelWidth   : 80,
            width        : 200,

            store: {
                module: _MainStore_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]
            }
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/chip/MainModel.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/chip/MainModel.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainModel; });
/* harmony import */ var _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/data/Model.mjs */ "./node_modules/neo.mjs/src/data/Model.mjs");


/**
 * @class TestApp.MainModel
 * @extends Neo.data.Model
 */
class MainModel extends _src_data_Model_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainModel',
        ntype    : 'main-model',

        keyProperty: 'abbreviation',

        fields: [{
            name: 'abbreviation',
            type: 'string'
        }, {
            name: 'name',
            type: 'string'
        }]
    }}
}

Neo.applyClassConfig(MainModel);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/chip/MainStore.mjs":
/*!*********************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/chip/MainStore.mjs ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainStore; });
/* harmony import */ var _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/data/Store.mjs */ "./node_modules/neo.mjs/src/data/Store.mjs");
/* harmony import */ var _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainModel.mjs */ "./node_modules/neo.mjs/examples/form/field/chip/MainModel.mjs");



/**
 * @class TestApp.MainStore
 * @extends Neo.data.Store
 */
class MainStore extends _src_data_Store_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        className: 'TestApp.MainStore',
        ntype    : 'main-store',

        autoLoad   : true,
        keyProperty: 'abbreviation',
        model      : _MainModel_mjs__WEBPACK_IMPORTED_MODULE_1__["default"],
        url        : '../../resources/examples/data/us_states.json',

        sorters: [{
            property : 'name',
            direction: 'ASC'
        }]
    }}
}

Neo.applyClassConfig(MainStore);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/chip/app.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/chip/app.mjs ***!
  \***************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/form/field/chip/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/form/field/chip/',
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



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Chip.mjs":
/*!******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Chip.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Chip; });
/* harmony import */ var _Select_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.mjs */ "./node_modules/neo.mjs/src/form/field/Select.mjs");


/**
 * @class Neo.form.field.Chip
 * @extends Neo.form.field.Select
 */
class Chip extends _Select_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Chip'
         * @protected
         */
        className: 'Neo.form.field.Chip',
        /**
         * @member {String} ntype='chipfield'
         * @protected
         */
        ntype: 'chipfield',
        /**
         * @member {Object|null} listConfig={useCheckBoxes: true}
         */
        listConfig: {
            useCheckBoxes: true
        }
    }}
}

Neo.applyClassConfig(Chip);



/***/ }),

/***/ "./node_modules/neo.mjs/src/form/field/Radio.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/neo.mjs/src/form/field/Radio.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Radio; });
/* harmony import */ var _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../manager/Component.mjs */ "./node_modules/neo.mjs/src/manager/Component.mjs");



/**
 * @class Neo.form.field.Radio
 * @extends Neo.form.field.CheckBox
 */
class Radio extends _CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"] {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.form.field.Radio'
         * @protected
         */
        className: 'Neo.form.field.Radio',
        /**
         * @member {String} ntype='radiofield'
         * @protected
         */
        ntype: 'radiofield',
        /**
         * @member {Array} cls=['neo-radiofield']
         */
        cls: ['neo-radiofield'],
        /**
         * @member {String} inputType='radio'
         */
        inputType: 'radio',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            cn: [{
                tag: 'label',
                cls: ['neo-radio-label']
            }, {
                tag: 'input',
                cls: ['neo-radio-input']
            }, {
                tag: 'label',
                cls: ['neo-radio-value-label']
            }]
        }
    }}

    /**
     * Triggered after the checked config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetChecked(value, oldValue) {
        super.afterSetChecked(value, oldValue);

        // update radios with the same name to be unchecked
        if (value) {
            this.uncheckGroupItems();
        }
    }

    /**
     * Gets triggered when a user checks a radio input.
     * @param {Object} data
     */
    onInputValueChange(data) {
        super.onInputValueChange(data);
        this.uncheckGroupItems();
    }

    /**
     * Radios do not fire a change event for "uncheck", so we need to iterate over other radios with the same name.
     */
    uncheckGroupItems() {
        let me = this,
            radios;

        // discuss: we could limit this to radios inside the same form, IF a top level form is used
        radios = _manager_Component_mjs__WEBPACK_IMPORTED_MODULE_1__["default"].find({
            ntype: 'radiofield',
            name : me.name
        });

        radios.forEach(item => {
            if (item.id !== me.id && item._checked) {
                item._checked = false; // silent update

                // keep the vdom & vnode in sync for future updates
                item.vdom.cn[1].checked = false;

                if (item.vnode) {
                    item.vnode.childNodes[me.hideLabel ? 0 : 1].attributes.checked = 'false';
                }

                item.fire('change', {
                    component: me,
                    oldValue : true,
                    value    : false
                });
            }
        });
    }
}

Neo.applyClassConfig(Radio);



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL2NoaXAvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9jaGlwL01haW5Nb2RlbC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9jaGlwL01haW5TdG9yZS5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC9jaGlwL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL0NoaXAubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRFO0FBQ0o7QUFDRDtBQUNuQjtBQUNzQjtBQUNEO0FBQ0Q7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFxQjtBQUNqRCx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQTJEO0FBQ25GLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0Is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b0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2hRQTtBQUFBO0FBQUE7QUFBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1EQUFNO0FBQ3pCLHdCQUF3QjtBQUN4QjtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWSxhQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDWTs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IscURBQVE7QUFDNUIsd0JBQXdCO0FBQ3hCO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDhEQUFnQjtBQUNqQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBIiwiZmlsZSI6InZlbmRvcnN+Y2h1bmtzL2V4YW1wbGVzLWZvcm0tZmllbGQtY2hpcC1hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ2hpcEZpZWxkICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL0NoaXAubWpzJztcbmltcG9ydCBDb25maWd1cmF0aW9uVmlld3BvcnQgZnJvbSAnLi4vLi4vLi4vQ29uZmlndXJhdGlvblZpZXdwb3J0Lm1qcyc7XG5pbXBvcnQgTWFpblN0b3JlICAgICAgICAgICAgIGZyb20gJy4vTWFpblN0b3JlLm1qcyc7XG5pbXBvcnQgTnVtYmVyRmllbGQgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL051bWJlci5tanMnO1xuaW1wb3J0IFJhZGlvICAgICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9SYWRpby5tanMnO1xuaW1wb3J0IFRleHRGaWVsZCAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9UZXh0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIFRlc3RBcHAuTWFpbkNvbnRhaW5lclxuICogQGV4dGVuZHMgTmVvLmV4YW1wbGVzLkNvbmZpZ3VyYXRpb25WaWV3cG9ydFxuICovXG5jbGFzcyBNYWluQ29udGFpbmVyIGV4dGVuZHMgQ29uZmlndXJhdGlvblZpZXdwb3J0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbkNvbnRhaW5lcicsXG4gICAgICAgIG50eXBlICAgIDogJ21haW4tY29udGFpbmVyJyxcblxuICAgICAgICBhdXRvTW91bnQgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgY29uZmlnSXRlbUxhYmVsV2lkdGg6IDE2MCxcbiAgICAgICAgbGF5b3V0ICAgICAgICAgICAgICA6IHtudHlwZTogJ2hib3gnLCBhbGlnbjogJ3N0cmV0Y2gnfVxuICAgIH19XG5cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uQ29tcG9uZW50cygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcztcblxuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQuY2xlYXJhYmxlLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnY2xlYXJhYmxlJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2NsZWFyYWJsZScpfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmNsZWFyVG9PcmlnaW5hbFZhbHVlLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnY2xlYXJUb09yaWdpbmFsVmFsdWUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnY2xlYXJUb09yaWdpbmFsVmFsdWUnKX0sXG4gICAgICAgICAgICBzdHlsZSAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J31cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5oaWRlTGFiZWwsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdoaWRlTGFiZWwnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnaGlkZUxhYmVsJyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGlkZVBpY2tlck9uU2VsZWN0LFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnaGlkZVBpY2tlck9uU2VsZWN0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hpZGVQaWNrZXJPblNlbGVjdCcpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAndG9wJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICd0b3AnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3RvcCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdsYWJlbFBvc2l0aW9uJywgJ3JpZ2h0Jyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAncmlnaHQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2xhYmVsUG9zaXRpb24nLCAnYm90dG9tJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnYm90dG9tJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICdsZWZ0Jyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnbGVmdCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ2lubGluZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICdpbmxpbmUnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdpbmxpbmUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbGFiZWxUZXh0JyxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2xhYmVsVGV4dCcpfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFRleHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2xhYmVsV2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxXaWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMjAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFdpZHRoXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAncGxhY2Vob2xkZXJUZXh0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ3BsYWNlaG9sZGVyVGV4dCcpfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5wbGFjZWhvbGRlclRleHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC50eXBlQWhlYWQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICd0eXBlQWhlYWQnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAndHlwZUFoZWFkJyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICd3aWR0aCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd3aWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMzAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC53aWR0aFxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeGFtcGxlQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZSh7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgOiBDaGlwRmllbGQsXG4gICAgICAgICAgICBkaXNwbGF5RmllbGQgOiAnbmFtZScsXG4gICAgICAgICAgICBsYWJlbFBvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICA6ICdVUyBTdGF0ZXMnLFxuICAgICAgICAgICAgbGFiZWxXaWR0aCAgIDogODAsXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgOiAyMDAsXG5cbiAgICAgICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlOiBNYWluU3RvcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNb2RlbCAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2RhdGEvTW9kZWwubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgVGVzdEFwcC5NYWluTW9kZWxcbiAqIEBleHRlbmRzIE5lby5kYXRhLk1vZGVsXG4gKi9cbmNsYXNzIE1haW5Nb2RlbCBleHRlbmRzIE1vZGVsIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIGNsYXNzTmFtZTogJ1Rlc3RBcHAuTWFpbk1vZGVsJyxcbiAgICAgICAgbnR5cGUgICAgOiAnbWFpbi1tb2RlbCcsXG5cbiAgICAgICAga2V5UHJvcGVydHk6ICdhYmJyZXZpYXRpb24nLFxuXG4gICAgICAgIGZpZWxkczogW3tcbiAgICAgICAgICAgIG5hbWU6ICdhYmJyZXZpYXRpb24nLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluTW9kZWwpO1xuXG5leHBvcnQge01haW5Nb2RlbCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2RhdGEvU3RvcmUubWpzJztcbmltcG9ydCBNb2RlbCBmcm9tICcuL01haW5Nb2RlbC5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5TdG9yZVxuICogQGV4dGVuZHMgTmVvLmRhdGEuU3RvcmVcbiAqL1xuY2xhc3MgTWFpblN0b3JlIGV4dGVuZHMgU3RvcmUge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnVGVzdEFwcC5NYWluU3RvcmUnLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLXN0b3JlJyxcblxuICAgICAgICBhdXRvTG9hZCAgIDogdHJ1ZSxcbiAgICAgICAga2V5UHJvcGVydHk6ICdhYmJyZXZpYXRpb24nLFxuICAgICAgICBtb2RlbCAgICAgIDogTW9kZWwsXG4gICAgICAgIHVybCAgICAgICAgOiAnLi4vLi4vcmVzb3VyY2VzL2V4YW1wbGVzL2RhdGEvdXNfc3RhdGVzLmpzb24nLFxuXG4gICAgICAgIHNvcnRlcnM6IFt7XG4gICAgICAgICAgICBwcm9wZXJ0eSA6ICduYW1lJyxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0FTQydcbiAgICAgICAgfV1cbiAgICB9fVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluU3RvcmUpO1xuXG5leHBvcnQge01haW5TdG9yZSBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgTWFpbkNvbnRhaW5lciBmcm9tICcuL01haW5Db250YWluZXIubWpzJztcblxuY29uc3Qgb25TdGFydCA9ICgpID0+IE5lby5hcHAoe1xuICAgIGFwcFBhdGggOiAnZXhhbXBsZXMvZm9ybS9maWVsZC9jaGlwLycsXG4gICAgbWFpblZpZXc6IE1haW5Db250YWluZXIsXG4gICAgbmFtZSAgICA6ICdUZXN0QXBwJ1xufSk7XG5cbmV4cG9ydCB7b25TdGFydCBhcyBvblN0YXJ0fTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuL0Jhc2UubWpzJztcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3hcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkJhc2VcbiAqL1xuY2xhc3MgQ2hlY2tCb3ggZXh0ZW5kcyBCYXNlIHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLkNoZWNrQm94JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J2NoZWNrYm94ZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2hlY2tib3hmaWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBjaGVja2VkXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZF86IGZhbHNlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7QXJyYXl9IGNscz1bJ25lby1jaGVja2JveGZpZWxkJ11cbiAgICAgICAgICovXG4gICAgICAgIGNsczogWyduZW8tY2hlY2tib3hmaWVsZCddLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7Qm9vbGVhbn0gaGlkZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlVmFsdWVMYWJlbF89ZmFsc2VcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVWYWx1ZUxhYmVsXzogdHJ1ZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlXz0nY2hlY2tib3gnXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGVfOiAnY2hlY2tib3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBsYWJlbFRleHRfPSdMYWJlbFRleHQnXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFRleHRfOiAnTGFiZWxUZXh0JyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGRlZmF1bHRzIHRvIHB4XG4gICAgICAgICAqIEBtZW1iZXIge051bWJlcnxTdHJpbmd9IGxhYmVsV2lkdGhfPTE1MFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWxXaWR0aF86IDE1MCxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gVGhlIG5hbWUgKGdyb3VwKSBvZiB0aGUgaW5wdXQgZG9tIG5vZGVcbiAgICAgICAgICovXG4gICAgICAgIG5hbWVfOiAnJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gdmFsdWVMYWJlbFRleHRfPSdWYWx1ZUxhYmVsJ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWVMYWJlbFRleHRfOiAnVmFsdWVMYWJlbCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtbGFiZWwnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LWlucHV0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC12YWx1ZS1sYWJlbCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICBzdXBlcihjb25maWcpO1xuXG4gICAgICAgIGxldCBtZSAgICAgICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgZG9tTGlzdGVuZXJzID0gTmVvLmNsb25lKG1lLmRvbUxpc3RlbmVycywgdHJ1ZSksXG4gICAgICAgICAgICB2ZG9tICAgICAgICAgPSBtZS52ZG9tLFxuICAgICAgICAgICAgaW5wdXRFbCAgICAgID0gdmRvbS5jblsxXSxcbiAgICAgICAgICAgIHZhbHVlTGFiZWwgICA9IHZkb20uY25bMl07XG5cbiAgICAgICAgaW5wdXRFbC5pZCA9IHZhbHVlTGFiZWwuZm9yID0gbWUuaWQgKyAnLWlucHV0JztcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgZG9tTGlzdGVuZXJzLnB1c2goe1xuICAgICAgICAgICAgY2hhbmdlOiB7XG4gICAgICAgICAgICAgICAgZm4gICA6IG1lLm9uSW5wdXRWYWx1ZUNoYW5nZSxcbiAgICAgICAgICAgICAgICBzY29wZTogbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWUuZG9tTGlzdGVuZXJzID0gZG9tTGlzdGVuZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtCb29sZWFufSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgbWUudmRvbSA9IHZkb207XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgIG9sZFZhbHVlIDogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgdmFsdWUgICAgOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlTGFiZWwodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMF0ucmVtb3ZlRG9tID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBoaWRlTGFiZWxWYWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRIaWRlVmFsdWVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsyXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGlucHV0VHlwZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRJbnB1dFR5cGUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0udHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxUZXh0IGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGxhYmVsV2lkdGggY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRMYWJlbFdpZHRoKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgbWUgICA9IHRoaXMsXG4gICAgICAgICAgICB2ZG9tID0gbWUudmRvbTtcblxuICAgICAgICBpZiAoIW1lLmhpZGVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblswXS53aWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgbWUudmRvbSA9IHZkb207XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIG5hbWUgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TmFtZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS5uYW1lID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSB2YWx1ZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICAgICAgdmRvbS5jblsxXS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmFmdGVyU2V0VmFsdWUodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlTGFiZWwgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0VmFsdWVMYWJlbFRleHQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZVZhbHVlTGFiZWwpIHtcbiAgICAgICAgICAgIHZkb20uY25bMl0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGNoZWNrcyBhIGNoZWNrYm94IGlucHV0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgbGV0IG1lICAgICAgPSB0aGlzLFxuICAgICAgICAgICAgY2hlY2tlZCA9IGRhdGEudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICAgICAgbWUuX2NoZWNrZWQgPSBjaGVja2VkOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgLy8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIGluIHN5bmMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgIG1lLnZkb20uY25bMV0uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIG1lLnZub2RlLmNoaWxkTm9kZXNbbWUuaGlkZUxhYmVsID8gMCA6IDFdLmF0dHJpYnV0ZXMuY2hlY2tlZCA9IGNoZWNrZWQgKyAnJztcblxuICAgICAgICBtZS5maXJlKCdjaGFuZ2UnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgb2xkVmFsdWUgOiAhY2hlY2tlZCxcbiAgICAgICAgICAgIHZhbHVlICAgIDogY2hlY2tlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbk5lby5hcHBseUNsYXNzQ29uZmlnKENoZWNrQm94KTtcblxuZXhwb3J0IHtDaGVja0JveCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgU2VsZWN0IGZyb20gJy4vU2VsZWN0Lm1qcyc7XG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLkNoaXBcbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLlNlbGVjdFxuICovXG5jbGFzcyBDaGlwIGV4dGVuZHMgU2VsZWN0IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuQ2hpcCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuQ2hpcCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IG50eXBlPSdjaGlwZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAnY2hpcGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdHxudWxsfSBsaXN0Q29uZmlnPXt1c2VDaGVja0JveGVzOiB0cnVlfVxuICAgICAgICAgKi9cbiAgICAgICAgbGlzdENvbmZpZzoge1xuICAgICAgICAgICAgdXNlQ2hlY2tCb3hlczogdHJ1ZVxuICAgICAgICB9XG4gICAgfX1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2hpcCk7XG5cbmV4cG9ydCB7Q2hpcCBhcyBkZWZhdWx0fTsiLCJpbXBvcnQgQ2hlY2tCb3ggICAgICAgICBmcm9tICcuL0NoZWNrQm94Lm1qcyc7XG5pbXBvcnQgQ29tcG9uZW50TWFuYWdlciBmcm9tICcuLi8uLi9tYW5hZ2VyL0NvbXBvbmVudC5tanMnXG5cbi8qKlxuICogQGNsYXNzIE5lby5mb3JtLmZpZWxkLlJhZGlvXG4gKiBAZXh0ZW5kcyBOZW8uZm9ybS5maWVsZC5DaGVja0JveFxuICovXG5jbGFzcyBSYWRpbyBleHRlbmRzIENoZWNrQm94IHtcbiAgICBzdGF0aWMgZ2V0Q29uZmlnKCkge3JldHVybiB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGNsYXNzTmFtZT0nTmVvLmZvcm0uZmllbGQuUmFkaW8nXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIGNsYXNzTmFtZTogJ05lby5mb3JtLmZpZWxkLlJhZGlvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gbnR5cGU9J3JhZGlvZmllbGQnXG4gICAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAgICovXG4gICAgICAgIG50eXBlOiAncmFkaW9maWVsZCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLXJhZGlvZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1yYWRpb2ZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGlucHV0VHlwZT0ncmFkaW8nXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dFR5cGU6ICdyYWRpbycsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtPYmplY3R9IF92ZG9tXG4gICAgICAgICAqL1xuICAgICAgICBfdmRvbToge1xuICAgICAgICAgICAgY246IFt7XG4gICAgICAgICAgICAgICAgdGFnOiAnbGFiZWwnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8tbGFiZWwnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLWlucHV0J11cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby12YWx1ZS1sYWJlbCddXG4gICAgICAgICAgICB9XVxuICAgICAgICB9XG4gICAgfX1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgY2hlY2tlZCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHN1cGVyLmFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSByYWRpb3Mgd2l0aCB0aGUgc2FtZSBuYW1lIHRvIGJlIHVuY2hlY2tlZFxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudW5jaGVja0dyb3VwSXRlbXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdHJpZ2dlcmVkIHdoZW4gYSB1c2VyIGNoZWNrcyBhIHJhZGlvIGlucHV0LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpIHtcbiAgICAgICAgc3VwZXIub25JbnB1dFZhbHVlQ2hhbmdlKGRhdGEpO1xuICAgICAgICB0aGlzLnVuY2hlY2tHcm91cEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmFkaW9zIGRvIG5vdCBmaXJlIGEgY2hhbmdlIGV2ZW50IGZvciBcInVuY2hlY2tcIiwgc28gd2UgbmVlZCB0byBpdGVyYXRlIG92ZXIgb3RoZXIgcmFkaW9zIHdpdGggdGhlIHNhbWUgbmFtZS5cbiAgICAgKi9cbiAgICB1bmNoZWNrR3JvdXBJdGVtcygpIHtcbiAgICAgICAgbGV0IG1lID0gdGhpcyxcbiAgICAgICAgICAgIHJhZGlvcztcblxuICAgICAgICAvLyBkaXNjdXNzOiB3ZSBjb3VsZCBsaW1pdCB0aGlzIHRvIHJhZGlvcyBpbnNpZGUgdGhlIHNhbWUgZm9ybSwgSUYgYSB0b3AgbGV2ZWwgZm9ybSBpcyB1c2VkXG4gICAgICAgIHJhZGlvcyA9IENvbXBvbmVudE1hbmFnZXIuZmluZCh7XG4gICAgICAgICAgICBudHlwZTogJ3JhZGlvZmllbGQnLFxuICAgICAgICAgICAgbmFtZSA6IG1lLm5hbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmFkaW9zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5pZCAhPT0gbWUuaWQgJiYgaXRlbS5fY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uX2NoZWNrZWQgPSBmYWxzZTsgLy8gc2lsZW50IHVwZGF0ZVxuXG4gICAgICAgICAgICAgICAgLy8ga2VlcCB0aGUgdmRvbSAmIHZub2RlIGluIHN5bmMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAgICAgICAgICAgICAgaXRlbS52ZG9tLmNuWzFdLmNoZWNrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLnZub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udm5vZGUuY2hpbGROb2Rlc1ttZS5oaWRlTGFiZWwgPyAwIDogMV0uYXR0cmlidXRlcy5jaGVja2VkID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZSxcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWUgOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoUmFkaW8pO1xuXG5leHBvcnQge1JhZGlvIGFzIGRlZmF1bHR9OyJdLCJzb3VyY2VSb290IjoiIn0=