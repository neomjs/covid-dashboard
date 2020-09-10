self["webpackChunk"](["vendors~chunks/examples-form-field-time-app"],{

/***/ "./node_modules/neo.mjs/examples/form/field/time/MainContainer.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/time/MainContainer.mjs ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainContainer; });
/* harmony import */ var _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/form/field/CheckBox.mjs */ "./node_modules/neo.mjs/src/form/field/CheckBox.mjs");
/* harmony import */ var _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ConfigurationViewport.mjs */ "./node_modules/neo.mjs/examples/ConfigurationViewport.mjs");
/* harmony import */ var _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/form/field/Number.mjs */ "./node_modules/neo.mjs/src/form/field/Number.mjs");
/* harmony import */ var _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/form/field/Radio.mjs */ "./node_modules/neo.mjs/src/form/field/Radio.mjs");
/* harmony import */ var _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/form/field/Text.mjs */ "./node_modules/neo.mjs/src/form/field/Text.mjs");
/* harmony import */ var _src_form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/form/field/Time.mjs */ "./node_modules/neo.mjs/src/form/field/Time.mjs");







/**
 * @class TestApp.MainContainer
 * @extends Neo.examples.ConfigurationViewport
 */
class MainContainer extends _ConfigurationViewport_mjs__WEBPACK_IMPORTED_MODULE_1__["default"] {
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
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.labelPosition === 'top',
            hideValueLabel: false,
            labelText     : 'labelPosition',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'top')},
            name          : 'labelPosition',
            style         : {marginTop: '10px'},
            valueLabelText: 'top'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.labelPosition === 'right',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'right')},
            name          : 'labelPosition',
            valueLabelText: 'right'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.labelPosition === 'bottom',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'bottom')},
            name          : 'labelPosition',
            valueLabelText: 'bottom'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.labelPosition === 'left',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'left')},
            name          : 'labelPosition',
            valueLabelText: 'left'
        }, {
            module        : _src_form_field_Radio_mjs__WEBPACK_IMPORTED_MODULE_3__["default"],
            checked       : me.exampleComponent.labelPosition === 'inline',
            hideValueLabel: false,
            labelText     : '',
            listeners     : {change: me.onRadioChange.bind(me, 'labelPosition', 'inline')},
            name          : 'labelPosition',
            valueLabelText: 'inline'
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            labelText: 'labelText',
            listeners: {change: me.onConfigChange.bind(me, 'labelText')},
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.labelText
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'labelWidth',
            listeners: {change: me.onConfigChange.bind(me, 'labelWidth')},
            maxValue : 200,
            minValue : 50,
            stepSize : 5,
            value    : me.exampleComponent.labelWidth
        }, {
            module   : _src_form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            labelText: 'maxValue',
            listeners: {change: me.onConfigChange.bind(me, 'maxValue')},
            value    : me.exampleComponent.maxValue
        }, {
            module   : _src_form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_5__["default"],
            labelText: 'minValue',
            listeners: {change: me.onConfigChange.bind(me, 'minValue')},
            value    : me.exampleComponent.minValue
        }, {
            module   : _src_form_field_Text_mjs__WEBPACK_IMPORTED_MODULE_4__["default"],
            clearable: true,
            labelText: 'placeholderText',
            listeners: {change: me.onConfigChange.bind(me, 'placeholderText')},
            value    : me.exampleComponent.placeholderText
        }, {
            module   : _src_form_field_CheckBox_mjs__WEBPACK_IMPORTED_MODULE_0__["default"],
            checked  : me.exampleComponent.required,
            labelText: 'required',
            listeners: {change: me.onConfigChange.bind(me, 'required')},
            style    : {marginTop: '10px'}
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'stepSize',
            listeners: {change: me.onConfigChange.bind(me, 'stepSize')},
            maxValue : 60 * 60 * 3, // 3h
            minValue : 1,
            stepSize : 1, // 1s
            style    : {marginTop: '10px'},
            value    : me.exampleComponent.stepSize
        }, {
            module   : _src_form_field_Number_mjs__WEBPACK_IMPORTED_MODULE_2__["default"],
            labelText: 'width',
            listeners: {change: me.onConfigChange.bind(me, 'width')},
            maxValue : 300,
            minValue : 50,
            stepSize : 5,
            value    : me.exampleComponent.width
        }];
    }

    createExampleComponent() {
        return Neo.create(_src_form_field_Time_mjs__WEBPACK_IMPORTED_MODULE_5__["default"], {
            autoRender   : false,
            clearable    : true,
            labelPosition: 'inline',
            labelText    : 'Pick a time',
            labelWidth   : 100,
            value        : '10:00',
            width        : 200
        });
    }
}

Neo.applyClassConfig(MainContainer);



/***/ }),

/***/ "./node_modules/neo.mjs/examples/form/field/time/app.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/neo.mjs/examples/form/field/time/app.mjs ***!
  \***************************************************************/
/*! exports provided: onStart */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStart", function() { return onStart; });
/* harmony import */ var _MainContainer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainContainer.mjs */ "./node_modules/neo.mjs/examples/form/field/time/MainContainer.mjs");


const onStart = () => Neo.app({
    appPath : 'examples/form/field/time/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmVvLm1qcy9leGFtcGxlcy9mb3JtL2ZpZWxkL3RpbWUvTWFpbkNvbnRhaW5lci5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvZXhhbXBsZXMvZm9ybS9maWVsZC90aW1lL2FwcC5tanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25lby5tanMvc3JjL2Zvcm0vZmllbGQvQ2hlY2tCb3gubWpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZW8ubWpzL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RTtBQUNMO0FBQ0c7QUFDRDtBQUNEO0FBQ0E7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtFQUFxQjtBQUNqRCx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0VBQVE7QUFDL0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsMkRBQTJEO0FBQ25GLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsdUJBQXVCLG9FQUFRO0FBQy9CO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQWdEO0FBQ3hFLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwwREFBMEQ7QUFDdkY7QUFDQSw2QkFBNkIsa0JBQWtCO0FBQy9DO0FBQ0EsU0FBUztBQUNULDRCQUE0QixpRUFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNERBQTREO0FBQ3pGO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsNEJBQTRCLGlFQUFLO0FBQ2pD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Q0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE9BQU87QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiw4REFBZ0I7QUFDakM7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLHNDQUFzQzs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSIsImZpbGUiOiJ2ZW5kb3JzfmNodW5rcy9leGFtcGxlcy1mb3JtLWZpZWxkLXRpbWUtYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrQm94ICAgICAgICAgICAgICBmcm9tICcuLi8uLi8uLi8uLi9zcmMvZm9ybS9maWVsZC9DaGVja0JveC5tanMnO1xuaW1wb3J0IENvbmZpZ3VyYXRpb25WaWV3cG9ydCBmcm9tICcuLi8uLi8uLi9Db25maWd1cmF0aW9uVmlld3BvcnQubWpzJztcbmltcG9ydCBOdW1iZXJGaWVsZCAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvTnVtYmVyLm1qcyc7XG5pbXBvcnQgUmFkaW8gICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1JhZGlvLm1qcyc7XG5pbXBvcnQgVGV4dEZpZWxkICAgICAgICAgICAgIGZyb20gJy4uLy4uLy4uLy4uL3NyYy9mb3JtL2ZpZWxkL1RleHQubWpzJztcbmltcG9ydCBUaW1lRmllbGQgICAgICAgICAgICAgZnJvbSAnLi4vLi4vLi4vLi4vc3JjL2Zvcm0vZmllbGQvVGltZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBUZXN0QXBwLk1haW5Db250YWluZXJcbiAqIEBleHRlbmRzIE5lby5leGFtcGxlcy5Db25maWd1cmF0aW9uVmlld3BvcnRcbiAqL1xuY2xhc3MgTWFpbkNvbnRhaW5lciBleHRlbmRzIENvbmZpZ3VyYXRpb25WaWV3cG9ydCB7XG4gICAgc3RhdGljIGdldENvbmZpZygpIHtyZXR1cm4ge1xuICAgICAgICBjbGFzc05hbWU6ICdUZXN0QXBwLk1haW5Db250YWluZXInLFxuICAgICAgICBudHlwZSAgICA6ICdtYWluLWNvbnRhaW5lcicsXG5cbiAgICAgICAgYXV0b01vdW50ICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIGNvbmZpZ0l0ZW1MYWJlbFdpZHRoOiAxNjAsXG4gICAgICAgIGxheW91dCAgICAgICAgICAgICAgOiB7bnR5cGU6ICdoYm94JywgYWxpZ246ICdzdHJldGNoJ31cbiAgICB9fVxuXG4gICAgY3JlYXRlQ29uZmlndXJhdGlvbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIGxldCBtZSA9IHRoaXM7XG5cbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBtb2R1bGUgICA6IENoZWNrQm94LFxuICAgICAgICAgICAgY2hlY2tlZCAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmNsZWFyYWJsZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2NsZWFyYWJsZScsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdjbGVhcmFibGUnKX1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBDaGVja0JveCxcbiAgICAgICAgICAgIGNoZWNrZWQgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5jbGVhclRvT3JpZ2luYWxWYWx1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2NsZWFyVG9PcmlnaW5hbFZhbHVlJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2NsZWFyVG9PcmlnaW5hbFZhbHVlJyl9LFxuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQuaGlkZUxhYmVsLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnaGlkZUxhYmVsJyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2hpZGVMYWJlbCcpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAndG9wJyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnbGFiZWxQb3NpdGlvbicsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICd0b3AnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgc3R5bGUgICAgICAgICA6IHttYXJnaW5Ub3A6ICcxMHB4J30sXG4gICAgICAgICAgICB2YWx1ZUxhYmVsVGV4dDogJ3RvcCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ3JpZ2h0JyxcbiAgICAgICAgICAgIGhpZGVWYWx1ZUxhYmVsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dCAgICAgOiAnJyxcbiAgICAgICAgICAgIGxpc3RlbmVycyAgICAgOiB7Y2hhbmdlOiBtZS5vblJhZGlvQ2hhbmdlLmJpbmQobWUsICdsYWJlbFBvc2l0aW9uJywgJ3JpZ2h0Jyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAncmlnaHQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgICAgICAgOiBSYWRpbyxcbiAgICAgICAgICAgIGNoZWNrZWQgICAgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LmxhYmVsUG9zaXRpb24gPT09ICdib3R0b20nLFxuICAgICAgICAgICAgaGlkZVZhbHVlTGFiZWw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgICA6ICcnLFxuICAgICAgICAgICAgbGlzdGVuZXJzICAgICA6IHtjaGFuZ2U6IG1lLm9uUmFkaW9DaGFuZ2UuYmluZChtZSwgJ2xhYmVsUG9zaXRpb24nLCAnYm90dG9tJyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnYm90dG9tJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICAgICAgIDogUmFkaW8sXG4gICAgICAgICAgICBjaGVja2VkICAgICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFBvc2l0aW9uID09PSAnbGVmdCcsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICdsZWZ0Jyl9LFxuICAgICAgICAgICAgbmFtZSAgICAgICAgICA6ICdsYWJlbFBvc2l0aW9uJyxcbiAgICAgICAgICAgIHZhbHVlTGFiZWxUZXh0OiAnbGVmdCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgICAgICA6IFJhZGlvLFxuICAgICAgICAgICAgY2hlY2tlZCAgICAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubGFiZWxQb3NpdGlvbiA9PT0gJ2lubGluZScsXG4gICAgICAgICAgICBoaWRlVmFsdWVMYWJlbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbFRleHQgICAgIDogJycsXG4gICAgICAgICAgICBsaXN0ZW5lcnMgICAgIDoge2NoYW5nZTogbWUub25SYWRpb0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxQb3NpdGlvbicsICdpbmxpbmUnKX0sXG4gICAgICAgICAgICBuYW1lICAgICAgICAgIDogJ2xhYmVsUG9zaXRpb24nLFxuICAgICAgICAgICAgdmFsdWVMYWJlbFRleHQ6ICdpbmxpbmUnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGV4dEZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbGFiZWxUZXh0JyxcbiAgICAgICAgICAgIGxpc3RlbmVyczoge2NoYW5nZTogbWUub25Db25maWdDaGFuZ2UuYmluZChtZSwgJ2xhYmVsVGV4dCcpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFRleHRcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBOdW1iZXJGaWVsZCxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ2xhYmVsV2lkdGgnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbGFiZWxXaWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMjAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5sYWJlbFdpZHRoXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogVGltZUZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnbWF4VmFsdWUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnbWF4VmFsdWUnKX0sXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQubWF4VmFsdWVcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbW9kdWxlICAgOiBUaW1lRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdtaW5WYWx1ZScsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdtaW5WYWx1ZScpfSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC5taW5WYWx1ZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IFRleHRGaWVsZCxcbiAgICAgICAgICAgIGNsZWFyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVGV4dDogJ3BsYWNlaG9sZGVyVGV4dCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdwbGFjZWhvbGRlclRleHQnKX0sXG4gICAgICAgICAgICB2YWx1ZSAgICA6IG1lLmV4YW1wbGVDb21wb25lbnQucGxhY2Vob2xkZXJUZXh0XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogQ2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkICA6IG1lLmV4YW1wbGVDb21wb25lbnQucmVxdWlyZWQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICdyZXF1aXJlZCcpfSxcbiAgICAgICAgICAgIHN0eWxlICAgIDoge21hcmdpblRvcDogJzEwcHgnfVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBtb2R1bGUgICA6IE51bWJlckZpZWxkLFxuICAgICAgICAgICAgbGFiZWxUZXh0OiAnc3RlcFNpemUnLFxuICAgICAgICAgICAgbGlzdGVuZXJzOiB7Y2hhbmdlOiBtZS5vbkNvbmZpZ0NoYW5nZS5iaW5kKG1lLCAnc3RlcFNpemUnKX0sXG4gICAgICAgICAgICBtYXhWYWx1ZSA6IDYwICogNjAgKiAzLCAvLyAzaFxuICAgICAgICAgICAgbWluVmFsdWUgOiAxLFxuICAgICAgICAgICAgc3RlcFNpemUgOiAxLCAvLyAxc1xuICAgICAgICAgICAgc3R5bGUgICAgOiB7bWFyZ2luVG9wOiAnMTBweCd9LFxuICAgICAgICAgICAgdmFsdWUgICAgOiBtZS5leGFtcGxlQ29tcG9uZW50LnN0ZXBTaXplXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG1vZHVsZSAgIDogTnVtYmVyRmllbGQsXG4gICAgICAgICAgICBsYWJlbFRleHQ6ICd3aWR0aCcsXG4gICAgICAgICAgICBsaXN0ZW5lcnM6IHtjaGFuZ2U6IG1lLm9uQ29uZmlnQ2hhbmdlLmJpbmQobWUsICd3aWR0aCcpfSxcbiAgICAgICAgICAgIG1heFZhbHVlIDogMzAwLFxuICAgICAgICAgICAgbWluVmFsdWUgOiA1MCxcbiAgICAgICAgICAgIHN0ZXBTaXplIDogNSxcbiAgICAgICAgICAgIHZhbHVlICAgIDogbWUuZXhhbXBsZUNvbXBvbmVudC53aWR0aFxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeGFtcGxlQ29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gTmVvLmNyZWF0ZShUaW1lRmllbGQsIHtcbiAgICAgICAgICAgIGF1dG9SZW5kZXIgICA6IGZhbHNlLFxuICAgICAgICAgICAgY2xlYXJhYmxlICAgIDogdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsUG9zaXRpb246ICdpbmxpbmUnLFxuICAgICAgICAgICAgbGFiZWxUZXh0ICAgIDogJ1BpY2sgYSB0aW1lJyxcbiAgICAgICAgICAgIGxhYmVsV2lkdGggICA6IDEwMCxcbiAgICAgICAgICAgIHZhbHVlICAgICAgICA6ICcxMDowMCcsXG4gICAgICAgICAgICB3aWR0aCAgICAgICAgOiAyMDBcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhNYWluQ29udGFpbmVyKTtcblxuZXhwb3J0IHtNYWluQ29udGFpbmVyIGFzIGRlZmF1bHR9OyIsImltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4vTWFpbkNvbnRhaW5lci5tanMnO1xuXG5jb25zdCBvblN0YXJ0ID0gKCkgPT4gTmVvLmFwcCh7XG4gICAgYXBwUGF0aCA6ICdleGFtcGxlcy9mb3JtL2ZpZWxkL3RpbWUvJyxcbiAgICBtYWluVmlldzogTWFpbkNvbnRhaW5lcixcbiAgICBuYW1lICAgIDogJ1Rlc3RBcHAnXG59KTtcblxuZXhwb3J0IHtvblN0YXJ0IGFzIG9uU3RhcnR9OyIsImltcG9ydCBCYXNlIGZyb20gJy4vQmFzZS5tanMnO1xuXG4vKipcbiAqIEBjbGFzcyBOZW8uZm9ybS5maWVsZC5DaGVja0JveFxuICogQGV4dGVuZHMgTmVvLmZvcm0uZmllbGQuQmFzZVxuICovXG5jbGFzcyBDaGVja0JveCBleHRlbmRzIEJhc2Uge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5DaGVja0JveCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuQ2hlY2tCb3gnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0nY2hlY2tib3hmaWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdjaGVja2JveGZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGNoZWNrZWRfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja2VkXzogZmFsc2UsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtBcnJheX0gY2xzPVsnbmVvLWNoZWNrYm94ZmllbGQnXVxuICAgICAgICAgKi9cbiAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveGZpZWxkJ10sXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtCb29sZWFufSBoaWRlTGFiZWxfPWZhbHNlXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWxfOiBmYWxzZSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0Jvb2xlYW59IGhpZGVWYWx1ZUxhYmVsXz1mYWxzZVxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZVZhbHVlTGFiZWxfOiB0cnVlLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBpbnB1dFR5cGVfPSdjaGVja2JveCdcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZV86ICdjaGVja2JveCcsXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAbWVtYmVyIHtTdHJpbmd9IGxhYmVsVGV4dF89J0xhYmVsVGV4dCdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsVGV4dF86ICdMYWJlbFRleHQnLFxuICAgICAgICAvKipcbiAgICAgICAgICogZGVmYXVsdHMgdG8gcHhcbiAgICAgICAgICogQG1lbWJlciB7TnVtYmVyfFN0cmluZ30gbGFiZWxXaWR0aF89MTUwXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbFdpZHRoXzogMTUwLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBUaGUgbmFtZSAoZ3JvdXApIG9mIHRoZSBpbnB1dCBkb20gbm9kZVxuICAgICAgICAgKi9cbiAgICAgICAgbmFtZV86ICcnLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSB2YWx1ZUxhYmVsVGV4dF89J1ZhbHVlTGFiZWwnXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZUxhYmVsVGV4dF86ICdWYWx1ZUxhYmVsJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1jaGVja2JveC1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tY2hlY2tib3gtaW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLWNoZWNrYm94LXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICAgICAgbGV0IG1lICAgICAgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBkb21MaXN0ZW5lcnMgPSBOZW8uY2xvbmUobWUuZG9tTGlzdGVuZXJzLCB0cnVlKSxcbiAgICAgICAgICAgIHZkb20gICAgICAgICA9IG1lLnZkb20sXG4gICAgICAgICAgICBpbnB1dEVsICAgICAgPSB2ZG9tLmNuWzFdLFxuICAgICAgICAgICAgdmFsdWVMYWJlbCAgID0gdmRvbS5jblsyXTtcblxuICAgICAgICBpbnB1dEVsLmlkID0gdmFsdWVMYWJlbC5mb3IgPSBtZS5pZCArICctaW5wdXQnO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBkb21MaXN0ZW5lcnMucHVzaCh7XG4gICAgICAgICAgICBjaGFuZ2U6IHtcbiAgICAgICAgICAgICAgICBmbiAgIDogbWUub25JbnB1dFZhbHVlQ2hhbmdlLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBtZS5kb21MaXN0ZW5lcnMgPSBkb21MaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IHZhbHVlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldENoZWNrZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIHZkb20uY25bMV0uY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICBtZS52ZG9tID0gdmRvbTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbWUuZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICB2YWx1ZSAgICA6IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaGlkZUxhYmVsIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVMYWJlbCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblswXS5yZW1vdmVEb20gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIGhpZGVMYWJlbFZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldEhpZGVWYWx1ZUxhYmVsKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzJdLnJlbW92ZURvbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgaW5wdXRUeXBlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldElucHV0VHlwZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IHZkb20gPSB0aGlzLnZkb207XG5cbiAgICAgICAgdmRvbS5jblsxXS50eXBlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmRvbSA9IHZkb207XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBsYWJlbFRleHQgY29uZmlnIGdvdCBjaGFuZ2VkXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0TGFiZWxUZXh0KHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzBdLmlubmVySFRNTCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbGFiZWxXaWR0aCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldExhYmVsV2lkdGgodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGxldCBtZSAgID0gdGhpcyxcbiAgICAgICAgICAgIHZkb20gPSBtZS52ZG9tO1xuXG4gICAgICAgIGlmICghbWUuaGlkZUxhYmVsKSB7XG4gICAgICAgICAgICB2ZG9tLmNuWzBdLndpZHRoID0gdmFsdWU7XG4gICAgICAgICAgICBtZS52ZG9tID0gdmRvbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgbmFtZSBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXROYW1lKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBsZXQgdmRvbSA9IHRoaXMudmRvbTtcblxuICAgICAgICB2ZG9tLmNuWzFdLm5hbWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52ZG9tID0gdmRvbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyZWQgYWZ0ZXIgdGhlIHZhbHVlIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBvbGRWYWx1ZVxuICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgKi9cbiAgICBhZnRlclNldFZhbHVlKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tO1xuXG4gICAgICAgICAgICB2ZG9tLmNuWzFdLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRWYWx1ZSh2YWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJlZCBhZnRlciB0aGUgdmFsdWVMYWJlbCBjb25maWcgZ290IGNoYW5nZWRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gb2xkVmFsdWVcbiAgICAgKiBAcHJvdGVjdGVkXG4gICAgICovXG4gICAgYWZ0ZXJTZXRWYWx1ZUxhYmVsVGV4dCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgbGV0IG1lICAgPSB0aGlzLFxuICAgICAgICAgICAgdmRvbSA9IG1lLnZkb207XG5cbiAgICAgICAgaWYgKCFtZS5oaWRlVmFsdWVMYWJlbCkge1xuICAgICAgICAgICAgdmRvbS5jblsyXS5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgICAgIG1lLnZkb20gPSB2ZG9tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgY2hlY2tib3ggaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBsZXQgbWUgICAgICA9IHRoaXMsXG4gICAgICAgICAgICBjaGVja2VkID0gZGF0YS50YXJnZXQuY2hlY2tlZDtcblxuICAgICAgICBtZS5fY2hlY2tlZCA9IGNoZWNrZWQ7IC8vIHNpbGVudCB1cGRhdGVcblxuICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgbWUudmRvbS5jblsxXS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgbWUudm5vZGUuY2hpbGROb2Rlc1ttZS5oaWRlTGFiZWwgPyAwIDogMV0uYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZCArICcnO1xuXG4gICAgICAgIG1lLmZpcmUoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogbWUsXG4gICAgICAgICAgICBvbGRWYWx1ZSA6ICFjaGVja2VkLFxuICAgICAgICAgICAgdmFsdWUgICAgOiBjaGVja2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuTmVvLmFwcGx5Q2xhc3NDb25maWcoQ2hlY2tCb3gpO1xuXG5leHBvcnQge0NoZWNrQm94IGFzIGRlZmF1bHR9OyIsImltcG9ydCBDaGVja0JveCAgICAgICAgIGZyb20gJy4vQ2hlY2tCb3gubWpzJztcbmltcG9ydCBDb21wb25lbnRNYW5hZ2VyIGZyb20gJy4uLy4uL21hbmFnZXIvQ29tcG9uZW50Lm1qcydcblxuLyoqXG4gKiBAY2xhc3MgTmVvLmZvcm0uZmllbGQuUmFkaW9cbiAqIEBleHRlbmRzIE5lby5mb3JtLmZpZWxkLkNoZWNrQm94XG4gKi9cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQ2hlY2tCb3gge1xuICAgIHN0YXRpYyBnZXRDb25maWcoKSB7cmV0dXJuIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gY2xhc3NOYW1lPSdOZW8uZm9ybS5maWVsZC5SYWRpbydcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnTmVvLmZvcm0uZmllbGQuUmFkaW8nLFxuICAgICAgICAvKipcbiAgICAgICAgICogQG1lbWJlciB7U3RyaW5nfSBudHlwZT0ncmFkaW9maWVsZCdcbiAgICAgICAgICogQHByb3RlY3RlZFxuICAgICAgICAgKi9cbiAgICAgICAgbnR5cGU6ICdyYWRpb2ZpZWxkJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge0FycmF5fSBjbHM9WyduZW8tcmFkaW9maWVsZCddXG4gICAgICAgICAqL1xuICAgICAgICBjbHM6IFsnbmVvLXJhZGlvZmllbGQnXSxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge1N0cmluZ30gaW5wdXRUeXBlPSdyYWRpbydcbiAgICAgICAgICovXG4gICAgICAgIGlucHV0VHlwZTogJ3JhZGlvJyxcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBtZW1iZXIge09iamVjdH0gX3Zkb21cbiAgICAgICAgICovXG4gICAgICAgIF92ZG9tOiB7XG4gICAgICAgICAgICBjbjogW3tcbiAgICAgICAgICAgICAgICB0YWc6ICdsYWJlbCcsXG4gICAgICAgICAgICAgICAgY2xzOiBbJ25lby1yYWRpby1sYWJlbCddXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgdGFnOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgIGNsczogWyduZW8tcmFkaW8taW5wdXQnXVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRhZzogJ2xhYmVsJyxcbiAgICAgICAgICAgICAgICBjbHM6IFsnbmVvLXJhZGlvLXZhbHVlLWxhYmVsJ11cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICB9fVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcmVkIGFmdGVyIHRoZSBjaGVja2VkIGNvbmZpZyBnb3QgY2hhbmdlZFxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWVcbiAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IG9sZFZhbHVlXG4gICAgICogQHByb3RlY3RlZFxuICAgICAqL1xuICAgIGFmdGVyU2V0Q2hlY2tlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgc3VwZXIuYWZ0ZXJTZXRDaGVja2VkKHZhbHVlLCBvbGRWYWx1ZSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIHJhZGlvcyB3aXRoIHRoZSBzYW1lIG5hbWUgdG8gYmUgdW5jaGVja2VkXG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51bmNoZWNrR3JvdXBJdGVtcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0cmlnZ2VyZWQgd2hlbiBhIHVzZXIgY2hlY2tzIGEgcmFkaW8gaW5wdXQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoZGF0YSkge1xuICAgICAgICBzdXBlci5vbklucHV0VmFsdWVDaGFuZ2UoZGF0YSk7XG4gICAgICAgIHRoaXMudW5jaGVja0dyb3VwSXRlbXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSYWRpb3MgZG8gbm90IGZpcmUgYSBjaGFuZ2UgZXZlbnQgZm9yIFwidW5jaGVja1wiLCBzbyB3ZSBuZWVkIHRvIGl0ZXJhdGUgb3ZlciBvdGhlciByYWRpb3Mgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgICAqL1xuICAgIHVuY2hlY2tHcm91cEl0ZW1zKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzLFxuICAgICAgICAgICAgcmFkaW9zO1xuXG4gICAgICAgIC8vIGRpc2N1c3M6IHdlIGNvdWxkIGxpbWl0IHRoaXMgdG8gcmFkaW9zIGluc2lkZSB0aGUgc2FtZSBmb3JtLCBJRiBhIHRvcCBsZXZlbCBmb3JtIGlzIHVzZWRcbiAgICAgICAgcmFkaW9zID0gQ29tcG9uZW50TWFuYWdlci5maW5kKHtcbiAgICAgICAgICAgIG50eXBlOiAncmFkaW9maWVsZCcsXG4gICAgICAgICAgICBuYW1lIDogbWUubmFtZVxuICAgICAgICB9KTtcblxuICAgICAgICByYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmlkICE9PSBtZS5pZCAmJiBpdGVtLl9jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5fY2hlY2tlZCA9IGZhbHNlOyAvLyBzaWxlbnQgdXBkYXRlXG5cbiAgICAgICAgICAgICAgICAvLyBrZWVwIHRoZSB2ZG9tICYgdm5vZGUgaW4gc3luYyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICAgICAgICAgICAgICBpdGVtLnZkb20uY25bMV0uY2hlY2tlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52bm9kZS5jaGlsZE5vZGVzW21lLmhpZGVMYWJlbCA/IDAgOiAxXS5hdHRyaWJ1dGVzLmNoZWNrZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0uZmlyZSgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG1lLFxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZSA6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlICAgIDogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5OZW8uYXBwbHlDbGFzc0NvbmZpZyhSYWRpbyk7XG5cbmV4cG9ydCB7UmFkaW8gYXMgZGVmYXVsdH07Il0sInNvdXJjZVJvb3QiOiIifQ==